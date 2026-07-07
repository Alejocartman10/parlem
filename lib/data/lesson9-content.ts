import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_9_ID = "l09-habitatge";

const template: LessonTemplateData = {
  lessonId: LESSON_9_ID,

  introduction: {
    icon: "🏠",
    title: "Buscar habitatge",
    description:
      "Buscar pis de lloguer, entendre anuncis i negociar amb el propietari són passos clau " +
      "per instal·lar-te a Catalunya. Aprèn el vocabulari i les expressions essencials per fer-ho amb seguretat.",
  },

  objectives: [
    "Entendre anuncis de lloguer d'habitatge.",
    "Preguntar per les condicions d'un pis: preu, fiança, subministraments.",
    "Parlar amb el propietari o l'agència immobiliària.",
    "Conèixer el vocabulari bàsic del contracte de lloguer.",
  ],

  vocabulary: {
    title: "Vocabulari de l'habitatge",
    items: [
      { id: "v01", icon: "🏠", catalan: "l'habitatge", spanish: "la vivienda" },
      { id: "v02", icon: "🏢", catalan: "el pis", spanish: "el piso" },
      { id: "v03", icon: "🔑", catalan: "el lloguer", spanish: "el alquiler" },
      { id: "v04", icon: "🏘️", catalan: "el propietari / la propietària", spanish: "el propietario / la propietaria" },
      { id: "v05", icon: "🤵", catalan: "el llogater / la llogatera", spanish: "el inquilino / la inquilina" },
      { id: "v06", icon: "🏬", catalan: "l'agència immobiliària", spanish: "la agencia inmobiliaria" },
      { id: "v07", icon: "📝", catalan: "el contracte de lloguer", spanish: "el contrato de alquiler" },
      { id: "v08", icon: "💰", catalan: "la fiança", spanish: "la fianza" },
      { id: "v09", icon: "💡", catalan: "els subministraments", spanish: "los suministros" },
      { id: "v10", icon: "🛋️", catalan: "moblat / moblada", spanish: "amueblado / amueblada" },
      { id: "v11", icon: "🛏️", catalan: "l'habitació", spanish: "la habitación" },
      { id: "v12", icon: "🚿", catalan: "el bany", spanish: "el baño" },
      { id: "v13", icon: "🍳", catalan: "la cuina", spanish: "la cocina" },
      { id: "v14", icon: "🌇", catalan: "el balcó", spanish: "el balcón" },
      { id: "v15", icon: "🛗", catalan: "l'ascensor", spanish: "el ascensor" },
      { id: "v16", icon: "📐", catalan: "els metres quadrats", spanish: "los metros cuadrados" },
      { id: "v17", icon: "🧾", catalan: "les despeses de comunitat", spanish: "los gastos de comunidad" },
      { id: "v18", icon: "📅", catalan: "la durada del contracte", spanish: "la duración del contrato" },
      { id: "v19", icon: "🐕", catalan: "es permeten animals", spanish: "se permiten animales" },
      { id: "v20", icon: "🚭", catalan: "no fumadors", spanish: "no fumadores" },
      { id: "v21", icon: "🔍", catalan: "visitar el pis", spanish: "visitar el piso" },
      { id: "v22", icon: "📞", catalan: "concertar una visita", spanish: "concertar una visita" },
      { id: "v23", icon: "✍️", catalan: "signar el contracte", spanish: "firmar el contrato" },
      { id: "v24", icon: "❓", catalan: "Quant costa el lloguer?", spanish: "¿Cuánto cuesta el alquiler?" },
      { id: "v25", icon: "❓", catalan: "Què inclou el preu?", spanish: "¿Qué incluye el precio?" },
      { id: "v26", icon: "📦", catalan: "el trasllat", spanish: "la mudanza" },
      { id: "v27", icon: "🏙️", catalan: "cèntric / cèntrica", spanish: "céntrico / céntrica" },
      { id: "v28", icon: "☀️", catalan: "assolellat / assolellada", spanish: "soleado / soleada" },
      { id: "v29", icon: "🧹", catalan: "reformat / reformada", spanish: "reformado / reformada" },
      { id: "v30", icon: "🗝️", catalan: "les claus", spanish: "las llaves" },
    ],
  },

  explanation: {
    title: "Negociar i entendre un lloguer",
    bullets: [
      'Per preguntar el preu i condicions: "Quant costa el lloguer?", "Què inclou el preu?", "Es paga fiança?".',
      '"Moblat/moblada" i "reformat/reformada" concorden en gènere amb "el pis" o "la casa".',
      'La fiança sol ser d\'un o dos mesos de lloguer i es retorna en finalitzar el contracte si tot està correcte.',
      'Per concertar una visita: "M\'agradaria visitar el pis. Quan podria ser?".',
    ],
  },

  audio: {
    phrase: "Bon dia, truco per l'anunci del pis. Quant costa el lloguer i què inclou el preu?",
    translation:
      "Buenos días, llamo por el anuncio del piso. ¿Cuánto cuesta el alquiler y qué incluye el precio?",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu \"la fianza\" en català?",
      options: [
        { id: "a", label: "el lloguer" },
        { id: "b", label: "la fiança" },
        { id: "c", label: "el contracte" },
        { id: "d", label: "el subministrament" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el vocabulari de l'habitatge",
      pairs: [
        { id: "m1", left: "llogater", right: "inquilino" },
        { id: "m2", left: "moblat", right: "amueblado" },
        { id: "m3", left: "ascensor", right: "ascensor" },
        { id: "m4", left: "claus", right: "llaves" },
        { id: "m5", left: "trasllat", right: "mudanza" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Quant",
      promptAfter: "el lloguer?",
      correctAnswer: "costa",
      wordBank: ["costa", "val", "puja", "és"],
      translation: "¿Cuánto cuesta el alquiler?",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["inclou", "Què", "preu?", "el"],
      correctOrder: ["Què", "inclou", "el", "preu?"],
      translation: "¿Qué incluye el precio?",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "Me gustaría visitar el piso.",
      correctAnswer: "M'agradaria visitar el pis.",
      acceptedAnswers: [
        "m'agradaria visitar el pis.",
        "m'agradaria visitar el pis",
        "magradaria visitar el pis",
      ],
      translation: "Me gustaría visitar el piso.",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "\"El pis\", no \"l'apartament\" per defecte",
    wrong: '"Visc en un apartament de dues habitacions"',
    correct: '"Visc en un pis de dues habitacions"',
    explanation:
      'Encara que "l\'apartament" existeix en català, la paraula habitual i quotidiana per referir-se a un habitatge urbà ' +
      'en un edifici és "el pis", no "l\'apartament" (que sona més a allotjament turístic o vacacional). ' +
      'Es diu "Busco un pis de lloguer", "Visc en un pis al centre". ' +
      "Aquest matís és important perquè fer-lo servir malament pot donar la impressió que parles d'un allotjament temporal.",
  },

  conversation: {
    title: "Trucant per un anunci de lloguer",
    lines: [
      { id: "l1", speaker: "laia", text: "Digui? Sí, encara està disponible el pis." },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "El lloguer és de 900 euros al mes, més una fiança d'un mes." },
    ],
    question: "Com preguntaries si es permeten animals al pis?",
    options: [
      { id: "a", label: "Es permeten animals al pis?", correct: true },
      { id: "b", label: "L'apartament té fiança d'animals?", correct: false },
      { id: "c", label: "Quant costa un gos al lloguer?", correct: false },
      { id: "d", label: "El pis és per a animals?", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"El pis" és la paraula habitual per a un habitatge urbà, no "l\'apartament".',
    '"Quant costa el lloguer?" i "Què inclou el preu?" per preguntar condicions.',
    '"La fiança" sol ser d\'un o dos mesos de lloguer.',
    '"Moblat/moblada" i "reformat/reformada" concorden en gènere amb el substantiu.',
    '"M\'agradaria visitar el pis" és la forma cortesa per concertar una visita.',
  ],

  culturalCuriosity: {
    icon: "📈",
    title: "El mercat de lloguer a Barcelona",
    content:
      "Barcelona té un dels mercats de lloguer més tensionats d'Espanya, " +
      "amb preus que han pujat significativament en barris com l'Eixample, Gràcia o el Born. " +
      "Des de 2020, la ciutat aplica una regulació de preus de lloguer en zones declarades \"tensionades\", " +
      "que limita l'increment que poden aplicar els propietaris en nous contractes. " +
      "Per això, molta gent que arriba de fora busca fora del centre, " +
      "en barris com Sants, Sant Andreu o l'Hospitalet, on els preus solen ser més accessibles.",
  },
};

export const lesson9Content = buildInteractiveLesson(template);