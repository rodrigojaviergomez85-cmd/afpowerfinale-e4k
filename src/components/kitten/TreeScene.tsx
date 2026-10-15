import { cn } from "@/lib/utils";

export type PepperMood = "calm" | "worried" | "scared" | "happy" | "dizzy";
export type PepperAt = "branch" | "falling" | "net" | "helmet" | "arms";

const BASE = { x: 455, y: 360 };
const TOP = { x: 572, y: 92 };
const at = (t: number) => ({ x: BASE.x + (TOP.x - BASE.x) * t, y: BASE.y + (TOP.y - BASE.y) * t });

function Pepper({ mood, ears = false }: { mood: PepperMood; ears?: boolean }) {
  const puffed = mood === "scared";
  return (
    <g stroke="var(--sky-ink)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <path d={puffed ? "M18 -10 C46 -20 48 -50 34 -62" : "M18 -8 C40 -10 44 -34 32 -44"} fill="none" stroke="var(--kitten-fur)" strokeWidth={puffed ? 14 : 7} />
      <ellipse cx="0" cy="-14" rx="22" ry="16" fill="var(--kitten-fur)" />
      <g transform={`translate(0 -38) ${ears ? "translate(0 -3)" : ""}`}>
        <path d={ears ? "M-17 -6 L-15 -30 L-3 -12Z M17 -6 L15 -30 L3 -12Z" : "M-17 -6 L-20 -24 L-4 -13Z M17 -6 L20 -24 L4 -13Z"} fill="var(--kitten-fur)" />
        <path d="M-13 -10 L-14 -20 L-7 -13Z M13 -10 L14 -20 L7 -13Z" fill="var(--kitten-ear)" strokeWidth="1" />
        <circle r="18" fill="var(--kitten-fur)" />
        {mood === "dizzy" ? (
          <path d="M-11 -6 l6 6 m0 -6 l-6 6 M5 -6 l6 6 m0 -6 l-6 6" stroke="var(--kitten-eye)" />
        ) : mood === "happy" ? (
          <path d="M-12 -2 q4 -6 8 0 M4 -2 q4 -6 8 0" fill="none" stroke="var(--kitten-eye)" />
        ) : (
          <g strokeWidth="1.5"><ellipse cx="-7" cy="-3" rx={mood === "scared" ? 6 : 5} ry={mood === "scared" ? 7 : 6} fill="var(--kitten-eye)" /><ellipse cx="7" cy="-3" rx={mood === "scared" ? 6 : 5} ry={mood === "scared" ? 7 : 6} fill="var(--kitten-eye)" /><circle cx="-7" cy="-2" r="2" fill="var(--sky-ink)" /><circle cx="7" cy="-2" r="2" fill="var(--sky-ink)" /></g>
        )}
        <path d="M-2 4 L2 4 L0 7Z" fill="var(--kitten-ear)" strokeWidth="1" />
        {mood === "happy" || mood === "calm" ? <path d="M-5 9 q2.5 3 5 0 q2.5 3 5 0" fill="none" strokeWidth="2" /> : <ellipse cx="0" cy="11" rx="3" ry={mood === "scared" ? 4 : 2} fill="var(--sky-ink)" />}
        <path d="M-9 6 H-24 M-9 9 L-22 13 M9 6 H24 M9 9 L22 13" strokeWidth="1.5" stroke="var(--net)" />
        {mood === "worried" && <path d="M-13 -13 L-3 -10 M13 -13 L3 -10" strokeWidth="2" />}
      </g>
      {mood === "dizzy" && <g fill="var(--rosa-helmet)" strokeWidth="1.5"><path d="M-30 -70 l4 8 l8 1 l-6 5 l2 8 l-8 -4 l-8 4 l2 -8 l-6 -5 l8 -1Z" /><path d="M24 -74 l3 6 l6 1 l-4 4 l1 6 l-6 -3 l-6 3 l1 -6 l-4 -4 l6 -1Z" /></g>}
    </g>
  );
}

function Rosa({ slip = false, holding = false, mood }: { slip?: boolean; holding?: boolean; mood: "smile" | "whoa" | "cheer" }) {
  return (
    <g stroke="var(--sky-ink)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" className={cn(slip && "kitten-slip")}>
      <path d={slip ? "M-8 -30 L-22 -6 M8 -30 L10 0" : "M-8 -30 L-10 0 M8 -30 L10 0"} stroke="var(--sky-ink)" strokeWidth="9" />
      <rect x="-16" y="-70" width="32" height="44" rx="10" fill="var(--rosa-coat)" />
      <path d="M-16 -46 H16" stroke="var(--rosa-helmet)" strokeWidth="5" />
      <path d={mood === "cheer" ? "M-14 -64 L-30 -92 M14 -64 L30 -92" : holding ? "M-14 -62 L4 -52 M14 -62 L6 -52" : "M-14 -62 L-4 -86 M14 -62 L22 -86"} stroke="var(--rosa-coat)" strokeWidth="9" />
      <circle cx="0" cy="-86" r="16" fill="var(--rosa-skin)" />
      <path d="M-14 -82 q-6 12 -2 20 M14 -82 q6 12 2 20" stroke="var(--rosa-hair)" strokeWidth="6" fill="none" />
      <path d="M-22 -92 Q0 -124 22 -92 Z" fill="var(--rosa-helmet)" />
      <path d="M-26 -92 H26" stroke="var(--rosa-helmet)" strokeWidth="6" />
      <circle cx="-6" cy="-87" r="2" fill="var(--sky-ink)" /><circle cx="6" cy="-87" r="2" fill="var(--sky-ink)" />
      {mood === "whoa" ? <ellipse cx="0" cy="-77" rx="4" ry="5" fill="var(--sky-ink)" /> : <path d="M-7 -79 q7 7 14 0" fill="none" strokeWidth="2.5" />}
    </g>
  );
}

/** Park scene: Rosa climbs the ladder up the tree trunk to Pepper on a bending branch. */
export function TreeScene({
  goal, rungs, pct, pepperMood = "calm", ears = false, slip = false, frozen = false, countdown, snapped = false,
  pepperAt = "branch", rosaT, rosaMood = "smile", boing = 0, calm = false, flashing = false, badges = [], className,
}: {
  goal: number; rungs: number; pct: number; pepperMood?: PepperMood; ears?: boolean; slip?: boolean; frozen?: boolean; countdown?: number | undefined;
  snapped?: boolean; pepperAt?: PepperAt; rosaT?: number; rosaMood?: "smile" | "whoa" | "cheer"; boing?: number; calm?: boolean; flashing?: boolean; badges?: string[]; className?: string;
}) {
  const stage = pct > 0.5 ? 0 : pct > 0.25 ? 1 : 2;
  const bend = stage === 0 ? 2 : stage === 1 ? 7 : 12;
  const sway = frozen ? 0 : stage === 0 ? 1.5 : stage === 1 ? 2.5 : 4.5;
  const t = rosaT ?? rungs / (goal + 1);
  const rosa = at(t);
  const pepper =
    pepperAt === "branch" ? { x: 790, y: 120 + bend * 4 } :
    pepperAt === "falling" ? { x: 800, y: 260 } :
    pepperAt === "net" ? { x: 800, y: 318 } :
    pepperAt === "helmet" ? { x: rosa.x - 2, y: rosa.y - 112 } :
    { x: rosa.x + 4, y: rosa.y - 48 };
  return (
    <div data-calm={calm} className={cn("relative w-full overflow-hidden rounded-3xl border-4 border-border", className)} style={{ background: "var(--park-sky)" }}>
      <svg viewBox="0 0 1000 400" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" role="img" aria-label={`Ladder: ${rungs} of ${goal} rungs`}>
        <circle cx="120" cy="70" r="36" fill="var(--rosa-helmet)" />
        <path d="M0 340 Q250 315 500 338 T1000 330 V400 H0Z" fill="var(--park-grass)" />
        <path d="M0 375 Q500 355 1000 378 V400 H0Z" fill="var(--park-grass-deep)" />
        {/* tree */}
        <path d="M585 360 C590 250 575 160 590 60 L640 60 C650 160 640 260 655 360Z" fill="var(--tree-bark)" stroke="var(--sky-ink)" strokeWidth="3" />
        <g fill="var(--leaf)" stroke="var(--leaf-deep)" strokeWidth="3">
          <circle cx="560" cy="45" r="55" /><circle cx="640" cy="20" r="65" /><circle cx="720" cy="50" r="50" /><circle cx="500" cy="80" r="35" />
        </g>
        <g className={cn("kitten-branch", snapped && "kitten-snapped")} style={{ ["--sway" as string]: `${sway}deg`, ["--sway-speed" as string]: stage === 2 ? "0.7s" : "2.4s", rotate: `${bend}deg` }}>
          <path d="M630 90 Q740 92 880 112 L878 124 Q740 110 632 112Z" fill="var(--tree-bark-deep)" stroke="var(--sky-ink)" strokeWidth="3" />
          <g fill="var(--leaf)" stroke="var(--leaf-deep)" strokeWidth="2"><ellipse cx="880" cy="112" rx="26" ry="14" /><ellipse cx="850" cy="98" rx="18" ry="10" /></g>
        </g>
        {frozen && (
          <g>
            <path d="M210 250 Q520 60 800 135" fill="none" stroke="var(--pool)" strokeWidth="14" className="kitten-spray" strokeLinecap="round" />
            <path d="M260 240 Q520 90 780 145" fill="none" stroke="var(--circus-red)" strokeWidth="3" opacity=".6" />
            <path d="M270 250 Q520 105 780 155" fill="none" stroke="var(--rosa-helmet)" strokeWidth="3" opacity=".6" />
            <path d="M280 260 Q520 120 780 165" fill="none" stroke="var(--leaf)" strokeWidth="3" opacity=".6" />
          </g>
        )}
        {stage === 2 && !frozen && !calm && [0, 1, 2, 3].map((i) => <ellipse key={i} cx={700 + i * 40} cy={110} rx="8" ry="4" fill="var(--leaf)" className="kitten-leaf" style={{ animationDelay: `${i * 0.5}s` }} />)}
        {/* ladder */}
        <g stroke="var(--sky-ink)" strokeWidth="3">
          <line x1={BASE.x - 22} y1={BASE.y} x2={TOP.x - 22} y2={TOP.y} stroke="var(--ladder)" strokeWidth="9" />
          <line x1={BASE.x + 22} y1={BASE.y} x2={TOP.x + 22} y2={TOP.y} stroke="var(--ladder)" strokeWidth="9" />
          {Array.from({ length: goal }, (_, i) => {
            const p = at((i + 1) / (goal + 1));
            const on = i < rungs;
            return <line key={i} x1={p.x - 22} y1={p.y} x2={p.x + 22} y2={p.y} stroke={on ? "var(--ladder)" : "var(--sky-ink)"} strokeWidth={on ? 7 : 2} strokeDasharray={on ? undefined : "4 4"} opacity={on ? 1 : 0.45} className={cn(on && i === rungs - 1 && "animate-pop")} />;
          })}
        </g>
        {/* fire truck */}
        <g stroke="var(--sky-ink)" strokeWidth="3">
          <rect x="40" y="250" width="260" height="90" rx="12" fill="var(--truck-red)" />
          <rect x="220" y="210" width="80" height="60" rx="8" fill="var(--truck-red)" />
          <rect x="235" y="222" width="50" height="30" rx="4" fill="var(--park-sky)" />
          <path d="M60 240 H200 M60 228 H200" stroke="var(--ladder)" strokeWidth="6" />
          <rect x="240" y="190" width="40" height="20" rx="6" className={cn(flashing || countdown !== undefined ? "kitten-flash" : undefined)} fill="var(--truck-light)" />
          <circle cx="95" cy="342" r="24" fill="var(--sky-ink)" /><circle cx="250" cy="342" r="24" fill="var(--sky-ink)" />
          <path d="M70 290 H200" stroke="var(--rosa-helmet)" strokeWidth="6" />
          {countdown !== undefined && <text x="260" y="183" textAnchor="middle" fontSize="54" fontWeight="800" fill="var(--truck-light)" stroke="var(--net)" strokeWidth="3">{countdown}</text>}
        </g>
        {/* neighbors */}
        <g stroke="var(--sky-ink)" strokeWidth="3">
          {[880, 930, 975].map((x, i) => (
            <g key={x} transform={`translate(${x} 352)`}>
              <rect x="-14" y="-40" width="28" height="40" rx="10" fill={["var(--team2)", "var(--game-rope)", "var(--leaf)"][i]} />
              <circle cy="-54" r="14" fill="var(--rosa-skin)" />
              <path d={rosaMood === "cheer" ? "M-6 -50 q6 6 12 0" : "M-5 -48 h10"} fill="none" strokeWidth="2" />
            </g>
          ))}
        </g>
        {(pepperAt === "net" || pepperAt === "falling") && (
          <g stroke="var(--sky-ink)" strokeWidth="3">
            <path d="M740 352 L748 330 M860 352 L852 330" strokeWidth="5" />
            <ellipse cx="800" cy="328" rx="70" ry="14" fill="var(--net)" />
            <ellipse cx="800" cy="328" rx="50" ry="8" fill="var(--truck-red)" opacity=".6" />
          </g>
        )}
        <g className="kitten-move" style={{ transform: `translate(${rosa.x}px, ${rosa.y}px)` }}>
          <Rosa key={`r${slip ? Date.now() : 0}`} slip={slip} holding={pepperAt === "arms"} mood={rosaMood} />
        </g>
        <g className="kitten-move" style={{ transform: `translate(${pepper.x}px, ${pepper.y}px)` }}>
          <g key={boing} className={cn(boing > 0 && "kitten-boing")}><Pepper mood={pepperMood} ears={ears} /></g>
        </g>
      </svg>
      {badges.length > 0 && (
        <div className="absolute inset-x-4 top-3 flex flex-wrap justify-center gap-2">
          {badges.map((b) => <span key={b} className="rounded-full bg-gold px-3 py-0.5 text-lg font-bold" style={{ color: "var(--shape-outline)" }}>🛡️ {b}</span>)}
        </div>
      )}
    </div>
  );
}
