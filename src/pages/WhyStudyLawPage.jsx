import React from 'react';
import { ChevronRight, Scale, Award, Briefcase, GraduationCap } from 'lucide-react';
import sksilLaw from '../assets/image/sksil-law.jpg';
export default function WhyStudyLawPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
            <button onClick={() => handleNav('studying')} className="hover:text-white transition">
              Studying at SKSIL
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Why Study Law</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Career Trajectory & Civic Impact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Why Study Law at SKSIL?
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Studying law opens the doors to an intellectually stimulating career where you champion justice, uphold constitutional values, and shape the socio-economic framework of the nation.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Build a Noble Career
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-5">
              Empowerment Through Legal Education
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
              At SKSIL Banda, our students develop critical analytical thinking, eloquence in debate, precision in legal drafting, and profound ethical integrity. From litigation at high courts to the judiciary, corporate compliance, and civil administration, a law degree provides limitless avenues.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Legal education enables citizens to decode statutes, defend civil liberties, and ensure that rule of law prevails in every corner of society.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-sm flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">Bar & Bench Advocacy</h4>
                  <p className="text-xs text-stone-600 mt-1">Direct pathway to practice in Supreme Court, High Courts, and District Tribunals.</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-sm flex items-start gap-3">
                <Award className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">Judicial Services (PCS-J)</h4>
                  <p className="text-xs text-stone-600 mt-1">Comprehensive coaching and foundation for Civil Judge & Magistrate exams.</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-sm flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">Corporate & In-House Counsel</h4>
                  <p className="text-xs text-stone-600 mt-1">High-demand roles in legal firms, banks, MNCs, and regulatory bodies.</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-sm shadow-sm flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">Civil Services & Public Policy</h4>
                  <p className="text-xs text-stone-600 mt-1">Invaluable foundation for UPSC, State PSC, and policy research think tanks.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={sksilLaw}
                alt="Students at SKSIL"
                className="w-full h-96 object-cover rounded-sm shadow-lg border border-stone-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#002147] text-white p-4 rounded-sm shadow-xl hidden sm:block max-w-xs border border-white/20">
                <p className="text-xs font-serif italic text-amber-300">
                  "Law is the king of kings; through its aid, even the weak prevail over the strong."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
