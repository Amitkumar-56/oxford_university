import React, { useState } from 'react';
import { ChevronRight, Scale, Award, Briefcase, GraduationCap, CheckCircle2, BookOpen, Quote } from 'lucide-react';
import sksilLaw from '../assets/image/sksil-law.jpg';
import whyLawMid from '../assets/image/whylaw_mid.jpg';

export default function WhyStudyLawPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <span className="text-[#00c5ff] font-medium">Why Study Law</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Career Trajectory & Civic Impact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Why Study Law
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Law appeals to those students who want to develop abstract thinking and practical problem-solving skills.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-10">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition ${activeTab === 'overview'
                ? 'bg-[#002147] text-white shadow-sm'
                : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition ${activeTab === 'careers'
                ? 'bg-[#002147] text-white shadow-sm'
                : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
          >
            Career Opportunities
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            {activeTab === 'overview' ? (
              <div className="space-y-6">
                <div className="bg-white p-6 sm:p-8 border border-stone-200 rounded-sm shadow-sm space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Law appeals to those students who want to develop abstract thinking and practical problem-solving skills. Studying law offers an opportunity to develop a range of skills. It enhances thinking skills and strengthens one’s understanding across the whole gamut of social sciences. Students tend to acquire both the required breadth and depth in the areas that interest them.
                  </p>
                  <p>
                    One does not necessarily become a lawyer merely because one has studied law. A degree in law can help students to develop the skills required to become a politician, a manager, a journalist, or a diplomat. With a degree in Law, students are well-equipped for almost any profession that requires intellectual strength and a practical outlook.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 border border-stone-200 rounded-sm shadow-sm space-y-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#002147]">
                    IS STUDYING LAW THE WAY FORWARD FOR YOU? JUST ANSWER THE QUESTIONS BELOW:
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-stone-50 border-l-4 border-[#002147] rounded-xs">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-1">
                        Are you interested in any of the following ?
                      </h4>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        Government, politics, business, finance, banking, property, international relations, international trade, healthcare, media, environment, or human rights. The list could go on and on. Almost every aspect of society is subject to law.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 border-l-4 border-[#002147] rounded-xs">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-1">
                        Are you interested in making rigorous arguments and counter arguments?
                      </h4>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        The legal judgments and academic commentaries you will have to read are mostly made up of arguments. Arguments about what the law is; arguments about how it should be applied; arguments about what the law ought to be; arguments about why the law is as it is; arguments about these arguments! Making compelling logical arguments and counter arguments is central to the study of law.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 border-l-4 border-[#002147] rounded-xs">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-1">
                        Are you a voracious reader?
                      </h4>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        Like the practice of law, the undergraduate study of law requires a willingness to read ... and read ... and then to read some more. Not only does it require a willingness to read and absorb large amounts of text but also, when necessary, to be able to read particular passages very carefully and to think in detail about the possible meanings and ambiguities in them.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50 border border-blue-200 rounded-sm">
                    <p className="font-bold text-[#002147] text-sm sm:text-base mb-2">
                      If your answer to all these questions is YES, then legal studies is the way forward for you.
                    </p>
                    <p className="font-semibold text-[#005a9c] text-sm">
                      Come join us @ SKSIL today!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white p-6 sm:p-8 border border-stone-200 rounded-sm shadow-sm space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The need for conflict resolution is never going to be a thing of the past, and so, law graduates can always hope for lucrative careers. The legal profession is one with unlimited scope for growth and success. In the present times of liberalization and globalization, there is no scarcity of job opportunities, as more and more law experts are required to handle cases of myriad nature.
                  </p>
                  <p>
                    India currently boasts of more than a million lawyers and the legal fraternity is continuing to grow with several fresh graduates joining the profession every year. LLB graduates are no longer just employed in the traditional role of lawyers and judges, but also in different legal establishments in the country such as trial courts, sessions courts, high courts, Supreme Court and other quasi-judicial organizations. Today, anyone holding a degree in law can find employment opportunities in numerous fields.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-[#005a9c] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#002147] mb-2">Advocate</h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                          This is a largely untapped field in the Indian law industry so far, and one with immense potential for growth. Legal outsourcing, basically, refers to the practice of law firms outsourcing legal services to individuals outside the organization. The practice is in sync with the trend of offshoring, as the law firms outsourcing these jobs are based in a different country. It is a lucrative job prospect with a great potential for growth and a great pay package.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#005a9c] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#002147] mb-2">Judiciary</h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                          Another lucrative career option after obtaining a degree in law is the judiciary. Anyone possessing a degree in law, along with a bachelor’s degree in arts, commerce or science is eligible for appearing for the judiciary services exam, conducted by the Public Service Commission. One can start one’s career as a magistrate or sub-judge and later rise through promotions to become a District and Sessions Judge, High Court, or Supreme Court judge.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#005a9c] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#002147] mb-2">Other Government Jobs</h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                          In addition to the judiciary, law graduates and lawyers can be employed in several other government-run services such as legal adviser for the Department of Legal affairs, legislative counsel, public prosecutors, tribunal judges, and Law Commission members. One can also make a career as a commissioned officer in the armed forces by joining the legal arms of the Indian Army, Air Force and Navy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#005a9c] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#002147] mb-2">Academics</h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                          Another career option available to law graduates is to teach in institutions and universities offering LLB courses. If one wishes to pursue a career as a law teacher, one must invest in obtaining a master’s degree in law (LL.M.) or a PhD.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-[#005a9c] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#002147] mb-2">Legal Outsourcing</h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                          A lucrative job prospect with immense potential for growth and great remuneration, handling overseas and cross-border corporate contracts, drafting, and legal discovery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 bg-gradient-to-r from-[#002147] to-[#003366] text-white rounded-sm shadow-md flex items-start gap-4">
              <Quote className="w-8 h-8 text-[#00c5ff] shrink-0 opacity-80" />
              <div>
                <p className="italic text-sm sm:text-base text-stone-100 font-serif">
                  "The need for conflict resolution is never going to be a thing of past, and so, law graduates can continue to hope for lucrative careers."
                </p>
                <span className="block mt-2 text-xs text-[#00c5ff] font-semibold tracking-wider uppercase">— SKSIL Institute of Law</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-sm overflow-hidden shadow-md border border-stone-300 bg-white">
              <img
                src={whyLawMid}
                alt="Law Students at SKSIL"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white border-t border-stone-200">
                <h4 className="font-serif font-bold text-[#002147] text-base mb-1">Practical Advocacy Training</h4>
                <p className="text-xs text-stone-600">Empowering young minds with critical logic, argumentation, and legal acumen.</p>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-md border border-stone-300 bg-white">
              <img
                src={sksilLaw}
                alt="Students at SKSIL"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white border-t border-stone-200">
                <h4 className="font-serif font-bold text-[#002147] text-base mb-1">Campus Life & Opportunities</h4>
                <p className="text-xs text-stone-600">State-of-the-art facilities in Banda, Bundelkhand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

