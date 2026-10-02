export interface GameDef {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  mode: "2 teams" | "Whole class";
  minutes: string;
  accent: string; // tailwind bg class from design tokens
  accentText: string;
  status: "ready" | "soon";
  rules: { icon: string; text: string }[];
}

export const GAMES: GameDef[] = [
  {
    id: "demo",
    name: "Demo Drill",
    icon: "🎯",
    tagline: "See it, say it, score it!",
    mode: "2 teams",
    minutes: "5 min",
    accent: "bg-game-demo",
    accentText: "text-game-demo",
    status: "ready",
    rules: [
      { icon: "👀", text: "Look at the screen and say it in English." },
      { icon: "⏱️", text: "You have 15 seconds. Win points for your team!" },
    ],
  },
  {
    id: "beat-the-bomb",
    name: "Beat the Bomb",
    icon: "💣",
    tagline: "Answer 10 questions before the bomb explodes!",
    mode: "Whole class",
    minutes: "4 min",
    accent: "bg-game-bomb",
    accentText: "text-game-bomb",
    status: "soon",
    rules: [],
  },
  {
    id: "hot-chair",
    name: "Hot Chair Translation",
    icon: "🔥",
    tagline: "Fast turns. Translate the sentence!",
    mode: "2 teams",
    minutes: "6 min",
    accent: "bg-game-chair",
    accentText: "text-game-chair",
    status: "soon",
    rules: [],
  },
  {
    id: "vocab-blitz",
    name: "Vocab Blitz",
    icon: "⚡",
    tagline: "Say many words from a group. Go go go!",
    mode: "2 teams",
    minutes: "5 min",
    accent: "bg-game-blitz",
    accentText: "text-game-blitz",
    status: "soon",
    rules: [],
  },
];

export const getGame = (id: string) => GAMES.find((g) => g.id === id);
