import React from 'react';
import FormLogin from './components/form-login';
import bgLogin from '@/assets/images/local/bg-login.png';

/**
 * Halaman login yang menampilkan form di tengah dengan latar belakang
 * gambar rumah sakit yang blur dan gelap.
 */
export const LoginPage: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10 blur-sm">
        <img
          src={bgLogin}
          alt="Latar belakang lobi rumah sakit"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-950/80" />

      <FormLogin />
    </div>
  );
};

export default LoginPage;
