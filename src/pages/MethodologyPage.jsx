import React from 'react';
import { ChevronRight } from 'lucide-react';
export default function MethodologyPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Our Methodology</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Pedagogy & Teaching Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Our Methodology
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              We bridge the gap between abstract legal theory and rigorous practical trial advocacy through case method analysis, interactive tutorials, and judicial chamber mentorship.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
            Interactive Law Teaching
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-4">
            Clinical Jurisprudence & Active Learning
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Our instructional pedagogy transitions beyond conventional memorization to cultivate analytical razor-sharpness, legal articulation, and forensic insight.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005a9c] flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
              Socratic Case-Law Method
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Analyzing milestone Supreme Court and High Court judgments to teach students how judicial precedents evolve and how to extract ratio decidendi.
            </p>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005a9c] flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
              Moot Court Trial Practice
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Weekly internal moot trials where students draft memorials, prepare propositions, argue before seasoned advocates, and master procedural etiquette.
            </p>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005a9c] flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">
              Clinical Legal Aid Outreach
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Students engage directly with grassroots village communities in Bundelkhand, helping marginalized citizens access justice and legal awareness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
