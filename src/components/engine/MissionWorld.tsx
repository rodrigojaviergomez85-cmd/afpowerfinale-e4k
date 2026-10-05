import type { PilotGameId } from "@/lib/pilot-games";
import type { Team } from "@/lib/store";
import { missionProgress } from "@/lib/mission-progress";
import "./mission-world.css";

const LABELS = {
  spotlight: ["LIGHT THE VAULT", "Crystals", "Flashlight battery", "The light is fading!"],
  detective: ["WAKE UP THE ROBOT", "Circuits", "Robot battery", "Power is running out!"],
  sentence: [
    "BUILD THE WAY HOME",
    "Bridge pieces",
    "Time before the flood",
    "The river is rising!",
  ],
  mission: ["PROTECT THE CITY", "Wires", "Fuse remaining", "The fuse is almost gone!"],
  rocket: ["RACE TO PLANET NOVA", "Fuel", "Flight time", "Final approach!"],
} as const;

export function MissionWorld({
  game,
  successes,
  total,
  remaining,
  duration,
  scores,
  teams,
  turn,
  hit,
  paused,
}: {
  game: PilotGameId;
  successes: number;
  total: number;
  remaining: number;
  duration: number;
  scores: [number, number];
  teams: [Team, Team];
  turn: number;
  hit: boolean;
  paused: boolean;
}) {
  const { progress, energy, status } = missionProgress(successes, total, remaining, duration);
  const label = LABELS[game];
  const leader = scores[0] === scores[1] ? null : scores[0] > scores[1] ? 0 : 1;
  const statusText =
    game === "rocket"
      ? leader === null
        ? "Neck and neck!"
        : `${teams[leader].name} lead by ${Math.abs(scores[0] - scores[1])} pts`
      : status === "complete"
        ? "Objective complete!"
        : status === "critical"
          ? label[3]
          : status === "behind"
            ? "We need to catch up!"
            : "Keep going, team!";
  const percent = Math.ceil(energy * 100);
  return (
    <aside
      className={`mission-world world-${game} world-${status} ${hit ? "world-hit" : ""}`}
      data-paused={paused}
      aria-label={`${label[0]}: ${statusText}`}
    >
      <header>
        <span>LIVE MISSION</span>
        <h2>{label[0]}</h2>
      </header>
      <div className="world-art">
        <svg
          viewBox="0 0 600 300"
          role="img"
          aria-label={
            game === "sentence"
              ? `${successes} de ${total} tablas construidas; río al ${100 - percent}%`
              : game === "detective"
                ? `${successes} circuitos reparados; batería al ${percent}%`
                : game === "spotlight"
                  ? `${successes} cristales; linterna al ${percent}%`
                  : `${teams[0].name}: ${scores[0]}; ${teams[1].name}: ${scores[1]}`
          }
        >
          {game === "sentence" && (
            <>
              <rect width="600" height="300" fill="#264b70" />
              <circle cx="470" cy="45" r="26" fill="#ffeab0" />
              <path
                d="M0 145L25 125 65 150 80 180 80 300H0ZM520 180L535 147 585 140 600 150V300H520Z"
                fill="#385b54"
              />
              <path d="M0 147L65 151 80 180H0ZM520 180L540 148 600 150V183Z" fill="#83d7a5" />
              <g className="world-castle">
                <path
                  d="M539 145V99H582V145M531 144V89H548V144M574 144V89H591V144"
                  fill="#c4d3e9"
                />
                <path d="M526 90L540 70 553 90M570 90L582 70 595 90" fill="#ff9aa8" />
                <path d="M553 145V129Q561 117 569 129V145" fill="#25364c" />
              </g>
              <g
                className="world-water"
                style={{ transform: `translateY(${265 - (1 - energy) * 105}px)` }}
              >
                <rect width="600" height="160" fill="#44a4c3" opacity=".8" />
                <path
                  className="water-ripple"
                  d="M-20 5Q20 -4 60 5T140 5T220 5T300 5T380 5T460 5T540 5T620 5"
                  fill="none"
                  stroke="#9be8e8"
                  strokeWidth="5"
                />
              </g>
              <path d="M65 192H535" stroke="#dac49a" strokeWidth="3" strokeDasharray="6 9" />
              {Array.from({ length: total }, (_, i) => (
                <rect
                  key={i}
                  data-built={i < successes}
                  className={`world-plank ${i < successes ? "is-built" : ""}`}
                  x={80 + (i * 440) / total}
                  y={178}
                  width={440 / total - 3}
                  height={18}
                  rx={3}
                  fill={i < successes ? "#ffe2a1" : "#76929f"}
                  opacity={i < successes ? 1 : 0.2}
                />
              ))}
              <g
                className="world-explorer"
                style={{ transform: `translate(${48 + 450 * progress}px, 167px)` }}
              >
                <text fontSize="43" textAnchor="middle">
                  🧑‍🚀
                </text>
              </g>
            </>
          )}
          {game === "spotlight" && (
            <>
              <rect width="600" height="300" fill="#372f50" />
              <path d="M0 0H600L555 60 495 16 410 68 320 26 240 79 110 25 48 89Z" fill="#17172d" />
              <path d="M66 225L250 60H530V270Z" fill="#fff2b4" opacity={0.08 + 0.42 * energy} />
              <g transform="translate(375 90)">
                <rect
                  x="-82"
                  y="-28"
                  width="164"
                  height="158"
                  rx="65"
                  fill="#13192b"
                  stroke="#a691af"
                  strokeWidth="14"
                />
                <rect x="-40" y="60" width="80" height="43" rx="6" fill="#d1a453" />
                <path d="M-40 60Q0 29 40 60" fill="#f7d78b" />
                <g
                  className="vault-door-left"
                  style={{ transform: `translateX(${-63 * progress}px)` }}
                >
                  <path
                    d="M0 -22Q-72 -22 -72 50V123H0Z"
                    fill="#67788b"
                    stroke="#b1b7c2"
                    strokeWidth="4"
                  />
                </g>
                <g
                  className="vault-door-right"
                  style={{ transform: `translateX(${63 * progress}px)` }}
                >
                  <path
                    d="M0 -22Q72 -22 72 50V123H0Z"
                    fill="#81909f"
                    stroke="#b1b7c2"
                    strokeWidth="4"
                  />
                </g>
              </g>
              <rect
                className="cave-darkness"
                width="600"
                height="300"
                fill="#040716"
                opacity={(1 - energy) * 0.75}
              />
              <g transform="translate(48 235) rotate(-25)">
                <rect width="68" height="25" rx="7" fill="#d0c3ff" />
                <path d="M68 0L90 -8V33L68 25" fill="#fff0b0" />
              </g>
              {Array.from({ length: total }, (_, i) => (
                <path
                  key={i}
                  data-collected={i < successes}
                  className={i < successes ? "world-crystal collected" : "world-crystal"}
                  d="M0 -13L9 0 0 13 -9 0Z"
                  transform={`translate(${170 + i * 32},265)`}
                  fill={i < successes ? "#a7f4ed" : "#657086"}
                  opacity={i < successes ? 1 : 0.4}
                />
              ))}
            </>
          )}
          {game === "detective" && (
            <>
              <rect width="600" height="300" fill="#1f354b" />
              <path d="M50 235H550M75 40V220M525 40V220" stroke="#54788e" strokeWidth="3" />
              <g className="repair-robot" style={{ opacity: 0.5 + 0.5 * energy }}>
                <path d="M300 73V42" stroke="#bdd1e0" strokeWidth="9" />
                <circle cx="300" cy="38" r="11" fill={progress > 0 ? "#ffe4a1" : "#637081"} />
                <rect x="236" y="70" width="128" height="78" rx="20" fill="#c1d3dd" />
                <rect x="248" y="83" width="104" height="48" rx="12" fill="#122a33" />
                <g
                  className={progress > 0 ? "robot-part repaired" : "robot-part"}
                  data-powered={progress > 0}
                >
                  <rect x="266" y="92" width="13" height="19" rx="5" fill="#91f2c4" />
                  <rect x="322" y="92" width="13" height="19" rx="5" fill="#91f2c4" />
                </g>
                <path
                  className={progress >= 0.2 ? "robot-part repaired" : "robot-part"}
                  d="M286 117Q301 127 316 117"
                  stroke="#91f2c4"
                  strokeWidth="4"
                  fill="none"
                />
                <rect x="250" y="155" width="100" height="65" rx="14" fill="#a3bcca" />
                <path
                  className={progress >= 0.4 ? "robot-part repaired" : "robot-part"}
                  d="M233 165L214 202"
                  stroke="#b9d7d8"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  className={progress >= 0.6 ? "robot-part repaired" : "robot-part"}
                  d="M366 164L395 142"
                  stroke="#b9d7d8"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  className={progress >= 0.8 ? "robot-part repaired" : "robot-part"}
                  d="M282 178Q290 168 300 179Q310 168 318 178Q324 190 300 205Q276 190 282 178"
                  fill="#7eeab4"
                />
                <path
                  className={progress >= 1 ? "robot-part repaired" : "robot-part"}
                  d="M277 223V244M324 223V244"
                  stroke="#c4dae0"
                  strokeWidth="17"
                  strokeLinecap="round"
                />
              </g>
              {Array.from({ length: total }, (_, i) => (
                <g key={i} data-repaired={i < successes}>
                  <rect
                    x={70 + (i * 460) / total}
                    y="266"
                    width={460 / total - 7}
                    height="14"
                    rx="3"
                    fill={i < successes ? "#91f2c4" : "#526c80"}
                  />
                </g>
              ))}
              {hit && (
                <text x="425" y="95" fill="#ff9e86" fontSize="45" className="robot-fault">
                  ⚡
                </text>
              )}
            </>
          )}
          {game === "rocket" && (
            <>
              <rect width="600" height="300" fill="#182640" />
              {[
                [70, 40],
                [250, 144],
                [390, 48],
                [440, 255],
                [185, 280],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2" fill="#d9f4ff" />
              ))}
              {teams.map((team, i) => {
                const p = scores[i]! / (Math.ceil(total / 2) * 2);
                return (
                  <g key={i}>
                    <text
                      x="22"
                      y={35 + i * 140}
                      fill={turn % 2 === i ? "#ffe6a2" : "#b7d0ea"}
                      fontSize="22"
                    >
                      {team.icon} {team.name} · {scores[i]} pts {leader === i ? "★" : ""}
                    </text>
                    <path
                      d={`M55 ${95 + i * 140}H542`}
                      stroke="#527494"
                      strokeWidth="3"
                      strokeDasharray="7 9"
                    />
                    <circle
                      cx="552"
                      cy={95 + i * 140}
                      r="24"
                      fill={i === 0 ? "#e4b87b" : "#8bd5cb"}
                    />
                    <g
                      className="race-ship"
                      style={{ transform: `translate(${55 + 460 * p}px, ${95 + i * 140}px)` }}
                    >
                      <path
                        d="M-18 -10L-53 0 -18 10"
                        fill="#ffb76c"
                        className={scores[i]! > 0 ? "race-exhaust" : ""}
                      />
                      <path
                        d="M-20 -13L4 -19 35 0 4 19 -20 13Z"
                        fill={i === 0 ? "#ffe7cf" : "#c0e6fa"}
                      />
                      <path
                        d="M-16 -13L-30 -26 0 -15M-16 13L-30 26 0 15"
                        fill={i === 0 ? "#fc9b8e" : "#829be7"}
                      />
                      <circle cx="7" cy="0" r="8" fill="#345b85" />
                    </g>
                  </g>
                );
              })}
            </>
          )}
        </svg>
      </div>
      <div className="world-status" role="status">
        {statusText}
      </div>
      {game !== "rocket" && (
        <div className="world-objectives">
          <strong>
            {successes}
            <small> / {total}</small>
          </strong>
          <span>
            {label[1]}
            <br />
            <b>{Math.max(0, total - successes)} to go!</b>
          </span>
        </div>
      )}
      <div className="world-energy">
        <div>
          <span>{label[2]}</span>
          <b>{percent}%</b>
        </div>
        <div className="world-energy-track">
          <i style={{ width: `${percent}%` }} />
        </div>
      </div>
    </aside>
  );
}
