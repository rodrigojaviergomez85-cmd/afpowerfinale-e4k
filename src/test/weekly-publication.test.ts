import { describe, it, expect } from "vitest";
import { PILOT_LESSONS, APPROVED_WEEK4 } from "../data/content";
import { weekGames, weekPath } from "../lib/weekly-publication";
describe("weekly publication", () => {
  it("offers at most two distinct games for every published lesson", () => {
    for (const l of PILOT_LESSONS) {
      const games = weekGames(l);
      expect(games.length).toBe(2);
      expect(new Set(games.map((g) => g.id)).size).toBe(2);
      for (const g of games) {
        expect(g.path).toContain(`lesson=${l.id}`);
        expect(g.path).not.toContain("localhost");
      }
    }
  });
  it("preserves the explicitly approved Week 4 order", () => {
    expect(Object.values(APPROVED_WEEK4).map((g) => g.map((x) => x.id))).toEqual([
      ["spotlight", "rescue"],
      ["d2-shape-bomb", "d2-pet-race"],
      ["d3-count-memory", "d3-alien-customs"],
      ["d4-shape-spotlight", "d4-review-code"],
      ["d5-question-race", "d5-action-memory"],
    ]);
  });
  it("keeps distinct weekly URLs and the prior Week 5 content routes", () => {
    expect(weekPath(4)).not.toBe(weekPath(5));
    for (const l of PILOT_LESSONS.filter((l) => l.week === 5)) {
      expect(weekGames(l).every((g) => !g.path.startsWith("/play/adventure"))).toBe(true);
    }
  });
});
