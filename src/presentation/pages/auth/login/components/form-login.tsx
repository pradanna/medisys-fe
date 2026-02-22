import { useLogin } from '@/presentation/hooks/auth';
import { Button } from '@/presentation/components/ui/button';
import { Textfield } from '@/presentation/components/ui/textfield';
import { Passwordfield } from '@/presentation/components/ui/passwordfield';

const FormLogin = () => {
  const { errors, register, onSubmit } = useLogin();
  return (
    <div className="block w-64">
      <div className="mb-3">
        <Textfield
          type="email"
          {...register('email')}
          className="border border-gray-400"
        />
        {errors.email && (
          <span className="block text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <Passwordfield
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
