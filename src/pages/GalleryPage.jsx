import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import galBanner from '../assets/image/gallery/gal_banner.jpg';

const imageModules = import.meta.glob('../assets/image/gallery/*.{jpg,jpeg,png}', { eager: true, import: 'default' });

const rawItems = Object.entries(imageModules)
  .filter(([path]) => !path.includes('gal_banner'))
  .map(([path, src], index) => {
    const filename = path.split('/').pop() || '';
    const isPress = filename.toLowerCase().startsWith('press');
    return {
      id: index + 1,
      filename,
      src,
      category: isPress ? 'press' : 'general',
      title: isPress ? 'Press Coverage' : 'Campus & Events',
    };
  })
  .sort((a, b) => b.filename.localeCompare(a.filename));

export default function GalleryPage({ onNavigate }) {
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredGallery = galleryFilter === 'all'
    ? rawItems
    : rawItems.filter((item) => item.category === galleryFilter);

  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      <section className="relative bg-[#002147] text-white pt-24 pb-14 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={galBanner} alt="Gallery Banner" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
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
                Explore moments from academic life, convocation honors, moot court trials, guest seminars, and press coverage at Sant Kripal Singh Institute of Law (SKSIL), Banda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
            <h2 className="font-serif text-3xl text-[#002147]">
              Gallery & Media
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setGalleryFilter('all')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-sm transition ${galleryFilter === 'all'
                  ? 'bg-[#002147] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                All ({rawItems.length})
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('press')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-sm transition ${galleryFilter === 'press'
                  ? 'bg-[#002147] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                Press Coverage ({rawItems.filter((i) => i.category === 'press').length})
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('general')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-sm transition ${galleryFilter === 'general'
                  ? 'bg-[#002147] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
              >
                Campus & Events ({rawItems.filter((i) => i.category === 'general').length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.src)}
                className="group cursor-pointer overflow-hidden rounded-sm bg-white border border-stone-200 shadow-sm hover:shadow-md transition"
              >
                <div className="h-56 overflow-hidden bg-stone-100 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-3 bg-white flex items-center justify-between border-t border-stone-100">
                  <span className="text-xs font-medium text-stone-600 group-hover:text-[#002147] transition">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#002147] font-semibold bg-stone-100 px-2 py-0.5 rounded">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-2 bg-white rounded shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-stone-300 transition"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
