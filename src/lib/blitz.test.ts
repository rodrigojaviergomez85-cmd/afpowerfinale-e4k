import { describe, expect, it } from "vitest";
import { availableCategories, chooseCategories, initialRally, rallyReducer } from "./blitz";

describe("Vocab Blitz", () => {
  it("excludes later weeks and includes all eight general groups", () => {
    const a = availableCategories("Kids Super Intensivo", 2, 4);
    expect(a.some((c) => c.category === "Professions")).toBe(false);
    expect(a.filter((c) => c.week === "general")).toHaveLength(8);
    expect(a.find((c) => c.category === "Numbers")?.words).toHaveLength(20);
  });
  it("always includes current-week groups before random general categories", () => {
    for (let i = 0; i < 40; i++) {
      const a = chooseCategories(availableCategories("Kids Super Intensivo", 2, 5), 5, 3);
      expect(a.map((v) => v.category)).toEqual(expect.arrayContaining(["Professions", "What do they do?"]));
      expect(new Set(a.map((v) => v.category)).size).toBe(3);
    }
  });
  it("respects manual picks", () => {
    const a = chooseCategories(availableCategories("Kids Super Intensivo", 2, 4), 4, 3, ["Animals", "Food", "Rooms"]);
    expect(a.map((v) => v.category).sort()).toEqual(["Animals", "Food", "Rooms"]);
  });
  it("alternates serves, resets the clock and awards the OTHER team", () => {
    const action = (type: "start" | "correct" | "out" | "next" | "pause") => ({ type, clock: 7, rounds: 3 });
    let s = rallyReducer(initialRally(0, 7), action("start"));
    s = rallyReducer(s, { type: "tick", elapsed: 2 });
    s = rallyReducer(s, action("correct"));
    expect(s.active).toBe(1); expect(s.remaining).toBe(7); expect(s.longest).toBe(1);
    s = rallyReducer(s, action("out"));
    expect(s.scores).toEqual([1, 0]); expect(s.phase).toBe("review");
    expect(rallyReducer(s, action("out"))).toBe(s);
    s = rallyReducer(s, action("next")); expect(s.active).toBe(1); expect(s.round).toBe(1);
  });
  it("pauses the shot clock and handles sudden death", () => {
    let s = { ...initialRally(0, 7), phase: "rally" as const, paused: true };
    expect(rallyReducer(s, { type: "tick", elapsed: 8 })).toBe(s);
    expect(rallyReducer({ ...s, phase: "review", round: 2, scores: [1, 1] }, { type: "next", clock: 7, rounds: 3 }).sudden).toBe(true);
    expect(rallyReducer({ ...s, phase: "review", round: 3, scores: [2, 1] }, { type: "next", clock: 7, rounds: 3 }).phase).toBe("final");
  });
});