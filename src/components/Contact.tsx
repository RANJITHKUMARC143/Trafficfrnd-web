import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Instagram, Linkedin, Youtube } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useModal } from '../context/ModalContext';
import Logo from './Logo';

const Contact = () => {
  const { openModal } = useModal();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          category: '',
          message: ''
        });
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@curiospry.com',
      href: 'mailto:contact@curiospry.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9353069942',
      href: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      value: 'Bengaluru, India',
      href: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon–Sat, 10 AM – 6 PM IST',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/curio_spry_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/curiospry-technologies-327987354/', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@CURIOSPRYTECHNOLOGIES', color: 'hover:bg-red-600' }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | Traffic Frnd</title>
        <meta name="description" content="Get in touch with Traffic Frnd for support, vendor partnerships, or delivery opportunities." />
        <link rel="canonical" href="https://trafficfrnd.com/contact" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Get in Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Contact{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We'd Love to Hear From You! Whether you're a user looking for support, 
                a vendor interested in partnering, or a delivery partner wanting to join our team – 
                we're here to help and excited to connect with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24–48 hours during business days.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        I am a
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select category</option>
                        <option value="user">User</option>
                        <option value="vendor">Vendor</option>
                        <option value="delivery-partner">Delivery Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !formData.email || !formData.message}
                    className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg ${
                      isLoading || !formData.email || !formData.message
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <span className="text-xl font-semibold text-green-800">Message Sent Successfully!</span>
                  </div>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out to us. We'll get back to you within 24–48 hours during business days.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                <p className="text-gray-600">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-xl transition-all duration-200 bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150 hover:from-white/80 hover:via-white/60 hover:to-white/40">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${social.color} hover:text-white`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
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
                <Logo size="md" className="md:h-16 md:w-16" />
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
                  className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
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

export default Contact; 