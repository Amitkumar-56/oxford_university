import React, { useState } from 'react';
import { ChevronRight, Download, CheckCircle, GraduationCap } from 'lucide-react';
import hmSmall2 from '../assets/image/hm_small2.jpg';
import sksilLaw from '../assets/image/sksil-law.jpg';

export default function Courses({ onNavigate }) {
  const [activeCourse, setActiveCourse] = useState('ballb'); // 'ballb' | 'llb' | 'llm' | 'diploma'

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courseList = [
    { id: 'ballb', name: 'B.A. LL.B. (5 Years Integrated)', short: 'B.A. LL.B.' },
    { id: 'llb', name: 'LL.B. (3 Years Professional)', short: 'LL.B.' },
    { id: 'llm', name: 'LL.M. (Master of Laws)', short: 'LL.M.' },
    { id: 'diploma', name: 'Diploma & Certificate Courses', short: 'Diploma' },
  ];

  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      
      {/* 1. Header Banner matching Oxford Courses Layout */}
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-8">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-white font-medium">Courses</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff]">
              {courseList.find((c) => c.id === activeCourse)?.short}
            </span>
          </div>

          {/* Heading Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
                {activeCourse === 'ballb' && 'B.A. LL.B. (5 Years)'}
                {activeCourse === 'llb' && 'LL.B. (3 Years)'}
                {activeCourse === 'llm' && 'LL.M. (Master of Laws)'}
                {activeCourse === 'diploma' && 'Diploma Courses'}
              </h1>
            </div>
            
            <div className="lg:col-span-6">
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
                {activeCourse === 'ballb' && 'Comprehensive 5-Year integrated dual degree in humanities and law. Open after 10+2, approved by Bar Council of India (BCI) and affiliated to Bundelkhand University, Jhansi.'}
                {activeCourse === 'llb' && 'Premier 3-Year professional law degree for graduates in any discipline. Rigorous trial advocacy, moot court training, and procedural law mastery.'}
                {activeCourse === 'llm' && 'Advanced postgraduate master of laws degree focusing on specialized constitutional jurisprudence, criminal law, and corporate regulations.'}
                {activeCourse === 'diploma' && 'Skill-oriented specialized certificates in Cyber Law, Intellectual Property Rights, Human Rights, and Alternate Dispute Resolution.'}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-10 rounded-sm overflow-hidden shadow-xl border border-white/10">
            <img
              src={activeCourse === 'ballb' ? sksilLaw : hmSmall2}
              alt="Course Study at SKSIL"
              className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* 2. Oxford Navigation Tabs Bar */}
      <section className="bg-[#f0f4f8] py-6 px-4 sm:px-8 lg:px-12 border-b border-stone-200">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl text-[#002147] font-normal mb-3">
            Pages in this section
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {courseList.map((course) => (
              <button
                key={course.id}
                onClick={() => {
                  setActiveCourse(course.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-1 transition pb-1 border-b-2 ${
                  activeCourse === course.id
                    ? 'text-[#002147] border-[#002147]'
                    : 'text-stone-600 border-transparent hover:text-[#002147]'
                }`}
              >
                <span>{course.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Course Details & Tables */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        
        {/* B.A. LL.B. (5 Years) */}
        {activeCourse === 'ballb' && (
          <div className="space-y-10 max-w-4xl">
            <div>
              <h2 className="font-serif text-3xl text-[#002147] mb-4">
                Program Overview
              </h2>
              <p className="text-stone-700 leading-relaxed text-base">
                Bachelor of Arts and Bachelor of Legislative Law (B.A. LL.B.) is an undergraduate integrated law program offering a comprehensive understanding of law alongside humanities, social sciences, economics, and political science. Structured over 10 semesters (5 years), it blends classroom lectures, moot courts, clinical legal papers, and mandatory chamber internships.
              </p>
            </div>

            {/* Quick Info Table */}
            <div className="border border-stone-200 overflow-hidden rounded-sm">
              <table className="w-full text-left text-sm text-stone-700">
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147] w-1/3">College Code</th><td className="p-4">797 (Bundelkhand University)</td></tr>
                  <tr><th className="p-4 font-semibold text-[#002147]">Course Type</th><td className="p-4">Undergraduate Integrated (5 Years)</td></tr>
                  <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Annual Fee</th><td className="p-4 font-bold text-[#002147]">₹16,000/- Per Annum</td></tr>
                  <tr><th className="p-4 font-semibold text-[#002147]">Eligibility</th><td className="p-4">10+2 (any stream) with 45% marks for General, 42% for OBC, 40% for SC/ST</td></tr>
                  <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Academic Session</th><td className="p-4">Starts August every year</td></tr>
                </tbody>
              </table>
            </div>

            {/* Curriculum Highlights */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#002147]">Key Subjects Covered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
                {['Constitutional Law I & II', 'Law of Crimes (B.N.S. & B.N.S.S. 2023)', 'Law of Evidence (Bhartiya Sakshya Adhiniyam)', 'Civil Procedure Code & Limitation Act', 'Law of Contract & Specific Relief', 'Family Law (Hindu & Muslim Law)', 'Alternative Dispute Resolution (ADR)', 'Moot Court Exercises & 20 Weeks Internship'].map((subj) => (
                  <div key={subj} className="flex items-center gap-2 p-2 bg-stone-50 border border-stone-200">
                    <CheckCircle className="w-4 h-4 text-[#00c5ff] shrink-0" />
                    <span>{subj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Syllabus Bar */}
            <div className="p-6 bg-[#002147] text-white flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm">
              <div>
                <h4 className="font-serif text-lg font-semibold">Official B.A. LL.B. Syllabus</h4>
                <p className="text-xs text-stone-300">Complete semester-wise papers & reference books</p>
              </div>
              <a
                href="https://www.sksil.ac.in/public/front/assets/pdfs/BALLB.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-[#00c5ff] hover:bg-[#00b4eb] text-[#002147] text-xs font-semibold px-4 py-2.5 rounded-sm inline-flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Syllabus (PDF)</span>
              </a>
            </div>
          </div>
        )}

        {/* LL.B. (3 Years) */}
        {activeCourse === 'llb' && (
          <div className="space-y-10 max-w-4xl">
            <div>
              <h2 className="font-serif text-3xl text-[#002147] mb-4">
                Program Overview
              </h2>
              <p className="text-stone-700 leading-relaxed text-base">
                Our 3-Year Bachelor of Laws (LL.B.) course is crafted for graduates looking to enter legal practice, judiciary exams, or corporate advisory roles. SKSIL delivers intellectually stimulating education, regular mock trials, practical legal drafting, and extensive trial observation.
              </p>
            </div>

            {/* Quick Info Table */}
            <div className="border border-stone-200 overflow-hidden rounded-sm">
              <table className="w-full text-left text-sm text-stone-700">
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147] w-1/3">College Code</th><td className="p-4">797 (Bundelkhand University)</td></tr>
                  <tr><th className="p-4 font-semibold text-[#002147]">Course Type</th><td className="p-4">Graduate Professional (3 Years / 6 Semesters)</td></tr>
                  <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Annual Fee</th><td className="p-4 font-bold text-[#002147]">₹15,000/- Per Annum</td></tr>
                  <tr><th className="p-4 font-semibold text-[#002147]">Eligibility</th><td className="p-4">Any Bachelor Degree with 45% marks for General, 42% for OBC, 40% for SC/ST</td></tr>
                  <tr className="bg-stone-50"><th className="p-4 font-semibold text-[#002147]">Academic Session</th><td className="p-4">Starts August every year</td></tr>
                </tbody>
              </table>
            </div>

            {/* Curriculum Highlights */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#002147]">Core Clinical & Substantive Papers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
                {['Jurisprudence & Legal Theory', 'Law of Crimes (B.N.S. & B.N.S.S. 2023)', 'Constitutional Law of India', 'Civil Procedure Code & Evidence Act', 'Drafting, Pleading & Conveyance', 'Professional Ethics & Accountancy', 'Alternate Dispute Resolution (ADR)', 'Moot Court Exercises & Advocate Chamber Diary'].map((subj) => (
                  <div key={subj} className="flex items-center gap-2 p-2 bg-stone-50 border border-stone-200">
                    <CheckCircle className="w-4 h-4 text-[#00c5ff] shrink-0" />
                    <span>{subj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Syllabus Bar */}
            <div className="p-6 bg-[#002147] text-white flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm">
              <div>
                <h4 className="font-serif text-lg font-semibold">Official LL.B. Syllabus</h4>
                <p className="text-xs text-stone-300">Complete semester pattern and prescribed university syllabus</p>
              </div>
              <a
                href="https://www.sksil.ac.in/public/front/assets/pdfs/LL.B.syllabus.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-[#00c5ff] hover:bg-[#00b4eb] text-[#002147] text-xs font-semibold px-4 py-2.5 rounded-sm inline-flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Syllabus (PDF)</span>
              </a>
            </div>
          </div>
        )}

        {/* LL.M. & Diploma */}
        {(activeCourse === 'llm' || activeCourse === 'diploma') && (
          <div className="space-y-6 max-w-4xl bg-stone-50 p-8 border border-stone-200 rounded-sm">
            <h2 className="font-serif text-3xl text-[#002147]">
              {activeCourse === 'llm' ? 'Master of Laws (LL.M.)' : 'Diploma & Certificate Programs'}
            </h2>
            <p className="text-stone-700 leading-relaxed text-base">
              {activeCourse === 'llm'
                ? 'The LL.M. postgraduate program is designed for law graduates aspiring for careers in higher academic research, judiciary, or senior corporate counsel roles.'
                : 'Certificate courses provide focused practical expertise in emerging legal sectors including Cyber Law, Taxation, and Dispute Resolution.'}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => handleNav('contact-us')}
                className="bg-[#002147] text-white text-xs font-semibold px-5 py-2.5 rounded-sm hover:bg-[#003366] transition"
              >
                Contact Admissions Office for Details
              </button>
            </div>
          </div>
        )}

      </section>

      {/* 4. Bottom Support Section */}
      <section className="bg-[#eef4f9] py-14 px-4 sm:px-8 lg:px-12 border-t border-stone-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-stone-200">
            <GraduationCap className="w-8 h-8 text-[#002147] mb-3" />
            <h4 className="font-serif text-lg font-semibold text-[#002147] mb-2">BCI Recognized</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Degrees recognized throughout India for enrollment as an Advocate with any State Bar Council.
            </p>
          </div>
          <div className="bg-white p-6 border border-stone-200">
            <GraduationCap className="w-8 h-8 text-[#002147] mb-3" />
            <h4 className="font-serif text-lg font-semibold text-[#002147] mb-2">Affordable Education</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Govt.-recognized fee structure with full eligibility for UP State & Central Post-Matric Scholarships.
            </p>
          </div>
          <div className="bg-white p-6 border border-stone-200">
            <GraduationCap className="w-8 h-8 text-[#002147] mb-3" />
            <h4 className="font-serif text-lg font-semibold text-[#002147] mb-2">Moot Court & Legal Aid</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hands-on practical training with courtroom simulations, court visits, and legal aid clinics.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
