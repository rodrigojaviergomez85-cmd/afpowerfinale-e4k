import { createFileRoute } from "@tanstack/react-router";
import { DailyLibrary } from "@/components/engine/DailyLibrary";
export const Route = createFileRoute("/week/$weekId")({ component: WeekPage });
function WeekPage() {
  const { weekId } = Route.useParams();
  if (!["4", "5"].includes(weekId))
    return (
      <main className="daily-main">
        <h1>Semana no disponible</h1>
        <a href="/week/4">Volver a las semanas publicadas</a>
      </main>
    );
  return <DailyLibrary week={Number(weekId)} />;
}
