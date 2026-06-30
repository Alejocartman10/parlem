import type { ReactNode } from "react";

type BadgeTone = "green" | "gray" | "amber";

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

const toneClasses: Record<BadgeTone, string> = {
  green: "bg-parlem-green-50 text-parlem-green-700",
  gray: "bg-parlem-gray-100 text-parlem-gray-700",
  amber: "bg-amber-50 text-amber-700",
};

export function Badge({ tone = "green", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
