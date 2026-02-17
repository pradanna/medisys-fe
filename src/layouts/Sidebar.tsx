import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  Stethoscope,
  Pill,
  CreditCard,
  FileText,
  Activity,
  type LucideIcon,
} from "lucide-react";

// Definisi tipe data untuk menu
interface MenuItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const Sidebar = () => {
  const location = useLocation();

  const menus: MenuItem[] = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Pendaftaran", path: "/pendaftaran", icon: UserPlus },
    { name: "Poliklinik", path: "/poli", icon: Stethoscope },
    { name: "Farmasi", path: "/farmasi", icon: Pill },
    { name: "Kasir", path: "/kasir", icon: CreditCard },
    { name: "Rekam Medis", path: "/rekam-medis", icon: FileText },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 p-5 flex flex-col z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
          <Activity size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-text-heading">Medisys</h1>
          <p className="text-xs text-slate-400 font-medium">Hospital System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 flex-1">
        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Main Menu
        </p>

        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;
          const Icon = menu.icon;

          return (
            <Link
              key={menu.path}
              to={menu.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm
                ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-500 hover:bg-slate-50 hover:text-primary"
                }
              `}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile Kecil */}
      <div className="mt-auto pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=Admin+Medisys&background=random"
              alt="Admin"
            />
          </div>
          <div className="text-sm">
            <p className="font-bold text-text-heading">Dr. Admin</p>
            <p className="text-xs text-slate-400">Kepala IT</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
