import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md flex justify-between items-center px-8 border-b border-transparent">
      <div className="flex items-center gap-8">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input className="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 ring-slate-200 dark:ring-slate-800 w-64 transition-all outline-none" placeholder="Search roster or status..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-1.5 bg-primary text-white font-manrope text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Go Live</button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-500">account_circle</span>
        </div>
      </div>
    </header>
  );
}
