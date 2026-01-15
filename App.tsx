import React, { useState } from 'react';
import EnrollmentModal from './components/EnrollmentModal';
import VisitModal from './components/VisitModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Plans from './components/Plans';
import Modalities from './components/Modalities';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);

  const handleOpenEnrollment = () => setIsEnrollmentOpen(true);
  const handleCloseEnrollment = () => setIsEnrollmentOpen(false);

  const handleOpenVisit = () => setIsVisitOpen(true);
  const handleCloseVisit = () => setIsVisitOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenEnrollment={handleOpenEnrollment} />
      <main>
        <Hero onOpenEnrollment={handleOpenEnrollment} onOpenVisit={handleOpenVisit} />
        <Marquee />
        <About />
        <Plans />
        <Modalities />
        <Schedule />
        <Gallery />
        <CallToAction onOpenEnrollment={handleOpenEnrollment} onOpenVisit={handleOpenVisit} />
      </main>
      <Footer />
      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={handleCloseEnrollment} />
      <VisitModal isOpen={isVisitOpen} onClose={handleCloseVisit} />
    </div>
  );
}

export default App;