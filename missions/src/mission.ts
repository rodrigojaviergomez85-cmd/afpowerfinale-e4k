import {memoryActionArt} from './shared/memory-action-art';
import {explorerScene,explorerModule,EXPLORER_FINALE_MS} from './shared/explorer-workshop';
import './shared/explorer-workshop.css';
import {alienCheckpoint} from './shared/alien-checkpoint';
import './shared/alien-checkpoint.css';
import {runRobotOrders} from './shared/robot-orders';
import {memoryObjective,memoryFinale,MEMORY_FINALE_MS} from './shared/memory-objective';
import './shared/memory-objective.css';
import {shuffleWords} from './shared/shuffle-words';
import {trainingRobot,foodIcon,robotFinale,ROBOT_FINALE_MS} from './shared/training-robot';
import './shared/training-robot.css';
import {petArt} from './rescue-scene';
import './shared/space-race.css';
import './shared/memory-vault.css';
import {moduleNames,moduleTargets,victoryTitles} from './shared/rotation-scenes';
import './shared/rotation-scenes.css';
import {bombFinale,BOMB_FINALE_MS} from './shared/bomb-finale';
import './shared/bomb-finale.css';
import {updateBombScene} from './shared/bomb-scene';
import './shared/bomb-scene.css';
import {missions,missionAliases,dayDetails,type Card,type Picture} from './data/week';
import {readClass,beginClass,recordVoice,parseNames,validNames,escapeHtml as esc} from './class-session';
import {gameButton as btn,gameHud,gamePressure,gameResult} from './shared/visual-standard';
import {createGameAudio} from './shared/game-audio';
import {weekScene} from './shared/week-scenes';
import './shared/game-shell.css';
import './shared/animated-mission.css';
import './week.css';
const root=document.querySelector<HTMLDivElement>('#mission')!;
const id=new URLSearchParams(location.search).get('id');
const mission=missions.find(m=>m.id===(missionAliases[id||'']||id));
if(!mission){root.innerHTML='<main class="missing"><h1>Choose a mission</h1><a href="/missions/v1/day.html">Open the weekly menu</a></main>';}
else if(mission.id==='d2-recipe-robot')runRobotOrders(root);
else run(mission);
function run(m:NonNullable<typeof mission>){
 const explorer=m.id==='d5-message-robot';
 const audio=createGameAudio(),saved=readClass();
 let names=saved.names.length?saved.names:Array.from({length:10},(_,i)=>`Player ${i+1}`),minutes=[3,5,8,10,15].includes(saved.minutes)?saved.minutes:5;
 let screen:'setup'|'play'|'finale'|'end'='setup',remaining=minutes*60,lives=4,progress=0,turn=0,target=7,paused=false,muted=false;
 let cards:Card[]=[],queue:number[]=[],scores=[0,0],spoken=new Set<string>(),feedback='',selected=-1,ordered:number[]=[],showHint=false,showAnswer=false,memoryHidden=false;
 let state:'idle'|'success'|'mistake'|'win'|'loss'='idle',pending=0,grade: 'correct'|'help'|'wrong'|null=null,busy=false,error='',endReason='';
 let last=performance.now(),pressureWarningPlayed=false,finaleRemaining=0;
 let wordDisplay:number[]=[];
 let parts=[0,0,0],selectedPart=-1,scanned=false,windows:number[]=[];
 let board:number[]=[],flipped:number[]=[],matched=new Set<number>(),study=true,boardRound=0,memoryPairsCount=6,studyRemaining=5;
 function newBoard(){const pool=m.memoryPairs!.map((_,i)=>i);for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}board=pool.slice(0,memoryPairsCount).flatMap(i=>[i,i]);for(let i=board.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[board[i],board[j]]=[board[j],board[i]];}matched=new Set();study=true;studyRemaining=memoryPairsCount===3?8:memoryPairsCount===4?6:5;boardRound++;}
 function ready(){if(m.cards[0].robotCue)return true;return m.theme==='robot'?selectedPart>=0||parts.reduce((a,b)=>a+b,0)>=target:m.theme==='memory'?flipped.length===2&&board[flipped[0]]===board[flipped[1]]:m.theme==='alien'?scanned:m.theme==='spotlight'?windows.length>0:true;}
 const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const current=()=>cards[turn];
 function resetCard(){wordDisplay=current()?.words?shuffleWords(current().words!):[];selectedPart=explorer?explorerModule(parts,target):-1;scanned=false;windows=[];flipped=[];if(m.theme==='memory'&&matched.size===memoryPairsCount)newBoard();feedback='';selected=-1;ordered=[];showHint=false;showAnswer=false;memoryHidden=false;state='idle';busy=false;grade=null;pending=0;}
 function start(){
  const parsed=parseNames((root.querySelector('#names') as HTMLTextAreaElement).value);
  if(!validNames(parsed)){names=parsed;error='Enter 8–13 different names, separated by commas.';render();return;}
  names=parsed;minutes=Number((root.querySelector('#duration') as HTMLSelectElement).value);beginClass(names,minutes);
  // Sort a full round rather than repeatedly choosing the minimum: everyone speaks.
  const session=readClass();
  const roundOrder=(team:string[])=>team.map(n=>names.indexOf(n)).sort((a,b)=>(session.spoken[a]||0)-(session.spoken[b]||0));
  if(m.theme==='rocket'){
   const teams=[names.filter((_,i)=>i%2===0),names.filter((_,i)=>i%2===1)];
   const turnsPerTeam=Math.ceil(names.length/2),teamQueues=teams.map(roundOrder);
   teamQueues.forEach(q=>{if(q.length<turnsPerTeam)q.push(q[0]);});
   queue=Array.from({length:turnsPerTeam*2},(_,i)=>teamQueues[i%2][Math.floor(i/2)]);
  }else queue=roundOrder(names);
  cards=m.theme==='rocket'?queue.map((_,i)=>m.cards[i%m.cards.length]):m.cards.slice(0,queue.length);target=explorer?cards.length:Math.ceil(cards.length*.65);
  if(m.theme==='memory')memoryPairsCount=Number((root.querySelector('#memory-difficulty') as HTMLSelectElement).value);parts=[0,0,0];boardRound=0;if(m.theme==='memory')newBoard();remaining=minutes*60;pressureWarningPlayed=false;lives=4;progress=0;turn=0;scores=[0,0];spoken=new Set();paused=false;resetCard();screen='play';last=performance.now();void audio.unlock();render();
 }
 function finish(reason:string){
  busy=false;pending=0;paused=false;endReason=reason;
  const early=reason==='The coach ended this mission early.';
  state=early?'loss':m.theme==='rocket'||(progress>=target&&lives>0&&(m.theme!=='memory'&&!explorer||spoken.size===names.length)&&(!explorer||remaining>0))?'win':'loss';
  if(explorer&&!early&&state==='win'){screen='finale';finaleRemaining=calm?1600:EXPLORER_FINALE_MS;last=performance.now();void audio.play('victory');}
  else if(m.theme==='bomb'&&!early){screen='finale';finaleRemaining=calm?1200:BOMB_FINALE_MS;last=performance.now();void audio.play(state==='win'?'victory':'explosion');}
  else if(m.theme==='memory'&&!early){screen='finale';finaleRemaining=calm?1200:MEMORY_FINALE_MS;last=performance.now();void audio.play(state==='win'?'victory':'incorrect');}
  else if(m.cards[0].robotCue&&!early){screen='finale';finaleRemaining=calm?1600:ROBOT_FINALE_MS;last=performance.now();void audio.play(state==='win'?'victory':'incorrect');}
  else {screen='end';if((m.theme==='memory'||m.theme==='rocket')&&!early)void audio.play(state==='win'?'victory':'incorrect');}
  render();
 }

 function evaluate(result:'correct'|'help'|'wrong'){
  if(screen!=='play'||busy||paused)return;
  if(result!=='wrong'&&!ready())return;
  if(result!=='wrong'&&m.theme==='robot'&&selectedPart>=0)parts[selectedPart]++;
  if(result!=='wrong'&&m.theme==='memory')matched.add(board[flipped[0]]);
  grade=result;busy=true;state=result==='wrong'?'mistake':'success';
  if(!explorer||!spoken.has(names[queue[turn]]))recordVoice(names[queue[turn]]);spoken.add(names[queue[turn]]);
  if(m.theme==='rocket')scores[turn%2]+=result==='correct'?2:result==='help'?1:0;
  else if(result==='wrong')lives--;else {progress++;if(result==='help')remaining=Math.max(0,remaining-5);}
  void audio.play(result==='wrong'?'incorrect':'correct');
  feedback=result==='wrong'?(m.theme==='rocket'?'Incorrect · Next team':'Incorrect · −1 life'):result==='help'?(m.theme==='rocket'?'With help · +1 point':'With help · −5 seconds'):(m.theme==='rocket'?'Correct · +2 points':'Correct · +1 mission point');
  if(explorer)feedback=result==='wrong'?'Connection failed · −1 life · Try again':parts[selectedPart]>=moduleTargets(target)[selectedPart]?'Module online! Ability unlocked.':'Component installed!';
  pending=calm?700:m.theme==='alien'?1800:1400;render();
 }
 function next(){
  if(lives<=0&&m.theme!=='rocket'){finish('The team ran out of lives.');return;}
  if(remaining<=0){finish('Time is up.');return;}
  if(explorer&&grade==='wrong'){resetCard();render();return;}
  if(turn+1>=cards.length){finish('Everyone has had a turn.');return;}
  turn++;resetCard();render();
 }
 function picture(p:Picture){
  const shape=(x:number)=>p.shape==='circle'?`<circle cx="${x}" cy="43" r="23"/>`:p.shape==='oval'?`<ellipse cx="${x}" cy="43" rx="28" ry="19"/>`:p.shape==='triangle'?`<path d="M${x} 16l27 51h-54Z"/>`:p.shape==='star'?`<path d="M${x} 13l8 21 23 1-18 14 6 22-19-13-19 13 6-22-18-14 23-1Z"/>`:p.shape==='heart'?`<path d="M${x} 65c-55-32-19-65 0-40 19-25 55 8 0 40Z"/>`:`<rect x="${x-25}" y="20" width="50" height="${p.shape==='square'?50:34}" rx="3"/>`;
  return `<svg class="week-picture" viewBox="0 0 ${p.count*76+10} 86" role="img" aria-label="${p.count} ${p.color} ${p.shape}${p.count>1?'s':''}"><g fill="${p.color}" stroke="#263a50" stroke-width="4">${Array.from({length:p.count},(_,i)=>shape(43+i*76)).join('')}</g></svg>`;
 }
 function memoryTask(){
  const pair=flipped.length===2&&board[flipped[0]]===board[flipped[1]]?m.memoryPairs![board[flipped[0]]]:null;
  return `<section class="game-task memory-console ${state}" data-pairs="${memoryPairsCount}" data-picture-pairs="${Boolean(m.memoryPairs?.[0].actionPicture)}">${memoryObjective(progress,target,spoken.size,names.length,state)}<p class="eyebrow">MATCH · REMEMBER · SAY</p><h1>${study?'Remember the pairs':pair?'Describe the matching pictures':'Find a matching pair'}</h1><div class="memory-board">${board.map((p,i)=>{const face=study||flipped.includes(i)||matched.has(p),entry=m.memoryPairs![p],left=board.indexOf(p)===i;return `<button class="memory-tile ${face?'':'covered'} ${matched.has(p)?'matched':''} ${flipped.includes(i)?'flipped':''} ${flipped.includes(i)&&state==='mistake'?'mismatch':''}" data-tile="${i}" data-pair="${p}" ${study||busy||matched.has(p)||flipped.includes(i)||flipped.length===2?'disabled':''}><span class="tile-face">${face?(entry.actionPicture?memoryActionArt(entry.actionPicture):entry.picture?picture(entry.picture):esc(left?entry.left:entry.right)):`<i>◆</i><b>${i+1}</b>`}</span></button>`;}).join('')}</div>${study?btn(`Hide now · ${Math.ceil(studyRemaining)}s`,'study','warning'):''}${pair?`<small>Describe the matching pictures in a full sentence. Your coach listens.</small>`:'<small>Tell your coach which two cards to turn over.</small>'}<div class="answer-status" role="status">${esc(feedback)}</div>${showHint?'<p class="hint">Remember where each matching message was hidden.</p>':''}</section>`;
 }
 function task(){const c=current();
  if(m.theme==='memory')return memoryTask();
  if(m.theme==='alien')return alienCheckpoint({claim:esc(c.context||''),picture:picture(c.picture!),scanned,state,selected,turn,total:cards.length,progress,target,feedback:esc(feedback),hint:showHint?esc(c.hint):'',example:showAnswer?esc(c.answer):'',disabled:busy});
  if(m.theme==='robot'&&!ready())return `<section class="game-task"><p class="eyebrow">BUILD YOUR ROBOT</p><h1>Choose a module to power</h1><div class="module-picker">${moduleNames.map((n,i)=>`<button data-module="${i}" ${parts[i]>=moduleTargets(target)[i]?'disabled':''}>${n} · ${parts[i]}/${moduleTargets(target)[i]}</button>`).join('')}</div><p>Choose a module, then solve its language challenge.</p></section>`;


  const conceal=c.kind==='memory'&&memoryHidden;
  let content=`<p class="eyebrow">${({choice:'CHOOSE & SAY',speak:'SPEAK UP',repair:'FIX THE MESSAGE',order:'BUILD THE MESSAGE',memory:'LOOK · HIDE · REMEMBER'})[c.kind]}</p>`;
  if(c.picture&&!conceal)content+=m.theme==='spotlight'?`<div class="spotlight-window">${picture(c.picture)}<div class="reveal-grid">${Array.from({length:6},(_,i)=>`<button data-window="${i}" class="${windows.includes(i)?'opened':''}">${i+1}</button>`).join('')}</div></div>`:picture(c.picture);
  if(c.robotCue)content=`<p class="eyebrow">${c.robotCue.stage==='recognize'?'TEACH THE EYES':c.robotCue.stage==='repair'?'FIX THE MESSAGE':'GUIDE THE DELIVERY'}</p>`;
  if(c.context&&!conceal)content+=c.kind==='repair'?`<h1 class="repair-sentence">${esc(c.context)}</h1>`:`<p class="task-context">${esc(c.context)}</p>`;
  if(conceal)content+='<div class="memory-cover">? ? ?</div>';
  if(c.kind!=='repair'||!c.context)content+=`<h1>${esc(c.prompt)}</h1>`;
  if(c.kind==='choice')content+=`<div class="game-options">${c.options!.map((o,i)=>`<button data-option="${i}" class="game-option ${selected===i?(grade==='wrong'?'wrong':'correct'):''}" ${busy||!ready()?'disabled':''}>${m.theme==='rocket'&&['Leo','Turbo','Coco','Goofy','Super Meow'].includes(o)?`<span class="race-pet">${petArt(o==='Turbo'?'turtle':o==='Coco'?'parrot':o==='Goofy'?'dog':'cat')}</span>`:''}${c.robotCue?`<span class="food-choice" aria-hidden="true">${foodIcon(o)}</span>`:''}${esc(o)}</button>`).join('')}</div><small>Say your answer. Your coach selects it.</small>`;
  if(c.kind==='order'){
   const words=c.words!,display=wordDisplay;
   content+=`<p class="word-answer">${ordered.length?ordered.map(i=>esc(words[i])).join(' '):'…'}</p><div class="word-bank">${display.map(i=>`<button data-word="${i}" ${busy||!ready()||ordered.includes(i)?'disabled':''}>${esc(words[i])}</button>`).join('')}<button data-action="undo" ${busy||!ordered.length?'disabled':''}>↶</button></div><small>Say the message. Your coach builds it.</small>`;
  }
  if(c.kind==='memory'&&!memoryHidden)content+=btn('Hide & answer','hide','warning');
  content+=`<div class="answer-status ${grade==='wrong'?'wrong':''}" role="status">${esc(feedback)}</div>`;
  if(showHint)content+=`<p class="hint">${esc(c.hint)}</p>`;
  if(showAnswer)content+=`<p class="hint">Example: ${esc(c.answer)}</p>`;
  return `<section class="game-task">${content}</section>`;
 }
 function pressure(){
  if(m.theme!=='rocket')return gamePressure({seconds:remaining,lives,paused});
  const n=Math.ceil(remaining);return `<div class="game-pressure"><div class="game-clock ${n<=30?'danger':n<=60?'warning':''}"><span>TIME LEFT</span><b>${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}</b></div><div class="team-score"><span>SUN</span><b>${scores[0]}</b><span>MOON</span><b>${scores[1]}</b></div></div>`;
 }
 function scene(){if(explorer)return explorerScene(screen==='setup'?[0,0,0]:parts,screen==='setup'?names.length:target,state,selectedPart);if(m.theme==='alien'&&screen==='play')return '';if(m.cards[0].robotCue)return trainingRobot(current()?.robotCue||m.cards[0].robotCue!,state,progress,target,screen==='setup',screen==='play'&&current()?.kind==='order'&&state!=='success');const artState=m.theme==='bomb'&&screen==='end'&&endReason==='The coach ended this mission early.'?'idle':state;return weekScene(m.theme,progress,target,lives,remaining/(minutes*60),scores,artState,turn%2,{parts,selectedPart,raceMax:cards.length||Math.ceil(names.length/2)*2,boost:grade==='correct'?2:grade==='help'?1:0,cargoReturned:m.theme==='alien'&&state==='success'&&selected===1});}
 function setup(){return `<section class="week-setup"><div><p class="eyebrow">LEVEL 2 · WEEK 4 · DAY ${m.day}</p><h1>${esc(m.title)}</h1><p>${esc(m.goal)}</p>${m.theme==='memory'?'<p class="setup-rule">Open the vault: collect the required crystals AND complete every student’s turn before time or lives run out. Each matched pair and spoken answer releases a lock.</p>':''}<p class="setup-rule">${explorer?'Build the scanner, legs and grippers. Each successful spoken answer installs a component. Everyone contributes before the robot collects the battery and powers the station. Incorrect: lose one life and retry the same turn. With help: −5 seconds. Four lives; finish before time runs out.':m.theme==='rocket'?'Two teams take turns. Correct: +2 points. With help: +1. Incorrect: 0 and next team. Highest score wins.':'Earn mission points on at least 65% of turns. Four lives: an incorrect answer costs one life. With help: −5 seconds. Finish before time runs out.'}</p><p>Everyone gets a turn. Races give both teams the same number of turns. The mission ends after the last turn, when time runs out${m.theme==='rocket'?'':', or when all lives are lost'}.</p>${m.theme==='memory'?`<label>Memory challenge<select id="memory-difficulty">${[[3,'Warm-up · 6 cards · 8 seconds'],[4,'Standard · 8 cards · 6 seconds'],[6,'Challenge · 12 cards · 5 seconds']].map(([n,label])=>`<option value="${n}" ${n===memoryPairsCount?'selected':''}>${label}</option>`).join('')}</select></label>`:''}<label>Time limit<select id="duration">${[3,5,8,10,15].map(n=>`<option value="${n}" ${n===minutes?'selected':''}>${n} minutes</option>`).join('')}</select></label><label>8–13 students · separate names with commas<textarea id="names" rows="3">${esc(names.join(', '))}</textarea></label><p class="setup-error" role="alert">${esc(error)}</p>${btn('Start mission','start','success')}<p><small>Names and turn counts stay in this browser. No AI calls during play.</small></p></div><aside>${scene()}<p>${esc(dayDetails[m.day].note)}</p></aside></section>`;}
 function speaker(){return `<div class="game-speaker"><div><span>${m.theme==='rocket'?`${turn%2===0?'SUN':'MOON'} TEAM · `:''}YOUR TURN</span><strong>${esc(names[queue[turn]])}</strong></div><div>Next: <b>${turn+1<queue.length?esc(names[queue[turn+1]]):'Final turn'}</b></div><small>${spoken.size}/${names.length} have spoken · Turn ${turn+1}/${cards.length}</small></div>`;}
 function coach(){const c=current(),automatic=m.theme!=='memory'&&(c.kind==='choice'||c.kind==='order');return `<footer class="game-coach"><span>${automatic?'Listen first, then select the student’s response.':'Listen to the student, then grade their answer.'}</span>${automatic||!ready()?'':btn('✓ Correct','correct','success',busy)+btn('With help','help','warning',busy)+btn('✕ Incorrect','wrong','danger',busy)}${btn('Hint','hint','neutral',busy)}${m.theme==='memory'?'':btn('Example','answer','neutral',busy||!ready())}${btn(muted?'Sound off':'Sound on','sound')}</footer>`;}
 function ending(){const early=endReason==='The coach ended this mission early.',tied=m.theme==='rocket'&&scores[0]===scores[1],kind=early?'early':m.theme==='rocket'?(tied?'tie':'win'):state==='win'?'win':'loss';
  const title=early?'Mission ended':m.theme==='rocket'?(tied?'Both teams finish together!':`${scores[0]>scores[1]?'Sun':'Moon'} Team wins!`):state==='win'?(explorer?'Station powered!':m.cards[0].robotCue?'Robot ready to help!':m.theme==='bomb'?'Bomb defused!':m.theme==='rescue'?'The team is safe!':victoryTitles[m.theme]||'The drink is ready!'):'Mission incomplete — try again!';
  return `<main class="game-scene end-scene"><div class="scene-status">${pressure()}</div>${scene()}<section class="week-ending">${gameResult(kind,endReason,title)}<div class="end-numbers"><b>${m.theme==='rocket'?`${scores[0]} – ${scores[1]}`:`${progress} / ${target}`}</b><span>${m.theme==='rocket'?'Sun – Moon':explorer?'components installed':'mission points'}</span><b>${spoken.size} / ${names.length}</b><span>students heard</span></div><p>${names.filter(n=>!spoken.has(n)).length?`Next voices: ${names.filter(n=>!spoken.has(n)).map(esc).join(', ')}`:'Every student had a voice in this mission.'}</p>${btn('Play again','again','success')}<a class="game-button" href="/missions/v1/day.html?day=${m.day}">Choose next mission</a></section></main>`;
 }
 function render(){root.innerHTML=`<div class="game-shell week-shell" data-explorer="${explorer}" data-paused="${paused}" data-calm="${calm}" data-state="${screen}" data-theme="${m.theme}" data-feedback="${state}" data-team="${turn%2}" data-training="${Boolean(m.cards[0].robotCue)}">${gameHud({title:m.title,seconds:remaining,lives,paused})}<nav class="mission-nav"><a href="/missions/v1/day.html?day=${m.day}">Day ${m.day} missions</a><span>${esc(m.topic)}</span>${screen==='play'?'<button data-action="end">End mission</button>':''}</nav>${screen==='setup'?setup():screen==='finale'?(explorer?explorerScene(parts,target,state,selectedPart,true,(calm?1600:EXPLORER_FINALE_MS)-finaleRemaining,calm):m.theme==='memory'?memoryFinale(progress,target,state==='win',(calm?1200:MEMORY_FINALE_MS)-finaleRemaining):m.cards[0].robotCue?robotFinale(current().robotCue!,state==='win',(calm?1600:ROBOT_FINALE_MS)-finaleRemaining,calm):bombFinale(state==='win',progress,target,lives,(calm?1200:BOMB_FINALE_MS)-finaleRemaining,calm,muted)):screen==='play'?`${speaker()}<main class="game-scene"><div class="scene-status">${pressure()}</div>${scene()}${task()}</main>${coach()}`:ending()}${paused?`<div class="week-pause"><section><h1>Mission paused</h1><p>The timer is stopped.</p>${btn('Resume','pause','success')}${btn('End now','finish','danger')}</section></div>`:''}</div>`;if(m.theme==='bomb'){updateBombScene(root,remaining/(minutes*60),lives);if(screen==='end'&&endReason==='The coach ended this mission early.'){const status=root.querySelector('.bomb-status');if(status)status.textContent='MISSION ENDED';}}}
 root.addEventListener('click',event=>{
  const b=(event.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b||b.disabled)return;
  const act=b.dataset.action;
  if(act==='fullscreen'){if(document.fullscreenElement)void document.exitFullscreen();else void root.requestFullscreen();return;}
  if(act==='start'){start();return;}
  if(act==='again'){screen='setup';error='';resetCard();render();return;}
  if(act==='sound'){muted=!muted;audio.setMuted(muted);render();return;}
  if(act==='pause'&&(screen==='play'||screen==='finale')){paused=!paused;if(paused)audio.stop();last=performance.now();render();return;}
  if(act==='end'&&screen==='play'){paused=true;render();return;}
  if(act==='finish'&&paused){finish('The coach ended this mission early.');return;}
  if(screen!=='play'||paused||busy)return;
  if(b.dataset.module!==undefined){selectedPart=Number(b.dataset.module);render();return;}
  if(act==='scan'){scanned=true;render();return;}
  if(b.dataset.window!==undefined){windows.push(Number(b.dataset.window));render();return;}
  if(act==='study'){study=false;render();return;}
  if(b.dataset.tile!==undefined){flipped.push(Number(b.dataset.tile));if(flipped.length===2&&board[flipped[0]]!==board[flipped[1]])evaluate('wrong');else render();return;}
  if(act==='hint'){showHint=!showHint;render();return;}
  if(act==='answer'){showAnswer=!showAnswer;render();return;}
  if(act==='hide'){memoryHidden=true;render();return;}
  if(act==='undo'){ordered.pop();render();return;}
  if(b.dataset.option!==undefined){selected=Number(b.dataset.option);evaluate(selected===current().correct?'correct':'wrong');return;}
  if(b.dataset.word!==undefined){ordered.push(Number(b.dataset.word));if(ordered.length===current().words!.length)evaluate(ordered.map(i=>current().words![i]).join(' ')===current().answer?'correct':'wrong');else render();return;}
  if(act==='correct'||act==='help'||act==='wrong')evaluate(act);
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&(screen==='play'||screen==='finale')){paused=true;audio.stop();render();}});
 setInterval(()=>{
  const now=performance.now(),dt=(now-last)/1000;last=now;if(paused)return;if(screen==='finale'){finaleRemaining-=dt*1000;if(finaleRemaining<=0){screen='end';render();}return;}if(screen!=='play')return;
  if(busy){pending-=dt*1000;if(pending<=0)next();return;}
  remaining=Math.max(0,remaining-dt);if(!remaining){finish('Time is up.');return;}
  if(m.theme==='memory'&&study){studyRemaining=Math.max(0,studyRemaining-dt);if(studyRemaining<=0){study=false;render();}else{const studyButton=root.querySelector('[data-action=study]');if(studyButton)studyButton.textContent=`Hide now · ${Math.ceil(studyRemaining)}s`;}}
  const n=Math.ceil(remaining),clock=root.querySelector('.game-clock');if(clock){clock.classList.toggle('danger',n<=30);clock.classList.toggle('warning',n>30&&n<=60);clock.querySelector('b')!.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;}
  if(m.theme==='bomb'){updateBombScene(root,remaining/(minutes*60),lives);if(!pressureWarningPlayed&&remaining/(minutes*60)*lives/4<=.25){pressureWarningPlayed=true;void audio.play('warning');}}
 },100);
 render();
}
