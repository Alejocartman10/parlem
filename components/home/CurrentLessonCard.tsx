import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface CurrentLessonCardProps {
  lesson: Lesson;
}

export function CurrentLessonCard({ lesson }: CurrentLessonCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-parlem-green-600">
          Lliçó recomanada
        </span>
        <Badge tone="gray">{lesson.level}</Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-parlem-green-50 to-parlem-green-100 text-2xl font-bold text-parlem-green-600">
          {lesson.order}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold leading-tight text-parlem-gray-900">{lesson.title}</h3>
          <p className="mt-0.5 text-sm text-parlem-gray-500 line-clamp-2">{lesson.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold text-parlem-gray-500">
        <span className="flex items-center gap-1">⏱️ {lesson.durationMinutes} min</span>
        <span className="flex items-center gap-1">⭐ {lesson.xp} XP</span>
      </div>

      <Link href={`/learn/${lesson.id}`}>
        <Button fullWidth size="lg">
          Continuar aprenent
        </Button>
      </Link>
    </Card>
  );
}
