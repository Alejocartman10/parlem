import type { ProgressRepository } from "@/lib/progress/ProgressRepository";
import type { StorageService } from "@/lib/storage/StorageService";
import type { LessonProgress, UserProfile } from "@/lib/types";
import { STORAGE_KEY, defaultUserProfile } from "@/lib/storage";

const PROFILES_TABLE = "user_profiles";
const STATISTICS_TABLE = "user_statistics";
const LESSON_PROGRESS_TABLE = "user_lesson_progress";

type LessonStatus = "locked" | "available" | "in_progress" | "completed";

interface UserProfileRow {
  user_id: string;
  name: string;
  onboarding_completed: boolean;
  goal: string | null;
  level: string | null;
  daily_goal_minutes: number | null;
}

interface UserStatisticsRow {
  user_id: string;
  xp: number;
  streak_count: number;
  longest_streak: number;
  last_activity_date: string | null;
  studied_minutes: number;
  completed_lessons: number;
  completed_units: number;
  current_lesson_id: string | null;
}

interface UserLessonProgressRow {
  lesson_id: string;
  status: LessonStatus;
  completed_at: string | null;
}

function lessonRowsToProgress(rows: UserLessonProgressRow[]): LessonProgress[] {
  return rows
    .filter((row) => row.status === "completed")
    .map((row) => ({
      lessonId: row.lesson_id,
      completed: true,
      completedAt: row.completed_at,
    }));
}

function buildProfile(
  profileRow: UserProfileRow,
  statsRow: UserStatisticsRow | null,
  lessonsProgress: LessonProgress[]
): UserProfile {
  return {
    name: profileRow.name,
    onboardingCompleted: profileRow.onboarding_completed,
    goal: profileRow.goal as UserProfile["goal"],
    level: profileRow.level as UserProfile["level"],
    dailyGoalMinutes: profileRow.daily_goal_minutes as UserProfile["dailyGoalMinutes"],
    xp: statsRow?.xp ?? 0,
    streakCount: statsRow?.streak_count ?? 0,
    lastActivityDate: statsRow?.last_activity_date ?? null,
    studiedMinutes: statsRow?.studied_minutes ?? 0,
    lessonsProgress,
    currentLessonId: statsRow?.current_lesson_id ?? null,
  };
}

/**
 * Repositorio de progreso sobre el esquema de 3 tablas:
 * - user_profiles: identidad y preferencias.
 * - user_lesson_progress: una fila por lección y usuario.
 * - user_statistics: XP, rachas y métricas agregadas.
 *
 * El contrato ProgressRepository no cambia: sigue exponiendo un único
 * UserProfile, por lo que ProgressService y UserProgressContext no necesitan
 * saber que ahora hay tres tablas detrás.
 */
export class SupabaseProgressRepository implements ProgressRepository {
  constructor(private readonly storageService: StorageService) {}

  getLocalProfile(): UserProfile | null {
    const stored = this.storageService.getItem<UserProfile>(STORAGE_KEY);
    if (!stored) return null;
    return { ...defaultUserProfile, ...stored };
  }

  saveLocalProfile(profile: UserProfile): void {
    this.storageService.setItem(STORAGE_KEY, profile);
  }

  clearLocalProfile(): void {
    this.storageService.removeItem(STORAGE_KEY);
  }

  async getRemoteProfile(userId: string): Promise<UserProfile | null> {
    try {
      const supabase = this.storageService.getSupabaseClient();

      const [profileResult, statsResult, lessonRowsResult] = await Promise.all([
        supabase.from(PROFILES_TABLE).select("*").eq("user_id", userId).maybeSingle(),
        supabase.from(STATISTICS_TABLE).select("*").eq("user_id", userId).maybeSingle(),
        supabase
          .from(LESSON_PROGRESS_TABLE)
          .select("lesson_id, status, completed_at")
          .eq("user_id", userId),
      ]);

      if (profileResult.error || !profileResult.data) return null;

      const profileRow = profileResult.data as UserProfileRow;
      const statsRow = (statsResult.data as UserStatisticsRow | null) ?? null;
      const lessonRows = (lessonRowsResult.data as UserLessonProgressRow[] | null) ?? [];

      return buildProfile(profileRow, statsRow, lessonRowsToProgress(lessonRows));
    } catch {
      return null;
    }
  }

  async saveRemoteProfile(userId: string, profile: UserProfile): Promise<UserProfile | null> {
    try {
      const supabase = this.storageService.getSupabaseClient();

      const { data: existingStats } = await supabase
        .from(STATISTICS_TABLE)
        .select("longest_streak")
        .eq("user_id", userId)
        .maybeSingle();

      const longestStreak = Math.max(
        (existingStats as { longest_streak: number } | null)?.longest_streak ?? 0,
        profile.streakCount
      );

      const completedLessons = profile.lessonsProgress.filter((entry) => entry.completed).length;

      const profileRow: UserProfileRow = {
        user_id: userId,
        name: profile.name,
        onboarding_completed: profile.onboardingCompleted,
        goal: profile.goal,
        level: profile.level,
        daily_goal_minutes: profile.dailyGoalMinutes,
      };

      const statisticsRow: UserStatisticsRow = {
        user_id: userId,
        xp: profile.xp,
        streak_count: profile.streakCount,
        longest_streak: longestStreak,
        last_activity_date: profile.lastActivityDate,
        studied_minutes: profile.studiedMinutes,
        completed_lessons: completedLessons,
        // Las unidades temáticas todavía no existen como entidad de dominio
        // (pendientes del Mapa del Curso del PRD); se deja a 0 hasta que
        // exista un concepto de Unidad real que agrupe lecciones.
        completed_units: 0,
        current_lesson_id: profile.currentLessonId,
      };

      const lessonRows: Array<{
        user_id: string;
        lesson_id: string;
        status: "completed";
        completed_at: string | null;
      }> = profile.lessonsProgress
        .filter((entry) => entry.completed)
        .map((entry) => ({
          user_id: userId,
          lesson_id: entry.lessonId,
          status: "completed",
          completed_at: entry.completedAt,
        }));

      const [profileUpsert, statsUpsert] = await Promise.all([
        supabase
          .from(PROFILES_TABLE)
          .upsert(profileRow, { onConflict: "user_id" })
          .select("*")
          .maybeSingle(),
        supabase
          .from(STATISTICS_TABLE)
          .upsert(statisticsRow, { onConflict: "user_id" })
          .select("*")
          .maybeSingle(),
      ]);

      if (lessonRows.length > 0) {
        await supabase
          .from(LESSON_PROGRESS_TABLE)
          .upsert(lessonRows, { onConflict: "user_id,lesson_id" });
      }

      if (profileUpsert.error || !profileUpsert.data) return null;

      const savedProfileRow = profileUpsert.data as UserProfileRow;
      const savedStatsRow = (statsUpsert.data as UserStatisticsRow | null) ?? null;

      return buildProfile(savedProfileRow, savedStatsRow, profile.lessonsProgress);
    } catch {
      return null;
    }
  }
}
