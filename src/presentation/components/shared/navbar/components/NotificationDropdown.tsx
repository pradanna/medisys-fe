import React, { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/presentation/components/ui/button';

const NotificationDropdown = () => {
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
      <Button
        variant="ghost"
        size="icon"
        className="relative text-slate-500 hover:text-primary-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell size={20} />
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 origin-top-right rounded-xl border border-slate-100 bg-white p-4 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">Notifications</h3>
            <span className="text-xs text-primary-500 hover:underline cursor-pointer">
              Mark all as read
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-primary-500 shrink-0" />
              <div>
                <p className="text-sm text-slate-700">
                  New patient registration
                </p>
                <p className="text-xs text-slate-400">2 minutes ago</p>
              </div>
            </div>
            {/* Mock Empty State if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
