import type { AuthRepository } from '@/core/repositories';
import type { LoginRequest } from '@/core/schemas';
import { UserCredentials } from '@/core/entities';

export class AuthService {
  private readonly authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(credentials: LoginRequest): Promise<UserCredentials> {
    const userCredentials = await this.authRepository.login(credentials);
    this.authRepository.saveSession(userCredentials);
    return userCredentials;
  }
}
