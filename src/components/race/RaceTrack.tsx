import type { Team } from "@/lib/store";
import { teamStyle } from "@/components/engine/Scoreboard";
import { cn } from "@/lib/utils";

export interface Planet { name: string; icon: string }
export const PLANETS: Planet[] = [
  { name: "Mars", icon: "🔴" }, { name: "Saturn", icon: "🪐" }, { name: "Neptune", icon: "🔵" },
  { name: "Planet Candy", icon: "🍭" }, { name: "Jupiter", icon: "🟠" }, { name: "the Moon", icon: "🌕" },
];

const STARS = "radial-gradient(2px 2px at 20px 30px, white, transparent), radial-gradient(1.5px 1.5px at 140px 80px, white, transparent), radial-gradient(2px 2px at 260px 20px, white, transparent), radial-gradient(1px 1px at 380px 110px, white, transparent), radial-gradient(1.5px 1.5px at 500px 60px, white, transparent)";

export interface LaneFx { key: number; kind: "move" | "turbo" | "sputter" }

function Rocket({ team, index, fx, landed }: { team: Team; index: number; fx: LaneFx | undefined; landed?: boolean }) {
  const st = teamStyle(index);
  const k = fx?.key ?? 0;
  return (
    <div key={k} className={cn("relative flex items-center", fx?.kind === "sputter" && "animate-rocket-wobble")}>
      {/* speed trail */}
      {fx && fx.kind !== "sputter" && <div className="animate-smoke absolute right-full top-1/2 h-2 w-40 -translate-y-1/2 rounded-full" style={{ background: "linear-gradient(90deg, transparent, var(--foreground))" }} />}
      {!landed && (
        <div className={cn("mr-[-6px] h-5 rounded-full", fx && fx.kind !== "sputter" ? "animate-flame-burst w-14" : "animate-flame w-6", fx?.kind === "turbo" && "animate-rainbow w-20")}
          style={{ background: fx?.kind === "turbo" ? "linear-gradient(90deg, red, orange, yellow, lime, cyan, violet)" : "linear-gradient(90deg, transparent, var(--flame))" }} />
      )}
      {fx?.kind === "sputter" && [0, 1, 2].map((i) => (
        <span key={i} className="animate-smoke absolute -left-6 top-0 h-8 w-8 rounded-full" style={{ background: "var(--smoke)", animationDelay: `${i * 180}ms` }} />
      ))}
      <div className={cn("relative grid h-14 w-20 place-items-center rounded-r-full rounded-l-xl border-4 chunky", st.bg)} style={{ borderColor: "var(--shape-outline)" }}>
        <span className="text-3xl">{team.icon}</span>
      </div>
    </div>
  );
}

export function RaceTrack({ teams, pos, stops, planet, fx, active, className, landed }: {
  teams: Team[]; pos: number[]; stops: number; planet: Planet; fx: (LaneFx | undefined)[]; active: number; className?: string; landed?: number[];
}) {
  const near = pos.some((p) => p === stops - 1);
  return (
    <div className={cn("relative h-[210px] overflow-hidden rounded-3xl chunky", className)} style={{ background: "linear-gradient(90deg, var(--space-deep), var(--space-mid))" }}>
      <div className="animate-stars absolute inset-0 opacity-60" style={{ backgroundImage: STARS, backgroundSize: "600px 140px" }} />
      <div className="animate-stars-fast absolute inset-0 opacity-90" style={{ backgroundImage: STARS, backgroundSize: "600px 200px", backgroundPosition: "100px 40px" }} />
      {/* planet */}
      <div className={cn("absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center", near && "animate-planet-glow")}>
        <span className="text-[110px] leading-none">{planet.icon}</span>
        <span className="text-xl font-bold">{planet.name}</span>
        {near && <span className="animate-pop mt-1 rounded-full px-3 text-lg font-bold" style={{ background: "var(--gold)", color: "var(--shape-outline)" }}>Almost there!</span>}
      </div>
      <div className="absolute inset-y-3 left-3 right-40 flex flex-col justify-around">
        {teams.map((t, i) => {
          const st = teamStyle(i);
          const pct = Math.min(1, pos[i]! / stops);
          return (
            <div key={i} className={cn("relative h-[44%] rounded-2xl border-2", i === active ? "border-foreground" : "border-transparent")} style={{ background: `color-mix(in oklab, var(--team${i + 1}) 18%, transparent)` }}>
              <div className={cn("absolute left-2 top-1 z-10 rounded-full px-3 text-lg font-bold text-primary-foreground", st.bg)}>{t.icon} {t.name} · {pos[i]}/{stops}</div>
              {Array.from({ length: stops }, (_, s) => (
                <span key={s} className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full" style={{ left: `calc(${((s + 1) / stops) * 100}% - 6px)`, background: s < pos[i]! ? `var(--team${i + 1})` : "var(--smoke)", opacity: s < pos[i]! ? 1 : 0.4 }} />
              ))}
              <div className="absolute top-1/2 -translate-y-1/2 transition-[left] duration-700 ease-out" style={{ left: `calc(${pct * 100}% - ${pct * 100}px + 8px)` }}>
                <Rocket team={t} index={i} fx={fx[i]} landed={!!landed?.includes(i)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
