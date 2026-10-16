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
                  "H || 🌅 || Which greeting matches the morning picture? || Good morning!",
                  "H || 🌙 || It is bedtime. Which greeting matches the hidden picture? || Good night!"
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
                  "H || 🇨🇴 || Say the country. || Colombia.",
                  "H || 🇲🇽 || Say the country. || Mexico."
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
                  "H || star:3 || How many objects are hidden? || Three.",
                  "H || circle:5 || How many objects are hidden? || Five."
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
                  "Q || What letter comes after E? || F.",
                  "Q || What letter comes after G? || H.",
                  "Q || Spell your first name. || M-I-A.",
                  "Q || What is the first letter of your name? || M.",
                  "H || 🅰️ || What letter is hidden? || A.",
                  "H || 🅱️ || What letter is hidden? || B."
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
                  "Q || What letter comes after S? || T.",
                  "Q || What letter comes after V? || W.",
                  "Q || Spell your first name. || M-I-A.",
                  "Q || What is the first letter of your name? || M.",
                  "H || 🅰️ || What letter is hidden? || A.",
                  "H || 🅱️ || What letter is hidden? || B."
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
                  "H || 🔴 || What color is this? || It is red.",
                  "H || 🔵 || What color is this? || It is blue."
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
                  "H || 🍦 || Name the hidden food. || Ice cream.",
                  "H || 🍔 || Name the hidden food. || A hamburger."
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
                  "H || 🍌 || Name the hidden fruit. || A banana.",
                  "H || 🍎 || Name the hidden fruit. || An apple."
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
                  "H || 🟢 || What color is this? || It is green.",
                  "H || 🌭 || Name the hidden food. || A hot dog."
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
                  "H || 🟠 || What color is this? || It is orange.",
                  "H || 🍟 || Name the hidden food. || French fries."
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
                  "H || 👨 || What is he? || He is a man.",
                  "H || 👩 || What is she? || She is a woman."
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
                  "H || 👩 || Name the hidden person. || A woman.",
                  "H || 👦 || Name the hidden person. || A boy."
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
                  "H || 😊 || How is he? || He is happy.",
                  "H || 😠 || How is she? || She is angry."
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
                  "H || 👩 || What is she? || She is a woman.",
                  "H || 👨 || What is he? || He is a man."
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
                  "H || 👧 || What is she? || She is a girl.",
                  "H || 😊 || How is he? || He is happy."
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
                  "H || 🥗 || Name the hidden food. || Salad.",
                  "H || 🍲 || Name the hidden food. || Soup."
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
                  "H || 💧 || Name this drink. || Water.",
                  "H || 🥛 || Name this drink. || Milk."
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
                  "Q || What letter comes after V? || W.",
                  "Q || What letter comes after G? || H.",
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
                  "H || 🍎 || Name the hidden fruit. || An apple.",
                  "H || 😠 || How is she? || She is angry."
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
                  "H || 🔴 || What color is this? || It is red.",
                  "H || 👨 || What is he? || He is a man."
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
                  "H || 🍔 || Name the hidden food. || A hamburger.",
                  "H || ☕ || Name this drink. || Coffee."
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
                  "Q || What do you do after a soccer game? || I take a shower.",
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
                  "H || 🚿 || Use \"I\" to describe the hidden activity every day. || I take a shower.",
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up."
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
                  "H || 🚿 || Use \"I\" to describe the hidden activity every day. || I take a shower.",
                  "H || 🍳 || Name an action suggested by the hidden picture. || Eat breakfast."
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
                  "Q || What do you do at the end of the day? || I go to sleep.",
                  "Q || What do you do on school days? || I wake up.",
                  "Q || What do you do after a soccer game? || I take a shower.",
                  "Q || Where do you eat breakfast? || I eat breakfast in the kitchen.",
                  "Q || When do you brush your teeth? || I brush my teeth after breakfast.",
                  "Q || What do you do at nine o'clock? || I go to sleep.",
                  "F || I ____ to sleep. || go || goes / going",
                  "F || I ____ up. || wake || wakes / waking",
                  "T || Yo me despierto. || I wake up.",
                  "T || Yo me ducho. || I take a shower.",
                  "T || Yo desayuno. || I eat breakfast.",
                  "T || Yo me cepillo los dientes. || I brush my teeth.",
                  "H || 🚿 || Use \"I\" to describe the hidden activity every day. || I take a shower.",
                  "H || 🍳 || Name an action suggested by the hidden picture. || Eat breakfast."
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
                  "H || 🚿 || Use \"I\" to describe the hidden activity every day. || I take a shower.",
                  "H || 🪥 || Name an action suggested by the hidden picture. || Brush my teeth."
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
                  "Q || What do you do after a soccer game? || I take a shower.",
                  "Q || What do you do before school? || I eat breakfast.",
                  "F || I ____ my teeth. || brush || brushes / brushing",
                  "F || I ____ my teeth after breakfast. || brush || brushes / brushing",
                  "Q || When do you brush your teeth? || I brush my teeth after breakfast.",
                  "Q || When do you go to sleep? || I go to sleep at nine o'clock.",
                  "Q || What do you do in the bathroom? || I take a shower.",
                  "Q || What do you do at seven o'clock? || I wake up.",
                  "H || 🍳 || Name an action suggested by the hidden picture. || Eat breakfast.",
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up."
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
                  "H || ✍️ || Use \"I\" to describe the hidden activity every day. || I write a story.",
                  "H || 📚 || Name an action suggested by the hidden picture. || Learn English."
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
                  "H || ✍️ || Use \"I\" to describe the hidden activity every day. || I write a story.",
                  "H || 🏃 || Name an action suggested by the hidden picture. || Run."
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
                  "Q || What do you do when you have free time? || I play games.",
                  "Q || What do you drink when you are thirsty? || I drink water.",
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
                  "H || ✍️ || Use \"I\" to describe the hidden activity every day. || I write a story.",
                  "H || 🏃 || Name an action suggested by the hidden picture. || Run."
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
                  "H || ✍️ || Use \"I\" to describe the hidden activity every day. || I write a story.",
                  "H || 🎲 || Name an action suggested by the hidden picture. || Play games."
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
                  "H || 🏃 || Name an action suggested by the hidden picture. || Run.",
                  "H || 📚 || Name an action suggested by the hidden picture. || Learn English."
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
                  "Q || What does your best friend do when she hears her favorite song? || She sings.",
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
                  "H || 🎨 || Use \"He\" to describe the hidden activity every day. || He paints a picture.",
                  "H || 💃 || Use \"He\" to describe the hidden activity every day. || He dances."
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
                  "H || 🎨 || Use \"He\" to describe the hidden activity every day. || He paints a picture.",
                  "H || 💃 || Use \"She\" to describe the hidden activity every day. || She dances."
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
                  "Q || What does your mom do before friends visit? || She cleans the room.",
                  "Q || What does your brother do when he hears his favorite song? || He sings.",
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
                  "H || 🎨 || Use \"She\" to describe the hidden activity every day. || She paints a picture.",
                  "H || 💃 || Use \"He\" to describe the hidden activity every day. || He dances."
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
                  "H || 🎨 || Use \"He\" to describe the hidden activity every day. || He paints a picture.",
                  "H || 💃 || Use \"He\" to describe the hidden activity every day. || He dances."
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
                  "H || 🎨 || Use \"He\" to describe the hidden activity every day. || He paints a picture.",
                  "H || 💃 || Use \"She\" to describe the hidden activity every day. || She dances."
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
                  "Q || What do you do after a soccer game? || I take a shower.",
                  "Q || What do you do before school? || I eat breakfast.",
                  "Q || What do you do on a sunny afternoon? || I run.",
                  "Q || What do you do when you have free time? || I play games.",
                  "Q || What do you drink when you are thirsty? || I drink water.",
                  "Q || What do you do at seven o'clock? || I wake up.",
                  "Q || Do you take a shower on weekends? || Yes, I take a shower. / No, I don't take a shower.",
                  "F || I ____ up. || wake || wakes / waking",
                  "F || I ____ a shower. || take || takes / taking",
                  "T || Yo me despierto. || I wake up.",
                  "T || Yo me ducho. || I take a shower.",
                  "T || Yo desayuno. || I eat breakfast.",
                  "T || Yo corro. || I run.",
                  "H || 🚿 || Use \"I\" to describe the hidden activity every day. || I take a shower.",
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up."
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
                  "Q || What does your dad do when he hears his favorite song? || He sings.",
                  "Q || Where does your sister paint a picture? || She paints a picture in the art room.",
                  "Q || When does your best friend dance? || She dances on weekends.",
                  "Q || What does Emma do before bed? || She reads a book.",
                  "F || He ____ at four o'clock. || dances || dance / dancing",
                  "F || She ____ a book at six thirty. || reads || read / reading",
                  "T || Ella canta. || She sings.",
                  "T || Él pinta un cuadro. || He paints a picture.",
                  "T || Él baila. || He dances.",
                  "T || Ella lee un libro. || She reads a book.",
                  "H || 🎨 || Use \"She\" to describe the hidden activity every day. || She paints a picture.",
                  "H || 💃 || Use \"He\" to describe the hidden activity every day. || He dances."
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
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. How old is Mia? || She is ten.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. What does Mia do after school? || She sings after school.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. When does Mia paint? || She paints on Saturdays.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. What does Mia do before bed? || She reads before bed.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. Who is Mia's best friend? || Leo is her best friend.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. Where does Leo dance? || He dances at home.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. When does Leo clean his room? || He cleans his room on Sundays.",
                  "Q || Mia is ten. She sings after school, paints on Saturdays and reads before bed. Her best friend Leo dances at home and cleans his room on Sundays. Does Mia read before bed? || Yes, she reads before bed.",
                  "F || She ____ on Saturdays. || paints || paint / painting",
                  "F || She ____ before bed. || reads || read / reading",
                  "Q || What does your best friend do when they are happy? || My best friend dances.",
                  "Q || Tell us two things your best friend does. || My best friend sings and paints.",
                  "T || Ella canta después de la escuela. || She sings after school.",
                  "T || Él baila en casa. || He dances at home.",
                  "H || 🍎 || Name the hidden fruit. || An apple.",
                  "H || 🍌 || Name the hidden fruit. || A banana."
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
                  "Q || What does your best friend do when she hears her favorite song? || She sings.",
                  "T || Él canta. || He sings.",
                  "Q || What do you do after a soccer game? || I take a shower.",
                  "T || Yo me ducho. || I take a shower.",
                  "F || He ____. || sings || sing / singing",
                  "F || I ____ a shower. || take || takes / taking",
                  "Q || Complete: I am ____ Colombia. || I am from Colombia.",
                  "Q || Say your name, then spell it. || My name is Mia. M-I-A.",
                  "T || una manzana || an apple",
                  "Q || Describe a story character with \"angry\". || She is angry.",
                  "H || 👧 || What is she? || She is a girl.",
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up."
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
                  "H || 🍳 || Name an action suggested by the hidden picture. || Eat breakfast.",
                  "H || 🪥 || Name an action suggested by the hidden picture. || Brush my teeth."
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
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up.",
                  "H || 🍳 || Name an action suggested by the hidden picture. || Cook dinner."
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
                  "H || 🍳 || Name an action suggested by the hidden picture. || Cook dinner.",
                  "H || 💻 || Name an action suggested by the hidden picture. || Work."
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
                  "Q || What does your dad do when he wants to relax? || He watches TV.",
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
                  "H || 💻 || Name an action suggested by the hidden picture. || Work.",
                  "H || 🏋️ || Name an action suggested by the hidden picture. || Exercise."
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
                  "H || 📺 || Name an action suggested by the hidden picture. || Watch TV.",
                  "H || 🍳 || Name an action suggested by the hidden picture. || Cook dinner."
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
                  "H || 💻 || Name an action suggested by the hidden picture. || Work.",
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up."
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
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up.",
                  "H || 💻 || Name an action suggested by the hidden picture. || Work."
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
                  "H || 🍳 || Name an action suggested by the hidden picture. || Cook dinner.",
                  "H || 💻 || Name an action suggested by the hidden picture. || Work."
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
                  "Q || What does your sister do when she wants to relax? || She watches TV.",
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
                  "H || 💻 || Name an action suggested by the hidden picture. || Work.",
                  "H || 🏋️ || Name an action suggested by the hidden picture. || Exercise."
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
                  "H || 🏋️ || Name an action suggested by the hidden picture. || Exercise.",
                  "H || 📺 || Name an action suggested by the hidden picture. || Watch TV."
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
                  "H || 🏋️ || Name an action suggested by the hidden picture. || Exercise.",
                  "H || 💻 || Name an action suggested by the hidden picture. || Work."
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
                  "Q || What does your brother do when he meets his friends? || He plays soccer.",
                  "Q || What does your dad drink when he is thirsty? || He drinks water.",
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
                  "H || ⚽ || Use \"He\" to describe the hidden activity every day. || He plays soccer.",
                  "H || 🏋️ || Name an action suggested by the hidden picture. || Exercise."
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
                  "H || ⚽ || Use \"She\" to describe the hidden activity every day. || She plays soccer.",
                  "H || 💧 || Name an action suggested by the hidden picture. || Drink water."
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
                  "Q || What does your dad drink when he is thirsty? || He drinks water.",
                  "Q || What does your sister do on sports day? || She wins a race.",
                  "Q || What does your best friend do during a school vacation? || She travels.",
                  "Q || What does Emma do after work? || She exercises.",
                  "Q || What does Leo do when he meets his friends? || He plays soccer.",
                  "Q || Where does your teacher drink water? || He drinks water at home.",
                  "Q || When does your mom win a race? || She wins a race on sports day.",
                  "Q || What does your brother do during vacation? || He travels.",
                  "F || She ____. || travels || travel / traveling",
                  "F || She ____ at home. || exercises || exercise / exercising",
                  "T || Ella hace ejercicio. || She exercises.",
                  "T || Ella juega fútbol. || She plays soccer.",
                  "T || Él bebe agua. || He drinks water.",
                  "T || Él gana una carrera. || He wins a race.",
                  "H || ⚽ || Use \"She\" to describe the hidden activity every day. || She plays soccer.",
                  "H || 💧 || Name an action suggested by the hidden picture. || Drink water."
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
                  "Q || What does your teacher drink when he is thirsty? || He drinks water.",
                  "Q || Where does your mom win a race? || She wins a race at school.",
                  "Q || When does your brother travel? || He travels during vacation.",
                  "Q || What does your dad do in the morning? || He exercises.",
                  "F || He ____ water with his brother. || drinks || drink / drinking",
                  "F || He ____ water. || drinks || drink / drinking",
                  "T || Ella hace ejercicio. || She exercises.",
                  "T || Él juega fútbol. || He plays soccer.",
                  "T || Él bebe agua. || He drinks water.",
                  "T || Ella gana una carrera. || She wins a race.",
                  "H || ⚽ || Use \"She\" to describe the hidden activity every day. || She plays soccer.",
                  "H || 🧳 || Name an action suggested by the hidden picture. || Travel."
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
                  "Q || What does Leo do when he meets his friends? || He plays soccer.",
                  "Q || What does your teacher drink when he is thirsty? || He drinks water.",
                  "F || He ____ soccer. || plays || play / playing",
                  "F || He ____ a race. || wins || win / winning",
                  "Q || When does your mom win a race? || She wins a race on sports day.",
                  "Q || Complete: He ____. (drink water) || He drinks water.",
                  "Q || What does your teacher do in the park? || He plays soccer.",
                  "Q || What does your mom do in the morning? || She exercises.",
                  "H || 💧 || Name an action suggested by the hidden picture. || Drink water.",
                  "H || 🏋️ || Name an action suggested by the hidden picture. || Exercise."
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
                  "Q || What do you do after a soccer game? || I take a shower.",
                  "Q || What do you do before school? || I eat breakfast.",
                  "Q || What do you do before bed? || I brush my teeth.",
                  "Q || What do you do at the end of the day? || I go to sleep.",
                  "Q || What do you do at seven o'clock? || I wake up.",
                  "Q || What do you do in the morning? || I take a shower.",
                  "Q || What do you do at seven thirty? || I eat breakfast.",
                  "F || I ____ up. || wake || wakes / waking",
                  "F || I ____ a shower. || take || takes / taking",
                  "T || Yo me despierto. || I wake up.",
                  "T || Yo me ducho. || I take a shower.",
                  "T || Yo desayuno. || I eat breakfast.",
                  "T || Yo me cepillo los dientes. || I brush my teeth.",
                  "H || 🚿 || Use \"I\" to describe the hidden activity every day. || I take a shower.",
                  "H || ⏰ || Name an action suggested by the hidden picture. || Wake up."
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
                  "H || 🍳 || Name an action suggested by the hidden picture. || Cook dinner.",
                  "H || 💻 || Name an action suggested by the hidden picture. || Work."
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
                  "Q || What does your sister drink when she is thirsty? || She drinks water.",
                  "Q || What does your best friend do on sports day? || She wins a race.",
                  "Q || What does Emma do during a school vacation? || She travels.",
                  "Q || What does Leo do after work? || He exercises.",
                  "Q || What does your teacher do when he meets his friends? || He plays soccer.",
                  "Q || Where does your mom drink water? || She drinks water at home.",
                  "Q || When does your brother win a race? || He wins a race on sports day.",
                  "Q || What does your dad do during vacation? || He travels.",
                  "F || She ____. || travels || travel / traveling",
                  "F || He ____. || exercises || exercise / exercising",
                  "T || Ella hace ejercicio. || She exercises.",
                  "T || Él juega fútbol. || He plays soccer.",
                  "T || Él bebe agua. || He drinks water.",
                  "T || Ella gana una carrera. || She wins a race.",
                  "H || ⚽ || Use \"She\" to describe the hidden activity every day. || She plays soccer.",
                  "H || 💧 || Name an action suggested by the hidden picture. || Drink water."
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
                  "Q || Make a simple present sentence with \"I\" and \"brush my teeth\". || I brush my teeth.",
                  "H || 🎨 || Use \"He\" to describe the hidden activity every day. || He paints a picture.",
                  "H || ⚪ || What color is this? || It is white."
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
                  "Q || Make a simple present sentence with \"I\" and \"take a shower\". || I take a shower.",
                  "T || un perro caliente || a hot dog",
                  "Q || Make a simple present sentence with \"I\" and \"wake up\". || I wake up.",
                  "H || 💻 || Name an action suggested by the hidden picture. || Work.",
                  "H || 🍳 || Name an action suggested by the hidden picture. || Cook dinner."
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
                  "H || circle:2 || What is hidden? || There are two circles.",
                  "H || star:1 || What shape is hidden? || It's a star.",
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
                  "H || heart:3 || What is hidden? || There are three hearts.",
                  "H || triangle:2 || What is hidden? || There are two triangles.",
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
                  "H || oval:1, square:2 || What shapes are hidden? || There is one oval and two squares.",
                  "H || rectangle:3 || What is hidden? || There are three rectangles.",
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
                  "H || 👩‍⚕️ || What is her profession? || She is a doctor.",
                  "H || 🧑‍🚒 || What is his profession? || He is a firefighter.",
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
                  "H || 👩‍🚀 || What is her profession? || She is an astronaut.",
                  "H || 🐶🩺 || Who helps animals? || A vet helps animals.",
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
      }
    ]
  }
];
