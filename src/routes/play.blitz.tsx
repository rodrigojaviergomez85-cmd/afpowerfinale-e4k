import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check, X, Undo2, Pause, Play, SkipForward, Home, RotateCcw, Dices, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameShell } from "@/components/engine/GameShell";
import { TimerRing } from "@/components/engine/Timer";
import { pickPlayer } from "@/components/engine/TurnPicker";
import { Kbd, HelpOverlay } from "@/components/engine/Kbd";
import { toggleFullscreen, useHotkeys } from "@/components/engine/controls";
import { Court } from "@/components/blitz/Court";
import { availableCategories, chooseCategories, categoryIcons, initialRally, rallyReducer, type RallyState, type RallyAction } from "@/lib/blitz";
import { BLITZ_DEFAULTS, useApp, type Player } from "@/lib/store";
import { getGame, GAMES } from "@/lib/games";
import { sfx } from "@/lib/sound";
import { burst, finaleConfetti } from "@/lib/celebrate";

export const Route = createFileRoute("/play/blitz")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Vocab Blitz — AF Power Finale" }, { name: "description", content: "Word tennis: two teams rally with vocabulary, race the shot clock and win round stars." },
    { property: "og:title", content: "Vocab Blitz — AF Power Finale" }, { property: "og:description", content: "Don't repeat, don't stop! Play a fast vocabulary rally with your class." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Blitz,
});

function Blitz() {
  const game = getGame("vocab-blitz");
  if (!game) return null;
  return <GameShell game={game} className="blitz-shell"><BlitzMatch /></GameShell>;
}

const SHORTCUTS: [string, string][] = [["C / Enter", "Correct word"], ["X", "Out — other team wins"], ["Z", "Undo last action"], ["Space", "Pause / skip review"], ["→", "Next category after review"], ["R", "Pick another teammate"], ["M", "Mute"], ["F", "Full screen"], ["?", "Help"]];

function BlitzMatch() {
  const app = useApp();
  const [options] = useState(() => ({ ...BLITZ_DEFAULTS, ...useApp.getState().blitz }));
  const [available] = useState(() => availableCategories(app.course, app.level, app.week));
  const [categories, setCategories] = useState(() => chooseCategories(available, app.week, options.rounds, options.categories));
  const [state, setState] = useState(() => initialRally(Math.random() < 0.5 ? 0 : 1, options.shotClock));
  const current = useRef(state); current.current = state;
  const history = useRef<{ state: RallyState; roster: Player[]; player: Player | null }[]>([]);
  const [player, setPlayer] = useState<Player | null>(null);
  const playerRef = useRef(player); playerRef.current = player;
  const [help, setHelp] = useState(false);
  const [reviewSeconds, setReviewSeconds] = useState(5);
  const [matchKey, setMatchKey] = useState(0);
  const category = categories[state.round];
  const [teaser] = useState(() => GAMES.filter((g) => g.id !== "vocab-blitz" && g.status === "ready")[Math.floor(Math.random() * 7)] ?? GAMES[0]);

  function act(type: Exclude<RallyAction["type"], "tick">) {
    const before = current.current;
    const after = rallyReducer(before, { type, clock: options.shotClock, rounds: options.rounds });
    if (after === before) return;
    if (type !== "start" && type !== "pause") history.current.push({ state: { ...before }, roster: useApp.getState().roster.map((p) => ({ ...p })), player: playerRef.current });
    current.current = after; setState(after);
    if (type === "correct") { sfx.ping(); if (playerRef.current) app.bumpPlayer(playerRef.current.id, "points"); if (after.rally % 5 === 0) burst(); }
    if (type === "out") { sfx.buzzer(); burst(); setReviewSeconds(5); }
    if (type === "next") {
      sfx.whoosh();
      if (after.phase === "intro" && !categories[after.round]) {
        const used = new Set(categories.map((c) => c.category));
        const next = chooseCategories(available.filter((c) => !used.has(c.category)), app.week, 1)[0] ?? available[0];
        if (next) setCategories((c) => [...c, next]);
      }
    }
  }
  function undo() {
    const last = history.current.pop(); if (!last) return;
    current.current = last.state; setState(last.state); app.setSetup({ roster: last.roster }); setPlayer(last.player); sfx.minus();
  }
  function pick() {
    const pool = useApp.getState().roster.filter((_, i) => i % 2 === current.current.active);
    const p = pickPlayer(pool); setPlayer(p); if (p) app.bumpPlayer(p.id, "turns");
  }

  useEffect(() => {
    if (state.phase !== "rally") return;
    pick();
    // Pick only on a new serve, not on clock ticks.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.round, state.active, state.phase]);

  useEffect(() => {
    if (state.phase !== "intro" || !category) return;
    sfx.whoosh(); const t = setTimeout(() => act("start"), state.round === 0 ? 2200 : 1600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.phase, state.round, category, matchKey]);

  useEffect(() => {
    if (state.phase !== "rally" || state.paused || help) return;
    let last = performance.now();
    let sec = Math.ceil(current.current.remaining);
    const id = setInterval(() => {
      const now = performance.now();
      const next = rallyReducer(current.current, { type: "tick", elapsed: (now - last) / 1000 }); last = now;
      const n = Math.ceil(next.remaining); if (n !== sec && n <= 3 && n > 0) sfx.tick(); sec = n;
      current.current = next; setState(next); if (next.remaining <= 0) act("out");
    }, 50);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.phase, state.paused, help]);

  useEffect(() => {
    if (state.phase !== "review" || help) return;
    const start = Date.now(); const id = setInterval(() => { const n = Math.max(0, 5 - Math.floor((Date.now() - start) / 1000)); setReviewSeconds(n); if (n === 0) act("next"); }, 100);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.phase, state.round, help]);

  useEffect(() => {
    if (state.phase !== "final") return;
    sfx.win(); finaleConfetti(); app.setLastResult({ gameId: "vocab-blitz", teams: app.teams, scores: state.scores, mode: "teams", at: Date.now() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.phase]);

  const pause = () => state.phase === "review" ? act("next") : act("pause");
  useHotkeys({ c: () => act("correct"), Enter: () => act("correct"), x: () => act("out"), z: undo, Space: pause, ArrowRight: () => act("next"), r: pick, m: () => app.setSettings({ sound: !app.settings.sound }), f: toggleFullscreen, "?": () => setHelp(true) }, !help && state.phase !== "final");
  if (!category) return <div className="m-auto text-center text-3xl">No vocabulary categories for this level.<Button asChild variant="game" className="mt-6"><Link to="/setup" search={{ game: "vocab-blitz" }}>Back to setup</Link></Button></div>;
  const winner = state.scores[0] > state.scores[1] ? 0 : 1;
  if (state.phase === "final") return <div className="blitz-finale">
    <div className="text-7xl animate-pop">{app.teams[winner].icon} 🏆</div>
    <h1>{app.teams[winner].name} WIN THE BLITZ! ⚡</h1>
    <div className="blitz-final-scores"><span className="text-team1">{app.teams[0].name}: {state.scores[0]} ★</span><span className="text-team2">{app.teams[1].name}: {state.scores[1]} ★</span></div>
    <div className="text-4xl font-bold text-primary">Longest rally: {state.longest} words!</div>
    <p className="text-3xl font-bold">See you next class, champions!</p>
    {teaser && <div className="text-xl text-muted-foreground">Next class: <span className="font-bold text-foreground">{teaser.icon} {teaser.name}</span></div>}
    <div className="flex gap-4"><Button variant="game" size="xl" onClick={() => { history.current = []; setCategories(chooseCategories(available, app.week, options.rounds, options.categories)); const next = initialRally(Math.random() < 0.5 ? 0 : 1, options.shotClock); current.current = next; setState(next); setPlayer(null); setMatchKey((k) => k + 1); }}><RotateCcw /> Rematch</Button><Button asChild variant="panel" size="xl"><Link to="/"><Home /> Home</Link></Button></div>
  </div>;

  return <div className="blitz-play">
    <HelpOverlay open={help} onClose={() => setHelp(false)} shortcuts={SHORTCUTS} />
    <div className="blitz-status"><span>{state.sudden ? "⚡ Sudden death" : `Round ${state.round + 1} / ${options.rounds}`}</span><span>Week {app.week} · Word tennis</span><Button variant="panel" size="icon" aria-label="Help (?)" onClick={() => setHelp(true)}><HelpCircle /></Button></div>
    <Court teams={app.teams} scores={state.scores} active={state.active} rally={state.rally} rounds={options.rounds} review={state.phase !== "rally"} />
    <section className="blitz-category-zone">
      <div key={`${state.round}-${matchKey}`} className="blitz-category animate-pop">
        {state.phase === "review" ? <><div className="blitz-round-point text-primary">{app.teams[state.roundWinner ?? 0].name} +1 ROUND ★</div><h1 className="blitz-review-title">{categoryIcons[category.category]} {category.category}</h1><h2 className="text-xl text-muted-foreground">Words you could say:</h2><p className="blitz-word-list">{category.words.join(" · ")}</p><span className="text-muted-foreground">Next category in {reviewSeconds}s</span></> : <>
          <div className="blitz-category-icon">{categoryIcons[category.category] ?? "⚡"}</div><h1>{category.category.toUpperCase()}!</h1>
          {state.phase === "intro" ? <div className="blitz-starting"><span className={state.round === 0 ? "blitz-coin" : ""}>{app.teams[state.starter].icon}</span><span>{app.teams[state.starter].name} starts!</span></div> : <div className={state.active === 0 ? "text-team1" : "text-team2"}>{player ? `🎤 ${player.name}` : `${app.teams[state.active].name}’s turn`}</div>}
          {state.round === 0 && <p className="blitz-rule">Say a word. Don't repeat! Don't stop!</p>}
        </>}
      </div>
      {state.phase !== "review" && <div className="blitz-clock"><TimerRing remaining={state.remaining} duration={options.shotClock} running={state.phase === "rally" && !state.paused && !help} size={140} /></div>}
    </section>
    <footer className="blitz-actions">
      <Button variant="success" size="xl" disabled={state.phase !== "rally" || state.paused} onClick={() => act("correct")}><Check /> Correct <Kbd>C</Kbd></Button>
      <Button variant="danger" size="xl" disabled={state.phase !== "rally" || state.paused} onClick={() => act("out")}><X /> Out <Kbd>X</Kbd></Button>
      <Button variant="panel" size="xl" disabled={!history.current.length} onClick={undo}><Undo2 /> Undo <Kbd>Z</Kbd></Button>
      <Button variant="panel" size="xl" disabled={state.phase === "intro"} onClick={pause}>{state.paused ? <Play /> : <Pause />}{state.phase === "review" ? "Skip review" : state.paused ? "Resume" : "Pause"}<Kbd>Space</Kbd></Button>
      <Button variant="game" size="xl" disabled={state.phase !== "review"} onClick={() => act("next")}><SkipForward /><span>Next category</span><Kbd>→</Kbd></Button>
      {app.roster.length > 0 && <Button variant="panel" size="iconLg" aria-label="Turn Picker (R)" onClick={pick}><Dices /></Button>}
    </footer>
  </div>;
}