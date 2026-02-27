// c:\PROJECT\WEBSITE\medisys-fe\src\presentation\components\shared\main\AppMainLayout.tsx
import React, { useState } from 'react';
import AppNavbar from '@/presentation/components/shared/navbar/AppNavbar';
import AppSidebar from '@/presentation/components/shared/sidebar/AppSidebar';

interface AppMainLayoutProps {
  children: React.ReactNode;
  withPadding?: boolean;
}

const AppMainLayout: React.FC<AppMainLayoutProps> = ({
  children,
  withPadding = true,
}) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden bg-slate-50">
      {/* Sidebar Fixed Left */}
      <AppSidebar
        collapsed={isSidebarCollapsed}
        mobileOpen={isMobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Navbar Fixed Top */}
      <AppNavbar
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)}
        onToggleMobileSidebar={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* Main Content Area */}
      {/* pt-16 untuk kompensasi tinggi navbar */}
      {/* lg:pl-72 untuk kompensasi lebar sidebar di desktop */}
      <main
        className={`h-full overflow-y-auto pt-16 transition-all duration-300 ${
          isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'
        }`}
      >
        <div className={withPadding ? 'p-8' : undefined}>{children}</div>
      </main>
    </div>
  );
};

export default AppMainLayout;
