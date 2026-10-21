import React from 'react';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
export default function FeesPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="w-full bg-[#f8f9fa] text-[#1a1a1a]">
      {}
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button onClick={() => handleNav('admissions')} className="hover:text-white transition">
              Admissions
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Fees & Scholarships</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Transparent & Affordable
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Fees & Financial Support
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              At SKSIL, we believe that economic hardship must never hinder legal excellence. Check our affordable, government-regulated tuition fee structure and UP government scholarship schemes.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4">
                Approved Fee Structure (2026–27)
              </h2>
              <div className="border border-stone-200 rounded-sm overflow-hidden mb-6">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-[#002147] text-white text-xs uppercase font-semibold">
                    <tr>
                      <th className="p-4">Degree Programme</th>
                      <th className="p-4">Duration</th>
                      <th className="p-4 text-right">Annual Tuition Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr className="bg-stone-50">
                      <td className="p-4 font-bold text-[#002147]">B.A. LL.B. (Integrated)</td>
                      <td className="p-4">5 Years (10 Semesters)</td>
                      <td className="p-4 text-right font-bold text-[#002147] text-base">₹16,000 / Year</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#002147]">LL.B. (Professional)</td>
                      <td className="p-4">3 Years (6 Semesters)</td>
                      <td className="p-4 text-right font-bold text-[#002147] text-base">₹15,000 / Year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 italic">
                *Examination fees and university enrollment charges are payable directly to Bundelkhand University, Jhansi as per circulars.
              </p>
            </div>
            {}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#002147]">Scholarship & Financial Assistance</h3>
              <div className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-sm shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">UP Government Post-Matric Scholarship (Saksham)</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Eligible SC, ST, OBC, General (EWS), and Minority students from Uttar Pradesh receive 100% tuition reimbursement and maintenance allowances directly credited to their bank accounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-sm shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">Merit-Based Institutional Concessions</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Top-scoring candidates securing over 80% marks in intermediate examinations are granted special institutional fee waivers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-sm shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#002147]">Zero Interest Installment Options</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Flexible semi-annual and installment options are available for economically weaker families upon application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#002147] text-white p-8 rounded-sm shadow-md">
            <h3 className="font-serif text-2xl font-normal mb-4">
              Apply for Scholarship Desk
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
              Our dedicated college scholarship desk assists students from document verification to online application submission on the UP Saksham portal.
            </p>
            <div className="space-y-3 text-xs text-stone-300 mb-8 border-y border-white/10 py-6">
              <p><strong>Required Documents for Scholarship:</strong></p>
              <p>• Income Certificate (तहसीलदार द्वारा जारी आय प्रमाण पत्र)</p>
              <p>• Caste & Domicile Certificate (जाति एवं मूल निवास)</p>
              <p>• Bank Passbook linked with Aadhaar NPCI</p>
              <p>• Previous Year Marksheets</p>
            </div>
            <button
              onClick={() => handleNav('admissions-apply')}
              className="w-full py-3 bg-[#00843D] hover:bg-[#006e33] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition flex items-center justify-center gap-2"
            >
              <span>Submit Admission Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
