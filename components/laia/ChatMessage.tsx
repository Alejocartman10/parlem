import type { ChatMessage } from "@/lib/types";

export function ChatMessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}>
      <div
        className={`max-w-[80%] rounded-xl2 px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-parlem-green-500 text-white"
            : "bg-white text-parlem-gray-800 border border-parlem-gray-100"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
