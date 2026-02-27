import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  UserPlus,
  Stethoscope,
  Bed,
  Activity,
  FlaskConical,
  Scan,
  Pill,
  CreditCard,
  Package,
  FileBarChart,
  ChevronDown,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  children?: NavItem[];
}

interface NavGroup {
  groupTitle: string;
  items: NavItem[];
}

const navItems: NavGroup[] = [
  {
    groupTitle: 'Main',
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { title: 'Pendaftaran', href: '/registration', icon: UserPlus },
    ],
  },
  {
    groupTitle: 'Clinical',
    items: [
      { title: 'Rawat Jalan', href: '/outpatient', icon: Stethoscope },
      { title: 'Rawat Inap', href: '/inpatient', icon: Bed },
      { title: 'IGD', href: '/emergency', icon: Activity },
    ],
  },
  {
    groupTitle: 'Support',
    items: [
      { title: 'Laboratorium', href: '/laboratory', icon: FlaskConical },
      { title: 'Radiologi', href: '/radiology', icon: Scan },
      { title: 'Apotek', href: '/pharmacy', icon: Pill },
    ],
  },
  {
    groupTitle: 'Administrative',
    items: [
      { title: 'Kasir', href: '/cashier', icon: CreditCard },
      { title: 'Inventory', href: '/inventory', icon: Package },
      { title: 'Laporan', href: '/reports', icon: FileBarChart },
    ],
  },
];

interface AppSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const AppSidebar = ({
  collapsed,
  mobileOpen,
  setMobileOpen,
}: AppSidebarProps) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const location = useLocation();

  const toggleSubMenu = (title: string) => {
    setExpandedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-dvh bg-white border-r border-slate-200 z-40 transition-all duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } ${collapsed ? 'w-20' : 'w-72'}`}
      >
        {/* Logo Section */}
        <div
          className={`h-16 flex items-center border-b border-slate-100 ${
            collapsed ? 'justify-center px-0' : 'px-6'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-xl text-[#5a66d2]">
            <div className="w-8 h-8 bg-[#5a66d2] rounded-lg flex items-center justify-center text-white shrink-0">
              M
            </div>
            {!collapsed && <span>Medisys</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-6 overflow-y-auto h-[calc(100dvh-4rem)] scrollbar-thin">
          {navItems.map((group) => (
            <div key={group.groupTitle}>
              {!collapsed && (
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                  {group.groupTitle}
                </h3>
              )}
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const active = isActive(item.href);
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedMenus.includes(item.title);

                  return (
                    <li key={item.title}>
                      {hasChildren ? (
                        <div>
                          <button
                            onClick={() => toggleSubMenu(item.title)}
                            className={`w-full flex items-center ${
                              collapsed ? 'justify-center' : 'justify-between'
                            } px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              active
                                ? 'bg-[#5a66d2] text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-[#5a66d2]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <item.icon size={20} />
                              {!collapsed && <span>{item.title}</span>}
                            </div>
                            {!collapsed &&
                              (isExpanded ? (
                                <ChevronDown size={16} />
                              ) : (
                                <ChevronRight size={16} />
                              ))}
                          </button>
                          {isExpanded && !collapsed && (
                            <ul className="mt-1 ml-4 space-y-1 border-l border-slate-200 pl-2">
                              {item.children!.map((child) => (
                                <li key={child.title}>
                                  <Link
                                    to={child.href}
                                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                      isActive(child.href)
                                        ? 'text-[#5a66d2] bg-slate-50'
                                        : 'text-slate-500 hover:text-[#5a66d2]'
                                    }`}
                                  >
                                    {child.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center ${
                            collapsed ? 'justify-center' : 'gap-3'
                          } px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            active
                              ? 'bg-[#5a66d2] text-white'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-[#5a66d2]'
                          }`}
                        >
                          <item.icon size={20} />
                          {!collapsed && <span>{item.title}</span>}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;
