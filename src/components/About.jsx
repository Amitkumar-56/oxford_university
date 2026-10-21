import React, { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';
import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
import inspirationImg from '../assets/image/inspiration11738402799.png';
import topperImg from '../assets/image/1774343478.jpg';
import guestImg from '../assets/image/1774343512.jpg';
import campImg from '../assets/image/1774343654.jpg';
import hmSmall2 from '../assets/image/hm_small2.jpg';
import hmSmall3 from '../assets/image/hm_small3.jpg';
import sksilLaw from '../assets/image/sksil-law.jpg';
import awareness1 from '../assets/image/awareness11738490513.jpg';
import awareness2 from '../assets/image/awareness21738490513.jpg';

export default function About({ onNavigate }) {
  const [activeSubTab, setActiveSubTab] = useState('history');
  const [galleryFilter, setGalleryFilter] = useState('all');

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const historyTimeline = [
    {
      year: '1952',
      title: 'Divine Inspiration & Legacy',
      desc: 'Param Sant Satguru Kripal Singh Ji Maharaj (Huzur Maharaj Ji) was born on 19th July 1952 at Mhow (Dr. Ambedkar Nagar, M.P.), dedicating his life to universal service, truth, and spiritual guidance which forms the moral foundation of SKSIL.',
    },
    {
      year: '2016',
      title: 'Foundation of SKSIL in Banda',
      desc: 'Sant Kripal Singh Institute of Law was established as a premier not-for-profit law academy to provide transformative, affordable legal education in the historic Bundelkhand region.',
    },
    {
      year: '2018',
      title: 'Bar Council of India (BCI) Recognition',
      desc: 'The Bar Council of India, New Delhi granted approval to conduct 5-Year Integrated B.A. LL.B. and 3-Year Professional LL.B. degree courses.',
    },
    {
      year: '2020',
      title: 'Affiliation with Bundelkhand University, Jhansi',
      desc: 'Formally affiliated to Bundelkhand University, Jhansi (U.P.), initiating comprehensive legal training, moot court competitions, and free legal aid clinics.',
    },
    {
      year: '2023',
      title: 'University Gold Medal Distinction',
      desc: 'Students Raj Kishor Pandey & Anchal Nigam clinched the prestigious University Gold Medals, conferred by Hon. Governor Smt. Anandiben Patel and the Higher Education Minister of UP.',
    },
  ];
  const galleryItems = [
    { id: 1, title: 'Campus Main Gate & Academic Block', img: heroGateImg, category: 'campus' },
    { id: 2, title: 'University Gold Medalist Anchal Nigam', img: topperImg, category: 'press' },
    { id: 3, title: 'ADGP Raja Babu Singh Addressing Students', img: guestImg, category: 'press' },
    { id: 4, title: 'Legal Aid & Women Rights Awareness Camp', img: campImg, category: 'press' },
    { id: 5, title: 'Param Sant Satguru Kripal Singh Ji', img: inspirationImg, category: 'campus' },
    { id: 6, title: 'State-of-the-Art Law Library', img: hmSmall3, category: 'campus' },
    { id: 7, title: 'Moot Court Training & Classroom Sessions', img: hmSmall2, category: 'campus' },
    { id: 8, title: 'Community Legal Literacy Drive', img: awareness1, category: 'press' },
  ];

  const filteredGallery = galleryFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === galleryFilter);

  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">


          <nav className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-8">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="hover:text-white transition"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-white font-medium">About</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium capitalize">
              {activeSubTab === 'history' && 'Our History'}
              {activeSubTab === 'inspiration' && 'Our Inspiration'}
              {activeSubTab === 'secretary' && 'Secretary’s Message'}
              {activeSubTab === 'director' && 'Director’s Message'}
              {activeSubTab === 'accreditation' && 'Accreditation'}
              {activeSubTab === 'gallery' && 'Campus Gallery'}
            </span>
          </nav>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                {activeSubTab === 'history' && 'Our history'}
                {activeSubTab === 'inspiration' && 'Our inspiration'}
                {activeSubTab === 'secretary' && 'Secretary’s message'}
                {activeSubTab === 'director' && 'Director’s message'}
                {activeSubTab === 'accreditation' && 'Accreditation'}
                {activeSubTab === 'gallery' && 'Campus gallery'}
              </h1>
            </div>

            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                {activeSubTab === 'history' && 'Sant Kripal Singh Institute of Law is the premier legal institution of Bundelkhand, dedicated to ethical jurisprudence, top academic rankings, and social justice.'}
                {activeSubTab === 'inspiration' && 'Named in divine reverence of Param Sant Satguru Kripal Singh Ji Maharaj (Huzur Maharaj Ji), whose life mission of selfless service guides our educational journey.'}
                {activeSubTab === 'secretary' && '“Pursuing a career in law is a noble calling, and we are committed to providing you with the best possible education to achieve your full potential.”'}
                {activeSubTab === 'director' && '“Our stated goal is to create the best possible conditions for your academic studies, intellectual development, and legal career.”'}
                {activeSubTab === 'accreditation' && 'Recognized by the Bar Council of India (BCI), New Delhi and affiliated with Bundelkhand University, Jhansi (U.P.).'}
                {activeSubTab === 'gallery' && 'Explore moments from academic life, convocation honors, moot court trials, guest seminars, and community legal aid camps.'}
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-sm overflow-hidden bg-black/30 shadow-xl border border-white/10">
            <img
              src={activeSubTab === 'inspiration' ? inspirationImg : heroGateImg}
              alt="Sant Kripal Singh Institute of Law"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center"
            />
            <div className="bg-[#001733] px-5 py-3 flex items-center gap-2.5 text-xs sm:text-[13px] text-stone-300 border-t border-white/10">
              <Info className="w-4 h-4 text-[#00c5ff] shrink-0" />
              <span>
                Sant Kripal Singh Institute of Law, Naraini Road, Banda (U.P.) – Affiliated to Bundelkhand University, Jhansi & BCI approved.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/*  Oxford-Style */}
      <section className="bg-[#f0f4f8] py-8 px-4 sm:px-8 lg:px-12 border-b border-stone-200">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl text-[#002147] font-normal mb-4">
            Pages in this section
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            {[
              { id: 'history', label: 'Our History' },
              { id: 'inspiration', label: 'Our Inspiration' },
              { id: 'secretary', label: 'Secretary’s Message' },
              { id: 'director', label: 'Director’s Message' },
              { id: 'accreditation', label: 'Accreditation' },
              { id: 'gallery', label: 'Gallery' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveSubTab(tab.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-1.5 transition pb-1 border-b-2 ${activeSubTab === tab.id
                  ? 'text-[#002147] border-[#002147]'
                  : 'text-stone-600 border-transparent hover:text-[#002147]'
                  }`}
              >
                <span>{tab.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            ))}
          </div>
        </div>
      </section>


      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">

        {/*  HISTORY */}
        {activeSubTab === 'history' && (
          <div className="space-y-12 max-w-4xl">
            {historyTimeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start border-b border-stone-100 pb-10"
              >
                <div className="sm:col-span-3">
                  <span className="font-serif text-3xl sm:text-4xl text-[#002147] font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#002147] font-normal">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* INSPIRATION  */}
        {activeSubTab === 'inspiration' && (
          <div className="max-w-4xl space-y-8">
            <h2 className="font-serif text-3xl text-[#002147]">
              Param Sant Satguru Kripal Singh Ji Maharaj
            </h2>

            <div className="prose max-w-none text-stone-700 space-y-5 text-base leading-relaxed">
              <p>
                The institution derives its appellation after the worldly name of <strong>Param Sant Satguru Kripal Singh Ji</strong>, popularly addressed as <em>Huzur Maharaj Ji</em> by his disciples. Born to the Great Saint Param Purush Puran Dhani Sant Satguru Shri Maan Singh Ji (Huzur Maalik Saheb Ji) and Pujyaniya Mata Dheera Devi Ji on Sawan Badi Teras, Samvat 2009 (19th July 1952 A.D.) at Mhow (presently Dr. Ambedkar Nagar, district Indore, M.P.).
              </p>
              <p>
                Right from childhood, Huzur Maharaj Ji was keenly interested in spiritual activities and opted to lead the life of a devotee and disciple with unmatched dedication and total surrenderance. His mool mantra was: <em className="text-[#002147] font-semibold">“Sewa of Satsangis is the Param Sewa of the Guru.”</em>
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#f0f4f8] p-6 rounded-sm border-l-4 border-[#002147] italic text-stone-800">
                <p className="text-base mb-3">
                  “इबादत है किसी नाशाद का दिल शाद कर देना।<br />
                  इबादत है किसी बरबाद को आबाद कर देना।<br />
                  इबादत है किसी बेकफन को कफन उढ़ा देना।<br />
                  इबादत है किसी दर्दमंद का दर्द बँटा लेना।”
                </p>
                <span className="font-semibold text-xs uppercase tracking-wider text-[#002147]">— हुज़ूर महाराज</span>
              </div>

              <div className="bg-[#f0f4f8] p-6 rounded-sm border-l-4 border-[#002147] italic text-stone-800">
                <p className="text-base mb-3">
                  “महापुरुष जहाँ रहते हैं, वह स्थान तीर्थ बन जाता है।<br />
                  वे जो भी कहते हैं वह शास्त्र बन जाता है।”
                </p>
                <span className="font-semibold text-xs uppercase tracking-wider text-[#002147]">— हुज़ूर महाराज जी</span>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed text-base">
              Huzur Maharaj Ji brought together two spiritual lineages—Surat Shabda Yog and Shaktipat Mahayog—purifying the individual self (Jeevatma) and conjoining with the Supreme Consciousness (Parmatma). At SKSIL, these values translate into honesty, empathy, and advocacy for those who cannot fight for themselves.
            </p>
          </div>
        )}

        {/* SECRETARY'S MESSAGE*/}
        {activeSubTab === 'secretary' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl text-[#002147]">
              Secretary’s Message
            </h2>

            <div className="bg-[#f7fafc] border border-stone-200 p-8 rounded-sm space-y-4 text-stone-700 leading-relaxed">
              <p className="font-semibold text-stone-900 text-lg">Dear Students,</p>
              <p>
                As the Secretary of Sant Kripal Singh Institute of Law, it is my pleasure to welcome you to our institution. Pursuing a career in law is a noble calling, and we are committed to providing you with the best possible education to help you achieve your goals.
              </p>
              <p>
                At SKSIL, we are dedicated to fostering a supportive and collaborative learning environment that encourages critical thinking and intellectual growth. Our experienced faculty members are passionate about teaching and committed to helping you achieve your full potential. We offer a rigorous curriculum covering constitutional law, criminal jurisprudence, and civil procedures.
              </p>
              <p>
                In addition to our academic offerings, we provide rich opportunities for students to engage in practical legal experiences—including chamber internships, national moot court competitions, and rural legal aid clinics.
              </p>
              <div className="pt-4 border-t border-stone-200">
                <p className="font-bold text-[#002147] text-base">Yash Shivhare</p>
                <p className="text-sm text-stone-500 font-medium">Secretary, Sant Kripal Singh Institute of Law</p>
              </div>
            </div>
          </div>
        )}

        {/*  DIRECTOR'S MESSAGE */}
        {activeSubTab === 'director' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl text-[#002147]">
              Director’s Message
            </h2>

            <div className="bg-[#f7fafc] border border-stone-200 p-8 rounded-sm space-y-4 text-stone-700 leading-relaxed">
              <p className="font-semibold text-stone-900 text-lg">Dear Prospective Students,</p>
              <p>
                It is my pleasure to extend a warm welcome to you on behalf of Sant Kripal Singh Institute of Law, where we strive to provide the highest quality legal education to our students.
              </p>
              <p>
                At SKSIL, we believe that legal education should be more than just the acquisition of knowledge. Our programs are designed to foster critical thinking, ethical reasoning, and effective courtroom communication skills. Our students are encouraged to engage in continuous legal research and analysis.
              </p>
              <p>
                We understand that your choice of an academic study programme is one of the most important decisions in your life, laying the foundation for your professional career. The stated goal of our professors, faculty, and staff is to create the best possible conditions for your academic studies, personal development, and career advancement.
              </p>
              <div className="pt-4 border-t border-stone-200">
                <p className="font-bold text-[#002147] text-base">Dr. Sarvesh Agnihotri</p>
                <p className="text-sm text-stone-500 font-medium">Director, Sant Kripal Singh Institute of Law</p>
              </div>
            </div>
          </div>
        )}

        {/* ACCREDITATION*/}
        {activeSubTab === 'accreditation' && (
          <div className="max-w-4xl space-y-8">
            <h2 className="font-serif text-3xl text-[#002147]">
              Approvals & Accreditations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border border-stone-200 p-6 rounded-sm bg-[#fcfcfc] space-y-4 text-center">
                <span className="inline-block bg-[#002147] text-white text-xs uppercase px-3 py-1 font-semibold tracking-wider">
                  Recognised By
                </span>
                <h3 className="font-serif text-xl text-[#002147] font-semibold">
                  Bar Council of India (BCI)
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Constituted under the Advocates Act, 1961 to regulate legal practice and legal education in India. New Delhi.
                </p>
              </div>

              <div className="border border-stone-200 p-6 rounded-sm bg-[#fcfcfc] space-y-4 text-center">
                <span className="inline-block bg-[#002147] text-white text-xs uppercase px-3 py-1 font-semibold tracking-wider">
                  Affiliated To
                </span>
                <h3 className="font-serif text-xl text-[#002147] font-semibold">
                  Bundelkhand University, Jhansi
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A premier state university established by the Government of Uttar Pradesh, awarding recognized B.A. LL.B. and LL.B. degrees.
                </p>
              </div>
            </div>
          </div>
        )}

        {/*GALLERY */}
        {activeSubTab === 'gallery' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
              <h2 className="font-serif text-3xl text-[#002147]">
                Campus & Events Gallery
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setGalleryFilter('all')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition ${galleryFilter === 'all'
                    ? 'bg-[#002147] text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                >
                  All Photos
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryFilter('press')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition ${galleryFilter === 'press'
                    ? 'bg-[#002147] text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                >
                  Press & Dignitaries
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryFilter('campus')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition ${galleryFilter === 'campus'
                    ? 'bg-[#002147] text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                >
                  Campus & Facilities
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item) => (
                <div key={item.id} className="group overflow-hidden rounded-sm border border-stone-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="h-48 overflow-hidden bg-stone-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="text-xs font-medium text-[#002147] line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* 4*/}
      <section className="bg-[#eef4f9] py-16 px-4 sm:px-8 lg:px-12 border-t border-stone-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={inspirationImg} alt="Our Inspiration" className="w-full h-44 object-cover object-top" />
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg text-[#002147]">Our Inspiration</h4>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  Named in reverence of Param Sant Satguru Kripal Singh Ji Maharaj, advocating truthful living and legal justice.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={topperImg} alt="Gold Medalists" className="w-full h-44 object-cover object-top" />
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg text-[#002147] underline underline-offset-4 decoration-2 decoration-[#002147]">
                  Gold Medalists
                </h4>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  Scholars Raj Kishor Pandey & Anchal Nigam clinched University Gold Medals for highest academic merit.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={guestImg} alt="Distinguished Mentors" className="w-full h-44 object-cover object-top" />
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg text-[#002147]">Distinguished Mentors</h4>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  Senior dignitaries including ADGP Raja Babu Singh Ji mentor students on criminal law and trial advocacy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={campImg} alt="Legal Aid Clinic" className="w-full h-44 object-cover object-top" />
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg text-[#002147]">Legal Aid Clinic</h4>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  Spreading constitutional awareness across rural villages, empowering women and underprivileged citizens.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
