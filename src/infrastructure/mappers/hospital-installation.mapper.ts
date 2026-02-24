import { HospitalInstallation } from '@/core/entities';
import type { HospitalInstallationCreate } from '@/core/schemas/hospital-installation.schema';
import type {
  HospitalInstallationCreateRequestDTO,
  HospitalInstallationResponseDTO,
} from '@/infrastructure/dto';

export class HospitalInstallationMapper {
  static toEntity(
    entry: HospitalInstallationResponseDTO
  ): HospitalInstallation {
    return new HospitalInstallation({
      id: entry.id,
      code: entry.code,
      name: entry.name,
      isActive: entry.isActive,
    });
  }

  static toList(
    entries: HospitalInstallationResponseDTO[]
  ): HospitalInstallation[] {
    return entries.map(HospitalInstallationMapper.toEntity);
  }

  static toSchemaCreate(
    entry: HospitalInstallationCreate
  ): HospitalInstallationCreateRequestDTO {
    return {
      code: entry.code,
      name: entry.name,
      is_active: entry.isActive,
    };
  }
}
