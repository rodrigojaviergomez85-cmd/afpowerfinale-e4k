import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { CrowdRow, LunaSvg, PoolLuna, StarSign } from "./Luna";

export type LunaMood = "calm" | "worried" | "panic" | "uhoh" | "happy" | "tada" | "soaked";
export type Crowd = "calm" | "cheer" | "gasp" | "aww" | "roar";

// Rope geometry in a 1000x300 box: from (120,95) to (880,95), sagging in the middle.
const X0 = 120, X1 = 880, Y = 95;
const ropeY = (t: number, sag: number) => Y + 2 * t * (1 - t) * sag;

export function Tightrope({
  pct, goal, steps, mood, crowd = "calm", frozen = false, slipKey = 0, flashKey = 0, calm = false,
  countdown, falling = false, inPool = false, spotsSwing = false, stars = [], className,
}: {
  pct: number; goal: number; steps: number; mood: LunaMood; crowd?: Crowd; frozen?: boolean; slipKey?: number; flashKey?: number; calm?: boolean;
  countdown?: number | undefined; falling?: boolean; inPool?: boolean; spotsSwing?: boolean; stars?: string[]; className?: string;
}) {
  const level = frozen ? 0 : mood === "panic" ? 3 : mood === "worried" ? 2 : mood === "calm" ? 1 : 0;
  const sag = 20 + (1 - Math.max(0, Math.min(1, pct))) * 50 + (level === 3 ? 10 : 0);
  const t = goal ? Math.min(1, steps / goal) : 0;
  const lx = X0 + (X1 - X0) * t;
  const ly = ropeY(t, sag);
  const wob: CSSProperties = { ["--wob" as string]: `${[0, 0.6, 1.6, 3.2][level]}deg`, ["--wobt" as string]: `${[2, 2, 1.2, 0.6][level]}s` };
  const path = `M${X0},${Y} Q500,${Y + sag * 2} ${X1},${Y}`;
  const marks = Array.from({ length: Math.max(0, goal - 1) }, (_, i) => (i + 1) / goal);

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-3xl border-4 border-border", className)}
      style={{ background: "repeating-linear-gradient(90deg, var(--tent-a) 0 70px, var(--tent-b) 70px 140px)" }}
    >
      {/* spotlights */}
      {[22, 78].map((x, i) => (
        <div key={x} className={cn("pointer-events-none absolute -top-4 h-[130%] w-40 -translate-x-1/2", (spotsSwing || level === 3) && "animate-sweep")}
          style={{ left: `${x}%`, background: "linear-gradient(var(--spot), transparent 85%)", clipPath: "polygon(42% 0, 58% 0, 100% 100%, 0 100%)", animationDelay: `${i * 0.7}s` }} />
      ))}
      {/* pool */}
      <div className="absolute inset-x-[10%] bottom-0 h-[24%] rounded-t-2xl border-x-4 border-t-4 border-border" style={{ background: "linear-gradient(var(--pool), var(--pool-deep))" }}>
        <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="animate-wave absolute -top-2.5 left-0 h-5 w-[110%] opacity-80">
          <path d="M0 12 q12 -10 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0" fill="none" stroke="var(--pool)" strokeWidth="4" strokeLinecap="round" />
        </svg>
        {inPool && <PoolLuna className="animate-popup absolute left-1/2 top-[-34%] h-24 w-44 -translate-x-1/2" />}
      </div>
      {/* platforms + poles */}
      <div className="absolute left-[3%] top-[33%] h-[67%] w-3 rounded" style={{ background: "var(--rope)" }} />
      <div className="absolute left-[1%] top-[30%] h-4 w-[12%] rounded-lg border-2 border-border" style={{ background: "var(--gold)" }} />
      <div className="absolute right-[3%] top-[33%] h-[67%] w-3 rounded" style={{ background: "var(--rope)" }} />
      <div className="absolute right-[1%] top-[30%] h-4 w-[12%] rounded-lg border-2 border-border" style={{ background: "var(--gold)" }} />
      <div className="absolute right-[2%] top-[2%] grid h-[27%] w-[10%] place-items-center">
        <StarSign className="absolute h-full w-full" />
        {countdown !== undefined && <span key={countdown} className="animate-pop relative font-display text-4xl font-bold text-destructive text-stroke">{countdown}</span>}
      </div>

      {/* rope + Luna, wobbling together */}
      <div className={cn("absolute inset-0", level > 0 && !calm && "animate-wobble")} style={wob}>
        <div className={cn("absolute inset-0", level === 3 && !calm && "animate-bounce-rope")}>
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <path d={path} fill="none" stroke="var(--rope)" strokeWidth="7" strokeLinecap="round" />
            {marks.map((m) => (
              <circle key={m} cx={X0 + (X1 - X0) * m} cy={ropeY(m, sag)} r="7" fill={m <= t + 0.0001 ? "var(--gold)" : "var(--tent-b)"} stroke="var(--rope)" strokeWidth="3" />
            ))}
          </svg>
          {!inPool && (
            <div className="absolute -translate-x-1/2 -translate-y-full transition-[left,top] duration-500 ease-out" style={{ left: `${lx / 10}%`, top: `${(ly / 300) * 100}%` }}>
              <div key={slipKey} className={cn("luna relative flex flex-col items-center", slipKey > 0 && "animate-slip", falling && "animate-fall")}>
                <LunaSvg mood={mood} className="h-28 w-24" />
                {frozen && <span className="absolute top-[55%] h-1.5 w-40 rounded-full" style={{ background: "var(--gold)" }} />}
              </div>
              {flashKey > 0 && <div key={`f${flashKey}`} className="animate-spotflash pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(var(--spot), transparent 70%)" }} />}
            </div>
          )}
        </div>
      </div>

      {/* hero stars around the ring */}
      {stars.map((s, i) => (
        <span key={s} className="animate-pop absolute rounded-full px-2 text-lg font-bold" style={{ left: `${8 + ((i * 23) % 80)}%`, top: `${8 + ((i * 37) % 22)}%`, background: "var(--gold)", color: "var(--shape-outline)", animationDelay: `${i * 120}ms` }}>⭐ {s}</span>
      ))}

      {/* crowd */}
      <div className="absolute inset-x-0 bottom-0 flex justify-between px-1">
        <CrowdRow mood={crowd} count={3} className="flex" />
        <CrowdRow mood={crowd} count={3} className="flex" />
      </div>
    </div>
  );
}
