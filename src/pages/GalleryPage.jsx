import React, { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';
import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
import inspirationImg from '../assets/image/inspiration11738402799.png';
import topperImg from '../assets/image/1774343478.jpg';
import guestImg from '../assets/image/1774343512.jpg';
import campImg from '../assets/image/1774343654.jpg';
import hmSmall2 from '../assets/image/hm_small2.jpg';
import hmSmall3 from '../assets/image/hm_small3.jpg';
import awareness1 from '../assets/image/awareness11738490513.jpg';
export default function GalleryPage({ onNavigate }) {
  const [galleryFilter, setGalleryFilter] = useState('all');
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const galleryItems = [
    { id: 1, title: 'Campus Main Gate & Academic Block', img: heroGateImg, category: 'campus' },
    { id: 2, title: 'University Gold Medalist Anchal Nigam', img: topperImg, category: 'press' },
    { id: 3, title: 'ADGP Raja Babu Singh Addressing Students', img: guestImg, category: 'press' },
    { id: 4, title: 'Legal Aid & Women Rights Awareness Camp', img: campImg, category: 'press' },
    { id: 5, title: 'Param Sant Satguru Kripal Singh Ji', img: inspirationImg, category: 'campus' },
    { id: 6, title: 'State-of-the-Art Law Library', img: hmSmall3, category: 'campus' },
    { id: 7, title: 'Moot Court Training & Classroom Sessions', img: hmSmall2, category: 'campus' },
    { id: 8, title: 'Community Legal Literacy Drive', img: awareness1, category: 'press' },
  ];
  const filteredGallery = galleryFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === galleryFilter);
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
            <span className="text-[#00c5ff] font-medium">Campus Gallery</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                Campus Gallery
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Explore moments from academic life, convocation honors, moot court trials, guest seminars, and community legal aid camps at SKSIL Banda.
              </p>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
            <h2 className="font-serif text-3xl text-[#002147]">
              Campus & Events Gallery
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setGalleryFilter('all')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition ${galleryFilter === 'all'
                  ? 'bg-[#002147] text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                All Photos
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('press')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition ${galleryFilter === 'press'
                  ? 'bg-[#002147] text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                Press & Dignitaries
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('campus')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition ${galleryFilter === 'campus'
                  ? 'bg-[#002147] text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                Campus & Facilities
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-sm bg-white border border-stone-200 shadow-sm hover:shadow-md transition"
              >
                <div className="h-52 overflow-hidden bg-stone-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm font-medium text-stone-900 group-hover:text-[#002147] transition">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
