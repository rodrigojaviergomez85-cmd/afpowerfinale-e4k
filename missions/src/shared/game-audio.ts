export type FeedbackSound='correct'|'incorrect'|'warning'|'explosion'|'victory';

// Short, original cues synthesized locally; no downloads or per-play service calls.
export function scheduleFeedback(context:BaseAudioContext,destination:AudioNode,kind:FeedbackSound){
 const now=context.currentTime+.015;
 if(kind==='explosion'){
  const sources:AudioScheduledSourceNode[]=[];
  const tone=(hz:number,start:number,duration:number,volume:number,endHz=hz)=>{const o=context.createOscillator(),g=context.createGain();o.frequency.setValueAtTime(hz,now+start);o.frequency.exponentialRampToValueAtTime(endHz,now+start+duration);g.gain.setValueAtTime(0,now+start);g.gain.linearRampToValueAtTime(volume,now+start+.01);g.gain.exponentialRampToValueAtTime(.0001,now+start+duration);o.connect(g);g.connect(destination);o.start(now+start);o.stop(now+start+duration+.02);o.onended=()=>{o.disconnect();g.disconnect();};sources.push(o);};
  tone(660,0,.12,.045);tone(740,.22,.12,.045);tone(140,.65,.85,.24,38);
  const buffer=context.createBuffer(1,Math.ceil(context.sampleRate*1.15),context.sampleRate),samples=buffer.getChannelData(0);
  for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*Math.exp(-5*i/samples.length);
  const noise=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();noise.buffer=buffer;filter.type='lowpass';filter.frequency.value=1300;gain.gain.value=.18;noise.connect(filter);filter.connect(gain);gain.connect(destination);noise.start(now+.65);noise.onended=()=>{noise.disconnect();filter.disconnect();gain.disconnect();};sources.push(noise);return sources;
 }
 const notes=kind==='victory'? [{hz:523.25,at:0,length:.3},{hz:659.25,at:.15,length:.3},{hz:783.99,at:.3,length:.3},{hz:1046.5,at:.55,length:.65}] :kind==='correct'
  ? [{hz:659.25,at:0,length:.25},{hz:880,at:.095,length:.3},{hz:1318.51,at:.19,length:.36}]
  : kind==='warning'? [{hz:523.25,at:0,length:.12},{hz:523.25,at:.24,length:.12}]
  : [{hz:311.13,at:0,length:.2},{hz:233.08,at:.13,length:.28}];
 const voices:AudioScheduledSourceNode[]=[];
 for(const note of notes){
  for(const [multiple,level] of [[1,.17],[2,.035]]){
   const oscillator=context.createOscillator(),envelope=context.createGain();
   oscillator.type=kind==='incorrect'?'triangle':'sine';
   oscillator.frequency.setValueAtTime(note.hz*multiple,now+note.at);
   if(kind==='incorrect')oscillator.frequency.exponentialRampToValueAtTime(note.hz*multiple*.94,now+note.at+note.length);
   envelope.gain.setValueAtTime(0,now+note.at);
   envelope.gain.linearRampToValueAtTime(kind==='warning'?level*.45:level,now+note.at+.008);
   envelope.gain.exponentialRampToValueAtTime(.0001,now+note.at+note.length);
   oscillator.connect(envelope);envelope.connect(destination);
   oscillator.start(now+note.at);oscillator.stop(now+note.at+note.length+.015);
   oscillator.onended=()=>{oscillator.disconnect();envelope.disconnect();};
   voices.push(oscillator);
  }
 }
 return voices;
}

export function createGameAudio(){
 let context:AudioContext|undefined,master:GainNode|undefined,muted=false,revision=0,voices:AudioScheduledSourceNode[]=[];
 function stop(){for(const voice of voices){try{voice.stop();}catch{}}voices=[];}
 async function unlock(){
  try{
   if(!context){context=new AudioContext();master=context.createGain();master.gain.value=muted?0:.85;master.connect(context.destination);}
   if(context.state==='suspended')await context.resume();
  }catch{/* A blocked audio device must not interrupt a game. */}
 }
 return {
  unlock,
  stop(){revision++;stop();},
  setMuted(value:boolean){muted=value;revision++;if(master&&context)master.gain.setValueAtTime(value?0:.85,context.currentTime);if(value)stop();},
  async play(kind:FeedbackSound){
   if(muted)return;
   const request=++revision;
   await unlock();
   if(muted||request!==revision||!context||context.state!=='running'||!master)return;
   stop();voices=scheduleFeedback(context,master,kind);
  },
 };
}
