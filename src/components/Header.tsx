import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import Logo from './Logo';

const Header = () => {
  const { openModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Vendors', href: '/coming-soon' },
    { name: 'Partners', href: '/coming-soon' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="group-hover:scale-105 transition-transform duration-200">
              <Logo size="sm" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Traffic Frnd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                  location.pathname === item.href
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => { window.location.href = 'https://tarfficfrnd-vendor-patner.vercel.app'; }}
              className="px-4 py-2 text-sm font-medium text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-200"
            >
              Join as Vendor
            </button>
            <button 
              onClick={() => openModal('app')}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
            >
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = 'https://tarfficfrnd-vendor-patner.vercel.app';
                }}
                className="w-full px-4 py-2 text-sm font-medium text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-200"
              >
                Join as Vendor
              </button>
              <button 
                onClick={() => {
                  openModal('app');
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;