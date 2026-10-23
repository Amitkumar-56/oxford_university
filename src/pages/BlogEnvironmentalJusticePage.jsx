import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1768385264.png';
import blogImg2 from '../assets/image/blog11768385264.png';
import blogImg3 from '../assets/image/blog21768385264.png';
import blogImg4 from '../assets/image/blog31768385264.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogEnvironmentalJusticePage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">The legal implications of environmental justice in the  context of human rights</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            The legal implications of environmental justice in the  context of human rights
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="The legal implications of environmental justice in the  context of human rights" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('The legal implications of environmental justice in the  context of human rights')}`}
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
              
                           <p>The legal implications of environmental justice in the context of human rights include the right to a healthy and safe environment, which is increasingly recognized globally and domestically. This framework creates obligations for states and corporations to prevent disproportionate environmental harm to vulnerable communities and to ensure equitable access to information, participation, and justice in environmental decision-making. Legal challenges arise from inadequate environmental and human rights frameworks, enforcement gaps, conflicts with economic development, and the potential for regulatory chill from investor-state dispute settlement mechanisms. </p><p><strong>The Legal Basis for Environmental Justice</strong> </p><p>There is increasing global recognition of the human right to a healthy, clean, and sustainable environment, formally declared by the United Nations General Assembly in 2022. This right is essential for enjoying other human rights, such as the rights to life, health, food, and culture. International and national laws often interpret established human rights to include environmental dimensions. For example, the right to health is linked to environmental quality and fundamental duties to protect the environment are enshrined in some constitutions. States and corporations have obligations to prevent environmental harm, protect vulnerable communities, and implement policies that promote equity and sustainability. </p><p><strong>Key Legal Implications </strong></p><p>Environmental justice mandates that people have the right to judicial and administrative recourse to challenge decisions that violate their environmental rights. This framework requires states and corporations to ensure access to environmental information and allow meaningful participation by communities in decisions affecting them. Environmental justice provides a basis for holding states and corporations accountable for environmental harm, especially when it disproportionately affects marginalized populations.</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="The legal implications of environmental justice in the  context of human rights" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <p><strong>Mechanisms for Enforcement and Accountability </strong></p><p>Citizens and communities can use human rights law to sue governments for failing to protect their right to a healthy environment, as demonstrated by landmark court rulings on climate change. Establishing specialized environmental courts can improve the administration of environmental law and ensure that environmental justice issues are handled effectively. The principles of environmental justice are integrated into international law and are increasingly enshrined in national constitutions, fostering a global consensus on the need for a rights-based approach to environmental protection. </p><p>In the second half of the 20th century, the world has witnessed several developments, scientific advancements, and technological upgradations. However, all of these evolutions are on the verge of degrading the ecology and environment. It can be apparent through numerous indications, such as rising sea levels, extreme weather, toxic air, disappearing forests and shrinking biodiversity. </p><p>Living in a clean environment, having access to safe drinking water, and having less pollution, and the ability to breathe fresh air is the basic right of every human being. At present, the concept of environmental justice has become the call of the hour as more and more of the world is approaching towards expansion, growth, and prosperity, and it is calling for legal accountability, participatory governance and protection for the communities who are more often neglected and bear the ecological harm to a great extent.</p><p><strong>Legal Recognition: Global and Indian Perspectives Global perspective </strong></p><p>Different conventions, declarations, and guidelines from time to time have been initiated to associate environmental protection with human dignity, equality, and justice. </p><ul><li><strong>Stockholm Convention (1972):</strong> This UN Conference on the Human Environment for the first time recognizes the relationship between the environment and human life. The Stockholm Conference Declaration proclaims that "man has the fundamental right to freedom, equality, and adequate conditions of life, in an environment of a quality that permits a life of dignity and prosperity."</li><li><strong>Earth Summit (1992):</strong> An affirmation of the environmental rights framework, the Rio Declaration incorporated new concepts such as sustainable development, the precautionary principle, and public participation, deepening the link of environmental matters with human rights globally.</li><li><strong>UN Human Rights Council Resolution (2021): </strong>For the first time, the UNHRC articulated the right to a clean, healthy, and sustainable environment as a human right, thereby giving a responsibility to the countries to ensure that this right is respected and protected.</li></ul><p><strong>Indian Perspective : Constitutional and Judicial Recognition </strong></p><p>Bharat has been at the lead of recognizing environmental rights as implicit in the fundamental rights guaranteed under Indian Constitution. </p><ul><li>Article 21: Interpreted by different courts to include the right to a pollution-free environment & clean water.</li><li>Article 48A: Directs the State to protect and improve the environment.</li><li>Article 51 A(g): Imposes a duty on every Bharatiya citizen to protect and improve the natural environment.</li></ul><p><strong>Historic judicial decisions on landmark environmental law cases. </strong></p><ol><li>Rural Litigation and Entitlement Kendra Case (1985)</li><li>M.C. Mehta v. Union of India (1987)</li><li>Vellore Citizens Welfare Forum v. Union of India (1996)</li><li>Indian Council for Enviro-Legal Action Case (1996)</li><li>M.C. Mehta v. Kamal Nath (1997)</li><li>Forest Conservation Case (1995)</li><li>Narmada Bachao Andolan v. Union of India (2000)</li><li>Sterlite Copper Plant Case (2018)</li><li>Vizag Gas leak Case (2020)</li></ol><p><strong>Conclusion </strong></p><p>Environmental Justice is not a new concept, but it needs to be addressed effectively. Legal systems, both global and domestic are gradually acknowledging that ecological degradation is not just an environmental issue but a social and legal one. In Bharat, several judicial interpretations under Article 21 have environmental protection into a justifiable right, not solely a directive policy goal. Environmental law and human rights are reciprocally strengthening now. The legal implications of environmental justice in the context of human rights include the state’s duty to protect fundamental rights like life, health, and property from environmental harm, as environmental degradation often violates these established rights.</p><p>~Pradip Kumar (Assistant Professor)</p><p><i><strong>Join SKSIL Law College and gain hands-on experience with the latest legal technology. </strong></i></p><p><a href="/admissions/apply" className="inline-block mt-2 font-bold text-[#005a9c] hover:underline"><i><strong>Apply today! </strong></i></a></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="The legal implications of environmental justice in the  context of human rights" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="The legal implications of environmental justice in the  context of human rights" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
