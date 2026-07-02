import type { SupabaseClient } from "@supabase/supabase-js";

export interface StorageService {
  getItem<T>(key: string): T | null;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  getSupabaseClient(): SupabaseClient;
}
