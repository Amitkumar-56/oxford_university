import React, { useState } from 'react';
import { ChevronRight, Calendar, Download, Search, Users } from 'lucide-react';
import campImg from '../assets/image/1774343654.jpg';
import guestImg from '../assets/image/1774343512.jpg';
export default function EventsPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const events = [
    {
      id: 5,
      title: 'National Law Day & Seminar on Constitutional Jurisprudence',
      date: 'November 26, 2026',
      tag: 'Symposium',
      description: 'Annual National Law Day celebration featuring keynote addresses by Hon. High Court judges, moot propositions, and constitutional law debates.',
      img: guestImg
    },
    {
      id: 6,
      title: 'Legal Literacy Camp on Women & Children Rights',
      date: 'October 15, 2026',
      tag: 'Legal Outreach',
      description: 'Community legal aid and empowerment drive organized across Banda rural blocks by SKSIL Legal Aid Clinic in association with District Legal Services Authority.',
      img: campImg
    },
    {
      id: 3,
      title: 'Bar & Bench Induction Session for New Entrants',
      date: 'September 20, 2026',
      tag: 'Workshop',
      description: 'Interactive orientation with senior advocates of Allahabad High Court and District Bar Association Banda on courtroom advocacy ethics.',
      img: guestImg
    }
  ];
  const filteredEvents = events.filter(e =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
              Discover upcoming legal conferences, moot court competitions, distinguished guest lectures, and socio-legal awareness camps at SKSIL.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
              Campus Conferences & Outreach
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Events designed to enrich courtroom exposure and professional camaraderie.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
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
                  onClick={() => handleNav('contact')}
                  className="text-xs font-bold text-[#002147] hover:underline"
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
