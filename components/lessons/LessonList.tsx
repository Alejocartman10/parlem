"use client";

import type { Lesson, LessonProgress } from "@/lib/types";
import { LessonCard } from "@/components/lessons/LessonCard";

interface LessonListProps {
  lessons: Lesson[];
  lessonsProgress: LessonProgress[];
  currentLessonId: string | null;
}

export function LessonList({ lessons, lessonsProgress, currentLessonId }: LessonListProps) {
  return (
    <div className="flex flex-col gap-3">
      {lessons.map((lesson) => {
        const isCompleted = lessonsProgress.some(
          (entry) => entry.lessonId === lesson.id && entry.completed
        );
        return (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            isCompleted={isCompleted}
            isCurrent={lesson.id === currentLessonId}
          />
        );
      })}
    </div>
  );
}
