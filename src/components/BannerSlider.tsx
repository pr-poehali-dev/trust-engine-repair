import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface BannerSliderProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function BannerSlider({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 4000 
}: BannerSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg group">
      {/* Slides */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Профессиональный морской сервис ${index + 1}`}
              className="w-full h-full object-cover hdr-image professional-transition"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            
            {/* Многослойные HDR градиентные overlay для максимального эффекта */}
            <div className="absolute inset-0 hdr-overlay-primary"></div>
            <div className="absolute inset-0 hdr-overlay-secondary"></div>
            <div className="absolute inset-0 hdr-overlay-tertiary"></div>
            
            {/* Интерактивный HDR эффект при hover */}
            <div className="absolute inset-0 hdr-overlay-hover group-hover:opacity-100"></div>
            
            {/* Дополнительный слой для глубины и атмосферы */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-2 rounded-full group"
        aria-label="Предыдущий слайд"
      >
        <Icon 
          name="ChevronLeft" 
          size={20} 
          className="text-white group-hover:text-white/90" 
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-2 rounded-full group"
        aria-label="Следующий слайд"
      >
        <Icon 
          name="ChevronRight" 
          size={20} 
          className="text-white group-hover:text-white/90" 
        />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-marine-dark/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
}