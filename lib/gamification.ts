import type { UserProfile } from "@/lib/types";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function xpToNextLevel(xp: number): { currentLevelXp: number; xpForNextLevel: number; levelNumber: number } {
  const levelSize = 100;
  const levelNumber = Math.floor(xp / levelSize) + 1;
  const currentLevelXp = xp % levelSize;
  return { currentLevelXp, xpForNextLevel: levelSize, levelNumber };
}

function startOfDay(date: Date): Date {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function daysBetween(a: Date, b: Date): number {
  const diff = startOfDay(b).getTime() - startOfDay(a).getTime();
  return Math.round(diff / MS_PER_DAY);
}

export function calculateStreakOnActivity(profile: UserProfile, now: Date = new Date()): number {
  if (!profile.lastActivityDate) {
    return 1;
  }

  const last = new Date(profile.lastActivityDate);
  const diff = daysBetween(last, now);

  if (diff === 0) {
    return profile.streakCount;
  }

  if (diff === 1) {
    return profile.streakCount + 1;
  }

  return 1;
}

export function isStreakAtRisk(profile: UserProfile, now: Date = new Date()): boolean {
  if (!profile.lastActivityDate) return false;
  const diff = daysBetween(new Date(profile.lastActivityDate), now);
  return diff >= 1;
}

export function registerLessonCompletion(
  profile: UserProfile,
  lessonId: string,
  xpGained: number,
  minutesSpent: number,
  now: Date = new Date()
): UserProfile {
  const alreadyCompleted = profile.lessonsProgress.some(
    (entry) => entry.lessonId === lessonId && entry.completed
  );

  const newStreak = calculateStreakOnActivity(profile, now);

  const updatedProgress = alreadyCompleted
    ? profile.lessonsProgress
    : [
        ...profile.lessonsProgress.filter((entry) => entry.lessonId !== lessonId),
        { lessonId, completed: true, completedAt: now.toISOString() },
      ];

  return {
    ...profile,
    xp: alreadyCompleted ? profile.xp : profile.xp + xpGained,
    streakCount: newStreak,
    lastActivityDate: now.toISOString(),
    studiedMinutes: profile.studiedMinutes + minutesSpent,
    lessonsProgress: updatedProgress,
  };
}

export function countCompletedLessons(profile: UserProfile): number {
  return profile.lessonsProgress.filter((entry) => entry.completed).length;
}

export function formatStudiedTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}
