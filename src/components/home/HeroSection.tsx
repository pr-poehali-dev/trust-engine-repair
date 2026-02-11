import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ComparisonSlider from '@/components/ui/comparison-slider';

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

  const handleGlobalMouseMove = (e: MouseEvent, containerRef: HTMLDivElement) => {
    if (!isDragging) return;
    
    const rect = containerRef.getBoundingClientRect();
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
    const container = document.querySelector('.slider-container') as HTMLDivElement;
    if (!container) return;

    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);
    const handleMouseMoveGlobal = (e: MouseEvent) => handleGlobalMouseMove(e, container);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMoveGlobal);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveGlobal);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative min-h-[800px] bg-gradient-to-b from-blue-50/20 via-white to-white">
        {/* Background Slider - Full Section */}
        <div 
          className="absolute inset-0 select-none slider-container"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Before Image */}
          <div 
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)'
            }}
          >
            <img
              src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/b3441192-3577-427c-be48-68969c71a8ff.png"
              alt="До ремонта"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          {/* After Image with clip-path */}
          <div 
            className="absolute inset-0"
            style={{
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)'
            }}
          >
            <img
              src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/970de46a-7665-4831-b8f7-ffecc04d67de.png"
              alt="После ремонта"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute cursor-ew-resize z-20"
            style={{ 
              left: `${sliderPosition}%`,
              top: '12%',
              bottom: '12%'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Vertical line with fade effect */}
            <div 
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] shadow-2xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 8%, rgba(255,255,255,1) 92%, rgba(255,255,255,0) 100%)'
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize">
              <div className="flex gap-1">
                <Icon name="ChevronLeft" size={20} className="text-gray-700" />
                <Icon name="ChevronRight" size={20} className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Overlay - Centered and positioned higher */}
        <div className="relative z-10 flex flex-col items-center justify-start min-h-[800px] px-8 pt-16">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            {/* MER Badge - Compact design */}
            <div className="inline-flex items-center gap-3">
              <div className="bg-gradient-to-b from-gray-200 to-gray-300 text-black text-[16px] font-black px-6 py-2 rounded-full border-2 border-gray-400 shadow-md">
                MER
              </div>
              <span className="text-[14px] text-[#000000] font-normal">Работаем по протоколу</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[50px] leading-[1.2] font-normal">
              <span className="text-[#000000]">Новый рассвет </span>
              <span className="text-[#0033CC] font-bold">вашего</span>
              <span className="text-[#000000] font-bold"> двигателя</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-2">
              <p className="text-[20px] leading-[1.2]">
                <span className="text-[#0033CC] font-semibold">Re:New Engine.</span>
                <span className="text-[#000000]"> Инженерное восстановление стационарных двигателей</span>
              </p>
              <p className="text-[20px] text-[#000000] font-semibold leading-[1.2]">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center pt-4">
              <Button
                onClick={onContactClick}
                className="bg-[#0033CC] hover:bg-[#0029a3] text-white text-[13px] font-medium px-8 h-[52px] rounded-[10px] shadow-lg transition-all"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 border-2 border-[#0033CC] text-[#0033CC] hover:text-[#0029a3] text-[13px] font-medium px-8 h-[52px] rounded-[10px] uppercase tracking-wide transition-all"
              >
                <Icon name="Play" size={16} className="mr-2" />
                СМОТРЕТЬ РАБОТЫ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Keep Current Slider */}
      <div className="lg:hidden">
        <div className="relative px-4 py-12">
          <div className="space-y-8">
            {/* MER Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm">
                <div className="bg-gray-800 text-white text-[11px] font-bold px-2.5 py-1.5 rounded tracking-wide">
                  MER
                </div>
                <span className="text-[11px] text-[#000000]">Работаем по протоколу</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-[36px] leading-[1.2] font-normal text-center">
              <span className="text-[#000000]">Новый рассвет </span>
              <span className="text-[#0033CC] font-bold">вашего</span>
              <span className="text-[#000000] font-bold"> двигателя</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-2 text-center">
              <p className="text-[18px] leading-relaxed">
                <span className="text-[#0033CC] font-semibold">Re:New Engine.</span>
                <span className="text-[#000000]"> Инженерное восстановление стационарных двигателей</span>
              </p>
              <p className="text-[18px] text-[#000000] leading-relaxed">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <Button
                onClick={onContactClick}
                className="bg-[#0033CC] hover:bg-[#0029a3] text-white text-[16px] font-medium h-[48px] rounded-[10px] shadow-lg w-full"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 border-2 border-[#0033CC] text-[#0033CC] text-[16px] font-medium h-[48px] rounded-[10px] uppercase tracking-wide w-full"
              >
                <Icon name="Play" size={16} className="mr-2" />
                СМОТРЕТЬ РАБОТЫ
              </Button>
            </div>

            {/* Comparison Slider */}
            <div className="mt-8">
              <ComparisonSlider
                beforeImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3a80a092-b801-4783-beaa-cda72bd137cb.png"
                afterImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3e0d87d7-c86b-4eaa-937c-57339fe93cbc.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}