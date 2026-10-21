import React from 'react';
import { ChevronRight, Info } from 'lucide-react';
import inspirationImg from '../assets/image/inspiration11738402799.png';
export default function InspirationPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium">Our Inspiration</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                Our Inspiration
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Named in divine reverence of Param Sant Satguru Kripal Singh Ji Maharaj (Huzur Maharaj Ji), whose life mission of selfless service, compassion, and truth guides our educational journey.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-sm overflow-hidden bg-black/30 shadow-xl border border-white/10">
            <img
              src={inspirationImg}
              alt="Param Sant Satguru Kripal Singh Ji Maharaj"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center"
            />
            <div className="bg-[#001733] px-5 py-3 flex items-center gap-2.5 text-xs sm:text-[13px] text-stone-300 border-t border-white/10">
              <Info className="w-4 h-4 text-[#00c5ff] shrink-0" />
              <span>
                Param Sant Satguru Kripal Singh Ji Maharaj (Huzur Maharaj Ji) – Guiding Light & Divine Inspiration of SKSIL.
              </span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl space-y-8">
          <h2 className="font-serif text-3xl text-[#002147]">
            Param Sant Satguru Kripal Singh Ji Maharaj
          </h2>
          <div className="prose max-w-none text-stone-700 space-y-5 text-base leading-relaxed">
            <p>
              The institution derives its appellation after the worldly name of <strong>Param Sant Satguru Kripal Singh Ji</strong>, popularly addressed as <em>Huzur Maharaj Ji</em> by his disciples. Born to the Great Saint Param Purush Puran Dhani Sant Satguru Shri Maan Singh Ji (Huzur Maalik Saheb Ji) and Pujyaniya Mata Dheera Devi Ji on Sawan Badi Teras, Samvat 2009 (19th July 1952 A.D.) at Mhow (presently Dr. Ambedkar Nagar, district Indore, M.P.).
            </p>
            <p>
              Right from childhood, Huzur Maharaj Ji was keenly interested in spiritual activities and opted to lead the life of a devotee and disciple with unmatched dedication and total surrenderance. His mool mantra was: <em className="text-[#002147] font-semibold">“Sewa of Satsangis is the Param Sewa of the Guru.”</em>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#f0f4f8] p-6 rounded-sm border-l-4 border-[#002147] italic text-stone-800">
              <p className="text-base mb-3">
                “इबादत है किसी नाशाद का दिल शाद कर देना।<br />
                इबादत है किसी बरबाद को आबाद कर देना।<br />
                इबादत है किसी बेकफन को कफन उढ़ा देना।<br />
                इबादत है किसी दर्दमंद का दर्द बँटा लेना।”
              </p>
              <span className="font-semibold text-xs uppercase tracking-wider text-[#002147]">— हुज़ूर महाराज</span>
            </div>
            <div className="bg-[#f0f4f8] p-6 rounded-sm border-l-4 border-[#002147] italic text-stone-800">
              <p className="text-base mb-3">
                “महापुरुष जहाँ रहते हैं, वह स्थान तीर्थ बन जाता है।<br />
                वे जो भी कहते हैं वह शास्त्र बन जाता है।”
              </p>
              <span className="font-semibold text-xs uppercase tracking-wider text-[#002147]">— हुज़ूर महाराज जी</span>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-base">
            Huzur Maharaj Ji brought together two spiritual lineages—Surat Shabda Yog and Shaktipat Mahayog—purifying the individual self (Jeevatma) and conjoining with the Supreme Consciousness (Parmatma). At SKSIL, these values translate into honesty, empathy, and advocacy for those who cannot fight for themselves.
          </p>
        </div>
      </section>
    </div>
  );
}
