import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  // Base Class: Style yang selalu ada
  'flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 font-medium outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // --- SOLID VARIANTS ---
        primary:
          'bg-primary-500 text-white border border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-500/50',
        accent:
          'bg-accent-500 text-white border border-accent-500 hover:bg-accent-600 hover:border-accent-600 focus:ring-accent-500/50',
        danger:
          'bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-red-500/50',
        success:
          'bg-emerald-500 text-white border border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 focus:ring-emerald-500/50',
        warning:
          'bg-orange-500 text-white border border-orange-500 hover:bg-orange-600 hover:border-orange-600 focus:ring-orange-500/50',

        // --- OUTLINED VARIANTS ---
        'primary-outlined':
          'bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500/50',
        'accent-outlined':
          'bg-transparent text-accent-500 border border-accent-500 hover:bg-accent-50 focus:ring-accent-500/50',
        'danger-outlined':
          'bg-transparent text-red-500 border border-red-500 hover:bg-red-50 focus:ring-red-500/50',
        'success-outlined':
          'bg-transparent text-red-500 border border-emerald-500 hover:bg-emerald-50 focus:ring-emerald-500/50',
        'warning-outlined':
          'bg-transparent text-red-500 border border-orange-500 hover:bg-orange-50 focus:ring-orange-500/50',

        // --- GHOST / TEXT ---
        ghost:
          'bg-transparent text-gray-600 hover:bg-gray-100 border-transparent',
      },
      size: {
        large: 'gap-2 px-6 py-3 text-base rounded-xl',
        normal: 'gap-1.5 px-4 py-2.5 text-sm rounded-lg',
        small: 'gap-1 px-3 py-1.5 text-xs rounded-md',
        icon: 'p-2.5 rounded-lg', // Khusus button yang hanya berisi icon
      },
      // Loading state di sini hanya untuk mengubah cursor
      loading: {
        true: 'cursor-wait opacity-80',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
      loading: false,
    },
  }
);
