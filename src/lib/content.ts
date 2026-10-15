import { COURSES, type DayDef } from "@/data/content";

export type ItemKind = "Q" | "T" | "S" | "E" | "H" | "F";
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
  week: number;
  day: number;
}
export type ContentMix = "mix" | "questions" | "translations";
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
  mix === "mix" ? true : mix === "translations" ? i.kind === "T" : i.kind !== "T";

/**
 * Tiers: selected day → earlier days of same week (latest first) → earlier weeks (latest first).
 * Never later days/weeks. No repeats within a game; `avoid` ids are used only as a last resort.
 */
export function drawItems(sel: Selection, count: number, mix: ContentMix, avoid: string[] = []) {
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
  const all = tiers.map((t) => t.filter((i) => matchesMix(i, mix)));
  // Preference order: fresh items by tier (selected day first), then already-seen items.
  const ordered = [
    ...all.flatMap((t) => shuffle(t.filter((i) => !avoidSet.has(i.id)))),
    ...all.flatMap((t) => shuffle(t.filter((i) => avoidSet.has(i.id)))),
  ];
  const typeOf = (i: ContentItem) => (i.kind === "S" || i.kind === "E" ? "P" : i.kind);
  const picked: ContentItem[] = [];
  if (mix === "translations") picked.push(...ordered.slice(0, count));
  else {
    // Balanced quotas: questions & translations lead, every other dynamic shows up.
    const h = count >= 4 ? Math.min(2, Math.max(1, Math.round(count * 0.12))) : 1;
    const f = Math.max(count >= 5 ? 2 : 1, Math.round(count * 0.18));
    const pic = Math.max(1, Math.round(count * 0.14));
    const rest = Math.max(0, count - h - f - pic);
    const quota: Record<string, number> = mix === "mix"
      ? { H: h, F: f, P: pic, T: Math.floor(rest * 0.45), Q: rest - Math.floor(rest * 0.45) }
      : { H: h, F: f, P: pic, Q: rest };
    const ids = new Set<string>();
    for (const [t, n] of Object.entries(quota)) {
      for (const i of ordered) {
        if (picked.filter((x) => typeOf(x) === t).length >= n) break;
        if (typeOf(i) === t && !ids.has(i.id)) { picked.push(i); ids.add(i.id); }
      }
    }
    // Fill any shortfall (never more than 2 hidden pictures).
    for (const i of ordered) {
      if (picked.length >= count) break;
      if (ids.has(i.id)) continue;
      if (i.kind === "H" && picked.filter((x) => x.kind === "H").length >= 2) continue;
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
