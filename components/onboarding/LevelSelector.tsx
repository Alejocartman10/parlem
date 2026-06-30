import type { CatalanLevel } from "@/lib/types";
import { SelectableOption } from "@/components/onboarding/SelectableOption";

interface LevelSelectorProps {
  value: CatalanLevel | null;
  onChange: (level: CatalanLevel) => void;
}

const levels: { id: CatalanLevel; label: string; description: string }[] = [
  { id: "A1", label: "A1 · Principiant", description: "No tinc cap coneixement previ." },
  { id: "A2", label: "A2 · Bàsic", description: "Conec algunes paraules i frases." },
  { id: "B1", label: "B1 · Intermedi", description: "Puc mantenir converses senzilles." },
];

export function LevelSelector({ value, onChange }: LevelSelectorProps) {
  return (
    <>
      {levels.map((level) => (
        <SelectableOption
          key={level.id}
          label={level.label}
          description={level.description}
          selected={value === level.id}
          onClick={() => onChange(level.id)}
        />
      ))}
    </>
  );
}
