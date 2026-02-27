import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ApiHospitalInstallationRepository } from '../hospital-installation.repository';
import { AppError } from '@/core/utils/errors';
import api from '@/infrastructure/sources/api/api';
import { handleApiError } from '@/infrastructure/utils/errors';

vi.mock('@/infrastructure/sources/api/api', () => ({
  default: {
    get: vi.fn(),
  },
}));

vi.mock('@/infrastructure/utils/errors', () => ({
  handleApiError: vi.fn(),
}));

const mockGet = vi.mocked(api.get);
const mockHandleApiError = vi.mocked(handleApiError);

const params = { page: 1, perPage: 10 };

const buildApiResponse = (data: unknown, total?: number) => ({
  data: {
    data,
    meta: {
      code: '200',
      message: 'OK',
      ...(total !== undefined && {
        pagination: {
          total,
          per_page: 10,
          current_page: 1,
          last_page: Math.ceil(total / 10),
        },
      }),
    },
  },
});

describe('ApiHospitalInstallationRepository', () => {
  let repository: ApiHospitalInstallationRepository;

  beforeEach(() => {
    repository = new ApiHospitalInstallationRepository();
    vi.clearAllMocks();
  });

  describe('getAllHospitalInstallaion', () => {
    describe('berhasil validasi', () => {
      it('mengembalikan items yang dipetakan beserta total dari pagination', async () => {
        const rawData = [
          { id: 'abc-1', name: 'RS Sejahtera', code: 'RS-001', isActive: true },
          { id: 'abc-2', name: 'RS Harapan', code: 'RS-002', isActive: false },
        ];
        mockGet.mockResolvedValue(buildApiResponse(rawData, 50));

        const result = await repository.getAllHospitalInstallaion(params);

        expect(result.items).toHaveLength(2);
        expect(result.total).toBe(50);
        expect(result.items[0].id).toBe('abc-1');
        expect(result.items[0].name).toBe('RS Sejahtera');
        expect(result.items[0].isActive).toBe(true);
        expect(result.items[1].id).toBe('abc-2');
        expect(result.items[1].isActive).toBe(false);
      });

      it('mengembalikan items kosong dan total 0 ketika data null', async () => {
        mockGet.mockResolvedValue(buildApiResponse(null));

        const result = await repository.getAllHospitalInstallaion(params);

        expect(result.items).toEqual([]);
        expect(result.total).toBe(0);
      });

      it('mengembalikan total 0 ketika meta pagination tidak ada', async () => {
        const rawData = [
          { id: 'abc-1', name: 'RS Sejahtera', code: 'RS-001', isActive: true },
        ];
        mockGet.mockResolvedValue(buildApiResponse(rawData));

        const result = await repository.getAllHospitalInstallaion(params);

        expect(result.total).toBe(0);
      });

      it('mengirim params query ke endpoint yang benar', async () => {
        mockGet.mockResolvedValue(buildApiResponse([]));

        await repository.getAllHospitalInstallaion({
          page: 2,
          perPage: 5,
          search: 'sejahtera',
        });

        expect(mockGet).toHaveBeenCalledWith('/hospital-installation', {
          params: { page: 2, perPage: 5, search: 'sejahtera' },
        });
      });
    });

    describe('gagal validasi', () => {
      it('melempar AppError 422 ketika field id kosong', async () => {
        mockGet.mockResolvedValue(
          buildApiResponse([
            { id: '', name: 'RS Sejahtera', code: 'RS-001', isActive: true },
          ])
        );

        try {
          await repository.getAllHospitalInstallaion(params);
          expect.fail('Seharusnya melempar AppError');
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          expect((error as AppError).code).toBe(422);
          expect((error as AppError).message).toBe(
            'Format data response tidak valid'
          );
        }
      });

      it('melempar AppError 422 ketika field name kosong', async () => {
        mockGet.mockResolvedValue(
          buildApiResponse([
            { id: 'abc-1', name: '', code: 'RS-001', isActive: true },
          ])
        );

        try {
          await repository.getAllHospitalInstallaion(params);
          expect.fail('Seharusnya melempar AppError');
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          expect((error as AppError).code).toBe(422);
        }
      });

      it('melempar AppError 422 ketika field code kosong', async () => {
        mockGet.mockResolvedValue(
          buildApiResponse([
            { id: 'abc-1', name: 'RS Sejahtera', code: '', isActive: true },
          ])
        );

        try {
          await repository.getAllHospitalInstallaion(params);
          expect.fail('Seharusnya melempar AppError');
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          expect((error as AppError).code).toBe(422);
        }
      });

      it('melempar AppError 422 ketika field isActive bukan boolean', async () => {
        mockGet.mockResolvedValue(
          buildApiResponse([
            {
              id: 'abc-1',
              name: 'RS Sejahtera',
              code: 'RS-001',
              isActive: 'yes',
            },
          ])
        );

        try {
          await repository.getAllHospitalInstallaion(params);
          expect.fail('Seharusnya melempar AppError');
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          expect((error as AppError).code).toBe(422);
        }
      });

      it('menyertakan details flatten dari zod pada AppError', async () => {
        mockGet.mockResolvedValue(
          buildApiResponse([{ id: '', name: '', code: '', isActive: null }])
        );

        try {
          await repository.getAllHospitalInstallaion(params);
          expect.fail('Seharusnya melempar AppError');
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          expect((error as AppError).details).toBeDefined();
          expect((error as AppError).details).toHaveProperty('fieldErrors');
        }
      });

      it('melempar AppError 422 ketika salah satu item dalam array tidak valid', async () => {
        const rawData = [
          { id: 'abc-1', name: 'RS Sejahtera', code: 'RS-001', isActive: true },
          { id: '', name: 'RS Harapan', code: 'RS-002', isActive: false }, // id kosong
        ];
        mockGet.mockResolvedValue(buildApiResponse(rawData, 2));

        try {
          await repository.getAllHospitalInstallaion(params);
          expect.fail('Seharusnya melempar AppError');
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          expect((error as AppError).code).toBe(422);
        }
      });
    });

    describe('API error', () => {
      it('memanggil handleApiError dan meneruskan error ketika terjadi network error', async () => {
        const networkError = new Error('Network Error');
        mockGet.mockRejectedValue(networkError);
        mockHandleApiError.mockImplementation(() => {
          throw new AppError('Terjadi kesalahan', 500, null);
        });

        await expect(
          repository.getAllHospitalInstallaion(params)
        ).rejects.toBeInstanceOf(AppError);
        expect(mockHandleApiError).toHaveBeenCalledWith(networkError);
        expect(mockHandleApiError).toHaveBeenCalledTimes(1);
      });

      it('tidak memanggil handleApiError ketika error adalah AppError dari validasi', async () => {
        mockGet.mockResolvedValue(
          buildApiResponse([
            { id: '', name: 'RS Sejahtera', code: 'RS-001', isActive: true },
          ])
        );

        await expect(
          repository.getAllHospitalInstallaion(params)
        ).rejects.toBeInstanceOf(AppError);
        expect(mockHandleApiError).not.toHaveBeenCalled();
      });
    });
  });
});
