import { useState } from "react";
import { PILOT_LESSONS } from "@/data/content";
import { weekGames, weekPath, lessonPath } from "@/lib/weekly-publication";
import { CopyLink } from "./WeeklyLinks";
export function MasterLibrary() {
  const courses = [...new Set(PILOT_LESSONS.map((l) => l.course))];
  const [course, setCourse] = useState(courses[0] ?? ""),
    [level, setLevel] = useState(2),
    [week, setWeek] = useState("all");
  const levels = [
    ...new Set(PILOT_LESSONS.filter((l) => l.course === course).map((l) => l.level)),
  ].sort((a, b) => a - b);
  const lessons = PILOT_LESSONS.filter((l) => l.course === course && l.level === level);
  const weeks = [...new Set(lessons.map((l) => l.week))].sort((a, b) => a - b);
  const shown = lessons.filter((l) => week === "all" || String(l.week) === week);
  return (
    <div className="daily-page">
      <header className="daily-header">
        <span className="daily-brand">
          AF <b>Power Finale</b>
        </span>
        <span>VISTA MAESTRA · CONTENIDOS</span>
      </header>
      <main className="daily-main">
        <section className="daily-hero">
          <div>
            <p className="daily-date">TU BIBLIOTECA DE JUEGOS</p>
            <h1>
              Todo el curso.
              <br />
              <em>Una sola vista.</em>
            </h1>
            <p className="daily-focus">
              Revisa cada nivel, semana y día. Abre los juegos y prepara los enlaces de Prezi.
            </p>
          </div>
        </section>
        <section className="master-filters" aria-label="Filtros del catálogo">
          <label>
            Curso
            <select
              aria-label="Curso"
              value={course}
              onChange={(e) => {
                const value = e.target.value;
                setCourse(value);
                setLevel(PILOT_LESSONS.find((l) => l.course === value)?.level ?? 2);
                setWeek("all");
              }}
            >
              {courses.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label>
            Nivel
            <select
              aria-label="Nivel"
              value={level}
              onChange={(e) => {
                setLevel(Number(e.target.value));
                setWeek("all");
              }}
            >
              {levels.map((n) => (
                <option key={n} value={n}>
                  Nivel {n}
                </option>
              ))}
            </select>
          </label>
          <label>
            Semana
            <select aria-label="Semana" value={week} onChange={(e) => setWeek(e.target.value)}>
              <option value="all">Todas las semanas</option>
              {weeks.map((w) => (
                <option key={w} value={w}>
                  Semana {w}
                </option>
              ))}
            </select>
          </label>
        </section>
        <p>
          Los filtros muestran los niveles y semanas con contenido disponible. Máximo dos juegos por
          día.
        </p>
        <div className="master-summary">
          <div>
            <b>{new Set(shown.map((l) => l.week)).size}</b>semanas
          </div>
          <div>
            <b>{shown.length}</b>días
          </div>
          <div>
            <b>{shown.reduce((n, l) => n + weekGames(l).length, 0)}</b>actividades
          </div>
        </div>
        {weeks
          .filter((w) => week === "all" || String(w) === week)
          .map((w) => (
            <section className="master-week" key={w}>
              <h2>
                Nivel {level} · Semana {w} · {w === 4 ? "Shapes & review" : "Dream jobs"}
              </h2>
              <span className="master-status">
                {w === 4
                  ? "Versión revisada · selección aprobada"
                  : "Versión anterior · revisión visual pendiente"}
              </span>
              <div className="weekly-actions">
                <a href={weekPath(w)}>Abrir vista de la semana →</a>
                <CopyLink path={weekPath(w)} label="Copiar semana para Prezi" />
              </div>
              <details open>
                <summary>Ver días y juegos</summary>
                <div className="master-scroll">
                  <table className="master-table">
                    <thead>
                      <tr>
                        <th>Día / objetivo</th>
                        <th>Juego 1</th>
                        <th>Juego 2</th>
                        <th>Enlace del día</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shown
                        .filter((l) => l.week === w)
                        .map((l) => (
                          <tr key={l.id}>
                            <td>
                              <strong>
                                Día {l.day} · {l.topic}
                              </strong>
                              <p>{l.focus}</p>
                              {l.evaluation && <small>Repaso opcional</small>}
                            </td>
                            {weekGames(l).map((g) => (
                              <td key={g.id}>
                                <strong>
                                  {g.icon} {g.name}
                                </strong>
                                <p>{g.goal}</p>
                                <div className="weekly-actions">
                                  <a href={g.path}>Abrir</a>
                                  <CopyLink path={g.path} label="Copiar juego" />
                                </div>
                              </td>
                            ))}
                            <td>
                              <div className="weekly-actions">
                                <a href={lessonPath(l.id)}>Abrir día</a>
                                <CopyLink path={lessonPath(l.id)} label="Copiar día" />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </details>
            </section>
          ))}
        <footer className="daily-footer">
          Vista de consulta y enlaces. La edición de contenidos y las publicaciones se mantienen en
          el repositorio.
        </footer>
      </main>
    </div>
  );
}
