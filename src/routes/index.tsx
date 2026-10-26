import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullscreenButton, Logo, MuteButton } from "@/components/engine/controls";
import { GAMES } from "@/lib/games";
import { EXTERNAL_GAMES, EXTERNAL_GAMES_SECTION } from "@/lib/externalGames";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AF Power Finale — Game Library" },
      { name: "description", content: "Pick a fast, high-energy English game to end your class with a bang." },
      { property: "og:title", content: "AF Power Finale — Game Library" },
      { property: "og:description", content: "Pick a fast, high-energy English game to end your class with a bang." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Hub,
});

function HubCard({ ready, index, children }: { ready: boolean; index: number; children: ReactNode }) {
  return (
    <div
      className={cn(
        "panel group relative flex h-full animate-slide-up items-center gap-4 overflow-hidden p-5 transition-transform",
        ready ? "hover:-translate-y-1" : "opacity-75",
      )}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {children}
    </div>
  );
}

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
          <MuteButton />
          <FullscreenButton />
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-8 pb-16">
        <div className="py-4 text-center">
          <h1 className="animate-pop text-6xl text-stroke md:text-7xl">
            Power <span className="text-primary">Finale!</span>
          </h1>
          <p className="mt-2 text-2xl font-semibold text-muted-foreground">Pick a game. Let’s go, champions!</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...GAMES].sort((a, b) => (a.status === "ready" ? 0 : 1) - (b.status === "ready" ? 0 : 1)).map((g, i) => {
            const ready = g.status === "ready";
            const card = (
              <HubCard ready={ready} index={i}>
                <div className={cn("absolute inset-y-0 left-0 w-3", g.accent)} />
                <div className={cn("grid h-20 w-20 shrink-0 place-items-center rounded-3xl text-6xl chunky", g.accent)}>{g.icon}</div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-3xl leading-tight">{g.name}</h2>
                  <p className="mt-1 text-lg leading-snug text-muted-foreground">{g.tagline}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-base font-bold">
                    <span className="rounded-full bg-secondary px-3 py-1">{g.mode === "2 teams" ? "⚔️" : "🤝"} {g.mode}</span>
                    <span className="rounded-full bg-secondary px-3 py-1">⏱️ {g.minutes}</span>
                    {ready ? (
                      <span className={cn("rounded-full px-3 py-1 text-primary-foreground", g.accent)}>▶ Play</span>
                    ) : (
                      <span className="rounded-full border-2 border-dashed border-muted-foreground px-3 py-1 text-muted-foreground">Coming soon</span>
                    )}
                  </div>
                </div>
              </HubCard>
            );
            return ready ? (
              <Link key={g.id} to="/setup" search={{ game: g.id }} className="block">{card}</Link>
            ) : (
              <div key={g.id} aria-disabled>{card}</div>
            );
          })}
        </div>
        <section className="mt-10" aria-labelledby="external-games-title">
          <h2 id="external-games-title" className="sr-only">{EXTERNAL_GAMES_SECTION.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {EXTERNAL_GAMES.map((g, i) => {
              const card = (
                <HubCard ready={Boolean(g.url)} index={i}>
                  <div className="absolute inset-y-0 left-0 w-3 bg-game-blitz" />
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-game-blitz text-6xl chunky">{g.icon}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-3xl leading-tight">{g.name}</h3>
                    {g.tagline && <p className="mt-1 text-lg leading-snug text-muted-foreground">{g.tagline}</p>}
                    <ul className="mt-3 space-y-2 text-base leading-snug text-muted-foreground">
                      {g.bullets.map((bullet) => (
                        <li key={bullet.text} className="flex gap-2">
                          <span aria-hidden className="shrink-0">{bullet.icon}</span>
                          <span>{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap text-base font-bold">
                      <span className={cn("rounded-full px-3 py-1", g.url ? "bg-game-blitz text-primary-foreground" : "border-2 border-dashed border-muted-foreground text-muted-foreground")}>
                        {g.url ? g.badge : EXTERNAL_GAMES_SECTION.unavailableBadge}
                      </span>
                    </div>
                  </div>
                </HubCard>
              );
              return g.url ? (
                <a key={g.id} href={g.url} target="_blank" rel="noopener noreferrer" aria-label={`${g.name} — opens in a new tab`} className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                  {card}
                </a>
              ) : (
                <div key={g.id} aria-disabled="true">{card}</div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
