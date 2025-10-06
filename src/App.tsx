import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HowItWorks from './components/HowItWorks';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import RefundPolicy from './components/RefundPolicy';
import { ModalProvider } from './context/ModalContext';
import Modal from './components/Modal';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <ModalProvider>
        <Router>
          <div className="min-h-screen">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/refunds" element={<RefundPolicy />} />
            </Routes>
          </div>
          <Modal />
        </Router>
        <Analytics />
        <SpeedInsights />
      </ModalProvider>
    </HelmetProvider>
  );
}

export default App;