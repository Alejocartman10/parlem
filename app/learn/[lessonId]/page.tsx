import { notFound } from "next/navigation";
import { AppScreen } from "@/components/layout/AppScreen";
import { LessonDetail } from "@/components/lessons/LessonDetail";
import { LessonPlayer } from "@/components/lesson-player/LessonPlayer";
import { getLessonById, lessons } from "@/lib/data/lessons";
import type { InteractiveLesson } from "@/lib/types";
import { LESSON_1_ID, lesson1Content } from "@/lib/data/lesson1-content";
import { LESSON_2_ID, lesson2Content } from "@/lib/data/lesson2-content";
import { LESSON_3_ID, lesson3Content } from "@/lib/data/lesson3-content";
import { LESSON_4_ID, lesson4Content } from "@/lib/data/lesson4-content";
import { LESSON_5_ID, lesson5Content } from "@/lib/data/lesson5-content";
import { LESSON_6_ID, lesson6Content } from "@/lib/data/lesson6-content";
import { LESSON_7_ID, lesson7Content } from "@/lib/data/lesson7-content";
import { LESSON_8_ID, lesson8Content } from "@/lib/data/lesson8-content";
import { LESSON_9_ID, lesson9Content } from "@/lib/data/lesson9-content";
import { LESSON_10_ID, lesson10Content } from "@/lib/data/lesson10-content";

const interactiveLessonContent: Record<string, InteractiveLesson> = {
  [LESSON_1_ID]: lesson1Content,
  [LESSON_2_ID]: lesson2Content,
  [LESSON_3_ID]: lesson3Content,
  [LESSON_4_ID]: lesson4Content,
  [LESSON_5_ID]: lesson5Content,
  [LESSON_6_ID]: lesson6Content,
  [LESSON_7_ID]: lesson7Content,
  [LESSON_8_ID]: lesson8Content,
  [LESSON_9_ID]: lesson9Content,
  [LESSON_10_ID]: lesson10Content,
};

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

  const content = interactiveLessonContent[lesson.id];

  if (content) {
    return <LessonPlayer lesson={lesson} content={content} />;
  }

  return (
    <AppScreen>
      <LessonDetail lesson={lesson} />
    </AppScreen>
  );
}