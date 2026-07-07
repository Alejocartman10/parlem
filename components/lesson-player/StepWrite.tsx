"use client";

import { useState, type FormEvent } from "react";
import type { WriteStep } from "@/lib/types";
import { FeedbackBanner } from "@/components/lesson-player/FeedbackBanner";
import { Button } from "@/components/ui/Button";

interface StepWriteProps {
  step: WriteStep;
  onComplete: (xpAwarded: number) => void;
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function isAccepted(userAnswer: string, step: WriteStep): boolean {
  const norm = normalize(userAnswer);
  if (norm === normalize(step.correctAnswer)) return true;
  return step.acceptedAnswers.some((alt) => norm === normalize(alt));
}

export function StepWrite({ step, onComplete }: StepWriteProps) {
  const [answer, setAnswer] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleCheck(event: FormEvent) {
    event.preventDefault();
    if (!answer.trim()) return;
    const correct = isAccepted(answer, step);
    setIsCorrect(correct);
    setHasChecked(true);
  }

  function handleRetry() {
    setAnswer("");
    setHasChecked(false);
    setIsCorrect(false);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Escriu en català
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.instruction}
        </h2>

        <div className="rounded-xl2 bg-parlem-gray-50 px-4 py-4 text-sm font-semibold text-parlem-gray-700">
          {step.prompt}
        </div>

        <p className="text-xs text-parlem-gray-400">
          En castellà: <em>{step.translation}</em>
        </p>

        <form onSubmit={handleCheck} className="flex flex-col gap-3">
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={hasChecked && isCorrect}
            placeholder="Escriu aquí la teva resposta..."
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="h-12 rounded-xl2 border border-parlem-gray-200 bg-white px-4 text-sm text-parlem-gray-900 outline-none transition-colors duration-200 focus:border-parlem-green-400 disabled:opacity-60"
          />
        </form>

        {hasChecked && (
          <div className="flex flex-col gap-2 animate-fade-in">
            <FeedbackBanner
              isCorrect={isCorrect}
              correctText={`Molt bé! La resposta és: "${step.correctAnswer}"`}
              incorrectText={`La resposta correcta és: "${step.correctAnswer}"`}
            />
            {!isCorrect && (
              <button
                onClick={handleRetry}
                className="text-xs font-semibold text-parlem-green-600 underline"
              >
                Tornar a intentar
              </button>
            )}
          </div>
        )}
      </div>

      {hasChecked ? (
        <Button fullWidth size="lg" onClick={() => onComplete(isCorrect ? step.xp : 0)}>
          Continuar
        </Button>
      ) : (
        <Button fullWidth size="lg" disabled={!answer.trim()} onClick={handleCheck}>
          Comprovar
        </Button>
      )}
    </div>
  );
}
