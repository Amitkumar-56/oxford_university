import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Search, ChevronLeft, Image as ImageIcon } from 'lucide-react';
import eventsBanner from '../assets/image/events_banner.jpg';

const eventImages = import.meta.glob('../assets/image/events/*.{jpg,jpeg,png}', { eager: true, import: 'default' });

const getEventImages = (prefix) => {
  return Object.entries(eventImages)
    .filter(([path]) => path.includes(prefix))
    .map(([, src]) => src);
};

const EVENTS_DATA = [
  {
    id: 1,
    title: 'Farewell and Prize Distribution',
    date: 'Annual Fest',
    tag: 'Academic Ceremony',
    description: 'Annual farewell gathering and merit prize distribution ceremony acknowledging academic achievements and co-curricular excellence.',
    images: getEventImages('event_1_'),
  },
  {
    id: 2,
    title: "International Women's Day",
    date: 'March 8',
    tag: 'Celebration & Seminar',
    description: 'Symposium and special addresses dedicated to gender justice, women empowerment in the legal profession, and leadership.',
    images: getEventImages('event_2_'),
  },
  {
    id: 3,
    title: "Legal Awareness Camp on Women's Rights",
    date: 'Community Outreach',
    tag: 'Legal Aid Clinic',
    description: 'Outreach campaign organized by SKSIL Legal Aid Clinic spreading legal awareness and rights awareness in local communities.',
    images: getEventImages('event_3_'),
  },
  {
    id: 4,
    title: 'District Court Visit',
    date: 'Practical Training',
    tag: 'Courtroom Exposure',
    description: 'Field visit to the District & Sessions Court Banda providing students hands-on observation of courtroom trials and judicial procedures.',
    images: getEventImages('event_4_'),
  },
  {
    id: 5,
    title: 'Legal Awareness Drive',
    date: 'Outreach Camp',
    tag: 'Legal Literacy',
    description: 'Comprehensive rural legal literacy drive to educate citizens on fundamental rights, consumer protections, and dispute redressal.',
    images: getEventImages('event_5_'),
  },
  {
    id: 6,
    title: 'Celebrating the Supremacy of the Constitution',
    date: 'November 26',
    tag: 'Constitution Day',
    description: 'Commemoration of the Constitution of India with scholarly deliberations on constitutional ethos, judicial independence, and rule of law.',
    images: getEventImages('event_6_'),
  },
  {
    id: 7,
    title: 'Plantation Drive',
    date: 'Eco Initiative',
    tag: 'Campus Green Drive',
    description: 'Eco-sustainability initiative by faculty and law students planting saplings across the college campus for a greener environment.',
    images: getEventImages('event_7_'),
  },
  {
    id: 8,
    title: 'University Topper 2023',
    date: 'Academic Honor',
    tag: 'Felicitation',
    description: 'Celebrating university merit rankers and medal winners who brought academic glory to SKSIL Banda.',
    images: getEventImages('event_8_'),
  },
  {
    id: 9,
    title: 'University Topper 2024',
    date: 'Academic Honor',
    tag: 'Felicitation',
    description: 'Honoring consecutive academic achievements and meritorious performers in university law examinations.',
    images: getEventImages('event_9_'),
  },
  {
    id: 10,
    title: 'Basant Panchami 2026',
    date: 'Saraswati Puja',
    tag: 'Cultural Celebration',
    description: 'Traditional Saraswati Puja celebration seeking the blessings of the goddess of learning, wisdom, and justice.',
    images: getEventImages('event_10_'),
  },
];

function EventCardSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="w-full h-52 bg-stone-200" />;
  }

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-52 overflow-hidden bg-stone-100 group">
      {/* Sliding flex carousel track */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full shrink-0">
            <img
              src={img}
              alt={`${title} slide ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-md cursor-pointer z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-md cursor-pointer z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>

          <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/60 text-white flex items-center gap-1 backdrop-blur-xs z-10">
            <ImageIcon className="w-3 h-3" />
            {currentIndex + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
}

export default function EventsPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredEvents = EVENTS_DATA.filter((e) =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      {/* Top Banner Section */}
      <section className="relative bg-[#002147] text-white pt-24 pb-14 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={eventsBanner} alt="Events Banner" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('notifications')} className="hover:text-white transition">
              Notifications
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Events & Seminars</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Academic & Cultural Calendar
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Events & Seminars
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Discover legal awareness drives, court visits, constitution day symposiums, prize distributions, and academic celebrations at Sant Kripal Singh Institute of Law.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
              Campus Conferences & Outreach
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Events designed to enrich courtroom exposure, student leadership, and legal outreach.
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147] bg-white"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <EventCardSlider images={item.images} title={item.title} />

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-[#002147] font-semibold rounded-xs">
                      {item.tag}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#002147] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 px-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Sant Kripal Singh Institute</span>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="text-xs font-bold text-[#002147] hover:underline cursor-pointer"
                >
                  Join / Enquire &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
