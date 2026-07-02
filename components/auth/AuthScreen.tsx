import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";

interface AuthScreenProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthScreen({ title, subtitle, children, footer }: AuthScreenProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12">
      <div className="flex w-full max-w-sm flex-col gap-8 animate-fade-in">
        <div className="flex flex-col items-center gap-4 text-center">
          <Logo size={48} withText={false} />
          <div>
            <h1 className="text-2xl font-bold text-parlem-gray-900">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-parlem-gray-500">{subtitle}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
        {footer && <div className="text-center text-sm text-parlem-gray-500">{footer}</div>}
      </div>
    </main>
  );
}
