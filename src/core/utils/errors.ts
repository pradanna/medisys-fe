export class AppError extends Error {
  readonly code: number;
  readonly details?: unknown;
  constructor(message: string, code: number, details?: unknown) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.details = details;
  }
}
