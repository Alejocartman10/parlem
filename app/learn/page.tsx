"use client";

import { AppScreen } from "@/components/layout/AppScreen";
import { LessonList } from "@/components/lessons/LessonList";
import { useUserProgress } from "@/lib/context/UserProgressContext";
import { lessons } from "@/lib/data/lessons";

export default function LearnPage() {
  const { profile, isLoaded } = useUserProgress();

  if (!isLoaded) return null;

  return (
    <AppScreen>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold text-parlem-gray-900">Aprendre</h1>
          <p className="text-sm text-parlem-gray-500">Les teves lliçons de català.</p>
        </div>

        <LessonList
          lessons={lessons}
          lessonsProgress={profile.lessonsProgress}
          currentLessonId={profile.currentLessonId}
        />
      </div>
    </AppScreen>
  );
}
