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
import { Tightrope, type Crowd, type LunaMood } from "@/components/rope/Tightrope";
import { getGame, GAMES } from "@/lib/games";
import { drawItems, type ContentItem } from "@/lib/content";
import { BOMB_PRESETS, selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/rope")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Circus Rescue — AF Power Finale" },
      { name: "description", content: "Whole-class circus challenge: raise Luna’s platform to safety before time runs out!" },
      { property: "og:title", content: "Circus Rescue — AF Power Finale" },
      { property: "og:description", content: "Whole-class circus challenge: raise Luna’s platform to safety before time runs out!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TightropeRescue,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause"], ["C / Enter", "Correct (platform up)"], ["X", "Wrong / skip (platform down)"], ["A", "Show answer"],
  ["P", "Pass to a friend"], ["R", "Re-pick student"], ["F", "Safety Brake"], ["M", "Mute"], ["?", "This help"],
];

const useOpts = () => useApp((s) => s.rope ?? BOMB_PRESETS["Normal"]);

function TightropeRescue() {
  const base = getGame("tightrope");
  if (!base) throw new Error("Circus game is unavailable");
  const target = useOpts().target;
  const game = useMemo(() => ({ ...base, rules: [{ icon: "🤸‍♀️", text: `Raise Luna to safety! ${target} correct answers to climb. Wrong answers move the platform down!` }, { icon: "🤝", text: "Work together!" }] }), [base, target]);
  const [round, setRound] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <GameShell className="rope-shell" key={round} game={game} rightSlot={<Button variant="panel" size="xl" onClick={() => setHelpOpen(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} shortcuts={SHORTCUTS} />
      <RopeGame onRematch={() => setRound((r) => r + 1)} helpOpen={helpOpen} openHelp={() => setHelpOpen(true)} />
    </GameShell>
  );
}

/** Balanced mix straight from the content bank: questions & translations lead, every other dynamic shows up. */
function drawRope(target: number) {
  const r = drawItems(selectionOf(useApp.getState()), target, "mix", sessionUsed["rope"] ?? []);
  return { items: r.items, review: r.review };
}

type Phase = "play" | "lose" | "win" | "end";
interface Float { id: number; text: string; tone: "good" | "bad" }

function RopeGame({ onRematch, helpOpen, openHelp }: { onRematch: () => void; helpOpen: boolean; openHelp: () => void }) {
  const opts = useOpts();
  const calm = useApp((s) => s.settings.calm);
  const roster = useApp((s) => s.roster);
  const init = useMemo(() => drawRope(opts.target), []); // eslint-disable-line react-hooks/exhaustive-deps
  const goal = Math.min(opts.target, init.items.length);
  const total = opts.time;

  const [queue, setQueue] = useState<ContentItem[]>(init.items);
  const [retry, setRetry] = useState<ContentItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [remaining, setRemaining] = useState(total);
  const [paused, setPaused] = useState(false);
  const [frozenUntil, setFrozenUntil] = useState(0);
  const [poleUsed, setPoleUsed] = useState(false);
  const [phase, setPhase] = useState<Phase>("play");
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [passed, setPassed] = useState<Set<string>>(new Set());
  const [heroes, setHeroes] = useState<string[]>([]);
  const [answerUntil, setAnswerUntil] = useState(0);
  const [slip, setSlip] = useState(0);
  const [flash, setFlash] = useState(0);
  const [crowdUntil, setCrowdUntil] = useState<{ c: Crowd; until: number }>({ c: "calm", until: 0 });
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
  useEffect(() => {
    if (phase !== "play") return;
    if (secs !== lastSec.current && !frozen) {
      lastSec.current = secs;
      // A single soft cue, never a continuous rattling roll near defeat.
      if (secs === 10) sfx.ooh();
    }
    if (remaining <= 0) { setPhase("lose"); setStep(0); }
  }, [secs, remaining, phase, pct, calm, frozen]);

  const pop = (text: string, tone: Float["tone"]) => {
    const id = Date.now() + Math.random();
    setFloats((f) => [...f, { id, text, tone }]);
    setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 1100);
  };
  const crowdFor = (c: Crowd, ms: number) => setCrowdUntil({ c, until: Date.now() + ms });

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
    const n = altitude + 1;
    setAltitude(n);
    setProgress((p) => p + 1);
    if (player) setHeroes((h) => (h.includes(player.name) ? h : [...h, player.name]));
    pop("↑ Up one level!", "good");
    if (n >= goal) { setWon(true); setPhase("win"); setStep(0); return; }
    sfx.correct(); sfx.cheer();
    setFlash((f) => f + 1);
    crowdFor("cheer", 1200);
    advance(item);
  };
  const wrong = () => {
    if (phase !== "play" || paused || !item) return;
    sfx.ooh();
    setSlip((s) => s + 1);
    const lower = altitude - 1;
    setAltitude(lower);
    if (Math.ceil(goal / 2) + lower <= 0) { setPhase("lose"); setStep(0); return; }
    pop("↓ Down one level!", "bad");
    crowdFor("gasp", 1300);
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
  const balancePole = () => {
    if (poleUsed || phase !== "play") return;
    setPoleUsed(true);
    setFrozenUntil(Date.now() + 10000);
    sfx.freeze();
  };
  const showAnswer = () => setAnswerUntil(Date.now() + 3000);

  useEffect(() => {
    let seq: [number, () => void][] = [];
    if (phase === "lose") {
      seq = [
        [0, () => { sfx.uhoh(); }],
        [900, () => { setStep(1); sfx.splash(); sfx.whooshWave(); }],
        [2200, () => { setStep(2); sfx.aww(); }],
        [3600, () => setPhase("end")],
      ];
    } else if (phase === "win") {
      seq = [
        [0, () => sfx.drumroll(0.9)],
        [900, () => { sfx.cymbal(); sfx.thump(); setStep(1); }],
        [1600, () => { sfx.yahoo(); sfx.cheer(); setStep(2); petals(calm); }],
        [2800, () => { setStep(3); sfx.win(); sfx.firework(); fireworks(calm); }],
        [3600, () => { sfx.firework(); sfx.cheer(); }],
        [5000, () => setPhase("end")],
      ];
    }
    const ts = seq.map(([t, f]) => setTimeout(f, t));
    return () => ts.forEach(clearTimeout);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (phase === "end") sessionUsed["rope"] = usedIds.current; }, [phase]);

  const skipSeq = () => (phase === "lose" || phase === "win") && setPhase("end");
  const keys: Record<string, () => void> = (() => {
    if (phase === "lose" || phase === "win") return { Space: skipSeq, Enter: skipSeq };
    if (phase === "end") return {} as Record<string, () => void>;
    return {
      Space: () => setPaused((p) => !p), c: correct, Enter: correct, x: wrong, a: showAnswer,
      p: pass, r: repick, f: balancePole, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }), "?": openHelp,
    };
  })();
  useHotkeys(keys, !helpOpen);

  if (phase === "end") return <EndScreen won={won} progress={progress} goal={goal} secondsLeft={Math.ceil(remaining)} heroes={heroes} onRematch={onRematch} />;
  if (phase === "lose") return <LoseSequence step={step} calm={calm} goal={goal} steps={altitude} />;
  if (phase === "win") return <WinSequence step={step} calm={calm} goal={goal} heroes={heroes} close={remaining < 10} />;

  const danger = Math.ceil(goal / 2) + altitude <= 2;
  const mood: LunaMood = frozen ? "calm" : danger || pct <= 0.25 ? "panic" : pct <= 0.5 ? "worried" : "calm";
  const crowd: Crowd = now < crowdUntil.until ? crowdUntil.c : pct < 0.25 && !frozen ? "gasp" : "calm";
  const showAns = now < answerUntil;
  const canPass = !!player && !passed.has(player.id) && roster.length > 1;

  return (
    <div className="rope-play relative min-h-0 flex-1">
      <div className="rope-story relative min-h-0">
        <Tightrope pct={pct} goal={goal} steps={altitude} mood={mood} crowd={crowd} frozen={frozen} slipKey={slip} flashKey={flash} calm={calm}
          countdown={secs <= 10 && secs > 0 && !frozen ? secs : undefined} className="h-full" />
        {floats.map((f) => (
          <span key={f.id} className={cn("animate-rise pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 font-display text-3xl font-bold text-stroke", f.tone === "good" ? "text-success" : "text-destructive")}>{f.text}</span>
        ))}
        {frozen && <div className="animate-pop absolute left-1/2 top-2 -translate-x-1/2 rounded-full px-5 py-1 text-2xl font-bold chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>Safety Brake! Time frozen</div>}
      </div>

      <div className="rope-status relative min-w-0">
        <div className="rope-player min-w-0 truncate text-2xl font-bold">
          {player ? <>🎤 Your turn: {player.name}!</> : <>🤝 Whole class!</>}
        </div>
        <div className="text-xl font-bold text-muted-foreground">{Math.max(0, altitude)} / {goal} levels to safety</div>
        <div className="rope-timer"><TimerRing remaining={remaining} duration={total} running={!paused && !frozen} size={120} /></div>
      </div>

      {item ? (
        <div key={item.id + progress} className="rope-card-slot min-w-0 min-h-0">
          <ItemCard item={item} showAnswer={showAns} compact autoReveal paused={paused || helpOpen} />
        </div>
      ) : (
        <div className="panel flex flex-1 items-center justify-center p-8 text-4xl font-bold">No items for this day.</div>
      )}

      <div className={cn("rope-controls", roster.length > 0 && "rope-controls-roster")}>
        <Button variant="success" size="huge" onClick={correct}><Check /> Correct <Kbd>C</Kbd></Button>
        <Button variant="danger" size="huge" onClick={wrong}><X /> Wrong / Skip <Kbd>X</Kbd></Button>
        <Button variant="game" size="xl" onClick={showAnswer}><Eye /> Answer <Kbd>A</Kbd></Button>
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={pass} disabled={!canPass}><Hand /> Pass <Kbd>P</Kbd></Button>}
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={repick}><Dices /> Re-pick <Kbd>R</Kbd></Button>}
        <Button variant="panel" size="xl" onClick={balancePole} disabled={poleUsed} className={cn(poleUsed && "grayscale")}>Safety Brake <Kbd>F</Kbd></Button>
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

function petals(calm: boolean) {
  void confetti({ particleCount: calm ? 60 : 160, spread: 160, startVelocity: 30, gravity: 0.6, origin: { x: 0.5, y: 0 }, shapes: ["circle", "square"], colors: ["#ff6fb5", "#ffd76b", "#ffffff", "#ff9a3c", "#b06bff"], disableForReducedMotion: true });
}
function fireworks(calm: boolean) {
  const n = calm ? 2 : 5;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      void confetti({ particleCount: calm ? 40 : 80, spread: 360, startVelocity: 28, origin: { x: 0.15 + Math.random() * 0.7, y: 0.15 + Math.random() * 0.2 }, colors: ["#ff6fb5", "#ffd76b", "#5ad1c4", "#ffffff"], disableForReducedMotion: true });
    }, i * 300);
  }
}

function LoseSequence({ step, calm, goal, steps }: { step: number; calm: boolean; goal: number; steps: number }) {
  return (
    <div className="circus-ending" data-calm={calm}>
      <Tightrope pct={0} goal={goal} steps={steps} mood="uhoh" crowd="gasp" falling={step >= 1} inPool={step >= 2} calm={calm} className="rope-ending-scene" />
      {step >= 1 && <div className="circus-flood" aria-hidden="true"><svg viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M0 40 Q125 0 250 40 T500 40 T750 40 T1000 40 V100 H0Z" fill="var(--pool)" /><path d="M0 40 Q125 0 250 40 T500 40 T750 40 T1000 40" fill="none" stroke="var(--river-foam)" strokeWidth="5" /></svg></div>}
      <div className="circus-ending-caption" aria-live="polite">
        <h1 className="circus-finale-title">{step === 0 ? "Hold on!" : "SPLAAASH!"}</h1>
        {step >= 2 && <div className="circus-finale-banner">So close!</div>}
        <p>{step >= 2 ? "Let's rescue Luna next time!" : ""}</p>
      </div>
      <div className="circus-skip">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function WinSequence({ step, calm, goal, heroes, close }: { step: number; calm: boolean; goal: number; heroes: string[]; close: boolean }) {
  return (
    <div className="circus-ending">
      <Tightrope pct={1} goal={goal} steps={step >= 1 ? goal : goal - 1} mood={step >= 2 ? "tada" : "happy"} landing={step >= 2} celebrating={step >= 2} stars={step >= 3 ? heroes : []} calm={calm} className="rope-ending-scene" />
      <div className="circus-ending-caption" aria-live="polite">
        <h1 className="circus-finale-title">{step < 2 ? "One final leap…" : "TA-DAAA!"}</h1>
        {step >= 2 && <div className="circus-finale-banner">Rescue complete!</div>}
        <p>{step >= 2 ? close ? "Phew! Just in time!" : "Luna is safe, thanks to you!" : ""}</p>
      </div>
      <div className="circus-skip">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function EndScreen({ won, progress, goal, secondsLeft, heroes, onRematch }: { won: boolean; progress: number; goal: number; secondsLeft: number; heroes: string[]; onRematch: () => void }) {
  const opts = useOpts();
  const setRope = useApp((s) => s.setRope);
  const teaser = useMemo(() => { const o = GAMES.filter((g) => g.id !== "tightrope" && g.status === "ready"); return o[Math.floor(Math.random() * o.length)]; }, []);
  const harder = () => {
    if (opts.target <= 13) setRope({ target: opts.target + 2 });
    else setRope({ time: Math.max(60, opts.time - 20) });
    onRematch();
  };
  useEffect(() => { if (won) sfx.win(); }, [won]);
  useHotkeys({ Enter: onRematch });
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 pb-8 text-center">
      <Tightrope pct={won ? 1 : 0} goal={goal} steps={won ? goal : 0} mood={won ? "tada" : "soaked"} landing={won} celebrating={won} inPool={!won} calm className="circus-result-scene" />
      {won ? (
        <>
          <h1 className="circus-result-title text-stroke">TA-DAAA!</h1>
          <div className="circus-finale-banner">Rescue complete!</div>
          <div className="text-4xl font-bold">Saved with <span className="text-primary">{secondsLeft}</span> seconds to spare!</div>
        </>
      ) : (
        <>
          <h1 className="circus-result-title text-stroke">SPLAAASH!</h1>
          <div className="text-5xl font-bold"><span className="text-primary">{progress}</span>/{goal} levels</div>
          <div className="text-3xl font-bold">You almost had it! Rematch?</div>
        </>
      )}
      {heroes.length > 0 && (
        <div className="flex max-w-5xl flex-wrap justify-center gap-3">
          <span className="text-2xl font-bold text-muted-foreground">Circus Heroes:</span>
          {heroes.map((h) => <span key={h} className="rounded-full bg-secondary px-4 py-1 text-2xl font-bold">⭐ {h}</span>)}
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
