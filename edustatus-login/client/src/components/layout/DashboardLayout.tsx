import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../common/Sidebar';
import { Header } from '../common/Header';

export function DashboardLayout() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-24 pb-12 px-10 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
