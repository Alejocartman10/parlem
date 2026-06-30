"use client";

import { useState } from "react";
import type { FillBlankStep } from "@/lib/types";
import { FeedbackBanner } from "@/components/lesson-player/FeedbackBanner";
import { Button } from "@/components/ui/Button";

interface StepFillBlankProps {
  step: FillBlankStep;
  onComplete: (xpAwarded: number) => void;
}

export function StepFillBlank({ step, onComplete }: StepFillBlankProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const isCorrect = selectedWord === step.correctAnswer;

  function handleSelect(word: string) {
    if (hasChecked && isCorrect) return;
    setSelectedWord(word);
    setHasChecked(false);
  }

  function handleCheck() {
    if (!selectedWord) return;
    setHasChecked(true);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Exercici
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          Completa la frase
        </h2>

        <div className="rounded-2xl bg-parlem-gray-50 px-5 py-6 text-center text-lg font-semibold text-parlem-gray-900">
          {step.promptBefore}{" "}
          <span
            className={`inline-block min-w-[3rem] rounded-lg border-b-2 px-2 ${
              selectedWord
                ? "border-parlem-green-500 text-parlem-green-700"
                : "border-parlem-gray-300 text-parlem-gray-300"
            }`}
          >
            {selectedWord ?? "···"}
          </span>{" "}
          {step.promptAfter}
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {step.wordBank.map((word) => (
            <button
              key={word}
              onClick={() => handleSelect(word)}
              disabled={hasChecked && isCorrect}
              className={`rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95 ${
                selectedWord === word
                  ? "border-parlem-green-400 bg-parlem-green-50 text-parlem-green-700"
                  : "border-parlem-gray-100 bg-white text-parlem-gray-700 hover:border-parlem-gray-200"
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {hasChecked && (
          <FeedbackBanner
            isCorrect={isCorrect}
            correctText={`Molt bé! ${step.translation}`}
          />
        )}
      </div>

      {hasChecked && isCorrect ? (
        <Button fullWidth size="lg" onClick={() => onComplete(step.xp)}>
          Continuar
        </Button>
      ) : (
        <Button fullWidth size="lg" disabled={!selectedWord} onClick={handleCheck}>
          Comprovar
        </Button>
      )}
    </div>
  );
}
