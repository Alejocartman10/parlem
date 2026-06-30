"use client";

import { useState } from "react";
import type { ConversationStep } from "@/lib/types";
import { AnswerOption } from "@/components/lesson-player/AnswerOption";
import { FeedbackBanner } from "@/components/lesson-player/FeedbackBanner";
import { Button } from "@/components/ui/Button";

interface StepConversationProps {
  step: ConversationStep;
  onComplete: (xpAwarded: number) => void;
}

export function StepConversation({ step, onComplete }: StepConversationProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const selectedOption = step.options.find((option) => option.id === selectedId);
  const isCorrect = selectedOption?.correct ?? false;

  function handleSelect(optionId: string) {
    if (hasChecked && isCorrect) return;
    setSelectedId(optionId);
    setHasChecked(false);
  }

  function handleCheck() {
    if (!selectedId) return;
    setHasChecked(true);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Conversa
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.title}
        </h2>

        <div className="flex flex-col gap-2">
          {step.lines.map((line) => (
            <div key={line.id} className="flex items-end gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-parlem-green-100 text-sm">
                👩‍🏫
              </span>
              <div className="rounded-2xl rounded-bl-sm border border-parlem-gray-100 bg-white px-4 py-2.5 text-sm font-medium text-parlem-gray-800">
                {line.text}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm font-semibold text-parlem-gray-700">{step.question}</p>

        <div className="flex flex-col gap-3">
          {step.options.map((option) => {
            let state: "idle" | "selected" | "correct" | "incorrect" = "idle";
            if (hasChecked && option.correct) state = "correct";
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
        <Button fullWidth size="lg" onClick={() => onComplete(step.xp)}>
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
