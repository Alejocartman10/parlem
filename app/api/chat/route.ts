import { NextResponse } from "next/server";
import { buildLaiaSystemPrompt } from "@/lib/laia/prompt";

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: IncomingMessage[];
  level: string | null;
}

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_MODEL = "claude-sonnet-4-6";

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "La professora Laia encara no està configurada. Cal definir la variable ANTHROPIC_API_KEY al servidor.",
      },
      { status: 503 }
    );
  }

  let body: ChatRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Petició no vàlida." }, { status: 400 });
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json({ error: "Falten missatges a la conversa." }, { status: 400 });
  }

  try {
    const anthropicResponse = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 600,
        system: buildLaiaSystemPrompt(body.level),
        messages: body.messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      return NextResponse.json(
        { error: `Error de la API d'Anthropic: ${errorText}` },
        { status: anthropicResponse.status }
      );
    }

    const data = await anthropicResponse.json();
    const textBlock = data.content?.find(
      (block: { type: string; text?: string }) => block.type === "text"
    );

    return NextResponse.json({
      reply: textBlock?.text ?? "No he pogut generar una resposta.",
    });
  } catch {
    return NextResponse.json(
      { error: "No s'ha pogut connectar amb el servei de la Laia." },
      { status: 502 }
    );
  }
}
