import type {
  ConversationChoiceOption,
  ConversationLine,
  InteractiveLesson,
  VocabularyItem,
} from "@/lib/types";

// ─── Tipos de ejercicio dentro de la plantilla ───────────────────────────────

interface TemplateExerciseMultipleChoice {
  type: "multiple-choice";
  question: string;
  options: Array<{ id: string; label: string }>;
  correctOptionId: string;
  xp: number;
}

interface TemplateExerciseFillBlank {
  type: "fill-blank";
  promptBefore: string;
  promptAfter: string;
  correctAnswer: string;
  wordBank: string[];
  translation: string;
  xp: number;
}

interface TemplateExerciseWordOrder {
  type: "word-order";
  words: string[];
  correctOrder: string[];
  translation: string;
  xp: number;
}

interface TemplateExerciseMatch {
  type: "match";
  instruction: string;
  pairs: Array<{ id: string; left: string; right: string }>;
  xp: number;
}

interface TemplateExerciseWrite {
  type: "write";
  instruction: string;
  prompt: string;
  correctAnswer: string;
  acceptedAnswers?: string[];
  translation: string;
  xp: number;
}

/**
 * Tip informatiu, sense avaluació. S'insereix a l'array `exercises` en la
 * posició exacta on cal explicar una estructura abans que un exercici la
 * exigeixi. No suma XP ni interromp el flux d'avaluació.
 */
interface TemplateExerciseTip {
  type: "tip";
  icon: string;
  title: string;
  content: string;
}

type TemplateExercise =
  | TemplateExerciseMultipleChoice
  | TemplateExerciseFillBlank
  | TemplateExerciseWordOrder
  | TemplateExerciseMatch
  | TemplateExerciseWrite
  | TemplateExerciseTip;

// ─── Estructura canónica de una lección ──────────────────────────────────────

/**
 * LessonTemplateData define el contenido de una lección.
 * Para añadir una nueva lección, exporta un objeto de este tipo
 * y pásalo a buildInteractiveLesson(). No hace falta tocar
 * ningún componente ni el motor de lecciones.
 *
 * Orden canónico de secciones:
 *   1. Introducción
 *   2. Objetivos
 *   3. Vocabulario
 *   4. Explicación
 *   5. Audio
 *   6. Ejercicios (múltiples)
 *   7. Conversación
 *   8. Repaso
 *   9. Curiositat cultural
 */
export interface LessonTemplateData {
  lessonId: string;

  introduction: {
    icon: string;
    title: string;
    description: string;
  };

  objectives: string[];

  vocabulary: {
    title: string;
    items: VocabularyItem[];
  };

  explanation: {
    title: string;
    bullets: string[];
  };

  audio: {
    phrase: string;
    translation: string;
  };

  exercises: TemplateExercise[];

  conversation: {
    /**
     * Tip opcional que s'insereix just abans de la conversa, per explicar
     * una estructura (verbs, connectors) que la conversa exigeix però que
     * no forma part del vocabulari ni dels exercicis previs.
     */
    tip?: {
      icon: string;
      title: string;
      content: string;
    };
    title: string;
    lines: ConversationLine[];
    question: string;
    options: ConversationChoiceOption[];
    xp: number;
  };

  review: string[];

  commonError: {
    icon: string;
    title: string;
    wrong: string;
    correct: string;
    explanation: string;
  };

  culturalCuriosity: {
    icon: string;
    title: string;
    content: string;
  };
}

// ─── Builder ─────────────────────────────────────────────────────────────────

export function buildInteractiveLesson(data: LessonTemplateData): InteractiveLesson {
  let n = 0;
  const id = () => `step-${++n}`;

  const steps: InteractiveLesson["steps"] = [];

  // 1. Introducció
  steps.push({
    kind: "presentation",
    id: id(),
    icon: data.introduction.icon,
    title: data.introduction.title,
    description: data.introduction.description,
  });

  // 2. Objectius
  steps.push({
    kind: "objectives",
    id: id(),
    title: "Què aprendràs",
    items: data.objectives,
  });

  // 3. Vocabulari
  steps.push({
    kind: "vocabulary",
    id: id(),
    title: data.vocabulary.title,
    items: data.vocabulary.items,
  });

  // 4. Explicació
  steps.push({
    kind: "explanation",
    id: id(),
    title: data.explanation.title,
    bullets: data.explanation.bullets,
  });

  // 5. Àudio
  steps.push({
    kind: "audio",
    id: id(),
    title: "Escolta la pronunciació",
    phrase: data.audio.phrase,
    translation: data.audio.translation,
  });

  // 6. Exercicis
  for (const exercise of data.exercises) {
    if (exercise.type === "multiple-choice") {
      steps.push({
        kind: "multiple-choice",
        id: id(),
        question: exercise.question,
        options: exercise.options,
        correctOptionId: exercise.correctOptionId,
        xp: exercise.xp,
      });
    } else if (exercise.type === "fill-blank") {
      steps.push({
        kind: "fill-blank",
        id: id(),
        promptBefore: exercise.promptBefore,
        promptAfter: exercise.promptAfter,
        correctAnswer: exercise.correctAnswer,
        wordBank: exercise.wordBank,
        translation: exercise.translation,
        xp: exercise.xp,
      });
    } else if (exercise.type === "word-order") {
      steps.push({
        kind: "word-order",
        id: id(),
        words: exercise.words,
        correctOrder: exercise.correctOrder,
        translation: exercise.translation,
        xp: exercise.xp,
      });
    } else if (exercise.type === "match") {
      steps.push({
        kind: "match",
        id: id(),
        instruction: exercise.instruction,
        pairs: exercise.pairs,
        xp: exercise.xp,
      });
    } else if (exercise.type === "write") {
      steps.push({
        kind: "write",
        id: id(),
        instruction: exercise.instruction,
        prompt: exercise.prompt,
        correctAnswer: exercise.correctAnswer,
        acceptedAnswers: exercise.acceptedAnswers ?? [],
        translation: exercise.translation,
        xp: exercise.xp,
      });
    } else if (exercise.type === "tip") {
      steps.push({
        kind: "tip",
        id: id(),
        icon: exercise.icon,
        title: exercise.title,
        content: exercise.content,
      });
    }
  }

  // 7. Error freqüent
  steps.push({
    kind: "common-error",
    id: id(),
    icon: data.commonError.icon,
    title: data.commonError.title,
    wrong: data.commonError.wrong,
    correct: data.commonError.correct,
    explanation: data.commonError.explanation,
  });

  // 8. Conversa (amb tip opcional immediatament abans)
  if (data.conversation.tip) {
    steps.push({
      kind: "tip",
      id: id(),
      icon: data.conversation.tip.icon,
      title: data.conversation.tip.title,
      content: data.conversation.tip.content,
    });
  }
  steps.push({
    kind: "conversation",
    id: id(),
    title: data.conversation.title,
    lines: data.conversation.lines,
    question: data.conversation.question,
    options: data.conversation.options,
    xp: data.conversation.xp,
  });

  // 9. Repàs
  steps.push({
    kind: "review",
    id: id(),
    title: "Repàs final",
    items: data.review,
  });

  // 10. Curiositat cultural
  steps.push({
    kind: "cultural-curiosity",
    id: id(),
    icon: data.culturalCuriosity.icon,
    title: data.culturalCuriosity.title,
    content: data.culturalCuriosity.content,
  });

  return { lessonId: data.lessonId, steps };
}