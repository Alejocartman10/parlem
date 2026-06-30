import { Card } from "@/components/ui/Card";

interface StreakCardProps {
  streakCount: number;
}

export function StreakCard({ streakCount }: StreakCardProps) {
  return (
    <Card className="flex flex-1 flex-col items-center gap-1 py-4">
      <span className="text-2xl">🔥</span>
      <span className="text-2xl font-bold text-parlem-gray-900">{streakCount}</span>
      <span className="text-xs font-medium text-parlem-gray-500">
        {streakCount === 1 ? "día de racha" : "días de racha"}
      </span>
    </Card>
  );
}
