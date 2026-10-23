import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, Scale } from 'lucide-react';
import sksilEmblem from '../assets/image/sksil_emblem.png';

const INFO_ABOUT = [
  { name: 'About SKSIL', path: '/about' },
  { name: 'Our Inspiration', path: '/about/inspiration' },
  { name: 'Secretary’s Message', path: '/about/secretary-message' },
  { name: 'Director’s Message', path: '/about/director-message' },
  { name: 'Accreditation (BCI)', path: '/about/accreditation' },
  { name: 'Campus Gallery', path: '/about/gallery' },
];

const INFO_FOR = [
  { name: 'B.A. LL.B. (5 Years)', path: '/courses/ballb' },
  { name: 'LL.B. (3 Years)', path: '/courses/llb' },
  { name: 'LL.M. (Master of Laws)', path: '/courses/llm' },
  { name: 'Why Study Law', path: '/studying-at-sksil/why-study-law' },
  { name: 'College Life', path: '/studying-at-sksil/college-life' },
  { name: 'Our Methodology', path: '/studying-at-sksil/methodology' },
  { name: 'Rules & Regulations', path: '/studying-at-sksil/rules' },
];

const QUICK_LINKS = [
  { name: 'Admissions & Eligibility', path: '/admissions/eligibility' },
  { name: 'Fees & Scholarships', path: '/admissions/fees' },
  { name: 'Application Form', path: '/admissions/apply' },
  { name: 'Notifications & Circulars', path: '/notifications' },
  { name: 'Examination Schedule', path: '/notifications/exam-schedule' },
  { name: 'Past Year Question Papers', path: '/notifications/past-year-papers' },
  { name: 'Events & Seminars', path: '/notifications/events' },
  { name: 'Law Library & E-Resources', path: '/studying-at-sksil/library' },
  { name: 'Moot Court & Legal Aid', path: '/studying-at-sksil/moot-court' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Contact Campus', path: '/contact-us' },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001733] text-stone-300 font-sans border-t border-[#002f66]">
      <div className="bg-[#002147] py-8 border-b border-[#002c5c]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-12 h-12 rounded-full bg-[#001733] border border-white/60 overflow-hidden flex items-center justify-center shrink-0 shadow-md">
              <img
                src={sksilEmblem}
                alt="SKSIL Emblem"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-white tracking-wide leading-tight">
                SANT KRIPAL SINGH INSTITUTE OF LAW
              </p>
              <p className="text-xs text-blue-200">
                Affiliated to Bundelkhand University, Jhansi (College Code: 797) &amp; Approved by BCI
              </p>
            </div>
          </div>

          <button
            onClick={() => handleLinkClick('/admissions/apply')}
            className="bg-[#00843D] hover:bg-[#006e33] text-white text-xs font-semibold px-6 py-2.5 rounded-sm transition tracking-wider uppercase shadow-md cursor-pointer"
          >
            Admissions Open 2026–27
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4 pb-2 border-b border-[#002f66]">
              About SKSIL
            </h4>
            <ul className="space-y-2 text-xs">
              {INFO_ABOUT.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="hover:text-white transition flex items-center group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#00c5ff] group-hover:translate-x-0.5 transition" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4 pb-2 border-b border-[#002f66]">
              Courses & Study
            </h4>
            <ul className="space-y-2 text-xs">
              {INFO_FOR.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="hover:text-white transition flex items-center group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#00c5ff] group-hover:translate-x-0.5 transition" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4 pb-2 border-b border-[#002f66]">
              Admissions & Notices
            </h4>
            <ul className="space-y-2 text-xs">
              {QUICK_LINKS.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="hover:text-white transition flex items-center group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#00c5ff] group-hover:translate-x-0.5 transition" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4 pb-2 border-b border-[#002f66]">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#00c5ff] shrink-0 mt-0.5" />
                <p>
                  Sant Kripal Singh Institute of Law<br />
                  Naraini Road, Banda (U.P.) – 210001
                </p>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#00c5ff] shrink-0" />
                <p>+91 9450224488 / +91 9839445566</p>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#00c5ff] shrink-0" />
                <p>info@sksil.ac.in</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick('/contact-us')}
                  className="inline-block px-4 py-2 border border-[#00c5ff]/60 text-[#00c5ff] hover:bg-[#00c5ff] hover:text-[#001733] text-xs font-semibold rounded-sm transition"
                >
                  Campus Location & Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#001026] py-4 border-t border-[#00224d] text-center text-xs text-stone-400">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Sant Kripal Singh Institute of Law. All Rights Reserved.</p>
          <p className="text-stone-400">Approved by Bar Council of India, New Delhi & Affiliated to Bundelkhand University</p>
        </div>
      </div>
    </footer>
  );
}
