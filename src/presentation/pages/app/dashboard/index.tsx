import AppMainLayout from '@/presentation/components/shared/main/AppMainLayout';
import StatCard from './components/StatCard';
import { Users, Activity, CreditCard, Pill } from 'lucide-react';
import {
  VisitTrendChart,
  ClinicDistributionChart,
} from './components/DashboardCharts';
import {
  InventoryAlertTable,
  StaffOnDutyTable,
} from './components/DashboardTables';

export default function DashboardPage() {
  return (
    <AppMainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Dashboard Overview
          </h1>
          <p className="text-slate-500">Selamat datang kembali, Dr. Sarah</p>
        </div>

        {/* Stat Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Kunjungan"
            value="142"
            description="+12% dari kemarin"
            icon={Users}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-50"
          />
          <StatCard
            title="Bed Occupancy Rate"
            value="85%"
            description="Kapasitas hampir penuh"
            icon={Activity}
            iconColor="text-rose-600"
            iconBgColor="bg-rose-50"
          />
          <StatCard
            title="Tagihan Berjalan"
            value="Rp 45.2jt"
            description="Pending payment"
            icon={CreditCard}
            iconColor="text-emerald-600"
            iconBgColor="bg-emerald-50"
          />
          <StatCard
            title="Antrean Farmasi"
            value="18"
            description="Waktu tunggu rata-rata 15m"
            icon={Pill}
            iconColor="text-amber-600"
            iconBgColor="bg-amber-50"
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <VisitTrendChart />
          </div>
          <div>
            <ClinicDistributionChart />
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <InventoryAlertTable />
          <StaffOnDutyTable />
        </div>
      </div>
    </AppMainLayout>
  );
}
