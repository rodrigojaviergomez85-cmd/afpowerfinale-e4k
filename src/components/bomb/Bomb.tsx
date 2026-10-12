import { cn } from "@/lib/utils";

export type BombMood = "calm" | "worried" | "panic" | "relieved" | "uhoh" | "charred" | "phew" | "party";

function Face({ mood }: { mood: BombMood }) {
  const ink = "var(--shape-outline)";
  const white = "var(--foreground)";
  switch (mood) {
    case "calm":
      return (
        <g>
          <ellipse cx="78" cy="125" rx="9" ry="12" fill={white} /><circle cx="80" cy="128" r="5" fill={ink} />
          <ellipse cx="122" cy="125" rx="9" ry="12" fill={white} /><circle cx="124" cy="128" r="5" fill={ink} />
          <path d="M68 108 L88 112 M112 112 L132 106" stroke={white} strokeWidth="5" strokeLinecap="round" />
          <path d="M82 158 Q105 170 124 152" stroke={white} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      );
    case "worried":
      return (
        <g>
          <ellipse cx="78" cy="125" rx="11" ry="14" fill={white} /><circle cx="78" cy="128" r="5" fill={ink} />
          <ellipse cx="122" cy="125" rx="11" ry="14" fill={white} /><circle cx="122" cy="128" r="5" fill={ink} />
          <path d="M66 104 L88 98 M112 98 L134 104" stroke={white} strokeWidth="5" strokeLinecap="round" />
          <path d="M80 162 Q90 154 100 162 Q110 170 120 160" stroke={white} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M150 100 Q158 116 150 122 Q142 116 150 100 Z" fill="var(--ice)" />
        </g>
      );
    case "panic":
    case "uhoh":
      return (
        <g>
          <circle cx="76" cy="122" r="17" fill={white} /><circle cx="76" cy="122" r="4" fill={ink} />
          <circle cx="124" cy="122" r="17" fill={white} /><circle cx="124" cy="122" r="4" fill={ink} />
          <path d="M60 96 L88 102 M112 102 L140 96" stroke={white} strokeWidth="5" strokeLinecap="round" />
          {mood === "panic" ? <ellipse cx="100" cy="165" rx="16" ry="14" fill={ink} stroke={white} strokeWidth="5" /> : <circle cx="100" cy="164" r="7" fill={ink} stroke={white} strokeWidth="4" />}
          <path d="M152 96 Q160 112 152 118 Q144 112 152 96 Z" fill="var(--ice)" />
          <path d="M46 110 Q54 126 46 132 Q38 126 46 110 Z" fill="var(--ice)" />
        </g>
      );
    case "relieved":
    case "phew":
      return (
        <g>
          <path d="M66 126 Q78 114 90 126 M110 126 Q122 114 134 126" stroke={white} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M80 152 Q100 172 120 152" stroke={white} strokeWidth="6" fill="none" strokeLinecap="round" />
          {mood === "phew" && <path d="M150 100 Q158 116 150 122 Q142 116 150 100 Z" fill="var(--ice)" />}
        </g>
      );
    case "charred":
      return (
        <g>
          <path d="M66 114 L88 134 M88 114 L66 134 M112 114 L134 134 M134 114 L112 134" stroke={white} strokeWidth="6" strokeLinecap="round" />
          <path d="M80 162 Q90 154 100 162 Q110 170 120 160" stroke={white} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      );
    case "party":
      return (
        <g>
          <path d="M66 126 Q78 112 90 126 M110 126 Q122 112 134 126" stroke={white} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M76 148 Q100 184 124 148 Z" fill={ink} stroke={white} strokeWidth="5" strokeLinejoin="round" />
          <circle cx="62" cy="148" r="8" fill="var(--shape-pink)" opacity="0.8" /><circle cx="138" cy="148" r="8" fill="var(--shape-pink)" opacity="0.8" />
        </g>
      );
  }
}

/** Big cartoon bomb. pct = fraction of time left (0..1). */
export function Bomb({ pct, mood, secondsLeft, frozen, joltKey, className, showFuse = true, medal }: {
  pct: number; mood: BombMood; secondsLeft?: number; frozen?: boolean; joltKey?: number; className?: string; showFuse?: boolean; medal?: boolean;
}) {
  const fill = mood === "charred" ? "var(--bomb-char)" : mood === "party" ? "var(--bomb-party)" : pct > 0.5 ? "var(--bomb-calm)" : pct > 0.25 ? "var(--bomb-mid)" : "var(--bomb-hot)";
  const hot = pct <= 0.25 && mood !== "charred" && mood !== "party";
  const tipX = 100 + 52 * pct;
  const tipY = 50 - 40 * pct;
  const sparkR = 9 + (1 - pct) * 10;
  const last10 = secondsLeft !== undefined && secondsLeft <= 10 && secondsLeft > 0;
  return (
    <div key={joltKey} className={cn(joltKey ? "animate-jolt" : "", className)}>
      <div className={cn(mood === "panic" && !frozen && "animate-panic")}>
        <svg viewBox="0 0 200 220" className="h-full w-full overflow-visible" style={{ filter: hot ? "drop-shadow(0 0 28px var(--bomb-hot))" : "drop-shadow(0 10px 0 oklch(0 0 0 / 0.35))" }}>
          {/* fuse */}
          {showFuse && pct > 0 && (
            <>
              <path d={`M100 56 L${tipX} ${tipY}`} stroke="var(--gold)" strokeWidth="7" strokeLinecap="round" strokeDasharray="4 5" />
              {!frozen && mood !== "phew" && mood !== "relieved" ? (
                <g transform={`translate(${tipX} ${tipY})`}>
                  <circle r={sparkR} fill="var(--spark)" className="animate-spark" />
                  <circle r={sparkR * 0.5} fill="var(--foreground)" />
                  {[0, 60, 120, 180, 240, 300].map((a) => (
                    <line key={a} x1="0" y1="0" x2={Math.cos((a * Math.PI) / 180) * sparkR * 1.8} y2={Math.sin((a * Math.PI) / 180) * sparkR * 1.8} stroke="var(--spark)" strokeWidth="3" strokeLinecap="round" className="animate-spark" />
                  ))}
                </g>
              ) : (
                <circle cx={tipX} cy={tipY} r="6" fill="var(--muted-foreground)" />
              )}
            </>
          )}
          {/* frazzled hair */}
          {mood === "charred" && <path d="M60 70 L68 50 L76 68 L86 44 L94 66 L104 42 L112 66 L122 46 L130 68 L140 52 L144 72" stroke="var(--shape-outline)" strokeWidth="6" fill="none" strokeLinejoin="round" />}
          {/* cap */}
          <rect x="80" y="50" width="40" height="22" rx="5" fill="var(--muted)" stroke="var(--shape-outline)" strokeWidth="5" />
          {last10 && <circle cx="100" cy="44" r="9" fill="var(--destructive)" className="animate-warn" />}
          {/* body */}
          <circle cx="100" cy="135" r="74" fill={fill} stroke="var(--shape-outline)" strokeWidth="6" />
          <ellipse cx="72" cy="100" rx="16" ry="10" fill="var(--foreground)" opacity="0.25" transform="rotate(-30 72 100)" />
          <Face mood={mood} />
          {last10 && (
            <text x="100" y="200" textAnchor="middle" className="font-display" fontWeight="700" fontSize="34" fill="var(--spark)" stroke="var(--shape-outline)" strokeWidth="2">{secondsLeft}</text>
          )}
          {mood === "party" && <polygon points="100,10 82,58 118,58" fill="var(--shape-yellow)" stroke="var(--shape-outline)" strokeWidth="4" />}
          {mood === "charred" && (
            <g>
              <line x1="172" y1="200" x2="172" y2="130" stroke="var(--shape-outline)" strokeWidth="5" />
              <path d="M172 130 L204 138 L172 150 Z" fill="var(--foreground)" stroke="var(--shape-outline)" strokeWidth="3" />
            </g>
          )}
          {medal && (
            <g>
              <path d="M88 172 L100 196 L112 172" stroke="var(--shape-red)" strokeWidth="7" fill="none" />
              <circle cx="100" cy="204" r="14" fill="var(--gold)" stroke="var(--shape-outline)" strokeWidth="4" />
              <text x="100" y="210" textAnchor="middle" fontSize="16">★</text>
            </g>
          )}
        </svg>
        {mood === "charred" && (
          <div className="pointer-events-none absolute left-1/2 top-[18%]">
            {["⭐", "💫", "⭐"].map((s, i) => (
              <span key={i} className="animate-orbit absolute text-3xl" style={{ animationDelay: `${-i * 0.53}s` }}>{s}</span>
            ))}
          </div>
        )}
      </div>
      {frozen && <div className="animate-ice pointer-events-none absolute inset-0 rounded-full border-8 border-ice bg-ice/40 backdrop-blur-[2px]"><span className="absolute -right-2 -top-2 text-6xl">❄️</span></div>}
    </div>
  );
}

const WIRE_COLORS = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];

export function DefusePanel({ total, cut, lastCut }: { total: number; cut: number; lastCut: number }) {
  return (
    <div className="panel flex items-end justify-center gap-2 px-4 py-3">
      {Array.from({ length: total }, (_, i) => {
        const isCut = i < cut;
        const color = `var(--shape-${WIRE_COLORS[i % WIRE_COLORS.length]})`;
        return (
          <div key={i} className="relative flex flex-col items-center gap-1">
            <div className={cn("h-4 w-4 rounded-full border-2 border-stage", isCut ? "bg-success" : "bg-destructive/70")} />
            <div className="relative h-16 w-3">
              {isCut ? (
                <>
                  <div className="absolute top-0 h-6 w-3 rounded-full" style={{ background: color, animation: "wire-snap-l 300ms ease-out forwards" }} />
                  <div className="absolute bottom-0 h-6 w-3 rounded-full" style={{ background: color, animation: "wire-snap-r 300ms ease-out forwards" }} />
                </>
              ) : (
                <div className="h-full w-3 rounded-full" style={{ background: color }} />
              )}
              {isCut && i === lastCut && <span className="animate-snip absolute -left-4 top-3 text-4xl">✂️</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
