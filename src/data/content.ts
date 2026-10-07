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

// Reviewed mission content: Level 2, Week 4. Keep all curriculum in this file.
export namespace MissionWeek {
  // Content is authored at build time. No runtime generation or AI calls.
  // Source: COMPLETE CURRICULUM rows 62–81, Level 2, Weeks 1–4.
  export type Theme =
    "bomb" | "rocket" | "rescue" | "smoothie" | "robot" | "memory" | "alien" | "spotlight";
  export type Picture = { shape: string; color: string; count: number };
  export type RobotCue = {
    stage: "recognize" | "repair" | "deliver";
    wanted: string;
    wrong: string;
    request: string;
  };
  export type Card = {
    robotCue?: RobotCue;
    id: string;
    kind: "choice" | "speak" | "repair" | "order" | "memory";
    prompt: string;
    context?: string;
    options?: string[];
    correct?: number;
    answer: string;
    hint: string;
    picture?: Picture;
    words?: string[];
  };
  export type MemoryAction = "swim" | "movies" | "climb" | "stories" | "walk" | "read";
  export type MemoryPair = {
    left: string;
    right: string;
    answer: string;
    picture?: Picture;
    actionPicture?: MemoryAction;
  };
  export type Mission = {
    id: string;
    day: number;
    title: string;
    theme: Theme;
    topic: string;
    goal: string;
    cards: Card[];
    memoryPairs?: MemoryPair[];
  };
  const choice = (
    id: string,
    prompt: string,
    options: string[],
    correct: number,
    hint: string,
    context?: string,
  ): Card => ({
    id,
    kind: "choice",
    prompt,
    options,
    correct,
    answer: options[correct]!,
    hint,
    context: context ?? "",
  });
  const oral = (
    id: string,
    prompt: string,
    answer: string,
    hint: string,
    context?: string,
    kind: Card["kind"] = "speak",
  ): Card => ({ id, kind, prompt, answer, hint, context: context ?? "" });
  const order = (id: string, answer: string, hint: string): Card => ({
    id,
    kind: "order",
    prompt: "Put the words in order. Say the sentence.",
    answer,
    hint,
    words: answer.split(" "),
  });
  const shapes = ["circle", "triangle", "square", "star", "heart", "rectangle", "oval"];
  const colors = ["blue", "orange", "green", "yellow", "red"];
  function shapeCards(mode: "questions" | "count" | "review"): Card[] {
    return Array.from({ length: 16 }, (_, i) => {
      const shape = shapes[i % 7]!,
        color = colors[i % 5]!,
        count = (i % 4) + 1,
        noun = shape + (count > 1 ? "s" : ""),
        id = `${mode}-${i}`;
      const sentence = `There ${count === 1 ? "is" : "are"} ${count === 1 ? "one" : ["zero", "one", "two", "three", "four"][count]} ${color} ${noun}.`;
      const hint = count === 1 ? "One shape: use “is”." : "More than one shape: use “are”.";
      let c: Card;
      if (mode === "questions") {
        const mismatch = i % 3 === 0,
          asked = mismatch ? shapes[(i + 1) % 7] : shape;
        const question = count === 1 ? `Is there a ${asked}?` : `Are there ${asked}s?`;
        const yes = count === 1 ? "Yes, there is." : "Yes, there are.",
          no = count === 1 ? "No, there isn’t." : "No, there aren’t.";
        switch (i % 4) {
          case 0:
            c = choice(
              id,
              question,
              [yes, no],
              mismatch ? 1 : 0,
              "Look at the picture before you answer.",
            );
            break;
          case 1:
            c = oral(
              id,
              `Ask a yes/no question about the ${noun}.`,
              count === 1 ? `Is there a ${shape}?` : `Are there ${noun}?`,
              "Start with “Is there” or “Are there”.",
            );
            break;
          case 2:
            c = oral(
              id,
              "Fix the question. Then say it.",
              `Are there ${noun}?`,
              "Use “are” with more than one.",
              `Is there ${noun}?`,
              "repair",
            );
            break;
          default:
            c = order(id, `Are there ${noun}?`, "Start with “Are”.");
        }
      } else if (mode === "count") {
        switch (i % 4) {
          case 0:
            c = choice(
              id,
              `How many ${shape}s do you see?`,
              [`I see ${count + 1}.`, `I see ${count}.`, `I see ${count + 2}.`],
              1,
              "Count each shape once.",
            );
            break;
          case 1:
            c = oral(
              id,
              `How many ${shape}s do you see?`,
              `I see ${count} ${noun}.`,
              "Start with “I see”.",
            );
            break;
          case 2:
            c = oral(
              id,
              "Remember the picture. How many shapes do you see?",
              `I see ${count} ${noun}.`,
              "Count the shapes before hiding the picture.",
              undefined,
              "memory",
            );
            break;
          default:
            c = order(id, `I see ${count} ${noun}.`, "Start with “I see”.");
        }
      } else {
        switch (i % 4) {
          case 0:
            c = choice(
              id,
              "Choose the sentence that matches.",
              [sentence.replace("is", "are"), sentence],
              1,
              hint,
            );
            if (count !== 1) c.options = [sentence.replace("are", "is"), sentence];
            break;
          case 1:
            c = oral(id, "Describe the picture.", sentence, hint);
            break;
          case 2:
            c = oral(
              id,
              "Fix the message.",
              sentence,
              hint,
              sentence.replace(count === 1 ? "is" : "are", count === 1 ? "are" : "is"),
              "repair",
            );
            break;
          default:
            c = order(id, sentence, hint);
        }
      }
      return { ...c, picture: { shape, color, count } };
    });
  }
  const pets: Card[] = [
    choice(
      "p0",
      "Who can help at the wall?",
      ["Leo", "Turbo"],
      0,
      "Look for the pet that climbs.",
      "Leo climbs walls. Turbo walks slowly.",
    ),
    oral(
      "p1",
      "Fix the message.",
      "Goofy runs fast.",
      "He/she: add -s.",
      "Goofy run fast.",
      "repair",
    ),
    order("p2", "Super Meow jumps from house to house.", "Start with the pet’s name."),
    oral(
      "p3",
      "What does Coco do?",
      "Coco talks and tells stories.",
      "Start with “Coco”.",
      "Coco talks and tells superhero stories.",
    ),
    choice("p4", "Complete: Turbo ___ slowly.", ["walk", "walks"], 1, "Turbo is one pet."),
    oral(
      "p5",
      "Ask about Goofy.",
      "Does Goofy run fast?",
      "Start with “Does”.",
      "Find out if Goofy runs fast.",
    ),
    choice(
      "p6",
      "Does Leo climb walls?",
      ["Yes, he does.", "No, he doesn’t."],
      0,
      "Read Leo’s action.",
      "Leo climbs walls.",
    ),
    oral(
      "p7",
      "Fix the question.",
      "Does Coco talk?",
      "After “does”, use “talk”.",
      "Does Coco talks?",
      "repair",
    ),
    order("p8", "Turbo walks very slowly.", "Start with “Turbo”."),
    oral(
      "p9",
      "Remember: who jumps?",
      "Super Meow jumps.",
      "Remember the pet’s name.",
      "Leo climbs. Super Meow jumps. Coco talks.",
      "memory",
    ),
    choice(
      "p10",
      "Choose the message that matches.",
      ["Goofy walks slowly.", "Goofy runs fast."],
      1,
      "Find Goofy’s action.",
      "Goofy runs fast. Turbo walks slowly.",
    ),
    oral(
      "p11",
      "What does Leo do? Say one more pet’s action.",
      "Leo climbs walls. Coco talks.",
      "Use a pet’s name and its action.",
    ),
    order("p12", "Does Turbo walk slowly?", "Does + name + action."),
    oral(
      "p13",
      "Fix the message.",
      "Coco tells stories.",
      "Coco is one pet.",
      "Coco tell stories.",
      "repair",
    ),
    choice(
      "p14",
      "Who tells stories?",
      ["Turbo", "Coco", "Goofy"],
      1,
      "Coco talks and tells stories.",
    ),
    oral("p15", "Ask a classmate about Super Meow.", "Does Super Meow jump?", "Start with “Does”."),
  ];
  const hobbies: Card[] = [
    choice(
      "h0",
      "What does Sally do on Saturdays?",
      ["She swims.", "She rides a seahorse."],
      0,
      "Find Sally’s activity.",
      "On Saturdays, Sally swims. Crusty rides his seahorse.",
    ),
    oral(
      "h1",
      "Fix the message.",
      "Crusty plays video games.",
      "He/she: add -s.",
      "Crusty play video games.",
      "repair",
    ),
    order("h2", "Sally reads books on weekends.", "Start with “Sally”."),
    oral(
      "h3",
      "What does Crusty do on Sundays?",
      "He watches movies.",
      "Start with “He”.",
      "Crusty watches movies with his dad on Sundays.",
    ),
    choice("h4", "Complete: Sally ___ to music.", ["listens", "listen"], 0, "Sally is one person."),
    oral(
      "h5",
      "Ask about Sally.",
      "Does Sally read books?",
      "Start with “Does”.",
      "Find out if Sally reads books.",
    ),
    choice(
      "h6",
      "Does Crusty swim on Saturdays?",
      ["Yes, he does.", "No, he doesn’t."],
      1,
      "Sally swims; Crusty rides.",
      "Sally swims. Crusty rides his seahorse.",
    ),
    oral(
      "h7",
      "Fix the question.",
      "Does Crusty watch movies?",
      "After “does”, use “watch”.",
      "Does Crusty watches movies?",
      "repair",
    ),
    order("h8", "Sally listens to music with her mom.", "Start with “Sally”."),
    oral(
      "h9",
      "Remember: who reads books?",
      "Sally reads books.",
      "Remember each person’s activity.",
      "Sally reads books. Crusty plays video games.",
      "memory",
    ),
    choice(
      "h10",
      "When does Sally swim?",
      ["On Saturdays.", "On Sundays."],
      0,
      "Find the day.",
      "Sally swims on Saturdays and listens to music on Sundays.",
    ),
    oral(
      "h11",
      "What do you do on weekends?",
      "I play soccer. / Any relevant full sentence.",
      "Start with “I”.",
    ),
    order("h12", "Crusty watches movies with his dad.", "Start with “Crusty”."),
    oral(
      "h13",
      "Fix the message.",
      "Sally swims in the sea.",
      "Sally is one person.",
      "Sally swim in the sea.",
      "repair",
    ),
    choice(
      "h14",
      "Where does Sally swim?",
      ["In the sea.", "In the classroom."],
      0,
      "Find the place.",
      "Sally swims in the sea.",
    ),
    oral(
      "h15",
      "Ask a classmate about a hobby.",
      "Do you read books? / Any relevant hobby question.",
      "Start with “Do you”.",
    ),
  ];
  const food: Card[] = [
    choice(
      "f0",
      "Which ingredient belongs in the drink?",
      ["Onions", "Strawberries", "Potatoes"],
      1,
      "Choose what the customer likes.",
      "I like strawberries. I don’t like onions.",
    ),
    oral(
      "f1",
      "Fix the customer’s message.",
      "I like grapes.",
      "With “I”, use “like”.",
      "I likes grapes.",
      "repair",
    ),
    order("f2", "I do not like onions.", "Start with “I”."),
    oral(
      "f3",
      "You are the customer. What fruit do you like?",
      "I like mangoes. / Any fruit + full sentence.",
      "Start with “I like”.",
    ),
    choice(
      "f4",
      "Do you like carrots? Answer for the customer.",
      ["No, I don’t.", "Yes, I do."],
      1,
      "The customer likes carrots.",
      "I like carrots.",
    ),
    oral(
      "f5",
      "Why does the customer like grapes?",
      "Because they are sweet.",
      "Start with “Because”.",
      "I like grapes because they are sweet.",
    ),
    choice(
      "f6",
      "Complete the customer’s message.",
      ["I like", "I don’t like"],
      1,
      "The customer dislikes onions.",
      "___ onions. They are smelly.",
    ),
    oral("f7", "Ask the customer about mangoes.", "Do you like mangoes?", "Start with “Do you”."),
    order("f8", "I like strawberries because they are sweet.", "Start with “I like”."),
    oral(
      "f9",
      "Remember: which fruit does the customer like?",
      "The customer likes grapes. / Grapes.",
      "Remember the fruit, not the vegetable.",
      "I like grapes. I don’t like carrots.",
      "memory",
    ),
    choice(
      "f10",
      "Choose the correct customer message.",
      ["I don’t likes onions.", "I don’t like onions."],
      1,
      "After “don’t”, use “like”.",
    ),
    oral(
      "f11",
      "Name a fruit you like and a vegetable you dislike.",
      "I like grapes. I don’t like onions. / Any relevant answer.",
      "Use “I like” and “I don’t like”.",
    ),
    order("f12", "Do you like potatoes?", "Start with “Do”."),
    oral(
      "f13",
      "Fix the message.",
      "I like carrots.",
      "Use “like” with “I”.",
      "I likes carrots.",
      "repair",
    ),
    choice(
      "f14",
      "Which fruit is in the order?",
      ["Mangoes", "Onions", "Carrots"],
      0,
      "Find the fruit.",
      "I like mangoes because they are delicious.",
    ),
    oral(
      "f15",
      "Answer a classmate: Why do you like that fruit?",
      "Because it is sweet. / Any relevant reason.",
      "Use “because” and a describing word.",
    ),
  ];
  const where: Card[] = [
    choice(
      "w0",
      "Where does Sally swim?",
      ["In the sea.", "In the kitchen."],
      0,
      "Find the place.",
      "Sally swims in the sea.",
    ),
    oral(
      "w1",
      "What does Coco do?",
      "Coco tells stories.",
      "Start with “Coco”.",
      "Coco tells superhero stories.",
    ),
    order("w2", "Where does Sally swim?", "Ask about a place."),
    oral(
      "w3",
      "Fix the question.",
      "What does Goofy do?",
      "Use “does” with Goofy.",
      "What do Goofy do?",
      "repair",
    ),
    choice(
      "w4",
      "Which question asks about a place?",
      ["What does Sally do?", "Where does Sally swim?"],
      1,
      "“Where” asks about a place.",
    ),
    oral(
      "w5",
      "Where do you read?",
      "I read in my bedroom. / Any relevant place.",
      "Start with “I read in”.",
    ),
    choice(
      "w6",
      "What does Crusty watch?",
      ["Movies.", "Books."],
      0,
      "Find the thing he watches.",
      "Crusty watches movies with his dad.",
    ),
    oral(
      "w7",
      "Remember: where does Sally swim?",
      "In the sea.",
      "Remember the place.",
      "Sally swims in the sea on Saturdays.",
      "memory",
    ),
    order("w8", "What does Crusty do?", "Start with “What”."),
    oral(
      "w9",
      "Ask a classmate where they play.",
      "Where do you play?",
      "Start with “Where do you”.",
    ),
    choice("w10", "Complete: Where ___ you read?", ["does", "do"], 1, "Use “do” with “you”."),
    oral(
      "w11",
      "Fix the question.",
      "Where does Sally swim?",
      "After “does”, use “swim”.",
      "Where does Sally swims?",
      "repair",
    ),
    oral(
      "w12",
      "What do you like to do on weekends?",
      "I play soccer. / Any relevant activity.",
      "Say an activity you know.",
    ),
  ];
  const questions = shapeCards("questions"),
    counts = shapeCards("count"),
    review = shapeCards("review");
  const mix = (...banks: Card[][]): Card[] =>
    Array.from({ length: 16 }, (_, i) => {
      const bank = banks[i % banks.length];
      if (!bank?.length) throw new Error("Empty review bank");
      return bank[Math.floor(i / banks.length) + 8] ?? bank[i % bank.length]!;
    });
  export const dayDetails: Record<number, { title: string; note: string }> = {
    1: { title: "Shapes & review", note: "The original three previews." },
    2: {
      title: "Is there? Are there?",
      note: "Today: shape questions. Review: Super Pets and food preferences.",
    },
    3: {
      title: "How many do you see?",
      note: "Today: counting shapes. Review: hobbies and shape descriptions.",
    },
    4: {
      title: "Monthly review",
      note: "Optional practice alongside the monthly evaluation. These games do not replace the assessment.",
    },
    5: {
      title: "What? Where?",
      note: "Optional closing review: simple present and What / Where questions. These games do not replace the assessment.",
    },
  };
  const shapePairs: MemoryPair[] = Array.from({ length: 9 }, (_, i) => {
    const count = (i % 3) + 1,
      shape = shapes[i % 7]!,
      color = colors[i % 5]!,
      words = `${count} ${color} ${shape}${count > 1 ? "s" : ""}`;
    return {
      left: words,
      right: words,
      answer: `I see ${words}.`,
      picture: { shape, color, count },
    };
  });
  const actionPairs: MemoryPair[] = [
    {
      left: "Sally · sea",
      right: "She swims in the sea.",
      answer: "Sally swims in the sea.",
      actionPicture: "swim",
    },
    {
      left: "Crusty · movies",
      right: "He watches movies.",
      answer: "Crusty watches movies.",
      actionPicture: "movies",
    },
    {
      left: "Leo · walls",
      right: "He climbs walls.",
      answer: "Leo climbs walls.",
      actionPicture: "climb",
    },
    {
      left: "Coco · stories",
      right: "Coco tells stories.",
      answer: "Coco tells stories.",
      actionPicture: "stories",
    },
    {
      left: "Turbo · slowly",
      right: "Turbo walks slowly.",
      answer: "Turbo walks slowly.",
      actionPicture: "walk",
    },
    {
      left: "Sally · books",
      right: "She reads books.",
      answer: "Sally reads books.",
      actionPicture: "read",
    },
  ];
  const cargoCards: Card[] = Array.from({ length: 16 }, (_, i) => {
    const p = review[i]!.picture!,
      match = i % 3 === 0,
      claimCount = match ? p.count : p.count + 1;
    const claim = `There ${claimCount === 1 ? "is" : "are"} ${claimCount} ${p.color} ${p.shape}${claimCount > 1 ? "s" : ""}.`;
    return {
      ...choice(
        `cargo-${i}`,
        "Does the cargo match? Say why.",
        ["Let it through", "Send it back"],
        match ? 0 : 1,
        "Compare the number, color and shape.",
        claim,
      ),
      picture: p,
      answer: match
        ? "Let it through. The message matches."
        : `Send it back. There ${p.count === 1 ? "is" : "are"} ${p.count} ${p.shape}${p.count > 1 ? "s" : ""}.`,
    };
  });
  // The action and the language share the same customer request in every robot trial.
  const robotOrders: [string, string][] = [
    ["strawberries", "onions"],
    ["mangoes", "potatoes"],
    ["grapes", "carrots"],
    ["carrots", "onions"],
  ];
  const robotTraining: Card[] = robotOrders.flatMap(([wanted, wrong], i) => {
    const request = `I like ${wanted}. I don’t like ${wrong}.`;
    const cue = (stage: RobotCue["stage"]): RobotCue => ({ stage, wanted, wrong, request });
    const select = choice(
      `train-${i}-pick`,
      "What should the robot bring?",
      [wrong, wanted],
      1,
      "Choose the food the customer likes.",
      request,
    );
    const repair = oral(
      `train-${i}-fix`,
      "Fix the robot’s message.",
      `I like ${wanted}.`,
      "After “I”, use “like”.",
      `I likes ${wanted}.`,
      "repair",
    );
    const build = order(
      `train-${i}-build`,
      `I don’t like ${wrong}.`,
      "Tell the robot what the customer does not like.",
    );
    build.prompt = "Build the message for the robot.";
    const explain = oral(
      `train-${i}-deliver`,
      "Tell the robot what to bring and what to leave.",
      request,
      "Say “I like…” and “I don’t like…”.",
      request,
    );
    return [
      { ...select, robotCue: cue("recognize") },
      { ...repair, robotCue: cue("repair") },
      { ...build, robotCue: cue("repair") },
      { ...explain, robotCue: cue("deliver") },
    ];
  });
  export const missions: Mission[] = [
    {
      id: "d2-shape-bomb",
      day: 2,
      title: "Shape Code: Beat the Bomb",
      theme: "bomb",
      topic: "Shapes · Is there / Are there",
      goal: "Decode the shape messages before the fuse burns out.",
      cards: questions,
    },
    {
      id: "d2-pet-race",
      day: 2,
      title: "Super Pets Space Race",
      theme: "rocket",
      topic: "Week 3 review · Pet actions",
      goal: "Use the pets’ actions to power your team’s rocket.",
      cards: pets,
    },
    {
      id: "d2-recipe-robot",
      day: 2,
      title: "Robot Café",
      theme: "robot",
      topic: "Week 1 review · Likes / dislikes",
      goal: "Place an order, check the robot’s tray and serve every customer before closing time.",
      cards: robotTraining,
    },
    {
      id: "d3-count-memory",
      day: 3,
      title: "Shape Memory Vault",
      theme: "memory",
      topic: "Shapes · How many",
      goal: "Study the cards, find matching pictures and messages, then describe the pair.",
      cards: counts,
      memoryPairs: shapePairs,
    },
    {
      id: "d3-weekend-rescue",
      day: 3,
      title: "The Weekend Rescue",
      theme: "rescue",
      topic: "Week 2 review · Hobbies",
      goal: "Help Sally and Crusty send the right messages to repair the bridge.",
      cards: hobbies,
    },
    {
      id: "d3-alien-customs",
      day: 3,
      title: "Alien Cargo Check",
      theme: "alien",
      topic: "Shapes · There is / There are",
      goal: "Scan each cargo crate. Check the message and decide whether the ship can pass.",
      cards: cargoCards,
    },
    {
      id: "d4-shape-spotlight",
      day: 4,
      title: "The Hidden Shape Vault",
      theme: "spotlight",
      topic: "Monthly review · Shape descriptions",
      goal: "Open numbered windows, uncover the clues and power up the vault.",
      cards: review,
    },
    {
      id: "d4-review-race",
      day: 4,
      title: "The Review Grand Prix",
      theme: "rocket",
      topic: "Monthly review · Questions and descriptions",
      goal: "Use your team’s English to reach Planet Nova.",
      cards: mix(questions, hobbies, food),
    },
    {
      id: "d4-review-code",
      day: 4,
      title: "Monthly Review: Beat the Bomb",
      theme: "bomb",
      topic: "Monthly review · Shapes, food and hobbies",
      goal: "Use your English to unlock the secret code and defuse the bomb before time runs out.",
      cards: mix(review, food, hobbies),
    },
    {
      id: "d5-final-bomb",
      day: 5,
      title: "The Last Secret Code",
      theme: "bomb",
      topic: "Week finale · Mixed review",
      goal: "Work together to unlock the final code.",
      cards: mix(counts, food, where),
    },
    {
      id: "d5-question-race",
      day: 5,
      title: "What & Where Space Race",
      theme: "rocket",
      topic: "Simple present · What / Where",
      goal: "Compete in two teams. Ask and answer questions to boost your rocket toward Planet Nova.",
      cards: where,
    },
    {
      id: "d5-action-memory",
      day: 5,
      title: "The Weekend Memory Vault",
      theme: "memory",
      topic: "Review · Actions, places, hobbies",
      goal: "Find two identical action pictures. Describe the action in a full sentence to unlock the vault.",
      cards: mix(where, hobbies, pets),
      memoryPairs: actionPairs,
    },
  ];
  // Keep previously shared preview URLs reachable after the rotation changes.
  export const missionAliases: Record<string, string> = {
    "d2-pet-rescue": "d2-pet-race",
    "d2-fruit-lab": "d2-recipe-robot",
    "d3-count-race": "d3-count-memory",
    "d3-shape-bomb": "d3-alien-customs",
    "d4-recipe-lab": "d4-review-code",
    "d4-review-bomb": "d4-shape-spotlight",
    "d5-message-robot": "d5-question-race",
    "d5-message-rescue": "d5-question-race",
    "d5-weekend-race": "d5-action-memory",
  };
  export const selectedMissionIds: Record<number, string[]> = {
    1: [],
    2: ["d2-shape-bomb", "d2-pet-race"],
    3: ["d3-count-memory", "d3-alien-customs"],
    4: ["d4-shape-spotlight", "d4-review-code"],
    5: ["d5-question-race", "d5-action-memory"],
  };
  export const weeklyRotation: Record<number, Theme[]> = { 1: ["spotlight", "rescue"] };
  for (let day = 2; day <= 5; day++)
    weeklyRotation[day] = missions
      .filter((m) => selectedMissionIds[day]?.includes(m.id))
      .map((m) => m.theme);
  export function validateRotation() {
    for (let day = 1; day <= 5; day++) {
      const games = weeklyRotation[day] ?? [];
      if (games.length < 1 || games.length > 2 || new Set(games).size !== games.length)
        throw new Error(`Day ${day} needs one or two different games.`);
      // Mechanics may repeat on consecutive days when lesson content calls for it.
    }
  }
  validateRotation();
}

// Reviewed mission content: Level 2, Week 4. Keep all curriculum in this file.
export namespace MissionAdventures {
  // COMPLETE CURRICULUM: L2 W3 (rows 72–76) and L2 W1 (rows 62–66).
  // Content is authored at build time. Personal preferences accept any grammatical answer.
  export type Option = { label: string; icon?: string; value: string };
  export type Round = {
    title: string;
    kind: "choose" | "repair" | "translate" | "memory" | "build" | "personal";
    prompt: string;
    second: string;
    answers: [string, string];
    hint: string;
    options?: Option[];
    secondOptions?: Option[];
    correctSelections?: [string, string];
    words?: string[];
    pet?: string;
    memory?: string;
    ingredients?: string[];
    order?: string;
    orderLabel?: string;
    selectionModes?: ["add" | "exclude" | "none", "add" | "exclude" | "none"];
    recipe?: string;
  };
  export const pets: Round[] = [
    {
      correctSelections: ["Leo", "climbs"],
      secondOptions: [
        { label: "climbs", value: "climbs" },
        { label: "walks", value: "walks" },
        { label: "talks", value: "talks" },
      ],
      title: "The high wall",
      kind: "choose",
      pet: "cat",
      prompt: "Who climbs walls? Choose the hero and say why.",
      second: "Complete the radio message: Leo ___ walls.",
      answers: ["Leo climbs walls.", "Leo climbs walls."],
      hint: "With Leo, use climbs.",
      options: [
        { label: "Leo · cat", icon: "🐱", value: "Leo" },
        { label: "Turbo · turtle", icon: "🐢", value: "Turbo" },
      ],
    },
    {
      title: "Repair the bridge",
      kind: "repair",
      pet: "dog",
      prompt: "Goofy run super fast.",
      second: "Tell the team what Goofy does.",
      answers: ["Goofy runs super fast.", "Goofy runs super fast."],
      hint: "One dog: run → runs.",
    },
    {
      correctSelections: ["walks", "walks"],
      secondOptions: [
        { label: "walks", value: "walks" },
        { label: "runs", value: "runs" },
        { label: "jumps", value: "jumps" },
      ],
      title: "The secret tunnel",
      kind: "translate",
      pet: "turtle",
      prompt: "La tortuga camina muy despacio.",
      second: "Choose the action and say a sentence about Turbo.",
      answers: [
        "The turtle walks very slowly. / Turbo walks very slowly.",
        "Turbo walks very slowly.",
      ],
      hint: "Camina = walks. Muy despacio = very slowly.",
      options: [
        { label: "The turtle walks very slowly.", value: "walks" },
        { label: "The turtle runs very fast.", value: "runs" },
        { label: "The turtle jumps.", value: "jumps" },
      ],
    },
    {
      title: "The lost signal",
      kind: "memory",
      pet: "parrot",
      prompt: "Who talks? Remember the team card.",
      second: "What does Super Meow do?",
      answers: ["Coco talks.", "Super Meow jumps."],
      hint: "Coco is the parrot. Super Meow is the cat.",
      memory: "Coco talks. Super Meow jumps.",
    },
    {
      title: "Across the rooftops",
      kind: "build",
      pet: "cat",
      prompt: "Build the message for Super Meow.",
      second: "Say the full message to send our hero across.",
      answers: ["Super Meow jumps from house to house.", "Super Meow jumps from house to house."],
      hint: "Start with Super Meow, then jumps.",
      words: ["house.", "jumps", "Super Meow", "from house", "to"],
    },
    {
      correctSelections: ["b", "b"],
      title: "The control tower",
      kind: "choose",
      pet: "parrot",
      prompt: "Choose the correct message for Coco.",
      second: "Tell Coco to send the full message: what does Coco do?",
      answers: ["Coco talks and tells stories.", "Coco talks and tells stories."],
      hint: "One parrot: talks and tells.",
      options: [
        { label: "Coco talk and tells stories.", value: "a" },
        { label: "Coco talks and tells stories.", value: "b" },
        { label: "Coco talks and tell stories.", value: "c" },
      ],
    },
    {
      title: "Bring everybody home",
      kind: "personal",
      pet: "dog",
      prompt: "Choose a Super Pet and describe its action.",
      second: "Choose a DIFFERENT Super Pet and describe its action.",
      answers: [
        "Leo climbs walls. / Goofy runs. / Super Meow jumps. / Turbo walks. / Coco talks.",
        "Any different pet with a correct action sentence.",
      ],
      hint: "Name + climbs / runs / jumps / walks / talks.",
      options: [
        { label: "Leo", icon: "🐱", value: "Leo" },
        { label: "Goofy", icon: "🐶", value: "Goofy" },
        { label: "Coco", icon: "🦜", value: "Coco" },
      ],
    },
  ];
  export const food: Record<string, { label: string; icon: string; color: string }> = {
    strawberries: { label: "strawberries", icon: "🍓", color: "#ff6482" },
    grapes: { label: "grapes", icon: "🍇", color: "#ab84ed" },
    mangoes: { label: "mangoes", icon: "🥭", color: "#ffb340" },
    carrots: { label: "carrots", icon: "🥕", color: "#ff8b49" },
    onions: { label: "onions", icon: "🧅", color: "#d7b3c9" },
    potatoes: { label: "potatoes", icon: "🥔", color: "#c9aa72" },
  };
  export const smoothies: Round[] = [
    {
      title: "A sweet first order",
      kind: "choose",
      orderLabel: "TU TARJETA DE CLIENTE",
      order: "👍 strawberries · 👎 onions",
      selectionModes: ["add", "exclude"],
      prompt: "Choose what you like. Say: “I like…”",
      second: "Choose what you don’t like. Say: “I don’t like…”",
      answers: ["I like strawberries.", "I don’t like onions."],
      hint: "Use your card: thumbs up means like; thumbs down means don’t like.",
      ingredients: ["strawberries", "onions", "grapes"],
    },
    {
      title: "The mixed-up recipe",
      kind: "repair",
      orderLabel: "TU MISIÓN: CORREGIR EL MENSAJE",
      order: "🍇 grapes",
      recipe: "grapes",
      prompt: "Fix your message: “I likes grapes.”",
      second: "Ask your partner if they like grapes.",
      answers: ["I like grapes.", "Do you like grapes?"],
      hint: "With I, use like. Start the question with Do you…",
    },
    {
      title: "The secret order",
      kind: "translate",
      orderLabel: "TU TARJETA DE CLIENTE · EN ESPAÑOL",
      order: "Me gustan los mangos. No me gustan las cebollas.",
      selectionModes: ["add", "exclude"],
      prompt: "Choose what you like. Tell the chef in English.",
      second: "Choose what you don’t like. Tell the chef in English.",
      answers: ["I like mangoes.", "I don’t like onions."],
      hint: "Me gustan = I like. No me gustan = I don’t like.",
      ingredients: ["onions", "mangoes", "carrots"],
    },
    {
      title: "The missing recipe",
      kind: "memory",
      memory: "I like carrots. I don’t like potatoes.",
      selectionModes: ["add", "exclude"],
      prompt: "Remember your card. Choose what you like and say it.",
      second: "Remember your card. Choose what you don’t like and say it.",
      answers: ["I like carrots.", "I don’t like potatoes."],
      hint: "You like carrots. You don’t like potatoes.",
      ingredients: ["potatoes", "grapes", "carrots"],
    },
    {
      title: "Build a sweet message",
      kind: "build",
      orderLabel: "TU MISIÓN: EXPLICAR TUS GUSTOS",
      order: "🍇 grapes · sweet",
      recipe: "grapes",
      prompt: "Put the words in order to explain why you like grapes.",
      second: "Read your team’s complete message to the chef.",
      answers: ["I like grapes because they are sweet.", "I like grapes because they are sweet."],
      hint: "Start with I like grapes. Then explain why.",
      words: ["sweet.", "I like", "because", "grapes", "they are"],
    },
    {
      title: "Your own creation",
      kind: "personal",
      orderLabel: "TUS GUSTOS REALES",
      order: "Choose your own favorite!",
      selectionModes: ["add", "none"],
      prompt: "Choose an ingredient YOU like. Tell us why.",
      second: "Ask the first speaker if they like the ingredient in the blender.",
      answers: [
        "Any true preference: I like mangoes because they are delicious, for example.",
        "Do you like [ingredient]? The first speaker answers: Yes, I do. / No, I don’t.",
      ],
      hint: "I like… because… / Do you like…?",
      ingredients: ["mangoes", "strawberries", "grapes"],
    },
    {
      title: "The grand opening",
      kind: "personal",
      orderLabel: "TUS GUSTOS REALES",
      order: "A new recipe for your team!",
      selectionModes: ["add", "exclude"],
      prompt: "Choose an ingredient you like. Say why.",
      second: "Choose an ingredient you don’t like. Tell the chef to leave it out.",
      answers: [
        "Any grammatical personal preference using I like… because…",
        "Any grammatical personal preference using I don’t like…",
      ],
      hint: "Your preference is your choice. Say I like… or I don’t like…",
      ingredients: ["strawberries", "carrots", "potatoes", "onions", "mangoes", "grapes"],
    },
  ];
}

// Reviewed mission content: Level 2, Week 4. Keep all curriculum in this file.
export namespace MissionSpotlight {
  // Independent prototype. COMPLETE CURRICULUM, level 2 week 4 day 1: shapes, positive there is/are.
  export const challenges = [
    {
      kind: "OBSERVE",
      title: "The first signal",
      prompt: "Describe the picture.",
      shape: "star",
      color: "#ffd75d",
      count: 3,
      lead: "Describe what you see.",
      follow: "Say the sentence with its color.",
      answers: ["There are three stars.", "There are three yellow stars."],
    },
    {
      kind: "CHOOSE",
      title: "Find the safe path",
      prompt: "Which message matches the picture?",
      shape: "circle",
      color: "#68baff",
      count: 1,
      options: [
        "There are one blue circle.",
        "There is one blue circle.",
        "There is one blue star.",
      ],
      correct: 1,
      lead: "Choose the correct message.",
      follow: "Read the complete message aloud.",
      answers: ["There is one blue circle.", "There is one blue circle."],
    },
    {
      kind: "REPAIR",
      title: "Repair the radio",
      prompt: "There is two green triangles.",
      shape: "triangle",
      color: "#69ddac",
      count: 2,
      lead: "Find and fix the mistake.",
      follow: "Say the corrected message from beginning to end.",
      answers: [
        "Change “is” to “are”. There are two green triangles.",
        "There are two green triangles.",
      ],
    },
    {
      kind: "TRANSLATE",
      title: "Decode the message",
      prompt: "Hay cuatro corazones rojos.",
      shape: "heart",
      color: "#ff807e",
      count: 4,
      lead: "Say this message in English.",
      follow: "Now describe the picture without its color.",
      answers: ["There are four red hearts.", "There are four hearts."],
    },
    {
      kind: "BUILD",
      title: "Connect the bridge",
      prompt: "Build the message, then say it.",
      shape: "square",
      color: "#ad9af8",
      count: 2,
      words: ["purple", "There", "squares.", "two", "are"],
      lead: "Tell the coach the word order.",
      follow: "Read your completed sentence aloud.",
      answers: ["There are two purple squares.", "There are two purple squares."],
    },
    {
      kind: "REMEMBER",
      title: "Keep the signal alive",
      prompt: "Look carefully. Then the coach hides the picture.",
      shape: "oval",
      color: "#ffb06e",
      count: 5,
      lead: "After the picture is hidden, say what you remember.",
      follow: "Say the full message including the color.",
      answers: ["There are five ovals.", "There are five orange ovals."],
    },
    {
      kind: "FINAL SIGNAL",
      title: "Open the island gate",
      prompt: "Complete: There _____ one yellow rectangle.",
      shape: "rectangle",
      color: "#ffd75d",
      count: 1,
      lead: "Supply the missing word and say the sentence.",
      follow: "Send the final message: describe the picture.",
      answers: ["There is one yellow rectangle.", "There is one yellow rectangle."],
    },
  ];
  export const spotlightChallenges = challenges.map((c, i) =>
    i === 0
      ? {
          ...c,
          kind: "CHOOSE",
          title: "Light the first crystal",
          prompt: "There ___ six orange triangles.",
          shape: "triangle",
          color: "#ff9800",
          count: 6,
          options: ["IS", "ARE"],
          correct: 1,
          lead: "Choose IS or ARE.",
          follow: "Say the complete sentence.",
          answers: ["ARE", "There are six orange triangles."],
        }
      : {
          ...c,
          title: [
            "",
            "Find the hidden circle",
            "Repair the message",
            "Decode the secret",
            "Build the message",
            "Remember the light",
            "Unlock the vault",
          ][i]!,
        },
  );
}

// Only these reviewed activities appear in the Week 4 publication.
export const APPROVED_WEEK4: Record<
  number,
  { id: string; name: string; icon: string; goal: string; path: string }[]
> = {
  1: [
    {
      id: "spotlight",
      name: "Mystery Spotlight",
      icon: "🔦",
      goal: "Describe shapes to open the vault.",
      path: "spotlight.html",
    },
    {
      id: "rescue",
      name: "Super Pets Rescue",
      icon: "🐾",
      goal: "Review Week 3 actions and rescue the team.",
      path: "rescue.html",
    },
  ],
  2: [
    {
      id: "d2-shape-bomb",
      name: "Shape Code: Beat the Bomb",
      icon: "💣",
      goal: "Ask and answer shape questions to defuse the bomb.",
      path: "mission.html?id=d2-shape-bomb",
    },
    {
      id: "d2-pet-race",
      name: "Super Pets Space Race",
      icon: "🚀",
      goal: "Review Week 3 actions in a two-team race.",
      path: "mission.html?id=d2-pet-race",
    },
  ],
  3: [
    {
      id: "d3-count-memory",
      name: "Shape Memory Vault",
      icon: "🧩",
      goal: "Match identical pictures and describe their shapes.",
      path: "mission.html?id=d3-count-memory",
    },
    {
      id: "d3-alien-customs",
      name: "Alien Cargo Check",
      icon: "🛸",
      goal: "Compare the spoken claim with the cargo.",
      path: "mission.html?id=d3-alien-customs",
    },
  ],
  4: [
    {
      id: "d4-shape-spotlight",
      name: "The Hidden Shape Vault",
      icon: "🔦",
      goal: "Reveal and describe hidden shapes.",
      path: "mission.html?id=d4-shape-spotlight",
    },
    {
      id: "d4-review-code",
      name: "Monthly Review: Beat the Bomb",
      icon: "💣",
      goal: "Complete the review code before time runs out.",
      path: "mission.html?id=d4-review-code",
    },
  ],
  5: [
    {
      id: "d5-question-race",
      name: "What & Where Space Race",
      icon: "🚀",
      goal: "Answer What / Where questions in two teams.",
      path: "mission.html?id=d5-question-race",
    },
    {
      id: "d5-action-memory",
      name: "The Weekend Memory Vault",
      icon: "🧩",
      goal: "Find identical action pictures and describe them.",
      path: "mission.html?id=d5-action-memory",
    },
  ],
};
