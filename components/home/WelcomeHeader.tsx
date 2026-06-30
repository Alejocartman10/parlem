function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 13) return "Bon dia";
  if (hour < 20) return "Bona tarda";
  return "Bona nit";
}

interface WelcomeHeaderProps {
  name: string;
}

export function WelcomeHeader({ name }: WelcomeHeaderProps) {
  const initial = name.trim().charAt(0).toUpperCase() || "P";

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-parlem-gray-500">{getGreeting()},</span>
        <span className="text-2xl font-bold tracking-tight text-parlem-gray-900">{name}</span>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-parlem-green-400 to-parlem-green-600 text-lg font-bold text-white shadow-soft">
        {initial}
      </div>
    </div>
  );
}
