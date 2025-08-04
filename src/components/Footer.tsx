import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                <Logo size="sm" />
              </div>
              <span className="text-xl font-bold">Traffic Frnd</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering convenience to your vehicle during traffic. Making every red signal a shopping opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/curio_spry_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/curiospry-technologies-327987354/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@CURIOSPRYTECHNOLOGIES" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#vendors" className="text-gray-400 hover:text-white transition-colors duration-200">Vendors</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors duration-200">Partners</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:contact@curiospry.in" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                  contact@curiospry.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">9353069942</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                <span className="text-gray-400 text-sm">Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Curiospry Technologies. All rights reserved. Made with ❤️ in Bengaluru.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;