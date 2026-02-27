import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, ChevronDown } from 'lucide-react';
import { Button } from '@/presentation/components/ui/button';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 hover:bg-slate-50 transition-colors"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <User size={16} />
        </div>
        <span className="text-sm font-medium text-slate-700 hidden md:block">
          Dr. Sarah
        </span>
        <ChevronDown size={14} className="text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-slate-100 bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="px-4 py-3 border-b border-slate-100 mb-2">
            <p className="text-sm font-medium text-slate-900">Sarah Connor</p>
            <p className="text-xs text-slate-500 truncate">
              sarah.connor@medisys.com
            </p>
          </div>

          <div className="px-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut size={16} className="mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
