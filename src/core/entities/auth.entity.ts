// Bentuk data User yang murni (bersih dari atribut API yang tidak perlu)
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthSession {
  user: User;
  token: string;
}
