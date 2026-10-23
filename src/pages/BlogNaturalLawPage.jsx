import React from 'react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

import blogImg1 from '../assets/image/blog1791451456.png';
import blogImg2 from '../assets/image/blog11791451456.png';
import blogImg3 from '../assets/image/blog21791451456.jpeg';
import blogImg4 from '../assets/image/blog31791451456.jpeg';

import thumb1 from '../assets/image/blog1715638616.jpg';
import thumb2 from '../assets/image/blog1716204531.jpg';
import thumb3 from '../assets/image/blog1716205179.jpg';
import thumb4 from '../assets/image/blog1716205089.jpg';
import thumb5 from '../assets/image/blog1742461132.jpg';
import thumb6 from '../assets/image/blog1747044490.jpeg';
import thumb7 from '../assets/image/blog1747992431.jpg';
import thumb8 from '../assets/image/blog1768299597.png';

export default function BlogNaturalLawPage({ onNavigate }) {
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
            <span className="text-[#00c5ff] font-medium truncate max-w-xs sm:max-w-lg">NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
            
            
            <div className="rounded-sm overflow-hidden mb-6 border border-stone-200 shadow-sm">
              <img src={blogImg1} alt="NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE" className="w-full h-auto max-h-[460px] object-cover object-center" />
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE')}`}
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
              
                           <p>The notion of Natural Law occupies a significant place in the evolution of legal philosophy and jurisprudence across different civilizations. Natural law theory is based on the notion that law is not only a creation of the state or legislative authority but is derived from universal principles of justice, morality, and reason. These principles are believed to exist freely of human institutions and serve as a guiding benchmark for determining the rationality and legitimacy of positive laws. In Western jurisprudence, natural law theory has been greatly developed by thinkers such as Aristotle, Cicero, Thomas Aquinas, Hugo Grotius, and John Locke, who emphasized that law must comply with moral principles in order to ensure justice and equity in society.</p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg2} alt="NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <h4><strong>CONCEPT OF DHARMA </strong></h4><p>In the context of Indian jurisprudence, an analogous philosophical idea is reflected in the concept of Dharma. Dharma is one of the most basic concepts in Indian philosophical, social, and legal traditions. It represents the moral, ethical, and social order that regulates human behaviour and ensures consonance within society. </p><p>Unlike the modern positivist view of law, which treats law as the command of a sovereign authority, conventional Indian legal philosophy blends law with morality, ethics, and social duties through the concept of Dharma. </p><p>Ancient Indian legal and philosophical texts provide key findings into the concept of Dharma. Scriptures such as Vedas, Upanishads, and Dharmashastras discuss the significance of moral duties and upright behavior as essential elements for maintaining social solidarity and justice. These texts emphasize that the main goal of law and governance is to uphold Dharma and ensure the welfare of society. </p><h4><strong>RELATIONSHIP BETWEEN DHARMA AND NATURAL LAW </strong></h4><p>The relationship between Dharma and Natural Law reveals the significant similarities between Indian and Western legal philosophy. Natural law theory asserts that certain moral principles exist independently of human legislation. These principles form the foundation for evaluating the legitimacy of laws. </p><p>Similarly, Dharma acts for a higher moral order that guides human behaviour and governance. In ancient India, kings were expected to govern according to Dharma rather than personal interests or high-handedness. A king who violated Dharma was considered unjust and illegitimate. </p><p>Natural Law theory also highlights that unjust laws lack moral authority. According to Thomas Aquinas, a law that contradicts ethics cannot be considered a true law. This idea is similar to the Indian belief that laws inconsistent with Dharma are unjust and should not be imposed. </p><h4><strong>INDIAN PHILOSOPHICAL TRADITIONS </strong></h4><p>Indian philosophical traditions provide various viewpoints on moral law, justice, and ethical behaviour that closely resemble many ideas associated with natural law theory. Although the concept of "Natural Law" is essentially discussed in Western jurisprudence, Indian philosophical systems have long emphasized the existence of universal moral principles governing human behaviour and social structure. Traditions such as Hinduism, Buddhism, and Jainism emphasize the significance of moral duties, sympathy, and justice, which function as core principles for both individual behaviour and the organization of society. </p><ul><li><strong>Hinduism and Natural Law: </strong>Hindu philosophy has played an important role in shaping the concept of moral order and its relationship with law and justice. One of the most prominent concepts in Hindu philosophy is Dharma, which acts for duty, uprightness, and moral obligation. Dharma governs not only individual conduct but also social institutions and governance. According to Vedic philosophy, the universe functions according to a divine and moral order, and human beings must align their actions with this order to maintain consonance, justice, and social stability. This idea bears a strong analogy to the concept of natural law in Western jurisprudence, which suggests that law should be based on a universal ethical code that guide human behaviour.</li><li><strong>Buddhism and Natural Law:</strong> Buddhist philosophy provides a deep outlook moral law, Justice and ethical governance. Although Buddhism does not expressly use the term "natural law" in the same way as Western legal thought, many of its principles closely resemble the idea that moral truth and justice arise from shared human ethics. The teachings of Gautam Buddha stress the significance of moral conduct, compassion, intellect, and the alleviation of suffering, these principles form the basis of Buddhist moral philosophy and have substantial impact for law, governance, and social order. </li><li><strong>Jainism and Natural Law:</strong> Jain philosophy represents another prominent gift to Indian philosophical and legal thought. Like Hinduism and Buddhism, Jainism stresses the significance of ethical behaviour, moral discipline, and respect for life. Although Jain philosophy does not expressly formulate a theory of natural law, its teachings strongly reflect the idea that universal principles should guide human conduct and social institutions. The teachings of Mahavira highlight strict adherence to moral principles and self control as a basis of a just and harmonious society. </li></ul><h4><strong>CONSTITUTION OF INDIA & NATURAL LAW</strong> </h4><p>The Indian Constitution implicitly includes principles of natural law and natural justice, stressing human dignity, fairness, and equality even though the text does not expressly define "natural law". </p><p><strong>The Preamble</strong> </p><ul><li>Main Ideals: It secures social, economic, and political justice, along with equality and liberty, reflecting the prime natural law values. </li><li>Basis: It acts as the theoretical anchor for interpreting rights in alignment with inherent human morality. </li></ul><p><strong>Fundamental Rights </strong></p><ul><li>Article14 (Equality): It guarantees equality before the law and equal protection, prohibiting biased state action. </li><li>Article19 (Freedom): It protects basic freedoms like speech and movement while permitting merely reasonable restrictions tested on grounds of fairness. </li><li>Article 21 (Life and Liberty): Judiciary interpreted it dynamically to include human dignity, privacy, and livelihood, anchoring natural rights safely within constitutional law. </li></ul><p><strong>Directive Principles of State Policy </strong></p><p>These principles act for the moral and social aims that the state should strive to achieve. Although these principles are not legally enforceable in courts, they provide important instructions for governance. </p><p>The Directive Principles aim to strengthen social and economic justice, reduce inequalities, and ensure the well being of all citizens. They encourage the state to establish policies that encourage fair distribution of resources, non-discrimination, and equal protection of vulnerable groups. </p><p>These principles reflect the ethical responsibilities of the state towards society. In this sense, they embody the ethical values that support Natural Law theory. </p><h4><strong>Judicial Activism and Interpretation </strong></h4><p>The Supreme Court of India time and again relies on natural law and natural justice to interpret fundamental rights. In landmark judgements like <i>Maneka Gandhi v. Union of India (1978)</i>, the Court held that procedures depriving a person of liberty should be right, just, and fair, injecting substantial due process to natural law. </p><p>Basic Structure Doctrine, established in <i>Kesavananda Bharati v. State of Kerala (1973)</i>, asserts that certain basic features of the Constitution cannot be amended by Parliament, working as a constitutional law constraint reflecting natural law limits on ultimate authority. </p><h4><strong>Conclusion </strong></h4><p>Natural law theory in Indian jurisprudence concludes that state-enacted laws must align with global moral doctrines, fundamental fairness, and dignity of the person. In ancient times, the legal philosophy of India integrated natural law concepts through Dharma (uprightness) and cosmic and ethical order. Fundamental rights and the Preamble of the Indian Constitution reflect natural rights theories by ensuring guarantee to universal rights such as life, liberty, and equality. Indian jurisprudence views not as rigid or out of date, but as a core moral code used to evaluate, interpret, and refine man-made law.</p><p>~Pradip Kumar (Assistant Professor)</p><p><i><strong>Join SKSIL Law College and gain hands-on experience with the latest legal technology. </strong></i></p><p><a href="/admissions/apply" className="inline-block mt-2 font-bold text-[#005a9c] hover:underline"><i><strong>Apply today! </strong></i></a></p>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg3} alt="NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE" className="w-full h-auto max-h-[460px] object-cover" /></div>
                           <div className="my-6 rounded-sm overflow-hidden border border-stone-200 shadow-sm"><img src={blogImg4} alt="NATURAL LAW THEORY IN INDIAN  JURISPRUDENCE" className="w-full h-auto max-h-[460px] object-cover" /></div>
                        
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
