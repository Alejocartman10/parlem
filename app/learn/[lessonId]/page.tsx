import { notFound } from "next/navigation";
import { AppScreen } from "@/components/layout/AppScreen";
import { LessonDetail } from "@/components/lessons/LessonDetail";
import { LessonPlayer } from "@/components/lesson-player/LessonPlayer";
import { getLessonById, lessons } from "@/lib/data/lessons";
import { LESSON_1_ID, lesson1Content } from "@/lib/data/lesson1-content";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ lessonId: lesson.id }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    notFound();
  }

  if (lesson.id === LESSON_1_ID) {
    return <LessonPlayer lesson={lesson} content={lesson1Content} />;
  }

  return (
    <AppScreen>
      <LessonDetail lesson={lesson} />
    </AppScreen>
  );
}
