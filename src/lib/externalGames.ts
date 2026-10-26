export interface ExternalGameDef {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  bullets: { icon: string; text: string }[];
  url: string | null;
  badge: string;
}

export const EXTERNAL_GAMES_SECTION = {
  title: "Game Rooms",
  subtitle: "Have your students play on their own device.",
  unavailableBadge: "Coming soon",
};

export const EXTERNAL_GAMES: ExternalGameDef[] = [{
  id: "game-rooms",
  name: "Game Rooms",
  icon: "🕹️",
  tagline: "Open a room and let your students play on their own device.",
  bullets: [
    { icon: "🔗", text: "Host a room and share the link with your class." },
    { icon: "🤖", text: "Or send students to solo practice vs AI — no host needed." },
  ],
  url: "https://e4k-games.lovable.app/",
  badge: "Go →",
}];