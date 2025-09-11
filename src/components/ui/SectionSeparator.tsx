interface SectionSeparatorProps {
  text: string;
  position?: 'top' | 'bottom';
  theme?: 'light' | 'light-to-gray' | 'gray-to-blue' | 'blue-to-light' | 'dark';
}

export default function SectionSeparator({ text, position = 'bottom', theme = 'light' }: SectionSeparatorProps) {
  // Простое позиционирование как отдельный блок между секциями
  const positionClass = 'relative z-50 w-full py-8';
  
  // Выбор стилей в зависимости от темы
  const getThemeStyles = () => {
    switch (theme) {
      case 'light-to-gray':
        return {
          badge: 'bg-gradient-to-r from-white via-gray-50 to-white border-gray-200',
          text: 'text-gray-700',
          lineLeft: 'bg-gradient-to-r from-transparent via-gray-200 to-gray-300',
          lineRight: 'bg-gradient-to-r from-gray-300 via-gray-200 to-transparent'
        };
      case 'gray-to-blue':
        return {
          badge: 'bg-gradient-to-r from-gray-50 via-blue-50 to-blue-100 border-blue-200',
          text: 'text-blue-700',
          lineLeft: 'bg-gradient-to-r from-transparent via-gray-300 to-blue-300',
          lineRight: 'bg-gradient-to-r from-blue-300 via-gray-300 to-transparent'
        };
      case 'blue-to-light':
        return {
          badge: 'bg-gradient-to-r from-blue-50 via-white to-primary/5 border-primary/30',
          text: 'text-primary',
          lineLeft: 'bg-gradient-to-r from-transparent via-blue-300 to-primary/40',
          lineRight: 'bg-gradient-to-r from-primary/40 via-blue-300 to-transparent'
        };
      case 'dark':
        return {
          badge: 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-gray-600',
          text: 'text-white',
          lineLeft: 'bg-gradient-to-r from-transparent via-gray-600 to-gray-500',
          lineRight: 'bg-gradient-to-r from-gray-500 via-gray-600 to-transparent'
        };
      default: // 'light'
        return {
          badge: 'bg-white border-primary/20',
          text: 'text-primary',
          lineLeft: 'bg-gradient-to-r from-transparent via-primary/20 to-primary/40',
          lineRight: 'bg-gradient-to-r from-primary/40 via-primary/20 to-transparent'
        };
    }
  };
  
  const styles = getThemeStyles();

  return (
    <div className={positionClass}>
      <div className="flex items-center w-full max-w-4xl mx-auto px-4">
        <div className={`flex-1 h-px ${styles.lineLeft}`}></div>
        <div className={`px-4 sm:px-8 py-3 ${styles.badge} rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 mx-4`}>
          <span className={`text-sm font-bold ${styles.text} uppercase tracking-wide whitespace-nowrap`}>
            {text}
          </span>
        </div>
        <div className={`flex-1 h-px ${styles.lineRight}`}></div>
      </div>
    </div>
  );
}