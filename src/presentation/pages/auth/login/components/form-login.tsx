import { useLogin } from '@/presentation/hooks/auth';
import { Button } from '@/presentation/components/ui/button';
import { Textfield } from '@/presentation/components/ui/textfield';
import { Passwordfield } from '@/presentation/components/ui/passwordfield';

const FormLogin = () => {
  const { errors, register, onSubmit, isPending } = useLogin();
  return (
    <div className="block w-64">
      <div className="mb-3">
        <Textfield type="email" disabled={isPending} {...register('email')} />
        {errors.email && (
          <span className="block text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <Passwordfield disabled={isPending} {...register('password')} />
        {errors.password && (
          <span className="block text-red-500">{errors.password.message}</span>
        )}
      </div>
      <Button text="Login" onClick={onSubmit} loading={isPending} />
    </div>
  );
};

export default FormLogin;
