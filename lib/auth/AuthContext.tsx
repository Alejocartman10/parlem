"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AuthResult, AuthUser } from "@/lib/auth/types";
import { supabaseAuthService } from "@/lib/auth/supabase-auth-service";

interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<AuthResult>;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  resetPasswordForEmail: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    supabaseAuthService.getCurrentUser().then((currentUser) => {
      if (!isMounted) return;
      setUser(currentUser);
      setIsLoading(false);
    });

    const unsubscribe = supabaseAuthService.onAuthStateChange((nextUser) => {
      if (!isMounted) return;
      setUser(nextUser);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const signUp = useCallback(
    (email: string, password: string) => supabaseAuthService.signUp(email, password),
    []
  );

  const signIn = useCallback(
    (email: string, password: string) => supabaseAuthService.signIn(email, password),
    []
  );

  const signOut = useCallback(async () => {
    await supabaseAuthService.signOut();
    setUser(null);
  }, []);

  const resetPasswordForEmail = useCallback(
    (email: string) => supabaseAuthService.resetPasswordForEmail(email),
    []
  );

  const updatePassword = useCallback(
    (newPassword: string) => supabaseAuthService.updatePassword(newPassword),
    []
  );

  const value = useMemo(
    () => ({ user, isLoading, signUp, signIn, signOut, resetPasswordForEmail, updatePassword }),
    [user, isLoading, signUp, signIn, signOut, resetPasswordForEmail, updatePassword]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
