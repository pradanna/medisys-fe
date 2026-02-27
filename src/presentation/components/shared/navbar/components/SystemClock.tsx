import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const SystemClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="hidden items-center gap-4 rounded-lg bg-slate-100/80 px-3 py-1.5 text-sm text-slate-600 lg:flex">
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-slate-400" />
        <span className="font-medium">{formatDate(currentTime)}</span>
      </div>
      <div className="h-4 w-px bg-slate-200" />
      <span className="font-mono font-medium tracking-wider">
        {currentTime.toLocaleTimeString('id-ID')}
      </span>
    </div>
  );
};

export default SystemClock;
