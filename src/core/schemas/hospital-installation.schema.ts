import type { QueryPagination } from '@/core/utils/pagination';

export interface HospitalInstallationQuery extends QueryPagination {
  search?: string;
}

export interface HospitalInstallationCreate {
  code: string;
  name: string;
  isActive: boolean;
}
