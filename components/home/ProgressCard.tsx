interface ProgressCardProps {
  levelNumber: number;
  currentLevelXp: number;
  xpForNextLevel: number;
  totalXp: number;
  streakCount: number;
}

export function ProgressCard({
  levelNumber,
  currentLevelXp,
  xpForNextLevel,
  totalXp,
  streakCount,
}: ProgressCardProps) {
  const safeMax = xpForNextLevel <= 0 ? 1 : xpForNextLevel;
  const percentage = Math.min(100, Math.max(0, (currentLevelXp / safeMax) * 100));

  return (
    <div className="rounded-xl3 bg-gradient-to-br from-parlem-green-500 to-parlem-green-700 p-5 text-white shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Nivell {levelNumber}
          </span>
          <span className="text-3xl font-bold">{totalXp} XP</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 rounded-2xl bg-white/15 px-4 py-2">
          <span className="text-xl">🔥</span>
          <span className="text-lg font-bold leading-none">{streakCount}</span>
          <span className="text-[10px] font-medium text-white/70">
            {streakCount === 1 ? "dia" : "dies"}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <div
          className="h-3 w-full overflow-hidden rounded-full bg-white/20"
          role="progressbar"
          aria-valuenow={currentLevelXp}
          aria-valuemin={0}
          aria-valuemax={safeMax}
        >
          <div
            className="h-full rounded-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs font-medium text-white/70">
          {currentLevelXp} / {xpForNextLevel} XP per al nivell {levelNumber + 1}
        </span>
      </div>
    </div>
  );
}
