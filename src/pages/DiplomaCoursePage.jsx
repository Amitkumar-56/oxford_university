import React from 'react';
import { ChevronRight, Award, GraduationCap, CheckCircle } from 'lucide-react';
import hmSmall2 from '../assets/image/hm_small2.jpg';
export default function DiplomaCoursePage({ onNavigate }) {
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
            <span className="text-[#00c5ff]">Diploma & Certificates</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                Diploma & Certificate Courses
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Skill-oriented specialized certificates in Cyber Law, Intellectual Property Rights, Human Rights, and Alternate Dispute Resolution (ADR) to sharpen career edge.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-sm overflow-hidden shadow-xl border border-white/10">
            <img
              src={hmSmall2}
              alt="Diploma Courses at SKSIL"
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
              Specialized Professional Diplomas
            </h2>
            <p className="text-stone-700 leading-relaxed text-base">
              Alongside core degrees, SKSIL offers intensive short-term certificate and diploma programmes empowering students with niche legal competencies required by modern law firms and corporate legal cells.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
                Diploma in Cyber Law & Information Security
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Covers Information Technology Act 2000, digital forensics, privacy compliance, data protection laws, and handling cybercrime prosecutions.
              </p>
              <div className="text-xs text-[#00843D] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Duration: 6 Months
              </div>
            </div>
            <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
                Certificate in Alternative Dispute Resolution (ADR)
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Hands-on mediation, conciliation, and arbitration training following Arbitration and Conciliation Act 1996 and Lok Adalat protocols.
              </p>
              <div className="text-xs text-[#00843D] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Duration: 3 Months
              </div>
            </div>
            <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
                Intellectual Property Rights (IPR)
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Patent filing, copyright infringement, trademark protection, and geographical indications in India.
              </p>
              <div className="text-xs text-[#00843D] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Duration: 6 Months
              </div>
            </div>
            <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
                Human Rights & Humanitarian Law
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Protection of Human Rights Act 1993, NHRC/SHRC practice, women and child rights, and public interest litigation (PIL).
              </p>
              <div className="text-xs text-[#00843D] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Duration: 6 Months
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
