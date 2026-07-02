import type { InputHTMLAttributes } from "react";

interface AuthTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function AuthTextField({ label, id, ...rest }: AuthTextFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-parlem-gray-600">
        {label}
      </label>
      <input
        id={id}
        className="h-12 rounded-xl2 border border-parlem-gray-200 bg-white px-4 text-sm text-parlem-gray-900 outline-none transition-colors duration-200 focus:border-parlem-green-400 disabled:opacity-60"
        {...rest}
      />
    </div>
  );
}
