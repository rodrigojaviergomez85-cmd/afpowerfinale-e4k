import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { sfx } from "@/lib/sound";

export function useTimer(duration: number, onEnd?: () => void) {
  const [remaining, setRemaining] = useState(duration);
  const [running, setRunning] = useState(false);
  const endRef = useRef(onEnd);
  endRef.current = onEnd;
  const lastSec = useRef(duration);

  useEffect(() => {
    if (!running) return;
    const started = performance.now();
    const startRemaining = remaining;
    const id = setInterval(() => {
      const r = Math.max(0, startRemaining - (performance.now() - started) / 1000);
      setRemaining(r);
      const sec = Math.ceil(r);
      if (sec !== lastSec.current) {
        lastSec.current = sec;
        if (sec <= 5 && sec > 0) sfx.tick();
      }
      if (r <= 0) {
        clearInterval(id);
        setRunning(false);
        sfx.buzzer();
        endRef.current?.();
      }
    }, 100);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const reset = useCallback(
    (autostart = false) => {
      setRemaining(duration);
      lastSec.current = duration;
      setRunning(autostart);
    },
    [duration],
  );
  const toggle = useCallback(() => {
    setRunning((r) => {
      if (!r && remaining <= 0) {
        setRemaining(duration);
        lastSec.current = duration;
      }
      return !r;
    });
  }, [remaining, duration]);

  return { remaining, running, toggle, reset, setRunning, duration };
}

export function TimerRing({ remaining, duration, running, size = 200 }: { remaining: number; duration: number; running: boolean; size?: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const pct = duration ? remaining / duration : 0;
  const sec = Math.ceil(remaining);
  const danger = sec <= 5 && remaining > 0;
  const done = remaining <= 0;
  return (
    <div
      className={cn("relative grid place-items-center", danger && running && "animate-pulse-big")}
      style={{ width: size, height: size }}
      aria-label={`${sec} seconds left`}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
        <circle cx="50" cy="50" r={r} className="fill-card stroke-secondary" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className={cn(
            "transition-[stroke-dashoffset] duration-100 ease-linear",
            done ? "stroke-destructive" : danger ? "stroke-destructive" : pct < 0.5 ? "stroke-primary" : "stroke-success",
          )}
        />
      </svg>
      <div className={cn("relative font-display font-bold leading-none", danger || done ? "text-destructive" : "text-foreground")} style={{ fontSize: size * 0.38 }}>
        {done ? "⏰" : sec}
      </div>
      {!running && !done && (
        <div className="absolute -bottom-3 rounded-full bg-secondary px-3 py-0.5 text-sm font-bold text-muted-foreground">
          Paused · Space
        </div>
      )}
    </div>
  );
}
