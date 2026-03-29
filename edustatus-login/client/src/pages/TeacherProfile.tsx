import React from 'react';

export function TeacherProfile() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Minimalist Identity Header */}
      <section className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-slate-200 pb-10">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded">Faculty ID: ROD-882</span>
              <div className="flex items-center gap-2 px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded border border-amber-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Away – Back in 5 mins
              </div>
          </div>
          <div>
              <h2 className="text-4xl font-headline font-extrabold text-slate-900 tracking-tight leading-tight">Dr. Elena Rodriguez</h2>
              <p className="text-lg text-slate-500 font-medium mt-1">Senior Professor &amp; Head of Applied Mathematics Department</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md border border-slate-200">Calculus III</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md border border-slate-200">Linear Algebra</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md border border-slate-200">Complex Analysis</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md border border-slate-200">Stochastic Modeling</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-xl w-32 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Students</p>
              <p className="text-3xl font-headline font-extrabold text-slate-900">124</p>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl w-32 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Rating</p>
              <p className="text-3xl font-headline font-extrabold text-slate-900">4.9<span className="text-slate-300 text-lg">/5</span></p>
          </div>
        </div>
      </section>

      {/* Academic Focus Condensed */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Academic Background</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Specializing in stochastic processes and computational fluid dynamics. Dr. Rodriguez has been a core member of the faculty for over 8 years, focusing on student-centered learning and real-world application of theoretical models. Current research focuses on the intersection of entropy and machine learning algorithms in biological systems.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">history</span>
                  <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Sync Status</h4>
                      <p className="text-[11px] text-slate-500">Information accurate as of 12m ago</p>
                  </div>
              </div>
              <button className="w-full py-2 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-slate-100 transition-colors">Refresh Records</button>
          </div>
        </div>
      </section>

      {/* Data-Dense Availability Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Office Hours Schedule</h3>
            <p className="text-slate-500 text-xs mt-1 italic">Week of Oct 23 – Oct 29</p>
          </div>
          <div className="flex gap-1">
            <button className="p-1.5 border border-slate-200 hover:bg-slate-50 rounded transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="p-1.5 border border-slate-200 hover:bg-slate-50 rounded transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          {/* Monday (Active) */}
          <div className="bg-white p-5 min-h-[160px] flex flex-col">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-900 mb-4 border-b border-slate-100 pb-2">Monday</p>
            <div className="space-y-4 flex-grow">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">AM</p>
                <p className="text-sm font-bold text-slate-900">09:00 - 11:30</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">PM</p>
                <p className="text-sm font-bold text-slate-900">14:00 - 16:00</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter">Live Session</span>
            </div>
          </div>
          {/* Tuesday */}
          <div className="bg-white p-5 min-h-[160px] flex flex-col">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Tuesday</p>
            <div className="space-y-4 flex-grow">
              <div>
                <p className="text-[9px] font-bold text-slate-300 uppercase">AM</p>
                <p className="text-sm font-medium text-slate-400">---</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">PM</p>
                <p className="text-sm font-bold text-slate-900">13:00 - 17:00</p>
              </div>
            </div>
          </div>
          {/* Wednesday */}
          <div className="bg-white p-5 min-h-[160px] flex flex-col">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Wednesday</p>
            <div className="space-y-4 flex-grow">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">AM</p>
                <p className="text-sm font-bold text-slate-900">08:30 - 12:00</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">PM</p>
                <p className="text-sm font-bold text-slate-900">14:00 - 15:30</p>
              </div>
            </div>
          </div>
          {/* Thursday */}
          <div className="bg-white p-5 min-h-[160px] flex flex-col">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Thursday</p>
            <div className="space-y-4 flex-grow">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">AM</p>
                <p className="text-sm font-bold text-slate-900">09:00 - 11:30</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-300 uppercase">PM</p>
                <p className="text-sm font-medium text-slate-400">---</p>
              </div>
            </div>
          </div>
          {/* Other days omitted for brevity */}
        </div>
      </section>
      
      {/* Minimal Floating Action */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-12 h-12 bg-slate-900 text-white rounded-lg shadow-xl flex items-center justify-center hover:bg-slate-800 transition-all group">
            <span className="material-symbols-outlined text-[20px]">chat</span>
        </button>
      </div>
    </div>
  );
}
