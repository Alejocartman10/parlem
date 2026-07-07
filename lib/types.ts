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