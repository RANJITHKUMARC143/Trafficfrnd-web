import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-4">Last updated: September 12, 2025</p>

          <div className="prose prose-emerald max-w-none">
            <p>
              Curiospry Technologies Pvt Ltd ("Curiospry", "we", "us", or "our") respects your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use Traffic Frnd.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Account information: name, phone number, and email address</li>
              <li>Location information: to enable hyperlocal discovery and delivery</li>
              <li>Device and usage information: diagnostics, performance, and security data</li>
              <li>Transaction information: order details, payment confirmations, and receipts</li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To provide, maintain, and improve our services</li>
              <li>To process orders and facilitate payments</li>
              <li>To protect against fraud, abuse, and security risks</li>
              <li>To communicate service updates and support messages</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>
              We may share information with vendors, walkers, payment processors, analytics
              providers, and as required by law. We do not sell personal information.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain information for as long as necessary to provide the services and for
              legitimate business or legal purposes.
            </p>

            <h2>Your Rights</h2>
            <p>
              Where applicable, you may request access, correction, deletion, or portability
              of your information, or object to certain processing.
            </p>

            <h2>Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to
              protect your information. No method of transmission or storage is 100% secure.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly
              collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Continued use after an update
              constitutes acceptance of the revised policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              For privacy inquiries, email us at
              <a href="mailto:contact@curiospry.com"> contact@curiospry.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


