import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'flex flex-col bg-white overflow-hidden transition-all duration-300 ease-in-out rounded-3xl text-slate-950',
  {
    variants: {
      shadow: {
        none: 'shadow-none',
        md: 'shadow-sm shadow-slate-200/50',
        lg: 'shadow-lg shadow-slate-200/50',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      withBorder: {
        true: 'border border-slate-100',
        false: 'border-0',
      },
      interactive: {
        true: 'cursor-pointer hover:shadow-lg hover:border-primary/20 hover:scale-[1.01]',
        false: '',
      },
    },
    defaultVariants: {
      shadow: 'md',
      size: 'md',
      withBorder: true,
      interactive: false,
    },
  }
);
