// Curriculum-aligned practice content. Pilot activities are authored below.
// Q || question || answers (" / ")   T || Spanish || English
// S || shapes || question || answer  E || emoji || question || answer

export interface DayDef {
  day: number;
  label: string;
  focus: string;
  lines: string[];
}
export interface WeekDef {
  week: number;
  days: DayDef[];
}
export interface LevelDef {
  level: number;
  weeks: WeekDef[];
  vocab: { week: number; category: string; words: string[] }[];
}
export interface CourseDef {
  name: string;
  levels: LevelDef[];
}

// Pilot source: COMPLETE CURRICULUM!A77:N86, Kids Super Intensive Curriculum
// (b1+ updates).xlsx. These are authored practice activities, not exam questions.
export interface PilotCard {
  key: string;
  line: string;
  hint: string;
  spanish: string;
  falseClaim: string;
  correction: string;
  openAnswer?: boolean;
  pictureChoices?: { label: string; emoji: string }[];
  choiceNote?: string;
  practice?: { target: string; spanish: string; errors: string[] };
}
export interface PilotLesson {
  id: string;
  course: string;
  level: number;
  week: number;
  day: number;
  month: number;
  topic: string;
  focus: string;
  sourceRow: number;
  evaluation: boolean;
  cards: PilotCard[];
  suggested: string[];
}

const shapeNames = ["circle", "rectangle", "star", "heart", "square", "triangle", "oval"];
const palette = ["red", "blue", "yellow", "green", "purple", "orange"];
const numbers = ["zero", "one", "two", "three", "four", "five", "six"];
const shapeSpanish = [
  "círculo",
  "rectángulo",
  "estrella",
  "corazón",
  "cuadrado",
  "triángulo",
  "óvalo",
];
const colorSpanish = ["rojo", "azul", "amarillo", "verde", "morado", "naranja"];
const numberSpanish = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis"];
const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");
function shapeCards(day: number): PilotCard[] {
  return shapeNames.flatMap((shape, si) =>
    palette.map((color, ci) => {
      const n = ci + 1;
      const other = shapeNames[(si + 1) % shapeNames.length]!;
      let prompt = "Describe the picture. Use there is or there are.";
      let answer =
        n === 1 ? `There is one ${color} ${shape}.` : `There are ${numbers[n]} ${color} ${shape}s.`;
      let wrong =
        n === 1 ? `There are one ${color} ${shape}.` : `There is ${numbers[n]} ${color} ${shape}s.`;
      let hint = "One: There is… More than one: There are…";
      if (day === 2) {
        const yes = ci % 2 === 0;
        const ask = yes ? shape : other;
        prompt = n === 1 ? `Is there ${article(ask)} ${ask}?` : `Are there any ${ask}s?`;
        answer = yes
          ? n === 1
            ? `Yes, there is. There is one ${shape}.`
            : `Yes, there are. There are ${numbers[n]} ${shape}s.`
          : n === 1
            ? `No, there isn't. There is one ${shape}.`
            : `No, there aren't. There are ${numbers[n]} ${shape}s.`;
        hint =
          "Look first. Is there…? Yes, there is / No, there isn't. Are there…? Yes, there are / No, there aren't.";
      }
      if (day === 3) {
        prompt = `How many ${shape}s do you see?`;
        answer = `I see ${numbers[n]} ${color} ${shape}${n === 1 ? "" : "s"}.`;
        wrong = `I see ${numbers[n === 6 ? 5 : n + 1]} ${color} ${shape}s.`;
        hint = "Count them, then say: I see [number] [shapes].";
      }
      const correction =
        day === 3
          ? answer
          : n === 1
            ? `There is one ${color} ${shape}.`
            : `There are ${numbers[n]} ${color} ${shape}s.`;
      const target = day === 2 ? prompt : answer;
      const noun = shapeSpanish[si]!;
      const plural = noun === "corazón" ? "corazones" : `${noun}s`;
      const shade = colorSpanish[ci]!.replace(/o$/, noun === "estrella" ? "a" : "o");
      const colored = `${n === 1 ? noun : plural} ${shade}${n === 1 ? "" : "es" === shade.slice(-2) ? "" : shade === "azul" ? "es" : "s"}`;
      const translation =
        day === 2
          ? `¿Hay ${n === 1 ? ((ci % 2 === 0 ? shape : other) === "star" ? "una " : "un ") : ""}${shapeSpanish[shapeNames.indexOf(ci % 2 === 0 ? shape : other)]}${n === 1 ? "" : shapeSpanish[shapeNames.indexOf(ci % 2 === 0 ? shape : other)] === "corazón" ? "es" : "s"}?`
          : `${day === 3 ? "Veo" : "Hay"} ${n === 1 ? (noun === "estrella" ? "una" : "un") : numberSpanish[n]} ${colored}.`;
      return {
        key: `shapes-d${day}-${shape}-${color}`,
        line: `S || ${color} ${shape}:${n} || ${prompt} || ${answer}`,
        hint,
        spanish: "Mira las figuras. Responde con una oración completa.",
        falseClaim: wrong,
        correction,
        practice: {
          target,
          spanish: translation,
          errors:
            day === 2
              ? [
                  target
                    .replace(/^Is there/, "Are there")
                    .replace(/^Are there any/, "Is there any"),
                  target.replace(/^(Is|Are) there/, "$1 there is"),
                  target.replace("there", "they"),
                ]
              : [
                  wrong,
                  target.replace(
                    n === 1 ? ` ${shape}.` : ` ${shape}s.`,
                    n === 1 ? ` ${shape}s.` : ` ${shape}.`,
                  ),
                  target.replace(
                    day === 3 ? "I see" : n === 1 ? "There is" : "There are",
                    day === 3 ? "I sees" : "There be",
                  ),
                ],
        },
      };
    }),
  );
}

const jobs = [
  { name: "doctor", icon: "🧑‍⚕️", action: "help sick people", place: "hospital" },
  { name: "vet", icon: "🐶🩺", action: "help animals", place: "animal hospital" },
  { name: "firefighter", icon: "🧑‍🚒", action: "stop fires", place: "fire station" },
  { name: "police officer", icon: "👮", action: "fight crime", place: "police station" },
  { name: "teacher", icon: "🧑‍🏫", action: "teach children", place: "school" },
  { name: "astronaut", icon: "🧑‍🚀", action: "explore space", place: "space station" },
];
const jobsSpanish = ["médico", "veterinario", "bombero", "policía", "profesor", "astronauta"];
const actionsSpanish = [
  "ayudar a las personas enfermas",
  "ayudar a los animales",
  "apagar incendios",
  "combatir el crimen",
  "enseñar a los niños",
  "explorar el espacio",
];
const placesSpanish = [
  "un hospital",
  "un hospital veterinario",
  "una estación de bomberos",
  "una estación de policía",
  "una escuela",
  "una estación espacial",
];
function jobPractice(job: (typeof jobs)[number], day: number, task = 0) {
  const i = jobs.indexOf(job),
    j = `${article(job.name)} ${job.name}`;
  const target =
    day === 2
      ? task === 0
        ? `Do you want to be ${j}?`
        : task === 1
          ? `Yes, I do. I want to be ${j}.`
          : `No, I don't want to be ${j}.`
      : day === 3
        ? `I want to be ${j} because I want to ${job.action}.`
        : day === 4
          ? `I want to work at ${article(job.place)} ${job.place} because I want to ${job.action}.`
          : `I want to be ${j}.`;
  const spanish =
    day === 2
      ? task === 0
        ? `¿Quieres ser ${jobsSpanish[i]}?`
        : task === 1
          ? `Sí, quiero ser ${jobsSpanish[i]}.`
          : `No, no quiero ser ${jobsSpanish[i]}.`
      : day === 4
        ? `Quiero trabajar en ${placesSpanish[i]} porque quiero ${actionsSpanish[i]}.`
        : `Quiero ser ${jobsSpanish[i]}${day === 3 ? ` porque quiero ${actionsSpanish[i]}` : ""}.`;
  const errors =
    day === 2 && task === 0
      ? [
          target.replace("want", "wants"),
          target.replace("Do you want", "Do want you"),
          target.replace("to be", "be"),
        ]
      : [
          target.replace("want to", "want"),
          target.replace("want", "wants"),
          target.replace("want to", "to want"),
        ];
  return { target, spanish, errors };
}
function jobCards(day: number): PilotCard[] {
  // Teacher/astronaut are introduced on day 2; teaching is practised on day 4.
  const pool = jobs.slice(0, day === 1 ? 4 : 6).filter((j) => day !== 3 || j.name !== "teacher");
  const cards = pool.flatMap((job) =>
    pool
      .filter((c) => c !== job)
      .flatMap((contrast) =>
        [0, 1, 2].map((task) => {
          const j = `${article(job.name)} ${job.name}`,
            c = `${article(contrast.name)} ${contrast.name}`;
          let prompt =
            task === 0
              ? "What do you want to be when you grow up?"
              : task === 1
                ? "What do you want to be?"
                : "Tell your partner what you want to be when you grow up.";
          let answer = `When I grow up, I want to be ${j}. / When I grow up, I want to be ${c}.`;
          let hint =
            "When I grow up, I want to be a/an… Accept either pictured job or another job the student knows. Assess the sentence, not the career choice.";
          let wrong = `I want be ${j}.`;
          if (day === 2) {
            prompt =
              task === 0
                ? `Do you want to be ${j}? Give a long answer.`
                : task === 1
                  ? `Ask a classmate if they want to be ${j}. Listen to their answer.`
                  : `Role card: you want to be ${j}. Your partner asks: "Do you want to be ${c}?" Answer as the character.`;
            answer =
              task === 0
                ? `Yes, I do. I want to be ${j}. / No, I don't. I want to be ${c}.`
                : task === 1
                  ? `Do you want to be ${j}?`
                  : `No, I don't. I want to be ${j}.`;
            hint =
              task === 1
                ? "Ask: Do you want to be a/an…? Your partner gives a long answer."
                : "Yes, I do. I want to be… / No, I don't. I want to be…";
            wrong = `Do you wants to be ${j}?`;
          }
          if (day === 3) {
            prompt =
              task === 0
                ? `Why do you want to be ${j}?`
                : task === 1
                  ? `You want to ${job.action}. What do you want to be? Why?`
                  : `Ask a classmate why they want to be ${j}.`;
            answer =
              task === 2
                ? `Why do you want to be ${j}?`
                : `I want to be ${j} because I want to ${job.action}.`;
            hint =
              "I want to be… because I want to… Accept other logical reasons with familiar words.";
            wrong = `I want to be ${j} because I want ${job.action}.`;
          }
          if (day === 4) {
            prompt =
              task === 0
                ? `Why do you want to work at ${article(job.place)} ${job.place}?`
                : task === 1
                  ? `Choose ${article(job.place)} ${job.place} or ${article(contrast.place)} ${contrast.place}. Where do you want to work? Why?`
                  : `Ask a friend why they want to work at ${article(job.place)} ${job.place}.`;
            answer =
              task === 2
                ? `Why do you want to work at ${article(job.place)} ${job.place}?`
                : `I want to work at ${article(job.place)} ${job.place} because I want to ${job.action}.`;
            hint = "I want to work at… because I want to… Accept a logical personal reason.";
            wrong = `I want work at ${article(job.place)} ${job.place}.`;
          }
          const correction =
            day === 1
              ? `I want to be ${j}.`
              : day === 2
                ? `Do you want to be ${j}?`
                : day === 3
                  ? `I want to be ${j} because I want to ${job.action}.`
                  : `I want to work at ${article(job.place)} ${job.place}.`;
          return {
            key: `jobs-d${day}-${job.name}-${contrast.name}-${task}`,
            line: `E || ${job.icon} ${contrast.icon} || ${prompt} || ${answer}`,
            hint,
            spanish: "Responde con una oración. En una actividad en parejas, ambos hablan.",
            falseClaim: wrong,
            correction,
            practice: jobPractice(job, day, task),
            openAnswer: true,
            ...(day === 1
              ? {
                  pictureChoices: [
                    { label: job.name, emoji: job.icon },
                    { label: contrast.name, emoji: contrast.icon },
                  ],
                  choiceNote: "Your choice! You can name another job, too.",
                }
              : {}),
          };
        }),
      ),
  );
  if (day === 1)
    pool.forEach((job) =>
      cards.push({
        key: `job-solo-${job.name}`,
        line: `E || ${job.icon} || What do you want to be when you grow up? || When I grow up, I want to be ${article(job.name)} ${job.name}.`,
        hint: "When I grow up, I want to be a/an… The picture is only an idea; accept another job the student knows.",
        spanish: "Di qué te gustaría ser cuando seas grande. La imagen es solo una idea.",
        falseClaim: `I want be ${article(job.name)} ${job.name}.`,
        correction: `I want to be ${article(job.name)} ${job.name}.`,
        openAnswer: true,
        practice: jobPractice(job, 1),
        pictureChoices: [{ label: job.name, emoji: job.icon }],
        choiceNote: "Your choice! You can name another job, too.",
      }),
    );
  return cards;
}

const routines = [
  ["eat breakfast", "kitchen", "🍳"],
  ["eat dinner", "dining room", "🍽️"],
  ["take a shower", "bathroom", "🚿"],
  ["sleep", "bedroom", "🛏️"],
  ["watch TV", "living room", "📺"],
  ["play soccer", "park", "⚽"],
  ["read a book", "bedroom", "📚"],
  ["do homework", "bedroom", "✏️"],
  ["study English", "classroom", "🏫"],
  ["play with friends", "playground", "🛝"],
  ["brush my teeth", "bathroom", "🪥"],
  ["drink water", "kitchen", "💧"],
  ["write in my notebook", "classroom", "📓"],
  ["run", "park", "🏃"],
  ["dance", "living room", "💃"],
  ["sing", "classroom", "🎤"],
  ["paint", "classroom", "🎨"],
  ["eat lunch", "cafeteria", "🥪"],
  ["play with my dog", "park", "🐕"],
  ["learn math", "classroom", "🔢"],
] as const;
const routineCards: PilotCard[] = routines.flatMap(([verb, place, icon], i) => [
  {
    key: `routine-${i}-what`,
    line: `E || ${icon} || What do you do in the ${place}? || I ${verb} in the ${place}.`,
    hint: "I [activity] in the [place]. Other sensible personal answers are welcome.",
    spanish: "¿Qué haces en ese lugar?",
    falseClaim: `I ${verb} in ${place} the.`,
    correction: `I ${verb} in the ${place}.`,
    openAnswer: true,
    practice: routinePractice(verb, place, i),
  },
  {
    key: `routine-${i}-where`,
    line: `E || ${icon} || Where do you ${verb.replaceAll("my ", "your ")}? || I ${verb} in the ${place}.`,
    hint: "I [activity] in the [place]. Other sensible places are welcome.",
    spanish: "¿Dónde haces esa actividad?",
    falseClaim: `I ${verb} the in ${place}.`,
    correction: `I ${verb} in the ${place}.`,
    openAnswer: true,
    practice: routinePractice(verb, place, i),
  },
]);
function routinePractice(verb: string, place: string, i: number) {
  const translations = [
    "Desayuno en la cocina.",
    "Ceno en el comedor.",
    "Me ducho en el baño.",
    "Duermo en el dormitorio.",
    "Veo televisión en la sala.",
    "Juego fútbol en el parque.",
    "Leo un libro en el dormitorio.",
    "Hago mi tarea en el dormitorio.",
    "Estudio inglés en el salón de clases.",
    "Juego con amigos en el patio de juegos.",
    "Me cepillo los dientes en el baño.",
    "Bebo agua en la cocina.",
    "Escribo en mi cuaderno en el salón de clases.",
    "Corro en el parque.",
    "Bailo en la sala.",
    "Canto en el salón de clases.",
    "Pinto en el salón de clases.",
    "Almuerzo en la cafetería.",
    "Juego con mi perro en el parque.",
    "Aprendo matemáticas en el salón de clases.",
  ];
  const target = `I ${verb} in the ${place}.`;
  return {
    target,
    spanish: translations[i]!,
    errors: [
      `I ${verb} in ${place} the.`,
      `I ${verb} the in ${place}.`,
      `Me ${verb} in the ${place}.`,
    ],
  };
}
const s1 = shapeCards(1),
  s2 = shapeCards(2),
  s3 = shapeCards(3);
const j1 = jobCards(1),
  j2 = jobCards(2),
  j3 = jobCards(3),
  j4 = jobCards(4);
function lesson(
  week: number,
  day: number,
  topic: string,
  focus: string,
  cards: PilotCard[],
  suggested: string[],
  evaluation = false,
): PilotLesson {
  return {
    id: `kids-super-intensive-l2-w${week}-d${day}`,
    course: "Kids Super Intensivo",
    level: 2,
    week,
    day,
    month: week === 4 ? 4 : 5,
    topic,
    focus,
    sourceRow: 76 + (week - 4) * 5 + day,
    evaluation,
    cards,
    suggested,
  };
}
export const PILOT_LESSONS: PilotLesson[] = [
  lesson(4, 1, "Shapes", "There is / There are · Positive sentences", s1, [
    "spotlight",
    "sentence",
    "rocket",
  ]),
  lesson(4, 2, "Shapes", "Is there…? / Are there…? · Yes/No questions", s2, [
    "rocket",
    "detective",
    "mission",
  ]),
  lesson(4, 3, "Shapes", "How many… do you see?", s3, ["spotlight", "rocket", "mission"]),
  lesson(
    4,
    4,
    "Monthly evaluation",
    "Optional review · Shapes from days 1–3",
    [...s1, ...s2, ...s3],
    ["sentence", "spotlight", "rocket"],
    true,
  ),
  lesson(
    4,
    5,
    "Monthly evaluation",
    "Simple present review · What…? / Where…?",
    routineCards,
    ["rocket", "sentence", "mission"],
    true,
  ),
  lesson(5, 1, "Professions", "When I grow up, I want to be…", j1, [
    "spotlight",
    "sentence",
    "rocket",
  ]),
  lesson(5, 2, "Professions", "Do you want to be…? · Long answers", j2, [
    "rocket",
    "detective",
    "mission",
  ]),
  lesson(5, 3, "Professions", "Why do you want to be…?", j3, ["sentence", "rocket", "mission"]),
  lesson(5, 4, "Professions", "Why do you want to work at…?", j4, [
    "rocket",
    "detective",
    "sentence",
  ]),
  lesson(
    5,
    5,
    "Super Star Exam",
    "Optional review · Professions from days 1–4",
    [...j1, ...j2, ...j3, ...j4],
    ["spotlight", "sentence", "mission"],
    true,
  ),
];
export const COURSES: CourseDef[] = [
  {
    name: "Kids Super Intensivo",
    levels: [
      {
        level: 2,
        weeks: [4, 5].map((week) => ({
          week,
          days: PILOT_LESSONS.filter((l) => l.week === week).map((l) => ({
            day: l.day,
            label: `Day ${l.day}${l.evaluation ? " · Optional review" : ""}`,
            focus: l.focus,
            lines: l.cards.map((c) => c.line),
          })),
        })),
        vocab: [
          { week: 4, category: "Shapes", words: shapeNames },
          { week: 5, category: "Professions", words: jobs.map((j) => j.name) },
        ],
      },
    ],
  },
];

const ORIGINAL_SAMPLE: CourseDef[] = [
  {
    name: "Kids Super Intensivo",
    levels: [
      {
        level: 2,
        weeks: [
          {
            week: 4,
            days: [
              {
                day: 1,
                label: "Day 1",
                focus:
                  "There is / there are; simple present, 1st person (review) — Vocabulary: shapes (circle, rectangle, star, heart, square, triangle, oval)",
                lines: [
                  "Q || What do you do on Saturdays? || On Saturdays, I play soccer. / I watch TV on Saturdays.",
                  "Q || What is your favorite color? || My favorite color is blue.",
                  "Q || Where do you eat dinner? || I eat dinner in the kitchen. / I eat dinner at home.",
                  "Q || What time do you wake up? || I wake up at seven o'clock.",
                  "Q || Who do you play with? || I play with my brother. / I play with my friends.",
                  "Q || What do you do after school? || After school, I do my homework.",
                  "Q || What do you do when you are happy? || When I am happy, I dance. / I play with my dog.",
                  "Q || What time do you go to bed? || I go to bed at nine o'clock.",
                  "S || heart:1 || What shape is this? || It's a heart.",
                  "S || star:3, triangle:2 || How many stars are there? || There are three stars.",
                  "S || circle:1, square:2 || Is there a circle? || Yes, there is one circle.",
                  "T || Yo me despierto a las siete. || I wake up at seven.",
                  "T || Yo juego con mi hermano. || I play with my brother.",
                  "T || Mi color favorito es el azul. || My favorite color is blue.",
                  "T || Los sábados yo juego fútbol. || On Saturdays, I play soccer.",
                  "T || Hay una estrella. || There is a star.",
                  "T || Hay tres círculos. || There are three circles.",
                ],
              },
              {
                day: 2,
                label: "Day 2",
                focus: "There is / there are; simple present, 3rd person singular (review)",
                lines: [
                  "Q || What does your mom do in the morning? || My mom cooks breakfast. / She goes to work.",
                  "Q || What does Messi do every day? || Messi plays soccer every day.",
                  "Q || Where does your best friend take a shower? || My best friend takes a shower at home.",
                  "Q || What time does your dad wake up? || My dad wakes up at six o'clock.",
                  "Q || What does your dad do in the afternoon? || My dad works in the afternoon.",
                  "Q || What does your teacher do every day? || My teacher teaches English every day.",
                  "Q || What does your mom do when she is free? || When she is free, my mom reads a book.",
                  "Q || What does your dad do when he is happy? || When he is happy, my dad sings.",
                  "Q || What time does your best friend go to bed? || My best friend goes to bed at nine o'clock.",
                  "S || heart:2, circle:3 || How many hearts are there? || There are two hearts.",
                  "S || triangle:1, star:4 || Is there a triangle? || Yes, there is one triangle.",
                  "T || Mi mamá cocina en la mañana. || My mom cooks in the morning.",
                  "T || Messi juega fútbol todos los días. || Messi plays soccer every day.",
                  "T || Mi papá se despierta a las seis. || My dad wakes up at six.",
                  "T || Mi mejor amigo se baña en la noche. || My best friend takes a shower at night.",
                  "T || Mi hermana hace su tarea después de la escuela. || My sister does her homework after school.",
                  "T || Hay dos corazones rojos. || There are two red hearts.",
                ],
              },
              {
                day: 3,
                label: "Day 3",
                focus: "There is / there are",
                lines: [
                  "S || star:3, heart:2 || How many shapes do you see? || I see five shapes. / There are five shapes.",
                  "S || circle:1, square:4 || How many squares are there? || There are four squares.",
                  "S || heart:5 || How many hearts are there? || There are five hearts.",
                  "S || rectangle:2, circle:2 || Is there a triangle? || No, there isn't a triangle.",
                  "S || square:1, star:3 || Is there a square? || Yes, there is one square.",
                  "S || red heart:1, blue heart:2, yellow star:2 || How many blue hearts are there? || There are two blue hearts.",
                  "S || oval:2, rectangle:1, triangle:3 || What shapes do you see? || I see two ovals, one rectangle and three triangles.",
                  "S || green circle:4, purple star:1 || What color is the star? || The star is purple.",
                  "Q || How many people are there in your family? || There are four people in my family.",
                  "Q || How many pencils are there on your desk? || There are three pencils on my desk.",
                  "Q || Is there a park near your house? || Yes, there is a park near my house. / No, there isn't.",
                  "T || Hay cinco estrellas. || There are five stars.",
                  "T || Hay cuatro personas en mi familia. || There are four people in my family.",
                  "T || Hay tres lápices en mi escritorio. || There are three pencils on my desk.",
                  "T || No hay un triángulo. || There isn't a triangle.",
                  "T || ¿Hay un cuadrado? || Is there a square?",
                  "T || ¿Cuántas estrellas hay? || How many stars are there?",
                ],
              },
            ],
          },
          {
            week: 5,
            days: [
              {
                day: 1,
                label: "Day 1",
                focus:
                  "Simple present, 1st person singular — Vocabulary: professions (doctor, vet, firefighter, police officer)",
                lines: [
                  "Q || What do you want to be in the future? || I want to be a doctor. / I want to be a vet.",
                  "Q || What is your favorite profession? || My favorite profession is firefighter.",
                  "Q || What do you do at school? || I study English at school. / I play with my friends.",
                  "Q || What time do you wake up? || I wake up at six thirty.",
                  "Q || Do you want to be a vet or a firefighter? || I want to be a vet.",
                  "Q || What is your mom's profession? || My mom is a doctor.",
                  "Q || What do you do after school? || After school, I play soccer.",
                  "E || 👮 || Do you want to be a police officer? || Yes, I do. I want to be a police officer. / No, I don't.",
                  "E || 🧑‍🚒 || Do you want to be a firefighter? || Yes, I do. I want to be a firefighter. / No, I don't.",
                  "E || 🐶🩺 || Do you want to be a vet? || Yes, I do. I want to be a vet. / No, I don't.",
                  "T || Yo quiero ser doctora. || I want to be a doctor.",
                  "T || Yo quiero ser veterinario. || I want to be a vet.",
                  "T || Mi profesión favorita es bombero. || My favorite profession is firefighter.",
                  "T || Yo no quiero ser policía. || I don't want to be a police officer.",
                  "T || Yo me despierto a las seis y media. || I wake up at six thirty.",
                  "T || Yo estudio inglés en la escuela. || I study English at school.",
                ],
              },
              {
                day: 2,
                label: "Day 2",
                focus: "Review mode (no own items)",
                lines: [],
              },
              {
                day: 3,
                label: "Day 3",
                focus:
                  "Want to be… because I want to… — Vocabulary: help, stop fires, fight crime, explore space (+ astronaut)",
                lines: [
                  "Q || Where do you want to work? || I want to work in a hospital. / I want to work at a fire station.",
                  "Q || Who do you want to help? || I want to help animals. / I want to help people.",
                  "Q || What do you want to be? Why? || I want to be an astronaut because I want to explore space.",
                  "Q || Why do you want to be a vet? || I want to be a vet because I want to help animals.",
                  "Q || What does a firefighter do? || A firefighter stops fires.",
                  "Q || What does a police officer do? || A police officer fights crime.",
                  "Q || What does an astronaut do? || An astronaut explores space.",
                  "Q || Who helps animals? || A vet helps animals.",
                  "E || 👩‍🚀 || What is her profession? || She is an astronaut.",
                  "E || 👨‍🚒 || What is his profession? || He is a firefighter.",
                  "E || 👮‍♀️ || What is her profession? || She is a police officer.",
                  "T || Yo quiero ser astronauta porque quiero explorar el espacio. || I want to be an astronaut because I want to explore space.",
                  "T || Yo quiero ser veterinaria porque quiero ayudar a los animales. || I want to be a vet because I want to help animals.",
                  "T || Los bomberos apagan incendios. || Firefighters stop fires.",
                  "T || Un policía combate el crimen. || A police officer fights crime.",
                  "T || Yo quiero ayudar a las personas. || I want to help people.",
                  "T || Yo quiero trabajar en un hospital. || I want to work in a hospital.",
                ],
              },
              {
                day: 4,
                label: "Day 4",
                focus: "Review mode (no own items)",
                lines: [],
              },
              {
                day: 5,
                label: "Day 5 (Exam day – review)",
                focus: "Exam day (review mode with all Week 5 items, no own items)",
                lines: [],
              },
            ],
          },
        ],
        vocab: [
          {
            week: 4,
            category: "Shapes",
            words: ["circle", "rectangle", "star", "heart", "square", "triangle", "oval"],
          },
          {
            week: 5,
            category: "Professions",
            words: ["doctor", "vet", "firefighter", "police officer", "astronaut"],
          },
          {
            week: 5,
            category: "What do they do?",
            words: ["help people", "help animals", "stop fires", "fight crime", "explore space"],
          },
        ],
      },
    ],
  },
];
