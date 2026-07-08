export type LearningGoal = "vivir" | "trabajar" | "universidad" | "turismo";

export type CatalanLevel = "A1" | "A2" | "B1";

export type DailyGoalMinutes = 5 | 10 | 15 | 20;

export interface OnboardingData {
  goal: LearningGoal;
  level: CatalanLevel;
  dailyGoalMinutes: DailyGoalMinutes;
}

export interface Lesson {
  id: string;
  order: number;
  title: string;
  description: string;
  objective: string;
  level: CatalanLevel;
  xp: number;
  durationMinutes: number;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt: string | null;
}

export interface UserProfile {
  name: string;
  onboardingCompleted: boolean;
  goal: LearningGoal | null;
  level: CatalanLevel | null;
  dailyGoalMinutes: DailyGoalMinutes | null;
  xp: number;
  streakCount: number;
  lastActivityDate: string | null;
  studiedMinutes: number;
  lessonsProgress: LessonProgress[];
  currentLessonId: string | null;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export interface VocabularyItem {
  id: string;
  icon: string;
  catalan: string;
  spanish: string;
}

export interface PresentationStep {
  kind: "presentation";
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ExplanationStep {
  kind: "explanation";
  id: string;
  title: string;
  bullets: string[];
}

export interface VocabularyStep {
  kind: "vocabulary";
  id: string;
  title: string;
  items: VocabularyItem[];
}

export interface AudioStep {
  kind: "audio";
  id: string;
  title: string;
  phrase: string;
  translation: string;
}

export interface MultipleChoiceOption {
  id: string;
  label: string;
}

export interface MultipleChoiceStep {
  kind: "multiple-choice";
  id: string;
  question: string;
  options: MultipleChoiceOption[];
  correctOptionId: string;
  xp: number;
}

export interface FillBlankStep {
  kind: "fill-blank";
  id: string;
  promptBefore: string;
  promptAfter: string;
  correctAnswer: string;
  wordBank: string[];
  translation: string;
  xp: number;
}

export interface WordOrderStep {
  kind: "word-order";
  id: string;
  words: string[];
  correctOrder: string[];
  translation: string;
  xp: number;
}

export interface ConversationLine {
  id: string;
  speaker: "laia" | "user";
  text: string;
}

export interface ConversationChoiceOption {
  id: string;
  label: string;
  correct: boolean;
}

export interface ConversationStep {
  kind: "conversation";
  id: string;
  title: string;
  lines: ConversationLine[];
  question: string;
  options: ConversationChoiceOption[];
  xp: number;
}

export interface ObjectivesStep {
  kind: "objectives";
  id: string;
  title: string;
  items: string[];
}

export interface ReviewStep {
  kind: "review";
  id: string;
  title: string;
  items: string[];
}

export interface CulturalCuriosityStep {
  kind: "cultural-curiosity";
  id: string;
  icon: string;
  title: string;
  content: string;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchStep {
  kind: "match";
  id: string;
  instruction: string;
  pairs: MatchPair[];
  xp: number;
}

export interface WriteStep {
  kind: "write";
  id: string;
  instruction: string;
  prompt: string;
  correctAnswer: string;
  acceptedAnswers: string[];
  translation: string;
  xp: number;
}

export interface CommonErrorStep {
  kind: "common-error";
  id: string;
  icon: string;
  title: string;
  wrong: string;
  correct: string;
  explanation: string;
}

export type LessonStep =
  | PresentationStep
  | ObjectivesStep
  | ExplanationStep
  | VocabularyStep
  | AudioStep
  | MultipleChoiceStep
  | FillBlankStep
  | WordOrderStep
  | MatchStep
  | WriteStep
  | ConversationStep
  | CommonErrorStep
  | ReviewStep
  | CulturalCuriosityStep;

export interface InteractiveLesson {
  lessonId: string;
  steps: LessonStep[];
}
 