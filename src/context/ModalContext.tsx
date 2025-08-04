import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  showModal: boolean;
  modalType: 'app' | 'vendor';
  contactInfo: string;
  contactType: 'email' | 'phone';
  openModal: (type: 'app' | 'vendor') => void;
  closeModal: () => void;
  setContactInfo: (info: string) => void;
  setContactType: (type: 'email' | 'phone') => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'app' | 'vendor'>('app');
  const [contactInfo, setContactInfo] = useState('');
  const [contactType, setContactType] = useState<'email' | 'phone'>('email');

  const openModal = (type: 'app' | 'vendor') => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setContactInfo('');
  };

  const value: ModalContextType = {
    showModal,
    modalType,
    contactInfo,
    contactType,
    openModal,
    closeModal,
    setContactInfo,
    setContactType,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}; 