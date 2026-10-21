import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  ChevronRight,
  Tag,
  Share2
} from 'lucide-react';

import blog1 from '../assets/image/blog1791451456.png';
import blog2 from '../assets/image/blog1787981516.png';
import blog3 from '../assets/image/blog1778915999.png';
import blog4 from '../assets/image/blog1747044490.jpeg';

export default function Blogs({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articles = [
    {
      id: 'natural-law',
      title: 'NATURAL LAW THEORY IN INDIAN JURISPRUDENCE',
      date: 'October 08, 2026',
      author: 'Faculty of Jurisprudence, SKSIL',
      image: blog1,
      category: 'jurisprudence',
      tag: 'Jurisprudence',
      readTime: '6 min read',
      excerpt: 'Exploring how the ancient concept of Dharma and natural justice principles are woven into Article 14 and Article 21 of the Constitution of India.',
      content: `Natural law theory is grounded on universal moral principles inherent in human nature and discernible through reason. In Indian jurisprudence, the concept of natural law is deeply embedded in the ancient concept of 'Dharma'—the righteous duty that sustains the cosmos and human order.

In modern Indian constitutional history, the Supreme Court in the landmark Maneka Gandhi v. Union of India (1978) case revitalized Natural Law by holding that the procedure established by law under Article 21 must be 'just, fair, and reasonable', not arbitrary or oppressive.

Today, natural justice principles (Nemo Judex In Causa Sua and Audi Alteram Partem) are the touchstone of administrative law and protection against state arbitrariness.`
    },
    {
      id: 'consumer-markets',
      title: 'Protecting Consumer Autonomy in Digital Markets: A Legal Perspective',
      date: 'August 29, 2026',
      author: 'Center for Cyber & Commercial Law',
      image: blog2,
      category: 'commercial',
      tag: 'Consumer Law',
      readTime: '5 min read',
      excerpt: 'Analyzing dark patterns, algorithmic manipulation, and the Consumer Protection (E-Commerce) Rules protecting Indian digital shoppers.',
      content: `The explosive growth of e-commerce and AI-driven marketplaces has created sophisticated challenges for consumer rights. Algorithms frequently deploy 'dark patterns'—deceptive user interface designs that manipulate consumers into unwanted purchases or subscriptions.

The Consumer Protection Act 2019 and Central Consumer Protection Authority (CCPA) guidelines have taken strong cognizance of unfair trade practices in digital spaces, ensuring that consumer consent remains informed, autonomous, and free from algorithmic deception.`
    },
    {
      id: 'lifestyle-society',
      title: 'Life Style and Society: A New Constitutional Vision',
      date: 'May 16, 2026',
      author: 'Dean of Academic Affairs',
      image: blog3,
      category: 'constitutional',
      tag: 'Society & Law',
      readTime: '4 min read',
      excerpt: 'How modern socio-economic evolutions reflect in judicial interpretations of personal liberty, privacy, and dignity.',
      content: `A society's legal architecture is the mirror of its collective conscience. As lifestyles transform under technological acceleration, the law must expand to protect individual autonomy, dignity, and mental well-being as foundational aspects of the right to life.`
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation in Legal Education',
      date: 'May 12, 2025',
      author: 'SKSIL Research Forum',
      image: blog4,
      category: 'education',
      tag: 'Legal Education',
      readTime: '5 min read',
      excerpt: 'Virtual courts, online dispute resolution (ODR), and AI in legal research are reshaping how law is taught in Indian academies.',
      content: `The modern advocate must be equally adept in forensic data examination, AI prompt research, and electronic filings as in traditional rhetoric. Sant Kripal Singh Institute of Law is pioneering computerized legal training to prepare future litigators for digitized bar and bench operations.`
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Blogs & Research</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                SKSIL Legal Research & Publications
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
                Legal Articles & Insights
              </h1>
              <p className="text-base sm:text-lg text-stone-200 font-light max-w-3xl leading-relaxed">
                Critical commentaries on constitutional jurisprudence, consumer protection, criminal reforms, and digital legal transformations penned by our faculty and scholars.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        {activeArticle && (
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-lg mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-0.5 text-xs font-bold uppercase bg-blue-50 text-[#005a9c] rounded">
                {activeArticle.tag}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-bold text-stone-500 hover:text-black uppercase"
              >
                Close Article ✕
              </button>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#002147] mb-3">
              {activeArticle.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-stone-500 mb-6">
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>By {activeArticle.author}</span>
            </div>
            <div className="prose max-w-none text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {activeArticle.content}
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-5 mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Knowledge Repository
            </span>
            <h2 className="font-serif text-3xl text-[#002147] mt-1">
              Recent Blog Articles
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
              />
            </div>
          </div>
        </div>

        {/*  Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-stone-200 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#002147] mb-2 line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={() => {
                    setActiveArticle(art);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005a9c] hover:text-[#002147] uppercase tracking-wider"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
