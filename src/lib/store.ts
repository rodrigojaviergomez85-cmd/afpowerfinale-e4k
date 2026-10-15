import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COURSES } from "@/data/content";
import type { ChairMode, ContentMix } from "./content";

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
export interface BombOptions { target: number; time: number; penalty: number; mix: ContentMix; whOnly?: boolean }
/** Challenge types for Tightrope Rescue: Q question, T translation, F fill-in, H hidden picture, P picture question (S/E). */
export type RopeType = "Q" | "T" | "F" | "H" | "P";
export interface RaceOptions { stops: number; turnTime: number; cards: number }
export const RACE_DEFAULTS: RaceOptions = { stops: 6, turnTime: 15, cards: 16 };
export interface TugOptions { pulls: number; turnTime: number; cards: number }
export const TUG_DEFAULTS: TugOptions = { pulls: 5, turnTime: 15, cards: 16 };
export interface BlitzOptions { rounds: number; shotClock: number; categories: string[] }
export const BLITZ_DEFAULTS: BlitzOptions = { rounds: 3, shotClock: 7, categories: [] };
export interface ChairOptions { time: number; mode: ChairMode }
export const CHAIR_DEFAULTS: ChairOptions = { time: 60, mode: "mix" };
export interface LastResult {
  gameId: string;
  teams: Team[];
  scores: number[];
  mode: "teams" | "coop";
  mvp?: string | undefined;
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
  bridge: BombOptions;
  rope: BombOptions;
  kitten: BombOptions;
  setKitten: (b: Partial<BombOptions>) => void;
  race: RaceOptions;
  setRace: (r: Partial<RaceOptions>) => void;
  tug: TugOptions;
  setTug: (r: Partial<TugOptions>) => void;
  blitz: BlitzOptions;
  setBlitz: (r: Partial<BlitzOptions>) => void;
  chair: ChairOptions;
  setChair: (r: Partial<ChairOptions>) => void;
  lastResult: LastResult | null;
  setSettings: (s: Partial<Settings>) => void;
  setSetup: (s: Partial<Pick<AppState, "course" | "level" | "week" | "day" | "teams" | "roster">>) => void;
  setBomb: (b: Partial<BombOptions>) => void;
  setBridge: (b: Partial<BombOptions>) => void;
  setRope: (b: Partial<BombOptions>) => void;
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
  Easy: { target: 8, time: 120, penalty: 3, mix: "mix", whOnly: false },
  Normal: { target: 10, time: 120, penalty: 5, mix: "mix", whOnly: false },
  Hard: { target: 12, time: 100, penalty: 5, mix: "mix", whOnly: false },
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
      bridge: BOMB_PRESETS["Normal"]!,
      rope: BOMB_PRESETS["Normal"]!,
      kitten: BOMB_PRESETS["Normal"]!,
      setKitten: (b) => set({ kitten: { ...(get().kitten ?? BOMB_PRESETS["Normal"]!), ...b } }),
      race: RACE_DEFAULTS,
      setRace: (r) => set({ race: { ...RACE_DEFAULTS, ...get().race, ...r } }),
      tug: TUG_DEFAULTS,
      setTug: (r) => set({ tug: { ...TUG_DEFAULTS, ...get().tug, ...r } }),
      blitz: BLITZ_DEFAULTS,
      setBlitz: (r) => set({ blitz: { ...BLITZ_DEFAULTS, ...get().blitz, ...r } }),
      chair: CHAIR_DEFAULTS,
      setChair: (r) => set({ chair: { ...CHAIR_DEFAULTS, ...get().chair, ...r } }),
      lastResult: null,
      setSettings: (s) => set({ settings: { ...get().settings, ...s } }),
      setSetup: (s) => set(s as Partial<AppState>),
      setBomb: (b) => set({ bomb: { ...get().bomb, ...b } }),
      setBridge: (b) => set({ bridge: { ...(get().bridge ?? BOMB_PRESETS["Normal"]!), ...b } }),
      setRope: (b) => set({ rope: { ...(get().rope ?? BOMB_PRESETS["Normal"]!), ...b } }),
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
