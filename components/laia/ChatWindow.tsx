"use client";

import { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/lib/types";
import { ChatMessageBubble } from "@/components/laia/ChatMessage";
import { ChatInput } from "@/components/laia/ChatInput";
import { sendMessageToLaia } from "@/lib/laia/client";

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    createdAt: new Date().toISOString(),
  };
}

const WELCOME_MESSAGE =
  "Hola! Sóc la Laia, la teva professora de català. Pregunta'm el que vulguis: vocabulari, gramàtica o frases per al dia a dia. 😊";

interface ChatWindowProps {
  level: string | null;
}

export function ChatWindow({ level }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", WELCOME_MESSAGE),
  ]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function handleSend(text: string) {
    const userMessage = createMessage("user", text);
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsSending(true);
    setError(null);

    try {
      const result = await sendMessageToLaia({ messages: updatedMessages, level });
      setMessages((prev) => [...prev, createMessage("assistant", result.reply)]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Hi ha hagut un error inesperat.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="flex h-[calc(100vh-220px)] flex-col gap-4">
      <div ref={scrollRef} className="flex-1 overflow-y-auto rounded-xl3 bg-parlem-gray-50 p-4">
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <ChatMessageBubble key={message.id} message={message} />
          ))}
          {isSending && (
            <div className="flex justify-start">
              <div className="rounded-xl2 border border-parlem-gray-100 bg-white px-4 py-2.5 text-sm text-parlem-gray-400">
                La Laia està escrivint...
              </div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="rounded-xl2 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-700">
          {error}
        </div>
      )}

      <ChatInput onSend={handleSend} disabled={isSending} />
    </div>
  );
}
