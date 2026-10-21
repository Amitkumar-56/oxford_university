import React from 'react';
import { ChevronRight } from 'lucide-react';
import hmSmall2 from '../assets/image/hm_small2.jpg';
export default function MootCourtPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Moot Court & Legal Aid</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Courtroom Simulation & Public Service
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Moot Court Society & Legal Aid Clinic
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Step into our high-tech simulated courtroom bench and participate in grassroots clinical legal aid outreach providing pro-bono support across Bundelkhand.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <img
              src={hmSmall2}
              alt="Moot Court Hall"
              className="w-full h-88 object-cover rounded-sm shadow-md border border-stone-300"
            />
          </div>
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Courtroom Simulation & Public Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-5">
              Practical Advocacy at Its Finest
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed mb-4">
              SKSIL boasts a dedicated air-conditioned Moot Court Hall modeled after High Court appellate benches. Students are trained to argue both civil and criminal appellate matters before sitting and retired judges, drafting memorials and mastering courtroom etiquette.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Our free Legal Aid Clinic provides counseling and grievance guidance to underprivileged citizens from neighboring villages, giving students firsthand exposure to client interviewing and socio-legal advocacy.
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#002147] text-white text-xs font-semibold rounded-sm hover:bg-[#003366] transition shadow-xs"
            >
              <span>Visit Campus & Moot Court Hall</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
