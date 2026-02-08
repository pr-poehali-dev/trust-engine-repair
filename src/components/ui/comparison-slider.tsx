import { useState, useRef } from 'react';

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
  className = '',
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleStart = (clientX: number) => {
    setIsSliding(true);
    updateSliderPosition(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isSliding) return;
    updateSliderPosition(clientX);
  };

  const handleEnd = () => {
    setIsSliding(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <img
        src={afterImage}
        alt="После"
        className="w-full h-auto block"
        draggable={false}
      />

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="До"
          className="w-full h-auto block"
          draggable={false}
        />
      </div>

      <div
        className="absolute w-1 bg-white"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          top: '12%',
          bottom: '12%',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-ew-resize">
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
