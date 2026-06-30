"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Lesson } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useUserProgress } from "@/lib/context/UserProgressContext";

interface LessonDetailProps {
  lesson: Lesson;
}

export function LessonDetail({ lesson }: LessonDetailProps) {
  const router = useRouter();
  const { profile, completeLesson } = useUserProgress();
  const [justCompleted, setJustCompleted] = useState(false);

  const isCompleted = profile.lessonsProgress.some(
    (entry) => entry.lessonId === lesson.id && entry.completed
  );

  function handleComplete() {
    completeLesson(lesson.id, lesson.xp, lesson.durationMinutes);
    setJustCompleted(true);
  }

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <button
        onClick={() => router.push("/learn")}
        className="self-start text-sm font-semibold text-parlem-gray-500"
      >
        ← Tornar
      </button>

      <Card className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Badge tone="green">Lliçó {lesson.order}</Badge>
          <Badge tone="gray">{lesson.level}</Badge>
        </div>
        <h1 className="text-2xl font-bold text-parlem-gray-900">{lesson.title}</h1>
        <p className="text-sm text-parlem-gray-600">{lesson.description}</p>

        <div className="rounded-xl2 bg-parlem-green-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-parlem-green-700">
            Objectiu
          </p>
          <p className="mt-1 text-sm text-parlem-green-800">{lesson.objective}</p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-parlem-gray-500">
          <span>⏱️ {lesson.durationMinutes} min</span>
          <span>⭐ {lesson.xp} XP</span>
        </div>

        {isCompleted || justCompleted ? (
          <div className="rounded-xl2 bg-parlem-green-500 px-4 py-3 text-center text-sm font-bold text-white animate-pop">
            Lliçó completada ✓
          </div>
        ) : (
          <Button fullWidth size="lg" onClick={handleComplete}>
            Marcar com a completada
          </Button>
        )}
      </Card>
    </div>
  );
}
