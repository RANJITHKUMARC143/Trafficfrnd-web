import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-20 w-20',
    md: 'h-30 w-30',
    lg: 'h-20 w-20'
  };

  return (
    <img
      src="/images/logo.png"
      alt="Traffic Frnd Logo"
      className={`${sizeClasses[size]} ${className}`}
      onError={(e) => {
        // Fallback to car icon if logo image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.innerHTML = `
          <svg class="${sizeClasses[size]} text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-1l-1.5-4.5c-.3-.9-1.2-1.5-2.1-1.5H8.6c-.9 0-1.8.6-2.1 1.5L5 12H4c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2m-2-4h16v2H3v-2m3.5-6h13l1.5 4.5H5L6.5 7z"/>
          </svg>
        `;
        target.parentNode?.appendChild(fallback.firstChild!);
      }}
    />
  );
};

export default Logo; 