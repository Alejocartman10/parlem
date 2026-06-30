"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CatalanLevel, DailyGoalMinutes, LearningGoal } from "@/lib/types";
import { OnboardingStep } from "@/components/onboarding/OnboardingStep";
import { GoalSelector } from "@/components/onboarding/GoalSelector";
import { LevelSelector } from "@/components/onboarding/LevelSelector";
import { TimeSelector } from "@/components/onboarding/TimeSelector";
import { Button } from "@/components/ui/Button";
import { useUserProgress } from "@/lib/context/UserProgressContext";

const TOTAL_STEPS = 3;

export default function OnboardingPage() {
  const router = useRouter();
  const { completeOnboarding } = useUserProgress();

  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<LearningGoal | null>(null);
  const [level, setLevel] = useState<CatalanLevel | null>(null);
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState<DailyGoalMinutes | null>(null);

  const canContinue =
    (step === 1 && goal !== null) ||
    (step === 2 && level !== null) ||
    (step === 3 && dailyGoalMinutes !== null);

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      return;
    }

    if (goal && level && dailyGoalMinutes) {
      completeOnboarding({ goal, level, dailyGoalMinutes });
      router.push("/home");
    }
  }

  function handleBack() {
    if (step === 1) {
      router.push("/");
      return;
    }
    setStep(step - 1);
  }

  return (
    <main className="flex min-h-screen flex-col bg-white px-6 py-10">
      <button
        onClick={handleBack}
        className="mb-6 self-start text-sm font-semibold text-parlem-gray-500"
      >
        ← Enrere
      </button>

      <div className="flex-1">
        {step === 1 && (
          <OnboardingStep
            step={1}
            totalSteps={TOTAL_STEPS}
            question="Per què vols aprendre català?"
          >
            <GoalSelector value={goal} onChange={setGoal} />
          </OnboardingStep>
        )}

        {step === 2 && (
          <OnboardingStep step={2} totalSteps={TOTAL_STEPS} question="Quin és el teu nivell?">
            <LevelSelector value={level} onChange={setLevel} />
          </OnboardingStep>
        )}

        {step === 3 && (
          <OnboardingStep
            step={3}
            totalSteps={TOTAL_STEPS}
            question="Quant temps vols dedicar-hi cada dia?"
          >
            <TimeSelector value={dailyGoalMinutes} onChange={setDailyGoalMinutes} />
          </OnboardingStep>
        )}
      </div>

      <Button fullWidth size="lg" disabled={!canContinue} onClick={handleNext}>
        {step < TOTAL_STEPS ? "Continuar" : "Començar a aprendre"}
      </Button>
    </main>
  );
}
