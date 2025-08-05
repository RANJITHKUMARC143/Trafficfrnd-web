import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HowItWorks from './components/HowItWorks';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';
import { ModalProvider } from './context/ModalContext';
import Modal from './components/Modal';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Modal />
      </Router>
      <Analytics />
    </ModalProvider>
  );
}

export default App;