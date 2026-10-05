import type { PilotGameId } from "./pilot-games";
export const WRONG_ANSWER_SECONDS = 10;
export const HELP_ANSWER_SECONDS = 5;

export const MISSION_BRIEFS: Record<PilotGameId, { goal: string; unit: string; complete: string }> =
  {
    rocket: {
      goal: "Mission: reach Planet Nova. The team with the most fuel points wins!",
      unit: "fuel points",
      complete: "Touchdown on Planet Nova!",
    },
    spotlight: {
      goal: "Mission: collect every light crystal to open the treasure vault.",
      unit: "light crystals",
      complete: "Treasure unlocked!",
    },
    detective: {
      goal: "Mission: fix the robot's language circuits and bring it back online.",
      unit: "circuits repaired",
      complete: "Robot back online!",
    },
    sentence: {
      goal: "Mission: build the word bridge so your explorer can reach the castle.",
      unit: "bridge pieces",
      complete: "You built the way!",
    },
    mission: {
      goal: "Mission: cut every wire and protect the city together.",
      unit: "wires cut",
      complete: "City saved!",
    },
  };

export function missionOutcome(
  game: PilotGameId,
  scores: readonly [number, number],
  successes: number,
  total: number,
  endedEarly: boolean,
  timedOut = false,
) {
  const winner = scores[0] === scores[1] ? null : scores[0] > scores[1] ? 0 : 1;
  if (game === "rocket") {
    return {
      winner,
      celebrate: !endedEarly && Math.max(...scores) > 0,
      complete: !endedEarly && Math.max(...scores) > 0,
      label: endedEarly
        ? "FLIGHT ENDED EARLY"
        : Math.max(...scores) > 0
          ? "FLIGHT COMPLETE"
          : "BACK TO BASE",
      title: winner === null ? "It's a tie!" : "Team winner",
      failed: false,
    };
  }
  const complete = total > 0 && successes >= total;
  const failed = !complete && !endedEarly;
  return {
    winner: null,
    celebrate: complete,
    complete,
    failed,
    label: complete ? "MISSION COMPLETE" : endedEarly ? "MISSION ENDED EARLY" : "MISSION FAILED",
    title: complete
      ? MISSION_BRIEFS[game].complete
      : failed
        ? game === "mission" && timedOut
          ? "BOOM! Time's up!"
          : "Mission failed. Try again!"
        : "Mission paused",
  };
}
