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
    small: 'h-6 w-6 sm:h-7 sm:w-7',
    medium: 'h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12',
    large: 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16'
  };

  const textSizeClasses = {
    small: 'text-sm sm:text-base',
    medium: 'text-lg sm:text-xl',
    large: 'text-xl sm:text-2xl md:text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/favicon.svg" 
        alt="MarineService" 
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