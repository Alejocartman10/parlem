"use client";

import { Suspense, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthScreen } from "@/components/auth/AuthScreen";
import { AuthTextField } from "@/components/auth/AuthTextField";
import { AuthErrorMessage } from "@/components/auth/AuthErrorMessage";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

const ALLOWED_REDIRECT_PATHS = ["/home", "/learn", "/laia", "/profile"];

function getSafeRedirectPath(redirectTo: string | null): string {
  if (!redirectTo) return "/home";
  const isInternal = ALLOWED_REDIRECT_PATHS.some(
    (path) => redirectTo === path || redirectTo.startsWith(`${path}/`)
  );
  return isInternal ? redirectTo : "/home";
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rawRedirectTo = searchParams.get("redirectTo");
  const destination = getSafeRedirectPath(rawRedirectTo);
  console.log("[login] render →", { rawRedirectTo, destination });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    console.log("[login] abans de signIn →", { rawRedirectTo, destination });
    const result = await signIn(email, password);
    console.log("[login] després de signIn →", {
      error: result.error,
      rawRedirectTo: searchParams.get("redirectTo"),
      destination,
    });

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
      return;
    }

    console.log("[login] router.push →", destination);
    router.push(destination);
  }

  return (
    <AuthScreen
      title="Benvingut de nou"
      subtitle="Inicia sessió per continuar el teu progrés."
      footer={
        <>
          No tens compte?{" "}
          <Link href="/register" className="font-semibold text-parlem-green-600">
            Registra&apos;t
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
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-semibold text-parlem-green-600"
          >
            Has oblidat la contrasenya?
          </Link>
        </div>

        {error && <AuthErrorMessage message={error} />}

        <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Entrant..." : "Iniciar sessió"}
        </Button>
      </form>
    </AuthScreen>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
