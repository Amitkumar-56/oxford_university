import React from 'react';
import { ChevronRight, Info } from 'lucide-react';
import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
export default function DirectorMessagePage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Director’s Message</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                Director’s Message
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                “Our stated goal is to create the best possible conditions for your academic studies, intellectual development, and successful legal career.”
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
                Sant Kripal Singh Institute of Law – Academic Leadership & Director's Desk.
              </span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl text-[#002147]">
            Director’s Address
          </h2>
          <div className="bg-[#f7fafc] border border-stone-200 p-8 rounded-sm space-y-5 text-stone-700 leading-relaxed text-base">
            <p className="font-semibold text-stone-900 text-lg">Dear Prospective Students,</p>
            <p>
              It is my pleasure to extend a warm welcome to you on behalf of Sant Kripal Singh Institute of Law, where we strive to provide the highest quality legal education to our students.
            </p>
            <p>
              At SKSIL, we believe that legal education should be more than just the acquisition of knowledge. Our programs are designed to foster critical thinking, ethical reasoning, and effective courtroom communication skills. Our students are encouraged to engage in continuous legal research and analysis.
            </p>
            <p>
              We understand that your choice of an academic study programme is one of the most important decisions in your life, laying the foundation for your professional career. The stated goal of our professors, faculty, and staff is to create the best possible conditions for your academic studies, personal development, and career advancement.
            </p>
            <p>
              We offer modern moot court facilities, a vast legal research library, and an open platform for debate. I invite you to join us and embark on a fulfilling legal odyssey.
            </p>
            <div className="pt-6 border-t border-stone-200">
              <p className="font-bold text-[#002147] text-lg">Dr. Sarvesh Agnihotri</p>
              <p className="text-sm text-stone-500 font-medium">Director, Sant Kripal Singh Institute of Law, Banda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
