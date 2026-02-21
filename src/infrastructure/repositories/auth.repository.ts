import type { UserCredentials } from '@/core/entities';
import type { AuthRepository } from '@/core/repositories/auth.repository';
import type { LoginRequest } from '@/core/schemas';
import type {
  APIResponse,
  LoginRequestDTO,
  LoginResponseDTO,
} from '@/infrastructure/dto';
import { AuthMapper } from '@/infrastructure/mappers';
import api from '@/infrastructure/sources/api/api';
import { handleApiError } from '../utils/errors';

/**
 * Implementasi HTTP dari {@link AuthRepository} yang berkomunikasi
 * dengan API autentikasi pada server.
 */
export class ApiAuthRepository implements AuthRepository {
  /**
   * Mengautentikasi pengguna menggunakan kredensial yang diberikan.
   *
   * Mengirim POST request ke `/auth/login` dengan schema yang diberikan,
   * memetakan DTO respons menjadi entitas {@link UserCredentials}, dan
   * mengembalikannya ke pemanggil.
   *
   * @param schema - Payload login yang berisi `email` dan `password`.
   * @returns Promise yang diselesaikan dengan kredensial pengguna yang terautentikasi.
   * @throws {AppError} Jika respons API tidak mengandung data (HTTP 422).
   * @throws {Error} Jika request jaringan gagal atau server mengembalikan error.
   */
  async login(schema: LoginRequest): Promise<UserCredentials> {
    try {
      const request: LoginRequestDTO = AuthMapper.toRequest(schema);
      const response = await api.post<APIResponse<LoginResponseDTO>>(
        '/auth/login',
        request
      );
      const credentials = response.data.data;
      return AuthMapper.toEntity(credentials);
    } catch (error) {
      throw handleApiError(error);
    }
  }
}
