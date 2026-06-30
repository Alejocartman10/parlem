import type { ReactNode } from "react";
import { BottomNav } from "@/components/layout/BottomNav";

export function AppScreen({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-parlem-gray-50">
      <div className="mx-auto max-w-md px-5 pb-28 pt-8">{children}</div>
      <BottomNav />
    </div>
  );
}
