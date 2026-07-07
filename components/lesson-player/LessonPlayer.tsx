"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { InteractiveLesson, Lesson } from "@/lib/types";
import { LessonProgressBar } from "@/components/lesson-player/LessonProgressBar";
import { StepPresentation } from "@/components/lesson-player/StepPresentation";
import { StepExplanation } from "@/components/lesson-player/StepExplanation";
import { StepVocabulary } from "@/components/lesson-player/StepVocabulary";
import { StepAudio } from "@/components/lesson-player/StepAudio";
import { StepMultipleChoice } from "@/components/lesson-player/StepMultipleChoice";
import { StepFillBlank } from "@/components/lesson-player/StepFillBlank";
import { StepWordOrder } from "@/components/lesson-player/StepWordOrder";
import { StepConversation } from "@/components/lesson-player/StepConversation";
import { StepObjectives } from "@/components/lesson-player/StepObjectives";
import { StepReview } from "@/components/lesson-player/StepReview";
import { StepCulturalCuriosity } from "@/components/lesson-player/StepCulturalCuriosity";
import { StepMatch } from "@/components/lesson-player/StepMatch";
import { StepWrite } from "@/components/lesson-player/StepWrite";
import { StepCommonError } from "@/components/lesson-player/StepCommonError";
import { StepSummary } from "@/components/lesson-player/StepSummary";
import { useUserProgress } from "@/lib/context/UserProgressContext";

interface LessonPlayerProps {
  lesson: Lesson;
  content: InteractiveLesson;
}

export function LessonPlayer({ lesson, content }: LessonPlayerProps) {
  const router = useRouter();
  const { completeLesson } = useUserProgress();

  const [stepIndex, setStepIndex] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const totalSteps = content.steps.length;
  const currentStep = content.steps[stepIndex];

  function goToNextStep(xpAwarded = 0) {
    setXpEarned((prev) => prev + xpAwarded);
    if (stepIndex + 1 >= totalSteps) {
      setIsFinished(true);
      return;
    }
    setStepIndex((prev) => prev + 1);
  }

  function handleClose() {
    router.push("/learn");
  }

  function handleFinish() {
    completeLesson(lesson.id, xpEarned, lesson.durationMinutes);
    router.push("/learn");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-6">
        {!isFinished && (
          <div className="mb-8">
            <LessonProgressBar
              currentStep={stepIndex + 1}
              totalSteps={totalSteps}
              onClose={handleClose}
            />
          </div>
        )}

        {isFinished ? (
          <StepSummary lessonTitle={lesson.title} xpEarned={xpEarned} onFinish={handleFinish} />
        ) : (
          <React.Fragment key={currentStep.id}>
            {currentStep.kind === "presentation" && (
              <StepPresentation step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "explanation" && (
              <StepExplanation step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "vocabulary" && (
              <StepVocabulary step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "audio" && (
              <StepAudio step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "multiple-choice" && (
              <StepMultipleChoice step={currentStep} onComplete={goToNextStep} />
            )}
            {currentStep.kind === "fill-blank" && (
              <StepFillBlank step={currentStep} onComplete={goToNextStep} />
            )}
            {currentStep.kind === "word-order" && (
              <StepWordOrder step={currentStep} onComplete={goToNextStep} />
            )}
            {currentStep.kind === "conversation" && (
              <StepConversation step={currentStep} onComplete={goToNextStep} />
            )}
            {currentStep.kind === "objectives" && (
              <StepObjectives step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "review" && (
              <StepReview step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "cultural-curiosity" && (
              <StepCulturalCuriosity step={currentStep} onContinue={() => goToNextStep()} />
            )}
            {currentStep.kind === "match" && (
              <StepMatch step={currentStep} onComplete={goToNextStep} />
            )}
            {currentStep.kind === "write" && (
              <StepWrite step={currentStep} onComplete={goToNextStep} />
            )}
            {currentStep.kind === "common-error" && (
              <StepCommonError step={currentStep} onContinue={() => goToNextStep()} />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
