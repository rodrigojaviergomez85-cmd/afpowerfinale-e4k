import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullscreenButton, MuteButton, useHotkeys } from "./controls";
import type { GameDef } from "@/lib/games";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { useApp } from "@/lib/store";

type Phase = "rules" | "countdown" | "play";

export function GameShell({ game, children, rightSlot }: { game: GameDef; children: ReactNode; rightSlot?: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("rules");
  const [count, setCount] = useState(3);
  const calm = useApp((s) => s.settings.calm);

  useEffect(() => {
    if (phase !== "rules") return;
    sfx.whoosh();
    const t = setTimeout(() => setPhase("countdown"), 5000);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "countdown") return;
    setCount(3);
    sfx.count();
    let n = 3;
    const id = setInterval(() => {
      n--;
      setCount(n);
      if (n > 0) sfx.count();
      else if (n === 0) sfx.go();
      else {
        clearInterval(id);
        setPhase("play");
      }
    }, 800);
    return () => clearInterval(id);
  }, [phase]);

  useHotkeys(
    { Space: () => setPhase("countdown"), Enter: () => setPhase("countdown"), ArrowRight: () => setPhase("countdown") },
    phase === "rules",
  );

  return (
    <div data-calm={calm} className="stage-bg flex min-h-screen flex-col">
      <header className="flex items-center gap-3 px-6 py-3">
        <Button asChild variant="panel" size="iconLg" aria-label="Home">
          <Link to="/"><Home /></Link>
        </Button>
        <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-2 text-primary-foreground chunky", game.accent)}>
          <span className="text-3xl">{game.icon}</span>
          <span className="text-2xl font-bold">{game.name}</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {rightSlot}
          <MuteButton />
          <FullscreenButton />
        </div>
      </header>

      <main className="relative flex flex-1 flex-col">
        {phase === "rules" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-10 px-8 text-center">
            <div className="animate-pop text-[10rem] leading-none">{game.icon}</div>
            <h1 className="animate-slide-up text-7xl text-stroke">{game.name}</h1>
            <div className="grid max-w-5xl gap-5">
              {game.rules.map((r, i) => (
                <div key={i} className="panel flex animate-slide-up items-center gap-6 px-8 py-5 text-left" style={{ animationDelay: `${200 + i * 200}ms` }}>
                  <span className="text-6xl">{r.icon}</span>
                  <span className="text-4xl font-bold">{r.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="h-3 w-64 overflow-hidden rounded-full bg-secondary">
                <div className={cn("h-full", game.accent)} style={{ animation: "rules-bar 5s linear forwards" }} />
              </div>
              <Button variant="game" size="xl" onClick={() => setPhase("countdown")}>Skip ▶ (Space)</Button>
            </div>
            <style>{`@keyframes rules-bar{from{width:0}to{width:100%}}`}</style>
          </div>
        )}
        {phase === "countdown" && (
          <div className="flex flex-1 items-center justify-center">
            <div key={count} className={cn("animate-pop font-display font-bold text-stroke", count > 0 ? "text-[16rem] text-foreground" : "text-[14rem] text-primary")}>
              {count > 0 ? count : "GO!"}
            </div>
          </div>
        )}
        {phase === "play" && children}
      </main>
    </div>
  );
}
