import type { RackyMood, SniffMood } from "./ChaseScene";

const INK = "var(--sky-ink)";
const PAPER = "var(--explorer-teeth)";

/** Upright, expressive detective. Coordinates are anchored at his feet. */
export function Sniff({ mood, holding = false }: { mood: SniffMood; holding?: boolean }) {
  const sad = mood === "sad";
  const happy = mood === "happy" || mood === "dash";
  const jumping = mood === "jump";
  return (
    <g stroke={INK} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="0" cy="2" rx="47" ry="5" fill={INK} opacity="0.12" stroke="none" />
      <path d={sad ? "M-26 -44 Q-60 -38 -66 -55" : "M-28 -46 Q-73 -54 -67 -91 Q-62 -102 -55 -92 Q-59 -64 -26 -61"} fill="var(--det-fur-dark)" />
      <path d="M-20 -28 L-24 -10 Q-42 -4 -34 1 L-9 1 L-5 -28 M10 -27 L15 -6 Q37 -6 34 1 L9 1 L1 -24" fill="var(--det-fur)" />
      <path d="M-23 -93 Q-41 -69 -31 -27 Q-2 -20 27 -28 L22 -90Z" fill="var(--det-coat)" />
      <path d="M-13 -94 L-1 -77 L10 -94 M-1 -77 L2 -27 M-28 -38 L-13 -37" fill="none" strokeWidth="2.5" />
      <circle cx="8" cy="-64" r="3" fill={INK} /><circle cx="9" cy="-46" r="3" fill={INK} />
      <path d={holding ? "M20 -78 Q48 -63 78 -66 L80 -53 Q47 -45 22 -58" : jumping ? "M19 -81 Q44 -97 58 -119 L65 -116 Q65 -107 53 -92 L31 -66" : "M20 -78 Q38 -61 54 -75 L61 -65 Q43 -43 22 -58"} fill="var(--det-coat)" />
      <path d={holding ? "M76 -67 Q83 -76 90 -69 L94 -65 Q101 -65 100 -60 L96 -52 Q84 -47 77 -54Z" : jumping ? "M56 -119 l-1 -10 q3 -5 6 4 l5 -6 q5 -2 3 6 q10 -2 7 5 l-10 10Z" : "M52 -77 q-3 -10 4 -10 l5 6 q10 -8 11 -1 l-9 13Z"} fill="var(--det-fur)" />
      <path d="M-26 -77 Q-43 -63 -41 -48 Q-35 -41 -28 -49 L-28 -57" fill="var(--det-coat)" />
      <path d="M-42 -48 q-2 12 5 13 q6 1 5 -7 q5 9 8 2 l-3 -12" fill="var(--det-fur)" />
      <g transform={`translate(7 ${sad ? -109 : -116}) rotate(${sad ? 12 : mood === "sniff" ? 3 : jumping ? -12 : 0})`}>
        <path d="M-29 -15 Q-21 -44 9 -35 Q34 -32 35 -8 L52 -2 Q60 17 38 25 Q14 36 -10 18Z" fill="var(--det-fur)" />
        <path d="M5 -7 Q17 -15 30 -6 Q37 1 48 1 L48 16 Q24 34 5 12Z" fill="var(--det-muzzle)" stroke="none" />
        <path d="M-24 -29 Q-47 -21 -48 4 Q-45 25 -26 16 Q-13 8 -11 -27Z" fill="var(--det-fur-dark)" />
        {mood === "bonk" ? <path d="M15 -19 l11 12 M26 -19 L15 -7" fill="none" /> : happy ? <path d="M13 -11 Q20 -24 28 -11" fill="none" /> : sad ? <path d="M14 -16 Q21 -8 29 -16" fill="none" /> : <><ellipse cx="22" cy="-15" rx="10" ry="13" fill={PAPER} strokeWidth="2" /><ellipse cx="26" cy="-14" rx="5" ry="8" fill={INK} stroke="none" /><circle cx="27" cy="-18" r="2" fill={PAPER} stroke="none" /></>}
        <path d={sad ? "M26 18 Q33 11 41 17" : jumping ? "M26 16 Q32 29 41 15Z" : "M20 11 Q27 25 42 14"} fill={jumping ? "var(--det-roof)" : "none"} />
        {mood === "super" && <circle cx="50" cy="2" r="19" fill="var(--det-hint)" stroke="none" className="det-glow" />}
        <ellipse cx="50" cy="1" rx="10" ry="7" fill={INK} /><ellipse cx="52" cy="-1" rx="3" ry="1.5" fill={PAPER} stroke="none" />
        <path d="M-30 -26 Q-27 -61 1 -61 Q27 -61 33 -31Z" fill="var(--det-hat)" />
        <path d="M-6 -60 Q9 -48 9 -29 M-30 -29 Q0 -38 33 -31 L47 -26 Q17 -19 -34 -24Z" fill="var(--det-coat)" />
        <path d="M0 -61 Q-15 -75 -11 -79 Q-1 -80 3 -65 Q7 -80 16 -77 Q21 -70 4 -61" fill="var(--det-fur-dark)" />
      </g>
      {!sad && !jumping && !holding && <g transform={`translate(74 ${mood === "sniff" ? -85 : -95}) rotate(22)`}>
        <path d="M-13 19 L-25 37" stroke="var(--det-basket)" strokeWidth="8" />
        <circle r="24" fill="var(--det-window)" fillOpacity="0.72" strokeWidth="5" />
        <path d="M-13 -10 Q-8 -18 1 -17" fill="none" stroke={PAPER} strokeWidth="4" />
      </g>}
    </g>
  );
}

/** A little masked raccoon with a red satchel, smaller than Sniff. */
export function Racky({ mood }: { mood: RackyMood }) {
  const worried = mood === "nervous" || mood === "caught";
  const surprised = mood === "caught";
  const waving = mood === "wave";
  return (
    <g stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M-13 -25 Q-53 -19 -51 -50 Q-50 -65 -38 -62 Q-21 -56 -16 -35Z" fill="var(--det-rack-mid)" />
      <path d="M-49 -51 L-32 -54 M-47 -36 L-25 -44 M-34 -25 L-20 -34" fill="none" stroke="var(--det-rack-dark)" strokeWidth="8" />
      <path d="M-12 -23 L-17 -5 Q-29 -2 -23 2 L-8 2 L-3 -20 M10 -23 L15 -5 Q29 -4 25 2 L9 2 L3 -20" fill="var(--det-rack-dark)" />
      <ellipse cy="-35" rx="23" ry="29" fill="var(--det-rack)" />
      <ellipse cy="-32" rx="13" ry="22" fill={PAPER} stroke="none" />
      <path d={waving ? "M16 -48 Q29 -59 30 -73" : "M17 -48 Q35 -42 29 -32"} fill="none" stroke="var(--det-rack-dark)" strokeWidth="10" />
      {waving && <path d="M29 -73 l-3 -7 M30 -72 l4 -8 M32 -71 l8 -4" fill="none" strokeWidth="4" />}
      <path d="M-16 -48 Q-30 -37 -26 -26" fill="none" stroke="var(--det-rack-dark)" strokeWidth="9" />
      <path d="M20 -61 L-24 -26" fill="none" stroke="var(--det-satchel)" strokeWidth="7" />
      <g transform="translate(-15 -30) rotate(15)">
        <rect x="-16" y="-8" width="29" height="24" rx="6" fill="var(--det-satchel)" />
        <path d="M-16 -4 Q-2 9 13 -4" fill="none" strokeWidth="2" /><rect x="-4" y="1" width="5" height="6" rx="1" fill="var(--det-balloon-b)" strokeWidth="1.5" />
      </g>
      <g transform="translate(0 -70)">
        <path d="M-22 -8 L-29 -31 Q-15 -32 -8 -18 M22 -8 L29 -31 Q15 -32 8 -18" fill="var(--det-rack)" />
        <path d="M-23 -14 L-24 -25 L-15 -18 M23 -14 L24 -25 L15 -18" stroke="var(--kitten-ear)" strokeWidth="5" />
        <path d="M-21 -17 Q0 -31 21 -17 L29 2 L19 15 Q0 29 -19 15 L-29 2Z" fill="var(--det-rack)" />
        <path d="M-23 -5 Q-13 -19 0 -8 Q13 -19 23 -5 L25 5 Q12 16 0 4 Q-12 16 -25 5Z" fill="var(--det-rack-dark)" stroke="none" />
        {mood === "giggle" ? <path d="M-19 0 Q-12 -10 -5 0 M5 0 Q12 -10 19 0" stroke={PAPER} fill="none" /> : <>{[-12, 12].map((x) => <g key={x}><ellipse cx={x} cy="-2" rx="8" ry={worried ? 11 : 9} fill={PAPER} stroke="none" /><ellipse cx={x + (worried ? 0 : -1)} cy="-1" rx="4.5" ry="6" fill={INK} stroke="none" /><circle cx={x + 1} cy="-4" r="2" fill={PAPER} stroke="none" /></g>)}</>}
        <ellipse cy="12" rx="12" ry="9" fill={PAPER} stroke="none" />
        <path d="M-5 8 Q0 3 5 8 Q0 15 -5 8Z" fill={INK} strokeWidth="1.5" />
        {surprised ? <ellipse cy="19" rx="4" ry="5" fill={INK} strokeWidth="2" /> : <path d={worried ? "M-4 19 Q0 12 4 19Z" : "M-7 15 Q0 25 7 15"} fill={worried ? "var(--det-roof)" : "none"} strokeWidth="2" />}
        {mood === "nervous" && <path d="M31 -18 q7 10 0 13 q-7 -3 0 -13" fill="var(--det-window)" strokeWidth="1.5" />}
      </g>
    </g>
  );
}