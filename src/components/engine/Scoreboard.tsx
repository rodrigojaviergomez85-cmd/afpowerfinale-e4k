import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Team } from "@/lib/store";

const TEAM_STYLES = [
  { bg: "bg-team1", ring: "ring-team1", deep: "bg-team1-deep", pattern: "●" },
  { bg: "bg-team2", ring: "ring-team2", deep: "bg-team2-deep", pattern: "▲" },
];

export const teamStyle = (i: number) => TEAM_STYLES[i % 2]!;

function Pop({ value }: { value: number }) {
  const [pops, setPops] = useState<{ id: number; d: number }[]>([]);
  const prev = useRef(value);
  useEffect(() => {
    const d = value - prev.current;
    prev.current = value;
    if (d === 0) return;
    const id = Date.now() + Math.random();
    setPops((p) => [...p, { id, d }]);
    const t = setTimeout(() => setPops((p) => p.filter((x) => x.id !== id)), 1100);
    return () => clearTimeout(t);
  }, [value]);
  return (
    <>
      {pops.map((p) => (
        <span
          key={p.id}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-5xl font-bold animate-msg msg-shadow",
            p.d > 0 ? "text-primary" : "text-danger",
          )}
        >
          {p.d > 0 ? `+${p.d}` : p.d}
        </span>
      ))}
    </>
  );
}

export function TeamScore({ team, score, index, active }: { team: Team; score: number; index: number; active?: boolean }) {
  const s = teamStyle(index);
  return (
    <div
      className={cn(
        "@container relative flex min-w-0 items-center gap-2 rounded-3xl px-3 py-2 chunky transition-transform @md:gap-4 @md:px-5 @md:py-3",
        s.bg,
        active ? "scale-105 ring-4 ring-foreground" : "opacity-90",
      )}
    >
      <span className="shrink-0 text-4xl @md:text-5xl">{team.icon}</span>
      <div className="min-w-0 flex-1 text-primary-foreground">
        <div className="hidden items-center gap-2 whitespace-nowrap text-sm font-bold uppercase opacity-80 @md:flex">
          <span>{s.pattern}</span> Team {index + 1} · key {index + 1}
        </div>
        <div className="truncate text-xl font-bold @md:text-2xl leading-tight">{team.name}</div>
      </div>
      <div className="relative min-w-14 shrink-0 rounded-2xl bg-card px-3 py-1 text-center font-display text-5xl @md:min-w-20 @md:px-4 @md:text-6xl font-bold text-foreground">
        {score}
      </div>
      {/* Own track for the +/- change so it never covers the score or the panel edge */}
      <div className="relative w-12 shrink-0 @md:w-24" aria-hidden="true">
        <Pop value={score} />
      </div>
    </div>
  );
}

export function Scoreboard({ teams, scores, activeTeam }: { teams: Team[]; scores: number[]; activeTeam?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {teams.map((t, i) => (
        <TeamScore key={i} team={t} score={scores[i] ?? 0} index={i} active={activeTeam === i} />
      ))}
    </div>
  );
}

export function CoopScore({ score, goal }: { score: number; goal: number }) {
  return (
    <div className="relative panel flex items-center gap-4 px-6 py-3">
      <span className="text-4xl">🤝</span>
      <div className="text-2xl font-bold">Whole class</div>
      <div className="relative ml-auto font-display text-6xl font-bold">
        {score}<span className="text-3xl text-muted-foreground">/{goal}</span>
        <Pop value={score} />
      </div>
    </div>
  );
}

export function StreakBadge({ streak }: { streak: number }) {
  if (streak < 2) return null;
  return (
    <div key={streak} className="animate-pop rounded-full bg-accent px-6 py-2 text-3xl font-bold text-accent-foreground chunky">
      {streak} in a row! {streak >= 5 ? "🔥🔥🔥" : streak >= 3 ? "🔥🔥" : "🔥"}
    </div>
  );
}
