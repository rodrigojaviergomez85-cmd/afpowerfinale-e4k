import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, X, Eye, Hand, Dices, Snowflake, Pause, HelpCircle, Home, RotateCcw, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { useHotkeys } from "@/components/engine/controls";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { ItemPicture } from "@/components/engine/Picture";
import { TimerRing } from "@/components/engine/Timer";
import { pickPlayer } from "@/components/engine/TurnPicker";
import { Bomb, DefusePanel, type BombMood } from "@/components/bomb/Bomb";
import { getGame, GAMES } from "@/lib/games";
import { drawItems, type ContentItem } from "@/lib/content";
import { selectionOf, sessionUsed, useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/play/bomb")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Beat the Bomb — AF Power Finale" },
      { name: "description", content: "Whole-class challenge: answer the questions before the bomb explodes!" },
      { property: "og:title", content: "Beat the Bomb — AF Power Finale" },
      { property: "og:description", content: "Whole-class challenge: answer the questions before the bomb explodes!" },
    ],
  }),
  component: BeatTheBomb,
});

const SHORTCUTS: [string, string][] = [
  ["Space", "Start / pause"], ["C / Enter", "Correct"], ["X", "Wrong / skip"], ["A", "Show answer"],
  ["P", "Pass to a friend"], ["R", "Re-pick student"], ["F", "Freeze ❄️"], ["M", "Mute"], ["?", "This help"],
];

function BeatTheBomb() {
  const base = getGame("beat-the-bomb")!;
  const target = useApp((s) => s.bomb.target);
  const game = useMemo(() => ({ ...base, rules: [{ icon: "💣", text: `Answer ${target} questions before the bomb explodes!` }, { icon: "🤝", text: "Work together!" }] }), [base, target]);
  const [round, setRound] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <GameShell key={round} game={game} rightSlot={<Button variant="panel" size="xl" onClick={() => setHelpOpen(true)}><HelpCircle /> Help <Kbd>?</Kbd></Button>}>
      <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} shortcuts={SHORTCUTS} />
      <BombGame onRematch={() => setRound((r) => r + 1)} helpOpen={helpOpen} openHelp={() => setHelpOpen(true)} />
    </GameShell>
  );
}

type Phase = "play" | "boom" | "defuse" | "end";
interface Float { id: number; text: string; tone: "good" | "bad" }

function BombGame({ onRematch, helpOpen, openHelp }: { onRematch: () => void; helpOpen: boolean; openHelp: () => void }) {
  const opts = useApp((s) => s.bomb);
  const calm = useApp((s) => s.settings.calm);
  const roster = useApp((s) => s.roster);

  const init = useMemo(() => drawItems(selectionOf(useApp.getState()), opts.target, opts.mix, sessionUsed.bomb ?? []), []); // eslint-disable-line react-hooks/exhaustive-deps
  const goal = Math.min(opts.target, init.items.length);
  const total = opts.time;

  const [queue, setQueue] = useState<ContentItem[]>(init.items);
  const [retry, setRetry] = useState<ContentItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [remaining, setRemaining] = useState(total);
  const [paused, setPaused] = useState(false);
  const [frozenUntil, setFrozenUntil] = useState(0);
  const [freezeUsed, setFreezeUsed] = useState(false);
  const [phase, setPhase] = useState<Phase>("play");
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [passed, setPassed] = useState<Set<string>>(new Set());
  const [heroes, setHeroes] = useState<string[]>([]);
  const [answerUntil, setAnswerUntil] = useState(0);
  const [jolt, setJolt] = useState(0);
  const [relievedUntil, setRelievedUntil] = useState(0);
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

  // Fuse clock
  const lastSec = useRef(secs);
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

  useEffect(() => {
    if (phase !== "play") return;
    if (secs !== lastSec.current) {
      lastSec.current = secs;
      if (secs <= 10 && secs > 0) sfx.alarm();
    }
    if (remaining <= 0) { setPhase("boom"); setStep(0); }
  }, [secs, remaining, phase]);

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
    pop("+1", "good");
    if (n >= goal) {
      setWon(true);
      setPhase("defuse");
      setStep(0);
      return;
    }
    sfx.snip();
    setRelievedUntil(Date.now() + 700);
    advance();
  };
  const wrong = () => {
    if (phase !== "play" || paused || !item) return;
    sfx.fizz();
    setJolt((j) => j + 1);
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
  const freeze = () => {
    if (freezeUsed || phase !== "play") return;
    setFreezeUsed(true);
    setFrozenUntil(Date.now() + 10000);
    sfx.freeze();
  };
  const showAnswer = () => setAnswerUntil(Date.now() + 3000);

  // Boom & defuse sequences
  useEffect(() => {
    if (phase === "boom") {
      const seq: [number, () => void][] = [
        [0, () => sfx.uhoh()],
        [700, () => setStep(1)],
        [calm ? 700 : 1050, () => { setStep(2); sfx.boom(); }],
        [2400, () => setStep(3)],
        [3600, () => setPhase("end")],
      ];
      const ts = seq.map(([t, f]) => setTimeout(f, t));
      return () => ts.forEach(clearTimeout);
    }
    if (phase === "defuse") {
      const close = remaining < 10;
      const seq: [number, () => void][] = [
        [0, () => sfx.drumroll(1)],
        [1000, () => { sfx.snip(); sfx.beep(); }],
        [1300, () => sfx.beep()],
        [1600, () => { sfx.click(); setStep(1); sfx.phew(); }],
        [close ? 3000 : 2400, () => { setStep(2); sfx.thump(); }],
        [close ? 3700 : 3100, () => { setStep(3); sfx.win(); sfx.firework(); fireworks(calm); }],
        [close ? 6000 : 5400, () => setPhase("end")],
      ];
      const ts = seq.map(([t, f]) => setTimeout(f, t));
      return () => ts.forEach(clearTimeout);
    }
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase === "end") sessionUsed.bomb = usedIds.current;
  }, [phase]);

  const skipSeq = () => (phase === "boom" || phase === "defuse") && setPhase("end");

  const keys = useMemo(() => {
    if (phase === "boom" || phase === "defuse") return { Space: skipSeq, Enter: skipSeq };
    if (phase === "end") return {} as Record<string, () => void>;
    return {
      Space: () => setPaused((p) => !p), c: correct, Enter: correct, x: wrong, a: showAnswer,
      p: pass, r: repick, f: freeze, m: () => useApp.getState().setSettings({ sound: !useApp.getState().settings.sound }), "?": openHelp,
    };
  }); // eslint-disable-line react-hooks/exhaustive-deps
  useHotkeys(keys, !helpOpen);

  if (phase === "end") {
    return <EndScreen won={won} progress={progress} goal={goal} secondsLeft={Math.ceil(remaining)} heroes={heroes} onRematch={onRematch} />;
  }

  let mood: BombMood = pct > 0.5 ? "calm" : pct > 0.25 ? "worried" : "panic";
  if (now < relievedUntil) mood = "relieved";
  const scale = 1 + (1 - pct) * 0.5;

  if (phase === "boom") return <BoomSequence step={step} calm={calm} pct={pct} />;
  if (phase === "defuse") return <DefuseSequence step={step} calm={calm} goal={goal} heroes={heroes} close={remaining < 10} />;

  const showAns = now < answerUntil;
  const canPass = !!player && !passed.has(player.id) && roster.length > 1;

  return (
    <div className="relative flex flex-1 flex-col gap-4 px-8 pb-5">
      {/* top fuse bar */}
      <div className="relative h-8 overflow-hidden rounded-full border-4 border-border bg-card">
        <div className={cn("h-full transition-[width] duration-100 ease-linear", pct > 0.5 ? "bg-success" : pct > 0.25 ? "bg-primary" : "bg-destructive")} style={{ width: `${pct * 100}%` }} />
        <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl" style={{ left: `${pct * 100}%` }}>{frozen ? "❄️" : "🔥"}</span>
      </div>

      <div className="grid flex-1 grid-cols-[minmax(320px,0.9fr)_1.4fr] items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative grid h-[340px] w-full place-items-center">
            <div className="relative transition-transform duration-500" style={{ height: 260, width: 240, transform: `scale(${scale})`, transformOrigin: "center bottom" }}>
              <Bomb pct={pct} mood={mood} secondsLeft={secs} frozen={frozen} joltKey={jolt} className="relative h-full w-full" />
            </div>
            {floats.map((f) => (
              <span key={f.id} className={cn("animate-rise pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 font-display text-7xl font-bold text-stroke", f.tone === "good" ? "text-success" : "text-destructive")}>{f.text}</span>
            ))}
          </div>
          <DefusePanel total={goal} cut={progress} lastCut={progress - 1} />
          <div className="text-3xl font-bold">{progress} / {goal} <span className="text-muted-foreground">defused</span></div>
        </div>

        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-h-16 rounded-full bg-accent px-6 py-2 text-4xl font-bold text-accent-foreground chunky">
              {player ? <>🎤 Your turn: {player.name}!</> : <>🤝 Whole class!</>}
            </div>
            <TimerRing remaining={remaining} duration={total} running={!paused && !frozen} size={120} />
          </div>
          {item ? (
            <div key={item.id + progress} className="panel flex flex-1 animate-pop flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground">
                {item.kind === "T" ? "Say it in English! 🇺🇸" : "Answer in a full sentence!"}
              </div>
              <ItemPicture item={item} />
              <div className="font-display text-[56px] font-bold leading-tight text-stroke xl:text-7xl">{item.prompt}</div>
              <div className={cn("min-h-14 text-4xl font-bold text-success transition-opacity duration-300", showAns ? "opacity-100" : "opacity-0")}>
                {showAns && item.answers.map((a, i) => <div key={i}>💬 {a}</div>)}
              </div>
            </div>
          ) : (
            <div className="panel flex flex-1 items-center justify-center p-8 text-4xl font-bold">No items for this day.</div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="success" size="huge" onClick={correct}><Check /> Correct <Kbd>C</Kbd></Button>
        <Button variant="danger" size="huge" onClick={wrong}><X /> Wrong / Skip <Kbd>X</Kbd></Button>
        <Button variant="game" size="xl" onClick={showAnswer}><Eye /> Answer <Kbd>A</Kbd></Button>
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={pass} disabled={!canPass}><Hand /> Pass <Kbd>P</Kbd></Button>}
        {roster.length > 0 && <Button variant="panel" size="xl" onClick={repick}><Dices /> Re-pick <Kbd>R</Kbd></Button>}
        <Button variant="panel" size="xl" onClick={freeze} disabled={freezeUsed} className={cn(freezeUsed && "grayscale")}><Snowflake /> Freeze <Kbd>F</Kbd></Button>
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

function fireworks(calm: boolean) {
  const n = calm ? 3 : 7;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      void confetti({ particleCount: calm ? 40 : 90, spread: 360, startVelocity: 35, origin: { x: 0.2 + Math.random() * 0.6, y: 0.2 + Math.random() * 0.3 }, disableForReducedMotion: true });
    }, i * 300);
  }
}

const DEBRIS = ["⭐", "🔺", "🟡", "💥", "🟦", "✨", "🔶", "❤️", "⭐", "🟣", "✨", "🔷"];

function BoomSequence({ step, calm, pct }: { step: number; calm: boolean; pct: number }) {
  return (
    <div className={cn("relative flex flex-1 items-center justify-center overflow-hidden", step === 2 && (calm ? "animate-softshake" : "animate-bigshake"))}>
      {step === 0 && (
        <div className="animate-inflate" style={{ height: 300, width: 280 }}>
          <Bomb pct={Math.max(pct, 0.02)} mood="uhoh" className="relative h-full w-full" />
        </div>
      )}
      {step === 1 && !calm && <div className="animate-flash fixed inset-0 z-50 bg-foreground" />}
      {step >= 2 && step < 3 && (
        <>
          {["var(--shape-orange)", "var(--shape-yellow)", "var(--shape-pink)", "var(--shape-purple)", "var(--muted)"].map((c, i) => (
            <div key={i} className="animate-smoke absolute rounded-full" style={{ background: c, width: "45vw", height: "45vw", left: `${10 + i * 15}%`, top: `${i % 2 ? 10 : 30}%`, animationDelay: `${i * 80}ms` }} />
          ))}
          {DEBRIS.map((d, i) => {
            const a = (i / DEBRIS.length) * Math.PI * 2;
            return <span key={i} className="animate-debris absolute text-6xl" style={{ ["--dx" as string]: `${Math.cos(a) * 55}vw`, ["--dy" as string]: `${Math.sin(a) * 50}vh` }}>{d}</span>;
          })}
          <div className="animate-stamp relative z-10 font-display text-[11rem] font-bold leading-none text-shape-yellow" style={{ color: "var(--shape-yellow)", WebkitTextStroke: "8px var(--shape-outline)", paintOrder: "stroke" }}>
            KA-BOOOM!
          </div>
        </>
      )}
      {step === 3 && (
        <div className="animate-pop flex flex-col items-center gap-4">
          <div className="relative" style={{ height: 280, width: 260 }}>
            <Bomb pct={0} mood="charred" showFuse={false} className="relative h-full w-full" />
          </div>
        </div>
      )}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function DefuseSequence({ step, calm, goal, heroes, close }: { step: number; calm: boolean; goal: number; heroes: string[]; close: boolean }) {
  return (
    <div className={cn("relative flex flex-1 flex-col items-center justify-center gap-6 overflow-hidden", step === 2 && !calm && "animate-shake")}>
      <div className="relative flex items-center gap-10">
        <div className={cn("relative", step === 1 && "animate-deflate")} style={{ height: 300, width: 280 }}>
          <Bomb pct={0.15} mood={step === 0 ? "panic" : step >= 3 ? "party" : "phew"} frozen={false} showFuse={step === 0} className="relative h-full w-full" />
          {step >= 2 && (
            <div className="animate-stamp absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-[10px] border-success px-6 py-2 font-display text-7xl font-bold text-success" style={{ background: "oklch(0.2 0.07 275 / 0.7)" }}>
              DEFUSED!
            </div>
          )}
          {step === 1 && <span className="animate-rise absolute left-1/2 top-0 text-7xl">💨</span>}
        </div>
        {step === 0 && <DefusePanel total={goal} cut={goal} lastCut={goal - 1} />}
      </div>
      {step === 0 && <div className="font-display text-6xl font-bold text-stroke">Last wire…</div>}
      {step === 1 && <div className="animate-pop font-display text-7xl font-bold text-stroke">{close ? "PHEW! JUST IN TIME!" : "Phew…"}</div>}
      {step >= 3 && (
        <>
          <div className="animate-banner rounded-3xl bg-accent px-12 py-4 font-display text-8xl font-bold text-accent-foreground chunky">MISSION COMPLETE!</div>
          <div className="animate-medal flex items-center gap-4 rounded-full px-8 py-3 text-4xl font-bold chunky" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>🏅 Bomb Squad Heroes</div>
          <div className="flex max-w-5xl flex-wrap justify-center gap-3">
            {heroes.map((h, i) => (
              <span key={h} className="animate-medal rounded-full bg-card px-5 py-2 text-2xl font-bold" style={{ animationDelay: `${300 + i * 120}ms` }}>🥇 {h}</span>
            ))}
          </div>
        </>
      )}
      <div className="absolute bottom-4 right-6 text-xl font-bold text-muted-foreground">Skip <Kbd>Space</Kbd></div>
    </div>
  );
}

function EndScreen({ won, progress, goal, secondsLeft, heroes, onRematch }: { won: boolean; progress: number; goal: number; secondsLeft: number; heroes: string[]; onRematch: () => void }) {
  const setBomb = useApp((s) => s.setBomb);
  const bomb = useApp((s) => s.bomb);
  const teaser = useMemo(() => { const o = GAMES.filter((g) => g.id !== "beat-the-bomb"); return o[Math.floor(Math.random() * o.length)]; }, []);
  const harder = () => {
    if (bomb.target <= 13) setBomb({ target: bomb.target + 2 });
    else setBomb({ time: Math.max(60, bomb.time - 20) });
    onRematch();
  };
  useEffect(() => { if (won) sfx.win(); }, [won]);
  useHotkeys({ Enter: onRematch });
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 pb-8 text-center">
      <div className="relative animate-pop" style={{ height: 230, width: 210 }}>
        <Bomb pct={won ? 0.6 : 0} mood={won ? "party" : "charred"} showFuse={false} medal={won} className="relative h-full w-full" />
      </div>
      {won ? (
        <>
          <h1 className="text-7xl text-stroke">Bomb defused! 🎉</h1>
          <div className="text-4xl font-bold">Saved with <span className="text-primary">{secondsLeft}</span> seconds to spare!</div>
          <div className="text-3xl font-bold text-muted-foreground">{progress} questions answered</div>
        </>
      ) : (
        <>
          <h1 className="text-8xl text-stroke">BOOM! So close!</h1>
          <div className="text-5xl font-bold"><span className="text-primary">{progress}</span>/{goal}</div>
          <div className="text-3xl font-bold">You almost had it! Rematch?</div>
        </>
      )}
      {heroes.length > 0 && (
        <div className="flex max-w-5xl flex-wrap justify-center gap-3">
          <span className="text-2xl font-bold text-muted-foreground">Team heroes:</span>
          {heroes.map((h) => <span key={h} className="rounded-full bg-secondary px-4 py-1 text-2xl font-bold">🦸 {h}</span>)}
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
