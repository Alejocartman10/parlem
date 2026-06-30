import type { ChatMessage } from "@/lib/types";

interface SendMessageParams {
  messages: ChatMessage[];
  level: string | null;
}

interface SendMessageResult {
  reply: string;
}

export async function sendMessageToLaia({
  messages,
  level,
}: SendMessageParams): Promise<SendMessageResult> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
      level,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ error: "Error desconegut" }));
    throw new Error(errorBody.error ?? "No s'ha pogut contactar amb la Laia.");
  }

  const data = (await response.json()) as SendMessageResult;
  return data;
}
