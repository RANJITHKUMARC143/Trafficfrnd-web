import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cookie Policy | Traffic Frnd</title>
        <meta name="description" content="Understand how Traffic Frnd uses cookies and similar technologies." />
        <link rel="canonical" href="https://trafficfrnd.com/cookies" />
      </Helmet>
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-4">Last updated: September 12, 2025</p>

          <div className="prose prose-emerald max-w-none">
            <p>
              Traffic Frnd uses cookies and similar technologies to improve your experience,
              analyze performance, and support essential features.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your browser. They help us
              remember your preferences and enable key functionality.
            </p>

            <h2>Types of Cookies We Use</h2>
            <ul>
              <li>Strictly necessary: login, security, and core features</li>
              <li>Performance: usage measurement and reliability improvements</li>
              <li>Preferences: choices like location or display settings</li>
              <li>Analytics: understanding engagement to enhance the product</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most browsers allow you to control cookies through settings. Disabling certain
              cookies may affect how the services function.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies are set by third parties, such as analytics and payment providers.
              Their use is governed by their respective policies.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions about this policy, email
              <a href="mailto:contact@curiospry.com"> contact@curiospry.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;


