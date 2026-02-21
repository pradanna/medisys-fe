import { AuthService } from '@/core/services/auth.service';
import { ApiAuthRepository } from '@/infrastructure/repositories/auth.repository';

const authRepository = new ApiAuthRepository();

export const authService = new AuthService(authRepository);
