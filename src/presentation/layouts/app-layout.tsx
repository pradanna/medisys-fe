import { Outlet } from 'react-router-dom';
import { AppSidebar } from '@/presentation/components/shared/sidebar';
import { AppNavbar } from '@/presentation/components/shared/navbar';

export default function AppLayout() {
  return (
    <main>
      <div className="w-full h-dvh">
        <AppSidebar />
        <AppNavbar />
        <section className="ps-72 pt-16 bg-[#F8FAFC]">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
