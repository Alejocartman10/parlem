export interface AuthUser {
  id: string;
  email: string | null;
}

export interface AuthResult {
  user: AuthUser | null;
  error: string | null;
  needsEmailConfirmation?: boolean;
}

export interface AuthService {
  signUp(email: string, password: string): Promise<AuthResult>;
  signIn(email: string, password: string): Promise<AuthResult>;
  signOut(): Promise<void>;
  resetPasswordForEmail(email: string): Promise<{ error: string | null }>;
  updatePassword(newPassword: string): Promise<{ error: string | null }>;
  getCurrentUser(): Promise<AuthUser | null>;
  onAuthStateChange(callback: (user: AuthUser | null) => void): () => void;
}
