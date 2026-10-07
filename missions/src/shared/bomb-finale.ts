import {bombScene} from './bomb-scene';
export const BOMB_FINALE_MS=3200;
export function bombFinale(won:boolean,progress:number,target:number,lives:number,elapsed:number,calm:boolean,muted:boolean){
 return `<main class="bomb-cinematic ${won?'finale-win':'finale-loss'} ${calm?'finale-calm':''}" style="--elapsed:-${elapsed}ms" aria-label="${won?'Bomb defused. Mission complete.':'Bomb explosion. Mission failed.'}">
 <button class="game-button cinema-sound" data-action="sound">${muted?'Sound off':'Sound on'}</button><div class="cinema-grid"></div><div class="cinema-glow"></div>
 <div class="cinema-bomb">${bombScene(progress,target,lives,0,won?'win':'idle')}</div>
 <div class="blast-ring"></div><div class="blast-cloud" aria-hidden="true">${Array.from({length:9},(_,i)=>`<i style="--angle:${i*40}deg;--puff:${i%3}"></i>`).join('')}<b>BOOM!</b></div>
 <div class="blast-debris" aria-hidden="true">${Array.from({length:12},(_,i)=>`<i style="--angle:${i*30}deg;--travel:${150+i%4*45}px;--spin:${i*71}deg"></i>`).join('')}</div>
 <div class="cinema-title"><p class="cinema-warning">${won?'CODE ACCEPTED':'CONTAINMENT LOST'}</p><h1>${won?'BOMB DEFUSED!':'MISSION FAILED'}</h1><p class="cinema-message">${won?'You did it, team!':'Regroup. Recharge. Try again!'}</p></div>
 </main>`;
}
