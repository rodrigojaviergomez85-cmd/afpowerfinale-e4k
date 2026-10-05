import type { DailyCard } from "./daily-session";
import type { PilotGameId } from "./pilot-games";
import { shuffle } from "./content";

export type ActivityKind =
  "speak" | "choice" | "fix" | "translate" | "build" | "judge" | "complete";
export interface RoundActivity {
  kind: ActivityKind;
  label: string;
  options?: string[];
}
const labels: Record<ActivityKind, string> = {
  speak: "YOUR TURN · SAY IT",
  choice: "CHOOSE THE CORRECT OPTION",
  fix: "FIND AND FIX THE MISTAKE",
  translate: "SPANISH → ENGLISH",
  build: "BUILD THE MESSAGE",
  judge: "CORRECT OR INCORRECT?",
  complete: "COMPLETE THE MESSAGE",
};
export function activitySequence(game: PilotGameId, count: number): ActivityKind[] {
  const pool: ActivityKind[] =
    game === "detective"
      ? ["fix", "choice", "judge", "complete"]
      : game === "sentence"
        ? ["build", "complete", "translate", "choice"]
        : ["speak", "choice", "fix", "translate", "build", "judge", "complete"];
  const result: ActivityKind[] = [];
  while (result.length < count) {
    const cycle = shuffle(pool);
    if (cycle[0] === result.at(-1)) [cycle[0], cycle[1]] = [cycle[1]!, cycle[0]!];
    result.push(...cycle);
  }
  return result.slice(0, count);
}
export function withActivity(card: DailyCard, kind: ActivityKind, index: number): DailyCard {
  const practice = card.practice;
  if (!practice) return card;
  const { target, spanish } = practice;
  const errors = [...new Set(practice.errors)].filter((s) => s !== target);
  const wrong = errors[index % errors.length]!;
  const base: DailyCard = {
    ...card,
    activity: { kind, label: labels[kind] },
    openAnswer: false,
    hint: "Read the message carefully. Say the complete English sentence.",
    spanish,
    answers: [target],
    correction: target,
    falseClaim: wrong,
  };
  delete base.choiceNote;
  delete base.pictureChoices;
  if (kind === "speak") return { ...card, activity: base.activity! };
  if (kind === "translate" || kind === "build")
    return {
      ...base,
      prompt: spanish,
      hint:
        kind === "build"
          ? "Put the words in order. Then read your sentence aloud."
          : "Use the words and sentence pattern from today's lesson.",
    };
  if (kind === "choice")
    return {
      ...base,
      prompt: "Check the picture and the English. Choose the correct option, then say it.",
      activity: { ...base.activity!, options: shuffle([target, ...errors.slice(0, 2)]) },
    };
  if (kind === "fix")
    return {
      ...base,
      prompt: wrong,
      hint: "Check word order, missing words and verb forms. Fix the message.",
    };
  if (kind === "judge") {
    const correct = Math.random() < 0.5;
    return {
      ...base,
      prompt: correct ? target : wrong,
      answers: [correct ? `Correct. ${target}` : `Incorrect. ${target}`],
      activity: { ...base.activity!, options: ["Correct", "Incorrect"] },
      hint: "Some messages are already correct. If it is wrong, say the corrected sentence.",
    };
  }
  const words = target.split(" ");
  const candidates = words
    .map((word, i) => (/^(to|is|are|be|the|because|in|Do|I)$/.test(word) ? i : -1))
    .filter((i) => i >= 0);
  const blank = candidates[index % candidates.length] ?? 1;
  words[blank] = "_____";
  return {
    ...base,
    prompt: words.join(" "),
    hint: "Supply the missing word, then say the whole sentence.",
  };
}
