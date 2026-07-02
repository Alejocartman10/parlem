import type { ProgressRepository } from "@/lib/progress/ProgressRepository";
import type { UserProfile } from "@/lib/types";
import { defaultUserProfile } from "@/lib/storage";

export class ProgressService {
  constructor(private readonly repository: ProgressRepository) {}

  /**
   * Carga el perfil del usuario.
   * - Sin sesión: devuelve el perfil en caché local (o el perfil por defecto).
   * - Con sesión: intenta el perfil remoto; si no existe encara (usuari nou),
   *   adopta el perfil local com a base (per exemple, progrés fet abans
   *   d'iniciar sessió) i el crea de forma remota automàticament.
   */
  async loadProfile(userId: string | null): Promise<UserProfile> {
    const localProfile = this.repository.getLocalProfile();

    if (!userId) {
      return localProfile ?? defaultUserProfile;
    }

    const remoteProfile = await this.repository.getRemoteProfile(userId);
    if (remoteProfile) {
      this.repository.saveLocalProfile(remoteProfile);
      return remoteProfile;
    }

    const seedProfile = localProfile ?? defaultUserProfile;
    const created = await this.repository.saveRemoteProfile(userId, seedProfile);
    const finalProfile = created ?? seedProfile;
    this.repository.saveLocalProfile(finalProfile);
    return finalProfile;
  }

  /**
   * Persisteix qualsevol canvi de perfil. Sempre actualitza la còpia local
   * (caché instantània) i, si hi ha sessió activa, sincronitza amb el
   * backend remot en segon pla.
   */
  async persistProfile(profile: UserProfile, userId: string | null): Promise<void> {
    this.repository.saveLocalProfile(profile);
    if (userId) {
      await this.repository.saveRemoteProfile(userId, profile);
    }
  }

  clearLocalProfile(): void {
    this.repository.clearLocalProfile();
  }
}
