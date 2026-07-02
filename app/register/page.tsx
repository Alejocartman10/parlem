"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthScreen } from "@/components/auth/AuthScreen";
import { AuthTextField } from "@/components/auth/AuthTextField";
import { AuthErrorMessage } from "@/components/auth/AuthErrorMessage";
import { AuthSuccessMessage } from "@/components/auth/AuthSuccessMessage";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
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
    const result = await signUp(email, password);
    setIsSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    if (result.needsEmailConfirmation) {
      setNeedsConfirmation(true);
      return;
    }

    router.push("/home");
  }

  if (needsConfirmation) {
    return (
      <AuthScreen
        title="Revisa el teu correu"
        subtitle="T'hem enviat un enllaç de confirmació per activar el compte."
      >
        <AuthSuccessMessage message="Un cop confirmis el correu, ja podràs iniciar sessió." />
        <Link href="/login">
          <Button fullWidth size="lg">
            Anar a iniciar sessió
          </Button>
        </Link>
      </AuthScreen>
    );
  }

  return (
    <AuthScreen
      title="Crea el teu compte"
      subtitle="Comença a aprendre català i no perdis el teu progrés."
      footer={
        <>
          Ja tens compte?{" "}
          <Link href="/login" className="font-semibold text-parlem-green-600">
            Inicia sessió
          </Link>
        </>
      }
    >
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
        <AuthTextField
          id="password"
          label="Contrasenya"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <AuthTextField
          id="confirmPassword"
          label="Confirma la contrasenya"
          type="password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        {error && <AuthErrorMessage message={error} />}

        <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Creant compte..." : "Crear compte"}
        </Button>
      </form>
    </AuthScreen>
  );
}
