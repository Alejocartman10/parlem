"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AuthScreen } from "@/components/auth/AuthScreen";
import { AuthTextField } from "@/components/auth/AuthTextField";
import { AuthErrorMessage } from "@/components/auth/AuthErrorMessage";
import { AuthSuccessMessage } from "@/components/auth/AuthSuccessMessage";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

export default function ForgotPasswordPage() {
  const { resetPasswordForEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await resetPasswordForEmail(email);
    setIsSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setIsSent(true);
  }

  return (
    <AuthScreen
      title="Recupera la contrasenya"
      subtitle="T'enviarem un enllaç per crear-ne una de nova."
      footer={
        <Link href="/login" className="font-semibold text-parlem-green-600">
          Tornar a iniciar sessió
        </Link>
      }
    >
      {isSent ? (
        <AuthSuccessMessage message="Si el correu existeix, rebràs un enllaç per restablir la contrasenya en uns minuts." />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AuthTextField
            id="email"
            label="Correu electrònic"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {error && <AuthErrorMessage message={error} />}

          <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Enviant..." : "Enviar enllaç"}
          </Button>
        </form>
      )}
    </AuthScreen>
  );
}
