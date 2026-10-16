import type { TugMood } from "./TugScene";

const ink = "var(--shape-outline)";

/** Drawn in profile, facing the rope; the puppy group is mirrored by the scene. */
export function TugAnimal({ puppy, mood, color }: { puppy: boolean; mood: TugMood; color: string }) {
  const fur = puppy ? "var(--fur-pup)" : "var(--fur)";
  const effort = mood === "pull" || mood === "power";
  const happy = mood === "cheer" || mood === "muddy";
  const startled = mood === "slip" || mood === "fly";
  return (
    <g stroke={ink} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Tail and firmly planted back leg. */}
      {puppy ? <path d="M -19 -22 Q -43 -13 -37 -32 Q -31 -23 -21 -32" fill={fur} /> : <circle cx="-23" cy="-25" r="7" fill={fur} />}
      <path d="M -15 -24 L -28 -8 L -35 0 Q -39 5 -31 5 L -13 5 Q -8 4 -13 0 L -10 -7 L 0 -17" fill={fur} />
      {/* Forward leg bends under the weight of the pull. */}
      <path d="M 9 -22 Q 24 -18 21 -8 L 32 -1 Q 37 5 28 5 L 10 5 Q 5 4 9 0 L 7 -8 L -4 -13" fill={fur} />
      <path d="M -28 1 v 3 M -22 1 v 3 M 23 1 v 3 M 29 1 v 3" fill="none" strokeWidth="1.7" />
      {/* Team-colored shirt, pitched back from the hands. */}
      <path d="M -8 -52 Q -20 -49 -24 -30 L -17 -18 Q 1 -12 16 -21 L 10 -42 Z" fill={color} />
      <path d="M -19 -25 Q -5 -20 12 -26" fill="none" strokeWidth="1.8" />
      {/* Rear arm and paw grip sit just behind the rope. */}
      <path d="M -1 -44 Q 12 -38 27 -43 L 37 -45 Q 45 -43 40 -36 Q 28 -32 9 -33" fill={fur} />
      {puppy ? (
        <>
          <path d="M -13 -77 Q -30 -77 -28 -60 Q -29 -48 -17 -50 L -8 -68" fill="var(--pup-ear)" />
          <path d="M 10 -76 Q 22 -81 30 -61 Q 34 -50 25 -47 L 14 -58" fill="var(--pup-ear)" />
        </>
      ) : (
        <>
          <path d="M -14 -74 Q -47 -99 -36 -105 Q -24 -107 -6 -78" fill={fur} />
          <path d="M -24 -87 Q -35 -99 -34 -98" fill="none" stroke="var(--shape-pink)" strokeWidth="5" />
          <path d="M -4 -79 Q -24 -113 -13 -117 Q 0 -119 8 -80" fill={fur} />
          <path d="M -6 -91 L -13 -107" fill="none" stroke="var(--shape-pink)" strokeWidth="5" />
        </>
      )}
      {/* Profile head and protruding muzzle. */}
      <path d="M -17 -69 Q -12 -88 8 -83 Q 25 -80 25 -64 Q 36 -58 29 -50 Q 21 -43 4 -45 Q -20 -46 -17 -69 Z" fill={fur} />
      {puppy && <ellipse cx="20" cy="-54" rx="10" ry="7" fill="var(--fur)" stroke="none" />}
      <ellipse cx="29" cy="-59" rx="3.3" ry="2.5" fill={ink} stroke="none" />
      {startled ? (
        <>
          <ellipse cx="12" cy="-67" rx="4.5" ry="5" fill="var(--fur)" strokeWidth="1.5" />
          <circle cx="13" cy="-67" r="2" fill={ink} stroke="none" />
          <ellipse cx="22" cy="-49" rx="3" ry="3.5" fill={ink} />
        </>
      ) : happy ? (
        <>
          <path d="M 6 -67 q 4 -5 8 0" fill="none" />
          <path d="M 16 -54 q 7 10 12 0 Z" fill={ink} />
          <path d="M 20 -50 q 3 3 5 0" stroke="var(--shape-pink)" strokeWidth="2" />
        </>
      ) : (
        <>
          <path d={effort ? "M 6 -75 l 9 4" : "M 7 -75 q 4 -2 7 0"} fill="none" />
          <ellipse cx="12" cy="-67" rx="2.5" ry="3.5" fill={ink} stroke="none" />
          <path d={effort ? "M 18 -51 l 8 -1" : "M 18 -53 q 4 5 9 0"} fill="none" strokeWidth="2" />
        </>
      )}
      {/* Forearm extends toward the opposing team, both paws on the rope. */}
      <path d="M 5 -40 Q 14 -35 29 -39 L 39 -44 Q 46 -47 47 -40 Q 48 -34 40 -33 L 24 -31 Q 10 -28 1 -33" fill={fur} />
      <path d="M 38 -41 l 1 5 M 42 -42 l 1 5" fill="none" strokeWidth="1.3" />
      {mood === "power" && <path d="M -28 -77 q -8 -9 -7 -13 M -36 -62 l -9 -3" fill="none" stroke="var(--fur)" strokeWidth="3" />}
      {(mood === "slip" || mood === "muddy") && <g fill="var(--mud)" stroke="none"><ellipse cx="-8" cy="-56" rx="8" ry="5" /><ellipse cx="-9" cy="-24" rx="10" ry="4" /><ellipse cx="19" cy="0" rx="8" ry="3" /></g>}
    </g>
  );
}