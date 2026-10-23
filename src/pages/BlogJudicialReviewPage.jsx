import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1778834982.png';
import blogImg2 from '../assets/image/blog11778835356.jpeg';
import blogImg3 from '../assets/image/blog21778835356.jpeg';
import blogImg4 from '../assets/image/blog31778835356.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogJudicialReviewPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">Judicial Review of Administrative Action in Bharat</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            Judicial Review of Administrative Action in Bharat
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="Judicial Review of Administrative Action in Bharat" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Judicial Review of Administrative Action in Bharat')}`}
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
              
                           <p>It is a foundational constitutional mechanism that ensures government authorities wield their powers within legal boundaries and avoid discretionary abuse. Rooted in Articles 32 and 226 of the Constitution, this doctrine empowers the Supreme Court and High Courts to issue writs against unlawful administrative conduct, thereby upholding the rule of law and protecting individual rights. </p><p>The scope of judicial review in Bharat rests on three classic grounds — illegality, irrationality, and procedural impropriety — commonly termed the Wednesbury principles, inspired by the UK case Associated Provincial Picture Houses v. Wednesbury Corporation. </p><p>In practical application, judicial review strikes a balance between able governance and protection of the rights of citizens. It checks arbitrary powers while respecting administrative expertise by adopting a deferential stance in specific matters. Seminal cases have solidified the role of the judiciary in curbing administrative excesses, shaping a robust checks-and-balances system. Modern jurisprudence incorporates proportionality and legitimate expectation as supplementary review grounds, aligning Bharatiya law with global administrative trends. These cases collectively refined the intensity and scope of judicial review, shaping a jurisprudence that balances judicial vigilance with administrative autonomy.</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="Judicial Review of Administrative Action in Bharat" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <h4>Impact and Challenges </h4><p>Judicial review fosters democratic accountability, transparency, and trust in public institutions, compelling administrators to justify actions legally and ethically. However, excessive intervention risks causing delays and administrative paralysis, necessitating a nuanced approach respecting the separation of powers. Emerging challenges include. managing judicial activism versus administrative efficiency, especially in fields like environment and public health where expert discretion is vital. </p><h4>Reforms and Future Directions </h4><p>Scholars advocate codifying review standards to provide clearer benchmarks for courts and administrators, enhancing predictability and reducing overreach. Recommended measures include legislative guidelines on reviewability and training programmes for bureaucrats on natural justice. Such reforms aim to streamline judicial processes while preserving the protective essence of review. </p><h4>Conclusion </h4><p>Judicial review of administrative action in Bharat is essential for safeguarding constitutional values and ensuring governance adheres to legal standards. Its effective implementation demands a balanced approach that merges rigorous oversight with respect for administrative discretion, thereby promoting justice and competent public administration. As India’s legal environment evolves, refining judicial review principles will remain crucial to address emerging administrative law challenges. Judicial review of administrative action is a cornerstone of our country’s constitutional framework, ensuring that government authorities act within the bounds of law and do not abuse their discretionary powers. The principle empowers courts to scrutinize decisions made by administrative bodies, thereby upholding the rule of law and protecting the rights of citizens. </p><p>Related Case Laws : </p><p>1. Kesavananda Bharati v. State of Kerala (1973): Established the Basic Structure Doctrine, including judicial review. </p><p>2. S.P. Gupta v. Union of India (1981): Established judicial review of administrative actions and expanded locus standi in PILs. </p><p>3. L. Chandra Kumar v. Union of India (1997): Held that judicial review is a basic feature of the Constitution and tribunals’ decisions are subject to High Court scrutiny. </p><p>4. Minerva Mills Ltd. v. Union of India (1980): Reinforced judicial review of administrative actions to ensure constitutional validity. </p><p>5. Rustom Cavasjee Cooper v. Union of India (1970) Judicial review of administrative actions affecting fundamental rights. </p><p>6. State of Rajasthan v. Union of India (1977) Judicial review of executive actions. </p><p>7. A.K. Kraipak v. Union of India (1969) Principles of natural justice in administrative actions. </p><p>8. S.N. Mukherjee v. Union of India (1990) Reasoned orders in administrative decisions. </p><p>9. Bihar Eastern Gangetic Fishermen Co-operative Society v. Sipahi Singh (1977) Judicial review of administrative discretion. </p><p>10. Union of India v. Tulsiram Patel (1985) Administrative actions and natural justice.</p><p>~Pradip Kumar (Assistant Professor)</p><p><i><strong>Join SKSIL Law College and gain hands-on experience with the latest legal technology. </strong></i></p><p><a href="/admissions/apply" className="inline-block mt-2 font-bold text-[#005a9c] hover:underline"><i><strong>Apply today! </strong></i></a></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="Judicial Review of Administrative Action in Bharat" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="Judicial Review of Administrative Action in Bharat" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
