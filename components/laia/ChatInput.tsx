"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Escriu en català o castellà..."
        disabled={disabled}
        className="flex-1 rounded-xl2 border border-parlem-gray-200 bg-white px-4 py-3 text-sm text-parlem-gray-900 outline-none focus:border-parlem-green-400 disabled:opacity-60"
      />
      <Button type="submit" disabled={disabled || text.trim().length === 0}>
        Enviar
      </Button>
    </form>
  );
}
