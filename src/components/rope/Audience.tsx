import type { Crowd } from "./Tightrope";

/** Familiar spectator faces, drawn in the same coordinate space as the stage. */
export function Audience({ mood }: { mood: Crowd }) {
  const cheering = mood === "cheer" || mood === "roar";
  return (
    <g data-crowd={mood} stroke="var(--circus-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {[30, 79, 128, 472, 521, 570].map((x, i) => (
        <g key={x} transform={`translate(${x} 568)`}>
          <path d="M-20 29 Q-22 8 0 9 Q22 8 20 29" fill={i % 2 ? "var(--circus-red)" : "var(--circus-teal)"} />
          {cheering && <path d="M-17 17 L-26 -9 M17 17 L26 -9" stroke="var(--acrobat-skin)" strokeWidth="7" />}
          <circle cy="-1" r="19" fill={i % 3 === 2 ? "var(--audience-skin)" : "var(--acrobat-skin)"} />
          <path d="M-18 -5 Q-17 -26 0 -22 Q17 -25 18 -5 Q0 -17 -18 -5Z" fill={i % 2 ? "var(--acrobat-hair)" : "var(--circus-ink)"} />
          {cheering ? <path d="M-11 -2 Q-7 -7 -3 -2 M3 -2 Q7 -7 11 -2" fill="none" /> : <g fill="var(--circus-ink)" stroke="none"><circle cx="-7" cy="-2" r="2.5" /><circle cx="7" cy="-2" r="2.5" /></g>}
          {mood === "gasp" ? <ellipse cy="9" rx="4" ry="5" fill="var(--acrobat-mouth)" /> : mood === "aww" ? <path d="M-6 11 Q0 5 6 11" fill="none" /> : <path d="M-8 6 Q0 18 8 6" fill={cheering ? "var(--acrobat-white)" : "none"} />}
        </g>
      ))}
    </g>
  );
}