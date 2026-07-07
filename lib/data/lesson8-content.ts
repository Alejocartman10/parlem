import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_8_ID = "l08-restaurant";

const template: LessonTemplateData = {
  lessonId: LESSON_8_ID,

  introduction: {
    icon: "🍽️",
    title: "Al restaurant",
    description:
      "Anar a un restaurant, demanar el menú, preguntar pels ingredients o pagar el compte " +
      "són situacions quotidianes on el català et farà sentir molt més integrat.",
  },

  objectives: [
    "Demanar taula i menú en un restaurant.",
    "Preguntar pels ingredients i al·lèrgens d'un plat.",
    "Fer una comanda completa: primer, segon i beguda.",
    "Demanar el compte i entendre com es paga.",
  ],

  vocabulary: {
    title: "Vocabulari del restaurant",
    items: [
      { id: "v01", icon: "🍽️", catalan: "el restaurant", spanish: "el restaurante" },
      { id: "v02", icon: "📋", catalan: "la carta / el menú", spanish: "la carta / el menú" },
      { id: "v03", icon: "🪑", catalan: "la taula", spanish: "la mesa" },
      { id: "v04", icon: "🧑‍🍳", catalan: "el cambrer / la cambrera", spanish: "el camarero / la camarera" },
      { id: "v05", icon: "🥗", catalan: "el primer plat", spanish: "el primer plato" },
      { id: "v06", icon: "🍖", catalan: "el segon plat", spanish: "el segundo plato" },
      { id: "v07", icon: "🍰", catalan: "la postres", spanish: "el postre" },
      { id: "v08", icon: "🥤", catalan: "la beguda", spanish: "la bebida" },
      { id: "v09", icon: "💧", catalan: "l'aigua", spanish: "el agua" },
      { id: "v10", icon: "🍷", catalan: "el vi", spanish: "el vino" },
      { id: "v11", icon: "🧾", catalan: "el compte", spanish: "la cuenta" },
      { id: "v12", icon: "💳", catalan: "pagar amb targeta", spanish: "pagar con tarjeta" },
      { id: "v13", icon: "💵", catalan: "pagar en efectiu", spanish: "pagar en efectivo" },
      { id: "v14", icon: "🥜", catalan: "l'al·lèrgia", spanish: "la alergia" },
      { id: "v15", icon: "🌱", catalan: "vegetarià / vegetariana", spanish: "vegetariano / vegetariana" },
      { id: "v16", icon: "🌾", catalan: "sense gluten", spanish: "sin gluten" },
      { id: "v17", icon: "🧂", catalan: "l'ingredient", spanish: "el ingrediente" },
      { id: "v18", icon: "🍞", catalan: "el pa", spanish: "el pan" },
      { id: "v19", icon: "🫒", catalan: "l'oli d'oliva", spanish: "el aceite de oliva" },
      { id: "v20", icon: "🧊", catalan: "amb gel", spanish: "con hielo" },
      { id: "v21", icon: "🍽️", catalan: "recomanar", spanish: "recomendar" },
      { id: "v22", icon: "🙋", catalan: "demanar (un plat)", spanish: "pedir (un plato)" },
      { id: "v23", icon: "✅", catalan: "estar bo / bona", spanish: "estar bueno / buena" },
      { id: "v24", icon: "❓", catalan: "Què porta aquest plat?", spanish: "¿Qué lleva este plato?" },
      { id: "v25", icon: "❓", catalan: "Em recomana algun plat?", spanish: "¿Me recomienda algún plato?" },
      { id: "v26", icon: "🎉", catalan: "el menú del dia", spanish: "el menú del día" },
      { id: "v27", icon: "🍴", catalan: "els coberts", spanish: "los cubiertos" },
      { id: "v28", icon: "🧾", catalan: "la propina", spanish: "la propina" },
      { id: "v29", icon: "🥘", catalan: "el plat del dia", spanish: "el plato del día" },
      { id: "v30", icon: "🙏", catalan: "que aprofiti!", spanish: "¡que aproveche!" },
    ],
  },

  explanation: {
    title: "Com fer una comanda completa",
    bullets: [
      'Per demanar: "Voldria el menú del dia", "Per a mi, el primer de..., i de segon...".',
      'Per preguntar per ingredients: "Què porta aquest plat?", "Té gluten?", "És vegetarià?".',
      '"El compte, si us plau" és la forma habitual i educada de demanar la factura.',
      '"Que aprofiti!" és l\'equivalent de "que aproveche" i s\'usa abans de començar a menjar.',
    ],
  },

  audio: {
    phrase: "Bona tarda! Voldria el menú del dia. De primer, amanida, i de segon, peix. Per beure, aigua, si us plau.",
    translation:
      "¡Buenas tardes! Quería el menú del día. De primero, ensalada, y de segundo, pescado. Para beber, agua, por favor.",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu \"la cuenta\" en català?",
      options: [
        { id: "a", label: "el menú" },
        { id: "b", label: "el compte" },
        { id: "c", label: "la propina" },
        { id: "d", label: "els coberts" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el vocabulari del restaurant",
      pairs: [
        { id: "m1", left: "cambrer", right: "camarero" },
        { id: "m2", left: "postres", right: "postre" },
        { id: "m3", left: "compte", right: "cuenta" },
        { id: "m4", left: "coberts", right: "cubiertos" },
        { id: "m5", left: "propina", right: "propina" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "El",
      promptAfter: ", si us plau.",
      correctAnswer: "compte",
      wordBank: ["compte", "menú", "plat", "cambrer"],
      translation: "La cuenta, por favor.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["porta", "aquest", "Què", "plat?"],
      correctOrder: ["Què", "porta", "aquest", "plat?"],
      translation: "¿Qué lleva este plato?",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "¿Me recomienda algún plato?",
      correctAnswer: "Em recomana algun plat?",
      acceptedAnswers: [
        "em recomana algun plat?",
        "em recomana algun plat",
      ],
      translation: "¿Me recomienda algún plato?",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "\"El compte\", no \"la cuenta\"",
    wrong: '"La cuenta, si us plau"',
    correct: '"El compte, si us plau"',
    explanation:
      'Molts hispanoparlants fan servir directament "la cuenta" en comptes de traduir-la, ' +
      'o s\'equivoquen amb el gènere pensant que és femení com en castellà. ' +
      'En català, "el compte" és masculí: "El compte, si us plau", "Pots portar-me el compte?". ' +
      "Aquest error de gènere és molt comú perquè la paraula castellana \"cuenta\" és femenina " +
      "mentre que la catalana \"compte\" és masculina.",
  },

  conversation: {
    title: "Fent la comanda",
    lines: [
      { id: "l1", speaker: "laia", text: "Bona tarda! Ja sap què vol demanar?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Perfecte, de seguida els hi porto. Que aprofiti!" },
    ],
    question: "Com faries la comanda del menú del dia?",
    options: [
      { id: "a", label: "De primer, amanida, i de segon, pollastre, si us plau.", correct: true },
      { id: "b", label: "Vull la cuenta del primer plat.", correct: false },
      { id: "c", label: "Porta'm els coberts de postres.", correct: false },
      { id: "d", label: "Demano el compte per menjar.", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"El compte" és masculí, no "la cuenta" com en castellà.',
    '"Què porta aquest plat?" per preguntar pels ingredients d\'un plat.',
    '"De primer... i de segon..." per estructurar una comanda de menú del dia.',
    '"Que aprofiti!" s\'usa abans de començar a menjar.',
    '"Voldria..." és una forma cortesa i habitual per fer qualsevol comanda.',
  ],

  culturalCuriosity: {
    icon: "🥘",
    title: "El menú del dia",
    content:
      "El \"menú del dia\" és una institució a Catalunya i a tot Espanya: " +
      "un àpat complet (primer, segon, postres, pa i beguda) a un preu tancat, " +
      "disponible normalment de dilluns a divendres al migdia. " +
      "Va néixer com una llei dels anys 60 per garantir menjars assequibles als viatgers, " +
      "però avui és l'opció preferida de molts treballadors per dinar fora de casa cada dia. " +
      "Preguntar \"Teniu menú del dia?\" en arribar a un restaurant al migdia és totalment habitual i esperat.",
  },
};

export const lesson8Content = buildInteractiveLesson(template);