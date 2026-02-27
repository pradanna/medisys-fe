import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import { Card } from '@/presentation/components/ui/card';
import { Button } from '@/presentation/components/ui/button';
import { mockKunjungan } from '@/infrastructure/mocks/data-kunjungan';
import { mockPoli } from '@/infrastructure/mocks/data-poli';

// Helper untuk memproses data mock
const processVisitData = (days: number) => {
  const data = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
    });

    // Hitung kunjungan pada tanggal ini (mock random karena data mock kita random)
    // Di real app, ini agregasi dari backend
    const count = Math.floor(Math.random() * 50) + 20;
    data.push({ name: dateStr, visits: count });
  }
  return data;
};

const processClinicDistribution = () => {
  return mockPoli.map((poli) => ({
    name: poli.name.replace('Poliklinik ', ''),
    patients: Math.floor(Math.random() * 100) + 10, // Mock data
  }));
};

export const VisitTrendChart = () => {
  const [period, setPeriod] = useState(7);
  const data = processVisitData(period);

  return (
    <Card shadow="md" withBorder={true} className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          Tren Kunjungan Pasien
        </h3>
        <div className="flex gap-2">
          <Button
            size="small"
            variant={period === 7 ? 'primary' : 'ghost'}
            onClick={() => setPeriod(7)}
          >
            7 Hari
          </Button>
          <Button
            size="small"
            variant={period === 30 ? 'primary' : 'ghost'}
            onClick={() => setPeriod(30)}
          >
            30 Hari
          </Button>
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4, fill: '#6366f1' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export const ClinicDistributionChart = () => {
  const data = processClinicDistribution();

  return (
    <Card shadow="md" withBorder={true} className="p-6">
      <h3 className="mb-6 text-lg font-semibold text-slate-900">
        Distribusi Pasien per Poliklinik
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={100}
              tick={{ fontSize: 12 }}
            />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar
              dataKey="patients"
              fill="#3b82f6"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
