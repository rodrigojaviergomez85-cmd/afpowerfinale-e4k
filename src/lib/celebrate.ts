import confetti from "canvas-confetti";
import { useApp } from "./store";

export function burst(big = false) {
  const calm = useApp.getState().settings.calm;
  const n = calm ? 40 : big ? 180 : 80;
  void confetti({ particleCount: n, spread: big ? 110 : 70, origin: { y: 0.6 }, disableForReducedMotion: true });
}

export function finaleConfetti() {
  const calm = useApp.getState().settings.calm;
  const end = Date.now() + (calm ? 1200 : 3000);
  const frame = () => {
    void confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 }, disableForReducedMotion: true });
    void confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 }, disableForReducedMotion: true });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}
