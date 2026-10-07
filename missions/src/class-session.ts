// Local classroom state: no student account, network request or AI call.
export type ClassSession = {names:string[]; spoken:number[]; minutes:number};
const key='e4k-preview-class-v1';
const empty=():ClassSession=>({names:[],spoken:[],minutes:5});
export function readClass():ClassSession {
  try { const s=JSON.parse(localStorage.getItem(key)||'null');
    if(s && Array.isArray(s.names) && s.names.length>=8 && s.names.length<=13 && s.names.every((n:unknown)=>typeof n==='string') && Array.isArray(s.spoken) && s.spoken.length===s.names.length && s.spoken.every((n:unknown)=>typeof n==='number' && Number.isFinite(n) && n>=0)) return {...s,minutes:Number.isFinite(s.minutes)?s.minutes:5};
  } catch {} return empty();
}
function save(s:ClassSession){try{localStorage.setItem(key,JSON.stringify(s));}catch{}}
export function beginClass(names:string[],minutes:number){const s=readClass();const same=JSON.stringify(s.names)===JSON.stringify(names);save({names,spoken:same?s.spoken:names.map(()=>0),minutes});}
export function recordVoice(name:string){const s=readClass(),i=s.names.indexOf(name);if(i>=0){s.spoken[i]++;save(s);}}
export function fairQueue(names:string[],turns:number){const s=readClass(),counts=names.map(n=>s.spoken[s.names.indexOf(n)]||0),result:number[]=[];for(let t=0;t<turns;t++){let next=0;for(let i=1;i<counts.length;i++)if(counts[i]<counts[next])next=i;result.push(next);counts[next]++;}return result;}
export function clearClass(){try{localStorage.removeItem(key);}catch{}}
export const escapeHtml=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function parseNames(value:string){return value.split(',').map(n=>n.trim()).filter(Boolean);}
export const demoNames=()=>Array.from({length:10},(_,i)=>`Explorador ${i+1}`);
export function validNames(names:string[]){return names.length>=8&&names.length<=13&&new Set(names.map(n=>n.toLowerCase())).size===names.length;}
