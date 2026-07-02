"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  CatalanLevel,
  DailyGoalMinutes,
  LearningGoal,
  UserProfile,
} from "@/lib/types";
import { defaultUserProfile } from "@/lib/storage";
import { lessons } from "@/lib/data/lessons";
import { registerLessonCompletion } from "@/lib/gamification";
import { progressService } from "@/lib/progress/progress-service-instance";
import { useAuth } from "@/lib/auth/AuthContext";

interface UserProgressContextValue {
  profile: UserProfile;
  isLoaded: boolean;
  completeOnboarding: (data: {
    goal: LearningGoal;
    level: CatalanLevel;
    dailyGoalMinutes: DailyGoalMinutes;
  }) => void;
  completeLesson: (lessonId: string, xpGained: number, minutesSpent: number) => void;
  setCurrentLesson: (lessonId: string) => void;
  resetProgress: () => void;
}

const UserProgressContext = createContext<UserProgressContextValue | null>(null);

export function UserProgressProvider({ children }: { children: ReactNode }) {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile>(defaultUserProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isAuthLoading) return;

    let isCancelled = false;
    setIsLoaded(false);

    progressService.loadProfile(user?.id ?? null).then((loadedProfile) => {
      if (isCancelled) return;
      setProfile(loadedProfile);
      setIsLoaded(true);
    });

    return () => {
      isCancelled = true;
    };
  }, [isAuthLoading, user?.id]);

  useEffect(() => {
    if (!isLoaded) return;
    void progressService.persistProfile(profile, user?.id ?? null);
  }, [profile, isLoaded, user?.id]);

  const completeOnboarding = useCallback(
    (data: { goal: LearningGoal; level: CatalanLevel; dailyGoalMinutes: DailyGoalMinutes }) => {
      setProfile((prev) => ({
        ...prev,
        onboardingCompleted: true,
        goal: data.goal,
        level: data.level,
        dailyGoalMinutes: data.dailyGoalMinutes,
        currentLessonId: prev.currentLessonId ?? lessons[0]?.id ?? null,
      }));
    },
    []
  );

  const completeLesson = useCallback(
    (lessonId: string, xpGained: number, minutesSpent: number) => {
      setProfile((prev) => {
        const updated = registerLessonCompletion(prev, lessonId, xpGained, minutesSpent);
        const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
        const nextLesson = lessons[currentIndex + 1];
        return {
          ...updated,
          currentLessonId: nextLesson ? nextLesson.id : updated.currentLessonId,
        };
      });
    },
    []
  );

  const setCurrentLesson = useCallback((lessonId: string) => {
    setProfile((prev) => ({ ...prev, currentLessonId: lessonId }));
  }, []);

  const resetProgress = useCallback(() => {
    progressService.clearLocalProfile();
    setProfile(defaultUserProfile);
  }, []);

  const value = useMemo(
    () => ({
      profile,
      isLoaded,
      completeOnboarding,
      completeLesson,
      setCurrentLesson,
      resetProgress,
    }),
    [profile, isLoaded, completeOnboarding, completeLesson, setCurrentLesson, resetProgress]
  );

  return <UserProgressContext.Provider value={value}>{children}</UserProgressContext.Provider>;
}

export function useUserProgress(): UserProgressContextValue {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error("useUserProgress debe usarse dentro de UserProgressProvider");
  }
  return context;
}
