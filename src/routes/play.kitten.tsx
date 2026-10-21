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
import { TreeScene, type PepperMood } from "@/components/kitten/TreeScene";
import { getGame, GAMES } from "@/lib/games";
import { drawItems, shortfallRules, type ContentItem } from "@/lib/content";
import { BOMB_PRESETS, selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/kitten")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Kitten Rescue — AF Power Finale" },
      { name: "description", content: "Whole-class challenge: build the ladder and save Pepper the kitten!" },
      { property: "og:title", content: "Kitten Rescue — AF Power Finale" },
      { property: "og:description", content: "Whole-class challenge: build the ladder and save Pepper the kitten!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: KittenRescue,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause"], ["C / Enter", "Correct (+1 rung)"], ["X", "Wrong / skip"], ["A", "Show answer"],
  ["P", "Pass to a friend"], ["R", "Re-pick student"], ["F", "Fire Hose 🚒"], ["M", "Mute"], ["?", "This help"],
];

const useOpts = () => useApp((s) => s.kitten ?? BOMB_PRESETS["Normal"]!);

function KittenRescue() {
  const base = getGame("kitten-rescue")!;
  const target = useOpts().target;
  const [round, setRound] = useState(0);
  const peek = useMemo(() => drawItems(selectionOf(useApp.getState()), target, "mix", sessionUsed["kitten"] ?? []).items.length, [target, round]);
  const game = useMemo(() => ({ ...base, rules: [{ icon: "🐱", text: `Pepper is stuck! Build ${target} rungs before the branch breaks!` }, { icon: "🤝", text: "Work together!" }, ...shortfallRules(target, peek)] }), [base, target, peek]);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <GameShell key={round} game={game} className="bridge-shell" rightSlot={<Button variant="panel" size="xl" onClick={() => setHelpOpen(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} shortcuts={SHORTCUTS} />
      <KittenGame onRematch={() => setRound((r) => r + 1)} helpOpen={helpOpen} openHelp={() => setHelpOpen(true)} />
    </GameShell>
  );
}

/** Balanced mix straight from the content bank: questions & translations lead, every other dynamic shows up. */
function drawKitten(target: number) {
  const r = drawItems(selectionOf(useApp.getState()), target, "mix", sessionUsed["kitten"] ?? []);
  return { items: r.items, review: r.review };
}

type Phase = "play" | "lose" | "win" | "end";
interface Float { id: number; text: string; tone: "good" | "bad" }

function KittenGame({ onRematch, helpOpen, openHelp }: { onRematch: () => void; helpOpen: boolean; openHelp: () => void }) {
  const opts = useOpts();
  const calm = useApp((s) => s.settings.calm);
  const roster = useApp((s) => s.roster);

  const init = useMemo(() => drawKitten(opts.target), []); // eslint-disable-line react-hooks/exhaustive-deps
  const goal = Math.min(opts.target, init.items.length);
  const total = opts.time;

  const [queue, setQueue] = useState<ContentItem[]>(init.items);
  const [retry, setRetry] = useState<ContentItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [remaining, setRemaining] = useState(total);
  const [paused, setPaused] = useState(false);
  const [frozenUntil, setFrozenUntil] = useState(0);
  const [hoseUsed, setHoseUsed] = useState(false);
  const [phase, setPhase] = useState<Phase>("play");
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [passed, setPassed] = useState<Set<string>>(new Set());
  const [heroes, setHeroes] = useState<string[]>([]);
  const [answerUntil, setAnswerUntil] = useState(0);
  const [slipUntil, setSlipUntil] = useState(0);
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
      if (secs <= 10 && secs > 0) {
        sfx.heartbeat();
        if (secs > 5) sfx.tick();
        else if (secs > 3) sfx.beep();
        else sfx.alarm();
      }
      if (pct <= 0.5 && pct > 0.25 && secs % 8 === 0) sfx.creak();
      if (pct <= 0.25 && secs % (calm ? 6 : 3) === 0) sfx.creak();
      if (secs % 15 === 0) sfx.meow();
    }
    if (pct < 0.25 && !stormed.current) { stormed.current = true; sfx.creak(); }
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
    pop("+1 rung", "good");
    if (n >= goal) { setWon(true); setPhase("win"); setStep(0); return; }
    sfx.clack();
    setCheerUntil(Date.now() + 900);
    advance();
  };
  const wrong = () => {
    if (phase !== "play" || paused || !item) return;
    sfx.whoa(); sfx.creak();
    setSlipUntil(Date.now() + 600);
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
  const hose = () => {
    if (hoseUsed || phase !== "play") return;
    setHoseUsed(true);
    setFrozenUntil(Date.now() + 10000);
    sfx.whooshWave();
  };
  const showAnswer = () => setAnswerUntil(Date.now() + 3000);

  useEffect(() => {
    let seq: [number, () => void][] = [];
    if (phase === "lose") {
      seq = [
        [0, () => { sfx.crack(); sfx.meow(true); sfx.gasp(); }],
        [900, () => { setStep(1); sfx.boing(); setTimeout(sfx.boing, 450); setTimeout(sfx.boing, 850); }],
        [2200, () => { setStep(2); sfx.phew(); }],
        [3600, () => setPhase("end")],
      ];
    } else if (phase === "win") {
      seq = [
        [0, () => sfx.drumroll(1)],
        [1000, () => { sfx.clack(); setStep(1); }],
        [1700, () => { sfx.purr(); setStep(2); }],
        [2900, () => { setStep(3); sfx.cheer(); sfx.siren(); coins(calm); }],
        [5000, () => setPhase("end")],
      ];
    }
    const ts = seq.map(([t, f]) => setTimeout(f, t));
    return () => ts.forEach(clearTimeout);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (phase === "end") sessionUsed["kitten"] = usedIds.current; }, [phase]);

  const skipSeq = () => (phase === "lose" || phase === "win") && setPhase("end");
  const keys: Record<string, () => void> = (() => {
    if (phase === "lose" || phase === "win") return { Space: skipSeq, Enter: skipSeq };
    if (phase === "end") return {} as Record<string, () => void>;
    return {
      Space: () => setPaused((p) => !p), c: correct, Enter: correct, x: wrong, a: showAnswer,
      p: pass, r: repick, f: hose, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }), "?": openHelp,
    };
  })();
  useHotkeys(keys, !helpOpen);

  if (phase === "end") return <EndScreen won={won} progress={progress} goal={goal} secondsLeft={Math.ceil(remaining)} heroes={heroes} onRematch={onRematch} />;
  if (phase === "lose") return <LoseSequence step={step} calm={calm} goal={goal} rungs={progress} />;
  if (phase === "win") return <WinSequence step={step} calm={calm} goal={goal} heroes={heroes} close={remaining < 10} />;

  const mood: PepperMood = pct < 0.25 ? "scared" : pct <= 0.5 ? "worried" : "calm";
  const perk = now < cheerUntil;
  const showAns = now < answerUntil;
  const canPass = !!player && !passed.has(player.id) && roster.length > 1;

  return (
    <div className="bridge-play fit-gap relative flex min-h-0 flex-1 flex-col gap-3 px-8 pb-6">
      <div className="relative shrink-0">
        <TreeScene pct={pct} goal={goal} rungs={progress} pepperMood={mood} ears={perk} slip={now < slipUntil} frozen={frozen} calm={calm} countdown={secs <= 10 && secs > 0 && !frozen ? secs : undefined} className={cn("fit-scene h-[200px]", pct < 0.25 && !calm && !frozen && "animate-softshake")} />
        <div className="pointer-events-none absolute left-1/2 top-4 flex -translate-x-1/2 flex-col items-center gap-2">
          {floats.map((f) => (
            <span key={f.id} className={cn("animate-msg font-display text-6xl font-bold float-msg", f.tone === "good" ? "text-success" : "text-danger")}>{f.text}</span>
          ))}
        </div>
      </div>

      <div className="bridge-status grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0 truncate font-bold text-accent">
          {player ? <>🎤 Your turn: {player.name}!</> : <>🤝 Whole class!</>}
        </div>
        <div className="shrink-0 font-bold">{progress} / {goal} <span className="text-muted-foreground">rungs</span></div>
      </div>

      {item ? (
        <div key={item.id + progress} className="bridge-card-slot w-full min-w-0 self-stretch">
          <div className="bridge-timer"><TimerRing remaining={remaining} duration={total} running={!paused && !frozen} size={120} /></div>
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
        <Button variant="panel" size="xl" onClick={hose} disabled={hoseUsed} className={cn(hoseUsed && "grayscale")}>🚒 Fire Hose <Kbd>F</Kbd></Button>
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
      void confetti({ particleCount: calm ? 40 : 90, spread: 110, startVelocity: 45, origin: { x: 0.85, y: 0.5 }, disableForReducedMotion: true });
    }, i * 250);
  }
}

function LoseSequence({ step, calm, goal, rungs }: { step: number; calm: boolean; goal: number; rungs: number }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-5 overflow-hidden px-8", step === 0 && (calm ? "animate-softshake" : "animate-bigshake"))}>
      <TreeScene pct={0.1} goal={goal} rungs={rungs} snapped crowd="shock" pepperAt={step === 0 ? "falling" : step === 1 ? "net" : "helmet"} rosaT={0} rosaMood={step === 0 ? "whoa" : "smile"} pepperMood={step === 0 ? "scared" : "dizzy"} boing={step === 1 ? 1 : 0} calm={calm} className="h-[340px] max-w-5xl" />
      {step === 0 && <div className="animate-stamp font-display text-[7rem] font-bold leading-none text-destructive text-stroke">CRACK! Meeeow!</div>}
      {step === 1 && <div className="animate-pop font-display text-[6rem] font-bold leading-none text-stroke">BOING! BOING!</div>}
      {step >= 2 && <div className="animate-pop font-display text-6xl font-bold text-stroke">Phew! 😮‍💨</div>}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function WinSequence({ step, calm, goal, heroes, close }: { step: number; calm: boolean; goal: number; heroes: string[]; close: boolean }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-5 overflow-hidden px-8", step === 1 && !calm && "animate-shake")}>
      <TreeScene pct={1} goal={goal} rungs={step >= 1 ? goal : goal - 1} rosaT={step >= 3 ? 0 : step >= 1 ? goal / (goal + 1) : (goal - 1) / (goal + 1)} pepperAt={step >= 2 ? "arms" : "branch"} pepperMood={step >= 2 ? "happy" : "calm"} ears rosaMood={step >= 3 ? "cheer" : "smile"} flashing={step >= 3} badges={step >= 3 ? heroes : []} calm={calm} className="h-[320px] max-w-5xl" />
      {step === 0 && <div className="font-display text-6xl font-bold text-stroke">Last rung…</div>}
      {step === 1 && <div className="animate-pop font-display text-6xl font-bold text-stroke">{close ? "PHEW! JUST IN TIME!" : "CLACK! 🪜"}</div>}
      {step === 2 && <div className="animate-pop font-display text-6xl font-bold text-stroke">Lick lick… purrr 💕</div>}
      {step >= 3 && (
        <>
          <div className="kitten-banner animate-banner rounded-3xl bg-game-kitten px-12 py-4 font-display text-8xl font-bold text-primary-foreground chunky">KITTEN RESCUED! 🐱🚒</div>
          {heroes.length > 0 && <div className="animate-medal rounded-full px-8 py-2 text-3xl font-bold chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>🛡️ Rescue Squad</div>}
        </>
      )}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function EndScreen({ won, progress, goal, secondsLeft, heroes, onRematch }: { won: boolean; progress: number; goal: number; secondsLeft: number; heroes: string[]; onRematch: () => void }) {
  const opts = useOpts();
  const setKitten = useApp((s) => s.setKitten);
  const teaser = useMemo(() => { const o = GAMES.filter((g) => g.id !== "kitten-rescue"); return o[Math.floor(Math.random() * o.length)]; }, []);
  const harder = () => {
    if (opts.target <= 13) setKitten({ target: opts.target + 2 });
    else setKitten({ time: Math.max(60, opts.time - 20) });
    onRematch();
  };
  useEffect(() => { if (won) sfx.win(); }, [won]);
  useHotkeys({ Enter: onRematch });
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 pb-8 text-center">
      <div className="animate-pop text-[8rem] leading-none">{won ? "🐱🚒" : "😮‍💨🐱"}</div>
      {won ? (
        <>
          <h1 className="text-7xl text-stroke">{secondsLeft < 10 ? "PHEW! JUST IN TIME!" : "Kitten rescued! 🎉"}</h1>
          <div className="text-4xl font-bold">Rescued with <span className="text-primary">{secondsLeft}</span> seconds to spare!</div>
        </>
      ) : (
        <>
          <h1 className="text-6xl text-stroke">Phew! Pepper is safe, but the ladder wasn&apos;t ready!</h1>
          <div className="text-5xl font-bold"><span className="text-primary">{progress}</span>/{goal} rungs</div>
          <div className="text-3xl font-bold">Try again! Rematch?</div>
        </>
      )}
      {heroes.length > 0 && (
        <div className="flex max-w-5xl flex-wrap justify-center gap-3">
          <span className="text-2xl font-bold text-muted-foreground">Rescue Squad:</span>
          {heroes.map((h) => <span key={h} className="rounded-full bg-secondary px-4 py-1 text-2xl font-bold">🛡️ {h}</span>)}
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
