import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1742461132.jpg';
import blogImg2 from '../assets/image/blog11742461132.jpg';
import blogImg3 from '../assets/image/blog21742461132.jpg';
import blogImg4 from '../assets/image/blog31742461132.jpg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogPilPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">Public Interest Litigation (PIL) : History &amp; Importance</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            Public Interest Litigation (PIL) : History &amp; Importance
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="Public Interest Litigation (PIL) : History &amp; Importance" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Public Interest Litigation (PIL) : History &amp; Importance')}`}
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
              
                           <h3><strong>लोकहित वाद - PUBLIC INTEREST LITIGATION (P.I.L.)</strong></h3><p> </p><p>लोकहित वाद या जनहितवाद सामाजिक एवं आर्थिक न्याय की स्थापना तथा लोक कल्याण की प्राप्ति हेतु न्यायालय द्वारा विकसित आधुनिक विधिशास्त्रीय अवधारणा है जिसने इस सूक्ति को कि ’’जहां अधिकार है वहां उपचार है’’ के क्षितिज का नवीन अविष्कार किया है। </p><p>लोकहित वादों के उद्भव का वास्तविक श्रेय अमेरिका को है। वहां इसे “<strong>सामाजिक कार्यवाही याचिका (Social Action Litigation)</strong>” के रूप में जाना जाता है। यद्यपि कि इसकी ऐतिहासिकता रोमन विधि के "<strong>Actio Popularis</strong>" अर्थात लोकहित से संबंधित वाद प्रथा में देखी जा सकती है, जहां कोई व्यक्ति लोक अपराध या सार्वजनिक सम्पत्ति या पवित्र सम्पत्ति की रक्षा हेतु कार्यवाही कर सकता था। </p><p>भारत में लोकहित वाद की अवधारणा न्यायालय द्वारा सृजित तथा न्यायाधीश द्वारा प्रतिपादित एवं विरचित हुई है। जिसकी शुरूआत न्यायाधीश <strong>वी0आर0 कृष्ण अय्यर</strong> द्वारा मुम्बई कामगार सभा के मामले में की गई। जिसे आगे <strong>न्यायाधीश पी0एन0 भगवती, गजेन्द्रगडकर एवं न्यायाधीश चन्द्रचूड़ आदि</strong> ने संवल प्रदान कर आगे बढ़ाया। न्यायाधीश पी0एन0 भगवती ने संप्रेक्षित किया कि <strong>लोकहितवाद का उद्देश्य ऐसे वर्ग या समूह को लाभ या सहायता प्रदान करना है जो या तो शोषण के अथवा उत्पीड़न के शिकार हैं तथा जिनके संवैधानिक एवं विधिक अधिकारों को इनकार किया जाता रहा है किन्तु वे अब तक अपनी निर्धनता, अज्ञानता एवं अन्य विवशताओं के कारण न्याय की पहुँच से दूर थे।</strong> न्यायालयों ने लोकहित वाद के विधिक आधार के रूप में सुनवाई के अधिकार (लोकस स्टैण्डिंग) के नियम को उदार बनाते हुए कहा कि अब ’वाद कारण’ तथा ’पीड़ित व्यक्ति’ के संकुचित अवधारणा का स्थान ’वर्ग कार्यवाही’ तथा लोकहित वाद ने ले लिया है। </p><p>भारत में लोकहित वाद की अवधारणा के सम्बन्ध में निम्न प्रतिपादनाएं अधिकृत की जा सकती हैं-</p><p> </p><ul><li>इसमें याचिका किसी वर्ग या समूह की ओर से दायर की जा सकती है।</li><li>याचिका ऐसे वर्ग या समूह की ओर से दायर की जाती है जो अपनी आर्थिक सामाजिक, राजनैतिक तथा अन्य विवशताओं के चलते न्यायालय के समक्ष नहीं आ सकते।</li><li>इसमें कार्यपालिका के अनुत्तरदायी पूर्ण कृत्यों के विरुद्ध कार्यवाही की याचना की जाती है।</li><li>इसके तहत कार्यवाही पीड़ित व्यक्ति के अलावा सामाजिक हित में रुचि रखने वाले किसी अन्य व्यक्ति या किसी गैर सरकारी संगठन द्वारा सद्भावपूर्वक की जा सकती है।</li><li>इसके तहत पत्र के माध्यम से भी कार्यवाही प्रारंभ की जा सकती है।<br /> </li></ul><p>न्यायिक सक्रियता ने जनहितकारी वादों को बहुत विस्तार दिया है। वर्तमान में भारत में न्यायालयों ने तीन प्रकार के मामलों में जनहितकारी वाद की अवधारणा को लागू किया है।</p><ol><li>वे मामले हैं जिसमें एक निर्धन, निर्बल एवं वंचित व्यक्तियों के समूह का मौलिक अथवा विधिक अधिकार का उल्लंघन हुआ है जो न्यायालय में अनुतोष पाने के लिए अक्षम तथा असमर्थ हैं।</li><li>इसके तहत वे मामले आते हैं जिसमें संवैधानिक स्थिति को यथावत बनाए रखने के लिए अथवा संवैधानिक प्रावधानों की उपेक्षा एवं उल्लंघन होने की स्थिति में इसका प्रयोग किया गया है।</li><li>इसके तहत वे सभी मामले सम्मिलित हैं जो जन सामान्य के हित से सम्बन्धित हैं। जैसे- पर्यावरण प्रदूषण, प्राकृतिक खनन आदि से सम्बन्धित मामले।</li></ol><p>इस प्रकार न्यायालय द्वारा सृजित जनहितवाद की अवधारणा ने समाज के निर्धनों, शोषितों एवं वंचित वर्ग के संवैधानिक एवं विधिक अधिकारों को लागू कर विधिक सामाजिक समावेशन में महत्वपूर्ण भूमिका निभाई है।</p><p> </p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="Public Interest Litigation (PIL) : History &amp; Importance" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <p>परन्तु इसका एक स्याह पक्ष यह भी रहा है कि इसने न्यायालय की न्यायिक सक्रियता को और तीव्रता प्रदान की है जिससे सरकार के अन्य अंगों के साथ टकराव की स्थिति पैदा हुई है। साथ ही इसके दुरुपयोग के मामले भी दिखाई पड़े हैं, जिसके सम्बन्ध में न्यायालयों ने चेतावनी भी दी है तथा कहा है कि यह असाधारण अधिकारिता व्यक्तिगत स्वार्थ से कुंठित नहीं होनी चाहिए।</p><p>जनहित वाद के मामलों में कुछ अधिवक्ताओं का अतुलनीय योगदान रहा है जैसे कपिला हिंगोरानी। वह एक ऐसी अधिवक्ता थीं जिन्हें जनहित याचिका की जननी माना जाता है। तत्कालीन कानूनों के अनुसार याचिका केवल पीड़ित या उसके किसी सम्बन्धी द्वारा ही दायर की जा सकती थी। कपिला और उनके पति निर्मल हिंगोरानी बिहार में विचाराधीन कैदियों का प्रतिनिधित्व करना चाहते थे। दंपति ने एक अनोखे विचार पर कार्य करते हुए सर्वोच्च न्यायालय में बंदियों की ओर से बंदी प्रत्यक्षीकरण याचिका दायर की। कपिला द्वारा न्यायालय में मामले की पैरवी करने के दो सप्ताह बाद, सर्वोच्च न्यायालय ने बिहार सरकार को एक नोटिस जारी किया, जिसके कारण मामले में सभी पीड़ितों और अंततः देश भर के लगभग 40,000 विचाराधीन बंदियों को रिहा कर दिया गया। इस मामले ने भारतीय न्याय व्यवस्था में क्रांति को जन्म दिया। यह ऐतिहासिक मामला <strong>हुस्न आरा खातून वाद, 1979</strong> के नाम से जाना जाता है।<br />जनहित याचिका नियमित प्रक्रियाओं से भिन्न है। हालाँकि यह समकालीन भारतीय विधि व्यवस्था का महत्वपूर्ण अंग है, आरम्भ में भारतीय विधि व्यवस्था में इसे यह स्थान प्राप्त नहीं था। कई राजनैतिक और न्यायिक कारणों से शनैः शनैः इसका विकास हुआ। कहा जा सकता है कि 70 के दशक से प्रारंभ होकर 80 के दशक में इसकी अवधारणा पक्की हो गयी थी।<br />जनहित याचिका के अब तक के मामलों ने व्यापक क्षेत्रों को प्रभावित किया है जैसे- कारागार और बंदी, सशस्त्र सेना, बालश्रम, बंधुआ मजदूरी, नगरीय विकास, पर्यावरण और प्राकृतिक संसाधन, ग्राहक मामले, शिक्षा, राजनीति और चुनाव, लोकनीति और उत्तरदायित्व, मानवाधिकार, और स्वयं न्यायपालिका। इससे जनता में स्वयं के अधिकारों तथा न्यायपालिका की भूमिका के बारे में चेतना बढ़ती है। यह कार्यपालिका और विधायिका को उनके संवैधानिक कर्तव्य करने के लिए बाध्य करती है, साथ ही यह भ्रष्टाचार मुक्त प्रशासन की सुनिश्चितता स्थापित करती है।<br />जनहित के दुरुपयोग की संभावना हमेशा बनी रही है और कई मामलों की आलोचना हुई है। स्वयं उच्चतम न्यायालय के एक निर्णय में यह अवलोकन है ’’<strong>अगर इसे सही तरीके से नियंत्रित नहीं किया गया और इसके दुरुपयोग को न रोका गया तो यह अनैतिक हाथों द्वारा प्रचार, प्रतिशोध, निजी या राजनैतिक स्वार्थ का हथियार बन सकता है।</strong>’’</p><p> </p><h4><i>लेखक ~ प्रदीप कुमार (LL.M., NET)</i></h4>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="Public Interest Litigation (PIL) : History &amp; Importance" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="Public Interest Litigation (PIL) : History &amp; Importance" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
