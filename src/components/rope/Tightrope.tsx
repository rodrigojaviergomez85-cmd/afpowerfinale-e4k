import { cn } from "@/lib/utils";
import fairground from "@/assets/circus-fairground.jpg";
import acrobat from "@/assets/circus-acrobat.png";

export type LunaMood = "calm" | "worried" | "panic" | "uhoh" | "happy" | "tada" | "soaked";
export type Crowd = "calm" | "cheer" | "gasp" | "aww" | "roar";

/** A vertical rescue: the entire carriage moves; the fairground stays still. */
export function Tightrope({ goal, steps, frozen = false, countdown, falling = false, inPool = false, stars = [], className, ...rest }: {
  pct: number; goal: number; steps: number; mood: LunaMood; crowd?: Crowd; frozen?: boolean; slipKey?: number; flashKey?: number; calm?: boolean;
  countdown?: number; falling?: boolean; inPool?: boolean; spotsSwing?: boolean; stars?: string[]; className?: string;
}) {
  const start = Math.ceil(goal / 2);
  const height = Math.max(0, Math.min(goal + start, start + steps));
  const fraction = height / Math.max(1, goal + start);
  const y = falling || inPool ? 480 : 470 - fraction * 320;
  const safe = steps >= goal && !falling && !inPool;
  return (
    <div className={cn("elevator-scene relative min-h-0 w-full overflow-hidden rounded-lg", className)} data-height={height} data-safe={safe}>
      <img src={fairground} width={1536} height={768} alt="Circus fairground with a pool beneath Luna's elevator" className="absolute inset-0 h-full w-full object-cover" />
      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" role="img" aria-label={`Luna's platform: level ${height} of ${goal + start}${safe ? ', SAFE!' : ''}`}>
        <g stroke="var(--circus-ink)" strokeWidth="3" strokeLinejoin="round">
          <path d="M330 100 L390 100 L390 505 L330 505Z" fill="var(--circus-red)" />
          <path d="M336 100 H350 V505 H336Z" fill="var(--circus-metal)" />
          <path d="M352 100 H363 V505 H352Z" fill="var(--circus-ink)" />
          <path d="M365 100 H376 V505 H365Z" fill="var(--circus-metal)" />
          {Array.from({ length: goal + start + 1 }, (_, i) => {
            const yy = 470 - i / (goal + start) * 320;
            return <g key={i}><path d={`M380 ${yy} h16`} stroke="var(--gold)" strokeWidth={i === start ? 6 : 3} />{(i === 0 || i === start || i === goal + start) && <text x="405" y={yy + 5} stroke="none" fill="var(--circus-ink)" fontSize="17" fontWeight="700">{i === start ? "START" : i === 0 ? "SPLASH" : "TOP"}</text>}</g>;
          })}
          <path d="M314 101 L360 64 L405 101Z" fill="var(--circus-red)" />
          <path d="M338 82 L360 64 L381 82 L373 101 H345Z" fill="var(--gold)" />
          <circle cx="360" cy="60" r="6" fill="var(--gold)" />
          <path d="M390 150 H513 V178 H390Z" fill="var(--gold)" />
          <path d="M394 178 L430 215 L452 178" fill="var(--circus-teal)" />
          <path d="M395 116 H509 V165 H395Z" fill="var(--circus-teal)" />
          <path d="M390 114 H515 M397 97 V116 M507 97 V116" stroke="var(--gold)" strokeWidth="7" />
          <text x="452" y="149" textAnchor="middle" fill="var(--gold)" stroke="none" fontSize="30" fontWeight="700">SAFE!</text>
          <path d="M510 96 V55 L543 64 L510 78" fill="var(--circus-red)" />
        </g>
        <g className="elevator-carriage" transform={`translate(0 ${y})`}>
          <g className={cn(falling && "elevator-collapse")}>
            <path d="M206 0 H342 V16 H206Z" fill="var(--gold)" stroke="var(--circus-ink)" strokeWidth="3" />
            <path d="M209 16 L327 27 L342 16" fill="var(--circus-wood)" stroke="var(--circus-ink)" strokeWidth="3" />
            <circle cx="342" cy="9" r="11" fill="var(--circus-metal)" stroke="var(--circus-ink)" strokeWidth="4" />
          </g>
          {!inPool && <image href={acrobat} x="193" y="-151" width="151" height="155" preserveAspectRatio="xMidYMax meet" className={cn(falling && "elevator-acrobat-fall")} />}
          {frozen && <path d="M212 -5 H337" stroke="var(--pool)" strokeWidth="8" />}
        </g>
        {inPool && <g className="animate-popup"><image href={acrobat} x="216" y="395" width="126" height="165" /><ellipse cx="278" cy="515" rx="91" ry="28" fill="var(--pool)" /><path d="M194 516 Q220 500 250 516 T330 516 M208 530 Q270 547 343 525" fill="none" stroke="var(--river-foam)" strokeWidth="5" /><path d="M204 479 l-12 -16 M337 480 l15 -20 M236 473 l-5 -15" stroke="var(--river-foam)" strokeWidth="6" strokeLinecap="round" /></g>}
        {safe && <g><path d="M440 66 l10 10 24 -27" stroke="var(--success)" fill="none" strokeWidth="8" strokeLinecap="round" /></g>}
      </svg>
      {countdown !== undefined && <span className="absolute left-4 top-4 rounded-lg bg-destructive px-4 py-1 text-4xl font-bold text-destructive-foreground">{countdown}</span>}
      {(rest.crowd === "cheer" || rest.crowd === "roar") && <div key={rest.flashKey} className="animate-pop absolute bottom-3 left-3 rounded-lg bg-primary px-4 py-1 text-xl font-bold text-primary-foreground">{safe ? "RESCUED!" : "Going up!"}</div>}
      {stars.length > 0 && <div className="absolute inset-x-3 top-3 flex flex-wrap justify-center gap-2">{stars.map(s => <span key={s} className="rounded-lg bg-primary px-2 text-sm font-bold text-primary-foreground">{s}</span>)}</div>}
    </div>
  );
}
