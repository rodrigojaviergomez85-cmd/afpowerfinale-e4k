import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, X, Eye, Dices, Undo2, Pause, Play, HelpCircle, Flag, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { useTimer, TimerRing } from "@/components/engine/Timer";
import { pickPlayer } from "@/components/engine/TurnPicker";
import { useHotkeys, toggleFullscreen } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { ItemCard } from "@/components/engine/ItemCard";
import { GAMES, getGame } from "@/lib/games";
import { chairDeck, type ContentItem } from "@/lib/content";
import { CHAIR_DEFAULTS, selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { burst, finaleConfetti } from "@/lib/celebrate";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/chair")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Hot Chair — AF Power Finale" },
      { name: "description", content: "60 seconds. One card, one student, one point! A two-team speed round." },
      { property: "og:title", content: "Hot Chair — AF Power Finale" },
      { property: "og:description", content: "60 seconds. One card, one student, one point! A two-team speed round." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HotChair,
});

const SHORTCUTS: [string, string][] = [
  ["C / Enter", "Correct (+1)"], ["X / →", "Wrong / skip"], ["A", "Show answer (3 s)"], ["R", "Re-pick student"],
  ["Z", "Undo"], ["Space", "Pause / start round"], ["M", "Mute"], ["F", "Full screen"], ["?", "This help"],
];
const TIEBREAK = 20;

type Phase = "ready" | "play" | "timeup" | "final";
interface Mark { ptr: number; correct: boolean; player: Player | null }

function HotChair() {
  const game = getGame("hot-chair")!;
  const navigate = useNavigate();
  const app = useApp();
  const { teams } = app;
  const opts = { ...CHAIR_DEFAULTS, ...app.chair };

  const deck = useRef<ContentItem[]>([]);
  const [ptr, setPtr] = useState(0);
  const [round, setRound] = useState(0); // 0,1 = main rounds; 2,3 = tiebreak; etc.
  const team = round % 2;
  const tiebreak = round >= 2;
  const [phase, setPhase] = useState<Phase>("play");
  const [scores, setScores] = useState([0, 0]);
  const [tb, setTb] = useState([0, 0]);
  const [revealed, setRevealed] = useState([false, false]);
  const [player, setPlayer] = useState<Player | null>(null);
  const [answer, setAnswer] = useState(false);
  const [help, setHelp] = useState(false);
  const [pulse, setPulse] = useState(0);
  const marks = useRef<Mark[]>([]);
  const ansTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const roundTime = tiebreak ? TIEBREAK : opts.time;
  const timer = useTimer(roundTime, () => setPhase("timeup"));
  const cur = tiebreak ? tb : scores;
  const item = deck.current.length ? deck.current[ptr % deck.current.length] : undefined;

  const teamPool = useCallback((t: number) => useApp.getState().roster.filter((_, i) => i % 2 === t), []);
  const nextStudent = useCallback((t: number, exclude?: string) => {
    const pool = teamPool(t);
    const p = pickPlayer(pool.length > 1 && exclude ? pool.filter((x) => x.id !== exclude) : pool);
    if (p) useApp.getState().bumpPlayer(p.id, "turns");
    setPlayer(p);
  }, [teamPool]);

  // Deck: freshest cards first; cards from the previous game go last.
  useEffect(() => {
    const d = chairDeck(selectionOf(useApp.getState()), opts.mode);
    const used = new Set(sessionUsed["chair"] ?? []);
    deck.current = [...d.filter((i) => !used.has(i.id)), ...d.filter((i) => used.has(i.id))];
    setPtr(0);
    nextStudent(0);
    if (deck.current.length) timer.reset(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Extra ticks in the last 10 seconds (the shared timer ticks the final 5).
  const sec = Math.ceil(timer.remaining);
  useEffect(() => {
    if (phase === "play" && timer.running && sec <= 10 && sec > 5) sfx.tick();
  }, [sec, phase, timer.running]);

  const advance = useCallback(() => {
    setAnswer(false);
    clearTimeout(ansTimer.current);
    setPtr((p) => p + 1);
    nextStudent(team, player?.id);
  }, [nextStudent, team, player]);

  const mark = useCallback((correct: boolean) => {
    if (phase !== "play" || !timer.running || !item) return;
    marks.current.push({ ptr, correct, player });
    if (correct) {
      sfx.correct();
      burst();
      setPulse((x) => x + 1);
      (tiebreak ? setTb : setScores)((s) => s.map((v, i) => (i === team ? v + 1 : v)));
      if (player) app.bumpPlayer(player.id, "points");
    } else sfx.whoosh();
    advance();
  }, [phase, timer.running, item, ptr, player, tiebreak, team, app, advance]);

  const undo = useCallback(() => {
    if (phase !== "play") return;
    const last = marks.current.pop();
    if (!last) return;
    if (last.correct) {
      (tiebreak ? setTb : setScores)((s) => s.map((v, i) => (i === team ? Math.max(0, v - 1) : v)));
      if (last.player) app.bumpPlayer(last.player.id, "points", -1);
    }
    setPtr(last.ptr);
    setPlayer(last.player);
    setAnswer(false);
    sfx.minus();
  }, [phase, tiebreak, team, app]);

  const showAnswer = () => {
    if (phase !== "play") return;
    setAnswer(true);
    clearTimeout(ansTimer.current);
    ansTimer.current = setTimeout(() => setAnswer(false), 3000);
  };

  // Time up: chair cools, drumroll, score flips up, then on to the next team or the final.
  useEffect(() => {
    if (phase !== "timeup") return;
    setAnswer(false);
    marks.current = [];
    sfx.drumroll(1.4);
    const t1 = setTimeout(() => { setRevealed((r) => r.map((v, i) => (i === team ? true : v))); sfx.cymbal(); }, 1500);
    const t2 = setTimeout(() => setPhase(team === 0 ? "ready" : "final"), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [phase, team]);

  const startNext = useCallback(() => {
    if (phase !== "ready") return;
    const nt = round + 1;
    setRound(nt);
    setPhase("play");
    setPtr((p) => p + 1);
    nextStudent(nt % 2);
  }, [phase, round, nextStudent]);
  useEffect(() => {
    if (round > 0) timer.reset(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  const finish = useCallback(() => {
    sessionUsed["chair"] = deck.current.slice(0, ptr + 1).map((i) => i.id);
    const best = [...useApp.getState().roster].sort((a, b) => b.points - a.points)[0];
    app.setLastResult({ gameId: "hot-chair", teams, scores: [scores[0]! + tb[0]!, scores[1]! + tb[1]!], mode: "teams", mvp: best && best.points > 0 ? best.name : undefined, at: Date.now() });
    navigate({ to: "/results" });
  }, [ptr, app, teams, scores, tb, navigate]);

  const startTiebreak = useCallback(() => {
    setTb([0, 0]);
    setRevealed([false, false]);
    setPhase("ready");
  }, []);

  const keys = useMemo(() => ({
    c: () => mark(true), Enter: () => (phase === "ready" ? startNext() : mark(true)),
    x: () => mark(false), ArrowRight: () => mark(false),
    a: showAnswer, r: () => phase === "play" && nextStudent(team, player?.id), z: undo,
    Space: () => (phase === "ready" ? startNext() : phase === "play" ? timer.toggle() : undefined),
    m: () => app.setSettings({ sound: !app.settings.sound }), f: toggleFullscreen, "?": () => setHelp(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [mark, phase, startNext, undo, timer.toggle, team, player, app.settings.sound]);

  // Fire rises with elapsed time: none before halfway, chair fully covered at 0:00.
  const half = timer.duration / 2;
  const fire = Math.min(1, Math.max(0, (half - timer.remaining) / half));
  const danger = phase === "play" && sec <= 10;

  return (
    <GameShell game={game} className="chair-shell" rightSlot={<Button variant="panel" size="xl" onClick={() => setHelp(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <ChairKeys keys={keys} enabled={!help && phase !== "final"} />
      <HelpOverlay open={help} onClose={() => setHelp(false)} shortcuts={SHORTCUTS} />
      {phase === "final" ? (
        <FinalReveal teams={teams} scores={tiebreak ? tb : scores} tiebreak={tiebreak} onTie={startTiebreak} />
      ) : (
        <div className="flex min-h-0 flex-1 flex-col gap-3 px-6 pb-5">
          <div className="flex items-center justify-center gap-4">
            {teams.map((t, i) => (
              <div key={i} className={cn("flex items-center gap-3 rounded-2xl px-5 py-1.5 text-2xl font-bold text-primary-foreground chunky transition-all", i === 0 ? "bg-team1" : "bg-team2", i === team ? "scale-105 ring-4 ring-primary" : "opacity-60")}>
                <span className="text-3xl">{t.icon}</span>{t.name}
                <span key={i === team ? pulse : 0} className={cn("min-w-12 rounded-xl bg-card px-3 text-center font-display text-3xl text-foreground", i === team && pulse > 0 && "animate-pop")}>
                  {i === team || revealed[i] ? cur[i] : "?"}
                </span>
              </div>
            ))}
            {tiebreak && <div className="rounded-full bg-destructive px-4 py-1 text-xl font-bold text-primary-foreground">⚡ Tiebreaker</div>}
          </div>

          {!deck.current.length ? (
            <div className="panel p-10 text-center text-3xl">No cards for this day in this mode yet.</div>
          ) : phase === "ready" ? (
            <div className="panel chair-stage flex flex-1 flex-col items-center justify-center gap-4 text-center" style={{ ["--chair-color" as string]: `var(--team${(round + 1) % 2 + 1})` }}>
              <ChairArt fire={0} speed={0.6} />
              <div className="animate-pop text-6xl font-bold text-stroke">{teams[(round + 1) % 2]!.icon} {teams[(round + 1) % 2]!.name}, get ready!</div>
              <Button variant="game" size="huge" onClick={startNext}><Play /> Start round <Kbd>Space</Kbd></Button>
            </div>
          ) : (
            <>
              <div className="grid min-h-0 flex-1 grid-cols-[minmax(250px,28%)_1fr] gap-5">
                <div className={cn("panel chair-stage relative flex min-h-0 flex-col items-center justify-center gap-2 overflow-hidden p-3", phase === "timeup" && "chair-cool")} style={{ ["--chair-color" as string]: `var(--team${team + 1})` }}>
                  <div className="absolute right-2 top-2"><TimerRing remaining={timer.remaining} duration={timer.duration} running={timer.running} size={110} dangerSeconds={10} /></div>
                  <div className="mt-20 max-w-full truncate rounded-xl border-4 border-foreground bg-card px-4 py-1 text-2xl font-bold">
                    {player ? <>🔥 {player.name}</> : <>{teams[team]!.icon} {teams[team]!.name}</>}
                  </div>
                  <ChairArt fire={fire} speed={danger ? 0.18 : 0.5} />
                  <div className="text-center text-lg font-bold text-muted-foreground">{player ? "In the hot chair!" : "Call a student!"}</div>
                </div>
                {phase === "timeup" ? (
                  <div className="panel flex flex-col items-center justify-center gap-4 text-center">
                    <div className="text-6xl">⏰</div>
                    <div className="font-display text-5xl font-bold">Time's up!</div>
                    {revealed[team] ? (
                      <div className="chair-flip font-display text-6xl font-bold text-stroke">{teams[team]!.name.toUpperCase()}: {cur[team]} point{cur[team] === 1 ? "" : "s"}!</div>
                    ) : <div className="text-4xl font-bold text-muted-foreground">🥁 ...</div>}
                  </div>
                ) : item && (
                  <ItemCard key={`${item.id}-${ptr}`} item={item} showAnswer={answer} compact />
                )}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pb-3">
                <Button variant="success" size="xl" className="px-7" onClick={() => mark(true)}><Check /> Correct <Kbd>C</Kbd></Button>
                <Button variant="panel" size="xl" className="px-7" onClick={() => mark(false)}><X /> Wrong / Skip <Kbd>X</Kbd></Button>
                <Button variant="game" size="xl" className="px-5" onClick={showAnswer}><Eye /> Answer <Kbd>A</Kbd></Button>
                {app.roster.length > 0 && <Button variant="panel" size="xl" className="px-5" onClick={() => nextStudent(team, player?.id)}><Dices /> Re-pick <Kbd>R</Kbd></Button>}
                <Button variant="panel" size="xl" className="px-5" onClick={undo}><Undo2 /> Undo <Kbd>Z</Kbd></Button>
                <Button variant="panel" size="xl" className="px-5" onClick={timer.toggle} aria-label="Pause">{timer.running ? <Pause /> : <Play />} <Kbd>Space</Kbd></Button>
                <Button variant="danger" size="iconLg" onClick={finish} aria-label="End game"><Flag /></Button>
              </div>
            </>
          )}
        </div>
      )}
    </GameShell>
  );
}

function ChairKeys({ keys, enabled }: { keys: Record<string, () => void>; enabled: boolean }) {
  useHotkeys(keys, enabled);
  return null;
}

/** Drawn glowing chair in the active team's color; a wall of fire rises from the floor as time runs out (fire 0..1). */
function ChairArt({ fire, speed }: { fire: number; speed: number }) {
  const spots = [24, 49, 74, 99, 124, 149, 174];
  return (
    <svg viewBox="0 0 200 190" className="chair-glow w-full max-w-64 flex-1 min-h-0" role="img" aria-label={fire > 0 ? "Hot chair catching fire" : "Hot chair"}>
      <ellipse cx="100" cy="178" rx="85" ry="10" fill="var(--foreground)" opacity=".15" />
      <g stroke="var(--foreground)" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="58" y="125" width="10" height="45" rx="4" fill="var(--chair-color)" />
        <rect x="132" y="125" width="10" height="45" rx="4" fill="var(--chair-color)" />
        <rect x="56" y="20" width="88" height="92" rx="22" fill="var(--chair-color)" />
        <rect x="70" y="34" width="60" height="64" rx="14" fill="var(--card)" opacity=".35" />
        <rect x="44" y="104" width="112" height="28" rx="12" fill="var(--chair-color)" />
      </g>
      <g className="chair-firewall" style={{ transform: `scaleY(${fire})`, opacity: fire > 0.02 ? 1 : 0 }}>
        {spots.map((x, i) => (
          <g key={i} style={{ ["--flame-speed" as string]: `${speed + (i % 3) * 0.07}s` }}>
            <g transform={`translate(${x} 184) scale(${2.9 + (i % 3) * 0.4})`}><path className="chair-flame" d="M0 0 C-22 -6 -20 -30 -6 -46 C-8 -30 4 -30 2 -50 C18 -36 24 -10 0 0Z" fill="var(--team1)" stroke="var(--foreground)" strokeWidth="2" strokeLinejoin="round" style={{ animationDelay: `${i * 0.09}s` }} /></g>
            <g transform={`translate(${x} 182) scale(${1.2 + (i % 3) * 0.25})`}><path className="chair-flame" d="M0 0 C-18 -6 -14 -28 -2 -40 C2 -26 18 -18 0 0Z" fill="var(--game-demo)" style={{ animationDelay: `${i * 0.11}s` }} /></g>
          </g>
        ))}
      </g>
    </svg>
  );
}

function FinalReveal({ teams, scores, tiebreak, onTie }: { teams: { name: string; icon: string }[]; scores: number[]; tiebreak: boolean; onTie: () => void }) {
  const [shown, setShown] = useState(0);
  const navigate = useNavigate();
  const app = useApp();
  const tie = scores[0] === scores[1];
  const winner = scores[0]! > scores[1]! ? 0 : 1;
  const mvp = [...app.roster].sort((a, b) => b.points - a.points)[0];
  const [nextGame] = useState(() => GAMES.filter((g) => g.id !== "hot-chair")[Math.floor(Math.random() * (GAMES.length - 1))]);
  useEffect(() => {
    sfx.drumroll(2.2);
    const ts = [
      setTimeout(() => { setShown(1); sfx.cymbal(); }, 1300),
      setTimeout(() => { setShown(2); sfx.cymbal(); }, 2500),
      setTimeout(() => { setShown(3); if (tie) sfx.uhoh(); else { sfx.fanfare(); finaleConfetti(); } }, 3500),
    ];
    return () => ts.forEach(clearTimeout);
  }, [tie]);
  const playAgain = useCallback(() => {
    useApp.getState().setLastResult({ gameId: "hot-chair", teams, scores, mode: "teams", at: Date.now() });
    navigate({ to: "/setup", search: { game: "hot-chair" } });
  }, [teams, scores, navigate]);
  useHotkeys({ Space: () => shown >= 3 && (tie ? onTie() : playAgain()), Enter: () => shown >= 3 && (tie ? onTie() : playAgain()) });
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 pb-6 text-center">
      <div className="text-3xl font-bold text-muted-foreground">{tiebreak ? "⚡ Tiebreaker results" : "🥁 And the scores are..."}</div>
      <div className="flex gap-10">
        {teams.map((t, i) => (
          <div key={i} className={cn("panel relative flex w-80 flex-col items-center gap-2 p-6", shown >= 3 && !tie && winner === i && "ring-8 ring-primary")}>
            {shown >= 3 && !tie && winner === i && (
              <div className={cn("animate-pop absolute -top-12 text-9xl drop-shadow-2xl", i === 0 ? "-left-6" : "-right-6")}>🏆</div>
            )}
            <div className="text-6xl">{t.icon}</div>
            <div className="text-3xl font-bold">{t.name}</div>
            <div className={cn("grid h-32 w-48 place-items-center rounded-2xl font-display text-8xl font-bold text-primary-foreground", i === 0 ? "bg-team1" : "bg-team2")}>
              {shown > i ? <span className="chair-flip">{scores[i]}</span> : "?"}
            </div>
          </div>
        ))}
      </div>
      {shown >= 3 && (
        <>
          <div className="animate-pop font-display text-6xl font-bold text-stroke">
            {tie ? "IT'S A TIE! 😮" : `${teams[winner]!.name.toUpperCase()} WIN! 🔥`}
          </div>
          {tie ? (
            <Button variant="game" size="huge" onClick={onTie}>⚡ {TIEBREAK}-second tiebreaker <Kbd>Space</Kbd></Button>
          ) : (
            <>
              {mvp && mvp.points > 0 && (
                <div className="panel animate-pop px-10 py-3 text-3xl font-bold">
                  🌟 MVP of the day: <span className="text-primary">{mvp.name}</span>!
                </div>
              )}
              <div className="text-4xl font-bold text-stroke">See you next class, champions! 👋</div>
              {nextGame && (
                <div className="panel flex items-center gap-4 px-6 py-3">
                  <div className={cn("grid h-16 w-16 place-items-center rounded-2xl text-4xl chunky", nextGame.accent)}>{nextGame.icon}</div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-muted-foreground">Next class:</div>
                    <div className="text-3xl font-bold">{nextGame.name}</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Button variant="game" size="huge" onClick={playAgain}><RotateCcw /> Play again <Kbd>Space</Kbd></Button>
                <Button asChild variant="panel" size="huge" aria-label="Home"><Link to="/"><Home /></Link></Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
