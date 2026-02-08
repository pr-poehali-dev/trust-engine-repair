import { useState, useRef, useEffect } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const isSlidingRef = useRef(false);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isSlidingRef.current = true;
    updateSliderPosition(e.clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    isSlidingRef.current = true;
    updateSliderPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isSlidingRef.current) return;
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSlidingRef.current) return;
      updateSliderPosition(e.touches[0].clientX);
    };

    const handleEnd = () => {
      isSlidingRef.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none cursor-ew-resize ${className}`}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
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
          bottom: '8%',
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