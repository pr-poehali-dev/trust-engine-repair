import { useState, useRef, useEffect, useCallback } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'До',
  afterLabel = 'После',
  className = '',
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none cursor-ew-resize ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
    >
      <img
        src={afterImage}
        alt={afterLabel}
        className="w-full h-auto pointer-events-none"
        draggable={false}
      />

      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute w-1 bg-white pointer-events-none"
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translateX(-50%)',
          top: '15%',
          bottom: '15%'
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}