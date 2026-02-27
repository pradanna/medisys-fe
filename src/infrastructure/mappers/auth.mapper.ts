import { UserCredentials } from '@/core/entities';
import type { LoginRequest } from '@/core/schemas';
import type { LoginRequestDTO, LoginResponseDTO } from '@/infrastructure/dto';
import { AppError } from '@/core/utils/errors';

export class AuthMapper {
  static toRequest(schema: LoginRequest): LoginRequestDTO {
    return {
      email: schema.email,
      password: schema.password,
    };
  }

  static toEntity(dto?: LoginResponseDTO): UserCredentials {
    if (!dto) {
      throw new AppError('error undefined data login', 422);
    }
    return new UserCredentials({
      accessToken: dto.access_token,
      refreshToken: dto.refresh_token,
      userInfo: {
        id: dto.user_info.id,
        email: dto.user_info.email,
        username: dto.user_info.username,
        roles: dto.user_info.roles,
      },
    });
  }
}
