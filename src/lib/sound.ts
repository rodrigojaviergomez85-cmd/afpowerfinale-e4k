import { useApp } from "./store";

let ctx: AudioContext | null = null;
function ac() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(freq: number, dur: number, type: OscillatorType = "square", delay = 0, gainMul = 1, slideTo?: number) {
  const { sound, volume } = useApp.getState().settings;
  if (!sound) return;
  const c = ac();
  if (!c) return;
  const t = c.currentTime + delay;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  const v = 0.18 * volume * gainMul;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(v, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export const sfx = {
  correct: () => {
    tone(660, 0.12, "square");
    tone(990, 0.22, "square", 0.1);
  },
  skip: () => tone(400, 0.25, "triangle", 0, 1, 200),
  tick: () => tone(1200, 0.05, "square", 0, 0.5),
  buzzer: () => {
    tone(140, 0.7, "sawtooth", 0, 1.3);
    tone(147, 0.7, "sawtooth", 0, 1.3);
  },
  whoosh: () => tone(300, 0.35, "sine", 0, 1, 1400),
  count: () => tone(520, 0.18, "square"),
  go: () => tone(880, 0.4, "square"),
  win: () => {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.25, "square", i * 0.14));
    tone(1047, 0.6, "triangle", 0.6);
    tone(1319, 0.6, "triangle", 0.6, 0.7);
  },
  spin: () => tone(700 + Math.random() * 300, 0.04, "triangle", 0, 0.5),
  minus: () => tone(300, 0.15, "square", 0, 0.8, 220),
};
