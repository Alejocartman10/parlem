import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={`rounded-xl3 bg-white border border-parlem-gray-100 shadow-card p-5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
