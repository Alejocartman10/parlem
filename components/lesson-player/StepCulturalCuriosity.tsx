import type { CulturalCuriosityStep } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface StepCulturalCuriosityProps {
  step: CulturalCuriosityStep;
  onContinue: () => void;
}

export function StepCulturalCuriosity({ step, onContinue }: StepCulturalCuriosityProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Curiositat cultural
        </span>
        <div className="flex flex-col items-center gap-5 rounded-xl3 bg-gradient-to-br from-parlem-green-50 to-parlem-green-100 px-5 py-8 text-center">
          <span className="text-5xl animate-pop">{step.icon}</span>
          <h2 className="text-xl font-bold leading-tight text-parlem-gray-900">{step.title}</h2>
          <p className="text-sm leading-relaxed text-parlem-gray-700">{step.content}</p>
        </div>
      </div>
      <Button fullWidth size="lg" onClick={onContinue}>
        Continuar
      </Button>
    </div>
  );
}
