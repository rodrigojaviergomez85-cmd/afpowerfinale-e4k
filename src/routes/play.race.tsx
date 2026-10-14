import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, SkipForward, Eye, Dices, Undo2, Pause, Play, Flag, Plus, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { useTimer, TimerRing } from "@/components/engine/Timer";
import { TurnPicker } from "@/components/engine/TurnPicker";
import { useHotkeys, toggleFullscreen } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { ItemCard } from "@/components/engine/ItemCard";
import { RaceTrack, PLANETS, type LaneFx, type Planet } from "@/components/race/RaceTrack";
import { getGame } from "@/lib/games";
import { drawItems, shuffle, type ContentItem } from "@/lib/content";
import { RACE_DEFAULTS, selectionOf, sessionUsed, useApp, type Player, type RopeType, type Team } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/race")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Rocket Race — AF Power Finale" },
      { name: "description", content: "Two teams race their rockets to a planet. First rocket to the planet wins!" },
      { property: "og:title", content: "Rocket Race — AF Power Finale" },
      { property: "og:description", content: "Two teams race their rockets to a planet. First rocket to the planet wins!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RocketRace,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause timer · skip landing"], ["C / Enter", "Correct (rocket flies!)"], ["→", "Skip / next"], ["1 / 2", "Team 1 / Team 2 answered correctly (steal!)"],
  ["Z", "Undo last move"], ["A", "Show answer"], ["R", "Random player"], ["M", "Mute"], ["F", "Full screen"], ["?", "This help"],
];

const useOpts = () => ({ ...RACE_DEFAULTS, ...useApp((s) => s.race) });
const typeOf = (i: ContentItem): RopeType => (i.kind === "S" || i.kind === "E" ? "P" : i.kind);

/** Same mixed-dynamics queue as Bridge Builder / Tightrope: rotate types, no two in a row, max 2 hidden pictures. */
function drawRace(n: number, off: RopeType[]) {
  const r = drawItems(selectionOf(useApp.getState()), n + 10, "mix", sessionUsed["race"] ?? []);
  let h = 0;
  const pool = r.items.filter((i) => !off.includes(typeOf(i))).filter((i) => i.kind !== "H" || ++h <= 2);
  const buckets = new Map<RopeType, ContentItem[]>();
  for (const i of pool) buckets.set(typeOf(i), [...(buckets.get(typeOf(i)) ?? []), i]);
  const out: ContentItem[] = [];
  let last: RopeType | null = null;
  while (out.length < n && [...buckets.values()].some((b) => b.length)) {
    const avail = shuffle([...buckets.entries()].filter(([, b]) => b.length));
    const diff = avail.filter(([t]) => t !== last).sort((a, b) => b[1].length - a[1].length);
    const [t, b] = diff[0] ?? avail[0]!;
    out.push(b.shift()!);
    last = t;
  }
  return { items: out, review: r.review };
}

function RocketRace() {
  const base = getGame("rocket-race")!;
  const [round, setRound] = useState(0);
  const planet = useMemo(() => PLANETS[Math.floor(Math.random() * PLANETS.length)]!, [round]); // eslint-disable-line react-hooks/exhaustive-deps
  const stops = useOpts().stops;
  const game = useMemo(() => ({ ...base, rules: [
    { icon: "🚀", text: `Race to ${planet.name}! ${planet.icon}` },
    { icon: "⛽", text: `Correct answer = fly 1 stop. ${stops} stops to win!` },
    { icon: "🌈", text: "3 in a row = TURBO! (2 stops)" },
  ] }), [base, planet, stops]);
  const [help, setHelp] = useState(false);
  return (
    <GameShell key={round} game={game} rightSlot={<Button variant="panel" size="xl" onClick={() => setHelp(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={help} onClose={() => setHelp(false)} shortcuts={SHORTCUTS} />
      <RaceGame planet={planet} help={help} openHelp={() => setHelp(true)} onRematch={() => setRound((r) => r + 1)} />
    </GameShell>
  );
}

type Action = { team: number; moves: number; playerId?: string | undefined; prevStreak: { team: number; n: number } };

function RaceGame({ planet, help, openHelp }: { planet: Planet; help: boolean; openHelp: () => void; onRematch: () => void }) {
  const navigate = useNavigate();
  const opts = useOpts();
  const teams = useApp((s) => s.teams);
  const roster = useApp((s) => s.roster);
  const calm = useApp((s) => s.settings.calm);
  const stops = opts.stops;

  const init = useMemo(() => drawRace(opts.cards, opts.off), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [items, setItems] = useState<ContentItem[]>(init.items);
  const [idx, setIdx] = useState(0);
  const [pos, setPos] = useState([0, 0]);
  const [history, setHistory] = useState<Action[]>([]);
  const [streak, setStreak] = useState({ team: -1, n: 0 });
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [suddenDeath, setSuddenDeath] = useState(false);
  const [fx, setFx] = useState<(LaneFx | undefined)[]>([undefined, undefined]);
  const [turboPop, setTurboPop] = useState(0);
  const [picking, setPicking] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);
  const [landing, setLanding] = useState<number[] | null>(null);
  const [step, setStep] = useState(0);
  const scored = useRef(false);
  const opened = useRef(0);
  const posRef = useRef(pos);
  posRef.current = pos;

  const activeTeam = idx % 2;
  const item = items[idx];

  const sputter = (team: number) => { sfx.pfft(); setFx((f) => f.map((v, i) => (i === team ? { key: Date.now(), kind: "sputter" } : v))); };
  const timer = useTimer(opts.turnTime, () => { setTimeUp(true); sputter(activeTeam); });

  useEffect(() => { if (items.length) timer.reset(true); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const finish = useCallback((p: number[]) => {
    sessionUsed["race"] = items.map((i) => i.id);
    useApp.getState().setLastResult({ gameId: "rocket-race", teams, scores: p, mode: "teams", at: Date.now() });
    navigate({ to: "/results" });
  }, [items, teams, navigate]);

  const land = (p: number[]) => {
    timer.setRunning(false);
    const lead = p[0]! === p[1]! ? [0, 1] : [p[0]! > p[1]! ? 0 : 1];
    setLanding(lead);
    setStep(0);
  };

  const next = () => {
    const p = posRef.current;
    setShowAnswer(false); setTimeUp(false); scored.current = false; opened.current = 0; setPlayer(null);
    if (p[0]! >= stops || p[1]! >= stops) return land(p);
    const last = idx + 1 >= items.length;
    // After the cards run out (or each sudden-death round), the rocket ahead wins; a tie = sudden death.
    if (suddenDeath ? activeTeam === 1 : last) {
      if (p[0] !== p[1]) return land(p);
      setSuddenDeath(true);
    }
    if (last) {
      const extra = shuffle(items.filter((i) => i.kind !== "H")).slice(0, 2);
      setItems((it) => [...it, ...(extra.length === 2 ? extra : [items[0]!, items[0]!])]);
    }
    sfx.whoosh();
    setIdx((i) => i + 1);
    timer.reset(true);
  };

  const correctFor = (team: number) => {
    if (scored.current || !item || landing) return;
    scored.current = true;
    const n = streak.team === team ? streak.n + 1 : 1;
    const turbo = n >= 3 || (item.hidden && opened.current <= 4);
    const moves = turbo ? 2 : 1;
    setHistory((h) => [...h, { team, moves, playerId: player?.id, prevStreak: streak }]);
    setStreak({ team, n });
    const np = pos.map((v, i) => (i === team ? Math.min(stops, v + moves) : v));
    setPos(np); posRef.current = np;
    if (player) useApp.getState().bumpPlayer(player.id, "points");
    sfx.correct(); sfx.blast(turbo);
    if (turbo) setTurboPop((x) => x + 1);
    setFx((f) => f.map((v, i) => (i === team ? { key: Date.now(), kind: turbo ? "turbo" : "move" } : v)));
    setShowAnswer(true);
    timer.setRunning(false);
    setTimeout(next, np[team]! >= stops ? 900 : 1400);
  };
  const correct = () => correctFor(activeTeam);
  const skip = () => { if (landing) return; if (!scored.current && !timeUp) sputter(activeTeam); setStreak({ team: -1, n: 0 }); next(); };
  const undo = () => {
    const last = history[history.length - 1];
    if (!last || landing) return;
    setPos((p) => p.map((v, i) => (i === last.team ? Math.max(0, v - last.moves) : v)));
    if (last.playerId) useApp.getState().bumpPlayer(last.playerId, "points", -1);
    setStreak(last.prevStreak);
    setHistory((h) => h.slice(0, -1));
    sfx.minus();
  };
  const pick = () => { if (roster.length && !picking) setPicking(true); };

  // landing sequence
  useEffect(() => {
    if (!landing) return;
    const seq: [number, () => void][] = [
      [0, () => { sfx.thump(); }],
      [700, () => { setStep(1); sfx.yahoo(); }],
      [1500, () => { setStep(2); sfx.win(); sfx.firework(); fireworks(calm); }],
      [2400, () => { setStep(3); sfx.firework(); sfx.cheer(); }],
      [4200, () => finish(posRef.current)],
    ];
    const ts = seq.map(([t, f]) => setTimeout(f, t));
    return () => ts.forEach(clearTimeout);
  }, [landing]); // eslint-disable-line react-hooks/exhaustive-deps

  const keys: Record<string, () => void> = landing
    ? { Space: () => finish(posRef.current), Enter: () => finish(posRef.current) }
    : {
        Space: timer.toggle, "1": () => correctFor(0), "2": () => correctFor(1), ArrowRight: skip,
        a: () => setShowAnswer((v) => !v), r: pick, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }),
        z: undo, f: toggleFullscreen, Enter: correct, c: correct, "?": openHelp,
      };
  useHotkeys(keys, !help && !picking);

  if (landing) return <Landing teams={teams} winners={landing} planet={planet} pos={pos} stops={stops} step={step} />;

  const t = teams[activeTeam]!;
  return (
    <div className="fit-gap relative flex min-h-0 flex-1 flex-col gap-3 px-8 pb-6">
      <TurnPicker open={picking} onDone={(p) => { setPicking(false); setPlayer(p); }} />
      <div className="relative">
        <RaceTrack teams={teams} pos={pos} stops={stops} planet={planet} fx={fx} active={activeTeam} className="fit-track" />
        {turboPop > 0 && <span key={turboPop} className="animate-rise pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rotate-[-6deg] rounded-3xl px-6 font-display text-7xl font-bold text-stroke chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>TURBO! 🌈</span>}
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
        <Button variant="danger" size="xl" onClick={() => land(pos)}><Flag /> End</Button>
      </div>
    </div>
  );
}

function fireworks(calm: boolean) {
  const n = calm ? 2 : 5;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      void confetti({ particleCount: calm ? 40 : 90, spread: 360, startVelocity: 30, origin: { x: 0.6 + Math.random() * 0.3, y: 0.2 + Math.random() * 0.2 }, disableForReducedMotion: true });
    }, i * 300);
  }
}

function Landing({ teams, winners, planet, pos, stops, step }: { teams: Team[]; winners: number[]; planet: Planet; pos: number[]; stops: number; step: number }) {
  const double = winners.length === 2;
  const w = teams[winners[0]!]!;
  const loser = double ? -1 : 1 - winners[0]!;
  const shownPos = pos.map((p, i) => (winners.includes(i) ? stops : step >= 3 ? stops : p));
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-5 overflow-hidden px-8">
      <RaceTrack teams={teams} pos={shownPos} stops={stops} planet={planet} fx={[undefined, undefined]} active={-1} landed={step >= 1 ? (step >= 3 ? [0, 1] : winners) : []} className="h-[260px] w-full" />
      {step >= 1 && !double && (
        <div className="animate-hop text-6xl">🧑‍🚀{w.icon} <span className="inline-block rounded-lg bg-card px-3 text-3xl font-bold">🚩 {w.name}</span></div>
      )}
      {step >= 1 && <div className="flex gap-3 text-5xl">{["💨", "💨", "💨"].map((d, i) => <span key={i} className="animate-smoke" style={{ animationDelay: `${i * 150}ms` }}>{d}</span>)}</div>}
      {step >= 2 && (
        <div className="animate-banner rounded-3xl bg-accent px-10 py-4 text-center font-display text-6xl font-bold uppercase text-accent-foreground chunky">
          {double ? "DOUBLE LANDING! Everybody wins! 🎉" : <>{w.name} reached {planet.name}! 🏁</>}
        </div>
      )}
      {step >= 3 && loser >= 0 && <div className="animate-pop rounded-full bg-secondary px-6 py-2 text-3xl font-bold">{teams[loser]!.icon} {teams[loser]!.name}: Great race! 👏</div>}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}
