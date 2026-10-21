import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, Clock, CheckCircle2, Send } from 'lucide-react';
export default function ApplicationFormPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'ballb',
    qualification: '',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span className="text-[#00c5ff] font-medium">Application Form</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Online Admission 2026–27
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Apply for Admission
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Submit your preliminary application form below for B.A. LL.B. (5 Years) or LL.B. (3 Years). Our admissions counselor will review and contact you.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="bg-white border border-stone-300 rounded-sm shadow-md grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {}
          <div className="lg:col-span-5 bg-[#002147] text-white p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00c5ff] font-semibold">
                Direct Admission Desk
              </span>
              <h3 className="font-serif text-3xl font-normal text-white mt-2 mb-4">
                Sant Kripal Singh Institute of Law
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-8">
                Naraini Road, Banda, Uttar Pradesh. Affiliated to Bundelkhand University, Jhansi & Approved by the Bar Council of India (BCI).
              </p>
              <div className="space-y-4 text-xs text-stone-200">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00c5ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Admissions Helpline:</span>
                    <span>+91 9450224488 / +91 9839445566</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00c5ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Official Admissions Email:</span>
                    <span>admissions@sksil.ac.in</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00c5ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Office Visiting Hours:</span>
                    <span>Monday to Saturday: 9:00 AM – 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-stone-400">
              *Admission granted subject to verification of original academic marksheets and BCI eligibility norms.
            </div>
          </div>
          {}
          <div className="lg:col-span-7 p-8 lg:p-12 bg-white">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#002147]">
                  Application Received Successfully!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you, {formData.fullName}. Our admissions counseling officer will call you shortly on {formData.phone} to finalize document verification and merit seat allocation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#002147] text-white text-xs font-semibold rounded-sm hover:bg-[#003366] transition"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-[#002147] mb-4">
                  Preliminary Admission Application
                </h3>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                    Candidate's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name as per high school certificate"
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                      Programme Applying For *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147] bg-white"
                    >
                      <option value="ballb">B.A. LL.B. (5 Years Integrated)</option>
                      <option value="llb">LL.B. (3 Years Professional)</option>
                      <option value="llm">LL.M. (Master of Laws)</option>
                      <option value="diploma">Diploma / Certificate Course</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                      City / Native District *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Banda, Chitrakoot, Mahoba..."
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                    Highest Educational Qualification & % Percentage *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    placeholder="e.g. 12th UP Board 72% / B.A. Final 65%"
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#002147]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#00843D] hover:bg-[#006e33] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application to Admissions Cell</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
