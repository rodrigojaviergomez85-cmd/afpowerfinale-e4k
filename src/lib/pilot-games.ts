export const PILOT_GAMES = [
  {
    id: "spotlight",
    name: "Mystery Spotlight",
    icon: "🔦",
    category: "Observe & speak",
    minutes: 3,
    color: "#ac9bff",
    rule: "Reveal a window. Look for clues. Say the whole sentence!",
    team: false,
  },
  {
    id: "rocket",
    name: "Rocket Race",
    icon: "🚀",
    category: "Team challenge",
    minutes: 3,
    color: "#ffb464",
    rule: "Take turns. Correct: 2 points. With help: 1. Incorrect: 0 and the next question goes to the other team. Most points wins!",
    team: true,
  },
  {
    id: "detective",
    name: "Sentence Detectives",
    icon: "🕵️",
    category: "Find & fix",
    minutes: 4,
    color: "#69d9c0",
    rule: "Check the robot's messages: fix mistakes, judge correct sentences, choose or complete. Say the message!",
    team: false,
  },
  {
    id: "sentence",
    name: "Sentence Builders",
    icon: "🧱",
    category: "Build & say",
    minutes: 4,
    color: "#86c9ff",
    rule: "Build, complete, translate or choose a message. Then say the whole sentence!",
    team: false,
  },
  {
    id: "mission",
    name: "Beat the Bomb",
    icon: "💣",
    category: "Whole-class mission",
    minutes: 3,
    color: "#ff94ac",
    rule: "Work together to cut every wire. Everyone gets a turn!",
    team: false,
  },
] as const;

export type PilotGameId = (typeof PILOT_GAMES)[number]["id"];
export const pilotGame = (id: string) => PILOT_GAMES.find((g) => g.id === id);
export const pilotGamePath = (id: PilotGameId) => `/play/${id}` as const;
