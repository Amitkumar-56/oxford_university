import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import HomeSlider from './components/HomeSlider';
import Blogs from './components/Blogs';
import BlogEnvironmentalJusticePage from './pages/BlogEnvironmentalJusticePage';
import BlogJudicialActivismPage from './pages/BlogJudicialActivismPage';
import BlogConsumerDayPage from './pages/BlogConsumerDayPage';
import BlogLlbMahatvaPage from './pages/BlogLlbMahatvaPage';
import BlogNaturalLawPage from './pages/BlogNaturalLawPage';
import BlogConsumerAutonomyPage from './pages/BlogConsumerAutonomyPage';
import BlogLifestyleSocietyPage from './pages/BlogLifestyleSocietyPage';
import BlogJudicialReviewPage from './pages/BlogJudicialReviewPage';
import BlogUgcEquityDetailsPage from './pages/BlogUgcEquityDetailsPage';
import BlogAdvocateCoatPage from './pages/BlogAdvocateCoatPage';
import BlogDigitalTransformationPage from './pages/BlogDigitalTransformationPage';
import BlogPilPage from './pages/BlogPilPage';
import Contact from './components/Contact';
import StudentsPortal from './components/StudentsPortal';

import AboutInstitutePage from './pages/AboutInstitutePage';
import InspirationPage from './pages/InspirationPage';
import SecretaryMessagePage from './pages/SecretaryMessagePage';
import DirectorMessagePage from './pages/DirectorMessagePage';
import AccreditationPage from './pages/AccreditationPage';
import GalleryPage from './pages/GalleryPage';

import BallbCoursePage from './pages/BallbCoursePage';
import LlbCoursePage from './pages/LlbCoursePage';
import LlmCoursePage from './pages/LlmCoursePage';
import DiplomaCoursePage from './pages/DiplomaCoursePage';

import EligibilityPage from './pages/EligibilityPage';
import FeesPage from './pages/FeesPage';
import ApplicationFormPage from './pages/ApplicationFormPage';

import WhyStudyLawPage from './pages/WhyStudyLawPage';
import CollegeLifePage from './pages/CollegeLifePage';
import MethodologyPage from './pages/MethodologyPage';
import LibraryPage from './pages/LibraryPage';
import MootCourtPage from './pages/MootCourtPage';
import RulesPage from './pages/RulesPage';

import LatestNoticesPage from './pages/LatestNoticesPage';
import ExamSchedulePage from './pages/ExamSchedulePage';
import QuestionPapersPage from './pages/QuestionPapersPage';
import EventsPage from './pages/EventsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

import { useSEO } from './hooks/useSEO';

export default function App() {
  useSEO();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomeSlider />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Navigate to="/blogs" replace />} />

        {/* Dedicated Blog Detail Pages */}
        <Route 
          path="/blog-details/The-legal-implications-of-environmental-justice-in-the-context-of-human-rights" 
          element={<BlogEnvironmentalJusticePage />} 
        />
        <Route 
          path="/blog-details/Judicial-Activism-or-Judicial-Adventurism:-A-Constitutional-Perspective" 
          element={<BlogJudicialActivismPage />} 
        />
        <Route 
          path="/blog-details/विश्व-उपभोक्ता-अधिकार-दिवस" 
          element={<BlogConsumerDayPage />} 
        />
        <Route 
          path="/blog-details/%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5-%E0%A4%89%E0%A4%AA%E0%A4%AD%E0%A5%8B%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE-%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8" 
          element={<BlogConsumerDayPage />} 
        />
        <Route 
          path="/blog-details/LL.B.-का-महत्व" 
          element={<BlogLlbMahatvaPage />} 
        />
        <Route 
          path="/blog-details/LL.B.-%E0%A4%95%E0%A4%BE-%E0%A4%AE%E0%A4%B9%E0%A4%A4%E0%A5%8D%E0%A4%B5" 
          element={<BlogLlbMahatvaPage />} 
        />
        <Route 
          path="/blog-details/NATURAL-LAW-THEORY-IN-INDIAN-JURISPRUDENCE" 
          element={<BlogNaturalLawPage />} 
        />
        <Route 
          path="/blog-details/Protecting-Consumer-Autonomy-in-Digital-Markets:-A-Legal-and-Regulatory-Perspective" 
          element={<BlogConsumerAutonomyPage />} 
        />
        <Route 
          path="/blog-details/Life-Style-and-Society:-A-New-Vision" 
          element={<BlogLifestyleSocietyPage />} 
        />
        <Route 
          path="/blog-details/Judicial-Review-of-Administrative-Action-in-Bharat" 
          element={<BlogJudicialReviewPage />} 
        />
        <Route 
          path="/blog-details/UGC-Equity-Regulations:-Reform-or-Risk" 
          element={<BlogUgcEquityDetailsPage />} 
        />
        <Route 
          path="/blog-details/अधिवक्ता-और-न्यायाधीश-काला-कोट-एवं-सफेद-बैंड-क्यों-पहनते-है" 
          element={<BlogAdvocateCoatPage />} 
        />
        <Route 
          path="/blog-details/%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%B5%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BE-%E0%A4%94%E0%A4%B0-%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF%E0%A4%BE%E0%A4%A7%E0%A5%80%E0%A4%B6-%E0%A4%95%E0%A4%BE%E0%A4%B2%E0%A4%BE-%E0%A4%95%E0%A5%8B%E0%A4%9F-%E0%A4%8F%E0%A4%B5%E0%A4%82-%E0%A4%B8%E0%A4%AB%E0%A5%87%E0%A4%A6-%E0%A4%AC%E0%A5%88%E0%A4%82%E0%A4%A1-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%AA%E0%A4%B9%E0%A4%A8%E0%A4%A4%E0%A5%87-%E0%A4%B9%E0%A5%88" 
          element={<BlogAdvocateCoatPage />} 
        />
        <Route 
          path="/blog-details/Digital-Transformation-in-Legal-Education" 
          element={<BlogDigitalTransformationPage />} 
        />
        <Route 
          path="/blog-details/Public-Interest-Litigation-(PIL)-History-Importance" 
          element={<BlogPilPage />} 
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="/students-portal" element={<StudentsPortal />} />
        <Route path="/portal" element={<Navigate to="/students-portal" replace />} />

        <Route path="/about" element={<AboutInstitutePage />} />
        <Route path="/about/inspiration" element={<InspirationPage />} />
        <Route path="/about/secretary-message" element={<SecretaryMessagePage />} />
        <Route path="/about/director-message" element={<DirectorMessagePage />} />
        <Route path="/about/accreditation" element={<AccreditationPage />} />
        <Route path="/about/gallery" element={<GalleryPage />} />

        <Route path="/courses" element={<Navigate to="/courses/ballb" replace />} />
        <Route path="/courses/ballb" element={<BallbCoursePage />} />
        <Route path="/courses/llb" element={<LlbCoursePage />} />
        <Route path="/courses/llm" element={<LlmCoursePage />} />
        <Route path="/courses/diploma" element={<DiplomaCoursePage />} />

        <Route path="/admissions" element={<Navigate to="/admissions/overview" replace />} />
        <Route path="/admissions/overview" element={<EligibilityPage />} />
        <Route path="/admissions/eligibility" element={<EligibilityPage />} />
        <Route path="/admissions/fees" element={<FeesPage />} />
        <Route path="/admissions/apply" element={<ApplicationFormPage />} />

        <Route path="/studying-at-sksil" element={<Navigate to="/studying-at-sksil/why-study-law" replace />} />
        <Route path="/studying-at-sksil/why-study-law" element={<WhyStudyLawPage />} />
        <Route path="/studying-at-sksil/college-life" element={<CollegeLifePage />} />
        <Route path="/studying-at-sksil/methodology" element={<MethodologyPage />} />
        <Route path="/studying-at-sksil/library" element={<LibraryPage />} />
        <Route path="/studying-at-sksil/moot-court" element={<MootCourtPage />} />
        <Route path="/studying-at-sksil/rules" element={<RulesPage />} />

        <Route path="/notifications" element={<LatestNoticesPage />} />
        <Route path="/notifications/exam-schedule" element={<ExamSchedulePage />} />
        <Route path="/notifications/past-year-papers" element={<QuestionPapersPage />} />
        <Route path="/notifications/events" element={<EventsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}