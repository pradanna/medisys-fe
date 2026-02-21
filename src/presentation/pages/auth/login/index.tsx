import { useLogin } from '@/presentation/hooks/auth';

const LoginPage = () => {
  const { errors, register, onSubmit } = useLogin();
  return (
    <section className="p-10">
      <div className="mb-3">Halaman Login</div>
      <div>
        <input
          type="email"
          {...register('email')}
          className="border border-gray-400"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input
          type="password"
          {...register('password')}
          className="border border-gray-400"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button onClick={onSubmit}>Login</button>
    </section>
  );
};

export default LoginPage;
