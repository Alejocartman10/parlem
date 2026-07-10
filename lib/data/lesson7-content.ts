import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_7_ID = "l07-entrevista";

const template: LessonTemplateData = {
  lessonId: LESSON_7_ID,

  introduction: {
    icon: "🎤",
    title: "L'entrevista de feina",
    description:
      "Una entrevista de feina en català pot semblar intimidant, però amb les frases i el vocabulari adequats " +
      "podràs respondre amb confiança i causar bona impressió des del primer moment.",
  },

  objectives: [
    "Respondre preguntes habituals d'una entrevista de feina.",
    "Descriure experiència laboral i habilitats professionals.",
    "Fer servir el condicional per expressar disponibilitat i interès.",
    "Formular preguntes pròpies a l'entrevistador o entrevistadora.",
  ],

  vocabulary: {
    title: "Vocabulari de l'entrevista",
    items: [
      { id: "v01", icon: "📋", catalan: "l'entrevista de feina", spanish: "la entrevista de trabajo" },
      { id: "v02", icon: "📄", catalan: "el currículum", spanish: "el currículum" },
      { id: "v03", icon: "💼", catalan: "l'experiència laboral", spanish: "la experiencia laboral" },
      { id: "v04", icon: "🎓", catalan: "la formació", spanish: "la formación" },
      { id: "v05", icon: "🛠️", catalan: "les habilitats", spanish: "las habilidades" },
      { id: "v06", icon: "💪", catalan: "els punts forts", spanish: "los puntos fuertes" },
      { id: "v07", icon: "📉", catalan: "els punts febles", spanish: "los puntos débiles" },
      { id: "v08", icon: "🎯", catalan: "els objectius professionals", spanish: "los objetivos profesionales" },
      { id: "v09", icon: "🤝", catalan: "el treball en equip", spanish: "el trabajo en equipo" },
      { id: "v10", icon: "⏱️", catalan: "la disponibilitat", spanish: "la disponibilidad" },
      { id: "v11", icon: "💰", catalan: "les pretensions salarials", spanish: "las pretensiones salariales" },
      { id: "v12", icon: "📆", catalan: "la incorporació", spanish: "la incorporación" },
      { id: "v13", icon: "🏢", catalan: "el lloc de treball", spanish: "el puesto de trabajo" },
      { id: "v14", icon: "📊", catalan: "els assoliments", spanish: "los logros" },
      { id: "v15", icon: "🗣️", catalan: "les habilitats comunicatives", spanish: "las habilidades comunicativas" },
      { id: "v16", icon: "🌟", catalan: "la motivació", spanish: "la motivación" },
      { id: "v17", icon: "📈", catalan: "el creixement professional", spanish: "el crecimiento profesional" },
      { id: "v18", icon: "🧩", catalan: "la resolució de problemes", spanish: "la resolución de problemas" },
      { id: "v19", icon: "🕘", catalan: "l'horari", spanish: "el horario" },
      { id: "v20", icon: "📝", catalan: "el contracte", spanish: "el contrato" },
      { id: "v21", icon: "✅", catalan: "estar disponible", spanish: "estar disponible" },
      { id: "v22", icon: "💬", catalan: "explicar", spanish: "explicar" },
      { id: "v23", icon: "🙋", catalan: "destacar", spanish: "destacar" },
      { id: "v24", icon: "❓", catalan: "Per què vol treballar aquí?", spanish: "¿Por qué quiere trabajar aquí?" },
      { id: "v25", icon: "❓", catalan: "Quins són els seus punts forts?", spanish: "¿Cuáles son sus puntos fuertes?" },
      { id: "v26", icon: "🤔", catalan: "considerar-se", spanish: "considerarse" },
      { id: "v27", icon: "🚀", catalan: "el repte", spanish: "el reto" },
      { id: "v28", icon: "📞", catalan: "la selecció de personal", spanish: "la selección de personal" },
      { id: "v29", icon: "🧠", catalan: "l'aprenentatge continu", spanish: "el aprendizaje continuo" },
      { id: "v30", icon: "🙏", catalan: "agrair (l'oportunitat)", spanish: "agradecer (la oportunidad)" },
      { id: "v31", icon: "📈", catalan: "créixer (professionalment)", spanish: "crecer (profesionalmente)" },
    ],
  },

  explanation: {
    title: "Estructures útils per a l'entrevista",
    bullets: [
      'El condicional expressa disponibilitat i interès de forma cortesa: "M\'agradaria...", "Estaria disponible per...".',
      'Per parlar de punts forts: "Em considero una persona [adjectiu]", "El meu punt fort és...".',
      'Per descriure experiència: "He treballat com a...", "Vaig treballar durant [temps] a...".',
      'Fer preguntes finals mostra interès: "Quins són els propers passos?", "Com és l\'equip de treball?".',
      '"Vostre/vostra" es forma igual que "el meu/la meva" (Lliçó 3): concorda amb el nom, no amb qui parla. "El vostre equip", "la vostra empresa".',
    ],
  },

  audio: {
    phrase: "M'agradaria treballar aquí perquè em considero una persona motivada i amb ganes d'aprendre.",
    translation:
      "Me gustaría trabajar aquí porque me considero una persona motivada y con ganas de aprender.",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu \"puntos fuertes\" en català?",
      options: [
        { id: "a", label: "els objectius" },
        { id: "b", label: "els punts forts" },
        { id: "c", label: "els assoliments" },
        { id: "d", label: "la formació" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el vocabulari de l'entrevista",
      pairs: [
        { id: "m1", left: "currículum", right: "currículum" },
        { id: "m2", left: "disponibilitat", right: "disponibilidad" },
        { id: "m3", left: "assoliments", right: "logros" },
        { id: "m4", left: "repte", right: "reto" },
        { id: "m5", left: "incorporació", right: "incorporación" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Em",
      promptAfter: "una persona motivada.",
      correctAnswer: "considero",
      wordBank: ["considero", "considera", "consider", "considerar"],
      translation: "Me considero una persona motivada.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["disponible", "Estaria", "per", "aquí.", "treballar"],
      correctOrder: ["Estaria", "disponible", "per", "treballar", "aquí."],
      translation: "Estaría disponible para trabajar aquí.",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Com diries en català",
      prompt: "¿Cuáles son los próximos pasos?",
      correctAnswer: "Quins són els propers passos?",
      acceptedAnswers: [
        "quins són els propers passos?",
        "quins són els propers passos",
      ],
      translation: "¿Cuáles son los próximos pasos?",
      xp: 5,
    },
  ],

  commonError: {
    icon: "💡",
    title: "\"Em considero\", no \"Em considero com\"",
    wrong: '"Em considero com una persona responsable"',
    correct: '"Em considero una persona responsable"',
    explanation:
      'Per calc del castellà ("me considero como"), és molt habitual afegir "com" després de "considerar-se" en català, ' +
      "cosa que no és necessària ni correcta. " +
      'Es diu directament "Em considero [adjectiu/substantiu]": "Em considero puntual", "Em considero una persona organitzada". ' +
      'Afegir "com" sona a traducció literal i no és natural en català.',
  },

  conversation: {
    title: "Durant l'entrevista",
    lines: [
      { id: "l1", speaker: "laia", text: "Explica'ns una mica la teva experiència laboral." },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Molt interessant! I per què vols treballar amb nosaltres?" },
    ],
    question: "Com respondries per què vols treballar a l'empresa?",
    options: [
      { id: "a", label: "M'agradaria créixer professionalment en un equip com el vostre.", correct: true },
      { id: "b", label: "Considero com que és una bona empresa.", correct: false },
      { id: "c", label: "Necessito la feina per pagar les despeses.", correct: false },
      { id: "d", label: "No sé, m'és igual on treballar.", correct: false },
    ],
    xp: 5,
  },

  review: [
    'El condicional ("M\'agradaria", "Estaria disponible") suavitza i formalitza les respostes.',
    '"Em considero [adjectiu]" sense "com" després del verb.',
    '"Els punts forts" i "els punts febles" per descriure fortaleses i àrees de millora.',
    'Fer preguntes finals a l\'entrevistador mostra motivació i interès genuí.',
    '"He treballat com a..." és l\'estructura habitual per descriure càrrecs anteriors.',
  ],

  culturalCuriosity: {
    icon: "🗣️",
    title: "El català a l'empresa",
    content:
      "Encara que el castellà és molt present a l'entorn laboral de Barcelona, " +
      "moltes empreses catalanes valoren positivament —i en alguns casos requereixen— el coneixement del català, " +
      "especialment en sectors com l'administració pública, l'educació o l'atenció al client. " +
      "Fins i tot si l'entrevista es fa en castellà, poder respondre algunes preguntes en català " +
      "o demostrar que l'estàs aprenent activament sol causar molt bona impressió " +
      "i es percep com un senyal clar d'integració a llarg termini.",
  },
};

export const lesson7Content = buildInteractiveLesson(template);