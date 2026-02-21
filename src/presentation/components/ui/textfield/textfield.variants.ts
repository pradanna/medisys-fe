import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'group flex items-center border rounded-md transition-color ease-in-out duration-300 overflow-hidden',
  {
    variants: {
      error: {
        true: 'border-red-500',
        false: 'border-gray-400 focus-within:border-gray-500',
      },
      disabled: {
        true: 'bg-neutral-200 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  }
);

export const textfieldVariants = cva(
  'flex-1 outline-none focus:outline-none focus:ring-0 text-gray-700',
  {
    variants: {
      size: {
        large: 'text-md py-3',
        normal: 'text-sm py-2',
        small: 'text-xs py-1.5',
      },
      hasPrefixIcon: {
        true: 'ps-0',
        false: '',
      },
      hasSuffixIcon: {
        true: 'pe-0',
        false: '',
      },
    },
    compoundVariants: [
      { size: 'small', hasPrefixIcon: false, class: 'ps-2' },
      { size: 'normal', hasPrefixIcon: false, class: 'ps-2.5' },
      { size: 'large', hasPrefixIcon: false, class: 'ps-4' },

      { size: 'small', hasSuffixIcon: false, class: 'pe-2' },
      { size: 'normal', hasSuffixIcon: false, class: 'pe-2.5' },
      { size: 'large', hasSuffixIcon: false, class: 'pe-4' },
    ],
    defaultVariants: {
      size: 'normal',
      hasPrefixIcon: false,
      hasSuffixIcon: false,
    },
  }
);

export const iconVariants = cva('aspect-square', {
  variants: {
    size: {
      large: 'h-4',
      normal: 'h-3.5',
      small: 'h-3',
    },
    error: {
      true: 'text-red-500',
      false: 'text-gray-700',
    },
  },
  defaultVariants: {
    size: 'normal',
    error: false,
  },
});
