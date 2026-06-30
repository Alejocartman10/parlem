"use client";

import { useState } from "react";
import type { VocabularyStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepVocabularyProps {
  step: VocabularyStep;
  onContinue: () => void;
}

export function StepVocabulary({ step, onContinue }: StepVocabularyProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  function handlePlay(itemId: string) {
    setPlayingId(itemId);
    setTimeout(() => setPlayingId(null), 700);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-6 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Vocabulari
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.title}
        </h2>
        <div className="flex flex-col gap-2.5">
          {step.items.map((item) => (
            <Card key={item.id} className="flex items-center gap-3 py-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-parlem-green-50 text-xl">
                {item.icon}
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-parlem-gray-900">{item.catalan}</p>
                <p className="text-xs text-parlem-gray-500">{item.spanish}</p>
              </div>
              <button
                onClick={() => handlePlay(item.id)}
                aria-label={`Escoltar ${item.catalan}`}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-200 ${
                  playingId === item.id
                    ? "scale-110 bg-parlem-green-500 text-white"
                    : "bg-parlem-gray-50 text-parlem-gray-500 hover:bg-parlem-gray-100"
                }`}
              >
                🔊
              </button>
            </Card>
          ))}
        </div>
      </div>
      <Button fullWidth size="lg" onClick={onContinue}>
        Continuar
      </Button>
    </div>
  );
}
