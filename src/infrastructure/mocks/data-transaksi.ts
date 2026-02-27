import { mockKunjungan } from './data-kunjungan';

export interface Transaksi {
  id: number;
  visit_id: number;
  amount: number;
  category: 'Konsultasi' | 'Obat' | 'Tindakan' | 'Administrasi';
  status: 'paid' | 'pending';
  created_at: Date;
}

const generateTransactions = (): Transaksi[] => {
  const transactions: Transaksi[] = [];
  const categories: Transaksi['category'][] = [
    'Konsultasi',
    'Obat',
    'Tindakan',
    'Administrasi',
  ];

  for (let i = 1; i <= 30; i++) {
    const visit = mockKunjungan[i - 1];
    transactions.push({
      id: i,
      visit_id: visit.id,
      amount: 50000 + Math.floor(Math.random() * 200000),
      category: categories[i % categories.length],
      status: i % 2 === 0 ? 'paid' : 'pending',
      created_at: visit.date,
    });
  }
  return transactions;
};

export const mockTransaksi: Transaksi[] = generateTransactions();
