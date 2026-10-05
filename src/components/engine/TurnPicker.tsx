import { useEffect, useState } from "react";
import { useApp, type Player } from "@/lib/store";
import { sfx } from "@/lib/sound";

/** Weighted pick: fewer turns first; quiet kids get double weight. Nobody repeats until all had a turn. */
export function pickPlayer(roster: Player[]): Player | null {
  if (!roster.length) return null;
  const minTurns = Math.min(...roster.map((p) => p.turns));
  const pool = roster.filter((p) => p.turns === minTurns);
  const weighted = pool.flatMap((p) => (p.quiet ? [p, p, p] : [p]));
  return weighted[Math.floor(Math.random() * weighted.length)] ?? null;
}

export function TurnPicker({ open, onDone }: { open: boolean; onDone: (p: Player) => void }) {
  const roster = useApp((s) => s.roster);
  const bump = useApp((s) => s.bumpPlayer);
  const [display, setDisplay] = useState<string>("");
  const [winner, setWinner] = useState<Player | null>(null);

  useEffect(() => {
    if (!open) return;
    const target = pickPlayer(roster);
    if (!target) return;
    setWinner(null);
    let i = 0;
    const steps = 22;
    let delay = 50;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      i++;
      setDisplay(roster[Math.floor(Math.random() * roster.length)]!.name);
      sfx.spin();
      if (i < steps) {
        delay *= 1.12;
        t = setTimeout(step, delay);
      } else {
        setDisplay(target.name);
        setWinner(target);
        sfx.correct();
        bump(target.id, "turns");
        t = setTimeout(() => onDone(target), 1600);
      }
    };
    step();
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-stage/85 backdrop-blur-sm">
      <div className="panel animate-pop px-16 py-12 text-center">
        <div className="text-3xl font-bold text-muted-foreground">🎲 Your turn...</div>
        <div className={`mt-4 font-display text-8xl font-bold ${winner ? "text-primary animate-pop" : "text-foreground"}`}>
          {display || "..."}
        </div>
        {winner?.quiet && <div className="mt-4 text-2xl">⭐ You can do it! ⭐</div>}
      </div>
    </div>
  );
}
