"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppScreen } from "@/components/layout/AppScreen";
import { WelcomeHeader } from "@/components/home/WelcomeHeader";
import { ProgressCard } from "@/components/home/ProgressCard";
import { CurrentLessonCard } from "@/components/home/CurrentLessonCard";
import { DailyGoalCard } from "@/components/home/DailyGoalCard";
import { useUserProgress } from "@/lib/context/UserProgressContext";
import { lessons, getLessonById } from "@/lib/data/lessons";
import { xpToNextLevel } from "@/lib/gamification";

export default function HomePage() {
  const router = useRouter();
  const { profile, isLoaded } = useUserProgress();

  useEffect(() => {
    if (isLoaded && !profile.onboardingCompleted) {
      router.replace("/onboarding");
    }
  }, [isLoaded, profile.onboardingCompleted, router]);

  if (!isLoaded || !profile.onboardingCompleted) {
    return null;
  }

  const currentLesson = profile.currentLessonId
    ? getLessonById(profile.currentLessonId) ?? lessons[0]
    : lessons[0];

  const { currentLevelXp, xpForNextLevel, levelNumber } = xpToNextLevel(profile.xp);

  const studiedToday = profile.lastActivityDate
    ? new Date(profile.lastActivityDate).toDateString() === new Date().toDateString()
      ? profile.studiedMinutes
      : 0
    : 0;

  return (
    <AppScreen>
      <div className="flex flex-col gap-6 animate-fade-in">
        <WelcomeHeader name={profile.name} />

        <ProgressCard
          levelNumber={levelNumber}
          currentLevelXp={currentLevelXp}
          xpForNextLevel={xpForNextLevel}
          totalXp={profile.xp}
          streakCount={profile.streakCount}
        />

        {currentLesson && <CurrentLessonCard lesson={currentLesson} />}

        <DailyGoalCard
          dailyGoalMinutes={profile.dailyGoalMinutes ?? 10}
          studiedTodayMinutes={studiedToday}
        />
      </div>
    </AppScreen>
  );
}
