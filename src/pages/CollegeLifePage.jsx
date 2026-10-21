import React from 'react';
import { ChevronRight, Users, Award, ShieldCheck } from 'lucide-react';
import hmSmall4 from '../assets/image/hm_small4.jpg';
import awareness1 from '../assets/image/awareness11738490513.jpg';
export default function CollegeLifePage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">College Life</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Vibrant Campus Atmosphere
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              College Life at SKSIL
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Experience an inspiring blend of rigorous courtroom training, cultural symposiums, sports meets, and community legal aid empowerment.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
            Holistic Student Growth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-4">
            A Supportive & Inspiring Legal Community
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Life at Sant Kripal Singh Institute of Law is shaped by intellectual curiosity, peer camaraderie, and practical advocacy. Our students participate in inter-college moot courts, organize legal literacy drives in rural Bundelkhand, and celebrate major national legal days with enthusiasm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">Student Societies & Committees</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Active student-run bodies including the Moot Court Society, Debate Club, Cultural Committee, and Sports Council that keep the campus buzzing with energy.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005a9c] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">Seminars & Guest Lectures</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Regular interactions with High Court advocates, senior judges, police dignitaries, and civil servants sharing real-life legal wisdom.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002147] mb-2">Community & Social Outreach</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Volunteering in village legal literacy camps, blood donation drives, tree plantation initiatives, and legal aid help-desks across Banda.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="overflow-hidden rounded-sm shadow border border-stone-300">
            <img src={hmSmall4} alt="College Campus Life" className="w-full h-80 object-cover hover:scale-105 transition duration-500" />
            <div className="p-3 bg-white text-xs font-semibold text-stone-700">Campus Activities & Sports Grounds</div>
          </div>
          <div className="overflow-hidden rounded-sm shadow border border-stone-300">
            <img src={awareness1} alt="Legal Outreach Camp" className="w-full h-80 object-cover hover:scale-105 transition duration-500" />
            <div className="p-3 bg-white text-xs font-semibold text-stone-700">Community Outreach & Legal Awareness Camp</div>
          </div>
        </div>
      </section>
    </div>
  );
}
