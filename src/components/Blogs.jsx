import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  ChevronRight,
  Tag
} from 'lucide-react';

import blog1 from '../assets/image/blog1791451456.png';
import blog2 from '../assets/image/blog1787981516.png';
import blog3 from '../assets/image/blog1778915999.png';
import blog4 from '../assets/image/blog1747044490.jpeg';
import blogEnv from '../assets/image/blog1768385264.png';
import blogJudicial from '../assets/image/blog1768299597.png';
import blogConsumerDay from '../assets/image/blog1716205179.jpg';
import blogLlb from '../assets/image/blog1715638616.jpg';
import blogAdminReview from '../assets/image/blog1778834982.png';
import blogUgc from '../assets/image/blog1778833345.jpeg';
import blogCoat from '../assets/image/blog1747992431.jpg';
import blogPil from '../assets/image/blog1742461132.jpg';

export default function Blogs({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // All 12 blogs from SKSIL
  const articles = [
    {
      id: 'environmental-justice',
      title: 'The legal implications of environmental justice in the context of human rights',
      url: '/blog-details/The-legal-implications-of-environmental-justice-in-the-context-of-human-rights',
      date: 'September 09, 2026',
      author: 'Pradip Kumar (Assistant Professor)',
      image: blogEnv,
      category: 'environmental',
      tag: 'Environmental Law',
      readTime: '7 min read',
      excerpt: 'Clean and safe environment as a human right, global frameworks, Stockholm declaration, and landmark Article 21 jurisprudence in India.',
    },
    {
      id: 'judicial-activism',
      title: 'Judicial Activism or Judicial Adventurism: A Constitutional Perspective',
      url: '/blog-details/Judicial-Activism-or-Judicial-Adventurism:-A-Constitutional-Perspective',
      date: 'January 13, 2026',
      author: 'Varun Rai Saxena (Assistant Professor)',
      image: blogJudicial,
      category: 'constitutional',
      tag: 'Constitutional Law',
      readTime: '6 min read',
      excerpt: 'The fine distinction between progressive activism and legislative adventurism under the Indian constitutional checks and balances.',
    },
    {
      id: 'ugc-equity',
      title: 'UGC Equity Regulations: Reform or Risk?',
      url: '/blog-details/UGC-Equity-Regulations:-Reform-or-Risk',
      date: 'May 15, 2026',
      author: 'Varun Rai (Assistant Professor)',
      image: blogUgc,
      category: 'education',
      tag: 'Higher Education Law',
      readTime: '8 min read',
      excerpt: 'Critical constitutional analysis of UGC equity regulations under Articles 14, 15, and 21 regarding discrimination in higher education.',
    },
    {
      id: 'advocate-coat',
      title: 'अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?',
      url: '/blog-details/अधिवक्ता-और-न्यायाधीश-काला-कोट-एवं-सफेद-बैंड-क्यों-पहनते-है',
      date: 'October 15, 2025',
      author: 'प्रदीप कुमार, सहायक आचार्य (LL.M., NET)',
      image: blogCoat,
      category: 'history',
      tag: 'विधिक इतिहास',
      readTime: '6 min read',
      excerpt: '1327 ई० से शुरू हुई वकालत की ड्रेस कोड परंपरा, महारानी क्वीन मैरी का शोक, और 1961 के अधिवक्ता अधिनियम का गहरा रहस्य।',
    },
    {
      id: 'pil-history',
      title: 'Public Interest Litigation (PIL) : History & Importance',
      url: '/blog-details/Public-Interest-Litigation-(PIL)-History-Importance',
      date: 'May 23, 2025',
      author: 'लेखक ~ प्रदीप कुमार (LL.M., NET)',
      image: blogPil,
      category: 'constitutional',
      tag: 'लोकहित वाद',
      readTime: '7 min read',
      excerpt: 'लोकहित वाद (PIL) का ऐतिहासिक उद्भव, न्यायमूर्ति पी० एन० भगवती का योगदान और हुस्न आरा खातून वाद में विचारधीन कैदियों को न्याय।',
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation in Legal Education',
      url: '/blog-details/Digital-Transformation-in-Legal-Education',
      date: 'January 13, 2026',
      author: 'SKSIL Research Forum',
      image: blog4,
      category: 'education',
      tag: 'Legal Education',
      readTime: '5 min read',
      excerpt: 'Virtual courts, online dispute resolution (ODR), and AI in legal research are reshaping how law is taught in Indian academies.',
    },
    {
      id: 'consumer-day',
      title: 'विश्व उपभोक्ता अधिकार दिवस',
      url: '/blog-details/विश्व-उपभोक्ता-अधिकार-दिवस',
      date: 'May 23, 2025',
      author: 'उपभोक्ता संरक्षण प्रकोष्ठ, SKSIL',
      image: blogConsumerDay,
      category: 'consumer',
      tag: 'उपभोक्ता अधिकार',
      readTime: '6 min read',
      excerpt: 'विश्व उपभोक्ता अधिकार दिवस का इतिहास, 15 मार्च का महत्व, उपभोक्ता संरक्षण अधिनियम 2019 और उपभोक्ताओं के मूल अधिकार।',
    },
    {
      id: 'llb-mahatva',
      title: 'LL.B. का महत्व',
      url: '/blog-details/LL.B.-का-महत्व',
      date: 'May 23, 2025',
      author: 'विधि संकाय, SKSIL बांदा',
      image: blogLlb,
      category: 'education',
      tag: 'विधिक शिक्षा',
      readTime: '5 min read',
      excerpt: 'संविधान, शासन प्रणाली और नागरिक अधिकारों की समझ। जानिए LL.B. डिग्री समाज में न्याय स्थापना और करियर में कैसे अग्रणी है।',
    },
    {
      id: 'natural-law',
      title: 'NATURAL LAW THEORY IN INDIAN JURISPRUDENCE',
      url: '/blog-details/NATURAL-LAW-THEORY-IN-INDIAN-JURISPRUDENCE',
      date: 'October 08, 2026',
      author: 'Faculty of Jurisprudence, SKSIL',
      image: blog1,
      category: 'jurisprudence',
      tag: 'Jurisprudence',
      readTime: '6 min read',
      excerpt: 'Exploring how the ancient concept of Dharma and natural justice principles are woven into Article 14 and Article 21 of the Constitution of India.',
    },
    {
      id: 'consumer-markets',
      title: 'Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective',
      url: '/blog-details/Protecting-Consumer-Autonomy-in-Digital-Markets:-A-Legal-and-Regulatory-Perspective',
      date: 'August 29, 2026',
      author: 'Center for Cyber & Commercial Law',
      image: blog2,
      category: 'consumer',
      tag: 'Consumer Law',
      readTime: '5 min read',
      excerpt: 'Analyzing dark patterns, algorithmic manipulation, and the Consumer Protection (E-Commerce) Rules protecting Indian digital shoppers.',
    },
    {
      id: 'lifestyle-society',
      title: 'Life Style and Society: A New Vision',
      url: '/blog-details/Life-Style-and-Society:-A-New-Vision',
      date: 'May 16, 2026',
      author: 'Dean of Academic Affairs',
      image: blog3,
      category: 'constitutional',
      tag: 'Society & Law',
      readTime: '4 min read',
      excerpt: 'How modern socio-economic evolutions reflect in judicial interpretations of personal liberty, privacy, and individual human dignity.',
    },
    {
      id: 'judicial-review',
      title: 'Judicial Review of Administrative Action in Bharat',
      url: '/blog-details/Judicial-Review-of-Administrative-Action-in-Bharat',
      date: 'September 09, 2026',
      author: 'Department of Public Law, SKSIL',
      image: blogAdminReview,
      category: 'constitutional',
      tag: 'Administrative Law',
      readTime: '8 min read',
      excerpt: 'Comprehensive doctrine of Judicial Review in Bharat, constitutional safeguards under Articles 32 & 226, and Wednesbury unreasonableness.',
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      {/* Header Banner */}
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

      {/* Main Blog Cards Section */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-5 mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Knowledge Repository
            </span>
            <h2 className="font-serif text-3xl text-[#002147] mt-1">
              All Articles & Research Papers ({filteredArticles.length})
            </h2>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search articles by title or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147] w-64 sm:w-80"
              />
            </div>
          </div>
        </div>

        {/* 12 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-stone-200 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="w-full h-48 overflow-hidden bg-stone-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 mb-2.5">
                    <span className="px-2 py-0.5 bg-blue-50 text-[#005a9c] font-semibold rounded text-[10px] uppercase">
                      {art.tag}
                    </span>
                    <div className="flex items-center gap-1 text-stone-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#002147] mb-2 line-clamp-2 leading-snug group-hover:text-[#005a9c] transition">
                    <a href={art.url}>{art.title}</a>
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>

                  <p className="text-[11px] text-stone-400 italic">
                    By {art.author}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={art.url}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005a9c] hover:text-[#002147] uppercase tracking-wider transition"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-stone-400 font-medium">
                  {art.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
