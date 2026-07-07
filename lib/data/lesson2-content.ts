import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_2_ID = "l02-numeros";

const template: LessonTemplateData = {
  lessonId: LESSON_2_ID,

  introduction: {
    icon: "🔢",
    title: "Els números de l'1 al 100",
    description:
      "Els números en català et seran imprescindibles: per entendre preus, adreces, telèfons i horaris. Avui els aprens tots.",
  },

  objectives: [
    "Comptar del 0 al 20 sense dubtar.",
    "Reconèixer les desenes fins a 100.",
    "Usar els números en situacions reals: preus, edats, pisos.",
    "Distingir \"dos\" (masculí) de \"dues\" (femení).",
  ],

  vocabulary: {
    title: "Els números essencials",
    items: [
      { id: "v01", icon: "0️⃣", catalan: "zero", spanish: "cero" },
      { id: "v02", icon: "1️⃣", catalan: "un / una", spanish: "uno / una" },
      { id: "v03", icon: "2️⃣", catalan: "dos / dues", spanish: "dos" },
      { id: "v04", icon: "3️⃣", catalan: "tres", spanish: "tres" },
      { id: "v05", icon: "4️⃣", catalan: "quatre", spanish: "cuatro" },
      { id: "v06", icon: "5️⃣", catalan: "cinc", spanish: "cinco" },
      { id: "v07", icon: "6️⃣", catalan: "sis", spanish: "seis" },
      { id: "v08", icon: "7️⃣", catalan: "set", spanish: "siete" },
      { id: "v09", icon: "8️⃣", catalan: "vuit", spanish: "ocho" },
      { id: "v10", icon: "9️⃣", catalan: "nou", spanish: "nueve" },
      { id: "v11", icon: "🔟", catalan: "deu", spanish: "diez" },
      { id: "v12", icon: "✨", catalan: "quinze", spanish: "quince" },
      { id: "v13", icon: "🔵", catalan: "vint", spanish: "veinte" },
      { id: "v14", icon: "🟡", catalan: "cinquanta", spanish: "cincuenta" },
      { id: "v15", icon: "💯", catalan: "cent", spanish: "cien" },
    ],
  },

  explanation: {
    title: "Tres regles clau",
    bullets: [
      '"Dos" canvia a "dues" davant de paraules femenines: "dos pisos" però "dues habitacions".',
      'Del 21 al 29 es forma amb guionet: "vint-i-un", "vint-i-dos", "vint-i-tres"...',
      '"Nou" significa tant el número 9 com "nou/nova" (new). Depèn del context.',
    ],
  },

  audio: {
    phrase: "El pis té tres habitacions i val vuit-cents euros al mes.",
    translation: "El piso tiene tres habitaciones y vale ochocientos euros al mes.",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu el número 7 en català?",
      options: [
        { id: "a", label: "sis" },
        { id: "b", label: "vuit" },
        { id: "c", label: "set" },
        { id: "d", label: "nou" },
      ],
      correctOptionId: "c",
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Tinc",
      promptAfter: "filles i dos fills.",
      correctAnswer: "dues",
      wordBank: ["dos", "dues", "dous", "dos"],
      translation: "Tengo dos hijas y dos hijos.",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el número amb la seva paraula",
      pairs: [
        { id: "m1", left: "1", right: "un" },
        { id: "m2", left: "5", right: "cinc" },
        { id: "m3", left: "10", right: "deu" },
        { id: "m4", left: "20", right: "vint" },
        { id: "m5", left: "100", right: "cent" },
      ],
      xp: 5,
    },
    {
      type: "word-order",
      words: ["Tinc", "anys.", "trenta-dos"],
      correctOrder: ["Tinc", "trenta-dos", "anys."],
      translation: "Tengo treinta y dos años.",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Escriu en català el número",
      prompt: "8",
      correctAnswer: "vuit",
      acceptedAnswers: ["vuit"],
      translation: "ocho",
      xp: 5,
    },
    {
      type: "multiple-choice",
      question: "Com diries \"quince\" en català?",
      options: [
        { id: "a", label: "quince" },
        { id: "b", label: "quinze" },
        { id: "c", label: "cinquanta" },
        { id: "d", label: "catorze" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
  ],

  commonError: {
    icon: "🔢",
    title: "Dos o dues?",
    wrong: '"Tinc dos germanes"',
    correct: '"Tinc dues germanes"',
    explanation:
      'En català, "dos" és la forma masculina i "dues" és la forma femenina. ' +
      'A diferència del castellà, on "dos" és invariable, en català cal adaptar-lo: ' +
      '"dos germans" (masculí) però "dues germanes" (femení). ' +
      'Passa el mateix amb "uns/unes" i "molts/moltes".',
  },

  conversation: {
    title: "Al mercat de la Boqueria",
    lines: [
      { id: "l1", speaker: "laia", text: "Bon dia! Quants quilos de tomàquets vols?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Tres quilos? Perfecte. Són dos euros cinquanta." },
    ],
    question: "Com diries que vols tres quilos?",
    options: [
      { id: "a", label: "Tres quilos, per favor.", correct: true },
      { id: "b", label: "Vint quilos, gràcies.", correct: false },
      { id: "c", label: "Zero quilos, adéu.", correct: false },
      { id: "d", label: "Cent quilos, si us plau.", correct: false },
    ],
    xp: 5,
  },

  review: [
    "0-10: zero, un, dos, tres, quatre, cinc, sis, set, vuit, nou, deu.",
    '"Dos" (masculí) / "dues" (femení): "dos pisos", "dues habitacions".',
    "Del 21 al 29: vint-i-un, vint-i-dos... (amb guionet i la \"i\" al mig).",
    '"Quinze" és 15 en català, no confondre amb "cinquanta" (50).',
    '"Cent" és 100. "Dos-cents" és 200; "dues-centes" si és femení.',
  ],

  culturalCuriosity: {
    icon: "💃",
    title: "Comptar a la sardana",
    content:
      "La sardana és la dansa nacional catalana. Els músics compten en veu alta per coordinar els passos, " +
      "i els balladors han de saber comptar en grups de 5, 8 i 11 passos. " +
      "Quan veus una sardana a la plaça de la Catedral de Barcelona els diumenges, " +
      "escolta com la cobla (l'orquestra) marca els temps amb números en català.",
  },
};

export const lesson2Content = buildInteractiveLesson(template);
