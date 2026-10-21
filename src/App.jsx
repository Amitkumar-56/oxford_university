import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import HomeSlider from './components/HomeSlider';
import Blogs from './components/Blogs';
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

import { useSEO } from './hooks/useSEO';

export default function App() {
  useSEO();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomeSlider />} />
        <Route path="/blogs" element={<Blogs />} />
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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}