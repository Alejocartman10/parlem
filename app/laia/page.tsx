"use client";

import { AppScreen } from "@/components/layout/AppScreen";
import { ChatWindow } from "@/components/laia/ChatWindow";
import { useUserProgress } from "@/lib/context/UserProgressContext";

export default function LaiaPage() {
  const { profile, isLoaded } = useUserProgress();

  if (!isLoaded) return null;

  return (
    <AppScreen>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-parlem-gray-900">Laia</h1>
          <p className="text-sm text-parlem-gray-500">La teva professora particular de català.</p>
        </div>
        <ChatWindow level={profile.level} />
      </div>
    </AppScreen>
  );
}
