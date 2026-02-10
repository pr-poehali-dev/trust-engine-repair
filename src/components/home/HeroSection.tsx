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
    <section className="relative w-full overflow-hidden bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Background Images with Slider */}
        <div 
          className="absolute inset-0 select-none min-h-[700px]"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Before Image (Left side) */}
          <div className="absolute inset-0">
            <img
              src="https://placehold.co/1920x1080/e0f2fe/1e40af?text=Hero+Before+Desktop"
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
              src="https://placehold.co/1920x1080/dbeafe/2563eb?text=Hero+After+Desktop"
              alt="После ремонта"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center pointer-events-none">
              <div className="flex gap-0.5">
                <Icon name="ChevronLeft" size={18} className="text-gray-600" />
                <Icon name="ChevronRight" size={18} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-[700px] flex items-center">
          <div className="w-full max-w-xl pt-12 pb-16">
            {/* MER Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-md border border-gray-300 shadow-sm mb-6">
              <div className="flex items-center justify-center bg-gray-800 text-white text-xs font-bold rounded px-2.5 py-1 tracking-wider">
                MER
              </div>
              <span className="text-xs text-gray-600 font-normal">Работаем по протоколу</span>
            </div>

            {/* Heading */}
            <h1 className="text-[56px] leading-[1.1] font-normal mb-6">
              <span className="text-gray-900">Новый рассвет </span>
              <span className="text-blue-600 font-bold">вашего двигателя</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-2 mb-8">
              <p className="text-[17px] text-gray-900 leading-relaxed">
                <span className="text-blue-600 font-semibold">Re:New Engine.</span> Инженерное восстановление стационарных двигателей
              </p>
              <p className="text-[17px] text-gray-700 font-normal">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={onContactClick}
                className="bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium px-7 py-5 h-auto rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 hover:text-blue-700 text-[14px] font-medium px-6 py-5 h-auto rounded-lg uppercase tracking-wide transition-all"
              >
                <Icon name="Play" size={16} className="mr-2" />
                СМОТРЕТЬ РАБОТЫ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://placehold.co/800x1200/f1f5f9/475569?text=Hero+Mobile"
              alt="Ремонт двигателей"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>

          {/* Content */}
          <div className="relative z-10 px-4 py-12 min-h-[600px] flex flex-col">
            {/* MER Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-md border border-gray-300 shadow-sm">
                <div className="flex items-center justify-center bg-gray-800 text-white text-xs font-bold rounded px-2.5 py-1 tracking-wider">
                  MER
                </div>
                <span className="text-xs text-gray-600 font-normal">Работаем по протоколу</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-[36px] leading-[1.15] font-normal text-center mb-6">
              <span className="text-gray-900">Новый рассвет </span>
              <span className="text-blue-600 font-bold">вашего двигателя</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-2 mb-8 text-center">
              <p className="text-[15px] text-gray-900 leading-relaxed">
                <span className="text-blue-600 font-semibold">Re:New Engine.</span> Инженерное восстановление стационарных двигателей
              </p>
              <p className="text-[15px] text-gray-700 font-normal">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            {/* Slider Section */}
            <div 
              className="relative w-full aspect-[4/3] mb-8 select-none rounded-lg overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <img
                  src="https://placehold.co/800x600/e0f2fe/1e40af?text=Before"
                  alt="До ремонта"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>

              {/* After Image with clip-path */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                }}
              >
                <img
                  src="https://placehold.co/800x600/dbeafe/2563eb?text=After"
                  alt="После ремонта"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <Icon name="ChevronLeft" size={16} className="text-gray-600" />
                    <Icon name="ChevronRight" size={16} className="text-gray-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={onContactClick}
                className="bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-medium px-6 py-5 h-auto rounded-lg shadow-md w-full"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 hover:text-blue-700 text-[13px] font-medium px-5 py-5 h-auto rounded-lg uppercase tracking-wide w-full"
              >
                <Icon name="Play" size={14} className="mr-2" />
                СМОТРЕТЬ РАБОТЫ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}