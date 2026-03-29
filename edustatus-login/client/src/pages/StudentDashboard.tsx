import React from 'react';
import { useSensor } from '../hooks/useSensor';

export function StudentDashboard() {
  const { status } = useSensor();

  const getBadgeStyle = () => {
    switch (status) {
      case 'AVAILABLE': return "bg-tertiary-fixed/10 text-on-tertiary-container";
      case 'BUSY': return "bg-error-container text-on-error-container";
      default: return "bg-surface-variant text-on-surface-variant";
    }
  };

  const getBadgeText = () => {
    switch (status) {
      case 'AVAILABLE': return "Available";
      case 'BUSY': return "Busy / Do Not Disturb";
      default: return "Away / Not Present";
    }
  };
  return (
    <>
      {/* Hero Section / Header Metrics */}
      <section className="flex justify-between items-end mb-10">
        <div className="space-y-1">
          <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">Faculty Roster</h2>
          <p className="text-on-surface-variant font-medium">Real-time availability of your assigned academic proctors.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-low px-6 py-4 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
              <span className="text-2xl font-headline font-bold text-on-surface">12</span>
              <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">Total Faculty</span>
          </div>
          <div className="bg-tertiary-fixed/20 px-6 py-4 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
              <span className="text-2xl font-headline font-bold text-on-tertiary-container">8</span>
              <span className="text-[10px] font-bold uppercase text-on-tertiary-container tracking-wider">Available Now</span>
          </div>
        </div>
      </section>

      {/* Main Layout: Bento Style Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Primary Faculty List (Detailed View Interface) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-2 shadow-2xl shadow-slate-900/5">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-50">
              <h3 className="font-headline font-bold text-lg text-on-surface">Active Proctors</h3>
              <button className="text-sm font-bold text-on-primary-container flex items-center gap-1">
                  Filter By Course <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            <div className="divide-y divide-slate-50">
              {/* Teacher Card 1 */}
              <div className="group flex items-center justify-between p-6 hover:bg-surface-container-low transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center">SM</div>
                    <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white transition-colors ${status === 'AVAILABLE' ? 'bg-tertiary-fixed' : (status === 'BUSY' ? 'bg-error' : 'bg-slate-400')}`}></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-headline font-bold text-on-surface group-hover:text-on-primary-container transition-colors">Dr. Sarah Mitchell</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight transition-colors ${getBadgeStyle()}`}>
                        {getBadgeText()}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant">Senior Professor of Computational Linguistics</p>
                    <div className="flex gap-4 mt-2">
                      <span className="flex items-center gap-1 text-xs text-outline font-medium">
                        <span className="material-symbols-outlined text-[14px]">forum</span> 2m response time
                      </span>
                      <span className="flex items-center gap-1 text-xs text-outline font-medium">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> Until 4:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined">chat_bubble</span>
                  </button>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
                </div>
              </div>

              {/* Teacher Card 2 */}
              <div className="group flex items-center justify-between p-6 hover:bg-surface-container-low transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">DC</div>
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-error rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-headline font-bold text-on-surface group-hover:text-on-primary-container transition-colors">Prof. David Chen</h4>
                      <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-tight">In Meeting</span>
                    </div>
                    <p className="text-sm text-on-surface-variant">Lead Researcher, Applied Physics Dept.</p>
                    <div className="flex gap-4 mt-2">
                        <span className="flex items-center gap-1 text-xs text-outline font-medium">
                            <span className="material-symbols-outlined text-[14px]">history</span> Returns in 45m
                        </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 rounded-full border border-outline-variant text-xs font-bold text-on-surface hover:bg-surface-container-high">Leave Message</button>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Column / Contextual Widgets */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-2xl shadow-slate-900/5 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-fixed"></div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Your Status</h5>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-3xl font-headline font-extrabold text-on-surface block">Online</span>
                <p className="text-xs text-on-tertiary-container font-medium mt-1">Visible to all instructors</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-tertiary-fixed">sensors</span>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-surface-container-high text-on-surface text-xs font-bold hover:bg-surface-container-highest transition-colors">
                Go Invisible
            </button>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-8xl">alarm</span>
            </div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Upcoming Appointment</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-lg font-bold">24</span>
                    <span className="text-[8px] uppercase font-bold text-slate-400">Oct</span>
                </div>
                <div>
                    <h6 className="font-bold text-lg">Thesis Review</h6>
                    <p className="text-sm text-slate-400">with Dr. Sarah Mitchell</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-sm">place</span> Virtual Room 402B
                <span className="mx-auto"></span>
                <span className="material-symbols-outlined text-sm">timer</span> 14:30
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
