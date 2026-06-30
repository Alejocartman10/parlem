"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: "/home", label: "Inicio", icon: "🏠" },
  { href: "/learn", label: "Aprender", icon: "📚" },
  { href: "/laia", label: "IA", icon: "💬" },
  { href: "/profile", label: "Perfil", icon: "👤" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-parlem-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-md items-center justify-between px-6 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 rounded-xl2 py-2 transition-colors duration-200"
            >
              <span
                className={`text-xl transition-transform duration-200 ${isActive ? "scale-110" : "opacity-60"}`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xs font-medium ${isActive ? "text-parlem-green-600" : "text-parlem-gray-500"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
