import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Images with Slider - Desktop */}
      <div 
        className="hidden lg:block absolute inset-0 select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before Image (Left side) */}
        <div className="absolute inset-0">
          <img
            src="/hero-before-desktop.jpg"
            alt="До ремонта"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* After Image (Right side) with clip-path */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
          }}
        >
          <img
            src="/hero-after-desktop.jpg"
            alt="После ремонта"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <Icon name="ChevronLeft" size={16} className="text-gray-700" />
              <Icon name="ChevronRight" size={16} className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Image - Mobile */}
      <div className="lg:hidden absolute inset-0">
        <img
          src="/hero-mobile.jpg"
          alt="Ремонт двигателей"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 lg:bg-gradient-to-r lg:from-black/50 lg:via-black/30 lg:to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left py-12">
          {/* MER Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">MER</span>
            </div>
            <span className="text-sm text-gray-700">Работаем по протоколу</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            <span className="font-normal">Новый рассвет </span>
            <span className="text-blue-400">вашего</span>
            <span className="text-blue-400"> двигателя</span>
          </h1>

          {/* Subheading */}
          <div className="mb-4">
            <p className="text-lg lg:text-xl text-white/90 mb-2">
              <span className="text-blue-300 font-semibold">Re:New Engine.</span> Инженерное восстановление стационарных двигателей
            </p>
            <p className="text-base lg:text-lg text-white/80">
              Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold shadow-xl"
            >
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-white text-blue-600 px-8 py-6 text-base font-semibold shadow-xl"
            >
              <Icon name="Play" size={18} className="mr-2" />
              СМОТРЕТЬ РАБОТЫ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
