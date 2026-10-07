import { APPROVED_WEEK4, type PilotLesson } from "@/data/content";
import { PILOT_GAMES, pilotGamePath } from "./pilot-games";
export const weekPath = (week: number) => `/week/${week}`;
export const lessonPath = (id: string) => `/lesson/${id}`;
export function weekGames(lesson: PilotLesson) {
  if (lesson.week === 4)
    return (APPROVED_WEEK4[lesson.day] ?? []).map((g) => ({
      ...g,
      path: `/play/adventure?lesson=${lesson.id}&activity=${g.id}`,
    }));
  return lesson.suggested.slice(0, 2).flatMap((id) => {
    const g = PILOT_GAMES.find((g) => g.id === id);
    return g
      ? [
          {
            id: g.id,
            name: g.name,
            icon: g.icon,
            goal: g.rule,
            path: `${pilotGamePath(g.id)}?lesson=${lesson.id}`,
          },
        ]
      : [];
  });
}
