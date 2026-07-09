/**
 * Auditoría de contenido pedagógico.
 *
 * Compara, lección por lección y en orden acumulativo, qué palabras/frases
 * se EXIGEN en los ejercicios (multiple-choice, fill-blank, word-order,
 * match, write, conversation) contra qué palabras/frases fueron ENSEÑADAS
 * previamente (vocabulary.items, explanation.bullets entre comillas,
 * tip.content entre comillas, commonError.correct).
 *
 * Es un chequeo HEURÍSTICO basado en tokens de palabra, no en gramática.
 * Va a tener falsos positivos (conjugaciones, plurales, contracciones no
 * detectadas) y falsos negativos (una palabra "enseñada" en un ejemplo
 * suelto que el script no reconoce como vocabulario). Úsalo como punto de
 * partida para revisión manual, no como verdad absoluta.
 *
 * Uso:
 *   npx tsx scripts/audit-lesson-content.ts
 */

import { lessons } from "../lib/data/lessons";
import { lesson1Content } from "../lib/data/lesson1-content";
import { lesson2Content } from "../lib/data/lesson2-content";
import { lesson3Content } from "../lib/data/lesson3-content";
import { lesson4Content } from "../lib/data/lesson4-content";
import { lesson5Content } from "../lib/data/lesson5-content";
import { lesson6Content } from "../lib/data/lesson6-content";
import { lesson7Content } from "../lib/data/lesson7-content";
import { lesson8Content } from "../lib/data/lesson8-content";
import { lesson9Content } from "../lib/data/lesson9-content";
import { lesson10Content } from "../lib/data/lesson10-content";
import type { InteractiveLesson, LessonStep } from "../lib/types";

const CONTENT_BY_ID: Record<string, InteractiveLesson> = {
  [lesson1Content.lessonId]: lesson1Content,
  [lesson2Content.lessonId]: lesson2Content,
  [lesson3Content.lessonId]: lesson3Content,
  [lesson4Content.lessonId]: lesson4Content,
  [lesson5Content.lessonId]: lesson5Content,
  [lesson6Content.lessonId]: lesson6Content,
  [lesson7Content.lessonId]: lesson7Content,
  [lesson8Content.lessonId]: lesson8Content,
  [lesson9Content.lessonId]: lesson9Content,
  [lesson10Content.lessonId]: lesson10Content,
};

// Palabras funcionales muy básicas (artículos, preposiciones, pronombres,
// contracciones) que asumimos conocidas desde el arranque para no llenar
// el reporte de ruido. Ajusta esta lista si ves demasiados falsos positivos
// o si quieres ser más estricto.
const STOPWORDS = new Set([
  "el", "la", "els", "les", "un", "una", "uns", "unes",
  "de", "d", "del", "dels", "a", "al", "als", "en",
  "i", "o", "amb", "per", "què", "que", "com", "on",
  "quan", "qui", "quins", "quines", "quin", "quina",
  "és", "són", "no", "sí", "molt", "més", "menys",
  "si", "hi", "ho", "es", "se", "em", "et", "el·",
  "m", "t", "s", "l", "n", "hi", "ho", "això", "allò",
  "jo", "tu", "ell", "ella", "nosaltres", "vosaltres", "ells", "elles",
  "meu", "meva", "teu", "teva", "seu", "seva", "meus", "meves",
  "aquest", "aquesta", "aquests", "aquestes",
  "bé", "ja", "tot", "tota", "tots", "totes",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFC")
    .replace(/[¿?¡!.,:;()"«»]/g, " ")
    .split(/[\s'’]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function extractQuotedPhrases(text: string): string[] {
  const matches = text.match(/["“]([^"”]+)["”]/g) ?? [];
  return matches.map((m) => m.replace(/["“”]/g, ""));
}

function collectTaughtTokens(lesson: InteractiveLesson): Set<string> {
  const taught = new Set<string>();

  for (const step of lesson.steps) {
    if (step.kind === "vocabulary") {
      for (const item of step.items) {
        for (const token of tokenize(item.catalan)) taught.add(token);
      }
    }
    if (step.kind === "explanation") {
      for (const bullet of step.bullets) {
        for (const phrase of extractQuotedPhrases(bullet)) {
          for (const token of tokenize(phrase)) taught.add(token);
        }
      }
    }
    if (step.kind === "common-error") {
      for (const token of tokenize(step.correct)) taught.add(token);
    }
    if (step.kind === "tip") {
      for (const phrase of extractQuotedPhrases(step.content)) {
        for (const token of tokenize(phrase)) taught.add(token);
      }
    }
    if (step.kind === "presentation" || step.kind === "objectives") {
      // Título/objetivos no cuentan como "enseñanza" de vocabulario nuevo,
      // se ignoran a propósito.
    }
  }

  return taught;
}

interface Flag {
  lessonId: string;
  stepKind: LessonStep["kind"];
  stepId: string;
  sourceText: string;
  unknownTokens: string[];
}

function collectExercisePhrases(step: LessonStep): { source: string; text: string }[] {
  switch (step.kind) {
    case "multiple-choice":
      return [
        { source: "question", text: step.question },
        ...step.options.map((o) => ({ source: `option:${o.id}`, text: o.label })),
      ];
    case "fill-blank":
      return [
        { source: "prompt", text: `${step.promptBefore} ${step.promptAfter}` },
        { source: "correctAnswer", text: step.correctAnswer },
        { source: "wordBank", text: step.wordBank.join(" ") },
      ];
    case "word-order":
      return [{ source: "correctOrder", text: step.correctOrder.join(" ") }];
    case "match":
      return step.pairs.map((p) => ({ source: `pair:${p.id}`, text: p.left }));
    case "write":
      return [
        { source: "correctAnswer", text: step.correctAnswer },
        { source: "acceptedAnswers", text: step.acceptedAnswers.join(" ") },
      ];
    case "conversation":
      return [
        ...step.lines
          .filter((l) => l.speaker === "laia")
          .map((l) => ({ source: `line:${l.id}`, text: l.text })),
        { source: "question", text: step.question },
        ...step.options.map((o) => ({ source: `option:${o.id}`, text: o.label })),
      ];
    default:
      return [];
  }
}

function auditLesson(
  lessonId: string,
  lesson: InteractiveLesson,
  cumulativeTaught: Set<string>
): Flag[] {
  const flags: Flag[] = [];
  // El vocabulario y explicación de ESTA lección se consideran disponibles
  // para sus propios ejercicios (se enseñan antes, dentro del mismo flujo).
  const availableForThisLesson = new Set([
    ...cumulativeTaught,
    ...collectTaughtTokens(lesson),
  ]);

  for (const step of lesson.steps) {
    const phrases = collectExercisePhrases(step);
    for (const { source, text } of phrases) {
      const tokens = tokenize(text);
      const unknown = tokens.filter((t) => !availableForThisLesson.has(t));
      if (unknown.length > 0) {
        flags.push({
          lessonId,
          stepKind: step.kind,
          stepId: `${step.id} (${source})`,
          sourceText: text,
          unknownTokens: unknown,
        });
      }
    }
  }

  return flags;
}

function main() {
  const orderedLessons = [...lessons].sort((a, b) => a.order - b.order);
  const cumulativeTaught = new Set<string>();
  let totalFlags = 0;

  for (const lessonMeta of orderedLessons) {
    const content = CONTENT_BY_ID[lessonMeta.id];
    if (!content) {
      console.log(`\n⚠️  ${lessonMeta.id}: sin archivo de contenido importado, se omite.`);
      continue;
    }

    const flags = auditLesson(lessonMeta.id, content, cumulativeTaught);

    console.log(`\n${"=".repeat(60)}`);
    console.log(`${lessonMeta.order}. ${lessonMeta.id} — ${lessonMeta.title}`);
    console.log("=".repeat(60));

    if (flags.length === 0) {
      console.log("✅ Sin palabras marcadas como no enseñadas.");
    } else {
      for (const flag of flags) {
        totalFlags += 1;
        console.log(
          `  ⚠️  [${flag.stepKind}] ${flag.stepId}\n` +
            `      texto: "${flag.sourceText}"\n` +
            `      palabras no enseñadas: ${flag.unknownTokens.join(", ")}`
        );
      }
    }

    // Todo lo enseñado en esta lección pasa a estar disponible para las siguientes.
    for (const token of collectTaughtTokens(content)) {
      cumulativeTaught.add(token);
    }
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Total de alertas: ${totalFlags}`);
  console.log("=".repeat(60));
  console.log(
    "\nRecuerda: esto es heurístico. Antes de agregar vocabulario o un StepTip,\n" +
      "revisa cada alerta a mano — puede ser una conjugación de una palabra ya\n" +
      "enseñada, un plural, o algo que el script no reconoce como comillado."
  );
}

main();