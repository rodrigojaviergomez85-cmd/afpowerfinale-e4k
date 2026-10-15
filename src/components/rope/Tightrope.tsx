import { useId } from "react";
import { cn } from "@/lib/utils";
import { Acrobat, type AcrobatMood } from "./Acrobat";
import { Audience } from "./Audience";

export type LunaMood = AcrobatMood;
export type Crowd = "calm" | "cheer" | "gasp" | "aww" | "roar";

/** One lightweight vector stage shared by play, rescue, and splash. */
export function Tightrope({ goal, steps, mood, frozen = false, countdown, falling = false, inPool = false, landing = false, celebrating = false, stars = [], className, calm = false, crowd = "calm", ...rest }: {
  pct: number; goal: number; steps: number; mood: LunaMood; crowd?: Crowd; frozen?: boolean; slipKey?: number; flashKey?: number; calm?: boolean;
  countdown?: number | undefined; falling?: boolean; inPool?: boolean; landing?: boolean; celebrating?: boolean; spotsSwing?: boolean; stars?: string[]; className?: string;
}) {
  const clip = useId().replaceAll(":", "");
  const start = Math.ceil(goal / 2);
  const height = Math.max(0, Math.min(goal + start, start + steps));
  const y = 475 - height / Math.max(1, goal + start) * 305;
  const safe = steps >= goal && !falling && !inPool;
  const characterY = inPool ? 587 : falling ? 690 : y;
  const characterScale = safe || landing ? .85 : 1.1;
  const characterOffset = safe || landing ? 151 : 195;
  const reaction = crowd === "cheer" ? "happy" : crowd === "gasp" ? "uhoh" : mood;
  return (
    <div className={cn("elevator-scene relative min-h-0 w-full overflow-hidden rounded-lg", className)} data-height={height} data-safe={safe} data-calm={calm}>
      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" role="img" aria-label={`Luna's platform: level ${height} of ${goal + start}${safe ? ', SAFE!' : ''}`}>
        <defs><clipPath id={clip}><rect width="600" height="520" /></clipPath></defs>
        <rect width="600" height="600" fill="var(--tent-b)" />
        {Array.from({ length: 7 }, (_, i) => <rect key={i} x={i * 92} width="46" height="600" fill="var(--tent-a)" />)}
        <path d="M0 53 Q300 114 600 53" fill="none" stroke="var(--circus-ink)" strokeWidth="2" />
        {Array.from({ length: 13 }, (_, i) => <circle key={i} cx={i * 46 + 24} cy={65 + Math.sin(i / 12 * Math.PI) * 22} r="6" fill="var(--gold)" />)}
        <path d="M115 0 L25 490 L265 490Z M485 0 L335 490 L575 490Z" fill="var(--spot)" />
        <path d="M0 480 Q300 450 600 480 V600 H0Z" fill="var(--pool-deep)" />
        <g stroke="var(--circus-ink)" strokeWidth="3" strokeLinejoin="round">
          <path d="M337 122 H377 V501 H337Z" fill="var(--circus-metal)" />
          <path d="M346 127 H358 V495 H346Z" fill="var(--circus-teal)" />
          {Array.from({ length: goal + start + 1 }, (_, i) => {
            const yy = 475 - i / (goal + start) * 305;
            return <g key={i}><path d={`M370 ${yy} h14`} stroke="var(--gold)" strokeWidth={i === start ? 6 : 3} />{i === start && <text x="390" y={yy + 5} stroke="none" fill="var(--circus-ink)" fontSize="16" fontWeight="700">START</text>}</g>;
          })}
          <path d="M319 122 L357 95 L393 122Z" fill="var(--circus-red)" />
          <circle cx="357" cy="91" r="6" fill="var(--gold)" />
          <path d="M380 168 H540 V186 H380Z" fill="var(--gold)" />
          <path d="M392 186 L408 220 L434 186 M485 186 L510 220 L526 186" fill="var(--circus-teal)" />
          <path d="M400 164 V135 M440 164 V135 M480 164 V135 M523 164 V135 M395 137 H529" stroke="var(--gold)" strokeWidth="6" />
          <rect x="403" y="90" width="126" height="40" rx="4" fill={celebrating ? "var(--success)" : "var(--circus-teal)"} />
          <text x="466" y="119" textAnchor="middle" fill="var(--acrobat-white)" stroke="none" fontSize="29" fontWeight="800">Safe!</text>
          <path d="M530 95 V53 L565 64 L530 78" fill="var(--circus-red)" />
        </g>
        <ellipse cx="284" cy="530" rx="214" ry="49" fill="var(--gold)" stroke="var(--circus-ink)" strokeWidth="3" />
        <ellipse cx="284" cy="522" rx="200" ry="35" fill="var(--pool-deep)" />
        <ellipse cx="284" cy="516" rx="193" ry="29" fill="var(--pool)" />
        <g className="elevator-carriage" transform={`translate(0 ${y})`}>
          {!inPool && <g className={cn(falling && "elevator-collapse")}><path d="M181 0 H348 V15 H181Z" fill="var(--gold)" stroke="var(--circus-ink)" strokeWidth="3" /><path d="M187 15 L337 29 L348 15" fill="var(--circus-teal)" stroke="var(--circus-ink)" strokeWidth="3" /><circle cx="350" cy="8" r="12" fill="var(--circus-metal)" stroke="var(--circus-ink)" strokeWidth="3" />{frozen && <path d="M190 -4 H338" stroke="var(--pool)" strokeWidth="8" />}</g>}
        </g>
        <g clipPath={`url(#${clip})`}>
          <g className="elevator-character-position" transform={`translate(${landing ? 414 : 190} ${characterY - characterOffset})`}>
            <g className={cn(landing && "acrobat-balcony-hop", inPool && "acrobat-bob", falling && "acrobat-tumble")}>
              <g transform={`scale(${characterScale})`}><Acrobat mood={inPool ? "soaked" : celebrating ? "tada" : falling ? "panic" : reaction} /></g>
            </g>
          </g>
        </g>
        <g className="circus-water" fill="none" stroke="var(--river-foam)" strokeWidth="4" strokeLinecap="round"><path d="M118 524 Q159 511 201 523 M342 524 Q382 512 432 522 M205 537 Q276 549 344 535" /></g>
        {inPool && <g className="circus-splash" fill="var(--river-foam)">{Array.from({ length: 9 }, (_, i) => <path key={i} transform={`translate(264 512) rotate(${i * 23 - 90})`} d="M0 -7 Q-12 -49 0 -72 Q12 -49 0 -7Z" />)}</g>}
        {(celebrating || crowd === "cheer") && <g key={rest.flashKey} className="circus-confetti">{Array.from({ length: 22 }, (_, i) => <path key={i} d={`M${100 + i * 19} ${80 + (i % 5) * 60} l5 10`} stroke={i % 3 === 0 ? "var(--circus-red)" : i % 3 === 1 ? "var(--gold)" : "var(--circus-teal)"} strokeWidth="5" />)}</g>}
        <Audience mood={inPool ? "aww" : celebrating ? "roar" : crowd} />
      </svg>
      {countdown !== undefined && <span className="absolute left-4 top-4 rounded-lg bg-destructive px-4 py-1 text-4xl font-bold text-destructive-foreground">{countdown}</span>}
      {stars.length > 0 && <div className="circus-heroes">{stars.map(s => <span key={s}>{s}</span>)}</div>}
    </div>
  );
}
