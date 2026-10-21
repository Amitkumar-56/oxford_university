import React, { useState } from 'react';
import { ChevronDown, Menu, X, Scale } from 'lucide-react';

export default function Header({ onNavigatePage }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownMenus = [
    {
      label: 'ABOUT',
      key: 'about',
      items: [
        { label: 'About the Institute', key: 'about-institute' },
        { label: 'Vision & Mission', key: 'about-vision' },
        { label: 'Leadership & Management', key: 'about-leadership' },
        { label: 'Faculty Members', key: 'about-faculty' },
        { label: 'Approvals & Affiliations (BCI)', key: 'about-affiliations' },
      ],
    },
    {
      label: 'COURSES',
      key: 'courses',
      items: [
        { label: 'B.A. LL.B. (5 Years Integrated)', key: 'courses-ballb' },
        { label: 'LL.B. (3 Years Professional)', key: 'courses-llb' },
        { label: 'LL.M. (Master of Laws)', key: 'courses-llm' },
        { label: 'Diploma & Certificate Courses', key: 'courses-diploma' },
      ],
    },
    {
      label: 'STUDYING AT SKSIL',
      key: 'studying-at-sksil',
      items: [
        { label: 'Admissions & Eligibility', key: 'study-admissions' },
        { label: 'Moot Court Society', key: 'study-moot-court' },
        { label: 'Legal Aid Clinic', key: 'study-legal-aid' },
        { label: 'Law Library & E-Resources', key: 'study-library' },
        { label: 'Internships & Placements', key: 'study-placements' },
      ],
    },
    {
      label: 'NOTIFICATIONS',
      key: 'notifications',
      items: [
        { label: 'Admissions 2026-27 Open', key: 'notif-admissions' },
        { label: 'Examination Schedule & Results', key: 'notif-exams' },
        { label: 'National Moot Court Competition', key: 'notif-moot' },
        { label: 'Seminars & Guest Lectures', key: 'notif-seminars' },
      ],
    },
  ];

  const handleNav = (key) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigatePage) onNavigatePage(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent text-white pt-4 pb-2 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Left: Oxford Style Boxed Crest / Logo (Clickable to Home) */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="bg-[#002147] border border-white/40 p-2 sm:p-2.5 flex items-center space-x-2.5 shadow-lg hover:border-white hover:bg-[#002d61] cursor-pointer active:scale-95 transition text-left"
          title="Sant Kripal Singh Institute of Law - Return to Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 border border-white/90 rounded-full flex items-center justify-center">
            <Scale className="w-5 h-5 text-white" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-[12px] sm:text-[14px] font-bold tracking-[0.08em] text-white leading-tight uppercase">
              SANT KRIPAL SINGH
            </span>
            <span className="font-serif text-[10px] sm:text-[12px] font-semibold tracking-[0.08em] text-white/90 leading-tight uppercase">
              INSTITUTE OF LAW
            </span>
          </div>
        </button>

        {/* Right Area: Oxford Two-Pill Group Structure */}
        <div className="flex items-center gap-3">
          
          {/* Main Links in Oxford Rounded Pill Container */}
          <nav className="hidden xl:flex items-center bg-[#002147]/95 border border-white/20 rounded-md px-3 py-1 shadow-md">
            {dropdownMenus.map((menu) => (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => handleNav(menu.key)}
                  className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium text-white hover:text-[#00c5ff] transition"
                >
                  <span>{menu.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>

                {activeDropdown === menu.key && (
                  <div className="absolute top-full left-0 w-64 bg-[#002147] border border-white/20 shadow-2xl py-2 z-50 rounded-b">
                    {menu.items.map((subItem) => (
                      <button
                        key={subItem.key}
                        type="button"
                        onClick={() => handleNav(subItem.key)}
                        className="block w-full text-left px-4 py-2 text-xs font-medium text-stone-100 hover:bg-[#003366] hover:text-[#00c5ff] transition"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => handleNav('blogs')}
              className="px-3.5 py-2 text-[13px] font-medium text-white hover:text-[#00c5ff] transition"
            >
              BLOGS
            </button>
          </nav>

          {/* Quick Access / Portal & Menu Buttons in Oxford Pill Container */}
          <div className="flex items-center bg-[#002147]/95 border border-white/20 rounded-md p-1 shadow-md">
            <button
              type="button"
              onClick={() => handleNav('students-portal')}
              className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-white hover:text-[#00c5ff] transition"
            >
              PORTAL
            </button>

            <button
              type="button"
              onClick={() => handleNav('contact-us')}
              className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-white hover:text-[#00c5ff] transition"
            >
              CONTACT
            </button>

            {/* Menu Button matching Oxford screenshot */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-white hover:text-[#00c5ff] transition"
            >
              <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#00264d] border-t border-[#004080] px-6 py-6 space-y-4">
          {dropdownMenus.map((menu) => (
            <div key={menu.key} className="border-b border-white/10 pb-3">
              <span className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                {menu.label}
              </span>
              <div className="pl-2 space-y-1.5">
                {menu.items.map((sub) => (
                  <button
                    key={sub.key}
                    type="button"
                    onClick={() => handleNav(sub.key)}
                    className="block text-xs text-stone-200 hover:text-white py-1 text-left w-full"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => handleNav('blogs')}
            className="block text-xs font-bold text-white uppercase tracking-wider py-1"
          >
            BLOGS
          </button>

          <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleNav('students-portal')}
              className="block text-amber-300 hover:text-white"
            >
              STUDENTS’ PORTAL
            </button>
            <button
              type="button"
              onClick={() => handleNav('contact-us')}
              className="block text-stone-200 hover:text-white"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
