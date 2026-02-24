import type { HospitalInstallation } from '@/core/entities';
import type { HospitalInstallationRepository } from '@/core/repositories';
import type {
  HospitalInstallationCreate,
  HospitalInstallationQuery,
} from '@/core/schemas/hospital-installation.schema';
import type { PaginatedResult } from '@/core/utils/pagination';
import { AppError } from '@/core/utils/errors';
import { handleApiError } from '@/infrastructure/utils/errors';
import api from '@/infrastructure/sources/api/api';
import type {
  APIResponse,
  HospitalInstallationResponseDTO,
} from '@/infrastructure/dto';
import { HospitalInstallationMapper } from '@/infrastructure/mappers/hospital-installation.mapper';
import { hospitalInstallationResponseValidator } from '@/infrastructure/validators/hospital-installation.validator';
import { z } from 'zod';

const hospitalInstallationListValidator = z.array(
  hospitalInstallationResponseValidator
);

export class ApiHospitalInstallationRepository implements HospitalInstallationRepository {
  async createHospitalInstallation(
    schema: HospitalInstallationCreate
  ): Promise<void> {
    try {
      const payload = HospitalInstallationMapper.toSchemaCreate(schema);
      const response = await api.post<APIResponse<unknown>>(
        '/hospital-installation',
        payload
      );
      console.log(response);
    } catch (error) {
      throw handleApiError(error);
    }
  }
  async getAllHospitalInstallaion(
    params: HospitalInstallationQuery
  ): Promise<PaginatedResult<HospitalInstallation>> {
    try {
      const response = await api.get<
        APIResponse<HospitalInstallationResponseDTO[]>
      >(`/hospital-installation`, {
        params,
      });
      const data = response.data.data;

      if (!data) {
        return { items: [], total: 0 };
      }

      const validated = hospitalInstallationListValidator.safeParse(data);
      if (!validated.success) {
        throw new AppError(
          'Format data response tidak valid',
          422,
          validated.error.flatten()
        );
      }

      return {
        items: HospitalInstallationMapper.toList(validated.data),
        total: response.data.meta.pagination?.total || 0,
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw handleApiError(error);
    }
  }

  async getHospitalInstallaionByID(
    id: string
  ): Promise<HospitalInstallation | null> {
    try {
      const response = await api.get<
        APIResponse<HospitalInstallationResponseDTO>
      >(`/hospital-installation/${id}`);
      const data = response.data.data;

      if (!data) return null;

      const validated = hospitalInstallationResponseValidator.safeParse(data);
      if (!validated.success) {
        throw new AppError(
          'Format data response tidak valid',
          422,
          validated.error.flatten()
        );
      }

      return HospitalInstallationMapper.toEntity(validated.data);
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw handleApiError(error);
    }
  }
}
