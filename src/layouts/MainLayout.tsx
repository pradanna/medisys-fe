import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-bg-app font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 w-full">
        {/* Header Sederhana */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-heading">Overview</h2>
            <p className="text-slate-500 text-sm">
              Selamat datang kembali di Medisys.
            </p>
          </div>
          {/* Search bar placeholder */}
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Cari data pasien / RM..."
              className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        </header>

        {/* Dynamic Content */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
