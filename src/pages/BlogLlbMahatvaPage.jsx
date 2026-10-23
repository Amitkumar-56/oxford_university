import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1715638616.jpg';
import blogImg2 from '../assets/image/blog11715638616.jpg';
import blogImg3 from '../assets/image/blog21715638616.jpg';
import blogImg4 from '../assets/image/blog31715638616.jpg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogLlbMahatvaPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">LL.B. का महत्व</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            LL.B. का महत्व
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="LL.B. का महत्व" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('LL.B. का महत्व')}`}
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
              
                           <p>संविधान ऐसे लिखित नियमों का संग्रह हैजिसमें सरकार का गठन एवंउसकी शक्तियां तथा राज्य एवं उसके नागरिकों के बीच परस्परसम्बन्धों का उल्लेख होताहै। अर्थात संविधान किसी भी देश कीशासन प्रणाली एवं राज्य के संचालन हेतुबनाया गया दस्तावेज है।</p><p>भारतीय स्वाधीनता के पूर्व सेही भारत के राष्ट्रीय नेताओंकी प्रमुख मांग रही कि वयस्क मताधिकारके आधार पर एक संविधानसभा स्थापित की जाये जोभारतीयों के हितों कोदृष्टि में रखते हुए भारत के संविधान कानिर्माण करें। इसी क्रम में सर्वप्रथम 1906 के कांग्रेस केराष्ट्रीय अधिवेशन में स्वराज विधेयक पेश किया गया। सन् 1922 ई0 में महात्मागाँधी जी ने सर्वप्रथमयह मांग की थी भारतका भविष्य भारत की जानता द्वारानिर्वाचित प्रतिनिधियों द्वारा तय किया जानाचाहिए। सन् 1929 ई0 के लाहौरअधिवेशन में पं0 नेहरू जी के नेत्रत्वमें पूर्ण स्वराज की मांग कीगयी थी। सन् 1934 ई0 के कांग्रेसअधिवेशन में भी संविधान कीमांग की गयी थी।</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="LL.B. का महत्व" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <p>परन्तु ब्रिटिश शासन द्वारा भारतीयों की इस मांग को स्वीकार नही किया गया। द्वितीय विश्व युद्ध के दौरान अन्र्तराष्ट्रीय शक्तियों के दबाव में तत्कालिक ब्रिटिश प्रधानमंत्री लार्ड एटली ने सन्</p><p> </p><p>1945 में भारत की आजादी की घोषणा की तथा क्रिप्स मिशन को भारत भेजा जिसे भारत के सभी राजनैतिक दलों ने अस्वीकार कर दिया। महात्मा गाँधी जी ने क्रिप्स मिशन को Post dated cheque कहा था।</p><p> </p><p>संविधान सभा की प्रथम बैठक 9 दिसम्बर, 1946 को संसद भवन के केन्द्रीय कक्ष मे हुई। इस बैठक की अध्यक्षता डा0 सच्चिदानन्द सिन्हा जी ने की जो संविधान सभा के अस्थाई अध्यक्ष थे। 11 दिसम्बर, 1946 को डा0 राजेन्द्र प्रसाद जी को संविधान सभा का स्थाई अध्यक्ष चुना गया। मुस्लिम लीग नें संविधान सभा का बहिस्कार किया। पं0 नेहरू जी ने 13 दिसम्बर, 1946 को संविधान सभा में उद्देश्य प्रस्ताव प्रस्तुत किया जिसे 22 जनवरी, 1947 को स्वीकार कर लिया गया। 29 अगस्त, 1947 को प्रारूप समिति का गठन हुआ और डा0 भीमराव अम्बेडकर जी को इसका अध्यक्ष चुना गया।</p><p> </p><p>अंत में 1946 ई0 में ब्रिटेन द्वारा कैबिनेट मिशन भारत भेजा गया जिसकेे द्वारा संविधान सभा के प्रस्ताव को स्वीकार कर लिया गया तथा चुनाव के द्वारा अन्तरिम सरकार का गठन हुआ। 1931 की जनगणना के आधार पर प्रति 10 लाख जनसंख्या पर एक सीट आवंटित की गयी जिसमें कुल 389 सीटें थी, जिसमें 296 सीटें ब्रिटिश भारत के 4 चीफ कमिश्नरी क्षेत्र के तथा 93 देशी रियासतों के प्रतिनिधि थे, जिसमें 208 सीट पर कांग्रेस, 73 सीट पर मुस्लिम लीग एवं 15 अन्य दलों के प्रत्याशी चुनकर आए थे।</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="LL.B. का महत्व" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="LL.B. का महत्व" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
