import * as React from 'react';
import { Button } from '@/presentation/components/ui/button';
import { Card } from '@/presentation/components/ui/card';
import { Passwordfield } from '@/presentation/components/ui/passwordfield';
import { Textfield } from '@/presentation/components/ui/textfield';
import { Activity, Lock, Mail } from 'lucide-react';
import logo from '@/assets/images/local/logo.png';

const FormLogin = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Submitting with:', { email, password });
    setTimeout(() => {
      setIsLoading(false);
      console.log('Submission finished.');
    }, 2000);
  };

  return (
    <Card
      shadow="md"
      withBorder={false}
      size="lg"
      className="mx-auto w-full max-w-105 rounded-xl"
    >
      <div className="flex flex-col items-center">
        <div className="mx-auto flex h-36  items-center justify-center">
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
        <h2 className="text-center text-2xl font-bold text-slate-900">
          Welcome to Medisys
        </h2>
        <p className="mt-2 mb-8 text-center text-sm text-slate-500">
          Please enter your credentials to access the system
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textfield
          id="email"
          placeholder="name@hospital.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="py-1 px-1"
          type="email"
          prefixIcon={Mail}
          required
        />
        <div className="space-y-1">
          <Passwordfield
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="py-1 px-1"
            prefixIcon={Lock}
            required
          />
          <div className="text-right">
            <a href="#" className="text-xs text-primary-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          size="large"
          isLoading={isLoading}
        >
          Sign In
        </Button>
        <p className="text-center text-xs text-slate-500">
          Still can't sign in?{' '}
          <a href="#" className="font-medium text-primary-500 hover:underline">
            Contact System Provider
          </a>
        </p>
      </form>
    </Card>
  );
};

export default FormLogin;
