import React from 'react';
import { ChevronRight, Info, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
export default function AccreditationPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      {}
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('about')} className="hover:text-white transition">
              About SKSIL
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Accreditation</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                Accreditation & Approvals
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Recognized by the Bar Council of India (BCI), New Delhi and affiliated with Bundelkhand University, Jhansi (U.P.).
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-sm overflow-hidden bg-black/30 shadow-xl border border-white/10">
            <img
              src={heroGateImg}
              alt="Sant Kripal Singh Institute of Law"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center"
            />
            <div className="bg-[#001733] px-5 py-3 flex items-center gap-2.5 text-xs sm:text-[13px] text-stone-300 border-t border-white/10">
              <Info className="w-4 h-4 text-[#00c5ff] shrink-0" />
              <span>
                Sant Kripal Singh Institute of Law – BCI & Bundelkhand University Approved Campus.
              </span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl space-y-10">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Statutory Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-4">
              Official Approvals & Affiliations
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              Sant Kripal Singh Institute of Law adheres strictly to the highest standards and norms mandated by national regulatory bodies for legal education in the Republic of India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-stone-200 p-8 rounded-sm bg-[#fcfcfc] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#002147] flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="inline-block bg-[#002147] text-white text-xs uppercase px-3 py-1 font-semibold tracking-wider rounded-xs">
                Recognised By
              </span>
              <h3 className="font-serif text-2xl text-[#002147] font-semibold">
                Bar Council of India (BCI)
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Constituted under the Advocates Act, 1961 to regulate legal practice and legal education in India. New Delhi approval certifies our law graduates to enroll with any State Bar Council and practice before courts across India.
              </p>
              <div className="pt-2 text-xs text-[#00843D] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> BCI Approved Degree Curriculum
              </div>
            </div>
            <div className="border border-stone-200 p-8 rounded-sm bg-[#fcfcfc] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mb-2">
                <Award className="w-6 h-6" />
              </div>
              <span className="inline-block bg-[#002147] text-white text-xs uppercase px-3 py-1 font-semibold tracking-wider rounded-xs">
                Affiliated To
              </span>
              <h3 className="font-serif text-2xl text-[#002147] font-semibold">
                Bundelkhand University, Jhansi
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A prestigious state university established by the Government of Uttar Pradesh (NAAC Accredited), awarding officially validated degrees for Integrated B.A. LL.B. (5 Years) and LL.B. (3 Years).
              </p>
              <div className="pt-2 text-xs text-[#00843D] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> State University Affiliated Center
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
