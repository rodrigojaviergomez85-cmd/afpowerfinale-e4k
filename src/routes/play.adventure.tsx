import { createFileRoute } from "@tanstack/react-router";
import { APPROVED_WEEK4, PILOT_LESSONS } from "@/data/content";
export const Route = createFileRoute("/play/adventure")({
  validateSearch: (s: Record<string, unknown>) => ({
    lesson: typeof s["lesson"] === "string" ? s["lesson"] : "",
    activity: typeof s["activity"] === "string" ? s["activity"] : "",
  }),
  component: Adventure,
});
function Adventure() {
  const { lesson, activity } = Route.useSearch();
  const l = PILOT_LESSONS.find((l) => l.id === lesson && l.week === 4);
  const game = l ? (APPROVED_WEEK4[l.day] ?? []).find((g) => g.id === activity) : undefined;
  if (!game || !l)
    return (
      <main className="daily-main">
        <h1>Juego no disponible para esta lección</h1>
        <a href="/week/4">Elegir una actividad</a>
      </main>
    );
  return (
    <main className="adventure-player">
      <nav>
        <a href={`/lesson/${l.id}`}>← Día {l.day}</a>
        <span>Semana 4 · {game.name}</span>
        <a href="/week/4">Ver semana</a>
      </nav>
      <iframe
        title={game.name}
        src={`/missions/v1/${game.path}`}
        allow="fullscreen; clipboard-write"
        allowFullScreen
      />
    </main>
  );
}
