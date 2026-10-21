import React from 'react';
import { ChevronRight, Info } from 'lucide-react';
import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
export default function SecretaryMessagePage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Secretary’s Message</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                Secretary’s Message
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                “Pursuing a career in law is a noble calling, and we are committed to providing you with the best possible education to achieve your full potential.”
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
                Sant Kripal Singh Institute of Law, Banda (U.P.) – Office of the Secretary.
              </span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl text-[#002147]">
            Secretary’s Address to Students & Aspirants
          </h2>
          <div className="bg-[#f7fafc] border border-stone-200 p-8 rounded-sm space-y-5 text-stone-700 leading-relaxed text-base">
            <p className="font-semibold text-stone-900 text-lg">Dear Students,</p>
            <p>
              As the Secretary of Sant Kripal Singh Institute of Law, it is my pleasure to welcome you to our institution. Pursuing a career in law is a noble calling, and we are committed to providing you with the best possible education to help you achieve your goals.
            </p>
            <p>
              At SKSIL, we are dedicated to fostering a supportive and collaborative learning environment that encourages critical thinking and intellectual growth. Our experienced faculty members are passionate about teaching and committed to helping you achieve your full potential. We offer a rigorous curriculum covering constitutional law, criminal jurisprudence, and civil procedures.
            </p>
            <p>
              In addition to our academic offerings, we provide rich opportunities for students to engage in practical legal experiences—including chamber internships, national moot court competitions, and rural legal aid clinics.
            </p>
            <p>
              I encourage you to explore our website and learn more about our programmes, admissions, and campus resources. We look forward to welcoming you to our community.
            </p>
            <div className="pt-6 border-t border-stone-200">
              <p className="font-bold text-[#002147] text-lg">Yash Shivhare</p>
              <p className="text-sm text-stone-500 font-medium">Secretary, Sant Kripal Singh Institute of Law, Banda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
