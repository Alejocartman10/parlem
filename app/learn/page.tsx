"use client";

import { AppScreen } from "@/components/layout/AppScreen";
import { LessonList } from "@/components/lessons/LessonList";
import { lessons } from "@/lib/data/lessons";
import { useUserProgress } from "@/lib/context/UserProgressContext";

export default function LearnPage() {
  const { profile, isLoaded } = useUserProgress();

  if (!isLoaded) {
    return null;
  }

  return (
    <AppScreen>
      <LessonList
        lessons={lessons}
        lessonsProgress={profile.lessonsProgress}
        currentLessonId={profile.currentLessonId}
      />
    </AppScreen>
  );
}