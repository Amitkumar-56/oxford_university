import React, { useState } from 'react';
import { ChevronRight, BookOpen, Download, Search, Filter } from 'lucide-react';
export default function QuestionPapersPage({ onNavigate }) {
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const papers = [
    {
      id: 'pp-1',
      subject: 'Constitutional Law of India - I & II',
      course: 'B.A. LL.B. (5 Years)',
      year: '2023-24',
      semester: 'Semester II & IV',
      university: 'Bundelkhand University, Jhansi',
      code: 'LAW-101'
    },
    {
      id: 'pp-2',
      subject: 'Law of Crimes (Indian Penal Code / BNS)',
      course: 'LL.B. (3 Years)',
      year: '2023-24',
      semester: 'Semester I',
      university: 'Bundelkhand University, Jhansi',
      code: 'LAW-102'
    },
    {
      id: 'pp-3',
      subject: 'Family Law (Hindu Law & Muslim Law)',
      course: 'B.A. LL.B. & LL.B.',
      year: '2023-24',
      semester: 'Semester III',
      university: 'Bundelkhand University, Jhansi',
      code: 'LAW-201'
    },
    {
      id: 'pp-4',
      subject: 'Law of Evidence & Bharatiya Sakshya Adhiniyam',
      course: 'B.A. LL.B. & LL.B.',
      year: '2023-24',
      semester: 'Semester IV',
      university: 'Bundelkhand University, Jhansi',
      code: 'LAW-204'
    },
    {
      id: 'pp-5',
      subject: 'Jurisprudence & Legal Theory',
      course: 'LL.B. (3 Years)',
      year: '2022-23',
      semester: 'Semester V',
      university: 'Bundelkhand University, Jhansi',
      code: 'LAW-301'
    },
    {
      id: 'pp-6',
      subject: 'Civil Procedure Code (CPC) & Limitation Act',
      course: 'B.A. LL.B. (5 Years)',
      year: '2022-23',
      semester: 'Semester VI',
      university: 'Bundelkhand University, Jhansi',
      code: 'LAW-305'
    }
  ];
  const filteredPapers = papers.filter((paper) => {
    const matchesYear = selectedYear === 'all' || paper.year === selectedYear;
    const matchesQuery =
      paper.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.course.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesQuery;
  });
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
            <span className="text-[#00c5ff] font-medium">Past Year Papers</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Academic Revision Archive
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Past Year Question Papers
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Official Bundelkhand University past examination question papers and solved model solutions for B.A. LL.B. and LL.B. semesters.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
              Semester Question Paper Repository
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Select academic year or filter by subject keywords.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-2 border border-stone-300 rounded-sm text-xs bg-white focus:outline-none focus:border-[#002147]"
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="py-2 px-3 border border-stone-300 rounded-sm text-xs bg-white focus:outline-none focus:border-[#002147]"
            >
              <option value="all">All Academic Years</option>
              <option value="2023-24">2023–24</option>
              <option value="2022-23">2022–23</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white border border-stone-200 p-6 rounded-sm shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-[#005a9c]">{paper.code}</span>
                  <span className="bg-stone-100 px-2 py-0.5 rounded-xs font-medium">{paper.year}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#002147] mb-2">
                  {paper.subject}
                </h3>
                <p className="text-xs text-stone-600 mb-1">
                  <strong>Course:</strong> {paper.course}
                </p>
                <p className="text-xs text-stone-500 mb-4">
                  {paper.semester} • {paper.university}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-400">PDF Document</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002147] hover:text-[#005a9c]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
