// Shuffle once per turn; compare visible words as duplicate tokens can swap invisibly.
export function shuffleWords(words:readonly string[],random= Math.random):number[]{
 const indices=words.map((_,i)=>i);
 for(let i=indices.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[indices[i],indices[j]]=[indices[j],indices[i]];}
 if(indices.every((index,i)=>words[index]===words[i])){
  const different=words.findIndex(word=>word!==words[0]);
  if(different>0)[indices[0],indices[different]]=[indices[different],indices[0]];
 }
 return indices;
}
