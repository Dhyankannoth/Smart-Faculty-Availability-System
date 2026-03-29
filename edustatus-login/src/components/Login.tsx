import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { InputField } from './common/Inputs';
import { Button } from './common/Button';
import { appData } from '../data/mockData';

export function Login() {
  const { role, setRole, email, setEmail, password, setPassword, loading, handleLogin } = useAuth();

  return (
    <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative z-10 w-full h-full">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Branding & Value Prop Section (Asymmetric Left) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/5 rounded-full">
            <span className="material-symbols-outlined text-on-primary-fixed-variant text-sm">school</span>
            <span className="text-xs font-bold font-headline tracking-widest text-on-primary-fixed-variant">
              {appData.branding}
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-on-background leading-tight">
            Manage your <span className="text-on-primary-container">Academic Presence</span> {appData.titleSuffix}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
            {appData.description}
          </p>
          <div className="flex items-center gap-6 pt-4">
            {appData.stats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col">
                  <span className="text-2xl font-headline font-bold text-on-background">{stat.value}</span>
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
                </div>
                {idx < appData.stats.length - 1 && <div className="w-px h-8 bg-outline-variant/30"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Login Card (Asymmetric Right) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="w-full max-w-lg bg-surface-container-lowest editorial-shadow rounded-xl overflow-hidden border border-outline-variant/10 relative z-20">
            
            {/* Role Selection Tabs */}
            <div className="flex bg-surface-container-low p-2 gap-2">
              <button 
                onClick={() => setRole('teacher')}
                className={`flex-1 flex flex-col items-center justify-center py-6 px-4 rounded-lg transition-all duration-300 ${role === 'teacher' ? 'bg-white shadow-sm ring-1 ring-black/5 text-primary' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
              >
                <span className="material-symbols-outlined mb-2" style={{ fontVariationSettings: role === 'teacher' ? "'FILL' 1" : ""}}>person_4</span>
                <span className="font-headline font-bold text-sm tracking-tight">Teacher</span>
                <span className="text-[10px] font-label text-on-surface-variant mt-1">Schedule & Manage</span>
              </button>
              
              <button 
                onClick={() => setRole('student')}
                className={`flex-1 flex flex-col items-center justify-center py-6 px-4 rounded-lg transition-all duration-300 ${role === 'student' ? 'bg-white shadow-sm ring-1 ring-black/5 text-primary' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
              >
                <span className="material-symbols-outlined mb-2" style={{ fontVariationSettings: role === 'student' ? "'FILL' 1" : ""}}>school</span>
                <span className="font-headline font-bold text-sm tracking-tight">Student</span>
                <span className="text-[10px] font-label text-on-surface-variant mt-1">View Availability</span>
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-headline font-bold text-on-background tracking-tight">Welcome back</h2>
                <p className="text-on-surface-variant text-sm">Enter your academic credentials to access your dashboard.</p>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <InputField 
                  label="Academic Email"
                  icon="alternate_email"
                  id="email"
                  type="email"
                  placeholder="name@university.edu"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <InputField 
                  label="Access Key"
                  icon="lock"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  rightIcon="visibility"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rightLabel={<a className="text-[11px] font-bold text-on-primary-container hover:underline" href="#">Forgot?</a>}
                />

                <Button type="submit" icon="arrow_forward" disabled={loading}>
                  {loading ? 'Authenticating...' : 'Sign In to EduStatus'}
                </Button>
              </form>

              {/* Secondary Identity Actions */}
              <div className="pt-4 space-y-4">
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-outline-variant/30"></div>
                  <span className="flex-shrink mx-4 text-[10px] font-label uppercase tracking-widest text-outline">Enterprise Login</span>
                  <div className="flex-grow border-t border-outline-variant/30"></div>
                </div>
                <button type="button" className="w-full py-3.5 bg-surface-container-high text-on-surface font-headline font-bold text-sm rounded-lg flex items-center justify-center gap-3 transition-colors hover:bg-surface-container-highest">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
                  </svg>
                  <span>Continue with University SSO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
