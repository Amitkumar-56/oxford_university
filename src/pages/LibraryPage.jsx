import React from 'react';
import { ChevronRight, CheckCircle2, Download, BookOpen, ShieldCheck } from 'lucide-react';
import hmSmall3 from '../assets/image/hm_small3.jpg';
import libImg1 from '../assets/image/library_img1.jpeg';
import libImg2 from '../assets/image/library_img2.jpeg';
import libImg3 from '../assets/image/library_img3.jpeg';
import libImg4 from '../assets/image/library_img4.jpeg';
import libImg5 from '../assets/image/library_img5.jpg';

export default function LibraryPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const libraryImages = [
    { src: libImg1, alt: 'SKSIL Law Library Reading Hall' },
    { src: libImg2, alt: 'SKSIL Law Books & Reference Section' },
    { src: libImg3, alt: 'SKSIL Law Journals & Bare Acts' },
    { src: libImg4, alt: 'SKSIL E-Library Research Area' },
    { src: libImg5, alt: 'SKSIL Library Stack Area' },
  ];

  const libraryRules = [
    'The library will be operational on workings hours only.',
    'Books will be issued only to those students having a valid Library Card.',
    'Library card will be issued after a payment of Rs.250 for membership and Rs.500 as a security deposit. The Librarian can adjust any fee/damage charge which is due from security deposit.',
    'A maximum of 2 books can be issued at a time.',
    'At the time of returning a book, depending on the demand, student can re-loan a book just once.',
    'Students before leaving the issue counter must satisfy themselves as to whether the books which they intend to borrow are in good condition. Any damage should be immediately reported to the librarian or library staff, failing which the member to whom the book was issued will be held responsible.',
    'Borrowed books are to be handled with care. If a book is lost by the students, or found to be torn, mutilated or damaged in any form, he/she shall be liable to pay double the cost of the book as fine.',
    'Students are not permitted to underline, write in, folding/tearing of pages or defaced books in any way whatsoever.',
    'A fine of Rs. 5/- per day (per book) will be charged if books are kept un-returned beyond due date.',
    'Depending on the demand for a book, the librarian can call it back from a student before the due date. The librarian has the right to refuse to give a book on loan/re-issue.',
    'If the librarian recalls an issued book, it has to be returned within two days of call back. If not, the library membership may be suspended. The student must obtain the librarian’s permission to reactivate the membership.',
    'Reference books, textbooks, unbound issues of journals, periodicals, newspapers, and technical reports are not issued out of the library to anybody. Whether it is a reference book or material will be left to the discretion of the librarian.',
    'In case one or many volumes of a series of books is/are missing or damaged, the student may have to bear the cost of the entire series and pay a penalty.',
    'Students are not allowed to carry personal belongings such as bag, books, files, etc. into the library.',
    'Library membership and the membership card are not transferrable. If a student loses the card, he/she has to make written request.',
    'At the end of every semester, the students must return the borrowed books and pay all the dues. Only then hall tickets would be issued for the examinations.',
    'Indiscipline of any form will be tolerated in the library.',
    'If a person is found to break the rules and if the librarian deems so then the library card of the student will be impounded and disciplinary action will be taken including, but not restricted to, fine.',
    'If any book is un-returned for more than two months of the due date, the membership of the borrower will be suspended without notice, for which the membership will be reinstated only after returning the book and fully submitting the fine, along with a penalty of Rs.100/-.',
    'It is the student’s responsibility to keep a silent and study-friendly environment in the library.',
    'It is compulsory to keep all electronic gadgets such mobile phone, i-pad, speakers etc in the ‘silent mode’ in the library.',
    'Sitting in the library unnecessarily or sleeping is not allowed.',
    'For smooth management of the library, the Librarian has the power to change/amend the above rules at any time. Whatsoever subject matter not covered by the Library Code of Conduct, are left to the discretion of the Librarian and the decision of the Librarian shall be final.',
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
            <span className="text-[#00c5ff] font-medium">Library</span>
          </div>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#005a9c] text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
              Knowledge & Research Hub
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4">
              Library & E-Resources
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Our library houses a valuable collection of legal materials and provides access to numerous online services and internet sources which serve the legal research needs of Students and Faculty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
              Heart of Intellectual Life
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] mt-1 mb-4">
              The SKSIL Law Library
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Our library houses a valuable collection of legal materials and provides access to numerous online services and internet sources which serve the legal research needs of the Students and Faculty. The reading section is divided in three parts i.e., General Reading section, Reference &amp; Journal Section and Magazine section.
            </p>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              SKSIL continually expands and upgrades its library materials and resources to ensure students receive the best opportunities to supplement and build on their education. SKSIL selects newspapers and magazines of general interest as well as periodicals designed for a specialized audience to meet the needs of currently enrolled students.
            </p>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              The library has been planned to keep in view the aims and objectives of the Law School and is being operated by a team of professionally qualified library staff guided by the Library committee. SKSIL maintains an E-library with an online and offline database. The library has an open access system to facilitate readers to have easy access to the library resources.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Three dedicated reading zones: General Reading, Reference &amp; Journal, and Magazine sections.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Complete archives of All India Reporter (AIR), Supreme Court Cases (SCC), and Criminal Law Journal.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium">Modern E-library with online and offline databases & open access system for students.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden shadow-md border border-stone-300">
              <img
                src={hmSmall3}
                alt="Law Library SKSIL"
                className="w-full h-88 object-cover"
              />
              <div className="p-4 bg-white border-t border-stone-200">
                <h4 className="font-serif font-bold text-[#002147] text-base mb-1">Open Access Research Facility</h4>
                <p className="text-xs text-stone-600">Guided by qualified library staff & academic faculty committee.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6 border-b border-stone-200 pb-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#005a9c] font-bold">
                Campus Facilities
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#002147] mt-1">
                Library Gallery
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {libraryImages.map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm">
                <div className="h-44 sm:h-48 overflow-hidden bg-stone-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-[#002147] mb-1">
                <ShieldCheck className="w-5 h-5 text-[#005a9c]" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Library Code of Conduct
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                Rules and guidelines for maintaining an inspiring, study-friendly environment.
              </p>
            </div>
            <a
              href="/Library-Rules.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#002147] hover:bg-[#003366] text-white rounded text-xs font-semibold tracking-wide transition shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Code of Conduct (Hindi PDF)</span>
            </a>
          </div>

          <ol className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed list-decimal pl-5">
            {libraryRules.map((rule, idx) => (
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

