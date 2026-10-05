import { beforeEach, describe, expect, it } from "vitest";
import { PILOT_LESSONS } from "@/data/content";
import {
  drawDaily,
  findLesson,
  lessonCards,
  newRound,
  roundReducer,
  useDailySession,
} from "@/lib/daily-session";
import { PILOT_GAMES } from "@/lib/pilot-games";
import { pickPlayer } from "@/components/engine/TurnPicker";

describe("curriculum / daily sessions", () => {
  it("maps the ten source rows to stable level/week/day URLs", () => {
    expect(PILOT_LESSONS.map((l) => l.sourceRow)).toEqual([77, 78, 79, 80, 81, 82, 83, 84, 85, 86]);
    for (const week of [4, 5])
      for (const day of [1, 2, 3, 4, 5]) {
        const l = findLesson(`kids-super-intensive-l2-w${week}-d${day}`)!;
        expect([l.level, l.week, l.day]).toEqual([2, week, day]);
        expect(l.suggested).toHaveLength(3);
        expect(l.suggested.every((id) => PILOT_GAMES.some((g) => g.id === id))).toBe(true);
      }
    expect(findLesson("kids-super-intensive-l2-w4-d9")).toBeUndefined();
  });
  it("keeps teaching days 2 and 4 of week 5 distinct from exams", () => {
    expect(PILOT_LESSONS.filter((l) => l.evaluation).map((l) => [l.week, l.day])).toEqual([
      [4, 4],
      [4, 5],
      [5, 5],
    ]);
    expect(findLesson("kids-super-intensive-l2-w5-d2")!.focus).toContain("Long answers");
    expect(findLesson("kids-super-intensive-l2-w5-d4")!.focus).toContain("work at");
  });
  it.each(PILOT_LESSONS.map((l) => [l.id, l] as const))(
    "%s supports 3 games of 13 cards without repeated card IDs",
    (_, lesson) => {
      const used: string[] = [];
      for (let i = 0; i < 3; i++) {
        const deck = drawDaily(lesson, used, 13);
        expect(deck.cards).toHaveLength(13);
        expect(deck.recycled).toBe(false);
        for (const card of deck.cards) {
          expect(used).not.toContain(card.id);
          expect(card.prompt).toBeTruthy();
          expect(card.answers.every((a) => a.trim().length > 0)).toBe(true);
          expect(card.correction).not.toEqual(card.falseClaim);
          used.push(card.id);
        }
      }
    },
  );
  it("uses only known days for evaluation practice and respects first-day vocabulary", () => {
    const before = PILOT_LESSONS.slice(0, 3).flatMap((l) => l.cards.map((c) => c.key));
    expect(PILOT_LESSONS[3]!.cards.every((c) => before.includes(c.key))).toBe(true);
    const first = lessonCards(PILOT_LESSONS[5]!);
    expect(first.some((c) => /astronaut|teacher|because/i.test(c.line))).toBe(false);
    expect(PILOT_LESSONS[4]!.cards.every((c) => /What|Where/.test(c.line))).toBe(true);
  });
  it("reports reused material honestly after the bank is exhausted", () => {
    const l = PILOT_LESSONS[0]!;
    const result = drawDaily(
      l,
      l.cards.map((c) => c.key),
      13,
    );
    expect(result.recycled).toBe(true);
    expect(new Set(result.cards.map((c) => c.key)).size).toBe(13);
  });
});

describe("scoring and turn safety", () => {
  it("passes an incorrect team answer to the opponent without points or a second transition", () => {
    const wrong = { type: "incorrect" as const, index: 0, count: 10 };
    let s = roundReducer(newRound(), wrong);
    expect(s).toMatchObject({ index: 1, answered: null, skipped: 1, scores: [0, 0] });
    expect(roundReducer(s, wrong)).toBe(s);
    s = roundReducer(s, { type: "grade", grade: "correct" });
    expect(s.scores).toEqual([0, 2]);
    expect(roundReducer(s, { type: "incorrect", index: 1, count: 10 })).toBe(s);
  });
  it("finishes a team game if the last answer is incorrect, keeping prior points", () => {
    const s = { ...newRound(), index: 9, scores: [4, 6] as [number, number] };
    const end = roundReducer(s, { type: "incorrect", index: 9, count: 10 });
    expect(end).toMatchObject({ finished: true, skipped: 1, scores: [4, 6] });
  });
  it("allows repeated mistakes on the final card without advancing or awarding points", () => {
    let s = { ...newRound(), index: 9 };
    s = roundReducer(s, { type: "retry" });
    s = roundReducer(s, { type: "retry" });
    s = roundReducer(s, { type: "next", count: 10 });
    expect(s).toMatchObject({
      index: 9,
      answered: null,
      retryCount: 2,
      scores: [0, 0],
      finished: false,
    });
    s = roundReducer(s, { type: "grade", grade: "help" });
    s = roundReducer(s, { type: "next", count: 10 });
    expect(s).toMatchObject({ helped: 1, scores: [0, 1], finished: true });
  });
  it.each(["correct", "help", "skip"] as const)(
    "undoes an accidental %s before retrying, without duplicating credit",
    (grade) => {
      let s = roundReducer(newRound(), { type: "grade", grade: "correct" });
      s = roundReducer(s, { type: "next", count: 2 });
      s = roundReducer(s, { type: "grade", grade });
      s = roundReducer(s, { type: "retry" });
      s = roundReducer(s, { type: "retry" });
      expect(s).toMatchObject({
        index: 1,
        answered: null,
        correct: 1,
        helped: 0,
        skipped: 0,
        scores: [2, 0],
      });
      s = roundReducer(s, { type: "grade", grade: "help" });
      s = roundReducer(s, { type: "next", count: 2 });
      expect(s).toMatchObject({ correct: 1, helped: 1, scores: [2, 1], finished: true });
      expect(roundReducer(s, { type: "retry" })).toBe(s);
    },
  );
  it("credits the final answer and ignores a second grade on the same card", () => {
    let s = newRound();
    s = roundReducer(s, { type: "grade", grade: "correct" });
    s = roundReducer(s, { type: "grade", grade: "correct" });
    s = roundReducer(s, { type: "next", count: 1 });
    expect(s).toMatchObject({ scores: [2, 0], correct: 1, finished: true });
  });
  it("requires a result before advancing, counts support and does not subtract points", () => {
    let s = newRound();
    expect(roundReducer(s, { type: "next", count: 3 })).toEqual(s);
    s = roundReducer(s, { type: "grade", grade: "help" });
    s = roundReducer(s, { type: "next", count: 3 });
    s = roundReducer(s, { type: "grade", grade: "skip" });
    expect(s).toMatchObject({ scores: [1, 0], helped: 1, skipped: 1 });
  });
  it("gives every student a turn before anyone gets a second", () => {
    const roster = Array.from({ length: 13 }, (_, i) => ({
      id: String(i),
      name: `Student ${i}`,
      quiet: i === 0,
      turns: 0,
      points: 0,
    }));
    const seen = new Set<string>();
    for (let i = 0; i < 13; i++) {
      const p = pickPlayer(roster)!;
      expect(seen.has(p.id)).toBe(false);
      seen.add(p.id);
      p.turns++;
    }
    expect(seen.size).toBe(13);
  });
});

describe("session persistence", () => {
  beforeEach(() => useDailySession.getState().reset("lesson-a"));
  it("retains used questions and idempotent results between games", () => {
    const s = useDailySession.getState();
    s.see("question-1");
    s.see("question-1");
    const result = {
      id: "run-1",
      game: "rocket" as const,
      correct: 3,
      helped: 1,
      skipped: 0,
      endedEarly: true,
    };
    s.finish(result);
    s.finish(result);
    s.ensure("lesson-a");
    expect(useDailySession.getState().used).toEqual(["question-1"]);
    expect(useDailySession.getState().results).toHaveLength(1);
    s.ensure("lesson-b");
    expect(useDailySession.getState().used).toEqual([]);
    expect(useDailySession.getState().results).toEqual([]);
  });
});
