// Sample one fixed rope. Its visible length and spark share the same arc length,
// so lost time burns the rope from its free end toward the bomb cap.
const curves = [
  [
    [100, 56],
    [100, 28],
    [30, 38],
    [30, 2],
  ],
  [
    [30, 2],
    [30, -30],
    [172, -5],
    [172, -40],
  ],
  [
    [172, -40],
    [172, -75],
    [38, -45],
    [38, -80],
  ],
  [
    [38, -80],
    [38, -104],
    [100, -100],
    [160, -100],
  ],
];
const points = curves.flatMap((curve, segment) =>
  Array.from({ length: 25 }, (_, i) => {
    const t = i / 24,
      u = 1 - t;
    const coord = (axis: number) =>
      u ** 3 * curve[0]![axis]! +
      3 * u ** 2 * t * curve[1]![axis]! +
      3 * u * t ** 2 * curve[2]![axis]! +
      t ** 3 * curve[3]![axis]!;
    return { x: coord(0), y: coord(1), segment, i };
  }).filter((p) => segment === 0 || p.i > 0),
);
const distances = [0];
for (let i = 1; i < points.length; i++) {
  distances.push(
    distances[i - 1]! +
      Math.hypot(points[i]!.x - points[i - 1]!.x, points[i]!.y - points[i - 1]!.y),
  );
}
const totalLength = distances.at(-1)!;
const path = points.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");

export function LongFuse({ pct, burning }: { pct: number; burning: boolean }) {
  const remaining = Math.max(0, Math.min(1, Number.isFinite(pct) ? pct : 0));
  const length = totalLength * remaining;
  const end = Math.max(
    1,
    distances.findIndex((d) => d >= length),
  );
  const from = points[end - 1]!,
    to = points[end]!;
  const fraction = (length - distances[end - 1]!) / (distances[end]! - distances[end - 1]!);
  const x = from.x + (to.x - from.x) * fraction;
  const y = from.y + (to.y - from.y) * fraction;
  const dash = `${remaining} 1`;
  return (
    <g
      className="bomb-long-fuse"
      role="img"
      aria-label={`Mecha: ${Math.round(remaining * 100)}% restante`}
    >
      <path
        d={path}
        pathLength={1}
        strokeDasharray={dash}
        fill="none"
        stroke="#422b28"
        strokeWidth={12}
        strokeLinecap="round"
      />
      <path
        className="bomb-fuse-rope"
        d={path}
        pathLength={1}
        strokeDasharray={dash}
        fill="none"
        stroke="#f7ca77"
        strokeWidth={7}
        strokeLinecap="round"
      />
      <path
        d={path}
        pathLength={1}
        strokeDasharray={dash}
        fill="none"
        stroke="#ffe9b3"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <g className="bomb-fuse-spark" transform={`translate(${x} ${y})`}>
        {burning ? (
          <>
            <circle r={17} fill="#ff8b42" opacity={0.25} />
            <circle r={9} fill="#ffd260" className="animate-spark" />
            <circle r={4} fill="#fff7cc" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1={12 * Math.cos((angle * Math.PI) / 180)}
                y1={12 * Math.sin((angle * Math.PI) / 180)}
                x2={21 * Math.cos((angle * Math.PI) / 180)}
                y2={21 * Math.sin((angle * Math.PI) / 180)}
                stroke="#ffba60"
                strokeWidth={2.5}
                strokeLinecap="round"
                className="animate-spark"
              />
            ))}
          </>
        ) : (
          <circle r={6} fill="#b4e6ff" />
        )}
      </g>
    </g>
  );
}
