"use client";

import type { TipStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepTipProps {
  step: TipStep;
  onContinue: () => void;
}

export function StepTip({ step, onContinue }: StepTipProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Punt clau
        </span>

        <Card className="flex flex-col items-center gap-4 py-10 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-parlem-green-50 text-3xl">
            {step.icon}
          </span>
          <h2 className="text-xl font-bold leading-snug tracking-tight text-parlem-gray-900">
            {step.title}
          </h2>
          <p className="text-sm leading-relaxed text-parlem-gray-600">
            {step.content}
          </p>
        </Card>
      </div>

      <Button fullWidth size="lg" onClick={onContinue}>
        Continuar
      </Button>
    </div>
  );
}