import React from 'react';
import { Card } from '@/presentation/components/ui/card';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/presentation/utils/cn';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  className?: string;
  iconColor?: string;
  iconBgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
  iconColor = 'text-primary-600',
  iconBgColor = 'bg-primary-50',
}) => {
  return (
    <Card shadow="md" withBorder={true} className={cn('p-6', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
          {description && (
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          )}
        </div>
        <div className={cn('rounded-xl p-3', iconBgColor, iconColor)}>
          <Icon size={24} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
