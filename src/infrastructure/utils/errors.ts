import axios from 'axios';
import type { APIError } from '@/infrastructure/dto';
import { AppError } from '@/core/utils/errors';

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error) && error.response) {
    const apiError = error.response.data as APIError;
    throw new AppError(
      apiError.message || 'Terjadi kesalahan',
      apiError.error.code,
      apiError.error.details
    );
  }
  throw new AppError('An unexpected error occurred', 500, null);
}
