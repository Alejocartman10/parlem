import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_6_ID = "l06-tramits";

const template: LessonTemplateData = {
  lessonId: LESSON_6_ID,

  introduction: {
    icon: "📋",
    title: "Tràmits administratius",
    description:
      "Empadronar-se, demanar el NIE o agafar hora a l'ajuntament són gestions habituals quan t'instal·les a Catalunya. " +
      "Aprèn el vocabulari i les frases clau per moure't per l'administració amb seguretat.",
  },

  objectives: [
    "Entendre vocabulari bàsic de tràmits i documents oficials.",
    "Demanar cita prèvia i explicar el motiu de la visita.",
    "Omplir i entendre formularis administratius senzills.",
    "Preguntar per la documentació necessària en cada tràmit.",
  ],

  vocabulary: {
    title: "Vocabulari dels tràmits",
    items: [
      { id: "v01", icon: "🏛️", catalan: "l'ajuntament", spanish: "el ayuntamiento" },
      { id: "v02", icon: "📄", catalan: "el NIE", spanish: "el NIE" },
      { id: "v03", icon: "🪪", catalan: "el DNI", spanish: "el DNI" },
      { id: "v04", icon: "🏠", catalan: "l'empadronament", spanish: "el empadronamiento" },
      { id: "v05", icon: "📝", catalan: "el formulari", spanish: "el formulario" },
      { id: "v06", icon: "📅", catalan: "la cita prèvia", spanish: "la cita previa" },
      { id: "v07", icon: "📑", catalan: "el certificat", spanish: "el certificado" },
      { id: "v08", icon: "🖊️", catalan: "la signatura", spanish: "la firma" },
      { id: "v09", icon: "📤", catalan: "presentar (un document)", spanish: "presentar (un documento)" },
      { id: "v10", icon: "📥", catalan: "rebre", spanish: "recibir" },
      { id: "v11", icon: "🗂️", catalan: "l'expedient", spanish: "el expediente" },
      { id: "v12", icon: "💳", catalan: "la targeta sanitària", spanish: "la tarjeta sanitaria" },
      { id: "v13", icon: "🏥", catalan: "la seguretat social", spanish: "la seguridad social" },
      { id: "v14", icon: "🏦", catalan: "el compte bancari", spanish: "la cuenta bancaria" },
      { id: "v15", icon: "📆", catalan: "el termini", spanish: "el plazo" },
      { id: "v16", icon: "✅", catalan: "vàlid / vàlida", spanish: "válido / válida" },
      { id: "v17", icon: "❌", catalan: "caducat / caducada", spanish: "caducado / caducada" },
      { id: "v18", icon: "📮", catalan: "la bústia", spanish: "el buzón" },
      { id: "v19", icon: "🖨️", catalan: "una còpia", spanish: "una copia" },
      { id: "v20", icon: "📎", catalan: "l'original", spanish: "el original" },
      { id: "v21", icon: "🧾", catalan: "la taxa", spanish: "la tasa" },
      { id: "v22", icon: "💶", catalan: "pagar", spanish: "pagar" },
      { id: "v23", icon: "🗓️", catalan: "demanar hora", spanish: "pedir hora / cita" },
      { id: "v24", icon: "🕐", catalan: "arribar puntual", spanish: "llegar puntual" },
      { id: "v25", icon: "❓", catalan: "Quina documentació necessito?", spanish: "¿Qué documentación necesito?" },
      { id: "v26", icon: "❓", catalan: "On he d'anar?", spanish: "¿A dónde tengo que ir?" },
      { id: "v27", icon: "🖇️", catalan: "adjuntar", spanish: "adjuntar" },
      { id: "v28", icon: "📌", catalan: "el tràmit", spanish: "el trámite" },
      { id: "v29", icon: "🔢", catalan: "el número de sol·licitud", spanish: "el número de solicitud" },
      { id: "v30", icon: "🖋️", catalan: "emplenar (un formulari)", spanish: "rellenar (un formulario)" },
      { id: "v31", icon: "📦", catalan: "portar", spanish: "traer / llevar" },
    ],
  },

  explanation: {
    title: "Frases clau per a l'administració",
    bullets: [
      'Per demanar informació: "Quina documentació necessito per a...?", "On he d\'anar per a...?".',
      '"Emplenar" un formulari significa omplir-lo amb les teves dades; és el verb formal per a "rellenar".',
      '"Vàlid/vàlida" i "caducat/caducada" concorden en gènere amb el document: "el DNI és vàlid", "la targeta és caducada".',
      'Per sol·licitar cita: "Voldria demanar hora per a...", seguit del tràmit que necessites fer.',
    ],
  },

  audio: {
    phrase: "Bon dia, voldria demanar hora per a l'empadronament. Quina documentació necessito portar?",
    translation:
      "Buenos días, quería pedir hora para el empadronamiento. ¿Qué documentación necesito llevar?",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu \"rellenar un formulario\" en català?",
      options: [
        { id: "a", label: "presentar un formulari" },
        { id: "b", label: "emplenar un formulari" },
        { id: "c", label: "signar un formulari" },
        { id: "d", label: "adjuntar un formulari" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el vocabulari administratiu",
      pairs: [
        { id: "m1", left: "empadronament", right: "empadronamiento" },
        { id: "m2", left: "termini", right: "plazo" },
        { id: "m3", left: "caducat", right: "caducado" },
        { id: "m4", left: "taxa", right: "tasa" },
        { id: "m5", left: "expedient", right: "expediente" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Voldria",
      promptAfter: "hora per a l'empadronament.",
      correctAnswer: "demanar",
      wordBank: ["demanar", "donar", "presentar", "signar"],
      translation: "Quería pedir hora para el empadronamiento.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["necessito", "Quina", "documentació", "portar?"],
      correctOrder: ["Quina", "documentació", "necessito", "portar?"],
      translation: "¿Qué documentación necesito llevar?",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "¿A dónde tengo que ir para el NIE?",
      correctAnswer: "On he d'anar per al NIE?",
      acceptedAnswers: [
        "on he d'anar per al nie?",
        "on he d'anar per al nie",
        "on he d'anar per el nie?",
      ],
      translation: "¿A dónde tengo que ir para el NIE?",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "\"El termini\", no \"el plaç\"",
    wrong: '"El plaç per presentar el document és demà"',
    correct: '"El termini per presentar el document és demà"',
    explanation:
      'Molts hispanoparlants tradueixen literalment "plazo" com "plaç", una paraula que en català es refereix a un altre concepte i sona estranya en aquest context. ' +
      'La paraula correcta i habitual és "el termini": "El termini acaba divendres", "Dins del termini establert". ' +
      "És un error molt comú perquè la paraula castellana i la catalana s'assemblen però no coincideixen del tot.",
  },

  conversation: {
    title: "A la finestreta de l'ajuntament",
    lines: [
      { id: "l1", speaker: "laia", text: "Bon dia! En què el puc ajudar?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Perfecte, per a l'empadronament necessita el DNI o NIE i un contracte de lloguer." },
    ],
    question: "Com explicaries que vols empadronar-te?",
    options: [
      { id: "a", label: "Voldria fer l'empadronament, si us plau.", correct: true },
      { id: "b", label: "Vull el plaç de l'empadronament.", correct: false },
      { id: "c", label: "Necessito signar el NIE.", correct: false },
      { id: "d", label: "Puc adjuntar l'ajuntament?", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"Emplenar" un formulari, no "rellenar-lo" literalment.',
    '"El termini" és el plazo administratiu, no "el plaç".',
    '"Vàlid/vàlida" i "caducat/caducada" concorden en gènere amb el document.',
    'Per demanar informació: "Quina documentació necessito?", "On he d\'anar?".',
    '"Demanar hora" és l\'expressió habitual per sol·licitar cita prèvia.',
  ],

  culturalCuriosity: {
    icon: "🖥️",
    title: "La cita prèvia digital",
    content:
      "A Catalunya, la majoria de tràmits administratius —empadronament, NIE, targeta sanitària— " +
      "requereixen demanar cita prèvia a través d'internet abans de presentar-se a l'oficina. " +
      "Portals com el de l'Ajuntament o el de la Seguretat Social permeten triar dia i hora des de casa, " +
      "cosa que estalvia llargues cues. " +
      "Un consell habitual entre nouvinguts és revisar la disponibilitat de cites amb temps, " +
      "ja que en algunes èpques de l'any (com setembre, amb l'inici de curs) es poden esgotar ràpidament.",
  },
};

export const lesson6Content = buildInteractiveLesson(template);