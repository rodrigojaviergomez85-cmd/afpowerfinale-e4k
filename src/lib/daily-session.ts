import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { PILOT_LESSONS, type PilotCard, type PilotLesson } from "@/data/content";
import { parseDay, shuffle, type ContentItem } from "./content";
import type { PilotGameId } from "./pilot-games";

export const findLesson = (id: string) => PILOT_LESSONS.find((l) => l.id === id);
export const lessonUrl = (id: string) => `/lesson/${id}`;
export type DailyCard = ContentItem & PilotCard;
export function lessonCards(lesson: PilotLesson): DailyCard[] {
  return lesson.cards.map((card) => ({
    ...parseDay({ day: lesson.day, label: "", focus: "", lines: [card.line] }, lesson.week)[0]!,
    ...card,
    id: card.key,
  }));
}
export function drawDaily(lesson: PilotLesson, used: string[], count: number) {
  const seen = new Set(used);
  const cards = lessonCards(lesson);
  const fresh = shuffle(cards.filter((c) => !seen.has(c.key)));
  const repeat = shuffle(cards.filter((c) => seen.has(c.key)));
  return {
    cards: [...fresh, ...repeat].slice(0, count),
    recycled: fresh.length < Math.min(count, cards.length),
  };
}
export type Grade = "correct" | "help" | "skip";
export interface RoundState {
  index: number;
  answered: Grade | null;
  retryCount: number;
  scores: [number, number];
  correct: number;
  helped: number;
  skipped: number;
  finished: boolean;
}
export const newRound = (): RoundState => ({
  index: 0,
  answered: null,
  retryCount: 0,
  scores: [0, 0],
  correct: 0,
  helped: 0,
  skipped: 0,
  finished: false,
});
export function roundReducer(
  s: RoundState,
  action:
    | { type: "grade"; grade: Grade }
    | { type: "next"; count: number }
    | { type: "retry" }
    | { type: "incorrect"; index: number; count: number }
    | { type: "finish" },
): RoundState {
  if (s.finished) return s;
  if (action.type === "finish") return { ...s, finished: true };
  if (action.type === "incorrect") {
    // One atomic transition: stale clicks cannot fail the next team's question.
    if (s.answered || action.index !== s.index) return s;
    const missed = { ...s, skipped: s.skipped + 1, retryCount: 0 };
    return s.index + 1 >= action.count
      ? { ...missed, answered: "skip", finished: true }
      : { ...missed, index: s.index + 1 };
  }
  if (action.type === "retry") {
    const scores: [number, number] = [...s.scores];
    scores[(s.index % 2) as 0 | 1] -= s.answered === "correct" ? 2 : s.answered === "help" ? 1 : 0;
    return {
      ...s,
      answered: null,
      retryCount: s.retryCount + 1,
      scores,
      correct: s.correct - Number(s.answered === "correct"),
      helped: s.helped - Number(s.answered === "help"),
      skipped: s.skipped - Number(s.answered === "skip"),
    };
  }
  if (action.type === "next") {
    if (!s.answered) return s;
    return s.index + 1 >= action.count
      ? { ...s, finished: true }
      : { ...s, index: s.index + 1, answered: null, retryCount: 0 };
  }
  if (s.answered) return s;
  const scores: [number, number] = [...s.scores];
  scores[(s.index % 2) as 0 | 1] +=
    action.grade === "correct" ? 2 : action.grade === "help" ? 1 : 0;
  return {
    ...s,
    scores,
    answered: action.grade,
    correct: s.correct + Number(action.grade === "correct"),
    helped: s.helped + Number(action.grade === "help"),
    skipped: s.skipped + Number(action.grade === "skip"),
  };
}

export interface SessionResult {
  id: string;
  game: PilotGameId;
  correct: number;
  helped: number;
  skipped: number;
  endedEarly: boolean;
}
interface DailyState {
  lesson: string;
  date: string;
  used: string[];
  results: SessionResult[];
  ensure: (lesson: string) => void;
  reset: (lesson: string) => void;
  see: (key: string) => void;
  finish: (result: SessionResult) => void;
}
// Calendar day on the coach's device, not UTC (no midnight reset during evening classes).
export const localDay = () => new Date().toLocaleDateString("en-CA");
export const useDailySession = create<DailyState>()(
  persist(
    (set, get) => ({
      lesson: "",
      date: "",
      used: [],
      results: [],
      ensure: (lesson) => {
        if (get().lesson !== lesson || get().date !== localDay()) get().reset(lesson);
      },
      reset: (lesson) => set({ lesson, date: localDay(), used: [], results: [] }),
      see: (key) => set((s) => ({ used: s.used.includes(key) ? s.used : [...s.used, key] })),
      finish: (result) =>
        set((s) => ({
          results: s.results.some((r) => r.id === result.id) ? s.results : [...s.results, result],
        })),
    }),
    { name: "af-daily-session-v1", storage: createJSONStorage(() => sessionStorage) },
  ),
);
