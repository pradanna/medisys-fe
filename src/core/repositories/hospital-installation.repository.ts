import type {
  HospitalInstallationCreate,
  HospitalInstallationQuery,
} from '@/core/schemas/hospital-installation.schema';
import type { HospitalInstallation } from '@/core/entities';
import type { PaginatedResult } from '@/core/utils/pagination';

export interface HospitalInstallationRepository {
  getAllHospitalInstallaion(
    params: HospitalInstallationQuery
  ): Promise<PaginatedResult<HospitalInstallation>>;
  getHospitalInstallaionByID(id: string): Promise<HospitalInstallation | null>;
  createHospitalInstallation(schema: HospitalInstallationCreate): Promise<void>;
}
