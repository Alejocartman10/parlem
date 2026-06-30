import type { DailyGoalMinutes } from "@/lib/types";
import { SelectableOption } from "@/components/onboarding/SelectableOption";

interface TimeSelectorProps {
  value: DailyGoalMinutes | null;
  onChange: (minutes: DailyGoalMinutes) => void;
}

const options: { id: DailyGoalMinutes; label: string; description: string }[] = [
  { id: 5, label: "5 minuts al dia", description: "Casual" },
  { id: 10, label: "10 minuts al dia", description: "Regular" },
  { id: 15, label: "15 minuts al dia", description: "Seriós" },
  { id: 20, label: "20 minuts al dia", description: "Intensiu" },
];

export function TimeSelector({ value, onChange }: TimeSelectorProps) {
  return (
    <>
      {options.map((option) => (
        <SelectableOption
          key={option.id}
          label={option.label}
          description={option.description}
          selected={value === option.id}
          onClick={() => onChange(option.id)}
        />
      ))}
    </>
  );
}
