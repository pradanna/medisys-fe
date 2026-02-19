export interface APIResponse<T> {
  meta: {
    code: string;
    message: string;
    pagination?: MetaPagination;
  };
  data?: T;
}

export interface MetaPagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface APIError {
  message: string;
  error: {
    code: number;
    details: unknown;
  };
}