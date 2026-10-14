import { useApp } from "./store";

let ctx: AudioContext | null = null;
function ac() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}
const vol = () => {
  const { sound, volume } = useApp.getState().settings;
  return sound ? volume : 0;
};

function tone(freq: number, dur: number, type: OscillatorType = "square", delay = 0, gainMul = 1, slideTo?: number) {
  const v0 = vol();
  const c = ac();
  if (!v0 || !c) return;
  const t = c.currentTime + delay;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  const v = 0.18 * v0 * gainMul;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(v, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

function noise(dur: number, delay = 0, gainMul = 1, filterFreq = 2000, filterTo?: number) {
  const v0 = vol();
  const c = ac();
  if (!v0 || !c) return;
  const t = c.currentTime + delay;
  const buf = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.setValueAtTime(filterFreq, t);
  if (filterTo) f.frequency.exponentialRampToValueAtTime(filterTo, t + dur);
  const g = c.createGain();
  g.gain.setValueAtTime(0.3 * v0 * gainMul, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(c.destination);
  src.start(t);
}

export const sfx = {
  correct: () => { tone(660, 0.12); tone(990, 0.22, "square", 0.1); },
  skip: () => tone(400, 0.25, "triangle", 0, 1, 200),
  tick: () => tone(1200, 0.05, "square", 0, 0.5),
  buzzer: () => { tone(140, 0.7, "sawtooth", 0, 1.3); tone(147, 0.7, "sawtooth", 0, 1.3); },
  whoosh: () => tone(300, 0.35, "sine", 0, 1, 1400),
  count: () => tone(520, 0.18),
  go: () => tone(880, 0.4),
  win: () => {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.25, "square", i * 0.14));
    tone(1047, 0.6, "triangle", 0.6);
    tone(1319, 0.6, "triangle", 0.6, 0.7);
  },
  spin: () => tone(700 + Math.random() * 300, 0.04, "triangle", 0, 0.5),
  minus: () => tone(300, 0.15, "square", 0, 0.8, 220),
  snip: () => { noise(0.05, 0, 0.8, 6000); tone(2400, 0.04, "square", 0.02, 0.6); noise(0.05, 0.08, 0.8, 6000); },
  fizz: () => noise(0.5, 0, 0.7, 5000, 800),
  beep: () => tone(1000, 0.12, "square", 0, 0.7),
  alarm: () => { tone(880, 0.15, "square", 0, 0.6); tone(660, 0.15, "square", 0.17, 0.6); },
  click: () => noise(0.03, 0, 1, 8000),
  phew: () => tone(800, 0.6, "sine", 0, 1, 260),
  freeze: () => [1568, 2093, 2637, 3136].forEach((f, i) => tone(f, 0.3, "sine", i * 0.07, 0.5)),
  uhoh: () => { tone(500, 0.25, "triangle", 0, 1); tone(380, 0.4, "triangle", 0.28, 1); },
  boom: () => { noise(2.2, 0, 1.6, 1200, 60); tone(110, 1.6, "sine", 0, 2.2, 30); tone(60, 2, "sine", 0.05, 2) },
  drumroll: (dur = 1) => { for (let t = 0; t < dur; t += 0.045) noise(0.04, t, 0.4 + (t / dur) * 0.6, 1500); },
  thump: () => { tone(90, 0.3, "sine", 0, 2, 40); noise(0.15, 0, 0.8, 600); },
  firework: () => { noise(0.6, 0, 0.6, 3000, 300); tone(1500, 0.3, "sine", 0, 0.4, 600); },
  tok: () => { tone(220, 0.08, "square", 0, 1.2, 110); noise(0.06, 0, 1, 1800); tone(240, 0.08, "square", 0.14, 1, 120); },
  splash: () => { noise(0.7, 0, 1.2, 2500, 300); tone(200, 0.4, "sine", 0, 0.8, 80); },
  blast: (big = false) => { noise(big ? 1.2 : 0.7, 0, big ? 1.6 : 1, 1800, 200); tone(big ? 180 : 240, big ? 0.9 : 0.5, "sawtooth", 0, big ? 0.8 : 0.5, big ? 1600 : 900); },
  pfft: () => { noise(0.35, 0, 0.8, 700, 200); tone(160, 0.3, "triangle", 0.05, 0.6, 70); },
  whooshWave: () => { noise(1.6, 0, 1.6, 900, 150); tone(90, 1.4, "sine", 0, 1.5, 40); },
  cheer: () => { noise(1.1, 0, 0.9, 2200, 500); tone(880, 0.2, "triangle", 0.1, 0.4); },
  ooh: () => tone(420, 0.8, "sine", 0, 1, 260),
  aww: () => { tone(500, 0.9, "sine", 0, 0.9, 300); noise(0.8, 0, 0.4, 1200, 300); },
  gasp: () => noise(0.35, 0, 0.7, 3000, 900),
  cymbal: () => { noise(1.4, 0, 1.2, 9000, 3000); },
  thunder: () => { noise(1.4, 0, 1.4, 500, 60); },
  yahoo: () => { tone(520, 0.15, "triangle"); tone(780, 0.3, "triangle", 0.15, 1, 1040); },
};
