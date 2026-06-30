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
import { STORAGE_KEY, defaultUserProfile } from "@/lib/storage";
import { lessons } from "@/lib/data/lessons";
import { registerLessonCompletion } from "@/lib/gamification";

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
  const [profile, setProfile] = useState<UserProfile>(defaultUserProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as UserProfile;
        setProfile({ ...defaultUserProfile, ...parsed });
      }
    } catch {
      setProfile(defaultUserProfile);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile, isLoaded]);

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
