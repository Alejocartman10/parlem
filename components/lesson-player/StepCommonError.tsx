import type { CommonErrorStep } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface StepCommonErrorProps {
  step: CommonErrorStep;
  onContinue: () => void;
}

export function StepCommonError({ step, onContinue }: StepCommonErrorProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
          Error freqüent
        </span>
        <div className="flex items-center gap-3">
          <span className="text-3xl animate-pop">{step.icon}</span>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
            {step.title}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-xl2 border border-red-100 bg-red-50 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-red-500 mb-1">
              ✕ Incorrecte
            </p>
            <p className="text-sm font-semibold text-red-700 italic">{step.wrong}</p>
          </div>
          <div className="rounded-xl2 border border-parlem-green-100 bg-parlem-green-50 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-parlem-green-600 mb-1">
              ✓ Correcte
            </p>
            <p className="text-sm font-semibold text-parlem-green-800 italic">{step.correct}</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-parlem-gray-600">{step.explanation}</p>
      </div>

      <Button fullWidth size="lg" onClick={onContinue}>
        Entesos
      </Button>
    </div>
  );
}
