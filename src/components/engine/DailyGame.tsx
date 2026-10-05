import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Check,
  ChevronRight,
  Flag,
  HelpCircle,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameShell } from "./GameShell";
import { ItemPicture } from "./Picture";
import { useTimer } from "./Timer";
import { pickPlayer } from "./TurnPicker";
import { useHotkeys } from "./controls";
import { Bomb } from "@/components/bomb/Bomb";
import {
  drawDaily,
  findLesson,
  newRound,
  roundReducer,
  useDailySession,
  type DailyCard,
  type Grade,
} from "@/lib/daily-session";
import { pilotGame, PILOT_GAMES, pilotGamePath, type PilotGameId } from "@/lib/pilot-games";
import { useApp, type Player } from "@/lib/store";
import { shuffle } from "@/lib/content";
import { sfx } from "@/lib/sound";
import { MissionFinale, MissionProgress } from "./MissionFinale";
import type { PilotLesson } from "@/data/content";
import { WRONG_ANSWER_SECONDS, HELP_ANSWER_SECONDS } from "@/lib/mission-outcome";
import { MissionWorld } from "./MissionWorld";

export function DailyGame({ lessonId, gameId }: { lessonId: string; gameId: PilotGameId }) {
  const [attempt, setAttempt] = useState(0);
  const lesson = findLesson(lessonId);
  const game = pilotGame(gameId)!;
  if (!lesson)
    return (
      <div className="daily-empty">
        <h1>Elige una lección primero</h1>
        <p>El enlace debe indicar nivel, semana y día.</p>
        <Link to="/">Ver las diez lecciones</Link>
      </div>
    );
  const def = {
    ...game,
    tagline: game.rule,
    mode: game.team ? ("2 teams" as const) : ("Whole class" as const),
    minutes: `${game.minutes} min`,
    accent: "bg-primary",
    accentText: "text-primary",
    status: "ready" as const,
    rules: [
      {
        icon: game.icon,
        text:
          game.rule +
          (game.team
            ? ""
            : ` Wrong answer: −${WRONG_ANSWER_SECONDS}s. With help: progress, but −${HELP_ANSWER_SECONDS}s. Beat the clock!`),
      },
    ],
  };
  // The round component mounts only when GameShell reaches play: clocks cannot run in instructions.
  return (
    <GameShell
      key={`${lessonId}-${gameId}`}
      game={def}
      rightSlot={
        <Link className="daily-back" to="/lesson/$lessonId" params={{ lessonId }}>
          Juegos del día
        </Link>
      }
    >
      <DailyRound
        key={attempt}
        lesson={lesson}
        gameId={gameId}
        onRestart={() => setAttempt((v) => v + 1)}
      />
    </GameShell>
  );
}

function DailyRound({
  lesson,
  gameId,
  onRestart,
}: {
  lesson: PilotLesson;
  gameId: PilotGameId;
  onRestart: () => void;
}) {
  const game = pilotGame(gameId)!;
  const app = useApp();
  const [deck] = useState(() => {
    useDailySession.getState().ensure(lesson.id);
    const turns = Math.max(10, Math.min(13, useApp.getState().roster.length));
    return drawDaily(
      lesson,
      useDailySession.getState().used,
      game.team ? Math.ceil(turns / 2) * 2 : turns,
    );
  });
  const [runId] = useState(() => crypto.randomUUID());
  const [state, dispatch] = useReducer(roundReducer, undefined, newRound);
  const [paused, setPaused] = useState(false);
  const [help, setHelp] = useState(false);
  const [hint, setHint] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);
  const [freezeUsed, setFreezeUsed] = useState(false);
  const [freezeLeft, setFreezeLeft] = useState(0);
  const [endedEarly, setEndedEarly] = useState(false);
  const [penalty, setPenalty] = useState(0);
  const [penaltyVisible, setPenaltyVisible] = useState(false);
  const lastPenalty = useRef(-Infinity);
  const gradeLock = useRef(false);
  const chargedHelp = useRef(0);
  const seenTurn = useRef(-1);
  const recorded = useRef(false);
  const item = deck.cards[state.index];
  const timer = useTimer(game.minutes * 60, () => dispatch({ type: "finish" }));
  const { setRunning } = timer;
  const stopped =
    paused || help || state.finished || freezeLeft > 0 || !!state.answered || timer.remaining <= 0;
  const critical = !game.team && timer.remaining <= 30 && !stopped;
  useEffect(() => {
    if (!penalty) return;
    setPenaltyVisible(true);
    const id = window.setTimeout(() => setPenaltyVisible(false), 1200);
    return () => window.clearTimeout(id);
  }, [penalty]);
  useEffect(() => {
    if (!critical) return;
    const theme =
      gameId === "sentence"
        ? "water"
        : gameId === "detective"
          ? "power"
          : gameId === "spotlight"
            ? "light"
            : "bomb";
    const id = window.setInterval(() => sfx.tension(theme), 1000);
    return () => window.clearInterval(id);
  }, [critical, gameId]);
  useEffect(() => {
    setRunning(!stopped);
  }, [stopped, setRunning]);
  useEffect(() => {
    if (!freezeLeft || paused || help) return;
    const id = setTimeout(() => setFreezeLeft((v) => Math.max(0, v - 1)), 1000);
    return () => clearTimeout(id);
  }, [freezeLeft, paused, help]);
  useEffect(() => {
    if (!item || seenTurn.current === state.index) return;
    seenTurn.current = state.index;
    gradeLock.current = false;
    chargedHelp.current = 0;
    useDailySession.getState().see(item.key);
    const p = pickPlayer(useApp.getState().roster);
    if (p) useApp.getState().bumpPlayer(p.id, "turns");
    setPlayer(p);
    setHint(false);
    setAnswer(false);
  }, [item, state.index]);
  useEffect(() => {
    if (!state.finished || recorded.current) return;
    recorded.current = true;
    useDailySession.getState().finish({
      id: runId,
      game: gameId,
      correct: state.correct,
      helped: state.helped,
      skipped: state.skipped,
      endedEarly,
    });
  }, [state, runId, gameId, endedEarly]);
  const grade = (value: Grade) => {
    if (stopped || !item || gradeLock.current) return;
    gradeLock.current = true;
    if (value === "help" && !game.team) {
      timer.penalize(HELP_ANSWER_SECONDS);
      // An assisted answer must be paid for before the clock expires.
      if (timer.remaining <= HELP_ANSWER_SECONDS) return;
      chargedHelp.current = HELP_ANSWER_SECONDS;
    }
    dispatch({ type: "grade", grade: value });
    if (value !== "skip") {
      sfx.correct();
      if (gameId === "mission") sfx.snip();
      if (gameId === "sentence") sfx.thump();
      if (gameId === "spotlight") sfx.freeze();
      if (gameId === "detective") sfx.beep();
    }
  };
  const next = () => {
    if (!paused && !help && state.answered) dispatch({ type: "next", count: deck.cards.length });
  };
  const retry = () => {
    if (paused || help || freezeLeft > 0 || state.finished || timer.remaining <= 0) return;
    if (gradeLock.current && !state.answered) return;
    if (game.team && !state.answered) {
      dispatch({ type: "incorrect", index: state.index, count: deck.cards.length });
      return;
    }
    if (!state.answered) {
      if (performance.now() - lastPenalty.current < 450) return;
      lastPenalty.current = performance.now();
      timer.penalize(WRONG_ANSWER_SECONDS);
      setPenalty((v) => v + 1);
      if (gameId === "mission") {
        sfx.alarm();
        sfx.thump();
      } else sfx.minus();
    }
    if (state.answered && chargedHelp.current) {
      timer.refund(chargedHelp.current);
      chargedHelp.current = 0;
    }
    gradeLock.current = false;
    dispatch({ type: "retry" });
    setAnswer(false);
    setHint(false);
  };
  useHotkeys(
    {
      c: () => grade("correct"),
      h: () => grade("help"),
      r: retry,
      ArrowRight: next,
      a: () => setAnswer((v) => !v),
      Space: () => setPaused((v) => !v),
      "?": () => setHelp((v) => !v),
      Escape: () => setHelp(false),
    },
    !state.finished,
  );
  const results = useDailySession((s) => s.results);
  if (state.finished) {
    const others = lesson.suggested
      .filter((id) => id !== gameId)
      .map((id) => PILOT_GAMES.find((g) => g.id === id)!)
      .filter(Boolean);
    const nextGame = others.find((g) => !results.some((r) => r.game === g.id)) ?? others[0];
    return (
      <MissionFinale
        game={gameId}
        scores={state.scores}
        correct={state.correct}
        helped={state.helped}
        skipped={state.skipped}
        total={deck.cards.length}
        teams={app.teams}
        endedEarly={endedEarly}
        timedOut={timer.remaining <= 0}
      >
        <Button variant="game" size="xl" onClick={onRestart}>
          ↻ Reintentar misión
        </Button>
        {nextGame && (
          <Button asChild variant="game" size="xl">
            <Link to={pilotGamePath(nextGame.id)} search={{ lesson: lesson.id }}>
              {nextGame.icon} Siguiente misión
            </Link>
          </Button>
        )}
        <Button asChild variant="panel" size="xl">
          <Link to="/lesson/$lessonId" params={{ lessonId: lesson.id }}>
            Elegir otro / terminar
          </Link>
        </Button>
      </MissionFinale>
    );
  }

  if (!item)
    return (
      <div className="daily-empty">
        No hay actividades disponibles para esta lección.
        <Link to="/lesson/$lessonId" params={{ lessonId: lesson.id }}>
          Volver
        </Link>
      </div>
    );
  const successes = state.correct + state.helped;
  return (
    <div
      className={`daily-play ${critical ? "mission-critical" : ""} ${penaltyVisible ? "mission-hit" : ""}`}
      style={{ "--game-color": game.color } as React.CSSProperties}
    >
      {penaltyVisible && (
        <div className="penalty-impact" key={penalty} role="status">
          <strong>−{WRONG_ANSWER_SECONDS}s</strong>
          <span>INCORRECTO · EL RELOJ NO ESPERA</span>
        </div>
      )}
      <div className="daily-play-top">
        <span>
          W{lesson.week} · D{lesson.day} <b>{lesson.topic}</b>
        </span>
        <span
          className="daily-clock"
          role="timer"
          aria-label={`${Math.ceil(timer.remaining)} seconds left`}
        >
          {Math.floor(Math.ceil(timer.remaining) / 60)}:
          {String(Math.ceil(timer.remaining) % 60).padStart(2, "0")}
        </span>
        <button onClick={() => setPaused((v) => !v)}>
          {paused ? <Play /> : <Pause />}
          {paused ? "Continuar" : "Pausa"}
        </button>
        <button onClick={() => setHelp(true)} aria-label="Ayuda">
          <HelpCircle />
        </button>
        <button
          onClick={() => {
            setEndedEarly(true);
            dispatch({ type: "finish" });
          }}
        >
          <Flag size={18} /> Terminar
        </button>
      </div>
      <div className="daily-turn">
        <span>
          {game.team
            ? `${app.teams[state.index % 2]!.icon} ${app.teams[state.index % 2]!.name}`
            : "🤝 Whole class"}
        </span>
        <b>
          {player
            ? `${player.name}, your turn!`
            : `Turn ${state.index + 1} · Coach, choose a speaker`}
        </b>
        <span>
          {state.index + 1} / {deck.cards.length}
        </span>
      </div>
      <MissionProgress game={gameId} successes={successes} total={deck.cards.length} />
      {!game.team && (
        <div className={`mission-stakes ${critical ? "stakes-critical" : ""}`}>
          <b>{critical ? "⚠ CRITICAL · MENOS DE 30 SEGUNDOS" : "⏱ CONTRARRELOJ"}</b>
          <span>
            Incorrecto: −{WRONG_ANSWER_SECONDS}s · Con ayuda: −{HELP_ANSWER_SECONDS}s ·{" "}
            {gameId === "mission"
              ? "Si llega a 0, la bomba explota."
              : "Si llega a 0 sin completar el objetivo, pierden la misión."}
          </span>
        </div>
      )}
      <div
        className={`daily-stage ${gameId === "mission" ? "daily-stage-bomb" : "daily-stage-world"}`}
      >
        {gameId !== "mission" && (
          <MissionWorld
            game={gameId}
            successes={successes}
            total={deck.cards.length}
            remaining={timer.remaining}
            duration={timer.duration}
            scores={state.scores}
            teams={app.teams}
            turn={state.index}
            hit={penaltyVisible}
            paused={paused || help || freezeLeft > 0}
          />
        )}
        {gameId === "mission" && (
          <aside className="daily-bomb">
            <Bomb
              longFuse
              pct={timer.remaining / timer.duration}
              mood={
                freezeLeft
                  ? "calm"
                  : penaltyVisible || timer.remaining <= 30
                    ? "panic"
                    : timer.remaining <= 60
                      ? "worried"
                      : "calm"
              }
              joltKey={penalty}
              className="mission-bomb-art"
              secondsLeft={Math.ceil(timer.remaining)}
              frozen={freezeLeft > 0}
            />
            <div className="daily-wires">
              {deck.cards.map((_, i) => (
                <span key={i} className={`mission-wire ${i < successes ? "cut" : ""}`}>
                  <i />
                  <i />
                </span>
              ))}
            </div>
            <b>
              {successes} / {deck.cards.length} wires cut
            </b>
            <Button
              variant="panel"
              disabled={freezeUsed || stopped}
              onClick={() => {
                setFreezeUsed(true);
                setFreezeLeft(10);
                sfx.freeze();
              }}
            >
              ❄️ {freezeLeft ? `${freezeLeft}s` : freezeUsed ? "Freeze used" : "Freeze · 10s"}
            </Button>
          </aside>
        )}
        <div className="daily-question" key={item.key}>
          <p className="daily-question-label">
            {gameId === "detective"
              ? "FIX THE ROBOT'S SENTENCE"
              : gameId === "sentence"
                ? "BUILD IT. THEN SAY IT."
                : gameId === "spotlight"
                  ? "LOOK CLOSELY. SAY IT."
                  : "ANSWER IN A FULL SENTENCE"}
          </p>
          {gameId === "spotlight" ? (
            <Spotlight item={item} revealed={answer || !!state.answered} />
          ) : (
            <div className="daily-picture">
              <ItemPicture item={item} />
            </div>
          )}
          {gameId === "detective" ? (
            <>
              <div className="daily-wrong">🤖 “{item.falseClaim}”</div>
              <p className="daily-task">Correct the sentence. Then answer: {item.prompt}</p>
            </>
          ) : (
            <h1 className="daily-prompt">{item.prompt}</h1>
          )}
          {item.choiceNote && gameId !== "detective" && gameId !== "sentence" && (
            <p className="profession-choice-note">{item.choiceNote}</p>
          )}
          {gameId === "sentence" && (
            <SentenceBuilder
              key={`${item.key}-${state.retryCount}`}
              item={item}
              disabled={paused || help || !!state.answered}
            />
          )}
          {state.retryCount > 0 && !state.answered && (
            <p className="daily-hint" role="status">
              💪 Let's try again! Mismo turno. Cada respuesta incorrecta cuesta{" "}
              {WRONG_ANSWER_SECONDS} segundos.
            </p>
          )}
          {(hint || (gameId === "sentence" && answer)) && (
            <div className="daily-hint">
              <Lightbulb size={20} />
              <span>
                {item.hint}
                {app.settings.showSpanish && <small>{item.spanish}</small>}
              </span>
            </div>
          )}
          {(answer || state.answered) && (
            <div className="daily-answer">
              {gameId === "detective" && (
                <>
                  <small>Corrected sentence</small>
                  <p>{item.correction}</p>
                </>
              )}
              <small>
                {item.openAnswer ? "Example · Other correct answers welcome" : "Reference answer"}
              </small>
              {item.answers.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="daily-coach-controls">
        {state.answered ? (
          <>
            <span role="status">
              {state.answered === "correct"
                ? "🌟 Great answer!"
                : state.answered === "help"
                  ? game.team
                    ? "🤝 Half boost! +1 point"
                    : `🤝 Progress earned! −${HELP_ANSWER_SECONDS}s`
                  : "💛 We'll practise this again."}
            </span>
            <Button variant="panel" size="xl" onClick={retry} disabled={paused || help}>
              <RotateCcw /> {game.team ? "Corregir calificación" : "Corregir / Reintentar"}{" "}
              <kbd>R</kbd>
            </Button>
            <Button variant="game" size="xl" onClick={next}>
              {state.index + 1 === deck.cards.length ? "Completar misión" : "Siguiente turno"}
              <ChevronRight />
            </Button>
          </>
        ) : (
          <>
            <Button variant="success" size="xl" onClick={() => grade("correct")} disabled={stopped}>
              <Check /> Correcto <kbd>C</kbd>
            </Button>
            <Button variant="game" size="xl" onClick={() => grade("help")} disabled={stopped}>
              🤝 Con ayuda {!game.team && <small>−{HELP_ANSWER_SECONDS}s</small>} <kbd>H</kbd>
            </Button>
            <Button variant="panel" size="xl" onClick={retry} disabled={stopped}>
              {game.team ? <ChevronRight /> : <RotateCcw />}
              {game.team
                ? "Incorrecto / Pasar turno"
                : `Incorrecto · −${WRONG_ANSWER_SECONDS}s`}{" "}
              <kbd>R</kbd>
            </Button>
            <Button
              variant="panel"
              size="xl"
              onClick={() => setHint((v) => !v)}
              disabled={paused || help}
            >
              <Lightbulb /> Dar pista
            </Button>
            <button onClick={() => setAnswer((v) => !v)}>Ver respuesta</button>
            <button onClick={() => grade("skip")} disabled={stopped}>
              Pasar por ahora
            </button>
          </>
        )}
      </div>
      <p className="daily-play-foot">
        {deck.recycled ? "Repaso: algunas actividades ya aparecieron en esta clase. " : ""}El coach
        valida la respuesta oral.{" "}
        {game.team
          ? "Correcto: 2 puntos · Con ayuda: 1 · Incorrecto: 0 y siguiente pregunta para el otro equipo."
          : `Incorrecto: −${WRONG_ANSWER_SECONDS}s. Con ayuda: avanza y cuesta ${HELP_ANSWER_SECONDS}s. Las pistas son gratis. Corregir la calificación devuelve su descuento de ayuda.`}
      </p>
      {(paused || help) && (
        <div
          className="daily-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={help ? "Ayuda" : "Pausa"}
        >
          <div>
            <h2>{help ? "Coach controls" : "Take a breath!"}</h2>
            <p>{game.rule}</p>
            <p>
              C · Correcto &nbsp; H · Con ayuda
              <br />R ·{" "}
              {game.team ? "Incorrecto / Pasar turno" : `Incorrecto · −${WRONG_ANSWER_SECONDS}s`}
              <br />A · Respuesta &nbsp; → · Siguiente
              <br />
              Espacio · Pausa &nbsp; ? · Ayuda
            </p>
            <p>
              {game.team ? (
                "Incorrecto suma 0 puntos y pasa directamente a la siguiente pregunta para el otro equipo. Gana quien tenga más puntos. Antes de avanzar, puedes corregir una calificación accidental."
              ) : (
                <>
                  Incorrecto descuenta {WRONG_ANSWER_SECONDS} segundos y conserva la pregunta y el
                  estudiante. Al llegar a cero sin completar el objetivo, la misión se pierde. Con
                  ayuda completa el objetivo pero cuesta {HELP_ANSWER_SECONDS} segundos. Corregir /
                  Reintentar deshace la calificación y devuelve ese descuento. Puedes dar una pista
                  por separado. Acepta respuestas equivalentes correctas.
                </>
              )}
            </p>
            <Button
              autoFocus
              variant="game"
              size="xl"
              onClick={() => {
                setPaused(false);
                setHelp(false);
              }}
            >
              Continuar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Spotlight({ item, revealed }: { item: DailyCard; revealed: boolean }) {
  const [windows, setWindows] = useState<number[]>([]);
  return (
    <div className="spotlight-frame">
      <div className="daily-picture">
        <ItemPicture item={item} />
      </div>
      <div className="spotlight-curtain">
        {Array.from({ length: 6 }, (_, i) => (
          <button
            key={i}
            disabled={revealed || windows.includes(i)}
            className={revealed || windows.includes(i) ? "open" : ""}
            aria-label={`Reveal window ${i + 1}`}
            onClick={() => setWindows((w) => [...w, i])}
          >
            {!revealed && !windows.includes(i) ? i + 1 : ""}
          </button>
        ))}
      </div>
      <span>Coach: click a window to reveal a clue</span>
    </div>
  );
}

function SentenceBuilder({ item, disabled }: { item: DailyCard; disabled: boolean }) {
  const words = useMemo(
    () => shuffle(item.answers[0]!.split(" ").map((text, id) => ({ text, id }))),
    [item],
  );
  const [selected, setSelected] = useState<number[]>([]);
  return (
    <div className="sentence-builder">
      <div className="sentence-answer" aria-live="polite">
        {selected.length
          ? selected.map((id) => words.find((w) => w.id === id)!.text).join(" ")
          : "Your sentence goes here…"}
      </div>
      <div className="sentence-words">
        {words.map((w) => (
          <button
            key={w.id}
            disabled={disabled || selected.includes(w.id)}
            onClick={() => setSelected((v) => [...v, w.id])}
          >
            {w.text}
          </button>
        ))}
        <button disabled={disabled} aria-label="Reset sentence" onClick={() => setSelected([])}>
          <RotateCcw size={19} />
        </button>
      </div>
    </div>
  );
}
