import { z } from 'zod';
import type { LoginRequest } from '@/core/schemas';

export const loginValidatorSchema = z.object({
  email: z
    .string()
    .min(1, 'email is required')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email tidak valid'),
  password: z
    .string()
    .min(1, 'password is required')
    .min(8, 'password minimal 8 karakter')
    .regex(/[A-Z]/, 'password harus mengandung huruf kapital')
    .regex(/[0-9]/, 'password harus mengandung angka')
    .regex(/[^A-Za-z0-9]/, 'password harus mengandung special karakter'),
}) satisfies z.ZodType<LoginRequest>;
