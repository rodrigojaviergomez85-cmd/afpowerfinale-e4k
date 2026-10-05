import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MuteButton } from "./controls";
import { MISSION_BRIEFS, missionOutcome } from "@/lib/mission-outcome";
import { pilotGame, type PilotGameId } from "@/lib/pilot-games";
import { useApp, type Team } from "@/lib/store";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/celebrate";
import { Bomb } from "@/components/bomb/Bomb";

function RocketArt() {
  return (
    <svg viewBox="0 0 140 210" aria-hidden="true">
      <path className="finale-flame" d="M49 149Q34 178 70 209Q105 175 91 149Z" fill="#ff7d46" />
      <path className="finale-flame" d="M58 151Q53 175 70 191Q88 170 82 151Z" fill="#ffe789" />
      <path
        d="M46 100Q17 107 15 158L48 146M94 100Q125 107 125 158L92 146"
        fill="#ff746e"
        stroke="#6f304c"
        strokeWidth="4"
      />
      <path
        d="M70 8C35 37 34 88 43 143Q70 158 97 143C106 88 105 37 70 8Z"
        fill="#f0f7ff"
        stroke="#354b80"
        strokeWidth="4"
      />
      <path d="M70 8Q49 27 43 54Q70 43 97 54Q91 27 70 8" fill="#ff8275" />
      <path d="M86 58Q96 107 86 142L96 142Q106 93 97 54Z" fill="#bfd2f2" />
      <circle cx="70" cy="87" r="21" fill="#293c76" stroke="#d2ddf5" strokeWidth="7" />
      <circle cx="70" cy="87" r="12" fill="#74e8ef" />
      <path d="M63 80L74 76" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M47 142H93L89 156H51Z" fill="#3f578d" />
    </svg>
  );
}

function Scene({
  game,
  complete,
  winner,
  teams,
  progress,
  exploded,
  failed,
}: {
  game: PilotGameId;
  complete: boolean;
  winner: number | null;
  teams: [Team, Team];
  progress: number;
  exploded: boolean;
  failed: boolean;
}) {
  if (exploded)
    return (
      <div
        className="finale-scene finale-explosion"
        role="img"
        aria-label="Explosión arcade de la bomba: misión fallida"
      >
        <div className="blast-ring" />
        <div className="blast-cloud cloud-one" />
        <div className="blast-cloud cloud-two" />
        <div className="blast-burst">BOOM!</div>
        <div className="spent-bomb">
          <Bomb pct={0} mood="charred" showFuse={false} />
        </div>
        <div className="scene-stamp">00:00 · MISSION FAILED · TRY AGAIN</div>
      </div>
    );
  if (game === "rocket")
    return (
      <div
        className={`finale-scene finale-space ${complete ? "scene-success" : "scene-partial"}`}
        aria-label={
          complete ? "Cohete aterrizando en el planeta Nova" : "Cohete regresando a la base"
        }
        role="img"
      >
        <div className="nova-orbit" />
        <div className="nova-planet">
          <i />
          <i />
          <i />
        </div>
        <div className="nova-platform" />
        {(winner === null ? [0, 1] : [winner]).map((team, i) => (
          <div key={team} className={`finale-rocket ${winner === null ? `rocket-pair-${i}` : ""}`}>
            <RocketArt />
            <b>{teams[team]!.icon}</b>
          </div>
        ))}
        <div className="nova-flag">
          <span>{winner === null ? "🤝" : teams[winner]!.icon}</span>
        </div>
        <div className="scene-stamp">
          {complete ? "NOVA · LANDING CONFIRMED" : "BASE · CREW SAFE"}
        </div>
      </div>
    );
  if (game === "spotlight")
    return (
      <div
        className={`finale-scene finale-vault ${complete ? "scene-success" : failed ? "scene-partial scene-failed" : "scene-partial"}`}
        role="img"
        aria-label={
          complete
            ? "Tesoro abierto con cristales de luz"
            : "Cristales recolectados frente al tesoro cerrado"
        }
      >
        <div className="vault-beam" />
        <div className="vault-crystals">✦ ◆ ✦</div>
        <div className="treasure-chest">
          <div className="chest-lid" />
          <div className="chest-body">
            <b>{complete ? "★" : "🔒"}</b>
          </div>
        </div>
        <div className="scene-stamp">
          {complete
            ? "VAULT OPEN · LIGHT RESTORED"
            : failed
              ? "VAULT LOCKED · RETURN TO CAMP"
              : `${progress}% OF LIGHT CRYSTALS COLLECTED`}
        </div>
      </div>
    );
  if (game === "detective")
    return (
      <div
        className={`finale-scene finale-lab ${complete ? "scene-success" : failed ? "scene-partial scene-failed" : "scene-partial"}`}
        role="img"
        aria-label={
          complete ? "Robot reparado y encendido" : "Robot con circuitos pendientes de reparar"
        }
      >
        <div className="robot-aura" />
        <div className="finale-robot">
          <div className="robot-antenna" />
          <div className="robot-face">
            <i />
            <i />
            <span />
          </div>
          <div className="robot-body">
            <b>{complete ? "♥" : "⚙"}</b>
          </div>
          <div className="robot-arm" />
        </div>
        <div className="scene-stamp">
          {complete
            ? "LANGUAGE SYSTEM ONLINE · CASE CLOSED"
            : failed
              ? "ROBOT OFFLINE · REPAIRS NEEDED"
              : `REPAIR STATUS · ${progress}%`}
        </div>
      </div>
    );
  if (game === "sentence")
    return (
      <div
        className={`finale-scene finale-bridge ${complete ? "scene-success" : failed ? "scene-partial scene-failed" : "scene-partial"}`}
        style={{ "--explorer-start": `${10 + progress * 0.7}%` } as CSSProperties}
        role="img"
        aria-label={
          complete
            ? "Explorador cruzando el puente hacia el castillo"
            : "Puente parcialmente construido"
        }
      >
        <div className="bridge-island island-left" />
        <div className="bridge-island island-right" />
        <div className="bridge-castle">🏰</div>
        {failed && <div className="bridge-flood" />}
        <div className="word-bridge">
          {Array.from({ length: 8 }, (_, i) => (
            <i
              key={i}
              className={i < Math.floor((progress / 100) * 8) ? "built" : ""}
              style={{ "--piece": i } as CSSProperties}
            />
          ))}
        </div>
        <div className="bridge-explorer">🧑‍🚀</div>
        <div className="scene-stamp">
          {complete
            ? "BRIDGE COMPLETE · EXPLORER HOME"
            : failed
              ? "RETURN TO SHORE · TRY AGAIN"
              : `BRIDGE CONSTRUCTION · ${progress}%`}
        </div>
      </div>
    );
  return (
    <div
      className={`finale-scene finale-city ${complete ? "scene-success" : "scene-partial"}`}
      role="img"
      aria-label={
        complete
          ? "Escudo activado y ciudad protegida"
          : "Ciudad esperando a que se corten los cables restantes"
      }
    >
      <div className="city-shield" />
      <div className="city-skyline">
        {[58, 84, 66, 110, 75, 94, 55].map((h, i) => (
          <i key={i} style={{ height: h }}>
            <span />
            <span />
            <span />
          </i>
        ))}
      </div>
      <div className="city-lock">{complete ? "🛡️" : "🔧"}</div>
      <div className="scene-stamp">
        {complete ? "BOMB DISARMED · SHIELD ACTIVE" : `DEFUSE STATUS · ${progress}%`}
      </div>
    </div>
  );
}

export function MissionProgress({
  game,
  successes,
  total,
}: {
  game: PilotGameId;
  successes: number;
  total: number;
}) {
  const brief = MISSION_BRIEFS[game];
  return (
    <div className="mission-objective">
      <div>
        <b>
          {pilotGame(game)!.icon} {brief.goal}
        </b>
        {game !== "rocket" && (
          <span>
            {successes} / {total} {brief.unit}
          </span>
        )}
      </div>
      {game !== "rocket" && <progress value={successes} max={total} aria-label={brief.unit} />}
    </div>
  );
}

export function MissionFinale({
  game,
  scores,
  correct,
  helped,
  skipped,
  total,
  teams,
  endedEarly,
  timedOut,
  children,
}: {
  game: PilotGameId;
  scores: [number, number];
  correct: number;
  helped: number;
  skipped: number;
  total: number;
  teams: [Team, Team];
  endedEarly: boolean;
  timedOut: boolean;
  children: ReactNode;
}) {
  const outcome = missionOutcome(game, scores, correct + helped, total, endedEarly, timedOut);
  const exploded = game === "mission" && outcome.failed && timedOut;
  const [replay, setReplay] = useState(0);
  const [landed, setLanded] = useState(false);
  const calm = useApp((s) => s.settings.calm);
  const heading = useRef<HTMLHeadingElement>(null);
  const frame = useRef<HTMLElement>(null);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    heading.current?.focus({ preventScroll: true });
    frame.current?.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);
  useEffect(() => {
    const reduced = calm || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setLanded(false);
    if (exploded) {
      if (reduced) sfx.uhoh();
      else sfx.boom();
    } else if (!reduced) sfx.whoosh();
    const id = window.setTimeout(
      () => {
        setLanded(true);
        if (outcome.celebrate) {
          sfx.win();
          if (!reduced) burst(true);
        } else if (!exploded) {
          if (outcome.failed) sfx.uhoh();
          else sfx.phew();
        }
      },
      reduced ? 0 : 2400,
    );
    return () => window.clearTimeout(id);
  }, [replay, calm, outcome.celebrate, outcome.failed, exploded]);
  const title =
    game === "rocket" && outcome.winner !== null
      ? `${teams[outcome.winner]!.icon} ${teams[outcome.winner]!.name} win!`
      : outcome.title;
  return (
    <section
      ref={frame}
      className={`mission-finale daily-end ${outcome.failed ? "mission-defeat" : ""}`}
      data-calm={calm}
      aria-labelledby="mission-result-title"
    >
      <div className="finale-content">
        <div className="finale-top">
          <span>AF POWER · MISSION CONTROL</span>
          <MuteButton />
        </div>
        <p className="finale-eyebrow">
          {outcome.label}
          {game === "rocket" && outcome.winner !== null ? " · EQUIPO GANADOR" : ""}
        </p>
        <h1 id="mission-result-title" ref={heading} tabIndex={-1}>
          {title}
        </h1>
        <p className="finale-subtitle">
          {endedEarly
            ? "El coach terminó la misión. Este es el resultado hasta ahora."
            : game === "rocket"
              ? outcome.complete
                ? MISSION_BRIEFS.rocket.complete
                : "Load up on fuel and launch again!"
              : outcome.complete
                ? "You worked together. You made it happen."
                : timedOut
                  ? "Time is up. Your next mission is waiting."
                  : "The mission needs a little more practice. You can do it!"}
        </p>
        <div key={replay} className={`finale-cinematic ${landed ? "has-landed" : "is-arriving"}`}>
          <Scene
            game={game}
            exploded={exploded}
            failed={outcome.failed}
            complete={outcome.complete}
            winner={outcome.winner}
            teams={teams}
            progress={Math.round(((correct + helped) / Math.max(1, total)) * 100)}
          />
        </div>
        {game === "rocket" ? (
          <div className="finale-scoreboard">
            {teams.map((team, i) => (
              <div key={i} className={`finale-team ${outcome.winner === i ? "winning-team" : ""}`}>
                <span>
                  {outcome.winner === i
                    ? "🏆 WINNER"
                    : outcome.winner === null
                      ? "🤝 TIE"
                      : "⭐ GREAT EFFORT"}
                </span>
                <b>
                  {team.icon} {team.name}
                </b>
                <strong>
                  {scores[i]} <small>PTS</small>
                </strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="finale-achievement">
            <b>
              {correct + helped} / {total}
            </b>
            <span>{MISSION_BRIEFS[game].unit}</span>
            <div>
              {correct} sin ayuda · {helped} con ayuda · {skipped} para repasar
            </div>
          </div>
        )}
        <div className="finale-navigation">{children}</div>
        <Button variant="ghost" onClick={() => setReplay((v) => v + 1)}>
          ↻ Repetir animación
        </Button>
      </div>
    </section>
  );
}
