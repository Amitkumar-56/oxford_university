import React, { useState } from 'react';
import { ChevronRight, Calendar, Download, FileText, Search } from 'lucide-react';
export default function ExamSchedulePage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const exams = [
    {
      id: 2,
      title: 'Notice for Examination Form 5th Semester (B.A. LL.B. & LL.B.)',
      date: 'October 13, 2026',
      tag: 'Examination',
      description: 'All regular and back-paper students of 5th Semester are required to submit their online exam forms along with requisite fees via BU portal before the deadline.',
      fileSize: '312 KB',
      pdfUrl: '#'
    },
    {
      id: 7,
      title: 'Odd Semester Examination Timetable 2026–27',
      date: 'September 28, 2026',
      tag: 'Timetable',
      description: 'Bundelkhand University Jhansi has announced the provisional datesheet for 1st, 3rd, 5th, 7th & 9th semester law examinations.',
      fileSize: '480 KB',
      pdfUrl: '#'
    },
    {
      id: 8,
      title: 'Practical Clinical Paper & Moot Court Viva Schedule',
      date: 'September 15, 2026',
      tag: 'Viva Voce',
      description: 'Internal & external examiner viva dates for Moot Court Memorials, Chamber Internship Diaries, and Legal Aid clinic assessments.',
      fileSize: '290 KB',
      pdfUrl: '#'
    }
  ];
  const filteredExams = exams.filter(e =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      {}
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('notifications')} className="hover:text-white transition">
              Notifications
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Examination Schedule</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Bundelkhand University Timetable
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Examination Schedule
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Official university exam schedules, semester datesheets, admit card announcements, and practical viva voce guidelines for SKSIL students.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
              Current Semester Exam Notices
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Check exam dates and download authorized university PDF notifications.
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search exam notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147] bg-white"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          </div>
        </div>
        <div className="space-y-4">
          {filteredExams.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 p-6 rounded-sm shadow-sm hover:border-[#002147] transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="px-2 py-0.5 bg-blue-100 text-[#002147] font-semibold rounded-xs">
                    {item.tag}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#002147]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href={item.pdfUrl}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#002147] text-white text-xs font-semibold rounded-sm hover:bg-[#003366] transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Circular ({item.fileSize})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
