import { browserStorageService } from "@/lib/storage/BrowserStorageService";
import { SupabaseProgressRepository } from "@/lib/progress/SupabaseProgressRepository";
import { ProgressService } from "@/lib/progress/ProgressService";

const progressRepository = new SupabaseProgressRepository(browserStorageService);

export const progressService = new ProgressService(progressRepository);
