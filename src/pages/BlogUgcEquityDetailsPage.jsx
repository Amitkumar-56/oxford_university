import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1778833345.jpeg';
import blogImg2 from '../assets/image/blog11778833345.jpeg';
import blogImg3 from '../assets/image/blog21778833345.jpeg';
import blogImg4 from '../assets/image/blog31778833345.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogUgcEquityDetailsPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">UGC Equity Regulations: Reform or Risk?</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            UGC Equity Regulations: Reform or Risk?
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="UGC Equity Regulations: Reform or Risk?" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('UGC Equity Regulations: Reform or Risk?')}`}
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
              
                           <p>The 2026 Equity Regulations issued by the <strong>University Grants Commission</strong> aim to curb discrimination in higher education institutions through specialized enforcement mechanisms. While the stated objective is inclusion and protection of marginalized groups, the framework has attracted criticism for creating unequal legal coverage and procedural imbalance. This article critically examines how the Regulations may adversely affect the rights of general category students, raising concerns under Articles 14, 15, and 21 of the Constitution of India, and the doctrine of equal protection of laws.</p><h4><strong>Introduction</strong></h4><p>Anti-discrimination regulation in higher education is both necessary and constitutionally supported. However, when regulatory frameworks adopt selective protection models without universal procedural balance, they risk violating the very equality principles they seek to enforce. The UGC Equity Regulations, 2026 attempt to institutionalize equity enforcement through committees, monitoring bodies, and complaint systems. Yet, their structural design and definitional scope have generated serious legal debate — particularly regarding the exclusion or weak protection of general category students facing discrimination. A regulation intended to prevent injustice must itself withstand the test of constitutional fairness.</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="UGC Equity Regulations: Reform or Risk?" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <h3><strong>Core Structure of the Regulations</strong></h3><p>The Regulations mandate that universities establish Equal Opportunity Centres, Equity Committees, and complaint redressal mechanisms focused primarily on caste-based and social discrimination affecting specified communities. Institutions are placed under strict compliance duties, backed by regulatory consequences.</p><p>While protective targeting is not per se unconstitutional, constitutional jurisprudence requires that any classification must be:</p><ul><li>Based on <strong>intelligible differentia</strong>, and</li><li>Have a <strong>rational nexus</strong> with the objective sought to be achieved (Article 14 test).</li></ul><p>The present framework is criticized for failing the second limb when it results in <strong>denial or dilution of remedy for similarly situated victims outside listed groups.</strong></p><h3><strong>Article 14 — Equality Before Law and Equal Protection</strong></h3><p>Article 14 guarantees both <strong>equality before law</strong> and <strong>equal protection of laws</strong>. The second limb is crucial — it requires that legal remedies remain accessible to all persons similarly affected by wrongdoing. If a regulatory complaint structure recognizes discrimination only when suffered by specified social categories — while offering no equivalent channel for general category victims of comparable misconduct — the protection becomes asymmetrical. Such asymmetry may be challenged as under-inclusive and constitutionally suspect. The <strong>Supreme Court of India</strong> has repeatedly held that classification cannot become exclusion when the harm addressed is universal in nature.</p><h3><strong>Article 15 — Non-Discrimination Principle</strong></h3><p>Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. While Articles 15(4) and 15(5) permit <strong>special provisions for socially and educationally backward classes</strong>, these are enabling — not exclusionary — clauses. They allow additional protection; they do not justify <strong>withdrawal of protection from others. </strong>A regulatory model that structurally centers only certain identity categories in complaint recognition — without parallel channels for others — risks converting protective discrimination into regulatory discrimination.</p><h3><strong>Due Process and Procedural Fairness Concerns</strong></h3><p>Beyond classification, procedural design raises additional concerns:</p><ul><li>Absence of <strong>clear standards of proof</strong> in discrimination findings</li><li>Broad and open-ended definitions open to subjective interpretation</li><li>Limited safeguards against <strong>motivated or strategic complaints</strong></li><li>Strong institutional penalties without proportionate adjudicatory safeguards</li></ul><p>Under Article 21, any framework that affects reputation, academic standing, or institutional access must follow <strong>fair, just, and reasonable procedure</strong>. Regulatory enforcement without tight procedural guardrails may fail this due process threshold.</p><h3><strong>Risk of Reverse Exclusion in Campus Justice</strong></h3><p>A paradox emerges: a rule designed to reduce exclusion may unintentionally create <strong>reverse exclusion</strong> in grievance recognition. General category students who experience harassment, bias, or caste-linked targeting may find themselves outside the specialized redressal framework — forced into slower, generic channels while others receive fast-track institutional mechanisms. Equality law does not oppose targeted support — but it opposes remedy denial.</p><h3><strong>Autonomy, Over breadth, and Regulatory Overreach</strong></h3><p>The Regulations also expand compliance surveillance inside campuses through committees, monitoring roles, and reporting mandates. Without narrowly tailored jurisdiction and transparent standards, such bodies risk evolving into disciplinary authorities without statutory adjudicatory structure — raising concerns of regulatory overreach and chilling effects on academic environments. Regulation must correct discrimination — not centralize unchecked discretionary power.</p><h3><strong>Conclusion</strong></h3><p>The Equity Regulations, 2026 pursue a constitutionally legitimate objective — inclusive and discrimination-free campuses. However, constitutional validity depends not only on purpose but also on design. A framework that narrows recognition weakens procedural symmetry, and sidelines equally placed victims risks violating Articles 14, 15, and 21. True equity regulation must be inclusive in protection, precise in definition, and fair in procedure. Otherwise, the pursuit of social justice may unintentionally erode equal protection — the very foundation of constitutional governance.</p><p> </p><p>~Varun Rai (Assistant Professor)</p><p><i><strong>Join SKSIL Law College and gain hands-on experience with the latest legal technology. </strong></i></p><p><a href="/admissions/apply" className="inline-block mt-2 font-bold text-[#005a9c] hover:underline"><i><strong>Apply today! </strong></i></a></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="UGC Equity Regulations: Reform or Risk?" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="UGC Equity Regulations: Reform or Risk?" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
