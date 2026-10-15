import type { CSSProperties } from "react";
import type { Team } from "@/lib/store";
import { cn } from "@/lib/utils";

export interface TugFx { key: number; kind: "pull" | "power" | "slip"; team: number }
export type TugMood = "idle" | "pull" | "power" | "slip" | "cheer" | "muddy" | "fly";

export interface TugEnding { losers: number[]; step: number; tie?: boolean }

const OUTLINE = "var(--shape-outline)";
const FUR = "var(--fur)";
const PUP_FUR = "var(--fur-pup)";
const INNER = "var(--shape-pink)";

/** Shared cartoon face for both mascots (head centered at 0, y). */
function Face({ mood, y = -52 }: { mood: TugMood; y?: number }) {
  const effort = mood === "pull" || mood === "power";
  const hurt = mood === "slip" || mood === "fly";
  const laugh = mood === "cheer" || mood === "muddy";
  const muddy = mood === "slip" || mood === "muddy";
  const ink = OUTLINE;
  return (
    <g>
      {/* ears / brows area handled by mascot; here: eyes + mouth */}
      {effort ? (
        <>
          <path d={`M -13 ${y - 9} q 4 -5 9 -2`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d={`M 13 ${y - 9} q -4 -5 -9 -2`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d={`M -13 ${y - 1} l 6 3.5 l -6 3.5`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M 13 ${y - 1} l -6 3.5 l 6 3.5`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* gritted teeth */}
          <rect x={-8} y={y + 9} width={16} height={7} rx="2" fill="#fff" stroke={ink} strokeWidth="2" />
          <path d={`M -3 ${y + 9} v 7 M 3 ${y + 9} v 7`} stroke={ink} strokeWidth="1.4" />
          {mood === "power" && <ellipse cx={17} cy={y - 14} rx="3" ry="4.5" fill="var(--smoke)" stroke={ink} strokeWidth="1.5" />}
        </>
      ) : laugh ? (
        <>
          <path d={`M -12 ${y - 5} q 4 -6 8 0`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d={`M 12 ${y - 5} q -4 -6 -8 0`} stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d={`M -8 ${y + 5} q 8 10 16 0 z`} fill={ink} />
          <path d={`M -3 ${y + 9} q 3 6 6 0 z`} fill={INNER} />
        </>
      ) : hurt ? (
        <>
          <circle cx={-7.5} cy={y - 2} r="4" fill="#fff" stroke={ink} strokeWidth="1.8" />
          <circle cx={7.5} cy={y - 2} r="4" fill="#fff" stroke={ink} strokeWidth="1.8" />
          <circle cx={-7.5} cy={y - 1} r="1.8" fill={ink} />
          <circle cx={7.5} cy={y - 1} r="1.8" fill={ink} />
          <ellipse cx={0} cy={y + 9} rx="4" ry="5" fill={ink} />
        </>
      ) : (
        <>
          <circle cx={-7.5} cy={y - 3} r="2.6" fill={ink} />
          <circle cx={7.5} cy={y - 3} r="2.6" fill={ink} />
          <path d={`M -5 ${y + 6} q 5 5 10 0`} stroke={ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </>
      )}
      {muddy && (
        <g>
          <ellipse cx={12} cy={y + 2} rx="7" ry="5" fill="var(--mud)" />
          <ellipse cx={17} cy={y + 7} rx="3.5" ry="2.5" fill="var(--mud)" />
          <ellipse cx={-14} cy={y + 12} rx="4" ry="3" fill="var(--mud)" />
        </g>
      )}
    </g>
  );
}

function Bunny({ mood, color, icon }: { mood: TugMood; color: string; icon: string }) {
  const effort = mood === "pull" || mood === "power";
  return (
    <g>
      {/* ears */}
      <g transform="rotate(-9 -10 -74)">
        <ellipse cx={-10} cy={-76} rx="7" ry="20" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
        <ellipse cx={-10} cy={-74} rx="3.2" ry="12" fill={INNER} />
      </g>
      <g transform="rotate(9 10 -74)">
        <ellipse cx={10} cy={-76} rx="7" ry="20" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
        <ellipse cx={10} cy={-74} rx="3.2" ry="12" fill={INNER} />
      </g>
      {/* body jersey */}
      <ellipse cx={0} cy={-8} rx="20" ry="23" fill={color} stroke={OUTLINE} strokeWidth="3" />
      <ellipse cx={0} cy={-2} rx="11" ry="12" fill="#fff" opacity="0.85" />
      {/* feet */}
      <ellipse cx={-9} cy={1} rx="7" ry="5" fill={FUR} stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx={9} cy={1} rx="7" ry="5" fill={FUR} stroke={OUTLINE} strokeWidth="2.5" />
      {/* head */}
      <circle cx={0} cy={-52} r="20" fill={FUR} stroke={OUTLINE} strokeWidth="3" />
      <Face mood={mood} />
      {/* arms up to the rope */}
      <path d={effort ? "M -17 -22 Q -34 -30 -38 -42" : "M -17 -22 Q -30 -28 -33 -40"} stroke={FUR} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d={effort ? "M 17 -22 Q 34 -30 38 -42" : "M 17 -22 Q 30 -28 33 -40"} stroke={FUR} strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx={effort ? -38 : -33} cy={effort ? -42 : -40} r="5" fill={FUR} stroke={OUTLINE} strokeWidth="2" />
      <circle cx={effort ? 38 : 33} cy={effort ? -42 : -40} r="5" fill={FUR} stroke={OUTLINE} strokeWidth="2" />
      {/* team icon on jersey */}
      <text x={0} y={2} textAnchor="middle" fontSize="15">{icon}</text>
    </g>
  );
}

function Puppy({ mood, color, icon }: { mood: TugMood; color: string; icon: string }) {
  const effort = mood === "pull" || mood === "power";
  return (
    <g>
      {/* tail */}
      <ellipse cx={22} cy={-14} rx="7" ry="4.5" fill={PUP_FUR} stroke={OUTLINE} strokeWidth="2.5" transform="rotate(-30 22 -14)" />
      {/* floppy ears */}
      <ellipse cx={-17} cy={-58} rx="7.5" ry="15" fill="var(--pup-ear)" stroke={OUTLINE} strokeWidth="3" transform="rotate(18 -17 -58)" />
      <ellipse cx={17} cy={-58} rx="7.5" ry="15" fill="var(--pup-ear)" stroke={OUTLINE} strokeWidth="3" transform="rotate(-18 17 -58)" />
      {/* body jersey */}
      <ellipse cx={0} cy={-8} rx="20" ry="23" fill={color} stroke={OUTLINE} strokeWidth="3" />
      <ellipse cx={0} cy={-2} rx="11" ry="12" fill="#fff" opacity="0.85" />
      {/* feet */}
      <ellipse cx={-9} cy={1} rx="7" ry="5" fill={PUP_FUR} stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx={9} cy={1} rx="7" ry="5" fill={PUP_FUR} stroke={OUTLINE} strokeWidth="2.5" />
      {/* head */}
      <circle cx={0} cy={-52} r="19" fill={PUP_FUR} stroke={OUTLINE} strokeWidth="3" />
      {/* snout */}
      <ellipse cx={0} cy={-46} rx="9.5" ry="7" fill="#fff" opacity="0.9" />
      <circle cx={0} cy={-49} r="3" fill={OUTLINE} />
      <Face mood={mood} y={-56} />
      {/* arms up to the rope */}
      <path d={effort ? "M -17 -22 Q -34 -30 -38 -42" : "M -17 -22 Q -30 -28 -33 -40"} stroke={PUP_FUR} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d={effort ? "M 17 -22 Q 34 -30 38 -42" : "M 17 -22 Q 30 -28 33 -40"} stroke={PUP_FUR} strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx={effort ? -38 : -33} cy={effort ? -42 : -40} r="5" fill={PUP_FUR} stroke={OUTLINE} strokeWidth="2" />
      <circle cx={effort ? 38 : 33} cy={effort ? -42 : -40} r="5" fill={PUP_FUR} stroke={OUTLINE} strokeWidth="2" />
      <text x={0} y={2} textAnchor="middle" fontSize="15">{icon}</text>
    </g>
  );
}

const ropeY = (x: number) => {
  const k = Math.min(1, Math.max(0, (x - 130) / 860));
  return 200 + 60 * k * (1 - k);
};

/** The tug-of-war scene: two mascot teams, the rope with its red ribbon, the mud puddle and the win lines. */
export function TugScene({ teams, pos, pulls, active, fx, className, ending }: {
  teams: Team[]; pos: number[]; pulls: number; active: number;
  fx: TugFx | undefined; className?: string; ending?: TugEnding;
}) {
  const t = (pos[1]! - pos[0]!) / pulls;
  const ribbonX = 560 + t * 340;
  const nearIdx = pos.findIndex((p) => p === pulls - 1);
  const near = !ending && nearIdx >= 0 && Math.max(pos[0]!, pos[1]!) === pulls - 1;
  const key = fx?.key ?? 0;

  const moodFor = (team: number): TugMood => {
    if (ending) {
      if (ending.tie || ending.losers.includes(team)) return ending.step >= 1 ? "muddy" : "fly";
      return "cheer";
    }
    if (fx && fx.team === team) return fx.kind === "slip" ? "slip" : fx.kind;
    return "idle";
  };

  const mascot = (team: number, i: number) => {
    const st = teams[team]!;
    const mood = moodFor(team);
    const Animal = team === 0 ? Bunny : Puppy;
    // Play positions: bunnies left, puppies right. Muddy losers end up in the puddle.
    const inPuddle = !!ending && ending.step >= 1 && (ending.tie || ending.losers.includes(team));
    const x = inPuddle ? (team === 0 ? 480 + i * 62 : 642 + i * 62) : team === 0 ? 112 + i * 66 : 942 + i * 66;
    const y = inPuddle ? 250 : 242;
    const lean = !ending && fx && fx.team === team && fx.kind !== "slip";
    const slip = !ending && fx && fx.team === team && fx.kind === "slip";
    const skid = !ending && fx && fx.team !== team && fx.kind === "pull";
    const flying = !!ending && ending.step < 1 && (ending.tie || ending.losers.includes(team));
    const flyX = team === 0 ? 330 + i * 60 : -330 - i * 60;
    const cheer = ending && !(ending.tie || ending.losers.includes(team));
    return (
      <g key={`${team}-${i}`} transform={`translate(${x} ${y})`}>
        <g
          key={flying ? "fly" : `${key}-${mood}`}
          className={cn(
            flying && "tug-fly",
            inPuddle && "animate-pop",
            lean && (team === 0 ? "tug-lean" : "tug-lean tug-lean-r"),
            (slip || skid) && (team === 0 ? "tug-skid" : "tug-skid tug-skid-l"),
            cheer && "animate-hop",
          )}
          style={flying ? ({ "--fly-x": `${flyX}px` } as CSSProperties) : undefined}
        >
          <Animal mood={mood} color={`var(--team${team + 1})`} icon={st.icon} />
        </g>
      </g>
    );
  };

  return (
    <div className={cn("tug-scene relative w-full overflow-hidden rounded-3xl chunky", className)}>
      <svg viewBox="0 0 1120 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Tug of war over a mud puddle">
        {/* sky + meadow */}
        <rect width="1120" height="300" fill="var(--park-sky)" />
        <circle cx="1010" cy="46" r="30" fill="var(--gold)" stroke="var(--gold-deep)" strokeWidth="4" />
        <ellipse cx="180" cy="52" rx="58" ry="18" fill="#fff" opacity="0.8" />
        <ellipse cx="250" cy="62" rx="40" ry="14" fill="#fff" opacity="0.7" />
        <rect y="150" width="1120" height="150" fill="var(--park-grass)" />
        <rect y="150" width="1120" height="12" fill="var(--park-grass-deep)" opacity="0.5" />
        {[80, 320, 700, 1060].map((x) => (
          <path key={x} d={`M ${x} 170 q 4 -14 8 0 M ${x + 8} 170 q 4 -10 8 0`} stroke="var(--park-grass-deep)" strokeWidth="3" fill="none" strokeLinecap="round" />
        ))}
        {/* mud puddle */}
        <ellipse cx="560" cy="252" rx="270" ry="40" fill="var(--mud-deep)" />
        <ellipse cx="560" cy="248" rx="240" ry="32" fill="var(--mud)" />
        {near && [430, 560, 690].map((x, i) => (
          <circle key={x} className="mud-bubble" cx={x} cy={252} r={7 - i} fill="var(--mud-deep)" style={{ animationDelay: `${i * 350}ms` }} />
        ))}
        {/* win lines */}
        {[0, 1].map((i) => {
          const x = i === 0 ? 215 : 905;
          const glow = near && nearIdx === i;
          return (
            <g key={i} className={glow ? "tug-line-glow" : undefined} style={{ color: `var(--team${i + 1})` }}>
              <line x1={x} y1={140} x2={x} y2={250} stroke={`var(--team${i + 1})`} strokeWidth="6" strokeDasharray="10 8" strokeLinecap="round" />
              <text x={x} y={128} textAnchor="middle" fontSize="30">{teams[i]!.icon}</text>
              <text x={x} y={272} textAnchor="middle" fontSize="19" fontWeight="700" fill={`var(--team${i + 1})`}>{teams[i]!.name}</text>
              {glow && (
                <g className="animate-pop">
                  <rect x={x - 62} y={84} width={124} height={34} rx="17" fill="var(--gold)" stroke={OUTLINE} strokeWidth="2.5" />
                  <text x={x} y={108} textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--shape-outline)">So close!</text>
                </g>
              )}
            </g>
          );
        })}
        {/* rope */}
        <g key={`rope-${key}`} className={fx?.kind === "power" ? "tug-stretch" : undefined}>
          <path d="M 130 200 Q 560 230 990 200" stroke="var(--rope-straw)" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M 130 200 Q 560 230 990 200" stroke="var(--rope-straw-deep)" strokeWidth="3" fill="none" strokeDasharray="4 14" strokeLinecap="round" />
          {/* step notches */}
          {Array.from({ length: pulls - 1 }, (_, s) => (
            [560 - (340 * (s + 1)) / pulls, 560 + (340 * (s + 1)) / pulls].map((x) => (
              <circle key={`${s}-${x}`} cx={x} cy={ropeY(x)} r="3.5" fill="var(--rope-straw-deep)" opacity="0.8" />
            ))
          ))}
        </g>
        {/* mascots behind the ribbon, hands on the rope */}
        {[0, 1].map((i) => mascot(0, i))}
        {[0, 1].map((i) => mascot(1, i))}
        {/* sunk-in mud lip so muddy mascots look inside the puddle */}
        {ending && ending.step >= 1 && <ellipse cx="560" cy="266" rx="250" ry="26" fill="var(--mud-deep)" opacity="0.85" />}
        {/* red ribbon */}
        <g key={`ribbon-${key}`} className={fx?.kind === "slip" ? "tug-shake" : undefined}>
          <path d={`M ${ribbonX - 26} ${ropeY(ribbonX) - 2} l 26 8 l -26 8 z`} fill="var(--ribbon)" stroke={OUTLINE} strokeWidth="2.5" />
          <path d={`M ${ribbonX + 26} ${ropeY(ribbonX) - 2} l -26 8 l 26 8 z`} fill="var(--ribbon)" stroke={OUTLINE} strokeWidth="2.5" />
          <circle cx={ribbonX} cy={ropeY(ribbonX) + 6} r="7" fill="var(--ribbon-deep)" stroke={OUTLINE} strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}
