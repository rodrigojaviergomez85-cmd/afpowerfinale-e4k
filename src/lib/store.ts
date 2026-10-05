import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COURSES } from "@/data/content";
import type { ContentMix } from "./content";

export interface Team { name: string; icon: string }
export interface Player { id: string; name: string; quiet: boolean; turns: number; points: number }
export interface Settings {
  turnTime: number;
  rounds: number;
  sound: boolean;
  volume: number;
  showSpanish: boolean;
  calm: boolean;
}
export interface BombOptions { target: number; time: number; penalty: number; mix: ContentMix }
export interface LastResult {
  gameId: string;
  teams: Team[];
  scores: number[];
  mode: "teams" | "coop";
  mvp?: string;
  at: number;
}

interface AppState {
  settings: Settings;
  course: string;
  level: number;
  week: number;
  day: number;
  teams: [Team, Team];
  roster: Player[];
  rosterDate: string;
  bomb: BombOptions;
  lastResult: LastResult | null;
  setSettings: (s: Partial<Settings>) => void;
  setSetup: (s: Partial<Pick<AppState, "course" | "level" | "week" | "day" | "teams" | "roster">>) => void;
  setBomb: (b: Partial<BombOptions>) => void;
  resetTurns: () => void;
  bumpPlayer: (id: string, field: "turns" | "points", delta?: number) => void;
  setLastResult: (r: LastResult) => void;
}

export const TEAM_NAME_POOL: Team[] = [
  { name: "Rocket Foxes", icon: "🦊" },
  { name: "Thunder Sharks", icon: "🦈" },
  { name: "Lightning Lions", icon: "🦁" },
  { name: "Galaxy Dragons", icon: "🐉" },
  { name: "Turbo Tigers", icon: "🐯" },
  { name: "Super Eagles", icon: "🦅" },
  { name: "Robo Pandas", icon: "🐼" },
  { name: "Fire Falcons", icon: "🔥" },
  { name: "Star Wolves", icon: "🐺" },
  { name: "Ninja Octopus", icon: "🐙" },
];

export const BOMB_PRESETS: Record<string, BombOptions> = {
  Easy: { target: 8, time: 120, penalty: 3, mix: "mix" },
  Normal: { target: 10, time: 120, penalty: 5, mix: "mix" },
  Hard: { target: 12, time: 100, penalty: 5, mix: "mix" },
};

/** Session-only memory (not saved): ids used in the previous game, so Rematch prefers new items. */
export const sessionUsed: Record<string, string[]> = {};

const today = () => new Date().toISOString().slice(0, 10);
const c0 = COURSES[0]!;
const l0 = c0.levels[0]!;

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      settings: { turnTime: 15, rounds: 10, sound: true, volume: 0.7, showSpanish: true, calm: false },
      course: c0.name,
      level: l0.level,
      week: l0.weeks[0]!.week,
      day: l0.weeks[0]!.days[0]!.day,
      teams: [TEAM_NAME_POOL[0]!, TEAM_NAME_POOL[1]!],
      roster: [],
      rosterDate: today(),
      bomb: BOMB_PRESETS["Normal"]!,
      lastResult: null,
      setSettings: (s) => set({ settings: { ...get().settings, ...s } }),
      setSetup: (s) => set(s as Partial<AppState>),
      setBomb: (b) => set({ bomb: { ...get().bomb, ...b } }),
      resetTurns: () => set({ roster: get().roster.map((p) => ({ ...p, turns: 0, points: 0 })), rosterDate: today() }),
      bumpPlayer: (id, field, delta = 1) =>
        set({ roster: get().roster.map((p) => (p.id === id ? { ...p, [field]: Math.max(0, p[field] + delta) } : p)) }),
      setLastResult: (r) => set({ lastResult: r }),
    }),
    {
      name: "af-power-finale-v2",
      onRehydrateStorage: () => (state) => {
        if (state && state.rosterDate !== today()) state.resetTurns();
      },
    },
  ),
);

export const selectionOf = (s: { course: string; level: number; week: number; day: number }) => ({
  course: s.course, level: s.level, week: s.week, day: s.day,
});
