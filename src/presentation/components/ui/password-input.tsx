import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff, Key, Lock, type LucideProps } from 'lucide-react';
import { Input, type InputProps } from './input';

export interface PasswordInputProps extends Omit<
  InputProps,
  'type' | 'iconRight'
> {}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    // Wrapper component to handle the toggle button logic within the icon slot.
    // It matches the LucideIcon signature expected by the Input component.
    const ToggleIcon = ({ className, ...iconProps }: LucideProps) => {
      // The Input component applies 'pointer-events-none' to icons by default.
      // We need to remove it to make the button interactive, while keeping
      // the positioning classes (e.g., absolute, right-3).
      const interactiveClassName = (className || '')
        .replace('pointer-events-none', '')
        .trim();

      const Icon = showPassword ? Eye : EyeOff;

      return (
        <button
          type="button"
          onClick={toggleVisibility}
          className={`${interactiveClassName} cursor-pointer text-slate-400 hover:text-primary transition-colors focus:outline-none focus:text-primary`}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <Icon {...iconProps} />
        </button>
      );
    };

    return (
      <Input
        {...props}
        ref={ref}
        iconLeft={Lock}
        type={showPassword ? 'text' : 'password'}
        toggleIcon={<ToggleIcon />}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
