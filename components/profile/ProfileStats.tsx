import { Card } from "@/components/ui/Card";

interface ProfileStatsProps {
  xp: number;
  streakCount: number;
  lessonsCompleted: number;
  studiedTime: string;
}

export function ProfileStats({ xp, streakCount, lessonsCompleted, studiedTime }: ProfileStatsProps) {
  const stats = [
    { label: "XP total", value: xp, icon: "⭐" },
    { label: "Ratxa actual", value: streakCount, icon: "🔥" },
    { label: "Lliçons completades", value: lessonsCompleted, icon: "📚" },
    { label: "Temps estudiat", value: studiedTime, icon: "⏱️" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex flex-col items-center gap-1 py-5 text-center">
          <span className="text-2xl">{stat.icon}</span>
          <span className="text-xl font-bold text-parlem-gray-900">{stat.value}</span>
          <span className="text-xs font-medium text-parlem-gray-500">{stat.label}</span>
        </Card>
      ))}
    </div>
  );
}
