"use client";

import { AppScreen } from "@/components/layout/AppScreen";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { Button } from "@/components/ui/Button";
import { useUserProgress } from "@/lib/context/UserProgressContext";
import { countCompletedLessons, formatStudiedTime } from "@/lib/gamification";

export default function ProfilePage() {
  const { profile, isLoaded, resetProgress } = useUserProgress();

  if (!isLoaded) return null;

  return (
    <AppScreen>
      <div className="flex flex-col gap-6">
        <ProfileHeader name={profile.name} level={profile.level} />

        <ProfileStats
          xp={profile.xp}
          streakCount={profile.streakCount}
          lessonsCompleted={countCompletedLessons(profile)}
          studiedTime={formatStudiedTime(profile.studiedMinutes)}
        />

        <Button variant="ghost" fullWidth onClick={resetProgress}>
          Reiniciar progrés
        </Button>
      </div>
    </AppScreen>
  );
}
