import React from 'react';
import { ChevronRight } from 'lucide-react';
export default function RulesPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Rules & Regulations</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Discipline & Professionalism
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Rules & Regulations
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Institutional code of conduct, mandatory BCI attendance criteria, uniform norms, and anti-ragging policies upholding campus excellence.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 sm:p-10 rounded-sm shadow-sm">
          <h2 className="font-serif text-3xl text-[#002147] mb-4">
            Institutional Code of Conduct
          </h2>
          <p className="text-sm text-stone-600 mb-6 leading-relaxed">
            Sant Kripal Singh Institute of Law is committed to the highest standards of professional ethics, student discipline, and academic integrity.
          </p>
          <div className="space-y-5 text-xs sm:text-sm text-stone-700">
            <div className="p-5 bg-stone-50 border-l-4 border-[#002147] rounded-xs">
              <h4 className="font-bold text-[#002147] mb-1 text-base">1. Mandatory Attendance (BCI Norms)</h4>
              <p className="leading-relaxed">As per Bar Council of India regulations, a minimum of 75% attendance in theory lectures and clinical tutorials is strictly required to be eligible for university examinations.</p>
            </div>
            <div className="p-5 bg-stone-50 border-l-4 border-[#002147] rounded-xs">
              <h4 className="font-bold text-[#002147] mb-1 text-base">2. Professional Uniform & Dress Code</h4>
              <p className="leading-relaxed">All law students must attend classes in formal advocate uniform (White shirt, black trousers, black tie/blazer, and black formal shoes) instilling courtroom discipline from day one.</p>
            </div>
            <div className="p-5 bg-stone-50 border-l-4 border-red-600 rounded-xs">
              <h4 className="font-bold text-red-700 mb-1 text-base">3. Strict Anti-Ragging Policy (Zero Tolerance)</h4>
              <p className="leading-relaxed">Ragging in any form is strictly banned and considered a cognizable criminal offense under UGC and Supreme Court mandates. Any violation will lead to immediate expulsion and police FIR.</p>
            </div>
            <div className="p-5 bg-stone-50 border-l-4 border-[#002147] rounded-xs">
              <h4 className="font-bold text-[#002147] mb-1 text-base">4. Library & Campus Property Decorum</h4>
              <p className="leading-relaxed">Silence must be maintained in the library. Disfiguring books, equipment, or campus infrastructure is liable to penalty and disciplinary action.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
