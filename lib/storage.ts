import type { UserProfile } from "@/lib/types";

export const STORAGE_KEY = "parlem:user-profile:v1";

export const defaultUserProfile: UserProfile = {
  name: "Estudiant",
  onboardingCompleted: false,
  goal: null,
  level: null,
  dailyGoalMinutes: null,
  xp: 0,
  streakCount: 0,
  lastActivityDate: null,
  studiedMinutes: 0,
  lessonsProgress: [],
  currentLessonId: null,
};
