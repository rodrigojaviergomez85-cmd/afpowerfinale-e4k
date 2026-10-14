import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, X, Eye, Hand, Dices, Pause, HelpCircle, Home, RotateCcw, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { ItemCard } from "@/components/engine/ItemCard";
import { useHotkeys } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { TimerRing } from "@/components/engine/Timer";
import { pickPlayer } from "@/components/engine/TurnPicker";
import { Canyon, type MaxMood } from "@/components/bridge/Canyon";
import { getGame, GAMES } from "@/lib/games";
import { drawItems, type ContentItem } from "@/lib/content";
import { BOMB_PRESETS, selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/bridge")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Bridge Builder — AF Power Finale" },
      { name: "description", content: "Whole-class challenge: build the bridge before the river rises!" },
      { property: "og:title", content: "Bridge Builder — AF Power Finale" },
      { property: "og:description", content: "Whole-class challenge: build the bridge before the river rises!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BridgeBuilder,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause"], ["C / Enter", "Correct (+1 plank)"], ["X", "Wrong / skip (wave!)"], ["A", "Show answer"],
  ["P", "Pass to a friend"], ["R", "Re-pick student"], ["F", "Sandbags 🪣"], ["M", "Mute"], ["?", "This help"],
];

const useOpts = () => useApp((s) => s.bridge ?? BOMB_PRESETS["Normal"]!);

function BridgeBuilder() {
  const base = getGame("bridge-builder")!;
  const target = useOpts().target;
  const game = useMemo(() => ({ ...base, rules: [{ icon: "🌉", text: `Build ${target} planks before the river rises!` }, { icon: "🤝", text: "Work together!" }] }), [base, target]);
  const [round, setRound] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <GameShell key={round} game={game} className="bridge-shell" rightSlot={<Button variant="panel" size="xl" onClick={() => setHelpOpen(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} shortcuts={SHORTCUTS} />
      <BridgeGame onRematch={() => setRound((r) => r + 1)} helpOpen={helpOpen} openHelp={() => setHelpOpen(true)} />
    </GameShell>
  );
}

/** Same mixed queue as Beat the Bomb, but at most 2 hidden pictures per game. */
function drawBridge(target: number, mix: Parameters<typeof drawItems>[2]) {
  const r = drawItems(selectionOf(useApp.getState()), target + 8, mix, sessionUsed["bridge"] ?? []);
  let h = 0;
  const items = r.items.filter((i) => i.kind !== "H" || ++h <= 2).slice(0, target);
  return { items, review: r.review };
}

type Phase = "play" | "lose" | "win" | "end";
interface Float { id: number; text: string; tone: "good" | "bad" }

function BridgeGame({ onRematch, helpOpen, openHelp }: { onRematch: () => void; helpOpen: boolean; openHelp: () => void }) {
  const opts = useOpts();
  const calm = useApp((s) => s.settings.calm);
  const roster = useApp((s) => s.roster);

  const init = useMemo(() => drawBridge(opts.target, opts.mix), []); // eslint-disable-line react-hooks/exhaustive-deps
  const goal = Math.min(opts.target, init.items.length);
  const total = opts.time;

  const [queue, setQueue] = useState<ContentItem[]>(init.items);
  const [retry, setRetry] = useState<ContentItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [remaining, setRemaining] = useState(total);
  const [paused, setPaused] = useState(false);
  const [frozenUntil, setFrozenUntil] = useState(0);
  const [bagsUsed, setBagsUsed] = useState(false);
  const [phase, setPhase] = useState<Phase>("play");
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [passed, setPassed] = useState<Set<string>>(new Set());
  const [heroes, setHeroes] = useState<string[]>([]);
  const [answerUntil, setAnswerUntil] = useState(0);
  const [wave, setWave] = useState(0);
  const [cheerUntil, setCheerUntil] = useState(0);
  const [floats, setFloats] = useState<Float[]>([]);
  const [now, setNow] = useState(Date.now());
  const [won, setWon] = useState(false);
  const usedIds = useRef<string[]>([]);

  const item = queue[0];
  const frozen = now < frozenUntil;
  const pct = Math.max(0, remaining / total);
  const secs = Math.ceil(remaining);

  const choosePlayer = useCallback((exclude?: string) => {
    const r = useApp.getState().roster.filter((p) => p.id !== exclude);
    const p = pickPlayer(r);
    if (p) useApp.getState().bumpPlayer(p.id, "turns");
    setPlayer(p);
  }, []);
  useEffect(() => { choosePlayer(); }, [choosePlayer]);
  useEffect(() => { if (item) usedIds.current.push(item.id); }, [item]);

  useEffect(() => {
    if (phase !== "play" || paused || helpOpen) return;
    let last = performance.now();
    const id = setInterval(() => {
      const t = performance.now();
      const dt = (t - last) / 1000;
      last = t;
      setNow(Date.now());
      if (Date.now() < frozenUntil) return;
      setRemaining((r) => Math.max(0, r - dt));
    }, 100);
    return () => clearInterval(id);
  }, [phase, paused, helpOpen, frozenUntil]);

  const lastSec = useRef(secs);
  const stormed = useRef(false);
  useEffect(() => {
    if (phase !== "play") return;
    if (secs !== lastSec.current) {
      lastSec.current = secs;
      if (secs <= 10 && secs > 0) sfx.tick();
      if (pct < 0.25 && !calm && secs % 9 === 0) sfx.thunder();
    }
    if (pct < 0.25 && !stormed.current) { stormed.current = true; sfx.thunder(); }
    if (remaining <= 0) { setPhase("lose"); setStep(0); }
  }, [secs, remaining, phase, pct, calm]);

  const pop = (text: string, tone: Float["tone"]) => {
    const id = Date.now() + Math.random();
    setFloats((f) => [...f, { id, text, tone }]);
    setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 1100);
  };

  const advance = (wrongItem?: ContentItem) => {
    setAnswerUntil(0);
    setQueue((q) => {
      let rest = q.slice(1);
      let r = wrongItem ? [...retry, wrongItem] : retry;
      if (!rest.length && r.length) { rest = r; r = []; }
      setRetry(r);
      return rest;
    });
    choosePlayer();
  };

  const correct = () => {
    if (phase !== "play" || paused || !item) return;
    const n = progress + 1;
    setProgress(n);
    if (player) setHeroes((h) => (h.includes(player.name) ? h : [...h, player.name]));
    pop("+1 plank", "good");
    if (n >= goal) { setWon(true); setPhase("win"); setStep(0); return; }
    sfx.tok();
    setCheerUntil(Date.now() + 900);
    advance();
  };
  const wrong = () => {
    if (phase !== "play" || paused || !item) return;
    sfx.splash();
    setWave((w) => w + 1);
    if (opts.penalty) { setRemaining((r) => Math.max(0, r - opts.penalty)); pop(`-${opts.penalty}s`, "bad"); }
    advance(item);
  };
  const pass = () => {
    if (!player || passed.has(player.id) || roster.length < 2) return;
    setPassed((s) => new Set(s).add(player.id));
    sfx.whoosh();
    choosePlayer(player.id);
  };
  const repick = () => { if (roster.length) { sfx.spin(); choosePlayer(player?.id); } };
  const sandbags = () => {
    if (bagsUsed || phase !== "play") return;
    setBagsUsed(true);
    setFrozenUntil(Date.now() + 10000);
    sfx.thump();
  };
  const showAnswer = () => setAnswerUntil(Date.now() + 3000);

  useEffect(() => {
    let seq: [number, () => void][] = [];
    if (phase === "lose") {
      seq = [
        [0, () => { sfx.whooshWave(); }],
        [900, () => setStep(1)],
        [2000, () => setStep(2)],
        [3300, () => setPhase("end")],
      ];
    } else if (phase === "win") {
      seq = [
        [0, () => sfx.drumroll(1)],
        [1000, () => { sfx.tok(); sfx.thump(); setStep(1); }],
        [1500, () => { sfx.yahoo(); setStep(2); }],
        [3100, () => { setStep(3); sfx.win(); coins(calm); }],
        [5000, () => setPhase("end")],
      ];
    }
    const ts = seq.map(([t, f]) => setTimeout(f, t));
    return () => ts.forEach(clearTimeout);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (phase === "end") sessionUsed["bridge"] = usedIds.current; }, [phase]);

  const skipSeq = () => (phase === "lose" || phase === "win") && setPhase("end");
  const keys: Record<string, () => void> = (() => {
    if (phase === "lose" || phase === "win") return { Space: skipSeq, Enter: skipSeq };
    if (phase === "end") return {} as Record<string, () => void>;
    return {
      Space: () => setPaused((p) => !p), c: correct, Enter: correct, x: wrong, a: showAnswer,
      p: pass, r: repick, f: sandbags, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }), "?": openHelp,
    };
  })();
  useHotkeys(keys, !helpOpen);

  if (phase === "end") return <EndScreen won={won} progress={progress} goal={goal} secondsLeft={Math.ceil(remaining)} heroes={heroes} onRematch={onRematch} />;
  if (phase === "lose") return <LoseSequence step={step} calm={calm} goal={goal} planks={progress} />;
  if (phase === "win") return <WinSequence step={step} calm={calm} goal={goal} heroes={heroes} close={remaining < 10} />;

  let mood: MaxMood = secs <= 10 || pct < 0.25 ? "worried" : "ready";
  if (now < cheerUntil) mood = "cheer";
  const showAns = now < answerUntil;
  const canPass = !!player && !passed.has(player.id) && roster.length > 1;

  return (
    <div className="bridge-play fit-gap relative flex min-h-0 flex-1 flex-col gap-3 px-8 pb-6">
      <div className="relative shrink-0">
        <Canyon pct={pct} goal={goal} planks={progress} mood={mood} frozen={frozen} waveKey={wave} plankKey={progress} calm={calm} className="fit-scene h-[200px]" />
        {floats.map((f) => (
          <span key={f.id} className={cn("animate-rise pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 font-display text-6xl font-bold text-stroke", f.tone === "good" ? "text-success" : "text-destructive")}>{f.text}</span>
        ))}
        {secs <= 10 && secs > 0 && !frozen && (
          <span key={secs} className="animate-pop pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[7rem] font-bold leading-none text-destructive text-stroke">{secs}</span>
        )}
      </div>

      <div className="bridge-status grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0 truncate font-bold text-accent">
          {player ? <>🎤 Your turn: {player.name}!</> : <>🤝 Whole class!</>}
        </div>
        <div className="shrink-0 font-bold">{progress} / {goal} <span className="text-muted-foreground">planks</span></div>
      </div>

      {item ? (
        <div key={item.id + progress} className="bridge-card-slot w-full min-w-0 self-stretch">
          <div className="bridge-timer"><TimerRing remaining={remaining} duration={total} running={!paused && !frozen} size={68} /></div>
          <ItemCard item={item} showAnswer={showAns} compact onReveal={() => { setRemaining((r) => Math.max(0, r - 2)); pop("-2s", "bad"); }} />
        </div>
      ) : (
        <div className="panel flex flex-1 items-center justify-center p-8 text-4xl font-bold">No items for this day.</div>
      )}

      <div className="bridge-controls flex shrink-0 flex-wrap items-center justify-center gap-3">
        <Button variant="success" size="huge" onClick={correct}><Check /> Correct <Kbd>C</Kbd></Button>
        <Button variant="danger" size="huge" onClick={wrong}><X /> Wrong / Skip <Kbd>X</Kbd></Button>
        <Button variant="game" size="xl" onClick={showAnswer}><Eye /> Answer <Kbd>A</Kbd></Button>
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={pass} disabled={!canPass}><Hand /> Pass <Kbd>P</Kbd></Button>}
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={repick}><Dices /> Re-pick <Kbd>R</Kbd></Button>}
        <Button variant="panel" size="xl" onClick={sandbags} disabled={bagsUsed} className={cn(bagsUsed && "grayscale")}>🪣 Sandbags <Kbd>F</Kbd></Button>
        <Button variant="panel" size="xl" onClick={() => setPaused((p) => !p)}><Pause /> Pause <Kbd>Space</Kbd></Button>
      </div>

      {paused && (
        <div className="absolute inset-0 z-40 grid place-items-center bg-stage/80 backdrop-blur-sm" onClick={() => setPaused(false)}>
          <div className="animate-pop text-center">
            <div className="font-display text-[9rem] font-bold text-stroke">PAUSED</div>
            <Button variant="game" size="xl">Continue <Kbd>Space</Kbd></Button>
          </div>
        </div>
      )}
    </div>
  );
}

function coins(calm: boolean) {
  const n = calm ? 2 : 6;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      void confetti({ particleCount: calm ? 40 : 90, spread: 100, startVelocity: 45, origin: { x: 0.85, y: 0.35 }, colors: ["#f5c542", "#ffd76b", "#ffffff", "#5ad1c4"], disableForReducedMotion: true });
    }, i * 250);
  }
}

function LoseSequence({ step, calm, goal, planks }: { step: number; calm: boolean; goal: number; planks: number }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-6 px-8 overflow-hidden", step === 0 && (calm ? "animate-softshake" : "animate-bigshake"))}>
      <Canyon pct={step === 0 ? -0.15 : 0.05} goal={goal} planks={planks} mood={step >= 2 ? "soaked" : "worried"} floating={step >= 1} waveKey={step === 0 ? 1 : 0} calm={calm} sunny={step >= 2} fish={step >= 2} className="h-[320px]" />
      {step === 0 && <div className="animate-stamp font-display text-[8rem] font-bold leading-none text-stroke" style={{ color: "var(--river)" }}>WHOOOSH!</div>}
      {step === 1 && <div className="animate-pop font-display text-6xl font-bold text-stroke">The planks float away…</div>}
      {step >= 2 && <div className="animate-pop font-display text-6xl font-bold text-stroke">Max is soaked! 💧</div>}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function WinSequence({ step, calm, goal, heroes, close }: { step: number; calm: boolean; goal: number; heroes: string[]; close: boolean }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-5 px-8 overflow-hidden", step === 1 && !calm && "animate-shake")}>
      <Canyon pct={0.15} goal={goal} planks={step >= 1 ? goal : goal - 1} plankKey={step} mood={step >= 2 ? "happy" : "worried"} sunny={step >= 1} rainbow={step >= 1} maxX={step >= 2 ? "run" : undefined} chestOpen={step >= 3} flags={step >= 3 ? heroes : []} calm={calm} className="h-[300px]" />
      {step === 0 && <div className="font-display text-6xl font-bold text-stroke">Last plank…</div>}
      {step === 1 && <div className="animate-pop font-display text-6xl font-bold text-stroke">{close ? "PHEW! JUST IN TIME!" : "TOK! 🔨"}</div>}
      {step === 2 && <div className="animate-pop font-display text-7xl font-bold text-stroke">Yahoo! 🏃</div>}
      {step >= 3 && (
        <>
          <div className="animate-banner rounded-3xl bg-accent px-12 py-4 font-display text-8xl font-bold text-accent-foreground chunky">BRIDGE COMPLETE! 🏆</div>
          {heroes.length > 0 && <div className="animate-medal rounded-full px-8 py-2 text-3xl font-bold chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>🚩 Master Builders</div>}
        </>
      )}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function EndScreen({ won, progress, goal, secondsLeft, heroes, onRematch }: { won: boolean; progress: number; goal: number; secondsLeft: number; heroes: string[]; onRematch: () => void }) {
  const opts = useOpts();
  const setBridge = useApp((s) => s.setBridge);
  const teaser = useMemo(() => { const o = GAMES.filter((g) => g.id !== "bridge-builder"); return o[Math.floor(Math.random() * o.length)]; }, []);
  const harder = () => {
    if (opts.target <= 13) setBridge({ target: opts.target + 2 });
    else setBridge({ time: Math.max(60, opts.time - 20) });
    onRematch();
  };
  useEffect(() => { if (won) sfx.win(); }, [won]);
  useHotkeys({ Enter: onRematch });
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 pb-8 text-center">
      <div className="animate-pop text-[8rem] leading-none">{won ? "🌉🏆" : "🌊🐟"}</div>
      {won ? (
        <>
          <h1 className="text-7xl text-stroke">{secondsLeft < 10 ? "PHEW! JUST IN TIME!" : "Bridge complete! 🎉"}</h1>
          <div className="text-4xl font-bold">Finished with <span className="text-primary">{secondsLeft}</span> seconds to spare!</div>
        </>
      ) : (
        <>
          <h1 className="text-8xl text-stroke">The river won! So close!</h1>
          <div className="text-5xl font-bold"><span className="text-primary">{progress}</span>/{goal} planks</div>
          <div className="text-3xl font-bold">You almost had it! Rematch?</div>
        </>
      )}
      {heroes.length > 0 && (
        <div className="flex max-w-5xl flex-wrap justify-center gap-3">
          <span className="text-2xl font-bold text-muted-foreground">Master Builders:</span>
          {heroes.map((h) => <span key={h} className="rounded-full bg-secondary px-4 py-1 text-2xl font-bold">🔨 {h}</span>)}
        </div>
      )}
      <div className="text-5xl font-bold text-stroke">See you next class, champions! 👋</div>
      {teaser && (
        <div className="panel flex items-center gap-5 px-8 py-3">
          <div className={cn("grid h-16 w-16 place-items-center rounded-2xl text-4xl chunky", teaser.accent)}>{teaser.icon}</div>
          <div className="text-left"><div className="text-lg font-bold text-muted-foreground">Next class:</div><div className="text-3xl font-bold">{teaser.name}</div></div>
        </div>
      )}
      <div className="flex gap-4">
        <Button variant="game" size="xl" onClick={onRematch}><RotateCcw /> Rematch <Kbd>Enter</Kbd></Button>
        <Button variant="danger" size="xl" onClick={harder}><Flame /> Harder!</Button>
        <Button asChild variant="panel" size="xl"><Link to="/"><Home /> Home</Link></Button>
      </div>
    </div>
  );
}
