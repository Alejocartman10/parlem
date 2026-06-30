import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface DailyGoalCardProps {
  dailyGoalMinutes: number;
  studiedTodayMinutes: number;
}

export function DailyGoalCard({ dailyGoalMinutes, studiedTodayMinutes }: DailyGoalCardProps) {
  const reached = studiedTodayMinutes >= dailyGoalMinutes;

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-bold text-parlem-gray-900">
          <span className="text-base">🎯</span> Objectiu diari
        </span>
        <span className="text-sm font-semibold text-parlem-gray-400">
          {Math.min(studiedTodayMinutes, dailyGoalMinutes)} / {dailyGoalMinutes} min
        </span>
      </div>
      <ProgressBar value={studiedTodayMinutes} max={dailyGoalMinutes} />
      {reached ? (
        <p className="text-xs font-semibold text-parlem-green-600">
          Objectiu d&apos;avui complert! 🎉
        </p>
      ) : (
        <p className="text-xs font-medium text-parlem-gray-400">
          Et queden {Math.max(dailyGoalMinutes - studiedTodayMinutes, 0)} min per avui.
        </p>
      )}
    </Card>
  );
}
