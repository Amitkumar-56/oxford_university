import React, { useState } from 'react';
import Header from './components/header';
import HomeSlider from './components/HomeSlider';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (to) => {
    if (to.includes('courses')) {
      setPage('courses');
    } else if (to.includes('about')) {
      setPage('about');
    } else {
      setPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header onNavigatePage={navigate} />

      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'courses' && <Courses onNavigate={navigate} />}
      {page === 'home' && <HomeSlider onNavigate={navigate} />}

      <Footer onNavigate={navigate} />
    </>
  );
}