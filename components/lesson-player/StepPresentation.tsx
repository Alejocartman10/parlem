import type { PresentationStep } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface StepPresentationProps {
  step: PresentationStep;
  onContinue: () => void;
}

export function StepPresentation({ step, onContinue }: StepPresentationProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-parlem-green-50 to-parlem-green-100 text-4xl animate-pop">
          {step.icon}
        </div>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.title}
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-parlem-gray-500">
          {step.description}
        </p>
      </div>
      <Button fullWidth size="lg" onClick={onContinue}>
        Comencem
      </Button>
    </div>
  );
}
