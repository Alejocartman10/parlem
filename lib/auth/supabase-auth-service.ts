import type { AuthResult, AuthService, AuthUser } from "@/lib/auth/types";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

function mapUser(user: { id: string; email?: string | null } | null | undefined): AuthUser | null {
  if (!user) return null;
  return { id: user.id, email: user.email ?? null };
}

function mapError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Hi ha hagut un error inesperat.";
}

class SupabaseAuthService implements AuthService {
  async signUp(email: string, password: string): Promise<AuthResult> {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) return { user: null, error: error.message };
      return {
        user: mapUser(data.user),
        error: null,
        needsEmailConfirmation: !data.session,
      };
    } catch (error) {
      return { user: null, error: mapError(error) };
    }
  }

  async signIn(email: string, password: string): Promise<AuthResult> {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return { user: null, error: error.message };
      return { user: mapUser(data.user), error: null };
    } catch (error) {
      return { user: null, error: mapError(error) };
    }
  }

  async signOut(): Promise<void> {
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.auth.signOut();
    } catch {
      // Sin configuración de Supabase no hay sesión que cerrar.
    }
  }

  async resetPasswordForEmail(email: string): Promise<{ error: string | null }> {
    try {
      const supabase = getSupabaseBrowserClient();
      const redirectTo =
        typeof window !== "undefined" ? `${window.location.origin}/reset-password` : undefined;
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
      return { error: error ? error.message : null };
    } catch (error) {
      return { error: mapError(error) };
    }
  }

  async updatePassword(newPassword: string): Promise<{ error: string | null }> {
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      return { error: error ? error.message : null };
    } catch (error) {
      return { error: mapError(error) };
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.auth.getUser();
      return mapUser(data.user);
    } catch {
      return null;
    }
  }

  onAuthStateChange(callback: (user: AuthUser | null) => void): () => void {
    try {
      const supabase = getSupabaseBrowserClient();
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        callback(mapUser(session?.user));
      });
      return () => subscription.unsubscribe();
    } catch {
      return () => {};
    }
  }
}

export const supabaseAuthService: AuthService = new SupabaseAuthService();
