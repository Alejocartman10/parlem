import type { CatalanLevel } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

interface ProfileHeaderProps {
  name: string;
  level: CatalanLevel | null;
}

export function ProfileHeader({ name, level }: ProfileHeaderProps) {
  const initial = name.trim().charAt(0).toUpperCase() || "P";

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-parlem-green-500 text-3xl font-bold text-white shadow-soft">
        {initial}
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold text-parlem-gray-900">{name}</h1>
        {level && <Badge tone="green">Nivell {level}</Badge>}
      </div>
    </div>
  );
}
