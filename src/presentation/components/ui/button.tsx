import React from 'react';
import { Loader2, type LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'solid',
  size = 'md',
  color = 'primary',
  iconLeft: IconLeft,
  iconRight: IconRight,
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    'rounded-xl font-medium transition-all duration-200 flex items-center  justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm font-semibold tracking-wide';

  const variantColorStyles = {
    solid: {
      primary:
        'bg-primary-500 text-white hover:opacity-90 border-transparent focus:ring-2 focus:ring-primary/50',
      secondary:
        'bg-secondary-500 text-white hover:opacity-90 border-transparent focus:ring-2 focus:ring-secondary/50',
      success:
        'bg-green-500 text-white hover:bg-green-600 border-transparent focus:ring-2 focus:ring-green-500/50',
      warning:
        'bg-orange-500 text-white hover:bg-orange-600 border-transparent focus:ring-2 focus:ring-orange-500/50',
      danger:
        'bg-red-500 text-white hover:bg-red-600 border-transparent focus:ring-2 focus:ring-red-500/50',
    },
    outline: {
      primary:
        'border border-primary text-primary bg-transparent hover:bg-primary/10 focus:ring-2 focus:ring-primary/50',
      secondary:
        'border border-secondary text-secondary bg-transparent hover:bg-secondary/10 focus:ring-2 focus:ring-secondary/50',
      success:
        'border border-green-500 text-green-600 bg-transparent hover:bg-green-500/10 focus:ring-2 focus:ring-green-500/50',
      warning:
        'border border-orange-500 text-orange-600 bg-transparent hover:bg-orange-500/10 focus:ring-2 focus:ring-orange-500/50',
      danger:
        'border border-red-500 text-red-600 bg-transparent hover:bg-red-500/10 focus:ring-2 focus:ring-red-500/50',
    },
    ghost: {
      primary:
        'text-primary bg-transparent hover:bg-primary/10 border-transparent focus:ring-2 focus:ring-primary/50',
      secondary:
        'text-secondary bg-transparent hover:bg-secondary/10 border-transparent focus:ring-2 focus:ring-secondary/50',
      success:
        'text-green-600 bg-transparent hover:bg-green-500/10 border-transparent focus:ring-2 focus:ring-green-500/50',
      warning:
        'text-orange-600 bg-transparent hover:bg-orange-500/10 border-transparent focus:ring-2 focus:ring-orange-500/50',
      danger:
        'text-red-600 bg-transparent hover:bg-red-500/10 border-transparent focus:ring-2 focus:ring-red-500/50',
    },
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2.5',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const currentIconSize = iconSizes[size];

  return (
    <button
      className={`${baseStyles} ${variantColorStyles[variant][color]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={currentIconSize} />
      ) : IconLeft ? (
        <IconLeft size={currentIconSize} />
      ) : null}

      {children}

      {!isLoading && IconRight && <IconRight size={currentIconSize} />}
    </button>
  );
};
