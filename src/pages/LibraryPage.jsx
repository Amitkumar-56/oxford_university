import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import hmSmall3 from '../assets/image/hm_small3.jpg';
export default function LibraryPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Library & E-Resources</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Knowledge & Research Hub
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Law Library & E-Resources
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Our expansive law library houses over 10,000+ legal volumes, complete law reporters, and high-speed online databases for comprehensive research.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Heart of Intellectual Life
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-5">
              The SKSIL Law Library & Research Center
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
              The library is the heart of intellectual life at Sant Kripal Singh Institute of Law. Our vast collection houses authoritative commentaries, bare acts, law reports, and digital repositories.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Over 10,000+ volumes of legal treatises, journals, and law commentaries.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Complete archives of All India Reporter (AIR), Supreme Court Cases (SCC), and Criminal Law Journal.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Digital E-Resource lab with high-speed internet for computerized legal research.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Air-conditioned spacious reading halls open till late hours during examination weeks.</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={hmSmall3}
              alt="Law Library SKSIL"
              className="w-full h-88 object-cover rounded-sm shadow-md border border-stone-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
