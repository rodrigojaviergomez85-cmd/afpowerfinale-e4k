export type MaxMood = "ready" | "cheer" | "worried" | "soaked" | "happy";

/** Stable full-body drawing shared by the canyon's play and ending scenes. */
export function Max({ mood, className }: { mood: MaxMood; className?: string }) {
  const celebrating = mood === "cheer" || mood === "happy";
  const worried = mood === "worried" || mood === "soaked";
  return (
    <svg viewBox="0 0 110 140" role="img" aria-label={`Max the explorer, ${mood}`} className={className}>
      <g stroke="var(--shape-outline)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Backpack, boots, and safari outfit. */}
        <rect x="66" y="66" width="24" height="40" rx="8" fill="var(--explorer-pack)" />
        <path d="M40 99 38 126 M64 99 68 126" stroke="var(--explorer-trousers)" strokeWidth="13" />
        <path d="M28 126h15v9H25q-3-6 3-9ZM63 126h15q7 4 6 9H63Z" fill="var(--explorer-boots)" />
        <path d={celebrating ? "M37 74 20 58 14 41 M72 74 86 56 93 40" : "M37 74 23 89 24 101 M72 74 84 88 81 101"} fill="none" stroke="var(--explorer-skin)" strokeWidth="10" />
        <path d="M36 66q19-9 37 0l3 38q-22 8-43 0Z" fill="var(--explorer-shirt)" />
        <path d="m45 64 10 13 10-13M55 77v25M35 95h39" fill="none" />
        <path d="M40 79h9v10h-9ZM62 79h9v10h-9Z" fill="var(--explorer-hat)" strokeWidth="2" />
        <rect x="49" y="94" width="12" height="8" rx="1" fill="var(--gold)" />
        <circle cx="32" cy="44" r="6" fill="var(--explorer-skin)" />
        <circle cx="78" cy="44" r="6" fill="var(--explorer-skin)" />
        <path d="M33 29q22-16 44 0v20q-1 20-22 20T33 49Z" fill="var(--explorer-skin)" />
        <path d="M34 36 38 47 39 29h32l4 18 2-16q-22-20-43 0Z" fill="var(--explorer-boots)" strokeWidth="2" />
        {/* Safari hat with a broad brim and little feather. */}
        <path d="m70 14 6-11 4 13" fill="var(--explorer-pack)" />
        <path d="M32 25 37 10q7-7 18-1 12-6 19 1l5 15Z" fill="var(--explorer-hat)" />
        <path d="M34 20h42v9H34Z" fill="var(--explorer-boots)" strokeWidth="2" />
        <path d="M22 26q32 8 65 0l3 8q-36 10-71 0Z" fill="var(--explorer-hat)" />
        {celebrating ? (
          <path d="M42 45q5-6 10 0M60 45q5-6 10 0" fill="none" />
        ) : (
          <g fill="var(--shape-outline)" stroke="none">
            <ellipse cx="46" cy="46" rx="3" ry={worried ? 4 : 3} />
            <ellipse cx="65" cy="46" rx="3" ry={worried ? 4 : 3} />
          </g>
        )}
        {worried && <path d="m41 39 10-2m9 0 10 2" fill="none" strokeWidth="2" />}
        <path d={worried ? "M48 59q8-6 15 0" : "M46 55q10 13 20 0Z"} fill={worried ? "none" : "var(--explorer-teeth)"} strokeWidth="2.5" />
        {mood === "soaked" && (
          <g fill="var(--ice)" stroke="var(--river)" strokeWidth="1.5">
            <path d="M24 51q-8 12 0 12t0-12ZM87 60q-8 12 0 12t0-12ZM18 109q-7 11 0 11t0-11Z" />
          </g>
        )}
      </g>
    </svg>
  );
}