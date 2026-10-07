import { useEffect, useState } from "react";
import { PILOT_LESSONS } from "@/data/content";
import { weekGames, weekPath, lessonPath } from "@/lib/weekly-publication";
export function CopyLink({ path, label }: { path: string; label: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [copied, setCopied] = useState(false),
    [fallback, setFallback] = useState("");
  async function copy() {
    const url = new URL(path, location.origin).href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setFallback("");
    } catch {
      setFallback(url);
    }
  }
  return (
    <span className="weekly-copy">
      <button disabled={!ready} onClick={copy}>
        {copied ? "✓ Enlace copiado" : label}
      </button>
      {copied && (
        <span className="sr-only" role="status">
          Enlace copiado
        </span>
      )}
      {fallback && (
        <label>
          Selecciona y copia el enlace
          <input
            aria-label="Enlace para Prezi"
            readOnly
            value={fallback}
            onFocus={(e) => e.target.select()}
          />
        </label>
      )}
    </span>
  );
}
export function ApprovedDay({ lessonId }: { lessonId: string }) {
  const lesson = PILOT_LESSONS.find((l) => l.id === lessonId)!;
  return (
    <div className="daily-page">
      <header className="daily-header">
        <a href={weekPath(lesson.week)}>← Semana {lesson.week}</a>
        <span className="daily-brand">
          AF <b>Power Finale</b>
        </span>
        <CopyLink path={lessonPath(lessonId)} label="Copiar día para Prezi" />
      </header>
      <main className="daily-main">
        <section className="daily-hero">
          <div>
            <p className="daily-date">
              NIVEL 2 · SEMANA {lesson.week} · DÍA {lesson.day}
            </p>
            <h1>{lesson.topic}</h1>
            <p className="daily-focus">{lesson.focus}</p>
            <p>
              Elige uno o los dos juegos. Los turnos continúan entre las misiones de esta semana.
            </p>
          </div>
        </section>
        {lesson.evaluation && (
          <p className="daily-notice">
            Repaso opcional durante la evaluación. No reemplaza el examen.
          </p>
        )}
        <div className="weekly-game-grid">
          {weekGames(lesson).map((g, i) => (
            <article key={g.id}>
              <span className="weekly-icon" aria-hidden="true">
                {g.icon}
              </span>
              <div>
                <p>JUEGO 0{i + 1}</p>
                <h2>{g.name}</h2>
                <p>{g.goal}</p>
                <div className="weekly-actions">
                  <a href={g.path}>Jugar →</a>
                  <CopyLink path={g.path} label="Copiar juego" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
