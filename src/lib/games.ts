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
      { icon: "⏱️", text: "Be fast! Win points for your team!" },
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
    status: "ready",
    rules: [
      { icon: "💣", text: "Answer 10 questions before the bomb explodes!" },
      { icon: "🤝", text: "Work together!" },
    ],
  },
  {
    id: "tightrope",
    name: "Circus Rescue",
    icon: "🎪",
    tagline: "Raise Luna’s platform to safety — don't let her splash!",
    mode: "Whole class",
    minutes: "3 min",
    accent: "bg-game-rope",
    accentText: "text-game-rope",
    status: "ready",
    rules: [],
  },
  {
    id: "bridge-builder",
    name: "Bridge Builder",
    icon: "🌉",
    tagline: "Build the bridge before the river rises!",
    mode: "Whole class",
    minutes: "3 min",
    accent: "bg-game-bridge",
    accentText: "text-game-bridge",
    status: "ready",
    rules: [],
  },
  {
    id: "kitten-rescue",
    name: "Kitten Rescue",
    icon: "🐱",
    tagline: "Build the ladder and save Pepper!",
    mode: "Whole class",
    minutes: "3 min",
    accent: "bg-game-kitten",
    accentText: "text-game-kitten",
    status: "ready",
    rules: [],
  },
  {
    id: "rocket-race",
    name: "Rocket Race",
    icon: "🚀",
    tagline: "First rocket to the planet wins!",
    mode: "2 teams",
    minutes: "5 min",
    accent: "bg-game-race",
    accentText: "text-game-race",
    status: "ready",
    rules: [],
  },
  {
    id: "mud-tug",
    name: "Muddy Tug of War",
    icon: "🐰",
    tagline: "Pull the rope, win the mud battle!",
    mode: "2 teams",
    minutes: "5 min",
    accent: "bg-game-tug",
    accentText: "text-game-tug",
    status: "ready",
    rules: [
      { icon: "🪢", text: "Correct answer = pull the ribbon toward your team!" },
      { icon: "🧲", text: "Pull it past your line to win. Losers get muddy!" },
      { icon: "💪", text: "3 in a row = POWER PULL! (2 steps)" },
    ],
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
