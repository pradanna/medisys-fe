export interface Pasien {
  id: number;
  no_rm: string;
  name: string;
  gender: 'L' | 'P';
  insurance: 'BPJS' | 'Mandiri' | 'Private';
}

export const mockPasien: Pasien[] = [
  {
    id: 1,
    no_rm: 'RM-0001',
    name: 'Ahmad Subarjo',
    gender: 'L',
    insurance: 'BPJS',
  },
  {
    id: 2,
    no_rm: 'RM-0002',
    name: 'Siti Aminah',
    gender: 'P',
    insurance: 'Mandiri',
  },
  {
    id: 3,
    no_rm: 'RM-0003',
    name: 'Rina Wati',
    gender: 'P',
    insurance: 'Private',
  },
  {
    id: 4,
    no_rm: 'RM-0004',
    name: 'Bambang Irawan',
    gender: 'L',
    insurance: 'BPJS',
  },
  {
    id: 5,
    no_rm: 'RM-0005',
    name: 'Lia Kartika',
    gender: 'P',
    insurance: 'Mandiri',
  },
  {
    id: 6,
    no_rm: 'RM-0006',
    name: 'Agus Salim',
    gender: 'L',
    insurance: 'BPJS',
  },
  {
    id: 7,
    no_rm: 'RM-0007',
    name: 'Putri Ayu',
    gender: 'P',
    insurance: 'Private',
  },
  {
    id: 8,
    no_rm: 'RM-0008',
    name: 'Dian Permadi',
    gender: 'L',
    insurance: 'BPJS',
  },
  {
    id: 9,
    no_rm: 'RM-0009',
    name: 'Mega Utami',
    gender: 'P',
    insurance: 'Mandiri',
  },
  {
    id: 10,
    no_rm: 'RM-0010',
    name: 'Surya Pratama',
    gender: 'L',
    insurance: 'BPJS',
  },
];
