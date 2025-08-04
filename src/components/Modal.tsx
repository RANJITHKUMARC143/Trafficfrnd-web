import React from 'react';
import { Download, Users, X, Mail, Phone } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Modal = () => {
  const {
    showModal,
    modalType,
    contactInfo,
    contactType,
    closeModal,
    setContactInfo,
    setContactType,
  } = useModal();

  const handleSubmit = () => {
    if (modalType === 'vendor' && contactInfo.trim()) {
      // Here you would typically send the contact info to your backend
      alert('Thank you for your interest! We\'ll contact you soon.');
      setContactInfo('');
      closeModal();
    } else if (modalType === 'app') {
      closeModal();
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                {modalType === 'app' ? (
                  <Download className="h-5 w-5 text-white" />
                ) : (
                  <Users className="h-5 w-5 text-white" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {modalType === 'app' ? 'Coming Soon!' : 'Vendor Registration Opens Soon!'}
              </h3>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {modalType === 'app' 
                ? "The Traffic Frnd app will be available for download from October 1st. Stay tuned!"
                : "Be the first to partner with us when we launch in October. Interested? Leave your contact!"
              }
            </p>

            {/* Contact Form for Vendors */}
            {modalType === 'vendor' && (
              <div className="space-y-4 pt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setContactType('email')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      contactType === 'email' 
                        ? 'bg-orange-100 text-orange-700' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>
                  <button
                    onClick={() => setContactType('phone')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      contactType === 'phone' 
                        ? 'bg-orange-100 text-orange-700' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Phone</span>
                  </button>
                </div>
                
                <div className="space-y-2">
                  <input
                    type={contactType === 'email' ? 'email' : 'tel'}
                    placeholder={contactType === 'email' ? 'Enter your email' : 'Enter your phone number'}
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                onClick={handleSubmit}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  modalType === 'vendor' && !contactInfo.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105'
                }`}
                disabled={modalType === 'vendor' && !contactInfo.trim()}
              >
                {modalType === 'app' ? 'Got it!' : 'Submit Interest'}
              </button>
              
              {modalType === 'vendor' && (
                <button
                  onClick={closeModal}
                  className="px-4 py-3 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 