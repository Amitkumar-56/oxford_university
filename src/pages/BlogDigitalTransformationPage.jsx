import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1747044490.jpeg';
import blogImg2 from '../assets/image/blog11747044490.jpeg';
import blogImg3 from '../assets/image/blog21747044490.jpeg';
import blogImg4 from '../assets/image/blog31747044490.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogDigitalTransformationPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recentPosts = [
    { title: 'LL.B. का महत्व', date: '2025-05-23 09:18:47', img: thumb1, link: '/blog-details/LL.B.-का-महत्व' },
    { title: 'भारत के संविधान का निर्माण', date: '2024-05-20 11:28:51', img: thumb2, link: '/blogs' },
    { title: 'विश्व उपभोक्ता अधिकार दिवस', date: '2025-05-23 09:16:22', img: thumb3, link: '/blog-details/विश्व-उपभोक्ता-अधिकार-दिवस' },
    { title: 'विश्व उपभोक्ता अधिकार दिवस', date: '2025-05-23 09:13:14', img: thumb4, link: '/blog-details/विश्व-उपभोक्ता-अधिकार-दिवस' },
    { title: 'Public Interest Litigation (PIL) : History & Importance', date: '2025-05-23 09:12:09', img: thumb5, link: '/blog-details/Public-Interest-Litigation-(PIL)-History-Importance' },
    { title: 'Digital Transformation in Legal Education', date: '2026-01-13 06:28:03', img: thumb6, link: '/blog-details/Digital-Transformation-in-Legal-Education' },
    { title: 'अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?', date: '2025-10-15 05:48:33', img: thumb7, link: '/blog-details/अधिवक्ता-और-न्यायाधीश-काला-कोट-एवं-सफेद-बैंड-क्यों-पहनते-है' },
    { title: 'Judicial Activism or Judicial Adventurism: A Constitutional Perspective', date: '2026-01-13 10:19:57', img: thumb8, link: '/blog-details/Judicial-Activism-or-Judicial-Adventurism:-A-Constitutional-Perspective' },
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-10 px-4 sm:px-8 lg:px-12 border-b border-[#003366]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-300 mb-4">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('blogs')} className="hover:text-white transition">Blog</button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">Digital Transformation in Legal Education</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            Digital Transformation in Legal Education
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="Digital Transformation in Legal Education" className="w-full h-auto max-h-[460px] object-cover object-center" />
            </div>

            <div className="flex flex-wrap items-center justify-between border-y border-stone-200 py-2.5 mb-6 text-stone-600 text-xs sm:text-sm gap-2">
              <span className="font-medium text-stone-700">Share this article:</span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-[#1877f2] hover:bg-[#166fe5] text-white rounded text-xs font-semibold transition"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Digital Transformation in Legal Education')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-[#1da1f2] hover:bg-[#0c85d0] text-white rounded text-xs font-semibold transition"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-[#0077b5] hover:bg-[#005e93] text-white rounded text-xs font-semibold transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-4 text-stone-800 leading-relaxed text-sm sm:text-base [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_strong]:font-bold [&_strong]:text-stone-900">
              
                           <p><strong>Did you know that 87% of law students now use digital tools for research and learning? </strong></p><p>Gone are the days when legal education was all about bulky law books, endless paperwork, and traditional courtroom experiences. With rapid technological advancements, the way law is taught and practiced has evolved significantly. From AI-powered legal research to virtual learning platforms, technology is making legal education more accessible, efficient, and engaging than ever before. </p><p><strong>AI in Legal Research – Work Smarter, Not Harder! </strong></p><p>Legal research used to be a long, tedious process—flipping through hundreds of pages to find the right case law or precedent. Now, AI tools can scan thousands of legal documents in seconds, providing accurate and relevant insights. Some AI platforms even analyze past judgments to predict case outcomes, helping future lawyers build stronger arguments. Platforms like <strong>ROSS Intelligence and Casetext</strong> are revolutionizing legal research by offering AI-driven insights at lightning speed. </p><p><strong>Learn Law Anytime, Anywhere !</strong></p><p>With online learning platforms, legal education is no longer limited to classrooms. Whether you're a working professional or a student juggling multiple commitments, you can access high-quality legal courses from anywhere in the world. Study at your own pace and fit learning around your schedule with interactive courses, live webinars, and expert-led sessions on platforms like <strong>Coursera, edX, and LawShelf.</strong> </p><p><i>Explore SKSIL’s flexible learning programs designed for the modern law student. </i></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="Digital Transformation in Legal Education" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <p><strong>Real-World Practice Through Simulations </strong></p><p>Learning law isn’t just about reading—it’s about doing. Virtual simulations let students experience real-life legal scenarios, such as drafting contracts, negotiating deals, and presenting cases in mock trials. These simulations enhance practical skills, including client interaction, argument formation, and legal reasoning. Universities and law firms now use <strong>Virtual Reality (VR) and AI-powered mock trials</strong> to provide hands-on legal training. </p><p><strong>Say Goodbye to Boring Lectures! </strong></p><p>Gone are the days of passive learning. Virtual classrooms now allow students to collaborate in real-time, engage in live discussions, and receive instant feedback from professors. With tools like<strong> AI tutors, gamified legal exercises, and legal tech labs</strong>, learning law has never been more exciting! Interactive platforms like <strong>Blackboard, Zoom, and Microsoft Teams </strong>enable law students to participate in case studies and legal debates from anywhere. </p><p><strong>SKSIL Law College – Embracing the Future of Legal Education </strong></p><p>At SKSIL Law College, we don't just teach law; we prepare you for the digital future of legal practice. Our curriculum includes AI-powered research tools, virtual moot courts, and interactive legal tech training—ensuring you're ahead of the curve. With the rapid evolution of the legal industry, traditional methods are no longer sufficient. That’s why we integrate technology, critical thinking, and real-world case studies into our teaching approach. Our faculty comprises experienced legal professionals who guide students through the complexities of modern legal challenges. Additionally, our strong industry connections and internship opportunities provide students with hands-on experience in prestigious law firms and corporate legal departments. </p><p><i><strong>Join SKSIL Law College and gain hands-on experience with the latest legal technology. </strong></i></p><p><a href="/admissions/apply" className="inline-block mt-2 font-bold text-[#005a9c] hover:underline"><i><strong>Apply today! </strong></i></a></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="Digital Transformation in Legal Education" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="Digital Transformation in Legal Education" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200">
              <button 
                onClick={() => handleNav('admissions/apply')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002147] hover:bg-[#003366] text-white rounded text-xs font-bold uppercase tracking-wider transition shadow"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6 space-y-3">
              <h2 className="font-serif text-lg font-bold text-[#002147] pb-2 border-b-2 border-[#002147] inline-block">
                WELCOME TO SKSIL
              </h2>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                <strong>Sant Kripal Singh Institute of Law</strong> welcomes all the law aspirants who desire to study law with us.
              </p>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                <strong>Affiliated to Bundelkhand University, Jhansi</strong> and <strong>approved by the Bar Council of India,</strong> the Institute is the only Law School in the Bundelkhand region that provides quality education.
              </p>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Campus truly blessed by Mother Nature on the city’s outskirts, has every modern and hi-tech facility that a law school must-have. <strong>Resourceful library to Moot-Court, Wi-Fi to an online database,</strong> the Institute has everything a law student need.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6">
              <h3 className="font-serif text-base font-bold text-[#002147] pb-2 mb-4 border-b border-stone-200">
                Recent Posts
              </h3>
              <ul className="space-y-3 divide-y divide-stone-100">
                {recentPosts.map((post, idx) => (
                  <li key={idx} className="pt-3 first:pt-0 flex items-start gap-3 group">
                    <div className="w-14 h-14 shrink-0 rounded-sm overflow-hidden bg-stone-200 border border-stone-200">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a 
                        href={post.link} 
                        className="font-medium text-xs text-stone-900 group-hover:text-[#005a9c] transition line-clamp-2 leading-snug"
                      >
                        {post.title}
                      </a>
                      <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        <span>{post.date}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
