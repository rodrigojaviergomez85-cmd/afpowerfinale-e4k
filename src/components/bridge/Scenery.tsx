import { cn } from "@/lib/utils";

export function Treasure({ celebrating = false }: { celebrating?: boolean }) {
  return (
    <svg viewBox="0 0 160 140" role="img" aria-label="Open treasure chest full of gold coins" className="h-full w-full overflow-visible">
      <g stroke="var(--shape-outline)" strokeWidth="4" strokeLinejoin="round">
        <path d="M28 62V27Q80 0 132 27V62Z" fill="var(--treasure-wood)" />
        <path d="M40 53V33Q80 15 120 33V53Z" fill="var(--treasure-inside)" />
        <path d="M28 27V61M132 27V61" stroke="var(--gold)" strokeWidth="9" />
        <path d="M19 70L35 54H126L143 70L132 89H29Z" fill="var(--treasure-inside)" />
        {([[43,61], [65,55], [88,59], [111,57], [55,72], [79,70], [104,71]] as const).map(([x,y], i) => (
          <g key={i} className={cn(celebrating && "motion-safe:animate-jolt")}>
            <circle cx={x} cy={y} r="12" fill="var(--gold)" stroke="var(--treasure-trim)" strokeWidth="3" />
            <path d={`M${x} ${y - 6}v12`} stroke="var(--treasure-trim)" strokeWidth="3" />
          </g>
        ))}
        <path d="M20 77H142L132 126H30Z" fill="var(--treasure-wood)" />
        <path d="M43 78L48 124M120 78L115 124" stroke="var(--gold)" strokeWidth="11" />
        <path d="M21 79H140" stroke="var(--gold)" strokeWidth="8" />
        <rect x="70" y="87" width="22" height="26" rx="4" fill="var(--gold)" />
        <circle cx="81" cy="99" r="3" fill="var(--shape-outline)" stroke="none" />
      </g>
      <g fill="var(--gold)">
        <path d="M13 29l3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" />
        <path d="M145 12l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" />
      </g>
    </svg>
  );
}

export function RiverSurface({ storm = false }: { storm?: boolean }) {
  return (
    <svg viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true" className={cn("river-surface absolute inset-x-0 -top-5 h-16 w-full", storm && "river-surface-storm")}>
      <path d="M0 23Q50 4 100 23T200 23T300 23T400 23T500 23T600 23T700 23T800 23T900 23T1000 23T1100 23T1200 23V70H0Z" fill="var(--river)" />
      <path d="M0 23Q50 4 100 23T200 23T300 23T400 23T500 23T600 23T700 23T800 23T900 23T1000 23T1100 23T1200 23" fill="none" stroke="var(--river-foam)" strokeWidth="4" />
      <path d="M-40 48Q10 33 60 48T160 48T260 48T360 48T460 48T560 48T660 48T760 48T860 48T960 48T1060 48T1160 48T1260 48" fill="none" stroke="var(--river-foam)" strokeOpacity="0.4" strokeWidth="3" />
    </svg>
  );
}

export function RiverSplash() {
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className="h-24 w-40" fill="var(--river-foam)" stroke="var(--river)" strokeWidth="3">
      <path d="M25 104Q60 85 43 44Q77 59 85 91Q78 36 103 13Q124 53 110 91Q133 50 160 54Q139 84 176 104Z" />
      <ellipse cx="30" cy="29" rx="7" ry="11" transform="rotate(-25 30 29)" />
      <ellipse cx="172" cy="30" rx="6" ry="10" transform="rotate(25 172 30)" />
    </svg>
  );
}