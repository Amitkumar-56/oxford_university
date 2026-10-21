import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Search } from 'lucide-react';

import heroGateImg from '../assets/image/sksil_gate_campus.jpg';
import heroImg from '../assets/image/1774343667.jpeg';
import anchalImg from '../assets/image/1774343478.jpg';
import adgpImg from '../assets/image/1774343512.jpg';
import awarenessCampImg from '../assets/image/1774343654.jpg';
import hmSmall2 from '../assets/image/hm_small2.jpg';
import sksilLaw from '../assets/image/sksil-law.jpg';
import hmSmall3 from '../assets/image/hm_small3.jpg';
import hmSmall4 from '../assets/image/hm_small4.jpg';
import awareness1 from '../assets/image/awareness11738490513.jpg';
import awareness2 from '../assets/image/awareness21738490513.jpg';
import advocacyImg from '../assets/image/awareness11715621827.jpg';
import judiciaryImg from '../assets/image/awareness11715621857.jpg';
import govtJobsImg from '../assets/image/awareness11715621877.jpg';
import academicsImg from '../assets/image/awareness11715621906.jpg';
import blog1 from '../assets/image/blog1791451456.png';
import blog2 from '../assets/image/blog1787981516.png';
import blog3 from '../assets/image/blog1778915999.png';
import blog4 from '../assets/image/blog1747044490.jpeg';
import inspirationImg from '../assets/image/inspiration11738402799.png';

export default function HomeSlider({ onNavigate }) {
  const [courseType, setCourseType] = useState('ballb');
  const [searchQuery, setSearchQuery] = useState('');
  const [discoverSlide, setDiscoverSlide] = useState(0);

  const handleNav = (key) => {
    if (onNavigate) onNavigate(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate(`courses?type=${courseType}&q=${encodeURIComponent(searchQuery)}`);
  };

  // Section 4: Latest News / Notifications
  const latestNewsItems = [
    {
      id: 'news-1',
      dateBadge: '16 October 2026 | Notification',
      image: heroImg,
      title: 'Notice for Dussehra Holidays 2026',
      tags: ['SKSIL', 'Notification', 'Holiday'],
      isUnderlined: false,
    },
    {
      id: 'news-2',
      dateBadge: '13 October 2026 | Examination',
      image: anchalImg,
      title: 'Notice for Examination Form 5th Semester',
      tags: ['Examination', 'Semester 5', 'Academics'],
      isUnderlined: false,
    },
    {
      id: 'news-3',
      dateBadge: '06 October 2026 | Internship',
      image: adgpImg,
      title: 'INTERNSHIP BULLETIN (September-October) 2026',
      tags: ['Internship', 'Legal Practice', 'Placements'],
      isUnderlined: true,
    },
    {
      id: 'news-4',
      dateBadge: '05 October 2026 | Scholarship',
      image: awarenessCampImg,
      title: 'Notice for UP State & Central Scholarship 2026-27',
      tags: ['Scholarship', 'Financial Aid', 'Admissions'],
      isUnderlined: false,
    },
  ];

  // Section 5: Why Study Law / Academics at SKSIL
  const makeItItems = [
    {
      id: 'make-courses',
      title: 'Law Courses',
      isUnderlined: false,
      image: hmSmall2,
      desc: 'SKSIL offers B.A. LL.B. (5 Years Integrated) and LL.B. (3 Years Professional) affiliated to Bundelkhand University, Jhansi and approved by the Bar Council of India (BCI).',
    },
    {
      id: 'make-colleges',
      title: 'College Life',
      isUnderlined: false,
      image: sksilLaw,
      desc: 'With a campus blessed by nature on Kanpur Road, Banda, SKSIL offers engaging moot courts, legal aid clinics, and supportive faculty for all-round legal education.',
    },
    {
      id: 'make-applying',
      title: 'Admissions 2026',
      isUnderlined: true,
      image: hmSmall3,
      desc: 'Join the premier not-for-profit law institute of Bundelkhand. Simple and transparent admission process based on eligibility, merit, and personal counseling.',
    },
    {
      id: 'make-access',
      title: 'Legal Aid Clinic',
      isUnderlined: false,
      image: awareness1,
      desc: 'Our on-campus Legal Aid Clinic provides free legal consultancy to economically weaker sections and organizes legal literacy camps across urban and rural Bundelkhand.',
    },
  ];

  // Section 6: Professional Career Pathways
  const graduateItems = [
    {
      id: 'grad-start',
      title: 'Advocacy & Litigation',
      isUnderlined: false,
      image: advocacyImg,
      desc: 'Prepare for independent legal practice before District Courts, High Courts, and Supreme Court with rigorous moot court and trial advocacy training.',
    },
    {
      id: 'grad-courses',
      title: 'Judicial Services Exam',
      isUnderlined: false,
      image: judiciaryImg,
      desc: 'Comprehensive academic grounding in core civil and criminal procedural laws to excel in state judicial magistrate and civil judge competitive examinations.',
    },
    {
      id: 'grad-depts',
      title: 'Government & Corporate Roles',
      isUnderlined: false,
      image: govtJobsImg,
      desc: 'Lucrative opportunities as Public Prosecutors, Legal Advisors in PSUs, Law Officers in nationalized banks, and corporate in-house counsel.',
    },
    {
      id: 'grad-funding',
      title: 'Legal Research & Academics',
      isUnderlined: false,
      image: academicsImg,
      desc: 'Pursue advanced postgraduate studies (LL.M.), UGC-NET, professorships, policy research institutes, and legislative drafting think-tanks.',
    },
  ];

  // Section 8: Recent Blog Articles
  const discoverCards = [
    {
      id: 'disc-1',
      image: blog1,
      text: 'Natural Law Theory in Indian Jurisprudence – Constitutional Evolution.',
    },
    {
      id: 'disc-2',
      image: blog2,
      text: 'Protecting Consumer Autonomy in Digital Markets: A Legal & Regulatory Perspective.',
    },
    {
      id: 'disc-3',
      image: blog3,
      text: 'Judicial Review of Administrative Action in Bharat – Fundamental Safeguards.',
    },
    {
      id: 'disc-4',
      image: blog4,
      text: 'Digital Transformation and Technology in Modern Legal Education & Practice.',
    },
  ];

  // Section 9: SKSIL Academic Excellence & Pillars
  const excellenceItems = [
    {
      id: 'ex-campaign',
      title: 'University Gold Medalists',
      isUnderlined: false,
      isBrandedBox: true,
      desc: 'Honored by Hon. Governor of UP Smt. Anandiben Patel for producing Bundelkhand University Top Rankers.',
    },
    {
      id: 'ex-climate',
      title: 'High-Tech Law Library',
      isUnderlined: true,
      image: hmSmall3,
      desc: 'Rich collection of central law reports, AIR, Supreme Court Cases, and digital legal search databases.',
    },
    {
      id: 'ex-health',
      title: 'Bar Council Approved Faculty',
      isUnderlined: false,
      image: adgpImg,
      desc: 'Over 15+ years of combined academic experience guiding students with real-world courtroom insight.',
    },
    {
      id: 'ex-society',
      title: 'Legal Aid & Chaupal Drives',
      isUnderlined: false,
      image: awareness2,
      desc: 'Regular village awareness camps, consumer rights clinics, and social empowerment initiatives.',
    },
  ];

  // Section 10: Faculty & Distinguished Leadership
  const spotlightHumanityItems = [
    {
      id: 'spot-1',
      dateBadge: 'University Convocation',
      image: heroImg,
      title: 'Raj Kishor Pandey receives University Gold Medal from Hon. Governor Smt. Anandiben Patel',
      isUnderlined: true,
      tags: ['Topper 2023-24', 'Gold Medal', 'BU Jhansi', 'Convocation'],
    },
    {
      id: 'spot-2',
      dateBadge: 'Academic Honor',
      image: anchalImg,
      title: 'Anchal Nigam awarded Gold Medal by Hon. Minister of Higher Education for Academic Distinction',
      isUnderlined: false,
      tags: ['Topper 2022-23', 'Academic Merit', 'SKSIL Pride', 'Gold Medalist'],
    },
    {
      id: 'spot-3',
      dateBadge: 'Campus Address',
      image: adgpImg,
      title: 'Hon. Raja Babu Singh Ji, ADGP addresses SKSIL students on Law Enforcement and Career Guidance',
      isUnderlined: false,
      tags: ['Guest Lecture', 'Police Administration', 'Prize Distribution', 'Leadership'],
    },
    {
      id: 'spot-4',
      dateBadge: 'Legal Awareness',
      image: awarenessCampImg,
      title: "Hon. Secretary Shri Yash Shivhare addresses Legal Awareness Camp on Women's Rights & Protections",
      isUnderlined: false,
      tags: ['Legal Aid', 'Women Rights', 'Community Outreach', 'Secretary Address'],
    },
  ];

  // Section 11: Explore SKSIL Facilities
  const exploreUniversityItems = [
    {
      id: 'exp-colleges',
      title: 'Moot Court Hall',
      isUnderlined: false,
      image: hmSmall2,
      desc: 'Real court ambiance for mock trials, appellate arguments, and national moot court competitions.',
    },
    {
      id: 'exp-divisions',
      title: 'Campus & Facilities',
      isUnderlined: false,
      image: sksilLaw,
      desc: 'Modern and hi-tech classrooms, lush green campus, seminar halls, and sports amenities on Kanpur Road, Banda.',
    },
    {
      id: 'exp-bodleian',
      title: 'Law Library & E-Journals',
      isUnderlined: true,
      image: hmSmall3,
      desc: 'Extensive repository of legal commentaries, bare acts, law commission reports, and online research portals.',
    },
    {
      id: 'exp-jobs',
      title: 'Legal Aid & Placement Cell',
      isUnderlined: false,
      image: hmSmall4,
      desc: 'Dedicated placement assistance, advocate chamber internships, and continuous practical training.',
    },
  ];

  // Section 12: Studying at SKSIL
  const studyingAtOxfordItems = [
    {
      id: 'study-ug',
      title: 'B.A. LL.B. (5 Years Integrated)',
      isUnderlined: false,
      image: sksilLaw,
      desc: 'Integrated program open after 10+2 in any stream. Comprehensive study blending arts and professional legal jurisprudence over 10 semesters.',
    },
    {
      id: 'study-grad',
      title: 'LL.B. (3 Years Professional)',
      isUnderlined: false,
      image: hmSmall2,
      desc: 'Three-year graduate law course open to holders of any Bachelor degree. Focused on advocacy, drafting, pleading, and procedural laws.',
    },
    {
      id: 'study-lifelong',
      title: 'Our Inspiration',
      isUnderlined: true,
      image: inspirationImg,
      desc: 'Named after Param Sant Satguru Kripal Singh Ji (Huzur Maharaj Ji), inspiring our mission of truth, justice, and community service.',
    },
    {
      id: 'study-students',
      title: 'Students’ Portal & Support',
      isUnderlined: false,
      image: hmSmall4,
      desc: 'Online notice board, past exam papers, syllabus downloads, attendance tracking, and student grievance support.',
    },
  ];

  return (
    <div className="w-full bg-[#001733]">
      
      {/* 1. HERO SECTION (Exact Oxford Layout Replica) */}
      <section className="relative w-full min-h-[580px] md:min-h-[660px] lg:min-h-[720px] flex items-end overflow-hidden pb-12 sm:pb-16 pt-28 sm:pt-36">
        <div className="absolute inset-0 z-0">
          <img
            src={heroGateImg}
            alt="Sant Kripal Singh Institute of Law Gate & Campus"
            className="w-full h-full object-cover object-center"
          />
          {/* Clean image on top with color gradient only at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001733] via-[#001733]/60 via-40% to-transparent to-75%" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001733]/70 via-[#001733]/20 via-50% to-transparent to-80%" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-4">
            
            {/* Oxford-style Yellow Date/Category Badge */}
            <div>
              <span className="inline-block bg-[#E8C252] text-[#002147] font-semibold text-xs sm:text-[13px] px-2.5 py-1 rounded-[2px] tracking-wide">
                14 October 2026 | Admissions & Affiliations
              </span>
            </div>

            {/* Oxford-style Serif Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-white leading-[1.12] tracking-tight">
              Sant Kripal Singh Institute of Law – Premier Legal Excellence in Bundelkhand
            </h1>

            {/* Oxford-style Subtitle */}
            <p className="text-white/95 text-base sm:text-lg lg:text-[19px] font-normal max-w-xl leading-relaxed">
              Affiliated to Bundelkhand University, Jhansi & approved by Bar Council of India (BCI).
            </p>

            {/* Oxford-style Cyan Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNav('about')}
                className="bg-[#00c5ff] hover:bg-[#00b2e8] text-[#002147] font-semibold text-[15px] px-5 py-3 rounded-[3px] inline-flex items-center gap-2.5 transition-colors group shadow-md"
              >
                <span>Read the full college profile</span>
                <ChevronRight className="w-4 h-4 text-[#002147] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COURSE SEARCH BAR */}
      <section className="bg-[#002147] border-t border-b border-[#003366] py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="lg:max-w-md">
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
              Start your legal education journey; explore courses now.
            </h2>
          </div>

          <div className="w-full lg:max-w-2xl">
            <form onSubmit={handleSearchSubmit} className="space-y-3">
              <div className="flex items-center gap-6 text-white text-sm">
                <label className="flex items-center gap-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="courseType"
                    value="ballb"
                    checked={courseType === 'ballb'}
                    onChange={() => setCourseType('ballb')}
                    className="accent-[#00c5ff] w-4 h-4 cursor-pointer"
                  />
                  <span>B.A. LL.B. (5 Years)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="courseType"
                    value="llb"
                    checked={courseType === 'llb'}
                    onChange={() => setCourseType('llb')}
                    className="accent-[#00c5ff] w-4 h-4 cursor-pointer"
                  />
                  <span>LL.B. (3 Years)</span>
                </label>
              </div>

              <div className="flex w-full shadow-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal subjects, syllabus, admission criteria..."
                  className="flex-1 bg-white text-stone-900 px-4 py-3 text-sm focus:outline-none placeholder-stone-400"
                />
                <button
                  type="submit"
                  className="bg-[#00c5ff] hover:bg-[#00b4eb] text-[#002147] font-medium px-6 py-3 text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span>Search</span>
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. 3-IMAGE CARDS SECTION */}
      <section className="bg-[#001733] py-12 px-4 sm:px-8 lg:px-12 border-b border-[#002855]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => handleNav('why-study-law')}
            className="group cursor-pointer rounded-sm overflow-hidden bg-[#002147] shadow-lg hover:shadow-2xl transition"
          >
            <div className="h-80 sm:h-96 w-full overflow-hidden relative">
              <img
                src={sksilLaw}
                alt="Why Study Law at SKSIL"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001733] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#00c5ff] text-xs font-semibold uppercase tracking-wider">
                  Academic Mission
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:underline mt-1">
                  Why Study Law at SKSIL?
                </h3>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleNav('courses')}
            className="group cursor-pointer rounded-sm overflow-hidden bg-[#002147] shadow-lg hover:shadow-2xl transition"
          >
            <div className="h-80 sm:h-96 w-full overflow-hidden relative">
              <img
                src={hmSmall2}
                alt="Courses at SKSIL"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001733] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#00c5ff] text-xs font-semibold uppercase tracking-wider">
                  Bar Council Approved
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:underline mt-1">
                  Our Professional Degree Programs
                </h3>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleNav('rules')}
            className="group cursor-pointer rounded-sm overflow-hidden bg-[#002147] shadow-lg hover:shadow-2xl transition"
          >
            <div className="h-80 sm:h-96 w-full overflow-hidden relative">
              <img
                src={hmSmall3}
                alt="Rules & Regulations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001733] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#00c5ff] text-xs font-semibold uppercase tracking-wider">
                  Institutional Discipline
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:underline mt-1">
                  Rules & Academic Regulations
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LATEST NOTIFICATIONS SECTION */}
      <section className="bg-[#EBECEE] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight">
              Latest Notifications
            </h2>
            <button
              type="button"
              onClick={() => handleNav('notifications')}
              className="border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-5 py-2 text-sm font-medium transition inline-flex items-center gap-2 rounded-sm"
            >
              <span>All Notifications</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNewsItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                <div className="relative h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#E8C252] text-[#002147] font-semibold text-[11px] px-2.5 py-0.5 rounded-sm shadow-sm">
                    {item.dateBadge}
                  </div>
                </div>

                <h3 className={`font-serif text-[17px] text-[#002147] font-medium leading-snug mt-3 mb-3 group-hover:text-[#00508f] transition ${
                  item.isUnderlined ? 'underline underline-offset-2' : ''
                }`}>
                  {item.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-stone-700 text-[11px] px-2.5 py-1 rounded-sm border border-stone-200/80 shadow-2xs font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDYING AT SKSIL / ACADEMIC OVERVIEW */}
      <section className="bg-[#D9E1EB] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#ccd7e4]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight">
              Studying at SKSIL
            </h2>
            <button
              type="button"
              onClick={() => handleNav('admissions')}
              className="border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-5 py-2 text-sm font-medium transition inline-flex items-center gap-2 rounded-sm self-start sm:self-auto"
            >
              <span>Admissions & Eligibility</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {makeItItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                <div className="h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className={`font-serif text-2xl text-[#002147] font-normal mb-3 group-hover:text-[#00508f] transition ${
                  item.isUnderlined ? 'underline underline-offset-2' : ''
                }`}>
                  {item.title}
                </h3>

                <p className="text-stone-700 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UNIQUE CAREER OPPORTUNITIES */}
      <section className="bg-[#E4ECF4] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#d2dfec]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight">
              Unique Opportunities After Studying Law
            </h2>
            <button
              type="button"
              onClick={() => handleNav('career-paths')}
              className="border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-5 py-2 text-sm font-medium transition inline-flex items-center gap-2 rounded-sm self-start sm:self-auto"
            >
              <span>Explore Career Paths</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graduateItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                <div className="h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-serif text-2xl text-[#002147] font-normal mb-3 group-hover:text-[#00508f] transition">
                  {item.title}
                </h3>

                <p className="text-stone-700 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROMO BANNER: LEGAL AID & AWARENESS */}
      <section className="bg-[#EBECEE] py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#002147] rounded-lg overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                Legal Aid & Awareness Clinic
              </h2>

              <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-lg">
                Sant Kripal Singh Institute of Law has established an active Legal Aid Clinic providing pro-bono consultancy to economically weaker sections and organizing community awareness camps across Bundelkhand.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNav('legal-aid')}
                  className="bg-[#00c5ff] hover:bg-[#00b4eb] text-[#002147] font-medium text-sm sm:text-base px-6 py-3 rounded-sm inline-flex items-center gap-2 shadow-md transition-colors"
                >
                  <span>Our Legal Aid Programs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 h-64 lg:h-full min-h-[300px]">
              <img
                src={awareness2}
                alt="Legal Awareness Camp by SKSIL"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. RECENT BLOG ARTICLES CAROUSEL */}
      <section className="bg-[#E2ECF7] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#d0dfef]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight mb-8">
            Recent Blog Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discoverCards.slice(discoverSlide, discoverSlide + 3).concat(
              discoverCards.slice(0, Math.max(0, discoverSlide + 3 - discoverCards.length))
            ).map((card, idx) => (
              <div
                key={idx}
                className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow-md group cursor-pointer"
                onClick={() => handleNav(card.id)}
              >
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white font-medium text-base sm:text-[17px] leading-snug drop-shadow-sm group-hover:underline">
                  {card.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-1.5">
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setDiscoverSlide(dot)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    discoverSlide === dot ? 'bg-[#002147] w-3' : 'bg-stone-400/60'
                  }`}
                  aria-label={`Slide ${dot + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setDiscoverSlide((prev) => (prev > 0 ? prev - 1 : discoverCards.length - 1))}
                className="w-10 h-10 rounded-full bg-[#d0e4f7] hover:bg-[#b8d7f2] text-[#002147] flex items-center justify-center transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setDiscoverSlide((prev) => (prev + 1) % discoverCards.length)}
                className="w-10 h-10 rounded-full bg-[#1b4e9b] hover:bg-[#143e7e] text-white flex items-center justify-center transition shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SKSIL EXCELLENCE & ACHIEVEMENTS */}
      <section className="bg-[#E4ECF4] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#d2dfec]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight">
              SKSIL Excellence
            </h2>
            <button
              type="button"
              onClick={() => handleNav('excellence')}
              className="border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-5 py-2 text-sm font-medium transition inline-flex items-center gap-2 rounded-sm self-start sm:self-auto"
            >
              <span>Discover more</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {excellenceItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                {item.isBrandedBox ? (
                  <div className="h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-[#002147] shadow-sm mb-3 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-16 h-16 rounded overflow-hidden mb-2 opacity-90 border border-white/20">
                      <img
                        src={heroImg}
                        alt="SKSIL Gold Medal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-serif italic text-white text-lg font-light">
                      SKSIL Excellence
                    </span>
                  </div>
                ) : (
                  <div className="h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm mb-3 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-blue-500/25 border border-white/40 backdrop-blur-[1px]" />
                    </div>
                  </div>
                )}

                <h3 className={`font-serif text-2xl text-[#002147] font-normal mb-2 leading-snug group-hover:text-[#00508f] transition ${
                  item.isUnderlined ? 'underline underline-offset-2' : ''
                }`}>
                  {item.title}
                </h3>

                <p className="text-stone-700 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HONORS & TOPPERS SPOTLIGHT */}
      <section className="bg-[#EBECEE] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-stone-300">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight">
              Academic Honors & Convocation Spotlight
            </h2>
            <button
              type="button"
              onClick={() => handleNav('gallery')}
              className="border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-5 py-2 text-sm font-medium transition inline-flex items-center gap-2 rounded-sm self-start sm:self-auto"
            >
              <span>View Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightHumanityItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                <div className="relative h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#E8C252] text-[#002147] font-semibold text-[11px] px-2.5 py-0.5 rounded-sm shadow-sm">
                    {item.dateBadge}
                  </div>
                </div>

                <h3 className={`font-serif text-[17px] text-[#002147] font-medium leading-snug mt-3 mb-3 group-hover:text-[#00508f] transition ${
                  item.isUnderlined ? 'underline underline-offset-2' : ''
                }`}>
                  {item.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-stone-700 text-[11px] px-2.5 py-1 rounded-sm border border-stone-200/80 shadow-2xs font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. EXPLORE THE INSTITUTE */}
      <section className="bg-[#D9E1EB] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#ccd7e4]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight">
              Explore the Institute
            </h2>
            <button
              type="button"
              onClick={() => handleNav('about')}
              className="border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-5 py-2 text-sm font-medium transition inline-flex items-center gap-2 rounded-sm self-start sm:self-auto"
            >
              <span>More about SKSIL</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreUniversityItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                <div className="h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className={`font-serif text-2xl text-[#002147] font-normal mb-3 group-hover:text-[#00508f] transition ${
                  item.isUnderlined ? 'underline underline-offset-2' : ''
                }`}>
                  {item.title}
                </h3>

                <p className="text-stone-700 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. LAW PROGRAMS & INSPIRATION */}
      <section className="bg-[#E4ECF4] py-14 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#d2dfec]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-normal tracking-tight mb-8">
            Law Programs & Inspiration
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyingAtOxfordItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => handleNav(item.id)}
              >
                <div className="h-48 sm:h-52 w-full rounded-lg overflow-hidden bg-stone-300 shadow-sm mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className={`font-serif text-2xl text-[#002147] font-normal mb-3 leading-snug group-hover:text-[#00508f] transition ${
                  item.isUnderlined ? 'underline underline-offset-2' : ''
                }`}>
                  {item.title}
                </h3>

                <p className="text-stone-700 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}