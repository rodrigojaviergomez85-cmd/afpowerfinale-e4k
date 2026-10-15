import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Check, SkipForward, Eye, Dices, Undo2, Pause, Play, Flag, Plus, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { useTimer, TimerRing } from "@/components/engine/Timer";
import { TurnPicker } from "@/components/engine/TurnPicker";
import { useHotkeys, toggleFullscreen } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { ItemCard } from "@/components/engine/ItemCard";
import { TugScene, type TugEnding, type TugFx } from "@/components/tug/TugScene";
import { getGame } from "@/lib/games";
import { drawItems, shuffle, type ContentItem } from "@/lib/content";
import { TUG_DEFAULTS, selectionOf, sessionUsed, useApp, type Player, type Team } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/tug")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Muddy Tug of War — AF Power Finale" },
      { name: "description", content: "Two teams pull the rope over the mud puddle. Correct answers pull the ribbon — losers get muddy!" },
      { property: "og:title", content: "Muddy Tug of War — AF Power Finale" },
      { property: "og:description", content: "Two teams pull the rope over the mud puddle. Correct answers pull the ribbon — losers get muddy!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MuddyTug,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause timer · skip ending"], ["C / Enter", "Correct (pull the rope!)"], ["→", "Skip / next"], ["1 / 2", "Team 1 / Team 2 answered correctly (steal!)"],
  ["Z", "Undo last move"], ["A", "Show answer"], ["R", "Random player"], ["M", "Mute"], ["F", "Full screen"], ["?", "This help"],
];

const useOpts = () => ({ ...TUG_DEFAULTS, ...useApp((s) => s.tug) });

/** Balanced mix from the content bank, at most 2 hidden pictures per round. */
function drawTug(n: number) {
  return drawItems(selectionOf(useApp.getState()), n, "mix", sessionUsed["mud-tug"] ?? [], 2);
}

function MuddyTug() {
  const base = getGame("mud-tug")!;
  const [round, setRound] = useState(0);
  const pulls = useOpts().pulls;
  const game = { ...base, rules: [
    { icon: "🪢", text: `Correct answer = pull the ribbon toward your team! ${pulls} pulls to win.` },
    { icon: "🧲", text: "Pull the ribbon past your line — the other team gets muddy!" },
    { icon: "💪", text: "3 in a row = POWER PULL! (2 steps)" },
  ] };
  const [help, setHelp] = useState(false);
  return (
    <GameShell key={round} game={game} rightSlot={<Button variant="panel" size="xl" onClick={() => setHelp(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={help} onClose={() => setHelp(false)} shortcuts={SHORTCUTS} />
      <TugGame help={help} openHelp={() => setHelp(true)} onRematch={() => setRound((r) => r + 1)} />
    </GameShell>
  );
}

type Action = { team: number; moves: number; playerId?: string | undefined; prevStreak: { team: number; n: number } };

function TugGame({ help, openHelp, onRematch: _onRematch }: { help: boolean; openHelp: () => void; onRematch: () => void }) {
  void _onRematch;
  const navigate = useNavigate();
  const opts = useOpts();
  const teams = useApp((s) => s.teams);
  const roster = useApp((s) => s.roster);
  const calm = useApp((s) => s.settings.calm);
  const pulls = opts.pulls;

  const init = useMemoSafe(opts.cards);
  const [items, setItems] = useState<ContentItem[]>(init.items);
  const [idx, setIdx] = useState(0);
  const [pos, setPos] = useState([0, 0]);
  const [history, setHistory] = useState<Action[]>([]);
  const [streak, setStreak] = useState({ team: -1, n: 0 });
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [suddenDeath, setSuddenDeath] = useState(false);
  const [sdRounds, setSdRounds] = useState(0);
  const [fx, setFx] = useState<TugFx | undefined>(undefined);
  const [powerPop, setPowerPop] = useState(0);
  const [picking, setPicking] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);
  const [finale, setFinale] = useState<{ winner: number | null; tie: boolean } | null>(null);
  const [step, setStep] = useState(0);
  const scored = useRef(false);
  const opened = useRef(0);
  const posRef = useRef(pos);
  posRef.current = pos;

  const activeTeam = idx % 2;
  const item = items[idx];

  const slip = (team: number) => {
    sfx.splat(); sfx.boing();
    setFx({ key: Date.now(), kind: "slip", team });
  };
  const timer = useTimer(opts.turnTime, () => { setTimeUp(true); slip(activeTeam); });

  useEffect(() => { if (items.length) timer.reset(true); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const goResults = useCallback((p: number[]) => {
    sessionUsed["mud-tug"] = items.map((i) => i.id);
    useApp.getState().setLastResult({ gameId: "mud-tug", teams, scores: p, mode: "teams", at: Date.now() });
    navigate({ to: "/results" });
  }, [items, teams, navigate]);

  const endRound = useCallback((winner: number | null) => {
    timer.setRunning(false);
    setFinale({ winner, tie: winner === null });
    setStep(0);
  }, [timer]);

  const next = useCallback(() => {
    const p = posRef.current;
    setShowAnswer(false); setTimeUp(false); scored.current = false; opened.current = 0; setPlayer(null);
    if (p[0]! >= pulls) return endRound(0);
    if (p[1]! >= pulls) return endRound(1);
    const last = idx + 1 >= items.length;
    // Cards are out: the team with the ribbon on its side wins; centered ribbon = sudden death,
    // up to 3 cards per team, then it's a tie.
    if (suddenDeath ? activeTeam === 1 : last) {
      if (p[0] !== p[1]) return endRound(p[0]! > p[1]! ? 0 : 1);
      if (suddenDeath && sdRounds >= 2) return endRound(null);
      setSuddenDeath(true);
      setSdRounds((r) => r + 1);
    }
    if (last) {
      const extra = shuffle(items.filter((i) => i.kind !== "H")).slice(0, 2);
      setItems((it) => [...it, ...(extra.length === 2 ? extra : [items[0]!, items[0]!])]);
    }
    sfx.whoosh();
    setIdx((i) => i + 1);
    timer.reset(true);
  }, [idx, items, pulls, suddenDeath, sdRounds, activeTeam, endRound, timer]);

  const correctFor = (team: number) => {
    if (scored.current || !item || finale) return;
    scored.current = true;
    const n = streak.team === team ? streak.n + 1 : 1;
    const power = n >= 3 || (item.hidden && opened.current <= 4);
    const moves = power ? 2 : 1;
    setHistory((h) => [...h, { team, moves, playerId: player?.id, prevStreak: streak }]);
    setStreak({ team, n });
    const np = pos.map((v, i) => (i === team ? Math.min(pulls, v + moves) : v));
    setPos(np); posRef.current = np;
    if (player) useApp.getState().bumpPlayer(player.id, "points");
    sfx.correct(); sfx.heave(power);
    if (power) { sfx.rubber(); setPowerPop((x) => x + 1); }
    setFx({ key: Date.now(), kind: power ? "power" : "pull", team });
    setShowAnswer(true);
    timer.setRunning(false);
    setTimeout(next, np[team]! >= pulls ? 900 : 1400);
  };
  const correct = () => correctFor(activeTeam);
  const skip = () => { if (finale) return; if (!scored.current && !timeUp) slip(activeTeam); setStreak({ team: -1, n: 0 }); next(); };
  const undo = () => {
    const last = history[history.length - 1];
    if (!last || finale) return;
    setPos((p) => p.map((v, i) => (i === last.team ? Math.max(0, v - last.moves) : v)));
    if (last.playerId) useApp.getState().bumpPlayer(last.playerId, "points", -1);
    setStreak(last.prevStreak);
    setHistory((h) => h.slice(0, -1));
    sfx.minus();
  };
  const pick = () => { if (roster.length && !picking) setPicking(true); };

  // finale sequence
  useEffect(() => {
    if (!finale) return;
    const seq: [number, () => void][] = [
      [0, () => { sfx.sploosh(); }],
      [900, () => { setStep(1); sfx.boing(); }],
      [1800, () => {
        setStep(2);
        if (finale.tie) { sfx.splash(); }
        else { sfx.win(); sfx.fanfare(); }
        confettiBurst(calm);
      }],
      [2700, () => { setStep(3); sfx.cheer(); }],
      [4300, () => goResults(posRef.current)],
    ];
    const ts = seq.map(([t, f]) => setTimeout(f, t));
    return () => ts.forEach(clearTimeout);
  }, [finale, calm, goResults]);

  const keys: Record<string, () => void> = finale
    ? { Space: () => goResults(posRef.current), Enter: () => goResults(posRef.current) }
    : {
        Space: timer.toggle, "1": () => correctFor(0), "2": () => correctFor(1), ArrowRight: skip,
        a: () => setShowAnswer((v) => !v), r: pick, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }),
        z: undo, f: toggleFullscreen, Enter: correct, c: correct, "?": openHelp,
      };
  useHotkeys(keys, !help && !picking);

  if (finale) {
    const ending: TugEnding = finale.tie
      ? { losers: [0, 1], step, tie: true }
      : { losers: [1 - finale.winner!], step };
    return <WinScreen teams={teams} ending={ending} winner={finale.winner} pos={pos} pulls={pulls} step={step} />;
  }

  const t = teams[activeTeam]!;
  return (
    <div className="fit-gap relative flex min-h-0 flex-1 flex-col gap-3 px-8 pb-6">
      <TurnPicker open={picking} onDone={(p) => { setPicking(false); setPlayer(p); }} />
      <div className="relative">
        <TugScene teams={teams} pos={pos} pulls={pulls} active={activeTeam} fx={fx} className="w-full" />
        {powerPop > 0 && <span key={powerPop} className="animate-rise pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rotate-[-6deg] rounded-3xl px-6 font-display text-7xl font-bold text-stroke chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>POWER PULL! 💪</span>}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className={cn("flex items-center gap-3 rounded-full px-6 py-2 text-3xl font-bold uppercase text-primary-foreground chunky", activeTeam === 0 ? "bg-team1" : "bg-team2")}>
          {t.icon} {t.name}’s turn
          {player && <span className="rounded-full bg-card px-3 normal-case text-foreground">🎤 {player.name}</span>}
        </div>
        <div className="rounded-full bg-secondary px-5 py-2 text-2xl font-bold">
          {suddenDeath ? <span className="text-destructive">⚡ Sudden death!</span> : <>Card {idx + 1} / {items.length}</>}
          {init.review && <span className="ml-2 text-primary">· Review mode</span>}
          {streak.n >= 2 && <span className="ml-2">🔥 {streak.n} in a row</span>}
        </div>
        <div className="flex items-center gap-2">
          <div className="fit-timer"><TimerRing remaining={timer.remaining} duration={timer.duration} running={timer.running} size={96} /></div>
          <Button variant="panel" size="xl" onClick={timer.toggle}>{timer.running ? <Pause /> : <Play />} <Kbd>Space</Kbd></Button>
        </div>
      </div>

      {item ? (
        <div key={item.id + idx} className="relative flex min-h-0 flex-1">
          <ItemCard item={item} showAnswer={showAnswer} compact autoReveal paused={!timer.running || help} onReveal={(n) => { opened.current = n; }} />
          {timeUp && !showAnswer && <div className="animate-pop absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-destructive px-8 py-2 text-3xl font-bold text-primary-foreground">⏰ Time's up! {teams[1 - activeTeam]!.icon} {teams[1 - activeTeam]!.name} can steal — press {2 - activeTeam}</div>}
        </div>
      ) : (
        <div className="panel flex flex-1 items-center justify-center p-8 text-4xl font-bold">No items for this day.</div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="success" size="huge" onClick={correct}><Check /> Correct <Kbd>C</Kbd></Button>
        <Button variant="panel" size="huge" onClick={skip}><SkipForward /> Skip <Kbd>→</Kbd></Button>
        <Button variant="game" size="xl" onClick={() => setShowAnswer((v) => !v)}><Eye /> Answer <Kbd>A</Kbd></Button>
        <Button variant="team1" size="xl" onClick={() => correctFor(0)}><Plus /> Team 1 <Kbd>1</Kbd></Button>
        <Button variant="team2" size="xl" onClick={() => correctFor(1)}><Plus /> Team 2 <Kbd>2</Kbd></Button>
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={pick}><Dices /> Pick <Kbd>R</Kbd></Button>}
        <Button variant="panel" size="xl" onClick={undo}><Undo2 /> Undo <Kbd>Z</Kbd></Button>
        <Button variant="danger" size="xl" onClick={() => endRound(pos[0]! === pos[1]! ? null : pos[0]! > pos[1]! ? 0 : 1)}><Flag /> End</Button>
      </div>
    </div>
  );
}

// Draw once per mount (cards for the round).
function useMemoSafe(cards: number) {
  return useState(() => drawTug(cards))[0];
}

function confettiBurst(calm: boolean) {
  const n = calm ? 2 : 5;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      void confetti({ particleCount: calm ? 40 : 90, spread: 360, startVelocity: 30, origin: { x: 0.3 + Math.random() * 0.4, y: 0.25 + Math.random() * 0.2 }, disableForReducedMotion: true });
    }, i * 300);
  }
}

const MUD_BLOBS = [
  { left: "-4%", bottom: "-6%", w: 260, h: 130, rot: -12 },
  { left: "22%", bottom: "-10%", w: 320, h: 150, rot: 8 },
  { right: "-3%", bottom: "-4%", w: 300, h: 140, rot: 14 },
  { left: "45%", bottom: "-12%", w: 280, h: 120, rot: -6 },
];

function WinScreen({ teams, ending, winner, pos, pulls, step }: { teams: Team[]; ending: TugEnding; winner: number | null; pos: number[]; pulls: number; step: number }) {
  const tie = !!ending.tie;
  const w = winner !== null ? teams[winner]! : null;
  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-6 overflow-hidden px-8">
      {/* mud splashes across the screen, under the text */}
      {step >= 0 && MUD_BLOBS.map((b, i) => (
        <div key={i} aria-hidden className="animate-pop pointer-events-none absolute rounded-[45%] opacity-90" style={{ ...b, width: b.w, height: b.h, left: b.left, right: b.right, background: "var(--mud)" }} />
      ))}
      <TugScene teams={teams} pos={pos} pulls={pulls} active={-1} fx={undefined} ending={ending} className="w-full max-w-4xl" />
      {step >= 0 && !tie && (
        <div key="sploosh" className="animate-pop font-display text-[7rem] font-bold leading-none text-stroke" style={{ color: "var(--ribbon-deep)" }}>SPLOOSH!</div>
      )}
      {step >= 2 && (
        <div className="animate-banner rounded-3xl bg-accent px-10 py-4 text-center font-display text-6xl font-bold uppercase text-accent-foreground chunky">
          {tie ? "IT'S A TIE! Everybody in the mud! 🎉" : <>{w!.name} pulled it off! 🏆</>}
        </div>
      )}
      {step >= 3 && !tie && <div className="animate-pop rounded-full bg-secondary px-6 py-2 text-3xl font-bold">{teams[ending.losers[0]!]!.icon} {teams[ending.losers[0]!]!.name}: So muddy, so funny! 😂</div>}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}
