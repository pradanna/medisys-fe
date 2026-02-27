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
      options: [
        'primary',
        'accent',
        'danger',
        'success',
        'warning',
        'primary-outlined',
        'accent-outlined',
        'danger-outlined',
        'success-outlined',
        'warning-outlined',
        'ghost',
      ],
      description: 'Variant warna button',
    },
    size: {
      control: 'select',
      options: ['large', 'normal', 'small', 'icon'],
      description: 'Ukuran button',
    },
    children: {
      control: 'text',
      description: 'Konten button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Tampilkan state loading',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan button',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
    variant: 'primary',
    size: 'normal',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Variant ---

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Accent: Story = {
  name: 'Accent',
  args: {
    variant: 'accent',
    children: 'Accent Button',
  },
};

export const Danger: Story = {
  name: 'Danger',
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Success: Story = {
  name: 'Success',
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Warning: Story = {
  name: 'Warning',
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const PrimaryOutlined: Story = {
  name: 'Primary Outlined',
  args: {
    variant: 'primary-outlined',
    children: 'Primary Outlined',
  },
};

export const Ghost: Story = {
  name: 'Ghost',
  args: {
    variant: 'ghost',
  },
};

// --- Size ---

export const SizeLarge: Story = {
  name: 'Size / Large',
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const SizeNormal: Story = {
  name: 'Size / Normal',
  args: {
    size: 'normal',
    children: 'Normal Button',
  },
};

export const SizeSmall: Story = {
  name: 'Size / Small',
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

// --- State ---

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  name: 'State / Loading',
  args: {
    children: 'Please wait',
    isLoading: true,
  },
};

// --- With Icon ---

export const WithIconLeft: Story = {
  name: 'Icon / With Icon',
  args: {
    children: (
      <>
        <FiPlus className="mr-2" /> Tambah Data
      </>
    ),
  },
};

export const WithIconSearch: Story = {
  name: 'Icon / Search',
  args: {
    variant: 'accent',
    children: (
      <>
        <FiSearch className="mr-2" /> Cari
      </>
    ),
  },
};

export const WithIconDownload: Story = {
  name: 'Icon / Download',
  args: {
    size: 'large',
    children: (
      <>
        <FiDownload className="mr-2" /> Unduh
      </>
    ),
  },
};

export const WithIconDelete: Story = {
  name: 'Icon / Delete',
  args: {
    variant: 'danger',
    size: 'small',
    children: (
      <>
        <FiTrash2 className="mr-2" /> Hapus
      </>
    ),
  },
};

// --- Playground ---

export const Playground: Story = {
  name: 'Playground',
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'normal',
    disabled: false,
    isLoading: false,
  },
};
