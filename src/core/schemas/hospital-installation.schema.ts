import type { QueryPagination } from '@/core/utils/pagination';

export interface HospitalInstallationQuery extends QueryPagination {
  search?: string;
}
