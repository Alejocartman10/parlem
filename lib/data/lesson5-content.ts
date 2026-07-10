import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_5_ID = "l05-ciutat";

const template: LessonTemplateData = {
  lessonId: LESSON_5_ID,

  introduction: {
    icon: "🚋",
    title: "Moure's per la ciutat",
    description:
      "Saber moure's per Barcelona o qualsevol ciutat catalana és essencial des del primer dia. " +
      "Aprèn a demanar i entendre indicacions, i a fer servir el transport públic amb confiança.",
  },

  objectives: [
    "Preguntar i entendre indicacions per arribar a un lloc.",
    "Conèixer el vocabulari bàsic del transport públic.",
    "Fer servir preposicions de lloc per descriure ubicacions.",
    "Distingir entre \"agafar\" i altres verbs de moviment.",
  ],

  vocabulary: {
    title: "Vocabulari de la ciutat i el transport",
    items: [
      { id: "v01", icon: "🛣️", catalan: "el carrer", spanish: "la calle" },
      { id: "v02", icon: "🏛️", catalan: "la plaça", spanish: "la plaza" },
      { id: "v03", icon: "🚗", catalan: "l'avinguda", spanish: "la avenida" },
      { id: "v04", icon: "🚇", catalan: "el metro", spanish: "el metro" },
      { id: "v05", icon: "🚌", catalan: "l'autobús", spanish: "el autobús" },
      { id: "v06", icon: "🚊", catalan: "el tramvia", spanish: "el tranvía" },
      { id: "v07", icon: "🚆", catalan: "el tren", spanish: "el tren" },
      { id: "v08", icon: "🚏", catalan: "la parada", spanish: "la parada" },
      { id: "v09", icon: "🚉", catalan: "l'estació", spanish: "la estación" },
      { id: "v10", icon: "🎫", catalan: "el bitllet", spanish: "el billete" },
      { id: "v11", icon: "💳", catalan: "la targeta T-mobilitat", spanish: "la tarjeta T-mobilitat" },
      { id: "v12", icon: "➡️", catalan: "a la dreta", spanish: "a la derecha" },
      { id: "v13", icon: "⬅️", catalan: "a l'esquerra", spanish: "a la izquierda" },
      { id: "v14", icon: "⬆️", catalan: "tot recte", spanish: "todo recto" },
      { id: "v15", icon: "📐", catalan: "la cantonada", spanish: "la esquina" },
      { id: "v16", icon: "🚦", catalan: "el semàfor", spanish: "el semáforo" },
      { id: "v17", icon: "🚶", catalan: "el pas de vianants", spanish: "el paso de peatones" },
      { id: "v18", icon: "🔄", catalan: "la rotonda", spanish: "la rotonda" },
      { id: "v19", icon: "🏙️", catalan: "el barri", spanish: "el barrio" },
      { id: "v20", icon: "🗺️", catalan: "el mapa", spanish: "el mapa" },
      { id: "v21", icon: "📏", catalan: "lluny", spanish: "lejos" },
      { id: "v22", icon: "📍", catalan: "a prop", spanish: "cerca" },
      { id: "v23", icon: "❓", catalan: "Com puc arribar a...?", spanish: "¿Cómo puedo llegar a...?" },
      { id: "v24", icon: "❓", catalan: "On és...?", spanish: "¿Dónde está...?" },
      { id: "v25", icon: "🚶‍♀️", catalan: "caminar", spanish: "caminar" },
      { id: "v26", icon: "🚏", catalan: "agafar (el bus)", spanish: "coger (el bus)" },
      { id: "v27", icon: "⬇️", catalan: "baixar", spanish: "bajar(se)" },
      { id: "v28", icon: "⬆️", catalan: "pujar", spanish: "subir(se)" },
      { id: "v29", icon: "🎟️", catalan: "el bitllet senzill", spanish: "el billete sencillo" },
      { id: "v30", icon: "📅", catalan: "l'abonament", spanish: "el abono" },
    ],
  },

  explanation: {
    title: "Com donar i entendre indicacions",
    bullets: [
      'Per donar indicacions s\'usa sovint l\'imperatiu: "Gira a la dreta", "Segueix tot recte", "Creua el carrer".',
      'Les preposicions de lloc clau són: "al costat de" (al lado de), "davant de" (delante de), "darrere de" (detrás de), "a prop de" (cerca de).',
      'El verb "agafar" s\'usa per al transport: "Agafo el metro", "Agafa l\'autobús 22". No es diu "cogir".',
      '"On és...?" pregunta ubicació fixa; "Com puc arribar a...?" pregunta el trajecte per arribar-hi.',
    ],
  },

  audio: {
    phrase: "Perdoni, on és la plaça Catalunya? Has d'agafar el metro i baixar a la tercera parada.",
    translation:
      "Perdone, ¿dónde está la plaza Catalunya? Tienes que coger el metro y bajarte en la tercera parada.",
  },

  exercises: [
    {
      type: "tip",
      icon: "❓",
      title: "Les preguntes amb «Com», «On», «Quant»...",
      content:
        "Ja has vist «Com es diu?» i «Com et dius?». Aquestes paraules (Com, On, Quant, Quina) " +
        "funcionen igual sempre: van al principi i després un verb. " +
        "«On és...?» pregunta un lloc; «Com puc arribar a...?» pregunta un camí. " +
        "Amb aquest patró pots crear moltes preguntes noves.",
    },
    {
      type: "multiple-choice",
      question: "Com es diu \"a la izquierda\" en català?",
      options: [
        { id: "a", label: "a la dreta" },
        { id: "b", label: "a l'esquerra" },
        { id: "c", label: "tot recte" },
        { id: "d", label: "la cantonada" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el vocabulari de la ciutat",
      pairs: [
        { id: "m1", left: "carrer", right: "calle" },
        { id: "m2", left: "cantonada", right: "esquina" },
        { id: "m3", left: "semàfor", right: "semáforo" },
        { id: "m4", left: "parada", right: "parada" },
        { id: "m5", left: "barri", right: "barrio" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Gira a la",
      promptAfter: "i trobaràs l'estació.",
      correctAnswer: "dreta",
      wordBank: ["dreta", "esquerra", "recte", "cantonada"],
      translation: "Gira a la derecha y encontrarás la estación.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["al", "recte", "Segueix", "semàfor.", "tot", "fins"],
      correctOrder: ["Segueix", "tot", "recte", "fins", "al", "semàfor."],
      translation: "Sigue todo recto hasta el semáforo.",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "¿Cómo puedo llegar a la plaza?",
      correctAnswer: "Com puc arribar a la plaça?",
      acceptedAnswers: [
        "com puc arribar a la plaça?",
        "com puc arribar a la plaça",
        "com puc arribar a la placa?",
      ],
      translation: "¿Cómo puedo llegar a la plaza?",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "Agafar, no \"cogir\"",
    wrong: '"Cogeixo el bus" / "Vull cogir el metro"',
    correct: '"Agafo el bus" / "Vull agafar el metro"',
    explanation:
      'El verb castellà "coger" es tradueix per "agafar" en català, no per "cogir" (que no existeix). ' +
      'Es diu "Agafo el metro", "Has d\'agafar l\'autobús 22", "Agafa el tren de les 9". ' +
      "Aquest és un dels calcs més freqüents entre hispanoparlants que aprenen català, " +
      'perquè es tendeix a adaptar directament el verb castellà en lloc d\'usar el verb català correcte.',
  },

  conversation: {
    title: "Demanant indicacions al carrer",
    lines: [
      { id: "l1", speaker: "laia", text: "Perdoni! Estic una mica perduda. Sap on és l'estació de Sants?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Perfecte, moltes gràcies! Llavors he d'agafar el metro fins allà." },
    ],
    question: "Com li explicaries el camí fins a l'estació?",
    options: [
      { id: "a", label: "Segueix tot recte i gira a la dreta a la cantonada.", correct: true },
      { id: "b", label: "Cogeix a la dreta i després recte.", correct: false },
      { id: "c", label: "L'estació és lluny, camina esquerra.", correct: false },
      { id: "d", label: "Gira recte al semàfor de l'estació.", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"Agafar" és el verb correcte per al transport, mai "cogir".',
    '"On és...?" pregunta ubicació; "Com puc arribar a...?" pregunta el trajecte.',
    'Preposicions clau: "al costat de", "davant de", "darrere de", "a prop de".',
    'L\'imperatiu és habitual per donar indicacions: "Gira", "Segueix", "Creua".',
    'La T-mobilitat és la targeta de transport públic integrada de l\'àrea metropolitana de Barcelona.',
  ],

  culturalCuriosity: {
    icon: "📐",
    title: "Els xamfrans de l'Eixample",
    content:
      "Si camines per l'Eixample de Barcelona notaràs que les cantonades no són rectes, sinó tallades en diagonal. " +
      "Aquests \"xamfrans\" van ser idea de l'urbanista Ildefons Cerdà al segle XIX, " +
      "pensats per millorar la visibilitat del trànsit i donar més llum i espai a cada cruïlla. " +
      "El resultat són illes de cases octogonals, úniques al món, " +
      "que fan que moure's per aquest barri sigui una experiència geomètrica ben particular.",
  },
};

export const lesson5Content = buildInteractiveLesson(template);