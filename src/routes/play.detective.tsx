import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { DailyGame } from "@/components/engine/DailyGame";

export const Route = createFileRoute("/play/detective")({
  ssr: false,
  validateSearch: z.object({ lesson: z.string().default("") }),
  component: Page,
});
function Page() {
  const { lesson } = Route.useSearch();
  return <DailyGame lessonId={lesson} gameId="detective" />;
}
