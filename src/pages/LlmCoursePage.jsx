import React from 'react';
import { ChevronRight, Award, GraduationCap, Mail, Phone } from 'lucide-react';
import sksilLaw from '../assets/image/sksil-law.jpg';
export default function LlmCoursePage({ onNavigate }) {
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
            <span className="text-[#00c5ff]">LL.M. (Master of Laws)</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                LL.M. (Master of Laws)
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Advanced postgraduate master of laws degree focusing on specialized constitutional jurisprudence, criminal law, and corporate regulations.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-sm overflow-hidden shadow-xl border border-white/10">
            <img
              src={sksilLaw}
              alt="LL.M. Study at SKSIL"
              className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover object-center"
            />
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="space-y-8 max-w-4xl bg-stone-50 p-8 border border-stone-200 rounded-sm">
          <h2 className="font-serif text-3xl text-[#002147]">
            Postgraduate Research & Advanced Legal Studies
          </h2>
          <p className="text-stone-700 leading-relaxed text-base">
            The Master of Laws (LL.M.) postgraduate programme at Sant Kripal Singh Institute of Law is designed for law graduates who aspire to specialize in constitutional litigation, comparative criminal law, judicial research, and higher academia (UGC-NET / Assistant Professorship).
          </p>
          <div className="border border-stone-200 overflow-hidden rounded-sm bg-white">
            <table className="w-full text-left text-sm text-stone-700">
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147] w-1/3">Eligibility</th><td className="p-4">LL.B. (3 Years) or B.A. LL.B. (5 Years) with minimum 50% marks</td></tr>
                <tr><th className="p-4 font-semibold text-[#002147]">Specializations</th><td className="p-4">Constitutional Law, Criminal Jurisprudence & Corporate Law</td></tr>
                <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Research Thesis</th><td className="p-4">Mandatory dissertation submission under faculty guidance</td></tr>
              </tbody>
            </table>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="bg-[#002147] text-white text-xs font-semibold px-6 py-3 rounded-sm hover:bg-[#003366] transition inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Admissions Desk for LL.M. Session</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav('admissions')}
              className="bg-[#00843D] text-white text-xs font-semibold px-6 py-3 rounded-sm hover:bg-[#006e33] transition"
            >
              Apply Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
