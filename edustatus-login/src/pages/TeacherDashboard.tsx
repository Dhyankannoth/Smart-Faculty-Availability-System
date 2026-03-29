import React from 'react';
import { useSensor } from '../hooks/useSensor';

export function TeacherDashboard() {
  const { status } = useSensor();

  const getBroadcastColor = () => {
    if (status === 'AVAILABLE') return 'bg-tertiary-fixed-dim status-active-glow animate-pulse';
    if (status === 'BUSY') return 'bg-error shadow-[0_0_12px_rgba(186,26,26,0.5)] animate-pulse';
    return 'bg-slate-400';
  };

  const getBroadcastText = () => {
    if (status === 'AVAILABLE') return 'Live Broadcast Active';
    if (status === 'BUSY') return 'Do Not Disturb Active';
    return 'Broadcast Inactive';
  };
  return (
    <>
      {/* Dashboard Header */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold font-manrope tracking-tight text-on-surface mb-1">Teacher Dashboard</h2>
          <p className="text-on-surface-variant font-body">Welcome back, Dr. Sarah Mitchell. Manage your live availability below.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl transition-all">
          <div className={`w-2.5 h-2.5 rounded-full transition-colors ${getBroadcastColor()}`}></div>
          <span className="text-xs font-bold font-manrope uppercase tracking-wider text-on-surface-variant">{getBroadcastText()}</span>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* COLUMN 1: Real-time Status Widget (Span 5) */}
        <section className="col-span-12 lg:col-span-5 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-2xl shadow-slate-900/5 relative overflow-hidden group">
            {/* Data Lens Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-fixed"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-manrope font-bold text-lg">Broadcast Your Status</h3>
              <span className="material-symbols-outlined text-on-surface-variant">sensors</span>
            </div>

            <div className="space-y-4">
              {/* Status Options */}
              <button className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl border-2 border-primary-fixed transition-all hover:scale-[1.01] group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                  </div>
                  <div className="text-left">
                    <p className="font-manrope font-bold text-on-surface">Available</p>
                    <p className="text-xs text-on-surface-variant">Students can drop in</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </button>

              <button className="w-full flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-all">
                <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                </div>
                <div className="text-left">
                  <p className="font-manrope font-bold text-on-surface">Unavailable</p>
                  <p className="text-xs text-on-surface-variant">Focus mode or Meeting</p>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col gap-2 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-all border border-transparent hover:border-outline-variant/30">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                  </div>
                  <p className="font-manrope font-bold text-sm text-on-surface">Away (5m)</p>
                </button>
                <button className="flex flex-col gap-2 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-all border border-transparent hover:border-outline-variant/30">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">directions_walk</span>
                  </div>
                  <p className="font-manrope font-bold text-sm text-on-surface">Out of Cabin</p>
                </button>
              </div>

              {/* Custom Status */}
              <div className="mt-6 pt-6 border-t border-outline-variant/20">
                <label className="block text-xs font-bold font-manrope uppercase tracking-widest text-on-surface-variant mb-3">Custom Status</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-sm focus:ring-2 ring-primary-fixed focus:bg-surface-container-lowest transition-all" placeholder="e.g. Grading finals, back at 2PM" type="text" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-on-primary px-3 py-1.5 rounded-md text-xs font-bold font-manrope">Update</button>
                </div>
              </div>
            </div>
          </div>

          {/* Recurring Schedule Editor */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-2xl shadow-slate-900/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-manrope font-bold text-lg">Weekly Defaults</h3>
              <button className="text-primary-container font-manrope text-sm font-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-outlined text-sm">edit</span>
                Configure
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                <span className="text-sm font-bold font-manrope w-12">MON</span>
                <div className="flex-1 flex gap-2 justify-center">
                  <span className="px-2 py-1 bg-white text-[10px] font-bold rounded shadow-sm">09:00 - 11:30</span>
                  <span className="px-2 py-1 bg-white text-[10px] font-bold rounded shadow-sm">14:00 - 16:30</span>
                </div>
                <span className="material-symbols-outlined text-on-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>toggle_on</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                <span className="text-sm font-bold font-manrope w-12">TUE</span>
                <div className="flex-1 flex gap-2 justify-center text-on-surface-variant text-[10px]">No recurring blocks set</div>
                <span className="material-symbols-outlined text-outline-variant text-sm">toggle_off</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                <span className="text-sm font-bold font-manrope w-12">WED</span>
                <div className="flex-1 flex gap-2 justify-center">
                  <span className="px-2 py-1 bg-white text-[10px] font-bold rounded shadow-sm">10:00 - 15:00</span>
                </div>
                <span className="material-symbols-outlined text-on-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>toggle_on</span>
              </div>
            </div>
          </div>
        </section>

        {/* COLUMN 2: Calendar & Details (Span 7) */}
        <section className="col-span-12 lg:col-span-7 space-y-8">
          {/* Availability Calendar View */}
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-slate-900/5 overflow-hidden">
            <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h3 className="font-manrope font-bold text-lg">Live Schedule</h3>
                <div className="flex items-center gap-1 bg-secondary-container px-3 py-1 rounded-full">
                  <span className="text-[10px] font-bold font-manrope text-on-secondary-container">JUNE 2024</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
              </div>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="p-4 text-[10px] font-extrabold font-manrope uppercase tracking-widest text-on-surface-variant text-center border-r border-outline-variant/10">Time</th>
                    <th className="p-4 text-[10px] font-extrabold font-manrope uppercase tracking-widest text-on-surface-variant text-center">MON 17</th>
                    <th className="p-4 text-[10px] font-extrabold font-manrope uppercase tracking-widest text-on-surface-variant text-center">TUE 18</th>
                    <th className="p-4 text-[10px] font-extrabold font-manrope uppercase tracking-widest text-on-surface-variant text-center">WED 19</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant/10 h-24">
                    <td className="p-4 text-center text-xs font-bold font-manrope text-on-surface-variant border-r border-outline-variant/10">09:00</td>
                    <td className="p-2">
                      <div className="h-full w-full bg-primary-container rounded-lg p-2 text-white flex flex-col justify-center">
                        <p className="text-[10px] font-bold">Available</p>
                        <p className="text-[8px] opacity-70">Walk-in Office Hours</p>
                      </div>
                    </td>
                    <td></td>
                    <td className="p-2">
                      <div className="h-full w-full bg-surface-container-high rounded-lg p-2 border-l-4 border-error flex flex-col justify-center">
                        <p className="text-[10px] font-bold text-on-surface">Dept Meeting</p>
                        <p className="text-[8px] text-on-surface-variant">Conf Room B</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 h-24">
                    <td className="p-4 text-center text-xs font-bold font-manrope text-on-surface-variant border-r border-outline-variant/10">10:00</td>
                    <td className="p-2">
                      <div className="h-full w-full bg-primary-container rounded-lg p-2 text-white flex flex-col justify-center">
                        <p className="text-[10px] font-bold">Available</p>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="h-full w-full bg-secondary-container/40 rounded-lg p-2 border-l-4 border-on-secondary-container flex flex-col justify-center">
                        <p className="text-[10px] font-bold text-on-surface">Tutorial Block</p>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="h-full w-full bg-primary-container rounded-lg p-2 text-white flex flex-col justify-center">
                        <p className="text-[10px] font-bold">Available</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 h-24">
                    <td className="p-4 text-center text-xs font-bold font-manrope text-on-surface-variant border-r border-outline-variant/10">11:00</td>
                    <td></td>
                    <td></td>
                    <td className="p-2">
                      <div className="h-full w-full bg-primary-container rounded-lg p-2 text-white flex flex-col justify-center">
                        <p className="text-[10px] font-bold">Available</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Async Communications Card */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">chat_bubble</span>
                <h4 className="font-manrope font-bold">Pending Inquiries</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold font-manrope">12</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Active Chats</span>
              </div>
              <button className="mt-4 w-full py-2 bg-white rounded-lg text-xs font-bold font-manrope shadow-sm hover:shadow-md transition-all">View Message Hub</button>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary-fixed">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-on-tertiary-container">history</span>
                <h4 className="font-manrope font-bold">Status History</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] border-b border-outline-variant/10 pb-1">
                  <span className="text-on-surface-variant">Today, 08:30</span>
                  <span className="font-bold text-on-tertiary-container">Logged On</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-on-surface-variant">Yesterday</span>
                  <span className="font-bold text-error">Away (3h)</span>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-white rounded-lg text-xs font-bold font-manrope shadow-sm hover:shadow-md transition-all">Export Logs</button>
            </div>
          </div>
        </section>
      </div>
      
      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">add</span>
        <div className="absolute right-16 px-4 py-2 bg-on-surface text-surface text-xs font-bold font-manrope rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            New Schedule Block
        </div>
      </button>
    </>
  );
}
