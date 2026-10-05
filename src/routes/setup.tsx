import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Home, Shuffle, Plus, X, Play } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BOMB_PRESETS, TEAM_NAME_POOL, useApp } from "@/lib/store";
import { getGame } from "@/lib/games";
import { COURSES } from "@/data/content";
import { getCourse, getLevel, isReviewDay, normalizeSelection, shuffle, type ContentMix } from "@/lib/content";
import { teamStyle } from "@/components/engine/Scoreboard";
import { useHotkeys } from "@/components/engine/controls";
import { Kbd } from "@/components/engine/Kbd";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/setup")({
  validateSearch: z.object({ game: z.string().default("demo") }),
  head: () => ({
    meta: [
      { title: "Quick Setup — AF Power Finale" },
      { name: "description", content: "Pick the course, level, week and day in seconds." },
      { property: "og:title", content: "Quick Setup — AF Power Finale" },
      { property: "og:description", content: "Pick the course, level, week and day in seconds." },
    ],
  }),
  component: Setup,
});

function Pick({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { v: string; l: React.ReactNode }[] }) {
  return (
    <label className="space-y-2">
      <span className="text-lg font-bold text-muted-foreground">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-14 rounded-2xl text-xl font-bold"><SelectValue /></SelectTrigger>
        <SelectContent>{options.map((o) => <SelectItem key={o.v} value={o.v} className="text-lg">{o.l}</SelectItem>)}</SelectContent>
      </Select>
    </label>
  );
}

function Seg<T extends string | number>({ value, options, onChange }: { value: T; options: { v: T; l: string }[]; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button key={String(o.v)} onClick={() => onChange(o.v)} className={cn("rounded-xl px-4 py-2 text-lg font-bold chunky", value === o.v ? "bg-primary text-primary-foreground" : "bg-secondary")}>{o.l}</button>
      ))}
    </div>
  );
}

function Setup() {
  const { game: gameId } = Route.useSearch();
  const game = getGame(gameId) ?? getGame("demo")!;
  const isBomb = game.id === "beat-the-bomb";
  const navigate = useNavigate();
  const s = useApp();
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const n = normalizeSelection(s);
    if (n.course !== s.course || n.level !== s.level || n.week !== s.week || n.day !== s.day) s.setSetup(n);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s.course, s.level, s.week, s.day]);

  const course = getCourse(s.course);
  const level = getLevel(course.name, s.level);
  const week = level.weeks.find((w) => w.week === s.week) ?? level.weeks[0];

  const start = () => navigate({ to: isBomb ? "/play/bomb" : "/play/demo" });
  useHotkeys({ Enter: start });

  const reshuffle = () => {
    const [a, b] = shuffle(TEAM_NAME_POOL);
    s.setSetup({ teams: [a, b] });
  };
  const addPlayers = () => {
    const names = newName.split(/[,\n]/).map((n) => n.trim()).filter(Boolean);
    if (!names.length) return;
    s.setSetup({ roster: [...s.roster, ...names.map((name) => ({ id: crypto.randomUUID(), name, quiet: false, turns: 0, points: 0 }))] });
    setNewName("");
  };
  const presetName = Object.entries(BOMB_PRESETS).find(([, p]) => p.target === s.bomb.target && p.time === s.bomb.time && p.penalty === s.bomb.penalty)?.[0];

  return (
    <div data-calm={s.settings.calm} className="stage-bg min-h-screen">
      <header className="flex items-center gap-3 px-8 py-5">
        <Button asChild variant="panel" size="iconLg" aria-label="Home"><Link to="/"><Home /></Link></Button>
        <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-2 text-primary-foreground chunky", game.accent)}>
          <span className="text-3xl">{game.icon}</span>
          <span className="text-2xl font-bold">{game.name}</span>
        </div>
        <h1 className="ml-4 text-4xl">Quick Setup</h1>
        <Button variant="game" size="xl" className="ml-auto" onClick={start}><Play /> Start <Kbd>Enter</Kbd></Button>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-8 pb-12 lg:grid-cols-[1.1fr_1.3fr]">
        <section className="panel space-y-5 p-6">
          <h2 className="text-3xl">📚 Class</h2>
          <div className="grid grid-cols-2 gap-4">
            <Pick label="Course" value={course.name} onChange={(v) => s.setSetup({ course: v })} options={COURSES.map((c) => ({ v: c.name, l: c.name }))} />
            <Pick label="Level" value={String(level.level)} onChange={(v) => s.setSetup({ level: Number(v) })} options={course.levels.map((l) => ({ v: String(l.level), l: `Level ${l.level}` }))} />
            <Pick label="Week" value={String(week.week)} onChange={(v) => s.setSetup({ week: Number(v), day: 1 })} options={level.weeks.map((w) => ({ v: String(w.week), l: `Week ${w.week}` }))} />
            <Pick
              label="Day"
              value={String(s.day)}
              onChange={(v) => s.setSetup({ day: Number(v) })}
              options={week.days.map((d) => ({ v: String(d.day), l: <>{d.label}{!d.lines.length && <span className="ml-2 rounded-full bg-primary px-2 text-sm text-primary-foreground">Review mode</span>}</> }))}
            />
          </div>
          {isReviewDay(s) && (
            <div className="inline-flex rounded-full bg-primary px-4 py-1 text-lg font-bold text-primary-foreground">🔁 Review mode — items from earlier days</div>
          )}

          {isBomb ? (
            <div className="space-y-4 pt-2">
              <h2 className="text-3xl">💣 Bomb options</h2>
              <Seg value={presetName ?? ""} onChange={(v) => v && s.setBomb({ ...BOMB_PRESETS[v], mix: s.bomb.mix })} options={Object.keys(BOMB_PRESETS).map((k) => ({ v: k, l: k }))} />
              <div className="space-y-1"><div className="font-bold text-muted-foreground">Target: {s.bomb.target} questions</div>
                <input type="range" min={6} max={15} value={s.bomb.target} onChange={(e) => s.setBomb({ target: Number(e.target.value) })} className="w-full accent-primary" /></div>
              <div className="space-y-1"><div className="font-bold text-muted-foreground">Total time: {s.bomb.time}s</div>
                <input type="range" min={60} max={180} step={10} value={s.bomb.time} onChange={(e) => s.setBomb({ time: Number(e.target.value) })} className="w-full accent-primary" /></div>
              <div className="space-y-2"><div className="font-bold text-muted-foreground">Penalty for wrong / skip</div>
                <Seg value={s.bomb.penalty} onChange={(v) => s.setBomb({ penalty: v })} options={[0, 3, 5].map((n) => ({ v: n, l: `${n}s` }))} /></div>
              <div className="space-y-2"><div className="font-bold text-muted-foreground">Content</div>
                <Seg<ContentMix> value={s.bomb.mix} onChange={(v) => s.setBomb({ mix: v })} options={[{ v: "mix", l: "Mix" }, { v: "questions", l: "Questions only" }, { v: "translations", l: "Translations only" }]} /></div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pt-2">
                <h2 className="text-3xl">⚔️ Teams</h2>
                <Button variant="panel" size="lg" onClick={reshuffle}><Shuffle /> New names</Button>
              </div>
              {s.teams.map((t, i) => {
                const st = teamStyle(i);
                return (
                  <div key={i} className={cn("flex items-center gap-3 rounded-2xl p-3 chunky", st.bg)}>
                    <span className="text-5xl">{t.icon}</span>
                    <span className="text-2xl font-bold text-primary-foreground">{st.pattern}</span>
                    <Input value={t.name} onChange={(e) => { const teams = [...s.teams] as typeof s.teams; teams[i] = { ...t, name: e.target.value }; s.setSetup({ teams }); }} className="h-12 rounded-xl border-0 bg-card text-2xl font-bold" />
                  </div>
                );
              })}
            </>
          )}
        </section>

        <section className="panel flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl">🎲 Roster <span className="text-xl text-muted-foreground">(optional)</span></h2>
            {s.roster.length > 0 && <Button variant="ghost" onClick={() => s.setSetup({ roster: [] })}>Clear all</Button>}
          </div>
          <p className="text-lg text-muted-foreground">Add names to use the random Turn Picker. Tap ⭐ for kids who spoke little in AF — they get picked first.</p>
          <div className="flex gap-2">
            <Input value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); addPlayers(); } }} placeholder="Type names, separate with commas" className="h-12 rounded-xl text-xl" />
            <Button variant="game" size="lg" className="h-12" onClick={addPlayers}><Plus /> Add</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {s.roster.map((p) => (
              <div key={p.id} className={cn("flex items-center gap-2 rounded-full py-1 pl-2 pr-1 text-xl font-bold", p.quiet ? "bg-primary text-primary-foreground" : "bg-secondary")}>
                <button aria-label="Spoke little in AF" onClick={() => s.setSetup({ roster: s.roster.map((r) => (r.id === p.id ? { ...r, quiet: !r.quiet } : r)) })} className={cn("text-2xl", !p.quiet && "opacity-40 grayscale")}>⭐</button>
                {p.name}
                <span className="text-sm opacity-70">{p.turns}×</span>
                <button aria-label={`Remove ${p.name}`} onClick={() => s.setSetup({ roster: s.roster.filter((r) => r.id !== p.id) })} className="rounded-full p-1 hover:bg-card/40"><X className="h-5 w-5" /></button>
              </div>
            ))}
            {!s.roster.length && <div className="w-full rounded-2xl border-2 border-dashed p-6 text-center text-lg text-muted-foreground">No roster? No problem — just call on students.</div>}
          </div>
        </section>
      </main>
    </div>
  );
}
