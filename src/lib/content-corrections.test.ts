import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/content";
import { chairDeck, drawItems, getDay } from "./content";

// Approved targeted corrections: review IDs are test references, never curriculum fields.
const corrections: [string, number, number, number, number, string, string, boolean][] = [
  [
    "L0-W1-D2-11",
    0,
    1,
    2,
    10,
    "E || 🇧🇷 || ¿Qué país es? || Brazil.",
    "T || Soy de Brasil. || I am from Brazil.",
    false
  ],
  [
    "L0-W1-D2-12",
    0,
    1,
    2,
    11,
    "E || 🇪🇸 || ¿Qué país es? || Spain.",
    "T || Soy de España. || I am from Spain.",
    false
  ],
  [
    "L0-W1-D2-15",
    0,
    1,
    2,
    14,
    "H || 🇨🇴 || ¿Qué país es? || Colombia",
    "T || Soy de México. || I am from Mexico.",
    false
  ],
  [
    "L0-W1-D2-16",
    0,
    1,
    2,
    15,
    "H || 🇲🇽 || ¿Qué país es? || Mexico",
    "T || ¿De dónde eres? || Where are you from?",
    false
  ],
  [
    "L0-W1-D4-15",
    0,
    1,
    4,
    14,
    "H || 🅰️ || ¿Qué letra es? || A",
    "H || 🅰️ || Encuentra la letra escondida. || A",
    false
  ],
  [
    "L0-W1-D4-16",
    0,
    1,
    4,
    15,
    "H || 🅱️ || ¿Qué letra es? || B",
    "H || 🅱️ || Encuentra la letra escondida. || B",
    false
  ],
  [
    "L0-W1-D4-18",
    0,
    1,
    4,
    1,
    "M || Corrige: The letter after G is [I]. || J / H* / I || The letter after G is H.",
    "M || Corrige: I [ma] Ana. || ma / am* / an || I am Ana.",
    true
  ],
  [
    "L0-W1-D4-17",
    0,
    1,
    4,
    0,
    "M || Corrige: The letter after E is [G]. || G / H / F* || The letter after E is F.",
    "M || Corrige: My [naem] is Mia. || naem / name* / neme || My name is Mia.",
    true
  ],
  [
    "L0-W1-D4-09",
    0,
    1,
    4,
    8,
    "F || The letter after A is ____. || B || C / D",
    "Q || What letter is it: B? || B",
    false
  ],
  [
    "L0-W1-D4-10",
    0,
    1,
    4,
    9,
    "F || The letter after C is ____. || D || E / F",
    "Q || What letter is it: D? || D",
    false
  ],
  [
    "L0-W1-D4-11",
    0,
    1,
    4,
    10,
    "Q || ¿Qué letra es: F? || F",
    "Q || What letter is it: F? || F",
    false
  ],
  [
    "L0-W1-D4-12",
    0,
    1,
    4,
    11,
    "Q || ¿Qué letra es: H? || H",
    "Q || What letter is it: H? || H",
    false
  ],
  [
    "L0-W1-D5-15",
    0,
    1,
    5,
    14,
    "H || 🅰️ || ¿Qué letra es? || A",
    "H || 🅰️ || Encuentra la letra escondida. || A",
    false
  ],
  [
    "L0-W1-D5-16",
    0,
    1,
    5,
    15,
    "H || 🅱️ || ¿Qué letra es? || B",
    "H || 🅱️ || Encuentra la letra escondida. || B",
    false
  ],
  [
    "L0-W1-D5-18",
    0,
    1,
    5,
    1,
    "M || Corrige: The letter after S is [U]. || T* / U / V || The letter after S is T.",
    "M || Corrige: I am [form] Colombia. || form / from* / fram || I am from Colombia.",
    true
  ],
  [
    "L0-W1-D5-17",
    0,
    1,
    5,
    0,
    "M || Corrige: The letter after Q is [S]. || T / R* / S || The letter after Q is R.",
    "M || Corrige: My name [si] Luis. || si / is* / iz || My name is Luis.",
    true
  ],
  [
    "L0-W1-D5-09",
    0,
    1,
    5,
    8,
    "F || The letter after M is ____. || N || O / P",
    "Q || What letter is it: N? || N",
    false
  ],
  [
    "L0-W1-D5-10",
    0,
    1,
    5,
    9,
    "F || The letter after O is ____. || P || Q / R",
    "Q || What letter is it: P? || P",
    false
  ],
  [
    "L0-W1-D5-11",
    0,
    1,
    5,
    10,
    "Q || ¿Qué letra es: T? || T",
    "Q || What letter is it: T? || T",
    false
  ],
  [
    "L0-W1-D5-12",
    0,
    1,
    5,
    11,
    "Q || ¿Qué letra es: W? || W",
    "Q || What letter is it: W? || W",
    false
  ],
  [
    "L0-W2-D1-15",
    0,
    2,
    1,
    14,
    "H || 🔴 || ¿Qué color es? || Red",
    "H || 🔴 || Encuentra el color escondido. || Red",
    false
  ],
  [
    "L0-W2-D1-16",
    0,
    2,
    1,
    15,
    "H || 🔵 || ¿Qué color es? || Blue",
    "H || 🔵 || Encuentra el color escondido. || Blue",
    false
  ],
  [
    "L0-W2-D1-02",
    0,
    2,
    1,
    1,
    "Q || Elige entre negro y naranja. ¿Cuál es tu color favorito? || My favorite color is orange.",
    "Q || What is your favorite color: black or orange? || My favorite color is black. / My favorite color is orange.",
    false
  ],
  [
    "L0-W2-D1-01",
    0,
    2,
    1,
    0,
    "Q || Elige entre naranja y amarillo. ¿Cuál es tu color favorito? || My favorite color is yellow.",
    "Q || What is your favorite color: orange or yellow? || My favorite color is orange. / My favorite color is yellow.",
    false
  ],
  [
    "L0-W2-D1-12",
    0,
    2,
    1,
    11,
    "Q || ¿Cuál es tu color favorito? || My favorite color is red.",
    "Q || What is your favorite color? || My favorite color is red.",
    false
  ],
  [
    "L0-W2-D2-16",
    0,
    2,
    2,
    15,
    "H || 🍔 || ¿Qué comida es? || Hamburger",
    "H || 🍔 || Encuentra la comida escondida. || Hamburger",
    false
  ],
  [
    "L0-W2-D2-15",
    0,
    2,
    2,
    14,
    "H || 🍦 || ¿Qué comida es? || Ice cream",
    "H || 🍦 || Encuentra la comida escondida. || Ice cream",
    false
  ],
  [
    "L0-W2-D3-09",
    0,
    2,
    3,
    8,
    "F || My favorite fruit ____ banana. || is || am / are",
    "F || My favorite fruit ____ apple. || is || am / are",
    false
  ],
  [
    "L0-W2-D3-15",
    0,
    2,
    3,
    14,
    "H || 🍌 || ¿Qué fruta es? || Banana",
    "H || 🍍 || Encuentra la fruta escondida. || Pineapple",
    false
  ],
  [
    "L0-W2-D3-16",
    0,
    2,
    3,
    15,
    "H || 🍎 || ¿Qué fruta es? || Apple",
    "H || 🍎 || Encuentra la fruta escondida. || Apple",
    false
  ],
  [
    "L0-W2-D3-14",
    0,
    2,
    3,
    13,
    "Q || Elige entre banano y naranja. ¿Cuál es tu fruta favorita? || My favorite fruit is orange.",
    "Q || Elige entre sandía y naranja. ¿Cuál es tu fruta favorita? || My favorite fruit is watermelon. / My favorite fruit is orange.",
    false
  ],
  [
    "L0-W2-D3-01",
    0,
    2,
    3,
    0,
    "Q || Elige entre manzana y banano. ¿Cuál es tu fruta favorita? || My favorite fruit is banana.",
    "Q || ¿Cuál es tu fruta favorita? || My favorite fruit is watermelon. / My favorite fruit is pineapple.",
    false
  ],
  [
    "L0-W2-D3-06",
    0,
    2,
    3,
    5,
    "T || un banano || a banana",
    "T || una piña || a pineapple",
    false
  ],
  [
    "L0-W2-D4-01",
    0,
    2,
    4,
    0,
    "E || 🍌 || ¿Qué fruta es? || A banana.",
    "E || 🍍 || ¿Qué fruta es? || A pineapple.",
    false
  ],
  [
    "L0-W2-D4-16",
    0,
    2,
    4,
    15,
    "H || 🌭 || ¿Qué comida es? || Hot dog",
    "H || 🌭 || Encuentra la comida escondida. || Hot dog",
    false
  ],
  [
    "L0-W2-D4-15",
    0,
    2,
    4,
    14,
    "H || 🟢 || ¿Qué color es? || Green",
    "H || 🟢 || Encuentra el color escondido. || Green",
    false
  ],
  [
    "L0-W2-D4-06",
    0,
    2,
    4,
    5,
    "Q || Elige entre banano y naranja. ¿Cuál es tu fruta favorita? || My favorite fruit is orange.",
    "Q || Elige entre manzana y naranja. ¿Cuál es tu fruta favorita? || My favorite fruit is apple. / My favorite fruit is orange.",
    false
  ],
  [
    "L0-W2-D4-02",
    0,
    2,
    4,
    1,
    "Q || ¿Cuál es tu color favorito? || My favorite color is red.",
    "Q || What is your favorite color? || My favorite color is red.",
    false
  ],
  [
    "L0-W2-D5-16",
    0,
    2,
    5,
    15,
    "H || 🍟 || ¿Qué comida es? || French fries",
    "H || 🍟 || Encuentra la comida escondida. || French fries",
    false
  ],
  [
    "L0-W2-D5-15",
    0,
    2,
    5,
    14,
    "H || 🟠 || ¿Qué color es? || Orange",
    "H || 🟠 || Encuentra el color escondido. || Orange",
    false
  ],
  [
    "L0-W2-D5-07",
    0,
    2,
    5,
    6,
    "Q || Elige entre negro y naranja. ¿Cuál es tu color favorito? || My favorite color is orange.",
    "Q || What is your favorite color: black or orange? || My favorite color is black. / My favorite color is orange.",
    false
  ],
  [
    "L0-W3-D1-15",
    0,
    3,
    1,
    14,
    "H || 👨 || Name the person. || Man",
    "H || 👨 || Guess the hidden person! || Man",
    false
  ],
  [
    "L0-W3-D1-16",
    0,
    3,
    1,
    15,
    "H || 👩 || Name the person. || Woman",
    "H || 👩 || Guess the hidden person! || Woman",
    false
  ],
  [
    "L0-W3-D1-14",
    0,
    3,
    1,
    13,
    "Q || Use \"he\" and \"boy\" in a sentence. || He is a boy.",
    "Q || Is your dad a man? || Yes, he is a man.",
    false
  ],
  [
    "L0-W3-D1-13",
    0,
    3,
    1,
    12,
    "Q || Use \"she\" and \"girl\" in a sentence. || She is a girl.",
    "Q || Is your mom a woman? || Yes, she is a woman.",
    false
  ],
  [
    "L0-W3-D2-16",
    0,
    3,
    2,
    15,
    "H || 👦 || Name the person. || Boy",
    "H || 👦 || Guess the hidden person! || Boy",
    false
  ],
  [
    "L0-W3-D2-15",
    0,
    3,
    2,
    14,
    "H || 👩 || Name the person. || Woman",
    "H || 👩 || Guess the hidden person! || Woman",
    false
  ],
  [
    "L0-W3-D2-13",
    0,
    3,
    2,
    12,
    "Q || Introduce an imaginary brother. || He is my brother.",
    "Q || What is your brother's name? || His name is Leo.",
    false
  ],
  [
    "L0-W3-D2-05",
    0,
    3,
    2,
    4,
    "Q || Introduce an imaginary dad. || He is my dad.",
    "Q || What is your dad's name? || His name is Luis.",
    false
  ],
  [
    "L0-W3-D2-01",
    0,
    3,
    2,
    0,
    "Q || Introduce an imaginary mom. || She is my mom.",
    "Q || What is your mom's name? || Her name is Ana.",
    false
  ],
  [
    "L0-W3-D2-12",
    0,
    3,
    2,
    11,
    "Q || Make a sentence with \"my sister\". || She is my sister.",
    "T || Ella es mi hermana. || She is my sister.",
    false
  ],
  [
    "L0-W3-D2-04",
    0,
    3,
    2,
    3,
    "Q || Make a sentence with \"my mom\". || She is my mom.",
    "T || Mi mamá es Ana. || My mom is Ana.",
    false
  ],
  [
    "L0-W3-D2-08",
    0,
    3,
    2,
    7,
    "Q || Make a sentence with \"my dad\". || He is my dad.",
    "T || Mi papá es Luis. || My dad is Luis.",
    false
  ],
  [
    "L0-W3-D3-15",
    0,
    3,
    3,
    14,
    "H || 😊 || Name the adjective. || Happy",
    "H || 😊 || Guess the hidden adjective! || Happy",
    false
  ],
  [
    "L0-W3-D3-16",
    0,
    3,
    3,
    15,
    "H || 😠 || Name the adjective. || Angry",
    "H || 😠 || Guess the hidden adjective! || Angry",
    false
  ],
  [
    "L0-W3-D3-13",
    0,
    3,
    3,
    12,
    "Q || Say two things about an imaginary mom. || She is pretty and intelligent.",
    "T || Ella es bonita e inteligente. || She is pretty and intelligent.",
    false
  ],
  [
    "L0-W3-D3-05",
    0,
    3,
    3,
    4,
    "Q || Describe a story character with \"intelligent\". || She is intelligent.",
    "T || Mi hermana es inteligente. || My sister is intelligent.",
    false
  ],
  [
    "L0-W3-D3-07",
    0,
    3,
    3,
    6,
    "Q || Describe a story character with \"happy\". || He is happy.",
    "T || Mi hermano está feliz. || My brother is happy.",
    false
  ],
  [
    "L0-W3-D3-01",
    0,
    3,
    3,
    0,
    "Q || Describe a story character with \"pretty\". || She is pretty.",
    "T || Mi mamá es bonita. || My mom is pretty.",
    false
  ],
  [
    "L0-W3-D3-03",
    0,
    3,
    3,
    2,
    "Q || Describe a story character with \"handsome\". || He is handsome.",
    "T || Mi papá es guapo. || My dad is handsome.",
    false
  ],
  [
    "L0-W3-D3-14",
    0,
    3,
    3,
    13,
    "Q || Say two things about an imaginary dad. || He is handsome and happy.",
    "T || Él es guapo y está feliz. || He is handsome and happy.",
    false
  ],
  [
    "L0-W3-D4-16",
    0,
    3,
    4,
    15,
    "H || 👨 || Name the person. || Man",
    "H || 👨 || Guess the hidden person! || Man",
    false
  ],
  [
    "L0-W3-D4-15",
    0,
    3,
    4,
    14,
    "H || 👩 || Name the person. || Woman",
    "H || 👩 || Guess the hidden person! || Woman",
    false
  ],
  [
    "L0-W3-D4-01",
    0,
    3,
    4,
    0,
    "Q || Describe a story character with \"pretty\". || She is pretty.",
    "T || Ella es bonita. || She is pretty.",
    false
  ],
  [
    "L0-W3-D4-11",
    0,
    3,
    4,
    10,
    "Q || Introduce an imaginary sister. || She is my sister.",
    "T || Ella es mi hermana. || She is my sister.",
    false
  ],
  [
    "L0-W3-D4-14",
    0,
    3,
    4,
    13,
    "Q || Introduce an imaginary mom. || She is my mom.",
    "T || Ella es mi mamá. || She is my mom.",
    false
  ],
  [
    "L0-W3-D4-12",
    0,
    3,
    4,
    11,
    "Q || Describe a story character with \"angry\". || She is angry.",
    "T || Ella está enojada. || She is angry.",
    false
  ],
  [
    "L0-W3-D4-06",
    0,
    3,
    4,
    5,
    "Q || Say two things about an imaginary dad. || He is handsome and happy.",
    "T || Él es guapo y está feliz. || He is handsome and happy.",
    false
  ],
  [
    "L0-W3-D4-03",
    0,
    3,
    4,
    2,
    "Q || Describe a story character with \"handsome\". || He is handsome.",
    "T || Él es guapo. || He is handsome.",
    false
  ],
  [
    "L0-W3-D4-04",
    0,
    3,
    4,
    3,
    "Q || Use \"he\" and \"boy\" in a sentence. || He is a boy.",
    "T || Él es un niño. || He is a boy.",
    false
  ],
  [
    "L0-W3-D5-15",
    0,
    3,
    5,
    14,
    "H || 👧 || Name the person. || Girl",
    "H || 👧 || Guess the hidden person! || Girl",
    false
  ],
  [
    "L0-W3-D5-16",
    0,
    3,
    5,
    15,
    "H || 😊 || Name the adjective. || Happy",
    "H || 😊 || Guess the hidden adjective! || Happy",
    false
  ],
  [
    "L0-W3-D5-01",
    0,
    3,
    5,
    0,
    "Q || Use \"she\" and \"girl\" in a sentence. || She is a girl.",
    "Q || Is your sister a girl? || Yes, she is a girl.",
    false
  ],
  [
    "L0-W3-D5-03",
    0,
    3,
    5,
    2,
    "Q || Say two things about an imaginary mom. || She is pretty and intelligent.",
    "T || Ella es bonita e inteligente. || She is pretty and intelligent.",
    false
  ],
  [
    "L0-W3-D5-06",
    0,
    3,
    5,
    5,
    "Q || Describe a story character with \"intelligent\". || She is intelligent.",
    "T || Ella es inteligente. || She is intelligent.",
    false
  ],
  [
    "L0-W3-D5-08",
    0,
    3,
    5,
    7,
    "Q || Make a sentence with \"my brother\". || He is my brother.",
    "T || Mi hermano es Luis. || My brother is Luis.",
    false
  ],
  [
    "L0-W3-D5-11",
    0,
    3,
    5,
    10,
    "Q || Make a sentence with \"my dad\". || He is my dad.",
    "T || Mi papá es Carlos. || My dad is Carlos.",
    false
  ],
  [
    "L0-W3-D5-02",
    0,
    3,
    5,
    1,
    "Q || Introduce an imaginary brother. || He is my brother.",
    "T || Él es mi hermano. || He is my brother.",
    false
  ],
  [
    "L0-W3-D5-05",
    0,
    3,
    5,
    4,
    "Q || Introduce an imaginary dad. || He is my dad.",
    "T || Él es mi papá. || He is my dad.",
    false
  ],
  [
    "L0-W4-D1-16",
    0,
    4,
    1,
    15,
    "H || 🍲 || Name the food. || Soup",
    "H || 🍲 || Guess the hidden food! || Soup",
    false
  ],
  [
    "L0-W4-D1-15",
    0,
    4,
    1,
    14,
    "H || 🥗 || Name the food. || Salad",
    "H || 🥗 || Guess the hidden food! || Salad",
    false
  ],
  [
    "L0-W4-D2-15",
    0,
    4,
    2,
    14,
    "H || 💧 || Name the drink. || Water",
    "H || 💧 || Guess the hidden drink! || Water",
    false
  ],
  [
    "L0-W4-D2-16",
    0,
    4,
    2,
    15,
    "H || 🥛 || Name the drink. || Milk",
    "H || 🥛 || Guess the hidden drink! || Milk",
    false
  ],
  [
    "L0-W4-D3-15",
    0,
    4,
    3,
    14,
    "H || 🍎 || Name the fruit. || Apple",
    "H || 🍎 || Guess the hidden fruit! || Apple",
    false
  ],
  [
    "L0-W4-D3-16",
    0,
    4,
    3,
    15,
    "H || 😠 || Name the adjective. || Angry",
    "H || 😠 || Guess the hidden adjective! || Angry",
    false
  ],
  [
    "L0-W4-D3-11",
    0,
    4,
    3,
    10,
    "E || 🇪🇸 || Say the country. || Spain.",
    "T || Soy de España. || I am from Spain.",
    false
  ],
  [
    "L0-W4-D4-16",
    0,
    4,
    4,
    15,
    "H || 👨 || Name the person. || Man",
    "H || 👨 || Guess the hidden person! || Man",
    false
  ],
  [
    "L0-W4-D4-15",
    0,
    4,
    4,
    14,
    "H || 🔴 || What color is it? || Red",
    "H || 🔴 || Guess the hidden color! || Red",
    false
  ],
  [
    "L0-W4-D5-16",
    0,
    4,
    5,
    15,
    "H || ☕ || Name the drink. || Coffee",
    "H || ☕ || Guess the hidden drink! || Coffee",
    false
  ],
  [
    "L0-W4-D5-15",
    0,
    4,
    5,
    14,
    "H || 🍔 || Name the food. || Hamburger",
    "H || 🍔 || Guess the hidden food! || Hamburger",
    false
  ],
  [
    "L0-W4-D5-06",
    0,
    4,
    5,
    5,
    "Q || Make a sentence with \"my sister\". || She is my sister.",
    "T || Ella es mi hermana. || She is my sister.",
    false
  ],
  [
    "L1-W1-D1-01",
    1,
    1,
    1,
    0,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W1-D3-04",
    1,
    1,
    3,
    3,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W1-D5-03",
    1,
    1,
    5,
    2,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W2-D1-15",
    1,
    2,
    1,
    14,
    "H || ✍️ || Name the action. || Write",
    "H || ✍️ || Guess the action! || Write",
    false
  ],
  [
    "L1-W2-D2-15",
    1,
    2,
    2,
    14,
    "H || ✍️ || Name the action. || Write",
    "H || ✍️ || Guess the action! || Write",
    false
  ],
  [
    "L1-W2-D2-16",
    1,
    2,
    2,
    15,
    "H || 🏃 || Name the action. || Run",
    "H || 🏃 || Guess the action! || Run",
    false
  ],
  [
    "L1-W2-D3-15",
    1,
    2,
    3,
    14,
    "H || ✍️ || Name the action. || Write",
    "H || ✍️ || Guess the action! || Write",
    false
  ],
  [
    "L1-W2-D3-16",
    1,
    2,
    3,
    15,
    "H || 🏃 || Name the action. || Run",
    "H || 🏃 || Guess the action! || Run",
    false
  ],
  [
    "L1-W2-D4-15",
    1,
    2,
    4,
    14,
    "H || ✍️ || Name the action. || Write",
    "H || ✍️ || Guess the action! || Write",
    false
  ],
  [
    "L1-W2-D5-15",
    1,
    2,
    5,
    14,
    "H || 🏃 || Name the action. || Run",
    "H || 🏃 || Guess the action! || Run",
    false
  ],
  [
    "L1-W3-D1-16",
    1,
    3,
    1,
    15,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L1-W3-D1-15",
    1,
    3,
    1,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W3-D1-02",
    1,
    3,
    1,
    1,
    "Q || What does Emma do during art time? || She paints a picture.",
    "Q || What does your aunt do during art time? || She paints a picture.",
    false
  ],
  [
    "L1-W3-D1-03",
    1,
    3,
    1,
    2,
    "Q || What does Leo do at a party? || He dances.",
    "Q || What does your cousin do at a party? || He dances.",
    false
  ],
  [
    "L1-W3-D2-16",
    1,
    3,
    2,
    15,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L1-W3-D2-15",
    1,
    3,
    2,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W3-D2-02",
    1,
    3,
    2,
    1,
    "Q || Does Leo dance? || Yes, he does. / No, he doesn't.",
    "Q || Does your brother dance? || Yes, he does. / No, he doesn't.",
    false
  ],
  [
    "L1-W3-D2-01",
    1,
    3,
    2,
    0,
    "Q || Does Emma paint a picture? || Yes, she does. / No, she doesn't.",
    "Q || Does your cousin paint a picture? || Yes, she does. / No, she doesn't.",
    false
  ],
  [
    "L1-W3-D3-16",
    1,
    3,
    3,
    15,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L1-W3-D3-15",
    1,
    3,
    3,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W3-D3-08",
    1,
    3,
    3,
    7,
    "Q || What does Emma do on Saturday mornings? || She cleans the room.",
    "Q || What does your aunt do on Saturday mornings? || She cleans the room.",
    false
  ],
  [
    "L1-W3-D3-01",
    1,
    3,
    3,
    0,
    "Q || What does Leo do at a party? || He dances.",
    "Q || What does your cousin do at a party? || He dances.",
    false
  ],
  [
    "L1-W3-D4-10",
    1,
    3,
    4,
    9,
    "F || She ____. || dances || dance / dancing",
    "F || She ____ at a party. || dances || dance / dancing",
    false
  ],
  [
    "L1-W3-D4-16",
    1,
    3,
    4,
    15,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L1-W3-D4-15",
    1,
    3,
    4,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W3-D4-06",
    1,
    3,
    4,
    5,
    "Q || Where does your best friend read a book? || She reads a book in the library.",
    "Q || Does your best friend read at night? || Yes, she does. / No, she doesn't.",
    false
  ],
  [
    "L1-W3-D4-03",
    1,
    3,
    4,
    2,
    "Q || Where does your brother sing? || He sings at home.",
    "Q || What does Shakira do on stage? || She sings on stage.",
    false
  ],
  [
    "L1-W3-D4-08",
    1,
    3,
    4,
    7,
    "Q || What does Leo do after school? || He sings.",
    "Q || What does your brother do in art class? || He paints a picture in art class.",
    false
  ],
  [
    "L1-W3-D4-05",
    1,
    3,
    4,
    4,
    "Q || What does your sister do at a party? || She dances.",
    "Q || What does your sister do at a party? || She dances at the party.",
    false
  ],
  [
    "L1-W3-D4-07",
    1,
    3,
    4,
    6,
    "Q || When does Emma clean the room? || She cleans the room on Saturday mornings.",
    "Q || When does your sister clean the room? || She cleans the room on Saturday mornings.",
    false
  ],
  [
    "L1-W3-D4-04",
    1,
    3,
    4,
    3,
    "Q || Where does your dad paint a picture? || He paints a picture in the art room.",
    "Q || Where does your dad paint a picture? || He paints a picture at home.",
    false
  ],
  [
    "L1-W3-D4-13",
    1,
    3,
    4,
    12,
    "T || Ella baila. || She dances.",
    "T || Ella baila con su hermana. || She dances with her sister.",
    false
  ],
  [
    "L1-W3-D4-14",
    1,
    3,
    4,
    13,
    "T || Ella lee un libro. || She reads a book.",
    "T || Ella lee un libro por la noche. || She reads a book at night.",
    false
  ],
  [
    "L1-W3-D4-11",
    1,
    3,
    4,
    10,
    "T || Él canta. || He sings.",
    "T || Él canta en casa. || He sings at home.",
    false
  ],
  [
    "L1-W3-D4-12",
    1,
    3,
    4,
    11,
    "T || Él pinta un cuadro. || He paints a picture.",
    "T || Él pinta un cuadro en la escuela. || He paints a picture at school.",
    false
  ],
  [
    "L1-W3-D5-16",
    1,
    3,
    5,
    15,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L1-W3-D5-15",
    1,
    3,
    5,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W3-D5-07",
    1,
    3,
    5,
    6,
    "Q || When does Leo sing? || He sings after school.",
    "Q || When does your brother sing? || He sings after school.",
    false
  ],
  [
    "L1-W3-D5-06",
    1,
    3,
    5,
    5,
    "Q || Where does Emma clean the room? || She cleans the room at home.",
    "Q || Where does your best friend clean the room? || She cleans the room at home.",
    false
  ],
  [
    "L1-W4-D1-01",
    1,
    4,
    1,
    0,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W4-D2-16",
    1,
    4,
    2,
    15,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L1-W4-D2-15",
    1,
    4,
    2,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W4-D2-08",
    1,
    4,
    2,
    7,
    "Q || What does Emma do before bed? || She reads a book.",
    "Q || What does your cousin do before bed? || She reads a book.",
    false
  ],
  [
    "L1-W4-D2-01",
    1,
    4,
    2,
    0,
    "Q || What time does Leo paint a picture? || He paints a picture at seven o'clock.",
    "Q || What time does your best friend paint a picture? || He paints a picture at seven o'clock.",
    false
  ],
  [
    "L1-W4-D4-15",
    1,
    4,
    4,
    14,
    "H || 👧 || Name the person. || Girl",
    "H || 👧 || Guess the hidden person! || Girl",
    false
  ],
  [
    "L1-W4-D4-01",
    1,
    4,
    4,
    0,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W4-D4-14",
    1,
    4,
    4,
    13,
    "Q || Describe a story character with \"angry\". || She is angry.",
    "T || Ella está enojada. || She is angry.",
    false
  ],
  [
    "L1-W4-D5-05",
    1,
    4,
    5,
    4,
    "Q || Does Leo dance? || Yes, he does. / No, he doesn't.",
    "Q || Does your brother dance? || Yes, he does. / No, he doesn't.",
    false
  ],
  [
    "L1-W5-D1-08",
    1,
    5,
    1,
    7,
    "Q || What does Emma do in the kitchen? || She cooks dinner.",
    "Q || What does your cousin do in the kitchen? || She cooks dinner.",
    false
  ],
  [
    "L1-W5-D1-01",
    1,
    5,
    1,
    0,
    "Q || What does Leo do on school days? || He wakes up.",
    "Q || What time does your cousin wake up on school days? || He wakes up at six thirty.",
    false
  ],
  [
    "L1-W5-D2-08",
    1,
    5,
    2,
    7,
    "Q || What does Leo do at seven o'clock? || He wakes up.",
    "Q || What does your brother do at seven o'clock? || He wakes up.",
    false
  ],
  [
    "L1-W5-D2-07",
    1,
    5,
    2,
    6,
    "Q || What does Emma do in the morning? || She exercises.",
    "Q || What does your cousin do in the morning? || She exercises.",
    false
  ],
  [
    "L1-W5-D3-16",
    1,
    5,
    3,
    15,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L1-W5-D3-02",
    1,
    5,
    3,
    1,
    "Q || What does your brother do after work? || He exercises.",
    "Q || What does your brother do after school? || He exercises.",
    false
  ],
  [
    "L1-W5-D3-04",
    1,
    5,
    3,
    3,
    "Q || What does your sister do on school days? || She wakes up.",
    "Q || What time does your sister wake up on school days? || She wakes up at six thirty.",
    false
  ],
  [
    "L1-W5-D3-07",
    1,
    5,
    3,
    6,
    "Q || When does Leo exercise? || He exercises in the morning.",
    "Q || When does your uncle exercise? || He exercises in the morning.",
    false
  ],
  [
    "L1-W5-D4-06",
    1,
    5,
    4,
    5,
    "Q || Where does Leo exercise? || He exercises in the park.",
    "Q || Where does your brother exercise? || He exercises in the park.",
    false
  ],
  [
    "L1-W5-D5-14",
    1,
    5,
    5,
    13,
    "Q || What does Leo do at seven o'clock? || He wakes up.",
    "Q || What does your brother do at seven o'clock? || He wakes up.",
    false
  ],
  [
    "L1-W5-D5-13",
    1,
    5,
    5,
    12,
    "Q || What does Emma do in the kitchen? || She cooks dinner.",
    "Q || What does your cousin do in the kitchen? || She cooks dinner.",
    false
  ],
  [
    "L1-W5-D5-03",
    1,
    5,
    5,
    2,
    "Q || What does your sister do on school days? || She wakes up.",
    "Q || What time does your sister wake up on school days? || She wakes up at six thirty.",
    false
  ],
  [
    "L1-W5-D5-11",
    1,
    5,
    5,
    10,
    "Q || When does Leo exercise? || He exercises in the morning.",
    "Q || When does your uncle exercise? || He exercises in the morning.",
    false
  ],
  [
    "L1-W6-D1-03",
    1,
    6,
    1,
    2,
    "Q || What does your brother do after work? || He exercises.",
    "Q || What does your brother do after school? || He exercises.",
    false
  ],
  [
    "L1-W6-D1-07",
    1,
    6,
    1,
    6,
    "Q || What does Emma do at home? || She wakes up.",
    "Q || What does your cousin do at home? || She wakes up.",
    false
  ],
  [
    "L1-W6-D1-01",
    1,
    6,
    1,
    0,
    "Q || What does your teacher do on school days? || He wakes up.",
    "Q || What time does your teacher wake up on school days? || He wakes up at six thirty.",
    false
  ],
  [
    "L1-W6-D2-06",
    1,
    6,
    2,
    5,
    "Q || Does Emma cook dinner on weekends? || Yes, she does. / No, she doesn't.",
    "Q || Does your sister cook dinner on weekends? || Yes, she does. / No, she doesn't.",
    false
  ],
  [
    "L1-W6-D3-16",
    1,
    6,
    3,
    15,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L1-W6-D3-05",
    1,
    6,
    3,
    4,
    "Q || What does Emma cook for her family? || She cooks dinner.",
    "Q || What does your best friend cook for her family? || She cooks dinner.",
    false
  ],
  [
    "L1-W6-D3-04",
    1,
    6,
    3,
    3,
    "Q || What does your best friend do on school days? || She wakes up.",
    "Q || What time does your best friend wake up on school days? || She wakes up at six thirty.",
    false
  ],
  [
    "L1-W6-D4-15",
    1,
    6,
    4,
    14,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L1-W6-D4-04",
    1,
    6,
    4,
    3,
    "Q || When does Emma cook dinner? || She cooks dinner at six o'clock.",
    "Q || When does your aunt cook dinner? || She cooks dinner at six o'clock.",
    false
  ],
  [
    "L1-W6-D5-15",
    1,
    6,
    5,
    14,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L1-W6-D5-07",
    1,
    6,
    5,
    6,
    "Q || What does Emma cook for her family? || She cooks dinner.",
    "Q || What does your best friend cook for her family? || She cooks dinner.",
    false
  ],
  [
    "L1-W6-D5-03",
    1,
    6,
    5,
    2,
    "Q || What does your best friend do on school days? || She wakes up.",
    "Q || What time does your best friend wake up on school days? || She wakes up at six thirty.",
    false
  ],
  [
    "L1-W6-D5-04",
    1,
    6,
    5,
    3,
    "Q || When does Emma cook dinner? || She cooks dinner at six o'clock.",
    "Q || When does your aunt cook dinner? || She cooks dinner at six o'clock.",
    false
  ],
  [
    "L1-W7-D1-16",
    1,
    7,
    1,
    15,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L1-W7-D1-06",
    1,
    7,
    1,
    5,
    "Q || What does Emma do after exercise? || She drinks water.",
    "Q || What does your cousin do after exercise? || She drinks water.",
    false
  ],
  [
    "L1-W7-D1-07",
    1,
    7,
    1,
    6,
    "Q || What does Leo do in the park? || He exercises.",
    "Q || What does your cousin do in the park? || He exercises.",
    false
  ],
  [
    "L1-W7-D2-05",
    1,
    7,
    2,
    4,
    "Q || Does Emma play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
    "Q || Does your aunt play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
    false
  ],
  [
    "L1-W7-D2-06",
    1,
    7,
    2,
    5,
    "Q || Does Leo drink water on weekends? || Yes, he drinks water. / No, he doesn't drink water.",
    "Q || Does your uncle drink water on weekends? || Yes, he drinks water. / No, he doesn't drink water.",
    false
  ],
  [
    "L1-W7-D3-04",
    1,
    7,
    3,
    3,
    "Q || What does Emma do after work? || She exercises.",
    "Q || What does your best friend do after work? || She exercises.",
    false
  ],
  [
    "L1-W7-D3-05",
    1,
    7,
    3,
    4,
    "Q || What does Leo do at the park? || He plays soccer.",
    "Q || What does your brother do at the park? || He plays soccer.",
    false
  ],
  [
    "L1-W7-D4-04",
    1,
    7,
    4,
    3,
    "Q || Who does Leo drink water with? || He drinks water with his brother.",
    "Q || Who does your cousin drink water with? || He drinks water with his brother.",
    false
  ],
  [
    "L1-W7-D4-03",
    1,
    7,
    4,
    2,
    "Q || Who does Emma play soccer with? || She plays soccer with her cousin.",
    "Q || Who does your sister play soccer with? || She plays soccer with her cousin.",
    false
  ],
  [
    "L1-W7-D5-16",
    1,
    7,
    5,
    15,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L1-W7-D5-06",
    1,
    7,
    5,
    5,
    "Q || Does Emma play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
    "Q || Does your aunt play soccer every day? || Yes, she plays soccer. / No, she doesn't play soccer.",
    false
  ],
  [
    "L1-W7-D5-07",
    1,
    7,
    5,
    6,
    "Q || What does Leo do at the park? || He plays soccer.",
    "Q || What does your brother do at the park? || He plays soccer.",
    false
  ],
  [
    "L1-W7-D5-04",
    1,
    7,
    5,
    3,
    "Q || Who does Leo drink water with? || He drinks water with his brother.",
    "Q || Who does your cousin drink water with? || He drinks water with his brother.",
    false
  ],
  [
    "L1-W8-D1-01",
    1,
    8,
    1,
    0,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W8-D2-04",
    1,
    8,
    2,
    3,
    "Q || What time does Emma watch TV? || She watches TV at eight o'clock.",
    "Q || What time does your best friend watch TV? || She watches TV at eight o'clock.",
    false
  ],
  [
    "L1-W8-D2-05",
    1,
    8,
    2,
    4,
    "Q || What does Leo do on school days? || He wakes up.",
    "Q || What time does your cousin wake up on school days? || He wakes up at six thirty.",
    false
  ],
  [
    "L1-W8-D3-04",
    1,
    8,
    3,
    3,
    "Q || What does Leo do after work? || He exercises.",
    "Q || What does your best friend do after work? || He exercises.",
    false
  ],
  [
    "L1-W8-D3-03",
    1,
    8,
    3,
    2,
    "Q || What does Emma do on vacation? || She travels.",
    "Q || What does your cousin do on vacation? || She travels.",
    false
  ],
  [
    "L1-W8-D4-16",
    1,
    8,
    4,
    15,
    "H || ⚪ || What color is it? || White",
    "H || ⚪ || Guess the hidden color! || White",
    false
  ],
  [
    "L1-W8-D4-15",
    1,
    8,
    4,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L1-W8-D4-07",
    1,
    8,
    4,
    6,
    "Q || What do you do on school days? || I wake up.",
    "Q || What time do you wake up on school days? || I wake up at six thirty.",
    false
  ],
  [
    "L1-W8-D4-01",
    1,
    8,
    4,
    0,
    "Q || What does Leo do on school days? || He wakes up.",
    "Q || What time does your cousin wake up on school days? || He wakes up at six thirty.",
    false
  ],
  [
    "L1-W8-D4-03",
    1,
    8,
    4,
    2,
    "Q || What does your teacher do on school days? || He wakes up.",
    "Q || What time does your teacher wake up on school days? || He wakes up at six thirty.",
    false
  ],
  [
    "L1-W8-D4-14",
    1,
    8,
    4,
    13,
    "Q || Use \"I\" and \"brush my teeth\". || I brush my teeth.",
    "T || Yo me cepillo los dientes. || I brush my teeth.",
    false
  ],
  [
    "L1-W8-D5-12",
    1,
    8,
    5,
    11,
    "Q || Use \"I\" and \"take a shower\". || I take a shower.",
    "T || Yo me baño. || I take a shower.",
    false
  ],
  [
    "L1-W8-D5-14",
    1,
    8,
    5,
    13,
    "Q || Use \"I\" and \"wake up\". || I wake up.",
    "T || Yo me despierto. || I wake up.",
    false
  ],
  [
    "L2-W1-D1-16",
    2,
    1,
    1,
    15,
    "H || 🥕 || Name the vegetable. || Carrot",
    "H || 🥕 || Guess the hidden vegetable! || Carrot",
    false
  ],
  [
    "L2-W1-D1-15",
    2,
    1,
    1,
    14,
    "H || 🥭 || Name the fruit. || Mango",
    "H || 🥭 || Guess the hidden fruit! || Mango",
    false
  ],
  [
    "L2-W1-D2-15",
    2,
    1,
    2,
    14,
    "H || 🥔 || Name the vegetable. || Potato",
    "H || 🥔 || Guess the hidden vegetable! || Potato",
    false
  ],
  [
    "L2-W1-D2-16",
    2,
    1,
    2,
    15,
    "H || 🧅 || Name the vegetable. || Onion",
    "H || 🧅 || Guess the hidden vegetable! || Onion",
    false
  ],
  [
    "L2-W1-D3-16",
    2,
    1,
    3,
    15,
    "H || 🍇 || Name the fruit. || Grapes",
    "H || 🍇 || Guess the hidden fruit! || Grapes",
    false
  ],
  [
    "L2-W1-D3-15",
    2,
    1,
    3,
    14,
    "H || 🥕 || Name the vegetable. || Carrot",
    "H || 🥕 || Guess the hidden vegetable! || Carrot",
    false
  ],
  [
    "L2-W1-D4-16",
    2,
    1,
    4,
    15,
    "H || 🍓 || Name the fruit. || Strawberry",
    "H || 🍓 || Guess the hidden fruit! || Strawberry",
    false
  ],
  [
    "L2-W1-D4-15",
    2,
    1,
    4,
    14,
    "H || 🧅 || Name the vegetable. || Onion",
    "H || 🧅 || Guess the hidden vegetable! || Onion",
    false
  ],
  [
    "L2-W1-D5-15",
    2,
    1,
    5,
    14,
    "H || 🥕 || Name the vegetable. || Carrot",
    "H || 🥕 || Guess the hidden vegetable! || Carrot",
    false
  ],
  [
    "L2-W1-D5-16",
    2,
    1,
    5,
    15,
    "H || 🧅 || Name the vegetable. || Onion",
    "H || 🧅 || Guess the hidden vegetable! || Onion",
    false
  ],
  [
    "L2-W2-D1-16",
    2,
    2,
    1,
    15,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L2-W2-D1-03",
    2,
    2,
    1,
    2,
    "Q || What does Emma do on a hot day? || She swims.",
    "Q || What does your aunt do on a hot day? || She swims.",
    false
  ],
  [
    "L2-W2-D1-04",
    2,
    2,
    1,
    3,
    "Q || What does Leo do on Saturdays? || He plays games.",
    "Q || What does your best friend do on Saturdays? || He plays games.",
    false
  ],
  [
    "L2-W2-D2-16",
    2,
    2,
    2,
    15,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L2-W2-D2-03",
    2,
    2,
    2,
    2,
    "Q || Does Leo ride a bike? || Yes, he rides a bike. / No, he doesn't ride a bike.",
    "Q || Does your best friend ride a bike? || Yes, he rides a bike. / No, he doesn't ride a bike.",
    false
  ],
  [
    "L2-W2-D2-02",
    2,
    2,
    2,
    1,
    "Q || Does Emma swim? || Yes, she swims. / No, she doesn't swim.",
    "Q || Does your best friend swim? || Yes, she swims. / No, she doesn't swim.",
    false
  ],
  [
    "L2-W2-D3-16",
    2,
    2,
    3,
    15,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L2-W2-D3-01",
    2,
    2,
    3,
    0,
    "Q || What does Emma do on a hot day? || She swims.",
    "Q || What does your aunt do on a hot day? || She swims.",
    false
  ],
  [
    "L2-W2-D3-02",
    2,
    2,
    3,
    1,
    "Q || What does Leo do on a sunny morning? || He rides a bike.",
    "Q || What does your best friend do on a sunny morning? || He rides a bike.",
    false
  ],
  [
    "L2-W2-D4-16",
    2,
    2,
    4,
    15,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L2-W2-D4-08",
    2,
    2,
    4,
    7,
    "Q || What does Emma do after school? || She listens to music.",
    "Q || What does your cousin do after school? || She listens to music.",
    false
  ],
  [
    "L2-W2-D4-01",
    2,
    2,
    4,
    0,
    "Q || When does Leo ride a bike? || He rides a bike after school.",
    "Q || When does your uncle ride a bike? || He rides a bike after school.",
    false
  ],
  [
    "L2-W2-D5-15",
    2,
    2,
    5,
    14,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L2-W3-D1-16",
    2,
    3,
    1,
    15,
    "H || 🏃 || Name the action. || Run",
    "H || 🏃 || Guess the action! || Run",
    false
  ],
  [
    "L2-W3-D1-04",
    2,
    3,
    1,
    3,
    "Q || What does the cat do in the afternoon? || It climbs a tree.",
    "Q || What does a cat do in the afternoon? || It climbs a tree.",
    false
  ],
  [
    "L2-W3-D1-01",
    2,
    3,
    1,
    0,
    "Q || What does the cat do in the garden? || It climbs a tree.",
    "Q || What does a cat do in the garden? || It climbs a tree.",
    false
  ],
  [
    "L2-W3-D1-07",
    2,
    3,
    1,
    6,
    "Q || What does the cat do on Sundays? || It climbs a tree.",
    "Q || What does a cat do on Sundays? || It climbs a tree.",
    false
  ],
  [
    "L2-W3-D1-03",
    2,
    3,
    1,
    2,
    "Q || What does the rabbit do during a game? || It jumps.",
    "Q || What does a rabbit do during a game? || It jumps.",
    false
  ],
  [
    "L2-W3-D1-06",
    2,
    3,
    1,
    5,
    "Q || What does the rabbit do in the morning? || It jumps.",
    "Q || What does a rabbit do in the morning? || It jumps.",
    false
  ],
  [
    "L2-W3-D1-05",
    2,
    3,
    1,
    4,
    "Q || What does your dog do after school? || It runs.",
    "Q || What does your dog do when you get home? || My dog runs to me.",
    false
  ],
  [
    "L2-W3-D2-15",
    2,
    3,
    2,
    14,
    "H || 🏃 || Name the action. || Run",
    "H || 🏃 || Guess the action! || Run",
    false
  ],
  [
    "L2-W3-D2-04",
    2,
    3,
    2,
    3,
    "Q || Does the cat climb a tree? || Yes, it climbs a tree. / No, it doesn't climb a tree.",
    "Q || Does a cat climb a tree? || Yes, it climbs a tree. / No, it doesn't climb a tree.",
    false
  ],
  [
    "L2-W3-D2-06",
    2,
    3,
    2,
    5,
    "Q || Does the rabbit jump on weekends? || Yes, it jumps. / No, it doesn't jump.",
    "Q || Does a rabbit jump in the grass? || Yes, it jumps in the grass. / No, it does not jump in the grass.",
    false
  ],
  [
    "L2-W3-D2-02",
    2,
    3,
    2,
    1,
    "Q || Does the rabbit jump? || Yes, it jumps. / No, it doesn't jump.",
    "Q || Does a rabbit jump? || Yes, it jumps. / No, it doesn't jump.",
    false
  ],
  [
    "L2-W3-D2-08",
    2,
    3,
    2,
    7,
    "Q || What does the cat do in the afternoon? || It climbs a tree.",
    "Q || What does a cat do in the afternoon? || It climbs a tree.",
    false
  ],
  [
    "L2-W3-D3-16",
    2,
    3,
    3,
    15,
    "H || 🚶 || Name the action. || Walk",
    "H || 🚶 || Guess the action! || Walk",
    false
  ],
  [
    "L2-W3-D3-04",
    2,
    3,
    3,
    3,
    "Q || What does the cat do in the garden? || It climbs a tree.",
    "Q || What does a cat do in the garden? || It climbs a tree.",
    false
  ],
  [
    "L2-W3-D3-03",
    2,
    3,
    3,
    2,
    "Q || What does the parrot do at home? || It talks.",
    "Q || What does a parrot do at home? || It talks.",
    false
  ],
  [
    "L2-W3-D3-08",
    2,
    3,
    3,
    7,
    "Q || What does the parrot do after school? || It talks.",
    "Q || What does a parrot do with its voice? || It talks.",
    false
  ],
  [
    "L2-W3-D3-01",
    2,
    3,
    3,
    0,
    "Q || What does the rabbit do during a game? || It jumps.",
    "Q || What does a rabbit do during a game? || It jumps.",
    false
  ],
  [
    "L2-W3-D3-06",
    2,
    3,
    3,
    5,
    "Q || Where does the rabbit jump? || It jumps in the park.",
    "Q || Where does a rabbit jump? || It jumps in the park.",
    false
  ],
  [
    "L2-W3-D4-15",
    2,
    3,
    4,
    14,
    "H || 🚶 || Name the action. || Walk",
    "H || 🚶 || Guess the action! || Walk",
    false
  ],
  [
    "L2-W3-D4-07",
    2,
    3,
    4,
    6,
    "Q || When does the parrot talk on Sundays? || It talks after school.",
    "Q || Does a parrot talk at night? || Yes, it talks at night. / No, it does not talk at night.",
    false
  ],
  [
    "L2-W3-D4-08",
    2,
    3,
    4,
    7,
    "Q || What does the cat do in the afternoon? || It climbs a tree.",
    "Q || What does a cat do in the afternoon? || It climbs a tree.",
    false
  ],
  [
    "L2-W3-D4-05",
    2,
    3,
    4,
    4,
    "Q || What does the rabbit do during a game? || It jumps.",
    "Q || What does a rabbit do during a game? || It jumps.",
    false
  ],
  [
    "L2-W3-D4-03",
    2,
    3,
    4,
    2,
    "Q || When does the cat climb a tree? || It climbs a tree in the afternoon.",
    "Q || When does a cat climb a tree? || It climbs a tree in the afternoon.",
    false
  ],
  [
    "L2-W3-D4-02",
    2,
    3,
    4,
    1,
    "Q || When does the parrot talk? || It talks after school.",
    "Q || When does a parrot talk? || It talks after school.",
    false
  ],
  [
    "L2-W3-D5-08",
    2,
    3,
    5,
    7,
    "Q || What does your dog do after school? || It runs.",
    "Q || What does your dog do when you get home? || My dog runs to me.",
    false
  ],
  [
    "L2-W3-D5-07",
    2,
    3,
    5,
    6,
    "Q || When does the cat climb a tree? || It climbs a tree in the afternoon.",
    "Q || When does a cat climb a tree? || It climbs a tree in the afternoon.",
    false
  ],
  [
    "L2-W3-D5-06",
    2,
    3,
    5,
    5,
    "Q || Where does the parrot talk? || It talks at home.",
    "Q || Where does a parrot talk? || It talks at home.",
    false
  ],
  [
    "L2-W3-D5-01",
    2,
    3,
    5,
    0,
    "Q || Who does the parrot talk with? || It talks with its family.",
    "Q || Who does a parrot talk with? || It talks with its family.",
    false
  ],
  [
    "L2-W3-D5-04",
    2,
    3,
    5,
    3,
    "Q || Who does the rabbit jump with? || It jumps with its brother.",
    "Q || Who does your dog play with? || My dog plays with me.",
    false
  ],
  [
    "L2-W3-D5-02",
    2,
    3,
    5,
    1,
    "Q || Who does the cat climb a tree with? || It climbs a tree with its friends.",
    "Q || Who does your dog walk with? || My dog walks with my dad.",
    false
  ],
  [
    "CONTENT-EXCEPTION-01",
    2,
    5,
    1,
    8,
    "Q || Do you want to be a vet or a firefighter? || I want to be a vet.",
    "Q || Do you want to be a vet? || Yes, I do. / No, I don't.",
    false
  ],
  [
    "L2-W6-D1-05",
    2,
    6,
    1,
    4,
    "Q || Make a sentence: toy car / on / bed. || The toy car is on the bed.",
    "T || El carro de juguete está sobre la cama. || The toy car is on the bed.",
    false
  ],
  [
    "L2-W6-D1-03",
    2,
    6,
    1,
    2,
    "Q || Make a sentence: cat / under / chair. || The cat is under the chair.",
    "T || El gato está debajo de la silla. || The cat is under the chair.",
    false
  ],
  [
    "L2-W6-D1-02",
    2,
    6,
    1,
    1,
    "Q || Make a sentence: book / on / table. || The book is on the table.",
    "T || El libro está sobre la mesa. || The book is on the table.",
    false
  ],
  [
    "L2-W6-D1-04",
    2,
    6,
    1,
    3,
    "Q || Make a sentence: pencil / in / bag. || The pencil is in the bag.",
    "T || El lápiz está dentro de la caja. || The pencil is in the box.",
    false
  ],
  [
    "L2-W6-D1-07",
    2,
    6,
    1,
    6,
    "Q || Make a sentence: dog / in / box. || The dog is in the box.",
    "T || El perro está debajo de la mesa. || The dog is under the table.",
    false
  ],
  [
    "L2-W6-D1-08",
    2,
    6,
    1,
    7,
    "Q || Make a sentence: bag / on / chair. || The bag is on the chair.",
    "T || La mochila está sobre la silla. || The bag is on the chair.",
    false
  ],
  [
    "L2-W6-D1-01",
    2,
    6,
    1,
    0,
    "Q || Make a sentence: ball / in / box. || The ball is in the box.",
    "T || La pelota está dentro de la caja. || The ball is in the box.",
    false
  ],
  [
    "L2-W6-D1-06",
    2,
    6,
    1,
    5,
    "Q || Make a sentence: cup / under / table. || The cup is under the table.",
    "T || La taza está debajo de la silla. || The cup is under the chair.",
    false
  ],
  [
    "L2-W6-D2-02",
    2,
    6,
    2,
    1,
    "Q || Scene: The cat is on the chair. Is the cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
    "Q || Scene: The cat is on the chair. Is a cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
    false
  ],
  [
    "L2-W6-D2-01",
    2,
    6,
    2,
    0,
    "Q || Scene: The book is in the table. Is the book in the table? || Yes, the book is in the table.",
    "Q || The book is on the table. Is the book on the table? || Yes, the book is on the table.",
    false
  ],
  [
    "L2-W6-D2-05",
    2,
    6,
    2,
    4,
    "Q || Scene: The cup is in the table. Is the cup in the table? || Yes, the cup is in the table.",
    "Q || The cup is on the table. Is the cup under the table? || No, the cup is not under the table.",
    false
  ],
  [
    "L2-W6-D3-06",
    2,
    6,
    3,
    5,
    "Q || Scene: The bag is in the chair. Where is the bag? || The bag is in the chair.",
    "Q || The bag is on the chair. Where is the bag? || The bag is on the chair.",
    false
  ],
  [
    "L2-W6-D3-01",
    2,
    6,
    3,
    0,
    "Q || Scene: The cat is in the chair. Where is the cat? || The cat is in the chair.",
    "Q || The cat is on the chair. Where is the cat? || The cat is on the chair.",
    false
  ],
  [
    "L2-W6-D5-06",
    2,
    6,
    5,
    5,
    "Q || Scene: The cup is in the table. Is the cup in the table? || Yes, the cup is in the table.",
    "Q || The cup is on the table. Is the cup under the table? || No, the cup is not under the table.",
    false
  ],
  [
    "L2-W6-D5-05",
    2,
    6,
    5,
    4,
    "Q || Make a sentence: toy car / on / bed. || The toy car is on the bed.",
    "T || El carro de juguete está sobre la cama. || The toy car is on the bed.",
    false
  ],
  [
    "L2-W6-D5-11",
    2,
    6,
    5,
    10,
    "Q || Say a sentence about a book using \"behind\". || The book is behind the box.",
    "T || El libro está detrás de la caja. || The book is behind the box.",
    false
  ],
  [
    "L2-W6-D5-13",
    2,
    6,
    5,
    12,
    "Q || Make a sentence: bag / on / chair. || The bag is on the chair.",
    "T || La mochila está sobre la silla. || The bag is on the chair.",
    false
  ],
  [
    "L2-W7-D1-15",
    2,
    7,
    1,
    14,
    "H || 👀 || Name the body part. || Eyes",
    "H || 👀 || Guess the hidden body part! || Eyes",
    false
  ],
  [
    "L2-W7-D1-16",
    2,
    7,
    1,
    15,
    "H || 👂 || Name the body part. || Ear",
    "H || 👂 || Guess the hidden body part! || Ear",
    false
  ],
  [
    "L2-W7-D2-15",
    2,
    7,
    2,
    14,
    "H || 👀 || Name the body part. || Eyes",
    "H || 👀 || Guess the hidden body part! || Eyes",
    false
  ],
  [
    "L2-W7-D2-16",
    2,
    7,
    2,
    15,
    "H || 👂 || Name the body part. || Ear",
    "H || 👂 || Guess the hidden body part! || Ear",
    false
  ],
  [
    "L2-W7-D3-15",
    2,
    7,
    3,
    14,
    "H || 👀 || Name the body part. || Eyes",
    "H || 👀 || Guess the hidden body part! || Eyes",
    false
  ],
  [
    "L2-W7-D3-16",
    2,
    7,
    3,
    15,
    "H || 👂 || Name the body part. || Ear",
    "H || 👂 || Guess the hidden body part! || Ear",
    false
  ],
  [
    "L2-W7-D3-02",
    2,
    7,
    3,
    1,
    "Q || Use \"that\" and \"knee\". || That is knee.",
    "T || Esa es la rodilla de mi hermana. || That is my sister's knee.",
    false
  ],
  [
    "L2-W7-D3-04",
    2,
    7,
    3,
    3,
    "Q || Use \"those\" and \"legs\". || Those are legs.",
    "T || Esas son las piernas de mi mamá. || Those are my mom's legs.",
    false
  ],
  [
    "L2-W7-D3-03",
    2,
    7,
    3,
    2,
    "Q || Use \"that\" and \"elbow\". || That is elbow.",
    "T || Ese es el codo de mi hermano. || That is my brother's elbow.",
    false
  ],
  [
    "L2-W7-D3-01",
    2,
    7,
    3,
    0,
    "Q || Use \"those\" and \"shoulders\". || Those are shoulders.",
    "T || Esos son los hombros de mi papá. || Those are my dad's shoulders.",
    false
  ],
  [
    "L2-W7-D3-06",
    2,
    7,
    3,
    5,
    "Q || Use \"those\" and \"toes\". || Those are toes.",
    "T || Esos son sus dedos de los pies. || Those are her toes.",
    false
  ],
  [
    "L2-W7-D3-05",
    2,
    7,
    3,
    4,
    "Q || Use \"those\" and \"fingers\". || Those are fingers.",
    "T || Esos son sus dedos. || Those are his fingers.",
    false
  ],
  [
    "L2-W7-D4-15",
    2,
    7,
    4,
    14,
    "H || 👀 || Name the body part. || Eyes",
    "H || 👀 || Guess the hidden body part! || Eyes",
    false
  ],
  [
    "L2-W7-D4-16",
    2,
    7,
    4,
    15,
    "H || 👂 || Name the body part. || Ear",
    "H || 👂 || Guess the hidden body part! || Ear",
    false
  ],
  [
    "L2-W7-D4-02",
    2,
    7,
    4,
    1,
    "Q || Use \"that\" and \"knee\". || That is knee.",
    "T || Esa es la rodilla de mi mamá. || That is my mom's knee.",
    false
  ],
  [
    "L2-W7-D4-04",
    2,
    7,
    4,
    3,
    "Q || Use \"those\" and \"legs\". || Those are legs.",
    "T || Esas son las piernas de mi hermana. || Those are my sister's legs.",
    false
  ],
  [
    "L2-W7-D4-03",
    2,
    7,
    4,
    2,
    "Q || Use \"that\" and \"elbow\". || That is elbow.",
    "T || Ese es el codo de mi papá. || That is my dad's elbow.",
    false
  ],
  [
    "L2-W7-D4-01",
    2,
    7,
    4,
    0,
    "Q || Use \"those\" and \"shoulders\". || Those are shoulders.",
    "T || Esos son los hombros de mi hermano. || Those are my brother's shoulders.",
    false
  ],
  [
    "L2-W7-D4-06",
    2,
    7,
    4,
    5,
    "Q || Use \"those\" and \"toes\". || Those are toes.",
    "T || Esos son sus dedos de los pies. || Those are her toes.",
    false
  ],
  [
    "L2-W7-D4-05",
    2,
    7,
    4,
    4,
    "Q || Use \"those\" and \"fingers\". || Those are fingers.",
    "T || Esos son sus dedos. || Those are his fingers.",
    false
  ],
  [
    "L2-W7-D5-15",
    2,
    7,
    5,
    14,
    "H || 👀 || Name the body part. || Eyes",
    "H || 👀 || Guess the hidden body part! || Eyes",
    false
  ],
  [
    "L2-W7-D5-16",
    2,
    7,
    5,
    15,
    "H || 👂 || Name the body part. || Ear",
    "H || 👂 || Guess the hidden body part! || Ear",
    false
  ],
  [
    "L2-W8-D1-11",
    2,
    8,
    1,
    10,
    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
    "Q || What does a cat have? || A cat has fur, paws and a tail.",
    false
  ],
  [
    "L2-W8-D1-03",
    2,
    8,
    1,
    2,
    "Q || Make a positive sentence about a cat and whiskers. || A cat has whiskers.",
    "T || Mi gato tiene bigotes largos. || My cat has long whiskers.",
    false
  ],
  [
    "L2-W8-D1-02",
    2,
    8,
    1,
    1,
    "Q || Make a positive sentence about a dog and paws. || A dog has paws.",
    "T || Mi perro tiene cuatro patas. || My dog has four paws.",
    false
  ],
  [
    "L2-W8-D1-07",
    2,
    8,
    1,
    6,
    "Q || Make a negative sentence about a cat and wings. || A cat doesn't have wings.",
    "T || Un gato no tiene alas. || A cat doesn't have wings.",
    false
  ],
  [
    "L2-W8-D1-01",
    2,
    8,
    1,
    0,
    "Q || Make a positive sentence about a cat and fur. || A cat has fur.",
    "T || Un gato tiene pelaje. || A cat has fur.",
    false
  ],
  [
    "L2-W8-D1-06",
    2,
    8,
    1,
    5,
    "Q || Make a positive sentence about a dog and a tail. || A dog has a tail.",
    "T || Un perro tiene una cola. || A dog has a tail.",
    false
  ],
  [
    "L2-W8-D1-08",
    2,
    8,
    1,
    7,
    "Q || Make a negative sentence about a bird and fur. || A bird doesn't have fur.",
    "T || Un pájaro no tiene pelaje. || A bird doesn't have fur.",
    false
  ],
  [
    "L2-W8-D1-04",
    2,
    8,
    1,
    3,
    "Q || Make a positive sentence about a bird and wings. || A bird has wings.",
    "T || Un pájaro tiene alas. || A bird has wings.",
    false
  ],
  [
    "L2-W8-D1-05",
    2,
    8,
    1,
    4,
    "Q || Make a positive sentence about a bird and feathers. || A bird has feathers.",
    "T || Un pájaro tiene plumas. || A bird has feathers.",
    false
  ],
  [
    "L2-W8-D2-11",
    2,
    8,
    2,
    10,
    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
    "Q || What does a cat have? || A cat has fur, paws and a tail.",
    false
  ],
  [
    "L2-W8-D3-11",
    2,
    8,
    3,
    10,
    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
    "Q || What does a cat have? || A cat has fur, paws and a tail.",
    false
  ],
  [
    "L2-W8-D4-15",
    2,
    8,
    4,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L2-W8-D4-08",
    2,
    8,
    4,
    7,
    "Q || Describe an imaginary pet. || My pet has paws, fur and a tail.",
    "Q || What does a cat have? || A cat has fur, paws and a tail.",
    false
  ],
  [
    "L2-W8-D4-11",
    2,
    8,
    4,
    10,
    "Q || Where does the parrot talk? || It talks at home.",
    "Q || Where does a parrot talk? || It talks at home.",
    false
  ],
  [
    "L2-W8-D4-03",
    2,
    8,
    4,
    2,
    "Q || Make a sentence: ball / in / box. || The ball is in the box.",
    "T || La pelota está dentro de la caja. || The ball is in the box.",
    false
  ],
  [
    "L2-W8-D4-07",
    2,
    8,
    4,
    6,
    "Q || Make a positive sentence about a cat and fur. || A cat has fur.",
    "T || Un gato tiene pelaje. || A cat has fur.",
    false
  ],
  [
    "L2-W8-D5-16",
    2,
    8,
    5,
    15,
    "H || 🍦 || Name the food. || Ice cream",
    "H || 🍦 || Guess the hidden food! || Ice cream",
    false
  ],
  [
    "L2-W8-D5-03",
    2,
    8,
    5,
    2,
    "Q || Scene: The cat is on the chair. Is the cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
    "Q || Scene: The cat is on the chair. Is a cat under the chair? || No, the cat isn't under the chair. The cat is on the chair.",
    false
  ],
  [
    "L2-W8-D5-13",
    2,
    8,
    5,
    12,
    "Q || What does Emma do in the kitchen? || She cooks dinner.",
    "Q || What does your cousin do in the kitchen? || She cooks dinner.",
    false
  ],
  [
    "L3-W1-D5-11",
    3,
    1,
    5,
    10,
    "Q || Make a present progressive sentence with \"I\" and \"learn English\". || I am learning English.",
    "T || Estoy aprendiendo inglés. || I am learning English.",
    false
  ],
  [
    "L3-W2-D1-16",
    3,
    2,
    1,
    15,
    "H || 👕 || Name the clothing. || T-shirt",
    "H || 👕 || Guess the hidden clothing item! || T-shirt",
    false
  ],
  [
    "L3-W2-D1-15",
    3,
    2,
    1,
    14,
    "H || 👖 || Name the clothing. || Pants",
    "H || 👖 || Guess the hidden clothing item! || Pants",
    false
  ],
  [
    "L3-W2-D1-02",
    3,
    2,
    1,
    1,
    "Q || Imagine a blue outfit. Describe it. || I am wearing blue pants and a blue T-shirt.",
    "Q || What are you wearing today? || I am wearing blue pants and a T-shirt.",
    false
  ],
  [
    "L3-W2-D2-16",
    3,
    2,
    2,
    15,
    "H || 👗 || Name the clothing. || Dress",
    "H || 👗 || Guess the hidden clothing item! || Dress",
    false
  ],
  [
    "L3-W2-D2-15",
    3,
    2,
    2,
    14,
    "H || 👟 || Name the clothing. || Shoes",
    "H || 👟 || Guess the hidden clothing item! || Shoes",
    false
  ],
  [
    "L3-W2-D3-16",
    3,
    2,
    3,
    15,
    "H || 👕 || Name the clothing. || T-shirt",
    "H || 👕 || Guess the hidden clothing item! || T-shirt",
    false
  ],
  [
    "L3-W2-D3-15",
    3,
    2,
    3,
    14,
    "H || 👖 || Name the clothing. || Pants",
    "H || 👖 || Guess the hidden clothing item! || Pants",
    false
  ],
  [
    "L3-W2-D3-02",
    3,
    2,
    3,
    1,
    "Q || Imagine a blue outfit. Describe it. || I am wearing blue pants and a blue T-shirt.",
    "Q || What are you wearing today? || I am wearing blue pants and a T-shirt.",
    false
  ],
  [
    "L3-W2-D4-16",
    3,
    2,
    4,
    15,
    "H || 👕 || Name the clothing. || T-shirt",
    "H || 👕 || Guess the hidden clothing item! || T-shirt",
    false
  ],
  [
    "L3-W2-D4-15",
    3,
    2,
    4,
    14,
    "H || 🧦 || Name the clothing. || Socks",
    "H || 🧦 || Guess the hidden clothing item! || Socks",
    false
  ],
  [
    "L3-W2-D4-07",
    3,
    2,
    4,
    6,
    "Q || Imagine you are wearing a sweater outside. Why are you wearing a sweater? || I am wearing a sweater because I like it.",
    "Q || It is cold outside. You are wearing a sweater. Why are you wearing a sweater? || I am wearing a sweater because it is cold.",
    false
  ],
  [
    "L3-W2-D4-01",
    3,
    2,
    4,
    0,
    "Q || Imagine you are wearing pants outside. Why are you wearing pants? || I am wearing pants because it is comfortable.",
    "Q || It is cold outside. You are wearing pants. Why are you wearing pants? || I am wearing pants because it is cold.",
    false
  ],
  [
    "L3-W2-D4-02",
    3,
    2,
    4,
    1,
    "Q || Imagine you are wearing a T-shirt at home. Why are you wearing a T-shirt? || I am wearing a T-shirt because it is warm today.",
    "Q || It is hot at home. You are wearing a T-shirt. Why are you wearing a T-shirt? || I am wearing a T-shirt because it is hot.",
    false
  ],
  [
    "L3-W2-D4-05",
    3,
    2,
    4,
    4,
    "Q || Imagine you are wearing shorts outside. Why are you wearing shorts? || I am wearing shorts because it is comfortable.",
    "Q || It is hot outside. You are wearing shorts. Why are you wearing shorts? || I am wearing shorts because it is hot.",
    false
  ],
  [
    "L3-W2-D4-04",
    3,
    2,
    4,
    3,
    "Q || Imagine you are wearing a dress at home. Why are you wearing a dress? || I am wearing a dress because it is my favorite outfit.",
    "Q || You are at a party in your favorite dress. Why are you wearing that dress? || I am wearing this dress because it is my favorite.",
    false
  ],
  [
    "L3-W2-D4-03",
    3,
    2,
    4,
    2,
    "Q || Imagine you are wearing shoes outside. Why are you wearing shoes? || I am wearing shoes because I like it.",
    "Q || You are outside. The ground is hot. Why are you wearing shoes? || I am wearing shoes because the ground is hot.",
    false
  ],
  [
    "L3-W2-D4-06",
    3,
    2,
    4,
    5,
    "Q || Imagine you are wearing socks at home. Why are you wearing socks? || I am wearing socks because it is warm today.",
    "Q || Your feet are cold. You are wearing socks. Why are you wearing socks? || I am wearing socks because my feet are cold.",
    false
  ],
  [
    "L3-W2-D4-08",
    3,
    2,
    4,
    7,
    "Q || Imagine you are wearing pants at home. Why are you wearing pants? || I am wearing pants because it is my favorite outfit.",
    "Q || Your pants are comfortable. Why are you wearing them at home? || I am wearing them because they are comfortable.",
    false
  ],
  [
    "L3-W2-D5-15",
    3,
    2,
    5,
    14,
    "H || 👗 || Name the clothing. || Dress",
    "H || 👗 || Guess the hidden clothing item! || Dress",
    false
  ],
  [
    "L3-W2-D5-16",
    3,
    2,
    5,
    15,
    "H || 🩳 || Name the clothing. || Shorts",
    "H || 🩳 || Guess the hidden clothing item! || Shorts",
    false
  ],
  [
    "L3-W2-D5-12",
    3,
    2,
    5,
    11,
    "Q || Imagine you are wearing a sweater outside. Why are you wearing a sweater? || I am wearing a sweater because I like it.",
    "Q || It is cold outside. You are wearing a sweater. Why are you wearing a sweater? || I am wearing a sweater because it is cold.",
    false
  ],
  [
    "L3-W2-D5-08",
    3,
    2,
    5,
    7,
    "Q || Imagine you are wearing shorts outside. Why are you wearing shorts? || I am wearing shorts because it is comfortable.",
    "Q || It is hot outside. You are wearing shorts. Why are you wearing shorts? || I am wearing shorts because it is hot.",
    false
  ],
  [
    "L3-W2-D5-04",
    3,
    2,
    5,
    3,
    "Q || Imagine you are wearing a dress at home. Why are you wearing a dress? || I am wearing a dress because it is my favorite outfit.",
    "Q || You are at a party in your favorite dress. Why are you wearing that dress? || I am wearing this dress because it is my favorite.",
    false
  ],
  [
    "L3-W2-D5-05",
    3,
    2,
    5,
    4,
    "Q || Imagine you are wearing pants at home. Why are you wearing pants? || I am wearing pants because it is my favorite outfit.",
    "Q || Your pants are comfortable. Why are you wearing them at home? || I am wearing them because they are comfortable.",
    false
  ],
  [
    "L3-W3-D1-15",
    3,
    3,
    1,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L3-W3-D1-01",
    3,
    3,
    1,
    0,
    "Q || What is Zog doing in space? || He is flying.",
    "Q || What is Messi doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D1-05",
    3,
    3,
    1,
    4,
    "Q || What is Zog doing after school? || He is riding a bike.",
    "Q || What is your best friend doing in the park? || He is riding a bike.",
    false
  ],
  [
    "L3-W3-D1-08",
    3,
    3,
    1,
    7,
    "Q || What is Zara doing in the park? || She is riding a bike.",
    "Q || What is your cousin doing in the park? || He is riding a bike.",
    false
  ],
  [
    "L3-W3-D1-02",
    3,
    3,
    1,
    1,
    "Q || What is Zara doing on a sunny day? || She is riding a bike.",
    "Q || What is your dad doing in the park? || He is riding a bike.",
    false
  ],
  [
    "L3-W3-D1-07",
    3,
    3,
    1,
    6,
    "Q || What is Zog doing in the sky? || He is flying.",
    "Q || What is your dad doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D1-03",
    3,
    3,
    1,
    2,
    "Q || What is Zog doing after lunch? || He is taking a nap.",
    "Q || What is your mom doing after lunch? || She is taking a nap.",
    false
  ],
  [
    "L3-W3-D1-04",
    3,
    3,
    1,
    3,
    "Q || What is Zara doing in the morning? || She is flying.",
    "Q || What is your uncle doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D1-06",
    3,
    3,
    1,
    5,
    "Q || Where is Zara taking a nap? || She is taking a nap on the sofa.",
    "Q || Where is your grandpa taking a nap? || He is taking a nap on the sofa.",
    false
  ],
  [
    "L3-W3-D2-15",
    3,
    3,
    2,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L3-W3-D2-04",
    3,
    3,
    2,
    3,
    "Q || Is Zara flying? || Yes, she is flying. / No, she isn't flying.",
    "Q || Is Messi flying right now? || Yes, he is flying. / No, he isn't flying.",
    false
  ],
  [
    "L3-W3-D2-05",
    3,
    3,
    2,
    4,
    "Q || Is Zog riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
    "Q || Is your brother riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
    false
  ],
  [
    "L3-W3-D2-01",
    3,
    3,
    2,
    0,
    "Q || Is Zog riding a bike? || Yes, he is riding a bike. / No, he isn't riding a bike.",
    "Q || Is your dad riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
    false
  ],
  [
    "L3-W3-D2-06",
    3,
    3,
    2,
    5,
    "Q || Is Zara taking a nap right now? || Yes, she is taking a nap. / No, she isn't taking a nap.",
    "Q || Is your dad taking a nap right now? || Yes, he is taking a nap. / No, he isn't taking a nap.",
    false
  ],
  [
    "L3-W3-D2-02",
    3,
    3,
    2,
    1,
    "Q || Is Zara taking a nap? || Yes, she is taking a nap. / No, she isn't taking a nap.",
    "Q || Is your mom taking a nap right now? || Yes, she is taking a nap. / No, she isn't taking a nap.",
    false
  ],
  [
    "L3-W3-D2-03",
    3,
    3,
    2,
    2,
    "Q || Is Zog listening to music? || Yes, he is listening to music. / No, he isn't listening to music.",
    "Q || Is your sister listening to music right now? || Yes, she is listening to music. / No, she isn't listening to music.",
    false
  ],
  [
    "L3-W3-D2-08",
    3,
    3,
    2,
    7,
    "Q || What is Zara doing in the morning? || She is flying.",
    "Q || What is Messi doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D2-07",
    3,
    3,
    2,
    6,
    "Q || What is Zog doing after school? || He is listening to music.",
    "Q || What is your sister doing at home? || She is listening to music.",
    false
  ],
  [
    "L3-W3-D3-15",
    3,
    3,
    3,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L3-W3-D3-08",
    3,
    3,
    3,
    7,
    "Q || What is Zara doing in the afternoon? || She is meeting a friend.",
    "Q || What is your best friend doing at the park? || He is meeting a friend.",
    false
  ],
  [
    "L3-W3-D3-07",
    3,
    3,
    3,
    6,
    "Q || What is Zog doing after school? || He is listening to music.",
    "Q || What is your brother doing at home? || He is listening to music.",
    false
  ],
  [
    "L3-W3-D3-05",
    3,
    3,
    3,
    4,
    "Q || What is Zog doing on a sunny day? || He is riding a bike.",
    "Q || What is your brother doing in the park? || He is riding a bike.",
    false
  ],
  [
    "L3-W3-D3-04",
    3,
    3,
    3,
    3,
    "Q || What is Zara doing in space? || She is flying.",
    "Q || What is your brother doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D3-03",
    3,
    3,
    3,
    2,
    "Q || What is Zog doing at the park? || He is meeting a friend.",
    "Q || What is your cousin doing at the park? || He is meeting a friend.",
    false
  ],
  [
    "L3-W3-D3-01",
    3,
    3,
    3,
    0,
    "Q || What is Zog doing after lunch? || He is taking a nap.",
    "Q || What is your mom doing after lunch? || She is taking a nap.",
    false
  ],
  [
    "L3-W3-D3-02",
    3,
    3,
    3,
    1,
    "Q || What is Zara doing at home? || She is listening to music.",
    "Q || What is your sister doing at home? || She is listening to music.",
    false
  ],
  [
    "L3-W3-D3-06",
    3,
    3,
    3,
    5,
    "Q || Where is Zara taking a nap? || She is taking a nap on the sofa.",
    "Q || Where is your dad taking a nap? || He is taking a nap on the sofa.",
    false
  ],
  [
    "L3-W3-D4-15",
    3,
    3,
    4,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L3-W3-D4-07",
    3,
    3,
    4,
    6,
    "Q || What is Zog doing in the afternoon? || He is meeting a friend.",
    "Q || What is your best friend doing at the park? || He is meeting a friend.",
    false
  ],
  [
    "L3-W3-D4-05",
    3,
    3,
    4,
    4,
    "Q || What is Zog doing after lunch? || He is taking a nap.",
    "Q || What is your dad doing after lunch? || He is taking a nap.",
    false
  ],
  [
    "L3-W3-D4-08",
    3,
    3,
    4,
    7,
    "Q || What is Zara doing in the morning? || She is flying.",
    "Q || What is your dad doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D4-03",
    3,
    3,
    4,
    2,
    "Q || Where is Zog flying? || He is flying in the sky.",
    "Q || Where is your brother flying? || He is flying to Colombia.",
    false
  ],
  [
    "L3-W3-D4-06",
    3,
    3,
    4,
    5,
    "Q || Where is Zara listening to music? || She is listening to music in her bedroom.",
    "Q || Where is your brother listening to music? || He is listening to music at home.",
    false
  ],
  [
    "L3-W3-D4-04",
    3,
    3,
    4,
    3,
    "Q || Where is Zara riding a bike? || She is riding a bike in the park.",
    "Q || Where is your brother riding a bike? || He is riding a bike in the park.",
    false
  ],
  [
    "L3-W3-D4-02",
    3,
    3,
    4,
    1,
    "Q || Where is Zara meeting a friend? || She is meeting a friend in the park.",
    "Q || Where is your cousin meeting a friend? || He is meeting a friend at the park.",
    false
  ],
  [
    "L3-W3-D4-01",
    3,
    3,
    4,
    0,
    "Q || Where is Zog listening to music? || He is listening to music in his bedroom.",
    "Q || Where is your sister listening to music? || She is listening to music at home.",
    false
  ],
  [
    "L3-W3-D5-15",
    3,
    3,
    5,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L3-W3-D5-08",
    3,
    3,
    5,
    7,
    "Q || Is Zara riding a bike right now? || Yes, she is riding a bike. / No, she isn't riding a bike.",
    "Q || Is your cousin riding a bike right now? || Yes, he is riding a bike. / No, he isn't riding a bike.",
    false
  ],
  [
    "L3-W3-D5-05",
    3,
    3,
    5,
    4,
    "Q || What is Zog doing at home? || He is listening to music.",
    "Q || What is your brother doing at home? || He is listening to music.",
    false
  ],
  [
    "L3-W3-D5-07",
    3,
    3,
    5,
    6,
    "Q || What is Zog doing in the morning? || He is flying.",
    "Q || What is your dad doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W3-D5-06",
    3,
    3,
    5,
    5,
    "Q || Where is Zara meeting a friend? || She is meeting a friend in the park.",
    "Q || Where is your best friend meeting a friend? || He is meeting a friend at the park.",
    false
  ],
  [
    "L3-W3-D5-02",
    3,
    3,
    5,
    1,
    "Q || Where is Zara flying? || She is flying in the sky.",
    "Q || Where is your brother flying? || He is flying to Colombia.",
    false
  ],
  [
    "L3-W3-D5-03",
    3,
    3,
    5,
    2,
    "Q || Where is Zog riding a bike? || He is riding a bike in the park.",
    "Q || Where is your brother riding a bike? || He is riding a bike in the park.",
    false
  ],
  [
    "L3-W3-D5-01",
    3,
    3,
    5,
    0,
    "Q || Where is Zog meeting a friend? || He is meeting a friend in the park.",
    "Q || Where is your cousin meeting a friend? || He is meeting a friend at the park.",
    false
  ],
  [
    "L3-W3-D5-04",
    3,
    3,
    5,
    3,
    "Q || Where is Zara taking a nap? || She is taking a nap on the sofa.",
    "Q || Where is your dad taking a nap? || He is taking a nap on the sofa.",
    false
  ],
  [
    "L3-W4-D1-06",
    3,
    4,
    1,
    5,
    "Q || Where are the children taking pictures? || They are taking pictures in the park.",
    "Q || Two children are in the park. Where are they taking pictures? || They are taking pictures in the park.",
    false
  ],
  [
    "L3-W4-D1-08",
    3,
    4,
    1,
    7,
    "Q || What are the children doing at the playground in this story? || They are swinging.",
    "Q || Two children are moving back and forth on playground seats. What are they doing? || They are swinging.",
    false
  ],
  [
    "L3-W4-D1-02",
    3,
    4,
    1,
    1,
    "Q || What are the children doing at the playground? || They are swinging.",
    "Q || Two children are moving back and forth on swings. What are they doing? || They are swinging.",
    false
  ],
  [
    "L3-W4-D1-05",
    3,
    4,
    1,
    4,
    "Q || What are your friends doing after school? || They are swinging.",
    "Q || Two children are on swings at the playground. What are they doing? || They are swinging.",
    false
  ],
  [
    "L3-W4-D1-01",
    3,
    4,
    1,
    0,
    "Q || What are your friends doing on the park path? || They are jogging.",
    "Q || Two children are running slowly in the park. What are they doing? || They are jogging.",
    false
  ],
  [
    "L3-W4-D1-07",
    3,
    4,
    1,
    6,
    "Q || What are your friends doing in the park? || They are jogging.",
    "Q || Two children are running slowly near a lake. What are they doing? || They are jogging.",
    false
  ],
  [
    "L3-W4-D1-04",
    3,
    4,
    1,
    3,
    "Q || What are the children doing in the morning? || They are jogging.",
    "Q || Two children are running slowly on a path. What are they doing? || They are jogging.",
    false
  ],
  [
    "L3-W4-D1-03",
    3,
    4,
    1,
    2,
    "Q || What are your friends doing with a camera? || They are taking pictures.",
    "Q || Two children have a camera at the park. What are they doing? || They are taking pictures.",
    false
  ],
  [
    "L3-W4-D2-01",
    3,
    4,
    2,
    0,
    "Q || Are your friends swinging? || Yes, they are. / No, they aren't.",
    "Q || Two children are moving back and forth on swings. Are they swinging? || Yes, they are swinging.",
    false
  ],
  [
    "L3-W4-D2-07",
    3,
    4,
    2,
    6,
    "Q || What are your friends doing after breakfast? || They are walking the dog.",
    "Q || Two children are on a path with a dog on a leash. What are they doing? || They are walking the dog.",
    false
  ],
  [
    "L3-W4-D2-05",
    3,
    4,
    2,
    4,
    "Q || Are your friends swinging right now? || Yes, they are. / No, they aren't.",
    "Q || Two children are on swings at the playground. Are they swinging right now? || Yes, they are swinging.",
    false
  ],
  [
    "L3-W4-D2-03",
    3,
    4,
    2,
    2,
    "Q || Are your friends walking the dog? || Yes, they are. / No, they aren't.",
    "Q || Two children are outside with a dog on a leash. Are they walking the dog? || Yes, they are walking the dog.",
    false
  ],
  [
    "L3-W4-D2-06",
    3,
    4,
    2,
    5,
    "Q || Are the children taking pictures right now? || Yes, they are. / No, they aren't.",
    "Q || Two children are playing. They have no camera or phone. Are they taking pictures right now? || No, they aren't taking pictures.",
    false
  ],
  [
    "L3-W4-D2-02",
    3,
    4,
    2,
    1,
    "Q || Are the children taking pictures? || Yes, they are. / No, they aren't.",
    "Q || Two children are playing. They have no camera or phone. Are they taking pictures? || No, they aren't taking pictures.",
    false
  ],
  [
    "L3-W4-D2-08",
    3,
    4,
    2,
    7,
    "Q || What are the children doing in the morning? || They are jogging.",
    "Q || Two children are running slowly in the park. What are they doing? || They are jogging.",
    false
  ],
  [
    "L3-W4-D2-04",
    3,
    4,
    2,
    3,
    "Q || Are the children jogging? || Yes, they are. / No, they aren't.",
    "Q || Two children are sitting on a bench. Are they jogging? || No, they aren't jogging.",
    false
  ],
  [
    "L3-W4-D3-06",
    3,
    4,
    3,
    5,
    "Q || Where are the children taking pictures? || They are taking pictures in the park.",
    "Q || Two children are at the zoo. Where are they taking pictures? || They are taking pictures at the zoo.",
    false
  ],
  [
    "L3-W4-D3-08",
    3,
    4,
    3,
    7,
    "Q || What are the children doing in the afternoon? || They are climbing a tree.",
    "Q || Two children are going up a tree. What are they doing? || They are climbing a tree.",
    false
  ],
  [
    "L3-W4-D3-03",
    3,
    4,
    3,
    2,
    "Q || Where are your friends climbing a tree? || They are climbing a tree in the garden.",
    "Q || Two children are in the garden. Where are they climbing a tree? || They are climbing a tree in the garden.",
    false
  ],
  [
    "L3-W4-D3-04",
    3,
    4,
    3,
    3,
    "Q || Where are the children jogging? || They are jogging in the park.",
    "Q || Two children are in the park. Where are they jogging? || They are jogging in the park.",
    false
  ],
  [
    "L3-W4-D3-01",
    3,
    4,
    3,
    0,
    "Q || Where are your friends taking pictures? || They are taking pictures in the park.",
    "Q || Two children are in the park. Where are they taking pictures? || They are taking pictures in the park.",
    false
  ],
  [
    "L3-W4-D3-02",
    3,
    4,
    3,
    1,
    "Q || Where are the children walking the dog? || They are walking the dog in the park.",
    "Q || Two children are in the park. Where are they walking the dog? || They are walking the dog in the park.",
    false
  ],
  [
    "L3-W4-D3-05",
    3,
    4,
    3,
    4,
    "Q || What are your friends doing at the playground? || They are swinging.",
    "Q || Two children are moving back and forth on swings. What are they doing? || They are swinging.",
    false
  ],
  [
    "L3-W4-D3-07",
    3,
    4,
    3,
    6,
    "Q || What are your friends doing after breakfast? || They are walking the dog.",
    "Q || Two children are outside with a dog on a leash. What are they doing? || They are walking the dog.",
    false
  ],
  [
    "L3-W4-D4-15",
    3,
    4,
    4,
    14,
    "H || 👖 || Name the clothing. || Pants",
    "H || 👖 || Guess the hidden clothing item! || Pants",
    false
  ],
  [
    "L3-W4-D4-16",
    3,
    4,
    4,
    15,
    "H || 👧 || Name the person. || Girl",
    "H || 👧 || Guess the hidden person! || Girl",
    false
  ],
  [
    "L3-W4-D4-07",
    3,
    4,
    4,
    6,
    "Q || What are your friends doing on the park path? || They are jogging.",
    "Q || Two children are running slowly in the park. What are they doing? || They are jogging.",
    false
  ],
  [
    "L3-W4-D4-11",
    3,
    4,
    4,
    10,
    "Q || What does the rabbit do in the morning? || It jumps.",
    "Q || What does a rabbit do in the morning? || It jumps.",
    false
  ],
  [
    "L3-W4-D4-05",
    3,
    4,
    4,
    4,
    "Q || What is Zog the alien doing on a space mission? || He is flying.",
    "Q || What is your uncle doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L3-W4-D4-13",
    3,
    4,
    4,
    12,
    "Q || When does Emma clean the room? || She cleans the room on Saturday mornings.",
    "Q || When does your sister clean the room? || She cleans the room on Saturday mornings.",
    false
  ],
  [
    "L3-W4-D4-14",
    3,
    4,
    4,
    13,
    "Q || Make a simple present sentence with \"It\" and \"talk\". || It talks.",
    "T || El loro habla. || The parrot talks.",
    false
  ],
  [
    "L3-W4-D5-15",
    3,
    4,
    5,
    14,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L3-W4-D5-05",
    3,
    4,
    5,
    4,
    "Q || Is Zara the alien taking a nap? || Yes, she is taking a nap. / No, she isn't taking a nap.",
    "Q || Is your sister taking a nap right now? || Yes, she is taking a nap. / No, she isn't taking a nap.",
    false
  ],
  [
    "L3-W4-D5-07",
    3,
    4,
    5,
    6,
    "Q || Are the children taking pictures? || Yes, they are. / No, they aren't.",
    "Q || Two children have a camera at the park. Are they taking pictures? || Yes, they are taking pictures.",
    false
  ],
  [
    "L3-W4-D5-14",
    3,
    4,
    5,
    13,
    "Q || Make a simple present sentence with \"It\" and \"run\". || It runs.",
    "T || El perro corre. || The dog runs.",
    false
  ],
  [
    "L3-W5-D1-15",
    3,
    5,
    1,
    14,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L3-W5-D1-08",
    3,
    5,
    1,
    7,
    "Q || What are the children doing in the pool? || They are swimming.",
    "Q || Two children are crossing a pool without a boat. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D1-03",
    3,
    5,
    1,
    2,
    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
    false
  ],
  [
    "L3-W5-D1-05",
    3,
    5,
    1,
    4,
    "Q || What are your friends doing on Saturdays? || They are swimming.",
    "Q || Two children are moving their arms and legs through the water. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D1-02",
    3,
    5,
    1,
    1,
    "Q || What are the children doing on a hot day? || They are swimming.",
    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D1-06",
    3,
    5,
    1,
    5,
    "Q || Where are the children having a picnic? || They are having a picnic on the beach.",
    "Q || Two children are on the beach. Where are they having a picnic? || They are having a picnic on the beach.",
    false
  ],
  [
    "L3-W5-D1-04",
    3,
    5,
    1,
    3,
    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
    "Q || Two children are using sand to build a castle. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D1-07",
    3,
    5,
    1,
    6,
    "Q || What are your friends doing on the beach? || They are making a sandcastle.",
    "Q || Two children have buckets of sand and a half-built castle. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D1-01",
    3,
    5,
    1,
    0,
    "Q || What are your friends doing on the sand? || They are making a sandcastle.",
    "T || Los niños están haciendo un castillo de arena en la playa. || The children are making a sandcastle on the beach.",
    false
  ],
  [
    "L3-W5-D2-15",
    3,
    5,
    2,
    14,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L3-W5-D2-08",
    3,
    5,
    2,
    7,
    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D2-05",
    3,
    5,
    2,
    4,
    "Q || Are your friends swimming right now? || Yes, they are swimming. / No, they aren't swimming.",
    "Q || Two children are moving their arms and legs through the water. Are they swimming right now? || Yes, they are swimming.",
    false
  ],
  [
    "L3-W5-D2-01",
    3,
    5,
    2,
    0,
    "Q || Are your friends swimming? || Yes, they are swimming. / No, they aren't swimming.",
    "Q || Two children are moving through the water in a pool. Are they swimming? || Yes, they are swimming.",
    false
  ],
  [
    "L3-W5-D2-03",
    3,
    5,
    2,
    2,
    "Q || Are your friends surfing? || Yes, they are surfing. / No, they aren't surfing.",
    "Q || Two children are riding waves on surfboards. Are they surfing? || Yes, they are surfing.",
    false
  ],
  [
    "L3-W5-D2-07",
    3,
    5,
    2,
    6,
    "Q || What are your friends doing in the morning? || They are surfing.",
    "Q || Two children are standing on surfboards in the waves. What are they doing? || They are surfing.",
    false
  ],
  [
    "L3-W5-D2-06",
    3,
    5,
    2,
    5,
    "Q || Are the children having a picnic right now? || Yes, they are having a picnic. / No, they aren't having a picnic.",
    "Q || Two children are swimming in a pool. Are they having a picnic right now? || No, they aren't having a picnic.",
    false
  ],
  [
    "L3-W5-D2-02",
    3,
    5,
    2,
    1,
    "Q || Are the children having a picnic? || Yes, they are having a picnic. / No, they aren't having a picnic.",
    "Q || Two children are swimming in a pool. Are they having a picnic? || No, they aren't having a picnic.",
    false
  ],
  [
    "L3-W5-D2-04",
    3,
    5,
    2,
    3,
    "Q || Are the children making a sandcastle? || Yes, they are making a sandcastle. / No, they aren't making a sandcastle.",
    "Q || Two children are swimming in a pool. Are they making a sandcastle? || No, they aren't making a sandcastle.",
    false
  ],
  [
    "L3-W5-D3-15",
    3,
    5,
    3,
    14,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L3-W5-D3-04",
    3,
    5,
    3,
    3,
    "Q || What are the children doing on the sand? || They are making a sandcastle.",
    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D3-01",
    3,
    5,
    3,
    0,
    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
    false
  ],
  [
    "L3-W5-D3-05",
    3,
    5,
    3,
    4,
    "Q || What are your friends doing on a hot day? || They are swimming.",
    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D3-06",
    3,
    5,
    3,
    5,
    "Q || Where are the children having a picnic? || They are having a picnic on the beach.",
    "Q || Two children are on the beach. Where are they having a picnic? || They are having a picnic on the beach.",
    false
  ],
  [
    "L3-W5-D3-08",
    3,
    5,
    3,
    7,
    "Q || What are the children doing after lunch? || They are relaxing.",
    "Q || Two children are resting on beach chairs. What are they doing? || They are relaxing.",
    false
  ],
  [
    "L3-W5-D3-03",
    3,
    5,
    3,
    2,
    "Q || What are your friends doing under a beach umbrella in this story? || They are relaxing.",
    "Q || Two children are resting under a beach umbrella. What are they doing? || They are relaxing.",
    false
  ],
  [
    "L3-W5-D3-02",
    3,
    5,
    3,
    1,
    "Q || What are the children doing at the beach? || They are surfing.",
    "Q || Two children are riding waves on surfboards. What are they doing? || They are surfing.",
    false
  ],
  [
    "L3-W5-D3-07",
    3,
    5,
    3,
    6,
    "Q || What are your friends doing in the morning? || They are surfing.",
    "Q || Two children are standing on surfboards in the waves. What are they doing? || They are surfing.",
    false
  ],
  [
    "L3-W5-D4-16",
    3,
    5,
    4,
    15,
    "H || 🏄 || Name the action. || Surf",
    "H || 🏄 || Guess the action! || Surf",
    false
  ],
  [
    "L3-W5-D4-15",
    3,
    5,
    4,
    14,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L3-W5-D4-04",
    3,
    5,
    4,
    3,
    "Q || Who are the children swimming with? || They are swimming with their brother.",
    "Q || Two children are at the beach with their brother. Who are they swimming with? || They are swimming with their brother.",
    false
  ],
  [
    "L3-W5-D4-03",
    3,
    5,
    4,
    2,
    "Q || Who are your friends making a sandcastle with? || They are making a sandcastle with their cousin.",
    "Q || Two children are at the beach with their cousin. Who are they making a sandcastle with? || They are making a sandcastle with their cousin.",
    false
  ],
  [
    "L3-W5-D4-01",
    3,
    5,
    4,
    0,
    "Q || Who are your friends surfing with? || They are surfing with their family.",
    "Q || Two children are at the beach with their family. Who are they surfing with? || They are surfing with their family.",
    false
  ],
  [
    "L3-W5-D4-02",
    3,
    5,
    4,
    1,
    "Q || Who are the children relaxing with? || They are relaxing with their friends.",
    "Q || Two children are at the beach with their friends. Who are they relaxing with? || They are relaxing with their friends.",
    false
  ],
  [
    "L3-W5-D4-08",
    3,
    5,
    4,
    7,
    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D4-05",
    3,
    5,
    4,
    4,
    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
    false
  ],
  [
    "L3-W5-D4-06",
    3,
    5,
    4,
    5,
    "Q || Where are the children surfing? || They are surfing in the ocean.",
    "Q || Two children are in the ocean. Where are they surfing? || They are surfing in the ocean.",
    false
  ],
  [
    "L3-W5-D4-07",
    3,
    5,
    4,
    6,
    "Q || What are your friends doing after lunch? || They are relaxing.",
    "Q || Two children are resting under a beach umbrella. What are they doing? || They are relaxing.",
    false
  ],
  [
    "L3-W5-D5-04",
    3,
    5,
    5,
    3,
    "Q || Who are the children swimming with? || They are swimming with their brother.",
    "Q || Two children are at the beach with their brother. Who are they swimming with? || They are swimming with their brother.",
    false
  ],
  [
    "L3-W5-D5-03",
    3,
    5,
    5,
    2,
    "Q || What are the children doing on the sand? || They are making a sandcastle.",
    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D5-13",
    3,
    5,
    5,
    12,
    "Q || What are the children doing in the pool? || They are swimming.",
    "Q || Two children are crossing a pool without a boat. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D5-08",
    3,
    5,
    5,
    7,
    "Q || What are your friends doing under a beach umbrella? || They are having a picnic.",
    "Q || Two children are eating sandwiches on a blanket at the beach. What are they doing? || They are having a picnic.",
    false
  ],
  [
    "L3-W5-D5-07",
    3,
    5,
    5,
    6,
    "Q || What are your friends doing on a hot day? || They are swimming.",
    "Q || Two children are moving their arms and legs through the water. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D5-05",
    3,
    5,
    5,
    4,
    "Q || What are your friends doing on Saturdays? || They are swimming.",
    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
    false
  ],
  [
    "L3-W5-D5-12",
    3,
    5,
    5,
    11,
    "Q || What are your friends doing after lunch? || They are relaxing.",
    "Q || Two children are resting under a beach umbrella. What are they doing? || They are relaxing.",
    false
  ],
  [
    "L3-W5-D5-06",
    3,
    5,
    5,
    5,
    "Q || Are your friends swimming right now? || Yes, they are swimming. / No, they aren't swimming.",
    "Q || Two children are standing on dry sand. Are they swimming right now? || No, they aren't swimming.",
    false
  ],
  [
    "L3-W5-D5-02",
    3,
    5,
    5,
    1,
    "Q || Are the children making a sandcastle? || Yes, they are making a sandcastle. / No, they aren't making a sandcastle.",
    "Q || Two children are swimming in a pool. Are they making a sandcastle? || No, they aren't making a sandcastle.",
    false
  ],
  [
    "L3-W5-D5-14",
    3,
    5,
    5,
    13,
    "Q || What are the children doing in the afternoon? || They are making a sandcastle.",
    "Q || Two children are using sand to build a castle. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W5-D5-11",
    3,
    5,
    5,
    10,
    "Q || Make a present progressive sentence with \"They\" and \"surf\". || They are surfing.",
    "T || Ellos están surfeando. || They are surfing.",
    false
  ],
  [
    "L3-W6-D1-07",
    3,
    6,
    1,
    6,
    "Q || What does Emma do in the kitchen? || She sweeps the floor.",
    "Q || What does your cousin do in the kitchen? || She sweeps the floor.",
    false
  ],
  [
    "L3-W6-D1-08",
    3,
    6,
    1,
    7,
    "Q || What does Leo do in the kitchen? || He mops the floor.",
    "Q || What does your uncle do in the kitchen? || He mops the floor.",
    false
  ],
  [
    "L3-W6-D2-07",
    3,
    6,
    2,
    6,
    "Q || When does Leo make his bed? || He makes his bed in the morning.",
    "Q || When does your brother make his bed? || He makes his bed in the morning.",
    false
  ],
  [
    "L3-W6-D2-06",
    3,
    6,
    2,
    5,
    "Q || Where does Emma wash the dishes? || She washes the dishes in the kitchen.",
    "Q || Where does your sister wash the dishes? || She washes the dishes in the kitchen.",
    false
  ],
  [
    "L3-W6-D3-05",
    3,
    6,
    3,
    4,
    "Q || What does Emma do after a spill? || She mops the floor.",
    "Q || What does your aunt do after a spill? || She mops the floor.",
    false
  ],
  [
    "L3-W6-D3-06",
    3,
    6,
    3,
    5,
    "Q || Where does Leo wash the dishes? || He washes the dishes in the kitchen.",
    "Q || Where does your brother wash the dishes? || He washes the dishes in the kitchen.",
    false
  ],
  [
    "L3-W6-D3-02",
    3,
    6,
    3,
    1,
    "Q || Who does your dad make his bed with? || He makes his bed with his friends.",
    "Q || Who does your dad clean the house with? || He cleans the house with my mom.",
    false
  ],
  [
    "L3-W6-D4-05",
    3,
    6,
    4,
    4,
    "Q || What does Leo do after dinner? || He washes the dishes.",
    "Q || What does your cousin do after dinner? || He washes the dishes.",
    false
  ],
  [
    "L3-W6-D4-04",
    3,
    6,
    4,
    3,
    "Q || Why does Emma mop the floor? || Because the floor is dirty.",
    "Q || Why does your sister mop the floor? || Because the floor is dirty.",
    false
  ],
  [
    "L3-W6-D5-07",
    3,
    6,
    5,
    6,
    "Q || What does Emma do after a spill? || She mops the floor.",
    "Q || What does your aunt do after a spill? || She mops the floor.",
    false
  ],
  [
    "L3-W6-D5-08",
    3,
    6,
    5,
    7,
    "Q || What does Leo do after dinner? || He washes the dishes.",
    "Q || What does your cousin do after dinner? || He washes the dishes.",
    false
  ],
  [
    "L3-W6-D5-13",
    3,
    6,
    5,
    12,
    "Q || What does Leo do in the kitchen? || He mops the floor.",
    "Q || What does your cousin do in the kitchen? || He mops the floor.",
    false
  ],
  [
    "L3-W8-D1-11",
    3,
    8,
    1,
    10,
    "T || Max es regordete. || Max is chubby.",
    "T || Max es gordito. || Max is chubby.",
    false
  ],
  [
    "L3-W8-D1-06",
    3,
    8,
    1,
    5,
    "Q || Describe an imaginary character named Alex using \"short\". || Alex is short.",
    "T || Mi abuelo es bajito. || My grandpa is short.",
    false
  ],
  [
    "L3-W8-D1-02",
    3,
    8,
    1,
    1,
    "Q || Describe an imaginary character named Leo using \"short\". || Leo is short.",
    "T || Mi hermana es bajita. || My sister is short.",
    false
  ],
  [
    "L3-W8-D1-05",
    3,
    8,
    1,
    4,
    "Q || Describe an imaginary character named Sam using \"tall\". || Sam is tall.",
    "T || Mi hermano es alto. || My brother is tall.",
    false
  ],
  [
    "L3-W8-D1-15",
    3,
    8,
    1,
    14,
    "T || Mi hermano es regordete. || My brother is chubby.",
    "T || Mi hermano es gordito. || My brother is chubby.",
    false
  ],
  [
    "L3-W8-D1-01",
    3,
    8,
    1,
    0,
    "Q || Describe an imaginary character named Ben using \"tall\". || Ben is tall.",
    "T || Mi papá es alto. || My dad is tall.",
    false
  ],
  [
    "L3-W8-D1-08",
    3,
    8,
    1,
    7,
    "Q || Describe an imaginary character named Rob using \"skinny\". || Rob is skinny.",
    "T || Mi tío es delgado. || My uncle is skinny.",
    false
  ],
  [
    "L3-W8-D1-03",
    3,
    8,
    1,
    2,
    "Q || Describe an imaginary character named Max using \"chubby\". || Max is chubby.",
    "T || Shrek es gordito. || Shrek is chubby.",
    false
  ],
  [
    "L3-W8-D1-07",
    3,
    8,
    1,
    6,
    "Q || Describe an imaginary character named Dan using \"chubby\". || Dan is chubby.",
    "T || Winnie the Pooh es gordito. || Winnie the Pooh is chubby.",
    false
  ],
  [
    "L3-W8-D1-04",
    3,
    8,
    1,
    3,
    "Q || Describe an imaginary character named Tom using \"skinny\". || Tom is skinny.",
    "T || Woody es delgado. || Woody is skinny.",
    false
  ],
  [
    "L3-W8-D2-16",
    3,
    8,
    2,
    15,
    "H || 👨‍🦲 || Name the adjective. || Bald",
    "H || 👨‍🦲 || Guess the hidden adjective! || Bald",
    false
  ],
  [
    "L3-W8-D2-15",
    3,
    8,
    2,
    14,
    "H || 💪 || Name the adjective. || Strong",
    "H || 💪 || Guess the hidden adjective! || Strong",
    false
  ],
  [
    "L3-W8-D2-06",
    3,
    8,
    2,
    5,
    "Q || Story: Alex is bald. Is Alex tall? || No, he isn't.",
    "Q || Alex is bald. He is not tall. Is Alex tall? || No, he isn't.",
    false
  ],
  [
    "L3-W8-D2-02",
    3,
    8,
    2,
    1,
    "Q || Story: Leo is short. Is Leo chubby? || No, he isn't.",
    "Q || Leo is short. He is not chubby. Is Leo chubby? || No, he isn't.",
    false
  ],
  [
    "L3-W8-D2-08",
    3,
    8,
    2,
    7,
    "Q || Story: Rob is short. Is Rob chubby? || No, he isn't.",
    "Q || Rob is short. He is not chubby. Is Rob chubby? || No, he isn't.",
    false
  ],
  [
    "L3-W8-D2-04",
    3,
    8,
    2,
    3,
    "Q || Story: Tom is skinny. Is Tom strong? || No, he isn't.",
    "Q || Tom is skinny. He is not strong. Is Tom strong? || No, he isn't.",
    false
  ],
  [
    "L3-W8-D2-11",
    3,
    8,
    2,
    10,
    "T || Max es regordete. || Max is chubby.",
    "T || Max es gordito. || Max is chubby.",
    false
  ],
  [
    "L3-W8-D3-16",
    3,
    8,
    3,
    15,
    "H || 👨‍🦲 || Name the adjective. || Bald",
    "H || 👨‍🦲 || Guess the hidden adjective! || Bald",
    false
  ],
  [
    "L3-W8-D3-15",
    3,
    8,
    3,
    14,
    "H || 💪 || Name the adjective. || Strong",
    "H || 💪 || Guess the hidden adjective! || Strong",
    false
  ],
  [
    "L3-W8-D3-11",
    3,
    8,
    3,
    10,
    "T || Max es regordete. || Max is chubby.",
    "T || Max es gordito. || Max is chubby.",
    false
  ],
  [
    "L3-W8-D4-16",
    3,
    8,
    4,
    15,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L3-W8-D4-01",
    3,
    8,
    4,
    0,
    "Q || What are your friends doing on the sand? || They are making a sandcastle.",
    "Q || Two children are building a castle with sand. What are they doing? || They are making a sandcastle.",
    false
  ],
  [
    "L3-W8-D4-11",
    3,
    8,
    4,
    10,
    "Q || Where does the parrot talk? || It talks at home.",
    "Q || Where does a parrot talk? || It talks at home.",
    false
  ],
  [
    "L3-W8-D4-08",
    3,
    8,
    4,
    7,
    "T || Max es regordete. || Max is chubby.",
    "T || Max es gordito. || Max is chubby.",
    false
  ],
  [
    "L3-W8-D4-07",
    3,
    8,
    4,
    6,
    "Q || Describe an imaginary character named Ben using \"tall\". || Ben is tall.",
    "T || Mi papá es alto. || My dad is tall.",
    false
  ],
  [
    "L3-W8-D5-07",
    3,
    8,
    5,
    6,
    "Q || Story: Leo is short. Is Leo chubby? || No, he isn't.",
    "Q || Leo is short. He is not chubby. Is Leo chubby? || No, he isn't.",
    false
  ],
  [
    "L3-W8-D5-01",
    3,
    8,
    5,
    0,
    "Q || Are the children having a picnic? || Yes, they are having a picnic. / No, they aren't having a picnic.",
    "Q || Two children are eating sandwiches on a blanket at the beach. Are they having a picnic? || Yes, they are having a picnic.",
    false
  ],
  [
    "L3-W8-D5-14",
    3,
    8,
    5,
    13,
    "Q || Make a simple present sentence with \"She\" and \"work\". || She works.",
    "T || Ella trabaja. || She works.",
    false
  ],
  [
    "L3-W8-D5-12",
    3,
    8,
    5,
    11,
    "Q || Make a present progressive sentence with \"They\" and \"swing\". || They are swinging.",
    "T || Ellos se están meciendo en los columpios. || They are swinging.",
    false
  ],
  [
    "L4-W1-D1-01",
    4,
    1,
    1,
    0,
    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D1-07",
    4,
    1,
    1,
    6,
    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday on my birthday.",
    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday next Saturday.",
    false
  ],
  [
    "L4-W1-D1-04",
    4,
    1,
    1,
    3,
    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
    false
  ],
  [
    "L4-W1-D1-16",
    4,
    1,
    1,
    15,
    "T || Yo voy a celebrar mi cumpleaños el sábado. || I am going to celebrate my birthday on Saturday.",
    "T || Voy a celebrar mi cumpleaños el sábado. || I am going to celebrate my birthday on Saturday.",
    false
  ],
  [
    "L4-W1-D1-14",
    4,
    1,
    1,
    13,
    "T || Yo voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
    "T || Voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
    false
  ],
  [
    "L4-W1-D1-11",
    4,
    1,
    1,
    10,
    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    false
  ],
  [
    "L4-W1-D1-12",
    4,
    1,
    1,
    11,
    "T || Yo voy a comer pastel. || I am going to eat cake.",
    "T || Voy a comer pastel. || I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D1-15",
    4,
    1,
    1,
    14,
    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    false
  ],
  [
    "L4-W1-D1-13",
    4,
    1,
    1,
    12,
    "T || Yo voy a tomar fotos. || I am going to take pictures.",
    "T || Voy a tomar fotos. || I am going to take pictures.",
    false
  ],
  [
    "L4-W1-D2-08",
    4,
    1,
    2,
    7,
    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
    false
  ],
  [
    "L4-W1-D2-11",
    4,
    1,
    2,
    10,
    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    false
  ],
  [
    "L4-W1-D2-16",
    4,
    1,
    2,
    15,
    "T || Yo voy a comer pastel mañana. || I am going to eat cake tomorrow.",
    "T || Voy a comer pastel mañana. || I am going to eat cake tomorrow.",
    false
  ],
  [
    "L4-W1-D2-12",
    4,
    1,
    2,
    11,
    "T || Yo voy a comer pastel. || I am going to eat cake.",
    "T || Voy a comer pastel. || I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D2-14",
    4,
    1,
    2,
    13,
    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    false
  ],
  [
    "L4-W1-D2-15",
    4,
    1,
    2,
    14,
    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    false
  ],
  [
    "L4-W1-D2-13",
    4,
    1,
    2,
    12,
    "T || Yo voy a tomar fotos. || I am going to take pictures.",
    "T || Voy a tomar fotos. || I am going to take pictures.",
    false
  ],
  [
    "L4-W1-D3-04",
    4,
    1,
    3,
    3,
    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D3-08",
    4,
    1,
    3,
    7,
    "Q || What are you going to do on your birthday? || I am going to open presents.",
    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
    false
  ],
  [
    "L4-W1-D3-11",
    4,
    1,
    3,
    10,
    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    false
  ],
  [
    "L4-W1-D3-12",
    4,
    1,
    3,
    11,
    "T || Yo voy a comer pastel. || I am going to eat cake.",
    "T || Voy a comer pastel. || I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D3-16",
    4,
    1,
    3,
    15,
    "T || Yo voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow.",
    "T || Voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow.",
    false
  ],
  [
    "L4-W1-D3-14",
    4,
    1,
    3,
    13,
    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    false
  ],
  [
    "L4-W1-D3-15",
    4,
    1,
    3,
    14,
    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    false
  ],
  [
    "L4-W1-D3-13",
    4,
    1,
    3,
    12,
    "T || Yo voy a tomar fotos. || I am going to take pictures.",
    "T || Voy a tomar fotos. || I am going to take pictures.",
    false
  ],
  [
    "L4-W1-D4-08",
    4,
    1,
    4,
    7,
    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
    false
  ],
  [
    "L4-W1-D4-11",
    4,
    1,
    4,
    10,
    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    false
  ],
  [
    "L4-W1-D4-12",
    4,
    1,
    4,
    11,
    "T || Yo voy a comer pastel. || I am going to eat cake.",
    "T || Voy a comer pastel. || I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D4-16",
    4,
    1,
    4,
    15,
    "T || Yo voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow.",
    "T || Voy a pasar tiempo con amigos mañana. || I am going to spend time with friends tomorrow.",
    false
  ],
  [
    "L4-W1-D4-14",
    4,
    1,
    4,
    13,
    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    false
  ],
  [
    "L4-W1-D4-15",
    4,
    1,
    4,
    14,
    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    false
  ],
  [
    "L4-W1-D4-13",
    4,
    1,
    4,
    12,
    "T || Yo voy a tomar fotos. || I am going to take pictures.",
    "T || Voy a tomar fotos. || I am going to take pictures.",
    false
  ],
  [
    "L4-W1-D5-03",
    4,
    1,
    5,
    2,
    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
    false
  ],
  [
    "L4-W1-D5-14",
    4,
    1,
    5,
    13,
    "Q || What are you going to do on your birthday? || I am going to celebrate my birthday.",
    "Q || Who are you going to celebrate your birthday with? || I am going to celebrate with my family.",
    false
  ],
  [
    "L4-W1-D5-16",
    4,
    1,
    5,
    15,
    "T || Yo voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
    "T || Voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
    false
  ],
  [
    "L4-W1-D5-15",
    4,
    1,
    5,
    14,
    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    false
  ],
  [
    "L4-W1-D5-01",
    4,
    1,
    5,
    0,
    "T || Yo voy a tomar fotos. || I am going to take pictures.",
    "T || Voy a tomar fotos. || I am going to take pictures.",
    false
  ],
  [
    "L4-W2-D1-16",
    4,
    2,
    1,
    15,
    "T || Yo voy a comer una merienda mañana. || I am going to eat a snack tomorrow.",
    "T || Voy a comer una merienda mañana. || I am going to eat a snack tomorrow.",
    false
  ],
  [
    "L4-W2-D1-11",
    4,
    2,
    1,
    10,
    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
    "T || Voy a comer una merienda. || I am going to eat a snack.",
    false
  ],
  [
    "L4-W2-D1-12",
    4,
    2,
    1,
    11,
    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
    "T || Voy a hacer mi tarea. || I am going to do my homework.",
    false
  ],
  [
    "L4-W2-D1-15",
    4,
    2,
    1,
    14,
    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    false
  ],
  [
    "L4-W2-D1-13",
    4,
    2,
    1,
    12,
    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
    "T || Voy a jugar videojuegos. || I am going to play video games.",
    false
  ],
  [
    "L4-W2-D1-14",
    4,
    2,
    1,
    13,
    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
    false
  ],
  [
    "L4-W2-D2-11",
    4,
    2,
    2,
    10,
    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
    "T || Voy a comer una merienda. || I am going to eat a snack.",
    false
  ],
  [
    "L4-W2-D2-16",
    4,
    2,
    2,
    15,
    "T || Yo voy a hacer mi tarea mañana. || I am going to do my homework tomorrow.",
    "T || Voy a hacer mi tarea mañana. || I am going to do my homework tomorrow.",
    false
  ],
  [
    "L4-W2-D2-12",
    4,
    2,
    2,
    11,
    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
    "T || Voy a hacer mi tarea. || I am going to do my homework.",
    false
  ],
  [
    "L4-W2-D2-15",
    4,
    2,
    2,
    14,
    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    false
  ],
  [
    "L4-W2-D2-13",
    4,
    2,
    2,
    12,
    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
    "T || Voy a jugar videojuegos. || I am going to play video games.",
    false
  ],
  [
    "L4-W2-D2-14",
    4,
    2,
    2,
    13,
    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
    false
  ],
  [
    "L4-W2-D3-11",
    4,
    2,
    3,
    10,
    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
    "T || Voy a comer una merienda. || I am going to eat a snack.",
    false
  ],
  [
    "L4-W2-D3-12",
    4,
    2,
    3,
    11,
    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
    "T || Voy a hacer mi tarea. || I am going to do my homework.",
    false
  ],
  [
    "L4-W2-D3-15",
    4,
    2,
    3,
    14,
    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    false
  ],
  [
    "L4-W2-D3-13",
    4,
    2,
    3,
    12,
    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
    "T || Voy a jugar videojuegos. || I am going to play video games.",
    false
  ],
  [
    "L4-W2-D3-16",
    4,
    2,
    3,
    15,
    "T || Yo voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow.",
    "T || Voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow.",
    false
  ],
  [
    "L4-W2-D3-14",
    4,
    2,
    3,
    13,
    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
    false
  ],
  [
    "L4-W2-D4-11",
    4,
    2,
    4,
    10,
    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
    "T || Voy a comer una merienda. || I am going to eat a snack.",
    false
  ],
  [
    "L4-W2-D4-12",
    4,
    2,
    4,
    11,
    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
    "T || Voy a hacer mi tarea. || I am going to do my homework.",
    false
  ],
  [
    "L4-W2-D4-15",
    4,
    2,
    4,
    14,
    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    false
  ],
  [
    "L4-W2-D4-13",
    4,
    2,
    4,
    12,
    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
    "T || Voy a jugar videojuegos. || I am going to play video games.",
    false
  ],
  [
    "L4-W2-D4-16",
    4,
    2,
    4,
    15,
    "T || Yo voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow.",
    "T || Voy a revisar mi teléfono mañana. || I am going to check my phone tomorrow.",
    false
  ],
  [
    "L4-W2-D4-14",
    4,
    2,
    4,
    13,
    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
    false
  ],
  [
    "L4-W2-D5-16",
    4,
    2,
    5,
    15,
    "T || Yo voy a comer una merienda mañana. || I am going to eat a snack tomorrow.",
    "T || Voy a comer una merienda mañana. || I am going to eat a snack tomorrow.",
    false
  ],
  [
    "L4-W2-D5-15",
    4,
    2,
    5,
    14,
    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    false
  ],
  [
    "L4-W2-D5-01",
    4,
    2,
    5,
    0,
    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
    "T || Voy a jugar videojuegos. || I am going to play video games.",
    false
  ],
  [
    "L4-W2-D5-14",
    4,
    2,
    5,
    13,
    "Q || Make a going to sentence with \"I\" and \"check my phone\". || I am going to check my phone.",
    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
    false
  ],
  [
    "L4-W3-D1-15",
    4,
    3,
    1,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W3-D1-03",
    4,
    3,
    1,
    2,
    "Q || What is Leo going to do on Sunday? || He is going to visit his grandma.",
    "Q || What is your best friend going to do on Sunday? || He is going to visit his grandma.",
    false
  ],
  [
    "L4-W3-D1-02",
    4,
    3,
    1,
    1,
    "Q || What is Emma going to do on Saturday? || She is going to ride a bike.",
    "Q || What is your cousin going to do on Saturday? || She is going to ride a bike.",
    false
  ],
  [
    "L4-W3-D1-05",
    4,
    3,
    1,
    4,
    "Q || What is your mom going to do after school? || She is going to ride a bike.",
    "Q || What is your mom going to do after work? || She is going to watch a movie.",
    false
  ],
  [
    "L4-W3-D1-06",
    4,
    3,
    1,
    5,
    "Q || Where is your brother going to visit his grandma? || He is going to visit his grandma at his grandma's house.",
    "Q || Where is your brother going to ride a bike? || He is going to ride a bike in the park.",
    false
  ],
  [
    "L4-W3-D2-15",
    4,
    3,
    2,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W3-D2-01",
    4,
    3,
    2,
    0,
    "Q || Is Emma going to ride a bike? || Yes, she is. / No, she isn't.",
    "Q || Is your best friend going to ride a bike? || Yes, she is. / No, she isn't.",
    false
  ],
  [
    "L4-W3-D2-02",
    4,
    3,
    2,
    1,
    "Q || Is Leo going to visit his grandma? || Yes, he is. / No, he isn't.",
    "Q || Is your cousin going to visit his grandma? || Yes, he is. / No, he isn't.",
    false
  ],
  [
    "L4-W3-D3-15",
    4,
    3,
    3,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W3-D3-01",
    4,
    3,
    3,
    0,
    "Q || What is Leo going to do on Sunday? || He is going to visit his grandma.",
    "Q || What is your best friend going to do on Sunday? || He is going to visit his grandma.",
    false
  ],
  [
    "L4-W3-D3-08",
    4,
    3,
    3,
    7,
    "Q || What is Emma going to do on Saturday evening? || She is going to watch a movie.",
    "Q || What is your cousin going to do on Saturday evening? || She is going to watch a movie.",
    false
  ],
  [
    "L4-W3-D3-06",
    4,
    3,
    3,
    5,
    "Q || Where is your sister going to visit her grandma? || She is going to visit her grandma at her grandma's house.",
    "Q || Where is your sister going to buy a book? || She is going to buy a book at a bookstore.",
    false
  ],
  [
    "L4-W3-D4-15",
    4,
    3,
    4,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W3-D4-08",
    4,
    3,
    4,
    7,
    "Q || What is Leo going to do in the afternoon? || He is going to pay for a snack.",
    "Q || What is your brother going to do in the afternoon? || He is going to pay for a snack.",
    false
  ],
  [
    "L4-W3-D4-07",
    4,
    3,
    4,
    6,
    "Q || When is Emma going to watch a movie? || She is going to watch a movie on Saturday evening.",
    "Q || When is your aunt going to watch a movie? || She is going to watch a movie on Saturday evening.",
    false
  ],
  [
    "L4-W3-D5-15",
    4,
    3,
    5,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W3-D5-07",
    4,
    3,
    5,
    6,
    "Q || When is Leo going to pay for a snack? || He is going to pay for a snack in the afternoon.",
    "Q || When is your best friend going to pay for a snack? || He is going to pay for a snack in the afternoon.",
    false
  ],
  [
    "L4-W3-D5-04",
    4,
    3,
    5,
    3,
    "Q || When is your sister going to visit her grandma? || She is going to visit her grandma on Sundays.",
    "Q || When is your sister going to visit her grandma? || She is going to visit her grandma next Sunday.",
    false
  ],
  [
    "L4-W3-D5-06",
    4,
    3,
    5,
    5,
    "Q || Where is Emma going to watch a movie? || She is going to watch a movie at the cinema.",
    "Q || Where is your sister going to watch a movie? || She is going to watch a movie at the cinema.",
    false
  ],
  [
    "L4-W4-D2-15",
    4,
    4,
    2,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W4-D2-08",
    4,
    4,
    2,
    7,
    "Q || Is Zara the alien listening to music right now? || Yes, she is. / No, she isn't.",
    "Q || Is your brother listening to music right now? || Yes, he is listening to music. / No, he isn't listening to music.",
    false
  ],
  [
    "L4-W4-D2-05",
    4,
    4,
    2,
    4,
    "Q || What is Zog the alien doing on a space mission? || He is flying.",
    "Q || What is your brother doing right now? || He is flying in a plane.",
    false
  ],
  [
    "L4-W4-D2-07",
    4,
    4,
    2,
    6,
    "Q || What is Zog the alien doing after lunch? || He is taking a nap.",
    "Q || What is your dad doing after lunch? || He is taking a nap.",
    false
  ],
  [
    "L4-W4-D2-06",
    4,
    4,
    2,
    5,
    "Q || Where is Zara the alien riding a bike? || She is riding a bike in the park.",
    "Q || Where is your brother riding a bike? || He is riding a bike in the park.",
    false
  ],
  [
    "L4-W4-D2-04",
    4,
    4,
    2,
    3,
    "Q || Where is Zara the alien meeting a friend? || She is meeting a friend in the park.",
    "Q || Where is your cousin meeting a friend? || He is meeting a friend at the park.",
    false
  ],
  [
    "L4-W4-D2-01",
    4,
    4,
    2,
    0,
    "Q || Where is Zog the alien riding a bike? || He is riding a bike in the park.",
    "Q || Where is your dad riding a bike? || He is riding a bike in the park.",
    false
  ],
  [
    "L4-W4-D2-02",
    4,
    4,
    2,
    1,
    "Q || Where is Zara the alien taking a nap? || She is taking a nap on the sofa.",
    "Q || Where is your mom taking a nap? || She is taking a nap on the sofa.",
    false
  ],
  [
    "L4-W4-D2-03",
    4,
    4,
    2,
    2,
    "Q || Where is Zog the alien listening to music? || He is listening to music in his bedroom.",
    "Q || Where is your sister listening to music? || She is listening to music at home.",
    false
  ],
  [
    "L4-W4-D3-15",
    4,
    4,
    3,
    14,
    "H || 🏊 || Name the action. || Swim",
    "H || 🏊 || Guess the action! || Swim",
    false
  ],
  [
    "L4-W4-D3-04",
    4,
    4,
    3,
    3,
    "Q || Who are the children making a sandcastle with? || They are making a sandcastle with their brother.",
    "Q || Two children are at the beach with their brother. Who are they making a sandcastle with? || They are making a sandcastle with their brother.",
    false
  ],
  [
    "L4-W4-D3-03",
    4,
    4,
    3,
    2,
    "Q || Who are your friends relaxing with? || They are relaxing with their cousin.",
    "Q || Two children are at the beach with their cousin. Who are they relaxing with? || They are relaxing with their cousin.",
    false
  ],
  [
    "L4-W4-D3-01",
    4,
    4,
    3,
    0,
    "Q || Who are your friends having a picnic with? || They are having a picnic with their family.",
    "Q || Two children are at the beach with their family. Who are they having a picnic with? || They are having a picnic with their family.",
    false
  ],
  [
    "L4-W4-D3-02",
    4,
    4,
    3,
    1,
    "Q || Who are the children surfing with? || They are surfing with their friends.",
    "Q || Two children are at the beach with their friends. Who are they surfing with? || They are surfing with their friends.",
    false
  ],
  [
    "L4-W4-D3-05",
    4,
    4,
    3,
    4,
    "Q || What are your friends doing on a hot day? || They are swimming.",
    "Q || Two children are moving through the water in a pool. What are they doing? || They are swimming.",
    false
  ],
  [
    "L4-W4-D3-06",
    4,
    4,
    3,
    5,
    "Q || Where are the children having a picnic? || They are having a picnic on the beach.",
    "Q || Two children are on the beach. Where are they having a picnic? || They are having a picnic on the beach.",
    false
  ],
  [
    "L4-W4-D3-07",
    4,
    4,
    3,
    6,
    "Q || What are your friends doing in the morning? || They are surfing.",
    "Q || Two children are riding waves on surfboards. What are they doing? || They are surfing.",
    false
  ],
  [
    "L4-W4-D3-08",
    4,
    4,
    3,
    7,
    "Q || Are the children relaxing right now? || Yes, they are. / No, they aren't.",
    "Q || Two children are running as fast as they can. Are they relaxing right now? || No, they aren't relaxing.",
    false
  ],
  [
    "L4-W4-D4-15",
    4,
    4,
    4,
    14,
    "H || 👧 || Name the person. || Girl",
    "H || 👧 || Guess the hidden person! || Girl",
    false
  ],
  [
    "L4-W4-D4-16",
    4,
    4,
    4,
    15,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L4-W4-D4-01",
    4,
    4,
    4,
    0,
    "Q || What are you going to do on your next birthday? || I am going to celebrate my birthday.",
    "Q || What are you going to do on your next birthday? || I am going to have a party. / I am going to eat cake.",
    false
  ],
  [
    "L4-W4-D4-11",
    4,
    4,
    4,
    10,
    "Q || What does the rabbit do in the morning? || It jumps.",
    "Q || What does a rabbit do in the morning? || It jumps.",
    false
  ],
  [
    "L4-W4-D4-02",
    4,
    4,
    4,
    1,
    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    false
  ],
  [
    "L4-W4-D4-04",
    4,
    4,
    4,
    3,
    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
    "T || Voy a comer una merienda. || I am going to eat a snack.",
    false
  ],
  [
    "L4-W4-D4-14",
    4,
    4,
    4,
    13,
    "Q || Make a simple present sentence with \"He\" and \"clean the room\". || He cleans the room.",
    "T || Él limpia el cuarto. || He cleans the room.",
    false
  ],
  [
    "L4-W4-D5-15",
    4,
    4,
    5,
    14,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L4-W4-D5-05",
    4,
    4,
    5,
    4,
    "Q || Is Leo going to visit his grandma? || Yes, he is. / No, he isn't.",
    "Q || Is your cousin going to visit his grandma? || Yes, he is. / No, he isn't.",
    false
  ],
  [
    "L4-W4-D5-07",
    4,
    4,
    5,
    6,
    "Q || Where is Zara the alien taking a nap? || She is taking a nap on the sofa.",
    "Q || Where is your mom taking a nap? || She is taking a nap on the sofa.",
    false
  ],
  [
    "L4-W4-D5-16",
    4,
    4,
    5,
    15,
    "T || Yo voy a comer pastel mañana. || I am going to eat cake tomorrow.",
    "T || Voy a comer pastel mañana. || I am going to eat cake tomorrow.",
    false
  ],
  [
    "L4-W4-D5-02",
    4,
    4,
    5,
    1,
    "T || Yo voy a comer pastel. || I am going to eat cake.",
    "T || Voy a comer pastel. || I am going to eat cake.",
    false
  ],
  [
    "L4-W4-D5-04",
    4,
    4,
    5,
    3,
    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
    "T || Voy a hacer mi tarea. || I am going to do my homework.",
    false
  ],
  [
    "L4-W4-D5-12",
    4,
    4,
    5,
    11,
    "Q || Make a present progressive sentence with \"He\" and \"take a nap\". || He is taking a nap.",
    "T || Él está tomando una siesta. || He is taking a nap.",
    false
  ],
  [
    "L4-W4-D5-14",
    4,
    4,
    5,
    13,
    "Q || Make a simple present sentence with \"He\" and \"paint a picture\". || He paints a picture.",
    "T || Él pinta un cuadro. || He paints a picture.",
    false
  ],
  [
    "L4-W5-D2-16",
    4,
    5,
    2,
    15,
    "H || 🏋️ || Name the action. || Exercise",
    "H || 🏋️ || Guess the action! || Exercise",
    false
  ],
  [
    "L4-W5-D2-08",
    4,
    5,
    2,
    7,
    "Q || What does Leo do in the morning? || He exercises.",
    "Q || What does your cousin do in the morning? || He exercises.",
    false
  ],
  [
    "L4-W5-D3-07",
    4,
    5,
    3,
    6,
    "Q || When does Leo win a race? || He wins a race on sports day.",
    "Q || What does Messi do after a win? || He celebrates with his team.",
    false
  ],
  [
    "L4-W5-D5-08",
    4,
    5,
    5,
    7,
    "Q || What does your dog do after school? || It runs.",
    "Q || What does your dog do when you get home? || My dog runs to me.",
    false
  ],
  [
    "L4-W5-D5-07",
    4,
    5,
    5,
    6,
    "Q || When does the cat climb a tree? || It climbs a tree in the afternoon.",
    "Q || When does a cat climb a tree? || It climbs a tree in the afternoon.",
    false
  ],
  [
    "L4-W5-D5-06",
    4,
    5,
    5,
    5,
    "Q || Where does the parrot talk? || It talks at home.",
    "Q || Where does a parrot talk? || It talks at home.",
    false
  ],
  [
    "L4-W5-D5-01",
    4,
    5,
    5,
    0,
    "Q || Who does the parrot talk with? || It talks with its family.",
    "Q || Who does a parrot talk with? || It talks with its family.",
    false
  ],
  [
    "L4-W5-D5-04",
    4,
    5,
    5,
    3,
    "Q || Who does the rabbit jump with? || It jumps with its brother.",
    "Q || Who does your dog play with? || My dog plays with me.",
    false
  ],
  [
    "L4-W5-D5-02",
    4,
    5,
    5,
    1,
    "Q || Who does the cat climb a tree with? || It climbs a tree with its friends.",
    "Q || Who does your dog walk with? || My dog walks with my dad.",
    false
  ],
  [
    "L4-W6-D1-09",
    4,
    6,
    1,
    8,
    "F || I am going to ____ my birthday on my birthday. || celebrate || celebrates / celebrating",
    "F || I am going to ____ my birthday next Saturday. || celebrate || celebrates / celebrating",
    false
  ],
  [
    "L4-W6-D1-01",
    4,
    6,
    1,
    0,
    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday on my birthday.",
    "Q || When are you going to celebrate your birthday? || I am going to celebrate my birthday next Saturday.",
    false
  ],
  [
    "L4-W6-D1-16",
    4,
    6,
    1,
    15,
    "T || Yo voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
    "T || Voy a celebrar mi cumpleaños mañana. || I am going to celebrate my birthday tomorrow.",
    false
  ],
  [
    "L4-W6-D1-11",
    4,
    6,
    1,
    10,
    "T || Yo voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    "T || Voy a celebrar mi cumpleaños. || I am going to celebrate my birthday.",
    false
  ],
  [
    "L4-W6-D1-12",
    4,
    6,
    1,
    11,
    "T || Yo voy a comer pastel. || I am going to eat cake.",
    "T || Voy a comer pastel. || I am going to eat cake.",
    false
  ],
  [
    "L4-W6-D1-14",
    4,
    6,
    1,
    13,
    "T || Yo voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    "T || Voy a pasar tiempo con amigos. || I am going to spend time with friends.",
    false
  ],
  [
    "L4-W6-D1-15",
    4,
    6,
    1,
    14,
    "T || Yo voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    "T || Voy a tomar fotos mañana. || I am going to take pictures tomorrow.",
    false
  ],
  [
    "L4-W6-D1-13",
    4,
    6,
    1,
    12,
    "T || Yo voy a tomar fotos. || I am going to take pictures.",
    "T || Voy a tomar fotos. || I am going to take pictures.",
    false
  ],
  [
    "L4-W6-D2-11",
    4,
    6,
    2,
    10,
    "T || Yo voy a comer una merienda. || I am going to eat a snack.",
    "T || Voy a comer una merienda. || I am going to eat a snack.",
    false
  ],
  [
    "L4-W6-D2-16",
    4,
    6,
    2,
    15,
    "T || Yo voy a hacer mi tarea mañana. || I am going to do my homework tomorrow.",
    "T || Voy a hacer mi tarea mañana. || I am going to do my homework tomorrow.",
    false
  ],
  [
    "L4-W6-D2-12",
    4,
    6,
    2,
    11,
    "T || Yo voy a hacer mi tarea. || I am going to do my homework.",
    "T || Voy a hacer mi tarea. || I am going to do my homework.",
    false
  ],
  [
    "L4-W6-D2-15",
    4,
    6,
    2,
    14,
    "T || Yo voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    "T || Voy a jugar videojuegos mañana. || I am going to play video games tomorrow.",
    false
  ],
  [
    "L4-W6-D2-13",
    4,
    6,
    2,
    12,
    "T || Yo voy a jugar videojuegos. || I am going to play video games.",
    "T || Voy a jugar videojuegos. || I am going to play video games.",
    false
  ],
  [
    "L4-W6-D2-14",
    4,
    6,
    2,
    13,
    "T || Yo voy a revisar mi teléfono. || I am going to check my phone.",
    "T || Voy a revisar mi teléfono. || I am going to check my phone.",
    false
  ],
  [
    "L4-W6-D3-15",
    4,
    6,
    3,
    14,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W6-D3-05",
    4,
    6,
    3,
    4,
    "Q || What is Emma going to do on a sunny morning next weekend? || She is going to ride a bike.",
    "Q || What is your aunt going to do on a sunny morning next weekend? || She is going to ride a bike.",
    false
  ],
  [
    "L4-W6-D3-01",
    4,
    6,
    3,
    0,
    "Q || When is your brother going to visit his grandma? || He is going to visit his grandma on Sundays.",
    "Q || When is your brother going to visit his grandma? || He is going to visit his grandma next Sunday.",
    false
  ],
  [
    "L4-W6-D3-06",
    4,
    6,
    3,
    5,
    "Q || Where is Leo going to visit his grandma? || He is going to visit his grandma at his grandma's house.",
    "Q || Where is Messi going to watch a movie? || He is going to watch a movie at home.",
    false
  ],
  [
    "L4-W7-D4-16",
    4,
    7,
    4,
    15,
    "H || 🚴 || Name the action. || Ride a bike",
    "H || 🚴 || Guess the action! || Ride a bike",
    false
  ],
  [
    "L4-W7-D4-04",
    4,
    7,
    4,
    3,
    "Q || Where will you visit your grandma? || I will visit my grandma at my grandma's house.",
    "Q || Where will you go on your next vacation? || I will go to the beach.",
    false
  ],
  [
    "L4-W7-D4-06",
    4,
    7,
    4,
    5,
    "Q || Where will you explore a city next Sunday? || I will explore a city in Colombia.",
    "Q || Which city will you explore on vacation? || I will explore Cartagena.",
    false
  ],
  [
    "L4-W7-D4-01",
    4,
    7,
    4,
    0,
    "Q || Where will you explore a city? || I will explore a city in Colombia.",
    "Q || Which city will you explore? || I will explore Bogotá.",
    false
  ],
  [
    "L4-W7-D5-04",
    4,
    7,
    5,
    3,
    "Q || Where will you visit your grandma? || I will visit my grandma at my grandma's house.",
    "Q || Where will you go on your next vacation? || I will go to the beach.",
    false
  ],
  [
    "L4-W8-D4-15",
    4,
    8,
    4,
    14,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L5-W1-D5-14",
    5,
    1,
    5,
    13,
    "Q || Make a simple past sentence with \"I\" and \"order a pizza\". || I ordered a pizza.",
    "T || Pedí una pizza. || I ordered a pizza.",
    false
  ],
  [
    "L5-W2-D4-07",
    5,
    2,
    4,
    6,
    "Q || When did you become friends with Leo? || I became friends with Leo during vacation.",
    "Q || When did you become friends with your best friend? || We became friends last year.",
    false
  ],
  [
    "L5-W2-D5-12",
    5,
    2,
    5,
    11,
    "Q || When did you become friends with Leo? || I became friends with Leo during vacation.",
    "Q || When did you become friends with your best friend? || We became friends last year.",
    false
  ],
  [
    "L5-W2-D5-14",
    5,
    2,
    5,
    13,
    "Q || Make a simple past sentence with \"I\" and \"meet a friend\". || I met a friend.",
    "T || Me encontré con un amigo. || I met a friend.",
    false
  ],
  [
    "L5-W3-D1-05",
    5,
    3,
    1,
    4,
    "Q || What did your mom do after school? || She took a shower.",
    "Q || What did your mom do after work? || She went shopping.",
    false
  ],
  [
    "L5-W3-D1-02",
    5,
    3,
    1,
    1,
    "Q || What did Emma do yesterday afternoon? || She took a shower.",
    "Q || What did your sister do yesterday afternoon? || She took a shower.",
    false
  ],
  [
    "L5-W3-D1-04",
    5,
    3,
    1,
    3,
    "Q || What did your teacher do on your last vacation? || He woke up.",
    "Q || What did your teacher do last weekend? || My teacher went shopping.",
    false
  ],
  [
    "L5-W3-D1-03",
    5,
    3,
    1,
    2,
    "Q || What did Leo do last Saturday? || He tried a new game.",
    "Q || What did your uncle do last Saturday? || He tried a new game.",
    false
  ],
  [
    "L5-W3-D2-01",
    5,
    3,
    2,
    0,
    "Q || Did Emma take a shower? || Yes, she took a shower. / No, she didn't take a shower.",
    "Q || Did your best friend take a shower? || Yes, she took a shower. / No, she didn't take a shower.",
    false
  ],
  [
    "L5-W3-D2-02",
    5,
    3,
    2,
    1,
    "Q || Did Leo try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
    "Q || Did your uncle try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
    false
  ],
  [
    "L5-W3-D3-01",
    5,
    3,
    3,
    0,
    "Q || What did Leo do last weekend? || He tried a new game.",
    "Q || What did your best friend do last weekend? || He tried a new game.",
    false
  ],
  [
    "L5-W3-D4-08",
    5,
    3,
    4,
    7,
    "Q || What did Leo do last night? || He woke up.",
    "Q || What did your brother do last night? || He woke up.",
    false
  ],
  [
    "L5-W3-D5-07",
    5,
    3,
    5,
    6,
    "Q || When did Leo wake up? || He woke up at seven o'clock.",
    "Q || When did your cousin wake up? || He woke up at seven o'clock.",
    false
  ],
  [
    "L5-W3-D5-04",
    5,
    3,
    5,
    3,
    "Q || Who did Emma finish her homework with? || She finished her homework with her brother.",
    "Q || Who did your best friend finish her homework with? || She finished her homework with her brother.",
    false
  ],
  [
    "L5-W3-D5-01",
    5,
    3,
    5,
    0,
    "Q || Who did your mom take a shower with? || She took a shower with her family.",
    "Q || Who did your mom go shopping with? || She went shopping with my aunt.",
    false
  ],
  [
    "L5-W4-D1-15",
    5,
    4,
    1,
    14,
    "H || ➡️ || Name the direction. || Right",
    "H || ➡️ || Guess the hidden direction! || Right",
    false
  ],
  [
    "L5-W4-D1-16",
    5,
    4,
    1,
    15,
    "H || ⬅️ || Name the direction. || Left",
    "H || ⬅️ || Guess the hidden direction! || Left",
    false
  ],
  [
    "L5-W4-D2-15",
    5,
    4,
    2,
    14,
    "H || ➡️ || Name the direction. || Right",
    "H || ➡️ || Guess the hidden direction! || Right",
    false
  ],
  [
    "L5-W4-D2-16",
    5,
    4,
    2,
    15,
    "H || ⬅️ || Name the direction. || Left",
    "H || ⬅️ || Guess the hidden direction! || Left",
    false
  ],
  [
    "L5-W4-D3-15",
    5,
    4,
    3,
    14,
    "H || ➡️ || Name the direction. || Right",
    "H || ➡️ || Guess the hidden direction! || Right",
    false
  ],
  [
    "L5-W4-D3-16",
    5,
    4,
    3,
    15,
    "H || ⬅️ || Name the direction. || Left",
    "H || ⬅️ || Guess the hidden direction! || Left",
    false
  ],
  [
    "L5-W4-D4-15",
    5,
    4,
    4,
    14,
    "H || 👧 || Name the person. || Girl",
    "H || 👧 || Guess the hidden person! || Girl",
    false
  ],
  [
    "L5-W4-D4-16",
    5,
    4,
    4,
    15,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L5-W4-D4-11",
    5,
    4,
    4,
    10,
    "Q || What does the rabbit do in the morning? || It jumps.",
    "Q || What does a rabbit do in the morning? || It jumps.",
    false
  ],
  [
    "L5-W4-D5-15",
    5,
    4,
    5,
    14,
    "H || 💃 || Name the action. || Dance",
    "H || 💃 || Guess the action! || Dance",
    false
  ],
  [
    "L5-W4-D5-05",
    5,
    4,
    5,
    4,
    "Q || Did Leo try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
    "Q || Did your uncle try a new game? || Yes, he tried a new game. / No, he didn't try a new game.",
    false
  ],
  [
    "L5-W4-D5-12",
    5,
    4,
    5,
    11,
    "Q || Make a present progressive sentence with \"He\" and \"take a nap\". || He is taking a nap.",
    "T || Él está tomando una siesta. || He is taking a nap.",
    false
  ],
  [
    "L5-W5-D1-01",
    5,
    5,
    1,
    0,
    "Q || What did Leo do last weekend? || He had a party.",
    "Q || What did your best friend do last weekend? || He had a party.",
    false
  ],
  [
    "L5-W5-D1-05",
    5,
    5,
    1,
    4,
    "Q || What did your dad do yesterday after school? || He sang.",
    "Q || What did your dad do yesterday evening? || He had a party.",
    false
  ],
  [
    "L5-W5-D1-08",
    5,
    5,
    1,
    7,
    "Q || What did Emma do last night? || She sang.",
    "Q || What did your sister do last night? || She sang.",
    false
  ],
  [
    "L5-W5-D2-08",
    5,
    5,
    2,
    7,
    "Q || What did Leo do last night? || He had a party.",
    "Q || What did your brother do last night? || He had a party.",
    false
  ],
  [
    "L5-W5-D2-07",
    5,
    5,
    2,
    6,
    "Q || What did the balloon do yesterday morning? || It flew away.",
    "T || El globo se fue volando durante la fiesta. || The balloon flew away during the party.",
    false
  ],
  [
    "L5-W5-D2-03",
    5,
    5,
    2,
    2,
    "Q || Did the balloon fly away? || Yes, it flew away. / No, it didn't fly away.",
    "T || ¿El globo se fue volando? || Did the balloon fly away?",
    false
  ],
  [
    "L5-W5-D3-07",
    5,
    5,
    3,
    6,
    "Q || When did the balloon fly away? || It flew away in the afternoon.",
    "Q || A balloon flew away during the birthday party. When did it fly away? || It flew away during the birthday party.",
    false
  ],
  [
    "L5-W5-D3-06",
    5,
    5,
    3,
    5,
    "Q || Where did Emma blow out the candles? || She blew out the candles at home.",
    "Q || Where did your best friend blow out the candles? || She blew out the candles at home.",
    false
  ],
  [
    "L5-W5-D3-02",
    5,
    5,
    3,
    1,
    "Q || What did the balloon do yesterday afternoon? || It flew away.",
    "T || El globo rojo se fue volando ayer. || The red balloon flew away yesterday.",
    false
  ],
  [
    "L5-W5-D4-01",
    5,
    5,
    4,
    0,
    "Q || Why did the balloon fly away? || Because the wind was strong.",
    "Q || The wind was strong at the party. A balloon flew away. Why did it fly away? || It flew away because the wind was strong.",
    false
  ],
  [
    "L5-W5-D4-05",
    5,
    5,
    4,
    4,
    "Q || What did Emma do last weekend? || She blew out the candles.",
    "Q || What did your best friend do last weekend? || She blew out the candles.",
    false
  ],
  [
    "L5-W5-D4-06",
    5,
    5,
    4,
    5,
    "Q || Where did the balloon fly away? || It flew away into the sky.",
    "T || El globo se fue volando hacia el cielo. || The balloon flew away into the sky.",
    false
  ],
  [
    "L5-W5-D5-14",
    5,
    5,
    5,
    13,
    "Q || What did Leo do last night? || He had a party.",
    "Q || What did your brother do last night? || He had a party.",
    false
  ],
  [
    "L5-W5-D5-08",
    5,
    5,
    5,
    7,
    "Q || What did Emma do last weekend? || She blew out the candles.",
    "Q || What did your cousin do last weekend? || She blew out the candles.",
    false
  ],
  [
    "L5-W5-D5-05",
    5,
    5,
    5,
    4,
    "Q || What did your dad do yesterday after school? || He sang.",
    "Q || What did your dad do yesterday evening? || He had a party.",
    false
  ],
  [
    "L5-W5-D5-13",
    5,
    5,
    5,
    12,
    "Q || What did Emma do last night? || She sang.",
    "Q || What did your sister do last night? || She sang.",
    false
  ],
  [
    "L5-W6-D1-08",
    5,
    6,
    1,
    7,
    "Q || What did Leo do last night? || He saw a lion.",
    "Q || What did your brother do last night? || He saw a lion.",
    false
  ],
  [
    "L5-W6-D1-07",
    5,
    6,
    1,
    6,
    "Q || When did Emma walk around the zoo? || She walked around the zoo in the morning.",
    "Q || When did your cousin walk around the zoo? || She walked around the zoo in the morning.",
    false
  ],
  [
    "L5-W6-D2-06",
    5,
    6,
    2,
    5,
    "Q || Did Emma talk yesterday? || Yes, she talked. / No, she didn't talk.",
    "Q || Did your best friend talk yesterday? || Yes, she talked. / No, she didn't talk.",
    false
  ],
  [
    "L5-W6-D2-07",
    5,
    6,
    2,
    6,
    "Q || What did Leo do yesterday morning? || He took pictures.",
    "Q || What did your cousin do yesterday morning? || He took pictures.",
    false
  ],
  [
    "L5-W6-D3-05",
    5,
    6,
    3,
    4,
    "Q || What did Emma see at the zoo? || She saw a lion.",
    "Q || What did your cousin see at the zoo? || She saw a lion.",
    false
  ],
  [
    "L5-W6-D3-06",
    5,
    6,
    3,
    5,
    "Q || Where did Leo talk? || He talked at home.",
    "Q || Where did your cousin talk? || He talked at home.",
    false
  ],
  [
    "L5-W6-D4-05",
    5,
    6,
    4,
    4,
    "Q || What did Leo do last weekend? || He talked.",
    "Q || What did your best friend do last weekend? || He talked.",
    false
  ],
  [
    "L5-W6-D4-04",
    5,
    6,
    4,
    3,
    "Q || Who did Emma see a lion with? || She saw a lion with her brother.",
    "Q || Who did your best friend see a lion with? || She saw a lion with her brother.",
    false
  ],
  [
    "L5-W6-D5-08",
    5,
    6,
    5,
    7,
    "Q || What did Leo do last weekend? || He talked.",
    "Q || What did your best friend do last weekend? || He talked.",
    false
  ],
  [
    "L5-W6-D5-13",
    5,
    6,
    5,
    12,
    "Q || What did Leo do last night? || He saw a lion.",
    "Q || What did your brother do last night? || He saw a lion.",
    false
  ],
  [
    "L5-W6-D5-07",
    5,
    6,
    5,
    6,
    "Q || What did Emma see at the zoo? || She saw a lion.",
    "Q || What did your cousin see at the zoo? || She saw a lion.",
    false
  ],
  [
    "L5-W7-D1-07",
    5,
    7,
    1,
    6,
    "Q || When did Leo cook dinner? || He cooked dinner at six o'clock.",
    "Q || When did your best friend cook dinner? || He cooked dinner at six o'clock.",
    false
  ],
  [
    "L5-W7-D1-14",
    5,
    7,
    1,
    13,
    "T || Ella cocinó la cena. || She cooked dinner.",
    "T || Ella cocinó la cena para su familia anoche. || She cooked dinner for her family last night.",
    false
  ],
  [
    "L5-W7-D1-12",
    5,
    7,
    1,
    11,
    "T || Ella limpió el cuarto. || She cleaned the room.",
    "T || Ella limpió el cuarto con su hermana ayer. || She cleaned the room with her sister yesterday.",
    false
  ],
  [
    "L5-W7-D1-16",
    5,
    7,
    1,
    15,
    "T || Mi hermana limpió el cuarto. || My sister cleaned the room.",
    "T || Mi hermana limpió el cuarto el sábado por la mañana. || My sister cleaned the room on Saturday morning.",
    false
  ],
  [
    "L5-W7-D1-15",
    5,
    7,
    1,
    14,
    "T || Mi hermano cocinó la cena. || My brother cooked dinner.",
    "T || Mi hermano cocinó la cena con su papá ayer. || My brother cooked dinner with his dad yesterday.",
    false
  ],
  [
    "L5-W7-D1-11",
    5,
    7,
    1,
    10,
    "T || Él cocinó la cena. || He cooked dinner.",
    "T || Él cocinó la cena para su familia anoche. || He cooked dinner for his family last night.",
    false
  ],
  [
    "L5-W7-D1-13",
    5,
    7,
    1,
    12,
    "T || Él trabajó. || He worked.",
    "T || Él trabajó hasta las cinco ayer. || He worked until five yesterday.",
    false
  ],
  [
    "L5-W7-D2-05",
    5,
    7,
    2,
    4,
    "Q || Did Emma clean the room yesterday? || Yes, she cleaned the room. / No, she didn't clean the room.",
    "Q || Did your cousin clean the room yesterday? || Yes, she cleaned the room. / No, she didn't clean the room.",
    false
  ],
  [
    "L5-W7-D2-11",
    5,
    7,
    2,
    10,
    "T || Ella cocinó la cena. || She cooked dinner.",
    "T || Ella cocinó la cena con su papá ayer. || She cooked dinner with her dad yesterday.",
    false
  ],
  [
    "L5-W7-D2-12",
    5,
    7,
    2,
    11,
    "T || Ella limpió el cuarto. || She cleaned the room.",
    "T || Ella limpió el cuarto el sábado por la mañana. || She cleaned the room on Saturday morning.",
    false
  ],
  [
    "L5-W7-D2-15",
    5,
    7,
    2,
    14,
    "T || Mi hermana limpió el cuarto. || My sister cleaned the room.",
    "T || Mi hermana limpió el cuarto el sábado por la mañana. || My sister cleaned the room on Saturday morning.",
    false
  ],
  [
    "L5-W7-D2-16",
    5,
    7,
    2,
    15,
    "T || Mi hermano trabajó. || My brother worked.",
    "T || Mi hermano trabajó en una oficina ayer por la mañana. || My brother worked in an office yesterday morning.",
    false
  ],
  [
    "L5-W7-D2-14",
    5,
    7,
    2,
    13,
    "T || Él llamó a su abuela. || He called his grandma.",
    "T || Él llamó a su abuela el domingo por la tarde. || He called his grandma on Sunday afternoon.",
    false
  ],
  [
    "L5-W7-D2-13",
    5,
    7,
    2,
    12,
    "T || Él trabajó. || He worked.",
    "T || Él trabajó en una oficina ayer por la mañana. || He worked in an office yesterday morning.",
    false
  ],
  [
    "L5-W7-D3-04",
    5,
    7,
    3,
    3,
    "Q || What did Emma cook for her family? || She cooked dinner.",
    "Q || What did your aunt cook for her family? || She cooked dinner.",
    false
  ],
  [
    "L5-W7-D3-03",
    5,
    7,
    3,
    2,
    "Q || What did your best friend do on the last family trip? || She finished a project.",
    "Q || What did your best friend do after school yesterday? || She finished a project with her classmates.",
    false
  ],
  [
    "L5-W7-D3-05",
    5,
    7,
    3,
    4,
    "Q || What did Leo do last weekend? || He cleaned the room.",
    "Q || What did your best friend do last weekend? || He cleaned the room.",
    false
  ],
  [
    "L5-W7-D3-01",
    5,
    7,
    3,
    0,
    "Q || What did your dad do last weekend? || He worked.",
    "Q || What did your dad do yesterday morning? || He worked in an office.",
    false
  ],
  [
    "L5-W7-D3-11",
    5,
    7,
    3,
    10,
    "T || Ella cocinó la cena. || She cooked dinner.",
    "T || Ella cocinó la cena después del trabajo. || She cooked dinner after work.",
    false
  ],
  [
    "L5-W7-D3-12",
    5,
    7,
    3,
    11,
    "T || Ella limpió el cuarto. || She cleaned the room.",
    "T || Ella limpió el cuarto antes de la cena. || She cleaned the room before dinner.",
    false
  ],
  [
    "L5-W7-D3-16",
    5,
    7,
    3,
    15,
    "T || Mi hermano llamó a su abuela. || My brother called his grandma.",
    "T || Mi hermano llamó a su abuela el domingo por la tarde. || My brother called his grandma on Sunday afternoon.",
    false
  ],
  [
    "L5-W7-D3-15",
    5,
    7,
    3,
    14,
    "T || Mi hermano trabajó. || My brother worked.",
    "T || Mi hermano trabajó en una oficina ayer por la mañana. || My brother worked in an office yesterday morning.",
    false
  ],
  [
    "L5-W7-D3-14",
    5,
    7,
    3,
    13,
    "T || Él llamó a su abuela. || He called his grandma.",
    "T || Él llamó a su abuela para hablar de sus vacaciones. || He called his grandma to talk about his vacation.",
    false
  ],
  [
    "L5-W7-D3-13",
    5,
    7,
    3,
    12,
    "T || Él trabajó. || He worked.",
    "T || Él trabajó en casa después del almuerzo. || He worked at home after lunch.",
    false
  ],
  [
    "L5-W7-D4-03",
    5,
    7,
    4,
    2,
    "Q || Why did Emma cook dinner? || Because her family was hungry.",
    "Q || Why did your aunt cook dinner? || Because her family was hungry.",
    false
  ],
  [
    "L5-W7-D4-04",
    5,
    7,
    4,
    3,
    "Q || Why did Leo clean the room? || Because the room was dirty.",
    "Q || Why did your brother clean the room? || Because the room was dirty.",
    false
  ],
  [
    "L5-W7-D4-11",
    5,
    7,
    4,
    10,
    "T || Ella cocinó la cena. || She cooked dinner.",
    "T || Ella cocinó la cena para su familia anoche. || She cooked dinner for her family last night.",
    false
  ],
  [
    "L5-W7-D4-14",
    5,
    7,
    4,
    13,
    "T || Ella llamó a su abuela. || She called her grandma.",
    "T || Ella llamó a su abuela después de la escuela. || She called her grandma after school.",
    false
  ],
  [
    "L5-W7-D4-16",
    5,
    7,
    4,
    15,
    "T || Mi hermana cocinó la cena. || My sister cooked dinner.",
    "T || Mi hermana cocinó la cena después del trabajo. || My sister cooked dinner after work.",
    false
  ],
  [
    "L5-W7-D4-15",
    5,
    7,
    4,
    14,
    "T || Mi hermana llamó a su abuela. || My sister called her grandma.",
    "T || Mi hermana llamó a su abuela el domingo por la tarde. || My sister called her grandma on Sunday afternoon.",
    false
  ],
  [
    "L5-W7-D4-12",
    5,
    7,
    4,
    11,
    "T || Él limpió el cuarto. || He cleaned the room.",
    "T || Él limpió el cuarto con su hermana ayer. || He cleaned the room with his sister yesterday.",
    false
  ],
  [
    "L5-W7-D4-13",
    5,
    7,
    4,
    12,
    "T || Él trabajó. || He worked.",
    "T || Él trabajó hasta las cinco ayer. || He worked until five yesterday.",
    false
  ],
  [
    "L5-W7-D5-02",
    5,
    7,
    5,
    1,
    "Q || What time did Emma cook dinner? || She cooked dinner at four o'clock.",
    "Q || What time did your cousin cook dinner? || She cooked dinner at four o'clock.",
    false
  ],
  [
    "L5-W7-D5-03",
    5,
    7,
    5,
    2,
    "Q || What time did Leo clean the room? || He cleaned the room at six thirty.",
    "Q || What time did your uncle clean the room? || He cleaned the room at six thirty.",
    false
  ],
  [
    "L5-W7-D5-16",
    5,
    7,
    5,
    15,
    "T || Mi hermana cocinó la cena. || My sister cooked dinner.",
    "T || Mi hermana cocinó la cena para su familia anoche. || My sister cooked dinner for her family last night.",
    false
  ],
  [
    "L5-W7-D5-15",
    5,
    7,
    5,
    14,
    "T || Mi hermano cocinó la cena. || My brother cooked dinner.",
    "T || Mi hermano cocinó la cena después del trabajo. || My brother cooked dinner after work.",
    false
  ],
  [
    "L5-W7-D5-11",
    5,
    7,
    5,
    10,
    "T || Él cocinó la cena. || He cooked dinner.",
    "T || Él cocinó la cena con su papá ayer. || He cooked dinner with his dad yesterday.",
    false
  ],
  [
    "L5-W7-D5-12",
    5,
    7,
    5,
    11,
    "T || Él limpió el cuarto. || He cleaned the room.",
    "T || Él limpió el cuarto el sábado por la mañana. || He cleaned the room on Saturday morning.",
    false
  ],
  [
    "L5-W7-D5-14",
    5,
    7,
    5,
    13,
    "T || Él llamó a su abuela. || He called his grandma.",
    "T || Él llamó a su abuela el domingo por la tarde. || He called his grandma on Sunday afternoon.",
    false
  ],
  [
    "L5-W7-D5-13",
    5,
    7,
    5,
    12,
    "T || Él trabajó. || He worked.",
    "T || Él trabajó en una oficina ayer por la mañana. || He worked in an office yesterday morning.",
    false
  ],
  [
    "L5-W8-D1-12",
    5,
    8,
    1,
    11,
    "Q || Say a sentence with \"at night\". || I read at night.",
    "T || Leo por la noche. || I read at night.",
    false
  ],
  [
    "L5-W8-D2-12",
    5,
    8,
    2,
    11,
    "Q || Say a sentence with \"at night\". || I read at night.",
    "T || Leo por la noche. || I read at night.",
    false
  ],
  [
    "L5-W8-D3-12",
    5,
    8,
    3,
    11,
    "Q || Say a sentence with \"at night\". || I read at night.",
    "T || Leo por la noche. || I read at night.",
    false
  ],
  [
    "L5-W8-D4-15",
    5,
    8,
    4,
    14,
    "H || 🎨 || Name the action. || Paint",
    "H || 🧑‍🎨 🖌️ 🎨 || Guess the action! || Paint",
    false
  ],
  [
    "L5-W8-D4-01",
    5,
    8,
    4,
    0,
    "Q || What did Leo do last weekend? || He had a party.",
    "Q || What did your best friend do last weekend? || He had a party.",
    false
  ],
  [
    "L5-W8-D4-13",
    5,
    8,
    4,
    12,
    "Q || When is Leo going to pay for a snack? || He is going to pay for a snack in the afternoon.",
    "Q || When is your best friend going to pay for a snack? || He is going to pay for a snack in the afternoon.",
    false
  ],
  [
    "L5-W8-D4-11",
    5,
    8,
    4,
    10,
    "Q || Where does the parrot talk? || It talks at home.",
    "Q || Where does a parrot talk? || It talks at home.",
    false
  ],
  [
    "L5-W8-D4-14",
    5,
    8,
    4,
    13,
    "Q || Make a simple past sentence with \"She\" and \"wake up\". || She woke up.",
    "T || Ella se despertó. || She woke up.",
    false
  ],
  [
    "L5-W8-D5-16",
    5,
    8,
    5,
    15,
    "H || ⬅️ || Name the direction. || Left",
    "H || ⬅️ || Guess the hidden direction! || Left",
    false
  ],
  [
    "L5-W8-D5-12",
    5,
    8,
    5,
    11,
    "Q || Make a present progressive sentence with \"They\" and \"swing\". || They are swinging.",
    "T || Ellos se están meciendo en los columpios. || They are swinging.",
    false
  ],
  [
    "L5-W8-D5-08",
    5,
    8,
    5,
    7,
    "Q || Say a sentence with \"at night\". || I read at night.",
    "T || Leo por la noche. || I read at night.",
    false
  ]
];
const course = "Kids Super Intensivo";

describe("approved targeted curriculum corrections", () => {
  it.each(corrections)("%s keeps the supplied card type and day assignment", (id, level, week, day, index, _old, replacement, isMistake) => {
    const selection = { course, level, week, day };
    const selected = getDay(selection).day;
    if (id !== "CONTENT-EXCEPTION-01") {
      expect(selected.lines).toHaveLength(16);
      expect(selected.mistakes).toHaveLength(2);
      expect(new Set(selected.lines).size).toBe(16);
    }
    const f = replacement.split(" || ");
    const kind = f[0];
    if (isMistake) {
      expect(selected.mistakes?.[index]).toBe(replacement);
      expect(kind).toBe("M");
      return;
    }
    expect(selected.lines[index]).toBe(replacement);
    // Mirror parseDay in src/lib/content.ts per card type.
    const expected = kind === "Q" ? { prompt: f[1], answers: f[2]?.split(" / ") }
      : kind === "T" ? { prompt: f[1], answers: [f[2]] }
      : kind === "F" ? { prompt: f[1], answers: [f[1]!.replace("____", f[2]!)] }
      : { prompt: f[2], answers: f[3]?.split(" / ") }; // S, E, H
    const deck = kind === "H" ? drawItems(selection, 1000, "mix").items : chairDeck(selection, "mix");
    const card = deck.find(item => item.week === week && item.day === day && item.id === `w${week}d${day}-${index}`);
    expect(card?.kind).toBe(kind);
    expect(card?.prompt).toBe(expected.prompt);
    expect(card?.answers).toEqual(expected.answers);
    if (kind === "T") {
      expect(drawItems(selection, 1000, "wh").items.some(item => item.id === card?.id)).toBe(false);
      expect(chairDeck(selection, "wh").some(item => item.id === card?.id)).toBe(false);
    }
  });

  it("preserves every unrelated record, all metadata, vocabulary, mistakes and protected weeks", () => {
    const restored = structuredClone(COURSES);
    for (const [_id, level, week, day, index, old, _replacement, isMistake] of corrections) {
      const selected = restored.find(c => c.name === course)?.levels.find(l => l.level === level)?.weeks.find(w => w.week === week)?.days.find(d => d.day === day);
      if (!selected) throw new Error("Missing correction day");
      if (isMistake) selected.mistakes![index] = old;
      else selected.lines[index] = old;
    }
    expect(createHash("sha256").update(JSON.stringify(restored)).digest("hex")).toBe("8293c1f5b6f108a5147eebd2a340bc55f0973367a6391af3130723431401e5a4");
  });
});
