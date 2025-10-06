import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Calendar, ArrowRight, Instagram, Linkedin, Youtube, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Logo from './Logo';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        setEmail('');
      }, 1000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/curio_spry_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/curiospry-technologies-327987354/', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@CURIOSPRYTECHNOLOGIES', color: 'hover:bg-red-600' }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Coming Soon | Traffic Frnd</title>
        <meta name="description" content="We’re launching soon in Bengaluru. Subscribe for early access and updates." />
        <link rel="canonical" href="https://trafficfrnd.com/coming-soon" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <div>
                <Logo size="lg" />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Coming Soon
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Something{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Amazing
                </span>{' '}
                is Coming
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We're working hard to bring you an incredible experience. 
                Be the first to know when we launch and get exclusive early access.
              </p>
            </div>

            {/* Launch Date */}
            <div className="rounded-2xl shadow-xl p-8 max-w-md mx-auto bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-emerald-600" />
                <span className="text-lg font-semibold text-gray-900">Launch Date</span>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">November 1st, 2025</div>
              <div className="text-gray-600">Get ready for the revolution!</div>
            </div>

            {/* Email Capture */}
            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !email.trim()}
                    className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg ${
                      isLoading || !email.trim()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <>
                        <span>Get Early Access</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg font-semibold text-green-800">Successfully Subscribed!</span>
                  </div>
                  <p className="text-green-700">
                    We'll notify you as soon as we launch. Stay tuned for exclusive updates!
                  </p>
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">Follow us for updates</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${social.color} hover:text-white`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Home */}
            <div className="pt-8">
              <a
                href="/"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon; 