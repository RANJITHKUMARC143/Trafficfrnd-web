import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service | Traffic Frnd</title>
        <meta name="description" content="Read the Terms of Service for using Traffic Frnd's website and services." />
        <link rel="canonical" href="https://trafficfrnd.com/terms" />
      </Helmet>
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-4">Last updated: September 12, 2025</p>

          <div className="prose prose-emerald max-w-none">
            <p>
              Welcome to Traffic Frnd, a service provided by Curiospry Technologies Pvt Ltd.
              By accessing or using our website, mobile application, or any related services,
              you agree to these Terms of Service. If you do not agree, please discontinue use
              of our services.
            </p>

            <h2>Eligibility and Use</h2>
            <p>
              You must be at least 18 years old, or have parental/guardian consent, to use
              our services. You agree not to misuse the platform, interfere with operations,
              or violate any applicable laws or regulations.
            </p>

            <h2>Orders and Delivery</h2>
            <p>
              Orders are fulfilled by partner vendors and delivered by trained walkers when
              traffic conditions permit. Product availability, pricing, and delivery times may
              vary by location and demand.
            </p>

            <h2>Pricing and Payments</h2>
            <p>
              All prices are shown prior to checkout. Taxes and applicable fees may be added.
              Payments are processed securely through our payment partners. You agree to
              provide accurate billing information and authorize charges to your selected
              payment method.
            </p>

            <h2>Accounts and Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity that occurs under your account. Notify us
              immediately of any unauthorized use or suspected breach.
            </p>

            <h2>Prohibited Conduct</h2>
            <ul>
              <li>Fraudulent activity, including chargebacks without cause</li>
              <li>Harassment or abusive behavior toward users, vendors, or staff</li>
              <li>Attempting to disrupt, reverse engineer, or overload the platform</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All trademarks, logos, and content are owned by Curiospry Technologies or its
              licensors and are protected by law. You may not use them without written
              permission.
            </p>

            <h2>Disclaimers and Limitation of Liability</h2>
            <p>
              Services are provided on an “as is” and “as available” basis. To the maximum
              extent permitted by law, Traffic Frnd is not liable for any indirect, incidental,
              special, or consequential damages arising from your use of the services.
            </p>

            <h2>Suspension and Termination</h2>
            <p>
              We may suspend or terminate your access at any time if we believe you have
              violated these terms or engaged in misuse.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms periodically. Continued use of the services after an
              update constitutes your acceptance of the revised terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these terms, email us at
              <a href="mailto:contact@curiospry.com"> contact@curiospry.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;


