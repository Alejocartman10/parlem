"use client";

import { useMemo, useState } from "react";
import type { MatchStep } from "@/lib/types";
import { FeedbackBanner } from "@/components/lesson-player/FeedbackBanner";
import { Button } from "@/components/ui/Button";

interface StepMatchProps {
  step: MatchStep;
  onComplete: (xpAwarded: number) => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function StepMatch({ step, onComplete }: StepMatchProps) {
  const shuffledRight = useMemo(
    () => shuffle(step.pairs.map((pair) => ({ id: pair.id, label: pair.right }))),
    [step.pairs]
  );

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const allDone = matched.size === step.pairs.length;

  function handleLeft(pairId: string) {
    if (matched.has(pairId)) return;
    setSelectedLeft(pairId);
  }

  function handleRight(pairId: string) {
    if (!selectedLeft) return;
    if (matched.has(pairId)) return;

    if (selectedLeft === pairId) {
      setMatched((prev) => new Set([...prev, pairId]));
      setSelectedLeft(null);
    } else {
      setWrongFlash(pairId);
      setTimeout(() => {
        setWrongFlash(null);
        setSelectedLeft(null);
      }, 700);
    }
  }

  const leftById = Object.fromEntries(step.pairs.map((p) => [p.id, p.left]));

  return (
    <div className="flex flex-1 flex-col justify-between gap-6 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Relaciona
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.instruction}
        </h2>

        <div className="flex gap-3">
          <div className="flex flex-1 flex-col gap-2">
            {step.pairs.map((pair) => {
              const isMatched = matched.has(pair.id);
              const isSelected = selectedLeft === pair.id;
              return (
                <button
                  key={pair.id}
                  onClick={() => handleLeft(pair.id)}
                  disabled={isMatched}
                  className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-all duration-150 active:scale-[0.98] ${
                    isMatched
                      ? "border-parlem-green-200 bg-parlem-green-50 text-parlem-green-600 opacity-70"
                      : isSelected
                        ? "border-parlem-green-500 bg-parlem-green-50 text-parlem-green-700"
                        : "border-parlem-gray-100 bg-white text-parlem-gray-900 hover:border-parlem-green-200"
                  }`}
                >
                  {isMatched ? <span>✓ {pair.left}</span> : pair.left}
                </button>
              );
            })}
          </div>

          <div className="flex flex-1 flex-col gap-2">
            {shuffledRight.map((item) => {
              const isMatched = matched.has(item.id);
              const isWrong = wrongFlash === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleRight(item.id)}
                  disabled={isMatched || !selectedLeft}
                  className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-all duration-150 active:scale-[0.98] ${
                    isMatched
                      ? "border-parlem-green-200 bg-parlem-green-50 text-parlem-green-600 opacity-70"
                      : isWrong
                        ? "border-red-300 bg-red-50 text-red-600"
                        : selectedLeft
                          ? "border-parlem-gray-200 bg-white text-parlem-gray-900 hover:border-parlem-green-300 hover:bg-parlem-green-50/30"
                          : "border-parlem-gray-100 bg-white text-parlem-gray-500"
                  }`}
                >
                  {isMatched ? <span>✓ {item.label}</span> : item.label}
                </button>
              );
            })}
          </div>
        </div>

        {!allDone && selectedLeft && (
          <p className="text-xs font-medium text-parlem-gray-400 text-center animate-fade-in">
            Seleccionat: <strong>{leftById[selectedLeft]}</strong> — ara tria la seva parella
          </p>
        )}

        {allDone && (
          <FeedbackBanner isCorrect={true} correctText="Excel·lent! Totes les parelles correctes." />
        )}
      </div>

      {allDone && (
        <Button fullWidth size="lg" onClick={() => onComplete(step.xp)}>
          Continuar
        </Button>
      )}
    </div>
  );
}
