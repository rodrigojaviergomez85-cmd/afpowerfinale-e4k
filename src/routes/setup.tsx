import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Home, Shuffle, Plus, X, Play } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TEAM_NAME_POOL, useApp } from "@/lib/store";
import { getGame } from "@/lib/games";
import { shuffle } from "@/lib/content";
import { teamStyle } from "@/components/engine/Scoreboard";
import { useHotkeys } from "@/components/engine/controls";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/setup")({
  validateSearch: z.object({ game: z.string().default("demo") }),
  head: () => ({
    meta: [
      { title: "Quick Setup — AF Power Finale" },
      { name: "description", content: "Choose level, class and teams in seconds." },
      { property: "og:title", content: "Quick Setup — AF Power Finale" },
      { property: "og:description", content: "Choose level, class and teams in seconds." },
    ],
  }),
  component: Setup,
});

const LEVELS = [1, 2, 3, 4, 5, 6];
const CLASSES = Array.from({ length: 30 }, (_, i) => i + 1);

function Setup() {
  const { game: gameId } = Route.useSearch();
  const game = getGame(gameId) ?? getGame("demo")!;
  const navigate = useNavigate();
  const s = useApp();
  const [newName, setNewName] = useState("");

  const start = () => navigate({ to: "/play/demo" });
  useHotkeys({ Enter: start });

  const reshuffle = () => {
    const [a, b] = shuffle(TEAM_NAME_POOL);
    s.setSetup({ teams: [a, b] });
  };
  const addPlayers = () => {
    const names = newName.split(/[,\n]/).map((n) => n.trim()).filter(Boolean);
    if (!names.length) return;
    s.setSetup({
      roster: [...s.roster, ...names.map((name) => ({ id: crypto.randomUUID(), name, quiet: false, turns: 0, points: 0 }))],
    });
    setNewName("");
  };

  return (
    <div data-calm={s.settings.calm} className="stage-bg min-h-screen">
      <header className="flex items-center gap-3 px-8 py-5">
        <Button asChild variant="panel" size="iconLg" aria-label="Home"><Link to="/"><Home /></Link></Button>
        <div className={cn("flex items-center gap-3 rounded-2xl px-4 py-2 text-primary-foreground chunky", game.accent)}>
          <span className="text-3xl">{game.icon}</span>
          <span className="text-2xl font-bold">{game.name}</span>
        </div>
        <h1 className="ml-4 text-4xl">Quick Setup</h1>
        <Button variant="game" size="xl" className="ml-auto" onClick={start}><Play /> Start (Enter)</Button>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-8 pb-12 lg:grid-cols-[1fr_1.4fr]">
        <section className="panel space-y-5 p-6">
          <h2 className="text-3xl">📚 Class</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="space-y-2">
              <span className="text-lg font-bold text-muted-foreground">Level</span>
              <Select value={String(s.level)} onValueChange={(v) => s.setSetup({ level: Number(v) })}>
                <SelectTrigger className="h-16 rounded-2xl text-3xl font-bold"><SelectValue /></SelectTrigger>
                <SelectContent>{LEVELS.map((l) => <SelectItem key={l} value={String(l)} className="text-xl">Level {l}</SelectItem>)}</SelectContent>
              </Select>
            </label>
            <label className="space-y-2">
              <span className="text-lg font-bold text-muted-foreground">Class</span>
              <Select value={String(s.classNum)} onValueChange={(v) => s.setSetup({ classNum: Number(v) })}>
                <SelectTrigger className="h-16 rounded-2xl text-3xl font-bold"><SelectValue /></SelectTrigger>
                <SelectContent>{CLASSES.map((c) => <SelectItem key={c} value={String(c)} className="text-xl">Class {c}</SelectItem>)}</SelectContent>
              </Select>
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-lg font-bold text-muted-foreground">Group name (optional — avoids repeats per group)</span>
            <Input value={s.group} onChange={(e) => s.setSetup({ group: e.target.value })} placeholder="e.g. Tue 5pm Kids" className="h-12 rounded-xl text-xl" />
          </label>

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
                <Input
                  value={t.name}
                  onChange={(e) => {
                    const teams = [...s.teams] as typeof s.teams;
                    teams[i] = { ...t, name: e.target.value };
                    s.setSetup({ teams });
                  }}
                  className="h-12 rounded-xl border-0 bg-card text-2xl font-bold"
                />
              </div>
            );
          })}
        </section>

        <section className="panel flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl">🎲 Roster <span className="text-xl text-muted-foreground">(optional)</span></h2>
            {s.roster.length > 0 && (
              <Button variant="ghost" onClick={() => s.setSetup({ roster: [] })}>Clear all</Button>
            )}
          </div>
          <p className="text-lg text-muted-foreground">Add names to use the random Turn Picker. Tap ⭐ for kids who spoke little in AF — they get picked first.</p>
          <div className="flex gap-2">
            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); addPlayers(); } }}
              placeholder="Type names, separate with commas"
              className="h-12 rounded-xl text-xl"
            />
            <Button variant="game" size="lg" className="h-12" onClick={addPlayers}><Plus /> Add</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {s.roster.map((p) => (
              <div key={p.id} className={cn("flex items-center gap-2 rounded-full py-1 pl-2 pr-1 text-xl font-bold", p.quiet ? "bg-primary text-primary-foreground" : "bg-secondary")}>
                <button
                  aria-label="Spoke little in AF"
                  onClick={() => s.setSetup({ roster: s.roster.map((r) => (r.id === p.id ? { ...r, quiet: !r.quiet } : r)) })}
                  className={cn("text-2xl", !p.quiet && "opacity-40 grayscale")}
                >⭐</button>
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
