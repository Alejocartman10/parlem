"use client";

import { useEffect, useRef, useState } from "react";
import type { VocabularyStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepVocabularyProps {
  step: VocabularyStep;
  onContinue: () => void;
}

function findCatalanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return voices.find((voice) => voice.lang.toLowerCase().startsWith("ca")) ?? null;
}

export function StepVocabulary({ step, onContinue }: StepVocabularyProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const supported = typeof window !== "undefined" && "speechSynthesis" in window;
    setIsSupported(supported);

    if (!supported) {
      return;
    }

    function loadVoices() {
      setVoices(window.speechSynthesis.getVoices());
    }

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
    };
  }, []);

  function handlePlay(itemId: string, catalanText: string) {
    if (!isSupported) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(catalanText);
    utterance.lang = "ca-ES";
    utterance.rate = 0.9;

    const catalanVoice = findCatalanVoice(voices);
    if (catalanVoice) {
      utterance.voice = catalanVoice;
    }

    utterance.onstart = () => {
      if (utteranceRef.current !== utterance) return;
      setPlayingId(itemId);
    };
    utterance.onend = () => {
      if (utteranceRef.current !== utterance) return;
      setPlayingId(null);
    };
    utterance.onerror = () => {
      if (utteranceRef.current !== utterance) return;
      setPlayingId(null);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
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
                onClick={() => handlePlay(item.id, item.catalan)}
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