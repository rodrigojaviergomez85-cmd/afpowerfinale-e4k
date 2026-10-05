import { describe, expect, it } from "vitest";
import { PILOT_LESSONS } from "@/data/content";
import { drawDaily, lessonCards } from "@/lib/daily-session";
import { PILOT_GAMES } from "@/lib/pilot-games";
import { withActivity } from "@/lib/round-activities";

describe("mixed daily challenges", () => {
  it.each(PILOT_LESSONS.map((l) => [l.id, l] as const))(
    "%s varies formats in every game without changing curriculum",
    (_, lesson) => {
      for (const game of PILOT_GAMES) {
        const deck = drawDaily(lesson, [], 10, game.id).cards;
        expect(deck).toHaveLength(10);
        expect(new Set(deck.map((c) => c.activity?.kind)).size).toBeGreaterThanOrEqual(4);
        for (let i = 0; i < deck.length; i++) {
          const card = deck[i]!;
          expect(card.practice).toBeDefined();
          if (i) expect(card.activity?.kind).not.toBe(deck[i - 1]!.activity?.kind);
          expect(card.answers.length).toBeGreaterThan(0);
          if (card.activity?.kind === "choice") {
            expect(card.activity.options).toHaveLength(3);
            expect(new Set(card.activity.options).size).toBe(3);
            expect(card.activity.options).toContain(card.practice!.target);
          }
          if (card.activity?.kind === "build" || card.activity?.kind === "translate") {
            expect(card.prompt).toBe(card.practice!.spanish);
            expect(card.answers).toEqual([card.practice!.target]);
            expect(card.openAnswer).toBe(false);
          }
        }
      }
    },
  );
  it("provides distinct error families and Spanish for every card", () => {
    for (const lesson of PILOT_LESSONS)
      for (const c of lesson.cards) {
        const p = c.practice!;
        expect(p).toBeDefined();
        expect(p.spanish).toBeTruthy();
        expect(new Set(p.errors).size).toBeGreaterThanOrEqual(2);
        expect(p.errors).not.toContain(p.target);
      }
  });
  it("day two includes questions, affirmations and negatives", () => {
    const targets = lessonCards(PILOT_LESSONS[6]!).map((c) => c.practice!.target);
    for (const start of ["Do you", "Yes, I do.", "No, I don't"])
      expect(targets.some((t) => t.startsWith(start))).toBe(true);
  });
  it("fix challenges ask only for correction, not an unrelated second question", () => {
    const card = lessonCards(PILOT_LESSONS[6]!)[0]!;
    const result = withActivity(card, "fix", 1);
    expect(result.prompt).toBe(card.practice!.errors[1]);
    expect(result.answers).toEqual([card.practice!.target]);
    expect(result.prompt).not.toContain("Then answer");
  });
});
