interface SectionSeparatorProps {
  text: string;
  position?: 'top' | 'bottom';
  theme?: 'light' | 'light-to-gray' | 'gray-to-blue' | 'blue-to-light' | 'dark';
}

export default function SectionSeparator({ text, position = 'bottom', theme = 'light' }: SectionSeparatorProps) {
  // Позиционирование точно между секциями
  const positionClass = position === 'top' 
    ? 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full' 
    : 'relative z-50 w-full flex items-center justify-center h-0 -my-8';
  
  // Выбор стилей в зависимости от темы
  const getThemeStyles = () => {
    switch (theme) {
      case 'light-to-gray':
        return {
          badge: 'bg-gradient-to-r from-white via-gray-50 to-white border-gray-200',
          text: 'text-gray-700',
          line: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200'
        };
      case 'gray-to-blue':
        return {
          badge: 'bg-gradient-to-r from-gray-50 via-blue-50 to-blue-100 border-blue-200',
          text: 'text-blue-700',
          line: 'bg-gradient-to-r from-gray-300 via-blue-300 to-blue-400'
        };
      case 'blue-to-light':
        return {
          badge: 'bg-gradient-to-r from-blue-50 via-white to-primary/5 border-primary/30',
          text: 'text-primary',
          line: 'bg-gradient-to-r from-blue-300 via-primary/40 to-primary'
        };
      case 'dark':
        return {
          badge: 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-gray-600',
          text: 'text-white',
          line: 'bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600'
        };
      default: // 'light'
        return {
          badge: 'bg-white border-primary/20',
          text: 'text-primary',
          line: 'bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary'
        };
    }
  };
  
  const styles = getThemeStyles();

  return (
    <div className={positionClass}>
      <div className="flex items-center w-full max-w-4xl mx-auto px-4">
        <div className={`flex-1 h-px ${styles.line}`}></div>
        <div className={`px-4 sm:px-8 py-3 ${styles.badge} rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 mx-4`}>
          <span className={`text-sm font-bold ${styles.text} uppercase tracking-wide whitespace-nowrap`}>
            {text}
          </span>
        </div>
        <div className={`flex-1 h-px ${styles.line}`}></div>
      </div>
    </div>
  );
}