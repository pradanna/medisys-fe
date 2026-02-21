import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { FiPlus, FiSearch, FiDownload, FiTrash2 } from 'react-icons/fi';
import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent'],
      description: 'Variant warna button',
    },
    size: {
      control: 'select',
      options: ['large', 'normal', 'small'],
      description: 'Ukuran button',
    },
    text: {
      control: 'text',
      description: 'Label teks button',
    },
    loadingText: {
      control: 'text',
      description: 'Teks saat loading',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan button',
    },
    loading: {
      control: 'boolean',
      description: 'Tampilkan state loading',
    },
  },
  args: {
    onClick: fn(),
    text: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Variant ---

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    size: 'normal',
    text: 'Primary Button',
  },
};

export const Accent: Story = {
  name: 'Accent',
  args: {
    variant: 'accent',
    size: 'normal',
    text: 'Accent Button',
  },
};

// --- Size ---

export const SizeLarge: Story = {
  name: 'Size / Large',
  args: {
    size: 'large',
    text: 'Large Button',
  },
};

export const SizeNormal: Story = {
  name: 'Size / Normal',
  args: {
    size: 'normal',
    text: 'Normal Button',
  },
};

export const SizeSmall: Story = {
  name: 'Size / Small',
  args: {
    size: 'small',
    text: 'Small Button',
  },
};

// --- State ---

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  name: 'State / Loading',
  args: {
    text: 'Submit',
    loading: true,
    loadingText: 'Loading...',
  },
};

export const LoadingAccent: Story = {
  name: 'State / Loading Accent',
  args: {
    variant: 'accent',
    text: 'Submit',
    loading: true,
    loadingText: 'Menyimpan...',
  },
};

// --- With Icon ---

export const WithIconLeft: Story = {
  name: 'Icon / With Icon',
  args: {
    text: 'Tambah Data',
    icon: FiPlus,
  },
};

export const WithIconSearch: Story = {
  name: 'Icon / Search',
  args: {
    text: 'Cari',
    icon: FiSearch,
    variant: 'accent',
  },
};

export const WithIconDownload: Story = {
  name: 'Icon / Download',
  args: {
    text: 'Unduh',
    icon: FiDownload,
    size: 'large',
  },
};

export const WithIconDelete: Story = {
  name: 'Icon / Delete',
  args: {
    text: 'Hapus',
    icon: FiTrash2,
    variant: 'accent',
    size: 'small',
  },
};

// --- Playground ---

export const Playground: Story = {
  name: 'Playground',
  args: {
    text: 'Click Me',
    variant: 'primary',
    size: 'normal',
    disabled: false,
    loading: false,
    loadingText: 'Loading...',
  },
};
