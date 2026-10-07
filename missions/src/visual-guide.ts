import {visualStandard,gameButton as button,gameHud,gamePressure,gameSpeaker,gameResult} from './shared/visual-standard';
import './shared/game-shell.css';
import './visual-guide.css';
import {animatedMission,missionThemes,type MissionTheme} from './shared/animated-mission';
import './shared/animated-mission.css';
import {createGameAudio} from './shared/game-audio';
const gameAudio=createGameAudio();
import {challengeProfiles,type ChallengeProfile} from './shared/challenge-profiles';
let profile:ChallengeProfile='foundation';

type Screen='setup'|'play'|'end'|'rules';
type Result='win'|'loss'|'tie'|'early';
const root=document.querySelector<HTMLDivElement>('#visual-guide')!;
const sampleNames=['Ana','Bruno','Sofía','Leo','Valeria','Mateo','Camila','Diego','Lucía','Daniel','Emma','Noah','Julia'];
let theme:MissionTheme='rescue';
let screen:Screen='setup',result:Result='win',format=0,pairVoice=0,progress=0,lives=4,minutes=5,group=10,remaining=300;
let paused=false,calm=matchMedia('(prefers-reduced-motion: reduce)').matches,muted=false,hint=false,selected='',answer='',feedback='',busy=false;
let spoken=new Set<number>(),pending:(()=>void)|undefined,pendingDelay=0,last=performance.now();
function cancelPending(){pending=undefined;pendingDelay=0;busy=false;}
function resetFeedback(){cancelPending();selected='';answer='';feedback='';hint=false;}
function start(){void gameAudio.unlock();resetFeedback();screen='play';format=0;pairVoice=0;progress=0;lives=4;remaining=minutes*60;spoken.clear();paused=false;last=performance.now();render();}
function finish(why:Result){cancelPending();result=why;screen='end';paused=false;render();}
function sound(ok:boolean){void gameAudio.play(ok?'correct':'incorrect');}
function sceneArt(complete=false){const state=complete?'win':screen==='end'?'loss':busy&&answer==='correct'?'success':busy&&answer==='wrong'?'mistake':'idle';const visibleProgress=complete?3:Math.min(3,progress+(busy&&answer==='correct'&&(format!==2||pairVoice===1)?1:0));return animatedMission(theme,visibleProgress,state);}
function toolbar(){return `<nav class="guide-nav" aria-label="Visual guide"><a href="/missions/v1/day.html">← Missions</a><strong>Visual standard <small>v${visualStandard.version}</small></strong><label class="guide-scene-picker">Scene<select id="scene-theme"><option value="rescue" ${theme==='rescue'?'selected':''}>Pet Rescue</option><option value="smoothie" ${theme==='smoothie'?'selected':''}>Blender</option></select></label><label class="guide-scene-picker">Challenge<select id="challenge-profile">${Object.entries(challengeProfiles).map(([key,value])=>`<option value="${key}" ${profile===key?'selected':''}>${value.label}</option>`).join('')}</select></label><div class="guide-tabs">${([['setup','Start'],['play','Play'],['end','Finish'],['rules','Author notes']] as const).map(([key,label])=>`<button data-view="${key}" aria-pressed="${screen===key}">${label}</button>`).join('')}</div><label class="calm-control"><input id="calm" type="checkbox" ${calm?'checked':''}> Reduce motion</label></nav>`;}
function sceneStatus(){return `<div class="scene-status">${gamePressure({seconds:remaining,lives,paused})}</div>`;}
function setup(){return `<main class="game-scene setup-scene">${sceneStatus()}${sceneArt()}<section class="setup-content"><p class="eyebrow">START · VISUAL DEMO</p><h1>${missionThemes[theme].intro}</h1><p>${missionThemes[theme].goal}</p><div class="setup-rules"><span><b>4 lives</b> An incorrect answer costs one life.</span><span><b>Help</b> Move forward at a cost of 5 seconds.</span><span><b>Win</b> Complete three stages before time runs out.</span></div><div class="setup-fields"><label>Time limit<select id="minutes">${[3,5,8,10,15].map(n=>`<option value="${n}" ${n===minutes?'selected':''}>${n} minutes</option>`).join('')}</select></label><label>Demo participants<select id="group">${[8,10,13].map(n=>`<option value="${n}" ${n===group?'selected':''}>${n} students</option>`).join('')}</select></label></div>${button('Try the mission','start','success')}<small>${challengeProfiles[profile].label}: ${challengeProfiles[profile].output}</small><small>Interface demo. No real student progress is recorded.</small></section></main>`;}
function shapes(){return '<svg class="shape-scene" viewBox="0 0 150 52" role="img" aria-label="Two blue circles"><circle cx="42" cy="26" r="21" fill="#2977b0" stroke="#163852" stroke-width="4"/><circle cx="108" cy="26" r="21" fill="#2977b0" stroke="#163852" stroke-width="4"/></svg>';}
function task(){
 const c=challengeProfiles[profile];
 let body='';
 if(format===0)body=`<p class="eyebrow">CHOOSE THE MESSAGE</p>${c.showShapes?shapes():`<p class="task-context">${c.context}</p>`}<h1>${c.choicePrompt}</h1><p class="choice-oral">${c.oral}</p><div class="game-options">${c.options.map((text,i)=>`<button class="game-option ${selected===String(i)?answer:''}" data-option="${i}" ${busy||answer==='correct'?'disabled':''}>${text}</button>`).join('')}</div>`;
 if(format===1)body=`<p class="eyebrow">REPAIR THE MESSAGE</p><h1>Find the mistake. Say it correctly.</h1><p class="sentence-large">${answer==='correct'?c.repaired:c.repair}</p>`;
 if(format===2)body=`<p class="eyebrow">ASK & ANSWER</p><p class="pair-role">${pairVoice===0?'Sofía speaks · Leo listens':'Leo responds · Sofía listens'}</p>${c.showShapes?shapes():profile==='advanced'?`<p class="task-context">${c.context}</p>`:''}<h1>${c.pair[pairVoice]}</h1>`;
 return `<section class="game-task" data-profile="${profile}">${body}<div class="answer-status ${answer==='wrong'?'wrong':''}" role="status">${feedback||''}</div>${hint?`<p class="hint">${c.hints[format===2?2+pairVoice:format]}</p>`:''}</section>`;
}
function coach(){return `<footer class="game-coach"><span>${format===0?'Listen first. Click the student’s answer to check it and move on.':'The coach checks the spoken answer.'}</span>${format!==0?button('✓ Correct','correct','success',busy)+button('With help −5 s','help','warning',busy)+button('✕ Incorrect','wrong','danger',busy):''}${button('Hint','hint','neutral',busy)}${button(muted?'Sound off · Enable':'Sound on · Mute','sound','neutral')}</footer>`;}
function play(){const index=format===0?0:format===1?1:pairVoice===0?2:3;return `${gameSpeaker(sampleNames[index],sampleNames[(index+1)%group],spoken.size,group)}<main class="game-scene">${sceneStatus()}${sceneArt()}${task()}</main>${coach()}`;}
function ending(){return `<main class="game-scene end-scene">${sceneStatus()}${sceneArt(result==='win')}<div class="ending-content">${gameResult(result,result==='win'?missionThemes[theme].detail:result==='tie'?'Team-game example: show both team names and scores.':result==='early'?'The game ended before the objective was complete.':'Review the clues and try another strategy together.',result==='win'?missionThemes[theme].win:undefined)}<div class="ending-stats"><span><b>${progress}/3</b>${missionThemes[theme].unit}</span><span><b>${spoken.size}/${group}</b>demo speakers</span></div>${button('Try again','start','success')}</div></main><div class="ending-variants"><span>Compare endings:</span>${(['win','loss','tie','early'] as Result[]).map((key,i)=>`<button data-result="${key}" aria-pressed="${result===key}">${['Win','Loss','Tie · teams','Ended early'][i]}</button>`).join('')}</div>`;}
function rules(){return `<main class="standard-doc"><p>REFERENCIA DE IMPLEMENTACIÓN · v${visualStandard.version}</p><h1>Una base visual para los ocho juegos.</h1><p>Estas reglas unifican los controles y la legibilidad. Las escenas conservan su movimiento: los personajes cruzan, el puente se repara y la licuadora mezcla y sirve. Cada juego mantiene su currícula y sus reglas.</p><div class="standard-swatches">${Object.entries(visualStandard.colors).map(([name,color])=>`<div><i style="background:${color}"></i><b>${name}</b><small>${color}</small></div>`).join('')}</div><table><thead><tr><th>Área</th><th>Estándar</th></tr></thead><tbody>${visualStandard.rules.map(([area,rule])=>`<tr><th>${area}</th><td>${rule}</td></tr>`).join('')}</tbody></table><section><h2>Complejidad progresiva</h2><p>Las tres muestras del selector no son niveles asignados a la currícula. Foundation usa imágenes y frases breves; Developing exige razones y detalles; Advanced incorpora restricciones, decisiones y respuesta a otras perspectivas. Cada lección de producción debe seleccionar estructuras y vocabulario ya estudiados. Avanzar no significa solamente responder más rápido.</p><p>Las pistas, controles, instrucciones y resultados de los juegos están en inglés. Los apoyos iniciales son imágenes y modelos breves. La traducción español-inglés deja de ser un formato estándar. Estas notas para autores permanecen fuera de la partida.</p><h2>Qué cambia en cada juego</h2><p>Bomba: mecha y desactivación. Cohetes: posición y llegada. Rescate: obstáculos y personajes. Laboratorio: ingredientes y entrega. Comparten encabezado, tipografía, tarjetas de retos, controles y estructura de cierre.</p><h2>Comprobación antes de publicar</h2><p>Revisar las tres pantallas a 1366 × 768 y 1920 × 1080; probar selección, corrección y conversación; comprobar pausa, errores, ayuda, movimientos reducidos y cierre. Los nombres largos y las instrucciones extensas también deben caber.</p><h2>Alcance actual</h2><p>Esta guía usa los primeros componentes compartidos. Las vistas previas anteriores todavía conservan su implementación; su migración será gradual. Los ocho juegos no están implementados por esta guía.</p></section></main>`;}
function render(){root.innerHTML=toolbar()+(screen==='rules'?rules():`<div class="game-shell" data-screen="${screen}" data-paused="${paused}" data-calm="${calm}">${gameHud({title:missionThemes[theme].title,seconds:remaining,lives,paused})}${screen==='setup'?setup():screen==='play'?play():ending()}${paused?`<div class="guide-pause"><section><p class="eyebrow">MISSION PAUSED</p><h1>Take a moment, team.</h1><p>The timer is stopped.</p>${button('Resume','pause','success')}${button('End mission','finish')}</section></div>`:''}</div>`);}
function advance(earned:boolean){
 busy=false;
 if(format===2&&pairVoice===0){pairVoice=1;}
 else{
  if(earned)progress++;
  if(format===2){finish(progress===3?'win':'loss');return;}
  format++;
 }
 resetFeedback();render();
}
function completeVoice(help=false){
 if(help){remaining=Math.max(0,remaining-5);if(!remaining){finish('loss');return;}}
 spoken.add(format===0?0:format===1?1:pairVoice===0?2:3);
 sound(true);answer='correct';
 feedback=format===0?'✓ Correct · Next challenge':format===1?'✓ '+challengeProfiles[profile].repaired:help?'✓ With help · −5 seconds':'✓ Message received';
 busy=true;render();pendingDelay=calm?visualStandard.motion.answerMs:1400;
 pending=()=>advance(true);
}
function lose(moveOn=false){
 lives--;answer='wrong';
 if(moveOn)spoken.add(0);
 feedback=moveOn?'✕ −1 life · Next challenge':'✕ −1 life · Try again';
 sound(false);
 if(lives===0){finish('loss');return;}
 busy=true;render();pendingDelay=moveOn&&!calm?1400:visualStandard.motion.answerMs;
 pending=()=>{if(moveOn)advance(false);else{busy=false;render();}};
}
root.addEventListener('click',event=>{
 const target=(event.target as HTMLElement).closest<HTMLButtonElement>('button');if(!target||target.disabled)return;
 if(target.dataset.view){resetFeedback();paused=false;screen=target.dataset.view as Screen;if(screen==='play'){start();return;}if(screen==='end'){result='win';progress=3;}render();return;}
 if(target.dataset.result){result=target.dataset.result as Result;progress=result==='win'?3:1;render();return;}
 const act=target.dataset.action;
 if(act==='start'){start();return;}if(act==='fullscreen'){if(document.fullscreenElement)void document.exitFullscreen();else void root.requestFullscreen().catch(()=>{});return;}
 if(act==='pause'&&screen==='play'){paused=!paused;last=performance.now();render();return;}
 if(act==='sound'){muted=!muted;gameAudio.setMuted(muted);if(!muted)sound(true);render();return;}
 if(paused){if(act==='finish')finish('early');return;}if(screen!=='play'||busy)return;
 if(act==='hint'){hint=!hint;render();return;}
 if(target.dataset.option!==undefined){selected=target.dataset.option;if(selected==='1')completeVoice();else lose(true);return;}
 if(act==='wrong'){lose();return;}if(act==='correct'||act==='help')completeVoice(act==='help');
});
root.addEventListener('change',event=>{const target=event.target as HTMLInputElement;if(target.id==='challenge-profile'){profile=target.value as ChallengeProfile;if(screen==='play'){start();return;}render();}if(target.id==='scene-theme'){theme=target.value as MissionTheme;if(screen==='play'){start();return;}render();}if(target.id==='calm'){calm=target.checked;render();}if(target.id==='minutes'){minutes=Number(target.value);remaining=minutes*60;render();}if(target.id==='group'){group=Number(target.value);render();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&screen==='play'&&!paused){paused=true;render();}});
setInterval(()=>{const now=performance.now(),delta=(now-last)/1000;last=now;if(screen!=='play'||paused)return;if(busy){pendingDelay-=delta*1000;if(pendingDelay<=0&&pending){const next=pending;pending=undefined;next();}return;}remaining=Math.max(0,remaining-delta);if(!remaining){finish('loss');return;}const clock=root.querySelector('.game-clock');if(clock){const n=Math.ceil(remaining);clock.classList.toggle('warning',n<=60&&n>30);clock.classList.toggle('danger',n<=30);clock.querySelector('b')!.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;}},100);
render();
