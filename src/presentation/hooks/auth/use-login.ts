import { useNavigate } from 'react-router';
import { loginValidatorSchema } from '@/infrastructure/validators';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { authService } from '@/infrastructure/providers';
import type { UserCredentials } from '@/core/entities';
import type { LoginRequest } from '@/core/schemas';
import type { AppError } from '@/infrastructure/utils/errors';

export const useLogin = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginValidatorSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useMutation<
    UserCredentials,
    AppError,
    LoginRequest
  >({
    mutationFn: (data) => authService.login(data),
    onSuccess: () => {
      // console.log(userCredentials);
      navigate('/dashboard');
    },
    onError: () => {
      navigate('/dashboard');
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });
  return {
    register,
    errors,
    onSubmit,
    isPending,
  };
};
