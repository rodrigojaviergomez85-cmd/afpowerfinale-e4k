type BombState='idle'|'success'|'mistake'|'win'|'loss';
const fusePath='M260 165 C260 158 224 157 181 157 H112 C44 157 44 87 108 87 H340 C396 87 396 35 455 35';
export function bombScene(progress:number,target:number,lives:number,ratio:number,state:BombState){
 const length=Math.max(0,Math.min(1,ratio))*Math.max(0,lives)/4,done=state==='win',failed=state==='loss';
 const urgency=length<=.25?'critical':length<=.5?'warning':'steady';
 const status=done?'BOMB DEFUSED!':failed?'MISSION LOST':state==='mistake'?'FUSE DAMAGED!':state==='success'?'CODE ACCEPTED':urgency==='critical'?'CRITICAL — KEEP GOING':urgency==='warning'?'STAY FOCUSED':'DEFUSAL IN PROGRESS';
 return `<div class="week-art bomb-art ${state}" data-urgency="${urgency}">
 <div class="bomb-heading"><span class="alarm-light"></span><h2>DEFUSAL CHAMBER</h2><span class="alarm-light"></span></div>
 <div class="bomb-stage"><svg class="bomb-illustration" viewBox="0 0 520 490" role="img" aria-label="${done?'Bomb defused':failed?'Mission lost':`${lives} lives left; ${progress} of ${target} code pieces unlocked`}" xmlns="http://www.w3.org/2000/svg">
 <defs><radialGradient id="bomb-metal" cx=".31" cy=".21" r=".85"><stop stop-color="#697fa0"/><stop offset=".3" stop-color="#354b6e"/><stop offset=".74" stop-color="#1b2945"/><stop offset="1" stop-color="#0b1428"/></radialGradient><linearGradient id="bomb-rim" x2="1" y2="1"><stop stop-color="#bfd4d9"/><stop offset=".45" stop-color="#628797"/><stop offset="1" stop-color="#344b69"/></linearGradient><linearGradient id="bomb-stand" x2="0" y2="1"><stop stop-color="#3a596b"/><stop offset="1" stop-color="#112638"/></linearGradient><pattern id="hazard-stripes" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="12" height="24" fill="#ecc378"/><rect x="12" width="12" height="24" fill="#233545"/></pattern></defs>
 <g class="chamber-lines" fill="none" stroke="#4b8294" stroke-width="2" opacity=".45"><path d="M32 225V30h75m306 0h75v195M32 295v122h60m336 0h60V295"/><path d="M48 223v-35m424 35v-35M48 322v45m424-45v45" stroke-width="7"/><circle cx="260" cy="309" r="151" stroke-dasharray="9 15"/></g>
 <ellipse cx="260" cy="457" rx="168" ry="18" fill="#081c2d" opacity=".7"/>
 <path d="M117 446h286l24 19H93Z" fill="url(#bomb-stand)" stroke="#6c91a4" stroke-width="3"/><rect x="110" y="460" width="300" height="12" rx="4" fill="url(#hazard-stripes)"/>
 <path class="fuse-track" d="${fusePath}"/><path class="live-fuse" pathLength="1" stroke-dasharray="${length} 1" d="${fusePath}"/>
 <g transform="translate(-65 -78.75) scale(1.25)"><g class="bomb-body">
 <rect x="237" y="192" width="46" height="41" rx="8" fill="url(#bomb-rim)" stroke="#b1c6cb" stroke-width="3"/><path d="M243 202h34m-34 9h34" stroke="#345068" stroke-width="4"/>
 <circle cx="260" cy="319" r="111" fill="url(#bomb-metal)" stroke="#8aa7b5" stroke-width="5"/>
 <path d="M177 276q28-49 85-47" fill="none" stroke="#c3e4ed" stroke-width="12" stroke-linecap="round" opacity=".25"/>
 <path d="M164 363q97 58 192 0" fill="none" stroke="#152439" stroke-width="17"/><path d="M175 373q85 43 169-1" fill="none" stroke="#718a9d" stroke-width="3"/>
 <g class="bomb-wire wire-coral"><path d="M174 313C120 304 126 374 173 370h29" fill="none" stroke="#122238" stroke-width="15"/><path d="M174 313C120 304 126 374 173 370h29" fill="none" stroke="#ed887e" stroke-width="8"/><rect x="190" y="363" width="22" height="14" rx="3" fill="#f4b79f"/></g>
 <g class="bomb-wire wire-blue"><path d="M347 307c57-18 59 73 2 66h-29" fill="none" stroke="#122238" stroke-width="15"/><path d="M347 307c57-18 59 73 2 66h-29" fill="none" stroke="#69cfe0" stroke-width="8"/><rect x="309" y="366" width="22" height="14" rx="3" fill="#b5ece7"/></g>
 <rect x="186" y="267" width="148" height="104" rx="17" fill="#172c40" stroke="url(#bomb-rim)" stroke-width="7"/>
 <rect class="bomb-display" x="200" y="280" width="120" height="77" rx="9" fill="#0a1c29" stroke="#63848c" stroke-width="2"/>
 <path class="lock-icon" d="M247 313v-10a13 13 0 0 1 26 0v10m-31 0h36v27h-36Z" fill="none" stroke="${done?'#a4f3cc':'#ffdc91'}" stroke-width="5" stroke-linejoin="round"/>
 <path class="defused-check" d="m239 316 15 15 30-32" fill="none" stroke="#a4f3cc" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
 ${[[197,279],[323,279],[197,359],[323,359]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="#9eb9c2"/><path d="M${x-2} ${y}h4" stroke="#2c485d"/>`).join('')}
 <text x="260" y="394" text-anchor="middle" fill="#a7c5ce" font-size="13" letter-spacing="4" font-weight="900">E4K LAB</text>
 </g></g>
 <g class="fuse-spark" aria-hidden="true"><circle r="17" fill="#ffb752" opacity=".17"/><path d="m0-15 3 10 11-5-7 9 10 4-12 2 3 11-9-8-7 9 2-13-12-1 11-6-5-10 9 6Z" fill="#ffd48b"/><circle r="4" fill="#fff3c4"/></g>
 <g class="defusal-rings" fill="none" stroke="#93edc1" stroke-width="5"><circle cx="260" cy="317" r="125"/><circle cx="260" cy="317" r="141" stroke-dasharray="4 22"/></g>
 <g class="bomb-wreckage"><ellipse cx="260" cy="440" rx="122" ry="18" fill="#071723"/><path d="M139 425 153 366 191 404 217 381 244 411 276 384 312 406 349 367 377 427Z" fill="#283a4b" stroke="#8194a0" stroke-width="5"/><path d="m159 412 27-6 24 20m95-3 26-15 30 9" fill="none" stroke="#566f80" stroke-width="5"/><path d="M162 395q-69-43-70 22m254-13q81-42 78 19" fill="none" stroke="#d7897b" stroke-width="8"/><rect x="227" y="417" width="64" height="21" rx="5" fill="#102031" stroke="#78919c" stroke-width="3" transform="rotate(-9 259 426)"/><path d="m200 350-8-23 11-21m80 48 9-24-8-19" fill="none" stroke="#7b91a3" opacity=".6" stroke-width="8" stroke-linecap="round"/></g>
 <g class="bomb-smoke" fill="#b5bfcb" stroke="#71879c" stroke-width="3"><circle cx="202" cy="299" r="55"/><circle cx="312" cy="300" r="58"/><circle cx="256" cy="251" r="61"/><circle cx="253" cy="338" r="65"/><circle cx="170" cy="342" r="38"/><circle cx="345" cy="343" r="39"/><path d="m226 287 20 22-18 25m58-47-20 22 18 25" stroke="#42566e" stroke-width="6" fill="none"/></g>
 </svg></div>
 <div class="bomb-code"><div class="code-label"><span>DISARM CODE</span><strong>${Math.min(progress,target)} / ${target}</strong></div><div class="code-pieces" aria-label="${Math.min(progress,target)} of ${target} code pieces unlocked">${Array.from({length:target},(_,i)=>`<span class="code-piece ${i<progress?'unlocked':''} ${state==='success'&&i===progress-1?'new-piece':''}">${i<progress?'✓':i+1}</span>`).join('')}</div></div>
 <p class="bomb-status" role="status">${status}</p></div>`;
}

// Position the spark on the actual curved path. Called after render and on timer ticks.
export function updateBombScene(root:HTMLElement,ratio:number,lives:number){
 const art=root.querySelector<HTMLElement>('.bomb-art');
 if(!art)return;
 const length=Math.max(0,Math.min(1,ratio))*Math.max(0,lives)/4;
 const path=art.querySelector<SVGPathElement>('.live-fuse');
 if(!path)return;
 path.setAttribute('stroke-dasharray',`${length} 1`);
 const point=path.getPointAtLength(path.getTotalLength()*length);
 art.querySelector('.fuse-spark')?.setAttribute('transform',`translate(${point.x} ${point.y})`);
 const urgency=length<=.25?'critical':length<=.5?'warning':'steady';
 art.dataset.urgency=urgency;
 if(art.classList.contains('idle')){
  const status=art.querySelector('.bomb-status');
  if(status)status.textContent=urgency==='critical'?'CRITICAL — KEEP GOING':urgency==='warning'?'STAY FOCUSED':'DEFUSAL IN PROGRESS';
 }
}
