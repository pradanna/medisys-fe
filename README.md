# Medisys — Frontend

Aplikasi frontend untuk sistem informasi manajemen rumah sakit (Medisys), dibangun menggunakan **React 19**, **TypeScript**, dan **Vite** dengan pola arsitektur **Clean Architecture**.

---

## Daftar Isi

- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Arsitektur Project](#arsitektur-project)
- [Struktur Direktori](#struktur-direktori)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Konfigurasi Environment](#konfigurasi-environment)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Script yang Tersedia](#script-yang-tersedia)
- [Panduan Pengembangan](#panduan-pengembangan)
- [Komponen Reusable](#komponen-reusable)
- [Storybook](#storybook)
- [Konvensi Kode](#konvensi-kode)

---

## Teknologi yang Digunakan

### Core

| Teknologi       | Versi | Keterangan              |
| --------------- | ----- | ----------------------- |
| React           | 19.x  | UI framework            |
| TypeScript      | ~5.9  | Type safety             |
| Vite (Rolldown) | 7.x   | Build tool & dev server |
| React Router    | 7.x   | Client-side routing     |

### State & Data Fetching

| Teknologi            | Versi | Keterangan                   |
| -------------------- | ----- | ---------------------------- |
| TanStack React Query | 5.x   | Server state & data fetching |
| React Hook Form      | 7.x   | Form state management        |
| Zod                  | 4.x   | Schema validation            |
| Axios                | 1.x   | HTTP client                  |

### UI & Styling

| Teknologi                | Versi | Keterangan                  |
| ------------------------ | ----- | --------------------------- |
| Tailwind CSS             | 4.x   | Utility-first CSS framework |
| Class Variance Authority | 0.7.x | Manajemen varian komponen   |
| Motion                   | 12.x  | Animasi                     |
| React Icons              | 5.x   | Library ikon SVG            |

### Developer Tools

| Teknologi   | Keterangan                        |
| ----------- | --------------------------------- |
| ESLint 9    | Linting dengan TypeScript support |
| Prettier 3  | Code formatter                    |
| Husky       | Git hooks                         |
| Lint-staged | Pre-commit linting otomatis       |
| Storybook   | UI component explorer & testing   |

---

## Arsitektur Project

Project ini menerapkan **Clean Architecture** dengan tiga lapisan utama yang saling terpisah secara tanggung jawab:

```
┌─────────────────────────────────────────┐
│           Presentation Layer            │
│  (Components, Pages, Hooks, Router)     │
└───────────────────┬─────────────────────┘
                    │ depends on
┌───────────────────▼─────────────────────┐
│           Infrastructure Layer          │
│  (API, Repository Impl, Mappers, DTO)   │
└───────────────────┬─────────────────────┘
                    │ depends on
┌───────────────────▼─────────────────────┐
│              Core Layer                 │
│  (Entities, Interfaces, Services)       │
└─────────────────────────────────────────┘
```

### Alur Data (Contoh: Login)

```
LoginPage
  └─▶ useLogin (custom hook)
        └─▶ useMutation [React Query]
              └─▶ AuthService (business logic)
                    └─▶ ApiAuthRepository (implementasi HTTP)
                          └─▶ Axios Instance
                                ├─▶ Request Interceptor (tambah Bearer token)
                                └─▶ Response Interceptor (handle 401 / refresh token)
```

### Repository Pattern

Setiap domain mengikuti pola berikut:

```
core/repositories/AuthRepository.ts          ← Interface (kontrak)
infrastructure/repositories/ApiAuthRepository.ts ← Implementasi HTTP
infrastructure/mappers/AuthMapper.ts         ← Konversi Entity ↔ DTO
infrastructure/providers/authProvider.ts     ← Dependency Injection
```

---

## Struktur Direktori

```
medisys-fe/
├── public/                        # Aset statis
├── src/
│   ├── core/                      # Lapisan domain (bebas framework)
│   │   ├── entities/              # Model domain
│   │   ├── repositories/          # Interface repository
│   │   ├── schemas/               # Schema request/input
│   │   ├── services/              # Business service
│   │   └── utils/                 # Utilitas domain (pagination, dll)
│   │
│   ├── infrastructure/            # Lapisan implementasi
│   │   ├── dto/                   # Data Transfer Object API
│   │   ├── mappers/               # Pemetaan Entity ↔ DTO
│   │   ├── providers/             # Dependency injection
│   │   ├── repositories/          # Implementasi repository
│   │   ├── sources/
│   │   │   ├── api/               # Konfigurasi Axios & interceptor
│   │   │   └── storage/           # Abstraksi localStorage
│   │   ├── utils/                 # Utilitas (error handling)
│   │   └── validators/            # Schema validasi Zod
│   │
│   ├── presentation/              # Lapisan UI
│   │   ├── components/
│   │   │   ├── shared/            # Komponen reusable
│   │   │   └── ui/                # Komponen UI dasar
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── layouts/               # Layout komponen
│   │   ├── pages/
│   │   │   ├── app/               # Halaman terautentikasi
│   │   │   │   ├── dashboard/
│   │   │   │   └── master-data/
│   │   │   └── auth/              # Halaman autentikasi
│   │   └── router/                # Konfigurasi React Router
│   │
│   ├── main.tsx                   # Entry point aplikasi
│   └── index.css                  # Global styles & Tailwind theme
│
├── .storybook/                    # Konfigurasi Storybook
│   ├── main.ts                    # Entry addon & framework
│   └── preview.ts                 # Global decorator & CSS import
├── .env.example                   # Contoh konfigurasi environment
├── vite.config.ts
├── tsconfig.app.json
├── eslint.config.js
└── prettier.config.json
```

---

## Prasyarat

Pastikan sistem kamu sudah terpasang:

- **Node.js** versi `>=20.x`
- **npm** versi `>=10.x` atau **pnpm** / **yarn**

---

## Instalasi

```bash
# Clone repository
git clone <url-repository> medisys-fe
cd medisys-fe

# Install dependencies
npm install
```

---

## Konfigurasi Environment

Salin file `.env.example` menjadi `.env`, lalu sesuaikan nilainya:

```bash
cp .env.example .env
```

Variabel environment yang diperlukan:

```env
# URL base API backend
VITE_API_URL=http://localhost:8000/api
```

> Semua variabel environment yang diekspos ke browser **harus** diawali dengan `VITE_`.

---

## Menjalankan Aplikasi

```bash
# Mode development (dev server di port 3000)
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

---

## Script yang Tersedia

| Script            | Perintah                | Keterangan                                     |
| ----------------- | ----------------------- | ---------------------------------------------- |
| `dev`             | `vite`                  | Jalankan dev server dengan HMR                 |
| `build`           | `tsc -b && vite build`  | Type check lalu build production               |
| `lint`            | `eslint .`              | Jalankan ESLint                                |
| `preview`         | `vite preview`          | Preview build production secara lokal          |
| `prepare`         | `husky`                 | Setup Git hooks (auto dijalankan saat install) |
| `storybook`       | `storybook dev -p 6006` | Jalankan Storybook di port 6006                |
| `build-storybook` | `storybook build`       | Build Storybook menjadi static site            |

---

## Panduan Pengembangan

### Menambah Fitur Baru

Ikuti urutan lapisan berikut saat menambah fitur:

1. **Core Layer** — Definisikan entity, interface repository, dan service
2. **Infrastructure Layer** — Implementasikan repository, buat DTO dan mapper
3. **Presentation Layer** — Buat custom hook, komponen, dan halaman

### Menambah Halaman Baru

```
src/
├── core/
│   ├── entities/nama-fitur.entity.ts
│   ├── repositories/nama-fitur.repository.ts
│   └── services/nama-fitur.service.ts
├── infrastructure/
│   ├── dto/nama-fitur.dto.ts
│   ├── mappers/nama-fitur.mapper.ts
│   ├── repositories/api-nama-fitur.repository.ts
│   └── providers/nama-fitur.provider.ts
└── presentation/
    ├── hooks/nama-fitur/use-nama-fitur.ts
    └── pages/app/nama-fitur/nama-fitur.page.tsx
```

### Validasi Form

Validasi menggunakan **Zod** yang diintegrasikan dengan **React Hook Form**:

```typescript
// infrastructure/validators/nama-fitur.validator.ts
import { z } from 'zod';

export const namaFiturSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
});

export type NamaFiturSchema = z.infer<typeof namaFiturSchema>;
```

### Pemanggilan API

Gunakan `useMutation` atau `useQuery` dari React Query di dalam custom hook:

```typescript
// presentation/hooks/nama-fitur/use-nama-fitur.ts
import { useMutation } from '@tanstack/react-query';
import { namaFiturService } from '@/infrastructure/providers/nama-fitur.provider';

export const useNamaFitur = () => {
  return useMutation({
    mutationFn: (data: NamaFiturSchema) => namaFiturService.create(data),
  });
};
```

---

## Komponen Reusable

Komponen UI dasar (atom) ditempatkan di `src/presentation/components/ui/` dengan struktur satu folder per komponen.

### Struktur Folder

```
src/presentation/components/ui/
└── button/
    ├── Button.tsx              # Komponen utama
    ├── button.variants.ts      # Definisi varian CVA
    └── Button.stories.tsx      # Story Storybook (co-located)
```

### Membuat Komponen Baru

**1. Buat file varian dengan Class Variance Authority (CVA)**

```typescript
// src/presentation/components/ui/nama-komponen/nama-komponen.variants.ts
import { cva } from 'class-variance-authority';

export const namaKomponenVariants = cva('base-class-tailwind-di-sini', {
  variants: {
    variant: {
      primary: 'bg-primary-500 text-white',
      accent: 'bg-accent-500 text-black',
    },
    size: {
      large: 'px-4 py-3 text-md',
      normal: 'px-3 py-2 text-sm',
      small: 'px-2 py-1 text-xs',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'normal',
  },
});
```

**2. Buat komponen React**

```typescript
// src/presentation/components/ui/nama-komponen/NamaKomponen.tsx
import React from 'react';
import { cn } from '@/presentation/utils/cn';
import { namaKomponenVariants } from './nama-komponen.variants';
import type { VariantProps } from 'class-variance-authority';

interface NamaKomponenProps extends VariantProps<typeof namaKomponenVariants> {
  // tambah props spesifik di sini
}

const NamaKomponen: React.FC<NamaKomponenProps> = ({
  variant = 'primary',
  size = 'normal',
}) => {
  return (
    <div className={cn(namaKomponenVariants({ variant, size }))}>
      {/* konten komponen */}
    </div>
  );
};

export default NamaKomponen;
```

> `cn()` adalah helper dari `class-variance-authority` + `tailwind-merge` untuk menggabungkan class Tailwind tanpa konflik.

---

## Storybook

Storybook digunakan untuk mengembangkan, mendokumentasikan, dan menguji komponen UI secara terisolasi.

### Menjalankan Storybook

```bash
# Jalankan Storybook di http://localhost:6006
npm run storybook

# Build Storybook menjadi static site
npm run build-storybook
```

### Membuat Story

File story ditempatkan **co-located** di folder yang sama dengan komponen (`NamaKomponen.stories.tsx`).

**Struktur dasar story:**

```typescript
// src/presentation/components/ui/nama-komponen/NamaKomponen.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import NamaKomponen from './NamaKomponen';

const meta = {
  title: 'UI/NamaKomponen', // Grup/Nama di sidebar Storybook
  component: NamaKomponen,
  parameters: {
    layout: 'centered', // 'centered' | 'fullscreen' | 'padded'
  },
  tags: ['autodocs'], // Generate halaman docs otomatis
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent'],
    },
  },
  args: {
    onClick: fn(), // Spy fungsi untuk Actions panel
  },
} satisfies Meta<typeof NamaKomponen>;

export default meta;
type Story = StoryObj<typeof meta>;

// Setiap export = satu story/tampilan di sidebar
export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
  },
};
```

### Pengelompokan Story

Gunakan separator `/` pada `title` untuk membuat hierarki di sidebar:

| `title`           | Tampilan di Sidebar |
| ----------------- | ------------------- |
| `'UI/Button'`     | UI → Button         |
| `'UI/Form/Input'` | UI → Form → Input   |
| `'Shared/Modal'`  | Shared → Modal      |

### Konvensi Penamaan Story

| Story          | Kapan Digunakan                             |
| -------------- | ------------------------------------------- |
| `Default`      | Tampilan default komponen                   |
| `Variant/Nama` | Setiap varian visual (Primary, Accent, dll) |
| `Size/Nama`    | Setiap ukuran (Large, Normal, Small)        |
| `State/Nama`   | State khusus (Disabled, Loading, Error)     |
| `Icon/Nama`    | Kombinasi dengan ikon                       |
| `Playground`   | Story interaktif dengan semua kontrol aktif |

---

## Konvensi Kode

### Penamaan File

| Jenis                | Konvensi                   | Contoh                       |
| -------------------- | -------------------------- | ---------------------------- |
| Komponen React       | `kebab-case.tsx`           | `hospital-unit.page.tsx`     |
| Custom Hook          | `use-kebab-case.ts`        | `use-login.ts`               |
| Entity               | `kebab-case.entity.ts`     | `user-credentials.entity.ts` |
| Repository Interface | `kebab-case.repository.ts` | `auth.repository.ts`         |
| DTO                  | `kebab-case.dto.ts`        | `login.dto.ts`               |
| Mapper               | `kebab-case.mapper.ts`     | `auth.mapper.ts`             |
| Validator            | `kebab-case.validator.ts`  | `login.validator.ts`         |
| Story Storybook      | `NamaKomponen.stories.tsx` | `Button.stories.tsx`         |

### Path Alias

Gunakan alias `@/` untuk import dari direktori `src/`:

```typescript
// Benar
import { authService } from '@/infrastructure/providers/auth.provider';

// Hindari
import { authService } from '../../../infrastructure/providers/auth.provider';
```

### Kualitas Kode

Pre-commit hook akan otomatis menjalankan:

- `eslint --fix` — Perbaiki masalah linting
- `prettier --write` — Format kode

Pastikan kode lolos linting sebelum commit dengan menjalankan:

```bash
npm run lint
```
