import React from 'react';
import Header from './Header';
import Footer from './Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <p className="text-gray-600 mb-4">Last updated: September 12, 2025</p>

          <div className="prose prose-orange max-w-none">
            <p>
              We aim to deliver quality products promptly. If there is an issue with your
              order, the following refund guidelines apply.
            </p>

            <h2>Eligibility</h2>
            <ul>
              <li>Incorrect, missing, or damaged items upon delivery</li>
              <li>Orders not delivered within a reasonable timeframe due to our fault</li>
              <li>Quality issues verified with the vendor at the time of delivery</li>
            </ul>

            <h2>Non-Refundable</h2>
            <ul>
              <li>Change of mind after delivery</li>
              <li>Issues caused by incorrect address or recipient unavailability</li>
              <li>Perishable items after acceptance unless defective</li>
            </ul>

            <h2>How to Request a Refund</h2>
            <p>
              Contact support within 24 hours of delivery with your order details and
              supporting information (photos where applicable). Approved refunds are issued to
              the original payment method within 5–7 business days.
            </p>

            <h2>Contact Us</h2>
            <p>
              For refund assistance, email
              <a href="mailto:contact@curiospry.com"> contact@curiospry.com</a> or call 9353069942.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;


