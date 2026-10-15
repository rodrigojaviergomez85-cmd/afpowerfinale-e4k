export type AcrobatMood = "calm" | "worried" | "panic" | "uhoh" | "happy" | "tada" | "soaked";

/** Vector puppet: the face and pose are live parts of the scene, not a cutout. */
export function Acrobat({ mood }: { mood: AcrobatMood }) {
  const joyful = mood === "happy" || mood === "tada";
  const scared = mood === "panic" || mood === "uhoh";
  return (
    <g data-mood={mood} stroke="var(--circus-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M66 38 Q107 21 97 70 Q92 92 76 83 Q97 69 76 59" fill="var(--acrobat-hair)" />
      <path d="M46 109 L43 143 L34 169 L49 169 L59 142 L61 115 M65 112 L74 141 L77 169 L92 169 L88 138 L78 107" fill="var(--circus-teal)" />
      <path d="M34 168 Q24 180 50 177 L50 169 M77 168 Q101 173 94 179 H77Z" fill="var(--gold)" />
      <path d={joyful ? "M47 80 Q31 69 25 43 M75 80 Q92 68 98 42" : scared ? "M47 80 Q29 68 18 60 M75 80 Q92 70 103 55" : "M47 80 Q34 97 16 95 M75 80 Q92 94 107 87"} stroke="var(--acrobat-skin)" strokeWidth="10" fill="none" />
      <path d="M47 76 Q61 70 76 76 L81 111 Q66 122 42 111Z" fill="var(--circus-teal)" />
      <path d="M48 103 Q61 109 78 102" stroke="var(--gold)" strokeWidth="5" fill="none" />
      <path d="M61 81 L64 89 L73 89 L66 95 L68 103 L61 98 L54 103 L56 95 L49 89 L58 89Z" fill="var(--gold)" strokeWidth="1" />
      <path d="M55 68 V78 Q61 83 69 76 V66" fill="var(--acrobat-skin)" />
      <ellipse cx="61" cy="46" rx="29" ry="30" fill="var(--acrobat-skin)" />
      <path d="M32 47 Q22 17 48 12 Q79 1 91 32 L89 49 Q80 34 68 26 Q58 42 32 47Z" fill="var(--acrobat-hair)" />
      <path d="M40 25 Q58 13 75 25" fill="none" stroke="var(--gold)" strokeWidth="4" />
      <circle cx="83" cy="18" r="7" fill="var(--circus-red)" />
      <ellipse cx="41" cy="56" rx="5" ry="3" fill="var(--acrobat-blush)" stroke="none" />
      <ellipse cx="80" cy="56" rx="5" ry="3" fill="var(--acrobat-blush)" stroke="none" />
      {joyful ? <path d="M43 47 Q48 40 53 47 M68 47 Q73 40 78 47" fill="none" strokeWidth="3" /> : <g>
        <ellipse cx="48" cy="47" rx={scared ? 7 : 5} ry={scared ? 8 : 6} fill="var(--acrobat-white)" />
        <ellipse cx="73" cy="47" rx={scared ? 7 : 5} ry={scared ? 8 : 6} fill="var(--acrobat-white)" />
        <circle cx="49" cy="48" r="2.6" fill="var(--circus-ink)" stroke="none" /><circle cx="72" cy="48" r="2.6" fill="var(--circus-ink)" stroke="none" />
        <path d={mood === "worried" || scared ? "M42 36 L53 39 M68 39 L79 35" : "M43 37 Q48 34 53 37 M68 37 Q73 34 78 37"} fill="none" />
      </g>}
      {joyful ? <path d="M49 58 Q61 77 74 58Z" fill="var(--acrobat-white)" /> : scared ? <ellipse cx="61" cy="63" rx="5" ry="7" fill="var(--acrobat-mouth)" /> : <path d={mood === "worried" ? "M54 65 Q61 59 69 65" : mood === "soaked" ? "M52 62 Q61 70 71 61" : "M53 61 Q61 69 70 60"} fill="none" />}
      {mood === "soaked" && <g fill="var(--pool)" stroke="none"><path d="M34 67 Q28 79 34 80 Q40 79 34 67 M86 67 Q80 79 86 80 Q92 79 86 67" /><path d="M54 23 L48 34 M70 25 L76 35" stroke="var(--pool)" strokeWidth="3" /></g>}
    </g>
  );
}