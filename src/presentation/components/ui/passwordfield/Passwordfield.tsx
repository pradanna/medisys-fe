import React, { useState, type HTMLInputTypeAttribute } from 'react';
import {
  containerVariants,
  passwordfieldVariants,
  iconVariants,
} from './passwordfield.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';
import type { IconType } from 'react-icons';
import { LuEye, LuEyeOff } from 'react-icons/lu';

type ContainerVariants = VariantProps<typeof containerVariants>;
type PasswordfieldVariants = VariantProps<typeof passwordfieldVariants>;

interface PasswordfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputSize?: PasswordfieldVariants['size'];
  isError?: ContainerVariants['isError'];
  disabled?: boolean;
  prefixIcon?: IconType;
}

const Passwordfield = React.forwardRef<HTMLInputElement, PasswordfieldProps>(
  (
    {
      inputSize,
      isError = false,
      disabled = false,
      prefixIcon: PrefixIcon,
      className = '',
      ...props
    },
    ref
  ) => {
    const [type, setType] = useState<HTMLInputTypeAttribute>('password');

    const handleChangeType = () => {
      if (!disabled) {
        setType((prev) => (prev === 'password' ? 'text' : 'password'));
      }
    };
    return (
      <div
        className={cn(
          containerVariants({
            isError,
            disabled,
          }),
          className
        )}
      >
        {PrefixIcon && (
          <div className="h-full px-2">
            {
              <PrefixIcon
                className={cn(iconVariants({ size: inputSize, isError }))}
                size={14}
              />
            }
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            passwordfieldVariants({
              size: inputSize,
              hasPrefixIcon: !!PrefixIcon,
            })
          )}
          disabled={disabled}
          {...props}
        />
        <div className="h-full px-2 cursor-pointer" onClick={handleChangeType}>
          {type === 'password' ? (
            <LuEye
              className={cn(iconVariants({ size: inputSize, isError }))}
              size={14}
            />
          ) : (
            <LuEyeOff
              className={cn(iconVariants({ size: inputSize, isError }))}
              size={14}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Passwordfield;
