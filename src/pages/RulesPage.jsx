import React from 'react';
import { ChevronRight, ShieldCheck, Download, AlertTriangle } from 'lucide-react';
import rulesBanner from '../assets/image/rules_banner.jpg';

export default function RulesPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rulesList = [
    'Students are required to maintain highest standard of behavior and discipline both inside and outside the campus.',
    'Any proposed or current students at the Institute will be admitted and administered by the guidelines issued by Bundelkhand University, Higher Education Department of Uttar Pradesh, and the Bar Council of India.',
    'Every student should obtain an identity card on admission; a student shall always carry the identity card with him/her and present it on demand. No student will be allowed to enter the Institute premises without the identity card. Any student who alters/misuses the identity card or who allows any card issued in his or her name to be used by any other person is subject to disciplinary action.',
    'SKSIL strictly adheres to the rule of minimum attendance requirement of 75% to appear for the end semester exams, failing which the Institute will not approve the examination form of the student and will refrain from forwarding the same to the University.',
    'A student should mandatorily be present and attend guest lectures, workshops, seminars, and events etc., organized by the Institute.',
    'In case of illness, a student shall apply for leave as soon as possible with a doctor’s certificate attached to the application and submit it to the principal.',
    'The students should not loiter in the corridor outside the classrooms when the classrooms are engaged and cause nuisance and disturbance to others.',
    'Students are expected to read notices/circulars displayed on the Institute’s notice board and website. Ignorance of not reading any notice/circular displayed/uploaded shall not be accepted as an excuse for failing to comply with the directions contained in it.',
    'SKSIL being an eco–friendly campus, plastic or other trash should not be thrown inside the campus.',
    'The unlawful possession, use, or distribution of Pan-Masala, Cigarette, Beedi, Khaini, alcohol or any other intoxicating substances, within the Institute campus or as part of any Institute activity is strictly prohibited.',
    'The cost of any damage, if caused to Institute property will be charged to the accounts of the students responsible for the damage in addition to disciplinary action.',
    'It is compulsory to switch mobile phones to silent mode within the campus.',
    'Ragging is strictly prohibited in the Institute premises and outside. The students indulging in ragging other students will be punished as per "The U.P. Prohibition of Ragging in Educational Institutions Act, 2010”. Such students will also be expelled from the Institute and an F.I.R. will be lodged with the police against them.',
    'The students found guilty of ragging earlier will not be admitted to SKSIL.',
    'Students are strictly forbidden from constituting any type of committee, union or engaging themselves/organising any political activities in the campus.',
    'Students are prohibited from organizing or attending meetings in the Institute, distributing notices, collecting money, and exhibiting banners, flags, posters etc. without the permission of the Principal.',
    'All expressions or activities which are considered to be immoral, antisocial, communal, and anti-national are strictly prohibited in the campus.',
    'All vehicles should be parked in the Parking Area. Students coming by two wheelers must compulsorily wear a helmet and carry the vehicle’s valid documents, along with their driving license. Two wheelers will not be allowed to park without a helmet. Vehicles found parked in unauthorized places shall be impounded.',
    'After taking admission in the institution, any student breaking the rules or taking part in strikes or such unlawful activities will be rusticated.',
    'At the time of admission all students must give an affidavit about being free of any criminal or civil punishment or involvement in such cases.',
    'While pursuing a Law degree from SKSIL, students are prohibited from simultaneously registering/enrolling for another regular degree/diploma course run by the same or any other university or an institute for academic or professional learning. If any student is already registered/enrolled in such course at the time of taking admission at SKSIL, or do so after getting admitted at SKSIL, his law degree will not have any legal validity, and his/her admission will be considered null and void.',
    'Students are required to pay their full semester fees within the notified due date. A Late Fee of INR.1,000 (Rupees one thousand only) will be applicable on delayed payments. In case of any further delay in payment, the student may be expelled from the college.',
    'Fee once paid is non-refundable in any case whatsoever.',
    'It will be the responsibility of the student to fill, submit, and pay for his/her University Examination form for every semester exam. Failing to do so, will result into non-issuance of admit card for the examination by the university.',
    'During the entire course, any other fee/charges related to students incurred by the University, Higher Education Department, Bar Council of India, University Grant Commission, or any other government organisation, will be paid by the student him/herself.',
    'The authenticity of all the documents produced during the admission process (Educational and others) is the sole responsibility of the student.',
    'If there is any change in the information provided in the admission form, the student must communicate in writing to the college.',
    'The right to admit/suspend a student lies with the Management of the college.',
    'For smooth management of the operations of the college, the Management has the power to change/amend the above rules and his/her word would be final.',
    'The Management shall be the final authority in the interpretation of the Institutional rules. Matters not covered by these rules are left to the discretion of the Principal and the decision of the Principal shall be final.',
  ];

  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12 border-b border-[#003366]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('studying')} className="hover:text-white transition">
              Studying at SKSIL
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Rules & Regulations</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Discipline & Professionalism
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Rules and Regulations: Student Code of Conduct
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Guidelines issued by Bundelkhand University, Higher Education Department of Uttar Pradesh, and the Bar Council of India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white border border-stone-200 rounded-sm shadow-sm space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
                Institutional Ethics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147]">
                Preamble
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                The reputation of an institute depends solely on the performance of its students, not on buildings, equipment, structures etc., although they are the pre-requisite aids. The students at an Institute are known not only by their performance in their academics but also by their conduct which is an integral part of their personality. To make the College feel proud of its students, the following code of conduct is expected of the students.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-md border border-stone-300">
              <img
                src={rulesBanner}
                alt="SKSIL Rules and Regulations"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-3 bg-white border-t border-stone-200 text-xs font-semibold text-stone-700">
                Ethical Integrity & Student Code of Conduct
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-stone-200 p-6 sm:p-10 rounded-sm shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-[#002147] mb-1">
                <ShieldCheck className="w-5 h-5 text-[#005a9c]" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Code of Conduct Regulations
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                Mandatory rules for all undergraduate and postgraduate law scholars.
              </p>
            </div>
            <a
              href="/Student-Code-of-Conduct-Hindi.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#002147] hover:bg-[#003366] text-white rounded text-xs font-semibold tracking-wide transition shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Code of Conduct (Hindi PDF)</span>
            </a>
          </div>

          <ol className="space-y-3.5 text-xs sm:text-sm text-stone-700 leading-relaxed list-decimal pl-5">
            {rulesList.map((rule, idx) => (
              <li key={idx} className="pl-1">
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

