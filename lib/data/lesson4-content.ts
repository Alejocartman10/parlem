import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_4_ID = "l04-feina";

const template: LessonTemplateData = {
  lessonId: LESSON_4_ID,

  introduction: {
    icon: "💼",
    title: "Parlant de la feina",
    description:
      "Un dels contextos on més necessitaràs el català és la feina. " +
      "Aprèn a presentar-te professionalment, parlar de la teva empresa i del teu dia a dia laboral.",
  },

  objectives: [
    "Dir a què et dediques i on treballes.",
    "Presentar-te en un entorn professional en català.",
    "Entendre vocabulari bàsic de l'oficina i l'empresa.",
    "Preguntar i respondre sobre la feina d'una altra persona.",
  ],

  vocabulary: {
    title: "Vocabulari de la feina",
    items: [
      { id: "v01", icon: "🏢", catalan: "la feina / el treball", spanish: "el trabajo" },
      { id: "v02", icon: "🏭", catalan: "l'empresa", spanish: "la empresa" },
      { id: "v03", icon: "👔", catalan: "el cap / la cap", spanish: "el jefe / la jefa" },
      { id: "v04", icon: "🤝", catalan: "el company de feina", spanish: "el compañero de trabajo" },
      { id: "v05", icon: "📊", catalan: "la reunió", spanish: "la reunión" },
      { id: "v06", icon: "🖥️", catalan: "el despatx", spanish: "el despacho / la oficina" },
      { id: "v07", icon: "💰", catalan: "el sou", spanish: "el sueldo" },
      { id: "v08", icon: "⚕️", catalan: "el metge / la metgessa", spanish: "el médico / la médica" },
      { id: "v09", icon: "📚", catalan: "el professor / la professora", spanish: "el profesor / la profesora" },
      { id: "v10", icon: "⚖️", catalan: "l'advocat / l'advocada", spanish: "el abogado / la abogada" },
      { id: "v11", icon: "⚙️", catalan: "l'enginyer / l'enginyera", spanish: "el ingeniero / la ingeniera" },
      { id: "v12", icon: "💻", catalan: "el programador / la programadora", spanish: "el programador / la programadora" },
      { id: "v13", icon: "🔧", catalan: "Em dedico a...", spanish: "Me dedico a..." },
      { id: "v14", icon: "✅", catalan: "Sóc [professió]", spanish: "Soy [profesión]" },
      { id: "v15", icon: "💻", catalan: "treballar (en/a)", spanish: "trabajar (en/a)" },
    ],
  },

  explanation: {
    title: "Com parlar de la professió",
    bullets: [
      'Per dir la teva professió: "Sóc metge/metgessa", "Sóc advocat/advocada". Sense article.',
      '"Em dedico a la medicina / a l\'enginyeria / a l\'educació" és una alternativa més formal.',
      '"La feina" és la paraula més habitual per a "el trabajo" en el parlar quotidià català.',
      '"El cap" significa "el jefe/la jefa" a la feina, però també "el cap" (the head) del cos. El context ho aclareix.',
    ],
  },

  audio: {
    phrase: "Bon dia! Sóc l'Arnau. Sóc enginyer i treballo en una empresa de tecnologia al 22@.",
    translation:
      "¡Buenos días! Soy Arnau. Soy ingeniero y trabajo en una empresa de tecnología en el 22@.",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu \"el trabajo\" en català?",
      options: [
        { id: "a", label: "l'empresa" },
        { id: "b", label: "la feina" },
        { id: "c", label: "el sou" },
        { id: "d", label: "la reunió" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el vocabulari de la feina",
      pairs: [
        { id: "m1", left: "feina", right: "trabajo" },
        { id: "m2", left: "cap", right: "jefe/jefa" },
        { id: "m3", left: "sou", right: "sueldo" },
        { id: "m4", left: "reunió", right: "reunión" },
        { id: "m5", left: "despatx", right: "despacho" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Em",
      promptAfter: "a la medicina.",
      correctAnswer: "dedico",
      wordBank: ["dedico", "dico", "faig", "treballo"],
      translation: "Me dedico a la medicina.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["empresa", "de", "Treballo", "en", "tecnologia.", "una"],
      correctOrder: ["Treballo", "en", "una", "empresa", "de", "tecnologia."],
      translation: "Trabajo en una empresa de tecnología.",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "soy médico",
      correctAnswer: "Sóc metge",
      acceptedAnswers: ["sóc metge", "soc metge", "sóc metge.", "soc metge."],
      translation: "soy médico",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "Sóc metge — sense article!",
    wrong: '"Sóc un metge" / "Sóc el metge"',
    correct: '"Sóc metge"',
    explanation:
      'En català, igual que en castellà ("soy médico"), no s\'usa l\'article indefinit davant de professions. ' +
      '"Sóc metge", "Sóc advocada", "Sóc professora" — sense "un" ni "una". ' +
      "L'error més comú és traduir literalment de l'anglès (\"I'm a doctor\" → \"Sóc un metge\"), " +
      "que sona incorrecte en català i castellà.",
  },

  conversation: {
    title: "Primera setmana a l'empresa",
    lines: [
      { id: "l1", speaker: "laia", text: "Hola! Ets nou aquí, oi? A què et dediques?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Ah, perfecte! Nosaltres tenim molts enginyers al departament." },
    ],
    question: "Com t'presentaries com a enginyer/a de software?",
    options: [
      { id: "a", label: "Sóc enginyer de software. Treballo al departament tècnic.", correct: true },
      { id: "b", label: "Sóc un enginyer. Faig feines.", correct: false },
      { id: "c", label: "El meu feina és enginyeria.", correct: false },
      { id: "d", label: "Treballo la enginyeria de software.", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"La feina" és el terme quotidià per a "el trabajo". "El treball" és més formal.',
    '"Sóc [professió]" sense article: "Sóc metge", "Sóc professora".',
    '"El cap" és el/la jefe/jefa. El context decideix si significa "jefe" o "cabeza".',
    '"Em dedico a..." és una alternativa formal i correcta per parlar de la professió.',
    '"El company de feina" per a "compañero de trabajo"; "el company" sol pot ser amic o company.',
  ],

  culturalCuriosity: {
    icon: "🏙️",
    title: "El districte 22@ de Barcelona",
    content:
      "El 22@ és el districte tecnològic de Barcelona, al Poblenou. " +
      "Antigues fàbriques tèxtils del segle XIX s'han reconvertit en oficines d'empreses tecnològiques, " +
      "startups i centres d'investigació. " +
      "Avui és un dels ecosistemes d'innovació més importants d'Europa, " +
      "amb més de 1.500 empreses i 100.000 treballadors. " +
      "Si treballes en tecnologia a Barcelona, és molt probable que el teu despatx sigui al 22@.",
  },
};

export const lesson4Content = buildInteractiveLesson(template);