import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TeamIcon = "🚀" | "🦊" | "⚡" | "🦈" | "🐉" | "🌟" | "🔥" | "🐯" | "🦅" | "🤖";

export interface Team {
  name: string;
  icon: string;
}

export interface Player {
  id: string;
  name: string;
  quiet: boolean; // spoke little in AF
  turns: number;
  points: number;
}

export interface Settings {
  turnTime: number;
  rounds: number;
  sound: boolean;
  volume: number;
  showSpanish: boolean;
  calm: boolean;
}

export interface LastResult {
  gameId: string;
  teams: Team[];
  scores: number[];
  mode: "teams" | "coop";
  coopGoal?: number;
  mvp?: string;
  at: number;
}

interface AppState {
  settings: Settings;
  level: number;
  classNum: number;
  group: string;
  teams: [Team, Team];
  roster: Player[];
  rosterDate: string;
  usedHistory: Record<string, string[]>;
  lastResult: LastResult | null;
  nextGameIndex: number;
  setSettings: (s: Partial<Settings>) => void;
  setSetup: (s: Partial<Pick<AppState, "level" | "classNum" | "group" | "teams" | "roster">>) => void;
  markUsed: (ids: string[]) => void;
  resetTurns: () => void;
  bumpPlayer: (id: string, field: "turns" | "points", delta?: number) => void;
  setLastResult: (r: LastResult) => void;
  advanceNextGame: () => void;
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

export const groupKey = (group: string, level: number) =>
  `${group.trim().toLowerCase() || "default"}::L${level}`;

const today = () => new Date().toISOString().slice(0, 10);

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      settings: { turnTime: 15, rounds: 10, sound: true, volume: 0.7, showSpanish: true, calm: false },
      level: 1,
      classNum: 1,
      group: "",
      teams: [TEAM_NAME_POOL[0], TEAM_NAME_POOL[1]],
      roster: [],
      rosterDate: today(),
      usedHistory: {},
      lastResult: null,
      nextGameIndex: 0,
      setSettings: (s) => set({ settings: { ...get().settings, ...s } }),
      setSetup: (s) => set(s as Partial<AppState>),
      markUsed: (ids) => {
        const key = groupKey(get().group, get().level);
        const prev = get().usedHistory[key] ?? [];
        const next = [...ids, ...prev.filter((i) => !ids.includes(i))].slice(0, 150);
        set({ usedHistory: { ...get().usedHistory, [key]: next } });
      },
      resetTurns: () =>
        set({ roster: get().roster.map((p) => ({ ...p, turns: 0, points: 0 })), rosterDate: today() }),
      bumpPlayer: (id, field, delta = 1) =>
        set({
          roster: get().roster.map((p) =>
            p.id === id ? { ...p, [field]: Math.max(0, p[field] + delta) } : p,
          ),
        }),
      setLastResult: (r) => set({ lastResult: r }),
      advanceNextGame: () => set({ nextGameIndex: get().nextGameIndex + 1 }),
    }),
    {
      name: "af-power-finale",
      onRehydrateStorage: () => (state) => {
        // New day → fresh turn counts
        if (state && state.rosterDate !== today()) state.resetTurns();
      },
    },
  ),
);
