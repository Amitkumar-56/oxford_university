import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Comprehensive SEO metadata for every individual URL route
export const ROUTE_SEO = {
  '/': {
    title: 'Sant Kripal Singh Institute of Law (SKSIL) | Best Law College in Banda, Bundelkhand',
    description: 'Sant Kripal Singh Institute of Law (SKSIL), Banda is a premier law college affiliated with Bundelkhand University & BCI offering BA LLB & LLB degrees with state-of-the-art moot courts.',
    keywords: 'SKSIL Banda, best law college in Bundelkhand, law admission Banda, BALLB 5 years, LLB 3 years, BCI approved law college',
  },
  // About Routes
  '/about': {
    title: 'About the Institute - Legacy & History | SKSIL Banda',
    description: 'Learn about the inception, vision, academic distinctions, and university gold medalists at Sant Kripal Singh Institute of Law.',
    keywords: 'about SKSIL, law college history, gold medalists law college Banda',
  },
  '/about/inspiration': {
    title: 'Our Divine Inspiration - Param Sant Satguru Kripal Singh Ji Maharaj | SKSIL',
    description: 'Named in divine reverence of Param Sant Satguru Kripal Singh Ji Maharaj (Huzur Maharaj Ji), whose life mission of selfless service guides our educational journey.',
    keywords: 'Huzur Maharaj Ji, spiritual inspiration SKSIL, Param Sant Satguru Kripal Singh Ji',
  },
  '/about/secretary-message': {
    title: 'Secretary’s Message - Shri Yash Shivhare | SKSIL Banda',
    description: 'Official message from Secretary Yash Shivhare on legal ethics, classroom discipline, and world-class advocacy training at SKSIL.',
    keywords: 'Secretary message SKSIL, Yash Shivhare law college',
  },
  '/about/director-message': {
    title: 'Director’s Message - Dr. Sarvesh Agnihotri | SKSIL Banda',
    description: 'Read the Director Dr. Sarvesh Agnihotri’s address to prospective students on judicial preparation and legal scholarship.',
    keywords: 'Director message, Dr Sarvesh Agnihotri SKSIL',
  },
  '/about/accreditation': {
    title: 'Accreditation - Bar Council of India & Bundelkhand University | SKSIL',
    description: 'Verified statutory recognitions: Approved by Bar Council of India (BCI), New Delhi and permanently affiliated to Bundelkhand University, Jhansi.',
    keywords: 'BCI approval law college, Bundelkhand university affiliation, accreditation SKSIL',
  },
  '/about/gallery': {
    title: 'Campus & Convocation Gallery | SKSIL Banda',
    description: 'Photo gallery of moot court trials, convocation honors by the UP Governor, legal literacy camps, and campus facilities.',
    keywords: 'SKSIL photo gallery, law college campus photos Banda',
  },

  // Courses Routes
  '/courses/ballb': {
    title: 'B.A. LL.B. (5 Years Integrated Dual Degree) | SKSIL Banda',
    description: '5-Year Integrated B.A. LL.B. approved by BCI. Explore complete curriculum, ₹16,000/yr nominal fees, eligibility and syllabus.',
    keywords: 'BALLB course Banda, 5 year law degree, BALLB syllabus BCI',
  },
  '/courses/llb': {
    title: 'LL.B. (3 Years Professional Degree) | SKSIL Banda',
    description: '3-Year LL.B. for graduates. Master trial advocacy, criminal jurisprudence, and civil procedure for judicial exams (PCS-J).',
    keywords: 'LLB 3 years Banda, law degree for graduates, LLB fees SKSIL',
  },
  '/courses/llm': {
    title: 'LL.M. (Master of Laws) Postgraduate Programme | SKSIL',
    description: 'Advanced postgraduate legal research in Constitutional Law, Criminal Jurisprudence, and Corporate Regulation.',
    keywords: 'LLM degree Banda, Master of Laws admission, postgraduate law',
  },
  '/courses/diploma': {
    title: 'Diploma & Certificate Courses in Law | SKSIL Banda',
    description: 'Specialized certifications in Cyber Law, ADR Mediation, Intellectual Property Rights (IPR), and Human Rights.',
    keywords: 'Cyber law diploma, ADR certificate course, IPR course Banda',
  },

  // Admissions Routes
  '/admissions/overview': {
    title: 'Admissions 2026-27 - Apply Online & Guidelines | SKSIL Banda',
    description: 'Official admission guidelines, merit counselling schedule, and online application portal for B.A. LL.B. and LL.B.',
    keywords: 'law college admissions 2026, SKSIL application form, direct law admission',
  },
  '/admissions/eligibility': {
    title: 'Eligibility & Requirements - B.A. LL.B. & LL.B. | SKSIL Banda',
    description: 'Clear educational qualifications: 10+2 with 45% for BALLB, and Graduation with 45% for LLB (with reservations for OBC/SC/ST).',
    keywords: 'law college eligibility, BALLB qualification, LLB entry requirements',
  },
  '/admissions/fees': {
    title: 'Fee Structure & UP Government Scholarships | SKSIL Banda',
    description: 'Affordable legal education with full UP State Post-Matric (Saksham) scholarship reimbursements for eligible students.',
    keywords: 'law college fees Banda, SKSIL scholarship, UP scholarship saksham portal',
  },
  '/admissions/apply': {
    title: 'Apply Online for Law Admission 2026-27 | SKSIL Banda',
    description: 'Fill out the online application form to book your counselling seat for BA LLB or LLB degree courses.',
    keywords: 'law admission form online, apply SKSIL, admission desk',
  },

  // Studying at SKSIL Routes
  '/studying-at-sksil/why-study-law': {
    title: 'Why Study Law - Career Opportunities & Bar Advocacy | SKSIL',
    description: 'Discover why pursuing law provides prestige, societal influence, and pathways to High Court practice and judicial magistrateship.',
    keywords: 'why study law, legal career scope India, advocate career options',
  },
  '/studying-at-sksil/college-life': {
    title: 'College Life, Societies & Campus Culture | SKSIL Banda',
    description: 'Experience student-run moot societies, national debates, guest lectures by sitting judges, and rural legal aid literacy camps.',
    keywords: 'college life SKSIL, law student activities, moot court society',
  },
  '/studying-at-sksil/methodology': {
    title: 'Teaching Methodology & Socratic Case Analysis | SKSIL',
    description: 'Interactive courtroom pedagogical model blending Socratic case-law method, memorial drafting, and judicial chamber mentorship.',
    keywords: 'law teaching methodology, Socratic law method, courtroom simulation',
  },
  '/studying-at-sksil/library': {
    title: 'Law Library & Digital E-Resources (SCC & AIR) | SKSIL',
    description: 'Over 10,000 legal treatises, supreme court reports, bare acts, and computerized legal research labs open late for students.',
    keywords: 'law library Banda, SCC online SKSIL, AIR reports library',
  },
  '/studying-at-sksil/moot-court': {
    title: 'High-Tech Moot Court Hall & Free Legal Aid Clinic | SKSIL',
    description: 'Simulated High Court appellate benches and community legal aid clinic delivering free pro-bono advice across Bundelkhand.',
    keywords: 'moot court hall Banda, free legal aid clinic SKSIL',
  },
  '/studying-at-sksil/rules': {
    title: 'Rules, Regulations & Anti-Ragging Policy | SKSIL Banda',
    description: 'Institutional code of conduct, mandatory 75% BCI attendance, uniform dress code, and zero tolerance anti-ragging measures.',
    keywords: 'BCI attendance rules, law student dress code, anti ragging policy SKSIL',
  },

  // Notifications Routes
  '/notifications': {
    title: 'Latest College Notices & Official Circulars | SKSIL Notice Board',
    description: 'Check official notices, holiday lists, exam form deadlines, and UP government scholarship updates.',
    keywords: 'SKSIL notices, college circulars Banda, law exam notices',
  },
  '/notifications/exam-schedule': {
    title: 'Examination Schedule & Timetable | SKSIL Banda',
    description: 'Bundelkhand University Odd & Even semester law examination datesheets and viva voce schedules.',
    keywords: 'BU Jhansi law exam datesheet, semester exam timetable',
  },
  '/notifications/past-year-papers': {
    title: 'Past Year University Question Papers (PDF) | SKSIL',
    description: 'Download Bundelkhand University past year question papers for B.A. LL.B. and LL.B. semester exams.',
    keywords: 'BU Jhansi past papers law, LLB question papers download',
  },
  '/notifications/events': {
    title: 'Events, Seminars & Conferences | SKSIL Banda',
    description: 'National Law Day symposiums, legal awareness workshops, and guest lectures by legal luminaries.',
    keywords: 'law college seminars, legal events Banda, moot competition events',
  },

  // Direct Pages
  '/blogs': {
    title: 'Legal Articles, Case Analyses & Blogs | SKSIL Law Blog',
    description: 'In-depth legal commentaries on Supreme Court judgments, constitutional reforms, and criminal statutes.',
    keywords: 'law blog India, case law commentary, legal writeups',
  },
  '/contact-us': {
    title: 'Contact Us - Campus Address & Helpline | SKSIL Banda',
    description: 'Get in touch with Sant Kripal Singh Institute of Law, Banda. Campus address, helpline phone numbers, and location map.',
    keywords: 'contact SKSIL Banda, law college phone number, SKSIL map location',
  },
  '/students-portal': {
    title: 'Student & Faculty Portal | Sant Kripal Singh Institute of Law',
    description: 'Secure student portal to check attendance, fee receipts, and examination admit cards.',
    keywords: 'SKSIL student portal, student login law college',
  },
};

/**
 * Custom React hook that automatically updates Document Title, Meta Description,
 * and OpenGraph tags whenever the browser URL changes!
 */
export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    const seoData = ROUTE_SEO[currentPath] || ROUTE_SEO['/'];

    // 1. Update Title in Browser Tab
    document.title = seoData.title;

    // 2. Helper to set/update meta tag
    const setMetaTag = (attrName, attrVal, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. SEO Meta Tags
    setMetaTag('name', 'description', seoData.description);
    setMetaTag('name', 'keywords', seoData.keywords);
    setMetaTag('name', 'author', 'Sant Kripal Singh Institute of Law');
    setMetaTag('name', 'robots', 'index, follow');

    // 4. OpenGraph Tags for Social Sharing
    setMetaTag('property', 'og:title', seoData.title);
    setMetaTag('property', 'og:description', seoData.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.href);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', seoData.title);
    setMetaTag('name', 'twitter:description', seoData.description);
  }, [location.pathname]);
}
