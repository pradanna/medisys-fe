import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex items-center justify-center px-3 py-2.5 cursor-pointer transition-color ease-in-out duration-300',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-button-primary border border border-primary-500 hover:bg-primary-600 hover:border-primary-600',
        accent:
          'bg-accent-500 text-button-accent border border-accent-500 hover:bg-accent-600 hover:border-accent-600',
      },
      size: {
        large: 'gap-1.5 px-4 py-3 text-md rounded-md',
        normal: 'gap-1.5 px-3 py-2 text-sm rounded-sm',
        small: 'gap-0.75 px-2.5 py-1.5 text-xs rounded-sm',
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-300 border-gray-300 text-gray-500',
      },
      loading: {
        true: 'cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        loading: true,
        disabled: true,
        variant: 'primary',
        class:
          'cursor-not-allowed bg-primary-600 text-button-primary hover:bg-primary-600',
      },
      {
        loading: true,
        disabled: true,
        variant: 'accent',
        class:
          'cursor-not-allowed bg-accent-600 text-button-accent hover:bg-accent-600',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
      disabled: false,
    },
  }
);
