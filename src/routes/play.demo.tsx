import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, SkipForward, Eye, Dices, Undo2, Minus, Pause, Play, Flag, Plus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { useTimer, TimerRing } from "@/components/engine/Timer";
import { Scoreboard, StreakBadge } from "@/components/engine/Scoreboard";
import { TurnPicker } from "@/components/engine/TurnPicker";
import { useHotkeys, toggleFullscreen } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { ItemCard } from "@/components/engine/ItemCard";
import { getGame } from "@/lib/games";
import { drawItems, type ContentItem } from "@/lib/content";
import { selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
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

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause timer"], ["C / Enter", "Correct"], ["→", "Skip / next"], ["1 / 2", "+1 to Team 1 / Team 2"],
  ["Z", "Undo last point"], ["A", "Show answer"], ["R", "Random player"], ["M", "Mute"], ["F", "Full screen"], ["?", "This help"],
];

type Action = { team: number; delta: number; playerId?: string | undefined };

function DemoDrill() {
  const game = getGame("demo")!;
  const navigate = useNavigate();
  const app = useApp();
  const { settings, teams, roster } = app;

  const [items, setItems] = useState<ContentItem[] | null>(null);
  const [review, setReview] = useState(false);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [, setHistory] = useState<Action[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState({ team: -1, n: 0 });
  const [picking, setPicking] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);
  const [shake, setShake] = useState(0);
  const [help, setHelp] = useState(false);

  const timer = useTimer(settings.turnTime, () => setShowAnswer(true));
  const activeTeam = idx % 2;
  const item = items?.[idx];

  useEffect(() => {
    const { items, review } = drawItems(selectionOf(useApp.getState()), settings.rounds, "mix", sessionUsed["demo"] ?? []);
    setItems(items);
    setReview(review);
    if (items.length) timer.reset(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = useCallback(
    (finalScores: number[]) => {
      const st = useApp.getState();
      if (items) sessionUsed["demo"] = items.map((i) => i.id);
      const best = [...st.roster].sort((a, b) => b.points - a.points)[0];
      st.setLastResult({ gameId: "demo", teams, scores: finalScores, mode: "teams", mvp: best && best.points > 0 ? best.name : undefined, at: Date.now() });
      navigate({ to: "/results" });
    },
    [items, teams, navigate],
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
          if (n >= 3) { burst(true); setShake((x) => x + 1); } else burst();
          return { team, n };
        });
      } else sfx.minus();
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
  const skip = () => { sfx.skip(); setStreak({ team: -1, n: 0 }); next(); };
  const pick = () => roster.length && !picking && setPicking(true);

  const keys = useMemo(
    () => ({
      Space: timer.toggle, "1": () => award(0, 1), "2": () => award(1, 1), ArrowRight: skip,
      a: () => setShowAnswer((v) => !v), r: pick, m: () => app.setSettings({ sound: !settings.sound }),
      z: undo, f: toggleFullscreen, Enter: correct, c: correct, "?": () => setHelp(true),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timer.toggle, award, next, undo, settings.sound, roster.length, picking, activeTeam],
  );

  return (
    <GameShell game={game} rightSlot={<Button variant="panel" size="xl" onClick={() => setHelp(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <PlayKeys keys={keys} enabled={!help} />
      <HelpOverlay open={help} onClose={() => setHelp(false)} shortcuts={SHORTCUTS} />
      <TurnPicker open={picking} onDone={(p) => { setPicking(false); setPlayer(p); }} />
      <div key={shake} className={cn("flex flex-1 flex-col gap-5 px-8 pb-6", shake > 0 && "animate-shake")}>
        <Scoreboard teams={teams} scores={scores} activeTeam={activeTeam} />
        {items && !items.length && <div className="panel p-10 text-center text-3xl">No items for this day yet.</div>}
        {item && (
          <>
            <div className="flex items-center justify-between text-2xl font-bold">
              <div className="rounded-full bg-secondary px-5 py-2">
                Card {idx + 1} / {items!.length} {review && <span className="ml-2 text-primary">· Review mode</span>}
              </div>
              <StreakBadge streak={streak.n} />
              <div className={cn("flex items-center gap-2 rounded-full px-5 py-2 text-primary-foreground", activeTeam === 0 ? "bg-team1" : "bg-team2")}>
                {teams[activeTeam]!.icon} {teams[activeTeam]!.name}’s turn
                {player && <span className="ml-2 rounded-full bg-card px-3 text-foreground">🎤 {player.name}</span>}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-[1fr_auto] items-center gap-8">
              <ItemCard key={item.id} item={item} showAnswer={showAnswer} />
              <div className="flex flex-col items-center gap-6">
                <TimerRing remaining={timer.remaining} duration={timer.duration} running={timer.running} size={220} />
                <Button variant="panel" size="xl" onClick={timer.toggle}>{timer.running ? <Pause /> : <Play />} <Kbd>Space</Kbd></Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="success" size="huge" onClick={correct}><Check /> Correct <Kbd>C</Kbd></Button>
              <Button variant="panel" size="huge" onClick={skip}><SkipForward /> Skip <Kbd>→</Kbd></Button>
              <Button variant="game" size="xl" onClick={() => setShowAnswer((v) => !v)}><Eye /> Answer <Kbd>A</Kbd></Button>
              {roster.length > 0 && <Button variant="panel" size="xl" onClick={pick}><Dices /> Pick <Kbd>R</Kbd></Button>}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="team1" size="xl" onClick={() => award(0, 1)}><Plus /> Team 1 <Kbd>1</Kbd></Button>
              <Button variant="team1" size="iconLg" onClick={() => award(0, -1)} aria-label="Minus team 1"><Minus /></Button>
              <Button variant="team2" size="xl" onClick={() => award(1, 1)}><Plus /> Team 2 <Kbd>2</Kbd></Button>
              <Button variant="team2" size="iconLg" onClick={() => award(1, -1)} aria-label="Minus team 2"><Minus /></Button>
              <Button variant="panel" size="xl" onClick={undo}><Undo2 /> Undo <Kbd>Z</Kbd></Button>
              <Button variant="danger" size="xl" onClick={() => finish(scores)}><Flag /> End</Button>
            </div>
          </>
        )}
      </div>
    </GameShell>
  );
}

function PlayKeys({ keys, enabled }: { keys: Record<string, () => void>; enabled: boolean }) {
  useHotkeys(keys, enabled);
  return null;
}
