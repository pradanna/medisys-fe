import React from 'react';
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
import { Textfield } from '@/presentation/components/ui/textfield';
import { Button } from '@/presentation/components/ui/button';
import NotificationDropdown from './components/NotificationDropdown';
import SystemClock from './components/SystemClock';
import ProfileDropdown from './components/ProfileDropdown';

interface AppNavbarProps {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onToggleMobileSidebar: () => void;
}

const AppNavbar = ({
  isSidebarCollapsed,
  onToggleSidebar,
  onToggleMobileSidebar,
}: AppNavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 bg-white border-b border-slate-200 shadow-sm transition-all duration-300 z-30 flex items-center justify-between px-4 ${
        isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onToggleMobileSidebar}
        >
          <Menu className="text-slate-600" />
        </Button>

        {/* Desktop Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex text-slate-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
          onClick={onToggleSidebar}
        >
          {isSidebarCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </Button>

        <div className="hidden md:block w-64">
          <Textfield
            placeholder="Cari Apapun disini..."
            prefixIcon={FiSearch}
            className="bg-slate-50 border-slate-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <SystemClock />
        <NotificationDropdown />
        <div className="h-6 w-px bg-slate-200 mx-1" />
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default AppNavbar;
