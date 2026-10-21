import React from 'react';
import { ChevronRight, Info } from 'lucide-react';
import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
export default function AboutInstitutePage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const historyTimeline = [
    {
      year: '1952',
      title: 'Divine Inspiration & Legacy',
      desc: 'Param Sant Satguru Kripal Singh Ji Maharaj (Huzur Maharaj Ji) was born on 19th July 1952 at Mhow (Dr. Ambedkar Nagar, M.P.), dedicating his life to universal service, truth, and spiritual guidance which forms the moral foundation of SKSIL.',
    },
    {
      year: '2016',
      title: 'Foundation of SKSIL in Banda',
      desc: 'Sant Kripal Singh Institute of Law was established as a premier not-for-profit law academy to provide transformative, affordable legal education in the historic Bundelkhand region.',
    },
    {
      year: '2018',
      title: 'Bar Council of India (BCI) Recognition',
      desc: 'The Bar Council of India, New Delhi granted approval to conduct 5-Year Integrated B.A. LL.B. and 3-Year Professional LL.B. degree courses.',
    },
    {
      year: '2020',
      title: 'Affiliation with Bundelkhand University, Jhansi',
      desc: 'Formally affiliated to Bundelkhand University, Jhansi (U.P.), initiating comprehensive legal training, moot court competitions, and free legal aid clinics.',
    },
    {
      year: '2023',
      title: 'University Gold Medal Distinction',
      desc: 'Students Raj Kishor Pandey & Anchal Nigam clinched the prestigious University Gold Medals, conferred by Hon. Governor Smt. Anandiben Patel and the Higher Education Minister of UP.',
    },
  ];
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
            <span className="text-[#00c5ff] font-medium">About SKSIL</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                About the Institute
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Sant Kripal Singh Institute of Law is the premier legal institution of Bundelkhand, dedicated to ethical jurisprudence, top academic rankings, and social justice.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-sm overflow-hidden bg-black/30 shadow-xl border border-white/10">
            <img
              src={heroGateImg}
              alt="Sant Kripal Singh Institute of Law Campus"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center"
            />
            <div className="bg-[#001733] px-5 py-3 flex items-center gap-2.5 text-xs sm:text-[13px] text-stone-300 border-t border-white/10">
              <Info className="w-4 h-4 text-[#00c5ff] shrink-0" />
              <span>
                Sant Kripal Singh Institute of Law, Naraini Road, Banda (U.P.) – Affiliated to Bundelkhand University, Jhansi & BCI approved.
              </span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="space-y-12 max-w-4xl">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Our Journey & Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-8">
              Legacy of Academic & Legal Excellence
            </h2>
          </div>
          {historyTimeline.map((item) => (
            <div
              key={item.year}
              className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start border-b border-stone-100 pb-10"
            >
              <div className="sm:col-span-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#002147] font-semibold">
                  {item.year}
                </span>
              </div>
              <div className="sm:col-span-9 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#002147] font-normal">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
