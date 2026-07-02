import type { UserProfile } from "@/lib/types";

export interface ProgressRepository {
  getLocalProfile(): UserProfile | null;
  saveLocalProfile(profile: UserProfile): void;
  clearLocalProfile(): void;
  getRemoteProfile(userId: string): Promise<UserProfile | null>;
  saveRemoteProfile(userId: string, profile: UserProfile): Promise<UserProfile | null>;
}
