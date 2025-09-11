interface SectionTitleProps {
  text: string;
  className?: string;
}

export default function SectionTitle({ text, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="flex items-center w-full max-w-4xl">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
        <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
          <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">{text}</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
      </div>
    </div>
  );
}