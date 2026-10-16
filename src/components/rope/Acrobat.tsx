export type AcrobatMood = "calm" | "worried" | "panic" | "uhoh" | "happy" | "tada" | "soaked";

/** Vector puppet: a geometric harlequin — jester hat with bells, diamond suit, two-tone limbs. */
export function Acrobat({ mood }: { mood: AcrobatMood }) {
  const joyful = mood === "happy" || mood === "tada";
  const scared = mood === "panic" || mood === "uhoh";
  return (
    <g data-mood={mood} stroke="var(--circus-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* legs: left yellow, right teal, curled jester shoes */}
      <path d="M48 108 L44 140 L36 168 L51 168 L58 141 L60 114" fill="var(--gold)" />
      <path d="M64 111 L73 140 L76 168 L91 168 L87 137 L77 106" fill="var(--circus-teal)" />
      <path d="M36 167 Q26 179 52 176 L52 168 M76 167 Q100 172 93 178 H76Z" fill="var(--circus-red)" />
      {/* arms: left sleeve yellow, right sleeve teal */}
      {joyful ? (
        <g fill="none" strokeWidth="10">
          <path d="M47 80 Q31 69 25 43" stroke="var(--gold)" />
          <path d="M75 80 Q92 68 98 42" stroke="var(--circus-teal)" />
        </g>
      ) : scared ? (
        <g fill="none" strokeWidth="10">
          <path d="M47 80 Q29 68 18 60" stroke="var(--gold)" />
          <path d="M75 80 Q92 70 103 55" stroke="var(--circus-teal)" />
        </g>
      ) : (
        <g fill="none" strokeWidth="10">
          <path d="M47 80 Q34 97 16 95" stroke="var(--gold)" />
          <path d="M75 80 Q92 94 107 87" stroke="var(--circus-teal)" />
        </g>
      )}
      {/* hands */}
      <circle cx={joyful ? 25 : scared ? 18 : 16} cy={joyful ? 43 : scared ? 60 : 95} r="6" fill="var(--acrobat-skin)" />
      <circle cx={joyful ? 98 : scared ? 103 : 107} cy={joyful ? 42 : scared ? 55 : 87} r="6" fill="var(--acrobat-skin)" />
      {/* torso: teal with yellow diamonds + collar ruffle */}
      <path d="M47 76 Q61 70 76 76 L81 111 Q66 122 42 111Z" fill="var(--circus-teal)" />
      <g fill="var(--gold)" strokeWidth="1.5">
        <path d="M61 82 L67 90 L61 98 L55 90Z" />
        <path d="M52 96 L57 103 L52 110 L47 103Z" />
        <path d="M70 96 L75 103 L70 110 L65 103Z" />
      </g>
      <path d="M47 76 Q54 84 61 78 Q68 84 76 76 L74 70 Q61 64 49 70Z" fill="var(--gold)" />
      {/* neck + head */}
      <path d="M55 68 V78 Q61 83 69 76 V66" fill="var(--acrobat-skin)" />
      <ellipse cx="61" cy="46" rx="29" ry="30" fill="var(--acrobat-skin)" />
      {/* hair */}
      <path d="M33 44 Q34 22 61 20 Q88 22 89 44 Q80 30 61 30 Q42 30 33 44Z" fill="var(--acrobat-hair)" />
      {/* jester hat: two prongs with bells */}
      <path d="M38 30 Q20 22 14 2 Q34 6 44 20Z" fill="var(--circus-teal)" />
      <path d="M84 30 Q102 22 108 2 Q88 6 78 20Z" fill="var(--gold)" />
      <circle cx="13" cy="2" r="6" fill="var(--gold)" />
      <circle cx="109" cy="2" r="6" fill="var(--circus-teal)" />
      <path d="M36 32 Q61 18 86 32 L84 24 Q61 12 38 24Z" fill="var(--circus-red)" />
      {/* face */}
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
