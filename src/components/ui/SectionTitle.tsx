interface SectionTitleProps {
  text: string;
  className?: string;
}

export default function SectionTitle({ text, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex justify-center mb-12 ${className}`}>
      <div className="px-6 py-3 bg-white border-2 border-primary/20 rounded-full shadow-lg hover:border-primary/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
        <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
}