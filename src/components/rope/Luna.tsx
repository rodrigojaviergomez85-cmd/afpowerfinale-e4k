import type { LunaMood } from "./Tightrope";

// ---- Luna: hand-drawn cartoon acrobat (SVG), one per mood ----

function Face({ mood }: { mood: LunaMood }) {
  // face centered at (60,34), head radius 20
  switch (mood) {
    case "worried":
      return (
        <g>
          <circle cx="52" cy="32" r="2.6" fill="#2b2135" />
          <circle cx="68" cy="32" r="2.6" fill="#2b2135" />
          <path d="M47 26 q5 -3 9 0" stroke="#2b2135" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M64 26 q5 -3 9 0" stroke="#2b2135" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M53 44 q7 -4 14 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      );
    case "panic":
      return (
        <g>
          <circle cx="52" cy="31" r="4" fill="#fff" stroke="#2b2135" strokeWidth="1.6" />
          <circle cx="68" cy="31" r="4" fill="#fff" stroke="#2b2135" strokeWidth="1.6" />
          <circle cx="52" cy="31" r="1.6" fill="#2b2135" />
          <circle cx="68" cy="31" r="1.6" fill="#2b2135" />
          <ellipse cx="60" cy="44" rx="4.5" ry="6" fill="#7a2b3a" stroke="#2b2135" strokeWidth="1.6" />
        </g>
      );
    case "uhoh":
      return (
        <g>
          <circle cx="52" cy="32" r="2.6" fill="#2b2135" />
          <path d="M64 32 h8" stroke="#2b2135" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M52 45 q4 -3 8 0 q4 3 8 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      );
    case "happy":
      return (
        <g>
          <path d="M47 32 q5 -5 10 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M63 32 q5 -5 10 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M50 40 q10 10 20 0" stroke="#2b2135" strokeWidth="2.6" fill="#fff" strokeLinecap="round" />
        </g>
      );
    case "tada":
      return (
        <g>
          <path d="M46 32 l4 -4 m0 4 l-4 -4" stroke="#2b2135" strokeWidth="2" strokeLinecap="round" />
          <path d="M66 32 l4 -4 m0 4 l-4 -4" stroke="#2b2135" strokeWidth="2" strokeLinecap="round" />
          <path d="M49 40 q11 12 22 0" stroke="#2b2135" strokeWidth="2.6" fill="#fff" strokeLinecap="round" />
          <path d="M44 22 l-4 -5 M76 22 l4 -5" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      );
    case "soaked":
      return (
        <g>
          {/* goggles */}
          <rect x="42" y="26" width="36" height="12" rx="6" fill="#9adcf0" stroke="#2b2135" strokeWidth="2" />
          <line x1="60" y1="26" x2="60" y2="38" stroke="#2b2135" strokeWidth="2" />
          <circle cx="51" cy="32" r="2" fill="#2b2135" />
          <circle cx="69" cy="32" r="2" fill="#2b2135" />
          <path d="M54 46 q6 -4 12 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          {/* drips */}
          <path d="M40 50 q2 5 0 8 M80 50 q-2 5 0 8" stroke="#7cc7e8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      );
    default: // calm
      return (
        <g>
          <circle cx="52" cy="32" r="2.6" fill="#2b2135" />
          <circle cx="68" cy="32" r="2.6" fill="#2b2135" />
          <path d="M53 42 q7 6 14 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <circle cx="46" cy="39" r="3" fill="#f5a3b7" opacity="0.7" />
          <circle cx="74" cy="39" r="3" fill="#f5a3b7" opacity="0.7" />
        </g>
      );
  }
}

export function LunaSvg({ mood, className }: { mood: LunaMood; className?: string }) {
  const tada = mood === "tada";
  return (
    <svg viewBox="0 0 120 150" className={className} aria-hidden>
      {/* balance pole */}
      <line x1="6" y1="66" x2="114" y2="66" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" />
      {/* arms */}
      {tada ? (
        <g stroke="#f2c29b" strokeWidth="7" strokeLinecap="round">
          <line x1="46" y1="64" x2="24" y2="34" />
          <line x1="74" y1="64" x2="96" y2="34" />
        </g>
      ) : (
        <g stroke="#f2c29b" strokeWidth="7" strokeLinecap="round">
          <line x1="46" y1="64" x2="14" y2="66" />
          <line x1="74" y1="64" x2="106" y2="66" />
        </g>
      )}
      {/* legs: one on rope, one lifted back */}
      <g stroke="#f2c29b" strokeWidth="8" strokeLinecap="round">
        <line x1="60" y1="98" x2="60" y2="132" />
        <line x1="60" y1="98" x2="38" y2="112" />
      </g>
      <ellipse cx="60" cy="136" rx="8" ry="4" fill="#e0436b" />
      <ellipse cx="34" cy="114" rx="7" ry="4" fill="#e0436b" transform="rotate(-30 34 114)" />
      {/* leotard body */}
      <path d="M46 58 q14 -8 28 0 l4 34 q-18 10 -36 0 z" fill="#e0436b" stroke="#2b2135" strokeWidth="2.5" />
      <path d="M48 72 q12 6 24 0" stroke="#ffd34d" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* head */}
      <circle cx="60" cy="34" r="20" fill="#f2c29b" stroke="#2b2135" strokeWidth="2.5" />
      {/* hair + bun */}
      <path d="M40 32 q2 -20 20 -20 q18 0 20 20 q-8 -8 -20 -8 q-12 0 -20 8 z" fill="#5b3a29" stroke="#2b2135" strokeWidth="2" />
      <circle cx="60" cy="10" r="7" fill="#5b3a29" stroke="#2b2135" strokeWidth="2" />
      <circle cx="60" cy="10" r="3" fill="#e0436b" />
      <Face mood={mood} />
    </svg>
  );
}

// ---- Crowd: hand-drawn spectator faces (SVG) ----

export type CrowdMood = "calm" | "cheer" | "gasp" | "aww" | "roar";

const HAIR = ["#5b3a29", "#2b2135", "#c98a3d", "#8a4a6b", "#3d5a80", "#6b4a2b"];
const SKIN = ["#f2c29b", "#e8a87c", "#c98a5d", "#f7d4b0"];

function Spectator({ mood, i }: { mood: CrowdMood; i: number }) {
  const hair = HAIR[i % HAIR.length];
  const skin = SKIN[i % SKIN.length];
  return (
    <svg viewBox="0 0 60 64" className="h-10 w-10" aria-hidden>
      {mood === "cheer" || mood === "roar" ? (
        <g stroke={skin} strokeWidth="6" strokeLinecap="round">
          <line x1="12" y1="60" x2="6" y2="38" />
          <line x1="48" y1="60" x2="54" y2="38" />
        </g>
      ) : null}
      <circle cx="30" cy="34" r="20" fill={skin} stroke="#2b2135" strokeWidth="2.5" />
      <path d="M11 30 q3 -16 19 -16 q16 0 19 16 q-8 -7 -19 -7 q-11 0 -19 7 z" fill={hair} stroke="#2b2135" strokeWidth="2" />
      {mood === "gasp" ? (
        <g>
          <circle cx="23" cy="32" r="3" fill="#2b2135" />
          <circle cx="37" cy="32" r="3" fill="#2b2135" />
          <ellipse cx="30" cy="43" rx="4" ry="5.5" fill="#7a2b3a" stroke="#2b2135" strokeWidth="1.6" />
        </g>
      ) : mood === "aww" ? (
        <g>
          <path d="M19 30 q4 -3 8 0 M33 30 q4 -3 8 0" stroke="#2b2135" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M24 45 q6 -4 12 0" stroke="#2b2135" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M20 36 q-2 4 0 6" stroke="#7cc7e8" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      ) : mood === "cheer" || mood === "roar" ? (
        <g>
          <path d="M21 31 q4 -4 8 0 M31 31 q4 -4 8 0" stroke="#2b2135" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M22 39 q8 9 16 0" stroke="#2b2135" strokeWidth="2.4" fill="#fff" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <circle cx="23" cy="32" r="2.4" fill="#2b2135" />
          <circle cx="37" cy="32" r="2.4" fill="#2b2135" />
          <path d="M24 41 q6 5 12 0" stroke="#2b2135" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </g>
      )}
      {mood === "roar" && <path d="M14 12 l-3 -5 M46 12 l3 -5" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" />}
    </svg>
  );
}

export function CrowdRow({ mood, count, className }: { mood: CrowdMood; count: number; className?: string }) {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <Spectator key={i} mood={mood} i={i * 3 + (mood === "calm" ? 0 : 1)} />
      ))}
    </div>
  );
}

// ---- Small extras: star sign, rubber duck, soaked Luna in the pool ----

export function StarSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M50 6 L61 38 L95 38 L67 58 L78 92 L50 71 L22 92 L33 58 L5 38 L39 38 Z" fill="var(--gold)" stroke="#2b2135" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="42" cy="42" r="4" fill="#fff" opacity="0.8" />
    </svg>
  );
}

export function PoolLuna({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} aria-hidden>
      {/* soaked Luna head + arms up */}
      <g stroke="#f2c29b" strokeWidth="8" strokeLinecap="round">
        <line x1="52" y1="70" x2="36" y2="40" />
        <line x1="88" y1="70" x2="104" y2="40" />
      </g>
      <circle cx="70" cy="52" r="22" fill="#f2c29b" stroke="#2b2135" strokeWidth="2.5" />
      <path d="M49 48 q3 -18 21 -18 q18 0 21 18 q-9 -8 -21 -8 q-12 0 -21 8 z" fill="#5b3a29" stroke="#2b2135" strokeWidth="2" />
      <rect x="50" y="44" width="40" height="13" rx="6.5" fill="#9adcf0" stroke="#2b2135" strokeWidth="2" />
      <line x1="70" y1="44" x2="70" y2="57" stroke="#2b2135" strokeWidth="2" />
      <path d="M62 66 q8 -5 16 0" stroke="#2b2135" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M44 66 q2 5 0 8 M96 66 q-2 5 0 8" stroke="#7cc7e8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* rubber duck */}
      <g transform="translate(112 44)">
        <ellipse cx="18" cy="26" rx="18" ry="12" fill="#ffd34d" stroke="#2b2135" strokeWidth="2.5" />
        <circle cx="26" cy="10" r="10" fill="#ffd34d" stroke="#2b2135" strokeWidth="2.5" />
        <circle cx="29" cy="8" r="1.8" fill="#2b2135" />
        <path d="M35 10 l8 3 l-8 3 z" fill="#f08c2e" stroke="#2b2135" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
