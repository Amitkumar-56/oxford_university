import React, { useState } from 'react';
import { ChevronRight, Calendar, Download, Search, AlertCircle, Bell } from 'lucide-react';
export default function LatestNoticesPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const notices = [
    {
      id: 1,
      title: 'Notice for Dussehra Holidays 2026',
      date: 'October 16, 2026',
      tag: 'Notification',
      important: true,
      description: 'The Institute will remain closed for Dussehra festivities from 17th October to 21st October 2026. Academic sessions resume normally on 22nd October.',
      fileSize: '245 KB',
      pdfUrl: '#'
    },
    {
      id: 2,
      title: 'Notice for Examination Form 5th Semester (B.A. LL.B. & LL.B.)',
      date: 'October 13, 2026',
      tag: 'Examination',
      important: true,
      description: 'All regular and back-paper students of 5th Semester are required to submit their online exam forms along with requisite fees via BU portal before the deadline.',
      fileSize: '312 KB',
      pdfUrl: '#'
    },
    {
      id: 4,
      title: 'Notice for UP Government Scholarship 2026-27 (Saksham Portal)',
      date: 'October 05, 2026',
      tag: 'Scholarship',
      important: true,
      description: 'Eligible SC/ST/OBC/General EWS students must complete online registration on the UP Scholarship portal and submit physical hard copies with all annexures to the college desk.',
      fileSize: '418 KB',
      pdfUrl: '#'
    },
    {
      id: 5,
      title: 'Notice for Gandhi Jayanti Celebrations & Cleanliness Drive',
      date: 'October 01, 2026',
      tag: 'Events',
      important: false,
      description: 'Special commemorative session on Gandhian Jurisprudence and legal ethics accompanied by a campus plantation drive.',
      fileSize: '190 KB',
      pdfUrl: '#'
    },
    {
      id: 6,
      title: 'Notice for "Aashirwad ka Diya" Event & Legal Literacy Camp',
      date: 'September 17, 2026',
      tag: 'Outreach',
      important: false,
      description: 'Community outreach initiative in Banda villages educating rural families regarding fundamental legal rights and dispute resolution mechanisms.',
      fileSize: '280 KB',
      pdfUrl: '#'
    }
  ];
  const filteredNotices = notices.filter(n =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.description.toLowerCase().includes(searchQuery.toLowerCase())
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
            <span className="text-[#00c5ff] font-medium">Notifications</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Official Notice Board
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Latest College Notices
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Official circulars, holiday notices, scholarship reminders, and academic orders issued by Sant Kripal Singh Institute of Law.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
              Current Academic Notices
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Search by notice title or keyword.
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147] bg-white"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          </div>
        </div>
        <div className="space-y-4">
          {filteredNotices.map((item) => (
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
                  {item.important && (
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 font-bold text-[10px] uppercase rounded-xs">
                      Urgent
                    </span>
                  )}
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
                  <span>Download Notice ({item.fileSize})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
