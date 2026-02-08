import { useState, useRef } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  className = '',
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseDown={(e) => {
        updatePosition(e.clientX);
        const handleMove = (me: MouseEvent) => updatePosition(me.clientX);
        const handleUp = () => {
          document.removeEventListener('mousemove', handleMove);
          document.removeEventListener('mouseup', handleUp);
        };
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
      }}
      onTouchStart={(e) => {
        updatePosition(e.touches[0].clientX);
        const handleMove = (te: TouchEvent) => updatePosition(te.touches[0].clientX);
        const handleEnd = () => {
          document.removeEventListener('touchmove', handleMove);
          document.removeEventListener('touchend', handleEnd);
        };
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
      }}
      style={{ cursor: 'ew-resize', userSelect: 'none' }}
    >
      <img
        src={afterImage}
        alt="После"
        className="w-full h-auto block"
        draggable={false}
        style={{ pointerEvents: 'none' }}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ 
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          pointerEvents: 'none'
        }}
      >
        <img
          src={beforeImage}
          alt="До"
          className="w-full h-auto block"
          draggable={false}
        />
      </div>

      {/* Линия с эффектом затухания */}
      <div
        className="absolute"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          top: '12%',
          bottom: '8%',
          width: '2px',
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)'
        }}
      />

      {/* Иконка ползунка */}
      <div 
        className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
        style={{
          left: `${position}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M6 8L2 12L6 16" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      </div>
    </div>
  );
}