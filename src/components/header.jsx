import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Scale } from 'lucide-react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const navigate = useNavigate();

  const dropdownMenus = [
    {
      label: 'ABOUT',
      path: '/about',
      items: [
        { label: 'About the Institute', path: '/about' },
        { label: 'Our Inspiration', path: '/about/inspiration' },
        { label: 'Secretary’s Message', path: '/about/secretary-message' },
        { label: 'Director’s Message', path: '/about/director-message' },
        { label: 'Accreditation (BCI & BU)', path: '/about/accreditation' },
        { label: 'Campus Gallery', path: '/about/gallery' },
      ],
    },
    {
      label: 'COURSES',
      path: '/courses/ballb',
      items: [
        { label: 'B.A. LL.B. (5 Years Integrated)', path: '/courses/ballb' },
        { label: 'LL.B. (3 Years Professional)', path: '/courses/llb' },
        { label: 'LL.M. (Master of Laws)', path: '/courses/llm' },
        { label: 'Diploma & Certificate Courses', path: '/courses/diploma' },
      ],
    },
    {
      label: 'ADMISSIONS',
      path: '/admissions/overview',
      items: [
        { label: 'Admissions 2026–27 Overview', path: '/admissions/overview' },
        { label: 'Eligibility & Requirements', path: '/admissions/eligibility' },
        { label: 'Fees & Scholarships', path: '/admissions/fees' },
        { label: 'Application Form', path: '/admissions/apply' },
      ],
    },
    {
      label: 'STUDYING AT SKSIL',
      path: '/studying-at-sksil/why-study-law',
      items: [
        { label: 'Why Study Law', path: '/studying-at-sksil/why-study-law' },
        { label: 'College Life', path: '/studying-at-sksil/college-life' },
        { label: 'Our Methodology', path: '/studying-at-sksil/methodology' },
        { label: 'Law Library & E-Resources', path: '/studying-at-sksil/library' },
        { label: 'Moot Court & Legal Aid', path: '/studying-at-sksil/moot-court' },
        { label: 'Rules & Regulations', path: '/studying-at-sksil/rules' },
      ],
    },
    {
      label: 'NOTIFICATIONS',
      path: '/notifications',
      items: [
        { label: 'Latest College Notices', path: '/notifications' },
        { label: 'Examination Schedule', path: '/notifications/exam-schedule' },
        { label: 'Past Year Question Papers', path: '/notifications/past-year-papers' },
        { label: 'Events & Seminars', path: '/notifications/events' },
      ],
    },
  ];

  const handleNav = (path) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileSubmenu = (label) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all bg-transparent">
      <div className="bg-transparent px-4 sm:px-6 lg:px-12 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#002147] border border-white/30 rounded-md px-3 py-2 flex items-center space-x-2.5 shadow-lg hover:border-white hover:bg-[#002d61] cursor-pointer active:scale-95 transition text-left"
            title="Sant Kripal Singh Institute of Law - Return to Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 border border-white/90 rounded-full flex items-center justify-center bg-[#001733] shadow-inner">
              <Scale className="w-5 h-5 text-amber-300" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-[12px] sm:text-[14px] font-bold tracking-[0.08em] text-white leading-tight uppercase">
                SANT KRIPAL SINGH
              </span>
              <span className="font-serif text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-blue-200 leading-tight uppercase">
                INSTITUTE OF LAW
              </span>
            </div>
          </Link>

          {/* Right side Desktop Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden xl:flex items-center bg-[#001733] border border-white/20 rounded-md px-2 py-0.5 shadow-md">
              {dropdownMenus.map((menu) => (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(menu.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => handleNav(menu.path)}
                    className="flex items-center gap-1 px-3 py-2 text-[12px] lg:text-[13px] font-medium text-white hover:text-[#00c5ff] transition"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                  </button>

                  {activeDropdown === menu.label && (
                    <div className="absolute top-full left-0 w-64 bg-[#001733] border border-white/20 shadow-2xl py-2 z-50 rounded-b">
                      {menu.items.map((subItem) => (
                        <button
                          key={subItem.path}
                          type="button"
                          onClick={() => handleNav(subItem.path)}
                          className="block w-full text-left px-4 py-2 text-xs font-medium text-stone-200 hover:bg-[#002b5c] hover:text-[#00c5ff] transition"
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
                onClick={() => handleNav('/blogs')}
                className="px-3 py-2 text-[12px] lg:text-[13px] font-medium text-white hover:text-[#00c5ff] transition"
              >
                BLOGS
              </button>

              <button
                type="button"
                onClick={() => handleNav('/students-portal')}
                className="px-3 py-2 text-[12px] lg:text-[13px] font-medium text-amber-300 hover:text-white transition"
              >
                PORTAL
              </button>

              <button
                type="button"
                onClick={() => handleNav('/contact-us')}
                className="px-3 py-2 text-[12px] lg:text-[13px] font-medium text-white hover:text-[#00c5ff] transition"
              >
                CONTACT US
              </button>
            </nav>

            {/* Mobile hamburger */}
            <div className="flex items-center xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-[#001733] border border-white/30 text-white p-2.5 rounded-md hover:border-white transition shadow-md"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#001733] border-b border-white/20 px-6 py-4 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          {dropdownMenus.map((menu) => (
            <div key={menu.label} className="border-b border-white/10 pb-2">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleNav(menu.path)}
                  className="text-left text-sm font-semibold text-white hover:text-[#00c5ff] py-1"
                >
                  {menu.label}
                </button>
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu(menu.label)}
                  className="p-1 text-stone-300 hover:text-white"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMobileSubmenu === menu.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {openMobileSubmenu === menu.label && (
                <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#00c5ff]/40">
                  {menu.items.map((subItem) => (
                    <button
                      key={subItem.path}
                      type="button"
                      onClick={() => handleNav(subItem.path)}
                      className="block w-full text-left py-1 text-xs text-stone-300 hover:text-[#00c5ff]"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2 space-y-2">
            <button
              type="button"
              onClick={() => handleNav('/blogs')}
              className="block w-full text-left text-sm font-semibold text-white hover:text-[#00c5ff]"
            >
              BLOGS
            </button>
            <button
              type="button"
              onClick={() => handleNav('/students-portal')}
              className="block w-full text-left text-sm font-semibold text-amber-300 hover:text-white"
            >
              STUDENTS’ PORTAL
            </button>
            <button
              type="button"
              onClick={() => handleNav('/contact-us')}
              className="block w-full text-left text-sm font-semibold text-white hover:text-[#00c5ff]"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
