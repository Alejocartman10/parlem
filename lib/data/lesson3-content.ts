import { buildInteractiveLesson, type LessonTemplateData } from "@/lib/data/lesson-template";

export const LESSON_3_ID = "l03-familia";

const template: LessonTemplateData = {
  lessonId: LESSON_3_ID,

  introduction: {
    icon: "👨‍👩‍👧‍👦",
    title: "La família",
    description:
      "Parlar de la família és una de les converses més habituals quan coneixes algú nou. " +
      "Aprèn el vocabulari essencial per descriure la teva família en català.",
  },

  objectives: [
    "Nomenar els membres de la família immediata i extensa.",
    "Usar els possessius \"el meu\", \"la meva\", \"els meus\", \"les meves\" correctament.",
    "Descriure la teva família en una conversa breu.",
    "Preguntar per la família d'una altra persona.",
  ],

  vocabulary: {
    title: "La família en català",
    items: [
      { id: "v01", icon: "👨", catalan: "el pare", spanish: "el padre" },
      { id: "v02", icon: "👩", catalan: "la mare", spanish: "la madre" },
      { id: "v03", icon: "👦", catalan: "el germà", spanish: "el hermano" },
      { id: "v04", icon: "👧", catalan: "la germana", spanish: "la hermana" },
      { id: "v05", icon: "👴", catalan: "l'avi", spanish: "el abuelo" },
      { id: "v06", icon: "👵", catalan: "l'àvia", spanish: "la abuela" },
      { id: "v07", icon: "🧒", catalan: "el fill", spanish: "el hijo" },
      { id: "v08", icon: "👶", catalan: "la filla", spanish: "la hija" },
      { id: "v09", icon: "🧔", catalan: "l'oncle", spanish: "el tío" },
      { id: "v10", icon: "👩", catalan: "la tia", spanish: "la tía" },
      { id: "v11", icon: "🧑", catalan: "el cosí / la cosina", spanish: "el primo / la prima" },
      { id: "v12", icon: "💍", catalan: "el marit", spanish: "el marido" },
      { id: "v13", icon: "👰", catalan: "la dona", spanish: "la esposa / la mujer" },
      { id: "v14", icon: "❤️", catalan: "la parella", spanish: "la pareja" },
    ],
  },

  explanation: {
    title: "Els possessius en català",
    bullets: [
      '"El meu" (masculí singular) / "La meva" (femení singular): "el meu pare", "la meva mare".',
      '"Els meus" (masculí plural) / "Les meves" (femení plural): "els meus fills", "les meves filles".',
      'A diferència del castellà, el possessiu concorda amb el gènere del nom, no amb el del posseïdor.',
      '"La dona" significa tant "la mujer" com "la esposa" en català. El context aclareix el significat.',
    ],
  },

  audio: {
    phrase: "El meu pare es diu Joan i la meva mare es diu Rosa. Tinc un germà i dues germanes.",
    translation:
      "Mi padre se llama Joan y mi madre se llama Rosa. Tengo un hermano y dos hermanas.",
  },

  exercises: [
    {
      type: "multiple-choice",
      question: "Com es diu \"la abuela\" en català?",
      options: [
        { id: "a", label: "la tia" },
        { id: "b", label: "la mare" },
        { id: "c", label: "l'àvia" },
        { id: "d", label: "la cosina" },
      ],
      correctOptionId: "c",
      xp: 5,
    },
    {
      type: "match",
      instruction: "Relaciona el membre de la família",
      pairs: [
        { id: "m1", left: "pare", right: "padre" },
        { id: "m2", left: "mare", right: "madre" },
        { id: "m3", left: "germà", right: "hermano" },
        { id: "m4", left: "àvia", right: "abuela" },
        { id: "m5", left: "fill", right: "hijo" },
      ],
      xp: 5,
    },
    {
      type: "fill-blank",
      promptBefore: "El",
      promptAfter: "pare es diu Jordi.",
      correctAnswer: "meu",
      wordBank: ["meu", "meva", "teu", "seu"],
      translation: "Mi padre se llama Jordi.",
      xp: 5,
    },
    {
      type: "word-order",
      words: ["Tinc", "i", "una", "germana.", "germà", "un"],
      correctOrder: ["Tinc", "un", "germà", "i", "una", "germana."],
      translation: "Tengo un hermano y una hermana.",
      xp: 5,
    },
    {
      type: "write",
      instruction: "Escriu en català",
      prompt: "mi hermana",
      correctAnswer: "la meva germana",
      acceptedAnswers: ["la meva germana", "meva germana"],
      translation: "mi hermana",
      xp: 5,
    },
  ],

  commonError: {
    icon: "⚠️",
    title: "El meu o la meva?",
    wrong: '"La meu pare" / "El meva mare"',
    correct: '"El meu pare" / "La meva mare"',
    explanation:
      "En castellà, el possessiu \"mi\" és igual per a tots els gèneres: \"mi padre\", \"mi madre\". " +
      "En català, el possessiu concorda amb el gènere del nom que acompanya: " +
      '"el meu" si el nom és masculí, "la meva" si és femení. ' +
      "Recorda: és el gènere del nom (pare, mare), no el teu gènere, el que determina el possessiu.",
  },

  conversation: {
    title: "Parlem de la família",
    lines: [
      { id: "l1", speaker: "laia", text: "Tens família a Barcelona?" },
      { id: "l2", speaker: "user", text: "..." },
      { id: "l3", speaker: "laia", text: "Ah, i els teus pares estan a Espanya?" },
    ],
    question: "Com explicaries que tens un germà a Barcelona?",
    options: [
      { id: "a", label: "Sí, el meu germà viu a Barcelona.", correct: true },
      { id: "b", label: "No, la meva germà és a Madrid.", correct: false },
      { id: "c", label: "Tinc el meva família a casa.", correct: false },
      { id: "d", label: "Els meva pares estan bé.", correct: false },
    ],
    xp: 5,
  },

  review: [
    '"El meu / la meva" concorden amb el gènere del nom que acompanyen.',
    '"La dona" pot significar "la mujer" o "la esposa" depenent del context.',
    '"L\'àvia" i "l\'avi" porten article amb apòstrof perquè comencen per vocal.',
    '"La parella" és la paraula neutra per a "pareja" en tots els contextos.',
    'Per dir la professió d\'un familiar: "El meu pare és metge", sense article.',
  ],

  culturalCuriosity: {
    icon: "🏰",
    title: "Castells: la família com a pilar",
    content:
      "Els castellers formen torres humanes de fins a deu pisos d'alçada. " +
      "Cada persona de la família juga un paper: els avis sostenen la base (la pinya), " +
      "els adults formen el tronc i els nens més petits (els anxanetes) pugen al cim. " +
      "És una metàfora perfecta de la família catalana: \"Força, Equilibri, Valor i Seny\" " +
      "— el lema dels castellers, declarat Patrimoni de la Humanitat per la UNESCO el 2010.",
  },
};

export const lesson3Content = buildInteractiveLesson(template);
