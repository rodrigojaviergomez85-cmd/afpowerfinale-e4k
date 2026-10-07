import { useState } from "react";
import { PILOT_LESSONS } from "@/data/content";
import { weekGames, weekPath, lessonPath } from "@/lib/weekly-publication";
import { CopyLink } from "./WeeklyLinks";
export function DailyLibrary({ week = 4 }: { week?: number }) {
  const [notice, setNotice] = useState("");
  const lessons = PILOT_LESSONS.filter((l) => l.week === week);
  function download() {
    const rows = [
      ["Semana", "Día", "Actividad", "Enlace"],
      [String(week), "", "Semana completa", new URL(weekPath(week), location.origin).href],
    ];
    for (const l of lessons) {
      rows.push([
        String(week),
        String(l.day),
        "Clase completa",
        new URL(lessonPath(l.id), location.origin).href,
      ]);
      for (const g of weekGames(l))
        rows.push([String(week), String(l.day), g.name, new URL(g.path, location.origin).href]);
    }
    const csv =
      "\uFEFF" +
      rows.map((row) => row.map((v) => '"' + v.replaceAll('"', '""') + '"').join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `prezi-nivel-2-semana-${week}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("Archivo de enlaces descargado.");
  }
  return (
    <div className="daily-page">
      <header className="daily-header">
        <a className="daily-brand" href="/">
          AF <b>Power Finale</b>
        </a>
        <span>Kids Super Intensivo · Nivel 2</span>
      </header>
      <main className="daily-main">
        <section className="daily-hero">
          <div>
            <p className="daily-date">TU SEMANA DE AVENTURAS</p>
            <h1>
              Semana {week}
              <br />
              <em>{week === 4 ? "Shapes & review" : "Dream jobs"}</em>
            </h1>
            <p className="daily-focus">Cinco días. Dos juegos por día. Una razón para hablar.</p>
            <p className="daily-caption">
              8–13 participantes · El coach comparte pantalla · Sin cuentas para los niños
            </p>
          </div>
          <div className="daily-library-art" aria-hidden="true">
            <span>{week === 4 ? "🔷" : "🧑‍🚀"}</span>
            <span>✦</span>
            <span>{week === 4 ? "⭐" : "🩺"}</span>
          </div>
        </section>
        <nav className="weekly-actions" aria-label="Semanas">
          {[4, 5].map((w) => (
            <a key={w} href={weekPath(w)} aria-current={week === w ? "page" : undefined}>
              Semana {w}
            </a>
          ))}
        </nav>
        <section className="daily-prezi">
          <div>
            <h2>Una semana, un enlace para Prezi.</h2>
            <p>
              Abre esta semana con su contenido ya seleccionado. También puedes compartir un día o
              un juego.
            </p>
          </div>
          <CopyLink path={weekPath(week)} label="Copiar enlace de la semana" />
          <button onClick={download}>Descargar enlaces de esta semana</button>
        </section>
        <div className="weekly-days">
          {lessons.map((l) => (
            <section className="weekly-day" key={l.id}>
              <header>
                <div>
                  <span className="daily-eyebrow">
                    DÍA 0{l.day}
                    {l.evaluation ? " · REPASO OPCIONAL" : ""}
                  </span>
                  <h2>{l.topic}</h2>
                  <p>{l.focus}</p>
                </div>
                <div className="weekly-actions">
                  <a href={lessonPath(l.id)}>Abrir día →</a>
                  <CopyLink path={lessonPath(l.id)} label="Copiar día" />
                </div>
              </header>
              <div className="weekly-game-grid">
                {weekGames(l).map((g) => (
                  <article key={g.id}>
                    <span className="weekly-icon" aria-hidden="true">
                      {g.icon}
                    </span>
                    <div>
                      <h3>{g.name}</h3>
                      <p>{g.goal}</p>
                      <div className="weekly-actions">
                        <a href={g.path}>Jugar →</a>
                        <CopyLink path={g.path} label="Copiar juego" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        {notice && <p role="status">{notice}</p>}
        <footer className="daily-footer">
          Nivel 2 · Semana {week} ·{" "}
          {week === 4
            ? "Repaso de semanas anteriores identificado en las actividades."
            : "Contenido de profesiones del currículo."}
        </footer>
      </main>
    </div>
  );
}
