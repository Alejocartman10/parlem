"use client";

import { useMemo, useState } from "react";
import type { WordOrderStep } from "@/lib/types";
import { FeedbackBanner } from "@/components/lesson-player/FeedbackBanner";
import { Button } from "@/components/ui/Button";

interface StepWordOrderProps {
  step: WordOrderStep;
  onComplete: (xpAwarded: number) => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function StepWordOrder({ step, onComplete }: StepWordOrderProps) {
  const shuffledWords = useMemo(() => shuffle(step.words), [step.words]);
  const [bank, setBank] = useState<string[]>(shuffledWords);
  const [selected, setSelected] = useState<string[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  const isCorrect = selected.join(" ") === step.correctOrder.join(" ");

  function handlePick(word: string, index: number) {
    if (hasChecked && isCorrect) return;
    setSelected((prev) => [...prev, word]);
    setBank((prev) => prev.filter((_, i) => i !== index));
    setHasChecked(false);
  }

  function handleRemove(index: number) {
    if (hasChecked && isCorrect) return;
    const word = selected[index];
    setSelected((prev) => prev.filter((_, i) => i !== index));
    setBank((prev) => [...prev, word]);
    setHasChecked(false);
  }

  function handleCheck() {
    if (selected.length === 0) return;
    setHasChecked(true);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Exercici
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          Ordena la frase
        </h2>

        <div className="flex min-h-[4rem] flex-wrap items-center gap-2 rounded-2xl bg-parlem-gray-50 px-4 py-4">
          {selected.length === 0 && (
            <span className="text-sm text-parlem-gray-400">Toca les paraules en ordre...</span>
          )}
          {selected.map((word, index) => (
            <button
              key={`${word}-${index}`}
              onClick={() => handleRemove(index)}
              className="rounded-xl border border-parlem-green-400 bg-parlem-green-50 px-3 py-2 text-sm font-bold text-parlem-green-700 transition-transform duration-150 active:scale-95"
            >
              {word}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {bank.map((word, index) => (
            <button
              key={`${word}-${index}`}
              onClick={() => handlePick(word, index)}
              className="rounded-xl border border-parlem-gray-100 bg-white px-4 py-2.5 text-sm font-bold text-parlem-gray-700 transition-all duration-200 hover:border-parlem-gray-200 active:scale-95"
            >
              {word}
            </button>
          ))}
        </div>

        {hasChecked && (
          <FeedbackBanner isCorrect={isCorrect} correctText={`Molt bé! ${step.translation}`} />
        )}
      </div>

      {hasChecked && isCorrect ? (
        <Button fullWidth size="lg" onClick={() => onComplete(step.xp)}>
          Continuar
        </Button>
      ) : (
        <Button fullWidth size="lg" disabled={selected.length === 0} onClick={handleCheck}>
          Comprovar
        </Button>
      )}
    </div>
  );
}
