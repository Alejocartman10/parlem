import { Button } from "@/components/ui/Button";

interface StepSummaryProps {
  lessonTitle: string;
  xpEarned: number;
  onFinish: () => void;
}

export function StepSummary({ lessonTitle, xpEarned, onFinish }: StepSummaryProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-8 py-6 text-center animate-fade-in">
      <div className="flex flex-1 flex-col items-center justify-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-parlem-green-400 to-parlem-green-600 text-5xl shadow-card animate-pop">
          🎉
        </div>
        <div>
          <h2 className="text-2xl font-bold text-parlem-gray-900">Lliçó completada!</h2>
          <p className="mt-1 text-sm text-parlem-gray-500">{lessonTitle}</p>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-parlem-green-50 px-6 py-3">
          <span className="text-xl">⭐</span>
          <span className="text-2xl font-bold text-parlem-green-700">+{xpEarned} XP</span>
        </div>
      </div>

      <Button fullWidth size="lg" onClick={onFinish}>
        Continuar
      </Button>
    </div>
  );
}
