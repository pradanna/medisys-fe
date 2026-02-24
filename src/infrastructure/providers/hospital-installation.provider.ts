import { HospitalInstallationService } from '@/core/services';
import { ApiHospitalInstallationRepository } from '@/infrastructure/repositories';

const hospitalInstallationRepository = new ApiHospitalInstallationRepository();

export const hospitalInstallationService = new HospitalInstallationService(
  hospitalInstallationRepository
);
