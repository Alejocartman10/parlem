import type { ReactNode } from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface OnboardingStepProps {
  step: number;
  totalSteps: number;
  question: string;
  children: ReactNode;
}

export function OnboardingStep({ step, totalSteps, question, children }: OnboardingStepProps) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <ProgressBar value={step} max={totalSteps} />
      <h2 className="text-2xl font-bold text-parlem-gray-900">{question}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
