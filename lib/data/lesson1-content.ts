import type { InteractiveLesson } from "@/lib/types";

export const LESSON_1_ID = "l01-salutacions";

export const lesson1Content: InteractiveLesson = {
  lessonId: LESSON_1_ID,
  steps: [
    {
      kind: "presentation",
      id: "presentation",
      icon: "👋",
      title: "Salutacions i presentacions",
      description:
        "Aprendràs a saludar i presentar-te en català: la primera eina per connectar amb la gent a Catalunya.",
    },
    {
      kind: "explanation",
      id: "explanation",
      title: "Abans de començar",
      bullets: [
        "\"Hola\" es pot usar a qualsevol hora del dia.",
        "\"Bon dia\" s'utilitza fins migdia, \"Bona tarda\" després.",
        "\"Adéu\" serveix per acomiadar-te en qualsevol situació.",
      ],
    },
    {
      kind: "vocabulary",
      id: "vocabulary",
      title: "Vocabulari clau",
      items: [
        { id: "v1", icon: "👋", catalan: "Hola", spanish: "Hola" },
        { id: "v2", icon: "☀️", catalan: "Bon dia", spanish: "Buenos días" },
        { id: "v3", icon: "🌤️", catalan: "Bona tarda", spanish: "Buenas tardes" },
        { id: "v4", icon: "🌙", catalan: "Adéu", spanish: "Adiós" },
        { id: "v5", icon: "🙋", catalan: "Em dic...", spanish: "Me llamo..." },
      ],
    },
    {
      kind: "audio",
      id: "audio",
      title: "Escolta la pronunciació",
      phrase: "Hola, em dic Laia.",
      translation: "Hola, me llamo Laia.",
    },
    {
      kind: "multiple-choice",
      id: "exercise-1",
      question: "Com saludes algú al matí?",
      options: [
        { id: "a", label: "Bon dia" },
        { id: "b", label: "Bona nit" },
        { id: "c", label: "Adéu" },
      ],
      correctOptionId: "a",
      xp: 5,
    },
    {
      kind: "fill-blank",
      id: "exercise-2",
      promptBefore: "Hola,",
      promptAfter: "dic Marc.",
      correctAnswer: "em",
      wordBank: ["em", "et", "es", "li"],
      translation: "Hola, me llamo Marc.",
      xp: 5,
    },
    {
      kind: "word-order",
      id: "exercise-3",
      words: ["em", "dic", "Anna", "Hola,"],
      correctOrder: ["Hola,", "em", "dic", "Anna"],
      translation: "Hola, me llamo Anna.",
      xp: 5,
    },
    {
      kind: "conversation",
      id: "exercise-4",
      title: "Mini conversa amb la Laia",
      lines: [
        { id: "l1", speaker: "laia", text: "Hola! Com et dic?" },
      ],
      question: "Què respons?",
      options: [
        { id: "a", label: "Em dic Marc, i tu?", correct: true },
        { id: "b", label: "Adéu, fins demà.", correct: false },
        { id: "c", label: "Bona tarda a tothom.", correct: false },
      ],
      xp: 5,
    },
  ],
};
