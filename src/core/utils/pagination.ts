export interface PaginatedResult<T> {
  items: T[];
  total: number;
}

export interface QueryPagination {
  page?: number;
  perPage?: number;
}
