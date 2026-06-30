type AnswerState = "idle" | "selected" | "correct" | "incorrect";

interface AnswerOptionProps {
  label: string;
  state: AnswerState;
  disabled?: boolean;
  onClick: () => void;
}

export function AnswerOption({ label, state, disabled = false, onClick }: AnswerOptionProps) {
  const stateClasses: Record<AnswerState, string> = {
    idle: "border-parlem-gray-100 bg-white hover:border-parlem-green-200 hover:bg-parlem-green-50/40",
    selected: "border-parlem-green-400 bg-parlem-green-50",
    correct: "border-transparent bg-parlem-green-500 text-white",
    incorrect: "border-transparent bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left text-sm font-bold transition-all duration-200 active:scale-[0.98] disabled:active:scale-100 ${stateClasses[state]} ${
        state === "idle" || state === "selected" ? "text-parlem-gray-900" : ""
      }`}
    >
      <span>{label}</span>
      {state === "correct" && <span>✓</span>}
      {state === "incorrect" && <span>✕</span>}
    </button>
  );
}
