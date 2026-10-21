import React, { useState } from 'react';
import { ChevronRight, GraduationCap, CheckCircle2, Search, ArrowRight, Check } from 'lucide-react';
export default function EligibilityPage({ onNavigate }) {
  const [filterQuery, setFilterQuery] = useState('');
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const programs = [
    {
      id: 'ballb',
      title: 'B.A. LL.B. (Honours)',
      duration: '5 Years Integrated',
      qualification: '10+2 / Intermediate (45% for Gen, 42% OBC, 40% SC/ST)',
      description: 'Comprehensive 5-Year integrated dual degree in humanities and law. Open after 10+2, approved by Bar Council of India (BCI) and affiliated to Bundelkhand University, Jhansi.',
      affiliation: 'Bar Council of India (BCI) & Bundelkhand University',
      fee: '₹16,000 / Year',
      highlights: [
        'Curriculum covering Constitutional Law, Criminal Laws (BNS), Civil Laws & Cyber Law',
        'State-of-the-art air conditioned Moot Court Hall for practical advocacy trials',
        'Mandatory 20-week internship with High Court Advocates and Legal Aid cells',
        'Free Legal Aid Clinic providing direct student legal aid experience'
      ]
    },
    {
      id: 'llb',
      title: 'LL.B. (3 Years Professional)',
      duration: '3 Years / 6 Semesters',
      qualification: 'Graduation in any stream (45% Gen, 42% OBC, 40% SC/ST)',
      description: 'Premier 3-Year professional law degree for graduates in any discipline. Rigorous trial advocacy, moot court training, and procedural law mastery.',
      affiliation: 'Bar Council of India (BCI) & Bundelkhand University',
      fee: '₹15,000 / Year',
      highlights: [
        'Extensive trial advocacy training, criminal jurisprudence & evidence act',
        'Direct foundation for UP Judicial Services (PCS-J) & APO exams',
        'Chamber internship with senior litigators at District & High Courts',
        'Comprehensive law library with SCC Online & All India Reporter'
      ]
    }
  ];
  const filteredPrograms = programs.filter(p =>
    p.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(filterQuery.toLowerCase())
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
            <button onClick={() => handleNav('admissions')} className="hover:text-white transition">
              Admissions
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Eligibility & Requirements</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Bar Council of India & BU Guidelines
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Eligibility & Entry Criteria
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Find complete admission qualifications, percentage relaxation criteria, age requirements, and compulsory certificates required for B.A. LL.B. (5 Years) and LL.B. (3 Years).
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
              Prescribed Qualification Criteria
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Admission is strictly merit-based as per Bundelkhand University admission rules.
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by course..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147] bg-white"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          </div>
        </div>
        <div className="space-y-8">
          {filteredPrograms.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold text-[#005a9c] uppercase tracking-wider">
                      {course.duration}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#002147] mt-0.5">
                      {course.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-500 uppercase font-semibold block">Tuition Fee</span>
                    <span className="text-xl font-bold text-[#002147]">{course.fee}</span>
                  </div>
                </div>
                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-sm mb-6">
                  <span className="font-bold text-xs uppercase text-[#002147] tracking-wider block mb-1">
                    Minimum Educational Qualification Required:
                  </span>
                  <p className="text-sm font-semibold text-stone-800">
                    {course.qualification}
                  </p>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div>
                  <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-3">
                    Academic Highlights & Practical Advocacy:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-[#00843D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-stone-50 p-4 px-7 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  <strong>Approved By:</strong> {course.affiliation}
                </span>
                <button
                  onClick={() => handleNav('admissions-apply')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002147] hover:text-[#005a9c] uppercase tracking-wider"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
