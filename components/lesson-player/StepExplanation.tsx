import type { ExplanationStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepExplanationProps {
  step: ExplanationStep;
  onContinue: () => void;
}

export function StepExplanation({ step, onContinue }: StepExplanationProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Explicació
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.title}
        </h2>
        <Card className="flex flex-col gap-3">
          {step.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-parlem-green-50 text-xs font-bold text-parlem-green-600">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-parlem-gray-700">{bullet}</p>
            </div>
          ))}
        </Card>
      </div>
      <Button fullWidth size="lg" onClick={onContinue}>
        Entesos
      </Button>
    </div>
  );
}
