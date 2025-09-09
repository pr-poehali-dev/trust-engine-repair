import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  showTagline = false,
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    small: 'h-5 w-auto sm:h-6 sm:w-auto',
    medium: 'h-6 w-auto sm:h-7 sm:w-auto md:h-8 md:w-auto',
    large: 'h-8 w-auto sm:h-10 sm:w-auto md:h-12 md:w-auto'
  };

  const textSizeClasses = {
    small: 'text-sm sm:text-base',
    medium: 'text-lg sm:text-xl',
    large: 'text-xl sm:text-2xl md:text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.svg" 
        alt="RED MAR" 
        className={sizeClasses[size]}
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-marine-dark ${textSizeClasses[size]}`}>
            MarineService
          </span>
          {showTagline && (
            <span className="hidden sm:block text-xs text-marine-steel italic font-medium -mt-0.5">
              Новая жизнь вашего двигателя
            </span>
          )}
        </div>
      )}
    </div>
  );
}