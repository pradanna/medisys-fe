import { z } from 'zod';
import type { HospitalInstallationResponseDTO } from '@/infrastructure/dto';

export const hospitalInstallationResponseValidator = z.object({
  id: z.string().min(1, 'data id wajib ada'),
  name: z.string().min(1, 'data name wajib ada'),
  code: z.string().min(1, 'data code wajib ada'),
  isActive: z.boolean('data is active tidak valid'),
}) satisfies z.ZodType<HospitalInstallationResponseDTO>;
