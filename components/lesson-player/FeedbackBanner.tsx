interface FeedbackBannerProps {
  isCorrect: boolean;
  correctText?: string;
  incorrectText?: string;
}

export function FeedbackBanner({
  isCorrect,
  correctText = "Molt bé! Resposta correcta.",
  incorrectText = "Gairebé! Torna-ho a provar.",
}: FeedbackBannerProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold animate-fade-in ${
        isCorrect ? "bg-parlem-green-50 text-parlem-green-700" : "bg-red-50 text-red-700"
      }`}
    >
      <span className="text-base">{isCorrect ? "✅" : "🔄"}</span>
      {isCorrect ? correctText : incorrectText}
    </div>
  );
}
