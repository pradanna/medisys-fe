import { useLogin } from '@/presentation/hooks/auth';
import { Button } from '@/presentation/components/ui/button';

const FormLogin = () => {
  const { errors, register, onSubmit } = useLogin();
  return (
    <div className="block">
      <div className="mb-3">
        <input
          type="email"
          {...register('email')}
          className="border border-gray-400"
        />
        {errors.email && (
          <span className="block text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <input
          type="password"
          {...register('password')}
          className="border border-gray-400"
        />
        {errors.password && (
          <span className="block text-red-500">{errors.password.message}</span>
        )}
      </div>
      <Button text="Login" onClick={onSubmit} />
    </div>
  );
};

export default FormLogin;
