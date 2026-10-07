import {spaceRace} from './space-race';
import {rotationScene,type RotationState} from './rotation-scenes';
import {bombScene} from './bomb-scene';
import {animatedMission} from './animated-mission';
import type {Theme} from '../data/week';
export function weekScene(theme:Theme,progress:number,target:number,lives:number,timeRatio:number,scores:number[],state:'idle'|'success'|'mistake'|'win'|'loss',activeTeam=0,details:RotationState={parts:[0,0,0],selectedPart:-1}){
 if(theme==='rescue'||theme==='smoothie')return animatedMission(theme,Math.min(3,progress/target*3),state).replace(/<div class="animated-progress"[\s\S]*?<\/div><\/div>$/,`<div class="animated-progress"><p>${progress} / ${target} mission points</p></div></div>`);
 if(theme==='bomb')return bombScene(progress,target,lives,timeRatio,state);
 if(['robot','memory','alien','spotlight'].includes(theme))return rotationScene(theme,progress,target,state,details);
 return spaceRace(scores,state,activeTeam,details.raceMax||target*2,details.boost||0);
}
