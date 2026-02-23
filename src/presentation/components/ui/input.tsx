import React, { forwardRef, useId } from 'react';
import { type LucideIcon } from 'lucide-react';

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> {
  /**
   * The type of the input. Defaults to 'text'.
   * Note: 'password' is intentionally excluded.
   */
  type?: 'text' | 'email' | 'number' | 'password';
  /**
   * Visual color variant.
   * If `errorMessage` is present, this is overridden to 'danger'.
   */
  variantColor?:
    | 'natural'
    | 'primary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   * Controls the size (padding and font size) of the input.
   */
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Controls the width of the input wrapper.
   */
  inputWidth?: 'hug' | 'fill' | 'fixed';
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  toggleIcon?: React.ReactNode;
  label?: string;
  errorMessage?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      type = 'text',
      variantColor = 'natural',
      inputSize = 'md',
      inputWidth = 'fill',
      iconLeft: IconLeft,
      iconRight: IconRight,
      toggleIcon,
      label,
      errorMessage,
      hint,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const isError = !!errorMessage;
    const effectiveVariant = isError ? 'danger' : variantColor;

    const widthClasses = {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: 'w-64',
    };

    const baseClasses =
      'w-full rounded-xl border outline-none transition-all duration-200 bg-white disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed';

    const sizeConfig = {
      sm: {
        py: 'py-1.5',
        px: 'px-3',
        text: 'text-xs',
        iconSize: 14,
        plIcon: 'pl-9',
        prIcon: 'pr-9',
      },
      md: {
        py: 'py-2.5',
        px: 'px-4',
        text: 'text-sm',
        iconSize: 18,
        plIcon: 'pl-10',
        prIcon: 'pr-10',
      },
      lg: {
        py: 'py-3.5',
        px: 'px-5',
        text: 'text-base',
        iconSize: 20,
        plIcon: 'pl-12',
        prIcon: 'pr-12',
      },
      xl: {
        py: 'py-4',
        px: 'px-6',
        text: 'text-lg',
        iconSize: 24,
        plIcon: 'pl-14',
        prIcon: 'pr-14',
      },
    };

    const currentSize = sizeConfig[inputSize];

    const variantClasses = {
      natural:
        'border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 text-slate-900 placeholder:text-slate-400',
      primary:
        'border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-400',
      accent:
        'border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400',
      success:
        'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-slate-900 placeholder:text-slate-400',
      warning:
        'border-orange-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 placeholder:text-slate-400',
      danger:
        'border-red-500 text-red-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 placeholder:text-red-300',
    };

    const iconColorClass = disabled
      ? 'text-slate-400'
      : isError
        ? 'text-red-500'
        : 'text-slate-500';

    // Construct padding classes dynamically based on icon presence
    const paddingClasses = `${currentSize.py} ${currentSize.text} ${
      IconLeft ? currentSize.plIcon : currentSize.px
    } ${IconRight || toggleIcon ? currentSize.prIcon : ''}`;

    return (
      <div className={`${widthClasses[inputWidth]} flex flex-col`}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-semibold text-sm text-slate-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {IconLeft && (
            <IconLeft
              size={currentSize.iconSize}
              className={`absolute left-3 ${iconColorClass} pointer-events-none`}
            />
          )}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            className={`${baseClasses} ${paddingClasses} ${variantClasses[effectiveVariant]} ${className}`}
            {...props}
          />
          {IconRight && !toggleIcon && (
            <IconRight
              size={currentSize.iconSize}
              className={`absolute right-3 ${iconColorClass} pointer-events-none`}
            />
          )}
          {toggleIcon && (
            <div className="absolute right-3 flex items-center justify-center">
              {toggleIcon}
            </div>
          )}
        </div>
        {errorMessage ? (
          <p className="text-xs text-red-500 mt-1.5">{errorMessage}</p>
        ) : hint ? (
          <p className="text-xs text-slate-500 mt-1.5">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
