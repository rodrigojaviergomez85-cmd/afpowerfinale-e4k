export function missionProgress(
  successes: number,
  total: number,
  remaining: number,
  duration: number,
) {
  const progress = Math.max(0, Math.min(1, successes / Math.max(1, total)));
  const energy = Math.max(0, Math.min(1, remaining / Math.max(1, duration)));
  const critical = remaining <= 30 && progress < 1;
  const pace = progress - (1 - energy);
  return {
    progress,
    energy,
    critical,
    status:
      progress >= 1 ? "complete" : critical ? "critical" : pace < -0.15 ? "behind" : "on-track",
  } as const;
}
