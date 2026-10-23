import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1787981516.png';
import blogImg2 from '../assets/image/blog11787981516.png';
import blogImg3 from '../assets/image/blog21787981516.jpeg';
import blogImg4 from '../assets/image/blog31787981516.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogConsumerAutonomyPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective')}`}
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
              
                           <p>The digital revolution has transformed the way consumers purchase goods, access services, and make everyday decisions. From shopping and banking to entertainment and education, much of modern consumer life now takes place through digital platforms. While technology has increased convenience and expanded consumer choice, it has also created a new challenge: the ability of digital platforms to influence the choices consumers make.</p><p>Consumer autonomy refers to the ability of an individual to make informed, voluntary, and meaningful choices without deception or undue manipulation. In the digital marketplace, protecting this autonomy requires attention not only to traditional consumer rights but also to privacy, algorithmic advertising, dark patterns, and intermediary responsibility.</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <h4><strong>Consumer Choice and Digital Influence</strong></h4><p>In a traditional marketplace, consumers generally decide what products to examine, compare, and purchase. Digital platforms, however, often determine what consumers see first and which products or services receive greater visibility. Algorithms analyse browsing history, location, previous purchases, and online behaviour to personalise the consumer's experience.</p><p>Personalisation can be beneficial, but it can also influence decision-making in ways that consumers may not fully understand. Therefore, consumer autonomy is not simply about having multiple options; it is about having fair and meaningful choices.</p><h4><strong>Privacy and Consumer Autonomy</strong></h4><p>Personal data is a valuable resource in the digital economy. Every search, click, purchase, and online interaction can contribute to a consumer profile. Businesses may use this information to predict preferences, personalise advertisements, and influence purchasing behaviour.</p><p>The Digital Personal Data Protection Act, 2023 provides a legal framework for the processing of digital personal data and seeks to strengthen the protection of individuals in relation to their personal information.</p><p>Privacy, however, is not merely about preventing data breaches. Excessive tracking and profiling can also affect consumer independence. Consent should therefore be meaningful rather than merely a formality hidden within lengthy privacy policies. Consumers should understand what information is being collected, why it is collected, and how it may be used.</p><h4><strong>Dark Patterns and Algorithmic Advertising</strong></h4><p>One of the most visible threats to consumer autonomy is the use of dark patterns—design techniques that manipulate users into making choices they might not otherwise make. Examples include hidden charges, pre-selected options, false urgency messages, and complicated cancellation procedures.</p><p>The Guidelines for Prevention and Regulation of Dark Patterns, 2023, issued by the Central Consumer Protection Authority, recognise such practices as capable of impairing consumer decision-making.</p><p>Similarly, algorithmic advertising allows businesses to target consumers based on their online behaviour and interests. A consumer searching for a product may subsequently encounter advertisements for that product across different platforms. While targeted advertising can provide relevant information, excessive profiling can make the distinction between persuasion and manipulation increasingly difficult.</p><p>The Consumer Protection Act, 2019 provides an important framework for addressing misleading advertisements and unfair trade practices in this evolving environment.</p><h4><strong>Intermediary Liability and Consumer Protection</strong></h4><p>Digital transactions often involve multiple actors. A consumer may purchase a product from a third-party seller while the digital platform manages visibility, payment, reviews, or other aspects of the transaction. This raises an important question: when consumer harm occurs, who should be responsible—the seller, the platform, or both?</p><p>The Consumer Protection (E-Commerce) Rules, 2020 establish obligations for e-commerce entities and seek to protect consumers in online transactions. At the same time, platform responsibility must be balanced against the need to preserve innovation and legitimate digital activity.</p><p>The objective should be to create a system in which platforms cannot avoid responsibility for practices within their control while also preventing excessive regulation that may hinder technological development.</p><h4><strong>The Way Forward</strong></h4><p>Protecting consumer autonomy requires more than simply providing legal remedies after harm occurs. Digital platforms should adopt privacy by design, fairness by design, greater transparency in algorithmic recommendations, and simple mechanisms for complaints, cancellation, and refunds.</p><p>Consumer awareness is equally important. Users should be encouraged to identify sponsored content, review privacy permissions, compare products, and recognise manipulative interface designs.</p><h4><strong>Conclusion</strong></h4><p>The digital marketplace has made consumer life faster and more convenient, but it has also changed the nature of consumer vulnerability. Consumers today may be influenced not only by defective products or misleading sellers, but also by data profiling, targeted advertising, algorithmic recommendations, and manipulative design.</p><p>The central question for modern consumer law is therefore not merely whether a choice was available, but whether that choice was fair, informed, and genuinely free from manipulation.</p><p>A truly consumer-friendly digital marketplace is one that empowers individuals to make decisions with clarity, confidence, and independence. Protecting consumer autonomy must therefore remain at the heart of India's evolving digital consumer-protection framework.</p><p>~Varun Rai (Assistant Professor)</p><p><i><strong>Join SKSIL Law College and gain hands-on experience with the latest legal technology. </strong></i></p><p><a href="/admissions/apply" className="inline-block mt-2 font-bold text-[#005a9c] hover:underline"><i><strong>Apply today! </strong></i></a></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="Protecting Consumer Autonomy in Digital Markets: A Legal and Regulatory Perspective" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
