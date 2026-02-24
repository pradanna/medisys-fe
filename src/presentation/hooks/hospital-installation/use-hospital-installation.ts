import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { hospitalInstallationService } from '@/infrastructure/providers';
import type { AppError } from '@/core/utils/errors';
import type { HospitalInstallationCreate } from '@/core/schemas/hospital-installation.schema';
import { hospitalInstallationCreateValidator } from '@/infrastructure/validators';

export const useHospitalInstallation = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<HospitalInstallationCreate>({
    resolver: zodResolver(hospitalInstallationCreateValidator),
    defaultValues: {
      code: '',
      name: '',
      isActive: false,
    },
  });

  const { mutate, isPending } = useMutation<
    void,
    AppError,
    HospitalInstallationCreate
  >({
    mutationFn: (data) =>
      hospitalInstallationService.createHospitalInstallation(data),
    onSuccess: () => {},
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return {
    register,
    onSubmit,
    isPending,
    errors,
  };
};
