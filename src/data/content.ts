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
                    "Q || Say hello in the morning. || Good morning!",
                    "Q || Say hello in the afternoon. || Good afternoon!",
                    "Q || Say hello in the evening. || Good evening!",
                    "Q || Say goodbye before bed. || Good night!",
                    "Q || Complete: My name ____ Leo. || My name is Leo.",
                    "Q || Complete: Good ____! It is morning. || Good morning!",
                    "Q || Complete: Good ____! It is afternoon. || Good afternoon!",
                    "F || My name ____ Mia. || is || are / am",
                    "F || My ____ is Leo. || name || names / naming",
                    "T || Buenas noches. (saludo) || Good evening.",
                    "T || Buenas noches. (despedida) || Good night.",
                    "T || Me llamo Ana. || My name is Ana.",
                    "Q || Say a greeting and your name. || Good morning! My name is Mia.",
                    "Q || It is morning. Greet your teacher. || Good morning!",
                    "Q || It is bedtime. Say goodbye. || Good night!"
                  ],
                  "mistakes": [
                    "M || Good [mornin]. || mornin / mornign / morning* || Good morning.",
                    "M || Good [nigth]. || nitgh / night* / nigth || Good night."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "How are you today? Where are you from? — N/A; Where are you from? I am from ______________. — Vocabulary: How are you today? I am great!",
                  "lines": [
                    "Q || How are you today? || I am great!",
                    "Q || Where are you from? || I am from Colombia.",
                    "Q || Say your name and country. || My name is Mia. I am from Colombia.",
                    "Q || Ask a friend how they are. || How are you today?",
                    "Q || Ask a friend their country. || Where are you from?",
                    "Q || Complete: I am ____ Colombia. || I am from Colombia.",
                    "Q || Complete: How ____ you today? || How are you today?",
                    "Q || Complete: I ____ great! || I am great!",
                    "F || I ____ from Colombia. || am || is / are",
                    "F || I ____ nine years old. || am || is / are",
                    "E || 🇧🇷 || Say the country. || Brazil.",
                    "E || 🇪🇸 || Say the country. || Spain.",
                    "T || Soy de Colombia. || I am from Colombia.",
                    "T || ¡Estoy muy bien! || I am great!",
                    "H || 🇨🇴 || Name the country. || Colombia",
                    "H || 🇲🇽 || Name the country. || Mexico"
                  ],
                  "mistakes": [
                    "M || My name [are] Mia. || am / is* / are || My name is Mia.",
                    "M || She [are] happy. || is* / are / am || She is happy."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Numbers — N/A; How old are you? — Vocabulary: Numbers from 1-12",
                  "lines": [
                    "Q || How old are you? || I am nine years old.",
                    "Q || Ask a friend their age. || How old are you?",
                    "Q || Pretend you are eight. Say your age. || I am eight years old.",
                    "Q || Say your name and age. || My name is Mia. I am ten years old.",
                    "Q || Say this number: 1. || One.",
                    "Q || Say this number: 3. || Three.",
                    "Q || Say this number: 5. || Five.",
                    "Q || Say this number: 7. || Seven.",
                    "F || I ____ nine years old. || am || is / are",
                    "F || I ____ eight years old. || am || is / are",
                    "T || dos || two",
                    "T || cuatro || four",
                    "T || seis || six",
                    "T || ocho || eight",
                    "S || star:3 || How many objects are hidden? || Three.",
                    "S || circle:5 || How many objects are hidden? || Five."
                  ],
                  "mistakes": [
                    "M || My name [are] Mia. || is* / are / am || My name is Mia.",
                    "M || I [is] from Colombia. || is / are / am* || I am from Colombia."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Alphabet — N/A; Spelling Bee — Vocabulary: The alphabet",
                  "lines": [
                    "Q || Spell MIA. || M-I-A.",
                    "Q || Spell LEO. || L-E-O.",
                    "Q || Spell ANA. || A-N-A.",
                    "Q || Spell SAM. || S-A-M.",
                    "Q || Spell BEN. || B-E-N.",
                    "Q || Spell LIA. || L-I-A.",
                    "Q || Spell TOM. || T-O-M.",
                    "Q || Spell EVA. || E-V-A.",
                    "F || The letter after A is ____. || B || C / D",
                    "F || The letter after C is ____. || D || E / F",
                    "Q || What letter is it: F? || F",
                    "Q || What letter is it: H? || H",
                    "Q || Spell your first name. || M-I-A.",
                    "Q || What is the first letter of your name? || M.",
                    "H || 🅰️ || What letter is it? || A",
                    "H || 🅱️ || What letter is it? || B"
                  ],
                  "mistakes": [
                    "M || The letter after E is [G]. || G / H / F* || The letter after E is F.",
                    "M || The letter after G is [I]. || J / H* / I || The letter after G is H."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "Alphabet — N/A; Let's spell our names! — Vocabulary: The alphabet",
                  "lines": [
                    "Q || Spell LUNA. || L-U-N-A.",
                    "Q || Spell MAX. || M-A-X.",
                    "Q || Spell SOFIA. || S-O-F-I-A.",
                    "Q || Spell DAN. || D-A-N.",
                    "Q || Spell ROSE. || R-O-S-E.",
                    "Q || Spell ALEX. || A-L-E-X.",
                    "Q || Spell EMMA. || E-M-M-A.",
                    "Q || Spell LUIS. || L-U-I-S.",
                    "F || The letter after M is ____. || N || O / P",
                    "F || The letter after O is ____. || P || Q / R",
                    "Q || What letter is it: T? || T",
                    "Q || What letter is it: W? || W",
                    "Q || Spell your first name. || M-I-A.",
                    "Q || What is the first letter of your name? || M.",
                    "H || 🅰️ || What letter is it? || A",
                    "H || 🅱️ || What letter is it? || B"
                  ],
                  "mistakes": [
                    "M || The letter after Q is [S]. || T / R* / S || The letter after Q is R.",
                    "M || The letter after S is [U]. || T* / U / V || The letter after S is T."
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
                    "Q || Choose orange or yellow. What is your favorite color? || My favorite color is yellow.",
                    "Q || Choose black or orange. What is your favorite color? || My favorite color is orange.",
                    "E || 🟢 || What color is this? || It is green.",
                    "E || 🟡 || What color is this? || It is yellow.",
                    "E || 🟠 || What color is this? || It is orange.",
                    "E || ⚫ || What color is this? || It is black.",
                    "E || ⚪ || What color is this? || It is white.",
                    "T || rojo || red",
                    "F || It ____ red. || is || am / are",
                    "F || It ____ blue. || is || am / are",
                    "T || amarillo || yellow",
                    "Q || What is your favorite color? || My favorite color is red.",
                    "Q || Ask a friend their favorite color. || What is your favorite color?",
                    "Q || Complete with a color: My favorite color is ____. || My favorite color is green.",
                    "H || 🔴 || What color is it? || Red",
                    "H || 🔵 || What color is it? || Blue"
                  ],
                  "mistakes": [
                    "M || It [am] green. || am / are / is* || It is green.",
                    "M || It [am] yellow. || are / is* / am || It is yellow."
                  ]
                },
                {
                  "day": 2,
                  "label": "Day 2",
                  "focus": "Food — N/A; What is your favorite food? — Vocabulary: Food Ice cream, Hamburger, Hot dog, Chicken, French fries",
                  "lines": [
                    "Q || Choose a hamburger or ice cream. What is your favorite food? || My favorite food is ice cream.",
                    "Q || Choose a hot dog or a hamburger. What is your favorite food? || My favorite food is hamburger.",
                    "E || 🌭 || Name this food. || A hot dog.",
                    "E || 🍗 || Name this food. || Chicken.",
                    "E || 🍟 || Name this food. || French fries.",
                    "T || helado || ice cream",
                    "T || una hamburguesa || a hamburger",
                    "T || un perro caliente || a hot dog",
                    "F || My favorite food ____ hot dog. || is || am / are",
                    "F || My favorite food ____ chicken. || is || am / are",
                    "Q || Ask a friend their favorite food. || What is your favorite food?",
                    "Q || Complete with a food: My favorite food is ____. || My favorite food is hot dog.",
                    "Q || Choose French fries or chicken. What is your favorite food? || My favorite food is chicken.",
                    "Q || Choose ice cream or French fries. What is your favorite food? || My favorite food is French fries.",
                    "H || 🍦 || Name the food. || Ice cream",
                    "H || 🍔 || Name the food. || Hamburger"
                  ],
                  "mistakes": [
                    "M || My favorite food [am] French fries. || are / is* / am || My favorite food is French fries.",
                    "M || My favorite food [am] hamburger. || is* / am / are || My favorite food is hamburger."
                  ]
                },
                {
                  "day": 3,
                  "label": "Day 3",
                  "focus": "Fruits — N/A; What is your favorite fruit? — Vocabulary: Fruits Banana, Apple, Watermelon, Pineapple, Orange",
                  "lines": [
                    "Q || Choose an apple or a banana. What is your favorite fruit? || My favorite fruit is banana.",
                    "Q || Choose a watermelon or an apple. What is your favorite fruit? || My favorite fruit is apple.",
                    "E || 🍉 || Name this fruit. || A watermelon.",
                    "E || 🍍 || Name this fruit. || A pineapple.",
                    "E || 🍊 || Name this fruit. || An orange.",
                    "T || un banano || a banana",
                    "T || una manzana || an apple",
                    "T || una sandía || a watermelon",
                    "F || My favorite fruit ____ banana. || is || am / are",
                    "F || My favorite fruit ____ watermelon. || is || am / are",
                    "Q || Ask a friend their favorite fruit. || What is your favorite fruit?",
                    "Q || Complete with a fruit: My favorite fruit is ____. || My favorite fruit is watermelon.",
                    "Q || Choose an orange or a pineapple. What is your favorite fruit? || My favorite fruit is pineapple.",
                    "Q || Choose a banana or an orange. What is your favorite fruit? || My favorite fruit is orange.",
                    "H || 🍌 || Name the fruit. || Banana",
                    "H || 🍎 || Name the fruit. || Apple"
                  ],
                  "mistakes": [
                    "M || My favorite fruit [am] pineapple. || is* / am / are || My favorite fruit is pineapple.",
                    "M || My favorite fruit [am] orange. || am / are / is* || My favorite fruit is orange."
                  ]
                },
                {
                  "day": 4,
                  "label": "Day 4",
                  "focus": "Review — N/A; Review of previously introduced vocabulary and sentence patterns — Vocabulary: green; a hot dog; a watermelon; French fries; orange; black; ice cream; a banana; blue; chicken; a pineapple; red",
                  "lines": [
                    "E || 🍌 || Name this fruit. || A banana.",
                    "Q || What is your favorite color? || My favorite color is red.",
                    "E || 🍉 || Name this fruit. || A watermelon.",
                    "Q || Complete with a color: My favorite color is ____. || My favorite color is green.",
                    "Q || Choose ice cream or French fries. What is your favorite food? || My favorite food is French fries.",
                    "Q || Choose a banana or an orange. What is your favorite fruit? || My favorite fruit is orange.",
                    "E || ⚫ || What color is this? || It is black.",
                    "T || helado || ice cream",
                    "F || My favorite fruit ____ orange. || is || am / are",
                    "F || It ____ black. || is || am / are",
                    "T || pollo || chicken",
                    "T || una piña || a pineapple",
                    "E || 🔴 || What color is this? || It is red.",
                    "E || 🍦 || Name this food. || Ice cream.",
                    "H || 🟢 || What color is it? || Green",
                    "H || 🌭 || Name the food. || Hot dog"
                  ],
                  "mistakes": [
                    "M || It [am] red. || am / are / is* || It is red.",
                    "M || My favorite color [am] red. || are / is* / am || My favorite color is red."
                  ]
                },
                {
                  "day": 5,
                  "label": "Day 5",
                  "focus": "SUPER STAR EXAM — N/A; What is your favorite color?; What is your favorite food?; What is your favorite fruit?; Review of previously introduced vocabulary and sentence patterns — Vocabulary: blue; chicken; pineapple; orange; French fries; an orange; hamburger; apple; red; a hot dog; a watermelon; yellow; green",
                  "lines": [
                    "Q || Ask a friend their favorite color. || What is your favorite color?",
                    "Q || Choose French fries or chicken. What is your favorite food? || My favorite food is chicken.",
                    "Q || Choose an orange or a pineapple. What is your favorite fruit? || My favorite fruit is pineapple.",
                    "Q || Ask a friend their favorite fruit. || What is your favorite fruit?",
                    "E || 🟢 || What color is this? || It is green.",
                    "E || 🍊 || Name this fruit. || An orange.",
                    "Q || Choose black or orange. What is your favorite color? || My favorite color is orange.",
                    "Q || Choose a hot dog or a hamburger. What is your favorite food? || My favorite food is hamburger.",
                    "F || My favorite food ____ chicken. || is || am / are",
                    "F || My favorite fruit ____ pineapple. || is || am / are",
                    "T || un perro caliente || a hot dog",
                    "T || una sandía || a watermelon",
                    "T || amarillo || yellow",
                    "Q || Ask a friend their favorite food. || What is your favorite food?",
                    "H || 🟠 || What color is it? || Orange",
                    "H || 🍟 || Name the food. || French fries"
                  ],
                  "mistakes": [
                    "M || It [am] orange. || are / is* / am || It is orange.",
                    "M || My favorite color [am] orange. || is* / am / are || My favorite color is orange."
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
                    "Q || Use \"she\" and \"girl\" in a sentence. || She is a girl.",
                    "Q || Use \"he\" and \"boy\" in a sentence. || He is a boy.",
                    "H || 👨 || Name the person. || Man",
                    "H || 👩 || Name the person. || Woman"
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
                    "Q || Introduce an imaginary mom. || She is my mom.",
                    "T || Ella es mi mamá. || She is my mom.",
                    "Q || Complete: She is ____ mom. || She is my mom.",
                    "Q || Make a sentence with \"my mom\". || She is my mom.",
                    "Q || Introduce an imaginary dad. || He is my dad.",
                    "T || Él es mi papá. || He is my dad.",
                    "Q || Complete: He is ____ dad. || He is my dad.",
                    "Q || Make a sentence with \"my dad\". || He is my dad.",
                    "F || She ____ my mom. || is || am / are",
                    "F || He ____ my dad. || is || am / are",
                    "Q || Complete: She is ____ sister. || She is my sister.",
                    "Q || Make a sentence with \"my sister\". || She is my sister.",
                    "Q || Introduce an imaginary brother. || He is my brother.",
                    "T || Él es mi hermano. || He is my brother.",
                    "H || 👩 || Name the person. || Woman",
                    "H || 👦 || Name the person. || Boy"
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
                    "Q || Describe a story character with \"pretty\". || She is pretty.",
                    "T || Ella es bonita. || She is pretty.",
                    "Q || Describe a story character with \"handsome\". || He is handsome.",
                    "T || Él es guapo. || He is handsome.",
                    "Q || Describe a story character with \"intelligent\". || She is intelligent.",
                    "T || Ella es inteligente. || She is intelligent.",
                    "Q || Describe a story character with \"happy\". || He is happy.",
                    "T || Él está feliz. || He is happy.",
                    "F || She ____ intelligent. || is || am / are",
                    "F || He ____ happy. || is || am / are",
                    "Q || Spell the word \"happy\". || H-A-P-P-Y.",
                    "Q || Spell the word \"angry\". || A-N-G-R-Y.",
                    "Q || Say two things about an imaginary mom. || She is pretty and intelligent.",
                    "Q || Say two things about an imaginary dad. || He is handsome and happy.",
                    "H || 😊 || Name the adjective. || Happy",
                    "H || 😠 || Name the adjective. || Angry"
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
                    "Q || Describe a story character with \"pretty\". || She is pretty.",
                    "Q || Complete: She is ____ mom. || She is my mom.",
                    "Q || Describe a story character with \"handsome\". || He is handsome.",
                    "Q || Use \"he\" and \"boy\" in a sentence. || He is a boy.",
                    "T || Él es mi hermano. || He is my brother.",
                    "Q || Say two things about an imaginary dad. || He is handsome and happy.",
                    "Q || Complete: She ____ a girl. || She is a girl.",
                    "T || Él es mi papá. || He is my dad.",
                    "F || He ____ a boy. || is || am / are",
                    "F || He ____ my brother. || is || am / are",
                    "Q || Introduce an imaginary sister. || She is my sister.",
                    "Q || Describe a story character with \"angry\". || She is angry.",
                    "Q || Spell the word \"man\". || M-A-N.",
                    "Q || Introduce an imaginary mom. || She is my mom.",
                    "H || 👩 || Name the person. || Woman",
                    "H || 👨 || Name the person. || Man"
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
                    "Q || Use \"she\" and \"girl\" in a sentence. || She is a girl.",
                    "Q || Introduce an imaginary brother. || He is my brother.",
                    "Q || Say two things about an imaginary mom. || She is pretty and intelligent.",
                    "E || 👩 || What is she? || She is a woman.",
                    "Q || Introduce an imaginary dad. || He is my dad.",
                    "Q || Describe a story character with \"intelligent\". || She is intelligent.",
                    "Q || Complete: ____ is a man. || He is a man.",
                    "Q || Make a sentence with \"my brother\". || He is my brother.",
                    "F || She ____ intelligent. || is || am / are",
                    "F || He ____ a man. || is || am / are",
                    "Q || Make a sentence with \"my dad\". || He is my dad.",
                    "T || Él está feliz. || He is happy.",
                    "T || Ella es una niña. || She is a girl.",
                    "Q || Complete: She is ____ sister. || She is my sister.",
                    "H || 👧 || Name the person. || Girl",
                    "H || 😊 || Name the adjective. || Happy"
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
                    "H || 🥗 || Name the food. || Salad",
                    "H || 🍲 || Name the food. || Soup"
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
                    "H || 💧 || Name the drink. || Water",
                    "H || 🥛 || Name the drink. || Milk"
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
                    "E || 🇪🇸 || Say the country. || Spain.",
                    "Q || Say your name and country. || My name is Mia. I am from Colombia.",
                    "T || cuatro || four",
                    "Q || Pretend you are eight. Say your age. || I am eight years old.",
                    "H || 🍎 || Name the fruit. || Apple",
                    "H || 😠 || Name the adjective. || Angry"
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
                    "H || 🔴 || What color is it? || Red",
                    "H || 👨 || Name the person. || Man"
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
                    "Q || Make a sentence with \"my sister\". || She is my sister.",
                    "Q || What is the last letter of your name? || A.",
                    "Q || What is your grandpa's favorite drink? || My grandpa's favorite drink is water.",
                    "F || I ____ from Colombia. || am || is / are",
                    "F || I ____ great. || am || is / are",
                    "T || ocho || eight",
                    "Q || Say this number: 1. || One.",
                    "Q || What is the first letter of your name? || M.",
                    "Q || Spell BEN. || B-E-N.",
                    "H || 🍔 || Name the food. || Hamburger",
                    "H || ☕ || Name the drink. || Coffee"
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
                    "Q || What do you do on school days? || I wake up.",
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
                    "Q || What do you do on school days? || I wake up.",
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
                    "Q || What do you do on school days? || I wake up.",
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
                    "H || ✍️ || Name the action. || Write",
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
                    "H || ✍️ || Name the action. || Write",
                    "H || 🏃 || Name the action. || Run"
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
                    "H || ✍️ || Name the action. || Write",
                    "H || 🏃 || Name the action. || Run"
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
                    "H || ✍️ || Name the action. || Write",
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
                    "H || 🏃 || Name the action. || Run",
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
                    "Q || What does Emma do during art time? || She paints a picture.",
                    "Q || What does Leo do at a party? || He dances.",
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
                    "H || 🎨 || Name the action. || Paint",
                    "H || 💃 || Name the action. || Dance"
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
                    "Q || Does Emma paint a picture? || Yes, she does. / No, she doesn't.",
                    "Q || Does Leo dance? || Yes, he does. / No, he doesn't.",
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
                    "H || 🎨 || Name the action. || Paint",
                    "H || 💃 || Name the action. || Dance"
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
                    "Q || What does Leo do at a party? || He dances.",
                    "Q || What does your teacher read before bed? || He reads a book.",
                    "Q || What does your mom do on Saturdays? || She cleans the room.",
                    "Q || What does your brother do in the afternoon? || He sings.",
                    "Q || What does your dad do during art time? || He paints a picture.",
                    "Q || Where does your sister dance? || She dances in the living room.",
                    "Q || When does your best friend read a book? || She reads a book before bed.",
                    "Q || What does Emma do on Saturday mornings? || She cleans the room.",
                    "F || She ____ the room. || cleans || clean / cleaning",
                    "F || He ____. || sings || sing / singing",
                    "T || Ella canta. || She sings.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "T || Él baila. || He dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🎨 || Name the action. || Paint",
                    "H || 💃 || Name the action. || Dance"
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
                    "Q || Where does your brother sing? || He sings at home.",
                    "Q || Where does your dad paint a picture? || He paints a picture in the art room.",
                    "Q || What does your sister do at a party? || She dances.",
                    "Q || Where does your best friend read a book? || She reads a book in the library.",
                    "Q || When does Emma clean the room? || She cleans the room on Saturday mornings.",
                    "Q || What does Leo do after school? || He sings.",
                    "F || He ____ a picture in the art room. || paints || paint / painting",
                    "F || She ____. || dances || dance / dancing",
                    "T || Él canta. || He sings.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "T || Ella baila. || She dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🎨 || Name the action. || Paint",
                    "H || 💃 || Name the action. || Dance"
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
                    "Q || Where does Emma clean the room? || She cleans the room at home.",
                    "Q || When does Leo sing? || He sings after school.",
                    "Q || What does your teacher do on Sundays? || He paints a picture.",
                    "F || She ____ a book. || reads || read / reading",
                    "F || He ____ after school. || sings || sing / singing",
                    "T || Él canta. || He sings.",
                    "T || Ella pinta un cuadro. || She paints a picture.",
                    "T || Ella baila. || She dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🎨 || Name the action. || Paint",
                    "H || 💃 || Name the action. || Dance"
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
                    "Q || What do you do on school days? || I wake up.",
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
                    "Q || What time does Leo paint a picture? || He paints a picture at seven o'clock.",
                    "Q || What time does your teacher dance? || He dances at four o'clock.",
                    "Q || What time does your mom read a book? || She reads a book at six thirty.",
                    "Q || What time does your brother clean the room? || He cleans the room at eight o'clock.",
                    "Q || What does your dad do in the afternoon? || He sings.",
                    "Q || Where does your sister paint a picture? || She paints a picture in the art room.",
                    "Q || When does your best friend dance? || She dances on weekends.",
                    "Q || What does Emma do before bed? || She reads a book.",
                    "F || He ____ at four o'clock. || dances || dance / dancing",
                    "F || She ____ a book at six thirty. || reads || read / reading",
                    "T || Ella canta. || She sings.",
                    "T || Él pinta un cuadro. || He paints a picture.",
                    "T || Él baila. || He dances.",
                    "T || Ella lee un libro. || She reads a book.",
                    "H || 🎨 || Name the action. || Paint",
                    "H || 💃 || Name the action. || Dance"
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
                    "Q || What do you do on school days? || I wake up.",
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
                    "Q || Describe a story character with \"angry\". || She is angry.",
                    "H || 👧 || Name the person. || Girl",
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
                    "Q || Does Leo dance? || Yes, he does. / No, he doesn't.",
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
                    "Q || What does Leo do on school days? || He wakes up.",
                    "Q || What does your teacher cook for his family? || He cooks dinner.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "Q || What does your brother do at seven o'clock? || He wakes up.",
                    "Q || What does your dad do at six o'clock? || He cooks dinner.",
                    "Q || What does your mom do in the morning? || She works.",
                    "Q || What does your best friend do at home? || She wakes up.",
                    "Q || What does Emma do in the kitchen? || She cooks dinner.",
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
                    "Q || What does Emma do in the morning? || She exercises.",
                    "Q || What does Leo do at seven o'clock? || He wakes up.",
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
                    "Q || What does your brother do after work? || He exercises.",
                    "Q || What does your dad do in the evening? || He watches TV.",
                    "Q || What does your sister do on school days? || She wakes up.",
                    "Q || What does your best friend cook for her family? || She cooks dinner.",
                    "Q || Where does your mom work? || She works in an office.",
                    "Q || When does Leo exercise? || He exercises in the morning.",
                    "Q || What does your teacher do after dinner? || He watches TV.",
                    "F || He ____ TV. || watches || watch / watching",
                    "F || She ____ up. || wakes || wake / waking",
                    "T || Él se despierta. || He wakes up.",
                    "T || Ella cocina la cena. || She cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermano trabaja. || My brother works.",
                    "H || 🏋️ || Name the action. || Exercise"
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
                    "Q || Where does Leo exercise? || He exercises in the park.",
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
                    "Q || What does your sister do on school days? || She wakes up.",
                    "Q || Who does your best friend exercise with? || She exercises with her brother.",
                    "Q || What does your dad do at six o'clock? || He cooks dinner.",
                    "Q || Does your sister cook dinner every day? || Yes, she cooks dinner. / No, she doesn't cook dinner.",
                    "Q || What does your best friend cook for her family? || She cooks dinner.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "F || She ____ dinner. || cooks || cook / cooking",
                    "F || She ____. || works || work / working",
                    "Q || When does Leo exercise? || He exercises in the morning.",
                    "Q || When does your teacher watch TV? || He watches TV after dinner.",
                    "Q || What does Emma do in the kitchen? || She cooks dinner.",
                    "Q || What does Leo do at seven o'clock? || He wakes up.",
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
                    "Q || What does your teacher do on school days? || He wakes up.",
                    "Q || What does your mom do on weekdays? || She works.",
                    "Q || What does your brother do after work? || He exercises.",
                    "Q || What does your dad do at seven o'clock? || He wakes up.",
                    "Q || What does your dad do in the morning? || He works.",
                    "Q || What does your best friend do in the morning? || She exercises.",
                    "Q || What does Emma do at home? || She wakes up.",
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
                    "Q || Does Emma cook dinner on weekends? || Yes, she does. / No, she doesn't.",
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
                    "Q || What does your best friend do on school days? || She wakes up.",
                    "Q || What does Emma cook for her family? || She cooks dinner.",
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
                    "H || 🏋️ || Name the action. || Exercise"
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
                    "Q || When does Emma cook dinner? || She cooks dinner at six o'clock.",
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
                    "H || 🏋️ || Name the action. || Exercise",
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
                    "Q || What does your best friend do on school days? || She wakes up.",
                    "Q || When does Emma cook dinner? || She cooks dinner at six o'clock.",
                    "Q || What does your dad do in the morning? || He works.",
                    "Q || Does your best friend wake up? || Yes, she does. / No, she doesn't.",
                    "Q || What does Emma cook for her family? || She cooks dinner.",
                    "Q || What does your dad do on weekdays? || He works.",
                    "F || She ____ dinner. || cooks || cook / cooking",
                    "F || He ____. || exercises || exercise / exercising",
                    "Q || When does your teacher exercise? || He exercises in the morning.",
                    "Q || When does your mom watch TV? || She watches TV after dinner.",
                    "Q || What does your mom do in an office? || She works.",
                    "Q || What does your teacher do in the morning? || He exercises.",
                    "H || 🏋️ || Name the action. || Exercise",
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
                    "Q || What does Emma do after exercise? || She drinks water.",
                    "Q || What does Leo do in the park? || He exercises.",
                    "Q || What does your teacher do in the park? || He plays soccer.",
                    "F || She ____. || exercises || exercise / exercising",
                    "F || He ____ soccer. || plays || play / playing",
                    "T || Él hace ejercicio. || He exercises.",
                    "T || Ella juega fútbol. || She plays soccer.",
                    "T || Ella bebe agua. || She drinks water.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermana juega fútbol. || My sister plays soccer.",
                    "H || 🏋️ || Name the action. || Exercise"
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
                    "Q || Does Emma play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
                    "Q || Does Leo drink water on weekends? || Yes, he drinks water. / No, he doesn't drink water.",
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
                    "Q || What does Emma do after work? || She exercises.",
                    "Q || What does Leo do at the park? || He plays soccer.",
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
                    "Q || Who does Emma play soccer with? || She plays soccer with her cousin.",
                    "Q || Who does Leo drink water with? || He drinks water with his brother.",
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
                    "Q || Who does Leo drink water with? || He drinks water with his brother.",
                    "Q || What does your best friend do on Saturdays? || She plays soccer.",
                    "Q || Does Emma play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
                    "Q || What does Leo do at the park? || He plays soccer.",
                    "Q || What does your teacher drink at lunch? || He drinks water.",
                    "F || He ____ soccer. || plays || play / playing",
                    "F || He ____ a race. || wins || win / winning",
                    "Q || When does your mom win a race? || She wins a race on sports day.",
                    "Q || Complete: He ____. (drink water) || He drinks water.",
                    "Q || What does your teacher do in the park? || He plays soccer.",
                    "Q || What does your mom do in the morning? || She exercises.",
                    "T || Mi hermana bebe agua. || My sister drinks water.",
                    "H || 🏋️ || Name the action. || Exercise"
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
                    "Q || What do you do on school days? || I wake up.",
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
                    "Q || What time does Emma watch TV? || She watches TV at eight o'clock.",
                    "Q || What does Leo do on school days? || He wakes up.",
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
                    "Q || What does Emma do on vacation? || She travels.",
                    "Q || What does Leo do after work? || He exercises.",
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
                    "Q || What does Leo do on school days? || He wakes up.",
                    "T || Ella se despierta. || She wakes up.",
                    "Q || What does your teacher do on school days? || He wakes up.",
                    "T || Él se despierta. || He wakes up.",
                    "Q || What does your mom do after work? || She exercises.",
                    "T || Él hace ejercicio. || He exercises.",
                    "Q || What do you do on school days? || I wake up.",
                    "T || Yo me despierto. || I wake up.",
                    "F || He ____. || exercises || exercise / exercising",
                    "F || I ____ up. || wake || wakes / waking",
                    "Q || Say this number: 3. || Three.",
                    "T || Él limpia su cuarto los domingos. || He cleans his room on Sundays.",
                    "Q || Spell the word \"white\". || W-H-I-T-E.",
                    "Q || Use \"I\" and \"brush my teeth\". || I brush my teeth.",
                    "H || 🎨 || Name the action. || Paint",
                    "H || ⚪ || What color is it? || White"
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
                    "Q || Use \"I\" and \"take a shower\". || I take a shower.",
                    "T || un perro caliente || a hot dog",
                    "Q || Use \"I\" and \"wake up\". || I wake up.",
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
                    "H || 🥭 || Name the fruit. || Mango",
                    "H || 🥕 || Name the vegetable. || Carrot"
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
                    "H || 🥔 || Name the vegetable. || Potato",
                    "H || 🧅 || Name the vegetable. || Onion"
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
                    "H || 🥕 || Name the vegetable. || Carrot",
                    "H || 🍇 || Name the fruit. || Grapes"
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
                    "H || 🧅 || Name the vegetable. || Onion",
                    "H || 🍓 || Name the fruit. || Strawberry"
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
                    "H || 🥕 || Name the vegetable. || Carrot",
                    "H || 🧅 || Name the vegetable. || Onion"
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
                    "Q || What does Emma do on a hot day? || She swims.",
                    "Q || What does Leo do on Saturdays? || He plays games.",
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
                    "H || 🏊 || Name the action. || Swim"
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
                    "Q || Does Emma swim? || Yes, she swims. / No, she doesn't swim.",
                    "Q || Does Leo ride a bike? || Yes, he rides a bike. / No, he doesn't ride a bike.",
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
                    "H || 🏊 || Name the action. || Swim"
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
                    "Q || What does Emma do on a hot day? || She swims.",
                    "Q || What does Leo do on a sunny morning? || He rides a bike.",
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
                    "H || 🏊 || Name the action. || Swim"
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
                    "Q || When does Leo ride a bike? || He rides a bike after school.",
                    "Q || When does your teacher listen to music? || He listens to music after school.",
                    "Q || When does your mom watch movies? || She watches movies on Friday nights.",
                    "Q || When does your brother play games? || He plays games on Saturdays.",
                    "Q || What does your dad read before bed? || He reads a book.",
                    "Q || Where does your sister swim? || She swims in the pool.",
                    "Q || When does your best friend ride a bike? || She rides a bike after school.",
                    "Q || What does Emma do after school? || She listens to music.",
                    "F || He ____ games on Saturdays. || plays || play / playing",
                    "F || He ____ a book. || reads || read / reading",
                    "T || Ella juega. || She plays games.",
                    "T || Él lee un libro. || He reads a book.",
                    "T || Él nada. || He swims.",
                    "T || Ella monta bicicleta. || She rides a bike.",
                    "T || Mi hermano lee un libro. || My brother reads a book.",
                    "H || 🏊 || Name the action. || Swim"
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
                    "H || 🏊 || Name the action. || Swim",
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
                    "Q || What does the cat do in the garden? || It climbs a tree.",
                    "Q || What does your dog do on a sunny afternoon? || It runs.",
                    "Q || What does the rabbit do during a game? || It jumps.",
                    "Q || What does the cat do in the afternoon? || It climbs a tree.",
                    "Q || What does your dog do after school? || It runs.",
                    "Q || What does the rabbit do in the morning? || It jumps.",
                    "Q || What does the cat do on Sundays? || It climbs a tree.",
                    "Q || What does your dog do in the park? || It runs.",
                    "F || It ____ a tree. || climbs || climb / climbing",
                    "F || It ____. || runs || run / running",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El gato trepa un árbol todos los días. || The cat climbs a tree every day.",
                    "T || Mi gato trepa un árbol. || My cat climbs a tree.",
                    "H || 🏃 || Name the action. || Run"
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
                    "Q || Does the rabbit jump? || Yes, it jumps. / No, it doesn't jump.",
                    "Q || Does your dog walk? || Yes, it walks. / No, it doesn't walk.",
                    "Q || Does the cat climb a tree? || Yes, it climbs a tree. / No, it doesn't climb a tree.",
                    "Q || Does your dog run every day? || Yes, it runs. / No, it doesn't run.",
                    "Q || Does the rabbit jump on weekends? || Yes, it jumps. / No, it doesn't jump.",
                    "Q || What does your dog do after lunch? || It walks.",
                    "Q || What does the cat do in the afternoon? || It climbs a tree.",
                    "F || It ____ a tree. || climbs || climb / climbing",
                    "F || It ____. || jumps || jump / jumping",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "H || 🏃 || Name the action. || Run",
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
                    "Q || What does the rabbit do during a game? || It jumps.",
                    "Q || What does your dog do on a quiet afternoon? || It walks.",
                    "Q || What does the parrot do at home? || It talks.",
                    "Q || What does the cat do in the garden? || It climbs a tree.",
                    "Q || What does your dog do on a sunny afternoon? || It runs.",
                    "Q || Where does the rabbit jump? || It jumps in the park.",
                    "Q || When does your dog walk? || It walks after lunch.",
                    "Q || What does the parrot do after school? || It talks.",
                    "F || It ____. || talks || talk / talking",
                    "F || It ____ a tree. || climbs || climb / climbing",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "T || Mi perro salta. || My dog jumps.",
                    "H || 🚶 || Name the action. || Walk"
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
                    "Q || When does the parrot talk? || It talks after school.",
                    "Q || When does the cat climb a tree? || It climbs a tree in the afternoon.",
                    "Q || When does your dog run? || It runs after school.",
                    "Q || What does the rabbit do during a game? || It jumps.",
                    "Q || Where does your dog walk? || It walks in the park.",
                    "Q || When does the parrot talk on Sundays? || It talks after school.",
                    "Q || What does the cat do in the afternoon? || It climbs a tree.",
                    "F || It ____ after school. || runs || run / running",
                    "F || It ____. || jumps || jump / jumping",
                    "T || El gato trepa un árbol. || The cat climbs a tree.",
                    "T || El perro corre. || The dog runs.",
                    "T || El perro salta. || The dog jumps.",
                    "T || El perro camina. || The dog walks.",
                    "H || 🚶 || Name the action. || Walk",
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
                    "Q || Who does the parrot talk with? || It talks with its family.",
                    "Q || Who does the cat climb a tree with? || It climbs a tree with its friends.",
                    "Q || Who does your dog run with? || It runs with its cousin.",
                    "Q || Who does the rabbit jump with? || It jumps with its brother.",
                    "Q || What does your dog do on a quiet afternoon? || It walks.",
                    "Q || Where does the parrot talk? || It talks at home.",
                    "Q || When does the cat climb a tree? || It climbs a tree in the afternoon.",
                    "Q || What does your dog do after school? || It runs.",
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
                    "Q || Make a sentence: ball / in / box. || The ball is in the box.",
                    "Q || Make a sentence: book / on / table. || The book is on the table.",
                    "Q || Make a sentence: cat / under / chair. || The cat is under the chair.",
                    "Q || Make a sentence: pencil / in / bag. || The pencil is in the bag.",
                    "Q || Make a sentence: toy car / on / bed. || The toy car is on the bed.",
                    "Q || Make a sentence: cup / under / table. || The cup is under the table.",
                    "Q || Make a sentence: dog / in / box. || The dog is in the box.",
                    "Q || Make a sentence: bag / on / chair. || The bag is on the chair.",
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
                    "Q || Scene: The book is in the table. Is the book in the table? || Yes, the book is in the table.",
                    "Q || Scene: The cat is on the chair. Is the cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
                    "Q || Scene: The pencil is under the bag. Is the pencil under the bag? || Yes, the pencil is under the bag.",
                    "Q || Scene: The toy car is next to the bed. Is the toy car in the bed? || No, the toy car isn't in the bed. The toy car is next to the bed.",
                    "Q || Scene: The cup is in the table. Is the cup in the table? || Yes, the cup is in the table.",
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
                    "Q || Scene: The cat is in the chair. Where is the cat? || The cat is in the chair.",
                    "Q || Scene: The pencil is on the bag. Where is the pencil? || The pencil is on the bag.",
                    "Q || Scene: The toy car is under the bed. Where is the toy car? || The toy car is under the bed.",
                    "Q || Scene: The cup is next to the table. Where is the cup? || The cup is next to the table.",
                    "Q || Scene: The dog is behind the box. Where is the dog? || The dog is behind the box.",
                    "Q || Scene: The bag is in the chair. Where is the bag? || The bag is in the chair.",
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
                    "Q || Make a sentence: toy car / on / bed. || The toy car is on the bed.",
                    "Q || Scene: The cup is in the table. Is the cup in the table? || Yes, the cup is in the table.",
                    "Q || Scene: The dog is behind the box. Where is the dog? || The dog is behind the box.",
                    "Q || Scene: The bag is behind the chair. What is behind the chair? || The bag is behind the chair.",
                    "F || The toy car ____ on the bed. || is || am / are",
                    "F || The dog ____ behind the box. || is || am / are",
                    "Q || Say a sentence about a book using \"behind\". || The book is behind the box.",
                    "Q || Scene: The book is on the table. What is on the table? || The book is on the table.",
                    "Q || Make a sentence: bag / on / chair. || The bag is on the chair.",
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
                    "H || 👀 || Name the body part. || Eyes",
                    "H || 👂 || Name the body part. || Ear"
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
                    "H || 👀 || Name the body part. || Eyes",
                    "H || 👂 || Name the body part. || Ear"
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
                    "Q || Use \"those\" and \"shoulders\". || Those are shoulders.",
                    "Q || Use \"that\" and \"knee\". || That is knee.",
                    "Q || Use \"that\" and \"elbow\". || That is elbow.",
                    "Q || Use \"those\" and \"legs\". || Those are legs.",
                    "Q || Use \"those\" and \"fingers\". || Those are fingers.",
                    "Q || Use \"those\" and \"toes\". || Those are toes.",
                    "Q || Complete: Those ____ its shoulders. || Those are its shoulders.",
                    "Q || Complete: That ____ its knee. || That is its knee.",
                    "F || That ____ its elbow. || is || am / are",
                    "F || Those ____ its legs. || are || am / is",
                    "T || Esos son sus hombros. || Those are its shoulders.",
                    "T || Esa es su rodilla. || That is its knee.",
                    "T || Ese es su codo. || That is its elbow.",
                    "T || Esas son sus piernas. || Those are its legs.",
                    "H || 👀 || Name the body part. || Eyes",
                    "H || 👂 || Name the body part. || Ear"
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
                    "Q || Use \"those\" and \"shoulders\". || Those are shoulders.",
                    "Q || Use \"that\" and \"knee\". || That is knee.",
                    "Q || Use \"that\" and \"elbow\". || That is elbow.",
                    "Q || Use \"those\" and \"legs\". || Those are legs.",
                    "Q || Use \"those\" and \"fingers\". || Those are fingers.",
                    "Q || Use \"those\" and \"toes\". || Those are toes.",
                    "Q || Complete: Those ____ its shoulders. || Those are its shoulders.",
                    "Q || Complete: That ____ its knee. || That is its knee.",
                    "F || Those ____ its shoulders. || are || am / is",
                    "F || That ____ its knee. || is || am / are",
                    "T || Esos son sus hombros. || Those are its shoulders.",
                    "T || Esa es su rodilla. || That is its knee.",
                    "T || Ese es su codo. || That is its elbow.",
                    "T || Esas son sus piernas. || Those are its legs.",
                    "H || 👀 || Name the body part. || Eyes",
                    "H || 👂 || Name the body part. || Ear"
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
                    "H || 👀 || Name the body part. || Eyes",
                    "H || 👂 || Name the body part. || Ear"
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
                    "Q || Make a positive sentence about a cat and fur. || A cat has fur.",
                    "Q || Make a positive sentence about a dog and paws. || A dog has paws.",
                    "Q || Make a positive sentence about a cat and whiskers. || A cat has whiskers.",
                    "Q || Make a positive sentence about a bird and wings. || A bird has wings.",
                    "Q || Make a positive sentence about a bird and feathers. || A bird has feathers.",
                    "Q || Make a positive sentence about a dog and a tail. || A dog has a tail.",
                    "Q || Make a negative sentence about a cat and wings. || A cat doesn't have wings.",
                    "Q || Make a negative sentence about a bird and fur. || A bird doesn't have fur.",
                    "F || A cat ____ fur. || has || have / having",
                    "F || A dog ____ paws. || has || have / having",
                    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
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
                    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
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
                    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
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
                    "Q || Make a sentence: ball / in / box. || The ball is in the box.",
                    "T || El lápiz está dentro de la mochila. || The pencil is in the bag.",
                    "Q || Point to your head. What is this? || This is my head.",
                    "T || Esta es mi cabeza. || This is my head.",
                    "Q || Make a positive sentence about a cat and fur. || A cat has fur.",
                    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
                    "F || This ____ my head. || is || am / are",
                    "F || A cat ____ fur. || has || have / having",
                    "Q || Where does the parrot talk? || It talks at home.",
                    "T || once || eleven",
                    "Q || When does your brother clean his room? || He cleans his room on Sundays.",
                    "Q || Spell the word \"rectangle\". || R-E-C-T-A-N-G-L-E.",
                    "H || 🎨 || Name the action. || Paint",
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
                    "Q || Scene: The cat is on the chair. Is the cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
                    "T || La taza está dentro de la mesa. || The cup is in the table.",
                    "Q || Point to your eyes. What are these? || These are my eyes.",
                    "T || Estos son mis ojos. || These are my eyes.",
                    "Q || Does a dog have paws? || Yes, it does.",
                    "Q || Which has feathers: a cat or a bird? || A bird has feathers.",
                    "F || My name ____ Leo. || is || am / are",
                    "F || I ____ breakfast. || eat || eats / eating",
                    "Q || Spell the word \"oval\". || O-V-A-L.",
                    "Q || What letter is it: B? || B",
                    "Q || What does Emma do in the kitchen? || She cooks dinner.",
                    "Q || What fruit do you like? || I like mangoes.",
                    "S || green oval:3, rectangle:2 || How many ovals are there? || There are three ovals.",
                    "H || 🍦 || Name the food. || Ice cream"
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
                    "Q || Make a present progressive sentence with \"I\" and \"learn English\". || I am learning English.",
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
                    "Q || Imagine a blue outfit. Describe it. || I am wearing blue pants and a blue T-shirt.",
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
                    "H || 👖 || Name the clothing. || Pants",
                    "H || 👕 || Name the clothing. || T-shirt"
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
                    "H || 👟 || Name the clothing. || Shoes",
                    "H || 👗 || Name the clothing. || Dress"
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
                    "Q || Imagine a blue outfit. Describe it. || I am wearing blue pants and a blue T-shirt.",
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
                    "H || 👖 || Name the clothing. || Pants",
                    "H || 👕 || Name the clothing. || T-shirt"
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
                    "Q || Imagine you are wearing pants outside. Why are you wearing pants? || I am wearing pants because it is comfortable.",
                    "Q || Imagine you are wearing a T-shirt at home. Why are you wearing a T-shirt? || I am wearing a T-shirt because it is warm today.",
                    "Q || Imagine you are wearing shoes outside. Why are you wearing shoes? || I am wearing shoes because I like it.",
                    "Q || Imagine you are wearing a dress at home. Why are you wearing a dress? || I am wearing a dress because it is my favorite outfit.",
                    "Q || Imagine you are wearing shorts outside. Why are you wearing shorts? || I am wearing shorts because it is comfortable.",
                    "Q || Imagine you are wearing socks at home. Why are you wearing socks? || I am wearing socks because it is warm today.",
                    "Q || Imagine you are wearing a sweater outside. Why are you wearing a sweater? || I am wearing a sweater because I like it.",
                    "Q || Imagine you are wearing pants at home. Why are you wearing pants? || I am wearing pants because it is my favorite outfit.",
                    "F || I am ____ a dress because it is my favorite outfit. || wearing || wear / wears",
                    "F || I am ____ shorts because it is comfortable. || wearing || wear / wears",
                    "T || Estoy usando un suéter. || I am wearing a sweater.",
                    "T || Estoy usando pantalones. || I am wearing pants.",
                    "Q || Complete: I ____ wearing a T-shirt. || I am wearing a T-shirt.",
                    "Q || Complete: I am ____ shoes. || I am wearing shoes.",
                    "H || 🧦 || Name the clothing. || Socks",
                    "H || 👕 || Name the clothing. || T-shirt"
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
                    "Q || Imagine you are wearing a dress at home. Why are you wearing a dress? || I am wearing a dress because it is my favorite outfit.",
                    "Q || Imagine you are wearing pants at home. Why are you wearing pants? || I am wearing pants because it is my favorite outfit.",
                    "Q || Are you wearing shorts? || Yes, I am wearing shorts. / No, I am not wearing shorts.",
                    "Q || Ask a friend about their outfit. || What are you wearing today?",
                    "Q || Imagine you are wearing shorts outside. Why are you wearing shorts? || I am wearing shorts because it is comfortable.",
                    "F || I am ____ shorts because it is comfortable. || wearing || wear / wears",
                    "F || I am ____ blue pants and a blue T-shirt. || wearing || wear / wears",
                    "Q || What color is your T-shirt today? || My T-shirt is blue.",
                    "Q || Imagine you are wearing a sweater outside. Why are you wearing a sweater? || I am wearing a sweater because I like it.",
                    "Q || Describe two things you are wearing. || I am wearing pants and a T-shirt.",
                    "Q || Are you wearing blue pants? || Yes, I am wearing pants. / No, I am not wearing pants.",
                    "H || 👗 || Name the clothing. || Dress",
                    "H || 🩳 || Name the clothing. || Shorts"
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
                    "Q || What is Zog doing in space? || He is flying.",
                    "Q || What is Zara doing on a sunny day? || She is riding a bike.",
                    "Q || What is Zog doing after lunch? || He is taking a nap.",
                    "Q || What is Zara doing in the morning? || She is flying.",
                    "Q || What is Zog doing after school? || He is riding a bike.",
                    "Q || Where is Zara taking a nap? || She is taking a nap on the sofa.",
                    "Q || What is Zog doing in the sky? || He is flying.",
                    "Q || What is Zara doing in the park? || She is riding a bike.",
                    "F || He is ____. || flying || fly / flies",
                    "F || She is ____ a bike. || riding || ride / rides",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está volando. || She is flying.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Is Zog riding a bike? || Yes, he is riding a bike. / No, he isn't riding a bike.",
                    "Q || Is Zara taking a nap? || Yes, she is taking a nap. / No, she isn't taking a nap.",
                    "Q || Is Zog listening to music? || Yes, he is listening to music. / No, he isn't listening to music.",
                    "Q || Is Zara flying? || Yes, she is flying. / No, she isn't flying.",
                    "Q || Is Zog riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
                    "Q || Is Zara taking a nap right now? || Yes, she is taking a nap. / No, she isn't taking a nap.",
                    "Q || What is Zog doing after school? || He is listening to music.",
                    "Q || What is Zara doing in the morning? || She is flying.",
                    "F || She is ____. || flying || fly / flies",
                    "F || He is ____ a nap. || taking || take / takes",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || What is Zog doing after lunch? || He is taking a nap.",
                    "Q || What is Zara doing at home? || She is listening to music.",
                    "Q || What is Zog doing at the park? || He is meeting a friend.",
                    "Q || What is Zara doing in space? || She is flying.",
                    "Q || What is Zog doing on a sunny day? || He is riding a bike.",
                    "Q || Where is Zara taking a nap? || She is taking a nap on the sofa.",
                    "Q || What is Zog doing after school? || He is listening to music.",
                    "Q || What is Zara doing in the afternoon? || She is meeting a friend.",
                    "F || He is ____ a friend. || meeting || meet / meets",
                    "F || She is ____. || flying || fly / flies",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Where is Zog listening to music? || He is listening to music in his bedroom.",
                    "Q || Where is Zara meeting a friend? || She is meeting a friend in the park.",
                    "Q || Where is Zog flying? || He is flying in the sky.",
                    "Q || Where is Zara riding a bike? || She is riding a bike in the park.",
                    "Q || What is Zog doing after lunch? || He is taking a nap.",
                    "Q || Where is Zara listening to music? || She is listening to music in her bedroom.",
                    "Q || What is Zog doing in the afternoon? || He is meeting a friend.",
                    "Q || What is Zara doing in the morning? || She is flying.",
                    "F || She is ____ a bike in the park. || riding || ride / rides",
                    "F || He is ____ a nap. || taking || take / takes",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Where is Zog meeting a friend? || He is meeting a friend in the park.",
                    "Q || Where is Zara flying? || She is flying in the sky.",
                    "Q || Where is Zog riding a bike? || He is riding a bike in the park.",
                    "Q || Where is Zara taking a nap? || She is taking a nap on the sofa.",
                    "Q || What is Zog doing at home? || He is listening to music.",
                    "Q || Where is Zara meeting a friend? || She is meeting a friend in the park.",
                    "Q || What is Zog doing in the morning? || He is flying.",
                    "Q || Is Zara riding a bike right now? || Yes, she is riding a bike. / No, she isn't riding a bike.",
                    "F || He is ____ to music. || listening || listen / listens",
                    "F || She is ____ a friend in the park. || meeting || meet / meets",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || What are your friends doing on the park path? || They are jogging.",
                    "Q || What are the children doing at the playground? || They are swinging.",
                    "Q || What are your friends doing with a camera? || They are taking pictures.",
                    "Q || What are the children doing in the morning? || They are jogging.",
                    "Q || What are your friends doing after school? || They are swinging.",
                    "Q || Where are the children taking pictures? || They are taking pictures in the park.",
                    "Q || What are your friends doing in the park? || They are jogging.",
                    "Q || What are the children doing at the playground in this story? || They are swinging.",
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
                    "Q || Are your friends swinging? || Yes, they are. / No, they aren't.",
                    "Q || Are the children taking pictures? || Yes, they are. / No, they aren't.",
                    "Q || Are your friends walking the dog? || Yes, they are. / No, they aren't.",
                    "Q || Are the children jogging? || Yes, they are. / No, they aren't.",
                    "Q || Are your friends swinging right now? || Yes, they are. / No, they aren't.",
                    "Q || Are the children taking pictures right now? || Yes, they are. / No, they aren't.",
                    "Q || What are your friends doing after breakfast? || They are walking the dog.",
                    "Q || What are the children doing in the morning? || They are jogging.",
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
                    "Q || Where are your friends taking pictures? || They are taking pictures in the park.",
                    "Q || Where are the children walking the dog? || They are walking the dog in the park.",
                    "Q || Where are your friends climbing a tree? || They are climbing a tree in the garden.",
                    "Q || Where are the children jogging? || They are jogging in the park.",
                    "Q || What are your friends doing at the playground? || They are swinging.",
                    "Q || Where are the children taking pictures? || They are taking pictures in the park.",
                    "Q || What are your friends doing after breakfast? || They are walking the dog.",
                    "Q || What are the children doing in the afternoon? || They are climbing a tree.",
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
                    "Q || What is Zog the alien doing on a space mission? || He is flying.",
                    "T || Él está volando. || He is flying.",
                    "Q || What are your friends doing on the park path? || They are jogging.",
                    "T || Ellos están trotando. || They are jogging.",
                    "F || He is ____. || flying || fly / flies",
                    "F || They are ____. || jogging || jog / jogs",
                    "Q || What does the rabbit do in the morning? || It jumps.",
                    "Q || What is your grandpa's favorite food? || My grandpa's favorite food is soup.",
                    "Q || When does Emma clean the room? || She cleans the room on Saturday mornings.",
                    "Q || Make a simple present sentence with \"It\" and \"talk\". || It talks.",
                    "H || 👖 || Name the clothing. || Pants",
                    "H || 👧 || Name the person. || Girl"
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
                    "Q || Is Zara the alien taking a nap? || Yes, she is taking a nap. / No, she isn't taking a nap.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "Q || Are the children taking pictures? || Yes, they are. / No, they aren't.",
                    "T || Ellos están columpiándose. || They are swinging.",
                    "F || He ____ my dad. || is || am / are",
                    "F || She ____. || dances || dance / dancing",
                    "Q || What does your dog do after lunch? || It walks.",
                    "Q || What is your sister's favorite drink? || My sister's favorite drink is coffee.",
                    "Q || What does your teacher do on Sundays? || He paints a picture.",
                    "Q || Make a simple present sentence with \"It\" and \"run\". || It runs.",
                    "H || 💃 || Name the action. || Dance",
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
                    "Q || What are your friends doing on the sand? || They are making a sandcastle.",
                    "Q || What are the children doing on a hot day? || They are swimming.",
                    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
                    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
                    "Q || What are your friends doing on Saturdays? || They are swimming.",
                    "Q || Where are the children having a picnic? || They are having a picnic on the beach.",
                    "Q || What are your friends doing on the beach? || They are making a sandcastle.",
                    "Q || What are the children doing in the pool? || They are swimming.",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "F || They are ____. || swimming || swim / swims",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están haciendo un castillo de arena ahora. || They are making a sandcastle right now.",
                    "H || 🏊 || Name the action. || Swim",
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
                    "Q || Are your friends swimming? || Yes, they are swimming. / No, they aren't swimming.",
                    "Q || Are the children having a picnic? || Yes, they are having a picnic. / No, they aren't having a picnic.",
                    "Q || Are your friends surfing? || Yes, they are surfing. / No, they aren't surfing.",
                    "Q || Are the children making a sandcastle? || Yes, they are making a sandcastle. / No, they aren't making a sandcastle.",
                    "Q || Are your friends swimming right now? || Yes, they are swimming. / No, they aren't swimming.",
                    "Q || Are the children having a picnic right now? || Yes, they are having a picnic. / No, they aren't having a picnic.",
                    "Q || What are your friends doing in the morning? || They are surfing.",
                    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
                    "F || They are ____. || surfing || surf / surfs",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Name the action. || Swim",
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
                    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
                    "Q || What are the children doing at the beach? || They are surfing.",
                    "Q || What are your friends doing under a beach umbrella in this story? || They are relaxing.",
                    "Q || What are the children doing on the sand? || They are making a sandcastle.",
                    "Q || What are your friends doing on a hot day? || They are swimming.",
                    "Q || Where are the children having a picnic? || They are having a picnic on the beach.",
                    "Q || What are your friends doing in the morning? || They are surfing.",
                    "Q || What are the children doing after lunch? || They are relaxing.",
                    "F || They are ____. || relaxing || relax / relaxes",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Name the action. || Swim",
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
                    "Q || Who are your friends surfing with? || They are surfing with their family.",
                    "Q || Who are the children relaxing with? || They are relaxing with their friends.",
                    "Q || Who are your friends making a sandcastle with? || They are making a sandcastle with their cousin.",
                    "Q || Who are the children swimming with? || They are swimming with their brother.",
                    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
                    "Q || Where are the children surfing? || They are surfing in the ocean.",
                    "Q || What are your friends doing after lunch? || They are relaxing.",
                    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
                    "F || They are ____ with their brother. || swimming || swim / swims",
                    "F || They are ____ a picnic. || having || have / has",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Name the action. || Swim",
                    "H || 🏄 || Name the action. || Surf"
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
                    "Q || Are the children making a sandcastle? || Yes, they are making a sandcastle. / No, they aren't making a sandcastle.",
                    "Q || What are the children doing on the sand? || They are making a sandcastle.",
                    "Q || Who are the children swimming with? || They are swimming with their brother.",
                    "Q || What are your friends doing on Saturdays? || They are swimming.",
                    "Q || Are your friends swimming right now? || Yes, they are swimming. / No, they aren't swimming.",
                    "Q || What are your friends doing on a hot day? || They are swimming.",
                    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
                    "F || They are ____ a sandcastle. || making || make / makes",
                    "F || They are ____ with their brother. || swimming || swim / swims",
                    "Q || Make a present progressive sentence with \"They\" and \"surf\". || They are surfing.",
                    "Q || What are your friends doing after lunch? || They are relaxing.",
                    "Q || What are the children doing in the pool? || They are swimming.",
                    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
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
                    "Q || What does Emma do in the kitchen? || She sweeps the floor.",
                    "Q || What does Leo do in the kitchen? || He mops the floor.",
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
                    "Q || Where does Emma wash the dishes? || She washes the dishes in the kitchen.",
                    "Q || When does Leo make his bed? || He makes his bed in the morning.",
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
                    "Q || Who does your dad make his bed with? || He makes his bed with his friends.",
                    "Q || Who does your sister dust the shelf with? || She dusts the shelf with her cousin.",
                    "Q || Who does your best friend sweep the floor with? || She sweeps the floor with her brother.",
                    "Q || What does Emma do after a spill? || She mops the floor.",
                    "Q || Where does Leo wash the dishes? || He washes the dishes in the kitchen.",
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
                    "Q || Why does Emma mop the floor? || Because the floor is dirty.",
                    "Q || What does Leo do after dinner? || He washes the dishes.",
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
                    "Q || What does Emma do after a spill? || She mops the floor.",
                    "Q || What does Leo do after dinner? || He washes the dishes.",
                    "F || She ____ the floor. || mops || mop / mopping",
                    "F || He ____ his bed in the morning. || makes || make / making",
                    "Q || When does your teacher make his bed? || He makes his bed in the morning.",
                    "Q || When does your mom dust the shelf? || She dusts the shelf on Saturdays.",
                    "Q || What does Leo do in the kitchen? || He mops the floor.",
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
                    "Q || Describe an imaginary character named Ben using \"tall\". || Ben is tall.",
                    "Q || Describe an imaginary character named Leo using \"short\". || Leo is short.",
                    "Q || Describe an imaginary character named Max using \"chubby\". || Max is chubby.",
                    "Q || Describe an imaginary character named Tom using \"skinny\". || Tom is skinny.",
                    "Q || Describe an imaginary character named Sam using \"tall\". || Sam is tall.",
                    "Q || Describe an imaginary character named Alex using \"short\". || Alex is short.",
                    "Q || Describe an imaginary character named Dan using \"chubby\". || Dan is chubby.",
                    "Q || Describe an imaginary character named Rob using \"skinny\". || Rob is skinny.",
                    "F || Ben ____ tall. || is || am / are",
                    "F || Leo ____ short. || is || am / are",
                    "T || Max es regordete. || Max is chubby.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "T || Sam es alto. || Sam is tall.",
                    "T || Alex es bajo. || Alex is short.",
                    "T || Mi hermano es regordete. || My brother is chubby.",
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
                    "Q || Story: Leo is short. Is Leo chubby? || No, he isn't.",
                    "Q || Story: Max is chubby. Is Max chubby? || Yes, he is.",
                    "Q || Story: Tom is skinny. Is Tom strong? || No, he isn't.",
                    "Q || Story: Sam is strong. Is Sam strong? || Yes, he is.",
                    "Q || Story: Alex is bald. Is Alex tall? || No, he isn't.",
                    "Q || Story: Dan is tall. Is Dan tall? || Yes, he is.",
                    "Q || Story: Rob is short. Is Rob chubby? || No, he isn't.",
                    "F || Leo ____ short. || is || am / are",
                    "F || Max ____ chubby. || is || am / are",
                    "T || Max es regordete. || Max is chubby.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "T || Sam es fuerte. || Sam is strong.",
                    "T || Alex es calvo. || Alex is bald.",
                    "H || 💪 || Name the adjective. || Strong",
                    "H || 👨‍🦲 || Name the adjective. || Bald"
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
                    "T || Max es regordete. || Max is chubby.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "T || Sam es fuerte. || Sam is strong.",
                    "T || Alex es calvo. || Alex is bald.",
                    "H || 💪 || Name the adjective. || Strong",
                    "H || 👨‍🦲 || Name the adjective. || Bald"
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
                    "Q || What are your friends doing on the sand? || They are making a sandcastle.",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "Q || Does your teacher sweep the floor? || Yes, he sweeps the floor. / No, he doesn't sweep the floor.",
                    "T || Él barre el piso. || He sweeps the floor.",
                    "S || yellow circle:1, star:2 || Is there a rectangle? || No, there isn't a rectangle.",
                    "T || Veo dos estrellas. || I see two stars.",
                    "Q || Describe an imaginary character named Ben using \"tall\". || Ben is tall.",
                    "T || Max es regordete. || Max is chubby.",
                    "F || Ben ____ tall. || is || am / are",
                    "F || Max ____ chubby. || is || am / are",
                    "Q || Where does the parrot talk? || It talks at home.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "Q || Say this number: 5. || Five.",
                    "Q || What does your best friend do after school? || My best friend plays games.",
                    "S || star:2 || How many stars do you see? || I see two stars.",
                    "H || 🎨 || Name the action. || Paint"
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
                    "Q || Are the children having a picnic? || Yes, they are having a picnic. / No, they aren't having a picnic.",
                    "T || Ellos están nadando. || They are swimming.",
                    "Q || Where does your brother wash the dishes? || He washes the dishes in the kitchen.",
                    "T || Ella trapea el piso. || She mops the floor.",
                    "Q || Do you want to be a doctor? || Yes, I want to be a doctor. / No, I don't want to be a doctor.",
                    "T || Veo catorce estrellas. || I see fourteen stars.",
                    "Q || Story: Leo is short. Is Leo chubby? || No, he isn't.",
                    "T || Tom es delgado. || Tom is skinny.",
                    "F || Tom ____ skinny. || is || am / are",
                    "F || My name ____ Leo. || is || am / are",
                    "Q || Spell the word \"oval\". || O-V-A-L.",
                    "Q || Make a present progressive sentence with \"They\" and \"swing\". || They are swinging.",
                    "Q || Spell EVA. || E-V-A.",
                    "Q || Make a simple present sentence with \"She\" and \"work\". || She works.",
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
                    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
                    "Q || What are you going to eat at a birthday party? || I am going to eat cake.",
                    "Q || What are you going to do with a camera? || I am going to take pictures.",
                    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
                    "Q || What are you going to do after lunch? || I am going to eat cake.",
                    "Q || Where are you going to take pictures? || I am going to take pictures in the park.",
                    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday on my birthday.",
                    "Q || What are you going to do at home? || I am going to eat cake.",
                    "F || I am going to ____ my birthday. || celebrate || celebrates / celebrating",
                    "F || I am going to ____ cake. || eat || eats / eating",
                    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Yo voy a comer pastel. || I am going to eat cake.",
                    "T || Yo voy a tomar fotos. || I am going to take pictures.",
                    "T || Yo voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
                    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Yo voy a celebrar mi cumpleaños el sábado. || I am going to celebrate my birthday on Saturday."
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
                    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
                    "F || I am going to ____ time with friends. || spend || spends / spending",
                    "F || I am going to ____ my birthday. || celebrate || celebrates / celebrating",
                    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Yo voy a comer pastel. || I am going to eat cake.",
                    "T || Yo voy a tomar fotos. || I am going to take pictures.",
                    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Yo voy a comer pastel mañana. || I am going to eat cake tomorrow."
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
                    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
                    "Q || What are you going to eat at a birthday party? || I am going to eat cake.",
                    "Q || Where are you going to take pictures? || I am going to take pictures in the park.",
                    "Q || When are you going to spend time with friends? || I am going to spend time with friends on weekends.",
                    "Q || What are you going to do on your birthday? || I am going to open presents.",
                    "F || I am going to ____ presents. || open || opens / opening",
                    "F || I am going to ____ my birthday. || celebrate || celebrates / celebrating",
                    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Yo voy a comer pastel. || I am going to eat cake.",
                    "T || Yo voy a tomar fotos. || I am going to take pictures.",
                    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Yo voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow."
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
                    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
                    "F || I am going to ____ cake at home. || eat || eats / eating",
                    "F || I am going to ____ pictures. || take || takes / taking",
                    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Yo voy a comer pastel. || I am going to eat cake.",
                    "T || Yo voy a tomar fotos. || I am going to take pictures.",
                    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Yo voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow."
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
                    "T || Yo voy a tomar fotos. || I am going to take pictures.",
                    "Q || Are you going to celebrate your birthday? || Yes, I am. / No, I am not.",
                    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
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
                    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
                    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Yo voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow."
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
                    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
                    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
                    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Yo voy a comer una merienda mañana. || I am going to eat a snack tomorrow."
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
                    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
                    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
                    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Yo voy a hacer mi tarea mañana. || I am going to do my homework tomorrow."
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
                    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
                    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
                    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Yo voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow."
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
                    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
                    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
                    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Yo voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow."
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
                    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
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
                    "Q || Make a going to sentence with \"I\" and \"check my phone\". || I am going to check my phone.",
                    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Yo voy a comer una merienda mañana. || I am going to eat a snack tomorrow."
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
                    "Q || What is Emma going to do on Saturday? || She is going to ride a bike.",
                    "Q || What is Leo going to do on Sunday? || He is going to visit his grandma.",
                    "Q || What is your teacher going to do in the afternoon? || He is going to pay for a snack.",
                    "Q || What is your mom going to do after school? || She is going to ride a bike.",
                    "Q || Where is your brother going to visit his grandma? || He is going to visit his grandma at his grandma's house.",
                    "Q || When is your dad going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "Q || What is your sister going to do in the park? || She is going to ride a bike.",
                    "F || She is going to ____ for a snack. || pay || pays / paying",
                    "F || She is going to ____ a bike. || ride || rides / riding",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Él va a montar bicicleta. || He is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Él va a pagar una merienda mañana. || He is going to pay for a snack tomorrow.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Is Emma going to ride a bike? || Yes, she is. / No, she isn't.",
                    "Q || Is Leo going to visit his grandma? || Yes, he is. / No, he isn't.",
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
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || What is Leo going to do on Sunday? || He is going to visit his grandma.",
                    "Q || What is your teacher going to buy at a toy shop? || He is going to buy a toy.",
                    "Q || What is your mom going to do on a rainy day? || She is going to watch a movie.",
                    "Q || What is your brother going to do at a shop? || He is going to pay for a snack.",
                    "Q || What is your dad going to do on Saturday? || He is going to ride a bike.",
                    "Q || Where is your sister going to visit her grandma? || She is going to visit her grandma at her grandma's house.",
                    "Q || When is your best friend going to buy a toy? || She is going to buy a toy on Saturday.",
                    "Q || What is Emma going to do on Saturday evening? || She is going to watch a movie.",
                    "F || She is going to ____ a movie. || watch || watches / watching",
                    "F || He is going to ____ for a snack. || pay || pays / paying",
                    "T || Ella va a pagar una merienda. || She is going to pay for a snack.",
                    "T || Él va a montar bicicleta. || He is going to ride a bike.",
                    "T || Él va a visitar a su abuela. || He is going to visit his grandma.",
                    "T || Ella va a comprar un juguete. || She is going to buy a toy.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || When is Emma going to watch a movie? || She is going to watch a movie on Saturday evening.",
                    "Q || What is Leo going to do in the afternoon? || He is going to pay for a snack.",
                    "F || He is going to ____ a bike in the park. || ride || rides / riding",
                    "F || She is going to ____ her grandma. || visit || visits / visiting",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Él va a montar bicicleta. || He is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Ella va a comprar un juguete. || She is going to buy a toy.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || When is your sister going to visit her grandma? || She is going to visit her grandma on Sundays.",
                    "Q || What is your best friend going to buy at a toy shop? || She is going to buy a toy.",
                    "Q || Where is Emma going to watch a movie? || She is going to watch a movie at the cinema.",
                    "Q || When is Leo going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "Q || What is your teacher going to do after school? || He is going to ride a bike.",
                    "F || She is going to ____ a toy. || buy || buys / buying",
                    "F || She is going to ____ a movie at the cinema. || watch || watches / watching",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Ella va a comprar un juguete. || She is going to buy a toy.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Where is Zog the alien riding a bike? || He is riding a bike in the park.",
                    "Q || Where is Zara the alien taking a nap? || She is taking a nap on the sofa.",
                    "Q || Where is Zog the alien listening to music? || He is listening to music in his bedroom.",
                    "Q || Where is Zara the alien meeting a friend? || She is meeting a friend in the park.",
                    "Q || What is Zog the alien doing on a space mission? || He is flying.",
                    "Q || Where is Zara the alien riding a bike? || She is riding a bike in the park.",
                    "Q || What is Zog the alien doing after lunch? || He is taking a nap.",
                    "Q || Is Zara the alien listening to music right now? || Yes, she is. / No, she isn't.",
                    "F || She is ____ a nap on the sofa. || taking || take / takes",
                    "F || He is ____ to music in his bedroom. || listening || listen / listens",
                    "T || Él está volando. || He is flying.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "T || Él está tomando una siesta. || He is taking a nap.",
                    "T || Ella está escuchando música. || She is listening to music.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Who are your friends having a picnic with? || They are having a picnic with their family.",
                    "Q || Who are the children surfing with? || They are surfing with their friends.",
                    "Q || Who are your friends relaxing with? || They are relaxing with their cousin.",
                    "Q || Who are the children making a sandcastle with? || They are making a sandcastle with their brother.",
                    "Q || What are your friends doing on a hot day? || They are swimming.",
                    "Q || Where are the children having a picnic? || They are having a picnic on the beach.",
                    "Q || What are your friends doing in the morning? || They are surfing.",
                    "Q || Are the children relaxing right now? || Yes, they are. / No, they aren't.",
                    "F || They are ____ with their cousin. || relaxing || relax / relaxes",
                    "F || They are ____ a sandcastle with their brother. || making || make / makes",
                    "T || Ellos están haciendo un castillo de arena. || They are making a sandcastle.",
                    "T || Ellos están nadando. || They are swimming.",
                    "T || Ellos están haciendo un pícnic. || They are having a picnic.",
                    "T || Ellos están surfeando. || They are surfing.",
                    "H || 🏊 || Name the action. || Swim",
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
                    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
                    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "Q || What are you going to eat after class? || I am going to eat a snack.",
                    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
                    "Q || What is your best friend going to do at a shop next weekend? || She is going to pay for a snack.",
                    "T || Él va a pagar una merienda. || He is going to pay for a snack.",
                    "Q || Why are you sitting? || Because the lesson is starting.",
                    "T || Yo estoy sentado. || I am sitting.",
                    "F || He is going to ____ for a snack. || pay || pays / paying",
                    "F || I am ____. || sitting || sit / sits",
                    "Q || What does the rabbit do in the morning? || It jumps.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "T || sopa || soup",
                    "Q || Make a simple present sentence with \"He\" and \"clean the room\". || He cleans the room.",
                    "H || 👧 || Name the person. || Girl",
                    "H || 🎨 || Name the action. || Paint"
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
                    "T || Yo voy a comer pastel. || I am going to eat cake.",
                    "Q || Are you going to play video games? || Yes, I am going to play video games. / No, I am not going to play video games.",
                    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
                    "Q || Is Leo going to visit his grandma? || Yes, he is. / No, he isn't.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "Q || Where is Zara the alien taking a nap? || She is taking a nap on the sofa.",
                    "T || Ella está montando bicicleta. || She is riding a bike.",
                    "F || She is ____ a bike. || riding || ride / rides",
                    "F || He ____ my dad. || is || am / are",
                    "Q || What does your dog do after lunch? || It walks.",
                    "Q || Make a present progressive sentence with \"He\" and \"take a nap\". || He is taking a nap.",
                    "Q || What is your dad's favorite drink? || My dad's favorite drink is milk.",
                    "Q || Make a simple present sentence with \"He\" and \"paint a picture\". || He paints a picture.",
                    "H || 💃 || Name the action. || Dance",
                    "T || Yo voy a comer pastel mañana. || I am going to eat cake tomorrow."
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
                    "Q || What does Leo do in the morning? || He exercises.",
                    "F || He ____. || exercises || exercise / exercising",
                    "F || My dad ____ dinner. || cooks || cook / cooking",
                    "T || Él se despierta. || He wakes up.",
                    "T || Él cocina la cena. || He cooks dinner.",
                    "T || Él trabaja. || He works.",
                    "T || Ella hace ejercicio. || She exercises.",
                    "T || Mi hermano trabaja. || My brother works.",
                    "H || 🏋️ || Name the action. || Exercise"
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
                    "Q || When does Leo win a race? || He wins a race on sports day.",
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
                    "Q || Who does the parrot talk with? || It talks with its family.",
                    "Q || Who does the cat climb a tree with? || It climbs a tree with its friends.",
                    "Q || Who does your dog run with? || It runs with its cousin.",
                    "Q || Who does the rabbit jump with? || It jumps with its brother.",
                    "Q || What does your dog do on a quiet afternoon? || It walks.",
                    "Q || Where does the parrot talk? || It talks at home.",
                    "Q || When does the cat climb a tree? || It climbs a tree in the afternoon.",
                    "Q || What does your dog do after school? || It runs.",
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
                    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday on my birthday.",
                    "Q || When are you going to eat cake? || I am going to eat cake after lunch.",
                    "Q || When are you going to take pictures? || I am going to take pictures on weekends.",
                    "Q || When are you going to spend time with friends? || I am going to spend time with friends on weekends.",
                    "Q || What are you going to open at a birthday party? || I am going to open presents.",
                    "Q || Where are you going to celebrate your birthday? || I am going to celebrate my birthday at home.",
                    "Q || When are you going to eat cake next Sunday? || I am going to eat cake after lunch.",
                    "Q || What are you going to do on weekends? || I am going to take pictures.",
                    "F || I am going to ____ my birthday on my birthday. || celebrate || celebrates / celebrating",
                    "F || I am going to ____ cake after lunch. || eat || eats / eating",
                    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
                    "T || Yo voy a comer pastel. || I am going to eat cake.",
                    "T || Yo voy a tomar fotos. || I am going to take pictures.",
                    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
                    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
                    "T || Yo voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow."
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
                    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
                    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
                    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
                    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
                    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
                    "T || Yo voy a hacer mi tarea mañana. || I am going to do my homework tomorrow."
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
                    "Q || When is your brother going to visit his grandma? || He is going to visit his grandma on Sundays.",
                    "Q || When is your dad going to buy a toy? || He is going to buy a toy on Saturday.",
                    "Q || When is your sister going to watch a movie? || She is going to watch a movie on Saturday evening.",
                    "Q || When is your best friend going to play games? || She is going to play games on Saturdays.",
                    "Q || What is Emma going to do on a sunny morning next weekend? || She is going to ride a bike.",
                    "Q || Where is Leo going to visit his grandma? || He is going to visit his grandma at his grandma's house.",
                    "Q || When is your teacher going to buy a toy? || He is going to buy a toy on Saturday.",
                    "Q || What is your mom going to do on Saturday evening? || She is going to watch a movie.",
                    "F || She is going to ____ a movie on Saturday evening. || watch || watches / watching",
                    "F || She is going to ____ games on Saturdays. || play || plays / playing",
                    "T || Ella va a jugar. || She is going to play games.",
                    "T || Ella va a montar bicicleta. || She is going to ride a bike.",
                    "T || Ella va a visitar a su abuela. || She is going to visit her grandma.",
                    "T || Él va a comprar un juguete. || He is going to buy a toy.",
                    "H || 🚴 || Name the action. || Ride a bike",
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
                    "Q || Where will you explore a city? || I will explore a city in Colombia.",
                    "Q || Where will you ride a bike? || I will ride a bike in the park.",
                    "Q || Where will you go? || I will go to the beach.",
                    "Q || Where will you visit your grandma? || I will visit my grandma at my grandma's house.",
                    "Q || What will you do next month? || I will travel.",
                    "Q || Where will you explore a city next Sunday? || I will explore a city in Colombia.",
                    "Q || When will you ride a bike? || I will ride a bike after school.",
                    "Q || What will you do during vacation? || I will go to the beach.",
                    "F || I will ____ my grandma at my grandma's house. || visit || visits / visited",
                    "F || I will ____. || travel || travels / traveled",
                    "T || Yo iré a la playa. || I will go to the beach.",
                    "T || Yo visitaré a mi abuela. || I will visit my grandma.",
                    "T || Yo viajaré. || I will travel.",
                    "T || Yo exploraré una ciudad. || I will explore a city.",
                    "T || Yo exploraré una ciudad mañana. || I will explore a city tomorrow.",
                    "H || 🚴 || Name the action. || Ride a bike"
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
                    "Q || Where will you visit your grandma? || I will visit my grandma at my grandma's house.",
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
                    "H || 💃 || Name the action. || Dance",
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
                    "Q || Make a simple past sentence with \"I\" and \"order a pizza\". || I ordered a pizza.",
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
                    "Q || When did you become friends with Leo? || I became friends with Leo during vacation.",
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
                    "Q || When did you become friends with Leo? || I became friends with Leo during vacation.",
                    "Q || What did you do last night? || I ate rice.",
                    "Q || Make a simple past sentence with \"I\" and \"meet a friend\". || I met a friend.",
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
                    "Q || What did Emma do yesterday afternoon? || She took a shower.",
                    "Q || What did Leo do last Saturday? || He tried a new game.",
                    "Q || What did your teacher do on your last vacation? || He woke up.",
                    "Q || What did your mom do after school? || She took a shower.",
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
                    "Q || Did Emma take a shower? || Yes, she took a shower. / No, she didn't take a shower.",
                    "Q || Did Leo try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
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
                    "Q || What did Leo do last weekend? || He tried a new game.",
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
                    "Q || What did Leo do last night? || He woke up.",
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
                    "Q || Who did your mom take a shower with? || She took a shower with her family.",
                    "Q || Who did your brother try a new game with? || He tried a new game with his friends.",
                    "Q || Who did your dad go shopping with? || He went shopping with his cousin.",
                    "Q || Who did Emma finish her homework with? || She finished her homework with her brother.",
                    "Q || What did your best friend do last weekend? || She went shopping.",
                    "Q || Where did your brother finish his homework? || He finished his homework at home.",
                    "Q || When did Leo wake up? || He woke up at seven o'clock.",
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
                    "H || ➡️ || Name the direction. || Right",
                    "H || ⬅️ || Name the direction. || Left"
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
                    "H || ➡️ || Name the direction. || Right",
                    "H || ⬅️ || Name the direction. || Left"
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
                    "H || ➡️ || Name the direction. || Right",
                    "H || ⬅️ || Name the direction. || Left"
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
                    "Q || What does the rabbit do in the morning? || It jumps.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "Q || When is your dad going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "T || cereal || cereal",
                    "H || 👧 || Name the person. || Girl",
                    "H || 🎨 || Name the action. || Paint"
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
                    "Q || Did Leo try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
                    "T || Ella se duchó. || She took a shower.",
                    "Q || Park: turn left. Do I turn right to get to the park? || No, you don't turn right. You turn left.",
                    "Q || Ask for directions to the library. || How do I get to the library?",
                    "F || She ____. || dances || dance / dancing",
                    "F || It ____. || walks || walk / walking",
                    "Q || What does your dog do after lunch? || It walks.",
                    "Q || Make a present progressive sentence with \"He\" and \"take a nap\". || He is taking a nap.",
                    "Q || What is your best friend going to do in the afternoon? || She is going to pay for a snack.",
                    "Q || What is your brother's favorite drink? || My brother's favorite drink is water.",
                    "H || 💃 || Name the action. || Dance",
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
                    "Q || What did Leo do last weekend? || He had a party.",
                    "Q || What did your teacher do yesterday afternoon? || He sang.",
                    "Q || What did your mom do on the last family trip? || She blew out the candles.",
                    "Q || What did your brother do on your last vacation? || He had a party.",
                    "Q || What did your dad do yesterday after school? || He sang.",
                    "Q || Where did your sister blow out the candles? || She blew out the candles at home.",
                    "Q || When did your best friend have a party? || She had a party on her birthday.",
                    "Q || What did Emma do last night? || She sang.",
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
                    "Q || Did the balloon fly away? || Yes, it flew away. / No, it didn't fly away.",
                    "Q || Did your dad have a party? || Yes, he had a party. / No, he didn't have a party.",
                    "Q || Did your sister sing yesterday? || Yes, she sang. / No, she didn't sing.",
                    "Q || Did your best friend blow out the candles yesterday? || Yes, she blew out the candles. / No, she didn't blow out the candles.",
                    "Q || What did the balloon do yesterday morning? || It flew away.",
                    "Q || What did Leo do last night? || He had a party.",
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
                    "Q || What did the balloon do yesterday afternoon? || It flew away.",
                    "Q || What did your dad do on the last family trip? || He got presents.",
                    "Q || What did your sister do yesterday morning? || She had a party.",
                    "Q || What did your best friend do last weekend? || She sang.",
                    "Q || Where did Emma blow out the candles? || She blew out the candles at home.",
                    "Q || When did the balloon fly away? || It flew away in the afternoon.",
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
                    "Q || Why did the balloon fly away? || Because the wind was strong.",
                    "Q || Why did your dad get presents? || Because it was his birthday.",
                    "Q || Why did your sister have a party? || Because it was her birthday.",
                    "Q || Why did your best friend sing? || Because she was happy.",
                    "Q || What did Emma do last weekend? || She blew out the candles.",
                    "Q || Where did the balloon fly away? || It flew away into the sky.",
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
                    "Q || What did your dad do yesterday after school? || He sang.",
                    "Q || Did your sister sing yesterday? || Yes, she sang. / No, she didn't sing.",
                    "Q || What did your best friend do last weekend? || She sang.",
                    "Q || What did Emma do last weekend? || She blew out the candles.",
                    "F || She ____ yesterday. || sang || sing / sings",
                    "F || It ____ away yesterday. || flew || fly / flies",
                    "Q || Complete: She ____. (blow out the candles) || She blew out the candles.",
                    "Q || When did your teacher get presents? || He got presents on his birthday.",
                    "Q || What did Emma do last night? || She sang.",
                    "Q || What did Leo do last night? || He had a party.",
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
                    "Q || When did Emma walk around the zoo? || She walked around the zoo in the morning.",
                    "Q || What did Leo do last night? || He saw a lion.",
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
                    "Q || Did Emma talk yesterday? || Yes, she talked. / No, she didn't talk.",
                    "Q || What did Leo do yesterday morning? || He took pictures.",
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
                    "Q || What did Emma see at the zoo? || She saw a lion.",
                    "Q || Where did Leo talk? || He talked at home.",
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
                    "Q || Who did Emma see a lion with? || She saw a lion with her brother.",
                    "Q || What did Leo do last weekend? || He talked.",
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
                    "Q || What did Emma see at the zoo? || She saw a lion.",
                    "Q || What did Leo do last weekend? || He talked.",
                    "F || He ____ pictures on weekends yesterday. || took || take / takes",
                    "F || She ____ water after exercise yesterday. || drank || drink / drinks",
                    "Q || When did your teacher take pictures? || He took pictures on weekends.",
                    "Q || When did your mom drink water? || She drank water after exercise.",
                    "Q || What did Leo do last night? || He saw a lion.",
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
                    "Q || When did Leo cook dinner? || He cooked dinner at six o'clock.",
                    "Q || What did your teacher do last night? || He cleaned the room.",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "F || He ____ the room yesterday. || cleaned || clean / cleans",
                    "T || Él cocinó la cena. || He cooked dinner.",
                    "T || Ella limpió el cuarto. || She cleaned the room.",
                    "T || Él trabajó. || He worked.",
                    "T || Ella cocinó la cena. || She cooked dinner.",
                    "T || Mi hermano cocinó la cena. || My brother cooked dinner.",
                    "T || Mi hermana limpió el cuarto. || My sister cleaned the room."
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
                    "Q || Did Emma clean the room yesterday? || Yes, she cleaned the room. / No, she didn't clean the room.",
                    "Q || Did your mom work yesterday? || Yes, she worked. / No, she didn't work.",
                    "Q || What did your teacher do yesterday morning? || He called his grandma.",
                    "Q || What did your mom do last night? || She cooked dinner.",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "F || He ____ yesterday. || worked || work / works",
                    "T || Ella cocinó la cena. || She cooked dinner.",
                    "T || Ella limpió el cuarto. || She cleaned the room.",
                    "T || Él trabajó. || He worked.",
                    "T || Él llamó a su abuela. || He called his grandma.",
                    "T || Mi hermana limpió el cuarto. || My sister cleaned the room.",
                    "T || Mi hermano trabajó. || My brother worked."
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
                    "Q || What did your dad do last weekend? || He worked.",
                    "Q || What did your sister do yesterday afternoon? || She called her grandma.",
                    "Q || What did your best friend do on the last family trip? || She finished a project.",
                    "Q || What did Emma cook for her family? || She cooked dinner.",
                    "Q || What did Leo do last weekend? || He cleaned the room.",
                    "Q || Where did your mom work? || She worked in an office.",
                    "Q || When did your mom call her grandma? || She called her grandma in the morning.",
                    "Q || What did your brother do last night? || He finished a project.",
                    "F || She ____ a project yesterday. || finished || finish / finishes",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "T || Ella cocinó la cena. || She cooked dinner.",
                    "T || Ella limpió el cuarto. || She cleaned the room.",
                    "T || Él trabajó. || He worked.",
                    "T || Él llamó a su abuela. || He called his grandma.",
                    "T || Mi hermano trabajó. || My brother worked.",
                    "T || Mi hermano llamó a su abuela. || My brother called his grandma."
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
                    "Q || Why did Emma cook dinner? || Because her family was hungry.",
                    "Q || Why did Leo clean the room? || Because the room was dirty.",
                    "Q || What did your dad do last weekend? || He worked.",
                    "Q || Where did your mom call her grandma? || She called her grandma at home.",
                    "Q || When did your brother finish a project? || He finished a project before lunch.",
                    "Q || What did your dad do last night? || He cooked dinner.",
                    "F || He ____ dinner yesterday. || cooked || cook / cooks",
                    "F || She ____ a project yesterday. || finished || finish / finishes",
                    "T || Ella cocinó la cena. || She cooked dinner.",
                    "T || Él limpió el cuarto. || He cleaned the room.",
                    "T || Él trabajó. || He worked.",
                    "T || Ella llamó a su abuela. || She called her grandma.",
                    "T || Mi hermana llamó a su abuela. || My sister called her grandma.",
                    "T || Mi hermana cocinó la cena. || My sister cooked dinner."
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
                    "Q || What time did Emma cook dinner? || She cooked dinner at four o'clock.",
                    "Q || What time did Leo clean the room? || He cleaned the room at six thirty.",
                    "Q || What time did your mom work? || She worked at eight o'clock.",
                    "Q || What did your mom do last weekend? || She called her grandma.",
                    "Q || Where did your brother finish a project? || He finished a project at home.",
                    "Q || When did your dad cook dinner? || He cooked dinner at six o'clock.",
                    "Q || What did your sister do last night? || She cleaned the room.",
                    "F || She ____ her grandma yesterday. || called || call / calls",
                    "F || He ____ a project at home yesterday. || finished || finish / finishes",
                    "T || Él cocinó la cena. || He cooked dinner.",
                    "T || Él limpió el cuarto. || He cleaned the room.",
                    "T || Él trabajó. || He worked.",
                    "T || Él llamó a su abuela. || He called his grandma.",
                    "T || Mi hermano cocinó la cena. || My brother cooked dinner.",
                    "T || Mi hermana cocinó la cena. || My sister cooked dinner."
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
                    "Q || Say a sentence with \"at night\". || I read at night.",
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
                    "Q || Say a sentence with \"at night\". || I read at night.",
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
                    "Q || Say a sentence with \"at night\". || I read at night.",
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
                    "Q || What did Leo do last weekend? || He had a party.",
                    "T || Ella hizo una fiesta. || She had a party.",
                    "Q || What did your teacher do last weekend? || He walked around the zoo.",
                    "T || Él caminó por el zoológico. || He walked around the zoo.",
                    "Q || What did your mom cook for her family? || She cooked dinner.",
                    "T || Él cocinó la cena. || He cooked dinner.",
                    "Q || Complete: I play soccer ____ the morning. || I play soccer in the morning.",
                    "Q || When do you have English class? || I have English class on Monday.",
                    "F || She ____ dinner yesterday. || cooked || cook / cooks",
                    "F || He ____ dinner yesterday. || cooked || cook / cooks",
                    "Q || Where does the parrot talk? || It talks at home.",
                    "Q || Complete: She is ____. (take a nap) || She is taking a nap.",
                    "Q || When is Leo going to pay for a snack? || He is going to pay for a snack in the afternoon.",
                    "Q || Make a simple past sentence with \"She\" and \"wake up\". || She woke up.",
                    "H || 🎨 || Name the action. || Paint",
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
                    "Q || Say a sentence with \"at night\". || I read at night.",
                    "F || My name ____ Leo. || is || am / are",
                    "F || I ____ breakfast. || eat || eats / eating",
                    "Q || Spell the word \"oval\". || O-V-A-L.",
                    "Q || Make a present progressive sentence with \"They\" and \"swing\". || They are swinging.",
                    "Q || What are you doing while you write in your notebook? || I am taking notes.",
                    "Q || Spell the word \"left\". || L-E-F-T.",
                    "S || green oval:3, rectangle:2 || How many ovals are there? || There are three ovals.",
                    "H || ⬅️ || Name the direction. || Left"
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
      }
    ]
  }
];
