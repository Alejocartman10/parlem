"use client";

import { useState } from "react";
import type { MultipleChoiceStep } from "@/lib/types";
import { AnswerOption } from "@/components/lesson-player/AnswerOption";
import { FeedbackBanner } from "@/components/lesson-player/FeedbackBanner";
import { Button } from "@/components/ui/Button";

interface StepMultipleChoiceProps {
  step: MultipleChoiceStep;
  onComplete: (xpAwarded: number) => void;
}

export function StepMultipleChoice({ step, onComplete }: StepMultipleChoiceProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const isCorrect = selectedId === step.correctOptionId;

  function handleSelect(optionId: string) {
    if (hasChecked && isCorrect) return;
    setSelectedId(optionId);
    setHasChecked(false);
  }

  function handleCheck() {
    if (!selectedId) return;
    setHasChecked(true);
  }

  function handleContinue() {
    onComplete(step.xp);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Exercici
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.question}
        </h2>

        <div className="flex flex-col gap-3">
          {step.options.map((option) => {
            let state: "idle" | "selected" | "correct" | "incorrect" = "idle";
            if (hasChecked && option.id === step.correctOptionId) state = "correct";
            else if (hasChecked && option.id === selectedId) state = "incorrect";
            else if (option.id === selectedId) state = "selected";

            return (
              <AnswerOption
                key={option.id}
                label={option.label}
                state={state}
                disabled={hasChecked && isCorrect}
                onClick={() => handleSelect(option.id)}
              />
            );
          })}
        </div>

        {hasChecked && <FeedbackBanner isCorrect={isCorrect} />}
      </div>

      {hasChecked && isCorrect ? (
        <Button fullWidth size="lg" onClick={handleContinue}>
          Continuar
        </Button>
      ) : (
        <Button fullWidth size="lg" disabled={!selectedId} onClick={handleCheck}>
          Comprovar
        </Button>
      )}
    </div>
  );
}
