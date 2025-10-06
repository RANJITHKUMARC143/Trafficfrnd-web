import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, Clock, MapPin, Users, Star, Download, Smartphone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useModal } from '../context/ModalContext';
import Logo from './Logo';

const LandingPage = () => {
  const { openModal } = useModal();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Traffic Frnd | Snacks & Essentials Delivered in Traffic - Bengaluru</title>
        <meta name="description" content="Get snacks, drinks, and groceries delivered directly to your car during traffic by trained walkers. Now serving Bengaluru." />
        <link rel="canonical" href="https://trafficfrnd.com/" />
        <meta property="og:title" content="Traffic Frnd – Snacks & Grocery Delivery in Traffic Jam | Bangalore" />
        <meta property="og:description" content="Stuck in traffic? Get essentials delivered directly to your vehicle. We deliver through traffic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trafficfrnd.com/" />
        <meta property="og:image" content="https://trafficfrnd.com/og-image.png?v=1" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://trafficfrnd.com/og-image.png?v=1" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Traffic Frnd',
          url: 'https://trafficfrnd.com/',
          logo: 'https://trafficfrnd.com/favicon-512.png',
          sameAs: [
            'https://www.instagram.com/curio_spry_official',
            'https://www.linkedin.com/in/curiospry-technologies-327987354/',
            'https://www.youtube.com/@CURIOSPRYTECHNOLOGIES'
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'Traffic Frnd',
          operatingSystem: 'Android, iOS',
          applicationCategory: 'FoodApplication',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
          url: 'https://trafficfrnd.com/'
        })}</script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                  Going live in Bengaluru from Nov 1st
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Snacks & Essentials{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Delivered to Your Vehicle
                  </span>{' '}
                  in Traffic
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stuck at a red signal? Turn waiting time into convenience time. Get fresh snacks, 
                  cold drinks, and daily essentials delivered directly to your car window by our trained walkers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openModal('app')}
                  className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                 {/*  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>*/}
                </div>
                <div className="text-center">
                 {/*   <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Partner Vendors</div>*/}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    {/*<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />*/}
                   {/* <span className="text-2xl font-bold text-gray-900">4.8</span>*/}
                  </div>
                  {/*<div className="text-sm text-gray-600">App Rating</div>*/}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Traffic delivery service" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">4 min delivery</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium">Live tracking</span>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-gradient-to-br from-emerald-200/70 to-green-200/60 rounded-full blur-3xl opacity-40 ring-1 ring-white/20"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-lime-200/70 to-teal-200/60 rounded-full blur-3xl opacity-40 ring-1 ring-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Tagline Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-lime-500 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                <span className="block mb-2">We don't wait for the</span>
                <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500 bg-clip-text text-transparent animate-pulse">
                  traffic to clear
                </span>
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
                  — we deliver{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                      through it
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full animate-pulse"></div>
                  </span>
                </span>
              </h2>
            </div>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-500"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-500"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Revolutionizing Traffic Time
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Traffic Frnd transforms your daily commute frustration into convenience. Our innovative 
                hyperlocal delivery platform connects you with nearby vendors through trained walkers 
                who deliver essentials directly to your vehicle during traffic stops.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4 text-center group p-6 rounded-2xl bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150 hover:from-white/80 hover:via-white/60 hover:to-white/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Time Efficient</h3>
                <p className="text-gray-600">Turn traffic delays into productive shopping time with ultra-fast delivery.</p>
              </div>
              
              <div className="space-y-4 text-center group p-6 rounded-2xl bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150 hover:from-white/80 hover:via-white/60 hover:to-white/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hyperlocal</h3>
                <p className="text-gray-600">Connect with vendors in your immediate vicinity for fresh, quality products.</p>
              </div>
              
              <div className="space-y-4 text-center group p-6 rounded-2xl bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150 hover:from-white/80 hover:via-white/60 hover:to-white/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Community Driven</h3>
                <p className="text-gray-600">Supporting local businesses while creating employment opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Commute?
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Join thousands of smart commuters who've discovered the convenience of Traffic Frnd. 
              Download the app now and never waste traffic time again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openModal('app')}
                className="group flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </button>
              <button 
                onClick={() => openModal('app')}
                className="group flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Credits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
              <div className="flex justify-center">
              <div>
                <Logo size="md" className="md:h-20 md:w-25" />
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Traffic Frnd is proudly developed and managed by{' '}
                <span className="text-white font-semibold">Curiospry Technologies Pvt Ltd</span>, 
                a technology-driven company building real-world urban solutions. We're launching soon!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <span>© 2025 Curiospry Technologies. All rights reserved.</span>
                <a
                  href="https://www.curio-spry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  www.curio-spry.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;