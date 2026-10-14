import { cn } from "@/lib/utils";

export type MaxMood = "ready" | "cheer" | "worried" | "soaked" | "happy";
const FACE: Record<MaxMood, string> = { ready: "🤠", cheer: "🥳", worried: "😰", soaked: "🥶", happy: "😄" };

/** Canyon scene. Water rises with (1 - pct); at pct = 0 it reaches the bridge. */
export function Canyon({
  pct, goal, planks, mood = "ready", frozen = false, waveKey = 0, plankKey = 0, calm = false,
  sunny, rainbow = false, floating = false, maxX, chestOpen = false, flags = [], fish = false, className,
}: {
  pct: number; goal: number; planks: number; mood?: MaxMood; frozen?: boolean; waveKey?: number; plankKey?: number; calm?: boolean;
  sunny?: boolean; rainbow?: boolean; floating?: boolean; maxX?: "run" | undefined; chestOpen?: boolean; flags?: string[]; fish?: boolean; className?: string;
}) {
  const weather = sunny ? "sun" : pct > 0.5 ? "sun" : pct > 0.25 ? "cloud" : "storm";
  const sky = weather === "sun" ? "var(--sky-sun)" : weather === "cloud" ? "var(--sky-cloud)" : "var(--sky-storm)";
  // Bridge deck at y=40% of scene; water top goes from 92% (full time) to 44% (no time).
  const waterTop = 44 + pct * 48;
  const drops = weather === "sun" ? 0 : weather === "cloud" ? 18 : calm ? 26 : 50;
  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border-4 border-border", className)} style={{ background: sky, transition: "background 1.5s" }}>
      {/* sun / clouds */}
      {weather === "sun" && <span className="absolute right-[18%] top-[4%] text-5xl">☀️</span>}
      {rainbow && <span className="animate-pop absolute left-1/2 top-[-6%] -translate-x-1/2 text-[7rem] leading-none">🌈</span>}
      {weather !== "sun" && (
        <div className="absolute inset-x-0 top-0 flex justify-around text-5xl">
          {["☁️", weather === "storm" ? "⛈️" : "🌥️", "☁️", weather === "storm" ? "🌩️" : "☁️"].map((c, i) => <span key={i}>{c}</span>)}
        </div>
      )}
      {Array.from({ length: drops }).map((_, i) => (
        <span key={i} className="animate-rain absolute top-0 h-4 w-0.5 rounded bg-ice/80" style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 7) * 90}ms` }} />
      ))}

      {/* river */}
      <div className="absolute inset-x-0 bottom-0 transition-[top] duration-700 ease-out" style={{ top: `${waterTop}%`, background: "linear-gradient(var(--river), var(--river-deep))" }}>
        <div className={cn("absolute -top-4 left-0 flex w-[110%] text-3xl", weather === "storm" && !calm ? "animate-panic" : "animate-wave")}>
          {Array.from({ length: 24 }).map((_, i) => <span key={i}>🌊</span>)}
        </div>
        {frozen && (
          <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 text-4xl animate-pop">
            {"🟫🟫🟫🟫🟫".split("").filter((c) => c.trim()).map((c, i) => <span key={i}>{c}</span>)}
            <span className="ml-2 rounded-full bg-gold px-3 text-xl font-bold" style={{ color: "var(--shape-outline)" }}>🪣 HOLD!</span>
          </div>
        )}
        {fish && <span className="animate-flop absolute -top-12 left-[15%] text-5xl">🐟</span>}
      </div>
      {waveKey > 0 && <span key={waveKey} className="animate-splash absolute left-1/2 -translate-x-1/2 text-7xl" style={{ top: `${waterTop - 14}%` }}>💦🌊💦</span>}

      {/* water level mark at bridge height */}
      <div className="absolute inset-x-[18%] border-t-4 border-dashed border-destructive/80" style={{ top: "44%" }}>
        <span className="absolute -top-0.5 right-0 rounded-b-lg bg-destructive px-2 text-sm font-bold text-destructive-foreground">⚠ water level</span>
      </div>

      {/* cliffs */}
      <div className="absolute bottom-0 left-0 top-[40%] w-[18%] rounded-tr-3xl border-r-4 border-t-[10px]" style={{ background: "var(--cliff)", borderColor: "var(--cliff-top)" }} />
      <div className="absolute bottom-0 right-0 top-[40%] w-[18%] rounded-tl-3xl border-l-4 border-t-[10px]" style={{ background: "var(--cliff)", borderColor: "var(--cliff-top)" }} />

      {/* bridge planks */}
      <div className="absolute left-[18%] right-[18%] flex gap-1" style={{ top: "38%", height: "8%" }}>
        {Array.from({ length: goal }).map((_, i) => {
          const built = i < planks;
          return (
            <div key={i} className="relative flex-1">
              {built ? (
                <div
                  key={i === planks - 1 ? `p${plankKey}` : undefined}
                  className={cn("h-full rounded-md border-[3px]", i === planks - 1 && !floating && "animate-plank", floating && "animate-float")}
                  style={{ background: "var(--plank)", borderColor: "var(--shape-outline)", animationDelay: floating ? `${i * 120}ms` : undefined }}
                />
              ) : (
                <div className="h-full rounded-md border-[3px] border-dashed border-foreground/40" />
              )}
              {flags[i] && built && !floating && (
                <span className="animate-pop absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-accent px-1.5 text-xs font-bold text-accent-foreground">🚩 {flags[i]}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Max */}
      <div className={cn("absolute flex flex-col items-center leading-none", maxX === "run" && "animate-run")} style={{ left: maxX === "run" ? undefined : "6%", top: "12%" }}>
        {mood === "soaked" && <span className="text-2xl">💧🎩💧</span>}
        <span className={cn("text-6xl", mood === "worried" && !calm && "animate-panic", mood === "cheer" && "animate-jolt")}>{FACE[mood]}</span>
        <span className="text-3xl">🎒</span>
      </div>
      {/* chest */}
      <div className="absolute right-[5%] flex flex-col items-center" style={{ top: chestOpen ? "8%" : "20%" }}>
        {chestOpen && <span className="animate-rise text-4xl">🪙✨🪙</span>}
        <span className="text-6xl">{chestOpen ? "💰" : "🧰"}</span>
      </div>
    </div>
  );
}
