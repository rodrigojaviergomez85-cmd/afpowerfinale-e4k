import { cn } from "@/lib/utils";

export type PepperMood = "calm" | "worried" | "scared" | "happy" | "dizzy";
export type PepperAt = "branch" | "falling" | "net" | "helmet" | "arms";
export type CrowdMood = "watch" | "cheer" | "gasp" | "relief" | "worried" | "shock";

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
    <g data-firefighter="illustrated" stroke="var(--sky-ink)" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round" className={cn(slip && "kitten-slip")}>
      <ellipse cy="3" rx="30" ry="4" fill="var(--sky-ink)" opacity=".12" stroke="none" />
      <g transform={slip ? "rotate(18 -9 -30)" : undefined}>
        <path d="M-19 -35 L-18 -8 L-4 -8 L-1 -33Z" fill="var(--sky-ink)" />
        <path d="M-18 -16 H-4 V-10 H-18Z" fill="var(--rosa-helmet)" stroke="none" />
        <path d="M-18 -9 Q-29 -7 -29 1 H-3 V-9Z" fill="var(--rosa-hair)" />
      </g>
      <path d="M2 -34 L5 -8 H19 L20 -35Z" fill="var(--sky-ink)" />
      <path d="M5 -16 H19 V-10 H5Z" fill="var(--rosa-helmet)" stroke="none" />
      <path d="M5 -9 V1 H30 Q31 -6 19 -9Z" fill="var(--rosa-hair)" />
      {/* Broad jacket and reflective bands, like the reference's fire uniform. */}
      <path d="M-12 -76 Q-23 -74 -24 -61 L-22 -31 H22 L24 -61 Q22 -74 12 -76Z" fill="var(--truck-red)" />
      <path d="M-22 -51 H22 V-43 H-22Z M-22 -35 H22 V-30 H-22Z" fill="var(--rosa-helmet)" stroke="none" />
      <path d="M0 -69 V-33 M-12 -75 L0 -65 L12 -75" fill="none" strokeWidth="2" />
      <g>
        <path d={mood === "cheer" ? "M-19 -67 L-33 -91 L-38 -96" : holding ? "M-19 -66 Q-28 -50 -9 -49 L5 -54" : slip ? "M-19 -66 L-39 -57 L-43 -71" : "M-19 -66 L-31 -47 L-37 -39"} fill="none" strokeWidth="15" />
        <path d={mood === "cheer" ? "M-19 -67 L-33 -91" : holding ? "M-19 -66 Q-28 -50 -9 -49" : slip ? "M-19 -66 L-39 -57" : "M-19 -66 L-31 -47"} fill="none" stroke="var(--truck-red)" strokeWidth="10" />
        <circle cx={mood === "cheer" ? -38 : holding ? 5 : slip ? -43 : -37} cy={mood === "cheer" ? -97 : holding ? -54 : slip ? -71 : -39} r="6.5" fill="var(--rosa-hair)" />
        <path d={mood === "cheer" ? "M19 -67 L33 -91 L38 -96" : holding ? "M19 -66 Q27 -50 15 -48 L5 -49" : "M19 -67 L30 -60 L35 -79"} fill="none" strokeWidth="15" />
        <path d={mood === "cheer" ? "M19 -67 L33 -91" : holding ? "M19 -66 Q27 -50 15 -48" : "M19 -67 L30 -60 L34 -73"} fill="none" stroke="var(--truck-red)" strokeWidth="10" />
        <circle cx={mood === "cheer" ? 38 : holding ? 5 : 35} cy={mood === "cheer" ? -97 : holding ? -49 : -79} r="6.5" fill="var(--rosa-hair)" />
      </g>
      <path d="M-7 -81 V-74 Q0 -68 7 -74 V-81" fill="var(--rosa-skin)" />
      <path d="M-20 -95 Q-24 -75 -15 -73 L-11 -93 M20 -95 Q24 -75 15 -73 L11 -93" fill="var(--rosa-hair)" />
      <ellipse cy="-93" rx="21" ry="20" fill="var(--rosa-skin)" />
      <path d="M-24 -102 Q-21 -129 0 -129 Q21 -129 24 -102Z" fill="var(--rosa-helmet)" />
      <path d="M-3 -127 V-109" stroke="var(--gold)" strokeWidth="5" />
      <path d="M-28 -103 Q0 -113 28 -103 L30 -97 Q0 -103 -30 -97Z" fill="var(--rosa-helmet)" />
      <path d="M-5 -118 H5 V-109 L0 -105 L-5 -109Z" fill="var(--truck-red)" strokeWidth="1.5" />
      <g fill="var(--sky-ink)" stroke="none"><ellipse cx="-8" cy="-91" rx="2.6" ry={mood === "whoa" ? 3.6 : 3} /><ellipse cx="8" cy="-91" rx="2.6" ry={mood === "whoa" ? 3.6 : 3} /></g>
      <path d="M0 -89 L-2 -85 H1" fill="none" strokeWidth="1.5" />
      {mood === "whoa" ? <ellipse cy="-79" rx="4.5" ry="5" fill="var(--sky-ink)" /> : <path d="M-8 -82 Q0 -71 8 -82" fill="var(--acrobat-white)" strokeWidth="2" />}
    </g>
  );
}

function Neighbors({ mood }: { mood: CrowdMood }) {
  const cheering = mood === "cheer";
  const shocked = mood === "shock";
  const alarmed = mood === "gasp" || mood === "worried" || shocked;
  const armD = cheering ? "M-15 -29 L-25 -53 M15 -29 L25 -53"
    : shocked ? "M-14 -28 L-21 -41 M14 -28 L21 -41"
    : mood === "gasp" ? "M-15 -28 L-18 -48 M15 -28 L18 -48"
    : "M-15 -26 L-19 -8 M15 -26 L19 -8";
  return (
    <g data-neighbors={mood} className={cn(shocked && "kitten-gasp")} stroke="var(--sky-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {[876, 927, 976].map((x, i) => (
        <g key={x} transform={`translate(${x} 350)`}>
          <path d="M-18 0 V-26 Q-18 -40 0 -40 Q18 -40 18 -26 V0Z" fill={["var(--team2)", "var(--game-rope)", "var(--leaf)"][i]} />
          <path d={armD} stroke="var(--sky-ink)" strokeWidth="10" />
          <path d={armD} stroke="var(--rosa-skin)" strokeWidth="6" />
          <circle cy="-57" r="20" fill={i === 1 ? "var(--audience-skin)" : "var(--rosa-skin)"} />
          <path d={i === 1 ? "M-19 -57 Q-23 -82 0 -80 Q23 -82 19 -57 L12 -64 Q2 -60 -5 -71 L-13 -62Z" : "M-19 -61 Q-19 -82 0 -80 Q20 -82 19 -61 Q7 -69 -6 -66 L-17 -56Z"} fill={i === 2 ? "var(--sky-ink)" : "var(--rosa-hair)"} />
          {shocked && (
            <g>
              <path d="M-21 -41 L-19 -49 M21 -41 L19 -49" stroke="var(--sky-ink)" strokeWidth="10" />
              <path d="M-21 -41 L-19 -49 M21 -41 L19 -49" stroke="var(--rosa-skin)" strokeWidth="6" />
              <circle cx="-19" cy="-51" r="5.5" fill="var(--rosa-skin)" strokeWidth="2.5" />
              <circle cx="19" cy="-51" r="5.5" fill="var(--rosa-skin)" strokeWidth="2.5" />
            </g>
          )}
          <path d={alarmed ? "M-13 -66 L-4 -69 M4 -69 L13 -66" : "M-13 -66 Q-9 -69 -5 -66 M5 -66 Q9 -69 13 -66"} fill="none" strokeWidth="2" />
          {cheering || mood === "relief" ? <path d="M-12 -57 Q-8 -63 -4 -57 M4 -57 Q8 -63 12 -57" fill="none" /> : <g fill="var(--acrobat-white)" strokeWidth="1.5"><ellipse cx="-8" cy="-57" rx="5" ry={shocked ? 8 : alarmed ? 6 : 5} /><ellipse cx="8" cy="-57" rx="5" ry={shocked ? 8 : alarmed ? 6 : 5} /><g fill="var(--sky-ink)" stroke="none"><circle cx={shocked ? "-9.5" : "-7"} cy={shocked ? "-59" : "-57"} r={shocked ? 1.8 : 2.4} /><circle cx={shocked ? "6.5" : "9"} cy={shocked ? "-59" : "-57"} r={shocked ? 1.8 : 2.4} /></g></g>}
          <path d="M0 -56 L-2 -51 H1" fill="none" strokeWidth="1.5" />
          {shocked ? <ellipse cy="-44" rx="5.5" ry="6.5" fill="var(--acrobat-mouth)" /> : mood === "gasp" ? <ellipse cy="-43" rx="4" ry="5" fill="var(--acrobat-mouth)" /> : mood === "worried" ? <path d="M-6 -42 Q0 -48 6 -42" fill="none" /> : <path d="M-8 -46 Q0 -34 8 -46Z" fill="var(--acrobat-white)" strokeWidth="2" />}
        </g>
      ))}
    </g>
  );
}

/** Park scene: Rosa climbs the ladder up the tree trunk to Pepper on a bending branch. */
export function TreeScene({
  goal, rungs, pct, pepperMood = "calm", ears = false, slip = false, frozen = false, countdown, snapped = false,
  pepperAt = "branch", rosaT, rosaMood = "smile", boing = 0, calm = false, flashing = false, badges = [], crowd, className,
}: {
  goal: number; rungs: number; pct: number; pepperMood?: PepperMood; ears?: boolean; slip?: boolean; frozen?: boolean; countdown?: number | undefined;
  snapped?: boolean; pepperAt?: PepperAt; rosaT?: number; rosaMood?: "smile" | "whoa" | "cheer"; boing?: number; calm?: boolean; flashing?: boolean; badges?: string[]; crowd?: CrowdMood; className?: string;
}) {
  const stage = pct > 0.5 ? 0 : pct > 0.25 ? 1 : 2;
  const bend = stage === 0 ? 2 : stage === 1 ? 7 : 12;
  const sway = frozen ? 0 : stage === 0 ? 1.5 : stage === 1 ? 2.5 : 4.5;
  const t = rosaT ?? rungs / (goal + 1);
  const rosa = at(t);
  const crowdMood: CrowdMood = crowd ?? (slip || pepperAt === "falling" ? "gasp" : rosaMood === "cheer" || ears || pepperAt === "arms" ? "cheer" : pepperAt === "helmet" || pepperAt === "net" ? "relief" : stage === 2 ? "worried" : "watch");
  const pepper =
    pepperAt === "branch" ? { x: 790, y: 120 + bend * 4 } :
    pepperAt === "falling" ? { x: 800, y: 260 } :
    pepperAt === "net" ? { x: 800, y: 318 } :
    pepperAt === "helmet" ? { x: rosa.x - 2, y: rosa.y - 112 } :
    { x: rosa.x + 4, y: rosa.y - 48 };
  return (
    <div data-calm={calm} className={cn("relative w-full overflow-hidden rounded-3xl border-4 border-border", className)} style={{ background: "linear-gradient(var(--park-sky) 84%, var(--park-grass) 84%, var(--park-grass-deep) 93%)" }}>
      <svg viewBox="0 -50 1000 450" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full" role="img" aria-label={`Ladder: ${rungs} of ${goal} rungs`}>
        <g data-sun="illustrated" transform="translate(120 70)" stroke="var(--rosa-helmet)" strokeWidth="5" strokeLinecap="round">
          {Array.from({ length: 12 }, (_, i) => <path key={i} d="M0 -47 V-58" transform={`rotate(${i * 30})`} />)}
          <circle r="36" fill="var(--rosa-helmet)" stroke="var(--gold)" strokeWidth="3" />
          <path d="M-24 -12 Q-17 -26 -4 -27" fill="none" stroke="var(--acrobat-white)" opacity=".65" />
          <g stroke="var(--sky-ink)" strokeWidth="2.5"><path d="M-15 -2 Q-11 -7 -7 -2 M7 -2 Q11 -7 15 -2 M-10 10 Q0 22 10 10" fill="none" /></g>
        </g>
        <path d="M0 340 Q250 315 500 338 T1000 330 V400 H0Z" fill="var(--park-grass)" />
        <path d="M0 375 Q500 355 1000 378 V400 H0Z" fill="var(--park-grass-deep)" />
        {/* tree */}
        <path data-tree="branching" d="M570 360 Q589 249 589 150 L572 100 L534 76 L545 56 L596 87 L604 25 L628 25 L635 92 L681 59 L696 76 L646 119 Q643 241 670 360Z" fill="var(--tree-bark)" stroke="var(--sky-ink)" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M580 354 Q600 245 600 159 M622 54 L618 133 M626 220 Q627 284 645 348" stroke="var(--tree-bark-deep)" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".55" />
        <g fill="var(--leaf)" stroke="var(--leaf-deep)" strokeWidth="3">
          <circle cx="541" cy="47" r="51" /><circle cx="690" cy="42" r="52" /><circle cx="615" cy="12" r="62" />
          <path d="M504 26 Q513 9 533 7 M575 -11 Q590 -30 612 -31 M663 21 Q674 5 693 3" fill="none" stroke="var(--park-grass)" strokeWidth="5" strokeLinecap="round" opacity=".65" />
        </g>
        <g className={cn("kitten-branch", snapped && "kitten-snapped")} style={{ ["--sway" as string]: `${sway}deg`, ["--sway-speed" as string]: stage === 2 ? "0.7s" : "2.4s", rotate: `${bend}deg` }}>
          <path d="M630 90 Q738 105 881 112 L878 132 Q734 125 632 112Z" fill="var(--tree-bark)" stroke="var(--sky-ink)" strokeWidth="3" />
          <path d="M655 109 Q741 122 855 122" fill="none" stroke="var(--tree-bark-deep)" strokeWidth="2" />
          <circle cx="891" cy="109" r="31" fill="var(--leaf)" stroke="var(--leaf-deep)" strokeWidth="3" />
          <path d="M877 92 Q882 83 895 84" fill="none" stroke="var(--park-grass)" strokeWidth="3" opacity=".65" />
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
        <g data-ladder="outlined" stroke="var(--sky-ink)" strokeWidth="3" strokeLinecap="round">
          {[-26, 26].map((offset) => <g key={offset}>
            <line x1={BASE.x + offset} y1={BASE.y} x2={TOP.x + offset} y2={TOP.y} strokeWidth="13" />
            <line x1={BASE.x + offset} y1={BASE.y} x2={TOP.x + offset} y2={TOP.y} stroke="var(--ladder)" strokeWidth="8" />
            <path d={`M${BASE.x + offset - 7} ${BASE.y} h14`} strokeWidth="5" />
          </g>)}
          {Array.from({ length: goal }, (_, i) => {
            const p = at((i + 1) / (goal + 1));
            const on = i < rungs;
            return <g key={i} opacity={on ? 1 : 0.35} className={cn(on && i === rungs - 1 && "animate-pop")}>
              <line x1={p.x - 24} y1={p.y} x2={p.x + 24} y2={p.y} strokeWidth={on ? 10 : 2} strokeDasharray={on ? undefined : "4 4"} />
              {on && <line x1={p.x - 23} y1={p.y - 1} x2={p.x + 23} y2={p.y - 1} stroke="var(--ladder)" strokeWidth="5" />}
            </g>;
          })}
        </g>
        {/* fire truck */}
        <g data-truck="detailed" stroke="var(--sky-ink)" strokeWidth="3" strokeLinejoin="round">
          <ellipse cx="170" cy="365" rx="142" ry="8" fill="var(--park-grass-deep)" stroke="none" />
          <path d="M40 265 Q40 250 54 250 H220 V219 Q220 210 229 210 H281 L300 239 V329 Q300 340 288 340 H52 Q40 340 40 328Z" fill="var(--truck-red)" />
          <path d="M43 316 H298 V330 H43Z" fill="var(--rosa-coat)" stroke="none" />
          <path d="M231 222 H277 L287 240 V257 H231Z" fill="var(--park-sky)" />
          <path d="M239 226 H263 L239 249Z" fill="var(--acrobat-white)" opacity=".65" stroke="none" />
          <path d="M222 266 V319 M232 274 H245" fill="none" />
          <rect x="55" y="269" width="70" height="46" rx="3" fill="var(--circus-metal)" />
          <path d="M61 280 H119 M61 289 H119 M61 298 H119 M61 307 H119" strokeWidth="1.5" opacity=".6" />
          <rect x="136" y="269" width="68" height="46" rx="3" fill="var(--rosa-coat)" />
          <circle cx="158" cy="292" r="14" fill="var(--circus-metal)" />
          <circle cx="158" cy="292" r="7" fill="var(--truck-red)" />
          <path d="M173 279 H197 M173 288 H197 M180 302 H198" stroke="var(--rosa-helmet)" strokeWidth="3" />
          <path d="M250 278 l5 7 9 1 -6 6 1 9 -9 -4 -8 4 1 -9 -6 -6 9 -1Z" fill="var(--rosa-helmet)" strokeWidth="1.5" />
          <path d="M50 260 H205 M53 324 H285" stroke="var(--acrobat-white)" strokeWidth="4" opacity=".8" />
          <path d="M60 240 H200 M60 228 H200" stroke="var(--circus-metal)" strokeWidth="5" />
          {[70, 95, 120, 145, 170, 195].map((x) => <path key={x} d={`M${x} 228 V240`} stroke="var(--circus-metal)" strokeWidth="3" />)}
          <rect x="240" y="190" width="40" height="20" rx="6" className={cn(flashing || countdown !== undefined ? "kitten-flash" : undefined)} fill="var(--truck-light)" />
          {[95, 250].map((x) => <g key={x}><circle cx={x} cy="342" r="24" fill="var(--sky-ink)" /><circle cx={x} cy="342" r="13" fill="var(--circus-metal)" /><circle cx={x} cy="342" r="5" fill="var(--sky-ink)" /><path d={`M${x - 8} 328 Q${x} 324 ${x + 8} 328`} fill="none" stroke="var(--acrobat-white)" strokeWidth="2" /></g>)}
          <rect x="289" y="280" width="10" height="15" rx="2" fill="var(--rosa-helmet)" strokeWidth="2" />
          <path d="M288 318 H308 V326 H288" fill="var(--circus-metal)" />
          {countdown !== undefined && <text x="260" y="183" textAnchor="middle" fontSize="54" fontWeight="800" fill="var(--truck-light)" stroke="var(--net)" strokeWidth="3">{countdown}</text>}
        </g>
        {/* neighbors */}
        <Neighbors mood={crowdMood} />
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
