import type { ReviewStep } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepReviewProps {
  step: ReviewStep;
  onContinue: () => void;
}

export function StepReview({ step, onContinue }: StepReviewProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Repàs
        </span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-parlem-gray-900">
          {step.title}
        </h2>
        <Card className="flex flex-col gap-3">
          {step.items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-parlem-green-500 text-xs font-bold text-white">
                ✓
              </span>
              <p className="text-sm leading-relaxed text-parlem-gray-700">{item}</p>
            </div>
          ))}
        </Card>
      </div>
      <Button fullWidth size="lg" onClick={onContinue}>
        Continuar
      </Button>
    </div>
  );
}
