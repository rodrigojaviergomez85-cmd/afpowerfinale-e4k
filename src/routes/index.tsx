import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullscreenButton, Logo, MuteButton } from "@/components/engine/controls";
import { GAMES } from "@/lib/games";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AF Power Finale — Game Library" },
      { name: "description", content: "Pick a fast, high-energy English game to end your class with a bang." },
      { property: "og:title", content: "AF Power Finale — Game Library" },
      { property: "og:description", content: "Pick a fast, high-energy English game to end your class with a bang." },
    ],
  }),
  component: Hub,
});

function Hub() {
  const calm = useApp((s) => s.settings.calm);
  return (
    <div data-calm={calm} className="stage-bg relative min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <span className="animate-float absolute left-[6%] top-[22%] text-7xl opacity-20">⭐</span>
        <span className="animate-float absolute right-[8%] top-[30%] text-8xl opacity-20" style={{ animationDelay: "2s" }}>🏆</span>
        <span className="animate-float absolute bottom-[10%] left-[12%] text-7xl opacity-20" style={{ animationDelay: "4s" }}>🎤</span>
      </div>
      <header className="relative flex items-center gap-3 px-8 py-5">
        <Logo />
        <div className="ml-auto flex items-center gap-3">
          <Button asChild variant="panel" size="iconLg" aria-label="Settings">
            <Link to="/settings"><Settings /></Link>
          </Button>
          <Button asChild variant="panel" size="iconLg" aria-label="Content Manager">
            <Link to="/admin"><Lock /></Link>
          </Button>
          <MuteButton />
          <FullscreenButton />
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-8 pb-16">
        <div className="py-8 text-center">
          <h1 className="animate-pop text-7xl text-stroke md:text-8xl">
            Power <span className="text-primary">Finale!</span>
          </h1>
          <p className="mt-3 text-3xl font-semibold text-muted-foreground">Pick a game. Let’s go, champions!</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {GAMES.map((g, i) => {
            const ready = g.status === "ready";
            const card = (
              <div
                className={cn(
                  "panel group relative flex h-full animate-slide-up items-center gap-6 overflow-hidden p-7 transition-transform",
                  ready ? "hover:-translate-y-1" : "opacity-75",
                )}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className={cn("absolute inset-y-0 left-0 w-3", g.accent)} />
                <div className={cn("grid h-28 w-28 shrink-0 place-items-center rounded-3xl text-7xl chunky", g.accent)}>{g.icon}</div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-4xl leading-tight">{g.name}</h2>
                  <p className="mt-1 text-xl text-muted-foreground">{g.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-lg font-bold">
                    <span className="rounded-full bg-secondary px-3 py-1">{g.mode === "2 teams" ? "⚔️" : "🤝"} {g.mode}</span>
                    <span className="rounded-full bg-secondary px-3 py-1">⏱️ {g.minutes}</span>
                    {ready ? (
                      <span className={cn("rounded-full px-3 py-1 text-primary-foreground", g.accent)}>▶ Play</span>
                    ) : (
                      <span className="rounded-full border-2 border-dashed border-muted-foreground px-3 py-1 text-muted-foreground">Coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            );
            return ready ? (
              <Link key={g.id} to="/setup" search={{ game: g.id }} className="block">{card}</Link>
            ) : (
              <div key={g.id} aria-disabled>{card}</div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
