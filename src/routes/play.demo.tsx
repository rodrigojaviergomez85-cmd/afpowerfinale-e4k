import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, SkipForward, Eye, Dices, Undo2, Minus, Pause, Play, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { useTimer, TimerRing } from "@/components/engine/Timer";
import { Scoreboard, StreakBadge } from "@/components/engine/Scoreboard";
import { TurnPicker } from "@/components/engine/TurnPicker";
import { useHotkeys, toggleFullscreen } from "@/components/engine/controls";
import { getGame } from "@/lib/games";
import { drawItems, type ContentItem } from "@/lib/content";
import { groupKey, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/celebrate";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/demo")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Demo Drill — AF Power Finale" },
      { name: "description", content: "See it, say it, score it! A fast two-team English drill." },
      { property: "og:title", content: "Demo Drill — AF Power Finale" },
      { property: "og:description", content: "See it, say it, score it! A fast two-team English drill." },
    ],
  }),
  component: DemoDrill,
});

type Action = { team: number; delta: number; playerId?: string };

function DemoDrill() {
  const game = getGame("demo")!;
  const navigate = useNavigate();
  const app = useApp();
  const { settings, teams, level, classNum, roster } = app;

  const [items, setItems] = useState<ContentItem[] | null>(null);
  const [review, setReview] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [history, setHistory] = useState<Action[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState({ team: -1, n: 0 });
  const [picking, setPicking] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);
  const [shake, setShake] = useState(0);

  const timer = useTimer(settings.turnTime, () => setShowAnswer(true));
  const activeTeam = idx % 2;
  const item = items?.[idx];

  useEffect(() => {
    const recent = useApp.getState().usedHistory[groupKey(app.group, level)] ?? [];
    drawItems({ level, classNum, count: settings.rounds, recent })
      .then(({ items, review }) => {
        setItems(items);
        setReview(review);
        if (items.length) timer.reset(true);
      })
      .catch((e) => setError(e.message ?? "Could not load content"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = useCallback(
    (finalScores: number[]) => {
      const st = useApp.getState();
      if (items) st.markUsed(items.slice(0, idx + 1).map((i) => i.id));
      const best = [...st.roster].sort((a, b) => b.points - a.points)[0];
      st.setLastResult({
        gameId: "demo",
        teams,
        scores: finalScores,
        mode: "teams",
        mvp: best && best.points > 0 ? best.name : undefined,
        at: Date.now(),
      });
      navigate({ to: "/results" });
    },
    [items, idx, teams, navigate],
  );

  const next = useCallback(() => {
    if (!items) return;
    sfx.whoosh();
    setShowAnswer(false);
    setPlayer(null);
    if (idx + 1 >= items.length) return finish(scores);
    setIdx((i) => i + 1);
    timer.reset(true);
  }, [items, idx, scores, finish, timer]);

  const award = useCallback(
    (team: number, delta: number) => {
      setScores((s) => s.map((v, i) => (i === team ? Math.max(0, v + delta) : v)));
      setHistory((h) => [...h, { team, delta, playerId: delta > 0 ? player?.id : undefined }]);
      if (delta > 0) {
        sfx.correct();
        if (player) app.bumpPlayer(player.id, "points");
        setStreak((st) => {
          const n = st.team === team ? st.n + 1 : 1;
          if (n >= 3) {
            burst(true);
            setShake((x) => x + 1);
          } else burst();
          return { team, n };
        });
      } else {
        sfx.minus();
      }
    },
    [player, app],
  );

  const undo = useCallback(() => {
    setHistory((h) => {
      const last = h[h.length - 1];
      if (!last) return h;
      setScores((s) => s.map((v, i) => (i === last.team ? Math.max(0, v - last.delta) : v)));
      if (last.playerId) app.bumpPlayer(last.playerId, "points", -1);
      setStreak({ team: -1, n: 0 });
      sfx.minus();
      return h.slice(0, -1);
    });
  }, [app]);

  const correct = () => {
    award(activeTeam, 1);
    setShowAnswer(true);
    timer.setRunning(false);
    setTimeout(next, 1200);
  };
  const skip = () => {
    sfx.skip();
    setStreak({ team: -1, n: 0 });
    next();
  };
  const pick = () => roster.length && !picking && setPicking(true);

  const keys = useMemo(
    () => ({
      Space: timer.toggle,
      "1": () => award(0, 1),
      "2": () => award(1, 1),
      ArrowRight: next,
      a: () => setShowAnswer((v) => !v),
      r: pick,
      m: () => app.setSettings({ sound: !settings.sound }),
      z: undo,
      f: toggleFullscreen,
      Enter: correct,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timer.toggle, award, next, undo, settings.sound, roster.length, picking, activeTeam],
  );

  return (
    <GameShell game={game}>
      <PlayKeys keys={keys} />
      <TurnPicker open={picking} onDone={(p) => { setPicking(false); setPlayer(p); }} />
      <div key={shake} className={cn("flex flex-1 flex-col gap-5 px-8 pb-6", shake > 0 && "animate-shake")}>
        <Scoreboard teams={teams} scores={scores} activeTeam={activeTeam} />

        {error && <div className="panel p-8 text-center text-3xl">⚠️ {error}</div>}
        {!items && !error && <div className="flex flex-1 items-center justify-center text-4xl font-bold">Loading cards…</div>}
        {items && !items.length && (
          <div className="panel p-10 text-center text-3xl">No content for Level {level}, Class {classNum} yet. Add some in the Content Manager.</div>
        )}

        {item && (
          <>
            <div className="flex items-center justify-between text-2xl font-bold">
              <div className="rounded-full bg-secondary px-5 py-2">
                Card {idx + 1} / {items!.length} {review && <span className="ml-2 text-primary">· Review mode</span>}
              </div>
              <StreakBadge streak={streak.n} />
              <div className={cn("flex items-center gap-2 rounded-full px-5 py-2 text-primary-foreground", activeTeam === 0 ? "bg-team1" : "bg-team2")}>
                {teams[activeTeam].icon} {teams[activeTeam].name}’s turn
                {player && <span className="ml-2 rounded-full bg-card px-3 text-foreground">🎤 {player.name}</span>}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-[1fr_auto] items-center gap-8">
              <ItemCard key={item.id} item={item} showAnswer={showAnswer} showSpanish={settings.showSpanish} />
              <div className="flex flex-col items-center gap-6">
                <TimerRing remaining={timer.remaining} duration={timer.duration} running={timer.running} size={220} />
                <Button variant="panel" size="xl" onClick={timer.toggle}>
                  {timer.running ? <Pause /> : <Play />} Space
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="success" size="huge" onClick={correct}><Check /> Correct</Button>
              <Button variant="panel" size="huge" onClick={skip}><SkipForward /> Skip →</Button>
              <Button variant="game" size="xl" onClick={() => setShowAnswer((v) => !v)}><Eye /> Answer (A)</Button>
              {roster.length > 0 && <Button variant="panel" size="xl" onClick={pick}><Dices /> Pick (R)</Button>}
              <div className="flex gap-2">
                <Button variant="team1" size="iconLg" onClick={() => award(0, -1)} aria-label="Minus team 1"><Minus /></Button>
                <Button variant="team2" size="iconLg" onClick={() => award(1, -1)} aria-label="Minus team 2"><Minus /></Button>
                <Button variant="panel" size="iconLg" onClick={undo} aria-label="Undo last point (Z)"><Undo2 /></Button>
                <Button variant="danger" size="iconLg" onClick={() => finish(scores)} aria-label="End game"><Flag /></Button>
              </div>
            </div>
            <div className="text-center text-base font-semibold text-muted-foreground">
              Space timer · Enter correct · → skip · 1/2 point to team · Z undo · A answer · R pick · M mute · F full screen
            </div>
          </>
        )}
      </div>
    </GameShell>
  );
}

function PlayKeys({ keys }: { keys: Record<string, () => void> }) {
  useHotkeys(keys);
  return null;
}

function ItemCard({ item, showAnswer, showSpanish }: { item: ContentItem; showAnswer: boolean; showSpanish: boolean }) {
  let prompt: React.ReactNode;
  let instruction = "";
  let answer: React.ReactNode;
  if (item.type === "sentence") {
    instruction = showSpanish ? "Say it in English!" : "Read it and say it!";
    prompt = showSpanish ? item.spanish : item.english;
    answer = showSpanish ? item.english : item.spanish;
  } else if (item.type === "question") {
    instruction = "Answer the question!";
    prompt = item.english;
    answer = (
      <div className="space-y-1">
        {item.sample_answers.map((a, i) => <div key={i}>💬 {a}</div>)}
      </div>
    );
  } else {
    instruction = "What is it in English?";
    prompt = <span className="text-[9rem] leading-none">{item.emoji ?? "❓"}</span>;
    answer = <>{item.english}{showSpanish && item.category && <span className="ml-3 text-3xl text-muted-foreground">({item.category})</span>}</>;
  }
  return (
    <div className="panel flex h-full min-h-80 animate-pop flex-col items-center justify-center gap-6 p-10 text-center">
      <div className="rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground">{instruction}</div>
      <div className="font-display text-6xl font-bold leading-tight text-stroke xl:text-7xl">{prompt}</div>
      <div className={cn("min-h-16 text-5xl font-bold text-success transition-all duration-500", showAnswer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
        {showAnswer ? answer : null}
      </div>
    </div>
  );
}
