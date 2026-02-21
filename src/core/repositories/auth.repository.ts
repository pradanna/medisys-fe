import { UserCredentials } from '@/core/entities';
import type { LoginRequest } from '@/core/schemas';

export interface AuthRepository {
  login(schema: LoginRequest): Promise<UserCredentials>;
  saveSession(userCredentials: UserCredentials): void;
}
