"use client";

import { useEffect, useRef, useState } from "react";
import type { AudioStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepAudioProps {
  step: AudioStep;
  onContinue: () => void;
}

function findCatalanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return voices.find((voice) => voice.lang.toLowerCase().startsWith("ca")) ?? null;
}

function sanitizeForSpeech(text: string): string {
  return text
    .replace(/\//g, ", ")
    .replace(/-/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function StepAudio({ step, onContinue }: StepAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [isSlow, setIsSlow] = useState(false);
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

  function handlePlay() {
    if (!isSupported) {
      setHasPlayed(true);
      return;
    }

    // Todo lo de aquí en adelante debe ejecutarse de forma síncrona,
    // dentro del mismo gesto de click, o iOS/Safari bloquea el audio.
    const synth = window.speechSynthesis;
    synth.cancel();

    const sanitizedPhrase = sanitizeForSpeech(step.phrase);
    const utterance = new SpeechSynthesisUtterance(sanitizedPhrase);
    utterance.lang = "ca-ES";
    utterance.rate = isSlow ? 0.6 : 0.9;

    const catalanVoice = findCatalanVoice(voices);
    if (catalanVoice) {
      utterance.voice = catalanVoice;
    }

    utterance.onstart = () => {
      if (utteranceRef.current !== utterance) return;
      setIsPlaying(true);
    };
    utterance.onend = () => {
      if (utteranceRef.current !== utterance) return;
      setIsPlaying(false);
      setHasPlayed(true);
    };
    utterance.onerror = () => {
      if (utteranceRef.current !== utterance) return;
      setIsPlaying(false);
      setHasPlayed(true);
    };

    utteranceRef.current = utterance;

    // iOS a veces deja el motor en estado "paused" tras una navegación
    // o un cancel() previo; resume() antes de speak() es una mitigación
    // conocida para ese bloqueo silencioso.
    synth.resume();
    synth.speak(utterance);
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

          {isSupported && (
            <div className="flex items-center gap-2 rounded-full bg-parlem-gray-50 p-1">
              <button
                onClick={() => setIsSlow(false)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors duration-200 ${
                  !isSlow
                    ? "bg-white text-parlem-green-600 shadow-soft"
                    : "text-parlem-gray-400"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setIsSlow(true)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors duration-200 ${
                  isSlow
                    ? "bg-white text-parlem-green-600 shadow-soft"
                    : "text-parlem-gray-400"
                }`}
              >
                Lent
              </button>
            </div>
          )}

          {!isSupported && (
            <p className="text-xs text-parlem-gray-400">
              La reproducció d&apos;àudio no està disponible en aquest navegador.
            </p>
          )}
        </Card>
      </div>

      <Button fullWidth size="lg" disabled={!hasPlayed} onClick={onContinue}>
        {hasPlayed ? "Continuar" : "Escolta la frase primer"}
      </Button>
    </div>
  );
}