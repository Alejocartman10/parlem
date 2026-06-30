interface LessonProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onClose: () => void;
}

export function LessonProgressBar({ currentStep, totalSteps, onClose }: LessonProgressBarProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onClose}
        aria-label="Sortir de la lliçó"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-parlem-gray-50 text-parlem-gray-500 transition-colors duration-200 hover:bg-parlem-gray-100 active:scale-95"
      >
        ✕
      </button>
      <div className="flex flex-1 items-center gap-1.5">
        {Array.from({ length: totalSteps }, (_, index) => {
          const isActive = index < currentStep;
          return (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? "bg-gradient-to-r from-parlem-green-400 to-parlem-green-500"
                  : "bg-parlem-gray-100"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
