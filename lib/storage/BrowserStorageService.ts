import type { StorageService } from "@/lib/storage/StorageService";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

class BrowserStorageService implements StorageService {
  getItem<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  }

  setItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Almacenamiento no disponible (modo privado, cuota excedida, etc.).
    }
  }

  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Sin acción posible si localStorage no está disponible.
    }
  }

  getSupabaseClient() {
    return getSupabaseBrowserClient();
  }
}

export const browserStorageService: StorageService = new BrowserStorageService();
