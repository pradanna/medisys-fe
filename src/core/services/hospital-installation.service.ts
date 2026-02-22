import type { HospitalInstallationRepository } from '@/core/repositories';
import type { HospitalInstallationQuery } from '@/core/schemas/hospital-installation.schema';
import type { PaginatedResult } from '@/core/utils/pagination';
import type { HospitalInstallation } from '@/core/entities';
import { AppError } from '@/core/utils/errors';

export class HospitalInstallationService {
  private readonly hospitalInstallationRepository: HospitalInstallationRepository;

  constructor(hospitalInstallationRepository: HospitalInstallationRepository) {
    this.hospitalInstallationRepository = hospitalInstallationRepository;
  }

  async getAllHospitalInstallaion(
    params: HospitalInstallationQuery
  ): Promise<PaginatedResult<HospitalInstallation>> {
    return this.hospitalInstallationRepository.getAllHospitalInstallaion(
      params
    );
  }

  async getHospitalInstallaionByID(
    id: string
  ): Promise<HospitalInstallation | null> {
    const hospitalInstallation =
      await this.hospitalInstallationRepository.getHospitalInstallaionByID(id);
    if (!hospitalInstallation) {
      throw new AppError('hospital installation not found', 404);
    }
    return hospitalInstallation;
  }
}
