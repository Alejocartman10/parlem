"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthScreen } from "@/components/auth/AuthScreen";
import { AuthTextField } from "@/components/auth/AuthTextField";
import { AuthErrorMessage } from "@/components/auth/AuthErrorMessage";
import { AuthSuccessMessage } from "@/components/auth/AuthSuccessMessage";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { updatePassword } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Les contrasenyes no coincideixen.");
      return;
    }

    if (password.length < 6) {
      setError("La contrasenya ha de tenir com a mínim 6 caràcters.");
      return;
    }

    setIsSubmitting(true);
    const result = await updatePassword(password);
    setIsSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setIsDone(true);
  }

  if (isDone) {
    return (
      <AuthScreen title="Contrasenya actualitzada" subtitle="Ja pots iniciar sessió amb la nova contrasenya.">
        <AuthSuccessMessage message="El canvi s'ha desat correctament." />
        <Button fullWidth size="lg" onClick={() => router.push("/login")}>
          Anar a iniciar sessió
        </Button>
      </AuthScreen>
    );
  }

  return (
    <AuthScreen
      title="Crea una nova contrasenya"
      subtitle="Defineix una contrasenya nova per al teu compte."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthTextField
          id="password"
          label="Nova contrasenya"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <AuthTextField
          id="confirmPassword"
          label="Confirma la nova contrasenya"
          type="password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        {error && <AuthErrorMessage message={error} />}

        <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Desant..." : "Desar nova contrasenya"}
        </Button>
      </form>
    </AuthScreen>
  );
}
