"use client";

import { useState } from "react";
import type { AudioStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepAudioProps {
  step: AudioStep;
  onContinue: () => void;
}

export function StepAudio({ step, onContinue }: StepAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  function handlePlay() {
    setIsPlaying(true);
    window.setTimeout(() => {
      setIsPlaying(false);
      setHasPlayed(true);
    }, 1400);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Audio
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.title}
        </h2>

        <Card className="flex flex-col items-center gap-5 py-10 text-center">
          <button
            onClick={handlePlay}
            aria-label="Reproduir frase"
            className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white shadow-soft transition-transform duration-300 ${
              isPlaying ? "scale-110 bg-parlem-green-600" : "bg-parlem-green-500 active:scale-95"
            }`}
          >
            {isPlaying ? "🔊" : "▶️"}
          </button>
          <div>
            <p className="text-lg font-bold text-parlem-gray-900">{step.phrase}</p>
            <p className="mt-1 text-sm text-parlem-gray-500">{step.translation}</p>
          </div>
        </Card>
      </div>

      <Button fullWidth size="lg" disabled={!hasPlayed} onClick={onContinue}>
        {hasPlayed ? "Continuar" : "Escolta la frase primer"}
      </Button>
    </div>
  );
}
