import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, X, Eye, Search, Hand, Dices, Pause, HelpCircle, Home, RotateCcw, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { ItemCard } from "@/components/engine/ItemCard";
import { useHotkeys } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { TimerRing } from "@/components/engine/Timer";
import { pickPlayer } from "@/components/engine/TurnPicker";
import { ChaseScene, type SniffMood, type BugMood, type BalloonState } from "@/components/detective/ChaseScene";
import { getGame, GAMES } from "@/lib/games";
import { drawMistakes, type ContentItem } from "@/lib/content";
import { DETECTIVE_PRESETS, selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/detective")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Detective Sniff — AF Power Finale" },
      { name: "description", content: "Whole-class challenge: find the mistakes before Gigglebug escapes!" },
      { property: "og:title", content: "Detective Sniff — AF Power Finale" },
      { property: "og:description", content: "Whole-class challenge: find the mistakes before Gigglebug escapes!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DetectiveSniff,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause"], ["C / Enter", "Correct (+1 clue)"], ["X", "Wrong / skip"], ["H", "Hint (underline)"], ["A", "Show answer"],
  ["P", "Pass to a friend"], ["R", "Re-pick student"], ["F", "Super Sniff 👃"], ["M", "Mute"], ["?", "This help"],
];

const useOpts = () => useApp((s) => s.detective ?? DETECTIVE_PRESETS["Normal"]!);

function DetectiveSniff() {
  const base = getGame("detective-sniff")!;
  const target = useOpts().target;
  const game = useMemo(() => ({ ...base, rules: [{ icon: "🔍", text: `Find ${target} mistakes before Gigglebug escapes!` }, { icon: "🤝", text: "Work together!" }] }), [base, target]);
  const [round, setRound] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <GameShell key={round} game={game} className="bridge-shell" rightSlot={<Button variant="panel" size="xl" onClick={() => setHelpOpen(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} shortcuts={SHORTCUTS} />
      <DetectiveGame onRematch={() => setRound((r) => r + 1)} helpOpen={helpOpen} openHelp={() => setHelpOpen(true)} />
    </GameShell>
  );
}

/** Only "find the mistake" cards, freshest day first. */
function drawDetective(target: number) {
  const r = drawMistakes(selectionOf(useApp.getState()), target, sessionUsed["detective"] ?? []);
  return { items: r.items, review: r.review };
}

type Phase = "play" | "lose" | "win" | "end";
interface Float { id: number; text: string; tone: "good" | "bad" }

function DetectiveGame({ onRematch, helpOpen, openHelp }: { onRematch: () => void; helpOpen: boolean; openHelp: () => void }) {
  const opts = useOpts();
  const calm = useApp((s) => s.settings.calm);
  const roster = useApp((s) => s.roster);

  const init = useMemo(() => drawDetective(opts.target), []); // eslint-disable-line react-hooks/exhaustive-deps
  const goal = Math.min(opts.target, init.items.length);
  const total = opts.time;

  const [queue, setQueue] = useState<ContentItem[]>(init.items);
  const [retry, setRetry] = useState<ContentItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [remaining, setRemaining] = useState(total);
  const [paused, setPaused] = useState(false);
  const [frozenUntil, setFrozenUntil] = useState(0);
  const [sniffUsed, setSniffUsed] = useState(false);
  const [phase, setPhase] = useState<Phase>("play");
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [passed, setPassed] = useState<Set<string>>(new Set());
  const [heroes, setHeroes] = useState<string[]>([]);
  const [answerUntil, setAnswerUntil] = useState(0);
  const [bonkUntil, setBonkUntil] = useState(0);
  const [hint, setHint] = useState(false);
  const [freshPaw, setFreshPaw] = useState(false);
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
      if (secs <= 10 && secs > 0) { sfx.tick(); if (!calm) setTimeout(sfx.tick, 500); }
      if (pct < 0.25 && secs > 10 && secs % 6 === 0) sfx.snip();
      if (secs % 17 === 0 && secs > 10) sfx.giggle();
    }
    if (pct < 0.25 && !stormed.current) { stormed.current = true; sfx.snip(); }
    if (remaining <= 0) { setPhase("lose"); setStep(0); }
  }, [secs, remaining, phase, pct, calm]);

  const pop = (text: string, tone: Float["tone"]) => {
    const id = Date.now() + Math.random();
    setFloats((f) => [...f, { id, text, tone }]);
    setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 1100);
  };

  const advance = (wrongItem?: ContentItem) => {
    setAnswerUntil(0);
    setHint(false);
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
    pop(`Clue ${n}/${goal}`, "good");
    setFreshPaw(true); setTimeout(() => setFreshPaw(false), 600);
    if (n >= goal) { setWon(true); setPhase("win"); setStep(0); return; }
    sfx.stamp();
    setCheerUntil(Date.now() + 900);
    advance();
  };
  const wrong = () => {
    if (phase !== "play" || paused || !item) return;
    sfx.sniff(); setTimeout(sfx.bonk, 250); setTimeout(sfx.giggle, 600);
    setBonkUntil(Date.now() + 900);
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
  const superSniff = () => {
    if (sniffUsed || phase !== "play") return;
    setSniffUsed(true);
    setFrozenUntil(Date.now() + 10000);
    sfx.sniff(); sfx.freeze();
  };
  const toggleHint = () => { if (phase === "play") { setHint((h) => !h); sfx.click(); } };
  const showAnswer = () => setAnswerUntil(Date.now() + 3000);

  useEffect(() => {
    let seq: [number, () => void][] = [];
    if (phase === "lose") {
      seq = [
        [0, () => { sfx.snip(); sfx.giggle(); }],
        [700, () => { setStep(1); sfx.whoosh(); setTimeout(sfx.giggle, 500); }],
        [1700, () => { setStep(2); sfx.boing(); }],
        [2400, () => { setStep(3); sfx.hmph(); }],
        [3400, () => setPhase("end")],
      ];
    } else if (phase === "win") {
      seq = [
        [0, () => sfx.drumroll(1)],
        [1000, () => { sfx.stamp(); setStep(1); sfx.whoosh(); }],
        [1900, () => { sfx.yahoo(); setStep(2); }],
        [2700, () => { sfx.pfft(); setStep(3); }],
        [3400, () => { setStep(4); sfx.thump(); sfx.fanfare(); coins(calm); }],
        [5200, () => setPhase("end")],
      ];
    }
    const ts = seq.map(([t, f]) => setTimeout(f, t));
    return () => ts.forEach(clearTimeout);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (phase === "end") sessionUsed["detective"] = usedIds.current; }, [phase]);

  const skipSeq = () => (phase === "lose" || phase === "win") && setPhase("end");
  const keys: Record<string, () => void> = (() => {
    if (phase === "lose" || phase === "win") return { Space: skipSeq, Enter: skipSeq };
    if (phase === "end") return {} as Record<string, () => void>;
    return {
      Space: () => setPaused((p) => !p), c: correct, Enter: correct, x: wrong, a: showAnswer,
      h: toggleHint, p: pass, r: repick, f: superSniff, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }), "?": openHelp,
    };
  })();
  useHotkeys(keys, !helpOpen);

  if (phase === "end") return <EndScreen won={won} progress={progress} goal={goal} secondsLeft={Math.ceil(remaining)} heroes={heroes} onRematch={onRematch} />;
  if (phase === "lose") return <LoseSequence step={step} calm={calm} goal={goal} clues={progress} />;
  if (phase === "win") return <WinSequence step={step} calm={calm} goal={goal} heroes={heroes} close={remaining < 10} />;

  const bonk = now < bonkUntil;
  const sniffMood: SniffMood = frozen ? "super" : bonk ? "bonk" : now < cheerUntil ? "happy" : "sniff";
  const bugMood: BugMood = bonk ? "giggle" : secs <= 10 ? "wave" : now < cheerUntil || progress >= goal - 2 ? "nervous" : "smug";
  const balloon: BalloonState = pct > 0.5 ? "ground" : pct > 0.25 ? "tug" : "lift";
  const ropes = frozen ? 4 : pct > 0.25 ? 4 : Math.max(1, Math.ceil((pct / 0.25) * 4));
  const showAns = now < answerUntil;
  const canPass = !!player && !passed.has(player.id) && roster.length > 1;

  return (
    <div className="bridge-play detective-play fit-gap relative flex min-h-0 flex-1 flex-col gap-3 px-8 pb-6">
      <div className="relative shrink-0">
        <ChaseScene goal={goal} clues={progress} pct={pct} sniffMood={sniffMood} bugMood={bugMood} balloon={balloon} ropes={ropes} tangled={frozen} bonk={bonk} freshPaw={freshPaw} bugInBasket={pct <= 0.5} countdown={secs <= 10 && secs > 0 && !frozen ? secs : undefined} className={cn("fit-scene h-[200px]", pct < 0.25 && !calm && !frozen && "animate-softshake")} />
        {floats.map((f) => (
          <span key={f.id} className={cn("animate-rise pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 font-display text-6xl font-bold text-stroke", f.tone === "good" ? "text-success" : "text-destructive")}>{f.text}</span>
        ))}
      </div>

      <div className="bridge-status grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0 truncate font-bold text-accent">
          {player ? <>🎤 Your turn: {player.name}!</> : <>🤝 Whole class!</>}{frozen && <span className="ml-3 text-primary">👃 Super Sniff! Ropes tangled!</span>}
        </div>
        <div className="shrink-0 font-bold">📒 Clue {progress} / {goal}</div>
      </div>

      {item ? (
        <div key={item.id + progress} className="bridge-card-slot w-full min-w-0 self-stretch">
          <div className="bridge-timer"><TimerRing remaining={remaining} duration={total} running={!paused && !frozen} size={120} /></div>
          <ItemCard item={item} showAnswer={showAns} compact hint={hint} />
        </div>
      ) : (
        <div className="panel flex flex-1 items-center justify-center p-8 text-4xl font-bold">No items for this day.</div>
      )}

      <div className="bridge-controls flex shrink-0 flex-wrap items-center justify-center gap-3">
        <Button variant="success" size="huge" onClick={correct}><Check /> Correct <Kbd>C</Kbd></Button>
        <Button variant="danger" size="huge" onClick={wrong}><X /> Wrong / Skip <Kbd>X</Kbd></Button>
        <Button variant="panel" size="xl" onClick={toggleHint}><Search /> Hint <Kbd>H</Kbd></Button>
        <Button variant="game" size="xl" onClick={showAnswer}><Eye /> Answer <Kbd>A</Kbd></Button>
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={pass} disabled={!canPass}><Hand /> Pass <Kbd>P</Kbd></Button>}
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={repick}><Dices /> Re-pick <Kbd>R</Kbd></Button>}
        <Button variant="panel" size="xl" onClick={superSniff} disabled={sniffUsed} className={cn(sniffUsed && "grayscale")}>👃 Super Sniff <Kbd>F</Kbd></Button>
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

function LoseSequence({ step, calm, goal, clues }: { step: number; calm: boolean; goal: number; clues: number }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-5 overflow-hidden px-8", step === 0 && !calm && "animate-softshake")}>
      <ChaseScene goal={goal} clues={clues} pct={0.05} balloon={step >= 1 ? "away" : "lift"} ropes={step >= 1 ? 0 : 1} bugInBasket bugMood="giggle" letters={step >= 1} sniffMood={step === 2 ? "jump" : step >= 3 ? "sad" : "sniff"} sniffX={step >= 2 ? 860 : undefined} className="h-[340px] max-w-5xl" />
      {step === 0 && <div className="animate-stamp font-display text-[6rem] font-bold leading-none text-destructive text-stroke">SNAP!</div>}
      {step === 1 && <div className="animate-pop font-display text-[6rem] font-bold leading-none text-stroke">Hee hee hee! 🎈</div>}
      {step === 2 && <div className="animate-pop font-display text-6xl font-bold text-stroke">Jump, Sniff!</div>}
      {step >= 3 && <div className="animate-pop font-display text-6xl font-bold text-stroke">Hmph… 🐶</div>}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function WinSequence({ step, calm, goal, heroes, close }: { step: number; calm: boolean; goal: number; heroes: string[]; close: boolean }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-5 overflow-hidden px-8", step === 4 && !calm && "animate-shake")}>
      <ChaseScene goal={goal} clues={goal} pct={0.3} freshPaw={step <= 1} balloon={step >= 3 ? "deflate" : "tug"} ropes={step >= 2 ? 0 : 4} bugInBasket={step < 2} bugMood={step >= 2 ? "caught" : "nervous"} net={step >= 2} sniffMood={step === 1 ? "dash" : step === 2 ? "jump" : step >= 2 ? "happy" : "sniff"} sniffX={step >= 1 ? 880 : undefined} badges={step >= 4 ? heroes : []} className="h-[320px] max-w-5xl" />
      {step === 0 && <div className="font-display text-6xl font-bold text-stroke">Last clue…</div>}
      {step === 1 && <div className="animate-pop font-display text-6xl font-bold text-stroke">{close ? "PHEW! JUST IN TIME!" : "Run, Sniff, run! 🐾"}</div>}
      {step === 2 && <div className="animate-pop font-display text-6xl font-bold text-stroke">GOTCHA! 🦋</div>}
      {step === 3 && <div className="animate-pop font-display text-6xl font-bold text-stroke">Pffffft… 🎈</div>}
      {step >= 4 && (
        <>
          <div className="det-slam absolute top-1/3 rounded-2xl border-8 border-success bg-card px-12 py-4 font-display text-8xl font-bold text-success chunky">CASE CLOSED! ✅</div>
          <div className="animate-medal rounded-full px-8 py-2 text-3xl font-bold chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>🏅 Junior Detectives</div>
        </>
      )}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function EndScreen({ won, progress, goal, secondsLeft, heroes, onRematch }: { won: boolean; progress: number; goal: number; secondsLeft: number; heroes: string[]; onRematch: () => void }) {
  const opts = useOpts();
  const setDetective = useApp((s) => s.setDetective);
  const teaser = useMemo(() => { const o = GAMES.filter((g) => g.id !== "detective-sniff"); return o[Math.floor(Math.random() * o.length)]; }, []);
  const harder = () => {
    if (opts.target <= 10) setDetective({ target: opts.target + 2 });
    else setDetective({ time: Math.max(60, opts.time - 20) });
    onRematch();
  };
  useEffect(() => { if (won) sfx.win(); }, [won]);
  useHotkeys({ Enter: onRematch });
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 pb-8 text-center">
      <div className="animate-pop text-[8rem] leading-none">{won ? "🐶🔍" : "🎈🐞"}</div>
      {won ? (
        <>
          <h1 className="text-7xl text-stroke">{secondsLeft < 10 ? "PHEW! JUST IN TIME!" : "Case closed! 🎉"}</h1>
          <div className="text-4xl font-bold">Case closed with <span className="text-primary">{secondsLeft}</span> seconds to spare!</div>
        </>
      ) : (
        <>
          <h1 className="text-6xl text-stroke">Gigglebug got away… for now!</h1>
          <div className="text-5xl font-bold"><span className="text-primary">{progress}</span>/{goal} clues</div>
          <div className="text-3xl font-bold">Case reopened! Rematch?</div>
        </>
      )}
      {heroes.length > 0 && (
        <div className="flex max-w-5xl flex-wrap justify-center gap-3">
          <span className="text-2xl font-bold text-muted-foreground">Junior Detectives:</span>
          {heroes.map((h) => <span key={h} className="rounded-full bg-secondary px-4 py-1 text-2xl font-bold">🏅 {h}</span>)}
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
