import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_10_ID = "l10-cultura";

const template: LessonTemplateData = {
  lessonId: LESSON_10_ID,

  introduction: {
    icon: "🎉",
    title: "Cultura i festes catalanes",
    description:
      "Sant Jordi, la Diada, el Tió o la Castanyada són part essencial de la vida a Catalunya. " +
      "Conèixer aquestes tradicions t'ajudarà a entendre converses quotidianes i a sentir-te part de la cultura.",
  },

  objectives: [
    "Conèixer les festes i tradicions catalanes més importants.",
    "Entendre referències culturals habituals en converses.",
    "Fer servir vocabulari relacionat amb celebracions i costums.",
    "Parlar de plans per a festes i celebracions.",
  ],

  vocabulary: {
    title: "Vocabulari de festes i cultura",
    items: [
      { id: "v01", icon: "🌹", catalan: "Sant Jordi", spanish: "Sant Jordi" },
      { id: "v02", icon: "📖", catalan: "el llibre", spanish: "el libro" },
      { id: "v03", icon: "🌹", catalan: "la rosa", spanish: "la rosa" },
      { id: "v04", icon: "🎌", catalan: "la Diada", spanish: "la Diada (11 de septiembre)" },
      { id: "v05", icon: "🪵", catalan: "el Tió", spanish: "el Tió (tronco navideño)" },
      { id: "v06", icon: "🎄", catalan: "el Nadal", spanish: "la Navidad" },
      { id: "v07", icon: "👑", catalan: "els Reis Mags", spanish: "los Reyes Magos" },
      { id: "v08", icon: "🍬", catalan: "la Castanyada", spanish: "la Castanyada" },
      { id: "v09", icon: "🌰", catalan: "la castanya", spanish: "la castaña" },
      { id: "v10", icon: "🍮", catalan: "el panellet", spanish: "el panellet" },
      { id: "v11", icon: "💃", catalan: "la sardana", spanish: "la sardana" },
      { id: "v12", icon: "🏗️", catalan: "els castellers", spanish: "los castellers" },
      { id: "v13", icon: "🗼", catalan: "el castell (humà)", spanish: "el castell (humano)" },
      { id: "v14", icon: "🎆", catalan: "la revetlla", spanish: "la verbena" },
      { id: "v15", icon: "🔥", catalan: "Sant Joan", spanish: "Sant Joan" },
      { id: "v16", icon: "🎊", catalan: "la festa major", spanish: "la fiesta mayor" },
      { id: "v17", icon: "🎭", catalan: "els gegants", spanish: "los gigantes (figuras festivas)" },
      { id: "v18", icon: "🥁", catalan: "el correfoc", spanish: "el correfoc" },
      { id: "v19", icon: "🎶", catalan: "la cançó popular", spanish: "la canción popular" },
      { id: "v20", icon: "🏴", catalan: "la senyera", spanish: "la senyera (bandera catalana)" },
      { id: "v21", icon: "🎨", catalan: "la tradició", spanish: "la tradición" },
      { id: "v22", icon: "🎉", catalan: "celebrar", spanish: "celebrar" },
      { id: "v23", icon: "🍾", catalan: "brindar", spanish: "brindar" },
      { id: "v24", icon: "🎁", catalan: "regalar", spanish: "regalar" },
      { id: "v25", icon: "❓", catalan: "Com se celebra...?", spanish: "¿Cómo se celebra...?" },
      { id: "v26", icon: "❓", catalan: "Quan és la festa major?", spanish: "¿Cuándo es la fiesta mayor?" },
      { id: "v27", icon: "📅", catalan: "el calendari festiu", spanish: "el calendario festivo" },
      { id: "v28", icon: "🥳", catalan: "la colla", spanish: "la peña / el grupo" },
      { id: "v29", icon: "🎺", catalan: "la cercavila", spanish: "el pasacalles" },
      { id: "v30", icon: "🧑‍🤝‍🧑", catalan: "el poble", spanish: "el pueblo" },
      { id: "v31", icon: "🙌", catalan: "fer", spanish: "hacer" },
      { id: "v32", icon: "📊", catalan: "normalment", spanish: "normalmente" },
    ],
  },

  explanation: {
    title: "Les grans festes catalanes",
    bullets: [
      'Sant Jordi (23 d\'abril) és la festa dels enamorats a Catalunya: es regalen roses i llibres.',
      'La Diada (11 de setembre) és la Festa Nacional de Catalunya, amb un fort significat identitari.',
      'El Tió és una tradició nadalenca en què els nens "fan cagar" un tronc per rebre regals.',
      'Els castellers construeixen torres humanes ("castells") en festes majors arreu de Catalunya.',
    ],
  },

  audio: {
    phrase: "Per Sant Jordi, la tradició és regalar una rosa a les dones i un llibre als homes, o al revés.",
    translation:
      "Por Sant Jordi, la tradición es regalar una rosa a las mujeres y un libro a los hombres, o al revés.",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Què es regala tradicionalment per Sant Jordi?",
      options: [
        { id: "a", label: "castanyes i panellets" },
        { id: "b", label: "roses i llibres" },
        { id: "c", label: "regals dels Reis Mags" },
        { id: "d", label: "un tió de fusta" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona les festes amb el que hi correspon",
      pairs: [
        { id: "m1", left: "Sant Jordi", right: "roses i llibres" },
        { id: "m2", left: "Castanyada", right: "castanyes" },
        { id: "m3", left: "Nadal", right: "el Tió" },
        { id: "m4", left: "Sant Joan", right: "revetlla i foc" },
        { id: "m5", left: "Diada", right: "11 de setembre" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Per Sant Jordi es regalen roses i",
      promptAfter: ".",
      correctAnswer: "llibres",
      wordBank: ["llibres", "castanyes", "panellets", "regals"],
      translation: "Por Sant Jordi se regalan rosas y libros.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["celebra", "és", "la", "festa", "major?", "Quan"],
      correctOrder: ["Quan", "és", "la", "festa", "major?"],
      translation: "¿Cuándo es la fiesta mayor?",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "¿Cómo se celebra la Castanyada?",
      correctAnswer: "Com se celebra la Castanyada?",
      acceptedAnswers: [
        "com se celebra la castanyada?",
        "com se celebra la castanyada",
      ],
      translation: "¿Cómo se celebra la Castanyada?",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "\"Festa major\", no \"fiesta mayor\" literal",
    wrong: '"La fiesta gran del poble és al juliol"',
    correct: '"La festa major del poble és al juliol"',
    explanation:
      'És habitual que hispanoparlants tradueixin "fiesta mayor" paraula per paraula amb un adjectiu equivocat ("gran" en lloc de "major"), ' +
      'o simplement deixin l\'expressió en castellà. ' +
      'El terme fixat en català és "la festa major", que designa la celebració anual més important d\'un poble o barri. ' +
      "És una expressió fixa que no s'ha de traduir ni modificar.",
  },

  conversation: {
    title: "Parlant de la festa major",
    lines: [
      { id: "l1", speaker: "laia", text: "Aquest cap de setmana és la festa major del meu barri!" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Sí! Hi haurà castellers, correfoc i una revetlla amb música fins tard." },
    ],
    question: "Com preguntaries per què és especial la festa major?",
    options: [
      { id: "a", label: "Què es fa normalment a la festa major?", correct: true },
      { id: "b", label: "Com és la fiesta gran del barri?", correct: false },
      { id: "c", label: "Quan és el Tió del barri?", correct: false },
      { id: "d", label: "La festa major és un correfoc?", correct: false },
    ],
    xp: 5,
  },

  review: [
    'Sant Jordi (23 d\'abril): es regalen roses i llibres.',
    'La Diada (11 de setembre): Festa Nacional de Catalunya.',
    'El Tió i els Reis Mags marquen les tradicions nadalenques catalanes.',
    '"La festa major" és una expressió fixa, no es tradueix literalment.',
    'Els castellers i el correfoc són elements típics de moltes festes majors.',
  ],

  culturalCuriosity: {
    icon: "🗼",
    title: "Els castells, Patrimoni de la Humanitat",
    content:
      "Els castells —torres humanes que poden arribar a deu nivells d'alçada— " +
      "van ser declarats Patrimoni Cultural Immaterial de la Humanitat per la UNESCO l'any 2010. " +
      "Colles castelleres de tot Catalunya competeixen i col·laboren en concursos com el de Tarragona, " +
      "considerat el més important del món casteller. " +
      "Construir un castell requereix mesos d'assaig, força col·lectiva i molta confiança, " +
      "i simbolitza valors molt catalans: l'esforç en equip i la cohesió comunitària per damunt de l'individu.",
  },
};

export const lesson10Content = buildInteractiveLesson(template);