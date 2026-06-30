"use client";

import { useRouter } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { useUserProgress } from "@/lib/context/UserProgressContext";

export default function WelcomePage() {
  const router = useRouter();
  const { profile, isLoaded } = useUserProgress();

  function handleStart() {
    router.push("/onboarding");
  }

  function handleContinue() {
    router.push("/home");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-12">
      <div />

      <div className="flex flex-col items-center gap-6 text-center animate-fade-in">
        <Logo size={64} withText={false} />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-parlem-gray-900">Parlem!</h1>
          <p className="max-w-xs text-base text-parlem-gray-600">
            Aprèn català per viure i treballar a Catalunya.
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-3">
        {isLoaded && profile.onboardingCompleted && (
          <Button fullWidth size="lg" variant="secondary" onClick={handleContinue}>
            Continuar
          </Button>
        )}
        <Button fullWidth size="lg" onClick={handleStart}>
          Comenzar
        </Button>
      </div>
    </main>
  );
}
