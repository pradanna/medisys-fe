import React from 'react';
import { Table, type Column } from '@/presentation/components/ui/table';
import { Card } from '@/presentation/components/ui/card';
import {
  mockPharmacyStock,
  type MedicineStock,
} from '@/infrastructure/mocks/data-fasilitas';
import { mockDokter, type Dokter } from '@/infrastructure/mocks/data-dokter';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export const InventoryAlertTable = () => {
  // Filter stok di bawah 10
  const lowStockData = mockPharmacyStock.filter(
    (item) => item.stock_level < 10
  );

  const columns: Column<MedicineStock>[] = [
    {
      header: 'Nama Obat',
      accessor: 'medicine_name',
      className: 'font-medium',
    },
    {
      header: 'Sisa Stok',
      accessor: 'stock_level',
      render: (row) => (
        <span className="flex items-center gap-2 font-bold text-red-600">
          <AlertTriangle size={16} />
          {row.stock_level}
        </span>
      ),
    },
    {
      header: 'Status',
      accessor: (row) => (
        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
          Critical
        </span>
      ),
    },
  ];

  return (
    <Card shadow="md" withBorder={true} className="p-0 overflow-hidden">
      <div className="p-6 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Peringatan Stok Menipis
        </h3>
        <p className="text-sm text-slate-500">
          Item farmasi dengan stok kurang dari 10 unit
        </p>
      </div>
      <Table
        data={lowStockData}
        columns={columns}
        density="sm"
        shadow="none"
        withBorder={false}
      />
    </Card>
  );
};

export const StaffOnDutyTable = () => {
  // Filter dokter yang sedang 'duty'
  const onDutyDoctors = mockDokter
    .filter((doc) => doc.status === 'duty')
    .slice(0, 5);

  const columns: Column<Dokter>[] = [
    {
      header: 'Dokter',
      accessor: 'name',
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.photo_url}
            alt={row.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-medium text-slate-900">{row.name}</span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: () => (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          On Duty
        </span>
      ),
    },
  ];

  return (
    <Card shadow="md" withBorder={true} className="p-0 overflow-hidden">
      <div className="p-6 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Dokter Bertugas Hari Ini
        </h3>
      </div>
      <Table
        data={onDutyDoctors}
        columns={columns}
        density="sm"
        shadow="none"
        withBorder={false}
      />
    </Card>
  );
};
