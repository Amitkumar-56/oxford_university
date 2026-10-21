import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, ExternalLink, Scale } from 'lucide-react';

const INFO_ABOUT = [
  { name: 'About SKSIL', id: 'about' },
  { name: 'Our Inspiration', id: 'inspiration' },
  { name: 'Secretary’s Message', id: 'secretary-message' },
  { name: 'Director’s Message', id: 'director-message' },
  { name: 'Accreditation (BCI)', id: 'accreditation' },
  { name: 'Campus Gallery', id: 'gallery' },
];

const INFO_FOR = [
  { name: 'B.A. LL.B. (5 Years)', id: 'ballb' },
  { name: 'LL.B. (3 Years)', id: 'llb' },
  { name: 'Why Study Law', id: 'why-study-law' },
  { name: 'College Life', id: 'college-life' },
  { name: 'Our Methodology', id: 'methodology' },
  { name: 'Rules & Regulations', id: 'rules' },
];

const QUICK_LINKS = [
  { name: 'Notifications & Circulars', id: 'notifications' },
  { name: 'Events & Seminars', id: 'events' },
  { name: 'Past Year Question Papers', id: 'question-papers' },
  { name: 'Law Library & E-Resources', id: 'library' },
  { name: 'Legal Aid & Awareness Clinic', id: 'legal-aid' },
  { name: 'Contact Campus', id: 'contact' },
];

const LEGAL_LINKS = [
  'Bundelkhand University Affiliated',
  'Bar Council of India Approved',
  'Anti-Ragging Policy',
  'Grievance Redressal',
  'Privacy Policy',
  'Terms & Conditions',
];

export default function Footer({ onNavigate }) {
  const handleClick = (id) => {
    if (onNavigate) onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001733] text-stone-300 font-sans border-t border-[#002f66]">
      {/* Top Brand Bar */}
      <div className="bg-[#002147] py-8 border-b border-[#002c5c]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#001733] border border-white/60 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-white tracking-wide leading-tight">
                SANT KRIPAL SINGH INSTITUTE OF LAW
              </p>
              <p className="text-xs text-blue-200">
                Kanpur Road, Lama, Banda, Uttar Pradesh 210001 (Affiliated to BU, Jhansi)
              </p>
            </div>
          </div>

          {/* Social / Connect Bar */}
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-wider text-blue-200 mr-2 font-medium hidden sm:inline">
              Connect with SKSIL:
            </span>
            <a
              href="https://www.facebook.com/sksil.banda/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded bg-[#001733] hover:bg-[#003875] text-xs font-semibold text-white hover:text-amber-300 transition-colors border border-white/10"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sksil.banda/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded bg-[#001733] hover:bg-[#003875] text-xs font-semibold text-white hover:text-amber-300 transition-colors border border-white/10"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/+919935538086"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded bg-[#001733] hover:bg-[#003875] text-xs font-semibold text-white hover:text-amber-300 transition-colors border border-white/10"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="max-w-[1400px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 pb-2 border-b border-[#003875]">
              About Institute
            </h3>
            <ul className="space-y-2.5 text-sm">
              {INFO_ABOUT.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left text-stone-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 pb-2 border-b border-[#003875]">
              Courses & Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {INFO_FOR.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left text-stone-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 pb-2 border-b border-[#003875]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left text-stone-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 pb-2 border-b border-[#003875]">
              Contact Campus
            </h3>
            <div className="space-y-3.5 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <span>Kanpur Road, Lama, Banda, Uttar Pradesh 210001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 99355 38086 / 05192-223344</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@sksil.ac.in</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleClick('contact')}
                  className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 underline font-medium"
                >
                  <span>Locate Campus on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright and Legal Bar */}
      <div className="bg-[#000f21] py-6 border-t border-[#00224d] text-xs text-stone-400">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <span key={link} className="hover:text-stone-200 transition-colors">
                {link}
              </span>
            ))}
          </div>
          <div className="text-stone-500 text-center lg:text-right">
            © {new Date().getFullYear()} Sant Kripal Singh Institute of Law. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
