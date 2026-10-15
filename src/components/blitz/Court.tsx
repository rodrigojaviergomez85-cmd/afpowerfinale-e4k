import { Star } from "lucide-react";
import type { Team } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Court({ teams, scores, active, rally, rounds, review }: { teams: [Team, Team]; scores: [number, number]; active: number; rally: number; rounds: number; review: boolean }) {
  const tag = rally >= 15 ? "Unstoppable! ⚡" : rally >= 10 ? "On fire! 🔥" : rally >= 5 ? "Nice!" : "Word tennis";
  return <section className="blitz-court" aria-label="Word tennis court">
    <svg className="blitz-court-lines" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true"><rect x="30" y="18" width="940" height="204" rx="3"/><path d="M30 60H970M30 180H970M260 60V180M740 60V180M260 120H740"/><path d="M500 18V222" className="blitz-net"/></svg>
    {teams.map((t, i) => <div key={i} className={cn("blitz-team", i === 0 ? "blitz-team-one" : "blitz-team-two", active === i && !review && "blitz-team-active")}>
      <div className="blitz-team-name"><span>{t.icon}</span><h2>{t.name}</h2></div>
      <div className="blitz-stars" aria-label={`${t.name}: ${scores[i] ?? 0} round points`}>{Array.from({ length: Math.max(rounds, scores[i] ?? 0) }, (_, n) => <Star key={n} className={n < (scores[i] ?? 0) ? "fill-primary text-primary" : "text-foreground/35"} />)}</div>
      <div className="blitz-serving">{!review && active === i ? "Your serve!" : "\u00a0"}</div>
    </div>)}
    <div className="blitz-rally"><strong>Rally: {rally}</strong><span key={tag} className={rally >= 5 ? "animate-pop text-primary" : "text-foreground"}>{tag}</span></div>
    <div className={cn("blitz-ball", active === 0 ? "blitz-ball-left" : "blitz-ball-right")} aria-label="Tennis ball"><svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="27" className="fill-primary stroke-primary-foreground" strokeWidth="2"/><path d="M11 10C38 24 22 39 48 50M49 10C22 24 38 39 12 50" className="stroke-foreground" fill="none" strokeWidth="3"/></svg></div>
  </section>;
}