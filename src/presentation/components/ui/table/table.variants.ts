import { cva } from 'class-variance-authority';

export const tableVariants = cva('w-full text-left text-sm text-slate-600', {
  variants: {
    density: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
    striped: {
      true: '[&_tbody_tr:nth-child(even)]:bg-slate-50/50',
      false: '',
    },
    hoverable: {
      true: '[&_tbody_tr]:transition-colors [&_tbody_tr]:hover:bg-slate-50',
      false: '',
    },
  },
  defaultVariants: {
    density: 'md',
    striped: false,
    hoverable: true,
  },
});

export const thVariants = cva(
  'sticky top-0 z-10 border-b border-slate-200 bg-slate-50/80 font-semibold text-slate-900 backdrop-blur-sm',
  {
    variants: {
      density: { sm: 'px-2 py-2', md: 'px-4 py-3', lg: 'px-6 py-4' },
    },
    defaultVariants: { density: 'md' },
  }
);

export const tdVariants = cva('border-b border-slate-100 align-middle', {
  variants: {
    density: { sm: 'px-2 py-2', md: 'px-4 py-3', lg: 'px-6 py-4' },
  },
  defaultVariants: { density: 'md' },
});
