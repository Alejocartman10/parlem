import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_1_ID = "l01-salutacions";

const template: LessonTemplateData = {
  lessonId: LESSON_1_ID,

  introduction: {
    icon: "👋",
    title: "Salutacions i presentacions",
    description:
      "Aprèn a saludar, presentar-te i acomiadar-te en català. Les primeres paraules que necessitaràs cada dia a Catalunya.",
  },

  objectives: [
    "Saludar i acomiadar-te correctament a qualsevol hora del dia.",
    "Presentar-te i preguntar el nom d'algú.",
    "Respondre educadament quan et pregunten com estàs.",
    "Usar les fórmules de cortesia bàsiques.",
  ],

  vocabulary: {
    title: "Vocabulari essencial",
    items: [
      { id: "v01", icon: "👋", catalan: "Hola", spanish: "Hola" },
      { id: "v02", icon: "☀️", catalan: "Bon dia", spanish: "Buenos días" },
      { id: "v03", icon: "🌤️", catalan: "Bona tarda", spanish: "Buenas tardes" },
      { id: "v04", icon: "🌙", catalan: "Bona nit", spanish: "Buenas noches" },
      { id: "v05", icon: "🚶", catalan: "Adéu", spanish: "Adiós" },
      { id: "v06", icon: "⏩", catalan: "Fins aviat", spanish: "Hasta pronto" },
      { id: "v07", icon: "📅", catalan: "Fins demà", spanish: "Hasta mañana" },
      { id: "v08", icon: "🙋", catalan: "Em dic...", spanish: "Me llamo..." },
      { id: "v09", icon: "❓", catalan: "Com et dius?", spanish: "¿Cómo te llamas?" },
      { id: "v10", icon: "🤝", catalan: "Encantat / Encantada", spanish: "Encantado / Encantada" },
      { id: "v11", icon: "💬", catalan: "Com estàs?", spanish: "¿Cómo estás?" },
      { id: "v12", icon: "😊", catalan: "Molt bé, gràcies", spanish: "Muy bien, gracias" },
      { id: "v13", icon: "🙏", catalan: "Per favor", spanish: "Por favor" },
      { id: "v14", icon: "💚", catalan: "De res", spanish: "De nada" },
    ],
  },

  explanation: {
    title: "Com funciona",
    bullets: [
      '"Hola" és la salutació universal: funciona a totes hores i en totes les situacions.',
      '"Bon dia" s\'usa fins a migdia; "Bona tarda", a partir de les 13h aproximadament.',
      'Per presentar-te, digues "Em dic [nom]". El pronom "jo" gairebé mai s\'utilitza en català.',
      '"Encantat" (home) o "Encantada" (dona) és la resposta quan et presenten a algú.',
    ],
  },

  audio: {
    phrase: "Bon dia! Em dic Laia. Com et dius?",
    translation: "¡Buenos días! Me llamo Laia. ¿Cómo te llamas?",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Són les 9 del matí. Com saludes el teu company de feina?",
      options: [
        { id: "a", label: "Bona nit" },
        { id: "b", label: "Bon dia" },
        { id: "c", label: "Adéu" },
        { id: "d", label: "Fins demà" },
      ],
      correctOptionId: "b",
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "Hola,",
      promptAfter: "dic Marc. Encantat!",
      correctAnswer: "em",
      wordBank: ["em", "et", "es", "jo"],
      translation: "Hola, me llamo Marc. ¡Encantado!",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["gràcies.", "bé,", "Molt", "tu?", "I"],
      correctOrder: ["Molt", "bé,", "gràcies.", "I", "tu?"],
      translation: "Muy bien, gracias. ¿Y tú?",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona cada salutació amb la seva traducció",
      pairs: [
        { id: "m1", left: "Bon dia", right: "Buenos días" },
        { id: "m2", left: "Adéu", right: "Adiós" },
        { id: "m3", left: "Gràcies", right: "Gracias" },
        { id: "m4", left: "De res", right: "De nada" },
        { id: "m5", left: "Fins aviat", right: "Hasta pronto" },
      ],
      xp: 5,
    },
    {
      type: "write",
      instruction: "Escriu en català",
      prompt: "¿Cómo te llamas?",
      correctAnswer: "Com et dius?",
      acceptedAnswers: ["com et dius", "com et dius?"],
      translation: "¿Cómo te llamas?",
      xp: 5,
    },
  ],

  commonError: {
    icon: "⚠️",
    title: "Error molt freqüent",
    wrong: '"Jo em dic Marc"',
    correct: '"Em dic Marc"',
    explanation:
      'En català, el pronom "jo" gairebé mai s\'utilitza en la parla quotidiana. ' +
      '"Em dic Marc" ja implica que ets tu qui parla. Afegir "jo" sona estrany i massa formal.',
  },

  conversation: {
    tip: {
      icon: "🗣️",
      title: 'El verb "ser": sóc, ets, és',
      content:
        'Per presentar-te necessites el verb "ser". ' +
        '"Sóc" (jo) i "ets" (tu) són les formes que faràs servir més sovint: ' +
        '"Sóc la Laia", "Ets nou aquí?". ' +
        '"Molt de gust" és la manera fixa de dir "encantado/a" quan coneixes algú.',
    },
    title: "Primera conversa a la feina",
    lines: [
      { id: "l1", speaker: "laia", text: "Bon dia! Sóc la Laia. I tu, com et dius?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Molt de gust, Marc. Ets nou a l'empresa?" },
    ],
    question: "Com respons quan et presenten?",
    options: [
      { id: "a", label: "Em dic Marc. Encantat!", correct: true },
      { id: "b", label: "Adéu, fins aviat!", correct: false },
      { id: "c", label: "Bona nit, gràcies.", correct: false },
      { id: "d", label: "Jo sóc Marc.", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"Hola" funciona a qualsevol hora; "Bon dia", "Bona tarda" i "Bona nit" depenen de l\'hora.',
    '"Em dic [nom]" és la forma estàndard de presentar-te. Sense "jo".',
    '"Encantat" (home) / "Encantada" (dona) quan et presenten a algú nou.',
    '"Fins aviat" i "Fins demà" per acomiadar-te de manera informal.',
    '"Gràcies" — "De res" és la parella perfecta de cortesia.',
  ],

  culturalCuriosity: {
    icon: "🌹",
    title: "Sabia que...?",
    content:
      'A Catalunya és molt habitual saludar amb "Bon dia" fins i tot en contextos informals, ' +
      "incloent botigues, ascensors i transport públic. " +
      "No saludar pot semblar groller. Quan entres a un comerç, una petita botiga o el metge, " +
      'sempre comença amb un "Bon dia" — és una mostra de respecte molt valorada.',
  },
};

export const lesson1Content = buildInteractiveLesson(template);