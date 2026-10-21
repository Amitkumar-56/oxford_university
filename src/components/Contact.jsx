import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronRight,
  ExternalLink,
  Building,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function Contact({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

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
      <section className="bg-[#002147] text-white pt-28 pb-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 mb-6">
            <button onClick={() => handleNav('home')} className="hover:text-white transition">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#00c5ff] font-medium">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                Get in Touch with SKSIL
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
                Contact & Campus Directory
              </h1>
              <p className="text-base sm:text-lg text-stone-200 font-light max-w-3xl leading-relaxed">
                Connect with our academic administration, admissions desk, or visit our lush green campus in Banda, Uttar Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm">
              <h3 className="font-serif text-2xl text-[#002147] font-bold mb-6">
                Campus Location & Desk
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#002147] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Campus Address</h4>
                    <p className="text-stone-600 mt-1 leading-relaxed">
                      Sant Kripal Singh Institute of Law<br />
                      Kanpur Road, Lama, Banda,<br />
                      Uttar Pradesh 210001 (Affiliated to Bundelkhand University)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#002147] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Telephone / Helpline</h4>
                    <p className="text-stone-600 mt-1">
                      +91 639289 9382<br />
                      +91 99355 38086 / 05192-223344
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#002147] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Official Correspondence</h4>
                    <p className="text-stone-600 mt-1">
                      info@sksil.ac.in<br />
                      admissions@sksil.ac.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#002147] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Office Working Hours</h4>
                    <p className="text-stone-600 mt-1">
                      Monday to Saturday: 9:00 AM – 4:00 PM<br />
                      (Closed on Sundays and University gazetted holidays)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#002147] text-white p-6 rounded-sm shadow-sm">
              <h4 className="font-serif text-lg font-bold mb-2">Need Immediate Assistance?</h4>
              <p className="text-xs text-stone-300 mb-4 leading-relaxed">
                Connect directly with our admissions and administrative cell via WhatsApp for fee inquiries and eligibility checks.
              </p>
              <a
                href="https://wa.me/+919935538086"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00843D] text-white rounded-sm text-xs font-semibold hover:bg-[#006e33] transition"
              >
                <span>WhatsApp Admissions Desk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 p-8 sm:p-10 rounded-sm shadow-sm">
              <h3 className="font-serif text-2xl text-[#002147] font-bold mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Have a query regarding admission, verification, or examination? Fill the form below and our office will get in touch with you.
              </p>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-sm text-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-green-900 text-base">Inquiry Submitted Successfully</h4>
                  <p className="text-xs text-green-700 mt-1">
                    Thank you! Your message has been routed to the SKSIL administration desk. We will respond within 24-48 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-green-800 text-white rounded-sm text-xs font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Admission Inquiry / Document Verification"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your detailed query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded-sm focus:outline-none focus:border-[#002147]"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#002147] hover:bg-[#003366] text-white font-medium text-sm rounded-sm transition shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/*Google Map */}
        <div className="mt-14 bg-white border border-stone-200 p-2 rounded-sm shadow-sm">
          <iframe
            title="SKSIL Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9013892325615!2d80.37397627386476!3d25.574947316299703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399cc67b4eb8049b%3A0x5b47f0342607ecd4!2sSant%20Kripal%20Singh%20Institute%20of%20Law!5e0!3m2!1sen!2sin!4v1713854292164!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
