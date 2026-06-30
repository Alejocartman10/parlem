import { Card } from "@/components/ui/Card";

interface XpCardProps {
  xp: number;
  levelNumber: number;
}

export function XpCard({ xp, levelNumber }: XpCardProps) {
  return (
    <Card className="flex flex-1 flex-col items-center gap-1 py-4">
      <span className="text-2xl">⭐</span>
      <span className="text-2xl font-bold text-parlem-gray-900">{xp}</span>
      <span className="text-xs font-medium text-parlem-gray-500">XP · Nivell {levelNumber}</span>
    </Card>
  );
}
