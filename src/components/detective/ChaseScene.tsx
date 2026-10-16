import { cn } from "@/lib/utils";
import { Sniff, Racky } from "./Characters";

export type SniffMood = "sniff" | "happy" | "bonk" | "sad" | "super" | "dash" | "jump";
export type RackyMood = "smug" | "nervous" | "giggle" | "wave" | "caught";
export type BalloonState = "ground" | "tug" | "lift" | "away" | "deflate";

const INK = "var(--sky-ink)";
const START_X = 130;
const END_X = 840;
const STREET_Y = 250;

export { Sniff, Racky } from "./Characters";

function House({ x, w, h, sign }: { x: number; w: number; h: number; sign?: string }) {
  const bakery = sign === "BAKERY";
  const school = sign === "SCHOOL";
  const top = STREET_Y - h;
  return (
    <g stroke={INK} strokeWidth="3" strokeLinejoin="round">
      <rect x={x} y={top} width={w} height={h} fill="var(--det-house)" />
      <path d={`M${x - 8} ${top} L${x + (school ? 20 : w / 2)} ${top - 36} L${x + w - (school ? 20 : w / 2)} ${top - 36} L${x + w + 8} ${top}Z`} fill="var(--det-roof)" />
      <path d={`M${x + w / 2 - 16} ${STREET_Y} v-44 q16 -14 32 0 v44Z`} fill="var(--det-basket)" />
      <circle cx={x + w / 2 + 8} cy={STREET_Y - 20} r="2" fill={INK} stroke="none" />
      {[x + 12, x + w - 34].map((wx) => <g key={wx}><rect x={wx} y={top + 54} width="22" height="31" rx="4" fill="var(--det-window)" /><path d={`M${wx + 4} ${top + 59} v20`} stroke="var(--explorer-teeth)" strokeWidth="3" /></g>)}
      <rect x={x + 9} y={top + 8} width={w - 18} height="28" rx="4" fill="var(--explorer-teeth)" strokeWidth="2" />
      <text x={x + w / 2} y={top + 28} textAnchor="middle" fontSize="18" fontWeight="800" fill={INK} stroke="none">{sign}</text>
      {bakery && <g>
        {Array.from({ length: 6 }, (_, i) => <path key={i} d={`M${x + i * w / 6} ${top + 39} h${w / 6} l4 20 q-${w / 12} 10 -${w / 6 + 8} 0Z`} fill={i % 2 ? "var(--explorer-teeth)" : "var(--det-roof)"} strokeWidth="1.5" />)}
        <ellipse cx={x + 25} cy={top + 76} rx="9" ry="5" fill="var(--det-fur)" strokeWidth="1.5" />
      </g>}
      {school && <g>
        <path d={`M${x + w / 2} ${top - 36} v-36 l26 5 v17 l-26 -5`} fill="var(--det-roof)" />
        <circle cx={x + w / 2} cy={top - 17} r="13" fill="var(--explorer-teeth)" strokeWidth="2" />
        <path d={`M${x + w / 2} ${top - 25} v8 l6 4`} fill="none" strokeWidth="2" />
      </g>}
      {sign === "LIBRARY" && <g transform={`translate(${x + w / 2 - 14} ${top - 23})`}>
        {[0, 10, 20].map((dx, i) => <rect key={dx} x={dx} y={i === 1 ? -5 : 0} width="9" height={i === 1 ? 25 : 20} rx="1" fill={i === 1 ? "var(--det-window)" : "var(--det-balloon-b)"} strokeWidth="2" />)}
      </g>}
    </g>
  );
}

function Tree({ x, small = false }: { x: number; small?: boolean }) {
  return <g transform={`translate(${x} ${STREET_Y}) scale(${small ? 0.6 : 1})`}>
    <path d="M-35 -18 Q-63 -40 -41 -71 Q-47 -95 -21 -104 Q0 -134 24 -108 Q55 -103 45 -74 Q70 -42 38 -20Z" fill="var(--leaf)" />
    <path d="M0 0 v-75 M0 -35 l-23 -21 M0 -42 l22 -23" fill="none" stroke="var(--tree-bark)" strokeWidth="7" strokeLinecap="round" />
  </g>;
}

function Lamp({ x }: { x: number }) {
  return (
    <g stroke={INK} strokeWidth="3">
      <path d={`M${x} ${STREET_Y} L${x} ${STREET_Y - 110}`} stroke="var(--det-paw)" strokeWidth="6" />
      <path d={`M${x - 12} ${STREET_Y - 110} L${x + 12} ${STREET_Y - 110} L${x + 6} ${STREET_Y - 130} L${x - 6} ${STREET_Y - 130}Z`} fill="var(--det-hint)" />
    </g>
  );
}

function Paw({ x, y, on, fresh }: { x: number; y: number; on: boolean; fresh: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`} className={fresh ? "det-paw-new" : undefined} opacity={on ? 1 : 0.28}>
      <ellipse cx="0" cy="4" rx="9" ry="7" fill={on ? "var(--det-paw)" : "var(--explorer-teeth)"} />
      {[-9, -3, 3, 9].map((dx, i) => <circle key={i} cx={dx} cy={-6 - (i === 1 || i === 2 ? 3 : 0)} r="3.5" fill={on ? "var(--det-paw)" : "var(--explorer-teeth)"} />)}
    </g>
  );
}

function Balloon({ state, ropes, tangled, countdown, bug }: { state: BalloonState; ropes: number; tangled: boolean; countdown?: number | undefined; bug?: RackyMood | undefined }) {
  const lift = state === "lift" ? 24 : 0;
  const inflate = state === "ground" ? 0.94 : 1;
  return (
    <g className={cn(state === "away" && "det-flyaway")}>
      {/* ropes to the ground pegs */}
      {[-46, -16, 16, 46].map((dx, i) => {
        const intact = i < ropes;
        return intact ? (
          <path key={i} d={tangled ? `M${dx * 0.5} ${-lift} q${dx * 0.3} 12 ${dx * 0.5} 18 q-8 -6 ${dx * 0.3} ${12 + lift}` : `M${dx * 0.5} ${-lift} L${dx} ${lift > 0 ? 30 : 4}`} stroke="var(--det-basket)" strokeWidth="3" fill="none" />
        ) : (
          <path key={i} d={`M${dx} 4 l${dx > 0 ? 6 : -6} -10`} stroke="var(--det-basket)" strokeWidth="3" />
        );
      })}
      <g transform={`translate(0 ${-lift})`}>
      <g className={state === "tug" || state === "lift" ? "det-tug" : undefined}>
        <path d="M-32 -42 L-43 -99 M32 -42 L43 -99" stroke={INK} strokeWidth="3" />
        {bug && <g transform="translate(0 -12) scale(0.65)"><Racky mood={bug} /></g>}
        <rect x="-34" y="-42" width="68" height="42" rx="7" fill="var(--det-basket)" stroke={INK} strokeWidth="3" />
        <path d="M-32 -29 H32 M-32 -14 H32 M-19 -40 V-2 M0 -40 V-2 M19 -40 V-2" stroke={INK} strokeOpacity="0.3" strokeWidth="2" />
        <path d="M-33 -42 H33" stroke="var(--det-fur)" strokeWidth="7" />
        {/* envelope */}
        <g transform={`translate(0 -174) scale(${inflate}) translate(0 0)`}><g className={state === "deflate" ? "det-deflate" : undefined}>
          <path d="M0 -74 C91 -74 96 14 43 64 L-43 64 C-96 14 -91 -74 0 -74Z" fill="var(--det-balloon-a)" stroke={INK} strokeWidth="3" />
          <path d="M0 -74 C35 -60 36 16 18 64 L-18 64 C-36 16 -35 -60 0 -74Z" fill="var(--det-balloon-b)" stroke={INK} strokeWidth="2" />
          {countdown !== undefined && (
            <text y="10" textAnchor="middle" fontSize="54" fontWeight="900" fill="var(--explorer-teeth)" stroke={INK} strokeWidth="3" paintOrder="stroke" className="font-display">{countdown}</text>
          )}
        </g></g>
      </g>
      </g>
    </g>
  );
}

export function ChaseScene({
  goal, clues, pct, sniffMood, rackyMood, balloon, ropes, tangled = false, countdown, freshPaw = false, sniffX, rackyInBasket, bonk = false, net = false, letters = false, badges = [], className,
}: {
  goal: number; clues: number; pct: number; sniffMood: SniffMood; rackyMood: RackyMood; balloon: BalloonState; ropes: number; tangled?: boolean; countdown?: number | undefined; freshPaw?: boolean; sniffX?: number | undefined; rackyInBasket: boolean; bonk?: boolean; net?: boolean; letters?: boolean; badges?: string[]; className?: string;
}) {
  const paws = Array.from({ length: goal }, (_, i) => START_X + 60 + (i * (END_X - START_X - 60)) / Math.max(1, goal - 1));
  const x = sniffX ?? START_X + ((END_X - START_X - 70) * clues) / Math.max(1, goal);
  const night = pct < 0.25;
  return (
    <svg viewBox="0 0 1200 340" preserveAspectRatio="xMidYMid meet" className={cn("w-full overflow-hidden rounded-3xl", className)} role="img" aria-label={`Detective Sniff has found ${clues} of ${goal} clues`}>
      <defs>
        <linearGradient id="det-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={night ? "var(--det-balloon-a)" : "var(--det-sky)"} stopOpacity={night ? 0.45 : 1} />
          <stop offset="1" stopColor="var(--det-sky)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="340" fill="url(#det-sky)" />
      <g fill="var(--det-sun)" stroke="var(--det-sun)" strokeWidth="6" strokeLinecap="round">
        <circle cx="82" cy="65" r="27" stroke="none" />
        {Array.from({ length: 8 }, (_, i) => <path key={i} transform={`rotate(${i * 45} 82 65)`} d="M82 23 V12" />)}
      </g>
      {[180, 775, 1110].map((cx, i) => <path key={cx} transform={`translate(${cx} ${i === 1 ? 40 : 65})`} d="M-35 10 Q-48 -8 -20 -13 Q-12 -40 10 -28 Q27 -30 32 -12 Q58 -11 47 10Z" fill="var(--explorer-teeth)" />)}
      <Tree x={38} /><Tree x={230} small /><Tree x={790} /><Tree x={1160} />
      <House x={270} w={140} h={112} sign="BAKERY" />
      <House x={450} w={150} h={140} sign="SCHOOL" />
      <House x={645} w={145} h={115} sign="LIBRARY" />
      <Lamp x={427} /><Lamp x={618} />
      {[180, 255, 420, 610, 803, 860, 1150].map((cx) => <g key={cx} fill="var(--leaf-deep)"><ellipse cx={cx} cy={STREET_Y - 7} rx="32" ry="17" /><circle cx={cx - 13} cy={STREET_Y - 18} r="14" /><circle cx={cx + 11} cy={STREET_Y - 21} r="18" /></g>)}
      {/* street */}
      <rect x="0" y={STREET_Y} width="1200" height="90" fill="var(--det-street)" />
      <path d={`M0 ${STREET_Y} L1200 ${STREET_Y}`} stroke={INK} strokeWidth="3" />
      {Array.from({ length: 13 }, (_, i) => <path key={i} d={`M${i * 100} ${STREET_Y + 10} l-35 76`} stroke={INK} strokeOpacity="0.15" strokeWidth="2" />)}
      <path d={`M0 ${STREET_Y + 75} H1200`} stroke={INK} strokeOpacity="0.15" strokeWidth="2" />
      {paws.map((px, i) => <Paw key={i} x={px} y={STREET_Y + 50 + (i % 2 ? 6 : -6)} on={i < clues} fresh={freshPaw && i === clues - 1} />)}
      {/* balloon */}
      <g transform={`translate(${net ? 1120 : 985} ${STREET_Y + 32})`}>
        <Balloon state={balloon} ropes={ropes} tangled={tangled} countdown={countdown} bug={rackyInBasket ? rackyMood : undefined} />
      </g>
      {!rackyInBasket && !net && (
        <g transform={`translate(1110 ${STREET_Y + 30})`}>
          <g className="det-bob"><Racky mood={rackyMood} /></g>
        </g>
      )}
      {letters && ["B", "Y", "E", "!"].map((l, i) => (
        <text key={l} x={1010 + i * 34} y={70 + i * 8} fontSize="44" fontWeight="900" fill="var(--det-hint)" stroke={INK} strokeWidth="3" paintOrder="stroke" className="det-letter font-display" style={{ animationDelay: `${0.4 + i * 0.35}s` }}>{l}</text>
      ))}
      {/* Sniff */}
      <g style={{ transform: `translate(${x}px, ${STREET_Y + 30 - (sniffMood === "jump" ? 60 : 0)}px)`, transition: "transform .7s ease-out" }}>
        <g transform={bonk ? "scale(-1 1)" : undefined} className={bonk ? "det-bonk" : sniffMood === "dash" ? undefined : "det-bob"}>
          <Sniff mood={sniffMood} />
        </g>
        {bonk && <text x="-70" y="-110" fontSize="30" fontWeight="900" fill="var(--det-balloon-a)" stroke={INK} strokeWidth="2" paintOrder="stroke" className="font-display">bonk!</text>}
        {net && (
          <g transform="translate(70 -50)">
            <path d="M0 0 L60 -60" stroke="var(--det-paw)" strokeWidth="6" />
            <ellipse cx="74" cy="-74" rx="30" ry="22" fill="var(--explorer-teeth)" fillOpacity="0.55" stroke={INK} strokeWidth="3" strokeDasharray="5 4" />
            <g transform="translate(74 -60) scale(0.36)"><Racky mood="caught" /></g>
          </g>
        )}
      </g>
      {badges.length > 0 && (
        <g>
          {badges.slice(0, 8).map((b, i) => (
            <g key={b} transform={`translate(${80 + i * 105} 24)`}>
              <rect x="-48" y="-18" width="96" height="34" rx="17" fill="var(--gold)" stroke={INK} strokeWidth="2.5" />
              <text y="6" textAnchor="middle" fontSize="16" fontWeight="800" fill={INK}>⭐ {b.slice(0, 10)}</text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
