import type { LearningGoal } from "@/lib/types";
import { SelectableOption } from "@/components/onboarding/SelectableOption";

interface GoalSelectorProps {
  value: LearningGoal | null;
  onChange: (goal: LearningGoal) => void;
}

const goals: { id: LearningGoal; label: string; icon: string }[] = [
  { id: "vivir", label: "Viure a Catalunya", icon: "🏡" },
  { id: "trabajar", label: "Treballar a Catalunya", icon: "💼" },
  { id: "universidad", label: "Estudiar a la universitat", icon: "🎓" },
  { id: "turismo", label: "Turisme", icon: "🧳" },
];

export function GoalSelector({ value, onChange }: GoalSelectorProps) {
  return (
    <>
      {goals.map((goal) => (
        <SelectableOption
          key={goal.id}
          label={goal.label}
          icon={goal.icon}
          selected={value === goal.id}
          onClick={() => onChange(goal.id)}
        />
      ))}
    </>
  );
}
