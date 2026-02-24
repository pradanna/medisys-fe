export interface HospitalInstallationResponseDTO {
  id: string;
  code: string;
  name: string;
  isActive: boolean;
}

export interface HospitalInstallationCreateRequestDTO {
  code: string;
  name: string;
  is_active: boolean;
}
