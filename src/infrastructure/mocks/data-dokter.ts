export interface Dokter {
  id: number;
  name: string;
  specialty_id: number;
  status: 'duty' | 'leave';
  photo_url: string;
}

export const mockDokter: Dokter[] = [
  {
    id: 1,
    name: 'Dr. Budi Santoso',
    specialty_id: 4,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=1',
  },
  {
    id: 2,
    name: 'Dr. Anisa Fitriani',
    specialty_id: 1,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=2',
  },
  {
    id: 3,
    name: 'Dr. Chandra Wijaya',
    specialty_id: 3,
    status: 'leave',
    photo_url: 'https://i.pravatar.cc/150?u=3',
  },
  {
    id: 4,
    name: 'Dr. Dewi Lestari',
    specialty_id: 5,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=4',
  },
  {
    id: 5,
    name: 'Dr. Eko Prasetyo',
    specialty_id: 6,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=5',
  },
  {
    id: 6,
    name: 'Dr. Fajar Nugroho',
    specialty_id: 2,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=6',
  },
  {
    id: 7,
    name: 'Dr. Gita Permata',
    specialty_id: 1,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=7',
  },
  {
    id: 8,
    name: 'Dr. Heru Wibowo',
    specialty_id: 4,
    status: 'leave',
    photo_url: 'https://i.pravatar.cc/150?u=8',
  },
  {
    id: 9,
    name: 'Dr. Indah Cahyani',
    specialty_id: 3,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=9',
  },
  {
    id: 10,
    name: 'Dr. Joko Susilo',
    specialty_id: 6,
    status: 'duty',
    photo_url: 'https://i.pravatar.cc/150?u=10',
  },
];
