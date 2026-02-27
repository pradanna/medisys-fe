import React from 'react';
import {
  containerVariants,
  textfieldVariants,
  iconVariants,
} from './textfield.variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';
import type { IconType } from 'react-icons';

type ContainerVariants = VariantProps<typeof containerVariants>;
type TextfieldVariants = VariantProps<typeof textfieldVariants>;

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputSize?: TextfieldVariants['size'];
  isError?: ContainerVariants['error'];
  disabled?: boolean;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
}
const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      inputSize,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      isError = false,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          containerVariants({
            error: isError,
            disabled,
          }),
          className
        )}
      >
        {PrefixIcon && (
          <div className="h-full px-2">
            {
              <PrefixIcon
                className={cn(
                  iconVariants({ size: inputSize, error: isError })
                )}
                size={14}
              />
            }
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            textfieldVariants({
              size: inputSize,
              hasPrefixIcon: !!PrefixIcon,
              hasSuffixIcon: !!SuffixIcon,
            })
          )}
          disabled={disabled}
          {...props}
        />
        {SuffixIcon && (
          <div className="h-full px-2">
            {
              <SuffixIcon
                className={cn(
                  iconVariants({ size: inputSize, error: isError })
                )}
                size={14}
              />
            }
          </div>
        )}
      </div>
    );
  }
);

export default Textfield;
