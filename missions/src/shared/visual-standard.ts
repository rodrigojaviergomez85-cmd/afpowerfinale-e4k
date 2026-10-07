// Visual contract v1. Learning content and each game's scoring remain independent.
export const visualStandard = {
 version: '1.4',
 targetViewports: ['1366 × 768', '1920 × 1080'],
 colors: { background: '#101b2d', panel: '#20344a', paper: '#fff4dc', ink: '#243044', success: '#9ce6c6', warning: '#ffdc89', danger: '#ffb1aa' },
 type: { promptMin: 30, optionMin: 24, timerMin: 64, coachMin: 18 },
 motion: { answerMs: 600, transitionMaxMs: 1800, endingMaxMs: 3600 },
 rules: [
  ['Idioma', 'Todo el juego se presenta en inglés: instrucciones, pistas, botones, estados, accesibilidad y cierres. En niveles iniciales usar apoyo visual e inglés sencillo. La traducción español-inglés queda fuera del catálogo estándar.'],
  ['Progresión', 'La currícula define vocabulario y estructuras permitidas. Aumentar comprensión, extensión y autonomía según el nivel: describir; después explicar; después justificar, inferir y responder a otra perspectiva. No aumentar dificultad solo restando tiempo ni introducir gramática futura.'],
  ['Perfiles', 'Foundation, Developing y Advanced son muestras de complejidad, no equivalencias automáticas con niveles del curso. Cada lección necesita una asignación curricular revisada.'],
  ['Estructura', 'Encabezado con logo y controles; participante; reloj y vidas centrados dentro de la parte superior del escenario; reto y controles del coach. Misma posición en todos los juegos.'],
  ['Inicio', 'Objetivo, condición de victoria, consecuencias, duración y participantes antes de comenzar.'],
  ['Partida', 'Una instrucción principal. Dos a cuatro opciones. Una sola escena; el reto forma parte de ella.'],
  ['Tipografía', 'Nunito o sistema sans serif. Consigna ≥30 px, opciones ≥24 px, reloj ≥64 px y controles ≥18 px en las dos resoluciones objetivo.'],
  ['Arte', 'Ilustración vectorial de formas redondeadas, contornos consistentes y sombras suaves. El logo conserva sus colores y proporciones. No mezclar emojis de sistema con personajes ilustrados.'],
  ['Color', 'Verde + check para acierto, coral + cruz para error, ámbar + texto para ayuda o urgencia. El color nunca comunica el resultado por sí solo.'],
  ['Interacción', 'En opción múltiple, el coach escucha primero y pulsa la respuesta del estudiante: un solo clic califica, registra el turno oral y avanza tras mostrar el resultado. El error aplica la penalización sin sumar progreso. Bloquear clics repetidos durante la transición. Las respuestas abiertas conservan la evaluación del coach.'],
  ['Participación', 'Nombre actual y siguiente siempre visibles. Separar quién habló de quién acertó. Los reintentos no cuentan como nuevos participantes.'],
  ['Consecuencias', 'El motor del juego define puntos, vidas o tiempo. La interfaz los representa sin cambiar las reglas aprobadas. No acumular penalizaciones por decoración.'],
  ['Animación', 'Respuesta visible durante 600 ms; transiciones de hasta 1,8 s y finales de hasta 3,6 s. Movimiento ambiental suave y consecuencias visibles: cruzar, reparar, mezclar o servir. Sin destellos. Movimiento reducido conserva el estado final. Pausa detiene reloj y animaciones.'],
  ['Cierre', 'Victoria, derrota, empate y finalización anticipada tienen textos propios. Mostrar ganador cuando corresponda. No celebrar una misión incompleta como victoria.'],
  ['Sonido', 'Audio activo por defecto, habilitado con el primer clic del usuario. Acierto: campanita ascendente; error: tono descendente suave. Control de silencio visible. Efectos originales sintetizados localmente y reutilizados por los juegos.'],
  ['Rendimiento', 'SVG y CSS reutilizables; sonidos breves al interactuar. Sin video de fondo, partículas permanentes ni llamadas de IA durante el juego.'],
  ['Adaptación', 'En 1366 × 768 y 1920 × 1080 la partida debe caber sin scroll. En pantallas pequeñas permitir desplazamiento y conservar el encabezado visible.'],
  ['Contenido', 'Si una consigna no cabe, simplificarla o dividir el reto. No reducir el texto por debajo del mínimo para forzar el diseño.'],
 ],
} as const;

const esc=(text:string)=>text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function gameButton(label:string,action:string,kind='neutral',disabled=false){return `<button class="game-button ${kind}" data-action="${esc(action)}" ${disabled?'disabled':''}>${esc(label)}</button>`;}
export function gamePressure(input:{seconds:number;lives:number;paused:boolean}){
 const seconds=Math.max(0,Math.ceil(input.seconds));
 return `<div class="game-pressure"><div class="game-clock ${seconds<=30?'danger':seconds<=60?'warning':''}" role="timer" aria-label="Time remaining"><span>${input.paused?'PAUSED':'TIME LEFT'}</span><b>${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}</b></div><div class="game-lives"><span>TEAM LIVES</span><strong>${input.lives}<small>/4</small></strong><div aria-label="${input.lives} of 4 lives">${Array.from({length:4},(_,i)=>`<svg viewBox="0 0 24 26" aria-hidden="true" class="${i<input.lives?'active':''}"><path d="M12 2 2 6v7c0 5 5 9 10 11 5-2 10-6 10-11V6Z"/><path class="shield-mark" d="${i<input.lives?'m7 13 3 3 7-7':'m8 9 8 8m0-8-8 8'}"/></svg>`).join('')}</div></div></div>`;
}
export function gameHud(input:{title:string;seconds:number;lives:number;paused:boolean}){
 return `<header class="game-hud"><img src="/missions/v1/assets/english4kids-logo.png" alt="English4Kids"><div class="game-brand"><strong>${esc(input.title)}</strong><span>TEAM MISSION · LEVEL 2 / WEEK 4</span></div>${gameButton(input.paused?'Resume':'Pause','pause')}${gameButton('Full screen','fullscreen')}</header>`;
}
export function gameSpeaker(name:string,next:string,spoken:number,total:number){return `<div class="game-speaker"><div><span>YOUR TURN</span> <strong>${esc(name)}</strong></div><div>Next: <b>${esc(next)}</b></div><small>${spoken}/${total} have spoken · demo</small></div>`;}
export function gameResult(kind:'win'|'loss'|'tie'|'early',detail:string,title?:string){const copy={win:['MISSION COMPLETE','The station is powered up!'],loss:['MISSION INCOMPLETE','Let’s try another strategy.'],tie:['IT’S A TIE','Both teams finished level.'],early:['MISSION ENDED','Time to reflect on what we learned.']}[kind];return `<section class="game-result ${kind}"><p class="eyebrow">${copy[0]}</p><h1>${esc(title||copy[1])}</h1><p>${esc(detail)}</p></section>`;}
