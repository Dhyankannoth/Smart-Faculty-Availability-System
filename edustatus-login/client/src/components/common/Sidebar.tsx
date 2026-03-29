import React from 'react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-transform font-manrope text-sm ${
      isActive
        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 font-bold shadow-sm scale-[0.99]'
        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800/50'
    }`;

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-slate-900/5 z-50 flex flex-col p-4 gap-8">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-manrope">EduStatus</h1>
          <p className="font-inter text-slate-600 text-[10px] uppercase tracking-widest font-semibold">Academic Portal</p>
        </div>
      </div>
      <nav className="flex-1 space-y-2">
        <NavLink to="/teacher" className={linkClass}>
          <span className="material-symbols-outlined">dashboard</span>
          <span>Teacher Dashboard</span>
        </NavLink>
        <NavLink to="/student" className={linkClass}>
          <span className="material-symbols-outlined">group</span>
          <span>Student View</span>
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          <span className="material-symbols-outlined">account_circle</span>
          <span>Teacher Profile</span>
        </NavLink>
      </nav>
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <NavLink to="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-all text-sm font-manrope">
            <span className="material-symbols-outlined">logout</span>
            Logout
        </NavLink>
      </div>
    </aside>
  );
}
