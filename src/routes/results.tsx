import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullscreenButton, MuteButton, useHotkeys } from "@/components/engine/controls";
import { teamStyle } from "@/components/engine/Scoreboard";
import { useApp } from "@/lib/store";
import { GAMES } from "@/lib/games";
import { sfx } from "@/lib/sound";
import { finaleConfetti } from "@/lib/celebrate";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/results")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Results — AF Power Finale" },
      { name: "description", content: "Final scores, winners and the MVP of the day." },
      { property: "og:title", content: "Results — AF Power Finale" },
      { property: "og:description", content: "Final scores, winners and the MVP of the day." },
    ],
  }),
  component: Results,
});

function Results() {
  const result = useApp((s) => s.lastResult);
  const calm = useApp((s) => s.settings.calm);
  const nextIdx = useApp((s) => s.nextGameIndex);
  const others = GAMES.filter((g) => g.id !== result?.gameId);
  const nextGame = others[nextIdx % others.length];

  useEffect(() => {
    sfx.win();
    finaleConfetti();
    useApp.getState().advanceNextGame();
  }, []);
  useHotkeys({ Space: () => finaleConfetti() });

  if (!result) {
    return (
      <div className="stage-bg grid min-h-screen place-items-center text-center">
        <div><h1 className="text-5xl">No game yet!</h1><Button asChild variant="game" size="xl" className="mt-6"><Link to="/">Go home</Link></Button></div>
      </div>
    );
  }

  const [a, b] = result.scores;
  const tie = a === b;
  const winner = a > b ? 0 : 1;

  return (
    <div data-calm={calm} className="stage-bg flex min-h-screen flex-col">
      <header className="flex items-center gap-3 px-8 py-4">
        <Button asChild variant="panel" size="iconLg" aria-label="Home"><Link to="/"><Home /></Link></Button>
        <div className="ml-auto flex gap-3"><MuteButton /><FullscreenButton /></div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-8 pb-10 text-center">
        <div className="animate-pop text-[8rem] leading-none animate-float">🏆</div>
        <h1 className="animate-pop text-7xl text-stroke">
          {tie ? "It’s a tie! Everybody wins!" : <>{result.teams[winner].icon} {result.teams[winner].name} win!</>}
        </h1>

        <div className="flex items-end justify-center gap-8">
          {[0, 1].map((i) => {
            const st = teamStyle(i);
            const isWin = tie || i === winner;
            return (
              <div key={i} className="flex animate-slide-up flex-col items-center gap-3" style={{ animationDelay: `${300 + i * 200}ms` }}>
                <div className="text-6xl">{result.teams[i].icon}</div>
                <div className="text-3xl font-bold">{st.pattern} {result.teams[i].name}</div>
                <div className={cn("grid w-64 place-items-center rounded-t-3xl chunky font-display text-8xl font-bold text-primary-foreground", st.bg, isWin ? "h-56" : "h-36")}>
                  {result.scores[i]}
                </div>
              </div>
            );
          })}
        </div>

        {result.mvp && (
          <div className="panel animate-pop px-10 py-5 text-4xl font-bold">
            🌟 MVP of the day: <span className="text-primary">{result.mvp}</span>!
          </div>
        )}
        <div className="text-5xl font-bold text-stroke">See you next class, champions! 👋</div>

        {nextGame && (
          <div className="panel flex items-center gap-5 px-8 py-4">
            <div className={cn("grid h-20 w-20 place-items-center rounded-2xl text-5xl chunky", nextGame.accent)}>{nextGame.icon}</div>
            <div className="text-left">
              <div className="text-xl font-bold text-muted-foreground">Next class:</div>
              <div className="text-4xl font-bold">{nextGame.name}</div>
            </div>
          </div>
        )}
        <Button asChild variant="game" size="xl"><Link to="/setup" search={{ game: result.gameId }}><RotateCcw /> Play again</Link></Button>
      </main>
    </div>
  );
}
