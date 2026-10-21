import React, { useState } from 'react';
import {
  Lock,
  User,
  GraduationCap,
  KeyRound,
  FileCheck,
  Calendar,
  Download,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function StudentsPortal({ onNavigate }) {
  const [role, setRole] = useState('student');
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (enrollmentNo) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Students & Faculty Portal</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                SKSIL ERP & Academic Management System
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
                Students & Faculty Portal
              </h1>
              <p className="text-base sm:text-lg text-stone-200 font-light max-w-3xl leading-relaxed">
                Access your semester examination admit cards, attendance percentages, university results, internal moot court scores, and online fees receipts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 bg-white border border-stone-200 p-8 sm:p-10 rounded-sm shadow-md">

            <div className="flex border-b border-stone-200 mb-6 pb-2">
              <button
                type="button"
                onClick={() => {
                  setRole('student');
                  setLoggedIn(false);
                }}
                className={`flex-1 py-2 text-sm font-bold text-center border-b-2 transition ${role === 'student'
                    ? 'border-[#002147] text-[#002147]'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
              >
                Student Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole('teacher');
                  setLoggedIn(false);
                }}
                className={`flex-1 py-2 text-sm font-bold text-center border-b-2 transition ${role === 'teacher'
                    ? 'border-[#002147] text-[#002147]'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
              >
                Teacher / Faculty Login
              </button>
            </div>

            {loggedIn ? (
              <div className="space-y-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded text-xs text-green-800">
                  <span className="font-bold">Welcome back!</span> Successfully authenticated as{' '}
                  <span className="font-mono font-bold">{enrollmentNo}</span>.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded">
                    <span className="text-stone-500 block">Attendance Status</span>
                    <span className="text-xl font-bold text-[#00843D]">84.5%</span>
                    <span className="text-[11px] text-stone-500 block mt-1">Eligible for BCI semester exams</span>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded">
                    <span className="text-stone-500 block">Current Semester</span>
                    <span className="text-xl font-bold text-[#002147]">B.A. LL.B. Sem V</span>
                    <span className="text-[11px] text-stone-500 block mt-1">Bundelkhand University</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => alert('Downloading Admit Card PDF')}
                    className="w-full flex items-center justify-between p-3 bg-white border border-stone-200 rounded text-xs font-semibold text-stone-800 hover:bg-stone-50"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#005a9c]" />
                      Download 5th Semester Admit Card
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>

                  <button
                    onClick={() => alert('Viewing Internal Assessment Marks')}
                    className="w-full flex items-center justify-between p-3 bg-white border border-stone-200 rounded text-xs font-semibold text-stone-800 hover:bg-stone-50"
                  >
                    <span className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-[#005a9c]" />
                      View Moot Court & Internal Marks
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                </div>

                <button
                  onClick={() => setLoggedIn(false)}
                  className="px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    {role === 'student' ? 'Enrollment / Roll Number *' : 'Faculty ID / Employee Code *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder={role === 'student' ? 'e.g. BU22LAW1092' : 'e.g. SKSIL-FAC-012'}
                      value={enrollmentNo}
                      onChange={(e) => setEnrollmentNo(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Password / Date of Birth *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Remember on this browser</span>
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Please contact SKSIL administrative office to reset your portal password.'); }} className="text-[#005a9c] hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#002147] hover:bg-[#003366] text-white font-semibold text-sm rounded-sm transition shadow flex items-center justify-center gap-2"
                  >
                    <span>Secure Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="md:col-span-5 space-y-6">
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#002147] font-serif font-bold text-lg mb-2">
                <ShieldCheck className="w-5 h-5 text-[#00843D]" />
                <span>Portal Instructions</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-600 leading-relaxed list-disc list-inside">
                <li>Admit cards for upcoming Bundelkhand University exams are available 7 days prior to examination.</li>
                <li>Ensure all semester tuition fees are cleared before generating hall tickets.</li>
                <li>For any technical discrepancies in marksheets or portal login, visit the computer lab desk.</li>
              </ul>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm">
              <h4 className="font-bold text-sm text-[#002147] mb-2">Need Credentials?</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Newly admitted 2026 students will receive their enrollment numbers upon completion of document verification at the college office.
              </p>
              <button
                onClick={() => handleNav('contact')}
                className="text-xs font-bold text-[#005a9c] hover:underline"
              >
                Contact Administration Office &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
