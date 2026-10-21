import React from 'react';
import { ChevronRight, Download, CheckCircle, GraduationCap } from 'lucide-react';
import hmSmall2 from '../assets/image/hm_small2.jpg';
export default function LlbCoursePage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      {}
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-8">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('courses')} className="hover:text-white transition">
              Courses
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff]">LL.B. (3 Years)</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                LL.B. (3 Years Professional)
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Premier 3-Year professional law degree for graduates in any discipline. Rigorous trial advocacy, moot court training, procedural law mastery, and chamber mentorship.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-sm overflow-hidden shadow-xl border border-white/10">
            <img
              src={hmSmall2}
              alt="LL.B. Study at SKSIL"
              className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover object-center"
            />
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="space-y-10 max-w-4xl">
          <div>
            <h2 className="font-serif text-3xl text-[#002147] mb-4">
              Program Overview
            </h2>
            <p className="text-stone-700 leading-relaxed text-base">
              Our 3-Year Bachelor of Laws (LL.B.) course is crafted for graduates looking to enter legal practice, judiciary exams, or corporate advisory roles. SKSIL delivers intellectually stimulating education, regular mock trials, practical legal drafting, and extensive trial observation.
            </p>
          </div>
          {}
          <div className="border border-stone-200 overflow-hidden rounded-sm">
            <table className="w-full text-left text-sm text-stone-700">
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147] w-1/3">College Code</th><td className="p-4">797 (Bundelkhand University)</td></tr>
                <tr><th className="p-4 font-semibold text-[#002147]">Course Type</th><td className="p-4">Graduate Professional (3 Years / 6 Semesters)</td></tr>
                <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Annual Fee</th><td className="p-4 font-bold text-[#002147]">₹15,000/- Per Annum</td></tr>
                <tr><th className="p-4 font-semibold text-[#002147]">Eligibility</th><td className="p-4">Any Bachelor Degree with 45% marks for General, 42% for OBC, 40% for SC/ST</td></tr>
                <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Academic Session</th><td className="p-4">Starts August every year</td></tr>
              </tbody>
            </table>
          </div>
          {}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#002147]">Core Clinical & Substantive Papers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
              {[
                'Jurisprudence & Legal Theory',
                'Law of Crimes (B.N.S. & B.N.S.S. 2023)',
                'Constitutional Law of India',
                'Civil Procedure Code & Evidence Act',
                'Drafting, Pleading & Conveyance',
                'Professional Ethics & Accountancy',
                'Alternate Dispute Resolution (ADR)',
                'Moot Court Exercises & Advocate Chamber Diary'
              ].map((subj) => (
                <div key={subj} className="flex items-center gap-2 p-3 bg-stone-50 border border-stone-200 rounded-xs">
                  <CheckCircle className="w-4 h-4 text-[#00c5ff] shrink-0" />
                  <span>{subj}</span>
                </div>
              ))}
            </div>
          </div>
          {}
          <div className="p-6 bg-[#002147] text-white flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm">
            <div>
              <h4 className="font-serif text-lg font-semibold">Official LL.B. Syllabus</h4>
              <p className="text-xs text-stone-300">Complete semester pattern and prescribed university syllabus</p>
            </div>
            <a
              href="https://www.sksil.ac.in/public/front/assets/pdfs/LL.B.syllabus.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#00c5ff] hover:bg-[#00b4eb] text-[#002147] text-xs font-semibold px-4 py-2.5 rounded-sm inline-flex items-center gap-2 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download Syllabus (PDF)</span>
            </a>
          </div>
        </div>
      </section>
      {}
      <section className="bg-[#eef4f9] py-12 px-4 sm:px-8 lg:px-12 border-t border-stone-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-stone-200">
            <GraduationCap className="w-8 h-8 text-[#002147] mb-3" />
            <h4 className="font-serif text-lg font-semibold text-[#002147] mb-2">Bar Council Approved</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Enables registration with State Bar Councils across India as an Advocate after graduation.
            </p>
          </div>
          <div className="bg-white p-6 border border-stone-200">
            <GraduationCap className="w-8 h-8 text-[#002147] mb-3" />
            <h4 className="font-serif text-lg font-semibold text-[#002147] mb-2">PCS-J Judicial Foundation</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Deep curriculum coverage aligned with Civil Judge & Public Prosecutor examinations.
            </p>
          </div>
          <div className="bg-white p-6 border border-stone-200">
            <GraduationCap className="w-8 h-8 text-[#002147] mb-3" />
            <h4 className="font-serif text-lg font-semibold text-[#002147] mb-2">Trial Practice Lab</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Regular courtroom mock sessions, witness cross-examination, and client counseling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
