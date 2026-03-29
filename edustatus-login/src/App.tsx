import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherProfile } from './pages/TeacherProfile';
import { appData } from './data/mockData';

// Extracted Login Layout specifically so the footer and decor stay on the login page only
function LoginView() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Login />
      
      {/* Global Footer Decor */}
      <footer className="p-8 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4 md:gap-0">
        <div className="text-[10px] font-label uppercase tracking-[0.2em] text-outline text-center md:text-left">
          {appData.footer.copyright}
        </div>
        <div className="flex gap-4 md:gap-6">
          {appData.footer.links.map(link => (
            <a key={link.text} href={link.href} className="text-[10px] font-label uppercase tracking-widest text-outline hover:text-on-surface transition-colors">
              {link.text}
            </a>
          ))}
        </div>
      </footer>

      {/* Signature Component: The "Data Lens" (Background Decoration) */}
      <div className="fixed bottom-12 -left-4 w-64 h-32 bg-surface-container-lowest editorial-shadow rounded-xl opacity-20 -rotate-6 pointer-events-none hidden lg:block overflow-hidden z-0">
        <div className="w-1.5 h-full bg-tertiary-fixed absolute left-0 top-0"></div>
        <div className="p-6 space-y-3">
          <div className="h-2 w-24 bg-surface-variant rounded"></div>
          <div className="h-4 w-40 bg-surface-container-highest rounded"></div>
          <div className="h-2 w-16 bg-surface-variant rounded"></div>
        </div>
      </div>

      {/* Background Atmospheric Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/" element={<LoginView />} />
        
        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/profile" element={<TeacherProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
