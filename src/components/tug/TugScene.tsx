import type { CSSProperties } from "react";
import type { Team } from "@/lib/store";
import { cn } from "@/lib/utils";
import { TugAnimal } from "./TugAnimal";

export interface TugFx { key: number; kind: "pull" | "power" | "slip"; team: number }
export type TugMood = "idle" | "pull" | "power" | "slip" | "cheer" | "muddy" | "fly";

export interface TugEnding { losers: number[]; step: number; tie?: boolean }

const OUTLINE = "var(--shape-outline)";
const ropeY = (_x: number) => 202;

/** The tug-of-war scene: two mascot teams, the rope with its center knot, the mud puddle and the win lines. */
export function TugScene({ teams, pos, pulls, active, fx, className, ending }: {
  teams: Team[]; pos: number[]; pulls: number; active: number;
  fx: TugFx | undefined; className?: string; ending?: TugEnding;
}) {
  const t = ((pos[1] ?? 0) - (pos[0] ?? 0)) / Math.max(1, pulls);
  const ribbonX = 560 + t * 295;
  const nearIdx = pos.findIndex((p) => p === pulls - 1);
  const near = !ending && nearIdx >= 0 && Math.max(pos[0] ?? 0, pos[1] ?? 0) === pulls - 1;
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
    const mood = moodFor(team);
    // Play positions: bunnies left, puppies right. Muddy losers end up in the puddle.
    const inPuddle = !!ending && ending.step >= 1 && (ending.tie || ending.losers.includes(team));
    const x = inPuddle ? (team === 0 ? 440 + i * 90 : 680 + i * 90) : team === 0 ? 95 + i * 90 : 1025 - i * 90;
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
          <g transform={team === 1 ? "scale(-1 1)" : undefined}><TugAnimal puppy={team === 1} mood={mood} color={`var(--team${team + 1})`} /></g>
        </g>
      </g>
    );
  };

  return (
    <div
      className={cn("tug-scene relative w-full overflow-hidden rounded-3xl chunky", className)}
      style={{ background: "linear-gradient(to bottom, var(--park-sky) 0 31.5%, var(--park-grass) 31.5% 100%)" }}
    >
      <svg viewBox="0 90 1120 190" className="h-full w-full" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Tug of war over a mud puddle">
        <rect x="0" y="90" width="1120" height="190" fill="var(--park-sky)" />
        {/* sun + clouds */}
        <circle cx="62" cy="122" r="24" fill="var(--gold)" stroke="var(--gold-deep)" strokeWidth="4" />
        <ellipse cx="420" cy="122" rx="52" ry="15" fill="var(--fur)" opacity="0.8" />
        <ellipse cx="480" cy="131" rx="36" ry="12" fill="var(--fur)" opacity="0.7" />
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
          const x = i === 0 ? 265 : 855;
          const labelX = i === 0 ? 145 : 975;
          const team = teams[i];
          if (!team) return null;
          const glow = near && nearIdx === i;
          return (
            <g key={i} className={glow ? "tug-line-glow" : undefined} style={{ color: `var(--team${i + 1})` }}>
              <line x1={x} y1={140} x2={x} y2={250} stroke={`var(--team${i + 1})`} strokeWidth="6" strokeDasharray="10 8" strokeLinecap="round" />
              <text x={labelX} y={273} textAnchor="middle" fontSize="21" fontWeight="800" textLength={team.name.length > 18 ? 245 : undefined} lengthAdjust="spacingAndGlyphs" fill={`var(--team${i + 1})`}>{team.name}</text>
              {glow && (
                <g className="animate-pop">
                  <rect x={x - 62} y={99} width={124} height={34} rx="17" fill="var(--gold)" stroke={OUTLINE} strokeWidth="2.5" />
                  <text x={x} y={123} textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--shape-outline)">So close!</text>
                </g>
              )}
            </g>
          );
        })}
        {/* rope */}
        <g key={`rope-${key}`} className={fx?.kind === "power" ? "tug-stretch" : undefined}>
          <path d="M 125 202 L 995 202" stroke="var(--rope-straw)" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M 125 202 L 995 202" stroke="var(--rope-straw-deep)" strokeWidth="3" fill="none" strokeDasharray="4 14" strokeLinecap="round" />
          {/* step notches */}
          {Array.from({ length: pulls - 1 }, (_, s) => (
            [560 - (295 * (s + 1)) / pulls, 560 + (295 * (s + 1)) / pulls].map((x) => (
              <circle key={`${s}-${x}`} cx={x} cy={ropeY(x)} r="3.5" fill="var(--rope-straw-deep)" opacity="0.8" />
            ))
          ))}
        </g>
        {/* mascots behind the knot, hands on the rope */}
        {[0, 1].map((i) => mascot(0, i))}
        {[0, 1].map((i) => mascot(1, i))}
        {/* sunk-in mud lip so muddy mascots look inside the puddle */}
        {ending && ending.step >= 1 && <ellipse cx="560" cy="266" rx="250" ry="26" fill="var(--mud-deep)" opacity="0.85" />}
        {/* Interwoven rope knot: outlined strands with braided texture. */}
        <g key={`ribbon-${key}`} className={fx?.kind === "slip" ? "tug-shake" : undefined}>
          <g transform={`translate(${ribbonX} ${ropeY(ribbonX)})`} aria-label="Center rope knot">
            <path d="M -28 0 C -15 0 -18 -15 -5 -15 C 12 -15 18 15 4 15 C -10 15 -15 0 -28 0 M 28 0 C 15 0 18 15 5 15 C -12 15 -18 -15 -4 -15 C 10 -15 15 0 28 0" fill="none" stroke="var(--rope-straw-deep)" strokeWidth="12" strokeLinecap="round" />
            <path d="M -28 0 C -15 0 -18 -15 -5 -15 C 12 -15 18 15 4 15 C -10 15 -15 0 -28 0 M 28 0 C 15 0 18 15 5 15 C -12 15 -18 -15 -4 -15 C 10 -15 15 0 28 0" fill="none" stroke="var(--rope-straw)" strokeWidth="7" strokeLinecap="round" />
            <path d="M -8 -11 L 8 11" fill="none" stroke="var(--rope-straw-deep)" strokeWidth="12" strokeLinecap="round" />
            <path d="M -8 -11 L 8 11" fill="none" stroke="var(--rope-straw)" strokeWidth="7" strokeLinecap="round" />
            <path d="M -9 -7 l 7 -4 M -5 -1 l 7 -4 M -1 5 l 7 -4 M 3 11 l 7 -4 M -16 -8 l 5 3 M 14 7 l 5 3" fill="none" stroke="var(--rope-straw-deep)" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
