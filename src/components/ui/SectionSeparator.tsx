interface SectionSeparatorProps {
  text: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export default function SectionSeparator({ text, position = 'bottom', className = '' }: SectionSeparatorProps) {
  const positionClass = position === 'top' 
    ? 'absolute -top-8 left-1/2 transform -translate-x-1/2 z-30 w-full' 
    : 'absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full';

  return (
    <div className={`${positionClass} ${className}`}>
      <div className="flex items-center justify-center px-4">
        <div className="flex items-center w-full max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
          <div className="mx-4 sm:mx-8 px-4 sm:px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">
              {text}
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}