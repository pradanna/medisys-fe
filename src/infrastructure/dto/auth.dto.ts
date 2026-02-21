export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  access_token: string;
  refresh_token: string;
  user_info: {
    id: string;
    email: string;
    username: string;
    roles: string[];
  };
}

export interface RefreshTokenDTO {
  access_token: string;
}
