import { COURSES, type VocabGroup } from "@/data/content";

export const categoryIcons: Record<string, string> = { Shapes: "🔵", Professions: "🧑‍🚒", "What do they do?": "🛠️", Colors: "🎨", Numbers: "🔢", Family: "👪", "Daily routine": "⏰", Food: "🍎", Animals: "🐾", School: "✏️", Rooms: "🏠" };

export function availableCategories(course: string, level: number, week: number): VocabGroup[] {
  return COURSES.find((c) => c.name === course)?.levels.find((l) => l.level === level)?.vocab.filter((v) => v.week === "general" || v.week <= week) ?? [];
}

const randomOrder = <T,>(items: T[]): T[] => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = a[i]; const y = a[j];
    if (x !== undefined && y !== undefined) { a[i] = y; a[j] = x; }
  }
  return a;
};

export function chooseCategories(available: VocabGroup[], week: number, rounds: number, manual: string[] = []): VocabGroup[] {
  const chosen = randomOrder(available.filter((v) => manual.includes(v.category)));
  const current = randomOrder(available.filter((v) => v.week === week && !manual.includes(v.category)));
  const general = randomOrder(available.filter((v) => v.week === "general" && !manual.includes(v.category)));
  const earlier = randomOrder(available.filter((v) => v.week !== "general" && v.week < week && !manual.includes(v.category)));
  return [...chosen, ...current, ...general, ...earlier].slice(0, rounds);
}

export type RallyPhase = "intro" | "rally" | "review" | "final";
export interface RallyState {
  phase: RallyPhase; round: number; active: number; starter: number; rally: number;
  longest: number; scores: [number, number]; paused: boolean; remaining: number;
  roundWinner: number | null; sudden: boolean;
}
export function initialRally(starter: number, clock: number): RallyState {
  return { phase: "intro", round: 0, active: starter, starter, rally: 0, longest: 0, scores: [0, 0], paused: false, remaining: clock, roundWinner: null, sudden: false };
}
export type RallyAction = { type: "start" | "correct" | "out" | "next" | "pause"; clock: number; rounds: number } | { type: "tick"; elapsed: number };
export function rallyReducer(s: RallyState, a: RallyAction): RallyState {
  if (a.type === "start") return s.phase === "intro" ? { ...s, phase: "rally", remaining: a.clock } : s;
  if (a.type === "tick") return s.phase === "rally" && !s.paused ? { ...s, remaining: Math.max(0, s.remaining - a.elapsed) } : s;
  if (a.type === "pause") return s.phase === "rally" ? { ...s, paused: !s.paused } : s;
  if (a.type === "correct") return s.phase === "rally" && !s.paused ? { ...s, active: 1 - s.active, rally: s.rally + 1, longest: Math.max(s.longest, s.rally + 1), remaining: a.clock } : s;
  if (a.type === "out") {
    if (s.phase !== "rally" || s.paused) return s;
    const winner = s.active === 0 ? 1 : 0;
    const scores: [number, number] = [...s.scores]; scores[winner] += 1;
    return { ...s, phase: "review", roundWinner: winner, scores };
  }
  if (a.type === "next" && s.phase === "review") {
    if (s.round + 1 >= a.rounds && s.scores[0] !== s.scores[1]) return { ...s, phase: "final" };
    return { ...s, phase: "intro", round: s.round + 1, starter: 1 - s.starter, active: 1 - s.starter, rally: 0, remaining: a.clock, roundWinner: null, paused: false, sudden: s.round + 1 >= a.rounds };
  }
  return s;
}