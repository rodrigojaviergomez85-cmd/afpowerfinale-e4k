import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Copy, Settings } from "lucide-react";
import { PILOT_LESSONS } from "@/data/content";
import { FullscreenButton, MuteButton } from "./controls";
import { useApp } from "@/lib/store";
import { PILOT_GAMES, pilotGamePath } from "@/lib/pilot-games";

export function DailyLibrary() {
  const [week, setWeek] = useState(4);
  const [notice, setNotice] = useState("");
  const calm = useApp((s) => s.settings.calm);
  const copyLink = async (path: string) => {
    try {
      await navigator.clipboard.writeText(new URL(path, location.origin).href);
      setNotice("¡Enlace copiado! Ya puedes pegarlo en Prezi.");
    } catch {
      setNotice("Abre la vista previa y copia la dirección del navegador.");
    }
  };
  const downloadLinks = () => {
    const rows = [["Curso", "Nivel", "Semana", "Día", "Tema", "Actividad", "URL"]];
    for (const l of PILOT_LESSONS) {
      const base = ["Kids Super Intensive", "2", String(l.week), String(l.day), l.topic];
      rows.push([...base, "Clase completa", `${location.origin}/lesson/${l.id}`]);
      for (const g of PILOT_GAMES) {
        rows.push([...base, g.name, `${location.origin}${pilotGamePath(g.id)}?lesson=${l.id}`]);
      }
    }
    const csv =
      "\uFEFF" +
      rows.map((row) => row.map((v) => `"${v.replaceAll('"', '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "enlaces-prezi-nivel-2-semanas-4-5.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(
        PILOT_LESSONS.map(
          (l) => `Semana ${l.week} · Día ${l.day}\n${location.origin}/lesson/${l.id}`,
        ).join("\n\n"),
      );
      setNotice("Los 10 enlaces están copiados. Pégalos en tu planificación de Prezi.");
    } catch {
      setNotice("Abre una lección y copia su dirección del navegador.");
    }
  };
  return (
    <div className="daily-page" data-calm={calm}>
      <header className="daily-header">
        <span className="daily-brand">
          AF <b>Power Finale</b>
        </span>
        <div className="daily-header-tools">
          <Link to="/settings" aria-label="Ajustes">
            <Settings />
          </Link>
          <MuteButton />
          <FullscreenButton />
        </div>
      </header>
      <main className="daily-main">
        <div className="daily-eyebrow">
          COACH PLAYBOOK <span>KIDS · 8–12 YEARS</span>
        </div>
        <section className="daily-hero">
          <div>
            <p className="daily-date">PEQUEÑOS RETOS. GRANDES VOCES.</p>
            <h1>
              Today's next
              <br />
              <em>adventure.</em>
            </h1>
            <p className="daily-focus">Elige la clase. Comparte tu pantalla. Let’s play!</p>
            <p className="daily-caption">
              Hasta 3 juegos por día · 8–13 participantes · Sin cuentas para los niños
            </p>
          </div>
          <div className="daily-library-art" aria-hidden="true">
            <span>🚀</span>
            <span>✦</span>
            <span>🪐</span>
          </div>
        </section>
        <div className="daily-picker-bar">
          <div>
            <small>CURSO</small>
            <b>Kids Super Intensivo</b>
          </div>
          <div>
            <small>NIVEL</small>
            <b>02</b>
          </div>
          <div className="daily-week-tabs" role="group" aria-label="Semana">
            {[4, 5].map((w) => (
              <button key={w} aria-pressed={week === w} onClick={() => setWeek(w)}>
                Semana {w}
              </button>
            ))}
          </div>
        </div>
        <div className="daily-section-title">
          <h2>{week === 4 ? "Shapes & review" : "Dream jobs"}</h2>
          <span>Una misión para cada día</span>
        </div>
        <div className="daily-lesson-list">
          {PILOT_LESSONS.filter((l) => l.week === week).map((l) => (
            <Link key={l.id} to="/lesson/$lessonId" params={{ lessonId: l.id }}>
              <span className="daily-day-number">
                <small>DÍA</small>0{l.day}
              </span>
              <div>
                <h3>{l.topic}</h3>
                <p>{l.focus}</p>
              </div>
              <span className={l.evaluation ? "daily-review-badge" : "daily-badge"}>
                {l.evaluation ? "Repaso opcional" : "3 juegos sugeridos"}
              </span>
              <ArrowUpRight size={26} />
            </Link>
          ))}
        </div>
        <section className="daily-prezi">
          <div>
            <h2>De Prezi al juego, en un clic.</h2>
            <p>
              Cada día tiene su propio enlace. El grupo, nivel y contenido ya van seleccionados.
            </p>
          </div>
          <button onClick={copyAll}>
            <Copy size={18} /> Copiar los 10 enlaces
          </button>
        </section>
        <section
          className="daily-other"
          aria-label="Banco de enlaces para Prezi"
          id="enlaces-prezi"
        >
          <h2>Banco de enlaces para Prezi</h2>
          <p>Semana {week} · Copia la clase completa o una actividad específica.</p>
          <button onClick={downloadLinks}>Descargar todos los enlaces (CSV para Excel)</button>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", textAlign: "left", borderSpacing: "0 18px" }}>
              <thead>
                <tr>
                  <th>Día / tema</th>
                  <th>Clase completa</th>
                  <th>Juegos</th>
                </tr>
              </thead>
              <tbody>
                {PILOT_LESSONS.filter((l) => l.week === week).map((l) => (
                  <tr key={l.id}>
                    <td>
                      Día {l.day} · {l.topic}
                      {l.evaluation && <small> · Repaso opcional</small>}
                    </td>
                    <td>
                      <button onClick={() => copyLink(`/lesson/${l.id}`)}>📋 Copiar clase</button>{" "}
                      <a href={`/lesson/${l.id}`} target="_blank" rel="noreferrer">
                        Vista previa ↗
                      </a>
                    </td>
                    <td>
                      <details>
                        <summary>Ver 5 juegos</summary>
                        {PILOT_GAMES.map((g) => (
                          <p key={g.id}>
                            {g.icon} {g.name}{" "}
                            <button
                              onClick={() => copyLink(`${pilotGamePath(g.id)}?lesson=${l.id}`)}
                            >
                              Copiar
                            </button>{" "}
                            <a
                              href={`${pilotGamePath(g.id)}?lesson=${l.id}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Abrir ↗
                            </a>
                          </p>
                        ))}
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {notice && <p role="status">{notice}</p>}
        <footer className="daily-footer">
          <p>
            Piloto · Nivel 2, semanas 4 y 5<br />
            Contenido preparado a partir de Complete Curriculum.
          </p>
          <Link to="/setup" search={{ game: "demo" }}>
            Práctica libre: Demo Drill →
          </Link>
          <Link to="/setup" search={{ game: "beat-the-bomb" }}>
            Bomba clásica →
          </Link>
        </footer>
      </main>
    </div>
  );
}
