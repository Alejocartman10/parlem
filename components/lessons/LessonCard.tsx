import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  isCurrent: boolean;
}

export function LessonCard({ lesson, isCompleted, isCurrent }: LessonCardProps) {
  return (
    <Link href={`/learn/${lesson.id}`}>
      <Card
        className={`flex items-center gap-4 transition-transform duration-200 hover:-translate-y-0.5 ${
          isCurrent ? "ring-2 ring-parlem-green-300" : ""
        }`}
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl2 text-lg font-bold ${
            isCompleted
              ? "bg-parlem-green-500 text-white"
              : "bg-parlem-gray-100 text-parlem-gray-500"
          }`}
        >
          {isCompleted ? "✓" : lesson.order}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-parlem-gray-900">{lesson.title}</h3>
            <Badge tone="gray">{lesson.level}</Badge>
          </div>
          <p className="mt-0.5 text-xs text-parlem-gray-500 line-clamp-2">{lesson.description}</p>
        </div>
        <div className="shrink-0 text-right text-xs font-semibold text-parlem-gray-400">
          <div>⭐ {lesson.xp}</div>
          <div>{lesson.durationMinutes} min</div>
        </div>
      </Card>
    </Link>
  );
}
