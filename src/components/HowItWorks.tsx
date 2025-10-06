import React from 'react';
import { MapPin, ShoppingCart, Zap, Clock, CheckCircle, ArrowRight, Download, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useModal } from '../context/ModalContext';

const HowItWorks = () => {
  const { openModal } = useModal();
  const steps = [
    {
      icon: MapPin,
      title: "Detect Live Traffic Zones",
      description: "Our smart system automatically detects when you're stuck in traffic at signals and major junctions across Bengaluru.",
      details: "Using GPS and real-time traffic data, we identify the perfect moments for safe delivery.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: ShoppingCart,
      title: "Order Groceries & Snacks",
      description: "Browse nearby vendors and order fresh snacks, cold drinks, fruits, and daily essentials with just a few taps.",
      details: "Choose from 200+ verified local vendors offering quality products at competitive prices.",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Our trained walkers and scooter agents deliver your order directly to your vehicle window within 4 minutes.",
      details: "Safe, contactless delivery that doesn't require you to leave your vehicle.",
      color: "from-lime-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Takes less than 5 minutes
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                How{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Traffic Frnd
                </span>{' '}
                Works
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover how our innovative platform transforms your traffic time into convenient shopping moments. 
                It's simple, fast, and designed for the modern commuter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center p-6 rounded-2xl bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-400">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-lg text-gray-500">
                      {step.details}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex items-center space-x-2 text-emerald-600">
                      <span className="text-sm font-medium">Next Step</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '1640777' : index === 1 ? '264636' : '1640772'
                      }/pexels-photo-${
                        index === 0 ? '1640777' : index === 1 ? '264636' : '1640772'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={step.title}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-20 rounded-2xl`}></div>
                    
                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose Traffic Frnd?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've designed every aspect of our service to make your traffic time productive and convenient.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "4 Min Delivery",
                  description: "Ultra-fast delivery during traffic signals"
                },
                {
                  icon: CheckCircle,
                  title: "100% Safe",
                  description: "Contactless delivery to your vehicle window"
                },
                {
                  icon: MapPin,
                  title: "Live Tracking",
                  description: "Real-time tracking of your delivery agent"
                },
                {
                  icon: Users,
                  title: "Trained Agents",
                  description: "Professional walkers and scooter delivery partners"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl transition-all duration-300 text-center space-y-4 bg-gradient-to-b from-white/70 via-white/50 to-white/30 ring-1 ring-white/30 border border-white/20 supports-[backdrop-filter]:backdrop-blur-sm backdrop-saturate-150 hover:from-white/80 hover:via-white/60 hover:to-white/40">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Join the Traffic Frnd community today and transform your daily commute into convenient shopping time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openModal('app')}
                className="group flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Try the App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => { window.location.href = 'https://tarfficfrnd-vendor-patner.vercel.app'; }}
                className="group flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Become a Vendor
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;