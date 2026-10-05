import { COURSES, type DayDef } from "@/data/content";

export type ItemKind = "Q" | "T" | "S" | "E";
export interface ShapeSpec { shape: string; count: number; color?: string | undefined }
export interface ContentItem {
  id: string;
  kind: ItemKind;
  prompt: string; // question, or Spanish sentence for T
  answers: string[];
  shapes?: ShapeSpec[];
  emoji?: string;
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
    const color = SHAPE_COLORS.includes(words[0]) && words.length > 1 ? words.shift()! : undefined;
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
    if (kind === "S") return { ...base, prompt: f[2], answers: f[3].split(" / "), shapes: parseShapes(f[1]) };
    return { ...base, prompt: f[2], answers: f[3].split(" / "), emoji: f[1] };
  });
}

export const getCourse = (name: string) => COURSES.find((c) => c.name === name) ?? COURSES[0];
export const getLevel = (course: string, level: number) => {
  const c = getCourse(course);
  return c.levels.find((l) => l.level === level) ?? c.levels[0];
};
export function getDay(sel: Selection) {
  const lv = getLevel(sel.course, sel.level);
  const wk = lv.weeks.find((w) => w.week === sel.week) ?? lv.weeks[0];
  return { week: wk, day: wk.days.find((d) => d.day === sel.day) ?? wk.days[0] };
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
  const picked: ContentItem[] = [];
  let review = false;
  tiers.forEach((tier, ti) => {
    if (picked.length >= count) return;
    const pool = tier.filter((i) => matchesMix(i, mix));
    const ordered = [...shuffle(pool.filter((i) => !avoidSet.has(i.id))), ...shuffle(pool.filter((i) => avoidSet.has(i.id)))];
    const add = ordered.slice(0, count - picked.length);
    if (add.length && ti > 0) review = true;
    picked.push(...add);
  });
  return { items: shuffle(picked), review };
}
