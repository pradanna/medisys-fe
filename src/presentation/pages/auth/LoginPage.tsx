import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import logo from '@/assets/images/local/logo.png';

import { Button } from '../../components/ui/button';

import { Input } from '@/presentation/components/ui/input';
import { PasswordInput } from '@/presentation/components/ui/password-input';
import {
  LoginCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/login-card';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Attempting to log in with:', { email, password });

    setTimeout(() => {
      alert('Login Berhasil! (Mock)');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hospital building background"
        className="absolute inset-0 z-0 h-full w-full object-cover blur-sm"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Flying Card Container */}
      <div className="relative z-10 w-full max-w-110 p-4">
        <LoginCard className="bg-linear-to-br from-white via-white to-blue-50">
          <CardHeader className="text-center">
            <div className="mx-auto flex w-48 items-center justify-center">
              <img
                src={logo}
                alt="Medisys Logo"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
            <CardTitle>Selamat Datang Kembali</CardTitle>
            <CardDescription>
              Silakan masuk ke akun Medisys Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <Input
                id="email"
                label="Email Address"
                type="email"
                placeholder="contoh@medisys.id"
                iconLeft={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
              <PasswordInput
                id="password"
                label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
              <Button
                variant="solid"
                color="primary"
                type="submit"
                className="w-full mt-10 p-5"
                size="lg"
                isLoading={isLoading}
              >
                Masuk ke Sistem
              </Button>
            </form>
          </CardContent>
        </LoginCard>
      </div>
    </div>
  );
};

export default LoginPage;
