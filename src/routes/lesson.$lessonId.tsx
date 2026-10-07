import { ApprovedDay } from "@/components/engine/WeeklyLinks";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Users, RotateCcw } from "lucide-react";
import { findLesson, lessonUrl, useDailySession } from "@/lib/daily-session";
import { PILOT_GAMES, pilotGamePath } from "@/lib/pilot-games";
import { useApp } from "@/lib/store";
import { FullscreenButton, MuteButton } from "@/components/engine/controls";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/lesson/$lessonId")({ ssr: false, component: LessonPage });
function LessonPage() {
  const { lessonId } = Route.useParams();
  const lesson = findLesson(lessonId);
  const session = useDailySession();
  const app = useApp();
  const [names, setNames] = useState(app.roster.map((p) => p.name).join(", "));
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    if (!lesson) return;
    session.ensure(lesson.id);
    app.setSetup({
      course: lesson.course,
      level: lesson.level,
      week: lesson.week,
      day: lesson.day,
    });
    // Stable lesson identity, never reset a session on a score change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id]);
  if (!lesson)
    return (
      <div className="daily-empty">
        <h1>Lección no disponible</h1>
        <p>Este piloto incluye nivel 2, semanas 4 y 5.</p>
        <Link to="/">Elegir una lección</Link>
      </div>
    );
  if (lesson.week === 4) return <ApprovedDay lessonId={lesson.id} />;
  const results = session.lesson === lesson.id ? session.results : [];
  const ordered = [
    ...lesson.suggested.map((id) => PILOT_GAMES.find((g) => g.id === id)!),
    ...PILOT_GAMES.filter((g) => !lesson.suggested.includes(g.id)),
  ];
  ordered.splice(2);
  const next = ordered.find((g) => !results.some((r) => r.game === g.id));
  const saveNames = () => {
    const entries = names
      .split(/[,\n]/)
      .map((n) => n.trim())
      .filter(Boolean);
    if (entries.length > 13) {
      setNotice("Usa hasta 13 nombres o apodos para este grupo.");
      return;
    }
    app.setSetup({
      roster: entries.map(
        (name, i) =>
          app.roster.find((p) => p.name === name) ?? {
            id: crypto.randomUUID() + i,
            name,
            quiet: false,
            turns: 0,
            points: 0,
          },
      ),
    });
    setEditing(false);
    setNotice("");
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(new URL(lessonUrl(lesson.id), location.origin).href);
      setCopied(true);
    } catch {
      setNotice("Copia la dirección de esta página desde el navegador.");
    }
  };
  return (
    <div className="daily-page" data-calm={app.settings.calm}>
      <header className="daily-header">
        <Link to="/" className="daily-back">
          <ArrowLeft size={18} /> Lecciones
        </Link>
        <span className="daily-brand">
          AF <b>Power Finale</b>
        </span>
        <div className="daily-header-tools">
          <MuteButton />
          <FullscreenButton />
        </div>
      </header>
      <main className="daily-main">
        <div className="daily-eyebrow">
          KIDS SUPER INTENSIVO <span>8–12 YEARS · NIVEL 2</span>
        </div>
        <section className="daily-hero">
          <div>
            <p className="daily-date">
              SEMANA {lesson.week} <span>/</span> DÍA {lesson.day}
            </p>
            <h1>
              {lesson.topic}
              <span className="daily-dot">.</span>
            </h1>
            <p className="daily-focus">{lesson.focus}</p>
            <p className="daily-caption">Una lección. Distintas maneras de jugar.</p>
          </div>
          <div className="daily-hero-art" aria-hidden="true">
            {lesson.week === 4 ? (
              <>
                <span>●</span>
                <span>▲</span>
                <span>★</span>
              </>
            ) : (
              <>
                <span>🧑‍🚀</span>
                <span>🧑‍🚒</span>
                <span>🧑‍⚕️</span>
              </>
            )}
          </div>
        </section>
        {lesson.evaluation && (
          <div className="daily-notice">
            Día de evaluación · Los juegos son repaso opcional. No sustituyen ni califican el examen
            oficial.
          </div>
        )}
        <div className="daily-session-bar">
          <span>
            <b>{results.length}</b> juegos en esta clase <span className="daily-separator">·</span>{" "}
            {results.reduce((n, r) => n + r.correct + r.helped, 0)} respuestas logradas
          </span>
          <button onClick={copy}>
            <Copy size={16} />
            {copied ? "Enlace copiado" : "Copiar enlace para Prezi"}
          </button>
        </div>
        <section aria-label="Juegos sugeridos">
          <div className="daily-section-title">
            <h2>Tu ruta de hoy</h2>
            <span>Elige 1 o 2 · Puedes terminar cuando necesites</span>
          </div>
          <div className="daily-game-grid">
            {ordered.slice(0, 2).map((g, i) => {
              const done = results.some((r) => r.game === g.id);
              return (
                <Link
                  key={g.id}
                  to={pilotGamePath(g.id)}
                  search={{ lesson: lesson.id }}
                  className="daily-game-card"
                  style={{ "--game-color": g.color } as React.CSSProperties}
                >
                  <div className="daily-card-top">
                    <span className="daily-step">0{i + 1}</span>
                    <span>
                      {done ? (
                        <>
                          <Check size={14} /> Jugado
                        </>
                      ) : (
                        `${g.minutes} MIN`
                      )}
                    </span>
                  </div>
                  <div className="daily-game-icon" aria-hidden="true">
                    {g.icon}
                  </div>
                  <p className="daily-category">{g.category}</p>
                  <h3>{g.name}</h3>
                  <p>{g.rule}</p>
                  <div className="daily-card-bottom">
                    <b>{done ? "Volver a jugar" : next?.id === g.id ? "Empezar aquí" : "Jugar"}</b>
                    <ArrowRight size={22} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="daily-coach">
          <div>
            <h2>
              <Users size={21} /> Tu grupo
            </h2>
            <p>
              {app.roster.length
                ? `${app.roster.length} participantes · Turnos equilibrados entre juegos`
                : "Sin registro para los niños. Comparte tu pantalla y juega."}
            </p>
            <small>Los nombres o apodos se guardan solo en este navegador.</small>
          </div>
          <Button variant="panel" onClick={() => setEditing((v) => !v)}>
            {editing ? "Cerrar" : app.roster.length ? "Editar grupo" : "Añadir nombres (opcional)"}
          </Button>
          {editing && (
            <div className="daily-roster-edit">
              <label htmlFor="group-names">Nombres o apodos separados por comas · máximo 13</label>
              <textarea
                id="group-names"
                value={names}
                onChange={(e) => setNames(e.target.value)}
                placeholder="Ana, Leo, Dani…"
              />
              <Button variant="game" onClick={saveNames}>
                Guardar grupo
              </Button>
              <div className="daily-quiet">
                {app.roster.map((p) => (
                  <label key={p.id}>
                    <input
                      type="checkbox"
                      checked={p.quiet}
                      onChange={(e) =>
                        app.setSetup({
                          roster: app.roster.map((x) =>
                            x.id === p.id ? { ...x, quiet: e.target.checked } : x,
                          ),
                        })
                      }
                    />
                    {p.name} · necesita ánimo
                  </label>
                ))}
              </div>
            </div>
          )}
        </section>
        <div className="daily-footer">
          <p>
            El coach escucha y valida. Se aceptan variantes correctas.
            <br />
            Correcto · Con ayuda · Intentar otra vez
          </p>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "¿Empezar una clase nueva y borrar los nombres y el progreso de este grupo?",
                )
              ) {
                session.reset(lesson.id);
                app.setSetup({ roster: [] });
                setNames("");
              }
            }}
          >
            <RotateCcw size={16} /> Nueva clase
          </button>
        </div>
        {notice && <p role="status">{notice}</p>}
      </main>
    </div>
  );
}
