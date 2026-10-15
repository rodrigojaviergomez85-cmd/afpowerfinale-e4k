import { cn } from "@/lib/utils";

export type SniffMood = "sniff" | "happy" | "bonk" | "sad" | "super" | "dash" | "jump";
export type RackyMood = "smug" | "nervous" | "giggle" | "wave" | "caught";
export type BalloonState = "ground" | "tug" | "lift" | "away" | "deflate";

const INK = "var(--sky-ink)";
const START_X = 130;
const END_X = 840;
const STREET_Y = 250;

/** Detective Sniff: a dog in a deerstalker with a magnifying glass. Origin = feet, facing right. */
export function Sniff({ mood }: { mood: SniffMood }) {
  const sad = mood === "sad";
  const happy = mood === "happy" || mood === "dash" || mood === "jump";
  const glow = mood === "super";
  return (
    <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      {/* tail */}
      <path d={happy ? "M-34 -40 Q-60 -70 -48 -84" : sad ? "M-34 -30 Q-52 -18 -60 -10" : "M-34 -38 Q-58 -52 -56 -66"} fill="none" stroke="var(--det-fur-dark)" strokeWidth="9" />
      {/* legs */}
      <rect x="-28" y="-26" width="12" height="26" rx="5" fill="var(--det-fur-dark)" />
      <rect x="14" y="-26" width="12" height="26" rx="5" fill="var(--det-fur-dark)" />
      {/* coat body */}
      <ellipse cx="0" cy="-40" rx="38" ry="24" fill="var(--det-coat)" />
      <path d="M-6 -62 L-2 -18" stroke={INK} strokeWidth="2" fill="none" />
      <circle cx="4" cy="-44" r="2.5" fill={INK} /><circle cx="4" cy="-32" r="2.5" fill={INK} />
      {/* head */}
      <g transform={`translate(38 ${sad ? -62 : -74}) rotate(${sad ? 12 : mood === "sniff" ? 8 : 0})`}>
        <ellipse cx="0" cy="0" rx="26" ry="24" fill="var(--det-fur)" />
        {/* snout */}
        <ellipse cx="26" cy="8" rx="18" ry="13" fill="var(--det-fur)" />
        {glow && <circle cx="42" cy="4" r="16" fill="var(--det-hint)" stroke="none" className="det-glow" />}
        <ellipse cx="42" cy="4" rx="7" ry="6" fill={INK} />
        {/* ear */}
        <path d={sad ? "M-12 -10 Q-34 10 -24 34 Q-12 30 -6 6Z" : "M-10 -14 Q-32 0 -26 26 Q-12 22 -4 -2Z"} fill="var(--det-fur-dark)" />
        {/* eye */}
        {mood === "bonk" ? (
          <path d="M6 -8 l8 8 M14 -8 l-8 8" stroke={INK} strokeWidth="3" />
        ) : happy ? (
          <path d="M4 -4 Q10 -12 16 -4" fill="none" strokeWidth="3.5" />
        ) : sad ? (
          <path d="M4 -6 Q10 0 16 -6" fill="none" strokeWidth="3" />
        ) : (
          <><circle cx="10" cy="-5" r="6" fill="var(--explorer-teeth)" /><circle cx="12" cy="-5" r="3" fill={INK} /></>
        )}
        {/* mouth */}
        {happy ? <path d="M22 16 Q30 26 40 16" fill="var(--det-roof)" /> : sad ? <path d="M24 20 Q30 15 38 20" fill="none" /> : <path d="M26 18 Q32 21 38 17" fill="none" />}
        {/* deerstalker hat */}
        <g transform="translate(-2 -20)">
          <path d="M-26 4 Q0 -30 26 4 Z" fill="var(--det-hat)" />
          <path d="M18 2 L38 6 L20 8Z" fill="var(--det-hat)" />
          <path d="M-22 -2 Q0 -18 22 -2" fill="none" strokeWidth="2" />
          <circle cx="0" cy="-14" r="4" fill="var(--det-hat)" />
        </g>
      </g>
      {/* magnifying glass */}
      {!sad && (
        <g transform={`translate(${mood === "sniff" ? 70 : 64} ${mood === "sniff" ? -30 : -48}) rotate(${mood === "sniff" ? 30 : -20})`}>
          <path d="M-22 18 L-8 4" stroke="var(--det-paw)" strokeWidth="7" />
          <circle cx="2" cy="-6" r="13" fill="var(--det-hint)" fillOpacity="0.35" strokeWidth="5" stroke="var(--gold-deep)" />
        </g>
      )}
    </g>
  );
}

/** Racky: a small raccoon thief. Origin = bottom. */
export function Racky({ mood }: { mood: RackyMood }) {
  const worried = mood === "nervous" || mood === "caught";
  const waving = mood === "wave";
  return (
    <g stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* striped tail */}
      <path d={worried ? "M-10 -30 Q-38 -26 -44 -8" : "M-12 -32 Q-42 -40 -48 -20"} fill="none" stroke="var(--det-rack-mid)" strokeWidth="13" />
      <path d={worried ? "M-24 -28 l-3 -1 M-36 -18 l-3 2" : "M-26 -36 l-3 -3 M-40 -28 l-3 1"} fill="none" stroke="var(--det-rack-dark)" strokeWidth="13" />
      {/* legs */}
      <path d="M-7 -12 L-8 0 M7 -12 L8 0" stroke="var(--det-rack-dark)" strokeWidth="7" />
      {/* body */}
      <ellipse cx="0" cy="-22" rx="15" ry="16" fill="var(--det-rack)" />
      <ellipse cx="0" cy="-18" rx="8" ry="10" fill="var(--explorer-teeth)" strokeWidth="2" />
      {/* loot sack */}
      <g transform="translate(14 -22) rotate(14)">
        <path d="M0 -6 q7 2 6 10 q-1 6 -7 6 q-6 0 -7 -7 q-1 -8 8 -9Z" fill="var(--det-basket)" strokeWidth="2" />
        <path d="M-2 -6 q2 -5 6 -3" fill="none" strokeWidth="2" />
      </g>
      {/* arms */}
      {waving ? (
        <path d="M10 -28 Q22 -42 20 -50" fill="none" stroke="var(--det-rack-dark)" strokeWidth="6" />
      ) : (
        <path d="M10 -28 Q18 -24 16 -18" fill="none" stroke="var(--det-rack-dark)" strokeWidth="6" />
      )}
      <path d="M-10 -26 Q-16 -20 -12 -14" fill="none" stroke="var(--det-rack-dark)" strokeWidth="6" />
      {/* head */}
      <g transform="translate(0 -48)">
        {/* ears */}
        <path d="M-13 -8 L-16 -22 L-3 -14Z" fill="var(--det-rack)" />
        <path d="M13 -8 L16 -22 L3 -14Z" fill="var(--det-rack)" />
        <circle cx="0" cy="0" r="14" fill="var(--det-rack)" />
        {/* dark mask band */}
        <path d="M-14 -3 Q0 -10 14 -3 Q14 4 8 3 Q0 -1 -8 3 Q-14 4 -14 -3Z" fill="var(--det-rack-dark)" stroke="none" />
        {/* eyes */}
        {mood === "giggle" ? (
          <path d="M-9 -2 Q-6 -6 -3 -2 M3 -2 Q6 -6 9 -2" fill="none" strokeWidth="2.5" />
        ) : (
          <>
            <circle cx="-6" cy="-2" r={worried ? 3.6 : 2.8} fill="var(--explorer-teeth)" stroke="none" />
            <circle cx="6" cy="-2" r={worried ? 3.6 : 2.8} fill="var(--explorer-teeth)" stroke="none" />
            <circle cx={-6 + (worried ? 0 : 0.8)} cy={worried ? -1 : -1.6} r="1.5" fill={INK} stroke="none" />
            <circle cx={6 + (worried ? 0 : 0.8)} cy={worried ? -1 : -1.6} r="1.5" fill={INK} stroke="none" />
          </>
        )}
        {/* muzzle + nose */}
        <ellipse cx="0" cy="7" rx="6" ry="4.5" fill="var(--explorer-teeth)" strokeWidth="2" />
        <ellipse cx="0" cy="4.5" rx="3" ry="2.2" fill={INK} stroke="none" />
        {/* mouth */}
        {mood === "smug" ? (
          <path d="M-3 8 Q1 11 5 7" fill="none" strokeWidth="2" />
        ) : mood === "giggle" ? (
          <path d="M-4 7 Q0 12 4 7Z" fill="var(--det-roof)" strokeWidth="2" />
        ) : worried ? (
          <path d="M-3 9 Q0 6.5 3 9" fill="none" strokeWidth="2" />
        ) : (
          <path d="M-3 8 L3 8" fill="none" strokeWidth="2" />
        )}
        {mood === "nervous" && <path d="M16 -10 q4 6 0 9 q-4 -3 0 -9" fill="var(--det-sky)" strokeWidth="1.5" />}
      </g>
      {waving && <path d="M18 -54 q5 5 1 8" fill="none" strokeWidth="2.5" className="det-tug" />}
    </g>
  );
}

function House({ x, w, h, sign }: { x: number; w: number; h: number; sign?: string }) {
  return (
    <g stroke={INK} strokeWidth="3" strokeLinejoin="round">
      <rect x={x} y={STREET_Y - h} width={w} height={h} fill="var(--det-house)" />
      <path d={`M${x - 8} ${STREET_Y - h} L${x + w / 2} ${STREET_Y - h - 40} L${x + w + 8} ${STREET_Y - h}Z`} fill="var(--det-roof)" />
      <rect x={x + w / 2 - 12} y={STREET_Y - 36} width="24" height="36" fill="var(--det-basket)" />
      <rect x={x + 10} y={STREET_Y - h + 14} width="18" height="18" fill="var(--det-sky)" />
      <rect x={x + w - 28} y={STREET_Y - h + 14} width="18" height="18" fill="var(--det-sky)" />
      {sign && (
        <g transform={`translate(${x + w / 2} ${STREET_Y - h - 6}) rotate(-4)`}>
          <rect x="-34" y="-14" width="68" height="22" rx="4" fill="var(--explorer-teeth)" strokeWidth="2" />
          <text y="3" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} stroke="none">{sign}</text>
        </g>
      )}
    </g>
  );
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
  const lift = state === "lift" ? 40 : 0;
  const inflate = state === "ground" ? 0.72 : 1;
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
      <g transform={`translate(0 ${-lift})`} className={state === "tug" || state === "lift" ? "det-tug" : undefined}>
        {/* basket */}
        <rect x="-24" y="-30" width="48" height="30" rx="5" fill="var(--det-basket)" stroke={INK} strokeWidth="3" />
        {bug && <g transform="translate(0 -24) scale(0.85)"><Racky mood={bug} /></g>}
        <path d="M-22 -30 L-36 -78 M22 -30 L36 -78" stroke={INK} strokeWidth="2" />
        {/* envelope */}
        <g transform={`translate(0 -140) scale(${inflate}) translate(0 ${state === "ground" ? 30 : 0})`}><g className={state === "deflate" ? "det-deflate" : undefined}>
          <path d="M0 -74 C60 -74 70 -10 40 40 L-40 40 C-70 -10 -60 -74 0 -74Z" fill="var(--det-balloon-a)" stroke={INK} strokeWidth="3" />
          <path d="M0 -74 C24 -60 26 0 16 40 L-16 40 C-26 0 -24 -60 0 -74Z" fill="var(--det-balloon-b)" stroke={INK} strokeWidth="2" />
          {countdown !== undefined && (
            <text y="10" textAnchor="middle" fontSize="54" fontWeight="900" fill="var(--explorer-teeth)" stroke={INK} strokeWidth="3" paintOrder="stroke" className="font-display">{countdown}</text>
          )}
        </g></g>
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
    <svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid meet" className={cn("w-full rounded-3xl", className)} role="img" aria-label={`Detective Sniff has found ${clues} of ${goal} clues`}>
      <defs>
        <linearGradient id="det-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={night ? "var(--det-balloon-a)" : "var(--det-sky)"} stopOpacity={night ? 0.45 : 1} />
          <stop offset="1" stopColor="var(--det-sky)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="300" fill="url(#det-sky)" />
      <circle cx="90" cy="60" r="30" fill="var(--det-sun)" stroke={INK} strokeWidth="3" />
      <House x={220} w={120} h={110} sign="BAKERY" />
      <House x={400} w={100} h={140} sign="SCHOOL" />
      <House x={580} w={130} h={100} sign="LIBRERY" />
      <Lamp x={360} /><Lamp x={540} /><Lamp x={750} />
      {/* hideout */}
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round">
        <path d={`M1080 ${STREET_Y} L1080 ${STREET_Y - 90} L1130 ${STREET_Y - 130} L1180 ${STREET_Y - 90} L1180 ${STREET_Y}Z`} fill="var(--det-bug-dark)" />
        <rect x="1112" y={STREET_Y - 50} width="34" height="50" rx="14" fill={INK} />
        <text x="1130" y={STREET_Y - 70} textAnchor="middle" fontSize="30" fontWeight="900" fill="var(--det-hint)" stroke="none">?</text>
      </g>
      {/* street */}
      <rect x="0" y={STREET_Y} width="1200" height="50" fill="var(--det-street)" />
      <path d={`M0 ${STREET_Y} L1200 ${STREET_Y}`} stroke={INK} strokeWidth="3" />
      {paws.map((px, i) => <Paw key={i} x={px} y={STREET_Y + 24 + (i % 2 ? 6 : -6)} on={i < clues} fresh={freshPaw && i === clues - 1} />)}
      {/* balloon */}
      <g transform={`translate(985 ${STREET_Y})`}>
        <Balloon state={balloon} ropes={ropes} tangled={tangled} countdown={countdown} bug={rackyInBasket ? rackyMood : undefined} />
      </g>
      {!rackyInBasket && !net && (
        <g transform={`translate(1060 ${STREET_Y})`}>
          <g className="det-bob"><Racky mood={rackyMood} /></g>
        </g>
      )}
      {letters && ["B", "Y", "E", "!"].map((l, i) => (
        <text key={l} x={1010 + i * 34} y={70 + i * 8} fontSize="44" fontWeight="900" fill="var(--det-hint)" stroke={INK} strokeWidth="3" paintOrder="stroke" className="det-letter font-display" style={{ animationDelay: `${0.4 + i * 0.35}s` }}>{l}</text>
      ))}
      {/* Sniff */}
      <g style={{ transform: `translate(${x}px, ${STREET_Y - (sniffMood === "jump" ? 70 : 0)}px)`, transition: "transform .7s ease-out" }}>
        <g transform={bonk ? "scale(-1 1)" : undefined} className={bonk ? "det-bonk" : sniffMood === "dash" ? undefined : "det-bob"}>
          <Sniff mood={sniffMood} />
        </g>
        {bonk && <text x="-70" y="-110" fontSize="30" fontWeight="900" fill="var(--det-balloon-a)" stroke={INK} strokeWidth="2" paintOrder="stroke" className="font-display">bonk!</text>}
        {net && (
          <g transform="translate(70 -70)">
            <path d="M0 0 L60 -60" stroke="var(--det-paw)" strokeWidth="6" />
            <ellipse cx="74" cy="-74" rx="30" ry="22" fill="var(--explorer-teeth)" fillOpacity="0.55" stroke={INK} strokeWidth="3" strokeDasharray="5 4" />
            <g transform="translate(74 -58) scale(0.7)"><Racky mood="caught" /></g>
          </g>
        )}
      </g>
      {badges.length > 0 && (
        <g>
          {badges.slice(0, 8).map((b, i) => (
            <g key={b} transform={`translate(${170 + i * 120} 34)`}>
              <rect x="-54" y="-18" width="108" height="34" rx="17" fill="var(--gold)" stroke={INK} strokeWidth="2.5" />
              <text y="6" textAnchor="middle" fontSize="16" fontWeight="800" fill={INK}>⭐ {b.slice(0, 10)}</text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
