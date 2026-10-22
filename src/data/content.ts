// Curriculum content — stored exactly as provided. Do not edit wording.
// Q || question || answers (" / ")   T || Spanish || English
// S || shapes || question || answer  E || emoji || question || answer
// H || shapes-or-emoji || question || answer (hidden picture)  F || sentence with ____ || correct || wrong / wrong

// M (mistakes, Detective Sniff only) || sentence with [wrong] word(s) || options " / ", correct marked * || corrected sentence
export interface DayDef { day: number; label: string; focus: string; lines: string[]; mistakes?: string[] }
export interface WeekDef { week: number; days: DayDef[] }
export interface VocabGroup { week: number | "general"; category: string; words: string[] }
export interface LevelDef { level: number; weeks: WeekDef[]; vocab: VocabGroup[] }
export interface CourseDef { name: string; levels: LevelDef[] }

export const COURSES: CourseDef[] = [
  {
    "name": "Kids Super Intensivo",
    "levels": [
      {
        "level": 0,
        "weeks": [
            {
              "week": 1,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Greetings What is your name? — N/A; What is your name? My name is _________. — Vocabulary: Good morning, Good afternoon, Good evening, Good night",
                  "lines": [
                    "Q || What is your name? || My name is Mia.",
                    "Q || ¿Cómo saludas en la mañana? || Good morning!",
                    "Q || ¿Cómo saludas en la tarde? || Good afternoon!",
                    "Q || ¿Cómo saludas al anochecer? || Good evening!",
                    "Q || ¿Cómo dices adiós antes de ir a dormir? || Good night!",
                    "Q || Good e___! 🌇 || Good evening!",
                    "Q || Good m___! ⛅🐓 || Good morning!",
                    "Q || Good a___! 🖼️ || Good afternoon!",
                    "F || My name ____ Mia. || is || are / am",
                    "F || My ____ is Leo. || name || names / naming",
                    "T || Buenos días || Good morning!",
                    "T || Buenas noches. (despedida) || Good night.",
                    "T || Me llamo Ana. || My name is Ana.",
                    "Q || Good n___! 🌃 || Good night!",
                    "Q || Es de mañana. Saluda a tu coach. || Good morning!",
                    "Q || Es hora de dormir. Despídete. || Good night!"
                  ],
                  "mistakes": [
                    "M || Corrige: Good [mornin]. || mornin / mornign / morning* || Good morning.",
                    "M || Corrige: Good [nigth]. || nitgh / night* / nigth || Good night."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "How are you today? Where are you from? — N/A; Where are you from? I am from ______________. — Vocabulary: How are you today? I am great!",
                  "lines": [
                    "Q || ¿Cómo estás hoy? || I am great!",
                    "Q || Where are you from? || I am from Colombia.",
                    "Q || Di tu nombre y de qué país eres. || My name is Mia. I am from Colombia.",
                    "Q || Pregúntale a un amigo cómo está. || How are you today?",
                    "Q || Pregúntale a un amigo de qué país es. || Where are you from?",
                    "Q || Completa: I am ____ Colombia. || I am from Colombia.",
                    "Q || Completa: How ____ you today? || How are you today?",
                    "Q || Completa: I ____ great! || I am great!",
                    "F || I ____ from Colombia. || am || is / are",
                    "F || I ____ nine years old. || am || is / are",
                    "T || Soy de Brasil. || I am from Brazil.",
                    "T || Soy de España. || I am from Spain.",
                    "T || Soy de Colombia. || I am from Colombia.",
                    "T || ¡Estoy muy bien! || I am great!",
                    "T || Soy de México. || I am from Mexico.",
                    "T || ¿De dónde eres? || Where are you from?"
                  ],
                  "mistakes": [
                    "M || Corrige: My name [are] Mia. || am / is* / are || My name is Mia.",
                    "M || Corrige: She [are] happy. || is* / are / am || She is happy."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Numbers — N/A; How old are you? — Vocabulary: Numbers from 1-12",
                  "lines": [
                    "Q || How old are you? || I am nine years old.",
                    "Q || Pregúntale a un amigo cuántos años tiene. || How old are you?",
                    "Q || Imagina que tienes ocho años. Di tu edad. || I am eight years old.",
                    "Q || Di tu nombre y tu edad. || My name is Mia. I am ten years old.",
                    "Q || Di este número: 1. || One.",
                    "Q || Di este número: 3. || Three.",
                    "Q || Di este número: 5. || Five.",
                    "Q || Di este número: 7. || Seven.",
                    "F || I ____ nine years old. || am || is / are",
                    "F || I ____ eight years old. || am || is / are",
                    "T || dos || two",
                    "T || cuatro || four",
                    "T || seis || six",
                    "T || ocho || eight",
                    "S || star:3 || ¿Cuántos objetos ves? || Three.",
                    "S || circle:5 || ¿Cuántos objetos ves? || Five."
                  ],
                  "mistakes": [
                    "M || Corrige: My name [are] Mia. || is* / are / am || My name is Mia.",
                    "M || Corrige: I [is] from Colombia. || is / are / am* || I am from Colombia."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Alphabet — N/A; Spelling Bee — Vocabulary: The alphabet",
                  "lines": [
                    "Q || Deletrea MIA. || M-I-A.",
                    "Q || Deletrea LEO. || L-E-O.",
                    "Q || Deletrea ANA. || A-N-A.",
                    "Q || Deletrea SAM. || S-A-M.",
                    "Q || Deletrea BEN. || B-E-N.",
                    "Q || Deletrea LIA. || L-I-A.",
                    "Q || Deletrea TOM. || T-O-M.",
                    "Q || Deletrea EVA. || E-V-A.",
                    "Q || What letter is it: B? || B",
                    "Q || What letter is it: D? || D",
                    "Q || What letter is it: F? || F",
                    "Q || What letter is it: H? || H",
                    "Q || Spell your name || M-I-A.",
                    "Q || ¿Cuál es la primera letra de tu nombre? || M.",
                    "H || 🅰️ || Encuentra la letra escondida. || A",
                    "H || 🅱️ || Encuentra la letra escondida. || B"
                  ],
                  "mistakes": [
                    "M || Corrige: My [naem] is Mia. || naem / name* / neme || My name is Mia.",
                    "M || Corrige: I [ma] Ana. || ma / am* / an || I am Ana."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Alphabet — N/A; Let's spell our names! — Vocabulary: The alphabet",
                  "lines": [
                    "Q || Deletrea LUNA. || L-U-N-A.",
                    "Q || Deletrea MAX. || M-A-X.",
                    "Q || Deletrea SOFIA. || S-O-F-I-A.",
                    "Q || Deletrea DAN. || D-A-N.",
                    "Q || Deletrea ROSE. || R-O-S-E.",
                    "Q || Deletrea ALEX. || A-L-E-X.",
                    "Q || Deletrea EMMA. || E-M-M-A.",
                    "Q || Deletrea LUIS. || L-U-I-S.",
                    "Q || What letter is it: N? || N",
                    "Q || What letter is it: P? || P",
                    "Q || What letter is it: T? || T",
                    "Q || What letter is it: W? || W",
                    "Q || Spell your name || M-I-A.",
                    "Q || ¿Cuál es la primera letra de tu nombre? || M.",
                    "H || 🅰️ || Encuentra la letra escondida. || A",
                    "H || 🅱️ || Encuentra la letra escondida. || B"
                  ],
                  "mistakes": [
                    "M || Corrige: My name [si] Luis. || si / is* / iz || My name is Luis.",
                    "M || Corrige: I am [form] Colombia. || form / from* / fram || I am from Colombia."
                  ]
                }
              ]
            },
            {
              "week": 2,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Colors — N/A; What is your favorite color? — Vocabulary: Colors Red, blue, green, yellow, orange, black, white",
                  "lines": [
                    "Q || What is your favorite color: orange or yellow? || My favorite color is orange. / My favorite color is yellow.",
                    "Q || What is your favorite color: black or orange? || My favorite color is black. / My favorite color is orange.",
                    "E || 🟢 || ¿Qué color es? || It is green.",
                    "E || 🟡 || ¿Qué color es? || It is yellow.",
                    "E || 🟠 || ¿Qué color es? || It is orange.",
                    "E || ⚫ || ¿Qué color es? || It is black.",
                    "E || ⚪ || ¿Qué color es? || It is white.",
                    "T || rojo || red",
                    "F || It ____ red. || is || am / are",
                    "F || It ____ blue. || is || am / are",
                    "T || amarillo || yellow",
                    "Q || What is your favorite color? || My favorite color is red.",
                    "Q || Pregúntale a un amigo cuál es su color favorito. || What is your favorite color?",
                    "Q || Completa con un color: My favorite color is ____. || My favorite color is green.",
                    "H || 🔴 || Encuentra el color escondido. || Red",
                    "H || 🔵 || Encuentra el color escondido. || Blue"
                  ],
                  "mistakes": [
                    "M || Corrige: It [am] green. || am / are / is* || It is green.",
                    "M || Corrige: It [am] yellow. || are / is* / am || It is yellow."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Food — N/A; What is your favorite food? — Vocabulary: Food Ice cream, Hamburger, Hot dog, Chicken, French fries",
                  "lines": [
                    "Q || Elige entre hamburguesa y helado. ¿Cuál es tu comida favorita? || My favorite food is ice cream.",
                    "Q || Elige entre perro caliente y hamburguesa. ¿Cuál es tu comida favorita? || My favorite food is hamburger.",
                    "E || 🌭 || ¿Qué comida es? || A hot dog.",
                    "E || 🍗 || ¿Qué comida es? || Chicken.",
                    "E || 🍟 || ¿Qué comida es? || French fries.",
                    "T || helado || ice cream",
                    "T || una hamburguesa || a hamburger",
                    "T || un perro caliente || a hot dog",
                    "F || My favorite food ____ hot dog. || is || am / are",
                    "F || My favorite food ____ chicken. || is || am / are",
                    "Q || Pregúntale a un amigo cuál es su comida favorita. || What is your favorite food?",
                    "Q || Completa con una comida: My favorite food is ____. || My favorite food is hot dog.",
                    "Q || Elige entre papas fritas y pollo. ¿Cuál es tu comida favorita? || My favorite food is chicken.",
                    "Q || Elige entre helado y papas fritas. ¿Cuál es tu comida favorita? || My favorite food is French fries.",
                    "H || 🍦 || Encuentra la comida escondida. || Ice cream",
                    "H || 🍔 || Encuentra la comida escondida. || Hamburger"
                  ],
                  "mistakes": [
                    "M || Corrige: My favorite food [am] French fries. || are / is* / am || My favorite food is French fries.",
                    "M || Corrige: My favorite food [am] hamburger. || is* / am / are || My favorite food is hamburger."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Fruits — N/A; What is your favorite fruit? — Vocabulary: Fruits Banana, Apple, Watermelon, Pineapple, Orange",
                  "lines": [
                    "Q || ¿Cuál es tu fruta favorita? || My favorite fruit is watermelon. / My favorite fruit is pineapple.",
                    "Q || Elige entre sandía y manzana. ¿Cuál es tu fruta favorita? || My favorite fruit is apple.",
                    "E || 🍉 || ¿Qué fruta es? || A watermelon.",
                    "E || 🍍 || ¿Qué fruta es? || A pineapple.",
                    "E || 🍊 || ¿Qué fruta es? || An orange.",
                    "T || una piña || a pineapple",
                    "T || una manzana || an apple",
                    "T || una sandía || a watermelon",
                    "F || My favorite fruit ____ apple. || is || am / are",
                    "F || My favorite fruit ____ watermelon. || is || am / are",
                    "Q || Pregúntale a un amigo cuál es su fruta favorita. || What is your favorite fruit?",
                    "Q || Completa con una fruta: My favorite fruit is ____. || My favorite fruit is watermelon.",
                    "Q || Elige entre naranja y piña. ¿Cuál es tu fruta favorita? || My favorite fruit is pineapple.",
                    "Q || Elige entre sandía y naranja. ¿Cuál es tu fruta favorita? || My favorite fruit is watermelon. / My favorite fruit is orange.",
                    "H || 🍍 || Encuentra la fruta escondida. || Pineapple",
                    "H || 🍎 || Encuentra la fruta escondida. || Apple"
                  ],
                  "mistakes": [
                    "M || Corrige: My favorite fruit [am] pineapple. || is* / am / are || My favorite fruit is pineapple.",
                    "M || Corrige: My favorite fruit [am] orange. || am / are / is* || My favorite fruit is orange."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Review — N/A; Review of previously introduced vocabulary and sentence patterns — Vocabulary: green; a hot dog; a watermelon; French fries; orange; black; ice cream; a banana; blue; chicken; a pineapple; red",
                  "lines": [
                    "E || 🍍 || ¿Qué fruta es? || A pineapple.",
                    "Q || What is your favorite color? || My favorite color is red.",
                    "E || 🍉 || ¿Qué fruta es? || A watermelon.",
                    "Q || Completa con un color: My favorite color is ____. || My favorite color is green.",
                    "Q || Elige entre helado y papas fritas. ¿Cuál es tu comida favorita? || My favorite food is French fries.",
                    "Q || Elige entre manzana y naranja. ¿Cuál es tu fruta favorita? || My favorite fruit is apple. / My favorite fruit is orange.",
                    "E || ⚫ || ¿Qué color es? || It is black.",
                    "T || helado || ice cream",
                    "F || My favorite fruit ____ orange. || is || am / are",
                    "F || It ____ black. || is || am / are",
                    "T || pollo || chicken",
                    "T || una piña || a pineapple",
                    "E || 🔴 || ¿Qué color es? || It is red.",
                    "E || 🍦 || ¿Qué comida es? || Ice cream.",
                    "H || 🟢 || Encuentra el color escondido. || Green",
                    "H || 🌭 || Encuentra la comida escondida. || Hot dog"
                  ],
                  "mistakes": [
                    "M || Corrige: It [am] red. || am / are / is* || It is red.",
                    "M || Corrige: My favorite color [am] red. || are / is* / am || My favorite color is red."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — N/A; What is your favorite color?; What is your favorite food?; What is your favorite fruit?; Review of previously introduced vocabulary and sentence patterns — Vocabulary: blue; chicken; pineapple; orange; French fries; an orange; hamburger; apple; red; a hot dog; a watermelon; yellow; green",
                  "lines": [
                    "Q || Pregúntale a un amigo cuál es su color favorito. || What is your favorite color?",
                    "Q || Elige entre papas fritas y pollo. ¿Cuál es tu comida favorita? || My favorite food is chicken.",
                    "Q || Elige entre naranja y piña. ¿Cuál es tu fruta favorita? || My favorite fruit is pineapple.",
                    "Q || Pregúntale a un amigo cuál es su fruta favorita. || What is your favorite fruit?",
                    "E || 🟢 || ¿Qué color es? || It is green.",
                    "E || 🍊 || ¿Qué fruta es? || An orange.",
                    "Q || What is your favorite color: black or orange? || My favorite color is black. / My favorite color is orange.",
                    "Q || Elige entre perro caliente y hamburguesa. ¿Cuál es tu comida favorita? || My favorite food is hamburger.",
                    "F || My favorite food ____ chicken. || is || am / are",
                    "F || My favorite fruit ____ pineapple. || is || am / are",
                    "T || un perro caliente || a hot dog",
                    "T || una sandía || a watermelon",
                    "T || amarillo || yellow",
                    "Q || Pregúntale a un amigo cuál es su comida favorita. || What is your favorite food?",
                    "H || 🟠 || Encuentra el color escondido. || Orange",
                    "H || 🍟 || Encuentra la comida escondida. || French fries"
                  ],
                  "mistakes": [
                    "M || Corrige: It [am] orange. || are / is* / am || It is orange.",
                    "M || Corrige: My favorite color [am] orange. || is* / am / are || My favorite color is orange."
                  ]
                }
              ]
            },
            {
              "week": 3,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "People — N/A; What is he/she? — Vocabulary: People Man, Woman, Girl, Boy",
                  "lines": [
                    "Q || Complete: ____ is a woman. || She is a woman.",
                    "Q || Complete: He ____ a man. || He is a man.",
                    "Q || Complete: ____ is a man. || He is a man.",
                    "Q || Complete: She ____ a woman. || She is a woman.",
                    "E || 👧 || What is she? || She is a girl.",
                    "Q || Complete: She ____ a girl. || She is a girl.",
                    "E || 👦 || What is he? || He is a boy.",
                    "Q || Complete: He ____ a boy. || He is a boy.",
                    "F || He ____ a man. || is || am / are",
                    "F || She ____ a woman. || is || am / are",
                    "T || Ella es una niña. || She is a girl.",
                    "T || Él es un niño. || He is a boy.",
                    "Q || Is your mom a woman? || Yes, she is a woman.",
                    "Q || Is your dad a man? || Yes, he is a man.",
                    "H || 👨 || Guess the hidden person! || Man",
                    "H || 👩 || Guess the hidden person! || Woman"
                  ],
                  "mistakes": [
                    "M || She [am] a girl. || am / are / is* || She is a girl.",
                    "M || He [am] a boy. || are / is* / am || He is a boy."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Family members — N/A; Positive sentences — Vocabulary: Family members Mom, Dad, Sister, Brother",
                  "lines": [
                    "Q || What is your mom's name? || Her name is Ana.",
                    "T || Ella es mi mamá. || She is my mom.",
                    "Q || Complete: She is ____ mom. || She is my mom.",
                    "T || Mi mamá es Ana. || My mom is Ana.",
                    "Q || What is your dad's name? || His name is Luis.",
                    "T || Él es mi papá. || He is my dad.",
                    "Q || Complete: He is ____ dad. || He is my dad.",
                    "T || Mi papá es Luis. || My dad is Luis.",
                    "F || She ____ my mom. || is || am / are",
                    "F || He ____ my dad. || is || am / are",
                    "Q || Complete: She is ____ sister. || She is my sister.",
                    "T || Ella es mi hermana. || She is my sister.",
                    "Q || What is your brother's name? || His name is Leo.",
                    "T || Él es mi hermano. || He is my brother.",
                    "H || 👩 || Guess the hidden person! || Woman",
                    "H || 👦 || Guess the hidden person! || Boy"
                  ],
                  "mistakes": [
                    "M || She [am] my sister. || are / is* / am || She is my sister.",
                    "M || He [am] my brother. || is* / am / are || He is my brother."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Adjectives — N/A; Positive sentences — Vocabulary: Adjectives Pretty, Handsome, Intelligent, Happy, Angry",
                  "lines": [
                    "T || Mi mamá es bonita. || My mom is pretty.",
                    "T || Ella es bonita. || She is pretty.",
                    "T || Mi papá es guapo. || My dad is handsome.",
                    "T || Él es guapo. || He is handsome.",
                    "T || Mi hermana es inteligente. || My sister is intelligent.",
                    "T || Ella es inteligente. || She is intelligent.",
                    "T || Mi hermano está feliz. || My brother is happy.",
                    "T || Él está feliz. || He is happy.",
                    "F || She ____ intelligent. || is || am / are",
                    "F || He ____ happy. || is || am / are",
                    "Q || Spell the word \"happy\". || H-A-P-P-Y.",
                    "Q || Spell the word \"angry\". || A-N-G-R-Y.",
                    "T || Ella es bonita e inteligente. || She is pretty and intelligent.",
                    "T || Él es guapo y está feliz. || He is handsome and happy.",
                    "H || 😊 || Guess the hidden adjective! || Happy",
                    "H || 😠 || Guess the hidden adjective! || Angry"
                  ],
                  "mistakes": [
                    "M || She [am] angry. || is* / am / are || She is angry.",
                    "M || She [am] pretty and intelligent. || am / are / is* || She is pretty and intelligent."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Review — N/A; Review of previously introduced vocabulary and sentence patterns — Vocabulary: woman; mom; handsome; People Man, Woman, Girl, Boy; brother; Adjectives Pretty, Handsome, Intelligent, Happy, Angry; girl; dad; intelligent; sister; angry; man; pretty",
                  "lines": [
                    "T || Ella es bonita. || She is pretty.",
                    "Q || Complete: She is ____ mom. || She is my mom.",
                    "T || Él es guapo. || He is handsome.",
                    "T || Él es un niño. || He is a boy.",
                    "T || Él es mi hermano. || He is my brother.",
                    "T || Él es guapo y está feliz. || He is handsome and happy.",
                    "Q || Complete: She ____ a girl. || She is a girl.",
                    "T || Él es mi papá. || He is my dad.",
                    "F || He ____ a boy. || is || am / are",
                    "F || He ____ my brother. || is || am / are",
                    "T || Ella es mi hermana. || She is my sister.",
                    "T || Ella está enojada. || She is angry.",
                    "Q || Spell the word \"man\". || M-A-N.",
                    "T || Ella es mi mamá. || She is my mom.",
                    "H || 👩 || Guess the hidden person! || Woman",
                    "H || 👨 || Guess the hidden person! || Man"
                  ],
                  "mistakes": [
                    "M || He [am] handsome and happy. || am / are / is* || He is handsome and happy.",
                    "M || She [am] a girl. || are / is* / am || She is a girl."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — N/A; What is he/she?; Positive sentences; Review of previously introduced vocabulary and sentence patterns — Vocabulary: People Man, Woman, Girl, Boy; brother; Adjectives Pretty, Handsome, Intelligent, Happy, Angry; girl; dad; intelligent; boy; happy; sister; woman",
                  "lines": [
                    "Q || Is your sister a girl? || Yes, she is a girl.",
                    "T || Él es mi hermano. || He is my brother.",
                    "T || Ella es bonita e inteligente. || She is pretty and intelligent.",
                    "E || 👩 || What is she? || She is a woman.",
                    "T || Él es mi papá. || He is my dad.",
                    "T || Ella es inteligente. || She is intelligent.",
                    "Q || Complete: ____ is a man. || He is a man.",
                    "T || Mi hermano es Luis. || My brother is Luis.",
                    "F || She ____ intelligent. || is || am / are",
                    "F || He ____ a man. || is || am / are",
                    "T || Mi papá es Carlos. || My dad is Carlos.",
                    "T || Él está feliz. || He is happy.",
                    "T || Ella es una niña. || She is a girl.",
                    "Q || Complete: She is ____ sister. || She is my sister.",
                    "H || 👧 || Guess the hidden person! || Girl",
                    "H || 😊 || Guess the hidden adjective! || Happy"
                  ],
                  "mistakes": [
                    "M || He [am] intelligent. || are / is* / am || He is intelligent.",
                    "M || He [am] a boy. || is* / am / are || He is a boy."
                  ]
                }
              ]
            },
            {
              "week": 4,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Food — N/A; What is his/her favorite food? — Vocabulary: Food Salad, Soup, Sandwich, Cereal, Eggs",
                  "lines": [
                    "Q || What is your grandma's favorite food? || My grandma's favorite food is salad.",
                    "Q || What is your grandpa's favorite food? || My grandpa's favorite food is soup.",
                    "E || 🥪 || Name this food. || A sandwich.",
                    "E || 🥣 || Name this food. || Cereal.",
                    "E || 🥚 || Name this food. || Eggs.",
                    "T || ensalada || salad",
                    "T || sopa || soup",
                    "T || un sándwich || a sandwich",
                    "F || My mom's favorite food ____ salad. || is || am / are",
                    "F || My dad's favorite food ____ soup. || is || am / are",
                    "Q || What is your dad's favorite food? || My dad's favorite food is soup.",
                    "Q || What is your sister's favorite food? || My sister's favorite food is sandwich.",
                    "Q || What is your brother's favorite food? || My brother's favorite food is cereal.",
                    "Q || What is your best friend's favorite food? || My best friend's favorite food is eggs.",
                    "H || 🥗 || Guess the hidden food! || Salad",
                    "H || 🍲 || Guess the hidden food! || Soup"
                  ],
                  "mistakes": [
                    "M || My sister's favorite food [am] sandwich. || am / are / is* || My sister's favorite food is sandwich.",
                    "M || My brother's favorite food [am] cereal. || are / is* / am || My brother's favorite food is cereal."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Drinks — N/A; What is his/her favorite drink? — Vocabulary: Drinks Water, Milk, Coffee",
                  "lines": [
                    "Q || What is your aunt's favorite drink? || My aunt's favorite drink is coffee.",
                    "Q || What is your uncle's favorite drink? || My uncle's favorite drink is water.",
                    "E || ☕ || Name this drink. || Coffee.",
                    "T || agua || water",
                    "T || leche || milk",
                    "T || café || coffee",
                    "Q || What is your mom's favorite drink? || My mom's favorite drink is water.",
                    "Q || What is your dad's favorite drink? || My dad's favorite drink is milk.",
                    "F || My dad's favorite ____ is milk. || drink || drinks / drinking",
                    "F || My sister's favorite ____ is coffee. || drink || drinks / drinking",
                    "Q || What is your best friend's favorite drink? || My best friend's favorite drink is milk.",
                    "Q || What is your grandma's favorite drink? || My grandma's favorite drink is coffee.",
                    "Q || What is your grandpa's favorite drink? || My grandpa's favorite drink is water.",
                    "Q || What is your cousin's favorite drink? || My cousin's favorite drink is milk.",
                    "H || 💧 || Guess the hidden drink! || Water",
                    "H || 🥛 || Guess the hidden drink! || Milk"
                  ],
                  "mistakes": [
                    "M || My brother's favorite [drinks] is water. || drinking / drink* / drinks || My brother's favorite drink is water.",
                    "M || My best friend's favorite [drinks] is milk. || drink* / drinks / drinking || My best friend's favorite drink is milk."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Review/ Evaluation — N/A; Review of previously introduced vocabulary and sentence patterns — Vocabulary: alphabet; an apple; watermelon; pretty; angry; milk; coffee; Good morning, Good afternoon, Good evening, Good night; How are you today? I am great!; four; Numbers from 1-12",
                  "lines": [
                    "Q || Spell MAX. || M-A-X.",
                    "Q || What letter is it: W? || W",
                    "Q || What letter is it: H? || H",
                    "Q || Complete with a fruit: My favorite fruit is ____. || My favorite fruit is watermelon.",
                    "T || Ella es bonita. || She is pretty.",
                    "Q || Spell ANA. || A-N-A.",
                    "E || 🥛 || Name this drink. || Milk.",
                    "Q || What is your grandma's favorite drink? || My grandma's favorite drink is coffee.",
                    "F || My favorite fruit ____ watermelon. || is || am / are",
                    "F || She ____ pretty. || is || am / are",
                    "T || Soy de España. || I am from Spain.",
                    "Q || Say your name and country. || My name is Mia. I am from Colombia.",
                    "T || cuatro || four",
                    "Q || Pretend you are eight. Say your age. || I am eight years old.",
                    "H || 🍎 || Guess the hidden fruit! || Apple",
                    "H || 😠 || Guess the hidden adjective! || Angry"
                  ],
                  "mistakes": [
                    "M || She [am] angry. || is* / am / are || She is angry.",
                    "M || My grandma's favorite [drinks] is coffee. || drinks / drinking / drink* || My grandma's favorite drink is coffee."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: Good morning, Good afternoon, Good evening, Good night; red; yellow; man; People Man, Woman, Girl, Boy; salad; soup; How are you today? I am great!; six; Numbers from 1-12; The alphabet; alphabet",
                  "lines": [
                    "Q || What is your name? || My name is Mia.",
                    "T || Buenas noches. (saludo) || Good evening.",
                    "Q || Spell SOFIA. || S-O-F-I-A.",
                    "T || amarillo || yellow",
                    "Q || Spell DAN. || D-A-N.",
                    "T || Ella es una niña. || She is a girl.",
                    "E || 🥗 || Name this food. || Salad.",
                    "Q || What is your dad's favorite food? || My dad's favorite food is soup.",
                    "F || My name ____ Mia. || is || am / are",
                    "F || It ____ red. || is || am / are",
                    "T || seis || six",
                    "Q || Say your name and age. || My name is Mia. I am ten years old.",
                    "Q || Spell your first name. || M-I-A.",
                    "Q || Spell SAM. || S-A-M.",
                    "H || 🔴 || Guess the hidden color! || Red",
                    "H || 👨 || Guess the hidden person! || Man"
                  ],
                  "mistakes": [
                    "M || He [am] a man. || am / are / is* || He is a man.",
                    "M || She [am] a girl. || are / is* / am || She is a girl."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: How are you today? I am great!; a hamburger; hot dog; mom; sister; coffee; water; Good morning, Good afternoon, Good evening, Good night; eight; one; The alphabet; alphabet",
                  "lines": [
                    "Q || Where are you from? || I am from Colombia.",
                    "T || ¡Estoy muy bien! || I am great!",
                    "Q || Spell ROSE. || R-O-S-E.",
                    "Q || Complete with a food: My favorite food is ____. || My favorite food is hot dog.",
                    "T || Ella es mi mamá. || She is my mom.",
                    "T || Ella es mi hermana. || She is my sister.",
                    "Q || What is the last letter of your name? || A.",
                    "Q || What is your grandpa's favorite drink? || My grandpa's favorite drink is water.",
                    "F || I ____ from Colombia. || am || is / are",
                    "F || I ____ great. || am || is / are",
                    "T || ocho || eight",
                    "Q || Say this number: 1. || One.",
                    "Q || What is the first letter of your name? || M.",
                    "Q || Spell BEN. || B-E-N.",
                    "H || 🍔 || Guess the hidden food! || Hamburger",
                    "H || ☕ || Guess the hidden drink! || Coffee"
                  ],
                  "mistakes": [
                    "M || My favorite food [am] hot dog. || are / is* / am || My favorite food is hot dog.",
                    "M || She [am] my mom. || is* / am / are || She is my mom."
                  ]
                }
              ]
            }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Greetings What is your name?",
            "words": [
              "Good morning",
              "Good afternoon",
              "Good evening",
              "Good night"
            ]
          },
          {
            "week": 1,
            "category": "How are you today? Where are you from?",
            "words": [
              "How are you today? I am great!"
            ]
          },
          {
            "week": 1,
            "category": "Numbers",
            "words": [
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "ten",
              "eleven",
              "twelve"
            ]
          },
          {
            "week": 1,
            "category": "Alphabet",
            "words": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z"
            ]
          },
          {
            "week": 2,
            "category": "Colors",
            "words": [
              "Red",
              "blue",
              "green",
              "yellow",
              "orange",
              "black",
              "white"
            ]
          },
          {
            "week": 2,
            "category": "Food",
            "words": [
              "Ice cream",
              "Hamburger",
              "Hot dog",
              "Chicken",
              "French fries"
            ]
          },
          {
            "week": 2,
            "category": "Fruits",
            "words": [
              "Banana",
              "Apple",
              "Watermelon",
              "Pineapple",
              "Orange"
            ]
          },
          {
            "week": 3,
            "category": "People",
            "words": [
              "Man",
              "Woman",
              "Girl",
              "Boy"
            ]
          },
          {
            "week": 3,
            "category": "Family members",
            "words": [
              "Mom",
              "Dad",
              "Sister",
              "Brother"
            ]
          },
          {
            "week": 3,
            "category": "Adjectives",
            "words": [
              "Pretty",
              "Handsome",
              "Intelligent",
              "Happy",
              "Angry"
            ]
          },
          {
            "week": 4,
            "category": "Food",
            "words": [
              "Salad",
              "Soup",
              "Sandwich",
              "Cereal",
              "Eggs"
            ]
          },
          {
            "week": 4,
            "category": "Drinks",
            "words": [
              "Water",
              "Milk",
              "Coffee"
            ]
          }
        ]
      },
      {
        "level": 1,
        "weeks": [
            {
              "week": 1,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Daily Routine — Simple present (1st person); Positive sentences — Vocabulary: Wake up, take a shower, eat",
                  "lines": [
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "Q || What do you do after school? || I take a shower.",
                    "Q || What do you do before school? || I eat breakfast.",
                    "Q || What do you do at seven o'clock? || I wake up.",
                    "Q || What do you do in the morning? || I take a shower.",
                    "Q || What do you do at seven thirty? || I eat breakfast.",
                    "Q || What do you do at home? || I wake up.",
                    "Q || What do you do in the bathroom? || I take a shower.",
                    "F || I ____ up. || wake || wakes / waking",
                    "F || I ____ a shower. || take || takes / taking",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo me despierto todos los días. || I wake up every day.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo me despierto por la mañana. || I wake up in the morning."
                  ],
                  "mistakes": [
                    "M || I [eats] breakfast. || eats / eating / eat* || I eat breakfast.",
                    "M || I [wakes] up every day. || waking / wake* / wakes || I wake up every day."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Daily Routine — Simple present (1st person); Yes/No questions (Short answers) — Vocabulary: Wake up, take a shower, eat, brush my teeth",
                  "lines": [
                    "Q || Do you take a shower? || Yes, I do. / No, I don't.",
                    "Q || Do you eat breakfast? || Yes, I do. / No, I don't.",
                    "Q || Do you brush your teeth? || Yes, I do. / No, I don't.",
                    "Q || Do you wake up? || Yes, I do. / No, I don't.",
                    "Q || Do you take a shower every day? || Yes, I do. / No, I don't.",
                    "Q || Do you eat breakfast on weekends? || Yes, I do. / No, I don't.",
                    "Q || What do you do after breakfast? || I brush my teeth.",
                    "Q || What do you do at seven o'clock? || I wake up.",
                    "F || I ____ my teeth. || brush || brushes / brushing",
                    "F || I ____ up. || wake || wakes / waking",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo me cepillo los dientes. || I brush my teeth.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo desayuno por la mañana. || I eat breakfast in the morning."
                  ],
                  "mistakes": [
                    "M || I [eats] breakfast. || eating / eat* / eats || I eat breakfast.",
                    "M || I [takes] a shower. || take* / takes / taking || I take a shower."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Daily Routine — Simple present (1st person); Wh-questions (What do you do + time of the day?) — Vocabulary: Wake up, take a shower, eat, brush my teeth, sleep",
                  "lines": [
                    "Q || What do you do before school? || I eat breakfast.",
                    "Q || What do you do before bed? || I brush my teeth.",
                    "Q || What do you do at night? || I go to sleep.",
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "Q || What do you do after school? || I take a shower.",
                    "Q || Where do you eat breakfast? || I eat breakfast in the kitchen.",
                    "Q || When do you brush your teeth? || I brush my teeth after breakfast.",
                    "Q || What do you do at nine o'clock? || I go to sleep.",
                    "F || I ____ to sleep. || go || goes / going",
                    "F || I ____ up. || wake || wakes / waking",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo me cepillo los dientes. || I brush my teeth.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo desayuno por la mañana. || I eat breakfast in the morning."
                  ],
                  "mistakes": [
                    "M || I [takes] a shower. || take* / takes / taking || I take a shower.",
                    "M || I [eats] breakfast in the kitchen. || eats / eating / eat* || I eat breakfast in the kitchen."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Daily Routine — Simple present (1st person); Wh-questions (Where do you do...?) — Vocabulary: Wake up, take a shower, eat, brush my teeth, sleep",
                  "lines": [
                    "Q || Where do you brush your teeth? || I brush my teeth in the bathroom.",
                    "Q || Where do you go to sleep? || I go to sleep in my bedroom.",
                    "Q || Where do you wake up? || I wake up at home.",
                    "Q || Where do you take a shower? || I take a shower in the bathroom.",
                    "Q || What do you do before school? || I eat breakfast.",
                    "Q || Where do you brush your teeth on Sundays? || I brush my teeth in the bathroom.",
                    "Q || When do you go to sleep? || I go to sleep at nine o'clock.",
                    "Q || What do you do at seven o'clock? || I wake up.",
                    "F || I ____ a shower in the bathroom. || take || takes / taking",
                    "F || I ____ breakfast. || eat || eats / eating",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo me cepillo los dientes. || I brush my teeth.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo me cepillo los dientes por la mañana. || I brush my teeth in the morning."
                  ],
                  "mistakes": [
                    "M || I [goes] to sleep at nine o'clock. || goes / going / go* || I go to sleep at nine o'clock.",
                    "M || I [wakes] up. || waking / wake* / wakes || I wake up."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (1st person); Positive sentences; Yes/No questions (Short answers); Wh-questions (What do you do + time of the day?); Wh-questions (Where do you do...?) — Vocabulary: eat breakfast; wake up; take a shower; brush my teeth; go to sleep",
                  "lines": [
                    "T || Yo desayuno. || I eat breakfast.",
                    "Q || Do you wake up? || Yes, I do. / No, I don't.",
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "Q || Where do you take a shower? || I take a shower in the bathroom.",
                    "Q || What do you do in the morning? || I take a shower.",
                    "Q || Do you take a shower every day? || Yes, I do. / No, I don't.",
                    "Q || What do you do after school? || I take a shower.",
                    "Q || What do you do before school? || I eat breakfast.",
                    "F || I ____ my teeth. || brush || brushes / brushing",
                    "F || I ____ my teeth after breakfast. || brush || brushes / brushing",
                    "Q || When do you brush your teeth? || I brush my teeth after breakfast.",
                    "Q || When do you go to sleep? || I go to sleep at nine o'clock.",
                    "Q || What do you do in the bathroom? || I take a shower.",
                    "Q || What do you do at seven o'clock? || I wake up.",
                    "T || Yo desayuno por la mañana. || I eat breakfast in the morning.",
                    "T || Yo me despierto por la mañana. || I wake up in the morning."
                  ],
                  "mistakes": [
                    "M || I [goes] to sleep at nine o'clock. || going / go* / goes || I go to sleep at nine o'clock.",
                    "M || I [goes] to sleep. || go* / goes / going || I go to sleep."
                  ]
                }
              ]
            },
            {
              "week": 2,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "School Activities — Simple present (1st person); Positive sentences — Vocabulary: Learn, write, run",
                  "lines": [
                    "Q || What do you learn in class? || I learn English.",
                    "Q || What do you write in a notebook? || I write a story.",
                    "Q || What do you do on a sunny afternoon? || I run.",
                    "Q || What do you do after lunch? || I learn English.",
                    "Q || What do you do in the afternoon? || I write a story.",
                    "Q || What do you do after school? || I run.",
                    "Q || What do you do in class? || I learn English.",
                    "Q || What do you do in the classroom? || I write a story.",
                    "F || I ____ English. || learn || learns / learning",
                    "F || I ____ a story. || write || writes / writing",
                    "T || Yo aprendo inglés. || I learn English.",
                    "T || Yo escribo un cuento. || I write a story.",
                    "T || Yo corro. || I run.",
                    "T || Yo aprendo inglés todos los días. || I learn English every day.",
                    "H || ✍️ || Guess the action! || Write",
                    "T || Yo aprendo inglés por la mañana. || I learn English in the morning."
                  ],
                  "mistakes": [
                    "M || I [runs]. || runs / running / run* || I run.",
                    "M || I [learns] English every day. || learning / learn* / learns || I learn English every day."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "School Activities — Simple present (1st person); Yes/No questions (Long answers) — Vocabulary: Learn, write, run, play",
                  "lines": [
                    "Q || Do you write a story? || Yes, I write a story. / No, I don't write a story.",
                    "Q || Do you run? || Yes, I run. / No, I don't run.",
                    "Q || Do you play games? || Yes, I play games. / No, I don't play games.",
                    "Q || Do you learn English? || Yes, I learn English. / No, I don't learn English.",
                    "Q || Do you write a story every day? || Yes, I write a story. / No, I don't write a story.",
                    "Q || Do you run on weekends? || Yes, I run. / No, I don't run.",
                    "Q || What do you do on Saturdays? || I play games.",
                    "Q || What do you do after lunch? || I learn English.",
                    "F || I ____ games. || play || plays / playing",
                    "F || I ____ English. || learn || learns / learning",
                    "T || Yo aprendo inglés. || I learn English.",
                    "T || Yo escribo un cuento. || I write a story.",
                    "T || Yo corro. || I run.",
                    "T || Yo juego. || I play games.",
                    "H || ✍️ || Guess the action! || Write",
                    "H || 🏃 || Guess the action! || Run"
                  ],
                  "mistakes": [
                    "M || I [runs]. || running / run* / runs || I run.",
                    "M || I [writes] a story. || write* / writes / writing || I write a story."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "School Activities — Simple present (1st person); Wh-questions (What...?) — Vocabulary: Learn, write, run, play, drink",
                  "lines": [
                    "Q || What do you do on a sunny afternoon? || I run.",
                    "Q || What do you do on weekends? || I play games.",
                    "Q || What do you drink at lunch? || I drink water.",
                    "Q || What do you learn in class? || I learn English.",
                    "Q || What do you write in a notebook? || I write a story.",
                    "Q || Where do you run? || I run in the park.",
                    "Q || When do you play games? || I play games on Saturdays.",
                    "Q || What do you do after exercise? || I drink water.",
                    "F || I ____ water. || drink || drinks / drinking",
                    "F || I ____ English. || learn || learns / learning",
                    "T || Yo aprendo inglés. || I learn English.",
                    "T || Yo escribo un cuento. || I write a story.",
                    "T || Yo corro. || I run.",
                    "T || Yo juego. || I play games.",
                    "H || ✍️ || Guess the action! || Write",
                    "H || 🏃 || Guess the action! || Run"
                  ],
                  "mistakes": [
                    "M || I [writes] a story. || write* / writes / writing || I write a story.",
                    "M || I [runs] in the park. || runs / running / run* || I run in the park."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "School Activities — Simple present (1st person); Wh-questions (Where...?) — Vocabulary: learn, write, run, play, drink",
                  "lines": [
                    "Q || Where do you play games? || I play games at home.",
                    "Q || Where do you drink water? || I drink water at home.",
                    "Q || Where do you learn English? || I learn English in class.",
                    "Q || Where do you write a story? || I write a story in the classroom.",
                    "Q || What do you do on a sunny afternoon? || I run.",
                    "Q || Where do you play games on Sundays? || I play games at home.",
                    "Q || When do you drink water? || I drink water after exercise.",
                    "Q || What do you do after lunch? || I learn English.",
                    "F || I ____ a story in the classroom. || write || writes / writing",
                    "F || I ____. || run || runs / running",
                    "T || Yo aprendo inglés. || I learn English.",
                    "T || Yo escribo un cuento. || I write a story.",
                    "T || Yo corro. || I run.",
                    "T || Yo juego. || I play games.",
                    "H || ✍️ || Guess the action! || Write",
                    "T || Yo juego por la mañana. || I play games in the morning."
                  ],
                  "mistakes": [
                    "M || I [drinks] water after exercise. || drinks / drinking / drink* || I drink water after exercise.",
                    "M || I [learns] English. || learning / learn* / learns || I learn English."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (1st person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Where...?) — Vocabulary: run; learn English; write a story; play games; drink water",
                  "lines": [
                    "T || Yo corro. || I run.",
                    "Q || Do you learn English? || Yes, I learn English. / No, I don't learn English.",
                    "Q || What do you learn in class? || I learn English.",
                    "Q || Where do you write a story? || I write a story in the classroom.",
                    "Q || What do you do in the afternoon? || I write a story.",
                    "Q || Do you write a story every day? || Yes, I write a story. / No, I don't write a story.",
                    "Q || What do you write in a notebook? || I write a story.",
                    "Q || What do you do on a sunny afternoon? || I run.",
                    "F || I ____ games. || play || plays / playing",
                    "F || I ____ games on Saturdays. || play || plays / playing",
                    "Q || When do you play games? || I play games on Saturdays.",
                    "Q || When do you drink water? || I drink water after exercise.",
                    "Q || What do you do in the classroom? || I write a story.",
                    "Q || What do you do after lunch? || I learn English.",
                    "H || 🏃 || Guess the action! || Run",
                    "T || Yo aprendo inglés por la mañana. || I learn English in the morning."
                  ],
                  "mistakes": [
                    "M || I [drinks] water after exercise. || drinking / drink* / drinks || I drink water after exercise.",
                    "M || I [drinks] water. || drink* / drinks / drinking || I drink water."
                  ]
                }
              ]
            },
            {
              "week": 3,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "The Magic Dream (Daily activities) — Simple present (3rd person); Positive sentences — Vocabulary: Sing, paint, dance",
                  "lines": [
                    "Q || What does your best friend do in the afternoon? || She sings.",
                    "Q || What does your aunt do during art time? || She paints a picture.",
                    "Q || What does your cousin do at a party? || He dances.",
                    "Q || What does your teacher do after school? || He sings.",
                    "Q || What does your mom do on Sundays? || She paints a picture.",
                    "Q || What does your brother do on weekends? || He dances.",
                    "Q || What does your dad do at home? || He sings.",
                    "Q || What does your sister do in the art room? || She paints a picture.",
                    "F || She ____. || sings || sing / singing",
                    "F || She ____ a picture. || paints || paint / painting",
                    "T || Él canta. || He sings.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "T || Ella baila. || She dances.",
                    "T || Él canta todos los días. || He sings every day.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || 💃 || Guess the action! || Dance"
                  ],
                  "mistakes": [
                    "M || He [dance]. || dance / dancing / dances* || He dances.",
                    "M || He [sing]. || singing / sings* / sing || He sings."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "The Magic Dream (Daily activities) — Simple present (3rd person); Yes/No questions (Short answers) — Vocabulary: Sing, paint, dance, read",
                  "lines": [
                    "Q || Does your cousin paint a picture? || Yes, she does. / No, she doesn't.",
                    "Q || Does your brother dance? || Yes, he does. / No, he doesn't.",
                    "Q || Does your teacher read a book? || Yes, he does. / No, he doesn't.",
                    "Q || Does your mom sing? || Yes, she does. / No, she doesn't.",
                    "Q || Does your brother paint a picture every day? || Yes, he does. / No, he doesn't.",
                    "Q || Does your dad dance on weekends? || Yes, he does. / No, he doesn't.",
                    "Q || What does your sister do before bed? || She reads a book.",
                    "Q || What does your best friend do after school? || She sings.",
                    "F || She ____. || sings || sing / singing",
                    "F || She ____ at home. || dances || dance / dancing",
                    "T || Él canta. || He sings.",
                    "T || Ella pinta un cuadro. || She paints a picture.",
                    "T || Él baila. || He dances.",
                    "T || Él lee un libro. || He reads a book.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || 💃 || Guess the action! || Dance"
                  ],
                  "mistakes": [
                    "M || He [read] a book. || reading / reads* / read || He reads a book.",
                    "M || He [sing]. || sings* / sing / singing || He sings."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "The Magic Dream (Daily activities) — Simple present (3rd person); Wh-questions (What...?) — Vocabulary: Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || What does your cousin do at a party? || He dances.",
                    "Q || What does your teacher read before bed? || He reads a book.",
                    "Q || What does your mom do on Saturdays? || She cleans the room.",
                    "Q || What does your brother do in the afternoon? || He sings.",
                    "Q || What does your dad do during art time? || He paints a picture.",
                    "Q || Where does your sister dance? || She dances in the living room.",
                    "Q || When does your best friend read a book? || She reads a book before bed.",
                    "Q || What does your aunt do on Saturday mornings? || She cleans the room.",
                    "F || She ____ the room. || cleans || clean / cleaning",
                    "F || He ____. || sings || sing / singing",
                    "T || Ella canta. || She sings.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "T || Él baila. || He dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || 💃 || Guess the action! || Dance"
                  ],
                  "mistakes": [
                    "M || He [paint] a picture. || paints* / paint / painting || He paints a picture.",
                    "M || She [dance] in the living room. || dance / dancing / dances* || She dances in the living room."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "The Magic Dream (Daily activities) — Simple present (3rd person); Wh-questions (Where...?) — Vocabulary: Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || Where does your teacher read a book? || He reads a book in the library.",
                    "Q || Where does your mom clean the room? || She cleans the room at home.",
                    "Q || What does Shakira do on stage? || She sings on stage.",
                    "Q || Where does your dad paint a picture? || He paints a picture at home.",
                    "Q || What does your sister do at a party? || She dances at the party.",
                    "Q || Does your best friend read at night? || Yes, she does. / No, she doesn't.",
                    "Q || When does your sister clean the room? || She cleans the room on Saturday mornings.",
                    "Q || What does your brother do in art class? || He paints a picture in art class.",
                    "F || He ____ a picture in the art room. || paints || paint / painting",
                    "F || She ____ at a party. || dances || dance / dancing",
                    "T || Él canta en casa. || He sings at home.",
                    "T || Él pinta un cuadro en la escuela. || He paints a picture at school.",
                    "T || Ella baila con su hermana. || She dances with her sister.",
                    "T || Ella lee un libro por la noche. || She reads a book at night.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || 💃 || Guess the action! || Dance"
                  ],
                  "mistakes": [
                    "M || She [read] a book in the library. || read / reading / reads* || She reads a book in the library.",
                    "M || She [clean] the room on Saturday mornings. || cleaning / cleans* / clean || She cleans the room on Saturday mornings."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "The Magic Dream (Daily activities) — Simple present (3rd person); Wh-questions (What/Where...?) — Vocabulary: Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || Where does your mom clean the room? || She cleans the room at home.",
                    "Q || Where does your brother sing? || He sings at home.",
                    "Q || Where does your dad paint a picture? || He paints a picture in the art room.",
                    "Q || Where does your sister dance? || She dances in the living room.",
                    "Q || What does your best friend read before bed? || She reads a book.",
                    "Q || Where does your best friend clean the room? || She cleans the room at home.",
                    "Q || When does your brother sing? || He sings after school.",
                    "Q || What does your teacher do on Sundays? || He paints a picture.",
                    "F || She ____ a book. || reads || read / reading",
                    "F || He ____ after school. || sings || sing / singing",
                    "T || Él canta. || He sings.",
                    "T || Ella pinta un cuadro. || She paints a picture.",
                    "T || Ella baila. || She dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || 💃 || Guess the action! || Dance"
                  ],
                  "mistakes": [
                    "M || He [paint] a picture. || painting / paints* / paint || He paints a picture.",
                    "M || She [sing]. || sings* / sing / singing || She sings."
                  ]
                }
              ]
            },
            {
              "week": 4,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Daily Routine — Simple present (1st person); Yes/No questions (Long answers) Wh-questions (What/Where...?) — Vocabulary: Wake up, take a shower, eat, run, play, drink",
                  "lines": [
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "Q || What do you do after school? || I take a shower.",
                    "Q || What do you do before school? || I eat breakfast.",
                    "Q || What do you do on a sunny afternoon? || I run.",
                    "Q || What do you do on weekends? || I play games.",
                    "Q || What do you drink at lunch? || I drink water.",
                    "Q || What do you do at seven o'clock? || I wake up.",
                    "Q || Do you take a shower on weekends? || Yes, I take a shower. / No, I don't take a shower.",
                    "F || I ____ up. || wake || wakes / waking",
                    "F || I ____ a shower. || take || takes / taking",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo corro. || I run.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo me despierto por la mañana. || I wake up in the morning."
                  ],
                  "mistakes": [
                    "M || I [eats] breakfast. || eats / eating / eat* || I eat breakfast.",
                    "M || I [runs]. || running / run* / runs || I run."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "The Magic Dream (Daily activities) — Simple present (3rd person); Wh-questions (What time...?) — Vocabulary: Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || What time does your best friend paint a picture? || He paints a picture at seven o'clock.",
                    "Q || What time does your teacher dance? || He dances at four o'clock.",
                    "Q || What time does your mom read a book? || She reads a book at six thirty.",
                    "Q || What time does your brother clean the room? || He cleans the room at eight o'clock.",
                    "Q || What does your dad do in the afternoon? || He sings.",
                    "Q || Where does your sister paint a picture? || She paints a picture in the art room.",
                    "Q || When does your best friend dance? || She dances on weekends.",
                    "Q || What does your cousin do before bed? || She reads a book.",
                    "F || He ____ at four o'clock. || dances || dance / dancing",
                    "F || She ____ a book at six thirty. || reads || read / reading",
                    "T || Ella canta. || She sings.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "T || Él baila. || He dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || 💃 || Guess the action! || Dance"
                  ],
                  "mistakes": [
                    "M || He [clean] the room at eight o'clock. || cleaning / cleans* / clean || He cleans the room at eight o'clock.",
                    "M || He [sing]. || sings* / sing / singing || He sings."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Tell me about your best friend — Simple present (3rd person); Speaking time (Wordwall) — Vocabulary: Wake up, take a shower, eat, run, play, drink, Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || How old is your best friend? || My best friend is ten.",
                    "Q || What does your best friend do after school? || My best friend sings.",
                    "Q || When does your best friend paint? || My best friend paints on Saturdays.",
                    "Q || What does your sister do at night? || She reads a book.",
                    "Q || What is your best friend's name? || My best friend is Leo.",
                    "Q || Where does your brother dance? || He dances at home.",
                    "Q || When does your brother clean his room? || He cleans his room on Sundays.",
                    "Q || Does your best friend read at night? || Yes, my best friend reads at night.",
                    "F || She ____ on Saturdays. || paints || paint / painting",
                    "F || She ____ before bed. || reads || read / reading",
                    "Q || What does your best friend do on weekends? || My best friend dances.",
                    "Q || Tell us two things your best friend does. || My best friend sings and paints.",
                    "T || Ella canta después de la escuela. || She sings after school.",
                    "T || Él baila en casa. || He dances at home.",
                    "T || Mi hermana canta después de la escuela. || My sister sings after school.",
                    "T || Mi hermano baila en casa. || My brother dances at home."
                  ],
                  "mistakes": [
                    "M || Leo [am] her best friend. || is* / am / are || Leo is her best friend.",
                    "M || He [dance] at home. || dance / dancing / dances* || He dances at home."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: wake up; learn English; sing; take a shower; girl; salad; How are you today? I am great!; The alphabet; an apple; angry; Good morning, Good afternoon, Good evening, Good night; alphabet",
                  "lines": [
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "T || Yo me despierto. || I wake up.",
                    "Q || What do you learn in class? || I learn English.",
                    "T || Yo aprendo inglés. || I learn English.",
                    "Q || What does your best friend do in the afternoon? || She sings.",
                    "T || Él canta. || He sings.",
                    "Q || What do you do after school? || I take a shower.",
                    "T || Yo me ducho. || I take a shower.",
                    "F || He ____. || sings || sing / singing",
                    "F || I ____ a shower. || take || takes / taking",
                    "Q || Complete: I am ____ Colombia. || I am from Colombia.",
                    "Q || Say your name, then spell it. || My name is Mia. M-I-A.",
                    "T || una manzana || an apple",
                    "T || Ella está enojada. || She is angry.",
                    "H || 👧 || Guess the hidden person! || Girl",
                    "T || Yo me despierto por la mañana. || I wake up in the morning."
                  ],
                  "mistakes": [
                    "M || She [am] a girl. || am / are / is* || She is a girl.",
                    "M || My grandma's favorite food [am] salad. || are / is* / am || My grandma's favorite food is salad."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: eat breakfast; brush my teeth; run; write a story; dance; paint a picture; dad; water; five; blue; boy; salad; How are you today? I am great!; alphabet",
                  "lines": [
                    "Q || Do you eat breakfast? || Yes, I do. / No, I don't.",
                    "Q || Do you brush your teeth? || Yes, I do. / No, I don't.",
                    "Q || Do you run? || Yes, I run. / No, I don't run.",
                    "T || Yo escribo un cuento. || I write a story.",
                    "Q || Does your brother dance? || Yes, he does. / No, he doesn't.",
                    "T || Ella pinta un cuadro. || She paints a picture.",
                    "Q || What time does your teacher dance? || He dances at four o'clock.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "F || He ____ my dad. || is || am / are",
                    "F || My uncle's favorite ____ is water. || drink || drinks / drinking",
                    "Q || Say this number: 5. || Five.",
                    "T || azul || blue",
                    "Q || Complete: He ____ a boy. || He is a boy.",
                    "Q || What is your mom's favorite food? || My mom's favorite food is salad.",
                    "T || Yo escribo un cuento por la mañana. || I write a story in the morning.",
                    "T || Mi hermana pinta un cuadro. || My sister paints a picture."
                  ],
                  "mistakes": [
                    "M || He [am] a boy. || are / is* / am || He is a boy.",
                    "M || My mom's favorite food [am] salad. || is* / am / are || My mom's favorite food is salad."
                  ]
                }
              ]
            },
            {
              "week": 5,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Daily Routine — Simple present (3rd person); Positive sentences — Vocabulary: Wake up, cook, work",
                  "lines": [
                    "Q || What time does your cousin wake up on school days? || He wakes up at six thirty.",
                    "Q || What does your teacher cook for his family? || He cooks dinner.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "Q || What does your brother do at seven o'clock? || He wakes up.",
                    "Q || What does your dad do at six o'clock? || He cooks dinner.",
                    "Q || What does your mom do in the morning? || She works.",
                    "Q || What does your best friend do at home? || She wakes up.",
                    "Q || What does your cousin do in the kitchen? || She cooks dinner.",
                    "F || He ____ up. || wakes || wake / waking",
                    "F || He ____ dinner. || cooks || cook / cooking",
                    "T || Ella se despierta. || She wakes up.",
                    "T || Él cocina la cena. || He cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella se despierta todos los días. || She wakes up every day.",
                    "T || Mi hermana se despierta. || My sister wakes up.",
                    "T || Mi hermano cocina la cena. || My brother cooks dinner."
                  ],
                  "mistakes": [
                    "M || He [work]. || work / working / works* || He works.",
                    "M || She [work]. || working / works* / work || She works."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Daily Routine — Simple present (3rd person); Yes/No questions (Long answers) — Vocabulary: Wake up, cook, work, exercise",
                  "lines": [
                    "Q || Does your teacher cook dinner? || Yes, he cooks dinner. / No, he doesn't cook dinner.",
                    "Q || Does your mom work? || Yes, she works. / No, she doesn't work.",
                    "Q || Does your brother exercise? || Yes, he exercises. / No, he doesn't exercise.",
                    "Q || Does your dad wake up? || Yes, he wakes up. / No, he doesn't wake up.",
                    "Q || Does your sister cook dinner every day? || Yes, she cooks dinner. / No, she doesn't cook dinner.",
                    "Q || Does your mom work on weekends? || Yes, she works. / No, she doesn't work.",
                    "Q || What does your cousin do in the morning? || She exercises.",
                    "Q || What does your brother do at seven o'clock? || He wakes up.",
                    "F || He ____ up. || wakes || wake / waking",
                    "F || He ____. || works || work / working",
                    "T || Él se despierta. || He wakes up.",
                    "T || Él cocina la cena. || He cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermano cocina la cena. || My brother cooks dinner.",
                    "T || Mi hermano trabaja. || My brother works."
                  ],
                  "mistakes": [
                    "M || He [cook] dinner. || cooking / cooks* / cook || He cooks dinner.",
                    "M || She [work]. || works* / work / working || She works."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (What...?) — Vocabulary: Wake up, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || What does your dad do on weekdays? || He works.",
                    "Q || What does your brother do after school? || He exercises.",
                    "Q || What does your dad do in the evening? || He watches TV.",
                    "Q || What time does your sister wake up on school days? || She wakes up at six thirty.",
                    "Q || What does your best friend cook for her family? || She cooks dinner.",
                    "Q || Where does your mom work? || She works in an office.",
                    "Q || When does your uncle exercise? || He exercises in the morning.",
                    "Q || What does your teacher do after dinner? || He watches TV.",
                    "F || He ____ TV. || watches || watch / watching",
                    "F || She ____ up. || wakes || wake / waking",
                    "T || Él se despierta. || He wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermano trabaja. || My brother works.",
                    "H || 🏋️ || Guess the action! || Exercise"
                  ],
                  "mistakes": [
                    "M || She [cook] dinner. || cooks* / cook / cooking || She cooks dinner.",
                    "M || She [work] in an office. || work / working / works* || She works in an office."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (Who... with?) — Vocabulary: Wake up, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || Who does your brother watch TV with? || He watches TV with his family.",
                    "Q || Who does your dad cook dinner with? || He cooks dinner with his friends.",
                    "Q || Who does your dad work with? || He works with his cousin.",
                    "Q || Who does your best friend exercise with? || She exercises with her brother.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "Q || Where does your brother exercise? || He exercises in the park.",
                    "Q || When does your teacher watch TV? || He watches TV after dinner.",
                    "Q || What does your mom do at seven o'clock? || She wakes up.",
                    "F || She ____ with her brother. || exercises || exercise / exercising",
                    "F || He ____. || works || work / working",
                    "T || Ella se despierta. || She wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Él hace ejercicio. || He exercises.",
                    "T || Mi hermana se despierta. || My sister wakes up.",
                    "T || Mi hermana cocina la cena. || My sister cooks dinner."
                  ],
                  "mistakes": [
                    "M || He [exercise] in the park. || exercise / exercising / exercises* || He exercises in the park.",
                    "M || He [watch] TV after dinner. || watching / watches* / watch || He watches TV after dinner."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (3rd person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Who... with?) — Vocabulary: work; wake up; exercise; cook dinner; watch TV",
                  "lines": [
                    "T || Él trabaja. || He works.",
                    "Q || Does your dad wake up? || Yes, he wakes up. / No, he doesn't wake up.",
                    "Q || What time does your sister wake up on school days? || She wakes up at six thirty.",
                    "Q || Who does your best friend exercise with? || She exercises with her brother.",
                    "Q || What does your dad do at six o'clock? || He cooks dinner.",
                    "Q || Does your sister cook dinner every day? || Yes, she cooks dinner. / No, she doesn't cook dinner.",
                    "Q || What does your best friend cook for her family? || She cooks dinner.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "F || She ____ dinner. || cooks || cook / cooking",
                    "F || She ____. || works || work / working",
                    "Q || When does your uncle exercise? || He exercises in the morning.",
                    "Q || When does your teacher watch TV? || He watches TV after dinner.",
                    "Q || What does your cousin do in the kitchen? || She cooks dinner.",
                    "Q || What does your brother do at seven o'clock? || He wakes up.",
                    "T || Mi hermano trabaja. || My brother works.",
                    "T || Mi hermana se despierta. || My sister wakes up."
                  ],
                  "mistakes": [
                    "M || She [exercise]. || exercising / exercises* / exercise || She exercises.",
                    "M || He [exercise] in the morning. || exercises* / exercise / exercising || He exercises in the morning."
                  ]
                }
              ]
            },
            {
              "week": 6,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Daily Routine — Simple present (3rd person); Positive sentences — Vocabulary: Wake up, work, exercise",
                  "lines": [
                    "Q || What time does your teacher wake up on school days? || He wakes up at six thirty.",
                    "Q || What does your mom do on weekdays? || She works.",
                    "Q || What does your brother do after school? || He exercises.",
                    "Q || What does your dad do at seven o'clock? || He wakes up.",
                    "Q || What does your dad do in the morning? || He works.",
                    "Q || What does your best friend do in the morning? || She exercises.",
                    "Q || What does your cousin do at home? || She wakes up.",
                    "Q || What does your mom do in an office? || She works.",
                    "F || He ____ up. || wakes || wake / waking",
                    "F || She ____. || works || work / working",
                    "T || Él se despierta. || He wakes up.",
                    "T || Ella trabaja. || She works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Ella se despierta. || She wakes up.",
                    "T || Mi hermano se despierta. || My brother wakes up.",
                    "T || Mi hermana trabaja. || My sister works."
                  ],
                  "mistakes": [
                    "M || He [exercise]. || exercise / exercising / exercises* || He exercises.",
                    "M || He [work]. || working / works* / work || He works."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Daily Routine — Simple present (3rd person); Yes/No questions (Short answers) — Vocabulary: Wake up, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || Does your mom cook dinner? || Yes, she does. / No, she doesn't.",
                    "Q || Does your mom work? || Yes, she does. / No, she doesn't.",
                    "Q || Does your dad exercise? || Yes, he does. / No, he doesn't.",
                    "Q || Does your sister watch TV? || Yes, she does. / No, she doesn't.",
                    "Q || Does your best friend wake up? || Yes, she does. / No, she doesn't.",
                    "Q || Does your sister cook dinner on weekends? || Yes, she does. / No, she doesn't.",
                    "Q || What does your dad do in the morning? || He works.",
                    "Q || What does your teacher do in the morning? || He exercises.",
                    "F || He ____. || exercises || exercise / exercising",
                    "F || He ____ up. || wakes || wake / waking",
                    "T || Él se despierta. || He wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermana cocina la cena. || My sister cooks dinner.",
                    "T || Mi hermano trabaja. || My brother works."
                  ],
                  "mistakes": [
                    "M || She [cook] dinner. || cooking / cooks* / cook || She cooks dinner.",
                    "M || She [exercise]. || exercises* / exercise / exercising || She exercises."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (What...?) — Vocabulary: Wake up, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || What does your dad do on weekdays? || He works.",
                    "Q || What does your dad do after work? || He exercises.",
                    "Q || What does your sister do in the evening? || She watches TV.",
                    "Q || What time does your best friend wake up on school days? || She wakes up at six thirty.",
                    "Q || What does your best friend cook for her family? || She cooks dinner.",
                    "Q || Where does your mom work? || She works in an office.",
                    "Q || When does your teacher exercise? || He exercises in the morning.",
                    "Q || What does your mom do after dinner? || She watches TV.",
                    "F || She ____ TV. || watches || watch / watching",
                    "F || She ____ up. || wakes || wake / waking",
                    "T || Ella se despierta. || She wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Él hace ejercicio. || He exercises.",
                    "T || Mi hermano trabaja. || My brother works.",
                    "H || 🏋️ || Guess the action! || Exercise"
                  ],
                  "mistakes": [
                    "M || She [cook] dinner. || cooks* / cook / cooking || She cooks dinner.",
                    "M || She [work] in an office. || work / working / works* || She works in an office."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (When...?) — Vocabulary: Wake up, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || When does your dad exercise? || He exercises in the morning.",
                    "Q || When does your sister watch TV? || She watches TV after dinner.",
                    "Q || When does your best friend wake up? || She wakes up at seven o'clock.",
                    "Q || When does your aunt cook dinner? || She cooks dinner at six o'clock.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "Q || Where does your teacher exercise? || He exercises in the park.",
                    "Q || When does your mom watch TV? || She watches TV after dinner.",
                    "Q || What does your brother do at seven o'clock? || He wakes up.",
                    "F || She ____ dinner at six o'clock. || cooks || cook / cooking",
                    "F || He ____. || works || work / working",
                    "T || Ella se despierta. || She wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Él hace ejercicio. || He exercises.",
                    "H || 🏋️ || Guess the action! || Exercise",
                    "T || Mi hermana se despierta. || My sister wakes up."
                  ],
                  "mistakes": [
                    "M || He [exercise] in the park. || exercise / exercising / exercises* || He exercises in the park.",
                    "M || He [wake] up. || waking / wakes* / wake || He wakes up."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (3rd person); Positive sentences; Yes/No questions (Short answers); Wh-questions (What...?); Wh-questions (When...?) — Vocabulary: exercise; work; wake up; cook dinner; watch TV",
                  "lines": [
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Él trabaja. || He works.",
                    "Q || What time does your best friend wake up on school days? || She wakes up at six thirty.",
                    "Q || When does your aunt cook dinner? || She cooks dinner at six o'clock.",
                    "Q || What does your dad do in the morning? || He works.",
                    "Q || Does your best friend wake up? || Yes, she does. / No, she doesn't.",
                    "Q || What does your best friend cook for her family? || She cooks dinner.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "F || She ____ dinner. || cooks || cook / cooking",
                    "F || He ____. || exercises || exercise / exercising",
                    "Q || When does your teacher exercise? || He exercises in the morning.",
                    "Q || When does your mom watch TV? || She watches TV after dinner.",
                    "Q || What does your mom do in an office? || She works.",
                    "Q || What does your teacher do in the morning? || He exercises.",
                    "H || 🏋️ || Guess the action! || Exercise",
                    "T || Mi hermano trabaja. || My brother works."
                  ],
                  "mistakes": [
                    "M || She [work]. || working / works* / work || She works.",
                    "M || He [exercise] in the morning. || exercises* / exercise / exercising || He exercises in the morning."
                  ]
                }
              ]
            },
            {
              "week": 7,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Daily Routine — Simple present (3rd person); Positive sentences — Vocabulary: exercise, play soccer, drink",
                  "lines": [
                    "Q || What does your mom do after work? || She exercises.",
                    "Q || What does your brother do at the park? || He plays soccer.",
                    "Q || What does your dad drink at lunch? || He drinks water.",
                    "Q || What does your sister do in the morning? || She exercises.",
                    "Q || What does your best friend do on Saturdays? || She plays soccer.",
                    "Q || What does your cousin do after exercise? || She drinks water.",
                    "Q || What does your cousin do in the park? || He exercises.",
                    "Q || What does your teacher do in the park? || He plays soccer.",
                    "F || She ____. || exercises || exercise / exercising",
                    "F || He ____ soccer. || plays || play / playing",
                    "T || Él hace ejercicio. || He exercises.",
                    "T || Ella juega fútbol. || She plays soccer.",
                    "T || Ella bebe agua. || She drinks water.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermana juega fútbol. || My sister plays soccer.",
                    "H || 🏋️ || Guess the action! || Exercise"
                  ],
                  "mistakes": [
                    "M || He [drink] water. || drink / drinking / drinks* || He drinks water.",
                    "M || She [play] soccer. || playing / plays* / play || She plays soccer."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Daily Routine — Simple present (3rd person); Yes/No questions (Long answers) — Vocabulary: exercise, play soccer, drink, win",
                  "lines": [
                    "Q || Does your brother play soccer? || Yes, he plays soccer. / No, he doesn't play soccer.",
                    "Q || Does your dad drink water? || Yes, he drinks water. / No, he doesn't drink water.",
                    "Q || Does your sister win a race? || Yes, she wins a race. / No, she doesn't win a race.",
                    "Q || Does your best friend exercise? || Yes, she exercises. / No, she doesn't exercise.",
                    "Q || Does your aunt play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
                    "Q || Does your uncle drink water on weekends? || Yes, he drinks water. / No, he doesn't drink water.",
                    "Q || What does your teacher do on sports day? || He wins a race.",
                    "Q || What does your mom do in the morning? || She exercises.",
                    "F || She ____. || exercises || exercise / exercising",
                    "F || He ____ water. || drinks || drink / drinking",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Ella juega fútbol. || She plays soccer.",
                    "T || Ella bebe agua. || She drinks water.",
                    "T || Él gana una carrera. || He wins a race.",
                    "T || Mi hermana juega fútbol. || My sister plays soccer.",
                    "T || Mi hermana bebe agua. || My sister drinks water."
                  ],
                  "mistakes": [
                    "M || She [play] soccer. || playing / plays* / play || She plays soccer.",
                    "M || She [drink] water. || drinks* / drink / drinking || She drinks water."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (What...?) — Vocabulary: exercise, play soccer, drink, win, travel",
                  "lines": [
                    "Q || What does your dad drink at lunch? || He drinks water.",
                    "Q || What does your sister do on sports day? || She wins a race.",
                    "Q || What does your best friend do on vacation? || She travels.",
                    "Q || What does your best friend do after work? || She exercises.",
                    "Q || What does your brother do at the park? || He plays soccer.",
                    "Q || Where does your teacher drink water? || He drinks water at home.",
                    "Q || When does your mom win a race? || She wins a race on sports day.",
                    "Q || What does your brother do during vacation? || He travels.",
                    "F || She ____. || travels || travel / traveling",
                    "F || She ____ at home. || exercises || exercise / exercising",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Ella juega fútbol. || She plays soccer.",
                    "T || Él bebe agua. || He drinks water.",
                    "T || Él gana una carrera. || He wins a race.",
                    "T || Mi hermana juega fútbol. || My sister plays soccer.",
                    "T || Mi hermano bebe agua. || My brother drinks water."
                  ],
                  "mistakes": [
                    "M || He [play] soccer. || plays* / play / playing || He plays soccer.",
                    "M || He [drink] water at home. || drink / drinking / drinks* || He drinks water at home."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (Who... with?) — Vocabulary: exercise, play soccer, drink, win, travel",
                  "lines": [
                    "Q || Who does your sister travel with? || She travels with her family.",
                    "Q || Who does your best friend exercise with? || She exercises with her friends.",
                    "Q || Who does your sister play soccer with? || She plays soccer with her cousin.",
                    "Q || Who does your cousin drink water with? || He drinks water with his brother.",
                    "Q || What does your teacher drink at lunch? || He drinks water.",
                    "Q || Where does your mom win a race? || She wins a race at school.",
                    "Q || When does your brother travel? || He travels during vacation.",
                    "Q || What does your dad do in the morning? || He exercises.",
                    "F || He ____ water with his brother. || drinks || drink / drinking",
                    "F || He ____ water. || drinks || drink / drinking",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Él juega fútbol. || He plays soccer.",
                    "T || Él bebe agua. || He drinks water.",
                    "T || Ella gana una carrera. || She wins a race.",
                    "T || Mi hermano juega fútbol. || My brother plays soccer.",
                    "T || Mi hermana hace ejercicio. || My sister exercises."
                  ],
                  "mistakes": [
                    "M || She [win] a race at school. || win / winning / wins* || She wins a race at school.",
                    "M || He [travel] during vacation. || traveling / travels* / travel || He travels during vacation."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (3rd person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Who... with?) — Vocabulary: drink water; exercise; play soccer; win a race; travel",
                  "lines": [
                    "T || Ella bebe agua. || She drinks water.",
                    "Q || Does your best friend exercise? || Yes, she exercises. / No, she doesn't exercise.",
                    "T || Él bebe agua. || He drinks water.",
                    "Q || Who does your cousin drink water with? || He drinks water with his brother.",
                    "Q || What does your best friend do on Saturdays? || She plays soccer.",
                    "Q || Does your aunt play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
                    "Q || What does your brother do at the park? || He plays soccer.",
                    "Q || What does your teacher drink at lunch? || He drinks water.",
                    "F || He ____ soccer. || plays || play / playing",
                    "F || He ____ a race. || wins || win / winning",
                    "Q || When does your mom win a race? || She wins a race on sports day.",
                    "Q || Complete: He ____. (drink water) || He drinks water.",
                    "Q || What does your teacher do in the park? || He plays soccer.",
                    "Q || What does your mom do in the morning? || She exercises.",
                    "T || Mi hermana bebe agua. || My sister drinks water.",
                    "H || 🏋️ || Guess the action! || Exercise"
                  ],
                  "mistakes": [
                    "M || She [win] a race on sports day. || winning / wins* / win || She wins a race on sports day.",
                    "M || She [exercise]. || exercises* / exercise / exercising || She exercises."
                  ]
                }
              ]
            },
            {
              "week": 8,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Daily Routine — Simple present (1st person); Wh-questions (What/Where/What time...?) — Vocabulary: Wake up, take a shower, eat, brush my teeth, sleep",
                  "lines": [
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "Q || What do you do after school? || I take a shower.",
                    "Q || What do you do before school? || I eat breakfast.",
                    "Q || What do you do before bed? || I brush my teeth.",
                    "Q || What do you do at night? || I go to sleep.",
                    "Q || What do you do at seven o'clock? || I wake up.",
                    "Q || What do you do in the morning? || I take a shower.",
                    "Q || What do you do at seven thirty? || I eat breakfast.",
                    "F || I ____ up. || wake || wakes / waking",
                    "F || I ____ a shower. || take || takes / taking",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo me cepillo los dientes. || I brush my teeth.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo me despierto por la mañana. || I wake up in the morning."
                  ],
                  "mistakes": [
                    "M || I [eats] breakfast. || eats / eating / eat* || I eat breakfast.",
                    "M || I [brushes] my teeth. || brushing / brush* / brushes || I brush my teeth."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Daily Routine — Simple present (3rd person); Wh-questions (What/Where/What time...?) — Vocabulary: Wake up, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || What time does your dad cook dinner? || He cooks dinner at seven o'clock.",
                    "Q || What time does your mom work? || She works at four o'clock.",
                    "Q || What time does your best friend exercise? || She exercises at six thirty.",
                    "Q || What time does your best friend watch TV? || She watches TV at eight o'clock.",
                    "Q || What time does your cousin wake up on school days? || He wakes up at six thirty.",
                    "Q || Where does your teacher cook dinner? || He cooks dinner in the kitchen.",
                    "Q || When does your dad work? || He works in the morning.",
                    "Q || What does your brother do in the morning? || He exercises.",
                    "F || She ____ at four o'clock. || works || work / working",
                    "F || She ____ at six thirty. || exercises || exercise / exercising",
                    "T || Ella se despierta. || She wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Él hace ejercicio. || He exercises.",
                    "T || Mi hermana cocina la cena. || My sister cooks dinner.",
                    "T || Mi hermano trabaja. || My brother works."
                  ],
                  "mistakes": [
                    "M || She [watch] TV at eight o'clock. || watching / watches* / watch || She watches TV at eight o'clock.",
                    "M || He [wake] up. || wakes* / wake / waking || He wakes up."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Daily Routine — Simple present (3rd person); Speaking time (Wordwall) — Vocabulary: Wake up, take a shower, eat, brush my teeth, sleep, cook, work, exercise, watch TV",
                  "lines": [
                    "Q || What does your sister drink at lunch? || She drinks water.",
                    "Q || What does your best friend do on sports day? || She wins a race.",
                    "Q || What does your cousin do on vacation? || She travels.",
                    "Q || What does your best friend do after work? || He exercises.",
                    "Q || What does your teacher do at the park? || He plays soccer.",
                    "Q || Where does your mom drink water? || She drinks water at home.",
                    "Q || When does your brother win a race? || He wins a race on sports day.",
                    "Q || What does your dad do during vacation? || He travels.",
                    "F || She ____. || travels || travel / traveling",
                    "F || He ____. || exercises || exercise / exercising",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Él juega fútbol. || He plays soccer.",
                    "T || Él bebe agua. || He drinks water.",
                    "T || Ella gana una carrera. || She wins a race.",
                    "T || Mi hermano juega fútbol. || My brother plays soccer.",
                    "T || Mi hermano bebe agua. || My brother drinks water."
                  ],
                  "mistakes": [
                    "M || He [play] soccer. || plays* / play / playing || He plays soccer.",
                    "M || She [drink] water at home. || drink / drinking / drinks* || She drinks water at home."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: wake up; exercise; milk; paint a picture; three; Wake up, take a shower, eat, run, play, drink, Sing, paint, dance, read, clean; white; brush my teeth; boy; play games",
                  "lines": [
                    "Q || What time does your cousin wake up on school days? || He wakes up at six thirty.",
                    "T || Ella se despierta. || She wakes up.",
                    "Q || What time does your teacher wake up on school days? || He wakes up at six thirty.",
                    "T || Él se despierta. || He wakes up.",
                    "Q || What does your mom do after work? || She exercises.",
                    "T || Él hace ejercicio. || He exercises.",
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "T || Yo me despierto. || I wake up.",
                    "F || He ____. || exercises || exercise / exercising",
                    "F || I ____ up. || wake || wakes / waking",
                    "Q || Say this number: 3. || Three.",
                    "T || Él limpia su cuarto los domingos. || He cleans his room on Sundays.",
                    "Q || Spell the word \"white\". || W-H-I-T-E.",
                    "T || Yo me cepillo los dientes. || I brush my teeth.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "H || ⚪ || Guess the hidden color! || White"
                  ],
                  "mistakes": [
                    "M || He [paint] a picture. || paint / painting / paints* || He paints a picture.",
                    "M || He [clean] his room on Sundays. || cleaning / cleans* / clean || He cleans his room on Sundays."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: work; cook dinner; exercise; drink water; play soccer; Good morning, Good afternoon, Good evening, Good night; eat breakfast; alphabet; take a shower; a hot dog; wake up; mom; learn English",
                  "lines": [
                    "Q || Does your mom work? || Yes, she works. / No, she doesn't work.",
                    "T || Él cocina la cena. || He cooks dinner.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "Q || Does your dad exercise? || Yes, he does. / No, he doesn't.",
                    "Q || Does your dad drink water? || Yes, he drinks water. / No, he doesn't drink water.",
                    "T || Ella juega fútbol. || She plays soccer.",
                    "Q || What time does your mom work? || She works at four o'clock.",
                    "Q || What time does your best friend exercise? || She exercises at six thirty.",
                    "F || She ____ at six thirty. || exercises || exercise / exercising",
                    "F || My name ____ Leo. || is || am / are",
                    "Q || Spell TOM. || T-O-M.",
                    "T || Yo me baño. || I take a shower.",
                    "T || un perro caliente || a hot dog",
                    "T || Yo me despierto. || I wake up.",
                    "T || Mi hermano cocina la cena. || My brother cooks dinner.",
                    "T || Mi hermana cocina la cena. || My sister cooks dinner."
                  ],
                  "mistakes": [
                    "M || I [eats] breakfast. || eating / eat* / eats || I eat breakfast.",
                    "M || I [takes] a shower. || take* / takes / taking || I take a shower."
                  ]
                }
              ]
            }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Daily Routine",
            "words": [
              "Wake up",
              "take a shower",
              "eat",
              "brush my teeth",
              "sleep"
            ]
          },
          {
            "week": 2,
            "category": "School Activities",
            "words": [
              "Learn",
              "write",
              "run",
              "play",
              "drink"
            ]
          },
          {
            "week": 3,
            "category": "The Magic Dream (Daily activities)",
            "words": [
              "Sing",
              "paint",
              "dance",
              "read",
              "clean"
            ]
          },
          {
            "week": 4,
            "category": "Daily Routine",
            "words": [
              "Wake up",
              "take a shower",
              "eat",
              "run",
              "play",
              "drink"
            ]
          },
          {
            "week": 4,
            "category": "The Magic Dream (Daily activities)",
            "words": [
              "Sing",
              "paint",
              "dance",
              "read",
              "clean"
            ]
          },
          {
            "week": 5,
            "category": "Daily Routine",
            "words": [
              "Wake up",
              "cook",
              "work",
              "exercise",
              "watch TV"
            ]
          },
          {
            "week": 6,
            "category": "Daily Routine",
            "words": [
              "Wake up",
              "work",
              "exercise",
              "cook",
              "watch TV"
            ]
          },
          {
            "week": 7,
            "category": "Daily Routine",
            "words": [
              "exercise",
              "play soccer",
              "drink",
              "win",
              "travel"
            ]
          },
          {
            "week": 8,
            "category": "Daily Routine",
            "words": [
              "Wake up",
              "take a shower",
              "eat",
              "brush my teeth",
              "sleep",
              "cook",
              "work",
              "exercise",
              "watch TV"
            ]
          }
        ]
      },
      {
        "level": 2,
        "weeks": [
            {
              "week": 1,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Fruits & vegetables — Simple present (1st person); Positive & Negative sentences Yes/No questions (Short answers) — Vocabulary: Grapes, Strawberries, mangoes, potatoes, carrots, onions",
                  "lines": [
                    "Q || Do you like grapes? || Yes, I like grapes. / No, I don't like grapes.",
                    "Q || Do you like strawberries? || Yes, I like strawberries. / No, I don't like strawberries.",
                    "Q || Do you like mangoes? || Yes, I like mangoes. / No, I don't like mangoes.",
                    "Q || Do you like potatoes? || Yes, I like potatoes. / No, I don't like potatoes.",
                    "Q || Do you like carrots? || Yes, I like carrots. / No, I don't like carrots.",
                    "Q || Do you like onions? || Yes, I like onions. / No, I don't like onions.",
                    "Q || Name two fruits you like. || I like grapes and mangoes.",
                    "Q || What vegetable don't you like? || I don't like onions.",
                    "F || I ____ grapes and mangoes. || like || likes / liking",
                    "F || I ____ carrots, but I don't like onions. || like || likes / liking",
                    "T || Me gustan las fresas. || I like strawberries.",
                    "T || No me gustan los mangos. || I don't like mangoes.",
                    "T || Me gustan las papas. || I like potatoes.",
                    "T || No me gustan las zanahorias. || I don't like carrots.",
                    "H || 🥭 || Guess the hidden fruit! || Mango",
                    "H || 🥕 || Guess the hidden vegetable! || Carrot"
                  ],
                  "mistakes": [
                    "M || I [likes] mangoes. || likes / liking / like* || I like mangoes.",
                    "M || I [likes] strawberries. || liking / like* / likes || I like strawberries."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Fruits & vegetables — Simple present (1st person); Yes/No questions (Short answers) — Vocabulary: Grapes, Strawberries, mangoes, potatoes, carrots, onions",
                  "lines": [
                    "Q || Do you like strawberries? || Yes, I do. / No, I don't.",
                    "Q || Do you like mangoes? || Yes, I do. / No, I don't.",
                    "Q || Do you like potatoes? || Yes, I do. / No, I don't.",
                    "Q || Do you like carrots? || Yes, I do. / No, I don't.",
                    "Q || Do you like onions? || Yes, I do. / No, I don't.",
                    "Q || Do you like grapes? || Yes, I do. / No, I don't.",
                    "Q || Name two fruits you like. || I like grapes and mangoes.",
                    "Q || What vegetable don't you like? || I don't like onions.",
                    "F || I ____ carrots, but I don't like onions. || like || likes / liking",
                    "F || I ____ mangoes. || like || likes / liking",
                    "T || Me gustan los mangos. || I like mangoes.",
                    "T || No me gustan las papas. || I don't like potatoes.",
                    "T || Me gustan las zanahorias. || I like carrots.",
                    "T || No me gustan las cebollas. || I don't like onions.",
                    "H || 🥔 || Guess the hidden vegetable! || Potato",
                    "H || 🧅 || Guess the hidden vegetable! || Onion"
                  ],
                  "mistakes": [
                    "M || I don't [likes] potatoes. || liking / like* / likes || I don't like potatoes.",
                    "M || I [likes] carrots. || like* / likes / liking || I like carrots."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Fruits & vegetables — Simple present (1st person); Wh-questions (What...?) — Vocabulary: Grapes, Strawberries, mangoes, potatoes, carrots, onions",
                  "lines": [
                    "Q || What fruit do you like in a snack? || I like grapes.",
                    "Q || What vegetables do you like with lunch? || I like carrots.",
                    "Q || What fruit do you dislike? || I don't like mangoes.",
                    "Q || What vegetables do you dislike? || I don't like potatoes.",
                    "Q || What fruit do you like on a hot day? || I like strawberries.",
                    "Q || What vegetables do you like in soup? || I like onions.",
                    "Q || Name two fruits you like. || I like grapes and mangoes.",
                    "Q || What vegetable don't you like? || I don't like onions.",
                    "F || I don't ____ mangoes. || like || likes / liking",
                    "F || I don't ____ potatoes. || like || likes / liking",
                    "T || Me gustan las papas. || I like potatoes.",
                    "T || No me gustan las zanahorias. || I don't like carrots.",
                    "T || Me gustan las cebollas. || I like onions.",
                    "T || No me gustan las uvas. || I don't like grapes.",
                    "H || 🥕 || Guess the hidden vegetable! || Carrot",
                    "H || 🍇 || Guess the hidden fruit! || Grapes"
                  ],
                  "mistakes": [
                    "M || I [likes] strawberries. || like* / likes / liking || I like strawberries.",
                    "M || I [likes] onions. || likes / liking / like* || I like onions."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Fruits & vegetables — Simple present (1st person); Wh-questions (Why...?) — Vocabulary: Grapes, Strawberries, mangoes, potatoes, carrots, onions",
                  "lines": [
                    "Q || Why do you like potatoes? || Because they are delicious.",
                    "Q || Why don't you like carrots? || Because they taste bad.",
                    "Q || Why do you like onions? || Because they are delicious.",
                    "Q || Why don't you like grapes? || Because they taste bad.",
                    "Q || Why do you like strawberries? || Because they are delicious.",
                    "Q || Why don't you like mangoes? || Because they taste bad.",
                    "Q || Name two fruits you like. || I like grapes and mangoes.",
                    "Q || What vegetable don't you like? || I don't like onions.",
                    "F || I don't ____ carrots because they taste bad. || like || likes / liking",
                    "F || I ____ onions because they are delicious. || like || likes / liking",
                    "T || Me gustan las zanahorias. || I like carrots.",
                    "T || No me gustan las cebollas. || I don't like onions.",
                    "T || Me gustan las uvas. || I like grapes.",
                    "T || No me gustan las fresas. || I don't like strawberries.",
                    "H || 🧅 || Guess the hidden vegetable! || Onion",
                    "H || 🍓 || Guess the hidden fruit! || Strawberry"
                  ],
                  "mistakes": [
                    "M || I don't [likes] onions because they taste bad. || likes / liking / like* || I don't like onions because they taste bad.",
                    "M || I [likes] grapes because they are delicious. || liking / like* / likes || I like grapes because they are delicious."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (1st person); Positive & Negative sentences Yes/No questions (Short answers); Yes/No questions (Short answers); Wh-questions (What...?); Wh-questions (Why...?) — Vocabulary: potatoes; carrots; onions; grapes; strawberries; carrots; onions; mangoes",
                  "lines": [
                    "T || Me gustan las papas. || I like potatoes.",
                    "T || Me gustan las zanahorias. || I like carrots.",
                    "T || Me gustan las cebollas. || I like onions.",
                    "T || Me gustan las uvas. || I like grapes.",
                    "Q || Do you like carrots? || Yes, I like carrots. / No, I don't like carrots.",
                    "Q || Do you like onions? || Yes, I do. / No, I don't.",
                    "Q || What fruit do you like on a hot day? || I like strawberries.",
                    "Q || Why do you like strawberries? || Because they are delicious.",
                    "F || I ____ strawberries. || like || likes / liking",
                    "F || I ____ strawberries because they are delicious. || like || likes / liking",
                    "E || 🍇 || Say whether you like this food. || I like grapes. / I don't like grapes.",
                    "E || 🍓 || Say whether you like this food. || I like strawberries. / I don't like strawberries.",
                    "Q || What vegetable don't you like? || I don't like onions.",
                    "Q || What fruit do you like? || I like mangoes.",
                    "H || 🥕 || Guess the hidden vegetable! || Carrot",
                    "H || 🧅 || Guess the hidden vegetable! || Onion"
                  ],
                  "mistakes": [
                    "M || I don't [likes] strawberries because they taste bad. || liking / like* / likes || I don't like strawberries because they taste bad.",
                    "M || I don't [likes] carrots. || like* / likes / liking || I don't like carrots."
                  ]
                }
              ]
            },
            {
              "week": 2,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Free time (hobbies) — Simple present (3rd person); Positive sentences — Vocabulary: Play, read, swim",
                  "lines": [
                    "Q || What does your sister do on weekends? || She plays games.",
                    "Q || What does your best friend read before bed? || She reads a book.",
                    "Q || What does your aunt do on a hot day? || She swims.",
                    "Q || What does your best friend do on Saturdays? || He plays games.",
                    "Q || What does your teacher do before bed? || He reads a book.",
                    "Q || What does your mom do on Saturdays? || She swims.",
                    "Q || What does your brother do at home? || He plays games.",
                    "Q || What does your dad do in the library? || He reads a book.",
                    "F || She ____ games. || plays || play / playing",
                    "F || She ____ a book. || reads || read / reading",
                    "T || Ella juega. || She plays games.",
                    "T || Él lee un libro. || He reads a book.",
                    "T || Él nada. || He swims.",
                    "T || Ella juega todos los días. || She plays games every day.",
                    "T || Mi hermano lee un libro. || My brother reads a book.",
                    "H || 🏊 || Guess the action! || Swim"
                  ],
                  "mistakes": [
                    "M || She [swim]. || swim / swimming / swims* || She swims.",
                    "M || He [play] games. || playing / plays* / play || He plays games."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Free time (hobbies) — Simple present (3rd person); Yes/No questions (Long answers) — Vocabulary: Play, read, swim, ride, listen to music",
                  "lines": [
                    "Q || Does your best friend read a book? || Yes, she reads a book. / No, she doesn't read a book.",
                    "Q || Does your best friend swim? || Yes, she swims. / No, she doesn't swim.",
                    "Q || Does your best friend ride a bike? || Yes, he rides a bike. / No, he doesn't ride a bike.",
                    "Q || Does your teacher listen to music? || Yes, he listens to music. / No, he doesn't listen to music.",
                    "Q || Does your mom play games? || Yes, she plays games. / No, she doesn't play games.",
                    "Q || Does your brother read a book on weekends? || Yes, he reads a book. / No, he doesn't read a book.",
                    "Q || What does your dad do on Saturdays? || He swims.",
                    "Q || What does your sister do after school? || She rides a bike.",
                    "F || She ____ a bike. || rides || ride / riding",
                    "F || She ____. || swims || swim / swimming",
                    "T || Él juega. || He plays games.",
                    "T || Él lee un libro. || He reads a book.",
                    "T || Ella nada. || She swims.",
                    "T || Él monta bicicleta. || He rides a bike.",
                    "T || Mi hermano lee un libro. || My brother reads a book.",
                    "H || 🏊 || Guess the action! || Swim"
                  ],
                  "mistakes": [
                    "M || He [play] games. || playing / plays* / play || He plays games.",
                    "M || He [read] a book. || reads* / read / reading || He reads a book."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Free time (hobbies) — Simple present (3rd person); Wh-questions (What...?) — Vocabulary: Play, read, swim, ride, listen to music, watch movies",
                  "lines": [
                    "Q || What does your aunt do on a hot day? || She swims.",
                    "Q || What does your best friend do on a sunny morning? || He rides a bike.",
                    "Q || What does your teacher do in the evening? || He listens to music.",
                    "Q || What does your mom do on a rainy afternoon? || She watches movies.",
                    "Q || What does your brother do on weekends? || He plays games.",
                    "Q || Where does your dad read a book? || He reads a book in the library.",
                    "Q || When does your sister swim? || She swims on Saturdays.",
                    "Q || What does your best friend do after school? || She rides a bike.",
                    "F || He ____ to music. || listens || listen / listening",
                    "F || She ____ movies. || watches || watch / watching",
                    "T || Él juega. || He plays games.",
                    "T || Ella lee un libro. || She reads a book.",
                    "T || Él nada. || He swims.",
                    "T || Él monta bicicleta. || He rides a bike.",
                    "T || Mi hermana lee un libro. || My sister reads a book.",
                    "H || 🏊 || Guess the action! || Swim"
                  ],
                  "mistakes": [
                    "M || He [play] games. || plays* / play / playing || He plays games.",
                    "M || He [read] a book in the library. || read / reading / reads* || He reads a book in the library."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Free time (hobbies) — Simple present (3rd person); Wh-questions (When...?) — Vocabulary: Play, read, swim, ride, listen to music, watch movies",
                  "lines": [
                    "Q || When does your uncle ride a bike? || He rides a bike after school.",
                    "Q || When does your teacher listen to music? || He listens to music after school.",
                    "Q || When does your mom watch movies? || She watches movies on Friday nights.",
                    "Q || When does your brother play games? || He plays games on Saturdays.",
                    "Q || What does your dad read before bed? || He reads a book.",
                    "Q || Where does your sister swim? || She swims in the pool.",
                    "Q || When does your best friend ride a bike? || She rides a bike after school.",
                    "Q || What does your cousin do after school? || She listens to music.",
                    "F || He ____ games on Saturdays. || plays || play / playing",
                    "F || He ____ a book. || reads || read / reading",
                    "T || Ella juega. || She plays games.",
                    "T || Él lee un libro. || He reads a book.",
                    "T || Él nada. || He swims.",
                    "T || Ella monta bicicleta. || She rides a bike.",
                    "T || Mi hermano lee un libro. || My brother reads a book.",
                    "H || 🏊 || Guess the action! || Swim"
                  ],
                  "mistakes": [
                    "M || She [swim] in the pool. || swim / swimming / swims* || She swims in the pool.",
                    "M || She [ride] a bike after school. || riding / rides* / ride || She rides a bike after school."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (3rd person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (When...?) — Vocabulary: swim; watch movies; play games; read a book; ride a bike; listen to music",
                  "lines": [
                    "T || Él nada. || He swims.",
                    "T || Ella nada. || She swims.",
                    "Q || What does your mom do on a rainy afternoon? || She watches movies.",
                    "Q || When does your brother play games? || He plays games on Saturdays.",
                    "Q || What does your teacher do before bed? || He reads a book.",
                    "Q || Does your mom play games? || Yes, she plays games. / No, she doesn't play games.",
                    "Q || What does your brother do on weekends? || He plays games.",
                    "Q || What does your dad read before bed? || He reads a book.",
                    "F || He ____ a book. || reads || read / reading",
                    "F || He ____ games. || plays || play / playing",
                    "Q || Spell the word \"swim\". || S-W-I-M.",
                    "Q || When does your best friend ride a bike? || She rides a bike after school.",
                    "Q || What does your dad do in the library? || He reads a book.",
                    "Q || What does your sister do after school? || She rides a bike.",
                    "H || 🏊 || Guess the action! || Swim",
                    "T || Mi hermano nada. || My brother swims."
                  ],
                  "mistakes": [
                    "M || She [ride] a bike after school. || riding / rides* / ride || She rides a bike after school.",
                    "M || She [ride] a bike. || rides* / ride / riding || She rides a bike."
                  ]
                }
              ]
            },
            {
              "week": 3,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "The Super Pets — Simple present (3rd person); Positive sentences — Vocabulary: Climb, Run, Jump",
                  "lines": [
                    "Q || What does a cat do in the garden? || It climbs a tree.",
                    "Q || What does your dog do on a sunny afternoon? || It runs.",
                    "Q || What does a rabbit do during a game? || It jumps.",
                    "Q || What does a cat do in the afternoon? || It climbs a tree.",
                    "Q || What does your dog do when you get home? || My dog runs to me.",
                    "Q || What does a rabbit do in the morning? || It jumps.",
                    "Q || What does a cat do on Sundays? || It climbs a tree.",
                    "Q || What does your dog do in the park? || It runs.",
                    "F || It ____ a tree. || climbs || climb / climbing",
                    "F || It ____. || runs || run / running",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El gato trepa un árbol todos los días. || The cat climbs a tree every day.",
                    "T || Mi gato trepa un árbol. || My cat climbs a tree.",
                    "H || 🏃 || Guess the action! || Run"
                  ],
                  "mistakes": [
                    "M || It [jump]. || jump / jumping / jumps* || It jumps.",
                    "M || The cat [climb] a tree. || climbing / climbs* / climb || The cat climbs a tree."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "The Super Pets — Simple present (3rd person); Yes/No questions (Long answers) — Vocabulary: Climb, Run, Jump, Walk",
                  "lines": [
                    "Q || Does your dog run? || Yes, it runs. / No, it doesn't run.",
                    "Q || Does a rabbit jump? || Yes, it jumps. / No, it doesn't jump.",
                    "Q || Does your dog walk? || Yes, it walks. / No, it doesn't walk.",
                    "Q || Does a cat climb a tree? || Yes, it climbs a tree. / No, it doesn't climb a tree.",
                    "Q || Does your dog run every day? || Yes, it runs. / No, it doesn't run.",
                    "Q || Does a rabbit jump in the grass? || Yes, it jumps in the grass. / No, it does not jump in the grass.",
                    "Q || What does your dog do after lunch? || It walks.",
                    "Q || What does a cat do in the afternoon? || It climbs a tree.",
                    "F || It ____ a tree. || climbs || climb / climbing",
                    "F || It ____. || jumps || jump / jumping",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "H || 🏃 || Guess the action! || Run",
                    "T || Mi perro salta. || My dog jumps."
                  ],
                  "mistakes": [
                    "M || The cat [climb] a tree. || climbing / climbs* / climb || The cat climbs a tree.",
                    "M || The dog [run]. || runs* / run / running || The dog runs."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "The Super Pets — Simple present (3rd person); Wh-questions (What...?) — Vocabulary: Climb, Run, Jump, Walk, Talk",
                  "lines": [
                    "Q || What does a rabbit do during a game? || It jumps.",
                    "Q || What does your dog do on a quiet afternoon? || It walks.",
                    "Q || What does a parrot do at home? || It talks.",
                    "Q || What does a cat do in the garden? || It climbs a tree.",
                    "Q || What does your dog do on a sunny afternoon? || It runs.",
                    "Q || Where does a rabbit jump? || It jumps in the park.",
                    "Q || When does your dog walk? || It walks after lunch.",
                    "Q || What does a parrot do with its voice? || It talks.",
                    "F || It ____. || talks || talk / talking",
                    "F || It ____ a tree. || climbs || climb / climbing",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "T || Mi perro salta. || My dog jumps.",
                    "H || 🚶 || Guess the action! || Walk"
                  ],
                  "mistakes": [
                    "M || It [run]. || runs* / run / running || It runs.",
                    "M || It [jump] in the park. || jump / jumping / jumps* || It jumps in the park."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "The Super Pets — Simple present (3rd person); Wh-questions (When...?) — Vocabulary: Climb, Run, Jump, Walk, Talk",
                  "lines": [
                    "Q || When does your dog walk? || It walks after lunch.",
                    "Q || When does a parrot talk? || It talks after school.",
                    "Q || When does a cat climb a tree? || It climbs a tree in the afternoon.",
                    "Q || When does your dog run? || It runs after school.",
                    "Q || What does a rabbit do during a game? || It jumps.",
                    "Q || Where does your dog walk? || It walks in the park.",
                    "Q || Does a parrot talk at night? || Yes, it talks at night. / No, it does not talk at night.",
                    "Q || What does a cat do in the afternoon? || It climbs a tree.",
                    "F || It ____ after school. || runs || run / running",
                    "F || It ____. || jumps || jump / jumping",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "H || 🚶 || Guess the action! || Walk",
                    "T || Mi gato trepa un árbol. || My cat climbs a tree."
                  ],
                  "mistakes": [
                    "M || It [walk] in the park. || walk / walking / walks* || It walks in the park.",
                    "M || It [climb] a tree. || climbing / climbs* / climb || It climbs a tree."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "The Super Pets — Simple present (3rd person); Wh-questions (Who... with?) — Vocabulary: Climb, Run, Jump, Walk, Talk",
                  "lines": [
                    "Q || Who does a parrot talk with? || It talks with its family.",
                    "Q || Who does your dog walk with? || My dog walks with my dad.",
                    "Q || Who does your dog run with? || It runs with its cousin.",
                    "Q || Who does your dog play with? || My dog plays with me.",
                    "Q || What does your dog do on a quiet afternoon? || It walks.",
                    "Q || Where does a parrot talk? || It talks at home.",
                    "Q || When does a cat climb a tree? || It climbs a tree in the afternoon.",
                    "Q || What does your dog do when you get home? || My dog runs to me.",
                    "F || It ____. || walks || walk / walking",
                    "F || It ____ at home. || talks || talk / talking",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "T || Mi gato trepa un árbol. || My cat climbs a tree.",
                    "T || El gato trepa un árbol por la mañana. || The cat climbs a tree in the morning."
                  ],
                  "mistakes": [
                    "M || It [climb] a tree in the afternoon. || climbing / climbs* / climb || It climbs a tree in the afternoon.",
                    "M || It [run]. || runs* / run / running || It runs."
                  ]
                }
              ]
            },
          {
            "week": 4,
            "days": [
              {
                "day": 1,
                "mistakes": [
                  "M || There [are] a star on the table. || is* / are / be || There is a star on the table.",
                  "M || I [wakes] up at seven o'clock. || wakes / wake* / waking || I wake up at seven o'clock.",
                  "M || There [is] three circles. || am / is / are* || There are three circles.",
                  "M || My favorite color [are] blue. || is* / are / am || My favorite color is blue.",
                  "M || I [eats] dinner in the kitchen. || eat* / eats / eating || I eat dinner in the kitchen.",
                  "M || There are two [heart]. || heart / hearts* / a heart || There are two hearts.",
                  "M || I play with [mi] brother. || me / mi / my* || I play with my brother.",
                  "M || On Saturdays I [plays] soccer. || playing / play* / plays || On Saturdays I play soccer."
                ],
                "label": "Day 1",
                "focus": "There is / there are; simple present, 1st person (review) — Vocabulary: shapes (circle, rectangle, star, heart, square, triangle, oval)",
                "lines": [
                  "H || circle:1 || What shape is hidden? || Circle",
                  "H || star:1 || What shape is hidden? || Star",
                  "F || There ____ three squares. || are || is / aren't",
                  "F || I ____ up at seven o'clock. || wake || wakes / waking",
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
                  "T || Hay tres círculos. || There are three circles."
                ]
              },
              {
                "day": 2,
                "mistakes": [
                  "M || My mom [cook] breakfast in the morning. || cook / cooks* / cooking || My mom cooks breakfast in the morning.",
                  "M || Messi [play] soccer every day. || plays* / play / playing || Messi plays soccer every day.",
                  "M || My dad [wake] up at six. || waking / wake / wakes* || My dad wakes up at six.",
                  "M || She [go] to work at eight. || goes* / going / go || She goes to work at eight.",
                  "M || He [watch] TV on Sundays. || watch / watches* / watching || He watches TV on Sundays.",
                  "M || My sister [do] her homework after school. || doing / does* / do || My sister does her homework after school.",
                  "M || There [is] four squares. || are* / is / am || There are four squares.",
                  "M || My teacher [teach] English every day. || teach / teaching / teaches* || My teacher teaches English every day."
                ],
                "label": "Day 2",
                "focus": "There is / there are; simple present, 3rd person singular (review)",
                "lines": [
                  "H || heart:1 || What shape is hidden? || Heart",
                  "H || triangle:1 || What shape is hidden? || Triangle",
                  "F || Messi ____ soccer every day. || plays || play / playing",
                  "F || My dad ____ up at six o'clock. || wakes || wake / waking",
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
                  "T || Hay dos corazones rojos. || There are two red hearts."
                ]
              },
              {
                "day": 3,
                "mistakes": [
                  "M || There [is] five stars. || is / are* / am || There are five stars.",
                  "M || There [are] a park near my house. || be / is* / are || There is a park near my house.",
                  "M || How many stars [is] there? || are* / is / am || How many stars are there?",
                  "M || There are two [oval] and a circle. || ovals* / oval / an oval || There are two ovals and a circle.",
                  "M || There isn't a [triangles]. || triangles / triangle* / three triangles || There isn't a triangle.",
                  "M || Is there a [squares]? || squares / two squares / square* || Is there a square?",
                  "M || There [are] one window in my room. || are / am / is* || There is one window in my room.",
                  "M || There are three [pencil] on my desk. || pencils* / pencil / a pencil || There are three pencils on my desk."
                ],
                "label": "Day 3",
                "focus": "There is / there are",
                "lines": [
                  "H || rectangle:1 || What shape is hidden? || Rectangle",
                  "F || There ____ a star. || is || are / aren't",
                  "F || There ____ a triangle. || isn't || aren't / are",
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
                  "T || ¿Cuántas estrellas hay? || How many stars are there?"
                ]
              }
            ]
          },
          {
            "week": 5,
            "days": [
              {
                "day": 1,
                "mistakes": [
                  "M || I want to be a doctor in the [futur]. || futur / future* / futuro || I want to be a doctor in the future.",
                  "M || I [wants] to be a vet. || want* / wants / wanting || I want to be a vet.",
                  "M || My favorite profession [are] firefighter. || am / is* / are || My favorite profession is firefighter.",
                  "M || I don't [wants] to be a police officer. || wanting / want* / wants || I don't want to be a police officer.",
                  "M || I want [be] a firefighter. || to be* / be / being || I want to be a firefighter.",
                  "M || I [goes] to school at seven. || goes / going / go* || I go to school at seven.",
                  "M || My mom [are] a doctor. || is* / are / am || My mom is a doctor.",
                  "M || I study [english] at school. || english / English* / inglés || I study English at school."
                ],
                "label": "Day 1",
                "focus": "Simple present, 1st person singular — Vocabulary: professions (doctor, vet, firefighter, police officer)",
                "lines": [
                  "H || 👩‍⚕️ || What profession is hidden? || Doctor",
                  "H || 🧑‍🚒 || What profession is hidden? || Firefighter",
                  "F || I ____ to be a vet. || want || wants / wanting",
                  "F || I don't want ____ a police officer. || to be || be / is",
                  "Q || What do you want to be in the future? || I want to be a doctor. / I want to be a vet.",
                  "Q || What is your favorite profession? || My favorite profession is firefighter.",
                  "Q || What do you do at school? || I study English at school. / I play with my friends.",
                  "Q || What time do you wake up? || I wake up at six thirty.",
                  "Q || Do you want to be a vet? || Yes, I do. / No, I don't.",
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
                  "T || Yo estudio inglés en la escuela. || I study English at school."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Review mode (no own items)",
                "lines": []
              },
              {
                "day": 3,
                "mistakes": [
                  "M || I want to be an astronaut because I [wants] to explore space. || wants / wanting / want* || I want to be an astronaut because I want to explore space.",
                  "M || A firefighter [stop] fires. || stops* / stop / stopping || A firefighter stops fires.",
                  "M || A police officer [fight] crime. || fighting / fight / fights* || A police officer fights crime.",
                  "M || I want to be a vet because I want [help] animals. || to help* / help / helping || I want to be a vet because I want to help animals.",
                  "M || She is [a] astronaut. || a / an* / the || She is an astronaut.",
                  "M || He is [firefighter]. || a firefighter* / an firefighter / firefighter || He is a firefighter.",
                  "M || An astronaut [explore] space. || explore / explores* / exploring || An astronaut explores space.",
                  "M || Where do you want [work]? || working / to work* / work || Where do you want to work?"
                ],
                "label": "Day 3",
                "focus": "Want to be… because I want to… — Vocabulary: help, stop fires, fight crime, explore space (+ astronaut)",
                "lines": [
                  "H || 👩‍🚀 || What profession is hidden? || Astronaut",
                  "H || 🐶🩺 || What profession is hidden? || Vet",
                  "F || A firefighter ____ fires. || stops || stop / stopping",
                  "F || I want to be a vet ____ I want to help animals. || because || but / and",
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
                  "T || Yo quiero trabajar en un hospital. || I want to work in a hospital."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Review mode (no own items)",
                "lines": []
              },
              {
                "day": 5,
                "label": "Day 5 (Exam day – review)",
                "focus": "Exam day (review mode with all Week 5 items, no own items)",
                "lines": []
              }
            ]
          },
            {
              "week": 6,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Prepositions — N/A; Prepositions Positive sentences — Vocabulary: In, On, Under",
                  "lines": [
                    "T || La pelota está dentro de la caja. || The ball is in the box.",
                    "T || El libro está sobre la mesa. || The book is on the table.",
                    "T || El gato está debajo de la silla. || The cat is under the chair.",
                    "T || El lápiz está dentro de la caja. || The pencil is in the box.",
                    "T || El carro de juguete está sobre la cama. || The toy car is on the bed.",
                    "T || La taza está debajo de la silla. || The cup is under the chair.",
                    "T || El perro está debajo de la mesa. || The dog is under the table.",
                    "T || La mochila está sobre la silla. || The bag is on the chair.",
                    "F || The ball ____ in the box. || is || am / are",
                    "F || The book ____ on the table. || is || am / are",
                    "T || El lápiz está dentro de la mochila. || The pencil is in the bag.",
                    "T || El carrito está sobre la cama. || The toy car is on the bed.",
                    "T || La taza está debajo de la mesa. || The cup is under the table.",
                    "T || El perro está dentro de la caja. || The dog is in the box.",
                    "T || El libro está dentro de la caja. || The book is in the box.",
                    "T || El lápiz está sobre la mesa. || The pencil is on the table."
                  ],
                  "mistakes": [
                    "M || The cat [am] under the chair. || am / are / is* || The cat is under the chair.",
                    "M || The pencil [am] in the bag. || are / is* / am || The pencil is in the bag."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Prepositions — N/A; Prepositions Yes/No questions (Long answers) — Vocabulary: In, On, Under, Next to",
                  "lines": [
                    "Q || The book is on the table. Is the book on the table? || Yes, the book is on the table.",
                    "Q || Scene: The cat is on the chair. Is a cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
                    "Q || Scene: The pencil is under the bag. Is the pencil under the bag? || Yes, the pencil is under the bag.",
                    "Q || Scene: The toy car is next to the bed. Is the toy car in the bed? || No, the toy car isn't in the bed. The toy car is next to the bed.",
                    "Q || The cup is on the table. Is the cup under the table? || No, the cup is not under the table.",
                    "Q || Scene: The dog is on the box. Is the dog under the box? || No, the dog isn't under the box. The dog is on the box.",
                    "Q || Scene: The bag is under the chair. Is the bag under the chair? || Yes, the bag is under the chair.",
                    "Q || Scene: The ball is next to the box. Is the ball in the box? || No, the ball isn't in the box. The ball is next to the box.",
                    "F || The pencil ____ under the bag. || is || am / are",
                    "F || The toy car ____ next to the bed. || is || am / are",
                    "T || El carrito está al lado de la cama. || The toy car is next to the bed.",
                    "T || La taza está dentro de la mesa. || The cup is in the table.",
                    "T || El perro está sobre la caja. || The dog is on the box.",
                    "T || La mochila está debajo de la silla. || The bag is under the chair.",
                    "T || La pelota está debajo de la cama. || The ball is under the bed.",
                    "T || El libro está al lado de la caja. || The book is next to the box."
                  ],
                  "mistakes": [
                    "M || The cup [am] in the table. || are / is* / am || The cup is in the table.",
                    "M || The dog [am] on the box. || is* / am / are || The dog is on the box."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Prepositions — N/A; Prepositions Wh-questions Where...? — Vocabulary: In, On, Under, Next to, Behind",
                  "lines": [
                    "Q || The cat is on the chair. Where is the cat? || The cat is on the chair.",
                    "Q || Scene: The pencil is on the bag. Where is the pencil? || The pencil is on the bag.",
                    "Q || Scene: The toy car is under the bed. Where is the toy car? || The toy car is under the bed.",
                    "Q || Scene: The cup is next to the table. Where is the cup? || The cup is next to the table.",
                    "Q || Scene: The dog is behind the box. Where is the dog? || The dog is behind the box.",
                    "Q || The bag is on the chair. Where is the bag? || The bag is on the chair.",
                    "Q || Scene: The ball is on the box. Where is the ball? || The ball is on the box.",
                    "Q || Scene: The book is under the table. Where is the book? || The book is under the table.",
                    "F || The toy car ____ under the bed. || is || am / are",
                    "F || The cup ____ next to the table. || is || am / are",
                    "T || La taza está al lado de la mesa. || The cup is next to the table.",
                    "T || El perro está detrás de la caja. || The dog is behind the box.",
                    "T || La mochila está dentro de la silla. || The bag is in the chair.",
                    "T || La pelota está sobre la caja. || The ball is on the box.",
                    "T || El lápiz está detrás de la caja. || The pencil is behind the box.",
                    "T || La taza está dentro de la caja. || The cup is in the box."
                  ],
                  "mistakes": [
                    "M || The dog [am] behind the box. || is* / am / are || The dog is behind the box.",
                    "M || The bag [am] in the chair. || am / are / is* || The bag is in the chair."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Prepositions — N/A; Prepositions Wh-questions What...? — Vocabulary: In, On, Under, Next to, Behind",
                  "lines": [
                    "Q || Scene: The pencil is in the bag. What is in the bag? || The pencil is in the bag.",
                    "Q || Scene: The toy car is on the bed. What is on the bed? || The toy car is on the bed.",
                    "Q || Scene: The cup is under the table. What is under the table? || The cup is under the table.",
                    "Q || Scene: The dog is next to the box. What is next to the box? || The dog is next to the box.",
                    "Q || Scene: The bag is behind the chair. What is behind the chair? || The bag is behind the chair.",
                    "Q || Scene: The ball is in the box. What is in the box? || The ball is in the box.",
                    "Q || Scene: The book is on the table. What is on the table? || The book is on the table.",
                    "Q || Scene: The cat is under the chair. What is under the chair? || The cat is under the chair.",
                    "F || The dog ____ next to the box. || is || am / are",
                    "F || The bag ____ behind the chair. || is || am / are",
                    "T || El perro está al lado de la caja. || The dog is next to the box.",
                    "T || La mochila está detrás de la silla. || The bag is behind the chair.",
                    "T || La pelota está dentro de la caja. || The ball is in the box.",
                    "T || El libro está sobre la mesa. || The book is on the table.",
                    "T || La pelota está sobre la silla. || The ball is on the chair.",
                    "T || La mochila está debajo de la mesa. || The bag is under the table."
                  ],
                  "mistakes": [
                    "M || The ball [am] in the box. || am / are / is* || The ball is in the box.",
                    "M || The book [am] on the table. || are / is* / am || The book is on the table."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — N/A; Prepositions Positive sentences; Prepositions Yes/No questions (Long answers); Prepositions Wh-questions Where...?; Prepositions Wh-questions What...? — Vocabulary: under; on; in; behind; next to",
                  "lines": [
                    "T || La taza está debajo de la mesa. || The cup is under the table.",
                    "T || El perro está sobre la caja. || The dog is on the box.",
                    "T || La mochila está dentro de la silla. || The bag is in the chair.",
                    "T || La pelota está dentro de la caja. || The ball is in the box.",
                    "T || El carro de juguete está sobre la cama. || The toy car is on the bed.",
                    "Q || The cup is on the table. Is the cup under the table? || No, the cup is not under the table.",
                    "Q || Scene: The dog is behind the box. Where is the dog? || The dog is behind the box.",
                    "Q || Scene: The bag is behind the chair. What is behind the chair? || The bag is behind the chair.",
                    "F || The toy car ____ on the bed. || is || am / are",
                    "F || The dog ____ behind the box. || is || am / are",
                    "T || El libro está detrás de la caja. || The book is behind the box.",
                    "Q || Scene: The book is on the table. What is on the table? || The book is on the table.",
                    "T || La mochila está sobre la silla. || The bag is on the chair.",
                    "Q || Scene: The ball is next to the box. Is the ball in the box? || No, the ball isn't in the box. The ball is next to the box.",
                    "T || La taza está al lado del libro. || The cup is next to the book.",
                    "T || La pelota está detrás de la silla. || The ball is behind the chair."
                  ],
                  "mistakes": [
                    "M || The bag [am] behind the chair. || are / is* / am || The bag is behind the chair.",
                    "M || The book [am] under the box. || is* / am / are || The book is under the box."
                  ]
                }
              ]
            },
            {
              "week": 7,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Body parts — N/A; This is / These are Positive sentences — Vocabulary: Head, eyes, ears, nose, mouth, chin",
                  "lines": [
                    "Q || Point to your head. What is this? || This is my head.",
                    "Q || Point to your eyes. What are these? || These are my eyes.",
                    "Q || Point to your ears. What are these? || These are my ears.",
                    "Q || Point to your nose. What is this? || This is my nose.",
                    "Q || Point to your mouth. What is this? || This is my mouth.",
                    "Q || Point to your chin. What is this? || This is my chin.",
                    "Q || Complete: This ____ my head. || This is my head.",
                    "Q || Complete: These ____ my eyes. || These are my eyes.",
                    "F || This ____ my head. || is || am / are",
                    "F || These ____ my eyes. || are || am / is",
                    "T || Esta es mi cabeza. || This is my head.",
                    "T || Estos son mis ojos. || These are my eyes.",
                    "T || Estas son mis orejas. || These are my ears.",
                    "T || Esta es mi nariz. || This is my nose.",
                    "H || 👀 || Guess the hidden body part! || Eyes",
                    "H || 👂 || Guess the hidden body part! || Ear"
                  ],
                  "mistakes": [
                    "M || These [am] my ears. || am / is / are* || These are my ears.",
                    "M || This [am] my nose. || are / is* / am || This is my nose."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Body parts — N/A; What is this? What are these? — Vocabulary: Head, eyes, ears, nose, mouth, chin",
                  "lines": [
                    "Q || Point to your head. What is this? || This is my head.",
                    "Q || Point to your eyes. What are these? || These are my eyes.",
                    "Q || Point to your ears. What are these? || These are my ears.",
                    "Q || Point to your nose. What is this? || This is my nose.",
                    "Q || Point to your mouth. What is this? || This is my mouth.",
                    "Q || Point to your chin. What is this? || This is my chin.",
                    "Q || Complete: This ____ my head. || This is my head.",
                    "Q || Complete: These ____ my eyes. || These are my eyes.",
                    "F || These ____ my eyes. || are || am / is",
                    "F || These ____ my ears. || are || am / is",
                    "T || Esta es mi cabeza. || This is my head.",
                    "T || Estos son mis ojos. || These are my eyes.",
                    "T || Estas son mis orejas. || These are my ears.",
                    "T || Esta es mi nariz. || This is my nose.",
                    "H || 👀 || Guess the hidden body part! || Eyes",
                    "H || 👂 || Guess the hidden body part! || Ear"
                  ],
                  "mistakes": [
                    "M || This [am] my nose. || are / is* / am || This is my nose.",
                    "M || This [am] my mouth. || is* / am / are || This is my mouth."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Body parts — N/A; That is / Those are Positive sentences — Vocabulary: Shoulders, knee, elbow, legs, fingers, toes",
                  "lines": [
                    "T || Esos son los hombros de mi papá. || Those are my dad's shoulders.",
                    "T || Esa es la rodilla de mi hermana. || That is my sister's knee.",
                    "T || Ese es el codo de mi hermano. || That is my brother's elbow.",
                    "T || Esas son las piernas de mi mamá. || Those are my mom's legs.",
                    "T || Esos son sus dedos. || Those are his fingers.",
                    "T || Esos son sus dedos de los pies. || Those are her toes.",
                    "Q || Complete: Those ____ its shoulders. || Those are its shoulders.",
                    "Q || Complete: That ____ its knee. || That is its knee.",
                    "F || That ____ its elbow. || is || am / are",
                    "F || Those ____ its legs. || are || am / is",
                    "T || Esos son sus hombros. || Those are its shoulders.",
                    "T || Esa es su rodilla. || That is its knee.",
                    "T || Ese es su codo. || That is its elbow.",
                    "T || Esas son sus piernas. || Those are its legs.",
                    "H || 👀 || Guess the hidden body part! || Eyes",
                    "H || 👂 || Guess the hidden body part! || Ear"
                  ],
                  "mistakes": [
                    "M || Those [am] its fingers. || are* / am / is || Those are its fingers.",
                    "M || Those [am] its toes. || am / is / are* || Those are its toes."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Body parts — N/A; What is that What are those? — Vocabulary: Shoulders, knee, elbow, legs, fingers, toes",
                  "lines": [
                    "T || Esos son los hombros de mi hermano. || Those are my brother's shoulders.",
                    "T || Esa es la rodilla de mi mamá. || That is my mom's knee.",
                    "T || Ese es el codo de mi papá. || That is my dad's elbow.",
                    "T || Esas son las piernas de mi hermana. || Those are my sister's legs.",
                    "T || Esos son sus dedos. || Those are his fingers.",
                    "T || Esos son sus dedos de los pies. || Those are her toes.",
                    "Q || Complete: Those ____ its shoulders. || Those are its shoulders.",
                    "Q || Complete: That ____ its knee. || That is its knee.",
                    "F || Those ____ its shoulders. || are || am / is",
                    "F || That ____ its knee. || is || am / are",
                    "T || Esos son sus hombros. || Those are its shoulders.",
                    "T || Esa es su rodilla. || That is its knee.",
                    "T || Ese es su codo. || That is its elbow.",
                    "T || Esas son sus piernas. || Those are its legs.",
                    "H || 👀 || Guess the hidden body part! || Eyes",
                    "H || 👂 || Guess the hidden body part! || Ear"
                  ],
                  "mistakes": [
                    "M || That [am] its elbow. || am / are / is* || That is its elbow.",
                    "M || Those [am] its legs. || is / are* / am || Those are its legs."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Body parts — N/A; What is this? What are these? — Vocabulary: Simon says: shoulders, knees, elbows, legs, fingers/toes",
                  "lines": [
                    "Q || Simon says: point to your shoulders. What are these? || These are my shoulders.",
                    "Q || Simon says: point to your knee. What is this? || This is my knee.",
                    "Q || Simon says: point to your elbow. What is this? || This is my elbow.",
                    "Q || Simon says: point to your legs. What are these? || These are my legs.",
                    "Q || Simon says: point to your fingers. What are these? || These are my fingers.",
                    "Q || Simon says: point to your toes. What are these? || These are my toes.",
                    "Q || Complete: These ____ my shoulders. || These are my shoulders.",
                    "Q || Complete: This ____ my knee. || This is my knee.",
                    "F || This ____ my knee. || is || am / are",
                    "F || This ____ my elbow. || is || am / are",
                    "T || Estos son mis hombros. || These are my shoulders.",
                    "T || Esta es mi rodilla. || This is my knee.",
                    "T || Este es mi codo. || This is my elbow.",
                    "T || Estas son mis piernas. || These are my legs.",
                    "H || 👀 || Guess the hidden body part! || Eyes",
                    "H || 👂 || Guess the hidden body part! || Ear"
                  ],
                  "mistakes": [
                    "M || These [am] my legs. || is / are* / am || These are my legs.",
                    "M || These [am] my fingers. || are* / am / is || These are my fingers."
                  ]
                }
              ]
            },
            {
              "week": 8,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Describing animals — N/A; Let's describe pets! Positive sentences — Vocabulary: Fur, Paws, Tail, Whiskers, Wings, Feathers",
                  "lines": [
                    "T || Un gato tiene pelaje. || A cat has fur.",
                    "T || Mi perro tiene cuatro patas. || My dog has four paws.",
                    "T || Mi gato tiene bigotes largos. || My cat has long whiskers.",
                    "T || Un pájaro tiene alas. || A bird has wings.",
                    "T || Un pájaro tiene plumas. || A bird has feathers.",
                    "T || Un perro tiene una cola. || A dog has a tail.",
                    "T || Un gato no tiene alas. || A cat doesn't have wings.",
                    "T || Un pájaro no tiene pelaje. || A bird doesn't have fur.",
                    "F || A cat ____ fur. || has || have / having",
                    "F || A dog ____ paws. || has || have / having",
                    "Q || What does a cat have? || A cat has fur, paws and a tail.",
                    "Q || Which has feathers: a cat or a bird? || A bird has feathers.",
                    "T || Un gato tiene bigotes. || A cat has whiskers.",
                    "T || Un perro tiene patas. || A dog has paws.",
                    "Q || Name two features of a cat. || A cat has fur and whiskers.",
                    "Q || Name two features of a bird. || A bird has wings and feathers."
                  ],
                  "mistakes": [
                    "M || A cat [have] whiskers. || have / having / has* || A cat has whiskers.",
                    "M || A bird [have] wings. || having / has* / have || A bird has wings."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Describing animals — N/A; Does it have...? Yes/No questions (Short answers) — Vocabulary: Fur, Paws, Tail, Whiskers, Wings, Feathers",
                  "lines": [
                    "Q || Does a cat have fur? || Yes, it does.",
                    "Q || Does a dog have paws? || Yes, it does.",
                    "Q || Does a cat have whiskers? || Yes, it does.",
                    "Q || Does a bird have wings? || Yes, it does.",
                    "Q || Does a bird have feathers? || Yes, it does.",
                    "Q || Does a dog have a tail? || Yes, it does.",
                    "Q || Does a cat have wings? || No, it doesn't.",
                    "Q || Does a bird have fur? || No, it doesn't.",
                    "F || A bird ____ wings and feathers. || has || have / having",
                    "F || My pet ____ paws, fur and a tail. || has || have / having",
                    "Q || What does a cat have? || A cat has fur, paws and a tail.",
                    "Q || Which has feathers: a cat or a bird? || A bird has feathers.",
                    "T || Un gato tiene bigotes. || A cat has whiskers.",
                    "T || Un perro tiene patas. || A dog has paws.",
                    "Q || Name two features of a cat. || A cat has fur and whiskers.",
                    "Q || Name two features of a bird. || A bird has wings and feathers."
                  ],
                  "mistakes": [
                    "M || A bird [have] feathers. || having / has* / have || A bird has feathers.",
                    "M || A cat [have] whiskers. || has* / have / having || A cat has whiskers."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Describing animals — N/A; Positive sentences Yes/No questions (Long answers) — Vocabulary: Fur, Paws, Tail, Whiskers, Wings, Feathers",
                  "lines": [
                    "Q || Does a cat have fur? || Yes, a cat has fur.",
                    "Q || Does a dog have paws? || Yes, a dog has paws.",
                    "Q || Does a cat have whiskers? || Yes, a cat has whiskers.",
                    "Q || Does a bird have wings? || Yes, a bird has wings.",
                    "Q || Does a bird have feathers? || Yes, a bird has feathers.",
                    "Q || Does a dog have a tail? || Yes, a dog has a tail.",
                    "Q || Does a cat have wings? || No, a cat doesn't have wings.",
                    "Q || Does a bird have fur? || No, a bird doesn't have fur.",
                    "F || My pet ____ paws, fur and a tail. || has || have / having",
                    "F || A bird ____ feathers. || has || have / having",
                    "Q || What does a cat have? || A cat has fur, paws and a tail.",
                    "Q || Which has feathers: a cat or a bird? || A bird has feathers.",
                    "T || Un gato tiene bigotes. || A cat has whiskers.",
                    "T || Un perro tiene patas. || A dog has paws.",
                    "Q || Name two features of a cat. || A cat has fur and whiskers.",
                    "Q || Name two features of a bird. || A bird has wings and feathers."
                  ],
                  "mistakes": [
                    "M || A cat [have] whiskers. || has* / have / having || A cat has whiskers.",
                    "M || A dog [have] paws. || have / having / has* || A dog has paws."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: doctor; teacher; in; head; fur; paws; fur; tail; milk; paint a picture; talk; eleven; Wake up, take a shower, eat, run, play, drink, Sing, paint, dance, read, clean; rectangle; red; watch TV",
                  "lines": [
                    "Q || Do you want to be a doctor? || Yes, I want to be a doctor. / No, I don't want to be a doctor.",
                    "T || Quiero ser profesor. || I want to be a teacher.",
                    "T || La pelota está dentro de la caja. || The ball is in the box.",
                    "T || El lápiz está dentro de la mochila. || The pencil is in the bag.",
                    "Q || Point to your head. What is this? || This is my head.",
                    "T || Esta es mi cabeza. || This is my head.",
                    "T || Un gato tiene pelaje. || A cat has fur.",
                    "Q || What does a cat have? || A cat has fur, paws and a tail.",
                    "F || This ____ my head. || is || am / are",
                    "F || A cat ____ fur. || has || have / having",
                    "Q || Where does a parrot talk? || It talks at home.",
                    "T || once || eleven",
                    "Q || When does your brother clean his room? || He cleans his room on Sundays.",
                    "Q || Spell the word \"rectangle\". || R-E-C-T-A-N-G-L-E.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "S || red rectangle:2, heart:2 || What color are the rectangles? || The rectangles are red."
                  ],
                  "mistakes": [
                    "M || My pet [have] paws, fur and a tail. || have / having / has* || My pet has paws, fur and a tail.",
                    "M || He [paint] a picture. || painting / paints* / paint || He paints a picture."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: vet; astronaut; on; in; eyes; paws; feathers; Good morning, Good afternoon, Good evening, Good night; eat breakfast; oval; alphabet; cook dinner; mangoes; ice cream; wake up",
                  "lines": [
                    "Q || Do you want to be a vet? || Yes, I want to be a vet. / No, I don't want to be a vet.",
                    "T || Quiero ser astronauta. || I want to be an astronaut.",
                    "Q || Scene: The cat is on the chair. Is a cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
                    "T || La taza está dentro de la mesa. || The cup is in the table.",
                    "Q || Point to your eyes. What are these? || These are my eyes.",
                    "T || Estos son mis ojos. || These are my eyes.",
                    "Q || Does a dog have paws? || Yes, it does.",
                    "Q || Which has feathers: a cat or a bird? || A bird has feathers.",
                    "F || My name ____ Leo. || is || am / are",
                    "F || I ____ breakfast. || eat || eats / eating",
                    "Q || Spell the word \"oval\". || O-V-A-L.",
                    "Q || What letter is it: B? || B",
                    "Q || What does your cousin do in the kitchen? || She cooks dinner.",
                    "Q || What fruit do you like? || I like mangoes.",
                    "S || green oval:3, rectangle:2 || How many ovals are there? || There are three ovals.",
                    "H || 🍦 || Guess the hidden food! || Ice cream"
                  ],
                  "mistakes": [
                    "M || There [am] three ovals. || is / are* / am || There are three ovals.",
                    "M || She [cook] dinner. || cooks* / cook / cooking || She cooks dinner."
                  ]
                }
              ]
            }
        ],
        "vocab": [
          { week: "general", category: "Colors", words: ["red", "blue", "yellow", "green", "orange", "purple", "pink", "black", "white", "brown", "gray"] },
          { week: "general", category: "Numbers", words: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"] },
          { week: "general", category: "Family", words: ["mom", "dad", "brother", "sister", "grandma", "grandpa", "baby", "aunt", "uncle", "cousin"] },
          { week: "general", category: "Daily routine", words: ["wake up", "take a shower", "brush my teeth", "eat breakfast", "go to school", "do homework", "play", "eat dinner", "watch TV", "go to bed"] },
          { week: "general", category: "Food", words: ["apple", "banana", "pizza", "rice", "chicken", "bread", "milk", "water", "juice", "cookie", "sandwich", "soup"] },
          { week: "general", category: "Animals", words: ["dog", "cat", "bird", "fish", "horse", "cow", "pig", "lion", "monkey", "elephant", "rabbit", "turtle"] },
          { week: "general", category: "School", words: ["pencil", "pen", "book", "notebook", "desk", "chair", "teacher", "backpack", "eraser", "ruler"] },
          { week: "general", category: "Rooms", words: ["kitchen", "bedroom", "bathroom", "living room", "garden", "garage"] },
          {
            "week": 4,
            "category": "Shapes",
            "words": [
              "circle",
              "rectangle",
              "star",
              "heart",
              "square",
              "triangle",
              "oval"
            ]
          },
          {
            "week": 5,
            "category": "Professions",
            "words": [
              "doctor",
              "vet",
              "firefighter",
              "police officer",
              "astronaut"
            ]
          },
          {
            "week": 5,
            "category": "What do they do?",
            "words": [
              "help people",
              "help animals",
              "stop fires",
              "fight crime",
              "explore space"
            ]
          }
        ]
      },
      {
        "level": 3,
        "weeks": [
            {
              "week": 1,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Activities in class — Present progressive (1st person); Positive sentences — Vocabulary: Sit, Pay Attention, Take Notes",
                  "lines": [
                    "Q || What are you doing at a desk? || I am sitting.",
                    "Q || What are you doing at school? || I am paying attention.",
                    "Q || What are you doing with your notebook? || I am taking notes.",
                    "Q || What are you doing during class? || I am sitting.",
                    "Q || What are you doing during the lesson? || I am paying attention.",
                    "Q || Where are you taking notes? || I am taking notes in class.",
                    "Q || What are you doing in the classroom? || I am sitting.",
                    "Q || What are you doing in class? || I am paying attention.",
                    "F || I am ____. || sitting || sit / sits",
                    "F || I am ____ attention. || paying || pay / pays",
                    "T || Yo estoy sentado. || I am sitting.",
                    "T || Yo estoy prestando atención. || I am paying attention.",
                    "T || Yo estoy tomando notas. || I am taking notes.",
                    "T || Yo estoy sentado ahora. || I am sitting right now.",
                    "T || Yo estoy sentado en clase. || I am sitting in class.",
                    "T || Yo estoy prestando atención en clase. || I am paying attention in class."
                  ],
                  "mistakes": [
                    "M || I am [take] notes. || take / takes / taking* || I am taking notes.",
                    "M || I am [take] notes in class. || takes / taking* / take || I am taking notes in class."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Activities in class — Present progressive (1st person); Yes/No questions (Short answers) — Vocabulary: Sit, Pay Attention, Take Notes, Learn",
                  "lines": [
                    "Q || Are you paying attention? || Yes, I am. / No, I am not.",
                    "Q || Are you taking notes? || Yes, I am. / No, I am not.",
                    "Q || Are you learning English? || Yes, I am. / No, I am not.",
                    "Q || Are you sitting? || Yes, I am. / No, I am not.",
                    "Q || Are you paying attention right now? || Yes, I am. / No, I am not.",
                    "Q || Are you taking notes right now? || Yes, I am. / No, I am not.",
                    "Q || What are you doing after lunch? || I am learning English.",
                    "Q || What are you doing during class? || I am sitting.",
                    "F || I am ____ English. || learning || learn / learns",
                    "F || I am ____. || sitting || sit / sits",
                    "T || Yo estoy sentado. || I am sitting.",
                    "T || Yo estoy prestando atención. || I am paying attention.",
                    "T || Yo estoy tomando notas. || I am taking notes.",
                    "T || Yo estoy aprendiendo inglés. || I am learning English.",
                    "T || Yo estoy prestando atención en clase. || I am paying attention in class.",
                    "T || Yo estoy tomando notas en clase. || I am taking notes in class."
                  ],
                  "mistakes": [
                    "M || I am [take] notes. || takes / taking* / take || I am taking notes.",
                    "M || I am [pay] attention. || paying* / pay / pays || I am paying attention."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Activities in class — Present progressive (1st person); Wh-questions (What...?) — Vocabulary: Sit, Pay Attention, Take Notes, Learn, Speak",
                  "lines": [
                    "Q || What are you doing with your notebook? || I am taking notes.",
                    "Q || What are you learning in class? || I am learning English.",
                    "Q || What are you doing with the teacher? || I am speaking English.",
                    "Q || What are you doing at a desk? || I am sitting.",
                    "Q || What are you doing at school? || I am paying attention.",
                    "Q || Where are you taking notes? || I am taking notes in class.",
                    "Q || What are you doing after lunch? || I am learning English.",
                    "Q || What are you doing during English class? || I am speaking English.",
                    "F || I am ____ English. || speaking || speak / speaks",
                    "F || I am ____. || sitting || sit / sits",
                    "T || Yo estoy sentado. || I am sitting.",
                    "T || Yo estoy prestando atención. || I am paying attention.",
                    "T || Yo estoy tomando notas. || I am taking notes.",
                    "T || Yo estoy aprendiendo inglés. || I am learning English.",
                    "T || Yo estoy tomando notas en clase. || I am taking notes in class.",
                    "T || Yo estoy aprendiendo inglés en clase. || I am learning English in class."
                  ],
                  "mistakes": [
                    "M || I am [pay] attention. || paying* / pay / pays || I am paying attention.",
                    "M || I am [take] notes in class. || take / takes / taking* || I am taking notes in class."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Activities in class — Present progressive (1st person); Wh-questions (Why...?) — Vocabulary: Sit, Pay Attention, Take Notes, Learn, Speak",
                  "lines": [
                    "Q || Why are you learning English? || Because I like languages.",
                    "Q || Why are you speaking English? || Because I want to practice.",
                    "Q || Why are you sitting? || Because the lesson is starting.",
                    "Q || Why are you paying attention? || Because I want to understand.",
                    "Q || What are you doing with your notebook? || I am taking notes.",
                    "Q || Where are you learning English? || I am learning English in class.",
                    "Q || What are you doing during English class? || I am speaking English.",
                    "Q || What are you doing during class? || I am sitting.",
                    "F || I am ____ notes. || taking || take / takes",
                    "F || I am ____ English in class. || learning || learn / learns",
                    "T || Yo estoy sentado. || I am sitting.",
                    "T || Yo estoy prestando atención. || I am paying attention.",
                    "T || Yo estoy tomando notas. || I am taking notes.",
                    "T || Yo estoy aprendiendo inglés. || I am learning English.",
                    "T || Yo estoy aprendiendo inglés en clase. || I am learning English in class.",
                    "T || Yo estoy sentado en clase. || I am sitting in class."
                  ],
                  "mistakes": [
                    "M || I am [speak] English. || speak / speaks / speaking* || I am speaking English.",
                    "M || I am [sit]. || sits / sitting* / sit || I am sitting."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Present progressive (1st person); Positive sentences; Yes/No questions (Short answers); Wh-questions (What...?); Wh-questions (Why...?) — Vocabulary: take notes; sit; pay attention; learn English; speak English",
                  "lines": [
                    "T || Yo estoy tomando notas. || I am taking notes.",
                    "Q || Are you sitting? || Yes, I am. / No, I am not.",
                    "Q || What are you doing at a desk? || I am sitting.",
                    "Q || Why are you paying attention? || Because I want to understand.",
                    "Q || What are you doing during the lesson? || I am paying attention.",
                    "Q || Are you paying attention right now? || Yes, I am. / No, I am not.",
                    "Q || What are you doing at school? || I am paying attention.",
                    "Q || What are you doing with your notebook? || I am taking notes.",
                    "F || I am ____ notes. || taking || take / takes",
                    "F || I am ____. || sitting || sit / sits",
                    "T || Estoy aprendiendo inglés. || I am learning English.",
                    "Q || What are you doing during English class? || I am speaking English.",
                    "Q || What are you doing in class? || I am paying attention.",
                    "Q || What are you doing during class? || I am sitting.",
                    "T || Yo estoy tomando notas en clase. || I am taking notes in class.",
                    "T || Yo estoy sentado en clase. || I am sitting in class."
                  ],
                  "mistakes": [
                    "M || I am [pay] attention. || pays / paying* / pay || I am paying attention.",
                    "M || I am [learn] English. || learning* / learn / learns || I am learning English."
                  ]
                }
              ]
            },
            {
              "week": 2,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Clothing — Present progressive (1st person); Positive sentences Yes/No questions (Short answers) — Vocabulary: Pants, T-Shirt, Shoes, Dress, Shorts",
                  "lines": [
                    "Q || Ask a friend about their outfit. || What are you wearing today?",
                    "Q || What are you wearing today? || I am wearing blue pants and a T-shirt.",
                    "E || 👟 || Imagine this is part of your outfit. What are you wearing? || I am wearing shoes.",
                    "E || 👗 || Imagine this is part of your outfit. What are you wearing? || I am wearing a dress.",
                    "E || 🩳 || Imagine this is part of your outfit. What are you wearing? || I am wearing shorts.",
                    "Q || What are you wearing on your feet today? || I am wearing shoes.",
                    "Q || What color is your T-shirt today? || My T-shirt is blue.",
                    "Q || Describe two things you are wearing. || I am wearing pants and a T-shirt.",
                    "F || I am ____ pants. || wearing || wear / wears",
                    "F || I am ____ a T-shirt. || wearing || wear / wears",
                    "T || Estoy usando un vestido. || I am wearing a dress.",
                    "T || Estoy usando pantalones cortos. || I am wearing shorts.",
                    "Q || Complete: I ____ wearing a T-shirt. || I am wearing a T-shirt.",
                    "Q || Complete: I am ____ shoes. || I am wearing shoes.",
                    "H || 👖 || Guess the hidden clothing item! || Pants",
                    "H || 👕 || Guess the hidden clothing item! || T-shirt"
                  ],
                  "mistakes": [
                    "M || I am [wear] shoes. || wear / wears / wearing* || I am wearing shoes.",
                    "M || I am [wear] a dress. || wears / wearing* / wear || I am wearing a dress."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Clothing — Present progressive (1st person); Yes/No questions (Long answers) — Vocabulary: Pants, T-Shirt, Shoes, Dress, Shorts, Socks, Sweater",
                  "lines": [
                    "Q || Are you wearing pants? || Yes, I am wearing pants. / No, I am not wearing pants.",
                    "Q || Are you wearing a T-shirt? || Yes, I am wearing a T-shirt. / No, I am not wearing a T-shirt.",
                    "Q || Are you wearing shoes? || Yes, I am wearing shoes. / No, I am not wearing shoes.",
                    "Q || Are you wearing a dress? || Yes, I am wearing a dress. / No, I am not wearing a dress.",
                    "Q || Are you wearing shorts? || Yes, I am wearing shorts. / No, I am not wearing shorts.",
                    "Q || Are you wearing socks? || Yes, I am wearing socks. / No, I am not wearing socks.",
                    "Q || Are you wearing a sweater? || Yes, I am wearing a sweater. / No, I am not wearing a sweater.",
                    "Q || Are you wearing blue pants? || Yes, I am wearing pants. / No, I am not wearing pants.",
                    "F || I am ____ a dress. || wearing || wear / wears",
                    "F || I am ____ shorts. || wearing || wear / wears",
                    "T || Estoy usando pantalones cortos. || I am wearing shorts.",
                    "T || Estoy usando calcetines. || I am wearing socks.",
                    "Q || Complete: I ____ wearing a T-shirt. || I am wearing a T-shirt.",
                    "Q || Complete: I am ____ shoes. || I am wearing shoes.",
                    "H || 👟 || Guess the hidden clothing item! || Shoes",
                    "H || 👗 || Guess the hidden clothing item! || Dress"
                  ],
                  "mistakes": [
                    "M || I am [wear] socks. || wears / wearing* / wear || I am wearing socks.",
                    "M || I am [wear] a T-shirt. || wearing* / wear / wears || I am wearing a T-shirt."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Clothing — Present progressive (1st person); Wh-questions (What...?) — Vocabulary: Pants, T-Shirt, Shoes, Dress, Shorts, Socks, Sweater",
                  "lines": [
                    "Q || Ask a friend about their outfit. || What are you wearing today?",
                    "Q || What are you wearing today? || I am wearing blue pants and a T-shirt.",
                    "E || 👟 || Imagine this is part of your outfit. What are you wearing? || I am wearing shoes.",
                    "E || 👗 || Imagine this is part of your outfit. What are you wearing? || I am wearing a dress.",
                    "E || 🩳 || Imagine this is part of your outfit. What are you wearing? || I am wearing shorts.",
                    "Q || What are you wearing on your feet today? || I am wearing shoes.",
                    "Q || What color is your T-shirt today? || My T-shirt is blue.",
                    "Q || Describe two things you are wearing. || I am wearing pants and a T-shirt.",
                    "F || I am ____ shoes. || wearing || wear / wears",
                    "F || I am ____ a dress. || wearing || wear / wears",
                    "T || Estoy usando calcetines. || I am wearing socks.",
                    "T || Estoy usando un suéter. || I am wearing a sweater.",
                    "Q || Complete: I ____ wearing a T-shirt. || I am wearing a T-shirt.",
                    "Q || Complete: I am ____ shoes. || I am wearing shoes.",
                    "H || 👖 || Guess the hidden clothing item! || Pants",
                    "H || 👕 || Guess the hidden clothing item! || T-shirt"
                  ],
                  "mistakes": [
                    "M || I am [wear] shorts. || wearing* / wear / wears || I am wearing shorts.",
                    "M || My T-shirt [am] blue. || am / are / is* || My T-shirt is blue."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Clothing — Present progressive (1st person); Wh-questions (Why...?) — Vocabulary: Pants, T-Shirt, Shoes, Dress, Shorts, Socks, Sweater",
                  "lines": [
                    "Q || It is cold outside. You are wearing pants. Why are you wearing pants? || I am wearing pants because it is cold.",
                    "Q || It is hot at home. You are wearing a T-shirt. Why are you wearing a T-shirt? || I am wearing a T-shirt because it is hot.",
                    "Q || You are outside. The ground is hot. Why are you wearing shoes? || I am wearing shoes because the ground is hot.",
                    "Q || You are at a party in your favorite dress. Why are you wearing that dress? || I am wearing this dress because it is my favorite.",
                    "Q || It is hot outside. You are wearing shorts. Why are you wearing shorts? || I am wearing shorts because it is hot.",
                    "Q || Your feet are cold. You are wearing socks. Why are you wearing socks? || I am wearing socks because my feet are cold.",
                    "Q || It is cold outside. You are wearing a sweater. Why are you wearing a sweater? || I am wearing a sweater because it is cold.",
                    "Q || Your pants are comfortable. Why are you wearing them at home? || I am wearing them because they are comfortable.",
                    "F || I am ____ a dress because it is my favorite outfit. || wearing || wear / wears",
                    "F || I am ____ shorts because it is comfortable. || wearing || wear / wears",
                    "T || Estoy usando un suéter. || I am wearing a sweater.",
                    "T || Estoy usando pantalones. || I am wearing pants.",
                    "Q || Complete: I ____ wearing a T-shirt. || I am wearing a T-shirt.",
                    "Q || Complete: I am ____ shoes. || I am wearing shoes.",
                    "H || 🧦 || Guess the hidden clothing item! || Socks",
                    "H || 👕 || Guess the hidden clothing item! || T-shirt"
                  ],
                  "mistakes": [
                    "M || I am [wear] socks because it is warm today. || wear / wears / wearing* || I am wearing socks because it is warm today.",
                    "M || I am [wear] a sweater because I like it. || wears / wearing* / wear || I am wearing a sweater because I like it."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Present progressive (1st person); Positive sentences Yes/No questions (Short answers); Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Why...?) — Vocabulary: wearing; a dress; shorts; pants; T-shirt; a sweater; shoes; pants",
                  "lines": [
                    "Q || Complete: I ____ wearing a T-shirt. || I am wearing a T-shirt.",
                    "Q || Are you wearing a dress? || Yes, I am wearing a dress. / No, I am not wearing a dress.",
                    "T || Estoy usando pantalones cortos. || I am wearing shorts.",
                    "Q || You are at a party in your favorite dress. Why are you wearing that dress? || I am wearing this dress because it is my favorite.",
                    "Q || Your pants are comfortable. Why are you wearing them at home? || I am wearing them because they are comfortable.",
                    "Q || Are you wearing shorts? || Yes, I am wearing shorts. / No, I am not wearing shorts.",
                    "Q || Ask a friend about their outfit. || What are you wearing today?",
                    "Q || It is hot outside. You are wearing shorts. Why are you wearing shorts? || I am wearing shorts because it is hot.",
                    "F || I am ____ shorts because it is comfortable. || wearing || wear / wears",
                    "F || I am ____ blue pants and a blue T-shirt. || wearing || wear / wears",
                    "Q || What color is your T-shirt today? || My T-shirt is blue.",
                    "Q || It is cold outside. You are wearing a sweater. Why are you wearing a sweater? || I am wearing a sweater because it is cold.",
                    "Q || Describe two things you are wearing. || I am wearing pants and a T-shirt.",
                    "Q || Are you wearing blue pants? || Yes, I am wearing pants. / No, I am not wearing pants.",
                    "H || 👗 || Guess the hidden clothing item! || Dress",
                    "H || 🩳 || Guess the hidden clothing item! || Shorts"
                  ],
                  "mistakes": [
                    "M || My T-shirt [am] blue. || are / is* / am || My T-shirt is blue.",
                    "M || I am [wear] a sweater because I like it. || wearing* / wear / wears || I am wearing a sweater because I like it."
                  ]
                }
              ]
            },
            {
              "week": 3,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Aliens on a mission — Present progressive (3rd person); Positive sentences — Vocabulary: Fly, Ride a Bike, Take a Nap",
                  "lines": [
                    "Q || What is Messi doing right now? || He is flying in a plane.",
                    "Q || What is your dad doing in the park? || He is riding a bike.",
                    "Q || What is your mom doing after lunch? || She is taking a nap.",
                    "Q || What is your uncle doing right now? || He is flying in a plane.",
                    "Q || What is your best friend doing in the park? || He is riding a bike.",
                    "Q || Where is your grandpa taking a nap? || He is taking a nap on the sofa.",
                    "Q || What is your dad doing right now? || He is flying in a plane.",
                    "Q || What is your cousin doing in the park? || He is riding a bike.",
                    "F || He is ____. || flying || fly / flies",
                    "F || She is ____ a bike. || riding || ride / rides",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está volando. || She is flying.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || El extraterrestre está volando. || The alien is flying."
                  ],
                  "mistakes": [
                    "M || He is [take] a nap. || take / takes / taking* || He is taking a nap.",
                    "M || She is [fly]. || flies / flying* / fly || She is flying."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Aliens on a mission — Present progressive (3rd person); Yes/No questions (Short and long answers) — Vocabulary: Fly, Ride a Bike, Take a Nap, Listen to Music",
                  "lines": [
                    "Q || Is your dad riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
                    "Q || Is your mom taking a nap right now? || Yes, she is taking a nap. / No, she isn't taking a nap.",
                    "Q || Is your sister listening to music right now? || Yes, she is listening to music. / No, she isn't listening to music.",
                    "Q || Is Messi flying right now? || Yes, he is flying. / No, he isn't flying.",
                    "Q || Is your brother riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
                    "Q || Is your dad taking a nap right now? || Yes, he is taking a nap. / No, he isn't taking a nap.",
                    "Q || What is your sister doing at home? || She is listening to music.",
                    "Q || What is Messi doing right now? || He is flying in a plane.",
                    "F || She is ____. || flying || fly / flies",
                    "F || He is ____ a nap. || taking || take / takes",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano está tomando una siesta. || My brother is taking a nap."
                  ],
                  "mistakes": [
                    "M || She is [listen] to music. || listens / listening* / listen || She is listening to music.",
                    "M || He is [fly]. || flying* / fly / flies || He is flying."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Aliens on a mission — Present progressive (3rd person); Wh-questions (What...?) — Vocabulary: Fly, Ride a Bike, Take a Nap, Listen to Music, Meet",
                  "lines": [
                    "Q || What is your mom doing after lunch? || She is taking a nap.",
                    "Q || What is your sister doing at home? || She is listening to music.",
                    "Q || What is your cousin doing at the park? || He is meeting a friend.",
                    "Q || What is your brother doing right now? || He is flying in a plane.",
                    "Q || What is your brother doing in the park? || He is riding a bike.",
                    "Q || Where is your dad taking a nap? || He is taking a nap on the sofa.",
                    "Q || What is your brother doing at home? || He is listening to music.",
                    "Q || What is your best friend doing at the park? || He is meeting a friend.",
                    "F || He is ____ a friend. || meeting || meet / meets",
                    "F || She is ____. || flying || fly / flies",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano está tomando una siesta. || My brother is taking a nap."
                  ],
                  "mistakes": [
                    "M || He is [ride] a bike. || riding* / ride / rides || He is riding a bike.",
                    "M || She is [take] a nap on the sofa. || take / takes / taking* || She is taking a nap on the sofa."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Aliens on a mission — Present progressive (3rd person); Wh-questions (Where...?) — Vocabulary: Fly, Ride a Bike, Take a Nap, Listen to Music, Meet",
                  "lines": [
                    "Q || Where is your sister listening to music? || She is listening to music at home.",
                    "Q || Where is your cousin meeting a friend? || He is meeting a friend at the park.",
                    "Q || Where is your brother flying? || He is flying to Colombia.",
                    "Q || Where is your brother riding a bike? || He is riding a bike in the park.",
                    "Q || What is your dad doing after lunch? || He is taking a nap.",
                    "Q || Where is your brother listening to music? || He is listening to music at home.",
                    "Q || What is your best friend doing at the park? || He is meeting a friend.",
                    "Q || What is your dad doing right now? || He is flying in a plane.",
                    "F || She is ____ a bike in the park. || riding || ride / rides",
                    "F || He is ____ a nap. || taking || take / takes",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermana está escuchando música. || My sister is listening to music."
                  ],
                  "mistakes": [
                    "M || She is [listen] to music in her bedroom. || listen / listens / listening* || She is listening to music in her bedroom.",
                    "M || He is [meet] a friend. || meets / meeting* / meet || He is meeting a friend."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Aliens on a mission — Present progressive (3rd person); Yes/No questions Wh-questions (What/Where...?) — Vocabulary: Fly, Ride a Bike, Take a Nap, Listen to Music, Meet",
                  "lines": [
                    "Q || Where is your cousin meeting a friend? || He is meeting a friend at the park.",
                    "Q || Where is your brother flying? || He is flying to Colombia.",
                    "Q || Where is your brother riding a bike? || He is riding a bike in the park.",
                    "Q || Where is your dad taking a nap? || He is taking a nap on the sofa.",
                    "Q || What is your brother doing at home? || He is listening to music.",
                    "Q || Where is your best friend meeting a friend? || He is meeting a friend at the park.",
                    "Q || What is your dad doing right now? || He is flying in a plane.",
                    "Q || Is your cousin riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
                    "F || He is ____ to music. || listening || listen / listens",
                    "F || She is ____ a friend in the park. || meeting || meet / meets",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || El extraterrestre está volando. || The alien is flying."
                  ],
                  "mistakes": [
                    "M || He is [fly]. || flies / flying* / fly || He is flying.",
                    "M || She is [ride] a bike. || riding* / ride / rides || She is riding a bike."
                  ]
                }
              ]
            },
            {
              "week": 4,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Activities at the park — Present progressive (3rd person); Positive sentences — Vocabulary: Jog, Swing, Take Pictures",
                  "lines": [
                    "Q || Two children are running slowly in the park. What are they doing? || They are jogging.",
                    "Q || Two children are moving back and forth on swings. What are they doing? || They are swinging.",
                    "Q || Two children have a camera at the park. What are they doing? || They are taking pictures.",
                    "Q || Two children are running slowly on a path. What are they doing? || They are jogging.",
                    "Q || Two children are on swings at the playground. What are they doing? || They are swinging.",
                    "Q || Two children are in the park. Where are they taking pictures? || They are taking pictures in the park.",
                    "Q || Two children are running slowly near a lake. What are they doing? || They are jogging.",
                    "Q || Two children are moving back and forth on playground seats. What are they doing? || They are swinging.",
                    "F || They are ____. || jogging || jog / jogs",
                    "F || They are ____ at home. || swinging || swing / swings",
                    "T || Ellos están trotando. || They are jogging.",
                    "T || Ellos están columpiándose. || They are swinging.",
                    "T || Ellos están tomando fotos. || They are taking pictures.",
                    "T || Ellos están trotando ahora. || They are jogging right now.",
                    "T || Mis amigos están tomando fotos. || My friends are taking pictures.",
                    "T || Mis amigos están trotando. || My friends are jogging."
                  ],
                  "mistakes": [
                    "M || They are [take] pictures. || take / takes / taking* || They are taking pictures.",
                    "M || They are [take] pictures in the park. || takes / taking* / take || They are taking pictures in the park."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Activities at the park — Present progressive (3rd person); Yes/No questions (Short answers) — Vocabulary: Jog, Swing, Take Pictures, Walk the Dog",
                  "lines": [
                    "Q || Two children are moving back and forth on swings. Are they swinging? || Yes, they are swinging.",
                    "Q || Two children are playing. They have no camera or phone. Are they taking pictures? || No, they aren't taking pictures.",
                    "Q || Two children are outside with a dog on a leash. Are they walking the dog? || Yes, they are walking the dog.",
                    "Q || Two children are sitting on a bench. Are they jogging? || No, they aren't jogging.",
                    "Q || Two children are on swings at the playground. Are they swinging right now? || Yes, they are swinging.",
                    "Q || Two children are playing. They have no camera or phone. Are they taking pictures right now? || No, they aren't taking pictures.",
                    "Q || Two children are on a path with a dog on a leash. What are they doing? || They are walking the dog.",
                    "Q || Two children are running slowly in the park. What are they doing? || They are jogging.",
                    "F || They are ____ the dog. || walking || walk / walks",
                    "F || They are ____. || jogging || jog / jogs",
                    "T || Ellos están trotando. || They are jogging.",
                    "T || Ellos están columpiándose. || They are swinging.",
                    "T || Ellos están tomando fotos. || They are taking pictures.",
                    "T || Ellos están paseando al perro. || They are walking the dog.",
                    "T || Mis amigos están tomando fotos. || My friends are taking pictures.",
                    "T || Mis amigos están columpiándose. || My friends are swinging."
                  ],
                  "mistakes": [
                    "M || They are [take] pictures. || takes / taking* / take || They are taking pictures.",
                    "M || They are [swing]. || swinging* / swing / swings || They are swinging."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Activities at the park — Present progressive (3rd person); Wh-questions (What/Where...?) — Vocabulary: Jog, Swing, Take Pictures, Walk the Dog, Climb a Tree",
                  "lines": [
                    "Q || Two children are in the park. Where are they taking pictures? || They are taking pictures in the park.",
                    "Q || Two children are in the park. Where are they walking the dog? || They are walking the dog in the park.",
                    "Q || Two children are in the garden. Where are they climbing a tree? || They are climbing a tree in the garden.",
                    "Q || Two children are in the park. Where are they jogging? || They are jogging in the park.",
                    "Q || Two children are moving back and forth on swings. What are they doing? || They are swinging.",
                    "Q || Two children are at the zoo. Where are they taking pictures? || They are taking pictures at the zoo.",
                    "Q || Two children are outside with a dog on a leash. What are they doing? || They are walking the dog.",
                    "Q || Two children are going up a tree. What are they doing? || They are climbing a tree.",
                    "F || They are ____ a tree in the garden. || climbing || climb / climbs",
                    "F || They are ____ in the park. || jogging || jog / jogs",
                    "T || Ellos están trotando. || They are jogging.",
                    "T || Ellos están columpiándose. || They are swinging.",
                    "T || Ellos están tomando fotos. || They are taking pictures.",
                    "T || Ellos están paseando al perro. || They are walking the dog.",
                    "T || Mis amigos están tomando fotos. || My friends are taking pictures.",
                    "T || Mis amigos están paseando al perro. || My friends are walking the dog."
                  ],
                  "mistakes": [
                    "M || They are [swing]. || swinging* / swing / swings || They are swinging.",
                    "M || They are [walk] the dog. || walk / walks / walking* || They are walking the dog."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: sit; pants; a dress; fly; jog; girl; paint a picture; jump; soup; clean the room; talk; How are you today? I am great!; read a book",
                  "lines": [
                    "Q || What are you doing at a desk? || I am sitting.",
                    "T || Yo estoy sentado. || I am sitting.",
                    "Q || Complete: I ____ great! || I am great!",
                    "T || Estoy usando un vestido. || I am wearing a dress.",
                    "Q || What is your uncle doing right now? || He is flying in a plane.",
                    "T || Él está volando. || He is flying.",
                    "Q || Two children are running slowly in the park. What are they doing? || They are jogging.",
                    "T || Ellos están trotando. || They are jogging.",
                    "F || He is ____. || flying || fly / flies",
                    "F || They are ____. || jogging || jog / jogs",
                    "Q || What does a rabbit do in the morning? || It jumps.",
                    "Q || What is your grandpa's favorite food? || My grandpa's favorite food is soup.",
                    "Q || When does your sister clean the room? || She cleans the room on Saturday mornings.",
                    "T || El loro habla. || The parrot talks.",
                    "H || 👖 || Guess the hidden clothing item! || Pants",
                    "H || 👧 || Guess the hidden person! || Girl"
                  ],
                  "mistakes": [
                    "M || She [am] a girl. || am / are / is* || She is a girl.",
                    "M || He [paint] a picture. || painting / paints* / paint || He paints a picture."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: take notes; pay attention; a T-shirt; socks; take a nap; ride a bike; take pictures; swing; dad; dance; walk; coffee; paint a picture; run; Numbers from 1-12; Wake up, take a shower, eat, run, play, drink, Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || Are you taking notes? || Yes, I am. / No, I am not.",
                    "T || Yo estoy prestando atención. || I am paying attention.",
                    "Q || Are you wearing a T-shirt? || Yes, I am wearing a T-shirt. / No, I am not wearing a T-shirt.",
                    "T || Estoy usando calcetines. || I am wearing socks.",
                    "Q || Is your sister taking a nap right now? || Yes, she is taking a nap. / No, she isn't taking a nap.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "Q || Two children have a camera at the park. Are they taking pictures? || Yes, they are taking pictures.",
                    "T || Ellos están columpiándose. || They are swinging.",
                    "F || He ____ my dad. || is || am / are",
                    "F || She ____. || dances || dance / dancing",
                    "Q || What does your dog do after lunch? || It walks.",
                    "Q || What is your sister's favorite drink? || My sister's favorite drink is coffee.",
                    "Q || What does your teacher do on Sundays? || He paints a picture.",
                    "T || El perro corre. || The dog runs.",
                    "H || 💃 || Guess the action! || Dance",
                    "T || Yo estoy prestando atención en clase. || I am paying attention in class."
                  ],
                  "mistakes": [
                    "M || It [walk]. || walking / walks* / walk || It walks.",
                    "M || My sister's favorite [drinks] is coffee. || drink* / drinks / drinking || My sister's favorite drink is coffee."
                  ]
                }
              ]
            },
            {
              "week": 5,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Activities at the beach — Present progressive (3rd person); Positive sentences — Vocabulary: Make sandcastles, swim, have a picnic",
                  "lines": [
                    "T || Los niños están haciendo un castillo de arena en la playa. || The children are making a sandcastle on the beach.",
                    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
                    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
                    "Q || Two children are using sand to build a castle. What are they doing? || They are making a sandcastle.",
                    "Q || Two children are moving their arms and legs through the water. What are they doing? || They are swimming.",
                    "Q || Two children are on the beach. Where are they having a picnic? || They are having a picnic on the beach.",
                    "Q || Two children have buckets of sand and a half-built castle. What are they doing? || They are making a sandcastle.",
                    "Q || Two children are crossing a pool without a boat. What are they doing? || They are swimming.",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "F || They are ____. || swimming || swim / swims",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están haciendo un castillo de arena ahora. || They are making a sandcastle right now.",
                    "H || 🏊 || Guess the action! || Swim",
                    "T || Mis amigos están haciendo un castillo de arena. || My friends are making a sandcastle."
                  ],
                  "mistakes": [
                    "M || They are [have] a picnic. || have / has / having* || They are having a picnic.",
                    "M || They are [have] a picnic on the beach. || has / having* / have || They are having a picnic on the beach."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Activities at the beach — Present progressive (3rd person); Yes/No questions (Long answers) — Vocabulary: Make sandcastles, swim, have a picnic, surf",
                  "lines": [
                    "Q || Two children are moving through the water in a pool. Are they swimming? || Yes, they are swimming.",
                    "Q || Two children are swimming in a pool. Are they having a picnic? || No, they aren't having a picnic.",
                    "Q || Two children are riding waves on surfboards. Are they surfing? || Yes, they are surfing.",
                    "Q || Two children are swimming in a pool. Are they making a sandcastle? || No, they aren't making a sandcastle.",
                    "Q || Two children are moving their arms and legs through the water. Are they swimming right now? || Yes, they are swimming.",
                    "Q || Two children are swimming in a pool. Are they having a picnic right now? || No, they aren't having a picnic.",
                    "Q || Two children are standing on surfboards in the waves. What are they doing? || They are surfing.",
                    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
                    "F || They are ____. || surfing || surf / surfs",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Guess the action! || Swim",
                    "T || Mis amigos están haciendo un pícnic. || My friends are having a picnic."
                  ],
                  "mistakes": [
                    "M || They are [have] a picnic. || has / having* / have || They are having a picnic.",
                    "M || They are [swim]. || swimming* / swim / swims || They are swimming."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Activities at the beach — Present progressive (3rd person); Wh-questions (What...?) — Vocabulary: Make sandcastles, swim, have a picnic, surf, relax",
                  "lines": [
                    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
                    "Q || Two children are riding waves on surfboards. What are they doing? || They are surfing.",
                    "Q || Two children are resting under a beach umbrella. What are they doing? || They are relaxing.",
                    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
                    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
                    "Q || Two children are on the beach. Where are they having a picnic? || They are having a picnic on the beach.",
                    "Q || Two children are standing on surfboards in the waves. What are they doing? || They are surfing.",
                    "Q || Two children are resting on beach chairs. What are they doing? || They are relaxing.",
                    "F || They are ____. || relaxing || relax / relaxes",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Guess the action! || Swim",
                    "T || Mis amigos están haciendo un pícnic. || My friends are having a picnic."
                  ],
                  "mistakes": [
                    "M || They are [swim]. || swimming* / swim / swims || They are swimming.",
                    "M || They are [have] a picnic on the beach. || have / has / having* || They are having a picnic on the beach."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Activities at the beach — Present progressive (3rd person); Wh-questions (Who... with?) — Vocabulary: Make sandcastles, swim, have a picnic, surf, relax",
                  "lines": [
                    "Q || Two children are at the beach with their family. Who are they surfing with? || They are surfing with their family.",
                    "Q || Two children are at the beach with their friends. Who are they relaxing with? || They are relaxing with their friends.",
                    "Q || Two children are at the beach with their cousin. Who are they making a sandcastle with? || They are making a sandcastle with their cousin.",
                    "Q || Two children are at the beach with their brother. Who are they swimming with? || They are swimming with their brother.",
                    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
                    "Q || Two children are in the ocean. Where are they surfing? || They are surfing in the ocean.",
                    "Q || Two children are resting under a beach umbrella. What are they doing? || They are relaxing.",
                    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
                    "F || They are ____ with their brother. || swimming || swim / swims",
                    "F || They are ____ a picnic. || having || have / has",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Guess the action! || Swim",
                    "H || 🏄 || Guess the action! || Surf"
                  ],
                  "mistakes": [
                    "M || They are [surf] in the ocean. || surf / surfs / surfing* || They are surfing in the ocean.",
                    "M || They are [relax]. || relaxes / relaxing* / relax || They are relaxing."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Present progressive (3rd person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Who... with?) — Vocabulary: have a picnic; make a sandcastle; swim; surf; relax",
                  "lines": [
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "Q || Two children are swimming in a pool. Are they making a sandcastle? || No, they aren't making a sandcastle.",
                    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
                    "Q || Two children are at the beach with their brother. Who are they swimming with? || They are swimming with their brother.",
                    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
                    "Q || Two children are standing on dry sand. Are they swimming right now? || No, they aren't swimming.",
                    "Q || Two children are moving their arms and legs through the water. What are they doing? || They are swimming.",
                    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "F || They are ____ with their brother. || swimming || swim / swims",
                    "T || Ellos están surfeando. || They are surfing.",
                    "Q || Two children are resting under a beach umbrella. What are they doing? || They are relaxing.",
                    "Q || Two children are crossing a pool without a boat. What are they doing? || They are swimming.",
                    "Q || Two children are using sand to build a castle. What are they doing? || They are making a sandcastle.",
                    "T || Mis amigos están haciendo un pícnic. || My friends are having a picnic.",
                    "T || Mis amigos están haciendo un castillo de arena. || My friends are making a sandcastle."
                  ],
                  "mistakes": [
                    "M || They are [swim]. || swims / swimming* / swim || They are swimming.",
                    "M || They are [surf]. || surfing* / surf / surfs || They are surfing."
                  ]
                }
              ]
            },
            {
              "week": 6,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Home chores — Simple present (3rd person); Positive sentences Yes/No questions (Long answers) — Vocabulary: Sweep, Mop, Wash Dishes",
                  "lines": [
                    "Q || Does your teacher sweep the floor? || Yes, he sweeps the floor. / No, he doesn't sweep the floor.",
                    "Q || Does your mom mop the floor? || Yes, she mops the floor. / No, she doesn't mop the floor.",
                    "Q || Does your brother wash the dishes? || Yes, he washes the dishes. / No, he doesn't wash the dishes.",
                    "Q || Does your dad sweep the floor on weekends? || Yes, he sweeps the floor. / No, he doesn't sweep the floor.",
                    "Q || Does your sister mop the floor every day? || Yes, she mops the floor. / No, she doesn't mop the floor.",
                    "Q || Does your best friend wash the dishes on weekends? || Yes, she washes the dishes. / No, she doesn't wash the dishes.",
                    "Q || What does your cousin do in the kitchen? || She sweeps the floor.",
                    "Q || What does your uncle do in the kitchen? || He mops the floor.",
                    "F || She ____ the floor. || sweeps || sweep / sweeping",
                    "F || He ____ the floor. || mops || mop / mopping",
                    "T || Él barre el piso. || He sweeps the floor.",
                    "T || Él trapea el piso. || He mops the floor.",
                    "T || Ella lava los platos. || She washes the dishes.",
                    "T || Ella barre el piso. || She sweeps the floor.",
                    "T || Mi hermano barre el piso. || My brother sweeps the floor.",
                    "T || Mi hermano trapea el piso. || My brother mops the floor."
                  ],
                  "mistakes": [
                    "M || She [wash] the dishes. || wash / washing / washes* || She washes the dishes.",
                    "M || He [sweep] the floor. || sweeping / sweeps* / sweep || He sweeps the floor."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Home chores — Simple present (3rd person); Wh-questions (What/Where...?) — Vocabulary: Sweep, Mop, Wash Dishes, Make the Bed",
                  "lines": [
                    "Q || Where does your mom mop the floor? || She mops the floor in the kitchen.",
                    "Q || Where does your brother wash the dishes? || He washes the dishes in the kitchen.",
                    "Q || Where does your dad make his bed? || He makes his bed in his bedroom.",
                    "Q || Where does your sister sweep the floor? || She sweeps the floor in the kitchen.",
                    "Q || What does your best friend do after lunch? || She mops the floor.",
                    "Q || Where does your sister wash the dishes? || She washes the dishes in the kitchen.",
                    "Q || When does your brother make his bed? || He makes his bed in the morning.",
                    "Q || What does your teacher do after breakfast? || He sweeps the floor.",
                    "F || He ____ the dishes in the kitchen. || washes || wash / washing",
                    "F || He ____ his bed in his bedroom. || makes || make / making",
                    "T || Él barre el piso. || He sweeps the floor.",
                    "T || Ella trapea el piso. || She mops the floor.",
                    "T || Ella lava los platos. || She washes the dishes.",
                    "T || Ella hace su cama. || She makes her bed.",
                    "T || Mi hermana trapea el piso. || My sister mops the floor.",
                    "T || Mi hermana lava los platos. || My sister washes the dishes."
                  ],
                  "mistakes": [
                    "M || She [sweep] the floor in the kitchen. || sweeping / sweeps* / sweep || She sweeps the floor in the kitchen.",
                    "M || She [mop] the floor. || mops* / mop / mopping || She mops the floor."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Home chores — Simple present (3rd person); Wh-questions (Who... with?) — Vocabulary: Sweep, Mop, Wash Dishes, Make the Bed, Dust",
                  "lines": [
                    "Q || Who does your brother wash the dishes with? || He washes the dishes with his family.",
                    "Q || Who does your dad clean the house with? || He cleans the house with my mom.",
                    "Q || Who does your sister dust the shelf with? || She dusts the shelf with her cousin.",
                    "Q || Who does your best friend sweep the floor with? || She sweeps the floor with her brother.",
                    "Q || What does your aunt do after a spill? || She mops the floor.",
                    "Q || Where does your brother wash the dishes? || He washes the dishes in the kitchen.",
                    "Q || When does your teacher make his bed? || He makes his bed in the morning.",
                    "Q || What does your mom do on Saturdays? || She dusts the shelf.",
                    "F || She ____ the shelf with her cousin. || dusts || dust / dusting",
                    "F || She ____ the floor with her brother. || sweeps || sweep / sweeping",
                    "T || Ella barre el piso. || She sweeps the floor.",
                    "T || Ella trapea el piso. || She mops the floor.",
                    "T || Ella lava los platos. || She washes the dishes.",
                    "T || Él hace su cama. || He makes his bed.",
                    "T || Mi hermana lava los platos. || My sister washes the dishes.",
                    "T || Mi hermano hace su cama. || My brother makes his bed."
                  ],
                  "mistakes": [
                    "M || She [mop] the floor. || mops* / mop / mopping || She mops the floor.",
                    "M || He [wash] the dishes in the kitchen. || wash / washing / washes* || He washes the dishes in the kitchen."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Home chores — Simple present (3rd person); Wh-questions (Why/What time...?) — Vocabulary: Sweep, Mop, Wash Dishes, Make the Bed, Dust",
                  "lines": [
                    "Q || Why does your dad make his bed? || Because he wants a tidy room.",
                    "Q || Why does your sister dust the shelf? || Because the shelf is dusty.",
                    "Q || Why does your best friend sweep the floor? || Because the floor is dirty.",
                    "Q || Why does your sister mop the floor? || Because the floor is dirty.",
                    "Q || What does your cousin do after dinner? || He washes the dishes.",
                    "Q || Where does your teacher make his bed? || He makes his bed in his bedroom.",
                    "Q || When does your mom dust the shelf? || She dusts the shelf on Saturdays.",
                    "Q || What does your brother do after breakfast? || He sweeps the floor.",
                    "F || He ____ the floor. || sweeps || sweep / sweeping",
                    "F || He ____ the shelf. || dusts || dust / dusting",
                    "T || Ella barre el piso. || She sweeps the floor.",
                    "T || Ella trapea el piso. || She mops the floor.",
                    "T || Él lava los platos. || He washes the dishes.",
                    "T || Él hace su cama. || He makes his bed.",
                    "T || Mi hermano hace su cama. || My brother makes his bed.",
                    "T || Mi hermana barre el piso. || My sister sweeps the floor."
                  ],
                  "mistakes": [
                    "M || She [sweep] the floor. || sweep / sweeping / sweeps* || She sweeps the floor.",
                    "M || She [mop] the floor. || mopping / mops* / mop || She mops the floor."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple present (3rd person); Positive sentences Yes/No questions (Long answers); Wh-questions (What/Where...?); Wh-questions (Who... with?); Wh-questions (Why/What time...?) — Vocabulary: wash the dishes; sweep the floor; mop the floor; make my bed; dust the shelf",
                  "lines": [
                    "T || Ella lava los platos. || She washes the dishes.",
                    "Q || Where does your sister sweep the floor? || She sweeps the floor in the kitchen.",
                    "Q || Who does your best friend sweep the floor with? || She sweeps the floor with her brother.",
                    "T || Él lava los platos. || He washes the dishes.",
                    "Q || Does your sister mop the floor every day? || Yes, she mops the floor. / No, she doesn't mop the floor.",
                    "Q || What does your best friend do after lunch? || She mops the floor.",
                    "Q || What does your aunt do after a spill? || She mops the floor.",
                    "Q || What does your cousin do after dinner? || He washes the dishes.",
                    "F || She ____ the floor. || mops || mop / mopping",
                    "F || He ____ his bed in the morning. || makes || make / making",
                    "Q || When does your teacher make his bed? || He makes his bed in the morning.",
                    "Q || When does your mom dust the shelf? || She dusts the shelf on Saturdays.",
                    "Q || What does your cousin do in the kitchen? || He mops the floor.",
                    "Q || What does your teacher do after breakfast? || He sweeps the floor.",
                    "T || Mi hermana lava los platos. || My sister washes the dishes.",
                    "T || Mi hermana barre el piso. || My sister sweeps the floor."
                  ],
                  "mistakes": [
                    "M || She [dust] the shelf on Saturdays. || dusting / dusts* / dust || She dusts the shelf on Saturdays.",
                    "M || He [mop] the floor. || mops* / mop / mopping || He mops the floor."
                  ]
                }
              ]
            },
            {
              "week": 7,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "How many...? & How much...? — N/A; How many... do you see? Positive sentences — Vocabulary: Numbers 1 - 10 (Review)",
                  "lines": [
                    "Q || Say the number after six. || Seven.",
                    "Q || Say the number before ten. || Nine.",
                    "S || star:4 || How many stars do you see? || I see four stars.",
                    "S || star:5 || How many stars do you see? || I see five stars.",
                    "S || star:6 || How many stars do you see? || I see six stars.",
                    "S || star:7 || How many stars do you see? || I see seven stars.",
                    "S || star:8 || How many stars do you see? || I see eight stars.",
                    "S || star:9 || How many stars do you see? || I see nine stars.",
                    "F || I ____ two stars. || see || sees / seeing",
                    "F || I ____ three stars. || see || sees / seeing",
                    "T || Veo dos estrellas. || I see two stars.",
                    "T || Veo cuatro estrellas. || I see four stars.",
                    "T || Veo siete estrellas. || I see seven stars.",
                    "T || Veo diez estrellas. || I see ten stars.",
                    "S || star:2 || How many stars do you see? || I see two stars.",
                    "S || star:3 || How many stars do you see? || I see three stars."
                  ],
                  "mistakes": [
                    "M || I [sees] four stars. || sees / seeing / see* || I see four stars.",
                    "M || I [sees] five stars. || seeing / see* / sees || I see five stars."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "How many...? & How much...? — N/A; Do you see...? Yes/No questions (Long answers) — Vocabulary: Numbers 11 - 20",
                  "lines": [
                    "Q || Say the number after fourteen. || Fifteen.",
                    "Q || Say the number before twenty. || Nineteen.",
                    "S || star:13 || Do you see thirteen stars? || Yes, I see thirteen stars.",
                    "S || star:14 || Do you see fourteen stars? || Yes, I see fourteen stars.",
                    "S || star:15 || Do you see fifteen stars? || Yes, I see fifteen stars.",
                    "S || star:16 || Do you see sixteen stars? || Yes, I see sixteen stars.",
                    "S || star:17 || Do you see seventeen stars? || Yes, I see seventeen stars.",
                    "S || star:18 || Do you see eighteen stars? || Yes, I see eighteen stars.",
                    "F || I ____ eleven stars. || see || sees / seeing",
                    "F || I ____ fourteen stars. || see || sees / seeing",
                    "T || Veo once estrellas. || I see eleven stars.",
                    "T || Veo catorce estrellas. || I see fourteen stars.",
                    "T || Veo diecisiete estrellas. || I see seventeen stars.",
                    "T || Veo veinte estrellas. || I see twenty stars.",
                    "S || star:11 || Do you see eleven stars? || Yes, I see eleven stars.",
                    "S || star:12 || Do you see twelve stars? || Yes, I see twelve stars."
                  ],
                  "mistakes": [
                    "M || I [sees] seventeen stars. || seeing / see* / sees || I see seventeen stars.",
                    "M || I [sees] twenty stars. || see* / sees / seeing || I see twenty stars."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "How many...? & How much...? — N/A; How much is it? Positive sentences — Vocabulary: Numbers 10 by 10 up to 100",
                  "lines": [
                    "Q || Price tag: book = $10. How much is the book? || The book is ten dollars.",
                    "Q || Price tag: toy car = $20. How much is the toy car? || The toy car is twenty dollars.",
                    "Q || Price tag: backpack = $30. How much is the backpack? || The backpack is thirty dollars.",
                    "Q || Price tag: ball = $40. How much is the ball? || The ball is forty dollars.",
                    "Q || Price tag: T-shirt = $50. How much is the T-shirt? || The T-shirt is fifty dollars.",
                    "Q || Price tag: book = $60. How much is the book? || The book is sixty dollars.",
                    "Q || Price tag: toy car = $70. How much is the toy car? || The toy car is seventy dollars.",
                    "Q || Price tag: backpack = $80. How much is the backpack? || The backpack is eighty dollars.",
                    "F || The backpack ____ thirty dollars. || is || am / are",
                    "F || The ball ____ forty dollars. || is || am / are",
                    "T || ¿Cuánto cuesta el libro? || How much is the book?",
                    "T || La pelota cuesta veinte dólares. || The ball is twenty dollars.",
                    "T || ¿Cuántas estrellas ves? || How many stars do you see?",
                    "T || Veo diez estrellas. || I see ten stars.",
                    "T || El libro cuesta treinta dólares. || The book is thirty dollars.",
                    "T || La pelota cuesta cuarenta dólares. || The ball is forty dollars."
                  ],
                  "mistakes": [
                    "M || The T-shirt [am] fifty dollars. || is* / am / are || The T-shirt is fifty dollars.",
                    "M || The book [am] sixty dollars. || am / are / is* || The book is sixty dollars."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "How many...? & How much...? — N/A; Is/Are... $__ ? Yes/No questions (Short answers) — Vocabulary: Numbers Review",
                  "lines": [
                    "Q || Price tag: book = $10. Is the book ten dollars? || Yes, it is.",
                    "Q || Price tag: toy car = $20. Is the toy car thirty dollars? || No, it isn't.",
                    "Q || Price tag: backpack = $30. Is the backpack thirty dollars? || Yes, it is.",
                    "Q || Price tag: ball = $40. Is the ball fifty dollars? || No, it isn't.",
                    "Q || Price tag: T-shirt = $50. Is the T-shirt fifty dollars? || Yes, it is.",
                    "Q || Price tag: book = $60. Is the book seventy dollars? || No, it isn't.",
                    "Q || Price tag: toy car = $70. Is the toy car seventy dollars? || Yes, it is.",
                    "Q || Price tag: backpack = $80. Is the backpack ninety dollars? || No, it isn't.",
                    "F || The ball ____ twenty dollars. || is || am / are",
                    "F || I ____ ten stars. || see || sees / seeing",
                    "T || ¿Cuánto cuesta el libro? || How much is the book?",
                    "T || La pelota cuesta veinte dólares. || The ball is twenty dollars.",
                    "T || ¿Cuántas estrellas ves? || How many stars do you see?",
                    "T || Veo diez estrellas. || I see ten stars.",
                    "T || El libro cuesta treinta dólares. || The book is thirty dollars.",
                    "T || La pelota cuesta cuarenta dólares. || The ball is forty dollars."
                  ],
                  "mistakes": [
                    "M || I [is] nine years old. || is / are / am* || I am nine years old.",
                    "M || My name [are] Mia. || am / is* / are || My name is Mia."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "How many...? & How much...? — N/A; How much...? vs How many...? — Vocabulary: Numbers Review",
                  "lines": [
                    "Q || Choose: How many / How much is the toy? || How much is the toy?",
                    "Q || Price tag: toy car = $20. How much is the toy car? || The toy car is twenty dollars.",
                    "Q || Choose: How many / How much stars do you see? || How many stars do you see?",
                    "Q || Price tag: ball = $40. How much is the ball? || The ball is forty dollars.",
                    "S || star:10 || How many stars do you see? || I see ten stars.",
                    "Q || Price tag: book = $60. How much is the book? || The book is sixty dollars.",
                    "S || star:2 || How many stars do you see? || I see two stars.",
                    "Q || Price tag: backpack = $80. How much is the backpack? || The backpack is eighty dollars.",
                    "F || I ____ ten stars. || see || sees / seeing",
                    "F || The book ____ sixty dollars. || is || am / are",
                    "T || ¿Cuánto cuesta el libro? || How much is the book?",
                    "T || La pelota cuesta veinte dólares. || The ball is twenty dollars.",
                    "T || ¿Cuántas estrellas ves? || How many stars do you see?",
                    "T || Veo diez estrellas. || I see ten stars.",
                    "S || star:6 || How many stars do you see? || I see six stars.",
                    "S || star:8 || How many stars do you see? || I see eight stars."
                  ],
                  "mistakes": [
                    "M || I [sees] two stars. || seeing / see* / sees || I see two stars.",
                    "M || The backpack [am] eighty dollars. || is* / am / are || The backpack is eighty dollars."
                  ]
                }
              ]
            },
            {
              "week": 8,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Describing people — Simple present (3rd person); Positive sentences — Vocabulary: tall, short, chubby, skinny",
                  "lines": [
                    "T || Mi papá es alto. || My dad is tall.",
                    "T || Mi hermana es bajita. || My sister is short.",
                    "T || Shrek es gordito. || Shrek is chubby.",
                    "T || Woody es delgado. || Woody is skinny.",
                    "T || Mi hermano es alto. || My brother is tall.",
                    "T || Mi abuelo es bajito. || My grandpa is short.",
                    "T || Winnie the Pooh es gordito. || Winnie the Pooh is chubby.",
                    "T || Mi tío es delgado. || My uncle is skinny.",
                    "F || Ben ____ tall. || is || am / are",
                    "F || Leo ____ short. || is || am / are",
                    "T || Max es gordito. || Max is chubby.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "T || Sam es alto. || Sam is tall.",
                    "T || Alex es bajo. || Alex is short.",
                    "T || Mi hermano es gordito. || My brother is chubby.",
                    "T || Mi hermano es delgado. || My brother is skinny."
                  ],
                  "mistakes": [
                    "M || Max [am] chubby. || am / are / is* || Max is chubby.",
                    "M || Tom [am] skinny. || are / is* / am || Tom is skinny."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Describing people — Simple present (3rd person); Yes/No questions (Short answers) — Vocabulary: tall, short, chubby, skinny, strong, bald",
                  "lines": [
                    "Q || Story: Ben is tall. Is Ben tall? || Yes, he is.",
                    "Q || Leo is short. He is not chubby. Is Leo chubby? || No, he isn't.",
                    "Q || Story: Max is chubby. Is Max chubby? || Yes, he is.",
                    "Q || Tom is skinny. He is not strong. Is Tom strong? || No, he isn't.",
                    "Q || Story: Sam is strong. Is Sam strong? || Yes, he is.",
                    "Q || Alex is bald. He is not tall. Is Alex tall? || No, he isn't.",
                    "Q || Story: Dan is tall. Is Dan tall? || Yes, he is.",
                    "Q || Rob is short. He is not chubby. Is Rob chubby? || No, he isn't.",
                    "F || Leo ____ short. || is || am / are",
                    "F || Max ____ chubby. || is || am / are",
                    "T || Max es gordito. || Max is chubby.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "T || Sam es fuerte. || Sam is strong.",
                    "T || Alex es calvo. || Alex is bald.",
                    "H || 💪 || Guess the hidden adjective! || Strong",
                    "H || 👨‍🦲 || Guess the hidden adjective! || Bald"
                  ],
                  "mistakes": [
                    "M || Tom [am] skinny. || are / is* / am || Tom is skinny.",
                    "M || Sam [am] strong. || is* / am / are || Sam is strong."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Describing people — Simple present (3rd person); Wh-questions (Who is...?) — Vocabulary: tall, short, chubby, skinny, strong, bald",
                  "lines": [
                    "Q || Ben is tall. Leo is short. Who is tall? || Ben is tall.",
                    "Q || Leo is short. Max is chubby. Who is short? || Leo is short.",
                    "Q || Max is chubby. Tom is skinny. Who is chubby? || Max is chubby.",
                    "Q || Tom is skinny. Sam is strong. Who is skinny? || Tom is skinny.",
                    "Q || Sam is strong. Alex is bald. Who is strong? || Sam is strong.",
                    "Q || Alex is bald. Dan is tall. Who is bald? || Alex is bald.",
                    "Q || Dan is tall. Rob is short. Who is tall? || Dan is tall.",
                    "Q || Rob is short. Ben is chubby. Who is short? || Rob is short.",
                    "F || Max ____ chubby. || is || am / are",
                    "F || Tom ____ skinny. || is || am / are",
                    "T || Max es gordito. || Max is chubby.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "T || Sam es fuerte. || Sam is strong.",
                    "T || Alex es calvo. || Alex is bald.",
                    "H || 💪 || Guess the hidden adjective! || Strong",
                    "H || 👨‍🦲 || Guess the hidden adjective! || Bald"
                  ],
                  "mistakes": [
                    "M || Sam [am] strong. || is* / am / are || Sam is strong.",
                    "M || Alex [am] bald. || am / are / is* || Alex is bald."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: make a sandcastle; sweep the floor; numbers; how many; numbers; tall; chubby; milk; paint a picture; talk; take a nap; five; Wake up, take a shower, eat, run, play, drink, Sing, paint, dance, read, clean; circle; climb a tree",
                  "lines": [
                    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "Q || Does your teacher sweep the floor? || Yes, he sweeps the floor. / No, he doesn't sweep the floor.",
                    "T || Él barre el piso. || He sweeps the floor.",
                    "S || yellow circle:1, star:2 || Is there a rectangle? || No, there isn't a rectangle.",
                    "T || Veo dos estrellas. || I see two stars.",
                    "T || Mi papá es alto. || My dad is tall.",
                    "T || Max es gordito. || Max is chubby.",
                    "F || Ben ____ tall. || is || am / are",
                    "F || Max ____ chubby. || is || am / are",
                    "Q || Where does a parrot talk? || It talks at home.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "Q || Say this number: 5. || Five.",
                    "Q || What does your best friend do after school? || My best friend plays games.",
                    "S || star:2 || How many stars do you see? || I see two stars.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint"
                  ],
                  "mistakes": [
                    "M || He [paint] a picture. || paint / painting / paints* || He paints a picture.",
                    "M || It [talk] at home. || talking / talks* / talk || It talks at home."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: have a picnic; swim; wash the dishes; mop the floor; numbers; how many; numbers; short; skinny; Good morning, Good afternoon, Good evening, Good night; eat breakfast; oval; swing; alphabet; work; doctor; sit",
                  "lines": [
                    "Q || Two children are eating sandwiches on a blanket at the beach. Are they having a picnic? || Yes, they are having a picnic.",
                    "T || Ellos están nadando. || They are swimming.",
                    "Q || Where does your brother wash the dishes? || He washes the dishes in the kitchen.",
                    "T || Ella trapea el piso. || She mops the floor.",
                    "Q || Do you want to be a doctor? || Yes, I want to be a doctor. / No, I don't want to be a doctor.",
                    "T || Veo catorce estrellas. || I see fourteen stars.",
                    "Q || Leo is short. He is not chubby. Is Leo chubby? || No, he isn't.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "F || Tom ____ skinny. || is || am / are",
                    "F || My name ____ Leo. || is || am / are",
                    "Q || Spell the word \"oval\". || O-V-A-L.",
                    "T || Ellos se están meciendo en los columpios. || They are swinging.",
                    "Q || Spell EVA. || E-V-A.",
                    "T || Ella trabaja. || She works.",
                    "S || star:12 || Do you see twelve stars? || Yes, I see twelve stars.",
                    "S || green oval:3, rectangle:2 || How many ovals are there? || There are three ovals."
                  ],
                  "mistakes": [
                    "M || I [eats] breakfast. || eating / eat* / eats || I eat breakfast.",
                    "M || There [am] three ovals. || are* / am / is || There are three ovals."
                  ]
                }
              ]
            }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Activities in class",
            "words": [
              "Sit",
              "Pay Attention",
              "Take Notes",
              "Learn",
              "Speak"
            ]
          },
          {
            "week": 2,
            "category": "Clothing",
            "words": [
              "Pants",
              "T-Shirt",
              "Shoes",
              "Dress",
              "Shorts",
              "Socks",
              "Sweater"
            ]
          },
          {
            "week": 3,
            "category": "Aliens on a mission",
            "words": [
              "Fly",
              "Ride a Bike",
              "Take a Nap",
              "Listen to Music",
              "Meet"
            ]
          },
          {
            "week": 4,
            "category": "Activities at the park",
            "words": [
              "Jog",
              "Swing",
              "Take Pictures",
              "Walk the Dog",
              "Climb a Tree"
            ]
          },
          {
            "week": 5,
            "category": "Activities at the beach",
            "words": [
              "Make sandcastles",
              "swim",
              "have a picnic",
              "surf",
              "relax"
            ]
          },
          {
            "week": 6,
            "category": "Home chores",
            "words": [
              "Sweep",
              "Mop",
              "Wash Dishes",
              "Make the Bed",
              "Dust"
            ]
          },
          {
            "week": 7,
            "category": "How many...? & How much...?",
            "words": [
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "ten",
              "eleven",
              "twelve",
              "thirteen",
              "fourteen",
              "fifteen",
              "sixteen",
              "seventeen",
              "eighteen",
              "nineteen",
              "twenty",
              "thirty",
              "forty",
              "fifty",
              "sixty",
              "seventy",
              "eighty",
              "ninety",
              "one hundred"
            ]
          },
          {
            "week": 8,
            "category": "Describing people",
            "words": [
              "tall",
              "short",
              "chubby",
              "skinny",
              "strong",
              "bald"
            ]
          }
        ]
      },
      {
        "level": 4,
        "weeks": [
            {
              "week": 1,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Birthday activities — Simple future - going to (1st person); Positive sentences — Vocabulary: Celebrate, Eat Cake, Take Pictures",
                  "lines": [
                    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
                    "Q || What are you going to eat at a birthday party? || I am going to eat cake.",
                    "Q || What are you going to do with a camera? || I am going to take pictures.",
                    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
                    "Q || What are you going to do after lunch? || I am going to eat cake.",
                    "Q || Where are you going to take pictures? || I am going to take pictures in the park.",
                    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday next Saturday.",
                    "Q || What are you going to do at home? || I am going to eat cake.",
                    "F || I am going to ____ my birthday. || celebrate || celebrates / celebrating",
                    "F || I am going to ____ cake. || eat || eats / eating",
                    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Voy a comer pastel. || I am going to eat cake.",
                    "T || Voy a tomar fotos. || I am going to take pictures.",
                    "T || Voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
                    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Voy a celebrar mi cumpleaños el sábado. || I am going to celebrate my birthday on Saturday."
                  ],
                  "mistakes": [
                    "M || I am going to [takes] pictures. || takes / taking / take* || I am going to take pictures.",
                    "M || I am going to [takes] pictures in the park. || taking / take* / takes || I am going to take pictures in the park."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Birthday activities — Simple future - going to (1st person); Yes/No questions (Short answers) — Vocabulary: Celebrate, Eat Cake, Take Pictures, Spend Time with Friends",
                  "lines": [
                    "Q || Are you going to eat cake? || Yes, I am. / No, I am not.",
                    "Q || Are you going to take pictures? || Yes, I am. / No, I am not.",
                    "Q || Are you going to spend time with friends? || Yes, I am. / No, I am not.",
                    "Q || Are you going to celebrate your birthday? || Yes, I am. / No, I am not.",
                    "Q || Are you going to eat cake tomorrow? || Yes, I am. / No, I am not.",
                    "Q || Are you going to take pictures tomorrow? || Yes, I am. / No, I am not.",
                    "Q || What are you going to do on weekends? || I am going to spend time with friends.",
                    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
                    "F || I am going to ____ time with friends. || spend || spends / spending",
                    "F || I am going to ____ my birthday. || celebrate || celebrates / celebrating",
                    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Voy a comer pastel. || I am going to eat cake.",
                    "T || Voy a tomar fotos. || I am going to take pictures.",
                    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Voy a comer pastel mañana. || I am going to eat cake tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [takes] pictures. || taking / take* / takes || I am going to take pictures.",
                    "M || I am going to [eats] cake. || eat* / eats / eating || I am going to eat cake."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Birthday activities — Simple future - going to (1st person); Wh-questions (What...?) — Vocabulary: Celebrate, Eat Cake, Take Pictures, Spend Time with Friends, Open Presents",
                  "lines": [
                    "Q || What are you going to do with a camera? || I am going to take pictures.",
                    "Q || What are you going to do after school? || I am going to spend time with friends.",
                    "Q || What are you going to open at a birthday party? || I am going to open presents.",
                    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
                    "Q || What are you going to eat at a birthday party? || I am going to eat cake.",
                    "Q || Where are you going to take pictures? || I am going to take pictures in the park.",
                    "Q || When are you going to spend time with friends? || I am going to spend time with friends on weekends.",
                    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
                    "F || I am going to ____ presents. || open || opens / opening",
                    "F || I am going to ____ my birthday. || celebrate || celebrates / celebrating",
                    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Voy a comer pastel. || I am going to eat cake.",
                    "T || Voy a tomar fotos. || I am going to take pictures.",
                    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [eats] cake. || eat* / eats / eating || I am going to eat cake.",
                    "M || I am going to [takes] pictures in the park. || takes / taking / take* || I am going to take pictures in the park."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Birthday activities — Simple future - going to (1st person); Wh-questions (Where...?) — Vocabulary: Celebrate, Eat Cake, Take Pictures, Spend Time with Friends, Open Presents",
                  "lines": [
                    "Q || Where are you going to spend time with friends? || I am going to spend time with friends in the park.",
                    "Q || Where are you going to open presents? || I am going to open presents at home.",
                    "Q || Where are you going to celebrate your birthday? || I am going to celebrate my birthday at home.",
                    "Q || Where are you going to eat cake? || I am going to eat cake at home.",
                    "Q || What are you going to do with a camera? || I am going to take pictures.",
                    "Q || Where are you going to spend time with friends next Sunday? || I am going to spend time with friends in the park.",
                    "Q || When are you going to open presents? || I am going to open presents on my birthday.",
                    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
                    "F || I am going to ____ cake at home. || eat || eats / eating",
                    "F || I am going to ____ pictures. || take || takes / taking",
                    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Voy a comer pastel. || I am going to eat cake.",
                    "T || Voy a tomar fotos. || I am going to take pictures.",
                    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [opens] presents on my birthday. || opens / opening / open* || I am going to open presents on my birthday.",
                    "M || I am going to [celebrates] my birthday. || celebrating / celebrate* / celebrates || I am going to celebrate my birthday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple future - going to (1st person); Positive sentences; Yes/No questions (Short answers); Wh-questions (What...?); Wh-questions (Where...?) — Vocabulary: take pictures; celebrate my birthday; eat cake; spend time with friends; open presents",
                  "lines": [
                    "T || Voy a tomar fotos. || I am going to take pictures.",
                    "Q || Are you going to celebrate your birthday? || Yes, I am. / No, I am not.",
                    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
                    "Q || Where are you going to eat cake? || I am going to eat cake at home.",
                    "Q || What are you going to do after lunch? || I am going to eat cake.",
                    "Q || Are you going to eat cake tomorrow? || Yes, I am. / No, I am not.",
                    "Q || What are you going to eat at a birthday party? || I am going to eat cake.",
                    "Q || What are you going to do with a camera? || I am going to take pictures.",
                    "F || I am going to ____ time with friends. || spend || spends / spending",
                    "F || I am going to ____ time with friends on weekends. || spend || spends / spending",
                    "Q || When are you going to spend time with friends? || I am going to spend time with friends on weekends.",
                    "Q || When are you going to open presents? || I am going to open presents on my birthday.",
                    "Q || What are you going to do at home? || I am going to eat cake.",
                    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
                    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [opens] presents on my birthday. || opening / open* / opens || I am going to open presents on my birthday.",
                    "M || I am going to [opens] presents. || open* / opens / opening || I am going to open presents."
                  ]
                }
              ]
            },
            {
              "week": 2,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Activities after class — Simple future - going to (1st person); Positive sentences — Vocabulary: Eat a Snack, Do My Homework, Play Video Games, Check My Phone",
                  "lines": [
                    "Q || What are you going to eat after class? || I am going to eat a snack.",
                    "Q || What are you going to do after class tomorrow? || I am going to do my homework.",
                    "Q || What are you going to do during your free time tomorrow? || I am going to play video games.",
                    "Q || What are you going to check after class? || I am going to check my phone.",
                    "Q || What are you going to do after class? || I am going to eat a snack.",
                    "Q || Where are you going to do your homework? || I am going to do my homework in my bedroom.",
                    "Q || When are you going to play video games? || I am going to play video games after homework.",
                    "Q || What are you going to do after class next Sunday? || I am going to check my phone.",
                    "F || I am going to ____ a snack. || eat || eats / eating",
                    "F || I am going to ____ my homework. || do || does / doing",
                    "T || Voy a comer una merienda. || I am going to eat a snack.",
                    "T || Voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Voy a jugar videojuegos. || I am going to play video games.",
                    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Voy a comer una merienda mañana. || I am going to eat a snack tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [plays] video games. || plays / playing / play* || I am going to play video games.",
                    "M || I am going to [checks] my phone. || checking / check* / checks || I am going to check my phone."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Activities after class — Simple future - going to (1st person); Yes/No questions (Long answers) — Vocabulary: Eat a Snack, Do My Homework, Play Video Games, Check My Phone, Chat",
                  "lines": [
                    "Q || Are you going to do your homework? || Yes, I am going to do my homework. / No, I am not going to do my homework.",
                    "Q || Are you going to play video games? || Yes, I am going to play video games. / No, I am not going to play video games.",
                    "Q || Are you going to check your phone? || Yes, I am going to check my phone. / No, I am not going to check my phone.",
                    "Q || Are you going to chat with a friend? || Yes, I am going to chat with a friend. / No, I am not going to chat with a friend.",
                    "Q || Are you going to eat a snack? || Yes, I am going to eat a snack. / No, I am not going to eat a snack.",
                    "Q || Are you going to do your homework tomorrow? || Yes, I am going to do my homework. / No, I am not going to do my homework.",
                    "Q || What are you going to do after homework? || I am going to play video games.",
                    "Q || What are you going to do after class? || I am going to check my phone.",
                    "F || I am going to ____ video games. || play || plays / playing",
                    "F || I am going to ____ my phone. || check || checks / checking",
                    "T || Voy a comer una merienda. || I am going to eat a snack.",
                    "T || Voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Voy a jugar videojuegos. || I am going to play video games.",
                    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Voy a hacer mi tarea mañana. || I am going to do my homework tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [eats] a snack. || eating / eat* / eats || I am going to eat a snack.",
                    "M || I am going to [does] my homework. || do* / does / doing || I am going to do my homework."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Activities after class — Simple future - going to (1st person); Wh-questions (What...?) — Vocabulary: Eat a Snack, Do My Homework, Play Video Games, Check My Phone, Chat, Rest",
                  "lines": [
                    "Q || What are you going to do during your free time tomorrow? || I am going to play video games.",
                    "Q || What are you going to check after class? || I am going to check my phone.",
                    "Q || What are you going to do after class tomorrow? || I am going to chat with a friend.",
                    "Q || What are you going to do after a busy day tomorrow? || I am going to rest.",
                    "Q || What are you going to eat after class? || I am going to eat a snack.",
                    "Q || Where are you going to do your homework? || I am going to do my homework in my bedroom.",
                    "Q || When are you going to play video games? || I am going to play video games after homework.",
                    "Q || What are you going to do after class? || I am going to check my phone.",
                    "F || I am going to ____ with a friend. || chat || chats / chatting",
                    "F || I am going to ____. || rest || rests / resting",
                    "T || Voy a comer una merienda. || I am going to eat a snack.",
                    "T || Voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Voy a jugar videojuegos. || I am going to play video games.",
                    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [eats] a snack. || eat* / eats / eating || I am going to eat a snack.",
                    "M || I am going to [does] my homework in my bedroom. || does / doing / do* || I am going to do my homework in my bedroom."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Activities after class — Simple future - going to (1st person); Wh-questions (Why...?) — Vocabulary: Eat a Snack, Do My Homework, Play Video Games, Check My Phone, Chat, Rest",
                  "lines": [
                    "Q || Why are you going to check your phone? || Because I have a message.",
                    "Q || Why are you going to chat with a friend? || Because I have news.",
                    "Q || Why are you going to rest? || Because I am tired.",
                    "Q || Why are you going to eat a snack? || Because I am hungry.",
                    "Q || What are you going to do after class tomorrow? || I am going to do my homework.",
                    "Q || Where are you going to play video games? || I am going to play video games in the living room.",
                    "Q || When are you going to check your phone? || I am going to check my phone after class.",
                    "Q || What are you going to do after class? || I am going to chat with a friend.",
                    "F || I am going to ____ with a friend. || chat || chats / chatting",
                    "F || I am going to ____. || rest || rests / resting",
                    "T || Voy a comer una merienda. || I am going to eat a snack.",
                    "T || Voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Voy a jugar videojuegos. || I am going to play video games.",
                    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [eats] a snack. || eats / eating / eat* || I am going to eat a snack.",
                    "M || I am going to [plays] video games. || playing / play* / plays || I am going to play video games."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple future - going to (1st person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Why...?) — Vocabulary: play video games; chat with a friend; rest; eat a snack; do my homework; check my phone",
                  "lines": [
                    "T || Voy a jugar videojuegos. || I am going to play video games.",
                    "Q || Are you going to chat with a friend? || Yes, I am going to chat with a friend. / No, I am not going to chat with a friend.",
                    "Q || What are you going to do after a busy day tomorrow? || I am going to rest.",
                    "Q || Why are you going to eat a snack? || Because I am hungry.",
                    "Q || What are you going to do after class? || I am going to eat a snack.",
                    "Q || Are you going to eat a snack? || Yes, I am going to eat a snack. / No, I am not going to eat a snack.",
                    "Q || What are you going to eat after class? || I am going to eat a snack.",
                    "Q || What are you going to do after class tomorrow? || I am going to do my homework.",
                    "F || I am going to ____ video games after homework. || play || plays / playing",
                    "F || I am going to ____ my phone after class. || check || checks / checking",
                    "Q || When are you going to play video games? || I am going to play video games after homework.",
                    "Q || When are you going to check your phone? || I am going to check my phone after class.",
                    "Q || What are you going to do after class next Sunday? || I am going to check my phone.",
                    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Voy a comer una merienda mañana. || I am going to eat a snack tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [checks] my phone. || checking / check* / checks || I am going to check my phone.",
                    "M || I am going to [chats] with a friend. || chat* / chats / chatting || I am going to chat with a friend."
                  ]
                }
              ]
            },
            {
              "week": 3,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Weekend activities — Simple future - going to (3rd person); Positive sentences — Vocabulary: Pay, Ride, Visit",
                  "lines": [
                    "Q || What is your best friend going to do at a shop? || She is going to pay for a snack.",
                    "Q || What is your cousin going to do on Saturday? || She is going to ride a bike.",
                    "Q || What is your best friend going to do on Sunday? || He is going to visit his grandma.",
                    "Q || What is your teacher going to do in the afternoon? || He is going to pay for a snack.",
                    "Q || What is your mom going to do after work? || She is going to watch a movie.",
                    "Q || Where is your brother going to ride a bike? || He is going to ride a bike in the park.",
                    "Q || When is your dad going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "Q || What is your sister going to do in the park? || She is going to ride a bike.",
                    "F || She is going to ____ for a snack. || pay || pays / paying",
                    "F || She is going to ____ a bike. || ride || rides / riding",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Él va a montar bicicleta. || He is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Él va a pagar una merienda mañana. || He is going to pay for a snack tomorrow.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano va a pagar una merienda. || My brother is going to pay for a snack."
                  ],
                  "mistakes": [
                    "M || He is going to [visits] his grandma. || visits / visiting / visit* || He is going to visit his grandma.",
                    "M || He is going to [pays] for a snack. || paying / pay* / pays || He is going to pay for a snack."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Weekend activities — Simple future - going to (3rd person); Yes/No questions (Short answers) — Vocabulary: Pay, Ride, Visit, Buy",
                  "lines": [
                    "Q || Is your best friend going to ride a bike? || Yes, she is. / No, she isn't.",
                    "Q || Is your cousin going to visit his grandma? || Yes, he is. / No, he isn't.",
                    "Q || Is your teacher going to buy a toy? || Yes, he is. / No, he isn't.",
                    "Q || Is your mom going to pay for a snack? || Yes, she is. / No, she isn't.",
                    "Q || Is your brother going to ride a bike tomorrow? || Yes, he is. / No, he isn't.",
                    "Q || Is your dad going to visit his grandma tomorrow? || Yes, he is. / No, he isn't.",
                    "Q || What is your sister going to do on Saturday? || She is going to buy a toy.",
                    "Q || What is your best friend going to do in the afternoon? || She is going to pay for a snack.",
                    "F || She is going to ____ for a snack. || pay || pays / paying",
                    "F || She is going to ____ her grandma. || visit || visits / visiting",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "T || Él va a visitar a su abuela. || He is going to visit his grandma.",
                    "T || Él va a comprar un juguete. || He is going to buy a toy.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano va a visitar a su abuela. || My brother is going to visit his grandma."
                  ],
                  "mistakes": [
                    "M || He is going to [buys] a toy. || buying / buy* / buys || He is going to buy a toy.",
                    "M || He is going to [pays] for a snack. || pay* / pays / paying || He is going to pay for a snack."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Weekend activities — Simple future - going to (3rd person); Wh-questions (What...?) — Vocabulary: Pay, Ride, Visit, Buy, Watch",
                  "lines": [
                    "Q || What is your best friend going to do on Sunday? || He is going to visit his grandma.",
                    "Q || What is your teacher going to buy at a toy shop? || He is going to buy a toy.",
                    "Q || What is your mom going to do on a rainy day? || She is going to watch a movie.",
                    "Q || What is your brother going to do at a shop? || He is going to pay for a snack.",
                    "Q || What is your dad going to do on Saturday? || He is going to ride a bike.",
                    "Q || Where is your sister going to buy a book? || She is going to buy a book at a bookstore.",
                    "Q || When is your best friend going to buy a toy? || She is going to buy a toy on Saturday.",
                    "Q || What is your cousin going to do on Saturday evening? || She is going to watch a movie.",
                    "F || She is going to ____ a movie. || watch || watches / watching",
                    "F || He is going to ____ for a snack. || pay || pays / paying",
                    "T || Ella va a pagar una merienda. || She is going to pay for a snack.",
                    "T || Él va a montar bicicleta. || He is going to ride a bike.",
                    "T || Él va a visitar a su abuela. || He is going to visit his grandma.",
                    "T || Ella va a comprar un juguete. || She is going to buy a toy.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano va a visitar a su abuela. || My brother is going to visit his grandma."
                  ],
                  "mistakes": [
                    "M || He is going to [rides] a bike. || ride* / rides / riding || He is going to ride a bike.",
                    "M || She is going to [visits] her grandma at her grandma's house. || visits / visiting / visit* || She is going to visit her grandma at her grandma's house."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Weekend activities — Simple future - going to (3rd person); Wh-questions (Where...?) — Vocabulary: Pay, Ride, Visit, Buy, Watch",
                  "lines": [
                    "Q || Where is your teacher going to buy a toy? || He is going to buy a toy at a shop.",
                    "Q || Where is your mom going to watch a movie? || She is going to watch a movie at the cinema.",
                    "Q || Where is your brother going to pay for a snack? || He is going to pay for a snack at a shop.",
                    "Q || Where is your dad going to ride a bike? || He is going to ride a bike in the park.",
                    "Q || What is your sister going to do on Sunday? || She is going to visit her grandma.",
                    "Q || Where is your best friend going to buy a toy? || She is going to buy a toy at a shop.",
                    "Q || When is your aunt going to watch a movie? || She is going to watch a movie on Saturday evening.",
                    "Q || What is your brother going to do in the afternoon? || He is going to pay for a snack.",
                    "F || He is going to ____ a bike in the park. || ride || rides / riding",
                    "F || She is going to ____ her grandma. || visit || visits / visiting",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Él va a montar bicicleta. || He is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Ella va a comprar un juguete. || She is going to buy a toy.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermana va a comprar un juguete. || My sister is going to buy a toy."
                  ],
                  "mistakes": [
                    "M || She is going to [buys] a toy at a shop. || buys / buying / buy* || She is going to buy a toy at a shop.",
                    "M || She is going to [watches] a movie on Saturday evening. || watching / watch* / watches || She is going to watch a movie on Saturday evening."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Weekend activities — Simple future - going to (3rd person); Wh-questions (When...?) — Vocabulary: Pay, Ride, Visit, Buy, Watch",
                  "lines": [
                    "Q || When is your mom going to watch a movie? || She is going to watch a movie on Saturday evening.",
                    "Q || When is your brother going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "Q || When is your dad going to ride a bike? || He is going to ride a bike after school.",
                    "Q || When is your sister going to visit her grandma? || She is going to visit her grandma next Sunday.",
                    "Q || What is your best friend going to buy at a toy shop? || She is going to buy a toy.",
                    "Q || Where is your sister going to watch a movie? || She is going to watch a movie at the cinema.",
                    "Q || When is your best friend going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "Q || What is your teacher going to do after school? || He is going to ride a bike.",
                    "F || She is going to ____ a toy. || buy || buys / buying",
                    "F || She is going to ____ a movie at the cinema. || watch || watches / watching",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Ella va a comprar un juguete. || She is going to buy a toy.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano va a pagar una merienda. || My brother is going to pay for a snack."
                  ],
                  "mistakes": [
                    "M || He is going to [rides] a bike. || riding / ride* / rides || He is going to ride a bike.",
                    "M || She is going to [pays] for a snack. || pay* / pays / paying || She is going to pay for a snack."
                  ]
                }
              ]
            },
            {
              "week": 4,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "GENERAL REVIEW — Present progressive (1st person); Wh-questions (Why/Where/What...?) — Vocabulary: Sit, Pay Attention, Take Notes, Learn, Speak",
                  "lines": [
                    "Q || Why are you sitting? || Because the lesson is starting.",
                    "Q || Why are you paying attention? || Because I want to understand.",
                    "Q || Why are you taking notes? || Because I want to remember.",
                    "Q || Why are you learning English? || Because I like languages.",
                    "Q || What are you doing with the teacher? || I am speaking English.",
                    "Q || Where are you sitting? || I am sitting in the classroom.",
                    "Q || What are you doing during the lesson? || I am paying attention.",
                    "Q || What are you doing while you write in your notebook? || I am taking notes.",
                    "F || I am ____ English. || speaking || speak / speaks",
                    "F || I am ____ in the classroom. || sitting || sit / sits",
                    "T || Yo estoy sentado. || I am sitting.",
                    "T || Yo estoy prestando atención. || I am paying attention.",
                    "T || Yo estoy tomando notas. || I am taking notes.",
                    "T || Yo estoy aprendiendo inglés. || I am learning English.",
                    "T || Yo estoy sentado en clase. || I am sitting in class.",
                    "T || Yo estoy prestando atención en clase. || I am paying attention in class."
                  ],
                  "mistakes": [
                    "M || I am [pay] attention. || pay / pays / paying* || I am paying attention.",
                    "M || I am [take] notes. || takes / taking* / take || I am taking notes."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "GENERAL REVIEW — Present progressive (3rd person); Yes/No questions (Short answers) Wh-questions (What/Where...?) — Vocabulary: Fly, Ride a Bike, Take a Nap, Listen to Music, Meet",
                  "lines": [
                    "Q || Where is your dad riding a bike? || He is riding a bike in the park.",
                    "Q || Where is your mom taking a nap? || She is taking a nap on the sofa.",
                    "Q || Where is your sister listening to music? || She is listening to music at home.",
                    "Q || Where is your cousin meeting a friend? || He is meeting a friend at the park.",
                    "Q || What is your brother doing right now? || He is flying in a plane.",
                    "Q || Where is your brother riding a bike? || He is riding a bike in the park.",
                    "Q || What is your dad doing after lunch? || He is taking a nap.",
                    "Q || Is your brother listening to music right now? || Yes, he is listening to music. / No, he isn't listening to music.",
                    "F || She is ____ a nap on the sofa. || taking || take / takes",
                    "F || He is ____ to music in his bedroom. || listening || listen / listens",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermano está tomando una siesta. || My brother is taking a nap."
                  ],
                  "mistakes": [
                    "M || She is [meet] a friend in the park. || meets / meeting* / meet || She is meeting a friend in the park.",
                    "M || He is [fly]. || flying* / fly / flies || He is flying."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "GENERAL REVIEW — Present progressive (3rd person); Yes/No questions (Short answers) Wh-questions (What/Who... with?) — Vocabulary: Make a Sandcastle, Swim, Have a Picnic, Surf, Relax",
                  "lines": [
                    "Q || Two children are at the beach with their family. Who are they having a picnic with? || They are having a picnic with their family.",
                    "Q || Two children are at the beach with their friends. Who are they surfing with? || They are surfing with their friends.",
                    "Q || Two children are at the beach with their cousin. Who are they relaxing with? || They are relaxing with their cousin.",
                    "Q || Two children are at the beach with their brother. Who are they making a sandcastle with? || They are making a sandcastle with their brother.",
                    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
                    "Q || Two children are on the beach. Where are they having a picnic? || They are having a picnic on the beach.",
                    "Q || Two children are riding waves on surfboards. What are they doing? || They are surfing.",
                    "Q || Two children are running as fast as they can. Are they relaxing right now? || No, they aren't relaxing.",
                    "F || They are ____ with their cousin. || relaxing || relax / relaxes",
                    "F || They are ____ a sandcastle with their brother. || making || make / makes",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Guess the action! || Swim",
                    "T || Mis amigos están haciendo un pícnic. || My friends are having a picnic."
                  ],
                  "mistakes": [
                    "M || They are [swim]. || swimming* / swim / swims || They are swimming.",
                    "M || They are [have] a picnic on the beach. || have / has / having* || They are having a picnic on the beach."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: celebrate my birthday; eat a snack; pay for a snack; sit; girl; paint a picture; jump; take a nap; soup; clean the room; climb a tree; fly",
                  "lines": [
                    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
                    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "Q || What are you going to eat after class? || I am going to eat a snack.",
                    "T || Voy a comer una merienda. || I am going to eat a snack.",
                    "Q || What is your best friend going to do at a shop next weekend? || She is going to pay for a snack.",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "Q || Why are you sitting? || Because the lesson is starting.",
                    "T || Yo estoy sentado. || I am sitting.",
                    "F || He is going to ____ for a snack. || pay || pays / paying",
                    "F || I am ____. || sitting || sit / sits",
                    "Q || What does a rabbit do in the morning? || It jumps.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "T || sopa || soup",
                    "T || Él limpia el cuarto. || He cleans the room.",
                    "H || 👧 || Guess the hidden person! || Girl",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint"
                  ],
                  "mistakes": [
                    "M || She [am] a girl. || am / are / is* || She is a girl.",
                    "M || He [paint] a picture. || painting / paints* / paint || He paints a picture."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: take pictures; eat cake; play video games; do my homework; visit my grandma; ride a bike; take a nap; dad; dance; walk; milk; paint a picture; talk; fly",
                  "lines": [
                    "Q || Are you going to take pictures? || Yes, I am. / No, I am not.",
                    "T || Voy a comer pastel. || I am going to eat cake.",
                    "Q || Are you going to play video games? || Yes, I am going to play video games. / No, I am not going to play video games.",
                    "T || Voy a hacer mi tarea. || I am going to do my homework.",
                    "Q || Is your cousin going to visit his grandma? || Yes, he is. / No, he isn't.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "Q || Where is your mom taking a nap? || She is taking a nap on the sofa.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "F || She is ____ a bike. || riding || ride / rides",
                    "F || He ____ my dad. || is || am / are",
                    "Q || What does your dog do after lunch? || It walks.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "Q || What is your dad's favorite drink? || My dad's favorite drink is milk.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "H || 💃 || Guess the action! || Dance",
                    "T || Voy a comer pastel mañana. || I am going to eat cake tomorrow."
                  ],
                  "mistakes": [
                    "M || She [dance]. || dancing / dances* / dance || She dances.",
                    "M || It [walk]. || walks* / walk / walking || It walks."
                  ]
                }
              ]
            },
            {
              "week": 5,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "GENERAL REVIEW — Simple present (1st person); Wh-questions (What/What time/Where...?) — Vocabulary: Wake Up, Take a Shower, Eat, Brush My Teeth, Go to Sleep",
                  "lines": [
                    "Q || What do you do in the morning? || I wake up, take a shower and eat breakfast.",
                    "Q || What time do you wake up on school days? || I wake up at six thirty.",
                    "Q || What do you do in the afternoon after school? || I eat a snack and take a shower.",
                    "Q || What do you eat for breakfast on weekends? || I eat eggs and bread.",
                    "Q || What do you do before you go to bed? || I brush my teeth.",
                    "Q || Do you go to sleep early on school nights? || Yes, I go to sleep early on school nights. / No, I don't go to sleep early on school nights.",
                    "Q || What do you do when you feel sleepy? || I go to sleep.",
                    "Q || Where do you eat breakfast on school days? || I eat breakfast in the kitchen.",
                    "F || I ____ up, take a shower and eat breakfast. || wake || wakes / waking",
                    "F || I ____ up at six thirty. || wake || wakes / waking",
                    "T || Yo me despierto. || I wake up.",
                    "T || Yo me ducho. || I take a shower.",
                    "T || Yo desayuno. || I eat breakfast.",
                    "T || Yo me cepillo los dientes. || I brush my teeth.",
                    "T || Yo me ducho por la mañana. || I take a shower in the morning.",
                    "T || Yo desayuno por la mañana. || I eat breakfast in the morning."
                  ],
                  "mistakes": [
                    "M || I [eats] a snack and take a shower. || eats / eating / eat* || I eat a snack and take a shower.",
                    "M || I [eats] eggs and bread. || eating / eat* / eats || I eat eggs and bread."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "GENERAL REVIEW — Simple present (3rd person); Wh-questions (What/Who... with?) — Vocabulary: Wake Up, Cook, Work, Exercise, Watch TV",
                  "lines": [
                    "Q || What does your mom do when she is tired? || She watches TV.",
                    "Q || What does your dad do after work? || He exercises.",
                    "Q || Who cooks dinner at your house? || My dad cooks dinner.",
                    "Q || What time does your best friend wake up on school days? || My best friend wakes up at six thirty.",
                    "Q || Who does your mom exercise with? || She exercises with her friends.",
                    "Q || Who does your brother watch TV with? || He watches TV with my sister.",
                    "Q || When does your dad work? || He works in the morning.",
                    "Q || What does your cousin do in the morning? || He exercises.",
                    "F || He ____. || exercises || exercise / exercising",
                    "F || My dad ____ dinner. || cooks || cook / cooking",
                    "T || Él se despierta. || He wakes up.",
                    "T || Él cocina la cena. || He cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermano trabaja. || My brother works.",
                    "H || 🏋️ || Guess the action! || Exercise"
                  ],
                  "mistakes": [
                    "M || My best friend [wake] up at six thirty. || waking / wakes* / wake || My best friend wakes up at six thirty.",
                    "M || She [exercise] with her friends. || exercises* / exercise / exercising || She exercises with her friends."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "GENERAL REVIEW — Simple present (3rd person); Wh-questions (What/Who... with?) — Vocabulary: Exercise, Play Soccer, Drink, Win, Travel",
                  "lines": [
                    "Q || What does your brother do when he is bored? || He plays soccer.",
                    "Q || What does Messi do after a soccer match? || He drinks water.",
                    "Q || When does your best friend exercise? || My best friend exercises after school.",
                    "Q || Who does your sister travel with? || She travels with my family.",
                    "Q || What does your dad drink when he is thirsty? || He drinks water.",
                    "Q || Who does your best friend play soccer with? || My best friend plays soccer with classmates.",
                    "Q || What does Messi do after a win? || He celebrates with his team.",
                    "Q || What does your teacher do during vacation? || He travels.",
                    "F || My best friend ____ after school. || exercises || exercise / exercising",
                    "F || She ____ with my family. || travels || travel / traveling",
                    "T || Él hace ejercicio. || He exercises.",
                    "T || Ella juega fútbol. || She plays soccer.",
                    "T || Ella bebe agua. || She drinks water.",
                    "T || Ella gana una carrera. || She wins a race.",
                    "T || Mi hermana juega fútbol. || My sister plays soccer.",
                    "T || Mi hermana gana una carrera. || My sister wins a race."
                  ],
                  "mistakes": [
                    "M || My best friend [play] soccer with classmates. || plays* / play / playing || My best friend plays soccer with classmates.",
                    "M || He [win] a race on sports day. || win / winning / wins* || He wins a race on sports day."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "GENERAL REVIEW — Simple present (3rd person); Wh-questions (What/When/What time...?) — Vocabulary: Sweep, Mop, Wash the Dishes, Make the Bed, Dust",
                  "lines": [
                    "Q || What does your brother do when his room is dirty? || He sweeps the floor.",
                    "Q || What does your dad do after dinner? || He washes the dishes.",
                    "Q || What does your sister do after she wakes up? || She makes her bed.",
                    "Q || What does your mom do when the furniture is dusty? || She dusts the furniture.",
                    "Q || When does your best friend mop the floor? || My best friend mops the floor on Saturdays.",
                    "Q || What time does your dad wash the dishes? || He washes the dishes at seven o'clock.",
                    "Q || When does your teacher dust the shelf? || He dusts the shelf on Saturdays.",
                    "Q || What does your mom do after breakfast? || She sweeps the floor.",
                    "F || She ____ the furniture. || dusts || dust / dusting",
                    "F || My best friend ____ the floor on Saturdays. || mops || mop / mopping",
                    "T || Ella barre el piso. || She sweeps the floor.",
                    "T || Ella trapea el piso. || She mops the floor.",
                    "T || Ella lava los platos. || She washes the dishes.",
                    "T || Él hace su cama. || He makes his bed.",
                    "T || Mi hermana barre el piso. || My sister sweeps the floor.",
                    "T || Mi hermana trapea el piso. || My sister mops the floor."
                  ],
                  "mistakes": [
                    "M || He [wash] the dishes at seven o'clock. || wash / washing / washes* || He washes the dishes at seven o'clock.",
                    "M || He [dust] the shelf on Saturdays. || dusting / dusts* / dust || He dusts the shelf on Saturdays."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "GENERAL REVIEW — Simple present (3rd person); Wh-questions (When/Who... with?) — Vocabulary: Climb, Run, Jump, Walk, Talk",
                  "lines": [
                    "Q || Who does a parrot talk with? || It talks with its family.",
                    "Q || Who does your dog walk with? || My dog walks with my dad.",
                    "Q || Who does your dog run with? || It runs with its cousin.",
                    "Q || Who does your dog play with? || My dog plays with me.",
                    "Q || What does your dog do on a quiet afternoon? || It walks.",
                    "Q || Where does a parrot talk? || It talks at home.",
                    "Q || When does a cat climb a tree? || It climbs a tree in the afternoon.",
                    "Q || What does your dog do when you get home? || My dog runs to me.",
                    "F || It ____. || walks || walk / walking",
                    "F || It ____ at home. || talks || talk / talking",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "T || Mi gato trepa un árbol. || My cat climbs a tree.",
                    "T || Mi perro corre. || My dog runs."
                  ],
                  "mistakes": [
                    "M || It [climb] a tree in the afternoon. || climbing / climbs* / climb || It climbs a tree in the afternoon.",
                    "M || It [run]. || runs* / run / running || It runs."
                  ]
                }
              ]
            },
            {
              "week": 6,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "GENERAL REVIEW — Simple future - going to (1st person); Wh-questions (What/Where/When...?) — Vocabulary: Celebrate, Eat Cake, Take Pictures, Spend Time with Friends, Open Presents",
                  "lines": [
                    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday next Saturday.",
                    "Q || When are you going to eat cake? || I am going to eat cake after lunch.",
                    "Q || When are you going to take pictures? || I am going to take pictures on weekends.",
                    "Q || When are you going to spend time with friends? || I am going to spend time with friends on weekends.",
                    "Q || What are you going to open at a birthday party? || I am going to open presents.",
                    "Q || Where are you going to celebrate your birthday? || I am going to celebrate my birthday at home.",
                    "Q || When are you going to eat cake next Sunday? || I am going to eat cake after lunch.",
                    "Q || What are you going to do on weekends? || I am going to take pictures.",
                    "F || I am going to ____ my birthday next Saturday. || celebrate || celebrates / celebrating",
                    "F || I am going to ____ cake after lunch. || eat || eats / eating",
                    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Voy a comer pastel. || I am going to eat cake.",
                    "T || Voy a tomar fotos. || I am going to take pictures.",
                    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [takes] pictures on weekends. || takes / taking / take* || I am going to take pictures on weekends.",
                    "M || I am going to [spends] time with friends on weekends. || spending / spend* / spends || I am going to spend time with friends on weekends."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "GENERAL REVIEW — Simple future - going to (1st person); Wh-questions (What/Where/Who... with?) — Vocabulary: Eat a Snack, Do My Homework, Play Video Games, Check My Phone, Chat, Rest",
                  "lines": [
                    "Q || Who are you going to do your homework with? || I am going to do my homework with my family.",
                    "Q || Who are you going to play video games with? || I am going to play video games with my friends.",
                    "Q || Who are you going to chat with? || I am going to chat with a friend.",
                    "Q || Who are you going to rest with? || I am going to rest with my brother.",
                    "Q || What are you going to do after a busy day tomorrow? || I am going to rest.",
                    "Q || Where are you going to eat a snack? || I am going to eat a snack in the kitchen.",
                    "Q || When are you going to do your homework? || I am going to do my homework after school.",
                    "Q || What are you going to do after homework? || I am going to play video games.",
                    "F || I am going to ____ video games with my friends. || play || plays / playing",
                    "F || I am going to ____ with a friend. || chat || chats / chatting",
                    "T || Voy a comer una merienda. || I am going to eat a snack.",
                    "T || Voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Voy a jugar videojuegos. || I am going to play video games.",
                    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Voy a hacer mi tarea mañana. || I am going to do my homework tomorrow."
                  ],
                  "mistakes": [
                    "M || I am going to [rests] with my brother. || resting / rest* / rests || I am going to rest with my brother.",
                    "M || I am going to [rests]. || rest* / rests / resting || I am going to rest."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "GENERAL REVIEW — Simple future - going to (3rd person); Wh-questions (What/Where/When...?) — Vocabulary: Play, Ride, Visit, Buy, Watch",
                  "lines": [
                    "Q || When is your brother going to visit his grandma? || He is going to visit his grandma next Sunday.",
                    "Q || When is your dad going to buy a toy? || He is going to buy a toy on Saturday.",
                    "Q || When is your sister going to watch a movie? || She is going to watch a movie on Saturday evening.",
                    "Q || When is your best friend going to play games? || She is going to play games on Saturdays.",
                    "Q || What is your aunt going to do on a sunny morning next weekend? || She is going to ride a bike.",
                    "Q || Where is Messi going to watch a movie? || He is going to watch a movie at home.",
                    "Q || When is your teacher going to buy a toy? || He is going to buy a toy on Saturday.",
                    "Q || What is your mom going to do on Saturday evening? || She is going to watch a movie.",
                    "F || She is going to ____ a movie on Saturday evening. || watch || watches / watching",
                    "F || She is going to ____ games on Saturdays. || play || plays / playing",
                    "T || Ella va a jugar. || She is going to play games.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Él va a comprar un juguete. || He is going to buy a toy.",
                    "H || 🚴 || Guess the action! || Ride a bike",
                    "T || Mi hermana va a visitar a su abuela. || My sister is going to visit her grandma."
                  ],
                  "mistakes": [
                    "M || She is going to [rides] a bike. || ride* / rides / riding || She is going to ride a bike.",
                    "M || He is going to [visits] his grandma at his grandma's house. || visits / visiting / visit* || He is going to visit his grandma at his grandma's house."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "GENERAL REVIEW — N/A; How many... vs How much...? — Vocabulary: Numbers 10 by 10 up to 100 Review",
                  "lines": [
                    "Q || Choose: How many / How much is the toy? || How much is the toy?",
                    "Q || Price tag: toy car = $20. Is the toy car thirty dollars? || No, it isn't.",
                    "Q || Choose: How many / How much stars do you see? || How many stars do you see?",
                    "Q || Price tag: ball = $40. Is the ball fifty dollars? || No, it isn't.",
                    "S || star:9 || How many stars do you see? || I see nine stars.",
                    "Q || Price tag: book = $60. Is the book seventy dollars? || No, it isn't.",
                    "S || star:1 || How many stars do you see? || I see one star.",
                    "Q || Price tag: backpack = $80. Is the backpack ninety dollars? || No, it isn't.",
                    "F || I ____ one star. || see || sees / seeing",
                    "F || I ____ three stars. || see || sees / seeing",
                    "T || ¿Cuánto cuesta el libro? || How much is the book?",
                    "T || La pelota cuesta veinte dólares. || The ball is twenty dollars.",
                    "T || ¿Cuántas estrellas ves? || How many stars do you see?",
                    "T || Veo diez estrellas. || I see ten stars.",
                    "S || star:5 || How many stars do you see? || I see five stars.",
                    "S || star:7 || How many stars do you see? || I see seven stars."
                  ],
                  "mistakes": [
                    "M || The ball [am] twenty dollars. || am / are / is* || The ball is twenty dollars.",
                    "M || I [sees] ten stars. || seeing / see* / sees || I see ten stars."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "GENERAL REVIEW — N/A; There is vs There are Positive sentences — Vocabulary: Shapes Review Circle, Rectangle, Star, Heart, Square, Triangle, Oval",
                  "lines": [
                    "T || Hay cinco cuadrados. || There are five squares.",
                    "T || Hay un triángulo. || There is one triangle.",
                    "S || green star:3, square:2 || What color are the stars? || The stars are green.",
                    "S || yellow heart:4, triangle:2 || How many hearts are there? || There are four hearts.",
                    "S || red square:5, oval:2 || Is there a triangle? || No, there isn't a triangle.",
                    "S || blue triangle:1, circle:2 || What color is the triangle? || The triangle is blue.",
                    "S || green oval:2, rectangle:2 || How many ovals are there? || There are two ovals.",
                    "S || yellow circle:3, star:2 || Is there a rectangle? || No, there isn't a rectangle.",
                    "F || There ____ two ovals. || are || am / is",
                    "F || The rectangles ____ red. || are || am / is",
                    "T || Hay un círculo. || There is one circle.",
                    "T || Hay dos rectángulos. || There are two rectangles.",
                    "T || Hay tres estrellas. || There are three stars.",
                    "T || Hay cuatro corazones. || There are four hearts.",
                    "S || red circle:1, star:2 || How many circles are there? || There is one circle.",
                    "S || blue rectangle:2, heart:2 || Is there a star? || No, there isn't a star."
                  ],
                  "mistakes": [
                    "M || There [am] five stars. || is / are* / am || There are five stars.",
                    "M || There [am] two rectangles. || are* / am / is || There are two rectangles."
                  ]
                }
              ]
            },
            {
              "week": 7,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Vacation plans — Simple future - will (1st person); Positive sentences — Vocabulary: Go, Visit, Travel",
                  "lines": [
                    "Q || What will you do next summer? || I will go to the beach.",
                    "Q || What will you do next weekend? || I will visit my grandma.",
                    "Q || What will you do next month? || I will travel.",
                    "Q || What will you do during vacation? || I will go to the beach.",
                    "Q || What will you do on Sundays? || I will visit my grandma.",
                    "Q || Where will you travel? || I will travel to the beach.",
                    "Q || When will you go to the beach? || I will go to the beach during vacation.",
                    "Q || What will you do at your grandma's house? || I will visit my grandma.",
                    "F || I will ____ to the beach. || go || goes / went",
                    "F || I will ____ my grandma. || visit || visits / visited",
                    "T || Yo iré a la playa. || I will go to the beach.",
                    "T || Yo visitaré a mi abuela. || I will visit my grandma.",
                    "T || Yo viajaré. || I will travel.",
                    "T || Yo iré a la playa mañana. || I will go to the beach tomorrow.",
                    "T || Yo iré a la playa el sábado. || I will go to the beach on Saturday.",
                    "T || Yo visitaré a mi abuela mañana. || I will visit my grandma tomorrow."
                  ],
                  "mistakes": [
                    "M || I will [travels]. || travels / traveled / travel* || I will travel.",
                    "M || I will [travels] to the beach. || traveled / travel* / travels || I will travel to the beach."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Vacation plans — Simple future - will (1st person); Yes/No questions (Short answers) — Vocabulary: Go, Visit, Travel, Explore",
                  "lines": [
                    "Q || Will you visit your grandma? || Yes, I will. / No, I won't.",
                    "Q || Will you travel? || Yes, I will. / No, I won't.",
                    "Q || Will you explore a city? || Yes, I will. / No, I won't.",
                    "Q || Will you go to the beach? || Yes, I will. / No, I won't.",
                    "Q || Will you visit your grandma tomorrow? || Yes, I will. / No, I won't.",
                    "Q || Will you travel tomorrow? || Yes, I will. / No, I won't.",
                    "Q || What will you do during vacation? || I will explore a city.",
                    "Q || What will you do next Sunday? || I will go to the beach.",
                    "F || I will ____ a city. || explore || explores / explored",
                    "F || I will ____ to the beach. || go || goes / went",
                    "T || Yo iré a la playa. || I will go to the beach.",
                    "T || Yo visitaré a mi abuela. || I will visit my grandma.",
                    "T || Yo viajaré. || I will travel.",
                    "T || Yo exploraré una ciudad. || I will explore a city.",
                    "T || Yo visitaré a mi abuela mañana. || I will visit my grandma tomorrow.",
                    "T || Yo viajaré mañana. || I will travel tomorrow."
                  ],
                  "mistakes": [
                    "M || I will [travels]. || traveled / travel* / travels || I will travel.",
                    "M || I will [visits] my grandma. || visit* / visits / visited || I will visit my grandma."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Vacation plans — Simple future - will (1st person); Wh-questions (What...?) — Vocabulary: Go, Visit, Travel, Explore, Ride",
                  "lines": [
                    "Q || What will you do next month? || I will travel.",
                    "Q || What will you do on a family trip? || I will explore a city.",
                    "Q || What will you do on a sunny day? || I will ride a bike.",
                    "Q || What will you do next summer? || I will go to the beach.",
                    "Q || What will you do next weekend? || I will visit my grandma.",
                    "Q || Where will you travel? || I will travel to the beach.",
                    "Q || When will you explore a city? || I will explore a city during vacation.",
                    "Q || What will you do after school? || I will ride a bike.",
                    "F || I will ____ a bike. || ride || rides / rode",
                    "F || I will ____ to the beach. || go || goes / went",
                    "T || Yo iré a la playa. || I will go to the beach.",
                    "T || Yo visitaré a mi abuela. || I will visit my grandma.",
                    "T || Yo viajaré. || I will travel.",
                    "T || Yo exploraré una ciudad. || I will explore a city.",
                    "T || Yo viajaré mañana. || I will travel tomorrow.",
                    "T || Yo exploraré una ciudad mañana. || I will explore a city tomorrow."
                  ],
                  "mistakes": [
                    "M || I will [visits] my grandma. || visit* / visits / visited || I will visit my grandma.",
                    "M || I will [travels] to the beach. || travels / traveled / travel* || I will travel to the beach."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Vacation plans — Simple future - will (1st person); Wh-questions (Where...?) — Vocabulary: Go, Visit, Travel, Explore, Ride",
                  "lines": [
                    "Q || Which city will you explore? || I will explore Bogotá.",
                    "Q || Where will you ride a bike? || I will ride a bike in the park.",
                    "Q || Where will you go? || I will go to the beach.",
                    "Q || Where will you go on your next vacation? || I will go to the beach.",
                    "Q || What will you do next month? || I will travel.",
                    "Q || Which city will you explore on vacation? || I will explore Cartagena.",
                    "Q || When will you ride a bike? || I will ride a bike after school.",
                    "Q || What will you do during vacation? || I will go to the beach.",
                    "F || I will ____ my grandma at my grandma's house. || visit || visits / visited",
                    "F || I will ____. || travel || travels / traveled",
                    "T || Yo iré a la playa. || I will go to the beach.",
                    "T || Yo visitaré a mi abuela. || I will visit my grandma.",
                    "T || Yo viajaré. || I will travel.",
                    "T || Yo exploraré una ciudad. || I will explore a city.",
                    "T || Yo exploraré una ciudad mañana. || I will explore a city tomorrow.",
                    "H || 🚴 || Guess the action! || Ride a bike"
                  ],
                  "mistakes": [
                    "M || I will [rides] a bike after school. || rides / rode / ride* || I will ride a bike after school.",
                    "M || I will [rides] a bike. || rode / ride* / rides || I will ride a bike."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple future - will (1st person); Positive sentences; Yes/No questions (Short answers); Wh-questions (What...?); Wh-questions (Where...?) — Vocabulary: travel; go to the beach; visit my grandma; explore a city; ride a bike",
                  "lines": [
                    "T || Yo viajaré. || I will travel.",
                    "Q || Will you go to the beach? || Yes, I will. / No, I won't.",
                    "Q || What will you do next summer? || I will go to the beach.",
                    "Q || Where will you go on your next vacation? || I will go to the beach.",
                    "Q || What will you do on Sundays? || I will visit my grandma.",
                    "Q || Will you visit your grandma tomorrow? || Yes, I will. / No, I won't.",
                    "Q || What will you do next weekend? || I will visit my grandma.",
                    "Q || What will you do next month? || I will travel.",
                    "F || I will ____ a city. || explore || explores / explored",
                    "F || I will ____ a city during vacation. || explore || explores / explored",
                    "Q || When will you explore a city? || I will explore a city during vacation.",
                    "Q || When will you ride a bike? || I will ride a bike after school.",
                    "Q || What will you do at your grandma's house? || I will visit my grandma.",
                    "Q || What will you do next Sunday? || I will go to the beach.",
                    "T || Yo viajaré mañana. || I will travel tomorrow.",
                    "T || Yo iré a la playa mañana. || I will go to the beach tomorrow."
                  ],
                  "mistakes": [
                    "M || I will [rides] a bike after school. || rode / ride* / rides || I will ride a bike after school.",
                    "M || I will [rides] a bike. || ride* / rides / rode || I will ride a bike."
                  ]
                }
              ]
            },
            {
              "week": 8,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Christmas activities — Simple future - will (3rd person); Positive sentences — Vocabulary: Wear, Cook, Give Presents",
                  "lines": [
                    "Q || What will Santa wear next Christmas? || He will wear a red hat.",
                    "Q || What will your mom cook for her family? || She will cook dinner.",
                    "Q || What will your brother give next Christmas? || He will give presents.",
                    "Q || What will Santa do on Christmas Day? || He will wear a red hat.",
                    "Q || What will your mom do at six o'clock? || She will cook dinner.",
                    "Q || Where will your brother give presents? || He will give presents at home.",
                    "Q || When will Santa wear a red hat? || He will wear a red hat on Christmas Day.",
                    "Q || What will your mom do in the kitchen? || She will cook dinner.",
                    "F || He will ____ a red hat. || wear || wears / wore",
                    "F || She will ____ dinner. || cook || cooks / cooked",
                    "T || Él usará un gorro rojo. || He will wear a red hat.",
                    "T || Él cocinará la cena. || He will cook dinner.",
                    "T || Ella dará regalos. || She will give presents.",
                    "T || Él usará un gorro rojo mañana. || He will wear a red hat tomorrow.",
                    "T || Mi hermano usará un gorro rojo. || My brother will wear a red hat.",
                    "T || Mi hermano cocinará la cena. || My brother will cook dinner."
                  ],
                  "mistakes": [
                    "M || He will [gives] presents. || gives / gave / give* || He will give presents.",
                    "M || He will [gives] presents at home. || gave / give* / gives || He will give presents at home."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Christmas activities — Simple future - will (3rd person); Yes/No questions (Short answers) — Vocabulary: Wear, Cook, Give Presents, Drink Milk",
                  "lines": [
                    "Q || Will Santa cook dinner? || Yes, he will. / No, he won't.",
                    "Q || Will your mom give presents? || Yes, she will. / No, she won't.",
                    "Q || Will your brother drink milk? || Yes, he will. / No, he won't.",
                    "Q || Will Santa wear a red hat? || Yes, he will. / No, he won't.",
                    "Q || Will your mom cook dinner tomorrow? || Yes, she will. / No, she won't.",
                    "Q || Will your brother give presents tomorrow? || Yes, he will. / No, he won't.",
                    "Q || What will Santa do at breakfast? || He will drink milk.",
                    "Q || What will your mom do on Christmas Day? || She will wear a red hat.",
                    "F || She will ____ a red hat. || wear || wears / wore",
                    "F || He will ____ presents. || give || gives / gave",
                    "T || Él usará un gorro rojo. || He will wear a red hat.",
                    "T || Él cocinará la cena. || He will cook dinner.",
                    "T || Ella dará regalos. || She will give presents.",
                    "T || Él beberá leche. || He will drink milk.",
                    "T || Mi hermano cocinará la cena. || My brother will cook dinner.",
                    "T || Mi hermana dará regalos. || My sister will give presents."
                  ],
                  "mistakes": [
                    "M || He will [wears] a red hat. || wore / wear* / wears || He will wear a red hat.",
                    "M || He will [cooks] dinner. || cook* / cooks / cooked || He will cook dinner."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Christmas activities — Simple future - will (3rd person); Wh-questions (Where...?) — Vocabulary: Wear, Cook, Give Presents, Drink Milk, Dance",
                  "lines": [
                    "Q || Where will Santa give presents? || He will give presents at home.",
                    "Q || Where will your mom drink milk? || She will drink milk in the kitchen.",
                    "Q || Where will your brother dance? || He will dance in the living room.",
                    "Q || Where will Santa wear a red hat? || He will wear a red hat at home.",
                    "Q || What will your mom cook for her family? || She will cook dinner.",
                    "Q || Where will your brother give presents? || He will give presents at home.",
                    "Q || When will Santa drink milk? || He will drink milk at breakfast.",
                    "Q || What will your mom do on weekends? || She will dance.",
                    "F || He will ____ in the living room. || dance || dances / danced",
                    "F || He will ____ a red hat at home. || wear || wears / wore",
                    "T || Él usará un gorro rojo. || He will wear a red hat.",
                    "T || Él cocinará la cena. || He will cook dinner.",
                    "T || Ella dará regalos. || She will give presents.",
                    "T || Él beberá leche. || He will drink milk.",
                    "T || Mi hermana dará regalos. || My sister will give presents.",
                    "T || Mi hermano beberá leche. || My brother will drink milk."
                  ],
                  "mistakes": [
                    "M || She will [cooks] dinner. || cook* / cooks / cooked || She will cook dinner.",
                    "M || He will [drinks] milk at breakfast. || drinks / drank / drink* || He will drink milk at breakfast."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Christmas activities — Simple future - will (3rd person); Wh-questions (Who... with?) — Vocabulary: Wear, Cook, Give Presents, Drink Milk, Dance",
                  "lines": [
                    "Q || Who will Santa dance with? || He will dance with his family.",
                    "Q || Who will your mom cook dinner with? || She will cook dinner with her friends.",
                    "Q || Who will your brother give presents with? || He will give presents with his cousin.",
                    "Q || Who will Santa drink milk with? || He will drink milk with his brother.",
                    "Q || What will your mom give next Christmas? || She will give presents.",
                    "Q || Where will your brother drink milk? || He will drink milk in the kitchen.",
                    "Q || When will Santa dance? || He will dance on weekends.",
                    "Q || What will your mom do on Christmas Day? || She will wear a red hat.",
                    "F || He will ____ milk with his brother. || drink || drinks / drank",
                    "F || She will ____ presents. || give || gives / gave",
                    "T || Él usará un gorro rojo. || He will wear a red hat.",
                    "T || Él cocinará la cena. || He will cook dinner.",
                    "T || Ella dará regalos. || She will give presents.",
                    "T || Él beberá leche. || He will drink milk.",
                    "H || 💃 || Guess the action! || Dance",
                    "T || Mi hermano cocinará la cena. || My brother will cook dinner."
                  ],
                  "mistakes": [
                    "M || He will [drinks] milk in the kitchen. || drinks / drank / drink* || He will drink milk in the kitchen.",
                    "M || He will [dances] on weekends. || danced / dance* / dances || He will dance on weekends."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple future - will (3rd person); Positive sentences; Yes/No questions (Short answers); Wh-questions (Where...?); Wh-questions (Who... with?) — Vocabulary: give presents; wear a red hat; drink milk; cook dinner; dance",
                  "lines": [
                    "T || Ella dará regalos. || She will give presents.",
                    "Q || Will Santa wear a red hat? || Yes, he will. / No, he won't.",
                    "Q || Where will Santa wear a red hat? || He will wear a red hat at home.",
                    "Q || Who will Santa drink milk with? || He will drink milk with his brother.",
                    "Q || What will your mom do at six o'clock? || She will cook dinner.",
                    "Q || Will your mom cook dinner tomorrow? || Yes, she will. / No, she won't.",
                    "Q || What will your mom cook for her family? || She will cook dinner.",
                    "Q || What will your mom give next Christmas? || She will give presents.",
                    "F || He will ____ presents. || give || gives / gave",
                    "F || He will ____ milk. || drink || drinks / drank",
                    "Q || When will Santa drink milk? || He will drink milk at breakfast.",
                    "Q || When will Santa dance? || He will dance on weekends.",
                    "Q || What will your mom do in the kitchen? || She will cook dinner.",
                    "Q || What will your mom do on Christmas Day? || She will wear a red hat.",
                    "T || Mi hermana dará regalos. || My sister will give presents.",
                    "T || Mi hermano usará un gorro rojo. || My brother will wear a red hat."
                  ],
                  "mistakes": [
                    "M || He will [drinks] milk at breakfast. || drank / drink* / drinks || He will drink milk at breakfast.",
                    "M || He will [dances] on weekends. || dance* / dances / danced || He will dance on weekends."
                  ]
                }
              ]
            }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Birthday activities",
            "words": [
              "Celebrate",
              "Eat Cake",
              "Take Pictures",
              "Spend Time with Friends",
              "Open Presents"
            ]
          },
          {
            "week": 2,
            "category": "Activities after class",
            "words": [
              "Eat a Snack",
              "Do My Homework",
              "Play Video Games",
              "Check My Phone",
              "Chat",
              "Rest"
            ]
          },
          {
            "week": 3,
            "category": "Weekend activities",
            "words": [
              "Pay",
              "Ride",
              "Visit",
              "Buy",
              "Watch"
            ]
          },
          {
            "week": 4,
            "category": "What are you doing in class",
            "words": [
              "Sit",
              "Pay Attention",
              "Take Notes",
              "Learn",
              "Speak"
            ]
          },
          {
            "week": 4,
            "category": "Aliens on a mission",
            "words": [
              "Fly",
              "Ride a Bike",
              "Take a Nap",
              "Listen to Music",
              "Meet"
            ]
          },
          {
            "week": 4,
            "category": "What are they doing at the beach",
            "words": [
              "Make a Sandcastle",
              "Swim",
              "Have a Picnic",
              "Surf",
              "Relax"
            ]
          },
          {
            "week": 5,
            "category": "What is your daily routine",
            "words": [
              "Wake Up",
              "Take a Shower",
              "Eat",
              "Brush My Teeth",
              "Go to Sleep"
            ]
          },
          {
            "week": 5,
            "category": "What does your mom do every day",
            "words": [
              "Wake Up",
              "Cook",
              "Work",
              "Exercise",
              "Watch TV"
            ]
          },
          {
            "week": 5,
            "category": "What does he do during the week",
            "words": [
              "Exercise",
              "Play Soccer",
              "Drink",
              "Win",
              "Travel"
            ]
          },
          {
            "week": 5,
            "category": "What does he do every day",
            "words": [
              "Sweep",
              "Mop",
              "Wash the Dishes",
              "Make the Bed",
              "Dust"
            ]
          },
          {
            "week": 5,
            "category": "The Super Pets",
            "words": [
              "Climb",
              "Run",
              "Jump",
              "Walk",
              "Talk"
            ]
          },
          {
            "week": 6,
            "category": "What are you going to do on your next birthday",
            "words": [
              "Celebrate",
              "Eat Cake",
              "Take Pictures",
              "Spend Time with Friends",
              "Open Presents"
            ]
          },
          {
            "week": 6,
            "category": "What are you going to do after class",
            "words": [
              "Eat a Snack",
              "Do My Homework",
              "Play Video Games",
              "Check My Phone",
              "Chat",
              "Rest"
            ]
          },
          {
            "week": 6,
            "category": "What is he going to do next weekend",
            "words": [
              "Play",
              "Ride",
              "Visit",
              "Buy",
              "Watch"
            ]
          },
          {
            "week": 6,
            "category": "How many... vs How much...",
            "words": [
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "ten",
              "eleven",
              "twelve",
              "thirteen",
              "fourteen",
              "fifteen",
              "sixteen",
              "seventeen",
              "eighteen",
              "nineteen",
              "twenty",
              "thirty",
              "forty",
              "fifty",
              "sixty",
              "seventy",
              "eighty",
              "ninety",
              "one hundred"
            ]
          },
          {
            "week": 6,
            "category": "Let's talk about shapes",
            "words": [
              "Circle",
              "Rectangle",
              "Star",
              "Heart",
              "Square",
              "Triangle",
              "Oval"
            ]
          },
          {
            "week": 7,
            "category": "Vacation plans",
            "words": [
              "Go",
              "Visit",
              "Travel",
              "Explore",
              "Ride"
            ]
          },
          {
            "week": 8,
            "category": "Christmas activities",
            "words": [
              "Wear",
              "Cook",
              "Give Presents",
              "Drink Milk",
              "Dance"
            ]
          }
        ]
      },
      {
        "level": 5,
        "weeks": [
            {
              "week": 1,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Weekend activities — Simple Past (1st person); Part I: ED ending sounds (Video) Part II: Positive sentences — Vocabulary: Visit, Play, Watch movies",
                  "lines": [
                    "Q || What did you do last weekend? || I visited my grandma.",
                    "Q || What did you do yesterday afternoon? || I played games.",
                    "Q || What did you do last Saturday? || I watched movies.",
                    "Q || What did you do on your last vacation? || I visited my grandma.",
                    "Q || What did you do after school? || I played games.",
                    "Q || Where did you watch movies? || I watched movies at home.",
                    "Q || When did you visit your grandma? || I visited my grandma on Sundays.",
                    "Q || What did you do last night? || I played games.",
                    "F || I ____ my grandma yesterday. || visited || visit / visits",
                    "F || I ____ games yesterday. || played || play / plays",
                    "T || Yo visité a mi abuela. || I visited my grandma.",
                    "T || Yo jugué. || I played games.",
                    "T || Yo vi películas. || I watched movies.",
                    "T || Yo visité a mi abuela ayer. || I visited my grandma yesterday.",
                    "T || Yo visité a mi abuela el sábado pasado. || I visited my grandma last Saturday.",
                    "T || Yo jugué ayer. || I played games yesterday."
                  ],
                  "mistakes": [
                    "M || I [watch] movies yesterday. || watch / watches / watched* || I watched movies yesterday.",
                    "M || I [watch] movies at home yesterday. || watches / watched* / watch || I watched movies at home yesterday."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Weekend activities — Simple Past (1st person); Yes/No questions (Short answers) — Vocabulary: Visit, Play, Watch movies, Order",
                  "lines": [
                    "Q || Did you play games? || Yes, I did. / No, I didn't.",
                    "Q || Did you watch movies? || Yes, I did. / No, I didn't.",
                    "Q || Did you order a pizza? || Yes, I did. / No, I didn't.",
                    "Q || Did you visit your grandma? || Yes, I did. / No, I didn't.",
                    "Q || Did you play games yesterday? || Yes, I did. / No, I didn't.",
                    "Q || Did you watch movies yesterday? || Yes, I did. / No, I didn't.",
                    "Q || What did you do yesterday morning? || I ordered a pizza.",
                    "Q || What did you do last night? || I visited my grandma.",
                    "F || I ____ a pizza yesterday. || ordered || order / orders",
                    "F || I ____ my grandma yesterday. || visited || visit / visits",
                    "T || Yo visité a mi abuela. || I visited my grandma.",
                    "T || Yo jugué. || I played games.",
                    "T || Yo vi películas. || I watched movies.",
                    "T || Yo pedí una pizza. || I ordered a pizza.",
                    "T || Yo jugué ayer. || I played games yesterday.",
                    "T || Yo vi películas ayer. || I watched movies yesterday."
                  ],
                  "mistakes": [
                    "M || I [watch] movies yesterday. || watches / watched* / watch || I watched movies yesterday.",
                    "M || I [play] games yesterday. || played* / play / plays || I played games yesterday."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Weekend activities — Simple Past (1st person); Wh-questions (What...?) — Vocabulary: Visit, Play, Watch movies, Order, Stay at home",
                  "lines": [
                    "Q || What did you do last weekend? || I watched movies.",
                    "Q || What did you order at a restaurant? || I ordered a pizza.",
                    "Q || What did you do last Saturday? || I stayed at home.",
                    "Q || What did you do yesterday morning? || I visited my grandma.",
                    "Q || What did you do last Sunday? || I played games.",
                    "Q || Where did you watch movies? || I watched movies at home.",
                    "Q || When did you order a pizza? || I ordered a pizza on Saturday evening.",
                    "Q || What did you do last night? || I stayed at home.",
                    "F || I ____ at home yesterday. || stayed || stay / stays",
                    "F || I ____ my grandma yesterday. || visited || visit / visits",
                    "T || Yo visité a mi abuela. || I visited my grandma.",
                    "T || Yo jugué. || I played games.",
                    "T || Yo vi películas. || I watched movies.",
                    "T || Yo pedí una pizza. || I ordered a pizza.",
                    "T || Yo vi películas ayer. || I watched movies yesterday.",
                    "T || Yo pedí una pizza ayer. || I ordered a pizza yesterday."
                  ],
                  "mistakes": [
                    "M || I [play] games yesterday. || played* / play / plays || I played games yesterday.",
                    "M || I [watch] movies at home yesterday. || watch / watches / watched* || I watched movies at home yesterday."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Weekend activities — Simple Past (1st person); Wh-questions (When...?) — Vocabulary: Visit, Play, Watch movies, Order, Stay at home",
                  "lines": [
                    "Q || When did you order a pizza? || I ordered a pizza on Saturday evening.",
                    "Q || When did you stay at home? || I stayed at home on Sunday.",
                    "Q || When did you visit your grandma? || I visited my grandma on Sundays.",
                    "Q || When did you play games? || I played games on Saturdays.",
                    "Q || What did you do last weekend? || I watched movies.",
                    "Q || Where did you order a pizza? || I ordered a pizza at a restaurant.",
                    "Q || When did you stay at home last Sunday? || I stayed at home on Sunday.",
                    "Q || What did you do last night? || I visited my grandma.",
                    "F || I ____ games on Saturdays yesterday. || played || play / plays",
                    "F || I ____ movies yesterday. || watched || watch / watches",
                    "T || Yo visité a mi abuela. || I visited my grandma.",
                    "T || Yo jugué. || I played games.",
                    "T || Yo vi películas. || I watched movies.",
                    "T || Yo pedí una pizza. || I ordered a pizza.",
                    "T || Yo pedí una pizza ayer. || I ordered a pizza yesterday.",
                    "T || Yo visité a mi abuela ayer. || I visited my grandma yesterday."
                  ],
                  "mistakes": [
                    "M || I [order] a pizza at a restaurant yesterday. || order / orders / ordered* || I ordered a pizza at a restaurant yesterday.",
                    "M || I [visit] my grandma yesterday. || visits / visited* / visit || I visited my grandma yesterday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple Past (1st person); Part I: ED ending sounds (Video) Part II: Positive sentences; Yes/No questions (Short answers); Wh-questions (What...?); Wh-questions (When...?) — Vocabulary: watch movies; visit my grandma; play games; order a pizza; stay at home",
                  "lines": [
                    "T || Yo vi películas. || I watched movies.",
                    "Q || Did you visit your grandma? || Yes, I did. / No, I didn't.",
                    "Q || What did you do yesterday morning? || I visited my grandma.",
                    "Q || When did you play games? || I played games on Saturdays.",
                    "Q || What did you do after school? || I played games.",
                    "Q || Did you play games yesterday? || Yes, I did. / No, I didn't.",
                    "Q || What did you do last Sunday? || I played games.",
                    "Q || What did you do last weekend? || I watched movies.",
                    "F || I ____ a pizza on Saturday evening yesterday. || ordered || order / orders",
                    "F || I ____ at home on Sunday yesterday. || stayed || stay / stays",
                    "Q || When did you order a pizza? || I ordered a pizza on Saturday evening.",
                    "Q || When did you stay at home last Sunday? || I stayed at home on Sunday.",
                    "Q || What did you do last night? || I played games.",
                    "T || Pedí una pizza. || I ordered a pizza.",
                    "T || Yo vi películas ayer. || I watched movies yesterday.",
                    "T || Yo visité a mi abuela ayer. || I visited my grandma yesterday."
                  ],
                  "mistakes": [
                    "M || I [order] a pizza yesterday. || orders / ordered* / order || I ordered a pizza yesterday.",
                    "M || I [stay] at home yesterday. || stayed* / stay / stays || I stayed at home yesterday."
                  ]
                }
              ]
            },
            {
              "week": 2,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Last trip activities — Simple Past (1st person); Positive sentences — Vocabulary: Go to, Eat, Buy",
                  "lines": [
                    "Q || What did you do last weekend? || I went to the beach.",
                    "Q || What did you eat at a restaurant? || I ate rice.",
                    "Q || What did you buy at a toy shop? || I bought a toy.",
                    "Q || What did you do on your last vacation? || I went to the beach.",
                    "Q || What did you do yesterday after school? || I ate rice.",
                    "Q || Where did you buy a toy? || I bought a toy at a shop.",
                    "Q || When did you go to the beach? || I went to the beach during vacation.",
                    "Q || What did you do last night? || I ate rice.",
                    "F || I ____ to the beach yesterday. || went || go / goes",
                    "F || I ____ rice yesterday. || ate || eat / eats",
                    "T || Yo fui a la playa. || I went to the beach.",
                    "T || Yo comí arroz. || I ate rice.",
                    "T || Yo compré un juguete. || I bought a toy.",
                    "T || Yo fui a la playa ayer. || I went to the beach yesterday.",
                    "T || Yo fui a la playa el sábado pasado. || I went to the beach last Saturday.",
                    "T || Yo comí arroz ayer. || I ate rice yesterday."
                  ],
                  "mistakes": [
                    "M || I [buy] a toy yesterday. || buy / buys / bought* || I bought a toy yesterday.",
                    "M || I [buy] a toy at a shop yesterday. || buys / bought* / buy || I bought a toy at a shop yesterday."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Last trip activities — Simple Past (1st person); Yes/No questions (Long answers) — Vocabulary: Go to, Eat, Buy, Meet",
                  "lines": [
                    "Q || Did you eat rice? || Yes, I ate rice. / No, I didn't eat rice.",
                    "Q || Did you buy a toy? || Yes, I bought a toy. / No, I didn't buy a toy.",
                    "Q || Did you meet a friend? || Yes, I met a friend. / No, I didn't meet a friend.",
                    "Q || Did you go to the beach? || Yes, I went to the beach. / No, I didn't go to the beach.",
                    "Q || Did you eat rice yesterday? || Yes, I ate rice. / No, I didn't eat rice.",
                    "Q || Did you buy a toy yesterday? || Yes, I bought a toy. / No, I didn't buy a toy.",
                    "Q || What did you do yesterday morning? || I met a friend.",
                    "Q || What did you do last night? || I went to the beach.",
                    "F || I ____ a friend yesterday. || met || meet / meets",
                    "F || I ____ to the beach yesterday. || went || go / goes",
                    "T || Yo fui a la playa. || I went to the beach.",
                    "T || Yo comí arroz. || I ate rice.",
                    "T || Yo compré un juguete. || I bought a toy.",
                    "T || Yo me encontré con un amigo. || I met a friend.",
                    "T || Yo comí arroz ayer. || I ate rice yesterday.",
                    "T || Yo compré un juguete ayer. || I bought a toy yesterday."
                  ],
                  "mistakes": [
                    "M || I [buy] a toy yesterday. || buys / bought* / buy || I bought a toy yesterday.",
                    "M || I [eat] rice yesterday. || ate* / eat / eats || I ate rice yesterday."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Last trip activities — Simple Past (1st person); Wh-questions (What...?) — Vocabulary: Go to, Eat, Buy, Meet, Become friends",
                  "lines": [
                    "Q || What did you buy at a toy shop? || I bought a toy.",
                    "Q || What did you do yesterday afternoon? || I met a friend.",
                    "Q || What did you do on the last family trip? || I became friends with Leo.",
                    "Q || What did you do yesterday morning? || I went to the beach.",
                    "Q || What did you eat at a restaurant? || I ate rice.",
                    "Q || Where did you buy a toy? || I bought a toy at a shop.",
                    "Q || When did you meet a friend? || I met a friend in the afternoon.",
                    "Q || What did you do last night? || I became friends with Leo.",
                    "F || I ____ friends with Leo yesterday. || became || become / becomes",
                    "F || I ____ to the beach yesterday. || went || go / goes",
                    "T || Yo fui a la playa. || I went to the beach.",
                    "T || Yo comí arroz. || I ate rice.",
                    "T || Yo compré un juguete. || I bought a toy.",
                    "T || Yo me encontré con un amigo. || I met a friend.",
                    "T || Yo compré un juguete ayer. || I bought a toy yesterday.",
                    "T || Yo me encontré con un amigo ayer. || I met a friend yesterday."
                  ],
                  "mistakes": [
                    "M || I [eat] rice yesterday. || ate* / eat / eats || I ate rice yesterday.",
                    "M || I [buy] a toy at a shop yesterday. || buy / buys / bought* || I bought a toy at a shop yesterday."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Last trip activities — Simple Past (1st person); Wh-questions (Who... with?) — Vocabulary: Go to, Eat, Buy, Meet, Become friends",
                  "lines": [
                    "Q || Who did you become friends with? || I became friends with Leo.",
                    "Q || Who did you go to the beach with? || I went to the beach with my friends.",
                    "Q || Who did you eat rice with? || I ate rice with my cousin.",
                    "Q || Who did you buy a toy with? || I bought a toy with my brother.",
                    "Q || What did you buy at a toy shop? || I bought a toy.",
                    "Q || Where did you meet a friend? || I met a friend in the park.",
                    "Q || When did you become friends with your best friend? || We became friends last year.",
                    "Q || What did you do last night? || I went to the beach.",
                    "F || I ____ a toy with my brother yesterday. || bought || buy / buys",
                    "F || I ____ a toy yesterday. || bought || buy / buys",
                    "T || Yo fui a la playa. || I went to the beach.",
                    "T || Yo comí arroz. || I ate rice.",
                    "T || Yo compré un juguete. || I bought a toy.",
                    "T || Yo me encontré con un amigo. || I met a friend.",
                    "T || Yo fui a la playa ayer. || I went to the beach yesterday.",
                    "T || Yo fui a la playa el sábado pasado. || I went to the beach last Saturday."
                  ],
                  "mistakes": [
                    "M || I [meet] a friend in the park yesterday. || meet / meets / met* || I met a friend in the park yesterday.",
                    "M || I [become] friends with Leo during vacation yesterday. || becomes / became* / become || I became friends with Leo during vacation yesterday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple Past (1st person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Who... with?) — Vocabulary: buy a toy; go to the beach; eat rice; meet a friend; become friends with Leo",
                  "lines": [
                    "T || Yo compré un juguete. || I bought a toy.",
                    "Q || Did you go to the beach? || Yes, I went to the beach. / No, I didn't go to the beach.",
                    "Q || What did you do yesterday morning? || I went to the beach.",
                    "Q || Who did you buy a toy with? || I bought a toy with my brother.",
                    "Q || What did you do yesterday after school? || I ate rice.",
                    "Q || Did you eat rice yesterday? || Yes, I ate rice. / No, I didn't eat rice.",
                    "Q || What did you eat at a restaurant? || I ate rice.",
                    "Q || What did you buy at a toy shop? || I bought a toy.",
                    "F || I ____ a friend in the afternoon yesterday. || met || meet / meets",
                    "F || I ____ friends with Leo during vacation yesterday. || became || become / becomes",
                    "Q || When did you meet a friend? || I met a friend in the afternoon.",
                    "Q || When did you become friends with your best friend? || We became friends last year.",
                    "Q || What did you do last night? || I ate rice.",
                    "T || Me encontré con un amigo. || I met a friend.",
                    "T || Yo compré un juguete ayer. || I bought a toy yesterday.",
                    "T || Yo fui a la playa ayer. || I went to the beach yesterday."
                  ],
                  "mistakes": [
                    "M || I [meet] a friend yesterday. || meets / met* / meet || I met a friend yesterday.",
                    "M || I [become] friends with Leo yesterday. || became* / become / becomes || I became friends with Leo yesterday."
                  ]
                }
              ]
            },
            {
              "week": 3,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Lazy Day Activities — Simple Past (3rd person); Positive sentences — Vocabulary: Wake up, Take a shower, Try",
                  "lines": [
                    "Q || What did your best friend do last weekend? || She woke up.",
                    "Q || What did your sister do yesterday afternoon? || She took a shower.",
                    "Q || What did your uncle do last Saturday? || He tried a new game.",
                    "Q || What did your teacher do last weekend? || My teacher went shopping.",
                    "Q || What did your mom do after work? || She went shopping.",
                    "Q || Where did your brother try a new game? || He tried a new game at home.",
                    "Q || When did your dad wake up? || He woke up at seven o'clock.",
                    "Q || What did your sister do last night? || She took a shower.",
                    "F || She ____ up yesterday. || woke || wake / wakes",
                    "F || She ____ a shower yesterday. || took || take / takes",
                    "T || Él se despertó. || He woke up.",
                    "T || Él se duchó. || He took a shower.",
                    "T || Ella probó un juego nuevo. || She tried a new game.",
                    "T || Él se despertó ayer. || He woke up yesterday.",
                    "T || Mi hermano se duchó. || My brother took a shower.",
                    "T || Mi hermano se despertó. || My brother woke up."
                  ],
                  "mistakes": [
                    "M || He [try] a new game yesterday. || try / tries / tried* || He tried a new game yesterday.",
                    "M || He [wake] up yesterday. || wakes / woke* / wake || He woke up yesterday."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Lazy Day Activities — Simple Past (3rd person); Yes/No questions (Long answers) — Vocabulary: Wake up, Take a shower, Try, Go shopping",
                  "lines": [
                    "Q || Did your best friend take a shower? || Yes, she took a shower. / No, she didn't take a shower.",
                    "Q || Did your uncle try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
                    "Q || Did your teacher go shopping? || Yes, he went shopping. / No, he didn't go shopping.",
                    "Q || Did your mom wake up? || Yes, she woke up. / No, she didn't wake up.",
                    "Q || Did your brother take a shower yesterday? || Yes, he took a shower. / No, he didn't take a shower.",
                    "Q || Did your dad try a new game yesterday? || Yes, he tried a new game. / No, he didn't try a new game.",
                    "Q || What did your sister do yesterday morning? || She went shopping.",
                    "Q || What did your best friend do last night? || She woke up.",
                    "F || She ____ up yesterday. || woke || wake / wakes",
                    "F || She ____ a new game yesterday. || tried || try / tries",
                    "T || Él se despertó. || He woke up.",
                    "T || Ella se duchó. || She took a shower.",
                    "T || Él probó un juego nuevo. || He tried a new game.",
                    "T || Él fue de compras. || He went shopping.",
                    "T || Mi hermana se duchó. || My sister took a shower.",
                    "T || Mi hermano probó un juego nuevo. || My brother tried a new game."
                  ],
                  "mistakes": [
                    "M || He [go] shopping yesterday. || goes / went* / go || He went shopping yesterday.",
                    "M || He [wake] up yesterday. || woke* / wake / wakes || He woke up yesterday."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Lazy Day Activities — Simple Past (3rd person); Wh-questions (What...?) — Vocabulary: Wake up, Take a shower, Try, Go shopping, Finish",
                  "lines": [
                    "Q || What did your best friend do last weekend? || He tried a new game.",
                    "Q || What did your teacher do yesterday afternoon? || He went shopping.",
                    "Q || What did your best friend do last Saturday? || She finished her homework.",
                    "Q || What did your brother do yesterday morning? || He woke up.",
                    "Q || What did your dad do last weekend? || He took a shower.",
                    "Q || Where did your sister try a new game? || She tried a new game at home.",
                    "Q || When did your best friend go shopping? || She went shopping on Saturday.",
                    "Q || What did your best friend do last night? || She finished her homework.",
                    "F || She ____ her homework yesterday. || finished || finish / finishes",
                    "F || He ____ up yesterday. || woke || wake / wakes",
                    "T || Ella se despertó. || She woke up.",
                    "T || Él se duchó. || He took a shower.",
                    "T || Él probó un juego nuevo. || He tried a new game.",
                    "T || Ella fue de compras. || She went shopping.",
                    "T || Mi hermano se duchó. || My brother took a shower.",
                    "T || Mi hermano probó un juego nuevo. || My brother tried a new game."
                  ],
                  "mistakes": [
                    "M || He [take] a shower yesterday. || took* / take / takes || He took a shower yesterday.",
                    "M || She [try] a new game at home yesterday. || try / tries / tried* || She tried a new game at home yesterday."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Lazy Day Activities — Simple Past (3rd person); Wh-questions (Where...?) — Vocabulary: Wake up, Take a shower, Try, Go shopping, Finish",
                  "lines": [
                    "Q || Where did your teacher go shopping? || He went shopping at the mall.",
                    "Q || Where did your sister finish her homework? || She finished her homework at home.",
                    "Q || Where did your brother wake up? || He woke up at home.",
                    "Q || Where did your dad take a shower? || He took a shower in the bathroom.",
                    "Q || What did your sister do last weekend? || She tried a new game.",
                    "Q || Where did your best friend go shopping? || She went shopping at the mall.",
                    "Q || When did your sister finish her homework? || She finished her homework at five o'clock.",
                    "Q || What did your brother do last night? || He woke up.",
                    "F || He ____ a shower in the bathroom yesterday. || took || take / takes",
                    "F || She ____ a new game yesterday. || tried || try / tries",
                    "T || Él se despertó. || He woke up.",
                    "T || Él se duchó. || He took a shower.",
                    "T || Ella probó un juego nuevo. || She tried a new game.",
                    "T || Ella fue de compras. || She went shopping.",
                    "T || Mi hermano se duchó. || My brother took a shower.",
                    "T || Mi hermana fue de compras. || My sister went shopping."
                  ],
                  "mistakes": [
                    "M || She [go] shopping at the mall yesterday. || go / goes / went* || She went shopping at the mall yesterday.",
                    "M || She [finish] her homework at five o'clock yesterday. || finishes / finished* / finish || She finished her homework at five o'clock yesterday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Lazy Day Activities — Simple Past (3rd person); Wh-questions (Who... with?) — Vocabulary: Wake up, Take a shower, Try, Go shopping, Finish",
                  "lines": [
                    "Q || Who did your mom go shopping with? || She went shopping with my aunt.",
                    "Q || Who did your brother try a new game with? || He tried a new game with his friends.",
                    "Q || Who did your dad go shopping with? || He went shopping with his cousin.",
                    "Q || Who did your best friend finish her homework with? || She finished her homework with her brother.",
                    "Q || What did your best friend do last weekend? || She went shopping.",
                    "Q || Where did your brother finish his homework? || He finished his homework at home.",
                    "Q || When did your cousin wake up? || He woke up at seven o'clock.",
                    "Q || What did your teacher do last night? || He took a shower.",
                    "F || She ____ shopping yesterday. || went || go / goes",
                    "F || He ____ his homework at home yesterday. || finished || finish / finishes",
                    "T || Él se despertó. || He woke up.",
                    "T || Ella se duchó. || She took a shower.",
                    "T || Ella probó un juego nuevo. || She tried a new game.",
                    "T || Ella fue de compras. || She went shopping.",
                    "T || Mi hermana se duchó. || My sister took a shower.",
                    "T || Mi hermana probó un juego nuevo. || My sister tried a new game."
                  ],
                  "mistakes": [
                    "M || He [wake] up at seven o'clock yesterday. || wakes / woke* / wake || He woke up at seven o'clock yesterday.",
                    "M || He [take] a shower yesterday. || took* / take / takes || He took a shower yesterday."
                  ]
                }
              ]
            },
            {
              "week": 4,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Going places (Giving directions) — Simple present (1st person); Positive sentences Yes/No questions (Short answers) — Vocabulary: Right, Left, Straight, Next to",
                  "lines": [
                    "Q || Library: turn right. How do I get to the library? || Turn right.",
                    "Q || Park: turn left. How do I get to the park? || Turn left.",
                    "Q || School: go straight. How do I get to the school? || Go straight.",
                    "Q || Shop: turn right. How do I get to the shop? || Turn right.",
                    "Q || Museum: turn left. How do I get to the museum? || Turn left.",
                    "Q || Cafe: go straight. How do I get to the cafe? || Go straight.",
                    "Q || The library is next to the school. Where is the library? || The library is next to the school.",
                    "Q || The park is next to the museum. Where is the park? || The park is next to the museum.",
                    "F || The library ____ next to the school. || is || am / are",
                    "F || The park ____ next to the museum. || is || am / are",
                    "Q || Complete: Go ____ to the park. (straight) || Go straight to the park.",
                    "Q || Ask for directions to the library. || How do I get to the library?",
                    "T || Gira a la derecha. || Turn right.",
                    "T || Gira a la izquierda. || Turn left.",
                    "H || ➡️ || Guess the hidden direction! || Right",
                    "H || ⬅️ || Guess the hidden direction! || Left"
                  ],
                  "mistakes": [
                    "M || I [is] nine years old. || is / are / am* || I am nine years old.",
                    "M || My name [are] Mia. || am / is* / are || My name is Mia."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Going places (Giving directions) — Simple present (1st person); Yes/No questions (Long answers) — Vocabulary: Right, Left, Straight, Next to, In front of",
                  "lines": [
                    "Q || Library: turn right. Do I turn right to get to the library? || Yes, you turn right.",
                    "Q || Park: turn left. Do I turn right to get to the park? || No, you don't turn right. You turn left.",
                    "Q || School: go straight. Do I go straight to get to the school? || Yes, you go straight.",
                    "Q || Shop: turn right. Do I turn right to get to the shop? || Yes, you turn right.",
                    "Q || Museum: turn left. Do I turn left to get to the museum? || Yes, you turn left.",
                    "Q || Cafe: go straight. Do I turn right to get to the cafe? || No, you don't turn right. You go straight.",
                    "Q || The library is in front of the school. Where is the library? || The library is in front of the school.",
                    "Q || The park is next to the museum. Where is the park? || The park is next to the museum.",
                    "F || The park ____ next to the museum. || is || am / are",
                    "F || I ____ nine years old. || am || is / are",
                    "Q || Complete: Go ____ to the park. (straight) || Go straight to the park.",
                    "Q || Ask for directions to the library. || How do I get to the library?",
                    "T || Gira a la derecha. || Turn right.",
                    "T || Gira a la izquierda. || Turn left.",
                    "H || ➡️ || Guess the hidden direction! || Right",
                    "H || ⬅️ || Guess the hidden direction! || Left"
                  ],
                  "mistakes": [
                    "M || My name [are] Mia. || am / is* / are || My name is Mia.",
                    "M || I [is] from Colombia. || am* / is / are || I am from Colombia."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Going places (Giving directions) — Simple present (1st person); Wh-questions (Where...?) — Vocabulary: Right, Left, Straight, Next to, In front of, Behind",
                  "lines": [
                    "Q || Library: turn right. How do I get to the library? || Turn right.",
                    "Q || Park: turn left. How do I get to the park? || Turn left.",
                    "Q || School: go straight. How do I get to the school? || Go straight.",
                    "Q || Shop: turn right. How do I get to the shop? || Turn right.",
                    "Q || Museum: turn left. How do I get to the museum? || Turn left.",
                    "Q || Cafe: go straight. How do I get to the cafe? || Go straight.",
                    "Q || The library is behind the school. Where is the library? || The library is behind the school.",
                    "Q || The park is next to the museum. Where is the park? || The park is next to the museum.",
                    "F || I ____ nine years old. || am || is / are",
                    "F || My name ____ Mia. || is || are / am",
                    "Q || Complete: Go ____ to the park. (straight) || Go straight to the park.",
                    "Q || Ask for directions to the library. || How do I get to the library?",
                    "T || Gira a la derecha. || Turn right.",
                    "T || Gira a la izquierda. || Turn left.",
                    "H || ➡️ || Guess the hidden direction! || Right",
                    "H || ⬅️ || Guess the hidden direction! || Left"
                  ],
                  "mistakes": [
                    "M || I [is] from Colombia. || am* / is / are || I am from Colombia.",
                    "M || She [are] happy. || are / am / is* || She is happy."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: visit my grandma; go to the beach; eat rice; wake up; right; left; straight; straight; girl; paint a picture; jump; take a nap; pay for a snack; cereal; sing; climb a tree",
                  "lines": [
                    "Q || What did you do last weekend? || I visited my grandma.",
                    "T || Yo visité a mi abuela. || I visited my grandma.",
                    "T || Yo fui a la playa. || I went to the beach.",
                    "Q || What did you eat at a restaurant? || I ate rice.",
                    "Q || What did your best friend do last weekend? || She woke up.",
                    "T || Él se despertó. || He woke up.",
                    "Q || Library: turn right. How do I get to the library? || Turn right.",
                    "Q || Complete: Go ____ to the park. (straight) || Go straight to the park.",
                    "F || She ____ up yesterday. || woke || wake / wakes",
                    "F || He ____ up yesterday. || woke || wake / wakes",
                    "Q || What does a rabbit do in the morning? || It jumps.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "Q || When is your dad going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "T || cereal || cereal",
                    "H || 👧 || Guess the hidden person! || Girl",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint"
                  ],
                  "mistakes": [
                    "M || She [am] a girl. || am / are / is* || She is a girl.",
                    "M || He [paint] a picture. || painting / paints* / paint || He paints a picture."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: watch movies; play games; buy a toy; eat rice; try a new game; take a shower; right; left; straight; directions; dad; dance; walk; take a nap; pay for a snack; water; clean the room; climb a tree",
                  "lines": [
                    "Q || Did you watch movies? || Yes, I did. / No, I didn't.",
                    "T || Yo jugué. || I played games.",
                    "Q || Did you buy a toy? || Yes, I bought a toy. / No, I didn't buy a toy.",
                    "T || Yo comí arroz. || I ate rice.",
                    "Q || Did your uncle try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
                    "T || Ella se duchó. || She took a shower.",
                    "Q || Park: turn left. Do I turn right to get to the park? || No, you don't turn right. You turn left.",
                    "Q || Ask for directions to the library. || How do I get to the library?",
                    "F || She ____. || dances || dance / dancing",
                    "F || It ____. || walks || walk / walking",
                    "Q || What does your dog do after lunch? || It walks.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "Q || What is your best friend going to do in the afternoon? || She is going to pay for a snack.",
                    "Q || What is your brother's favorite drink? || My brother's favorite drink is water.",
                    "H || 💃 || Guess the action! || Dance",
                    "T || Yo jugué ayer. || I played games yesterday."
                  ],
                  "mistakes": [
                    "M || He is [take] a nap. || takes / taking* / take || He is taking a nap.",
                    "M || She is going to [pays] for a snack. || pay* / pays / paying || She is going to pay for a snack."
                  ]
                }
              ]
            },
            {
              "week": 5,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Birthday activities — Simple Past (3rd person); Positive sentences — Vocabulary: Have a party, Sing, Blow out the candles",
                  "lines": [
                    "Q || What did your best friend do last weekend? || He had a party.",
                    "Q || What did your teacher do yesterday afternoon? || He sang.",
                    "Q || What did your mom do on the last family trip? || She blew out the candles.",
                    "Q || What did your brother do on your last vacation? || He had a party.",
                    "Q || What did your dad do yesterday evening? || He had a party.",
                    "Q || Where did your sister blow out the candles? || She blew out the candles at home.",
                    "Q || When did your best friend have a party? || She had a party on her birthday.",
                    "Q || What did your sister do last night? || She sang.",
                    "F || He ____ a party yesterday. || had || have / has",
                    "F || He ____ yesterday. || sang || sing / sings",
                    "T || Ella hizo una fiesta. || She had a party.",
                    "T || Él cantó. || He sang.",
                    "T || Él sopló las velas. || He blew out the candles.",
                    "T || Ella hizo una fiesta ayer. || She had a party yesterday.",
                    "T || Mi hermano cantó. || My brother sang.",
                    "T || Mi hermana hizo una fiesta. || My sister had a party."
                  ],
                  "mistakes": [
                    "M || She [blow] out the candles yesterday. || blow / blows / blew* || She blew out the candles yesterday.",
                    "M || She [blow] out the candles at home yesterday. || blows / blew* / blow || She blew out the candles at home yesterday."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Birthday activities — Simple Past (3rd person); Yes/No questions (Long answers) — Vocabulary: Have a party, Sing, Blow out the candles, Fly away",
                  "lines": [
                    "Q || Did your teacher sing? || Yes, he sang. / No, he didn't sing.",
                    "Q || Did your mom blow out the candles? || Yes, she blew out the candles. / No, she didn't blow out the candles.",
                    "T || ¿El globo se fue volando? || Did the balloon fly away?",
                    "Q || Did your dad have a party? || Yes, he had a party. / No, he didn't have a party.",
                    "Q || Did your sister sing yesterday? || Yes, she sang. / No, she didn't sing.",
                    "Q || Did your best friend blow out the candles yesterday? || Yes, she blew out the candles. / No, she didn't blow out the candles.",
                    "T || El globo se fue volando durante la fiesta. || The balloon flew away during the party.",
                    "Q || What did your brother do last night? || He had a party.",
                    "F || He ____ a party yesterday. || had || have / has",
                    "F || He ____ out the candles yesterday. || blew || blow / blows",
                    "T || Él hizo una fiesta. || He had a party.",
                    "T || Él cantó. || He sang.",
                    "T || Ella sopló las velas. || She blew out the candles.",
                    "T || El globo se alejó volando. || The balloon flew away.",
                    "T || Mi hermano cantó. || My brother sang.",
                    "T || Mi hermana sopló las velas. || My sister blew out the candles."
                  ],
                  "mistakes": [
                    "M || He [sing] yesterday. || sings / sang* / sing || He sang yesterday.",
                    "M || She [blow] out the candles yesterday. || blew* / blow / blows || She blew out the candles yesterday."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Birthday activities — Simple Past (3rd person); Wh-questions (What...?) — Vocabulary: Have a party, Sing, Blow out the candles, Fly away, Get presents",
                  "lines": [
                    "Q || What did your mom do last weekend? || She blew out the candles.",
                    "T || El globo rojo se fue volando ayer. || The red balloon flew away yesterday.",
                    "Q || What did your dad do on the last family trip? || He got presents.",
                    "Q || What did your sister do yesterday morning? || She had a party.",
                    "Q || What did your best friend do last weekend? || She sang.",
                    "Q || Where did your best friend blow out the candles? || She blew out the candles at home.",
                    "Q || A balloon flew away during the birthday party. When did it fly away? || It flew away during the birthday party.",
                    "Q || What did your teacher do last night? || He got presents.",
                    "F || He ____ presents yesterday. || got || get / gets",
                    "F || She ____ a party yesterday. || had || have / has",
                    "T || Él hizo una fiesta. || He had a party.",
                    "T || Ella cantó. || She sang.",
                    "T || Ella sopló las velas. || She blew out the candles.",
                    "T || El globo se alejó volando. || The balloon flew away.",
                    "T || Mi hermana cantó. || My sister sang.",
                    "T || Mi hermana sopló las velas. || My sister blew out the candles."
                  ],
                  "mistakes": [
                    "M || She [sing] yesterday. || sang* / sing / sings || She sang yesterday.",
                    "M || She [blow] out the candles at home yesterday. || blow / blows / blew* || She blew out the candles at home yesterday."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Birthday activities — Simple Past (3rd person); Wh-questions (Why...?) — Vocabulary: Have a party, Sing, Blow out the candles, Fly away, Get presents",
                  "lines": [
                    "Q || The wind was strong at the party. A balloon flew away. Why did it fly away? || It flew away because the wind was strong.",
                    "Q || Why did your dad get presents? || Because it was his birthday.",
                    "Q || Why did your sister have a party? || Because it was her birthday.",
                    "Q || Why did your best friend sing? || Because she was happy.",
                    "Q || What did your best friend do last weekend? || She blew out the candles.",
                    "T || El globo se fue volando hacia el cielo. || The balloon flew away into the sky.",
                    "Q || When did your teacher get presents? || He got presents on his birthday.",
                    "Q || What did your mom do last night? || She had a party.",
                    "F || She ____ a party yesterday. || had || have / has",
                    "F || He ____ presents yesterday. || got || get / gets",
                    "T || Ella hizo una fiesta. || She had a party.",
                    "T || Ella cantó. || She sang.",
                    "T || Ella sopló las velas. || She blew out the candles.",
                    "T || El globo se alejó volando. || The balloon flew away.",
                    "T || Mi hermana cantó. || My sister sang.",
                    "T || El globo se alejó volando ayer. || The balloon flew away yesterday."
                  ],
                  "mistakes": [
                    "M || He [have] a party yesterday. || have / has / had* || He had a party yesterday.",
                    "M || She [sing] yesterday. || sings / sang* / sing || She sang yesterday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple Past (3rd person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Why...?) — Vocabulary: blow out the candles; have a party; sing; fly away; get presents",
                  "lines": [
                    "T || Él sopló las velas. || He blew out the candles.",
                    "T || Ella sopló las velas. || She blew out the candles.",
                    "Q || What did your sister do yesterday morning? || She had a party.",
                    "Q || Why did your best friend sing? || Because she was happy.",
                    "Q || What did your dad do yesterday evening? || He had a party.",
                    "Q || Did your sister sing yesterday? || Yes, she sang. / No, she didn't sing.",
                    "Q || What did your best friend do last weekend? || She sang.",
                    "Q || What did your cousin do last weekend? || She blew out the candles.",
                    "F || She ____ yesterday. || sang || sing / sings",
                    "F || It ____ away yesterday. || flew || fly / flies",
                    "Q || Complete: She ____. (blow out the candles) || She blew out the candles.",
                    "Q || When did your teacher get presents? || He got presents on his birthday.",
                    "Q || What did your sister do last night? || She sang.",
                    "Q || What did your brother do last night? || He had a party.",
                    "T || Mi hermano sopló las velas. || My brother blew out the candles.",
                    "T || Mi hermana hizo una fiesta. || My sister had a party."
                  ],
                  "mistakes": [
                    "M || He [get] presents on his birthday yesterday. || gets / got* / get || He got presents on his birthday yesterday.",
                    "M || He [have] a party yesterday. || had* / have / has || He had a party yesterday."
                  ]
                }
              ]
            },
            {
              "week": 6,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "At the zoo — Simple Past (3rd person); Positive sentences — Vocabulary: Walk around, See, Talk",
                  "lines": [
                    "Q || What did your teacher do last weekend? || He walked around the zoo.",
                    "Q || What did your mom see at the zoo? || She saw a lion.",
                    "Q || What did your brother do on the last family trip? || He talked.",
                    "Q || What did your dad do on your last vacation? || He walked around the zoo.",
                    "Q || What did your sister do yesterday after school? || She saw a lion.",
                    "Q || Where did your best friend talk? || She talked at home.",
                    "Q || When did your cousin walk around the zoo? || She walked around the zoo in the morning.",
                    "Q || What did your brother do last night? || He saw a lion.",
                    "F || He ____ around the zoo yesterday. || walked || walk / walks",
                    "F || She ____ a lion yesterday. || saw || see / sees",
                    "T || Él caminó por el zoológico. || He walked around the zoo.",
                    "T || Él vio un león. || He saw a lion.",
                    "T || Ella habló. || She talked.",
                    "T || Ella caminó por el zoológico. || She walked around the zoo.",
                    "T || Mi hermano caminó por el zoológico. || My brother walked around the zoo.",
                    "T || Mi hermano vio un león. || My brother saw a lion."
                  ],
                  "mistakes": [
                    "M || He [talk] yesterday. || talk / talks / talked* || He talked yesterday.",
                    "M || She [talk] at home yesterday. || talks / talked* / talk || She talked at home yesterday."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "At the zoo — Simple Past (3rd person); Yes/No questions (Long answers) — Vocabulary: Walk around, See, Talk, Take pictures",
                  "lines": [
                    "Q || Did your mom see a lion? || Yes, she saw a lion. / No, she didn't see a lion.",
                    "Q || Did your brother talk? || Yes, he talked. / No, he didn't talk.",
                    "Q || Did your dad take pictures? || Yes, he took pictures. / No, he didn't take pictures.",
                    "Q || Did your sister walk around the zoo? || Yes, she walked around the zoo. / No, she didn't walk around the zoo.",
                    "Q || Did your best friend see a lion yesterday? || Yes, she saw a lion. / No, she didn't see a lion.",
                    "Q || Did your best friend talk yesterday? || Yes, she talked. / No, she didn't talk.",
                    "Q || What did your cousin do yesterday morning? || He took pictures.",
                    "Q || What did your teacher do last night? || He walked around the zoo.",
                    "F || He ____ around the zoo yesterday. || walked || walk / walks",
                    "F || She ____ yesterday. || talked || talk / talks",
                    "T || Él caminó por el zoológico. || He walked around the zoo.",
                    "T || Ella vio un león. || She saw a lion.",
                    "T || Ella habló. || She talked.",
                    "T || Ella tomó fotos. || She took pictures.",
                    "T || Mi hermana vio un león. || My sister saw a lion.",
                    "T || Mi hermana habló. || My sister talked."
                  ],
                  "mistakes": [
                    "M || She [see] a lion yesterday. || sees / saw* / see || She saw a lion yesterday.",
                    "M || She [take] pictures yesterday. || took* / take / takes || She took pictures yesterday."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "At the zoo — Simple Past (3rd person); Wh-questions (What...?) — Vocabulary: Walk around, See, Talk, Take pictures, Drink",
                  "lines": [
                    "Q || What did your brother do last weekend? || He talked.",
                    "Q || What did your dad do yesterday afternoon? || He took pictures.",
                    "Q || What did your sister drink when she was thirsty? || She drank water.",
                    "Q || What did your best friend do yesterday morning? || She walked around the zoo.",
                    "Q || What did your cousin see at the zoo? || She saw a lion.",
                    "Q || Where did your cousin talk? || He talked at home.",
                    "Q || When did your teacher take pictures? || He took pictures on weekends.",
                    "Q || What did your mom do last night? || She drank water.",
                    "F || She ____ water yesterday. || drank || drink / drinks",
                    "F || She ____ around the zoo yesterday. || walked || walk / walks",
                    "T || Ella caminó por el zoológico. || She walked around the zoo.",
                    "T || Ella vio un león. || She saw a lion.",
                    "T || Ella habló. || She talked.",
                    "T || Él tomó fotos. || He took pictures.",
                    "T || Mi hermana habló. || My sister talked.",
                    "T || Mi hermano tomó fotos. || My brother took pictures."
                  ],
                  "mistakes": [
                    "M || She [see] a lion yesterday. || saw* / see / sees || She saw a lion yesterday.",
                    "M || He [talk] at home yesterday. || talk / talks / talked* || He talked at home yesterday."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "At the zoo — Simple Past (3rd person); Wh-questions (Who... with?) — Vocabulary: Walk around, See, Talk, Take pictures, Drink",
                  "lines": [
                    "Q || Who did your dad take pictures with? || He took pictures with his family.",
                    "Q || Who did your sister drink water with? || She drank water with her friends.",
                    "Q || Who did your best friend walk around the zoo with? || She walked around the zoo with her cousin.",
                    "Q || Who did your best friend see a lion with? || She saw a lion with her brother.",
                    "Q || What did your best friend do last weekend? || He talked.",
                    "Q || Where did your teacher take pictures? || He took pictures in the park.",
                    "Q || When did your mom drink water? || She drank water after exercise.",
                    "Q || What did your brother do last night? || He walked around the zoo.",
                    "F || She ____ a lion with her brother yesterday. || saw || see / sees",
                    "F || He ____ yesterday. || talked || talk / talks",
                    "T || Ella caminó por el zoológico. || She walked around the zoo.",
                    "T || Ella vio un león. || She saw a lion.",
                    "T || Él habló. || He talked.",
                    "T || Él tomó fotos. || He took pictures.",
                    "T || Mi hermano tomó fotos. || My brother took pictures.",
                    "T || Mi hermana caminó por el zoológico. || My sister walked around the zoo."
                  ],
                  "mistakes": [
                    "M || He [take] pictures in the park yesterday. || take / takes / took* || He took pictures in the park yesterday.",
                    "M || She [drink] water after exercise yesterday. || drinks / drank* / drink || She drank water after exercise yesterday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — Simple Past (3rd person); Positive sentences; Yes/No questions (Long answers); Wh-questions (What...?); Wh-questions (Who... with?) — Vocabulary: talk; walk around the zoo; see a lion; take pictures; drink water",
                  "lines": [
                    "T || Ella habló. || She talked.",
                    "Q || Did your sister walk around the zoo? || Yes, she walked around the zoo. / No, she didn't walk around the zoo.",
                    "Q || What did your best friend do yesterday morning? || She walked around the zoo.",
                    "T || Él habló. || He talked.",
                    "Q || What did your sister do yesterday after school? || She saw a lion.",
                    "Q || Did your best friend see a lion yesterday? || Yes, she saw a lion. / No, she didn't see a lion.",
                    "Q || What did your cousin see at the zoo? || She saw a lion.",
                    "Q || What did your best friend do last weekend? || He talked.",
                    "F || He ____ pictures on weekends yesterday. || took || take / takes",
                    "F || She ____ water after exercise yesterday. || drank || drink / drinks",
                    "Q || When did your teacher take pictures? || He took pictures on weekends.",
                    "Q || When did your mom drink water? || She drank water after exercise.",
                    "Q || What did your brother do last night? || He saw a lion.",
                    "Q || What did your teacher do last night? || He walked around the zoo.",
                    "T || Mi hermana habló. || My sister talked.",
                    "T || Mi hermana caminó por el zoológico. || My sister walked around the zoo."
                  ],
                  "mistakes": [
                    "M || He [see] a lion yesterday. || sees / saw* / see || He saw a lion yesterday.",
                    "M || He [walk] around the zoo yesterday. || walked* / walk / walks || He walked around the zoo yesterday."
                  ]
                }
              ]
            },
            {
              "week": 7,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Morning activities — Simple Past (3rd person); Positive sentences — Vocabulary: Cook, Clean, Work",
                  "lines": [
                    "Q || What did your mom cook for her family? || She cooked dinner.",
                    "Q || What did your brother do yesterday afternoon? || He cleaned the room.",
                    "Q || What did your dad do on the last family trip? || He worked.",
                    "Q || What did your sister do on your last vacation? || She cooked dinner.",
                    "Q || What did your best friend do yesterday after school? || She cleaned the room.",
                    "Q || Where did your mom work? || She worked in an office.",
                    "Q || When did your best friend cook dinner? || He cooked dinner at six o'clock.",
                    "Q || What did your teacher do last night? || He cleaned the room.",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "F || He ____ the room yesterday. || cleaned || clean / cleans",
                    "T || Él cocinó la cena para su familia anoche. || He cooked dinner for his family last night.",
                    "T || Ella limpió el cuarto con su hermana ayer. || She cleaned the room with her sister yesterday.",
                    "T || Él trabajó hasta las cinco ayer. || He worked until five yesterday.",
                    "T || Ella cocinó la cena para su familia anoche. || She cooked dinner for her family last night.",
                    "T || Mi hermano cocinó la cena con su papá ayer. || My brother cooked dinner with his dad yesterday.",
                    "T || Mi hermana limpió el cuarto el sábado por la mañana. || My sister cleaned the room on Saturday morning."
                  ],
                  "mistakes": [
                    "M || He [work] yesterday. || work / works / worked* || He worked yesterday.",
                    "M || She [clean] the room yesterday. || cleans / cleaned* / clean || She cleaned the room yesterday."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Morning activities — Simple Past (3rd person); Yes/No questions (Long answers) — Vocabulary: Cook, Clean, Work, Call",
                  "lines": [
                    "Q || Did your brother clean the room? || Yes, he cleaned the room. / No, he didn't clean the room.",
                    "Q || Did your mom work? || Yes, she worked. / No, she didn't work.",
                    "Q || Did your sister call her grandma? || Yes, she called her grandma. / No, she didn't call her grandma.",
                    "Q || Did your best friend cook dinner? || Yes, she cooked dinner. / No, she didn't cook dinner.",
                    "Q || Did your cousin clean the room yesterday? || Yes, she cleaned the room. / No, she didn't clean the room.",
                    "Q || Did your mom work yesterday? || Yes, she worked. / No, she didn't work.",
                    "Q || What did your teacher do yesterday morning? || He called his grandma.",
                    "Q || What did your mom do last night? || She cooked dinner.",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "F || He ____ yesterday. || worked || work / works",
                    "T || Ella cocinó la cena con su papá ayer. || She cooked dinner with her dad yesterday.",
                    "T || Ella limpió el cuarto el sábado por la mañana. || She cleaned the room on Saturday morning.",
                    "T || Él trabajó en una oficina ayer por la mañana. || He worked in an office yesterday morning.",
                    "T || Él llamó a su abuela el domingo por la tarde. || He called his grandma on Sunday afternoon.",
                    "T || Mi hermana limpió el cuarto el sábado por la mañana. || My sister cleaned the room on Saturday morning.",
                    "T || Mi hermano trabajó en una oficina ayer por la mañana. || My brother worked in an office yesterday morning."
                  ],
                  "mistakes": [
                    "M || She [clean] the room yesterday. || cleans / cleaned* / clean || She cleaned the room yesterday.",
                    "M || She [work] yesterday. || worked* / work / works || She worked yesterday."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Morning activities — Simple Past (3rd person); Wh-questions (What...?) — Vocabulary: Cook, Clean, Work, Call, Finish",
                  "lines": [
                    "Q || What did your dad do yesterday morning? || He worked in an office.",
                    "Q || What did your sister do yesterday afternoon? || She called her grandma.",
                    "Q || What did your best friend do after school yesterday? || She finished a project with her classmates.",
                    "Q || What did your aunt cook for her family? || She cooked dinner.",
                    "Q || What did your best friend do last weekend? || He cleaned the room.",
                    "Q || Where did your mom work? || She worked in an office.",
                    "Q || When did your mom call her grandma? || She called her grandma in the morning.",
                    "Q || What did your brother do last night? || He finished a project.",
                    "F || She ____ a project yesterday. || finished || finish / finishes",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "T || Ella cocinó la cena después del trabajo. || She cooked dinner after work.",
                    "T || Ella limpió el cuarto antes de la cena. || She cleaned the room before dinner.",
                    "T || Él trabajó en casa después del almuerzo. || He worked at home after lunch.",
                    "T || Él llamó a su abuela para hablar de sus vacaciones. || He called his grandma to talk about his vacation.",
                    "T || Mi hermano trabajó en una oficina ayer por la mañana. || My brother worked in an office yesterday morning.",
                    "T || Mi hermano llamó a su abuela el domingo por la tarde. || My brother called his grandma on Sunday afternoon."
                  ],
                  "mistakes": [
                    "M || He [clean] the room yesterday. || cleaned* / clean / cleans || He cleaned the room yesterday.",
                    "M || She [work] in an office yesterday. || work / works / worked* || She worked in an office yesterday."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Morning activities — Simple Past (3rd person); Wh-questions (Why...?) — Vocabulary: Cook, Clean, Work, Call, Finish",
                  "lines": [
                    "Q || Why did your sister call her grandma? || Because she missed her.",
                    "Q || Why did your best friend finish a project? || Because it was almost ready.",
                    "Q || Why did your aunt cook dinner? || Because her family was hungry.",
                    "Q || Why did your brother clean the room? || Because the room was dirty.",
                    "Q || What did your dad do last weekend? || He worked.",
                    "Q || Where did your mom call her grandma? || She called her grandma at home.",
                    "Q || When did your brother finish a project? || He finished a project before lunch.",
                    "Q || What did your dad do last night? || He cooked dinner.",
                    "F || He ____ dinner yesterday. || cooked || cook / cooks",
                    "F || She ____ a project yesterday. || finished || finish / finishes",
                    "T || Ella cocinó la cena para su familia anoche. || She cooked dinner for her family last night.",
                    "T || Él limpió el cuarto con su hermana ayer. || He cleaned the room with his sister yesterday.",
                    "T || Él trabajó hasta las cinco ayer. || He worked until five yesterday.",
                    "T || Ella llamó a su abuela después de la escuela. || She called her grandma after school.",
                    "T || Mi hermana llamó a su abuela el domingo por la tarde. || My sister called her grandma on Sunday afternoon.",
                    "T || Mi hermana cocinó la cena después del trabajo. || My sister cooked dinner after work."
                  ],
                  "mistakes": [
                    "M || She [cook] dinner yesterday. || cook / cooks / cooked* || She cooked dinner yesterday.",
                    "M || He [clean] the room yesterday. || cleans / cleaned* / clean || He cleaned the room yesterday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Morning activities — Simple Past (3rd person); Wh-questions (What time/When...?) — Vocabulary: Cook, Clean, Work, Call, Finish",
                  "lines": [
                    "Q || What time did your best friend finish a project? || She finished a project at seven o'clock.",
                    "Q || What time did your cousin cook dinner? || She cooked dinner at four o'clock.",
                    "Q || What time did your uncle clean the room? || He cleaned the room at six thirty.",
                    "Q || What time did your mom work? || She worked at eight o'clock.",
                    "Q || What did your mom do last weekend? || She called her grandma.",
                    "Q || Where did your brother finish a project? || He finished a project at home.",
                    "Q || When did your dad cook dinner? || He cooked dinner at six o'clock.",
                    "Q || What did your sister do last night? || She cleaned the room.",
                    "F || She ____ her grandma yesterday. || called || call / calls",
                    "F || He ____ a project at home yesterday. || finished || finish / finishes",
                    "T || Él cocinó la cena con su papá ayer. || He cooked dinner with his dad yesterday.",
                    "T || Él limpió el cuarto el sábado por la mañana. || He cleaned the room on Saturday morning.",
                    "T || Él trabajó en una oficina ayer por la mañana. || He worked in an office yesterday morning.",
                    "T || Él llamó a su abuela el domingo por la tarde. || He called his grandma on Sunday afternoon.",
                    "T || Mi hermano cocinó la cena después del trabajo. || My brother cooked dinner after work.",
                    "T || Mi hermana cocinó la cena para su familia anoche. || My sister cooked dinner for her family last night."
                  ],
                  "mistakes": [
                    "M || He [cook] dinner at six o'clock yesterday. || cooks / cooked* / cook || He cooked dinner at six o'clock yesterday.",
                    "M || She [clean] the room yesterday. || cleaned* / clean / cleans || She cleaned the room yesterday."
                  ]
                }
              ]
            },
            {
              "week": 8,
              "days": [
                {
                  "day": 1,
                  "label": "Day 1",
                  "focus": "Prepositions of time (IN, AT, ON) — N/A; Part I: Explanation video Part II: Positive sentences — Vocabulary: IN, AT, ON",
                  "lines": [
                    "Q || Complete: I play soccer ____ the morning. || I play soccer in the morning.",
                    "Q || Complete: I study ____ seven o'clock. || I study at seven o'clock.",
                    "Q || Complete: I play soccer ____ Monday. || I play soccer on Monday.",
                    "Q || Complete: I study ____ July. || I study in July.",
                    "Q || Complete: I play soccer ____ night. || I play soccer at night.",
                    "Q || Complete: I study ____ Friday. || I study on Friday.",
                    "Q || Complete: I play soccer ____ the afternoon. || I play soccer in the afternoon.",
                    "Q || Complete: I study ____ noon. || I study at noon.",
                    "F || I play soccer ____ Monday. || on || in / at",
                    "F || I wake up ____ seven. || at || in / on",
                    "Q || When do you have English class? || I have English class on Monday.",
                    "T || Leo por la noche. || I read at night.",
                    "T || Juego fútbol el sábado. || I play soccer on Saturday.",
                    "T || Me despierto a las siete. || I wake up at seven o'clock.",
                    "F || I read ____ the morning. || in || at / on",
                    "F || I sleep ____ night. || at || in / on"
                  ],
                  "mistakes": [
                    "M || My birthday is [on] July. || in* / on / at || My birthday is in July.",
                    "M || I read [in] night. || in / on / at* || I read at night."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Prepositions of time (IN, AT, ON) — N/A; Yes/No questions (Long answers) — Vocabulary: IN, AT, ON",
                  "lines": [
                    "Q || Do you play soccer at seven o'clock? || Yes, I play soccer at seven o'clock. / No, I don't play soccer at seven o'clock.",
                    "Q || Do you study on Monday? || Yes, I study on Monday. / No, I don't study on Monday.",
                    "Q || Do you play soccer in July? || Yes, I play soccer in July. / No, I don't play soccer in July.",
                    "Q || Do you study at night? || Yes, I study at night. / No, I don't study at night.",
                    "Q || Do you play soccer on Friday? || Yes, I play soccer on Friday. / No, I don't play soccer on Friday.",
                    "Q || Do you study in the afternoon? || Yes, I study in the afternoon. / No, I don't study in the afternoon.",
                    "Q || Do you play soccer at noon? || Yes, I play soccer at noon. / No, I don't play soccer at noon.",
                    "Q || Do you study in the morning? || Yes, I study in the morning. / No, I don't study in the morning.",
                    "F || I play soccer ____ Monday. || on || in / at",
                    "F || I wake up ____ seven. || at || in / on",
                    "Q || When do you have English class? || I have English class on Monday.",
                    "T || Leo por la noche. || I read at night.",
                    "T || Juego fútbol el sábado. || I play soccer on Saturday.",
                    "T || Me despierto a las siete. || I wake up at seven o'clock.",
                    "F || I read ____ the morning. || in || at / on",
                    "F || I sleep ____ night. || at || in / on"
                  ],
                  "mistakes": [
                    "M || My birthday is [on] July. || on / at / in* || My birthday is in July.",
                    "M || I read [in] night. || on / at* / in || I read at night."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Prepositions of time (IN, AT, ON) — N/A; Wh-questions (What time/When...?) — Vocabulary: IN, AT, ON",
                  "lines": [
                    "Q || Schedule: You play soccer on Monday. When do you play soccer? || I play soccer on Monday.",
                    "Q || Schedule: You study in July. When do you study? || I study in July.",
                    "Q || Schedule: You play soccer at night. What time do you play soccer? || I play soccer at night.",
                    "Q || Schedule: You study on Friday. When do you study? || I study on Friday.",
                    "Q || Schedule: You play soccer in the afternoon. When do you play soccer? || I play soccer in the afternoon.",
                    "Q || Schedule: You study at noon. What time do you study? || I study at noon.",
                    "Q || Schedule: You play soccer in the morning. When do you play soccer? || I play soccer in the morning.",
                    "Q || Schedule: You study at seven o'clock. What time do you study? || I study at seven o'clock.",
                    "F || I play soccer ____ Monday. || on || in / at",
                    "F || I wake up ____ seven. || at || in / on",
                    "Q || When do you have English class? || I have English class on Monday.",
                    "T || Leo por la noche. || I read at night.",
                    "T || Juego fútbol el sábado. || I play soccer on Saturday.",
                    "T || Me despierto a las siete. || I wake up at seven o'clock.",
                    "F || I read ____ the morning. || in || at / on",
                    "F || I sleep ____ night. || at || in / on"
                  ],
                  "mistakes": [
                    "M || My birthday is [on] July. || at / in* / on || My birthday is in July.",
                    "M || I read [in] night. || at* / in / on || I read at night."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: have a party; walk around the zoo; cook dinner; in; on; milk; paint a picture; talk; take a nap; pay for a snack; wake up; seven; Wake up, take a shower, eat, run, play, drink, Sing, paint, dance, read, clean",
                  "lines": [
                    "Q || What did your best friend do last weekend? || He had a party.",
                    "T || Ella hizo una fiesta. || She had a party.",
                    "Q || What did your teacher do last weekend? || He walked around the zoo.",
                    "T || Él caminó por el zoológico. || He walked around the zoo.",
                    "Q || What did your mom cook for her family? || She cooked dinner.",
                    "T || Él cocinó la cena. || He cooked dinner.",
                    "Q || Complete: I play soccer ____ the morning. || I play soccer in the morning.",
                    "Q || When do you have English class? || I have English class on Monday.",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "F || He ____ dinner yesterday. || cooked || cook / cooks",
                    "Q || Where does a parrot talk? || It talks at home.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "Q || When is your best friend going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "T || Ella se despertó. || She woke up.",
                    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
                    "F || I read ____ the morning. || in || at / on"
                  ],
                  "mistakes": [
                    "M || I [plays] soccer in the morning. || plays / playing / play* || I play soccer in the morning.",
                    "M || I [has] English class on Monday. || having / have* / has || I have English class on Monday."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Monthly Evaluation — Previously introduced tenses; Cumulative review of previously introduced structures — Vocabulary: blow out the candles; sing; talk; see a lion; work; clean the room; on; at; Good morning, Good afternoon, Good evening, Good night; eat breakfast; oval; swing; take notes; left; alphabet; wake up",
                  "lines": [
                    "Q || Did your mom blow out the candles? || Yes, she blew out the candles. / No, she didn't blow out the candles.",
                    "T || Él cantó. || He sang.",
                    "Q || Did your brother talk? || Yes, he talked. / No, he didn't talk.",
                    "T || Ella vio un león. || She saw a lion.",
                    "Q || Did your mom work? || Yes, she worked. / No, she didn't work.",
                    "T || Ella limpió el cuarto. || She cleaned the room.",
                    "Q || Do you study on Monday? || Yes, I study on Monday. / No, I don't study on Monday.",
                    "T || Leo por la noche. || I read at night.",
                    "F || My name ____ Leo. || is || am / are",
                    "F || I ____ breakfast. || eat || eats / eating",
                    "Q || Spell the word \"oval\". || O-V-A-L.",
                    "T || Ellos se están meciendo en los columpios. || They are swinging.",
                    "Q || What are you doing while you write in your notebook? || I am taking notes.",
                    "Q || Spell the word \"left\". || L-E-F-T.",
                    "S || green oval:3, rectangle:2 || How many ovals are there? || There are three ovals.",
                    "H || ⬅️ || Guess the hidden direction! || Left"
                  ],
                  "mistakes": [
                    "M || There [am] three ovals. || is / are* / am || There are three ovals.",
                    "M || They are [swing]. || swinging* / swing / swings || They are swinging."
                  ]
                }
              ]
            }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Weekend activities",
            "words": [
              "Visit",
              "Play",
              "Watch movies",
              "Order",
              "Stay at home"
            ]
          },
          {
            "week": 2,
            "category": "Last trip activities",
            "words": [
              "Go to",
              "Eat",
              "Buy",
              "Meet",
              "Become friends"
            ]
          },
          {
            "week": 3,
            "category": "Lazy Day Activities",
            "words": [
              "Wake up",
              "Take a shower",
              "Try",
              "Go shopping",
              "Finish"
            ]
          },
          {
            "week": 4,
            "category": "Going places (Giving directions)",
            "words": [
              "Right",
              "Left",
              "Straight",
              "Next to",
              "In front of",
              "Behind"
            ]
          },
          {
            "week": 5,
            "category": "Birthday activities",
            "words": [
              "Have a party",
              "Sing",
              "Blow out the candles",
              "Fly away",
              "Get presents"
            ]
          },
          {
            "week": 6,
            "category": "At the zoo",
            "words": [
              "Walk around",
              "See",
              "Talk",
              "Take pictures",
              "Drink"
            ]
          },
          {
            "week": 7,
            "category": "Morning activities",
            "words": [
              "Cook",
              "Clean",
              "Work",
              "Call",
              "Finish"
            ]
          },
          {
            "week": 8,
            "category": "Prepositions of time (IN, AT, ON)",
            "words": [
              "IN",
              "AT",
              "ON"
            ]
          }
        ]
      },
      {
        "level": 6,
        "weeks": [
          {
            "week": 1,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Yesterday at... — Past progressive (1st person); Positive sentences; time expressions 6:00 AM, 10:15 AM, 5:45 PM, 7:30 PM — Vocabulary: come, eat, wait",
                "lines": [
                  "Q || What were you doing yesterday at 6:00 AM? || I was sleeping. / I was eating breakfast.",
                  "Q || What were you doing yesterday at 10:15 AM? || I was studying English. / I was waiting for the teacher.",
                  "Q || What were you doing yesterday at 5:45 PM? || I was waiting for my mom. / I was eating a snack.",
                  "Q || What were you doing yesterday at 7:30 PM? || I was eating dinner. / I was watching TV.",
                  "Q || What were you doing yesterday when your English class started? || I was coming home from school. / I was eating a snack.",
                  "Q || Complete: Yesterday at 6:00 AM, I ____ (eat) breakfast. || Yesterday at 6:00 AM, I was eating breakfast.",
                  "Q || Complete: Yesterday at 5:45 PM, I ____ (wait) for the bus. || Yesterday at 5:45 PM, I was waiting for the bus.",
                  "Q || Say the time: 10:15 AM. || It's ten fifteen in the morning. / It's a quarter past ten.",
                  "Q || Say the time: 7:30 PM. || It's seven thirty in the evening. / It's half past seven.",
                  "F || I ____ eating lunch at 12:00 PM. || was || were / am",
                  "F || I was ____ for my dad at 5:45 PM. || waiting || wait / waited",
                  "F || I was ____ to school at 7:00 AM. || coming || come / came",
                  "T || Yo estaba comiendo el desayuno a las 6:00 AM. || I was eating breakfast at 6:00 AM.",
                  "T || Yo estaba esperando a mi mamá. || I was waiting for my mom.",
                  "T || Yo estaba llegando a la escuela a las 7:00 AM. || I was coming to school at 7:00 AM.",
                  "T || Ayer a las 7:30 PM yo estaba comiendo la cena. || Yesterday at 7:30 PM I was eating dinner.",
                  "T || Yo estaba esperando el bus. || I was waiting for the bus.",
                  "H || 🍽️ || Guess the action! || Eat",
                  "H || ⏳ || Guess the action! || Wait",
                  "E || 🕕 || What time is it? || It's six o'clock."
                ],
                "mistakes": [
                  "M || I [were] eating breakfast at 6:00 AM. || was* / were / am || I was eating breakfast at 6:00 AM.",
                  "M || I was [wait] for the bus. || waiting* / wait / waited || I was waiting for the bus."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Yesterday at... — Past progressive (1st person); Yes/No questions (Short answers); Wh-questions (What...?) — Vocabulary: come, eat, wait, do homework",
                "lines": [
                  "Q || Were you sleeping yesterday at 6:00 AM? || Yes, I was. / No, I wasn't.",
                  "Q || Were you doing homework yesterday at 5:45 PM? || Yes, I was. / No, I wasn't.",
                  "Q || Were you eating dinner with your family yesterday at 7:30 PM? || Yes, I was. / No, I wasn't.",
                  "Q || Were you waiting for the bus yesterday at 10:15 AM? || Yes, I was. / No, I wasn't.",
                  "Q || What were you doing yesterday when it was raining? (Use your imagination!) || I was doing my homework. / I was watching TV.",
                  "Q || What were you doing yesterday at lunchtime? || I was eating lunch with my family. / I was waiting in line at the cafeteria.",
                  "Q || What were you doing last night before bed? || I was doing my homework. / I was eating a snack.",
                  "Q || Ask your coach what he or she was doing yesterday at 7:30 PM. || What were you doing yesterday at 7:30 PM?",
                  "Q || Ask a classmate if he or she was sleeping yesterday at 6:00 AM. || Were you sleeping yesterday at 6:00 AM?",
                  "F || ____ you doing homework at 5:45 PM? || Were || Was / Are",
                  "F || Yes, I ____. (short answer) || was || were / am",
                  "F || I was ____ my homework. || doing || do / did",
                  "T || ¿Estabas durmiendo ayer a las 6:00 AM? || Were you sleeping yesterday at 6:00 AM?",
                  "T || Sí, estaba. || Yes, I was.",
                  "T || No, no estaba. || No, I wasn't.",
                  "T || Yo estaba haciendo mi tarea a las 5:45 PM. || I was doing my homework at 5:45 PM.",
                  "T || ¿Qué estabas haciendo ayer a las 10:15 AM? || What were you doing yesterday at 10:15 AM?",
                  "H || 📝 || Guess the action! || Do homework",
                  "E || 🕥 || What time is it? || It's ten thirty.",
                  "E || 😴 🕕 || What were you doing yesterday at 6:00 AM? || I was sleeping."
                ],
                "mistakes": [
                  "M || [Was] you eating dinner at 7:30 PM? || Was / Were* / Are || Were you eating dinner at 7:30 PM?",
                  "M || Yes, I [were]. || was* / were / am || Yes, I was."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Yesterday at... — Past progressive (3rd person); Positive sentences — Vocabulary: come, eat, wait, do homework, study",
                "lines": [
                  "Q || What was your mom doing yesterday at 6:00 AM? || She was cooking breakfast. / She was sleeping.",
                  "Q || What was your dad doing yesterday at 7:30 PM when you got home? || He was eating dinner. / He was watching TV.",
                  "Q || What was your best friend doing yesterday at 10:15 AM? || He was studying at school. / She was waiting for the teacher.",
                  "Q || What was your grandpa doing yesterday at 5:45 PM? || He was waiting for the bus. / He was eating a snack.",
                  "Q || What was Messi doing yesterday at 10:15 AM? (Use your imagination!) || He was playing soccer. / He was eating breakfast.",
                  "Q || What was your cousin doing yesterday when you called him or her? (Use your imagination!) || He was doing homework. / She was eating a snack.",
                  "Q || Complete: Yesterday at 7:30 PM, my aunt ____ (eat) dinner. || Yesterday at 7:30 PM, my aunt was eating dinner.",
                  "Q || Complete: Yesterday at 10:15 AM, my teacher ____ (study) with us. || Yesterday at 10:15 AM, my teacher was studying with us.",
                  "F || She ____ studying at 10:15 AM. || was || were / is",
                  "F || He was ____ for his mom. || waiting || wait / waits",
                  "F || My dad ____ eating lunch at 12:30 PM. || was || were / are",
                  "T || Ella estaba estudiando a las 10:15 AM. || She was studying at 10:15 AM.",
                  "T || Él estaba esperando a su papá. || He was waiting for his dad.",
                  "T || Mi mamá estaba comiendo la cena a las 7:30 PM. || My mom was eating dinner at 7:30 PM.",
                  "T || Mi mejor amigo estaba llegando a la escuela. || My best friend was coming to school.",
                  "T || Mi prima estaba haciendo su tarea ayer a las 5:45 PM. || My cousin was doing her homework yesterday at 5:45 PM.",
                  "H || 📚 || Guess the action! || Study",
                  "E || 👩‍🍳🍳 🕕 || What was she doing yesterday at 6:00 AM? || She was cooking breakfast.",
                  "E || 👦📚 🕙 || What was he doing yesterday at 10:15 AM? || He was studying.",
                  "E || 🕠 || What time is it? || It's five thirty."
                ],
                "mistakes": [
                  "M || She [were] studying English. || was* / were / is || She was studying English.",
                  "M || He was [eat] lunch. || eating* / eat / ate || He was eating lunch."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Yesterday at... — Past progressive (3rd person); Yes/No questions (Short answers); Wh-questions (What...?) — Vocabulary Review",
                "lines": [
                  "Q || Was your mom sleeping yesterday at 6:00 AM? || Yes, she was. / No, she wasn't.",
                  "Q || Was your dad working yesterday at 10:15 AM? || Yes, he was. / No, he wasn't.",
                  "Q || Was your best friend doing homework yesterday at 5:45 PM? || Yes, he was. / No, she wasn't.",
                  "Q || Was your neighbor playing music yesterday at 7:30 PM? (Use your imagination!) || Yes, he was. / No, she wasn't.",
                  "Q || Was Shakira singing yesterday at 7:30 PM? (Use your imagination!) || Yes, she was. / No, she wasn't.",
                  "Q || What was your grandma doing yesterday when you visited her? (Use your imagination!) || She was cooking. / She was waiting for me.",
                  "Q || What was your uncle doing yesterday when it was raining? (Use your imagination!) || He was eating dinner. / He was studying.",
                  "Q || Make a question: your sister / eat a snack / yesterday at 5:45 PM? || Was your sister eating a snack yesterday at 5:45 PM?",
                  "F || ____ she waiting for the bus? || Was || Were / Is",
                  "F || No, he ____. (short answer) || wasn't || weren't / isn't",
                  "F || My best friend was ____ English at 10:15 AM. || studying || study / studies",
                  "T || ¿Estaba tu mamá cocinando ayer a las 6:00 AM? || Was your mom cooking yesterday at 6:00 AM?",
                  "T || Sí, ella estaba. || Yes, she was.",
                  "T || No, él no estaba. || No, he wasn't.",
                  "T || ¿Qué estaba haciendo tu papá ayer a las 7:30 PM? || What was your dad doing yesterday at 7:30 PM?",
                  "T || Mi mejor amiga estaba estudiando a las 5:45 PM. || My best friend was studying at 5:45 PM.",
                  "H || 👨‍💻 || Guess the action! || Work",
                  "E || 👨‍💻 🕙 || Was he working yesterday at 10:15 AM? || Yes, he was.",
                  "E || 👧🍝 🕢 || What was she doing yesterday at 7:30 PM? || She was eating dinner.",
                  "E || 👨🚌⏳ || What was he doing yesterday at 5:45 PM? || He was waiting for the bus."
                ],
                "mistakes": [
                  "M || [Were] she sleeping at 6:00 AM? || Was* / Were / Is || Was she sleeping at 6:00 AM?",
                  "M || No, she [weren't]. || wasn't* / weren't / isn't || No, she wasn't."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Past progressive (1st & 3rd person) — Vocabulary: come, eat, wait, do homework, study",
                "lines": [
                  "Q || What were you doing last night at 9:00 PM? || I was sleeping. / I was watching TV.",
                  "Q || What was your mom doing yesterday at 10:15 AM? || She was working. / She was cooking.",
                  "Q || Were you eating breakfast yesterday at 6:00 AM? || Yes, I was. / No, I wasn't.",
                  "Q || Was your dad waiting for you yesterday at 5:45 PM when school finished? || Yes, he was. / No, he wasn't.",
                  "Q || What was your best friend doing yesterday at 7:30 PM? || He was doing his homework. / She was eating dinner.",
                  "Q || What were you doing yesterday at 3:00 PM when you were tired? (Use your imagination!) || I was eating a snack. / I was waiting for my mom.",
                  "Q || Complete: My sister ____ (wait) for the bus at 6:30 AM. || My sister was waiting for the bus at 6:30 AM.",
                  "Q || Complete: I ____ (come) home at 5:45 PM. || I was coming home at 5:45 PM.",
                  "Q || Say the time: 5:45 PM. || It's five forty-five in the evening. / It's a quarter to six.",
                  "Q || Tell me two things you were doing yesterday at 7:30 PM. || I was eating dinner and talking to my mom.",
                  "F || You ____ sleeping at 6:00 AM. || were || was / are",
                  "F || ____ you doing homework yesterday? || Were || Was / Did",
                  "F || She was ____ home at 5:45 PM. || coming || come / comes",
                  "T || Yo estaba durmiendo a las 9:00 PM. || I was sleeping at 9:00 PM.",
                  "T || Mi papá estaba trabajando a las 10:15 AM. || My dad was working at 10:15 AM.",
                  "T || ¿Estabas comiendo ayer a las 7:30 PM? || Were you eating yesterday at 7:30 PM?",
                  "T || Ella no estaba estudiando. || She wasn't studying.",
                  "T || ¿Qué estaba haciendo tu abuelo ayer a las 6:00 AM? || What was your grandpa doing yesterday at 6:00 AM?",
                  "H || 🚌🧍 || Guess the action! || Wait for the bus",
                  "E || 🕖 || What time is it? || It's seven o'clock."
                ],
                "mistakes": [
                  "M || What [was] you doing yesterday at 7:30 PM? || was / were* / are || What were you doing yesterday at 7:30 PM?",
                  "M || My mom was [cook] dinner. || cooking* / cook / cooked || My mom was cooking dinner."
                ]
              }
            ]
          },
          {
            "week": 2,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Parallel actions — Past progressive (3rd person); Positive sentences; parallel actions using WHILE — Vocabulary: Draw, Listen to music, Eat, Drink",
                "lines": [
                  "Q || What were your classmates doing yesterday at school? || They were drawing. / They were listening to music.",
                  "Q || What was your best friend doing while you were drawing? || He was listening to music. / She was eating a snack.",
                  "Q || What were you doing while your teacher was talking? || I was taking notes. / I was listening.",
                  "Q || What was your mom doing while you were eating breakfast? || She was drinking coffee. / She was listening to the radio.",
                  "Q || What was your dad doing while your mom was cooking? || He was listening to music. / He was drinking juice.",
                  "Q || Complete: My friends ____ (draw) while I ____ (eat). || My friends were drawing while I was eating.",
                  "Q || Complete: She was drinking juice while he ____ (listen) to music. || She was drinking juice while he was listening to music.",
                  "Q || Make a sentence with WHILE: my brother / play / I / draw. || My brother was playing while I was drawing.",
                  "F || They ____ drawing at school. || were || was / are",
                  "F || I was eating while my sister ____ drinking juice. || was || were / is",
                  "F || She was ____ to music. || listening || listen / listens",
                  "T || Ellos estaban dibujando en la escuela. || They were drawing at school.",
                  "T || Ella estaba escuchando música mientras él estaba comiendo. || She was listening to music while he was eating.",
                  "T || Mi mamá estaba tomando café mientras yo estaba desayunando. || My mom was drinking coffee while I was eating breakfast.",
                  "T || Mis amigos estaban jugando. || My friends were playing.",
                  "T || Yo estaba dibujando mientras mi hermano estaba escuchando música. || I was drawing while my brother was listening to music.",
                  "H || 🎨✏️ || Guess the action! || Draw",
                  "H || 🎧 || Guess the action! || Listen to music",
                  "E || 👧🧃 👦🎧 || What were they doing? || She was drinking juice while he was listening to music.",
                  "E || 👦👧 ✏️🎨 || What were they doing at school? || They were drawing."
                ],
                "mistakes": [
                  "M || They [was] drawing at school. || were* / was / are || They were drawing at school.",
                  "M || She was [listen] to music while he was eating. || listening* / listen / listened || She was listening to music while he was eating."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Parallel actions — Past progressive (3rd person); Yes/No questions (Short answers) — Vocabulary: Draw, Listen to music, Eat, Drink, Play",
                "lines": [
                  "Q || Were your classmates drawing yesterday during art class? || Yes, they were. / No, they weren't.",
                  "Q || Was your best friend listening to music while you were studying for the test? || Yes, he was. / No, she wasn't.",
                  "Q || Were your friends playing while you were eating lunch in the cafeteria? || Yes, they were. / No, they weren't.",
                  "Q || Was your grandma drinking tea while you were doing homework at her house? (Use your imagination!) || Yes, she was. / No, she wasn't.",
                  "Q || Were you drawing while your teacher was explaining the lesson? || No, I wasn't. / Yes, I was.",
                  "Q || Was Messi playing soccer while his fans were singing? (Use your imagination!) || Yes, he was. / No, he wasn't.",
                  "Q || Make a question: your cousins / play / in the garden / while you / eat? || Were your cousins playing in the garden while you were eating?",
                  "Q || Make a question: your dad / drink coffee / while you / eat breakfast? || Was your dad drinking coffee while you were eating breakfast?",
                  "F || ____ they playing at school? || Were || Was / Are",
                  "F || Yes, they ____. (short answer) || were || was / are",
                  "F || Was she eating ____ he was drawing? || while || during / and",
                  "T || ¿Estaban ellos jugando ayer en la escuela? || Were they playing yesterday at school?",
                  "T || Sí, ellos estaban. || Yes, they were.",
                  "T || No, ellos no estaban. || No, they weren't.",
                  "T || ¿Estaba ella dibujando mientras tú estabas comiendo? || Was she drawing while you were eating?",
                  "T || Ellos estaban jugando mientras la profesora estaba hablando. || They were playing while the teacher was talking.",
                  "H || ⚽🎮 || Guess the action! || Play",
                  "E || 👦👧⚽ || Were they playing? || Yes, they were.",
                  "E || 👩🎧 👨🍔 || Was she eating while he was listening to music? || No, she wasn't. She was listening to music while he was eating.",
                  "E || 🧒🧒📚 || Were they drawing? || No, they weren't. They were studying."
                ],
                "mistakes": [
                  "M || [Was] they playing at school? || Was / Were* / Did || Were they playing at school?",
                  "M || No, they [wasn't]. || weren't* / wasn't / aren't || No, they weren't."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Parallel actions — Past progressive (3rd person); Wh-questions (What/Where...?) — Vocabulary: Draw, Listen to music, Eat, Drink, Play, Fly",
                "lines": [
                  "Q || What were your friends doing at the park while you were flying a kite? (Use your imagination!) || They were playing soccer. / They were eating ice cream.",
                  "Q || Where were your classmates playing yesterday during the break? || They were playing in the playground. / They were playing in the gym.",
                  "Q || Where was your mom drinking coffee this morning while you were getting ready? || She was drinking coffee in the kitchen. / She was drinking coffee in the car.",
                  "Q || What was your dad doing while you were playing video games? || He was listening to music. / He was drawing with my little sister.",
                  "Q || Where were you eating lunch yesterday while your friends were playing? || I was eating lunch in the cafeteria. / I was eating lunch at home.",
                  "Q || What were your cousins doing at your aunt's house while she was cooking? (Use your imagination!) || They were drawing. / They were playing.",
                  "Q || Complete: They ____ (fly) a kite in the park while we ____ (eat). || They were flying a kite in the park while we were eating.",
                  "Q || Make a sentence with WHILE: my friends / play soccer / I / drink water. || My friends were playing soccer while I was drinking water.",
                  "F || Where ____ they playing? || were || was / are",
                  "F || They were ____ a kite in the park. || flying || fly / flew",
                  "F || We were eating ____ the kitchen. || in || on / at",
                  "T || Ellos estaban volando una cometa en el parque. || They were flying a kite in the park.",
                  "T || ¿Dónde estaban jugando tus amigos? || Where were your friends playing?",
                  "T || ¿Qué estaban haciendo ellos en la casa? || What were they doing at home?",
                  "T || Nosotros estábamos comiendo mientras ellos estaban jugando. || We were eating while they were playing.",
                  "T || Mi hermana estaba dibujando en su cuarto. || My sister was drawing in her room.",
                  "H || 🪁 || Guess the action! || Fly a kite",
                  "E || 🧒🧒🪁🌳 || What were they doing at the park? || They were flying a kite.",
                  "E || 👧👦🍕🏠 || Where were they eating pizza? || They were eating pizza at home.",
                  "E || 👩🍵 👨🎧 || What were they doing at home? || She was drinking tea while he was listening to music."
                ],
                "mistakes": [
                  "M || Where [was] they playing? || were* / was / are || Where were they playing?",
                  "M || They were [fly] a kite. || flying* / fly / flies || They were flying a kite."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Parallel actions — Past progressive (3rd person); Wh-questions (Who...?) — Vocabulary Review",
                "lines": [
                  "Q || Who was drawing while you were eating lunch yesterday? || My best friend was drawing. / My classmate was drawing.",
                  "Q || Who was listening to music at home last night while you were sleeping? (Use your imagination!) || My brother was listening to music.",
                  "Q || Who was playing with you yesterday during the break? || My classmates were playing with me.",
                  "Q || Who was drinking coffee at 6:00 AM in your house while you were still in bed? || My dad was drinking coffee. / My grandma was drinking coffee.",
                  "Q || Who was flying a kite at the park while you were playing soccer? (Use your imagination!) || My cousins were flying a kite.",
                  "Q || Who was cooking while you were watching TV last Sunday? || My mom was cooking. / My uncle was cooking.",
                  "Q || Make a question with WHO: eat pizza / yesterday at 7:30 PM? || Who was eating pizza yesterday at 7:30 PM?",
                  "Q || Tell me what you and your family were doing yesterday at 8:00 PM. || I was doing homework while my parents were watching TV.",
                  "F || Who ____ playing soccer? || was || were / is",
                  "F || My parents ____ watching TV while I was studying. || were || was / are",
                  "F || Who was ____ coffee? || drinking || drink / drinks",
                  "T || ¿Quién estaba dibujando? || Who was drawing?",
                  "T || ¿Quién estaba jugando contigo ayer? || Who was playing with you yesterday?",
                  "T || Mi hermano estaba escuchando música. || My brother was listening to music.",
                  "T || Mis padres estaban tomando café. || My parents were drinking coffee.",
                  "T || ¿Quién estaba volando una cometa en el parque? || Who was flying a kite at the park?",
                  "H || 🥤 || Guess the action! || Drink",
                  "E || 👨‍🍳🍲 👧📺 || Who was cooking? || The man was cooking. / He was cooking while she was watching TV.",
                  "E || 👦🎧 👧✏️ || Who was drawing? || The girl was drawing. / She was drawing.",
                  "E || 🧒🧒⚽ 👩📱 || Who was playing soccer? || The kids were playing soccer. / They were playing soccer."
                ],
                "mistakes": [
                  "M || Who [were] drawing? || was* / were / is || Who was drawing?",
                  "M || My parents [was] watching TV. || were* / was / are || My parents were watching TV."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Past progressive (3rd person), parallel actions with WHILE — Vocabulary: Draw, Listen to music, Eat, Drink, Play, Fly",
                "lines": [
                  "Q || What were your friends doing yesterday at school while you were in the bathroom? (Use your imagination!) || They were playing and drawing.",
                  "Q || Were your classmates listening to music in class yesterday? || No, they weren't. / Yes, they were.",
                  "Q || What was your dad doing while your mom was drinking coffee this morning? || He was eating breakfast. / He was listening to the news.",
                  "Q || Where were you playing yesterday afternoon while it was sunny? || I was playing at the park. / I was playing in the garden.",
                  "Q || Who was eating ice cream yesterday at 5:45 PM? (Use your imagination!) || My sister was eating ice cream.",
                  "Q || Were you flying a kite last Sunday while your parents were having a picnic? (Use your imagination!) || No, I wasn't. / Yes, I was.",
                  "Q || Complete: My friends ____ (listen) to music while I ____ (draw). || My friends were listening to music while I was drawing.",
                  "Q || Make a sentence with WHILE: my teacher / talk / the students / draw. || My teacher was talking while the students were drawing.",
                  "Q || What was Shakira doing while her fans were singing? (Use your imagination!) || She was dancing.",
                  "Q || Tell me what your family was doing last night at 8:00 PM. || My mom was cooking while my dad was listening to music.",
                  "F || What ____ they doing at school? || were || was / are",
                  "F || He was drinking juice ____ she was drawing. || while || during / after",
                  "F || They were ____ at the park. || playing || play / played",
                  "T || Ellos estaban escuchando música. || They were listening to music.",
                  "T || ¿Dónde estaban ellos comiendo? || Where were they eating?",
                  "T || Ella estaba tomando jugo mientras él estaba dibujando. || She was drinking juice while he was drawing.",
                  "T || ¿Quién estaba jugando en el parque? || Who was playing at the park?",
                  "T || Los estudiantes estaban dibujando mientras la profesora estaba hablando. || The students were drawing while the teacher was talking.",
                  "H || 🧃 || Guess the action! || Drink juice",
                  "E || 👧🪁 👦🍦 || What were they doing at the park? || She was flying a kite while he was eating ice cream."
                ],
                "mistakes": [
                  "M || He [were] playing while she was drawing. || was* / were / is || He was playing while she was drawing.",
                  "M || They were [drink] juice. || drinking* / drink / drank || They were drinking juice."
                ]
              }
            ]
          },
          {
            "week": 3,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Interrupted actions — Simple Past & Past Progressive (3rd person); Positive sentences; interrupted actions using WHEN — Vocabulary: Sleep, Ring, Watch TV, Knock",
                "lines": [
                  "Q || What happened last night while your dad was sleeping? (Use your imagination!) || The phone rang. / Someone knocked on the door.",
                  "Q || What was your mom doing when the phone rang? || She was watching TV. / She was sleeping.",
                  "Q || What happened while you were watching TV last night? (Use your imagination!) || Someone knocked on the door. / The phone rang.",
                  "Q || What was your sister doing when someone knocked on the door? || She was sleeping. / She was doing homework.",
                  "Q || Complete: My brother ____ (sleep) when the phone ____ (ring). || My brother was sleeping when the phone rang.",
                  "Q || Complete: She was watching TV when someone ____ (knock) on the door. || She was watching TV when someone knocked on the door.",
                  "Q || Make a sentence with WHEN: he / watch TV / the phone / ring. || He was watching TV when the phone rang.",
                  "Q || Make a sentence with WHEN: she / sleep / someone / knock on the door. || She was sleeping when someone knocked on the door.",
                  "F || My mom was sleeping ____ the phone rang. || when || while / because",
                  "F || He was watching TV when someone ____ on the door. || knocked || knocking / knocks",
                  "F || The phone ____ while she was sleeping. || rang || ring / ringing",
                  "T || Mi papá estaba durmiendo cuando el teléfono sonó. || My dad was sleeping when the phone rang.",
                  "T || Ella estaba viendo televisión cuando alguien tocó la puerta. || She was watching TV when someone knocked on the door.",
                  "T || El teléfono sonó. || The phone rang.",
                  "T || Alguien tocó la puerta. || Someone knocked on the door.",
                  "T || Mi hermano estaba durmiendo. || My brother was sleeping.",
                  "H || 📺🛋️ || Guess the action! || Watch TV",
                  "H || 📞🔔 || Guess the action! || Ring",
                  "E || 👨😴 📞🔔 || What happened? || He was sleeping when the phone rang.",
                  "E || 👩📺 🚪✊ || What happened? || She was watching TV when someone knocked on the door."
                ],
                "mistakes": [
                  "M || She was sleeping when the phone [ring]. || rang* / ring / ringing || She was sleeping when the phone rang.",
                  "M || He was [watch] TV when someone knocked on the door. || watching* / watch / watched || He was watching TV when someone knocked on the door."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Interrupted actions — Simple Past & Past Progressive (3rd person); Yes/No questions (Long answers) — Vocabulary: Sleep, Ring, Watch TV, Knock, Cry",
                "lines": [
                  "Q || Was your mom sleeping when the phone rang last night? || Yes, she was sleeping when the phone rang. / No, she was watching TV when the phone rang.",
                  "Q || Was your little brother or cousin crying when you got home tired yesterday? (Use your imagination!) || Yes, he was crying when I got home. / No, he wasn't crying.",
                  "Q || Was your dad watching TV when the pizza delivery knocked on the door? (Use your imagination!) || Yes, he was watching TV when the pizza delivery knocked on the door. / No, he wasn't.",
                  "Q || Were you sleeping when your mom called you for breakfast this morning? || Yes, I was sleeping when my mom called me. / No, I wasn't.",
                  "Q || Was your teacher talking when the bell rang? || Yes, she was talking when the bell rang. / No, he wasn't.",
                  "Q || Was Messi playing when it started to rain? (Use your imagination!) || Yes, he was playing when it started to rain. / No, he wasn't.",
                  "Q || Make a question: your grandma / sleep / when the phone rang? || Was your grandma sleeping when the phone rang?",
                  "Q || Make a question: the baby / cry / when you woke up? || Was the baby crying when you woke up?",
                  "F || ____ he sleeping when the phone rang? || Was || Were / Did",
                  "F || Yes, she was watching TV when someone ____ on the door. || knocked || knock / knocking",
                  "F || The baby ____ crying when I got home. || was || were / did",
                  "T || ¿Estaba ella durmiendo cuando el teléfono sonó? || Was she sleeping when the phone rang?",
                  "T || Sí, ella estaba durmiendo cuando el teléfono sonó. || Yes, she was sleeping when the phone rang.",
                  "T || El bebé estaba llorando cuando llegué a casa. || The baby was crying when I got home.",
                  "T || No, él no estaba viendo televisión. || No, he wasn't watching TV.",
                  "T || ¿Estaba tu papá durmiendo cuando alguien tocó la puerta? || Was your dad sleeping when someone knocked on the door?",
                  "H || 👶😭 || Guess the action! || Cry",
                  "E || 👶😭 🚪✊ || Was the baby crying when someone knocked on the door? || Yes, the baby was crying when someone knocked on the door.",
                  "E || 👨📺 📞🔔 || Was he sleeping when the phone rang? || No, he wasn't. He was watching TV when the phone rang.",
                  "E || 👧😴 🔔 || What happened? || She was sleeping when the bell rang."
                ],
                "mistakes": [
                  "M || [Were] she sleeping when the phone rang? || Was* / Were / Did || Was she sleeping when the phone rang?",
                  "M || The baby was [cry] when I got home. || crying* / cry / cried || The baby was crying when I got home."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Interrupted actions — Simple Past & Past Progressive (3rd person); Wh-questions (What...?) — Vocabulary: Sleep, Ring, Watch TV, Knock, Cry, Bark",
                "lines": [
                  "Q || What was your dog doing when you got home yesterday? (Use your imagination if you don't have a dog!) || It was barking. / It was sleeping.",
                  "Q || What happened while your family was sleeping last night? (Use your imagination!) || A dog barked. / The phone rang.",
                  "Q || What was your mom doing when you knocked on her door because you were hungry? || She was sleeping. / She was watching TV.",
                  "Q || What was your best friend doing when the teacher called his or her name? || He was drawing. / She was talking.",
                  "Q || What did your dad do when the phone rang during dinner? || He answered the phone. / He didn't answer.",
                  "Q || What did you do when the neighbor's dog barked last night? (Use your imagination!) || I looked out the window. / I covered my ears.",
                  "Q || Complete: The dog ____ (bark) while I ____ (sleep). || The dog barked while I was sleeping.",
                  "Q || Make a sentence with WHEN: the baby / cry / my mom / come home. || The baby was crying when my mom came home.",
                  "F || What ____ she doing when the dog barked? || was || were / did",
                  "F || The dog ____ when someone knocked on the door. || barked || barking / barks",
                  "F || My mom ____ cooking when I got home. || was || were / is",
                  "T || ¿Qué estaba haciendo ella cuando el perro ladró? || What was she doing when the dog barked?",
                  "T || El perro ladró cuando alguien tocó la puerta. || The dog barked when someone knocked on the door.",
                  "T || ¿Qué pasó anoche? || What happened last night?",
                  "T || Mi papá contestó el teléfono. || My dad answered the phone.",
                  "T || Él estaba durmiendo cuando el perro ladró. || He was sleeping when the dog barked.",
                  "H || 🐕💢 || Guess the action! || Bark",
                  "E || 🐕 🚪✊ || What did the dog do when someone knocked on the door? || It barked.",
                  "E || 👩😴 🐕💢 || What was she doing when the dog barked? || She was sleeping.",
                  "E || 👦📺 👶😭 || What was he doing when the baby cried? || He was watching TV."
                ],
                "mistakes": [
                  "M || What [were] he doing when the phone rang? || was* / were / did || What was he doing when the phone rang?",
                  "M || The dog [bark] when I got home. || barked* / bark / barking || The dog barked when I got home."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Interrupted actions — Simple Past & Past Progressive (3rd person); Wh-questions (Where...?); prepositions of place review — Vocabulary Review",
                "lines": [
                  "Q || Where was your mom sleeping when the phone rang? || She was sleeping in her bedroom. / She was sleeping on the sofa.",
                  "Q || Where were you when the dog barked last night? (Use your imagination!) || I was in the living room. / I was in bed.",
                  "Q || Where was your dad watching TV when someone knocked on the door? || He was watching TV in the living room.",
                  "Q || Where was your brother when the baby started crying? (Use your imagination!) || He was in the kitchen. / He was in the garden.",
                  "Q || Where was the dog when it barked at the mailman? (Use your imagination!) || It was in the garden. / It was behind the door.",
                  "Q || Where was your teacher when the bell rang? || She was in front of the class. / He was next to the door.",
                  "Q || Make a question with WHERE: your grandpa / sleep / when the phone rang? || Where was your grandpa sleeping when the phone rang?",
                  "Q || Complete: My cat ____ (sleep) on the sofa when the dog ____ (bark). || My cat was sleeping on the sofa when the dog barked.",
                  "F || Where ____ you when the phone rang? || were || was / did",
                  "F || She was sleeping ____ her bedroom. || in || on / at",
                  "F || The dog was ____ the door when it barked. || behind || between / under",
                  "T || ¿Dónde estabas tú cuando el perro ladró? || Where were you when the dog barked?",
                  "T || Ella estaba durmiendo en su cuarto. || She was sleeping in her bedroom.",
                  "T || Él estaba viendo televisión en la sala cuando el teléfono sonó. || He was watching TV in the living room when the phone rang.",
                  "T || El perro estaba detrás de la puerta. || The dog was behind the door.",
                  "T || ¿Dónde estaba tu mamá cuando alguien tocó la puerta? || Where was your mom when someone knocked on the door?",
                  "H || 🛏️😴 || Guess the action! || Sleep",
                  "E || 🐕🌳🏡 || Where was the dog when it barked? || It was in the garden.",
                  "E || 👩😴🛋️ 📞 || Where was she sleeping when the phone rang? || She was sleeping on the sofa.",
                  "E || 👦🍳 🚪✊ || Where was he when someone knocked on the door? || He was in the kitchen."
                ],
                "mistakes": [
                  "M || Where [was] you when the dog barked? || were* / was / did || Where were you when the dog barked?",
                  "M || She was sleeping [on] her bedroom. || in* / on / at || She was sleeping in her bedroom."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Interrupted actions — Simple Past & Past Progressive (3rd person); Wh-questions (Who...?) — Vocabulary Review",
                "lines": [
                  "Q || Who was sleeping when the phone rang last night? || My dad was sleeping. / My grandpa was sleeping.",
                  "Q || Who knocked on the door while you were watching your favorite show? (Use your imagination!) || My neighbor knocked on the door. / My cousin knocked on the door.",
                  "Q || Who was crying when you got home from school? (Use your imagination!) || My baby cousin was crying.",
                  "Q || Who was watching TV when the dog barked? || My brother was watching TV. / My aunt was watching TV.",
                  "Q || Who called while your mom was cooking dinner? (Use your imagination!) || My grandma called. / My uncle called.",
                  "Q || Who was talking when the bell rang at school? || The teacher was talking. / My classmate was talking.",
                  "Q || Make a question with WHO: sleep / when the dog barked? || Who was sleeping when the dog barked?",
                  "Q || Make a sentence with WHEN: my grandma / call / I / do homework. || My grandma called when I was doing my homework.",
                  "F || Who ____ on the door? || knocked || knocking / knock",
                  "F || Who ____ sleeping when the phone rang? || was || were / did",
                  "F || My sister ____ when I came home. || was crying || crying / cry",
                  "T || ¿Quién tocó la puerta? || Who knocked on the door?",
                  "T || ¿Quién estaba llorando? || Who was crying?",
                  "T || Mi abuela llamó cuando yo estaba haciendo la tarea. || My grandma called when I was doing my homework.",
                  "T || ¿Quién estaba viendo televisión cuando el perro ladró? || Who was watching TV when the dog barked?",
                  "T || Mi hermano estaba durmiendo cuando alguien tocó la puerta. || My brother was sleeping when someone knocked on the door.",
                  "H || 🚪✊ || Guess the action! || Knock",
                  "E || 👴📞 👧📝 || Who called while she was doing homework? || Her grandpa called. / The grandpa called.",
                  "E || 👦😴 👧📺 📞 || Who was sleeping when the phone rang? || The boy was sleeping. / He was sleeping.",
                  "E || 🐕💢 👨😴 || Who was sleeping when the dog barked? || The man was sleeping. / He was sleeping."
                ],
                "mistakes": [
                  "M || Who [were] crying? || was* / were / did || Who was crying?",
                  "M || Who [knock] on the door last night? || knocked* / knock / knocking || Who knocked on the door last night?"
                ]
              }
            ]
          },
          {
            "week": 4,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Adverbs of frequency — Simple Present (3rd person); How often...?; Yes/No questions (Short answers) — Vocabulary: Sometimes, Usually, Always",
                "lines": [
                  "Q || How often does your mom cook dinner? || She always cooks dinner. / She usually cooks dinner.",
                  "Q || How often does your dad play soccer on weekends? || He sometimes plays soccer on weekends. / He always plays soccer on weekends.",
                  "Q || How often does your best friend do homework after school? || She always does homework after school. / He usually does homework after school.",
                  "Q || Does your teacher always come to class on time? || Yes, she does. / No, he doesn't.",
                  "Q || Does your brother usually eat breakfast before school? || Yes, he does. / No, he doesn't.",
                  "Q || Does Messi always play soccer? || Yes, he does.",
                  "Q || Complete: My mom ____ (always / drink) coffee in the morning. || My mom always drinks coffee in the morning.",
                  "Q || Complete: He ____ (sometimes / watch) TV at night. || He sometimes watches TV at night.",
                  "F || She ____ cooks dinner. (every day) || always || every / all",
                  "F || My dad ____ plays soccer on Saturdays. || sometimes || sometime / some",
                  "F || He usually ____ breakfast at 7:00 AM. || eats || eat / eating",
                  "T || Mi mamá siempre cocina la cena. || My mom always cooks dinner.",
                  "T || Él a veces juega fútbol. || He sometimes plays soccer.",
                  "T || Ella usualmente hace su tarea en la tarde. || She usually does her homework in the afternoon.",
                  "T || ¿Con qué frecuencia come tu papá pizza? || How often does your dad eat pizza?",
                  "T || ¿Tu hermano siempre se levanta temprano? || Does your brother always wake up early?",
                  "H || ☕🌅 || Guess the action! || Drink coffee",
                  "E || 👩🍳 ✅✅✅✅ || How often does she cook? || She always cooks.",
                  "E || 👨⚽ ✅✅❌❌ || How often does he play soccer? || He sometimes plays soccer.",
                  "E || 👧📚 ✅✅✅❌ || How often does she study? || She usually studies."
                ],
                "mistakes": [
                  "M || She always [cook] dinner. || cooks* / cook / cooking || She always cooks dinner.",
                  "M || He [sometime] plays soccer. || sometimes* / sometime / some times || He sometimes plays soccer."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Adverbs of frequency — Simple Present (3rd person); Wh-questions (What...?) — Vocabulary: Rarely, Sometimes, Usually, Always",
                "lines": [
                  "Q || What does your mom usually do when she is tired? || She usually takes a nap. / She usually watches TV.",
                  "Q || What does your dad always do when he gets home from work? || He always drinks coffee. / He always hugs us.",
                  "Q || What does your best friend usually do after school? || He usually plays video games. / She usually does her homework.",
                  "Q || What does your brother or sister rarely do when he or she is bored? || She rarely reads a book. / He rarely cleans his room.",
                  "Q || What does Shakira usually do when she is happy? (Use your imagination!) || She usually sings and dances.",
                  "Q || What does your grandma sometimes cook on Sundays? || She sometimes cooks soup. / She sometimes cooks rice and chicken.",
                  "Q || Complete: My sister ____ (rarely / clean) her room. || My sister rarely cleans her room.",
                  "Q || Make a sentence: my dad / usually / cook / on Saturdays. || My dad usually cooks on Saturdays.",
                  "F || What ____ your mom usually do on Sundays? || does || do / is",
                  "F || He ____ eats vegetables. (almost never) || rarely || sometimes / always",
                  "F || She rarely ____ TV. || watches || watch / watching",
                  "T || Mi hermana casi nunca limpia su cuarto. || My sister rarely cleans her room.",
                  "T || ¿Qué hace tu papá usualmente cuando está cansado? || What does your dad usually do when he is tired?",
                  "T || Él casi nunca come vegetales. || He rarely eats vegetables.",
                  "T || Mi profesora usualmente llega temprano. || My teacher usually arrives early.",
                  "T || Mi mejor amigo a veces juega videojuegos después de la escuela. || My best friend sometimes plays video games after school.",
                  "H || 🥦🥕 || Guess the hidden word! || Vegetables",
                  "E || 👦🧹 ✅❌❌❌ || How often does he clean his room? || He rarely cleans his room.",
                  "E || 👩🏃 ✅✅✅✅ || What does she always do? || She always runs. / She always exercises.",
                  "E || 👨🍕 ✅✅❌❌ || What does he sometimes eat? || He sometimes eats pizza."
                ],
                "mistakes": [
                  "M || What [do] she usually do on Sundays? || does* / do / is || What does she usually do on Sundays?",
                  "M || My dad usually [drink] coffee. || drinks* / drink / drinking || My dad usually drinks coffee."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Adverbs of frequency — Simple Present (3rd person); Wh-questions (How often...?) — Vocabulary: Never, Rarely, Sometimes, Usually, Always",
                "lines": [
                  "Q || How often does your dad go to the gym? || He never goes to the gym. / He sometimes goes to the gym.",
                  "Q || How often does your mom watch TV at night? || She rarely watches TV at night. / She usually watches TV at night.",
                  "Q || How often does your best friend play video games when he or she is bored? || He always plays video games. / She sometimes plays video games.",
                  "Q || How often does your teacher give homework on Fridays? || She usually gives homework on Fridays. / He never gives homework on Fridays.",
                  "Q || How often does your grandma call you? || She always calls me. / She sometimes calls me.",
                  "Q || How often does Messi eat ice cream? (Use your imagination!) || He never eats ice cream. / He rarely eats ice cream.",
                  "Q || Make a question with HOW OFTEN: your cousin / visit you? || How often does your cousin visit you?",
                  "Q || Make a sentence: my brother / never / wake up early / on weekends. || My brother never wakes up early on weekends.",
                  "F || ____ often does she go to the park? || How || What / When",
                  "F || He ____ eats fish. He doesn't like it. || never || always / usually",
                  "F || She never ____ coffee. || drinks || drink / drinking",
                  "T || ¿Con qué frecuencia va tu mamá al gimnasio? || How often does your mom go to the gym?",
                  "T || Él nunca come pescado. || He never eats fish.",
                  "T || Mi abuela siempre me llama. || My grandma always calls me.",
                  "T || Ella casi nunca ve televisión. || She rarely watches TV.",
                  "T || Mi hermano nunca se levanta temprano. || My brother never wakes up early.",
                  "H || 🏋️ || Guess the action! || Go to the gym",
                  "E || 👨🏋️ ❌❌❌❌ || How often does he go to the gym? || He never goes to the gym.",
                  "E || 👧📱 ✅✅✅✅ || How often does she check her phone? || She always checks her phone.",
                  "E || 👦🐟 ❌❌❌❌ || How often does he eat fish? || He never eats fish."
                ],
                "mistakes": [
                  "M || How often [do] he go to the park? || does* / do / is || How often does he go to the park?",
                  "M || She never [eat] fish. || eats* / eat / eating || She never eats fish."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Monthly Evaluation — Cumulative review of previously introduced structures (routines, simple past, past progressive, going to, prepositions, shapes, spelling) — Vocabulary: wake up; cook; work; visit; play soccer; hospital; always",
                "lines": [
                  "Q || What is your daily routine on school days? || I wake up at 6:00 AM, I take a shower and I eat breakfast.",
                  "Q || What does your mom do when she is sick? || She rests and drinks tea. / She sleeps.",
                  "Q || What did you do last weekend when it was raining? (Use your imagination!) || I visited my grandma. / I watched movies.",
                  "Q || What were you doing last Friday at 7:30 PM? || I was eating dinner. / I was doing my homework.",
                  "Q || What is your best friend going to do next weekend? || He is going to play soccer. / She is going to visit her grandma.",
                  "Q || What was your dad doing when the phone rang? || He was watching TV. / He was sleeping.",
                  "Q || How often does your uncle cook? || He always cooks. / He never cooks.",
                  "Q || How do I get to the park? (Use your imagination!) || Go straight and turn left.",
                  "Q || When do you have English class? || I have English class on Monday at 5:00 PM.",
                  "Q || Spell the word \"always\". || A-L-W-A-Y-S.",
                  "F || I ____ to the zoo last Sunday. || went || go / going",
                  "F || She ____ singing when I came home. || was || were / is",
                  "F || My dad ____ breakfast at 7:00 AM. || eats || eat / eating",
                  "T || Yo me levanto a las seis. || I wake up at six.",
                  "T || Ella fue al zoológico ayer. || She went to the zoo yesterday.",
                  "T || Ellos estaban jugando mientras yo estaba estudiando. || They were playing while I was studying.",
                  "T || Mi mamá siempre toma café en la mañana. || My mom always drinks coffee in the morning.",
                  "S || red star:4, blue circle:2 || How many stars are there? || There are four stars.",
                  "H || 🏥 || Guess the hidden place! || Hospital",
                  "E || 👧⚽📅 || What is she going to do on Saturday? || She is going to play soccer."
                ],
                "mistakes": [
                  "M || I [go] to the zoo yesterday. || went* / go / goes || I went to the zoo yesterday.",
                  "M || She [were] sleeping when the phone rang. || was* / were / is || She was sleeping when the phone rang."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Monthly Evaluation — Frequency adverbs review; Yes/No questions (Long answers); cumulative review — Vocabulary: always, usually, sometimes, rarely, never; brush my teeth",
                "lines": [
                  "Q || Does your dad always drink coffee in the morning? || Yes, he always drinks coffee in the morning. / No, he never drinks coffee.",
                  "Q || Does your mom usually cook on Sundays? || Yes, she usually cooks on Sundays. / No, she doesn't usually cook on Sundays.",
                  "Q || Does your best friend sometimes play video games when he or she is bored? || Yes, he sometimes plays video games. / No, she never plays video games.",
                  "Q || Does your teacher ever sing in class? || No, she never sings in class. / Yes, she sometimes sings in class.",
                  "Q || How often do you brush your teeth? || I always brush my teeth.",
                  "Q || How often does your brother clean his room when your mom asks? || He rarely cleans his room. / He sometimes cleans his room.",
                  "Q || Did you eat pizza last weekend at a party? (Use your imagination!) || Yes, I ate pizza last weekend. / No, I didn't eat pizza last weekend.",
                  "Q || Were you sleeping yesterday at 10:15 AM? || No, I wasn't. I was studying. / Yes, I was.",
                  "Q || Is your mom going to work tomorrow? || Yes, she is going to work tomorrow. / No, she isn't.",
                  "Q || Tell me three things you always do in the morning. || I always wake up early, take a shower and eat breakfast.",
                  "F || Does she ____ cook dinner? (every day) || always || every / all day",
                  "F || Yes, he ____ plays soccer on Saturdays. || usually || usual / usuall",
                  "F || I ____ my teeth every day. || brush || brushes / brushing",
                  "T || ¿Tu papá siempre toma café? || Does your dad always drink coffee?",
                  "T || Sí, él siempre toma café. || Yes, he always drinks coffee.",
                  "T || No, ella nunca ve televisión. || No, she never watches TV.",
                  "T || ¿Con qué frecuencia limpias tu cuarto? || How often do you clean your room?",
                  "T || Yo siempre me cepillo los dientes. || I always brush my teeth.",
                  "H || 🪥 || Guess the action! || Brush my teeth",
                  "E || 👨☕ ✅✅✅✅ || Does he always drink coffee? || Yes, he always drinks coffee."
                ],
                "mistakes": [
                  "M || Does she [cooks] dinner every day? || cook* / cooks / cooking || Does she cook dinner every day?",
                  "M || He never [go] to the gym. || goes* / go / going || He never goes to the gym."
                ]
              }
            ]
          },
          {
            "week": 5,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Activities after school — Simple Past (1st person); ED ending sounds; Positive sentences — Vocabulary: study, check my phone, clean",
                "lines": [
                  "Q || What did you do last week after school? || I studied English. / I checked my phone.",
                  "Q || What did you do yesterday after school? || I cleaned my room. / I ate a snack.",
                  "Q || What did you do last Monday after school when you were tired? || I checked my phone. / I took a nap.",
                  "Q || Complete: Yesterday after school, I ____ (study) math. || Yesterday after school, I studied math.",
                  "Q || Complete: Last week, I ____ (check) my phone. || Last week, I checked my phone.",
                  "Q || Complete: Yesterday, I ____ (eat) pizza. || Yesterday, I ate pizza.",
                  "Q || Tell me two things you did yesterday after school. || I ate a snack and I did my homework.",
                  "Q || Say the past of \"clean\". || Cleaned.",
                  "Q || Say the past of \"eat\". || Ate.",
                  "F || I ____ my room yesterday. || cleaned || clean / cleaning",
                  "F || I ____ a sandwich after school. || ate || eat / eated",
                  "F || Last week I ____ English. || studied || study / studyed",
                  "T || Yo estudié inglés ayer. || I studied English yesterday.",
                  "T || Yo revisé mi celular después de la escuela. || I checked my phone after school.",
                  "T || Yo limpié mi cuarto. || I cleaned my room.",
                  "T || Ayer comí pizza. || I ate pizza yesterday.",
                  "T || Hice mi tarea la semana pasada. || I did my homework last week.",
                  "H || 📱👀 || Guess the action! || Check my phone",
                  "H || 🧹 || Guess the action! || Clean",
                  "E || 🧒📚 🕔 || What did you do yesterday at 5:00 PM? || I studied."
                ],
                "mistakes": [
                  "M || I [study] English yesterday. || studied* / study / studyed || I studied English yesterday.",
                  "M || I [eated] pizza last night. || ate* / eated / eat || I ate pizza last night."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Activities after school — Simple Past (1st person); Yes/No questions (Short answers); Wh-questions (What...?) — Vocabulary: study, check my phone, clean, eat",
                "lines": [
                  "Q || Did you study yesterday after school? || Yes, I did. / No, I didn't.",
                  "Q || Did you check your phone in the car yesterday? || Yes, I did. / No, I didn't.",
                  "Q || Did you clean your room last weekend before your friends came? (Use your imagination!) || Yes, I did. / No, I didn't.",
                  "Q || Did you eat a snack yesterday when you got home hungry? || Yes, I did. / No, I didn't.",
                  "Q || Did you do your homework last night before bed? || Yes, I did. / No, I didn't.",
                  "Q || What did you eat yesterday after school? || I ate a sandwich. / I ate fruit.",
                  "Q || What did you study last week for the test? || I studied science. / I studied English.",
                  "Q || What did you do last Friday after school when it was sunny? (Use your imagination!) || I played in the park. / I cleaned my bike.",
                  "Q || Make a question: you / clean your room / yesterday? || Did you clean your room yesterday?",
                  "F || ____ you study yesterday? || Did || Do / Were",
                  "F || Yes, I ____. (short answer, past) || did || do / was",
                  "F || What did you ____ after school? || do || did / does",
                  "T || ¿Estudiaste ayer? || Did you study yesterday?",
                  "T || Sí, lo hice. || Yes, I did.",
                  "T || No, no lo hice. || No, I didn't.",
                  "T || ¿Qué comiste ayer después de la escuela? || What did you eat yesterday after school?",
                  "T || Yo no limpié mi cuarto. || I didn't clean my room.",
                  "H || 🥪 || Guess the hidden word! || Sandwich",
                  "E || 🧒🥪 🕓 || What did you eat yesterday at 4:00 PM? || I ate a sandwich.",
                  "E || 🧒📱✅ || Did you check your phone? || Yes, I did."
                ],
                "mistakes": [
                  "M || Did you [studied] yesterday? || study* / studied / studying || Did you study yesterday?",
                  "M || No, I [don't]. (yesterday) || didn't* / don't / wasn't || No, I didn't."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Activities after school — Simple Past (1st person); Wh-questions (Where...?) — Vocabulary: study, check my phone, clean, eat, do my homework",
                "lines": [
                  "Q || Where did you study yesterday? || I studied in my room. / I studied at the library.",
                  "Q || Where did you eat lunch yesterday? || I ate lunch at school. / I ate lunch at home.",
                  "Q || Where did you do your homework last night? || I did my homework in the kitchen. / I did my homework in my bedroom.",
                  "Q || Where did you check your phone yesterday while you were waiting for your mom? || I checked my phone in the car. / I checked my phone at the school door.",
                  "Q || Where did you go after school yesterday? || I went to the park. / I went home.",
                  "Q || Where did you clean yesterday when your mom asked you for help? || I cleaned my bedroom. / I cleaned the kitchen.",
                  "Q || Make a question with WHERE: you / do your homework? || Where did you do your homework?",
                  "Q || Complete: I ____ (do) my homework at the library. || I did my homework at the library.",
                  "F || Where ____ you study yesterday? || did || do / were",
                  "F || I ate lunch ____ school. || at || on / to",
                  "F || I did my homework ____ the kitchen. || in || on / at",
                  "T || ¿Dónde estudiaste ayer? || Where did you study yesterday?",
                  "T || Yo hice mi tarea en la cocina. || I did my homework in the kitchen.",
                  "T || Comí en la escuela. || I ate at school.",
                  "T || ¿Dónde revisaste tu celular? || Where did you check your phone?",
                  "T || Fui al parque después de la escuela. || I went to the park after school.",
                  "H || 📚🏛️ || Guess the hidden place! || Library",
                  "E || 🧒📝🍳 || Where did you do your homework? || I did my homework in the kitchen.",
                  "E || 🧒📚🛏️ || Where did you study? || I studied in my bedroom.",
                  "E || 🧒🥪🏫 || Where did you eat? || I ate at school."
                ],
                "mistakes": [
                  "M || Where [do] you study yesterday? || did* / do / does || Where did you study yesterday?",
                  "M || I [eat] lunch at school yesterday. || ate* / eat / eated || I ate lunch at school yesterday."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Activities after school — Simple Past (1st person); Wh-questions (Who... with?) — Vocabulary Review",
                "lines": [
                  "Q || Who did you study with yesterday? || I studied with my best friend. / I studied alone.",
                  "Q || Who did you eat with yesterday after school? || I ate with my family. / I ate with my grandpa.",
                  "Q || Who did you do your homework with last night? || I did my homework with my sister. / I did it alone.",
                  "Q || Who did you clean the house with last weekend? || I cleaned the house with my mom. / I cleaned the house with my brother.",
                  "Q || Who did you play with yesterday after school when you finished your homework? || I played with my friends. / I played with my dog.",
                  "Q || Who did you go to the park with last Sunday? || I went to the park with my dad. / I went to the park with my cousins.",
                  "Q || Make a question with WHO... WITH: you / eat lunch / yesterday? || Who did you eat lunch with yesterday?",
                  "Q || Tell me what you did and who you did it with yesterday after school. || I played video games with my brother.",
                  "F || ____ did you study with? || Who || What / Where",
                  "F || I studied ____ my cousin. || with || whit / and",
                  "F || I ____ with my friends after school. || played || play / playing",
                  "T || ¿Con quién estudiaste ayer? || Who did you study with yesterday?",
                  "T || Comí con mi familia. || I ate with my family.",
                  "T || Hice mi tarea con mi hermana. || I did my homework with my sister.",
                  "T || ¿Con quién jugaste ayer? || Who did you play with yesterday?",
                  "T || Limpié la casa con mi mamá. || I cleaned the house with my mom.",
                  "H || 🏠🧹🧽 || Guess the action! || Clean the house",
                  "E || 🧒👩📚 || Who did you study with? || I studied with my mom.",
                  "E || 🧒👦🎮 || Who did you play with? || I played with my brother.",
                  "E || 🧒👨🍽️ || Who did you eat dinner with? || I ate dinner with my dad."
                ],
                "mistakes": [
                  "M || Who did you [studied] with? || study* / studied / studying || Who did you study with?",
                  "M || I ate dinner [whit] my family. || with* / whit / wiht || I ate dinner with my family."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Simple Past (1st person) — Vocabulary: study, check my phone, clean, eat, do my homework",
                "lines": [
                  "Q || What did you do last Tuesday after school? || I did my homework and I checked my phone.",
                  "Q || Did you clean your room yesterday? || Yes, I did. / No, I didn't.",
                  "Q || Where did you eat yesterday when you were hungry after class? || I ate at home. / I ate at school.",
                  "Q || Who did you do your homework with? || I did my homework with my mom. / I did it alone.",
                  "Q || What did you study last Wednesday? || I studied English and math.",
                  "Q || Did you eat vegetables yesterday? || Yes, I did. / No, I didn't.",
                  "Q || Where did you go last Saturday when you were bored? (Use your imagination!) || I went to the mall. / I went to the park.",
                  "Q || Who did you go with? || I went with my family. / I went with my cousins.",
                  "Q || Say the past of \"do\". || Did.",
                  "Q || Tell me three things you did last weekend. || I cleaned my room, I played soccer and I ate pizza.",
                  "F || I ____ my phone yesterday. || checked || check / checking",
                  "F || ____ you eat pizza last night? || Did || Do / Were",
                  "F || Where ____ you go last Sunday? || did || do / were",
                  "T || ¿Qué hiciste ayer después de la escuela? || What did you do yesterday after school?",
                  "T || Yo revisé mi celular y comí un snack. || I checked my phone and ate a snack.",
                  "T || ¿Con quién hiciste tu tarea? || Who did you do your homework with?",
                  "T || No estudié ayer. || I didn't study yesterday.",
                  "T || Fui al centro comercial con mi familia. || I went to the mall with my family.",
                  "H || 🍕 || Guess the hidden word! || Pizza",
                  "E || 🧒🧹🛏️ || What did you do yesterday? || I cleaned my room."
                ],
                "mistakes": [
                  "M || I did my homework and I [eat] a snack. || ate* / eat / eated || I did my homework and I ate a snack.",
                  "M || [Do] you clean your room yesterday? || Did* / Do / Does || Did you clean your room yesterday?"
                ]
              }
            ]
          },
          {
            "week": 6,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "A crazy Saturday for Kira — Simple Past (3rd person); Positive sentences — Vocabulary: dance, cook, play",
                "lines": [
                  "Q || What did Kira do last Saturday? || She danced. / She cooked.",
                  "Q || What did your mom do last Saturday? || She cooked lunch. / She danced at a party.",
                  "Q || What did your dad do last Saturday when he was bored? || He played soccer. / He cooked dinner.",
                  "Q || What did your best friend do last weekend when it was raining? || She played video games. / He danced in his room.",
                  "Q || What did Shakira do last Saturday? (Use your imagination!) || She danced at a concert.",
                  "Q || Complete: Kira ____ (dance) in the kitchen. || Kira danced in the kitchen.",
                  "Q || Complete: My brother ____ (play) video games last Saturday. || My brother played video games last Saturday.",
                  "Q || Say the past of \"cook\". || Cooked.",
                  "Q || Say the past of \"dance\". || Danced.",
                  "F || Kira ____ a cake last Saturday. || cooked || cook / cooks",
                  "F || My sister ____ all night. || danced || dance / dancing",
                  "F || He ____ soccer with his friends. || played || play / plays",
                  "T || Kira bailó en la cocina. || Kira danced in the kitchen.",
                  "T || Mi mamá cocinó un pastel el sábado pasado. || My mom cooked a cake last Saturday.",
                  "T || Él jugó fútbol con sus amigos. || He played soccer with his friends.",
                  "T || Ella bailó toda la noche. || She danced all night.",
                  "T || Mi papá cocinó la cena. || My dad cooked dinner.",
                  "H || 💃 || Guess the action! || Dance",
                  "H || 👩‍🍳🍲 || Guess the action! || Cook",
                  "E || 👧💃🎶 || What did she do last Saturday? || She danced."
                ],
                "mistakes": [
                  "M || Kira [dance] last Saturday. || danced* / dance / dances || Kira danced last Saturday.",
                  "M || He [cook] dinner last night. || cooked* / cook / cooks || He cooked dinner last night."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "A crazy Saturday for Kira — Simple Past (3rd person); Yes/No questions (Long answers) — Vocabulary: dance, cook, play, climb",
                "lines": [
                  "Q || Did Kira dance last Saturday? || Yes, she danced last Saturday. / No, she didn't dance last Saturday.",
                  "Q || Did your dad cook last weekend when your mom was tired? || Yes, he cooked last weekend. / No, he didn't cook last weekend.",
                  "Q || Did your best friend climb a tree at the park last Saturday? || No, she didn't climb a tree. / Yes, he climbed a tree.",
                  "Q || Did your mom play video games with you last Saturday? || No, she didn't play video games with me. / Yes, she played video games with me.",
                  "Q || Did your brother or sister dance at the last family party? || Yes, she danced at the party. / No, he didn't dance.",
                  "Q || Did Messi play soccer last Saturday? || Yes, he played soccer last Saturday.",
                  "Q || Make a question: Kira / climb / the tree? || Did Kira climb the tree?",
                  "Q || Make a question: your grandpa / cook / last Saturday? || Did your grandpa cook last Saturday?",
                  "F || ____ Kira climb a tree? || Did || Do / Was",
                  "F || No, she ____ cook. || didn't || doesn't / don't",
                  "F || He ____ a mountain last year. || climbed || climb / climbing",
                  "T || ¿Kira escaló un árbol? || Did Kira climb a tree?",
                  "T || Sí, ella escaló un árbol. || Yes, she climbed a tree.",
                  "T || No, él no cocinó. || No, he didn't cook.",
                  "T || ¿Tu papá jugó fútbol el sábado pasado? || Did your dad play soccer last Saturday?",
                  "T || Ella no bailó. || She didn't dance.",
                  "H || 🧗 || Guess the action! || Climb",
                  "E || 👧🧗🌳 || Did she climb a tree? || Yes, she climbed a tree.",
                  "E || 👨🍳❌ 👨📺 || Did he cook? || No, he didn't cook. He watched TV.",
                  "E || 👦⚽ || Did he play soccer? || Yes, he played soccer."
                ],
                "mistakes": [
                  "M || [Does] Kira climb a tree last Saturday? || Did* / Does / Do || Did Kira climb a tree last Saturday?",
                  "M || No, she [doesn't] dance last Saturday. || didn't* / doesn't / don't || No, she didn't dance last Saturday."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "A crazy Saturday for Kira — Simple Past (3rd person); Wh-questions (What...?) — Vocabulary: dance, cook, play, climb, jump",
                "lines": [
                  "Q || What did Kira do in the garden? (Use your imagination!) || She jumped. / She climbed a tree.",
                  "Q || What did your cousin do last Saturday at the birthday party? (Use your imagination!) || He jumped on the trampoline. / She danced with her friends.",
                  "Q || What did your grandma cook last Sunday when the family visited her? || She cooked soup. / She cooked rice and chicken.",
                  "Q || What did your teacher do last weekend? (Use your imagination!) || She danced at a party. / He played with his kids.",
                  "Q || What did your dog do at the park when it saw a cat? (Use your imagination if you don't have a dog!) || It jumped and played. / It climbed on the bench.",
                  "Q || What did your dad play last weekend when his friends visited? || He played the guitar. / He played cards.",
                  "Q || Make a question with WHAT: Kira / cook? || What did Kira cook?",
                  "Q || Complete: She ____ (jump) on the bed. || She jumped on the bed.",
                  "F || What ____ Kira do last Saturday? || did || do / does",
                  "F || She ____ on the trampoline. || jumped || jump / jumps",
                  "F || What did he ____? || cook || cooked / cooks",
                  "T || ¿Qué hizo Kira el sábado pasado? || What did Kira do last Saturday?",
                  "T || Ella saltó en la cama. || She jumped on the bed.",
                  "T || ¿Qué cocinó tu abuela? || What did your grandma cook?",
                  "T || Mi primo saltó en el trampolín. || My cousin jumped on the trampoline.",
                  "T || ¿Qué jugó tu papá? || What did your dad play?",
                  "H || 🤸 || Guess the action! || Jump",
                  "E || 👧🤸🛏️ || What did she do? || She jumped on the bed.",
                  "E || 👵🍲 || What did she cook? || She cooked soup.",
                  "E || 👦🎸 || What did he play? || He played the guitar."
                ],
                "mistakes": [
                  "M || What [does] Kira do last Saturday? || did* / does / do || What did Kira do last Saturday?",
                  "M || She [jump] on the bed. || jumped* / jump / jumps || She jumped on the bed."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "A crazy Saturday for Kira — Simple Past (3rd person); Wh-questions (Who... with?) — Vocabulary Review",
                "lines": [
                  "Q || Who did Kira dance with? (Use your imagination!) || She danced with her brother.",
                  "Q || Who did your mom cook with last Sunday? || She cooked with my grandma. / She cooked alone.",
                  "Q || Who did your best friend play with last Saturday at the park? || He played with his cousins. / She played with her neighbors.",
                  "Q || Who did your sister climb the tree with? (Use your imagination!) || She climbed the tree with her friend.",
                  "Q || Who did your dad jump with on the trampoline at the party? (Use your imagination!) || He jumped with my little brother.",
                  "Q || Who did Messi play with last Saturday? || He played with his team.",
                  "Q || Make a question with WHO... WITH: Kira / play? || Who did Kira play with?",
                  "Q || Tell me what Kira did and who she did it with. || She danced with her mom in the kitchen.",
                  "F || Who ____ she dance with? || did || do / was",
                  "F || She cooked ____ her grandma. || with || whit / to",
                  "F || Who did he ____ soccer with? || play || played / plays",
                  "T || ¿Con quién bailó Kira? || Who did Kira dance with?",
                  "T || Ella cocinó con su abuela. || She cooked with her grandma.",
                  "T || Él jugó con sus primos. || He played with his cousins.",
                  "T || ¿Con quién saltó tu hermano? || Who did your brother jump with?",
                  "T || Ella escaló el árbol con su amiga. || She climbed the tree with her friend.",
                  "H || 👵 || Guess the hidden family member! || Grandma",
                  "E || 👧👦💃🕺 || Who did she dance with? || She danced with her brother.",
                  "E || 👩👵🍲 || Who did she cook with? || She cooked with her grandma.",
                  "E || 👦👦👦⚽ || Who did he play with? || He played with his friends."
                ],
                "mistakes": [
                  "M || Who did she [danced] with? || dance* / danced / dances || Who did she dance with?",
                  "M || He played [whit] his cousins. || with* / whit / wiht || He played with his cousins."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Simple Past (3rd person) — Vocabulary: dance, cook, play, climb, jump",
                "lines": [
                  "Q || What did Kira do last Saturday? Tell me three things. || She danced, she cooked and she climbed a tree.",
                  "Q || Did your mom dance at the last party? || Yes, she danced at the party. / No, she didn't dance.",
                  "Q || What did your dad cook last Sunday? || He cooked pasta. / He didn't cook.",
                  "Q || Who did your best friend play with yesterday after school? || She played with her sister. / He played with his neighbors.",
                  "Q || Did your brother jump on the bed when your mom wasn't looking? (Use your imagination!) || Yes, he jumped on the bed. / No, he didn't jump on the bed.",
                  "Q || What did your teacher do last Saturday? (Use your imagination!) || She cooked and cleaned.",
                  "Q || Who did Shakira dance with at her last concert? (Use your imagination!) || She danced with her dancers.",
                  "Q || Say the past of \"climb\". || Climbed.",
                  "Q || Say the past of \"jump\". || Jumped.",
                  "Q || Make a question: Kira / cook / a cake? || Did Kira cook a cake?",
                  "F || Kira ____ a tree last Saturday. || climbed || climb / climbs",
                  "F || ____ she dance at the party? || Did || Do / Does",
                  "F || Who did she ____ with? || cook || cooked / cooks",
                  "T || Kira saltó en el trampolín. || Kira jumped on the trampoline.",
                  "T || ¿Qué cocinó tu papá? || What did your dad cook?",
                  "T || No, él no bailó. || No, he didn't dance.",
                  "T || ¿Con quién jugó ella? || Who did she play with?",
                  "T || Él escaló un árbol con su hermano. || He climbed a tree with his brother.",
                  "H || 🎂👩‍🍳 || Guess the action! || Cook a cake",
                  "E || 👧💃 👧🧗 👧🍳 || What did Kira do last Saturday? || She danced, climbed a tree and cooked."
                ],
                "mistakes": [
                  "M || What did Kira [cooked]? || cook* / cooked / cooks || What did Kira cook?",
                  "M || She [climb] a tree yesterday. || climbed* / climb / climbs || She climbed a tree yesterday."
                ]
              }
            ]
          },
          {
            "week": 7,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Summer activities — Simple Past (3rd person plural); Positive sentences; Yes/No questions (Short answers) — Vocabulary: swim, eat ice cream, build sandcastles",
                "lines": [
                  "Q || What did your family do last summer? || They swam in the sea. / They ate ice cream.",
                  "Q || What did your friends do last summer? || They built sandcastles. / They swam in the pool.",
                  "Q || What did your cousins do at the beach? || They swam and built sandcastles.",
                  "Q || Did your family swim last summer? || Yes, they did. / No, they didn't.",
                  "Q || Did your friends eat ice cream at the beach when it was hot? || Yes, they did. / No, they didn't.",
                  "Q || Did your parents build a sandcastle with you? || No, they didn't. / Yes, they did.",
                  "Q || Complete: Last summer, they ____ (swim) in the pool. || Last summer, they swam in the pool.",
                  "Q || Complete: My cousins ____ (build) a big sandcastle. || My cousins built a big sandcastle.",
                  "Q || Say the past of \"swim\". || Swam.",
                  "F || They ____ in the sea last summer. || swam || swim / swimmed",
                  "F || My friends ____ ice cream. || ate || eat / eated",
                  "F || ____ they build a sandcastle? || Did || Do / Were",
                  "T || Ellos nadaron en el mar. || They swam in the sea.",
                  "T || Mis amigos comieron helado. || My friends ate ice cream.",
                  "T || Ellos construyeron un castillo de arena. || They built a sandcastle.",
                  "T || ¿Nadaron ellos el verano pasado? || Did they swim last summer?",
                  "T || Sí, lo hicieron. || Yes, they did.",
                  "H || 🏊 || Guess the action! || Swim",
                  "H || 🏰🏖️ || Guess the action! || Build sandcastles",
                  "E || 👧👦🍦🏖️ || What did they do at the beach? || They ate ice cream."
                ],
                "mistakes": [
                  "M || They [swimmed] in the sea. || swam* / swimmed / swim || They swam in the sea.",
                  "M || My friends [eat] ice cream yesterday. || ate* / eat / eated || My friends ate ice cream yesterday."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Summer activities — Simple Past (3rd person plural); Yes/No questions (Long answers) — Vocabulary: swim, eat ice cream, build sandcastles, have a picnic",
                "lines": [
                  "Q || Did your family have a picnic last summer? || Yes, they had a picnic last summer. / No, they didn't have a picnic.",
                  "Q || Did your friends swim in the pool when it was very hot? || Yes, they swam in the pool. / No, they didn't swim in the pool.",
                  "Q || Did your cousins build sandcastles on their last trip to the beach? || Yes, they built sandcastles. / No, they didn't build sandcastles.",
                  "Q || Did your parents eat ice cream at the beach? || No, they didn't eat ice cream. / Yes, they ate ice cream.",
                  "Q || Did your classmates have a picnic at the park on the last day of school? (Use your imagination!) || Yes, they had a picnic at the park. / No, they didn't.",
                  "Q || Did Messi and his family swim last summer? (Use your imagination!) || Yes, they swam last summer. / No, they didn't swim.",
                  "Q || Make a question: your friends / have a picnic / last Sunday? || Did your friends have a picnic last Sunday?",
                  "Q || Make a question: your grandparents / eat ice cream / at the beach? || Did your grandparents eat ice cream at the beach?",
                  "F || They ____ a picnic in the park. || had || have / haved",
                  "F || No, they ____ swim. || didn't || doesn't / don't",
                  "F || Yes, they ____ sandcastles. || built || build / builded",
                  "T || Ellos hicieron un picnic en el parque. || They had a picnic in the park.",
                  "T || ¿Comieron ellos helado? || Did they eat ice cream?",
                  "T || No, ellos no nadaron. || No, they didn't swim.",
                  "T || Sí, ellos construyeron castillos de arena. || Yes, they built sandcastles.",
                  "T || Mis primos hicieron un picnic el domingo pasado. || My cousins had a picnic last Sunday.",
                  "H || 🧺🥪🌳 || Guess the action! || Have a picnic",
                  "E || 👨👩👧🧺 || Did they have a picnic? || Yes, they had a picnic.",
                  "E || 👦👧🏊❌ 🏰 || Did they swim? || No, they didn't swim. They built a sandcastle.",
                  "E || 👧👦🍦 || Did they eat ice cream? || Yes, they ate ice cream."
                ],
                "mistakes": [
                  "M || They [haved] a picnic. || had* / haved / has || They had a picnic.",
                  "M || [Does] they swim last summer? || Did* / Does / Do || Did they swim last summer?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Summer activities — Simple Past (3rd person plural); Wh-questions (What/When...?) — Vocabulary: swim, eat ice cream, build sandcastles, have a picnic, fly a kite",
                "lines": [
                  "Q || What did your friends do at the park last summer when it was windy? || They flew a kite. / They had a picnic.",
                  "Q || When did your family go to the beach? || They went to the beach in July. / They went last summer.",
                  "Q || What did your cousins eat at the beach when they were hungry? || They ate ice cream. / They ate sandwiches.",
                  "Q || When did your friends have a picnic? || They had a picnic last Sunday. / They had a picnic on the last day of school.",
                  "Q || What did your classmates build at the beach? || They built sandcastles.",
                  "Q || When did your parents swim in the sea? || They swam in the sea last summer. / They swam in the sea in January.",
                  "Q || Make a question with WHEN: they / fly a kite? || When did they fly a kite?",
                  "Q || Complete: They ____ (fly) a kite last Saturday. || They flew a kite last Saturday.",
                  "F || When ____ they go to the beach? || did || do / were",
                  "F || They ____ a kite in the park. || flew || fly / flied",
                  "F || What did they ____ at the beach? || eat || ate / eats",
                  "T || Ellos volaron una cometa en el parque. || They flew a kite in the park.",
                  "T || ¿Cuándo fueron ellos a la playa? || When did they go to the beach?",
                  "T || ¿Qué comieron ellos en la playa? || What did they eat at the beach?",
                  "T || Ellos hicieron un picnic el domingo pasado. || They had a picnic last Sunday.",
                  "T || Mis amigos nadaron en julio. || My friends swam in July.",
                  "H || 🪁🏖️ || Guess the action! || Fly a kite",
                  "E || 👦👧🪁 || What did they do at the park? || They flew a kite.",
                  "E || 👨👩🏊 📅 || When did they swim? (Use your imagination!) || They swam in July. / They swam last summer.",
                  "E || 👧👦🏰🏖️ || What did they build? || They built a sandcastle."
                ],
                "mistakes": [
                  "M || When [do] they go to the beach? || did* / do / does || When did they go to the beach?",
                  "M || They [flied] a kite. || flew* / flied / fly || They flew a kite."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Summer activities — Simple Past (3rd person plural); Wh-questions (Who/Where...?) — Vocabulary Review",
                "lines": [
                  "Q || Who swam in the sea last summer? || My cousins swam in the sea. / My friends swam in the sea.",
                  "Q || Where did your family have a picnic last summer? || They had a picnic in the park. / They had a picnic at the beach.",
                  "Q || Who built sandcastles at the beach while you were swimming? (Use your imagination!) || My friends built sandcastles. / My little cousins built sandcastles.",
                  "Q || Where did your friends fly a kite when it was windy? || They flew a kite at the beach. / They flew a kite in the park.",
                  "Q || Who ate all the ice cream at the party? (Use your imagination!) || My brother ate all the ice cream.",
                  "Q || Where did your cousins swim last vacation? || They swam in the pool. / They swam in the sea.",
                  "Q || Make a question with WHERE: they / build sandcastles? || Where did they build sandcastles?",
                  "Q || Make a question with WHO: eat ice cream / at the park? || Who ate ice cream at the park?",
                  "F || Where ____ they swim? || did || do / were",
                  "F || ____ built a sandcastle? || Who || What / Where",
                  "F || They had a picnic ____ the park. || in || on / to",
                  "T || ¿Dónde nadaron ellos? || Where did they swim?",
                  "T || ¿Quién construyó un castillo de arena? || Who built a sandcastle?",
                  "T || Ellos volaron una cometa en la playa. || They flew a kite at the beach.",
                  "T || Mis primos nadaron en la piscina. || My cousins swam in the pool.",
                  "T || ¿Dónde hicieron ellos un picnic? || Where did they have a picnic?",
                  "H || 🏖️ || Guess the hidden place! || Beach",
                  "E || 👦👧🏊🌊 || Where did they swim? || They swam in the sea.",
                  "E || 👨👩🧺🌳 || Where did they have a picnic? || They had a picnic in the park.",
                  "E || 👧🍦🍦🍦 || Who ate the ice cream? || The girl ate the ice cream. / She ate the ice cream."
                ],
                "mistakes": [
                  "M || Where [do] they swim last summer? || did* / do / does || Where did they swim last summer?",
                  "M || Who [build] a sandcastle? || built* / build / builded || Who built a sandcastle?"
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Summer activities — Simple Past (3rd person plural); Wh-questions (Who... with?) — Vocabulary Review",
                "lines": [
                  "Q || Who did your family swim with last summer? || They swam with my uncle. / They swam with our friends.",
                  "Q || Who did your friends have a picnic with on their last day of school? (Use your imagination!) || They had a picnic with their parents. / They had a picnic with the teacher.",
                  "Q || Who did your cousins build sandcastles with? || They built sandcastles with me. / They built sandcastles with their dad.",
                  "Q || Who did your classmates fly a kite with at the park? || They flew a kite with their teacher. / They flew a kite with their brothers.",
                  "Q || Who did your parents eat ice cream with when they were on vacation? || They ate ice cream with my grandparents. / They ate ice cream with us.",
                  "Q || Who did Messi and his teammates have a picnic with? (Use your imagination!) || They had a picnic with their families.",
                  "Q || Make a question with WHO... WITH: they / swim? || Who did they swim with?",
                  "Q || Tell me what your family did last summer and who they did it with. || They went to the beach with my aunt and swam in the sea.",
                  "F || Who ____ they swim with? || did || do / were",
                  "F || They had a picnic ____ their friends. || with || whit / to",
                  "F || Who did they ____ sandcastles with? || build || built / builds",
                  "T || ¿Con quién nadaron ellos? || Who did they swim with?",
                  "T || Ellos hicieron un picnic con sus padres. || They had a picnic with their parents.",
                  "T || Ellos volaron una cometa con su profesora. || They flew a kite with their teacher.",
                  "T || ¿Con quién comieron helado tus primos? || Who did your cousins eat ice cream with?",
                  "T || Ellos construyeron castillos de arena conmigo. || They built sandcastles with me.",
                  "H || 🍦 || Guess the hidden word! || Ice cream",
                  "E || 👦👧👨🏊 || Who did they swim with? || They swam with their dad.",
                  "E || 👧👦👵🧺 || Who did they have a picnic with? || They had a picnic with their grandma.",
                  "E || 👦👦👩‍🏫🪁 || Who did they fly a kite with? || They flew a kite with their teacher."
                ],
                "mistakes": [
                  "M || Who did they [swam] with? || swim* / swam / swims || Who did they swim with?",
                  "M || They ate ice cream [whit] their friends. || with* / whit / wiht || They ate ice cream with their friends."
                ]
              }
            ]
          },
          {
            "week": 8,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Object pronouns — Positive sentences; Yes/No questions (Long answers); family: aunt, uncle, cousin — Vocabulary: me, you, him, her, it, us, them",
                "lines": [
                  "Q || Do you call your grandma every week? || Yes, I call her every week. / No, I don't call her every week.",
                  "Q || Does your mom help you with your homework when you don't understand? || Yes, she helps me with my homework. / No, she doesn't help me.",
                  "Q || Do you visit your cousins on weekends? || Yes, I visit them on weekends. / No, I don't visit them.",
                  "Q || Does your dad play soccer with you and your brother when he has free time? || Yes, he plays soccer with us. / No, he doesn't play with us.",
                  "Q || Do you like pizza? || Yes, I like it. / No, I don't like it.",
                  "Q || Does your teacher know your uncle? || No, she doesn't know him. / Yes, he knows him.",
                  "Q || Replace the words: I love my aunt. → I love ____. || I love her.",
                  "Q || Replace the words: We visit our grandparents. → We visit ____. || We visit them.",
                  "Q || Replace the words: My mom calls my brother and me. → My mom calls ____. || My mom calls us.",
                  "F || I call ____ every day. (my grandma) || her || she / him",
                  "F || My uncle visits ____ on Sundays. (my family and me) || us || we / them",
                  "F || I like ____. (the cake) || it || its / him",
                  "T || Yo la llamo todos los días. (a mi abuela) || I call her every day.",
                  "T || Mi tío nos visita los domingos. || My uncle visits us on Sundays.",
                  "T || Yo los veo en la escuela. (a mis primos) || I see them at school.",
                  "T || Mi mamá me ayuda con la tarea. || My mom helps me with my homework.",
                  "T || Yo lo quiero. (a mi papá) || I love him.",
                  "H || 👨‍👩‍👧‍👦 || Guess the hidden word! || Family",
                  "E || 👧📞👵 || Who does she call? || She calls her grandma. / She calls her.",
                  "E || 👨⚽👦👦 || Who does he play soccer with? || He plays soccer with them."
                ],
                "mistakes": [
                  "M || I love [she]. || her* / she / hers || I love her.",
                  "M || My uncle visits [we] every Sunday. || us* / we / our || My uncle visits us every Sunday."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Object pronouns — Wh-questions (What...?) — Vocabulary: me, you, him, her, it, us, them",
                "lines": [
                  "Q || What do you do with your cousins when you are bored? || I play video games with them. / I go to the park with them.",
                  "Q || What does your aunt cook for you when you visit her? || She cooks pasta for me. / She cooks soup for me.",
                  "Q || What do you do with your best friend after school? || I do homework with him. / I play with her.",
                  "Q || What does your dad buy for you and your sister when you behave well? (Use your imagination!) || He buys ice cream for us. / He buys candy for us.",
                  "Q || What do you do with your dog when it is sad? (Use your imagination if you don't have one!) || I walk it. / I play with it.",
                  "Q || What does Shakira do for her fans at a concert? || She sings for them. / She dances for them.",
                  "Q || Replace the words: I eat pizza with my friends. → I eat pizza with ____. || I eat pizza with them.",
                  "Q || Replace the words: My aunt gives a present to my brother. → My aunt gives a present to ____. || My aunt gives a present to him.",
                  "F || What do you do with ____? (your cousins) || them || they / their",
                  "F || My grandma cooks for ____. (my family and me) || us || we / our",
                  "F || I walk ____ every morning. (my dog) || it || its / him",
                  "T || Yo juego videojuegos con ellos. || I play video games with them.",
                  "T || Ella cocina pasta para mí. || She cooks pasta for me.",
                  "T || Él compra helado para nosotros. || He buys ice cream for us.",
                  "T || ¿Qué haces con tus primos cuando estás aburrido? || What do you do with your cousins when you are bored?",
                  "T || Mi tía le da un regalo. (a él) || My aunt gives him a present.",
                  "H || 🎁 || Guess the hidden word! || Present",
                  "E || 👧🎮👦👦 || What does she do with her cousins? || She plays video games with them.",
                  "E || 👩🍝👧 || What does she cook for her? || She cooks pasta for her.",
                  "E || 👨🍦👧👦 || What does he buy for them? || He buys ice cream for them."
                ],
                "mistakes": [
                  "M || I play with [they] on weekends. || them* / they / their || I play with them on weekends.",
                  "M || She cooks for [I]. || me* / I / my || She cooks for me."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Object pronouns — Review (fill in the blanks); Wh-questions (Where/How often...?) — Vocabulary: me, you, him, her, it, us, them",
                "lines": [
                  "Q || Where do you see your cousins? || I see them at my grandma's house. / I see them at school.",
                  "Q || Where does your aunt take you when she visits? || She takes me to the park. / She takes me to the mall.",
                  "Q || How often do you call your uncle? || I call him every month. / I rarely call him.",
                  "Q || How often does your mom visit her friends when she has free time? || She visits them every Sunday. / She sometimes visits them.",
                  "Q || Where do you and your friends play when it is sunny? || We play at the park. / We play in the garden.",
                  "Q || How often does your coach help you when you don't understand? || He helps me every class. / She always helps me.",
                  "Q || Complete with a pronoun: My cousins are funny. I like ____. || I like them.",
                  "Q || Complete with a pronoun: My aunt is kind. I love ____. || I love her.",
                  "Q || Complete with a pronoun: This is my new bike. I ride ____ every day. || I ride it every day.",
                  "F || Where do you see ____? (your uncle) || him || he / his",
                  "F || How often does she call ____? (you) || you || your / yours",
                  "F || We play with ____ at school. (our friends) || them || they / their",
                  "T || ¿Dónde ves a tus primos? || Where do you see your cousins?",
                  "T || Yo lo llamo cada mes. (a mi tío) || I call him every month.",
                  "T || Ella nos visita todos los domingos. || She visits us every Sunday.",
                  "T || ¿Con qué frecuencia la llamas? (a ella) || How often do you call her?",
                  "T || Nuestra profesora nos ayuda en clase. || Our teacher helps us in class.",
                  "H || 🚲 || Guess the hidden word! || Bike",
                  "E || 👧👵🏠 || Where does she see her grandma? || She sees her at her house.",
                  "E || 👦📞👨 ✅✅✅✅ || How often does he call his uncle? || He calls him every day. / He always calls him."
                ],
                "mistakes": [
                  "M || Where do you see [he]? || him* / he / his || Where do you see him?",
                  "M || How often does she call [they]? || them* / they / their || How often does she call them?"
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Monthly Evaluation — Cumulative review of previously introduced structures (past progressive, interrupted actions, frequency adverbs, simple past, object pronouns, going to, professions, shapes) — Vocabulary: do homework; cook; swim; visit; doctor; dog",
                "lines": [
                  "Q || What were you doing last Sunday at 5:45 PM? || I was doing my homework. / I was playing.",
                  "Q || What was your mom doing while you were studying for the test? || She was cooking. / She was working.",
                  "Q || What happened when the phone rang during dinner last night? (Use your imagination!) || My dad answered it. / Nobody answered it.",
                  "Q || How often does your dad cook when your mom is tired? || He sometimes cooks. / He never cooks.",
                  "Q || What did you do after school last Thursday? || I checked my phone and ate a snack.",
                  "Q || Tell me one thing Kira did last Saturday. || She danced. / She climbed a tree.",
                  "Q || What did your cousins do last summer? || They swam in the sea. / They had a picnic.",
                  "Q || Do you visit your cousins when you are on vacation? || Yes, I visit them on vacation. / No, I don't visit them.",
                  "Q || What is your best friend going to do tomorrow when school finishes? || He is going to play soccer. / She is going to study.",
                  "Q || What do you want to be in the future? || I want to be a doctor. / I want to be a vet.",
                  "F || I was ____ when the phone rang. || sleeping || sleep / slept",
                  "F || She ____ visits her grandma. (every Sunday) || always || every / all",
                  "F || They ____ a kite last summer. || flew || fly / flied",
                  "T || Yo estaba estudiando mientras mi hermano estaba jugando. || I was studying while my brother was playing.",
                  "T || Mi papá nunca cocina. || My dad never cooks.",
                  "T || Ellos comieron helado en la playa. || They ate ice cream at the beach.",
                  "T || Yo los veo los fines de semana. || I see them on weekends.",
                  "S || blue triangle:3, red square:2 || How many triangles are there? || There are three triangles.",
                  "H || 🐕 || Guess the hidden animal! || Dog",
                  "E || 👧😴 📞🔔 || What happened? || She was sleeping when the phone rang."
                ],
                "mistakes": [
                  "M || They [was] swimming in the sea. || were* / was / are || They were swimming in the sea.",
                  "M || I visit [they] every Sunday. || them* / they / their || I visit them every Sunday."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Monthly Evaluation — Object pronouns review; cumulative review — Vocabulary: me, you, him, her, it, us, them; grandpa",
                "lines": [
                  "Q || Do you love your family? || Yes, I love them.",
                  "Q || Does your mom call you when you are at your grandma's house? || Yes, she calls me every day. / No, she doesn't call me.",
                  "Q || Who helps you with your homework when it is difficult? || My dad helps me. / My sister helps me.",
                  "Q || Replace the words: I play with my dog. → I play with ____. || I play with it.",
                  "Q || Replace the words: My teacher helps my classmates and me. → My teacher helps ____. || My teacher helps us.",
                  "Q || Replace the words: I call my aunt on Sundays. → I call ____ on Sundays. || I call her on Sundays.",
                  "Q || What did you do last weekend with your cousins? || I played soccer with them. / I watched a movie with them.",
                  "Q || Were you studying yesterday at 10:15 AM? || Yes, I was. / No, I wasn't.",
                  "Q || How often do you see your uncle? || I see him every month. / I rarely see him.",
                  "Q || Tell me about your family: what do you do together when you are all at home? || We eat dinner together and I love them.",
                  "F || My grandma loves ____. (my sister and me) || us || we / our",
                  "F || I see ____ every day. (my teacher, a woman) || her || she / hers",
                  "F || Do you like ____? (soccer) || it || its / them",
                  "T || Yo la quiero. (a mi mamá) || I love her.",
                  "T || ¿Lo conoces? (a él) || Do you know him?",
                  "T || Mi profesora nos ayuda. || My teacher helps us.",
                  "T || Yo juego con él los sábados. || I play with him on Saturdays.",
                  "T || Ellos me llaman todos los días. || They call me every day.",
                  "H || 👴 || Guess the hidden family member! || Grandpa",
                  "E || 👧❤️👨‍👩‍👦 || Does she love her family? || Yes, she loves them."
                ],
                "mistakes": [
                  "M || My grandma loves [we]. || us* / we / our || My grandma loves us.",
                  "M || I play with [he] on Saturdays. || him* / he / his || I play with him on Saturdays."
                ]
              }
            ]
          }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Yesterday at... (Past progressive)",
            "words": [
              "Come",
              "Eat",
              "Wait",
              "Do homework",
              "Study"
            ]
          },
          {
            "week": 2,
            "category": "Parallel actions",
            "words": [
              "Draw",
              "Listen to music",
              "Eat",
              "Drink",
              "Play",
              "Fly a kite"
            ]
          },
          {
            "week": 3,
            "category": "Interrupted actions",
            "words": [
              "Sleep",
              "Ring",
              "Watch TV",
              "Knock",
              "Cry",
              "Bark"
            ]
          },
          {
            "week": 4,
            "category": "Adverbs of frequency",
            "words": [
              "Never",
              "Rarely",
              "Sometimes",
              "Usually",
              "Always"
            ]
          },
          {
            "week": 5,
            "category": "Activities after school",
            "words": [
              "Study",
              "Check my phone",
              "Clean",
              "Eat",
              "Do my homework"
            ]
          },
          {
            "week": 6,
            "category": "A crazy Saturday for Kira",
            "words": [
              "Dance",
              "Cook",
              "Play",
              "Climb",
              "Jump"
            ]
          },
          {
            "week": 7,
            "category": "Summer activities",
            "words": [
              "Swim",
              "Eat ice cream",
              "Build sandcastles",
              "Have a picnic",
              "Fly a kite"
            ]
          },
          {
            "week": 8,
            "category": "Object pronouns",
            "words": [
              "Me",
              "You",
              "Him",
              "Her",
              "It",
              "Us",
              "Them"
            ]
          }
        ]
      },
      {
        "level": 7,
        "weeks": [
          {
            "week": 1,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "General review — Simple present (3rd person); Yes/No questions (Short answers); Wh-questions (What time/Where...?) — Vocabulary: wake up, cook, work, exercise, watch TV",
                "lines": [
                  "Q || What does your mom do every day? || She wakes up early, cooks and works.",
                  "Q || What time does your dad wake up on weekdays? || He wakes up at 6:00 AM. / He wakes up at 5:30 AM.",
                  "Q || Where does your best friend exercise? || He exercises at the park. / She exercises at home.",
                  "Q || Does your grandpa watch TV at night? || Yes, he does. / No, he doesn't.",
                  "Q || Does your aunt cook on weekends? || Yes, she does. / No, she doesn't.",
                  "Q || What time does your teacher go to bed? (Use your imagination!) || She goes to bed at 10:00 PM.",
                  "Q || Where does Messi exercise when he isn't playing a game? (Use your imagination!) || He exercises at the gym.",
                  "Q || What does your uncle do when he gets home tired? || He watches TV. / He cooks dinner and rests.",
                  "F || My mom ____ up at 6:00 AM. || wakes || wake / waking",
                  "F || ____ your dad work on Saturdays? || Does || Do / Is",
                  "F || She ____ dinner every night. || cooks || cook / cooking",
                  "T || Mi mamá cocina todos los días. || My mom cooks every day.",
                  "T || ¿A qué hora se despierta tu papá? || What time does your dad wake up?",
                  "T || Él hace ejercicio en el parque. || He exercises at the park.",
                  "T || Mi abuelo ve televisión en la noche. || My grandpa watches TV at night.",
                  "T || ¿Dónde trabaja tu tía? || Where does your aunt work?",
                  "H || ⏰🛏️ || Guess the action! || Wake up",
                  "H || 🏃‍♀️💪 || Guess the action! || Exercise",
                  "E || 👩💼 🕗 || What time does she work? || She works at 8:00 AM. / She starts work at 8:00 AM.",
                  "E || 👨📺🛋️ || What does he do at night? || He watches TV."
                ],
                "mistakes": [
                  "M || My mom [cook] every day. || cooks* / cook / cooking || My mom cooks every day.",
                  "M || [Do] your dad work on Saturdays? || Does* / Do / Is || Does your dad work on Saturdays?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "General review — Simple present (3rd person); Wh-questions (How often/Where/When...?) — Vocabulary: sing, paint, dance, clean, read",
                "lines": [
                  "Q || What does your best friend do on weekends? || She reads and paints. / He dances and sings.",
                  "Q || How often does your sister sing in the shower? (Use your imagination!) || She always sings in the shower. / She never sings in the shower.",
                  "Q || Where does your mom read when she wants to relax? || She reads in her bedroom. / She reads in the garden.",
                  "Q || When does your dad clean the house? || He cleans the house on Saturdays. / He cleans the house in the morning.",
                  "Q || How often does your cousin paint? || He rarely paints. / She paints every week.",
                  "Q || Where does Shakira dance? || She dances on stage. / She dances at her concerts.",
                  "Q || When does your teacher read stories to the class? || She reads stories on Fridays. / He reads stories after the break.",
                  "Q || What does your grandma do when she is happy? || She sings. / She dances in the kitchen.",
                  "F || How ____ does she paint? || often || many / much",
                  "F || He ____ the house on Saturdays. || cleans || clean / cleaning",
                  "F || She reads ____ her bedroom. || in || on / at",
                  "T || ¿Con qué frecuencia canta tu hermana? || How often does your sister sing?",
                  "T || Mi papá limpia la casa los sábados. || My dad cleans the house on Saturdays.",
                  "T || Ella lee en su cuarto. || She reads in her bedroom.",
                  "T || ¿Cuándo pinta tu primo? || When does your cousin paint?",
                  "T || Mi abuela baila cuando está feliz. || My grandma dances when she is happy.",
                  "H || 🎨🖌️ || Guess the action! || Paint",
                  "E || 👧📖🌳 || Where does she read? || She reads in the garden.",
                  "E || 👨🧹 📅 || When does he clean? (Use your imagination!) || He cleans on Saturdays.",
                  "E || 👩🎤 ✅✅✅✅ || How often does she sing? || She always sings."
                ],
                "mistakes": [
                  "M || How often [do] she sing? || does* / do / is || How often does she sing?",
                  "M || He [read] in his bedroom. || reads* / read / reading || He reads in his bedroom."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "General review — Simple present (3rd person); Yes/No questions (Short answers); Wh-questions (What.../Who... with?) — Vocabulary: play, ride, take a nap, listen to music, draw",
                "lines": [
                  "Q || What does your brother do in the afternoon? || He plays video games. / He takes a nap.",
                  "Q || Does your dad take a nap after lunch? || Yes, he does. / No, he doesn't.",
                  "Q || Who does your best friend play with after school? || He plays with his cousins. / She plays with her neighbors.",
                  "Q || Does your cousin ride a bike to school? || Yes, he does. / No, she doesn't.",
                  "Q || What does your mom listen to in the car? || She listens to music. / She listens to the news.",
                  "Q || Who does your sister draw with when she is bored? || She draws with her best friend. / She draws alone.",
                  "Q || Does Messi listen to music before a game? (Use your imagination!) || Yes, he does. / No, he doesn't.",
                  "Q || What does your grandpa do when he is tired in the afternoon? || He takes a nap. / He listens to music.",
                  "F || ____ he take a nap after lunch? || Does || Do / Is",
                  "F || Who does she ____ with? || play || plays / playing",
                  "F || My brother ____ a bike every afternoon. || rides || ride / riding",
                  "T || ¿Tu papá toma una siesta después del almuerzo? || Does your dad take a nap after lunch?",
                  "T || ¿Con quién juega tu mejor amigo? || Who does your best friend play with?",
                  "T || Mi mamá escucha música en el carro. || My mom listens to music in the car.",
                  "T || Mi hermana dibuja con su mejor amiga. || My sister draws with her best friend.",
                  "T || Él monta bicicleta en la tarde. || He rides a bike in the afternoon.",
                  "H || 😴🛋️ || Guess the action! || Take a nap",
                  "E || 👦🚲 || What does he do in the afternoon? || He rides a bike.",
                  "E || 👧🎧 || Does she listen to music? || Yes, she does.",
                  "E || 👧✏️👦 || Who does she draw with? || She draws with her brother."
                ],
                "mistakes": [
                  "M || [Do] she ride a bike? || Does* / Do / Is || Does she ride a bike?",
                  "M || My brother [take] a nap after lunch. || takes* / take / taking || My brother takes a nap after lunch."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "General review — Simple present (3rd person); Wh-questions (How long/Where/When...?); pets — Vocabulary Review: wake up, cook, work, exercise, watch TV, sing, paint, dance, clean, read, play, ride, take a nap, listen to music, draw",
                "lines": [
                  "Q || What does your pet do every day? (Use your imagination if you don't have a pet!) || It sleeps and plays. / It eats and takes a nap.",
                  "Q || How long does your dog sleep every day? (Use your imagination!) || It sleeps for ten hours. / It sleeps all afternoon.",
                  "Q || Where does your cat take a nap? (Use your imagination!) || It takes a nap on the sofa. / It takes a nap on my bed.",
                  "Q || When does your dad exercise? || He exercises in the morning. / He exercises after work.",
                  "Q || How long does your mom work every day? || She works for eight hours.",
                  "Q || Where does your best friend ride a bike? || He rides a bike in the park. / She rides a bike in the street.",
                  "Q || When does your sister listen to music? || She listens to music when she studies. / She listens to music at night.",
                  "Q || How long does your brother play video games when he is bored? || He plays for two hours. / He plays all afternoon.",
                  "F || How ____ does she work every day? || long || many / often",
                  "F || My dog ____ on the sofa. || sleeps || sleep / sleeping",
                  "F || ____ does he exercise? In the morning. || When || Where / What",
                  "T || ¿Cuánto tiempo duerme tu perro? || How long does your dog sleep?",
                  "T || Mi gato toma una siesta en el sofá. || My cat takes a nap on the sofa.",
                  "T || ¿Cuándo hace ejercicio tu papá? || When does your dad exercise?",
                  "T || Mi mamá trabaja ocho horas todos los días. || My mom works eight hours every day.",
                  "T || ¿Dónde monta bicicleta tu amigo? || Where does your friend ride a bike?",
                  "H || 🐕🦴 || Guess the hidden animal! || Dog",
                  "E || 🐱😴🛋️ || Where does the cat take a nap? || It takes a nap on the sofa.",
                  "E || 🐕🏃 🕖 || When does the dog exercise? || It exercises at 7:00 AM. / It exercises in the morning.",
                  "E || 👦🎮 ⏱️2️⃣ || How long does he play video games? || He plays for two hours."
                ],
                "mistakes": [
                  "M || How long [do] she work? || does* / do / is || How long does she work?",
                  "M || My cat [sleep] on my bed. || sleeps* / sleep / sleeping || My cat sleeps on my bed."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Simple present (3rd person) — Vocabulary: wake up, cook, work, exercise, watch TV, sing, paint, dance, clean, read, play, ride, take a nap, listen to music, draw",
                "lines": [
                  "Q || What does your dad do every day? || He wakes up early, works and exercises.",
                  "Q || Does your mom sing when she cooks? || Yes, she does. / No, she doesn't.",
                  "Q || How often does your best friend ride a bike? || He always rides a bike. / She sometimes rides a bike.",
                  "Q || Where does your grandma watch TV? || She watches TV in the living room.",
                  "Q || When does your brother take a nap? || He takes a nap after lunch. / He never takes a nap.",
                  "Q || Who does your cousin play with on weekends? || She plays with her friends.",
                  "Q || What time does your teacher wake up? (Use your imagination!) || She wakes up at 5:00 AM.",
                  "Q || How long does your sister read every night? || She reads for thirty minutes.",
                  "Q || What does Shakira do when she isn't singing? (Use your imagination!) || She dances and spends time with her kids.",
                  "Q || Tell me three things your mom does every day. || She cooks, works and reads.",
                  "F || She ____ TV in the living room. || watches || watch / watching",
                  "F || What time ____ he wake up? || does || do / is",
                  "F || He ____ listens to music. (every day) || always || every / all",
                  "T || Mi papá se despierta temprano todos los días. || My dad wakes up early every day.",
                  "T || ¿Dónde ve televisión tu abuela? || Where does your grandma watch TV?",
                  "T || Ella lee treinta minutos cada noche. || She reads thirty minutes every night.",
                  "T || ¿Con quién juega tu prima los fines de semana? || Who does your cousin play with on weekends?",
                  "T || Mi hermano no toma siesta. || My brother doesn't take a nap.",
                  "H || 📺 || Guess the action! || Watch TV",
                  "E || 👩🍳🎤 || What does she do when she cooks? || She sings when she cooks."
                ],
                "mistakes": [
                  "M || She [watch] TV in the living room. || watches* / watch / watching || She watches TV in the living room.",
                  "M || What time [do] he wake up? || does* / do / is || What time does he wake up?"
                ]
              }
            ]
          },
          {
            "week": 2,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "General review — Present progressive (1st person); Yes/No questions (Short answers); Wh-questions (What/Why...?) — Vocabulary: sit, pay attention, take notes, learn, speak",
                "lines": [
                  "Q || What are you doing in class right now? || I am paying attention. / I am taking notes.",
                  "Q || Are you sitting next to the window? || Yes, I am. / No, I'm not.",
                  "Q || Why are you taking notes? || Because I want to remember the lesson. / Because there is a test tomorrow.",
                  "Q || Are you speaking English right now? || Yes, I am. / No, I'm not.",
                  "Q || What are you learning in this class? || I am learning the present progressive. / I am learning new words.",
                  "Q || Why are you paying attention to your coach? || Because I want to learn. / Because the game is fun.",
                  "Q || Are you learning math today? || No, I'm not. I am learning English. / Yes, I am.",
                  "Q || What are you doing with your pencil right now? || I am taking notes. / I am drawing.",
                  "F || I ____ taking notes right now. || am || is / are",
                  "F || ____ you sitting on the floor? || Are || Is / Do",
                  "F || I am ____ English now. || speaking || speak / speaks",
                  "T || Estoy prestando atención. || I am paying attention.",
                  "T || ¿Estás tomando notas? || Are you taking notes?",
                  "T || Estoy aprendiendo inglés ahora. || I am learning English now.",
                  "T || Sí, estoy sentado al lado de la ventana. || Yes, I am sitting next to the window.",
                  "T || ¿Por qué estás hablando? || Why are you speaking?",
                  "H || 📝✏️ || Guess the action! || Take notes",
                  "H || 👀👂 || Guess the action! || Pay attention",
                  "E || 🧒🪑 || What are you doing? || I am sitting.",
                  "E || 🧒🗣️🇬🇧 || What are you doing right now? || I am speaking English."
                ],
                "mistakes": [
                  "M || I [is] taking notes. || am* / is / are || I am taking notes.",
                  "M || I am [learn] English now. || learning* / learn / learns || I am learning English now."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "General review — Present progressive (1st person); Yes/No questions (Long answers); Wh-questions (Why...?); clothes — Vocabulary: pants, T-shirt, shoes, dress, shorts, socks, sweater",
                "lines": [
                  "Q || What are you wearing today? || I am wearing a T-shirt and pants. / I am wearing a dress.",
                  "Q || Are you wearing a sweater today? || Yes, I am wearing a sweater. / No, I'm not wearing a sweater.",
                  "Q || Why are you wearing shorts? (Use your imagination!) || Because it is hot. / Because I am going to play soccer.",
                  "Q || Are you wearing socks right now? || Yes, I am wearing socks. / No, I'm not wearing socks.",
                  "Q || Why are you wearing a sweater? (Use your imagination!) || Because it is cold. / Because it is raining.",
                  "Q || What color are the shoes you are wearing? || I am wearing black shoes. / I am wearing white shoes.",
                  "Q || Are you wearing your school uniform today? || Yes, I am wearing my uniform. / No, I'm not wearing my uniform.",
                  "Q || What are you going to wear to the next party? Describe it. || I am going to wear a blue dress and white shoes.",
                  "F || I ____ wearing a T-shirt. || am || is / are",
                  "F || I am wearing ____ because it is cold. || a sweater || shorts / a dress",
                  "F || Are you ____ socks? || wearing || wear / wears",
                  "T || Estoy usando una camiseta. || I am wearing a T-shirt.",
                  "T || ¿Estás usando un suéter? || Are you wearing a sweater?",
                  "T || No, no estoy usando pantalones cortos. || No, I'm not wearing shorts.",
                  "T || Estoy usando un vestido porque hay una fiesta. || I am wearing a dress because there is a party.",
                  "T || ¿Por qué estás usando medias? || Why are you wearing socks?",
                  "H || 👖 || Guess the hidden clothes! || Pants",
                  "H || 🧦 || Guess the hidden clothes! || Socks",
                  "E || 👕 || What is this? || It's a T-shirt.",
                  "E || 🧒🧥 ❄️ || Why are you wearing a sweater? || Because it is cold."
                ],
                "mistakes": [
                  "M || I am [wear] a dress. || wearing* / wear / wears || I am wearing a dress.",
                  "M || I am wearing [a] shoes. || a / an / (nothing)* || I am wearing shoes."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "General review — Present progressive (3rd person); Yes/No questions (Short answers); Wh-questions (What/Who... with?); beach — Vocabulary: make a sandcastle, swim, have a picnic, surf, relax",
                "lines": [
                  "Q || What is your best friend doing at the beach? (Use your imagination!) || He is surfing. / She is making a sandcastle.",
                  "Q || Is your mom relaxing under the umbrella? (Use your imagination!) || Yes, she is. / No, she isn't.",
                  "Q || Who is your cousin swimming with? (Use your imagination!) || She is swimming with her brother.",
                  "Q || Is your dad surfing right now? (Use your imagination!) || Yes, he is. / No, he isn't. He is relaxing.",
                  "Q || What is your grandma doing at the beach while the kids are swimming? (Use your imagination!) || She is having a picnic. / She is relaxing.",
                  "Q || Who is your brother making a sandcastle with? (Use your imagination!) || He is making a sandcastle with my little cousin.",
                  "Q || Is Messi swimming or surfing on his vacation? (Use your imagination!) || He is swimming. / He is surfing.",
                  "Q || What is your uncle doing on the sand? (Use your imagination!) || He is having a picnic. / He is relaxing.",
                  "F || She ____ making a sandcastle. || is || are / am",
                  "F || ____ he surfing? || Is || Are / Does",
                  "F || They are ____ a picnic. || having || have / has",
                  "T || Él está surfeando. || He is surfing.",
                  "T || ¿Está ella nadando con su hermano? || Is she swimming with her brother?",
                  "T || Mi mamá está descansando bajo la sombrilla. || My mom is relaxing under the umbrella.",
                  "T || ¿Con quién está haciendo un castillo de arena? || Who is he making a sandcastle with?",
                  "T || No, él no está nadando. || No, he isn't swimming.",
                  "H || 🏄 || Guess the action! || Surf",
                  "E || 👧🏰🏖️ || What is she doing? || She is making a sandcastle.",
                  "E || 👨😎🏖️ || Is he swimming? || No, he isn't. He is relaxing.",
                  "E || 👦🏊👧 || Who is he swimming with? || He is swimming with his sister."
                ],
                "mistakes": [
                  "M || She [are] surfing. || is* / are / am || She is surfing.",
                  "M || [Does] he swimming? || Is* / Does / Are || Is he swimming?"
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "General review — Present progressive (3rd person); Wh-questions (Where/Who... with?); supermarket — Vocabulary: pick fruits, scan items, ask for help, carry a shopping basket, grab",
                "lines": [
                  "Q || What is your mom doing at the supermarket? (Use your imagination!) || She is picking fruits. / She is scanning items.",
                  "Q || Where is your dad carrying the shopping basket? (Use your imagination!) || He is carrying it to the checkout. / He is carrying it to the car.",
                  "Q || Who is your grandma asking for help? (Use your imagination!) || She is asking an employee for help.",
                  "Q || Where is your little brother grabbing candy? (Use your imagination!) || He is grabbing candy at the checkout.",
                  "Q || Who is your aunt shopping with? (Use your imagination!) || She is shopping with my uncle.",
                  "Q || Where is your cousin picking fruits? (Use your imagination!) || He is picking fruits in the fruit section.",
                  "Q || What is the cashier doing right now? (Use your imagination!) || He is scanning the items.",
                  "Q || Who is your dad carrying the bags with? (Use your imagination!) || He is carrying the bags with my brother.",
                  "F || Where ____ she picking fruits? || is || are / does",
                  "F || He is ____ a shopping basket. || carrying || carry / carries",
                  "F || Who is she shopping ____? || with || whit / to",
                  "T || Ella está escogiendo frutas. || She is picking fruits.",
                  "T || ¿Dónde está él cargando la canasta? || Where is he carrying the basket?",
                  "T || Mi abuela está pidiendo ayuda. || My grandma is asking for help.",
                  "T || El cajero está escaneando los productos. || The cashier is scanning the items.",
                  "T || ¿Con quién está comprando tu tía? || Who is your aunt shopping with?",
                  "H || 🧺🛒 || Guess the action! || Carry a shopping basket",
                  "E || 👩🍎🍌 || What is she doing? || She is picking fruits.",
                  "E || 👨🛒👦 || Who is he shopping with? || He is shopping with his son.",
                  "E || 👵🙋 👷 || What is she doing? || She is asking for help."
                ],
                "mistakes": [
                  "M || She is [pick] fruits. || picking* / pick / picks || She is picking fruits.",
                  "M || Where [are] he carrying the basket? || is* / are / does || Where is he carrying the basket?"
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Present progressive (1st & 3rd person); sports review — Vocabulary: sit, pay attention, take notes, learn, speak, clothes, beach and supermarket actions",
                "lines": [
                  "Q || What are you doing right now? || I am playing a game in English class.",
                  "Q || What are you wearing today? Tell me two things. || I am wearing a T-shirt and shorts.",
                  "Q || Is your coach speaking Spanish right now? || No, he isn't. / No, she isn't.",
                  "Q || What is your dad doing right now? (Use your imagination!) || He is working. / He is cooking.",
                  "Q || Who is your mom talking to right now? (Use your imagination!) || She is talking to my grandma.",
                  "Q || What sport is Messi playing? || He is playing soccer.",
                  "Q || Where is your best friend playing basketball? (Use your imagination!) || He is playing basketball at school.",
                  "Q || Why are you taking notes in class? || Because I want to learn.",
                  "Q || What is your sister doing at the beach? (Use your imagination!) || She is making a sandcastle.",
                  "Q || Tell me what three people in your family are doing right now. || My mom is cooking, my dad is working and my brother is sleeping.",
                  "F || What ____ you wearing? || are || is / am",
                  "F || He ____ playing tennis now. || is || are / am",
                  "F || They are ____ for help. || asking || ask / asks",
                  "T || Estoy sentado en mi silla. || I am sitting on my chair.",
                  "T || Ella está usando un suéter. || She is wearing a sweater.",
                  "T || ¿Qué está haciendo tu papá ahora? || What is your dad doing right now?",
                  "T || Ellos están jugando básquetbol. || They are playing basketball.",
                  "T || Mi hermano está cargando las bolsas. || My brother is carrying the bags.",
                  "H || 🏀 || Guess the hidden sport! || Basketball",
                  "E || 👧🎾 || What sport is she playing? || She is playing tennis."
                ],
                "mistakes": [
                  "M || What [is] you wearing? || are* / is / am || What are you wearing?",
                  "M || He is [play] soccer now. || playing* / play / plays || He is playing soccer now."
                ]
              }
            ]
          },
          {
            "week": 3,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "General review — Simple future: going to (1st person); Yes/No questions (Short answers); Wh-questions (What/Where...?); birthday — Vocabulary: celebrate, eat cake, take pictures, spend time with friends, open presents",
                "lines": [
                  "Q || What are you going to do on your next birthday? || I am going to celebrate with my family. / I am going to eat cake.",
                  "Q || Where are you going to celebrate your next birthday? || I am going to celebrate at home. / I am going to celebrate at a restaurant.",
                  "Q || Are you going to open presents in the morning? || Yes, I am. / No, I'm not.",
                  "Q || Are you going to take pictures with your friends? || Yes, I am. / No, I'm not.",
                  "Q || What are you going to eat at your party? || I am going to eat cake and pizza.",
                  "Q || Where are you going to spend time with your friends after the party? || I am going to spend time with them at the park.",
                  "Q || Are you going to invite your teacher to your birthday? || No, I'm not. / Yes, I am.",
                  "Q || What are you going to do first: eat cake or open presents? || I am going to open presents first.",
                  "F || I ____ going to eat cake. || am || is / are",
                  "F || ____ you going to take pictures? || Are || Is / Do",
                  "F || I am going to ____ presents. || open || opening / opened",
                  "T || Voy a celebrar con mi familia. || I am going to celebrate with my family.",
                  "T || ¿Vas a comer pastel? || Are you going to eat cake?",
                  "T || Voy a abrir regalos. || I am going to open presents.",
                  "T || ¿Dónde vas a celebrar? || Where are you going to celebrate?",
                  "T || Voy a pasar tiempo con mis amigos. || I am going to spend time with my friends.",
                  "H || 🎂 || Guess the action! || Eat cake",
                  "H || 🎁 || Guess the action! || Open presents",
                  "E || 🧒📸👧👦 || What are you going to do at the party? || I am going to take pictures with my friends.",
                  "E || 🧒🎉🏠 || Where are you going to celebrate? || I am going to celebrate at home."
                ],
                "mistakes": [
                  "M || I [is] going to eat cake. || am* / is / are || I am going to eat cake.",
                  "M || I am going to [opening] presents. || open* / opening / opened || I am going to open presents."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "General review — Simple future: going to (3rd person); Wh-questions (When/What...?) — Vocabulary: pay, ride, visit, buy, watch",
                "lines": [
                  "Q || What is your dad going to do next weekend? || He is going to visit my grandparents. / He is going to watch a movie.",
                  "Q || When is your mom going to buy groceries? || She is going to buy groceries on Saturday.",
                  "Q || What is your best friend going to watch this weekend? || He is going to watch a soccer game. / She is going to watch a movie.",
                  "Q || When is your cousin going to ride a bike with you? || She is going to ride a bike with me on Sunday.",
                  "Q || What is your brother going to buy with his savings? (Use your imagination!) || He is going to buy a video game.",
                  "Q || When is your grandma going to visit you? || She is going to visit me next month.",
                  "Q || What is Messi going to do after the game? (Use your imagination!) || He is going to rest. / He is going to visit his family.",
                  "Q || When is your dad going to pay for the pizza? || He is going to pay when it arrives.",
                  "F || She ____ going to visit her grandma. || is || are / am",
                  "F || When ____ he going to buy a toy? || is || are / does",
                  "F || He is going to ____ for the tickets. || pay || pays / paying",
                  "T || Él va a visitar a sus abuelos. || He is going to visit his grandparents.",
                  "T || ¿Cuándo va a comprar ella los víveres? || When is she going to buy groceries?",
                  "T || Mi mejor amigo va a ver un partido. || My best friend is going to watch a game.",
                  "T || Ella va a montar bicicleta el domingo. || She is going to ride a bike on Sunday.",
                  "T || ¿Qué va a hacer tu papá el próximo fin de semana? || What is your dad going to do next weekend?",
                  "H || 🚴 || Guess the action! || Ride a bike",
                  "E || 👨🎬 📅 || What is he going to do this weekend? || He is going to watch a movie.",
                  "E || 👩🛒 🗓️ || When is she going to buy groceries? (Use your imagination!) || She is going to buy groceries on Saturday.",
                  "E || 👦💳🍕 || What is he going to do? || He is going to pay for the pizza."
                ],
                "mistakes": [
                  "M || She [are] going to visit her grandma. || is* / are / am || She is going to visit her grandma.",
                  "M || He is going to [buys] a toy. || buy* / buys / buying || He is going to buy a toy."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "General review — Simple future: will (1st person); Wh-questions (What/Where/When...?) — Vocabulary: go to, read, paint, clean, dance, eat a dessert",
                "lines": [
                  "Q || What will you do next Sunday? || I will go to the park. / I will read a book.",
                  "Q || Where will you go on your next vacation? (Use your imagination!) || I will go to the beach. / I will go to my grandma's house.",
                  "Q || When will you clean your room? || I will clean my room on Saturday. / I will clean it tomorrow.",
                  "Q || What will you eat for dessert tonight? (Use your imagination!) || I will eat ice cream. / I will eat chocolate cake.",
                  "Q || Where will you dance at the next party? || I will dance in the living room. / I will dance in the garden.",
                  "Q || What will you paint in art class next week? (Use your imagination!) || I will paint a sunset. / I will paint my dog.",
                  "Q || When will you read your new book? || I will read it tonight. / I will read it on the weekend.",
                  "Q || What will you do if it rains next Sunday? (Use your imagination!) || I will stay at home and read.",
                  "F || I ____ go to the park next Sunday. || will || going / am",
                  "F || What ____ you eat for dessert? || will || do / are",
                  "F || I will ____ my room tomorrow. || clean || cleaning / cleaned",
                  "T || Iré al parque el próximo domingo. || I will go to the park next Sunday.",
                  "T || ¿Qué comerás de postre? || What will you eat for dessert?",
                  "T || Limpiaré mi cuarto mañana. || I will clean my room tomorrow.",
                  "T || ¿Dónde bailarás? || Where will you dance?",
                  "T || Leeré un libro esta noche. || I will read a book tonight.",
                  "H || 🍰🍨 || Guess the action! || Eat a dessert",
                  "E || 🧒📖 🌙 || When will you read? || I will read tonight.",
                  "E || 🧒🎨🌅 || What will you paint? || I will paint a sunset.",
                  "E || 🧒🏖️ ✈️ || Where will you go on vacation? || I will go to the beach."
                ],
                "mistakes": [
                  "M || I will [going] to the park. || go* / going / goes || I will go to the park.",
                  "M || What [do] you eat for dessert tomorrow? || will* / do / are || What will you eat for dessert tomorrow?"
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "General review — Simple future: will (3rd person); Wh-questions (What/Where/Who... with?) — Vocabulary: go to the jungle, meet, play the guitar, dance, laugh, jump",
                "lines": [
                  "Q || What will your sister do on her next vacation? (Use your imagination!) || She will go to the jungle. / She will meet new friends.",
                  "Q || Where will your dad play the guitar at the next family party? || He will play the guitar in the garden.",
                  "Q || Who will your best friend dance with at the school party? (Use your imagination!) || He will dance with his classmates.",
                  "Q || What will your cousin do when she sees a monkey in the jungle? (Use your imagination!) || She will laugh. / She will take a picture.",
                  "Q || Who will your mom meet on her next trip? (Use your imagination!) || She will meet her old friends.",
                  "Q || Where will your brother jump on his next vacation? (Use your imagination!) || He will jump into the pool. / He will jump on the trampoline.",
                  "Q || What will Shakira do at her next concert? || She will dance and sing.",
                  "Q || Who will your grandpa go to the jungle with? (Use your imagination!) || He will go with my uncle.",
                  "F || She ____ go to the jungle. || will || wills / going",
                  "F || Who ____ he dance with? || will || do / is",
                  "F || He will ____ the guitar. || play || plays / playing",
                  "T || Ella irá a la selva. || She will go to the jungle.",
                  "T || ¿Con quién bailará él? || Who will he dance with?",
                  "T || Mi papá tocará la guitarra. || My dad will play the guitar.",
                  "T || Ella se reirá cuando vea al mono. || She will laugh when she sees the monkey.",
                  "T || ¿Dónde saltará tu hermano? || Where will your brother jump?",
                  "H || 🎸 || Guess the action! || Play the guitar",
                  "E || 👧🌴🐒 || Where will she go on vacation? || She will go to the jungle.",
                  "E || 👨🎸👩💃 || Who will he play the guitar with? (Use your imagination!) || He will play the guitar with his wife. / He will play with my mom.",
                  "E || 👦😂 || What will he do when he hears the joke? || He will laugh."
                ],
                "mistakes": [
                  "M || She [wills] go to the jungle. || will* / wills / going || She will go to the jungle.",
                  "M || He will [plays] the guitar. || play* / plays / playing || He will play the guitar."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "General review — Simple future: going to & will; Wh-questions (Where/Who...?); plans for the weekend — Vocabulary: go to school, do homework, watch TV, visit, buy, travel",
                "lines": [
                  "Q || What are you going to do this weekend? || I am going to visit my grandma. / I am going to watch TV.",
                  "Q || Where will you travel on your next vacation? (Use your imagination!) || I will travel to Cartagena. / I will travel to Mexico.",
                  "Q || Who are you going to visit this weekend? || I am going to visit my cousins. / I am going to visit my grandpa.",
                  "Q || Is your dad going to work on Saturday? || Yes, he is. / No, he isn't.",
                  "Q || Will you do your homework on Friday or on Sunday? || I will do my homework on Friday.",
                  "Q || Where is your family going to buy food for the weekend? || They are going to buy food at the supermarket.",
                  "Q || Who will your mom travel with on her next trip? (Use your imagination!) || She will travel with my aunt.",
                  "Q || What will your best friend watch on TV this weekend? (Use your imagination!) || He will watch cartoons. / She will watch a movie.",
                  "Q || Are you going to go to school on Monday? || Yes, I am.",
                  "Q || Tell me your plans for the weekend. Use \"going to\" and \"will\". || I am going to visit my grandma and I will watch a movie.",
                  "F || I ____ going to visit my cousins. || am || is / will",
                  "F || She ____ travel to Mexico next year. || will || going / is",
                  "F || Where ____ you going to buy food? || are || is / will",
                  "T || Voy a visitar a mis primos. || I am going to visit my cousins.",
                  "T || ¿Dónde viajarás? || Where will you travel?",
                  "T || Mi papá va a trabajar el sábado. || My dad is going to work on Saturday.",
                  "T || Veré televisión el domingo. || I will watch TV on Sunday.",
                  "T || ¿Con quién vas a ir? || Who are you going to go with?",
                  "H || ✈️🧳 || Guess the action! || Travel",
                  "E || 🧒🏠👵 📅 || What are you going to do this weekend? || I am going to visit my grandma."
                ],
                "mistakes": [
                  "M || I am going [visit] my cousins. || to visit* / visit / visiting || I am going to visit my cousins.",
                  "M || She [will going] to travel. || is going* / will going / wills || She is going to travel."
                ]
              }
            ]
          },
          {
            "week": 4,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Favorite activities — Gerunds (1st person); Positive sentences; Yes/No questions (Long answers) — Vocabulary: playing, reading, drawing",
                "lines": [
                  "Q || What do you like doing in your free time? || I like playing video games. / I like reading.",
                  "Q || Do you like drawing? || Yes, I like drawing. / No, I don't like drawing.",
                  "Q || Do you like playing soccer on weekends? || Yes, I like playing soccer on weekends. / No, I don't like playing soccer.",
                  "Q || Do you like reading before bed? || Yes, I like reading before bed. / No, I don't like reading before bed.",
                  "Q || What do you enjoy doing when you are alone? || I enjoy drawing. / I enjoy reading comics.",
                  "Q || Do you like playing with your cousins? || Yes, I love playing with my cousins. / No, I don't like playing with them.",
                  "Q || Complete: I like ____ (read) books about animals. || I like reading books about animals.",
                  "Q || Complete: I enjoy ____ (draw) when it rains. || I enjoy drawing when it rains.",
                  "F || I like ____ video games. || playing || play / played",
                  "F || Do you like ____? || drawing || draw / draws",
                  "F || I enjoy ____ comics. || reading || read / reads",
                  "T || Me gusta jugar videojuegos. || I like playing video games.",
                  "T || ¿Te gusta dibujar? || Do you like drawing?",
                  "T || Sí, me gusta leer antes de dormir. || Yes, I like reading before bed.",
                  "T || No, no me gusta jugar fútbol. || No, I don't like playing soccer.",
                  "T || Disfruto dibujar cuando llueve. || I enjoy drawing when it rains.",
                  "H || 🎮 || Guess the action! || Playing video games",
                  "H || 📖 || Guess the action! || Reading",
                  "E || 🧒❤️✏️ || What do you like doing? || I like drawing.",
                  "E || 🧒❤️⚽ || Do you like playing soccer? || Yes, I like playing soccer."
                ],
                "mistakes": [
                  "M || I like [play] video games. || playing* / play / plays || I like playing video games.",
                  "M || Do you like [read]? || reading* / read / reads || Do you like reading?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Favorite activities — Gerunds (1st person); Wh-questions (What/Where...?) — Vocabulary: playing, reading, drawing, listening to",
                "lines": [
                  "Q || What do you like listening to when you are sad? || I like listening to happy music. / I like listening to my favorite singer.",
                  "Q || Where do you like reading? || I like reading in my bed. / I like reading in the garden.",
                  "Q || What do you enjoy drawing? || I enjoy drawing animals. / I enjoy drawing cars.",
                  "Q || Where do you like playing with your friends? || I like playing at the park. / I like playing at school.",
                  "Q || What do you like listening to in the car? || I like listening to pop music.",
                  "Q || Where do you enjoy drawing? || I enjoy drawing in my room. / I enjoy drawing in art class.",
                  "Q || What do you like playing when it is raining? || I like playing board games. / I like playing video games.",
                  "Q || What do you like reading: comics or stories? || I like reading comics.",
                  "F || What do you like ____ to? || listening || listen / listens",
                  "F || I like reading ____ my bed. || in || on / at",
                  "F || Where do you enjoy ____? || playing || play / plays",
                  "T || Me gusta escuchar música pop. || I like listening to pop music.",
                  "T || ¿Dónde te gusta leer? || Where do you like reading?",
                  "T || Disfruto dibujar animales. || I enjoy drawing animals.",
                  "T || ¿Qué te gusta jugar cuando llueve? || What do you like playing when it is raining?",
                  "T || Me gusta jugar en el parque. || I like playing at the park.",
                  "H || 🎧🎵 || Guess the action! || Listening to music",
                  "E || 🧒📖🛏️ || Where do you like reading? || I like reading in my bed.",
                  "E || 🧒✏️🐶🐱 || What do you enjoy drawing? || I enjoy drawing animals.",
                  "E || 🧒🎲 🌧️ || What do you like playing when it rains? || I like playing board games."
                ],
                "mistakes": [
                  "M || I like [listen] to music. || listening* / listen / listens || I like listening to music.",
                  "M || Where do you like [reads]? || reading* / reads / read || Where do you like reading?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Favorite activities — Gerunds (3rd person); Yes/No questions (Long answers); Wh-questions (When/Who... with?) — Vocabulary: playing, reading, drawing, listening to, dancing",
                "lines": [
                  "Q || What does your mom enjoy doing during the day? || She enjoys listening to music. / She enjoys reading.",
                  "Q || Does your dad like dancing at parties? || Yes, he likes dancing at parties. / No, he doesn't like dancing.",
                  "Q || When does your best friend like playing video games? || He likes playing video games after school. / She likes playing on weekends.",
                  "Q || Who does your sister like dancing with? || She likes dancing with her friends. / She likes dancing with my mom.",
                  "Q || Does your grandma like reading the newspaper? || Yes, she likes reading the newspaper. / No, she doesn't like reading the newspaper.",
                  "Q || When does your cousin enjoy drawing? || He enjoys drawing when he is bored. / She enjoys drawing at night.",
                  "Q || Who does your dad like listening to music with? || He likes listening to music with my mom. / He likes listening to music alone.",
                  "Q || Does Shakira like dancing? || Yes, she loves dancing.",
                  "F || She ____ listening to music. || likes || like / liking",
                  "F || ____ he like dancing? || Does || Do / Is",
                  "F || My grandma enjoys ____ the newspaper. || reading || read / reads",
                  "T || A mi mamá le gusta escuchar música. || My mom likes listening to music.",
                  "T || ¿A tu papá le gusta bailar? || Does your dad like dancing?",
                  "T || A él le gusta jugar videojuegos después de la escuela. || He likes playing video games after school.",
                  "T || ¿Con quién le gusta bailar a tu hermana? || Who does your sister like dancing with?",
                  "T || A mi abuela no le gusta leer el periódico. || My grandma doesn't like reading the newspaper.",
                  "H || 💃🕺 || Guess the action! || Dancing",
                  "E || 👩❤️🎧 || What does she enjoy doing? || She enjoys listening to music.",
                  "E || 👨❤️💃🎉 || Does he like dancing at parties? || Yes, he likes dancing at parties.",
                  "E || 👧💃👩 || Who does she like dancing with? || She likes dancing with her mom."
                ],
                "mistakes": [
                  "M || She [like] dancing. || likes* / like / liking || She likes dancing.",
                  "M || My dad enjoys [listen] to music. || listening* / listen / listens || My dad enjoys listening to music."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Monthly Evaluation — Cumulative review of previously introduced structures (simple present, present progressive, going to, will, gerunds, simple past, past progressive) — Vocabulary Review",
                "lines": [
                  "Q || What does your uncle do every day? || He works and exercises.",
                  "Q || What are you wearing right now? || I am wearing a T-shirt and pants.",
                  "Q || What are you going to do next weekend? || I am going to visit my grandparents.",
                  "Q || What will you eat for dessert tonight? || I will eat ice cream.",
                  "Q || What do you like doing when you are bored? || I like drawing.",
                  "Q || What did you do yesterday after school? || I did my homework and played video games.",
                  "Q || What were you doing yesterday at 8:00 PM? || I was watching TV.",
                  "Q || How often does your mom cook? || She always cooks.",
                  "Q || Where is your best friend right now? (Use your imagination!) || He is at school. / She is at home.",
                  "Q || Spell the word \"dancing\". || D-A-N-C-I-N-G.",
                  "F || She ____ going to buy a dress. || is || are / will",
                  "F || We ____ to the park last Sunday. || went || go / going",
                  "F || He ____ dancing with his friends. || likes || like / liking",
                  "T || Me gusta leer en mi cama. || I like reading in my bed.",
                  "T || Él va a comprar un juguete. || He is going to buy a toy.",
                  "T || Ella estaba durmiendo cuando el teléfono sonó. || She was sleeping when the phone rang.",
                  "T || Mi papá trabaja ocho horas. || My dad works eight hours.",
                  "S || yellow star:2, green heart:3 || How many hearts are there? || There are three hearts.",
                  "H || 👗 || Guess the hidden clothes! || Dress",
                  "E || 👧📸 🎂 || What is she going to do at the party? || She is going to take pictures."
                ],
                "mistakes": [
                  "M || She [like] reading. || likes* / like / liking || She likes reading.",
                  "M || I [am] going to the park yesterday. || went* / am / go || I went to the park yesterday."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Monthly Evaluation — Gerunds review; cumulative review — Vocabulary: playing, reading, drawing, listening to, dancing",
                "lines": [
                  "Q || What do you like doing on weekends? || I like playing with my friends.",
                  "Q || Does your best friend like reading? || Yes, he likes reading. / No, she doesn't like reading.",
                  "Q || What does your mom enjoy doing when she is tired? || She enjoys listening to music. / She enjoys reading.",
                  "Q || Do you like dancing at parties? || Yes, I like dancing at parties. / No, I don't like dancing.",
                  "Q || Who does your brother like playing with? || He likes playing with his friends.",
                  "Q || Where does your dad like listening to music? || He likes listening to music in the car.",
                  "Q || What did your family do last weekend? || We visited my grandma.",
                  "Q || What is your sister going to do tomorrow? || She is going to study.",
                  "Q || Were you reading yesterday at 7:30 PM? || Yes, I was. / No, I wasn't.",
                  "Q || Tell me three things you like doing. || I like playing soccer, drawing and listening to music.",
                  "F || I ____ drawing animals. || like || likes / liking",
                  "F || Does she like ____ at parties? || dancing || dance / dances",
                  "F || They were ____ at the park. || playing || play / played",
                  "T || Me gusta jugar fútbol. || I like playing soccer.",
                  "T || ¿Te gusta escuchar música? || Do you like listening to music?",
                  "T || A mi hermano le gusta dibujar. || My brother likes drawing.",
                  "T || Ella no disfruta bailar. || She doesn't enjoy dancing.",
                  "T || Ellos estaban leyendo en la biblioteca. || They were reading at the library.",
                  "H || ✏️🖼️ || Guess the action! || Drawing",
                  "E || 👦❤️🎮👦 || Who does he like playing video games with? || He likes playing video games with his friend."
                ],
                "mistakes": [
                  "M || I like [dance]. || dancing* / dance / dances || I like dancing.",
                  "M || [Do] she like reading? || Does* / Do / Is || Does she like reading?"
                ]
              }
            ]
          },
          {
            "week": 5,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "General review — Simple past (1st person); Yes/No questions (Short answers); Wh-questions (What/When...?) — Vocabulary: visit, play, watch movies, order, stay at home",
                "lines": [
                  "Q || What did you do last weekend? || I visited my grandma. / I stayed at home and watched movies.",
                  "Q || Did you order pizza last weekend? || Yes, I did. / No, I didn't.",
                  "Q || When did you watch a movie last week? || I watched a movie on Friday night.",
                  "Q || Did you stay at home when it was raining? || Yes, I did. / No, I didn't.",
                  "Q || What did you play with your cousins last Sunday? || I played soccer. / I played board games.",
                  "Q || When did you visit your grandparents? || I visited them last Saturday. / I visited them last month.",
                  "Q || Did you play video games last night before bed? || Yes, I did. / No, I didn't.",
                  "Q || What did you order at the restaurant on your last birthday? || I ordered a hamburger. / I ordered pasta.",
                  "F || I ____ pizza last Saturday. || ordered || order / ordering",
                  "F || ____ you stay at home? || Did || Do / Were",
                  "F || When ____ you visit your grandma? || did || do / were",
                  "T || Visité a mi abuela el fin de semana pasado. || I visited my grandma last weekend.",
                  "T || ¿Pediste pizza? || Did you order pizza?",
                  "T || Me quedé en casa y vi películas. || I stayed at home and watched movies.",
                  "T || ¿Cuándo jugaste con tus primos? || When did you play with your cousins?",
                  "T || No visité a mis abuelos. || I didn't visit my grandparents.",
                  "H || 🏠🛋️ || Guess the action! || Stay at home",
                  "H || 🎬🍿 || Guess the action! || Watch movies",
                  "E || 🧒📞🍕 || What did you do last weekend? || I ordered pizza.",
                  "E || 🧒🏠👵 📅 || When did you visit your grandma? (Use your imagination!) || I visited her last Saturday."
                ],
                "mistakes": [
                  "M || I [visit] my grandma last weekend. || visited* / visit / visiting || I visited my grandma last weekend.",
                  "M || [Do] you order pizza yesterday? || Did* / Do / Does || Did you order pizza yesterday?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "General review — Simple past (1st person); Yes/No questions (Long answers); Wh-questions (What time/Where...?) — Vocabulary: wake up, take a shower, do homework, go to, finish",
                "lines": [
                  "Q || What did you do yesterday? || I woke up early, went to school and did my homework.",
                  "Q || What time did you wake up yesterday? || I woke up at 6:00 AM. / I woke up at 7:30 AM.",
                  "Q || Did you take a shower before school yesterday? || Yes, I took a shower before school. / No, I didn't take a shower before school.",
                  "Q || Where did you do your homework yesterday? || I did my homework in the kitchen. / I did my homework at the library.",
                  "Q || What time did you finish your homework? || I finished my homework at 6:00 PM.",
                  "Q || Did you go to the park yesterday after school? || Yes, I went to the park. / No, I didn't go to the park.",
                  "Q || Where did you go last Sunday with your family? || I went to the mall. / I went to my aunt's house.",
                  "Q || Did you finish your dinner last night? || Yes, I finished my dinner. / No, I didn't finish my dinner.",
                  "F || I ____ up at 6:00 AM yesterday. || woke || wake / waked",
                  "F || What time ____ you finish? || did || do / were",
                  "F || I ____ to the park yesterday. || went || go / goed",
                  "T || Me desperté a las seis ayer. || I woke up at six yesterday.",
                  "T || ¿Te bañaste antes de la escuela? || Did you take a shower before school?",
                  "T || Hice mi tarea en la cocina. || I did my homework in the kitchen.",
                  "T || ¿A qué hora terminaste? || What time did you finish?",
                  "T || Fui al centro comercial el domingo. || I went to the mall on Sunday.",
                  "H || 🚿 || Guess the action! || Take a shower",
                  "E || 🧒⏰ 🕕 || What time did you wake up yesterday? || I woke up at 6:00 AM.",
                  "E || 🧒📝🍳 || Where did you do your homework? || I did my homework in the kitchen.",
                  "E || 🧒✅📝 🕕 || What time did you finish your homework? || I finished my homework at 6:00 PM."
                ],
                "mistakes": [
                  "M || I [waked] up at six. || woke* / waked / wake || I woke up at six.",
                  "M || Where [do] you do your homework yesterday? || did* / do / does || Where did you do your homework yesterday?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "General review — Simple past (3rd person); Wh-questions (What/Who... with?); zoo — Vocabulary: see, walk around, talk, take pictures, drink",
                "lines": [
                  "Q || What did your best friend do at the zoo? (Use your imagination!) || He saw a lion. / She took pictures of the monkeys.",
                  "Q || Who did your cousin walk around the zoo with? (Use your imagination!) || She walked around the zoo with her dad.",
                  "Q || What did your little brother drink at the zoo? (Use your imagination!) || He drank juice. / He drank water.",
                  "Q || Who did your mom talk to at the zoo? (Use your imagination!) || She talked to the zookeeper. / She talked to my aunt.",
                  "Q || What animals did your family see at the zoo? (Use your imagination!) || They saw elephants and giraffes.",
                  "Q || Who did your sister take pictures with? (Use your imagination!) || She took pictures with my grandma.",
                  "Q || What did your dad do when he saw the snakes? (Use your imagination!) || He walked away fast. / He took a picture.",
                  "Q || Who did Messi go to the zoo with? (Use your imagination!) || He went with his kids.",
                  "F || She ____ a lion at the zoo. || saw || see / seed",
                  "F || Who did he ____ to? || talk || talked / talks",
                  "F || They ____ pictures of the monkeys. || took || take / taked",
                  "T || Él vio un león en el zoológico. || He saw a lion at the zoo.",
                  "T || ¿Con quién caminó ella por el zoológico? || Who did she walk around the zoo with?",
                  "T || Mi hermano tomó jugo. || My brother drank juice.",
                  "T || Ella habló con el cuidador. || She talked to the zookeeper.",
                  "T || Ellos tomaron fotos de los monos. || They took pictures of the monkeys.",
                  "H || 🦁 || Guess the hidden animal! || Lion",
                  "E || 👦🦒📸 || What did he do at the zoo? || He took pictures of the giraffe.",
                  "E || 👧🥤 🐒 || What did she drink at the zoo? || She drank juice.",
                  "E || 👩🗣️👨 🦓 || Who did she talk to? || She talked to the man. / She talked to him."
                ],
                "mistakes": [
                  "M || He [see] a lion yesterday. || saw* / see / seed || He saw a lion yesterday.",
                  "M || She [drinked] juice at the zoo. || drank* / drinked / drink || She drank juice at the zoo."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "General review — Simple past (3rd person); Wh-questions (What/Why/Who... with?) — Vocabulary: walk, listen to music, rest, help, study, chat",
                "lines": [
                  "Q || What did your dad do last Tuesday after work? || He rested. / He listened to music.",
                  "Q || Why did your mom help your brother yesterday? || Because he didn't understand his homework.",
                  "Q || Who did your best friend chat with last night? (Use your imagination!) || She chatted with her cousin.",
                  "Q || Why did your grandpa walk to the store? (Use your imagination!) || Because his car was broken. / Because he wanted to exercise.",
                  "Q || What did your sister study last Tuesday? || She studied math. / She studied science.",
                  "Q || Who did your uncle listen to music with at the party? (Use your imagination!) || He listened to music with his friends.",
                  "Q || Why did your teacher rest on Sunday? (Use your imagination!) || Because she was very tired.",
                  "Q || What did Santa do last Christmas after delivering the presents? || He rested. / He chatted with his elves.",
                  "F || He ____ music last night. || listened to || listen to / listening to",
                  "F || Why ____ she help her brother? || did || do / does",
                  "F || My grandpa ____ to the store. || walked || walk / walking",
                  "T || Mi papá descansó el martes. || My dad rested on Tuesday.",
                  "T || ¿Por qué ayudó tu mamá a tu hermano? || Why did your mom help your brother?",
                  "T || Ella chateó con su prima anoche. || She chatted with her cousin last night.",
                  "T || Mi abuelo caminó a la tienda. || My grandpa walked to the store.",
                  "T || ¿Con quién estudió él? || Who did he study with?",
                  "H || 💬📱 || Guess the action! || Chat",
                  "E || 👨🛋️😌 || What did he do last Tuesday? || He rested.",
                  "E || 👩📚👦 ❓ || Why did she help him? || Because he didn't understand his homework.",
                  "E || 👧📱💬👧 || Who did she chat with? || She chatted with her friend."
                ],
                "mistakes": [
                  "M || He [rest] last Tuesday. || rested* / rest / resting || He rested last Tuesday.",
                  "M || Why [does] she help her brother yesterday? || did* / does / do || Why did she help her brother yesterday?"
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Simple past (1st & 3rd person); describe what they did — Vocabulary: visit, play, watch movies, order, stay at home, wake up, take a shower, do homework, go to, finish, see, walk around, talk, take pictures, drink, walk, listen to music, rest, help, study, chat",
                "lines": [
                  "Q || What did you do last weekend? Tell me three things. || I visited my aunt, I played soccer and I watched a movie.",
                  "Q || What time did you wake up last Sunday? || I woke up at 9:00 AM.",
                  "Q || What did your mom do yesterday? || She worked and cooked dinner.",
                  "Q || Why did your best friend stay at home last Saturday? (Use your imagination!) || Because he was sick. / Because it was raining.",
                  "Q || Who did your dad talk to on the phone last night? (Use your imagination!) || He talked to my uncle.",
                  "Q || Where did you go on your last trip? || I went to the beach. / I went to Medellín.",
                  "Q || Did your sister finish her homework last night? || Yes, she did. / No, she didn't.",
                  "Q || What did your grandma drink at breakfast yesterday? || She drank coffee.",
                  "Q || What did Shakira do at her last concert? || She sang and danced.",
                  "Q || What did your family do last Christmas? || We ate dinner together and opened presents.",
                  "F || I ____ a movie last night. || watched || watch / watching",
                  "F || She ____ her homework at 5:00 PM. || finished || finish / finishing",
                  "F || They ____ at home because it was raining. || stayed || stay / staying",
                  "T || Me quedé en casa el sábado. || I stayed at home on Saturday.",
                  "T || ¿Qué hizo tu mamá ayer? || What did your mom do yesterday?",
                  "T || Él descansó después del trabajo. || He rested after work.",
                  "T || Ellos vieron un elefante. || They saw an elephant.",
                  "T || ¿Por qué se quedó en casa tu amigo? || Why did your friend stay at home?",
                  "H || 📸 || Guess the action! || Take pictures",
                  "E || 👧📚 👦🎮 👨📺 || What did they do yesterday? || She studied, he played video games and the dad watched TV."
                ],
                "mistakes": [
                  "M || I [stay] at home last Saturday. || stayed* / stay / staying || I stayed at home last Saturday.",
                  "M || She [finish] her homework at 5:00 PM. || finished* / finish / finishes || She finished her homework at 5:00 PM."
                ]
              }
            ]
          },
          {
            "week": 6,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "General review — Past progressive (3rd person plural); Yes/No questions (Short answers); Wh-questions (When/Where...?) — Vocabulary: draw, listen to music, eat, drink, play, fly",
                "lines": [
                  "Q || What were your classmates doing at school yesterday? || They were drawing. / They were playing.",
                  "Q || Were your friends listening to music during the break? || Yes, they were. / No, they weren't.",
                  "Q || Where were your cousins playing last Sunday? || They were playing in the garden. / They were playing at the park.",
                  "Q || When were your parents drinking coffee this morning? || They were drinking coffee at 6:00 AM.",
                  "Q || Were your classmates eating in the classroom? || No, they weren't. / Yes, they were.",
                  "Q || Where were your friends flying a kite? || They were flying a kite at the beach.",
                  "Q || When were your neighbors playing music last night? (Use your imagination!) || They were playing music at 10:00 PM.",
                  "Q || Were your grandparents eating lunch at 1:00 PM? || Yes, they were. / No, they weren't.",
                  "F || They ____ drawing at school. || were || was / are",
                  "F || ____ they listening to music? || Were || Was / Did",
                  "F || Where ____ they playing? || were || was / are",
                  "T || Ellos estaban dibujando en la escuela. || They were drawing at school.",
                  "T || ¿Estaban tus amigos escuchando música? || Were your friends listening to music?",
                  "T || ¿Dónde estaban jugando tus primos? || Where were your cousins playing?",
                  "T || Ellos estaban tomando café a las seis. || They were drinking coffee at six.",
                  "T || Mis amigos estaban volando una cometa. || My friends were flying a kite.",
                  "H || 🪁 || Guess the action! || Fly a kite",
                  "E || 👧👦✏️🎨 || What were they doing at school? || They were drawing.",
                  "E || 👨👩☕ 🕕 || When were they drinking coffee? || They were drinking coffee at 6:00 AM.",
                  "E || 🧒🧒🪁🏖️ || Where were they flying a kite? || They were flying a kite at the beach."
                ],
                "mistakes": [
                  "M || They [was] drawing at school. || were* / was / are || They were drawing at school.",
                  "M || Where [was] they playing? || were* / was / are || Where were they playing?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "General review — Simple past & Past progressive (3rd person singular); interrupted actions; Wh-questions (What/Why...?) — Vocabulary: sleep, ring, watch TV, knock, cry, bark",
                "lines": [
                  "Q || What happened last night at your house? (Use your imagination!) || The phone rang while my dad was sleeping.",
                  "Q || What was your mom doing when the phone rang? || She was watching TV. / She was cooking.",
                  "Q || Why was your little cousin crying when you got home? (Use your imagination!) || Because he was hungry. / Because she wanted her mom.",
                  "Q || What did your dog do when someone knocked on the door? (Use your imagination if you don't have a dog!) || It barked.",
                  "Q || Why did your sister knock on your door last night? (Use your imagination!) || Because she wanted to borrow my charger.",
                  "Q || What was your dad doing when the dog barked? || He was sleeping. / He was reading.",
                  "Q || Why was your teacher sleeping when the bell rang? (Use your imagination!) || Because she was very tired.",
                  "Q || What happened to Santa when the reindeer were sleeping? (Use your imagination!) || His phone rang. / A kid knocked on his door.",
                  "F || She was watching TV ____ the phone rang. || when || while / because",
                  "F || Why ____ he crying? || was || were / did",
                  "F || The dog ____ when the bell rang. || barked || bark / barking",
                  "T || Ella estaba viendo televisión cuando el teléfono sonó. || She was watching TV when the phone rang.",
                  "T || ¿Por qué estaba llorando tu primo? || Why was your cousin crying?",
                  "T || El perro ladró cuando alguien tocó la puerta. || The dog barked when someone knocked on the door.",
                  "T || ¿Qué pasó anoche? || What happened last night?",
                  "T || Mi papá estaba durmiendo cuando el perro ladró. || My dad was sleeping when the dog barked.",
                  "H || 🐕💢 || Guess the action! || Bark",
                  "E || 👩📺 📞 || What was she doing when the phone rang? || She was watching TV.",
                  "E || 👶😭 🍼 || Why was the baby crying? || Because he was hungry.",
                  "E || 🐕 🚪✊ || What did the dog do when someone knocked? || It barked."
                ],
                "mistakes": [
                  "M || She was sleeping when the phone [rings]. || rang* / rings / ring || She was sleeping when the phone rang.",
                  "M || Why [were] he crying? || was* / were / did || Why was he crying?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "General review — Past progressive (3rd person singular); Positive sentences; Yes/No questions (Short answers); park — Vocabulary: draw, pick flowers, feed, take pictures, blow bubbles",
                "lines": [
                  "Q || What was your sister doing at the park yesterday afternoon? (Use your imagination!) || She was picking flowers. / She was blowing bubbles.",
                  "Q || Was your grandpa feeding the ducks at the park? (Use your imagination!) || Yes, he was. / No, he wasn't.",
                  "Q || Was your best friend drawing at the park? (Use your imagination!) || Yes, she was. / No, he wasn't.",
                  "Q || What was your mom doing while you were playing at the park? (Use your imagination!) || She was taking pictures. / She was reading.",
                  "Q || Was your little cousin blowing bubbles? (Use your imagination!) || Yes, he was. / No, she wasn't.",
                  "Q || What was your dad doing at the park at 4:00 PM? (Use your imagination!) || He was feeding the pigeons. / He was taking pictures.",
                  "Q || Was your dog picking flowers? (Use your imagination!) || No, it wasn't. It was running.",
                  "Q || Complete: My aunt ____ (take) pictures of the flowers. || My aunt was taking pictures of the flowers.",
                  "F || She ____ picking flowers. || was || were / is",
                  "F || ____ he feeding the ducks? || Was || Were / Did",
                  "F || He was ____ bubbles. || blowing || blow / blows",
                  "T || Ella estaba recogiendo flores. || She was picking flowers.",
                  "T || ¿Estaba tu abuelo alimentando a los patos? || Was your grandpa feeding the ducks?",
                  "T || Mi primo estaba soplando burbujas. || My cousin was blowing bubbles.",
                  "T || No, ella no estaba dibujando. || No, she wasn't drawing.",
                  "T || Mi mamá estaba tomando fotos. || My mom was taking pictures.",
                  "H || 🫧 || Guess the action! || Blow bubbles",
                  "H || 🌸🌼 || Guess the action! || Pick flowers",
                  "E || 👴🦆🍞 || What was he doing at the park? || He was feeding the ducks.",
                  "E || 👧🫧 || Was she blowing bubbles? || Yes, she was."
                ],
                "mistakes": [
                  "M || She [were] picking flowers. || was* / were / is || She was picking flowers.",
                  "M || He was [feed] the ducks. || feeding* / feed / feeds || He was feeding the ducks."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "General review — Past progressive (3rd person singular); Wh-questions (What/Where/Who...?) — Vocabulary: draw, pick flowers, feed, take pictures, blow bubbles, jump rope",
                "lines": [
                  "Q || Who was jumping rope at the park yesterday afternoon? (Use your imagination!) || My sister was jumping rope.",
                  "Q || Where was your grandma picking flowers? (Use your imagination!) || She was picking flowers next to the lake.",
                  "Q || What was your best friend doing with the bread? (Use your imagination!) || He was feeding the ducks.",
                  "Q || Who was taking pictures of your family at the park? (Use your imagination!) || My uncle was taking pictures.",
                  "Q || Where was your little brother blowing bubbles? (Use your imagination!) || He was blowing bubbles near the swings.",
                  "Q || What was Messi doing during the week? (Use your imagination!) || He was training with his team.",
                  "Q || Who was drawing the trees at the park? (Use your imagination!) || My cousin was drawing the trees.",
                  "Q || Where was your dog jumping? (Use your imagination!) || It was jumping in the grass.",
                  "F || Who ____ jumping rope? || was || were / did",
                  "F || She was picking flowers ____ the lake. || next to || next / in",
                  "F || What ____ he doing with the bread? || was || were / did",
                  "T || ¿Quién estaba saltando la cuerda? || Who was jumping rope?",
                  "T || Ella estaba recogiendo flores al lado del lago. || She was picking flowers next to the lake.",
                  "T || Mi tío estaba tomando fotos. || My uncle was taking pictures.",
                  "T || ¿Dónde estaba soplando burbujas tu hermano? || Where was your brother blowing bubbles?",
                  "T || Mi primo estaba dibujando los árboles. || My cousin was drawing the trees.",
                  "H || 🪢🧒 || Guess the action! || Jump rope",
                  "E || 👧🪢 🌳 || What was she doing at the park? || She was jumping rope.",
                  "E || 👩📸👨👧 || Who was taking pictures? || The woman was taking pictures. / She was taking pictures.",
                  "E || 👦🫧🛝 || Where was he blowing bubbles? || He was blowing bubbles near the slide."
                ],
                "mistakes": [
                  "M || Who [were] jumping rope? || was* / were / did || Who was jumping rope?",
                  "M || She was [take] pictures. || taking* / take / takes || She was taking pictures."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Past progressive (3rd person); interrupted actions; professions — Vocabulary: draw, listen to music, eat, drink, play, fly, sleep, ring, watch TV, knock, cry, bark, pick flowers, feed, take pictures, blow bubbles, jump rope",
                "lines": [
                  "Q || What were your friends doing at the park yesterday afternoon? || They were jumping rope and blowing bubbles.",
                  "Q || What was your mom doing when someone knocked on the door last night? || She was watching TV.",
                  "Q || Were your cousins flying a kite last Sunday? || Yes, they were. / No, they weren't.",
                  "Q || Why was your baby cousin crying at the party? (Use your imagination!) || Because he was tired.",
                  "Q || Who was feeding the ducks at the park? (Use your imagination!) || My grandpa was feeding the ducks.",
                  "Q || Where was your sister picking flowers? (Use your imagination!) || She was picking flowers in the garden.",
                  "Q || What do you want to be when you grow up? || I want to be a doctor. / I want to be a soccer player.",
                  "Q || What was your uncle doing when the dog barked? || He was sleeping.",
                  "Q || What was Shakira doing while the band was playing? (Use your imagination!) || She was dancing.",
                  "Q || Tell me what two people in your family were doing yesterday at 6:00 PM. || My mom was cooking and my brother was playing.",
                  "F || They ____ jumping rope. || were || was / are",
                  "F || She was sleeping ____ the phone rang. || when || while / and",
                  "F || Who ____ taking pictures? || was || were / did",
                  "T || Ellos estaban saltando la cuerda. || They were jumping rope.",
                  "T || ¿Qué estaba haciendo tu mamá cuando tocaron la puerta? || What was your mom doing when someone knocked on the door?",
                  "T || Mi abuelo estaba alimentando a los patos. || My grandpa was feeding the ducks.",
                  "T || Quiero ser doctor. || I want to be a doctor.",
                  "T || ¿Por qué estaba llorando el bebé? || Why was the baby crying?",
                  "H || 👩‍⚕️ || Guess the hidden profession! || Doctor",
                  "E || 👧🌸 👦🫧 👴🦆 || What were they doing at the park? || She was picking flowers, he was blowing bubbles and the grandpa was feeding the ducks."
                ],
                "mistakes": [
                  "M || They [was] jumping rope. || were* / was / are || They were jumping rope.",
                  "M || She was [sleep] when the phone rang. || sleeping* / sleep / slept || She was sleeping when the phone rang."
                ]
              }
            ]
          },
          {
            "week": 7,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "General review — Simple present (3rd person); Wh-questions (What/Where/Who... with?); space adventure — Vocabulary: fly, land, explore, find, laugh, climb",
                "lines": [
                  "Q || What does an astronaut do in space? || She flies a spaceship and explores new planets.",
                  "Q || Where does an astronaut land? || He lands on the moon. / She lands on a new planet.",
                  "Q || Who does an astronaut explore space with? || She explores space with her team. / He explores space with a robot.",
                  "Q || What does your best friend find when he or she explores the garden? (Use your imagination!) || He finds insects. / She finds flowers.",
                  "Q || Where does your dad climb when he goes to the mountains? (Use your imagination!) || He climbs big rocks.",
                  "Q || Who does your sister laugh with at school? || She laughs with her best friend.",
                  "Q || What does your cat find under the bed? (Use your imagination!) || It finds my socks. / It finds a toy.",
                  "Q || Where does a pilot fly? || A pilot flies in the sky. / A pilot flies to different countries.",
                  "F || An astronaut ____ a spaceship. || flies || fly / flying",
                  "F || Where ____ she land? || does || do / is",
                  "F || He ____ new planets. || explores || explore / exploring",
                  "T || Un astronauta explora planetas nuevos. || An astronaut explores new planets.",
                  "T || ¿Dónde aterriza ella? || Where does she land?",
                  "T || Él vuela una nave espacial. || He flies a spaceship.",
                  "T || Mi hermana se ríe con su mejor amiga. || My sister laughs with her best friend.",
                  "T || ¿Con quién explora él el espacio? || Who does he explore space with?",
                  "H || 🚀 || Guess the action! || Fly a spaceship",
                  "H || 🧑‍🚀🌕 || Guess the action! || Land on the moon",
                  "E || 🧑‍🚀🔭🪐 || What does she do in space? || She explores new planets.",
                  "E || 👨🧗⛰️ || What does he do in the mountains? || He climbs rocks."
                ],
                "mistakes": [
                  "M || An astronaut [fly] a spaceship. || flies* / fly / flying || An astronaut flies a spaceship.",
                  "M || Where [do] she land? || does* / do / is || Where does she land?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "General review — Present progressive (3rd person); Wh-questions (What/Where/Why...?); in the snow — Vocabulary: jump, run, drink, play, build a snowman",
                "lines": [
                  "Q || What is your best friend doing in the snow? (Use your imagination!) || He is building a snowman. / She is jumping in the snow.",
                  "Q || Why is your mom drinking hot chocolate? (Use your imagination!) || Because it is very cold.",
                  "Q || Where is your cousin running? (Use your imagination!) || He is running on the ice. / She is running to the cabin.",
                  "Q || What are your brothers playing in the snow? (Use your imagination!) || They are playing with snowballs.",
                  "Q || Why is your dad building a snowman with a hat? (Use your imagination!) || Because the snowman is cold too. / Because it is funny.",
                  "Q || Where is the dog jumping? (Use your imagination!) || It is jumping in the snow.",
                  "Q || What is Santa drinking at the North Pole? (Use your imagination!) || He is drinking hot chocolate. / He is drinking milk.",
                  "Q || Why is your grandma staying inside the cabin? (Use your imagination!) || Because she doesn't like the cold.",
                  "F || He ____ building a snowman. || is || are / am",
                  "F || Why ____ she drinking hot chocolate? || is || are / does",
                  "F || They are ____ with snowballs. || playing || play / plays",
                  "T || Él está construyendo un muñeco de nieve. || He is building a snowman.",
                  "T || ¿Por qué está ella tomando chocolate caliente? || Why is she drinking hot chocolate?",
                  "T || Ellos están jugando con bolas de nieve. || They are playing with snowballs.",
                  "T || El perro está saltando en la nieve. || The dog is jumping in the snow.",
                  "T || ¿Dónde está corriendo tu primo? || Where is your cousin running?",
                  "H || ⛄ || Guess the action! || Build a snowman",
                  "E || 👦⛄ || What is he doing? || He is building a snowman.",
                  "E || 👩☕ ❄️ || Why is she drinking hot chocolate? || Because it is cold.",
                  "E || 🐕🏃❄️ || Where is the dog running? || It is running in the snow."
                ],
                "mistakes": [
                  "M || He is [build] a snowman. || building* / build / builds || He is building a snowman.",
                  "M || Why [are] she drinking hot chocolate? || is* / are / does || Why is she drinking hot chocolate?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "General review — Simple future: will & going to (1st person); Wh-questions (Where/Who... with/Why...?); next birthday — Vocabulary: celebrate, eat cake, take pictures, spend time with friends, open presents",
                "lines": [
                  "Q || Where are you going to celebrate your next birthday if it rains? (Use your imagination!) || I am going to celebrate at home. / I am going to celebrate at a restaurant.",
                  "Q || Who will you spend time with on your next birthday? || I will spend time with my best friends.",
                  "Q || Why are you going to take pictures at your party? || Because I want to remember it. / Because my mom loves pictures.",
                  "Q || Who are you going to open presents with? || I am going to open presents with my family.",
                  "Q || Why will you eat cake first? (Use your imagination!) || Because I love cake. / Because everybody is hungry.",
                  "Q || Where will you take pictures at your party? || I will take pictures next to the cake.",
                  "Q || Who will you invite to your next birthday? || I will invite my cousins and my best friend.",
                  "Q || How much is a birthday cake? (Use your imagination!) || It is twenty dollars. / It is fifty thousand pesos.",
                  "F || I ____ eat cake on my birthday. || will || going / am",
                  "F || Who ____ you going to invite? || are || will / is",
                  "F || I am going to ____ time with my friends. || spend || spending / spent",
                  "T || Celebraré mi cumpleaños en casa. || I will celebrate my birthday at home.",
                  "T || ¿Con quién vas a pasar tiempo? || Who are you going to spend time with?",
                  "T || Voy a tomar fotos con mi familia. || I am going to take pictures with my family.",
                  "T || ¿Por qué comerás pastel primero? || Why will you eat cake first?",
                  "T || Invitaré a mis primos. || I will invite my cousins.",
                  "H || 🎉🎈 || Guess the action! || Celebrate",
                  "E || 🧒🎂🏠 || Where are you going to celebrate? || I am going to celebrate at home.",
                  "E || 🧒🎁👨‍👩‍👧 || Who are you going to open presents with? || I am going to open presents with my family.",
                  "E || 🎂💲 || How much is the cake? (Use your imagination!) || It is twenty dollars."
                ],
                "mistakes": [
                  "M || I [going] to celebrate at home. || am going* / going / will going || I am going to celebrate at home.",
                  "M || I will [eating] cake. || eat* / eating / eats || I will eat cake."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "General review — Simple past (3rd person); Wh-questions (What/Where/Who...?) — Vocabulary: do homework, watch a movie, go to school, play, have a picnic",
                "lines": [
                  "Q || What did your best friend do last weekend? || He watched a movie. / She had a picnic with her family.",
                  "Q || Where did your cousin have a picnic last Sunday? (Use your imagination!) || She had a picnic at the park.",
                  "Q || Who did your brother play with last Saturday? || He played with his friends.",
                  "Q || What did your mom do when she finished work yesterday? || She watched a movie. / She cooked dinner.",
                  "Q || Where did your sister do her homework last night? || She did her homework in her room.",
                  "Q || Who went to school with you yesterday? || My brother went to school with me. / My neighbor went with me.",
                  "Q || What did Santa do after Christmas? (Use your imagination!) || He rested and played with the elves.",
                  "Q || Where did your dad watch the soccer game last weekend? (Use your imagination!) || He watched it at my uncle's house.",
                  "F || She ____ a picnic last Sunday. || had || have / haved",
                  "F || Who ____ he play with? || did || do / does",
                  "F || He ____ to school yesterday. || went || go / goed",
                  "T || Él vio una película el fin de semana pasado. || He watched a movie last weekend.",
                  "T || ¿Dónde hizo ella un picnic? || Where did she have a picnic?",
                  "T || Mi hermano jugó con sus amigos. || My brother played with his friends.",
                  "T || Ella hizo su tarea en su cuarto. || She did her homework in her room.",
                  "T || ¿Quién fue a la escuela contigo? || Who went to school with you?",
                  "H || 🧺🌳 || Guess the action! || Have a picnic",
                  "E || 👧🧺🌳 || What did she do last Sunday? || She had a picnic.",
                  "E || 👦⚽👦👦 || Who did he play with? || He played with his friends.",
                  "E || 👩🎬🛋️ || Where did she watch the movie? || She watched the movie at home."
                ],
                "mistakes": [
                  "M || She [have] a picnic last Sunday. || had* / have / haved || She had a picnic last Sunday.",
                  "M || Who [does] he play with yesterday? || did* / does / do || Who did he play with yesterday?"
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "General review — Past progressive (3rd person); Wh-questions (What/Where/Who... with?); in the countryside; clothes review — Vocabulary: eat, read, fly a kite, check phone, swim",
                "lines": [
                  "Q || What was your family doing in the countryside last weekend? (Use your imagination!) || They were swimming in the river. / They were flying a kite.",
                  "Q || Where was your grandpa reading? (Use your imagination!) || He was reading under a tree.",
                  "Q || Who was your cousin flying a kite with? (Use your imagination!) || She was flying a kite with her dad.",
                  "Q || What was your brother doing while everybody was swimming? (Use your imagination!) || He was checking his phone.",
                  "Q || Where were your parents eating lunch? (Use your imagination!) || They were eating lunch next to the river.",
                  "Q || Who was your sister swimming with? (Use your imagination!) || She was swimming with my cousins.",
                  "Q || What was your dad wearing in the countryside? (Use your imagination!) || He was wearing shorts and a T-shirt.",
                  "Q || Where was your dog running? (Use your imagination!) || It was running in the field.",
                  "F || He ____ reading under a tree. || was || were / is",
                  "F || Who was she flying a kite ____? || with || whit / to",
                  "F || They were ____ in the river. || swimming || swim / swims",
                  "T || Ellos estaban nadando en el río. || They were swimming in the river.",
                  "T || Mi abuelo estaba leyendo bajo un árbol. || My grandpa was reading under a tree.",
                  "T || ¿Con quién estaba volando la cometa tu prima? || Who was your cousin flying the kite with?",
                  "T || Él estaba revisando su celular. || He was checking his phone.",
                  "T || Mi papá estaba usando pantalones cortos. || My dad was wearing shorts.",
                  "H || 🩳 || Guess the hidden clothes! || Shorts",
                  "E || 👴📖🌳 || Where was he reading? || He was reading under a tree.",
                  "E || 👦📱 🏞️ || What was he doing in the countryside? || He was checking his phone.",
                  "E || 👧🪁👨 || Who was she flying a kite with? || She was flying a kite with her dad."
                ],
                "mistakes": [
                  "M || He [were] reading under a tree. || was* / were / is || He was reading under a tree.",
                  "M || They were [swim] in the river. || swimming* / swim / swam || They were swimming in the river."
                ]
              }
            ]
          },
          {
            "week": 8,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Demonstrative pronouns — This and These; Positive sentences; school objects — Vocabulary: backpack, pencil case, notebook, scissors, pens, stickers",
                "lines": [
                  "Q || Look at your desk. Name one thing using \"This is...\". || This is my notebook. / This is my pencil case.",
                  "Q || Look at your desk. Name two or more things using \"These are...\". || These are my pens. / These are my stickers.",
                  "Q || Complete: ____ is my backpack. (near you) || This is my backpack.",
                  "Q || Complete: ____ are my scissors. (near you) || These are my scissors.",
                  "Q || Say a sentence with THIS and \"pencil case\". || This is my pencil case.",
                  "Q || Say a sentence with THESE and \"stickers\". || These are my stickers.",
                  "Q || What do you have in your backpack today? Use THIS or THESE. || This is my notebook and these are my pens.",
                  "Q || Is this your pen or your sister's pen? (Use your imagination!) || This is my pen. / This is my sister's pen.",
                  "F || ____ is my notebook. (one, near) || This || These / Those",
                  "F || ____ are my pens. (many, near) || These || This / That",
                  "F || This ____ my backpack. || is || are / am",
                  "T || Esta es mi mochila. || This is my backpack.",
                  "T || Estos son mis bolígrafos. || These are my pens.",
                  "T || Este es mi cuaderno. || This is my notebook.",
                  "T || Estas son mis tijeras. || These are my scissors.",
                  "T || Estos son mis stickers. || These are my stickers.",
                  "H || 🎒 || Guess the hidden object! || Backpack",
                  "H || ✂️ || Guess the hidden object! || Scissors",
                  "E || 📓 || It is next to you. What is it? Use THIS. || This is a notebook.",
                  "E || 🖊️🖊️🖊️ || They are next to you. What are they? Use THESE. || These are pens."
                ],
                "mistakes": [
                  "M || [These] is my backpack. || This* / These / Those || This is my backpack.",
                  "M || This [are] my notebook. || is* / are / am || This is my notebook."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Demonstrative pronouns — This and These; Wh-questions (What...?); feelings review — Vocabulary: backpack, pencil case, notebook, scissors, pens, stickers",
                "lines": [
                  "Q || What is this? (Point to something next to you.) || This is my pencil case. / This is a book.",
                  "Q || What are these? (Point to two or more things next to you.) || These are my pens. / These are my stickers.",
                  "Q || Ask your coach about one object next to you. || What is this?",
                  "Q || Ask your coach about two or more objects next to you. || What are these?",
                  "Q || What is in your pencil case? Use THESE. || These are my pencils and these are my markers.",
                  "Q || What color is this notebook? (Point to your notebook.) || This notebook is blue. / This is a red notebook.",
                  "Q || How do you feel when you open a new pack of stickers? || I feel happy. / I feel excited.",
                  "Q || How does your best friend feel when he or she loses the pencil case? || He feels sad. / She feels angry.",
                  "F || What ____ this? || is || are / am",
                  "F || What ____ these? || are || is / am",
                  "F || ____ are my scissors. || These || This / That",
                  "T || ¿Qué es esto? || What is this?",
                  "T || ¿Qué son estos? || What are these?",
                  "T || Este es mi estuche. || This is my pencil case.",
                  "T || Estos son mis crayones. || These are my crayons.",
                  "T || Me siento feliz. || I feel happy.",
                  "H || 📓 || Guess the hidden object! || Notebook",
                  "E || 🖍️🖍️ || They are next to you. What are these? || These are crayons.",
                  "E || 📏 || It is next to you. What is this? || This is a ruler.",
                  "E || 🧒😢 ✂️❓ || How does she feel? She lost her scissors. || She feels sad."
                ],
                "mistakes": [
                  "M || What [are] this? || is* / are / am || What is this?",
                  "M || What [is] these? || are* / is / am || What are these?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Demonstrative pronouns — That and Those; Positive sentences; people and places at school — Vocabulary: principal, teacher, playground, classmates, football team players",
                "lines": [
                  "Q || Imagine you are at school. Point to a person far away and say who it is. || That is the principal. / That is my teacher.",
                  "Q || Imagine you are at school. Point to a group far away and say who they are. || Those are my classmates. / Those are the football team players.",
                  "Q || Complete: ____ is the playground. (far away) || That is the playground.",
                  "Q || Complete: ____ are my classmates. (far away) || Those are my classmates.",
                  "Q || Say a sentence with THAT and \"teacher\". || That is my English teacher.",
                  "Q || Say a sentence with THOSE and \"football team players\". || Those are the football team players.",
                  "Q || Describe your school using THAT and THOSE. || That is the playground and those are the classrooms.",
                  "Q || Is that your teacher or the principal? (Use your imagination!) || That is my teacher. / That is the principal.",
                  "F || ____ is the principal. (one, far) || That || Those / These",
                  "F || ____ are my classmates. (many, far) || Those || That / This",
                  "F || That ____ the playground. || is || are / am",
                  "T || Ese es el director. || That is the principal.",
                  "T || Esos son mis compañeros. || Those are my classmates.",
                  "T || Ese es el patio de recreo. || That is the playground.",
                  "T || Esa es mi profesora. || That is my teacher.",
                  "T || Esos son los jugadores del equipo de fútbol. || Those are the football team players.",
                  "H || 🛝🏫 || Guess the hidden place! || Playground",
                  "E || 👨‍💼🏫 || He is over there, far from you. Who is that? || That is the principal.",
                  "E || 👦👧👧👦 || They are over there, far from you. Who are those? || Those are my classmates.",
                  "E || 🏫🛝 || It is over there, far from you. What is that? || That is the playground."
                ],
                "mistakes": [
                  "M || [Those] is the principal. || That* / Those / These || That is the principal.",
                  "M || That [are] my teacher. || is* / are / am || That is my teacher."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Demonstrative pronouns — That and Those; Wh-questions (What/Who...?); how much is it? — Vocabulary: principal, teachers, playground, classmates, football team players",
                "lines": [
                  "Q || Who is that? (Imagine a person far away at school.) || That is the principal. / That is my math teacher.",
                  "Q || Who are those? (Imagine a group far away at school.) || Those are the teachers. / Those are the football team players.",
                  "Q || What is that? (Imagine a place far away at school.) || That is the playground. / That is the cafeteria.",
                  "Q || Ask about one person far away. || Who is that?",
                  "Q || Ask about a group of people far away. || Who are those?",
                  "Q || What are those? (Imagine objects far away in the classroom.) || Those are the books. / Those are the computers.",
                  "Q || How much is that backpack? (Use your imagination!) || It is thirty dollars. / It is one hundred thousand pesos.",
                  "Q || How much are those stickers? (Use your imagination!) || They are two dollars. / They are five thousand pesos.",
                  "F || Who ____ that? || is || are / am",
                  "F || Who ____ those? || are || is / am",
                  "F || How much ____ those pens? || are || is / am",
                  "T || ¿Quién es ese? || Who is that?",
                  "T || ¿Quiénes son esos? || Who are those?",
                  "T || ¿Qué es eso? || What is that?",
                  "T || ¿Cuánto cuesta esa mochila? || How much is that backpack?",
                  "T || Esos son los profesores. || Those are the teachers.",
                  "H || 👩‍🏫 || Guess the hidden profession! || Teacher",
                  "E || ⚽👦👦👦 || They are over there, far from you. Who are those? || Those are the football team players.",
                  "E || 🎒💲 || It is over there. How much is that backpack? (Use your imagination!) || That backpack is thirty dollars.",
                  "E || 💻💻💻 || They are over there. What are those? || Those are computers."
                ],
                "mistakes": [
                  "M || Who [are] that? || is* / are / am || Who is that?",
                  "M || How much [is] those pens? || are* / is / am || How much are those pens?"
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: This/These/That/Those; last weekend activities — Vocabulary: backpack, pencil case, notebook, scissors, pens, stickers, principal, teacher, playground, classmates, football team players",
                "lines": [
                  "Q || What is this? (Point to one object next to you and answer.) || This is my pencil case.",
                  "Q || Who is that? (Imagine a person far away.) || That is my teacher.",
                  "Q || What are these? (Point to things next to you.) || These are my pens.",
                  "Q || Who are those? (Imagine a group far away.) || Those are my classmates.",
                  "Q || Say a sentence with THIS and a sentence with THAT. || This is my notebook and that is the playground.",
                  "Q || Say a sentence with THESE and a sentence with THOSE. || These are my stickers and those are the teachers.",
                  "Q || What did you do last weekend when you were bored? (Use your imagination!) || I played with my friends and watched a movie.",
                  "Q || How much is this notebook? (Use your imagination!) || It is five dollars.",
                  "Q || Complete: ____ are my scissors and ____ is the principal. || These are my scissors and that is the principal.",
                  "Q || Describe your classroom using THIS, THESE, THAT and THOSE. || This is my desk, these are my books, that is the door and those are the windows.",
                  "F || ____ is my pen. (near) || This || That / Those",
                  "F || ____ are the teachers. (far) || Those || These / That",
                  "F || What ____ that? || is || are / am",
                  "T || Esto es mi cuaderno. || This is my notebook.",
                  "T || Esas son las profesoras. || Those are the teachers.",
                  "T || ¿Qué son estas? || What are these?",
                  "T || Esa es la directora. || That is the principal.",
                  "T || Jugué con mis amigos el fin de semana pasado. || I played with my friends last weekend.",
                  "H || ✏️🧰 || Guess the hidden object! || Pencil case",
                  "E || 🌟🌟🌟 || They are next to you. What are these? || These are stickers."
                ],
                "mistakes": [
                  "M || [This] are my pens. || These* / This / That || These are my pens.",
                  "M || [These] is the principal, over there. || That* / These / Those || That is the principal, over there."
                ]
              }
            ]
          }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Daily activities (Simple present)",
            "words": [
              "Wake up",
              "Cook",
              "Work",
              "Exercise",
              "Watch TV",
              "Sing",
              "Paint",
              "Dance",
              "Clean",
              "Read",
              "Play",
              "Ride",
              "Take a nap",
              "Listen to music",
              "Draw"
            ]
          },
          {
            "week": 2,
            "category": "In class, clothes, beach and supermarket (Present progressive)",
            "words": [
              "Sit",
              "Pay attention",
              "Take notes",
              "Learn",
              "Speak",
              "Pants",
              "T-shirt",
              "Shoes",
              "Dress",
              "Shorts",
              "Socks",
              "Sweater",
              "Make a sandcastle",
              "Swim",
              "Have a picnic",
              "Surf",
              "Relax",
              "Pick fruits",
              "Scan items",
              "Ask for help",
              "Carry a shopping basket",
              "Grab"
            ]
          },
          {
            "week": 3,
            "category": "Future plans (going to & will)",
            "words": [
              "Celebrate",
              "Eat cake",
              "Take pictures",
              "Spend time with friends",
              "Open presents",
              "Pay",
              "Ride",
              "Visit",
              "Buy",
              "Watch",
              "Go to",
              "Read",
              "Paint",
              "Clean",
              "Dance",
              "Eat a dessert",
              "Go to the jungle",
              "Meet",
              "Play the guitar",
              "Laugh",
              "Jump",
              "Travel"
            ]
          },
          {
            "week": 4,
            "category": "Favorite activities (Gerunds)",
            "words": [
              "Playing",
              "Reading",
              "Drawing",
              "Listening to music",
              "Dancing"
            ]
          },
          {
            "week": 5,
            "category": "Past activities (Simple past)",
            "words": [
              "Visit",
              "Play",
              "Watch movies",
              "Order",
              "Stay at home",
              "Wake up",
              "Take a shower",
              "Do homework",
              "Go to",
              "Finish",
              "See",
              "Walk around",
              "Talk",
              "Take pictures",
              "Drink",
              "Walk",
              "Listen to music",
              "Rest",
              "Help",
              "Study",
              "Chat"
            ]
          },
          {
            "week": 6,
            "category": "At the park (Past progressive)",
            "words": [
              "Draw",
              "Listen to music",
              "Eat",
              "Drink",
              "Play",
              "Fly a kite",
              "Sleep",
              "Ring",
              "Watch TV",
              "Knock",
              "Cry",
              "Bark",
              "Pick flowers",
              "Feed",
              "Take pictures",
              "Blow bubbles",
              "Jump rope"
            ]
          },
          {
            "week": 7,
            "category": "Adventures (mixed tenses)",
            "words": [
              "Fly",
              "Land",
              "Explore",
              "Find",
              "Laugh",
              "Climb",
              "Jump",
              "Run",
              "Drink",
              "Build a snowman",
              "Celebrate",
              "Eat cake",
              "Take pictures",
              "Open presents",
              "Do homework",
              "Watch a movie",
              "Have a picnic",
              "Fly a kite",
              "Check phone",
              "Swim"
            ]
          },
          {
            "week": 8,
            "category": "Demonstratives: school objects and people",
            "words": [
              "Backpack",
              "Pencil case",
              "Notebook",
              "Scissors",
              "Pens",
              "Stickers",
              "Principal",
              "Teacher",
              "Playground",
              "Classmates",
              "Football team players"
            ]
          }
        ]
      },
      {
        "level": 8,
        "weeks": [
          {
            "week": 1,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Family — Comparatives: short adjectives; Positive sentences — Vocabulary: tall, short, young, old",
                "lines": [
                  "Q || Who is taller, you or your best friend? || I am taller than my best friend. / My best friend is taller than me.",
                  "Q || Who is older, your mom or your dad? || My dad is older than my mom. / My mom is older than my dad.",
                  "Q || Who is younger, you or your cousin? || I am younger than my cousin. / My cousin is younger than me.",
                  "Q || Who is shorter, your grandma or your grandpa? || My grandma is shorter than my grandpa.",
                  "Q || Compare your brother or sister and you. Use \"taller\" or \"shorter\". || My brother is taller than me. / I am shorter than my sister.",
                  "Q || Compare your teacher and your coach. Use \"older\" or \"younger\". (Use your imagination!) || My teacher is older than my coach.",
                  "Q || Complete: My dad is ____ (tall) than my mom. || My dad is taller than my mom.",
                  "Q || Complete: My grandpa is ____ (old) than my dad. || My grandpa is older than my dad.",
                  "F || My dad is ____ than my mom. || taller || tall / more tall",
                  "F || My cousin is ____ than me. || younger || young / more young",
                  "F || She is shorter ____ her sister. || than || that / then",
                  "T || Mi papá es más alto que mi mamá. || My dad is taller than my mom.",
                  "T || Mi abuelo es mayor que mi papá. || My grandpa is older than my dad.",
                  "T || Soy más bajo que mi hermano. || I am shorter than my brother.",
                  "T || Mi prima es menor que yo. || My cousin is younger than me.",
                  "T || Mi mamá es más joven que mi tía. || My mom is younger than my aunt.",
                  "H || 📏⬆️ || Guess the hidden adjective! || Tall",
                  "H || 👴 || Guess the hidden adjective! || Old",
                  "E || 👨🧒 || Who is taller? || The man is taller than the boy.",
                  "E || 👵👧 || Who is younger? || The girl is younger than the grandma."
                ],
                "mistakes": [
                  "M || My dad is [more tall] than my mom. || taller* / more tall / tallest || My dad is taller than my mom.",
                  "M || My cousin is younger [that] me. || than* / that / then || My cousin is younger than me."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Characters — Comparatives: short adjectives; Wh-questions (Who...?) — Vocabulary: tall, short, young, old, thin, chubby",
                "lines": [
                  "Q || Who is thinner, Spider-Man or Hulk? || Spider-Man is thinner than Hulk.",
                  "Q || Who is chubbier, Winnie the Pooh or Mickey Mouse? || Winnie the Pooh is chubbier than Mickey Mouse.",
                  "Q || Who is taller, Shrek or Puss in Boots? || Shrek is taller than Puss in Boots.",
                  "Q || Who is older, Batman or Robin? || Batman is older than Robin.",
                  "Q || Who is shorter, Minions or Gru? || Minions are shorter than Gru.",
                  "Q || Who is younger, Elsa or Anna? || Anna is younger than Elsa.",
                  "Q || Compare two characters from your favorite movie. Use \"thinner\" or \"chubbier\". || Olaf is chubbier than Elsa.",
                  "Q || Compare your favorite superhero and your favorite villain. Use \"taller\" or \"shorter\". || Thanos is taller than Iron Man.",
                  "F || Who is ____, Hulk or Spider-Man? || chubbier || chubby / more chubby",
                  "F || Spider-Man is ____ than Hulk. || thinner || thin / thiner",
                  "F || Who ____ older, Batman or Robin? || is || are / do",
                  "T || ¿Quién es más delgado? || Who is thinner?",
                  "T || Hulk es más gordito que Spider-Man. || Hulk is chubbier than Spider-Man.",
                  "T || Shrek es más alto que Gato con Botas. || Shrek is taller than Puss in Boots.",
                  "T || ¿Quién es mayor, Batman o Robin? || Who is older, Batman or Robin?",
                  "T || Anna es menor que Elsa. || Anna is younger than Elsa.",
                  "H || 📏⬇️ || Guess the hidden adjective! || Short",
                  "E || 🧍 🧍‍♂️💪 || Who is thinner? || The first person is thinner than the second person.",
                  "E || 🐻🍯 🐭 || Who is chubbier? || The bear is chubbier than the mouse.",
                  "E || 👦 👧 || Who is older? (Use your imagination!) || The girl is older than the boy. / The boy is older than the girl."
                ],
                "mistakes": [
                  "M || Hulk is [chubbyer] than Spider-Man. || chubbier* / chubbyer / more chubby || Hulk is chubbier than Spider-Man.",
                  "M || Who is [thiner], Elsa or Olaf? || thinner* / thiner / more thin || Who is thinner, Elsa or Olaf?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Sea animals — Comparatives: long adjectives; Positive sentences — Vocabulary: intelligent, dangerous, powerful, playful; dolphin, shark, octopus, seal, starfish, whale",
                "lines": [
                  "Q || Which animal is more intelligent, a dolphin or a starfish? || A dolphin is more intelligent than a starfish.",
                  "Q || Which animal is more dangerous, a shark or a seal? || A shark is more dangerous than a seal.",
                  "Q || Which animal is more powerful, a whale or an octopus? || A whale is more powerful than an octopus.",
                  "Q || Which animal is more playful, a seal or a shark? || A seal is more playful than a shark.",
                  "Q || Compare a dolphin and a whale. Use \"more powerful\". || A whale is more powerful than a dolphin.",
                  "Q || Compare an octopus and a starfish. Use \"more intelligent\". || An octopus is more intelligent than a starfish.",
                  "Q || Complete: A shark is ____ (dangerous) than a dolphin. || A shark is more dangerous than a dolphin.",
                  "Q || Which sea animal do you think is more playful? Why? || I think a dolphin is more playful because it jumps and plays with people.",
                  "F || A shark is ____ than a seal. || more dangerous || dangerouser / dangerous",
                  "F || A dolphin is more intelligent ____ a starfish. || than || that / then",
                  "F || A whale is ____ powerful than an octopus. || more || most / much",
                  "T || Un delfín es más inteligente que una estrella de mar. || A dolphin is more intelligent than a starfish.",
                  "T || Un tiburón es más peligroso que una foca. || A shark is more dangerous than a seal.",
                  "T || Una ballena es más poderosa que un pulpo. || A whale is more powerful than an octopus.",
                  "T || Una foca es más juguetona que un tiburón. || A seal is more playful than a shark.",
                  "T || El pulpo es más inteligente que la estrella de mar. || The octopus is more intelligent than the starfish.",
                  "H || 🐬 || Guess the hidden sea animal! || Dolphin",
                  "H || 🦈 || Guess the hidden sea animal! || Shark",
                  "E || 🐙 ⭐ || Which animal is more intelligent? || The octopus is more intelligent than the starfish.",
                  "E || 🐋 🦭 || Which animal is more powerful? || The whale is more powerful than the seal."
                ],
                "mistakes": [
                  "M || A shark is [dangerouser] than a seal. || more dangerous* / dangerouser / most dangerous || A shark is more dangerous than a seal.",
                  "M || A dolphin is [intelligenter] than a starfish. || more intelligent* / intelligenter / most intelligent || A dolphin is more intelligent than a starfish."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Dinosaurs — Comparatives: long adjectives; Wh-questions (Which...?); likes and dislikes — Vocabulary: intelligent, dangerous, powerful, playful, colorful, aggressive",
                "lines": [
                  "Q || Which dinosaur was more aggressive, a T-Rex or a Triceratops? || A T-Rex was more aggressive than a Triceratops.",
                  "Q || Which dinosaur was more dangerous, a Velociraptor or a Brachiosaurus? || A Velociraptor was more dangerous than a Brachiosaurus.",
                  "Q || Which bird is more colorful, a parrot or a pigeon? || A parrot is more colorful than a pigeon.",
                  "Q || Which animal is more powerful, a T-Rex or a shark? || A T-Rex is more powerful than a shark.",
                  "Q || Which pet is more playful, a puppy or a fish? || A puppy is more playful than a fish.",
                  "Q || Which dinosaur do you like more? Why? || I like the T-Rex more because it is powerful.",
                  "Q || Compare a parrot and a crocodile. Use \"more colorful\" or \"more aggressive\". || A parrot is more colorful than a crocodile. / A crocodile is more aggressive than a parrot.",
                  "Q || Do you like dinosaurs? Which one do you dislike? || Yes, I like dinosaurs. I dislike the Velociraptor because it is aggressive.",
                  "F || Which dinosaur was ____, a T-Rex or a Triceratops? || more aggressive || aggressiver / aggressive",
                  "F || A parrot is more colorful ____ a pigeon. || than || that / then",
                  "F || ____ animal is more dangerous? || Which || Who / Where",
                  "T || ¿Cuál dinosaurio era más agresivo? || Which dinosaur was more aggressive?",
                  "T || Un loro es más colorido que una paloma. || A parrot is more colorful than a pigeon.",
                  "T || El T-Rex era más peligroso que el Triceratops. || The T-Rex was more dangerous than the Triceratops.",
                  "T || Un cachorro es más juguetón que un pez. || A puppy is more playful than a fish.",
                  "T || Me gustan los dinosaurios. || I like dinosaurs.",
                  "H || 🦖 || Guess the hidden animal! || Dinosaur",
                  "E || 🦖 🦕 || Which dinosaur is more aggressive? || The T-Rex is more aggressive than the long-neck dinosaur.",
                  "E || 🦜 🕊️ || Which bird is more colorful? || The parrot is more colorful than the pigeon.",
                  "E || 🐕 🐟 || Which pet is more playful? || The dog is more playful than the fish."
                ],
                "mistakes": [
                  "M || A T-Rex was [aggressiver] than a Triceratops. || more aggressive* / aggressiver / most aggressive || A T-Rex was more aggressive than a Triceratops.",
                  "M || [Who] dinosaur is more dangerous? || Which* / Who / Where || Which dinosaur is more dangerous?"
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Comparatives (short and long adjectives) — Vocabulary: tall, short, young, old, thin, chubby, intelligent, dangerous, powerful, playful, colorful, aggressive",
                "lines": [
                  "Q || Who is taller, your mom or your dad? || My dad is taller than my mom.",
                  "Q || Which animal is more dangerous, a shark or a dolphin? || A shark is more dangerous than a dolphin.",
                  "Q || Who is younger, your best friend or you? || My best friend is younger than me.",
                  "Q || Which bird is more colorful, a parrot or a chicken? || A parrot is more colorful than a chicken.",
                  "Q || Who is thinner, Spider-Man or Hulk? Why? || Spider-Man is thinner than Hulk because Hulk is very big.",
                  "Q || Compare two people in your family. Use \"older\" or \"younger\". || My sister is older than me.",
                  "Q || Compare two animals. Use \"more playful\". || A puppy is more playful than a cat.",
                  "Q || What will you do next Christmas? || I will visit my grandparents and open presents.",
                  "Q || Which dinosaur was more aggressive, a T-Rex or a Brachiosaurus? || A T-Rex was more aggressive than a Brachiosaurus.",
                  "Q || Compare Messi and your dad. Use \"shorter\" or \"taller\". || Messi is shorter than my dad. / My dad is taller than Messi.",
                  "F || My mom is ____ than my grandma. || younger || young / more young",
                  "F || A whale is ____ than a seal. || more powerful || powerfuler / powerful",
                  "F || Who is ____, Shrek or Puss in Boots? || taller || tallest / more tall",
                  "T || Mi tío es más alto que mi papá. || My uncle is taller than my dad.",
                  "T || Un tiburón es más peligroso que un delfín. || A shark is more dangerous than a dolphin.",
                  "T || Mi hermana es mayor que yo. || My sister is older than me.",
                  "T || Un loro es más colorido que un pollo. || A parrot is more colorful than a chicken.",
                  "T || ¿Quién es más gordito, Hulk o Spider-Man? || Who is chubbier, Hulk or Spider-Man?",
                  "H || 🐋 || Guess the hidden sea animal! || Whale",
                  "E || 🦈 🐬 || Which animal is more dangerous? || The shark is more dangerous than the dolphin."
                ],
                "mistakes": [
                  "M || My mom is [more young] than my grandma. || younger* / more young / youngest || My mom is younger than my grandma.",
                  "M || A whale is [powerfuler] than a seal. || more powerful* / powerfuler / most powerful || A whale is more powerful than a seal."
                ]
              }
            ]
          },
          {
            "week": 2,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Superheroes — Superlatives: short adjectives; Positive sentences — Vocabulary: strong, fast, smart",
                "lines": [
                  "Q || Who is the strongest superhero? || Hulk is the strongest superhero. / Superman is the strongest superhero.",
                  "Q || Who is the fastest superhero? || Flash is the fastest superhero.",
                  "Q || Who is the smartest superhero? || Iron Man is the smartest superhero. / Batman is the smartest superhero.",
                  "Q || Who is the strongest person in your family? || My dad is the strongest person in my family.",
                  "Q || Who is the fastest runner in your class? || My best friend is the fastest runner in my class.",
                  "Q || Who is the smartest person you know? || My grandma is the smartest person I know.",
                  "Q || Complete: Flash is the ____ (fast) superhero. || Flash is the fastest superhero.",
                  "Q || Complete: Hulk is the ____ (strong) superhero. || Hulk is the strongest superhero.",
                  "F || Hulk is the ____ superhero. || strongest || stronger / most strong",
                  "F || Flash is the ____ superhero. || fastest || faster / most fast",
                  "F || Batman is ____ smartest superhero. || the || a / than",
                  "T || Hulk es el superhéroe más fuerte. || Hulk is the strongest superhero.",
                  "T || Flash es el más rápido. || Flash is the fastest.",
                  "T || Mi papá es la persona más fuerte de mi familia. || My dad is the strongest person in my family.",
                  "T || Mi abuela es la persona más inteligente que conozco. || My grandma is the smartest person I know.",
                  "T || Él es el corredor más rápido de mi clase. || He is the fastest runner in my class.",
                  "H || 🦸💪 || Guess the hidden adjective! || Strong",
                  "H || ⚡🏃 || Guess the hidden adjective! || Fast",
                  "E || 🧒 🧒💪 🧒💪💪 || Who is the strongest? || The third kid is the strongest.",
                  "E || 🐢 🐇 🐆 || Which animal is the fastest? || The cheetah is the fastest."
                ],
                "mistakes": [
                  "M || Hulk is the [stronger] superhero. || strongest* / stronger / most strong || Hulk is the strongest superhero.",
                  "M || Flash is [most fast] superhero. || the fastest* / most fast / faster || Flash is the fastest superhero."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Animals — Superlatives: short adjectives; Wh-questions (Which...?) — Vocabulary: slow, long, big",
                "lines": [
                  "Q || Which animal is the slowest, a turtle, a dog or a horse? || The turtle is the slowest.",
                  "Q || Which animal is the biggest in the ocean? || The whale is the biggest animal in the ocean.",
                  "Q || Which animal has the longest neck? || The giraffe has the longest neck.",
                  "Q || Which animal is the fastest in the world? || The cheetah is the fastest animal in the world.",
                  "Q || Which snake is the longest, a cobra, a python or a garden snake? || The python is the longest.",
                  "Q || Which animal is the biggest on land? || The elephant is the biggest animal on land.",
                  "Q || Which pet is the slowest, a cat, a hamster or a turtle? || The turtle is the slowest.",
                  "Q || Which animal do you think is the strongest? Why? || I think the elephant is the strongest because it can carry trees.",
                  "F || The turtle is the ____ animal. || slowest || slower / most slow",
                  "F || The giraffe has the ____ neck. || longest || longer / most long",
                  "F || Which animal is ____ biggest? || the || a / than",
                  "T || La tortuga es el animal más lento. || The turtle is the slowest animal.",
                  "T || La ballena es el animal más grande del océano. || The whale is the biggest animal in the ocean.",
                  "T || La jirafa tiene el cuello más largo. || The giraffe has the longest neck.",
                  "T || ¿Cuál animal es el más rápido? || Which animal is the fastest?",
                  "T || El elefante es el más grande en tierra. || The elephant is the biggest on land.",
                  "H || 🐢 || Guess the hidden animal! || Turtle",
                  "E || 🐢 🐕 🐎 || Which animal is the slowest? || The turtle is the slowest.",
                  "E || 🐭 🐕 🐘 || Which animal is the biggest? || The elephant is the biggest.",
                  "E || 🦒 🐴 🐈 || Which animal has the longest neck? || The giraffe has the longest neck."
                ],
                "mistakes": [
                  "M || The turtle is the [slower] animal. || slowest* / slower / most slow || The turtle is the slowest animal.",
                  "M || The elephant is the [bigest] animal on land. || biggest* / bigest / most big || The elephant is the biggest animal on land."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Video game characters — Superlatives: long adjectives; Yes/No questions (Long answers); Wh-questions (Who...?) — Vocabulary: intelligent, dangerous, beautiful, curious",
                "lines": [
                  "Q || Who is the most intelligent video game character you know? || Mario is the most intelligent character I know. / Link is the most intelligent character.",
                  "Q || Who is the most dangerous villain in your favorite video game? || Bowser is the most dangerous villain.",
                  "Q || Is Princess Peach the most beautiful character in Mario games? || Yes, she is the most beautiful character. / No, she isn't. Rosalina is the most beautiful character.",
                  "Q || Who is the most curious character in Minecraft? (Use your imagination!) || Steve is the most curious character.",
                  "Q || Is Sonic the most intelligent video game character? || No, he isn't the most intelligent. He is the fastest. / Yes, he is.",
                  "Q || Who is the most dangerous character in your favorite game? || Ganon is the most dangerous character.",
                  "Q || Is Pikachu the most beautiful Pokémon? || Yes, Pikachu is the most beautiful Pokémon. / No, Eevee is the most beautiful Pokémon.",
                  "Q || Who is the most curious person in your family? || My little brother is the most curious person in my family.",
                  "F || Bowser is the ____ villain. || most dangerous || dangerousest / more dangerous",
                  "F || She is the ____ character. || most beautiful || beautifulest / more beautiful",
                  "F || ____ is the most intelligent character? || Who || Which / Where",
                  "T || Mario es el personaje más inteligente. || Mario is the most intelligent character.",
                  "T || Bowser es el villano más peligroso. || Bowser is the most dangerous villain.",
                  "T || ¿Es Peach la más hermosa? || Is Peach the most beautiful?",
                  "T || Mi hermanito es el más curioso de la familia. || My little brother is the most curious in the family.",
                  "T || No, Sonic no es el más inteligente. || No, Sonic isn't the most intelligent.",
                  "H || 🎮 || Guess the hidden word! || Video game",
                  "E || 🧒🧒🧒🔍 || Who is the most curious? (Use your imagination!) || The kid with the magnifying glass is the most curious.",
                  "E || 🌹 🌼 🌻 || Which flower is the most beautiful? (Use your imagination!) || The rose is the most beautiful.",
                  "E || 🐍 🦁 🐇 || Which animal is the most dangerous? || The lion is the most dangerous."
                ],
                "mistakes": [
                  "M || Bowser is the [dangerousest] villain. || most dangerous* / dangerousest / more dangerous || Bowser is the most dangerous villain.",
                  "M || She is the [more beautiful] character. || most beautiful* / more beautiful / beautifulest || She is the most beautiful character."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "School subjects — Superlatives: long adjectives; Wh-questions (Why...?) — Vocabulary: useful, difficult, exciting",
                "lines": [
                  "Q || Which subject is the most useful for you? Why? || English is the most useful subject because I can talk to people from other countries.",
                  "Q || Which subject is the most difficult for you? Why? || Math is the most difficult subject because there are many numbers.",
                  "Q || Which subject is the most exciting? Why? || Science is the most exciting subject because we do experiments.",
                  "Q || Why is P.E. the most exciting class for many kids? || Because they can run and play.",
                  "Q || Which subject does your best friend think is the most difficult? || He thinks science is the most difficult subject.",
                  "Q || Why is English the most useful subject for your mom? (Use your imagination!) || Because she needs it for her job.",
                  "Q || Which subject is the most boring for you? Why? || History is the most boring subject because I have to memorize dates.",
                  "Q || What is the most exciting day at school? Why? || Friday is the most exciting day because we have art class.",
                  "F || Math is the ____ subject for me. || most difficult || difficultest / more difficult",
                  "F || ____ is English the most useful subject? || Why || Which / What",
                  "F || Science is ____ most exciting subject. || the || a / than",
                  "T || Inglés es la materia más útil. || English is the most useful subject.",
                  "T || Matemáticas es la más difícil. || Math is the most difficult.",
                  "T || ¿Por qué es ciencias la más emocionante? || Why is science the most exciting?",
                  "T || Porque hacemos experimentos. || Because we do experiments.",
                  "T || Historia es la materia más aburrida. || History is the most boring subject.",
                  "H || 🔬🧪 || Guess the hidden subject! || Science",
                  "E || 📐➗ 🎨 ⚽ || Which subject is the most difficult? (Use your imagination!) || Math is the most difficult.",
                  "E || 🧪💥 || Why is science the most exciting? || Because we do experiments.",
                  "E || 🇬🇧🗣️🌎 || Why is English the most useful? || Because I can talk to people from other countries."
                ],
                "mistakes": [
                  "M || Math is the [difficultest] subject. || most difficult* / difficultest / more difficult || Math is the most difficult subject.",
                  "M || English is the most useful [that] science. || (nothing)* / that / than || English is the most useful."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Superlatives (short and long adjectives); shapes review — Vocabulary: strong, fast, smart, slow, long, big, intelligent, dangerous, beautiful, curious, useful, difficult, exciting",
                "lines": [
                  "Q || Who is the strongest superhero? Why? || Hulk is the strongest superhero because he can lift cars.",
                  "Q || Which animal is the slowest in the world? || The sloth is the slowest animal in the world. / The turtle is the slowest.",
                  "Q || Who is the most intelligent person in your family? || My mom is the most intelligent person in my family.",
                  "Q || Which subject is the most exciting for you? || Art is the most exciting subject for me.",
                  "Q || Which animal is the most dangerous in the ocean? || The shark is the most dangerous animal in the ocean.",
                  "Q || Who is the fastest runner in your family? || My brother is the fastest runner in my family.",
                  "Q || Which video game character is the most curious? || Steve from Minecraft is the most curious.",
                  "Q || Which is the biggest animal in the world? || The blue whale is the biggest animal in the world.",
                  "Q || Why is math the most difficult subject for many kids? || Because there are many numbers and rules.",
                  "Q || What is the most beautiful place you know? || The beach is the most beautiful place I know.",
                  "F || The whale is the ____ animal. || biggest || bigger / most big",
                  "F || Art is the ____ subject. || most exciting || excitingest / more exciting",
                  "F || My brother is ____ fastest runner. || the || a / than",
                  "T || Hulk es el más fuerte. || Hulk is the strongest.",
                  "T || Mi mamá es la más inteligente de mi familia. || My mom is the most intelligent in my family.",
                  "T || ¿Cuál es el animal más grande del mundo? || Which is the biggest animal in the world?",
                  "T || Arte es la materia más emocionante. || Art is the most exciting subject.",
                  "T || El tiburón es el más peligroso del océano. || The shark is the most dangerous in the ocean.",
                  "S || red circle:1, blue circle:1, green circle:1 || Which circle is the biggest? (They are the same size; say so!) || They are the same size. / No circle is the biggest.",
                  "E || 🐌 🐢 🐇 || Which animal is the slowest? || The snail is the slowest."
                ],
                "mistakes": [
                  "M || The whale is the [bigger] animal in the world. || biggest* / bigger / most big || The whale is the biggest animal in the world.",
                  "M || Art is the [more exciting] subject. || most exciting* / more exciting / excitingest || Art is the most exciting subject."
                ]
              }
            ]
          },
          {
            "week": 3,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Food — Comparatives & Superlatives; Positive sentences; Wh-questions (Which...?) — Vocabulary: spicy, sweet, salty, healthy, delicious",
                "lines": [
                  "Q || Which food is spicier, pizza or Mexican tacos? || Mexican tacos are spicier than pizza.",
                  "Q || Which is the sweetest dessert you know? || Chocolate cake is the sweetest dessert I know.",
                  "Q || Which food is healthier, a salad or french fries? || A salad is healthier than french fries.",
                  "Q || Which snack is saltier, popcorn or an apple? || Popcorn is saltier than an apple.",
                  "Q || What is the most delicious food your mom cooks? || Her lasagna is the most delicious food she cooks.",
                  "Q || Which fruit is sweeter, a banana or a lemon? || A banana is sweeter than a lemon.",
                  "Q || Which is the healthiest food in your house? || Vegetables are the healthiest food in my house.",
                  "Q || Compare your favorite food and your best friend's favorite food. Use \"more delicious\". || Pizza is more delicious than hamburgers.",
                  "F || Tacos are ____ than pizza. || spicier || spicyer / more spicy",
                  "F || A salad is ____ than french fries. || healthier || healthyer / more healthy",
                  "F || This is the ____ cake. || most delicious || deliciousest / more delicious",
                  "T || Los tacos son más picantes que la pizza. || Tacos are spicier than pizza.",
                  "T || La ensalada es más saludable que las papas fritas. || The salad is healthier than french fries.",
                  "T || El pastel de chocolate es el postre más dulce. || Chocolate cake is the sweetest dessert.",
                  "T || Las palomitas son más saladas que una manzana. || Popcorn is saltier than an apple.",
                  "T || La lasaña de mi mamá es la comida más deliciosa. || My mom's lasagna is the most delicious food.",
                  "H || 🌶️ || Guess the hidden adjective! || Spicy",
                  "H || 🥗 || Guess the hidden adjective! || Healthy",
                  "E || 🍌 🍋 || Which fruit is sweeter? || The banana is sweeter than the lemon.",
                  "E || 🍟 🥗 🍰 || Which food is the healthiest? || The salad is the healthiest."
                ],
                "mistakes": [
                  "M || Tacos are [more spicy] than pizza. || spicier* / more spicy / spiciest || Tacos are spicier than pizza.",
                  "M || A salad is [healthyer] than french fries. || healthier* / healthyer / more healthy || A salad is healthier than french fries."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Superheroes and villains — Comparatives & Superlatives; Wh-questions (Who...?) — Vocabulary: strong, fast, smart, dangerous, powerful",
                "lines": [
                  "Q || Who is more dangerous, Joker or Thanos? || Thanos is more dangerous than Joker.",
                  "Q || Who is the most powerful superhero? || Superman is the most powerful superhero. / Thor is the most powerful superhero.",
                  "Q || Who is faster, Flash or Spider-Man? || Flash is faster than Spider-Man.",
                  "Q || Who is the smartest villain? || Lex Luthor is the smartest villain. / Joker is the smartest villain.",
                  "Q || Who is stronger, Hulk or Thor? || Hulk is stronger than Thor. / Thor is stronger than Hulk.",
                  "Q || Who is the most dangerous villain in Spider-Man movies? || Green Goblin is the most dangerous villain.",
                  "Q || Who is more powerful, your favorite superhero or your favorite villain? Why? || My favorite superhero is more powerful because he always wins.",
                  "Q || Who is the fastest villain you know? || Reverse-Flash is the fastest villain I know.",
                  "F || Thanos is ____ than Joker. || more dangerous || dangerouser / most dangerous",
                  "F || Superman is the ____ superhero. || most powerful || more powerful / powerfulest",
                  "F || Who is ____, Flash or Spider-Man? || faster || fastest / more fast",
                  "T || Thanos es más peligroso que Joker. || Thanos is more dangerous than Joker.",
                  "T || Superman es el superhéroe más poderoso. || Superman is the most powerful superhero.",
                  "T || ¿Quién es más rápido? || Who is faster?",
                  "T || Hulk es más fuerte que Thor. || Hulk is stronger than Thor.",
                  "T || Joker es el villano más inteligente. || Joker is the smartest villain.",
                  "H || 🦹 || Guess the hidden word! || Villain",
                  "E || 🦸 🦹 || Who is more powerful? (Use your imagination!) || The superhero is more powerful than the villain.",
                  "E || 🦸‍♂️ 🦸‍♀️ 🦹‍♂️ || Who is the fastest? (Use your imagination!) || The superwoman is the fastest.",
                  "E || 🧠🦹 💪🦹 || Who is more dangerous, the smart villain or the strong villain? || The smart villain is more dangerous."
                ],
                "mistakes": [
                  "M || Thanos is [the more dangerous] villain. || the most dangerous* / the more dangerous / dangerousest || Thanos is the most dangerous villain.",
                  "M || Flash is [more fast] than Spider-Man. || faster* / more fast / fastest || Flash is faster than Spider-Man."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Devices — Comparatives & Superlatives; Wh-questions (Which...?) — Vocabulary: useful, cheap, expensive, cool, interactive",
                "lines": [
                  "Q || Which device is more expensive, a phone or a tablet? || A tablet is more expensive than a phone. / A phone is more expensive than a tablet.",
                  "Q || Which is the cheapest device in your house? || The radio is the cheapest device in my house.",
                  "Q || Which device is more useful for homework, a laptop or a TV? || A laptop is more useful for homework than a TV.",
                  "Q || Which is the coolest device you have? || My video game console is the coolest device I have.",
                  "Q || Which is more interactive, a book or a tablet? || A tablet is more interactive than a book.",
                  "Q || Which is the most expensive device in your house? || The TV is the most expensive device in my house.",
                  "Q || Which device is cheaper, a watch or a smartwatch? || A watch is cheaper than a smartwatch.",
                  "Q || Which is the most useful device for your dad at work? || The computer is the most useful device for my dad at work.",
                  "F || A tablet is ____ than a book. || more interactive || interactiver / most interactive",
                  "F || A watch is ____ than a smartwatch. || cheaper || cheapest / more cheap",
                  "F || The TV is the ____ device in my house. || most expensive || expensivest / more expensive",
                  "T || Una tableta es más cara que un teléfono. || A tablet is more expensive than a phone.",
                  "T || El radio es el aparato más barato. || The radio is the cheapest device.",
                  "T || Una laptop es más útil para la tarea. || A laptop is more useful for homework.",
                  "T || Mi consola es el aparato más genial. || My console is the coolest device.",
                  "T || ¿Cuál es más interactivo? || Which is more interactive?",
                  "H || 📱 || Guess the hidden device! || Phone",
                  "E || 📱 💻 || Which device is more expensive? (Use your imagination!) || The laptop is more expensive than the phone.",
                  "E || 📻 📺 🎮 || Which device is the cheapest? (Use your imagination!) || The radio is the cheapest.",
                  "E || 📖 📱 || Which is more interactive? || The phone is more interactive than the book."
                ],
                "mistakes": [
                  "M || A tablet is [expensiver] than a phone. || more expensive* / expensiver / most expensive || A tablet is more expensive than a phone.",
                  "M || A watch is [more cheap] than a smartwatch. || cheaper* / more cheap / cheapest || A watch is cheaper than a smartwatch."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Countries and places — Comparatives & Superlatives; Wh-questions (Why...?) — Vocabulary: big, modern, beautiful, hot, busy, interesting",
                "lines": [
                  "Q || Which city is bigger, your city or the capital of your country? || The capital is bigger than my city.",
                  "Q || Which is the most beautiful place in your country? Why? || Cartagena is the most beautiful place because it has the sea and old houses.",
                  "Q || Why is New York busier than your city? || Because it has more people and more cars.",
                  "Q || Which country is hotter, Colombia or Canada? Why? || Colombia is hotter than Canada because it is near the equator.",
                  "Q || Which is the most modern city you know? Why? || Dubai is the most modern city I know because it has very tall buildings.",
                  "Q || Why is the beach more interesting than the mountains for you? (Or the opposite!) || The beach is more interesting because I can swim and see fish.",
                  "Q || Which is the biggest country in South America? || Brazil is the biggest country in South America.",
                  "Q || Why is your city the most interesting place for you? || Because my family and friends are there.",
                  "F || New York is ____ than my city. || busier || busyer / more busy",
                  "F || Dubai is the ____ city. || most modern || modernest / more modern",
                  "F || ____ is Colombia hotter than Canada? || Why || Which / Who",
                  "T || Mi ciudad es más grande que la tuya. || My city is bigger than yours.",
                  "T || Cartagena es el lugar más hermoso. || Cartagena is the most beautiful place.",
                  "T || ¿Por qué es Nueva York más ocupada? || Why is New York busier?",
                  "T || Colombia es más caliente que Canadá. || Colombia is hotter than Canada.",
                  "T || Brasil es el país más grande de Sudamérica. || Brazil is the biggest country in South America.",
                  "H || 🏙️ || Guess the hidden word! || City",
                  "E || 🏙️🚕🚕 🏡🌳 || Which place is busier? || The city is busier than the countryside.",
                  "E || 🏖️☀️ 🏔️❄️ || Which place is hotter? || The beach is hotter than the mountains.",
                  "E || 🏰 🏢 || Which building is more modern? || The tall building is more modern than the castle."
                ],
                "mistakes": [
                  "M || New York is [more busy] than my city. || busier* / more busy / busiest || New York is busier than my city.",
                  "M || Colombia is [hoter] than Canada. || hotter* / hoter / more hot || Colombia is hotter than Canada."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Countries and places — Comparatives & Superlatives; Yes/No questions (Long answers); past progressive review — Vocabulary: big, modern, beautiful, hot, busy, interesting",
                "lines": [
                  "Q || Is Medellín hotter than Bogotá? || Yes, Medellín is hotter than Bogotá.",
                  "Q || Is your city the most beautiful city in your country? || Yes, it is the most beautiful city. / No, it isn't. Cartagena is more beautiful.",
                  "Q || Is the beach more interesting than the city for you? || Yes, the beach is more interesting than the city. / No, the city is more interesting.",
                  "Q || Is Tokyo more modern than your city? || Yes, Tokyo is more modern than my city.",
                  "Q || Is Brazil bigger than Colombia? || Yes, Brazil is bigger than Colombia.",
                  "Q || Is your school the busiest place in your neighborhood? || Yes, it is the busiest place. / No, the mall is busier.",
                  "Q || What was your family doing on your last trip at 3:00 PM? (Use your imagination!) || They were walking around the city.",
                  "Q || Is the countryside quieter than the city? || Yes, the countryside is quieter than the city.",
                  "Q || What were you doing yesterday at 5:00 PM? || I was doing my homework.",
                  "Q || Compare your bedroom and the living room. Use \"bigger\" or \"smaller\". || The living room is bigger than my bedroom.",
                  "F || ____ Brazil bigger than Colombia? || Is || Are / Does",
                  "F || Yes, Tokyo is more modern ____ my city. || than || that / then",
                  "F || They ____ walking around the city at 3:00 PM. || were || was / are",
                  "T || ¿Es Medellín más caliente que Bogotá? || Is Medellín hotter than Bogotá?",
                  "T || Sí, Brasil es más grande que Colombia. || Yes, Brazil is bigger than Colombia.",
                  "T || No, mi ciudad no es la más moderna. || No, my city isn't the most modern.",
                  "T || El campo es más tranquilo que la ciudad. || The countryside is quieter than the city.",
                  "T || Ellos estaban caminando por la ciudad. || They were walking around the city.",
                  "H || 🏖️ || Guess the hidden place! || Beach",
                  "E || 🗼🏙️ 🏘️ || Is the big city more modern than the town? || Yes, the big city is more modern than the town."
                ],
                "mistakes": [
                  "M || [Does] Brazil bigger than Colombia? || Is* / Does / Are || Is Brazil bigger than Colombia?",
                  "M || They [was] walking around the city. || were* / was / are || They were walking around the city."
                ]
              }
            ]
          },
          {
            "week": 4,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "House — Comparatives & Superlatives; Positive sentences — Vocabulary: big, small, cozy, comfortable",
                "lines": [
                  "Q || Describe your house. Which is the biggest room? || The living room is the biggest room in my house.",
                  "Q || Which is the smallest room in your house? || The bathroom is the smallest room in my house.",
                  "Q || Which room is cozier, your bedroom or the living room? || My bedroom is cozier than the living room.",
                  "Q || Which is the most comfortable place in your house? || The sofa is the most comfortable place in my house. / My bed is the most comfortable place.",
                  "Q || Is your house bigger or smaller than your grandma's house? || My house is smaller than my grandma's house.",
                  "Q || Which bed is more comfortable, yours or your parents' bed? || My parents' bed is more comfortable than mine.",
                  "Q || Compare your bedroom and your brother's or sister's bedroom. Use \"bigger\" or \"smaller\". || My bedroom is bigger than my sister's bedroom.",
                  "Q || Which is the coziest place in your house when it rains? || The living room is the coziest place when it rains.",
                  "F || My bedroom is ____ than the living room. || cozier || cozyer / more cozy",
                  "F || The sofa is the ____ place. || most comfortable || comfortablest / more comfortable",
                  "F || The bathroom is the ____ room. || smallest || smaller / most small",
                  "T || La sala es el cuarto más grande de mi casa. || The living room is the biggest room in my house.",
                  "T || El baño es el más pequeño. || The bathroom is the smallest.",
                  "T || Mi cuarto es más acogedor que la sala. || My bedroom is cozier than the living room.",
                  "T || Mi cama es el lugar más cómodo. || My bed is the most comfortable place.",
                  "T || Mi casa es más pequeña que la de mi abuela. || My house is smaller than my grandma's house.",
                  "H || 🛋️ || Guess the hidden adjective! || Comfortable",
                  "H || 🏠 || Guess the hidden word! || House",
                  "E || 🏠 🏡🏡 || Which house is bigger? || The second house is bigger than the first house.",
                  "E || 🛏️ 🪑 🛋️ || Which is the most comfortable? (Use your imagination!) || The bed is the most comfortable."
                ],
                "mistakes": [
                  "M || My bedroom is [cozyer] than the living room. || cozier* / cozyer / more cozy || My bedroom is cozier than the living room.",
                  "M || The sofa is the [comfortablest] place. || most comfortable* / comfortablest / more comfortable || The sofa is the most comfortable place."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "House — Comparatives & Superlatives; Wh-questions (Which...?) — Vocabulary: big, small, cozy, comfortable, peaceful, spacious",
                "lines": [
                  "Q || Which room in your house is the most peaceful? || My bedroom is the most peaceful room.",
                  "Q || Which is more spacious, your kitchen or your living room? || My living room is more spacious than my kitchen.",
                  "Q || Which is the most spacious room in your grandma's house? (Use your imagination!) || The living room is the most spacious room in her house.",
                  "Q || Which place is more peaceful, your house or your school? || My house is more peaceful than my school.",
                  "Q || Which is cozier, a house or an apartment? Why? || A house is cozier because it has a garden.",
                  "Q || Which is the smallest thing in your bedroom? || My lamp is the smallest thing in my bedroom.",
                  "Q || Which is more comfortable, your chair or your bed? || My bed is more comfortable than my chair.",
                  "Q || Which room is the biggest in your best friend's house? (Use your imagination!) || The living room is the biggest room in his house.",
                  "F || My bedroom is the ____ room. || most peaceful || peacefulest / more peaceful",
                  "F || The living room is ____ than the kitchen. || more spacious || spaciouser / most spacious",
                  "F || ____ room is the coziest? || Which || Who / Why",
                  "T || Mi cuarto es el más tranquilo. || My bedroom is the most peaceful.",
                  "T || La sala es más espaciosa que la cocina. || The living room is more spacious than the kitchen.",
                  "T || ¿Cuál cuarto es el más acogedor? || Which room is the coziest?",
                  "T || Mi casa es más tranquila que mi escuela. || My house is more peaceful than my school.",
                  "T || Una casa es más acogedora que un apartamento. || A house is cozier than an apartment.",
                  "H || 🛏️ || Guess the hidden object! || Bed",
                  "E || 🏡🌳 🏫🔔 || Which place is more peaceful? || The house is more peaceful than the school.",
                  "E || 🍳🚪 🛋️📺🪴 || Which room is more spacious? || The living room is more spacious than the kitchen.",
                  "E || 🏠 🏢 || Which is cozier? (Use your imagination!) || The house is cozier than the building."
                ],
                "mistakes": [
                  "M || My bedroom is the [peacefulest] room. || most peaceful* / peacefulest / more peaceful || My bedroom is the most peaceful room.",
                  "M || The living room is [spaciouser] than the kitchen. || more spacious* / spaciouser / most spacious || The living room is more spacious than the kitchen."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Toy Lab — Comparatives & Superlatives; rule -y → -ier / -iest; Find the mistakes — Vocabulary: bright, brave, sticky, loud, weird",
                "lines": [
                  "Q || Which toy is the loudest in your house? || My robot is the loudest toy in my house. / My drum is the loudest toy.",
                  "Q || Which is weirder, a toy with three eyes or a toy with two heads? (Use your imagination!) || A toy with two heads is weirder.",
                  "Q || Which is the brightest toy you have? || My light-up ball is the brightest toy I have.",
                  "Q || Which is stickier, slime or play dough? || Slime is stickier than play dough.",
                  "Q || Who is braver, a teddy bear or a toy soldier? (Use your imagination!) || A toy soldier is braver than a teddy bear.",
                  "Q || Say the comparative of \"sticky\". || Stickier.",
                  "Q || Say the superlative of \"weird\". || The weirdest.",
                  "Q || Find the mistake and correct it: \"Slime is the stickyest toy.\" || Slime is the stickiest toy.",
                  "F || Slime is ____ than play dough. || stickier || stickyer / more sticky",
                  "F || My robot is the ____ toy. || loudest || louder / most loud",
                  "F || This is the ____ toy in the lab. || weirdest || weirder / most weird",
                  "T || El slime es más pegajoso que la plastilina. || Slime is stickier than play dough.",
                  "T || Mi robot es el juguete más ruidoso. || My robot is the loudest toy.",
                  "T || Este es el juguete más raro. || This is the weirdest toy.",
                  "T || El soldado es más valiente que el oso. || The soldier is braver than the bear.",
                  "T || Esta es la pelota más brillante. || This is the brightest ball.",
                  "H || 🧸 || Guess the hidden toy! || Teddy bear",
                  "E || 🤖🔊 🧸 || Which toy is louder? || The robot is louder than the teddy bear.",
                  "E || 🟢🫠 🧱 || Which is stickier, the slime or the block? || The slime is stickier than the block.",
                  "E || 💡⚪ ⚫ || Which ball is brighter? || The light ball is brighter than the black ball."
                ],
                "mistakes": [
                  "M || Slime is the [stickyest] toy. || stickiest* / stickyest / most sticky || Slime is the stickiest toy.",
                  "M || My robot is [louder] toy in the house. || the loudest* / louder / most loud || My robot is the loudest toy in the house."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Monthly Evaluation — Cumulative review of previously introduced structures (comparatives, superlatives, simple past, past progressive, going to, simple present) — Vocabulary Review",
                "lines": [
                  "Q || Who is the tallest person in your family? || My dad is the tallest person in my family.",
                  "Q || Which animal is more dangerous, a lion or a rabbit? || A lion is more dangerous than a rabbit.",
                  "Q || What are you going to do on your next birthday? || I am going to have a party with my friends.",
                  "Q || What did you do last weekend? || I visited my cousins and played soccer.",
                  "Q || What were you doing before class today? || I was eating a snack. / I was doing my homework.",
                  "Q || Which is the most comfortable room in your house? || My bedroom is the most comfortable room.",
                  "Q || How often does your dad cook? || He sometimes cooks.",
                  "Q || Which subject is the most difficult for you? || Math is the most difficult subject for me.",
                  "Q || What is your best friend doing right now? (Use your imagination!) || He is playing video games.",
                  "Q || Spell the word \"beautiful\". || B-E-A-U-T-I-F-U-L.",
                  "F || My dad is the ____ person in my family. || tallest || taller / most tall",
                  "F || A laptop is ____ than a radio. || more expensive || expensiver / expensivest",
                  "F || She ____ cooking when I arrived. || was || were / is",
                  "T || Mi papá es el más alto. || My dad is the tallest.",
                  "T || Un león es más peligroso que un conejo. || A lion is more dangerous than a rabbit.",
                  "T || Voy a tener una fiesta. || I am going to have a party.",
                  "T || Mi cuarto es el más cómodo. || My bedroom is the most comfortable.",
                  "S || blue star:1, red star:1, yellow star:1 || Which star is the most beautiful? Give your opinion. || I think the blue star is the most beautiful.",
                  "H || 🦁 || Guess the hidden animal! || Lion",
                  "E || 🐘 🐭 || Which animal is bigger? || The elephant is bigger than the mouse."
                ],
                "mistakes": [
                  "M || My dad is the [taller] person in my family. || tallest* / taller / most tall || My dad is the tallest person in my family.",
                  "M || A lion is [dangerouser] than a rabbit. || more dangerous* / dangerouser / most dangerous || A lion is more dangerous than a rabbit."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Monthly Evaluation — Comparatives & Superlatives review; reading comprehension; cumulative review — Vocabulary Review",
                "lines": [
                  "Q || Read and answer: \"Tom is 10. Ana is 12. Leo is 8.\" Who is the oldest? || Ana is the oldest.",
                  "Q || Read and answer: \"Tom is 10. Ana is 12. Leo is 8.\" Who is younger, Tom or Leo? || Leo is younger than Tom.",
                  "Q || Read and answer: \"The red car costs $10. The blue car costs $20.\" Which car is cheaper? || The red car is cheaper than the blue car.",
                  "Q || Read and answer: \"A cheetah runs 100 km/h. A horse runs 70 km/h. A turtle runs 1 km/h.\" Which is the slowest? || The turtle is the slowest.",
                  "Q || Read and answer: \"Medellín is 25°C. Bogotá is 14°C.\" Which city is hotter? || Medellín is hotter than Bogotá.",
                  "Q || Which is the most delicious food in the world for you? || Pizza is the most delicious food in the world for me.",
                  "Q || Who is the strongest superhero for you? Why? || Hulk is the strongest superhero because he is very big.",
                  "Q || Compare your house and your school. Use \"bigger\". || My school is bigger than my house.",
                  "Q || Which is the most interesting place in your city? || The park is the most interesting place in my city.",
                  "Q || Which device is more useful for you, a phone or a computer? Why? || A phone is more useful because I can call my family.",
                  "F || Ana is the ____ of the three kids. || oldest || older / most old",
                  "F || The red car is ____ than the blue car. || cheaper || cheapest / more cheap",
                  "F || Medellín is ____ than Bogotá. || hotter || hoter / most hot",
                  "T || Ana es la mayor. || Ana is the oldest.",
                  "T || El carro rojo es más barato que el azul. || The red car is cheaper than the blue one.",
                  "T || La tortuga es la más lenta. || The turtle is the slowest.",
                  "T || Mi escuela es más grande que mi casa. || My school is bigger than my house.",
                  "T || ¿Cuál es el lugar más interesante de tu ciudad? || Which is the most interesting place in your city?",
                  "H || 🚗 || Guess the hidden word! || Car",
                  "E || 🚗💲1️⃣0️⃣ 🚙💲2️⃣0️⃣ || Which car is more expensive? || The second car is more expensive than the first car."
                ],
                "mistakes": [
                  "M || Ana is the [older] of the three kids. || oldest* / older / most old || Ana is the oldest of the three kids.",
                  "M || The red car is cheaper [then] the blue car. || than* / then / that || The red car is cheaper than the blue car."
                ]
              }
            ]
          },
          {
            "week": 5,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Life experiences — Present perfect (1st person); Positive sentences; Yes/No questions (Short answers) — Vocabulary: eat, drink, see, go, sleep",
                "lines": [
                  "Q || Have you ever eaten sushi? || Yes, I have. / No, I haven't.",
                  "Q || Have you ever seen a whale? || Yes, I have. / No, I haven't.",
                  "Q || Have you ever gone to another country? || Yes, I have. / No, I haven't.",
                  "Q || Have you ever slept in a tent? || Yes, I have. / No, I haven't.",
                  "Q || Have you ever drunk coconut water? || Yes, I have. / No, I haven't.",
                  "Q || Tell me one thing you have eaten this week. || I have eaten pizza this week.",
                  "Q || Tell me one animal you have seen in real life. || I have seen a monkey in real life.",
                  "Q || Tell me one place you have gone to with your family. || I have gone to the beach with my family.",
                  "F || I ____ eaten sushi. || have || has / had",
                  "F || ____ you ever seen a whale? || Have || Has / Did",
                  "F || I have ____ to another country. || gone || go / went",
                  "T || He comido sushi. || I have eaten sushi.",
                  "T || ¿Alguna vez has visto una ballena? || Have you ever seen a whale?",
                  "T || Nunca he dormido en una carpa. || I have never slept in a tent.",
                  "T || He ido a la playa con mi familia. || I have gone to the beach with my family.",
                  "T || Sí, he tomado agua de coco. || Yes, I have drunk coconut water.",
                  "H || 🍣 || Guess the hidden food! || Sushi",
                  "H || ⛺ || Guess the hidden word! || Tent",
                  "E || 🧒✅🐋 || Have you ever seen a whale? (Imagine the answer is yes.) || Yes, I have.",
                  "E || 🧒❌🍣 || Have you ever eaten sushi? (Imagine the answer is no.) || No, I haven't."
                ],
                "mistakes": [
                  "M || I have [eat] sushi. || eaten* / eat / ate || I have eaten sushi.",
                  "M || [Has] you ever seen a whale? || Have* / Has / Did || Have you ever seen a whale?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Life experiences — Present perfect (1st person); Wh-questions (What...?) — Vocabulary: eat, drink, see, go, sleep",
                "lines": [
                  "Q || What is the strangest food you have ever eaten? || The strangest food I have ever eaten is ants. / I have eaten snails.",
                  "Q || What is the biggest animal you have ever seen? || The biggest animal I have ever seen is an elephant.",
                  "Q || What is the most delicious drink you have ever drunk? || The most delicious drink I have ever drunk is mango juice.",
                  "Q || What is the most beautiful place you have ever gone to? || The most beautiful place I have ever gone to is Santa Marta.",
                  "Q || What is the weirdest place you have ever slept in? || The weirdest place I have ever slept in is a car.",
                  "Q || What have you eaten today? || I have eaten eggs and bread today.",
                  "Q || What have you seen on TV this week? || I have seen a cartoon and a soccer game this week.",
                  "Q || What have you drunk today? || I have drunk juice and water today.",
                  "F || What ____ you eaten today? || have || has / did",
                  "F || I have ____ an elephant. || seen || see / saw",
                  "F || I have ____ juice today. || drunk || drink / drank",
                  "T || ¿Qué has comido hoy? || What have you eaten today?",
                  "T || El animal más grande que he visto es un elefante. || The biggest animal I have seen is an elephant.",
                  "T || He tomado jugo hoy. || I have drunk juice today.",
                  "T || ¿Cuál es el lugar más hermoso al que has ido? || What is the most beautiful place you have gone to?",
                  "T || He dormido en un carro. || I have slept in a car.",
                  "H || 🐘 || Guess the hidden animal! || Elephant",
                  "E || 🧒🍳🍞 ☀️ || What have you eaten today? || I have eaten eggs and bread today.",
                  "E || 🧒🧃💧 || What have you drunk today? || I have drunk juice and water today.",
                  "E || 🧒👀📺⚽ || What have you seen on TV this week? || I have seen a soccer game this week."
                ],
                "mistakes": [
                  "M || What [has] you eaten today? || have* / has / did || What have you eaten today?",
                  "M || I have [see] an elephant. || seen* / see / saw || I have seen an elephant."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Life experiences — Present perfect (1st person); Yes/No questions (Long answers); trips — Vocabulary: be (city/country), visit, try new food, buy souvenirs, take pictures",
                "lines": [
                  "Q || Have you ever been to another city or country? || Yes, I have been to Cartagena. / No, I have never been to another country.",
                  "Q || Have you ever visited a museum? || Yes, I have visited a museum. / No, I have never visited a museum.",
                  "Q || Have you ever tried food from another country? || Yes, I have tried Mexican food. / No, I have never tried food from another country.",
                  "Q || Have you ever bought souvenirs on a trip? || Yes, I have bought souvenirs. / No, I have never bought souvenirs.",
                  "Q || Have you ever taken pictures of a famous place? || Yes, I have taken pictures of a famous place. / No, I haven't taken pictures of a famous place.",
                  "Q || Have you ever been to the beach? || Yes, I have been to the beach many times. / No, I have never been to the beach.",
                  "Q || Have you ever visited your grandparents in another city? || Yes, I have visited them in another city. / No, I haven't.",
                  "Q || Have you ever tried sushi? || Yes, I have tried sushi. / No, I have never tried sushi.",
                  "F || I have ____ to Cartagena. || been || be / was",
                  "F || I have never ____ a museum. || visited || visit / visiting",
                  "F || Have you ever ____ souvenirs? || bought || buy / buyed",
                  "T || He estado en Cartagena. || I have been to Cartagena.",
                  "T || ¿Has visitado un museo? || Have you visited a museum?",
                  "T || He probado comida mexicana. || I have tried Mexican food.",
                  "T || Nunca he comprado recuerdos. || I have never bought souvenirs.",
                  "T || He tomado fotos de un lugar famoso. || I have taken pictures of a famous place.",
                  "H || 🧳🎁 || Guess the action! || Buy souvenirs",
                  "E || 🧒✅🏛️ || Have you ever visited a museum? (Imagine the answer is yes.) || Yes, I have visited a museum.",
                  "E || 🧒❌🌮 || Have you ever tried Mexican food? (Imagine the answer is no.) || No, I have never tried Mexican food.",
                  "E || 🧒📸🗼 || Have you ever taken pictures of a famous place? (Imagine the answer is yes.) || Yes, I have taken pictures of a famous place."
                ],
                "mistakes": [
                  "M || I have [be] to Cartagena. || been* / be / was || I have been to Cartagena.",
                  "M || I have never [buy] souvenirs. || bought* / buy / buyed || I have never bought souvenirs."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Life experiences — Present perfect (1st person); Wh-questions (Where/Who...?); trips — Vocabulary: be (city/country), visit, try new food, buy souvenirs, take pictures",
                "lines": [
                  "Q || Where have you been on vacation? || I have been to the beach. / I have been to my grandma's town.",
                  "Q || Who have you traveled with? || I have traveled with my parents. / I have traveled with my cousins.",
                  "Q || Where have you tried new food? || I have tried new food at a restaurant. / I have tried new food in another city.",
                  "Q || Who have you bought souvenirs for? || I have bought souvenirs for my mom. / I have bought souvenirs for my best friend.",
                  "Q || Where have you taken your best pictures? || I have taken my best pictures at the beach.",
                  "Q || Who have you visited in another city? || I have visited my aunt in another city.",
                  "Q || Where have you slept on a trip? || I have slept in a hotel. / I have slept at my uncle's house.",
                  "Q || Who has traveled the most in your family? || My dad has traveled the most in my family.",
                  "F || Where ____ you been? || have || has / did",
                  "F || I have traveled ____ my parents. || with || whit / to",
                  "F || Who have you ____ souvenirs for? || bought || buy / buying",
                  "T || ¿Dónde has estado? || Where have you been?",
                  "T || He viajado con mis padres. || I have traveled with my parents.",
                  "T || ¿Para quién has comprado recuerdos? || Who have you bought souvenirs for?",
                  "T || He tomado mis mejores fotos en la playa. || I have taken my best pictures at the beach.",
                  "T || He visitado a mi tía en otra ciudad. || I have visited my aunt in another city.",
                  "H || 🏨 || Guess the hidden place! || Hotel",
                  "E || 🧒✈️👨👩 || Who have you traveled with? || I have traveled with my parents.",
                  "E || 🧒🏖️📸 || Where have you taken pictures? || I have taken pictures at the beach.",
                  "E || 🧒🎁👩 || Who have you bought souvenirs for? || I have bought souvenirs for my mom."
                ],
                "mistakes": [
                  "M || Where [has] you been? || have* / has / did || Where have you been?",
                  "M || I have [travel] with my parents. || traveled* / travel / traveling || I have traveled with my parents."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Present perfect (1st person); daily routine review — Vocabulary: eat, drink, see, go, sleep, be, visit, try new food, buy souvenirs, take pictures",
                "lines": [
                  "Q || Have you ever been to another country? || Yes, I have been to Mexico. / No, I have never been to another country.",
                  "Q || What is the best food you have ever eaten? || The best food I have ever eaten is my grandma's soup.",
                  "Q || Have you ever seen a famous person? || Yes, I have. / No, I haven't.",
                  "Q || Where have you taken pictures with your family? || I have taken pictures with my family at the park.",
                  "Q || Who have you visited this month? || I have visited my grandparents this month.",
                  "Q || Have you ever slept in a hotel? || Yes, I have slept in a hotel. / No, I have never slept in a hotel.",
                  "Q || What have you drunk this morning? || I have drunk milk and juice.",
                  "Q || What is your best friend's daily routine? || He wakes up at 6:00 AM, goes to school and plays soccer in the afternoon.",
                  "Q || Have you ever tried a very spicy food? || Yes, I have tried very spicy tacos. / No, I haven't.",
                  "Q || Tell me three things you have done this year. || I have visited the beach, I have eaten sushi and I have seen a concert.",
                  "F || I have ____ a famous person. || seen || see / saw",
                  "F || Have you ever ____ in a hotel? || slept || sleep / sleeped",
                  "F || I have never ____ to Mexico. || been || be / was",
                  "T || He visto a una persona famosa. || I have seen a famous person.",
                  "T || ¿Alguna vez has dormido en un hotel? || Have you ever slept in a hotel?",
                  "T || Nunca he estado en México. || I have never been to Mexico.",
                  "T || He visitado a mis abuelos este mes. || I have visited my grandparents this month.",
                  "T || Él se despierta a las seis y va a la escuela. || He wakes up at six and goes to school.",
                  "H || 🌮🌶️ || Guess the hidden food! || Spicy tacos",
                  "E || 🧒✅🏨🛏️ || Have you ever slept in a hotel? (Imagine the answer is yes.) || Yes, I have slept in a hotel."
                ],
                "mistakes": [
                  "M || I have [saw] a famous person. || seen* / saw / see || I have seen a famous person.",
                  "M || Have you ever [sleeped] in a hotel? || slept* / sleeped / sleep || Have you ever slept in a hotel?"
                ]
              }
            ]
          },
          {
            "week": 6,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Life experiences — Present perfect (3rd person); Positive sentences; Yes/No questions (Long answers) — Vocabulary: ride, dance, read, wash",
                "lines": [
                  "Q || Has your mom ever ridden a horse? || Yes, she has ridden a horse. / No, she has never ridden a horse.",
                  "Q || Has your dad ever danced at a wedding? || Yes, he has danced at a wedding. / No, he has never danced at a wedding.",
                  "Q || Has your best friend ever read a book in English? || Yes, she has read a book in English. / No, he has never read a book in English.",
                  "Q || Has your brother or sister ever washed the car? || Yes, he has washed the car. / No, she has never washed the car.",
                  "Q || Has your grandpa ever ridden a motorcycle? || Yes, he has ridden a motorcycle. / No, he hasn't.",
                  "Q || Has Shakira ever danced in Colombia? || Yes, she has danced in Colombia many times.",
                  "Q || Tell me one thing your mom has done this week. || She has washed the clothes this week.",
                  "Q || Tell me one thing your best friend has read this year. || He has read a comic book this year.",
                  "F || She ____ ridden a horse. || has || have / had",
                  "F || ____ he ever danced at a wedding? || Has || Have / Did",
                  "F || My sister has ____ the car. || washed || wash / washing",
                  "T || Ella ha montado a caballo. || She has ridden a horse.",
                  "T || ¿Ha bailado tu papá en una boda? || Has your dad danced at a wedding?",
                  "T || Mi hermano nunca ha lavado el carro. || My brother has never washed the car.",
                  "T || Él ha leído un libro en inglés. || He has read a book in English.",
                  "T || Sí, ella ha bailado en Colombia. || Yes, she has danced in Colombia.",
                  "H || 🐎 || Guess the action! || Ride a horse",
                  "H || 🚗🧽 || Guess the action! || Wash the car",
                  "E || 👩✅🐎 || Has she ever ridden a horse? || Yes, she has ridden a horse.",
                  "E || 👨❌💃 || Has he ever danced at a party? || No, he has never danced at a party."
                ],
                "mistakes": [
                  "M || She [have] ridden a horse. || has* / have / had || She has ridden a horse.",
                  "M || He has [rode] a motorcycle. || ridden* / rode / ride || He has ridden a motorcycle."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Life experiences — Present perfect (3rd person); Wh-questions (What/Where/Who... with?) — Vocabulary: ride, dance, read, wash",
                "lines": [
                  "Q || What has your mom read this month? || She has read a cooking book. / She has read the news.",
                  "Q || Where has your dad ridden a bike? || He has ridden a bike in the park. / He has ridden a bike in the mountains.",
                  "Q || Who has your sister danced with at parties? || She has danced with her friends. / She has danced with my dad.",
                  "Q || What has your brother washed this week? || He has washed the dishes. / He has washed his bike.",
                  "Q || Where has your best friend ridden a horse? (Use your imagination!) || He has ridden a horse on a farm.",
                  "Q || Who has your grandma read stories to? || She has read stories to me and my cousins.",
                  "Q || What has Messi ridden in a parade? (Use your imagination!) || He has ridden a bus in a parade.",
                  "Q || Where has your teacher danced? (Use your imagination!) || She has danced at school parties.",
                  "F || What ____ she read this month? || has || have / did",
                  "F || He has ridden a bike ____ the park. || in || on / to",
                  "F || Who has she danced ____? || with || whit / to",
                  "T || ¿Qué ha leído tu mamá este mes? || What has your mom read this month?",
                  "T || Él ha montado bicicleta en el parque. || He has ridden a bike in the park.",
                  "T || ¿Con quién ha bailado tu hermana? || Who has your sister danced with?",
                  "T || Mi hermano ha lavado los platos. || My brother has washed the dishes.",
                  "T || Mi abuela me ha leído cuentos. || My grandma has read stories to me.",
                  "H || 📚👓 || Guess the action! || Read",
                  "E || 👩📖🍳 || What has she read this month? || She has read a cooking book.",
                  "E || 👨🚴🌳 || Where has he ridden a bike? || He has ridden a bike in the park.",
                  "E || 👧💃👧👧 || Who has she danced with? || She has danced with her friends."
                ],
                "mistakes": [
                  "M || What [have] she read this month? || has* / have / did || What has she read this month?",
                  "M || He has [rided] a bike in the park. || ridden* / rided / rode || He has ridden a bike in the park."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Life experiences — Present perfect (3rd person); Wh-questions (What...?); pets — Vocabulary: play, eat, sleep, wear",
                "lines": [
                  "Q || What has your dog eaten today? (Use your imagination if you don't have a dog!) || It has eaten dog food and a cookie.",
                  "Q || What has your cat played with this week? (Use your imagination!) || It has played with a ball of yarn.",
                  "Q || What has your pet worn? (Use your imagination!) || It has worn a sweater. / It has worn a Halloween costume.",
                  "Q || Where has your dog slept this week? (Use your imagination!) || It has slept on my bed. / It has slept on the sofa.",
                  "Q || What has your best friend's pet eaten that it shouldn't eat? (Use your imagination!) || It has eaten a shoe. / It has eaten chocolate.",
                  "Q || What has your little brother worn to school this week? || He has worn his uniform.",
                  "Q || What has your mom played with you this week? || She has played cards with me.",
                  "Q || What has your grandpa eaten for breakfast this week? || He has eaten eggs and arepas.",
                  "F || My dog ____ eaten a cookie. || has || have / had",
                  "F || It has ____ on my bed. || slept || sleep / sleeped",
                  "F || What ____ your cat played with? || has || have / did",
                  "T || Mi perro ha comido una galleta. || My dog has eaten a cookie.",
                  "T || Mi gato ha jugado con una pelota. || My cat has played with a ball.",
                  "T || Él ha usado un suéter. || It has worn a sweater.",
                  "T || ¿Qué ha comido tu perro hoy? || What has your dog eaten today?",
                  "T || Mi perro ha dormido en mi cama. || My dog has slept on my bed.",
                  "H || 🐕🧥 || Guess the action! || Wear a sweater",
                  "E || 🐕🍪 || What has the dog eaten? || It has eaten a cookie.",
                  "E || 🐈🧶 || What has the cat played with? || It has played with a ball of yarn.",
                  "E || 🐕😴🛏️ || Where has the dog slept? || It has slept on the bed."
                ],
                "mistakes": [
                  "M || My dog has [eat] a cookie. || eaten* / eat / ate || My dog has eaten a cookie.",
                  "M || The cat [have] played with a ball. || has* / have / had || The cat has played with a ball."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Life experiences — Present perfect (3rd person); Wh-questions (Who...?); colors review — Vocabulary: play, eat, sleep, wear",
                "lines": [
                  "Q || Who has slept the most in your house this week? || My cat has slept the most. / My dad has slept the most.",
                  "Q || Who has eaten the most candy in your family this month? || My little brother has eaten the most candy.",
                  "Q || Who has played with your pet today? (Use your imagination!) || My sister has played with it today.",
                  "Q || Who has worn a red T-shirt this week in your family? || My mom has worn a red T-shirt this week.",
                  "Q || Who has played soccer with you this week? || My cousins have played soccer with me this week.",
                  "Q || Who has worn the funniest costume in your family? (Use your imagination!) || My uncle has worn the funniest costume.",
                  "Q || Who has eaten breakfast with you today? || My brother has eaten breakfast with me today.",
                  "Q || Who has slept in your room this week? || Nobody has slept in my room. / My cousin has slept in my room.",
                  "F || Who ____ eaten the most candy? || has || have / did",
                  "F || My mom has ____ a red T-shirt. || worn || wear / weared",
                  "F || Who has ____ with the dog today? || played || play / playing",
                  "T || ¿Quién ha dormido más esta semana? || Who has slept the most this week?",
                  "T || Mi hermanito ha comido más dulces. || My little brother has eaten the most candy.",
                  "T || ¿Quién ha jugado con tu perro hoy? || Who has played with your dog today?",
                  "T || Mi mamá ha usado una camiseta roja. || My mom has worn a red T-shirt.",
                  "T || Mis primos han jugado fútbol conmigo. || My cousins have played soccer with me.",
                  "H || 👕🟥 || Guess the hidden color! || Red",
                  "E || 👩👕🟥 👨👕🟦 || Who has worn a red T-shirt? || The woman has worn a red T-shirt. / She has worn a red T-shirt.",
                  "E || 👦🍬🍬🍬 👧🍬 || Who has eaten the most candy? || The boy has eaten the most candy.",
                  "E || 👧🐕⚽ || Who has played with the dog? || The girl has played with the dog. / She has played with the dog."
                ],
                "mistakes": [
                  "M || Who [have] eaten the most candy? || has* / have / did || Who has eaten the most candy?",
                  "M || My mom has [weared] a red T-shirt. || worn* / weared / wore || My mom has worn a red T-shirt."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "SUPER STAR EXAM — Review of the week: Present perfect (3rd person); present progressive review — Vocabulary: ride, dance, read, wash, play, eat, sleep, wear",
                "lines": [
                  "Q || Has your mom ever ridden a motorcycle? || Yes, she has. / No, she has never ridden a motorcycle.",
                  "Q || What has your dad eaten today? || He has eaten rice and chicken.",
                  "Q || Who has danced at a party in your family this year? || My aunt has danced at a party this year.",
                  "Q || Where has your best friend ridden a bike? || She has ridden a bike at the park.",
                  "Q || What has your dog or cat played with this week? (Use your imagination!) || It has played with a toy mouse.",
                  "Q || Has your teacher ever read a book in Spanish? || Yes, she has. / No, he hasn't.",
                  "Q || What is your best friend doing at school right now? (Use your imagination!) || He is taking notes. / She is reading.",
                  "Q || Who has washed the dishes in your house this week? || My dad has washed the dishes this week.",
                  "Q || What has your sister worn to a party? || She has worn a blue dress.",
                  "Q || Tell me three things your mom has done this week. || She has cooked, she has worked and she has read a book.",
                  "F || ____ she ever ridden a motorcycle? || Has || Have / Did",
                  "F || He has ____ rice today. || eaten || eat / ate",
                  "F || My aunt has ____ at a party. || danced || dance / dancing",
                  "T || ¿Ha montado tu mamá en moto? || Has your mom ridden a motorcycle?",
                  "T || Él ha comido arroz y pollo. || He has eaten rice and chicken.",
                  "T || Mi tía ha bailado en una fiesta. || My aunt has danced at a party.",
                  "T || Ella está leyendo ahora mismo. || She is reading right now.",
                  "T || Mi papá ha lavado los platos. || My dad has washed the dishes.",
                  "H || 🍽️🧽 || Guess the action! || Wash the dishes",
                  "E || 👩✅🏍️ || Has she ever ridden a motorcycle? || Yes, she has ridden a motorcycle."
                ],
                "mistakes": [
                  "M || [Have] she ever ridden a motorcycle? || Has* / Have / Did || Has she ever ridden a motorcycle?",
                  "M || He has [ate] rice today. || eaten* / ate / eat || He has eaten rice today."
                ]
              }
            ]
          },
          {
            "week": 7,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Life experiences — Present perfect & Simple past (1st person); Positive sentences; Yes/No questions (Long answers); best vacation — Vocabulary: travel, visit, stay, see, take pictures",
                "lines": [
                  "Q || Have you ever traveled by plane? When? || Yes, I have traveled by plane. I traveled last year. / No, I have never traveled by plane.",
                  "Q || Have you ever stayed in a hotel? When did you stay there? || Yes, I have stayed in a hotel. I stayed there in December. / No, I have never stayed in a hotel.",
                  "Q || Have you ever visited a zoo? What did you see? || Yes, I have visited a zoo. I saw lions and monkeys.",
                  "Q || Have you ever taken pictures of the sea? Where did you take them? || Yes, I have taken pictures of the sea. I took them in Santa Marta.",
                  "Q || Have you ever seen snow? Where did you see it? || No, I have never seen snow. / Yes, I have seen snow. I saw it in Canada.",
                  "Q || What is the best vacation you have ever had? What did you do? || The best vacation I have ever had was in Cartagena. I swam every day.",
                  "Q || Complete: I have ____ (travel) to many places. Last year I ____ (travel) to Medellín. || I have traveled to many places. Last year I traveled to Medellín.",
                  "Q || Complete: I have ____ (see) the sea. I ____ (see) it in 2023. || I have seen the sea. I saw it in 2023.",
                  "F || I ____ traveled by plane. || have || has / did",
                  "F || Last year I ____ in a hotel. || stayed || have stayed / stay",
                  "F || I have ____ snow. || seen || saw / see",
                  "T || He viajado en avión. || I have traveled by plane.",
                  "T || El año pasado viajé a Medellín. || Last year I traveled to Medellín.",
                  "T || He visitado un zoológico. || I have visited a zoo.",
                  "T || Vi leones y monos. || I saw lions and monkeys.",
                  "T || Las mejores vacaciones que he tenido fueron en Cartagena. || The best vacation I have had was in Cartagena.",
                  "H || ✈️ || Guess the action! || Travel by plane",
                  "H || ❄️⛄ || Guess the hidden word! || Snow",
                  "E || 🧒✈️ 📅2023 || When did you travel by plane? (Use your imagination!) || I traveled by plane in 2023.",
                  "E || 🧒🏨✅ || Have you ever stayed in a hotel? || Yes, I have stayed in a hotel."
                ],
                "mistakes": [
                  "M || I have traveled by plane. I [have traveled] last year. || traveled* / have traveled / travel || I have traveled by plane. I traveled last year.",
                  "M || Last year I [have stayed] in a hotel. || stayed* / have stayed / stay || Last year I stayed in a hotel."
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Life experiences — Present perfect & Simple past (1st person); Wh-questions (What...?); best vacation — Vocabulary: travel, visit, stay, see, take pictures",
                "lines": [
                  "Q || What is the most interesting place you have visited? When did you go? || The most interesting place I have visited is the Botanical Garden. I went last year.",
                  "Q || What animals have you seen on your trips? Which one did you like the most? || I have seen monkeys and parrots. I liked the parrots the most.",
                  "Q || What pictures have you taken on vacation? Who took them with you? || I have taken pictures of the beach. My mom took them with me.",
                  "Q || What places have you stayed in on vacation? Which one did you like the most? || I have stayed in hotels and at my uncle's house. I liked the hotel the most.",
                  "Q || What did you do on your best vacation? || I swam in the sea and ate ice cream every day.",
                  "Q || What have you done this year that you didn't do last year? || This year I have traveled to the beach. Last year I stayed at home.",
                  "Q || What did your best friend do last weekend? || He visited his grandma.",
                  "Q || What is the best food you have eaten on a trip? Where did you eat it? || The best food I have eaten on a trip is seafood. I ate it in Cartagena.",
                  "F || What is the most interesting place you ____ visited? || have || has / did",
                  "F || I ____ to the beach last year. || went || have gone / go",
                  "F || What ____ you do on your best vacation? || did || have / do",
                  "T || ¿Cuál es el lugar más interesante que has visitado? || What is the most interesting place you have visited?",
                  "T || Fui el año pasado. || I went last year.",
                  "T || He visto monos y loros. || I have seen monkeys and parrots.",
                  "T || Nadé en el mar todos los días. || I swam in the sea every day.",
                  "T || Este año he viajado a la playa. || This year I have traveled to the beach.",
                  "H || 🦜 || Guess the hidden animal! || Parrot",
                  "E || 🧒🐒🦜 ❤️🦜 || What animals have you seen? Which one did you like the most? || I have seen monkeys and parrots. I liked the parrot the most.",
                  "E || 🧒🏖️📸👩 || Who took pictures with you? || My mom took pictures with me.",
                  "E || 🧒🦐🍽️ 🏖️ || Where did you eat the seafood? || I ate the seafood at the beach."
                ],
                "mistakes": [
                  "M || I [have went] to the beach last year. || went* / have went / have go || I went to the beach last year.",
                  "M || What is the most interesting place you [has] visited? || have* / has / did || What is the most interesting place you have visited?"
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Life experiences — Present perfect & Simple past (1st person); Yes/No questions (Long answers); something new this year — Vocabulary: learn, bake, read, study, play",
                "lines": [
                  "Q || Have you learned something new this year? What was it? || Yes, I have learned to swim. I learned it in January.",
                  "Q || Have you ever baked a cake? When did you bake it? || Yes, I have baked a cake. I baked it for my mom's birthday. / No, I have never baked a cake.",
                  "Q || Have you read a new book this year? Which one? || Yes, I have read a new book. I read a book about dinosaurs.",
                  "Q || Have you studied a new subject this year? || Yes, I have studied science this year. / No, I haven't studied a new subject.",
                  "Q || Have you played a new sport this year? When did you start? || Yes, I have played basketball this year. I started in March.",
                  "Q || Have you learned a new song in English? Which one? || Yes, I have learned a new song. I learned it last week.",
                  "Q || Have you ever baked cookies with your grandma? || Yes, I have baked cookies with my grandma. / No, I have never baked cookies with her.",
                  "Q || Have you played a new video game this year? Did you like it? || Yes, I have played a new video game. I liked it a lot.",
                  "F || I have ____ to swim this year. || learned || learn / learning",
                  "F || I ____ a cake last month. || baked || have baked / bake",
                  "F || Have you ____ a new book this year? || read || reading / reads",
                  "T || He aprendido a nadar este año. || I have learned to swim this year.",
                  "T || Horneé un pastel el mes pasado. || I baked a cake last month.",
                  "T || He leído un libro nuevo. || I have read a new book.",
                  "T || Empecé en marzo. || I started in March.",
                  "T || Nunca he horneado galletas. || I have never baked cookies.",
                  "H || 🎂👩‍🍳 || Guess the action! || Bake a cake",
                  "E || 🧒🏊✅ 📅 || Have you learned to swim this year? When? (Use your imagination!) || Yes, I have learned to swim this year. I learned in January.",
                  "E || 🧒🍪👵 || Have you ever baked cookies with your grandma? || Yes, I have baked cookies with my grandma.",
                  "E || 🧒🏀 📅3️⃣ || When did you start playing basketball? || I started in March."
                ],
                "mistakes": [
                  "M || I [baked] a cake many times this year. || have baked* / baked / bake || I have baked a cake many times this year.",
                  "M || Have you [readed] a new book? || read* / readed / reading || Have you read a new book?"
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Life experiences — Present perfect & Simple past (1st person); Yes/No questions (Long answers); Wh-questions (Why...?) — Vocabulary Review: learn, bake, read, study, play",
                "lines": [
                  "Q || Have you ever learned to ride a bike? Why was it difficult or easy? || Yes, I have learned to ride a bike. It was difficult because I fell many times.",
                  "Q || Why have you studied English this year? || Because I want to travel and talk to people. / Because my parents want me to learn.",
                  "Q || Have you ever played an instrument? Why did you choose it? || Yes, I have played the guitar. I chose it because my dad plays it. / No, I have never played an instrument.",
                  "Q || Why did you read your favorite book? || Because my teacher recommended it. / Because I love adventure stories.",
                  "Q || Have you ever baked something that was a disaster? Why? || Yes, I have baked a disaster cake. It burned because I forgot it in the oven.",
                  "Q || Why have you played a lot of video games this year? (Or not!) || Because I got a new console. / I haven't played a lot because I had many classes.",
                  "Q || Have you learned a new word in English today? Why is it useful? || Yes, I have learned the word \"bake\". It is useful for talking about cooking.",
                  "Q || Why did you study hard for your last test? || Because I wanted a good grade.",
                  "F || Why ____ you studied English this year? || have || has / did",
                  "F || I have ____ the guitar. || played || play / plays",
                  "F || It was difficult because I ____ many times. || fell || have fallen / fall",
                  "T || ¿Por qué has estudiado inglés este año? || Why have you studied English this year?",
                  "T || Porque quiero viajar. || Because I want to travel.",
                  "T || He tocado la guitarra. || I have played the guitar.",
                  "T || El pastel se quemó. || The cake burned.",
                  "T || ¿Por qué leíste tu libro favorito? || Why did you read your favorite book?",
                  "H || 🎸🎹 || Guess the hidden word! || Instrument",
                  "E || 🧒🚲😣 || Why was it difficult to learn to ride a bike? (Use your imagination!) || Because I fell many times.",
                  "E || 🧒📚🇬🇧 ✈️ || Why have you studied English? || Because I want to travel.",
                  "E || 🎂🔥 || Why was the cake a disaster? || Because it burned."
                ],
                "mistakes": [
                  "M || Why [has] you studied English this year? || have* / has / did || Why have you studied English this year?",
                  "M || It was difficult because I [have fallen] many times. || fell* / have fallen / fall || It was difficult because I fell many times."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Life experiences — Present perfect (1st person); Wh-questions (What/Why/Who... with?); means of transportation review — Vocabulary Review: learn, bake, read, study, play",
                "lines": [
                  "Q || What have you learned in English class this month? || I have learned the present perfect. / I have learned new verbs.",
                  "Q || Who have you played with this week? || I have played with my cousins this week.",
                  "Q || Why have you read so many books this year? (Or so few!) || Because I love reading. / I haven't read many books because I prefer movies.",
                  "Q || What have you baked with your family? || I have baked cookies with my mom.",
                  "Q || Who have you studied with for your tests? || I have studied with my best friend.",
                  "Q || What means of transportation have you used this week? || I have used the bus and the car this week.",
                  "Q || Why have you learned English? || Because I want to talk to people from other countries.",
                  "Q || Who have you traveled by plane with? || I have traveled by plane with my parents. / I have never traveled by plane.",
                  "F || What ____ you learned this month? || have || has / did",
                  "F || I have ____ with my cousins. || played || play / playing",
                  "F || I have used ____ bus this week. || the || a / an",
                  "T || ¿Qué has aprendido este mes? || What have you learned this month?",
                  "T || He jugado con mis primos esta semana. || I have played with my cousins this week.",
                  "T || ¿Con quién has estudiado? || Who have you studied with?",
                  "T || He usado el bus y el carro. || I have used the bus and the car.",
                  "T || He horneado galletas con mi mamá. || I have baked cookies with my mom.",
                  "H || 🚌 || Guess the hidden means of transportation! || Bus",
                  "E || 🧒🚌🚗 || What means of transportation have you used this week? || I have used the bus and the car.",
                  "E || 🧒📚👦 || Who have you studied with? || I have studied with my friend.",
                  "E || 🧒🍪👩 || What have you baked and who with? || I have baked cookies with my mom."
                ],
                "mistakes": [
                  "M || What [has] you learned this month? || have* / has / did || What have you learned this month?",
                  "M || I have [play] with my cousins this week. || played* / play / playing || I have played with my cousins this week."
                ]
              }
            ]
          },
          {
            "week": 8,
            "days": [
              {
                "day": 1,
                "label": "Day 1",
                "focus": "Life experiences at school — Present perfect & Simple past (1st person); Yes/No questions (Long answers) — Vocabulary: present a project, build a project, solve math problems, speak in class, make new friends",
                "lines": [
                  "Q || Have you presented a project this year? What was it about? || Yes, I have presented a project. It was about animals. / No, I haven't presented a project this year.",
                  "Q || Have you built a project with your classmates? What did you build? || Yes, I have built a project. We built a volcano.",
                  "Q || Have you solved difficult math problems this year? || Yes, I have solved difficult math problems. / No, I haven't.",
                  "Q || Have you spoken in class in English? When did you do it? || Yes, I have spoken in English in class. I did it last week.",
                  "Q || Have you made new friends this year? Who? || Yes, I have made new friends. I made friends with a new student.",
                  "Q || Have you ever presented a project in English? || Yes, I have presented a project in English. / No, I have never presented a project in English.",
                  "Q || Have you built something with your hands this year? || Yes, I have built a bird house. / No, I haven't built anything.",
                  "Q || Have you spoken in front of the whole school? How did you feel? || Yes, I have. I felt nervous. / No, I have never spoken in front of the whole school.",
                  "F || I have ____ a project this year. || presented || present / presenting",
                  "F || We ____ a volcano last month. || built || have built / build",
                  "F || Have you ____ new friends this year? || made || make / maked",
                  "T || He presentado un proyecto este año. || I have presented a project this year.",
                  "T || Construimos un volcán el mes pasado. || We built a volcano last month.",
                  "T || He hablado en inglés en clase. || I have spoken in English in class.",
                  "T || He hecho nuevos amigos. || I have made new friends.",
                  "T || Nunca he hablado frente a toda la escuela. || I have never spoken in front of the whole school.",
                  "H || 🌋🧪 || Guess the action! || Build a project",
                  "H || ➗➕ || Guess the action! || Solve math problems",
                  "E || 🧒🗣️🇬🇧🏫 || Have you spoken in English in class? || Yes, I have spoken in English in class.",
                  "E || 🧒🤝🧒 ✅ || Have you made new friends this year? || Yes, I have made new friends this year."
                ],
                "mistakes": [
                  "M || I have [speak] in class in English. || spoken* / speak / spoke || I have spoken in class in English.",
                  "M || Have you [maked] new friends? || made* / maked / make || Have you made new friends?"
                ]
              },
              {
                "day": 2,
                "label": "Day 2",
                "focus": "Life experiences at the beach — Present perfect & Simple past (1st & 3rd person); Wh-questions (What/Where...?); giving directions review — Vocabulary: swim, sunbathe, collect seashells, surf, build a sandcastle",
                "lines": [
                  "Q || Have you ever been to the beach? What did you do there? || Yes, I have been to the beach. I swam and built a sandcastle. / No, I have never been to the beach.",
                  "Q || Where has your family sunbathed? || They have sunbathed in Santa Marta. / They have never sunbathed.",
                  "Q || What has your best friend collected at the beach? (Use your imagination!) || He has collected seashells.",
                  "Q || Has your dad ever surfed? Where did he surf? || Yes, he has surfed. He surfed in Cartagena. / No, he has never surfed.",
                  "Q || What is the biggest sandcastle you have ever built? || The biggest sandcastle I have ever built was as big as my dog.",
                  "Q || Where has your mom swum? || She has swum in the sea and in a pool.",
                  "Q || What has your cousin done at the beach that you have never done? (Use your imagination!) || She has surfed. I have never surfed.",
                  "Q || How do I get to the beach from the hotel? (Use your imagination!) || Go straight and turn right.",
                  "F || I ____ to the beach last December. || went || have gone / go",
                  "F || She has ____ in the sea. || swum || swam / swim",
                  "F || He has ____ seashells. || collected || collect / collecting",
                  "T || He estado en la playa. || I have been to the beach.",
                  "T || Nadé y construí un castillo de arena. || I swam and built a sandcastle.",
                  "T || Mi papá ha surfeado en Cartagena. || My dad has surfed in Cartagena.",
                  "T || Ella ha recogido conchas. || She has collected seashells.",
                  "T || Ve derecho y gira a la derecha. || Go straight and turn right.",
                  "H || 🐚 || Guess the hidden word! || Seashell",
                  "E || 👧🐚🐚🐚 || What has she collected at the beach? || She has collected seashells.",
                  "E || 👨🏄 🏖️ || Has he ever surfed? || Yes, he has surfed.",
                  "E || 👩☀️😎🏖️ || What has she done at the beach? || She has sunbathed."
                ],
                "mistakes": [
                  "M || I have [went] to the beach many times. || gone* / went / go || I have gone to the beach many times.",
                  "M || She has [swam] in the sea. || swum* / swam / swim || She has swum in the sea."
                ]
              },
              {
                "day": 3,
                "label": "Day 3",
                "focus": "Routine — Simple present (1st & 3rd person); Wh-questions (Where/When/Who... with?); there is / there are review — Vocabulary: play, do homework, draw, exercise, take a nap, watch TV",
                "lines": [
                  "Q || What do you like to do every day after school? || I like to play and watch TV. / I like to draw.",
                  "Q || Where do you do your homework after school? || I do my homework in my room.",
                  "Q || When does your best friend exercise? || He exercises after school. / She exercises on weekends.",
                  "Q || Who do you watch TV with after school? || I watch TV with my brother.",
                  "Q || When does your mom take a nap? || She takes a nap on Sundays. / She never takes a nap.",
                  "Q || Where does your dad exercise? || He exercises at the gym.",
                  "Q || Who does your sister draw with? || She draws with her friends.",
                  "Q || How many rooms are there in your house? || There are five rooms in my house.",
                  "F || I ____ my homework in my room. || do || does / doing",
                  "F || ____ does she exercise? After school. || When || Where / Who",
                  "F || There ____ five rooms in my house. || are || is / have",
                  "T || Me gusta jugar después de la escuela. || I like to play after school.",
                  "T || Hago mi tarea en mi cuarto. || I do my homework in my room.",
                  "T || ¿Cuándo hace ejercicio tu amigo? || When does your friend exercise?",
                  "T || Mi mamá toma una siesta los domingos. || My mom takes a nap on Sundays.",
                  "T || Hay cinco cuartos en mi casa. || There are five rooms in my house.",
                  "H || 🏋️‍♀️ || Guess the action! || Exercise",
                  "E || 🧒📺👦 || Who do you watch TV with? || I watch TV with my brother.",
                  "E || 👨🏋️🏢 || Where does he exercise? || He exercises at the gym.",
                  "E || 🧒📝🛏️ || Where do you do your homework? || I do my homework in my room."
                ],
                "mistakes": [
                  "M || She [exercise] after school. || exercises* / exercise / exercising || She exercises after school.",
                  "M || There [is] five rooms in my house. || are* / is / have || There are five rooms in my house."
                ]
              },
              {
                "day": 4,
                "label": "Day 4",
                "focus": "Monthly Evaluation — Cumulative review of previously introduced structures (comparatives, superlatives, present perfect, simple past, simple present, past progressive) — Vocabulary Review",
                "lines": [
                  "Q || Have you ever traveled by plane? || Yes, I have. / No, I haven't.",
                  "Q || Who is the oldest person in your family? || My grandpa is the oldest person in my family.",
                  "Q || What is the most delicious food you have ever eaten? || The most delicious food I have ever eaten is pizza.",
                  "Q || What did you do last Saturday afternoon? || I visited my grandma and played soccer.",
                  "Q || Which animal is more dangerous, a crocodile or a turtle? || A crocodile is more dangerous than a turtle.",
                  "Q || What has your mom done this week? || She has worked and cooked.",
                  "Q || What were you doing yesterday at 6:00 PM? || I was playing video games.",
                  "Q || Where do you do your homework? || I do my homework in the kitchen.",
                  "Q || What vegetables do you like and dislike? || I like carrots and I dislike broccoli.",
                  "Q || Has your best friend ever ridden a horse? || Yes, he has. / No, she hasn't.",
                  "F || I have ____ to the beach three times. || been || be / was",
                  "F || My grandpa is the ____ person in my family. || oldest || older / most old",
                  "F || A shark is ____ than a dolphin. || more dangerous || dangerouser / most dangerous",
                  "T || Nunca he viajado en barco. || I have never traveled by boat.",
                  "T || Mi abuelo es el mayor de la familia. || My grandpa is the oldest in the family.",
                  "T || Ella ha trabajado esta semana. || She has worked this week.",
                  "T || Me gustan las zanahorias. || I like carrots.",
                  "S || green triangle:3, yellow square:1 || How many triangles are there? || There are three triangles.",
                  "H || 🥦 || Guess the hidden vegetable! || Broccoli",
                  "E || 🥕 🥦 ❤️🥕 || Which vegetable do you like? || I like carrots."
                ],
                "mistakes": [
                  "M || I have [be] to the beach three times. || been* / be / was || I have been to the beach three times.",
                  "M || My dad is the [most tall] person in my family. || tallest* / most tall / taller || My dad is the tallest person in my family."
                ]
              },
              {
                "day": 5,
                "label": "Day 5",
                "focus": "Monthly Evaluation — Present perfect & Simple past review; cumulative review — Vocabulary Review",
                "lines": [
                  "Q || Have you ever eaten food from another country? What was it? || Yes, I have eaten Mexican food. It was tacos.",
                  "Q || When did you last visit your grandparents? || I visited them last Sunday.",
                  "Q || What is the best movie you have ever seen? || The best movie I have ever seen is Toy Story.",
                  "Q || Have you studied for a test this week? When? || Yes, I have studied for a test. I studied yesterday.",
                  "Q || What has your dad cooked this week? || He has cooked pasta this week.",
                  "Q || Where did you go on your last trip? || I went to Cartagena.",
                  "Q || Have you made a new friend this year? Who? || Yes, I have made a new friend. His name is Juan.",
                  "Q || What did your family do last Christmas? || We ate dinner together and opened presents.",
                  "Q || Has your mom ever been to another country? Which one? || Yes, she has been to Peru. / No, she has never been to another country.",
                  "Q || Tell me two things you have done this year and one thing you did yesterday. || I have learned to swim, I have traveled to the beach and yesterday I played soccer.",
                  "F || I ____ my grandparents last Sunday. || visited || have visited / visit",
                  "F || Have you ____ for the test? || studied || study / studyed",
                  "F || The best movie I have ever ____ is Toy Story. || seen || saw / see",
                  "T || He comido comida mexicana. || I have eaten Mexican food.",
                  "T || Visité a mis abuelos el domingo pasado. || I visited my grandparents last Sunday.",
                  "T || ¿Cuál es la mejor película que has visto? || What is the best movie you have seen?",
                  "T || Mi papá ha cocinado pasta esta semana. || My dad has cooked pasta this week.",
                  "T || Fui a Cartagena en mi último viaje. || I went to Cartagena on my last trip.",
                  "H || 🎬🍿 || Guess the hidden word! || Movie",
                  "E || 🧒✅🌮 || Have you ever eaten Mexican food? || Yes, I have eaten Mexican food."
                ],
                "mistakes": [
                  "M || I [have visited] my grandparents last Sunday. || visited* / have visited / visit || I visited my grandparents last Sunday.",
                  "M || The best movie I have ever [saw] is Toy Story. || seen* / saw / see || The best movie I have ever seen is Toy Story."
                ]
              }
            ]
          }
        ],
        "vocab": [
          {
            "week": 1,
            "category": "Comparatives: people, sea animals and dinosaurs",
            "words": [
              "Tall",
              "Short",
              "Young",
              "Old",
              "Thin",
              "Chubby",
              "Intelligent",
              "Dangerous",
              "Powerful",
              "Playful",
              "Colorful",
              "Aggressive",
              "Dolphin",
              "Shark",
              "Octopus",
              "Seal",
              "Starfish",
              "Whale"
            ]
          },
          {
            "week": 2,
            "category": "Superlatives: superheroes, animals, games and subjects",
            "words": [
              "Strong",
              "Fast",
              "Smart",
              "Slow",
              "Long",
              "Big",
              "Intelligent",
              "Dangerous",
              "Beautiful",
              "Curious",
              "Useful",
              "Difficult",
              "Exciting"
            ]
          },
          {
            "week": 3,
            "category": "Comparatives & superlatives: food, heroes, devices and places",
            "words": [
              "Spicy",
              "Sweet",
              "Salty",
              "Healthy",
              "Delicious",
              "Strong",
              "Fast",
              "Smart",
              "Dangerous",
              "Powerful",
              "Useful",
              "Cheap",
              "Expensive",
              "Cool",
              "Interactive",
              "Big",
              "Modern",
              "Beautiful",
              "Hot",
              "Busy",
              "Interesting"
            ]
          },
          {
            "week": 4,
            "category": "Comparatives & superlatives: house and toys",
            "words": [
              "Big",
              "Small",
              "Cozy",
              "Comfortable",
              "Peaceful",
              "Spacious",
              "Bright",
              "Brave",
              "Sticky",
              "Loud",
              "Weird"
            ]
          },
          {
            "week": 5,
            "category": "Life experiences (Present perfect, 1st person)",
            "words": [
              "Eat",
              "Drink",
              "See",
              "Go",
              "Sleep",
              "Be",
              "Visit",
              "Try new food",
              "Buy souvenirs",
              "Take pictures"
            ]
          },
          {
            "week": 6,
            "category": "Life experiences (Present perfect, 3rd person)",
            "words": [
              "Ride",
              "Dance",
              "Read",
              "Wash",
              "Play",
              "Eat",
              "Sleep",
              "Wear"
            ]
          },
          {
            "week": 7,
            "category": "Life experiences (Present perfect & Simple past)",
            "words": [
              "Travel",
              "Visit",
              "Stay",
              "See",
              "Take pictures",
              "Learn",
              "Bake",
              "Read",
              "Study",
              "Play"
            ]
          },
          {
            "week": 8,
            "category": "Experiences at school and at the beach",
            "words": [
              "Present a project",
              "Build a project",
              "Solve math problems",
              "Speak in class",
              "Make new friends",
              "Swim",
              "Sunbathe",
              "Collect seashells",
              "Surf",
              "Build a sandcastle",
              "Play",
              "Do homework",
              "Draw",
              "Exercise",
              "Take a nap",
              "Watch TV"
            ]
          }
        ]
      }
    ]
  }
];
