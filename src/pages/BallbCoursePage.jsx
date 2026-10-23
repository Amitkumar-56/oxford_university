import React, { useState } from 'react';
import { ChevronRight, Download, CheckCircle, GraduationCap, BookOpen, Scale, Award } from 'lucide-react';
import llbBanner from '../assets/image/llb_banner.jpg';
import sksilLaw from '../assets/image/sksil-law.jpg';

export default function BallbCoursePage({ onNavigate }) {
  const [activeSemYear, setActiveSemYear] = useState('year1');

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const semestersData = {
    year1: [
      {
        sem: 'SEMESTER I',
        papers: [
          { sNo: '1', code: '1221', name: 'General English – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '2', code: '1222', name: 'Political Science – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '3', code: '1223', name: 'History – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '4', code: '1224', name: 'Sociology – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '5', code: '1225', name: 'Constitutional Law - I', ext: '70 Marks', int: '30 Marks' },
        ]
      },
      {
        sem: 'SEMESTER II',
        papers: [
          { sNo: '6', code: '1226', name: 'General English – II', ext: '70 Marks', int: '30 Marks' },
          { sNo: '7', code: '1227', name: 'Political Science – II', ext: '70 Marks', int: '30 Marks' },
          { sNo: '8', code: '1228', name: 'History – II', ext: '70 Marks', int: '30 Marks' },
          { sNo: '9', code: '1229', name: 'Sociology – II', ext: '70 Marks', int: '30 Marks' },
          { sNo: '10', code: '1230', name: 'Constitutional Law - II', ext: '70 Marks', int: '30 Marks' },
        ]
      }
    ],
    year2: [
      {
        sem: 'SEMESTER III',
        papers: [
          { sNo: '11', code: '2221', name: 'Political Science – III', ext: '70 Marks', int: '30 Marks' },
          { sNo: '12', code: '2222', name: 'History – III', ext: '70 Marks', int: '30 Marks' },
          { sNo: '13', code: '2223', name: 'Sociology – III', ext: '70 Marks', int: '30 Marks' },
          { sNo: '14', code: '2224A/B/C', name: 'Political Science – IV / History – IV / Sociology – IV', ext: '70 Marks', int: '30 Marks' },
          { sNo: '15', code: '2225', name: 'Environmental Law', ext: '70 Marks', int: '30 Marks' },
        ]
      },
      {
        sem: 'SEMESTER IV',
        papers: [
          { sNo: '16', code: '2226A/B/C', name: 'Political Science – V / History – V / Sociology – V', ext: '70 Marks', int: '30 Marks' },
          { sNo: '17', code: '2227A/B/C', name: 'Political Science – VI / History – VI / Sociology – VI', ext: '70 Marks', int: '30 Marks' },
          { sNo: '18', code: '2228', name: 'Law of Crime – I (B.N.S.)', ext: '70 Marks', int: '30 Marks' },
          { sNo: '19', code: '2229', name: 'Law of Contract', ext: '70 Marks', int: '30 Marks' },
          { sNo: '20', code: '2230', name: 'Special Contract', ext: '70 Marks', int: '30 Marks' },
        ]
      }
    ],
    year3: [
      {
        sem: 'SEMESTER V',
        papers: [
          { sNo: '21', code: '3221', name: 'Law of Torts including Motor Vehicle Act & Consumer Protection Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '22', code: '3222', name: 'Labour Law – I', ext: '70 Marks', int: '30 Marks' },
          { sNo: '23', code: '3223', name: 'Family Law - I (Hindu Law)', ext: '70 Marks', int: '30 Marks' },
          { sNo: '24', code: '3224', name: 'Women & Criminal Law', ext: '70 Marks', int: '30 Marks' },
        ]
      },
      {
        sem: 'SEMESTER VI',
        papers: [
          { sNo: '25', code: '3225', name: 'Company Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '26', code: '3226', name: 'Labour Law - II', ext: '70 Marks', int: '30 Marks' },
          { sNo: '27', code: '3227', name: 'Family Law – II (Muslim Law)', ext: '70 Marks', int: '30 Marks' },
          { sNo: '28', code: '3228', name: 'Principles of Taxation Law', ext: '70 Marks', int: '30 Marks' },
        ]
      }
    ],
    year4: [
      {
        sem: 'SEMESTER VII',
        papers: [
          { sNo: '29', code: '4221', name: 'Jurisprudence', ext: '70 Marks', int: '30 Marks' },
          { sNo: '30', code: '4222', name: 'Public International Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '31', code: '4223', name: 'Interpretation of Statutes', ext: '70 Marks', int: '30 Marks' },
          { sNo: '32', code: '4224', name: 'Alternate Dispute Resolution (Clinical Paper) + Viva-Voce', ext: '50 Marks', int: '50 Marks' },
        ]
      },
      {
        sem: 'SEMESTER VIII',
        papers: [
          { sNo: '33', code: '4225', name: 'Law of Evidence : Bhartiya Sakshya Adhiniyam, 2023', ext: '70 Marks', int: '30 Marks' },
          { sNo: '34', code: '4226', name: 'Administrative Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '35', code: '4227', name: 'Human Rights Law & Practice Including R.T.I. Act', ext: '70 Marks', int: '30 Marks' },
          { sNo: '36', code: '4228', name: 'Professional Ethics & Professional Accounting System (Clinical Paper) + Viva-Voce', ext: '50 Marks', int: '50 Marks' },
        ]
      }
    ],
    year5: [
      {
        sem: 'SEMESTER IX',
        papers: [
          { sNo: '37', code: '5221', name: 'Civil Procedure Code & Limitation Act', ext: '70 Marks', int: '30 Marks' },
          { sNo: '38', code: '5222', name: 'Criminology & Penology', ext: '70 Marks', int: '30 Marks' },
          { sNo: '39', code: '5223', name: 'Land Laws', ext: '70 Marks', int: '30 Marks' },
          { sNo: '40', code: '3224', name: 'Drafting, Pleading, & Conveyance (Clinical Paper) + Viva-Voce', ext: '50 Marks', int: '50 Marks' },
        ]
      },
      {
        sem: 'SEMESTER X',
        papers: [
          { sNo: '41', code: '5225', name: 'Intellectual Property Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '42', code: '5226', name: 'Property Law', ext: '70 Marks', int: '30 Marks' },
          { sNo: '43', code: '5227', name: 'Law of Crime II: Bhartiya Nagrik Suraksha Sanhita, 2023', ext: '70 Marks', int: '30 Marks' },
          { sNo: '44', code: '5228', name: 'Moot Court Exercise & Internship (Clinical Paper)', ext: '50 Marks', int: '50 Marks' },
          { sNo: '45', code: '5229', name: 'Legal and General English and Computer Education', ext: '70 Marks', int: '30 Marks' },
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
            <span className="text-[#00c5ff]">B.A.LL.B. (5 Years)</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                Five-Year Integrated Law Program
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight">
                B.A.LL.B. (5 Years)
              </h1>
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed mt-4 max-w-xl">
                Bachelor of Arts and Bachelor of Legislative Law (B.A.LL.B.) is an undergraduate integrated law program that offers a comprehensive understanding of law and its various aspects.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden shadow-xl border border-white/10">
                <img
                  src={llbBanner}
                  alt="B.A.LL.B. 5 Years Course"
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
              Bachelor of Arts and Bachelor of Legislative Law (B.A.LL.B.) is an undergraduate integrated law program that offers a comprehensive understanding of law and its various aspects. This course is specially designed for students who are interested in pursuing a career in the legal field.
            </p>
            <p>
              The duration of the course is five years, and it covers a wide range of topics, including constitutional law, criminal law, civil law, international law, labor law, corporate law, environmental law, and human rights law. The course provides a unique blend of theory and practical knowledge, which enables students to develop critical thinking, analytical and problem-solving skills.
            </p>
            <p>
              The B.A.LL.B. curriculum is structured to offer a strong foundation in legal studies, as well as a wide range of other disciplines, such as humanities, social sciences, economics, and political science. The program aims to provide students with a holistic understanding of the legal system and its role in society.
            </p>
            <p>
              The course also offers students a wide range of opportunities for internships, research projects, and moot court competitions. These practical experiences help students develop their professional skills and gain practical knowledge of the legal system.
            </p>
            <p>
              After completing B.A.LL.B., students can pursue a career as a lawyer, legal advisor, corporate counsel, legal consultant, or legal analyst. They can also opt for higher studies in law and specialize in a particular field. Overall, B.A.LL.B. is an excellent course for students who are passionate about law and want to build a career in the legal profession.
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
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50 w-1/3 sm:w-1/4">College Code</th>
                <td className="p-4 font-bold text-stone-900">797</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Course Type</th>
                <td className="p-4">Undergraduate Integrated (5 Years)</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Duration</th>
                <td className="p-4">5 Years (10 Semesters)</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Fees</th>
                <td className="p-4 font-bold text-[#002147]">₹16,000/- Per Annum</td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Minimum Qualification</th>
                <td className="p-4 leading-relaxed">
                  Applicant must have passed with the following minimum percentage of marks for the qualifying examination, such as 10+2 examination from the recognized Board with 45% marks for general category, 42% for OBC, and 40% for SC and ST.*
                </td>
              </tr>
              <tr>
                <th className="p-4 font-semibold text-[#002147] bg-stone-50/50">Start Date</th>
                <td className="p-4">August</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 bg-stone-50 text-[11px] text-stone-500 italic border-t border-stone-200">
            *Provided that such minimum qualifying mark shall not automatically entitle a person to get admission into the institution.
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#002147]">
                B.A.LL.B. (5 Years) – Semester Pattern Syllabus
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Affiliated to Bundelkhand University, Jhansi (BU Jhansi BALLB - 5 Year Syllabus)
              </p>
            </div>
            <a
              href="/BALLB.pdf"
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
              { id: 'year4', label: 'Fourth Year (Sem VII & VIII)' },
              { id: 'year5', label: 'Fifth Year (Sem IX & X)' },
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

        <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-10 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#002147]">
            Moot Court Exercise & Internship
          </h3>

          <div className="space-y-4 text-stone-700 text-xs sm:text-sm leading-relaxed">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">Moot court exercise:</h4>
            <div className="space-y-2 pl-4 border-l-2 border-[#002147]">
              <p>
                <strong>(a)</strong> Every student may be required to do at least three moot courts in a year. The moot court work will be on assigned problem and it will be evaluated for written submissions and oral advocacy.
              </p>
              <p>
                <strong>(b) Observance of Trial in two cases, one Civil and one Criminal:</strong> Students may be required to attend two trials in the course of the last two or three years of LL.B. studies. They will maintain a record and enter the various steps observed during their attendance on different days in the court assignment.
              </p>
              <p>
                <strong>(c) Interviewing techniques and Pre-trial preparations and Internship diary:</strong> Each student will observe two interviewing sessions of clients at the Lawyer’s Office/Legal Aid Office and record the proceedings in a diary. Each student will further observe the preparation of documents and court papers by the Advocate and the procedure for the filing of the suit/petition. This will be recorded in the diary.
              </p>
            </div>

            <h4 className="font-bold text-stone-900 text-sm sm:text-base pt-2">Minimum Period of Internship:</h4>
            <div className="space-y-2 pl-4 border-l-2 border-[#005a9c]">
              <p>
                <strong>(a)</strong> Each registered student shall have completed minimum of 20 weeks in case of Five Year Course stream during the entire period of legal studies under NGO, Trial and Appellate Advocates, Judiciary, Legal Regulatory authorities, Legislatures and Parliament, Other Legal Functionaries, Market Institutions, Law Firms, Companies, Local Self Government and other such bodies as the University shall stipulate, where law is practiced either in action or in dispute resolution or in management.
              </p>
              <p className="italic text-stone-600">
                Provided that internship in any year cannot be for a continuous period of more than Four Weeks and all students shall at least gone through once in the entire academic period with Trial and Appellate Advocates.
              </p>
              <p>
                <strong>(b)</strong> Each student shall keep Internship diary and the same shall be evaluated by a Core Faculty member of the staff each time and also by the external examiner at the time of Viva-Voce. The total mark shall be assessed in the Final Semester of the course in the 4th Clinical course as stipulated under the Rules in Schedule II of Bar Council of India.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#002147] text-white flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm shadow-md">
          <div>
            <h4 className="font-serif text-lg font-semibold">Ready to begin your legal career?</h4>
            <p className="text-xs text-stone-300">Apply for B.A.LL.B. (5 Years) integrated course at SKSIL Banda.</p>
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

