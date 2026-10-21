import { COURSES, type DayDef } from "@/data/content";

export type ItemKind = "Q" | "T" | "S" | "E" | "H" | "F" | "M";
export interface ShapeSpec { shape: string; count: number; color?: string | undefined }
export interface ContentItem {
  id: string;
  kind: ItemKind;
  prompt: string; // question, or Spanish sentence for T
  answers: string[];
  shapes?: ShapeSpec[];
  emoji?: string;
  hidden?: boolean;
  options?: string[];
  blank?: string;
  /** M items: the sentence split into plain/wrong parts (wrong = bracketed words). */
  parts?: { text: string; wrong: boolean }[];
  week: number;
  day: number;
}
export type ContentMix = "mix" | "questions" | "translations" | "wh";
export interface Selection { course: string; level: number; week: number; day: number }

export const SHAPE_COLORS = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function parseShapes(s: string): ShapeSpec[] {
  return s.split(",").map((part) => {
    const [name = "", n] = part.trim().split(":");
    const words = name.trim().split(/\s+/);
    const color = SHAPE_COLORS.includes(words[0]!) && words.length > 1 ? words.shift()! : undefined;
    return { shape: words.join(" "), count: Number(n) || 1, color };
  });
}

function parseDay(d: DayDef, week: number): ContentItem[] {
  return d.lines.map((line, i) => {
    const f = line.split(" || ") as [string, string, string, string];
    const kind = f[0] as ItemKind;
    const id = `w${week}d${d.day}-${i}`;
    const base = { id, kind, week, day: d.day };
    if (kind === "Q") return { ...base, prompt: f[1], answers: f[2].split(" / ") };
    if (kind === "T") return { ...base, prompt: f[1], answers: [f[2]] };
    if (kind === "F") return { ...base, prompt: f[1], answers: [f[1].replace("____", f[2])], blank: f[2], options: shuffle([f[2], ...f[3].split(" / ")]).slice(0, 3) };
    if (kind === "H") {
      const isShape = /[a-z]/i.test(f[1]);
      return { ...base, prompt: f[2], answers: f[3].split(" / "), hidden: true, ...(isShape ? { shapes: parseShapes(f[1]) } : { emoji: f[1] }) };
    }
    if (kind === "S") return { ...base, prompt: f[2], answers: f[3].split(" / "), shapes: parseShapes(f[1]) };
    return { ...base, prompt: f[2], answers: f[3].split(" / "), emoji: f[1] };
  });
}

export const getCourse = (name: string) => COURSES.find((c) => c.name === name) ?? COURSES[0]!;
export const getLevel = (course: string, level: number) => {
  const c = getCourse(course);
  return c.levels.find((l) => l.level === level) ?? c.levels[0]!;
};
export function getDay(sel: Selection) {
  const lv = getLevel(sel.course, sel.level);
  const wk = lv.weeks.find((w) => w.week === sel.week) ?? lv.weeks[0]!;
  return { week: wk, day: wk.days.find((d) => d.day === sel.day) ?? wk.days[0]! };
}
export const isReviewDay = (sel: Selection) => getDay(sel).day.lines.length === 0;

/** Normalize a stored selection to something that exists in the data. */
export function normalizeSelection(sel: Selection): Selection {
  const c = getCourse(sel.course);
  const lv = getLevel(c.name, sel.level);
  const { week, day } = getDay({ ...sel, course: c.name, level: lv.level });
  return { course: c.name, level: lv.level, week: week.week, day: day.day };
}

const matchesMix = (i: ContentItem, mix: ContentMix) =>
  mix === "mix" ? true : mix === "translations" ? i.kind === "T" : mix === "wh" ? i.kind === "Q" : i.kind !== "T";

/**
 * Learner-facing identity of a card: type + normalized prompt + visual payload.
 * Alternate model answers or different distractors do not make a new card;
 * distinct images under the same H instruction remain distinct.
 */
const cardKey = (i: ContentItem) =>
  [i.kind, i.prompt.toLowerCase().replace(/\s+/g, " ").trim(), i.emoji ?? "",
    (i.shapes ?? []).map((s) => `${s.color ?? ""}:${s.shape}:${s.count}`).join(",")].join("|");

/** Drop duplicate cards, keeping the first (freshest) occurrence. */
function dedupe(items: ContentItem[]): ContentItem[] {
  const seen = new Set<string>();
  return items.filter((i) => {
    const k = cardKey(i);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/**
 * Tiers: selected day → earlier days of same week (latest first) → earlier weeks (latest first).
 * Never later days/weeks. No repeats within a game; `avoid` ids are used only as a last resort.
 */
export function drawItems(sel: Selection, count: number, mix: ContentMix, avoid: string[] = [], maxHidden = 3) {
  const lv = getLevel(sel.course, sel.level);
  const tiers: ContentItem[][] = [];
  const weeks = [...lv.weeks].filter((w) => w.week <= sel.week).sort((a, b) => b.week - a.week);
  for (const w of weeks) {
    const days = [...w.days]
      .filter((d) => w.week < sel.week || d.day <= sel.day)
      .sort((a, b) => b.day - a.day);
    if (w.week === sel.week) for (const d of days) tiers.push(parseDay(d, w.week));
    else tiers.push(days.flatMap((d) => parseDay(d, w.week)));
  }
  const avoidSet = new Set(avoid);
  const tier0 = new Set((tiers[0] ?? []).map((i) => i.id));
  // Hidden cards belong to this week's vocabulary, not unrelated review tiers.
  const all = tiers.map((t) => t.filter((i) => matchesMix(i, mix) && (i.kind !== "H" || i.week === sel.week)));
  // Preference order: fresh items by tier (selected day first), then already-seen items.
  const ordered = [
    ...all.flatMap((t) => shuffle(t.filter((i) => !avoidSet.has(i.id)))),
    ...all.flatMap((t) => shuffle(t.filter((i) => avoidSet.has(i.id)))),
  ];
  const typeOf = (i: ContentItem) => (i.kind === "S" || i.kind === "E" ? "P" : i.kind);
  const picked: ContentItem[] = [];
  if (mix === "translations" || mix === "wh") picked.push(...ordered.slice(0, count));
  else {
    // Questions & translations take half the round (Q slightly ahead for short
    // rounds). The other half is split AT RANDOM between hidden pictures, blanks
    // and figure pictures, so every game feels a little different.
    const quota: Record<string, number> = { H: 0, F: 0, P: 0, Q: 0, T: 0 };
    if (mix === "mix") {
      const lang = Math.ceil(count / 2);
      quota["T"] = Math.floor(lang / 2);
      quota["Q"] = lang - (quota["T"] ?? 0);
      const rest = Math.max(0, count - lang);
      const order = shuffle(["H", "F", "P"]);
      for (let i = 0; i < rest; i++) quota[order[i % 3]!] = (quota[order[i % 3]!] ?? 0) + 1;
      // Never more than maxHidden hidden pictures; extras move to blanks or figures.
      while ((quota["H"] ?? 0) > maxHidden) {
        quota["H"] = (quota["H"] ?? 0) - 1;
        const to = order.find((k) => k !== "H")!;
        quota[to] = (quota[to] ?? 0) + 1;
      }
    } else {
      const h = Math.min(3, Math.max(1, Math.round(count * 0.18)));
      const f = Math.max(1, Math.round(count * 0.18));
      const pic = Math.max(1, Math.round(count * 0.12));
      quota["H"] = h; quota["F"] = f; quota["P"] = pic;
      quota["Q"] = Math.max(0, count - h - f - pic);
    }
    const ids = new Set<string>();
    for (const [t, n] of Object.entries(quota)) {
      for (const i of ordered) {
        if (picked.filter((x) => typeOf(x) === t).length >= n) break;
        if (typeOf(i) === t && !ids.has(i.id)) { picked.push(i); ids.add(i.id); }
      }
    }
    // Fill any shortfall (never more than maxHidden hidden pictures).
    for (const i of ordered) {
      if (picked.length >= count) break;
      if (ids.has(i.id)) continue;
      if (i.kind === "H" && picked.filter((x) => x.kind === "H").length >= maxHidden) continue;
      picked.push(i); ids.add(i.id);
    }
  }
  const review = picked.some((i) => !tier0.has(i.id));
  // Interleave so the same dynamic never repeats back-to-back when avoidable.
  const buckets = new Map<string, ContentItem[]>();
  for (const i of shuffle(picked)) buckets.set(typeOf(i), [...(buckets.get(typeOf(i)) ?? []), i]);
  const out: ContentItem[] = [];
  let last = "";
  while (out.length < picked.length) {
    const avail = shuffle([...buckets.entries()].filter(([, b]) => b.length));
    const diff = avail.filter(([t]) => t !== last).sort((a, b) => b[1].length - a[1].length);
    const [t, b] = diff[0] ?? avail[0]!;
    out.push(b.shift()!);
    last = t;
  }
  // At least one hidden picture within the first three cards.
  const hi = out.findIndex((i) => i.kind === "H");
  if (hi > 2) { const t = 1 + Math.floor(Math.random() * Math.min(2, out.length - 1)); [out[t], out[hi]] = [out[hi]!, out[t]!]; }
  return { items: out, review };
}

/** Hot Chair card modes (coach-chosen for this game only). Hidden pictures never appear. */
export type ChairMode = "mix" | "translations" | "wh" | "pictures";
const WH_START = /^\s*(what|where|when|who|whose|whom|why|how|which)\b/i;
const chairMatch = (i: ContentItem, mode: ChairMode) =>
  i.kind === "H" ? false
  : mode === "translations" ? i.kind === "T"
  : mode === "wh" ? i.kind === "Q" && WH_START.test(i.prompt)
  : mode === "pictures" ? i.kind === "S" || i.kind === "E"
  : true;

/**
 * Every eligible card for Hot Chair, freshest tier first (selected day → earlier days → earlier weeks,
 * never later). Mixed mode rotates types so no two consecutive cards share a type when avoidable.
 */
export function chairDeck(sel: Selection, mode: ChairMode) {
  const lv = getLevel(sel.course, sel.level);
  const tiers: ContentItem[][] = [];
  const weeks = [...lv.weeks].filter((w) => w.week <= sel.week).sort((a, b) => b.week - a.week);
  for (const w of weeks) {
    const days = [...w.days].filter((d) => w.week < sel.week || d.day <= sel.day).sort((a, b) => b.day - a.day);
    if (w.week === sel.week) for (const d of days) tiers.push(parseDay(d, w.week));
    else tiers.push(days.flatMap((d) => parseDay(d, w.week)));
  }
  const ordered = tiers.flatMap((t) => shuffle(t.filter((i) => chairMatch(i, mode))));
  const typeOf = (i: ContentItem) => (i.kind === "S" || i.kind === "E" ? "P" : i.kind);
  if (mode !== "mix") return ordered;
  const rest = [...ordered];
  const out: ContentItem[] = [];
  while (rest.length) {
    const last = out.length ? typeOf(out[out.length - 1]!) : "";
    const k = rest.findIndex((i) => typeOf(i) !== last);
    out.push(rest.splice(k < 0 ? 0 : k, 1)[0]!);
  }
  return out;
}

/** Parse Detective Sniff "find the mistake" lines (M || [wrong] sentence || a / b* / c || corrected). */
function parseMistakes(d: DayDef, week: number, level: number): ContentItem[] {
  return (d.mistakes ?? []).map((line, i) => {
    const [, sentence = "", opts = "", fixed = ""] = line.split(" || ");
    const parts = sentence.split(/(\[[^\]]+\])/).filter(Boolean).map((t) => (t.startsWith("[") ? { text: t.slice(1, -1), wrong: true } : { text: t, wrong: false }));
    const raw = opts.split(" / ");
    const options = raw.map((o) => o.replace(/\*$/, "").trim());
    const blank = options[raw.findIndex((o) => o.trim().endsWith("*"))] ?? options[0]!;
    return { id: `l${level}w${week}d${d.day}-m${i}`, kind: "M" as const, prompt: parts.map((x) => x.text).join(""), parts, options, blank, answers: [fixed], week, day: d.day };
  });
}

/** Mistake cards for Detective Sniff: selected day → earlier days → earlier weeks → earlier levels.
 *  Only when that still falls short, this level's upcoming days (nearest first) top the round up. `avoid` (last round) goes last. */
export function drawMistakes(sel: Selection, count: number, avoid: string[] = []) {
  const lv = getLevel(sel.course, sel.level);
  const tiers: ContentItem[][] = [];
  const weeks = [...lv.weeks].filter((w) => w.week <= sel.week).sort((a, b) => b.week - a.week);
  for (const w of weeks) {
    const days = [...w.days].filter((d) => w.week < sel.week || d.day <= sel.day).sort((a, b) => b.day - a.day);
    if (w.week === sel.week) for (const d of days) tiers.push(parseMistakes(d, w.week, sel.level));
    else tiers.push(days.flatMap((d) => parseMistakes(d, w.week, sel.level)));
  }
  for (const prev of [...getCourse(sel.course).levels].filter((l) => l.level < sel.level).sort((a, b) => b.level - a.level)) {
    tiers.push([...prev.weeks].sort((a, b) => b.week - a.week).flatMap((w) => w.days.flatMap((d) => parseMistakes(d, w.week, prev.level))));
  }
  for (const w of [...lv.weeks].sort((a, b) => a.week - b.week)) {
    const days = [...w.days].filter((d) => w.week > sel.week || d.day > sel.day).sort((a, b) => a.day - b.day);
    if (days.length) tiers.push(days.flatMap((d) => parseMistakes(d, w.week, sel.level)));
  }
  const av = new Set(avoid);
  const ordered = [...tiers.flatMap((t) => shuffle(t.filter((i) => !av.has(i.id)))), ...tiers.flatMap((t) => shuffle(t.filter((i) => av.has(i.id))))];
  const picked = ordered.slice(0, count);
  const first = new Set((tiers[0] ?? []).map((i) => i.id));
  return { items: shuffle(picked), review: picked.some((i) => !first.has(i.id)) };
}
