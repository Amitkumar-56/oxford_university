import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1747992431.jpg';
import blogImg2 from '../assets/image/blog11747992431.jpg';
import blogImg3 from '../assets/image/blog21747992431.png';
import blogImg4 from '../assets/image/blog31747992431.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogAdvocateCoatPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?')}`}
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
              
                           <p>भारत ही नही दुनिया के अधिकांश हिस्सो में अधिवक्ता काला कोट पहनते है। काला कोट वकालत पेशे की पहचान है। यह अधिवक्ताओं और न्यायाधीशो का ड्रेस कोड है। काला रंग अनुशासन, आत्मविश्वास और शक्ति का प्रतीक माना जाता है, साथ ही सफेद रंग शुद्धता और पवित्रता का प्रतीक है। ऐसे में जब अधिवक्ता और न्यायाधीश काला कोट और सफेद बैण्ड पहनते है, तो वे भी शक्ति, अनुशासन और पवित्रता की मूर्ति बन जाते है और उनसे आशा की जाती है कि वे गलत का साथ दिये बिना, सत्य के साथ खड़े रहेंगे और कानून को शुद्ध मन से जीत दिलाएंगे।<br />वकालत की शुरूआत<strong> इंग्लैण्ड के राजा एडवर्ड तृतीय</strong> ने <strong>1327 ई० में</strong> की थी। उस समय जज अपने सिर पर सफेद बालों वाला विग पहनते थे और अधिवक्ता, जिनकी 3 श्रेणियां होती थी प्लीडर, बेंचर और बैरिस्टर, सुनहरे लाल कपड़े और भूरे रंग का गाउन पहना करते थे। वर्ष 1600 में अधिवक्ताओं की वेषभूषा में बदलाव आया और 1637 <strong>ई०</strong> में काले रंग का कपड़ा पहनने वाला प्रस्ताव रखा गया था ताकि अधिवक्ता सामान्य जन से अलग दिखे। 1865 में  इंग्लैण्ड के शाही परिवार ने अधिवक्ताओं को काले रंग के वस्त्र पहनने का आदेश दिया था। इसके पूर्व सन् 1694 में ब्रिटेन की <strong>महारानी क्वीन मैरी की चेचक से मृत्यु हो गयी थी</strong>, जिसके बाद उनके पति राजा विलियम्स ने सभी न्यायाधीशो और अधिवक्ताओं को सार्वजनिक रूप से शोक मनाने के लिये काला गाउन पहनकर एकत्रित होने का आदेश दिया। <strong>तब से काला गाउन पहनने की प्रथा चली आ रही है।</strong> <br />भारत एक ब्रिटिश उपनिवेश रहा है। ऐसे में यहां कई ऐसी परम्पराएं प्रचलित हो गयी जो ब्रिटेन की थी, इन्ही में से एक अधिवक्ताओं और न्यायाधीशो का काला कोट पहनना था। इस प्रकार ब्रिटिश भारत में लम्बे समय तक न्यायिक प्रणाली में काला कोट पहनने की परम्परा बनी रही, हालाकि स्वतंत्रता प्राप्ति के काफी समय बाद तक अधिवक्ताओं का काला कोट पहनना अनिवार्य नही था। परन्तु 1961 के <strong>अधिवक्ता अधिनियम की धारा 49 (1) gg</strong> के तहत सभी न्यायालयों में अधिवक्ताओं के लिये सफेद बैंण्ड लगानें के पीछे निम्नलिखित तर्क दिये  जाते हैं :-<br />1. काला रंग एक शांत और सम्मानजनक स्वरूप प्रदान करता है। यह वकीलों में अनुशासन लाता है और न्याय के लिए लड़ने के प्रति विश्वास का निर्माण करता है।<br />2. काला रंग एक ऐसा रंग है जिस पर कोई अन्य रंग चित्रित नही किया जा सकता इसका अर्थ यह है कि न्यायधीश द्वारा दिया गया निर्णय अन्तिम है और इसे बदला नही जा सकता है। वकीलों के लिए इसका तात्पर्य यह है कि वे अपनी राय, विचार और कानूनी प्रक्रियाओं की व्याख्या करते समय अपनें विवेक से समझौता करनें के लिए तैयार नही है।<br />3. काला रंग दृष्टिहीनता का प्रतीक होता है। चूँकि दृष्टिहीन व्यक्ति कभी पक्षपात नही कर सकता इस लिए वकील काला कोट पहनते है ताकि वे भी बिना कोई पक्षपात किये सच्चाई के लिए लड़ सके जिससे न्यायालय में न्याय को बढ़ावा मिल सके।</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <p>सफेद बैण्ड की परंपरा सन् 1640 में इंग्लैंड से ही प्रारम्भ हुई थी। यह शान्ति एवं पारदर्शिता का सूचक होता है, इसका तात्पर्य है कि यह न्यायधीश एवं वकील को शुद्ध एवं पारदर्शिता के साथ विधि व्यवसाय करनें की प्रेरणा प्रदान करता है।<br />गाउन उच्च न्यायालय और उच्चतम न्यायालय के अधिवक्ताओं और न्यायाधीशो द्वारा पहना जाता है। इंग्लैण्ड के अदालतों मे भी इस तरह का गाउन पहना जाता है। इस गाउन की शुरूआत इंग्लैंड द्वारा ही की गयी। इंग्लैंड में विधि व्यवसाय सम्पन्न घरों के लोगों द्वारा किया जाता था और लम्बे कपड़े पहनना सम्पन्न घरों के लोगों की पहचान हुआ करती थी। वकालत ज्यादातर सेवार्थ रूप से उच्च शिक्षित और धनवान लोगों द्वारा की जाती थी। ऐसे लोग इस तरह का गाउन पहनते थे। इस गाउन में पीछे की ओर दो पाकेट हुआ करते थे तथा मुवक्किल अपने वकील के इस गाउन की जेब में जितनी इच्छा या श्रद्धा होती थी उसके अनुसार धन डाल दिया करते थे। वकीलों द्वारा मुवक्किल से कोई फीस नही मांगी जाती थी। <br />मई 2024 में काले कोट को लेकर भारत के उच्चतम न्यायालय मे एक याचिका दाखिल की गई। यह याचिका <strong>1961 के अधिवक्ता अधिनियम (ADVOCATES ACT, 1961)</strong> में संशोधन के लिए दाखिल की गई थी। याचिका में कहा गया कि न्यायालय भारत के सभी बार काउन्सिल को आदेश जारी करे कि गर्मी के महीनों मे काला कोट पहनने से होने वाली समस्या को लेकर एक सूची तैयार की जाय। याचिकाकर्ता ने कहा कि काला कोट पहनने से स्वास्थ्य एवं कार्य क्षमता पर कैसा प्रभाव पड़ता है, इसके लिये एक स्टडी होनी चाहिए। काले कोट को लेकर एडवोकेट शैलेन्द्र मणि त्रिपाठी ने याचिका दायर की थी। उन्होने कोर्ट से अपील की है कि भारत के परम्परागत परिधानों के लिये ड्रेस कोड के नियमों में कुछ परिवर्तन किया जाय। मैदानी क्षेत्रों में गर्मी प्रचण्ड रूप से पड़ती है और यह लगातार कई माह तक अपना प्रभाव दिखाती है। ऐसे मे काला कोट पहनकर कोर्ट आना-जाना मुश्किल भरा होता है। याचिका कर्ता ने कहा कि अंग्रजो ने काला कोट ब्रिटेन के मौसम की परिस्थिति को देखकर रखा है। हमारे भारत की भौगोलिक स्थिति के अनुसार इसका प्रयोग उचित नही है। गर्मी के दिनों मे काले रंग का कपड़ा बहुत कम लोग पहनना चाहते है, उसके पीछे काले रंग द्वारा गर्मी का अवशोषण करना होता है। काले रंग का कपड़ा पहनने से सामान्य रंग के कपड़े पहनने की अपेक्षा ज्यादा ही गर्मी होती है। <br /> </p><p>~ प्रदीप कुमार, सहायक आचार्य (LL.M., NET) </p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="अधिवक्ता और न्यायाधीश काला कोट एवं सफेद बैंड क्यों पहनते है?" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
