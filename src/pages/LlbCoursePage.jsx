import React, { useState } from 'react';
import { ChevronRight, Download, GraduationCap, Scale, BookOpen } from 'lucide-react';
import llbBanner from '../assets/image/llb_banner.jpg';
import hmSmall2 from '../assets/image/hm_small2.jpg';

export default function LlbCoursePage({ onNavigate }) {
  const [activeSemYear, setActiveSemYear] = useState('year1');

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const semestersData = {
    year1: [
      {
        sem: 'SEMESTER I (80401)',
        papers: [
          { sNo: '1', code: '6841', name: 'Jurisprudence', ext: '70 Marks', int: '30 Marks' },
          { sNo: '2', code: '6842', name: 'Law of Contract', ext: '70 Marks', int: '30 Marks' },
          { sNo: '3', code: '6843', name: 'Special Contract', ext: '70 Marks', int: '30 Marks' },
          { sNo: '4', code: '6844', name: 'Family Law- I (Hindu Law)', ext: '70 Marks', int: '30 Marks' },
          { sNo: '5', code: '6845', name: 'Family Law-II (Muslim Law)', ext: '70 Marks', int: '30 Marks' },
        ]
      },
      {
        sem: 'SEMESTER II (80402)',
        papers: [
          { sNo: '6', code: '6846', name: 'Law of Tort Including M.V. Accident and Consumer Protection Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '7', code: '6847', name: 'Law of Crimes Paper-I: Bhartiya Nyaya Sanhita, 2023', ext: '70 Marks', int: '30 Marks' },
          { sNo: '8', code: '6848', name: 'Law of Crimes Paper-II: Bhartiya Nagrik Suraksha Sanhita, 2023', ext: '70 Marks', int: '30 Marks' },
          { sNo: '9', code: '6849', name: 'Constitutional Law – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '10', code: '6850', name: 'Property Law', ext: '70 Marks', int: '30 Marks' },
        ]
      }
    ],
    year2: [
      {
        sem: 'SEMESTER III (80403)',
        papers: [
          { sNo: '11', code: '7841', name: 'Constitutional Law — II', ext: '70 Marks', int: '30 Marks' },
          { sNo: '12', code: '7842', name: 'Company Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '13', code: '7843', name: 'Principles of Taxation Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '14', code: '7844', name: 'Labour Law – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '15', code: '7845', name: 'Administrative Law', ext: '70 Marks', int: '30 Marks' },
        ]
      },
      {
        sem: 'SEMESTER IV (80404)',
        papers: [
          { sNo: '16', code: '7846', name: 'Civil Procedure Code and Limitation Act', ext: '70 Marks', int: '30 Marks' },
          { sNo: '17', code: '7847', name: 'Law of Evidence : Bhartiya Sakshya Adhiniyam, 2023', ext: '70 Marks', int: '30 Marks' },
          { sNo: '18', code: '7848', name: 'Environmental Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '19', code: '7849', name: 'Public International Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '20', code: '7850', name: 'Labour Law — II', ext: '70 Marks', int: '30 Marks' },
        ]
      }
    ],
    year3: [
      {
        sem: 'SEMESTER V (80405)',
        papers: [
          { sNo: '21', code: '8841', name: 'Interpretation of Statutes', ext: '70 Marks', int: '30 Marks' },
          { sNo: '22', code: '8842', name: 'Criminology and Penology', ext: '70 Marks', int: '30 Marks' },
          { sNo: '23', code: '8843', name: 'Land Laws', ext: '70 Marks', int: '30 Marks' },
          { sNo: '24', code: '8844', name: 'Drafting, Pleading, and Conveyance (Clinical Paper – I)', ext: '50 Marks', int: '50 Marks (External Examiner)' },
          { sNo: '25', code: '8845', name: 'Professional Ethics & Professional Accounting system (Clinical Paper–II)', ext: '50 Marks', int: '50 Marks (External Examiner)' },
        ]
      },
      {
        sem: 'SEMESTER VI (80406)',
        papers: [
          { sNo: '26', code: '8846', name: 'Women and Criminal Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '27', code: '8847', name: 'Intellectual Property Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '28', code: '8848', name: 'Human Rights Law and Practice including Right to Information', ext: '70 Marks', int: '30 Marks' },
          { sNo: '29', code: '8849', name: 'Alternate Dispute Resolution (Clinical Paper – III)', ext: '50 Marks', int: '50 Marks (External Examiner)' },
          { sNo: '30', code: '8850', name: 'Moot Court Exercise and Internship (Clinical Paper – IV)', ext: '50 Marks', int: '50 Marks (External Examiner)' },
          { sNo: '31', code: '8851', name: 'Legal and General English', ext: 'Qualifying', int: 'College' },
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12 border-b border-[#003366]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-8">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('courses')} className="hover:text-white transition">
              Courses
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff]">LL.B. (3 Years)</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                Three-Year Graduate Professional Law Program
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight">
                LL.B. (3 Years)
              </h1>
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed mt-4 max-w-xl">
                Our undergraduate course is designed to enhance the essential skills and knowledge needed to be successful in pursuing a career in law.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden shadow-xl border border-white/10">
                <img
                  src={llbBanner}
                  alt="LL.B. 3 Years Course"
                  className="w-full h-64 sm:h-72 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        <div className="bg-white border border-stone-200 p-6 sm:p-10 rounded-sm shadow-sm space-y-5">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#002147] font-bold">
            Course Overview
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              Our undergraduate course is designed to enhance the essential skills and knowledge needed to be successful in pursuing a career in law. Whether one chooses to work with a government organisation or an NGO or with a private company, knowledge of Law is extremely important.
            </p>
            <p>
              At SKSIL, students are provided with an <strong>intellectually challenging and stimulating environment,</strong> with a strong focus on developing them into fully supported and active learners. We train and equip students with the required <strong>academic excellence</strong> and guide them towards vocational development.
            </p>
            <p>
              For students who want to specialise in an area, our courses are designed to be flexible enough to make it happen as they progress.
            </p>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden">
          <div className="p-5 bg-stone-50 border-b border-stone-200">
            <h3 className="font-serif text-xl font-bold text-[#002147]">
              Course Specifications & Eligibility
            </h3>
          </div>
          <table className="w-full text-left text-xs sm:text-sm text-stone-700">
            <tbody className="divide-y divide-stone-200">
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50 w-1/3 sm:w-1/4">College Code (University of Bundelkhand)</th>
                <td className="p-4 font-bold text-stone-900">797</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Course Type</th>
                <td className="p-4">Undergraduate Professional (3 Years)</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Duration</th>
                <td className="p-4">3 years (6 Semesters)</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Fees</th>
                <td className="p-4 font-bold text-[#002147]">Rs 15,000 per Annum</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Minimum Qualification</th>
                <td className="p-4 leading-relaxed">
                  An applicant who has obtained any Bachelor degree in any stream from a university or an equivalent institution recognized as deemed to be University or from an equivalent foreign University declared by the competent authority with 45% marks for General category, 42% for OBC, and 40% for SC and ST.*
                </td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Start Date</th>
                <td className="p-4">August</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 bg-stone-50 text-[11px] text-stone-500 italic border-t border-stone-200">
            *Provided that such a minimum qualifying marks shall not automatically entitle a person to get admission into the institution.
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#002147]">
                LL.B. (3 Years) – Bachelor of Laws (Semester Pattern)
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Prescribed by Bundelkhand University, Jhansi & Bar Council of India
              </p>
            </div>
            <a
              href="/LL.B.syllabus.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#002147] hover:bg-[#003366] text-white rounded text-xs font-semibold tracking-wide transition shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Syllabus (PDF)</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'year1', label: 'First Year (Sem I & II)' },
              { id: 'year2', label: 'Second Year (Sem III & IV)' },
              { id: 'year3', label: 'Third Year (Sem V & VI)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSemYear(tab.id)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition ${
                  activeSemYear === tab.id
                    ? 'bg-[#002147] text-white shadow'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {semestersData[activeSemYear]?.map((semester, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#002147] border-b pb-1">
                  {semester.sem}
                </h4>
                <div className="overflow-x-auto border border-stone-200 rounded-sm">
                  <table className="w-full text-left text-xs sm:text-sm text-stone-700">
                    <thead className="bg-[#002147] text-white">
                      <tr>
                        <th className="p-3 w-16">S.No.</th>
                        <th className="p-3 w-28">Paper Code</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3 text-right">Written (University)</th>
                        <th className="p-3 text-right">Internal (College)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {semester.papers.map((paper, pIdx) => (
                        <tr key={pIdx} className="hover:bg-stone-50">
                          <td className="p-3 font-medium text-stone-500">{paper.sNo}</td>
                          <td className="p-3 font-mono font-semibold text-[#005a9c]">{paper.code}</td>
                          <td className="p-3 font-medium text-stone-900">{paper.name}</td>
                          <td className="p-3 text-right font-medium">{paper.ext}</td>
                          <td className="p-3 text-right font-medium">{paper.int}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-[#002147] text-white flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm shadow-md">
          <div>
            <h4 className="font-serif text-lg font-semibold">Join SKSIL Law College Banda</h4>
            <p className="text-xs text-stone-300">Enroll for LL.B. (3 Years) course and build a distinguished legal career.</p>
          </div>
          <button
            onClick={() => handleNav('admissions/apply')}
            className="bg-[#00c5ff] hover:bg-[#00b4eb] text-[#002147] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition shadow"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
}

