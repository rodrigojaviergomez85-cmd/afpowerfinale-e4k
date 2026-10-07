// Illustrative complexity profiles, not automatic placement or curriculum mappings.
// Production lessons select approved grammar, vocabulary and support explicitly.
export const challengeProfiles={
 foundation:{label:'Foundation',support:'Pictures and short sentence starters.',output:'One clear sentence, then a short exchange.',
  context:'',choicePrompt:'Which sentence matches?',options:['There is two circles.','There are two circles.'],
  oral:'Now say the full sentence.',repair:'I likes grapes.',repaired:'I like grapes.',
  pair:['Ask Leo if there are two circles.','Answer Sofía. Use the picture.'],
  hints:['Two circles: use “There are”.','With I, use like.','Are there two circles?','Yes, there are.'],showShapes:true},
 developing:{label:'Developing',support:'A short context and an optional clue.',output:'A complete answer with a reason or an extra detail.',
  context:'Mia reads every evening. Leo reads only on Saturdays.',choicePrompt:'Who reads more often?',options:['Leo reads more often.','Mia reads more often.'],
  oral:'Explain your answer using the context.',repair:'Mia don’t read on Sundays.',repaired:'Mia doesn’t read on Sundays.',
  pair:['Ask Leo how often he reads.','Tell Sofía how often you read. Add one detail.'],
  hints:['Compare every evening with only on Saturdays.','Mia is one person: use doesn’t + read.','How often do you read?','I read… I usually choose…'],showShapes:false},
 advanced:{label:'Advanced',support:'Evidence and constraints. Hints only when requested.',output:'Justify a decision and respond to another viewpoint.',
  context:'The bridge is closed. A safe path takes ten extra minutes.',choicePrompt:'Choose the safest plan.',options:['Cross the closed bridge.','Take the longer path.'],
  oral:'Explain the benefit and the cost of your decision.',repair:'If we will work together, we can finish before dark.',repaired:'If we work together, we can finish before dark.',
  pair:['Recommend a route. Explain a benefit and a drawback.','Respond to Sofía’s plan. Give a reason for your view.'],
  hints:['Compare safety with the extra time.','In this conditional, use the present simple after if.','I would choose… because… However…','I agree / disagree because… Another option is…'],showShapes:false},
} as const;
export type ChallengeProfile=keyof typeof challengeProfiles;
