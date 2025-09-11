interface SectionSeparatorProps {
  text: string;
  position?: 'top' | 'bottom';
  theme?: 'light' | 'light-to-gray' | 'gray-to-blue' | 'blue-to-light' | 'dark';
}

export default function SectionSeparator({ text, position = 'bottom', theme = 'light' }: SectionSeparatorProps) {
  // Выбор стилей в зависимости от темы
  const getThemeStyles = () => {
    switch (theme) {
      case 'light-to-gray':
        return {
          badge: 'bg-white border-gray-300/50',
          badgeHover: 'hover:border-gray-400',
          text: 'text-gray-700',
          lineLeft: 'bg-gradient-to-r from-transparent via-gray-200 to-gray-300',
          lineRight: 'bg-gradient-to-r from-gray-300 via-gray-200 to-transparent'
        };
      case 'gray-to-blue':
        return {
          badge: 'bg-white border-blue-300/50',
          badgeHover: 'hover:border-blue-400',
          text: 'text-blue-700',
          lineLeft: 'bg-gradient-to-r from-transparent via-gray-300 to-blue-300',
          lineRight: 'bg-gradient-to-r from-blue-300 via-gray-300 to-transparent'
        };
      case 'blue-to-light':
        return {
          badge: 'bg-white border-primary/30',
          badgeHover: 'hover:border-primary/50',
          text: 'text-primary',
          lineLeft: 'bg-gradient-to-r from-transparent via-blue-300 to-primary/40',
          lineRight: 'bg-gradient-to-r from-primary/40 via-blue-300 to-transparent'
        };
      case 'dark':
        return {
          badge: 'bg-gray-800 border-gray-600',
          badgeHover: 'hover:border-gray-500',
          text: 'text-white',
          lineLeft: 'bg-gradient-to-r from-transparent via-gray-600 to-gray-500',
          lineRight: 'bg-gradient-to-r from-gray-500 via-gray-600 to-transparent'
        };
      default: // 'light'
        return {
          badge: 'bg-white border-primary/20',
          badgeHover: 'hover:border-primary/30',
          text: 'text-primary',
          lineLeft: 'bg-gradient-to-r from-transparent via-primary/20 to-primary/40',
          lineRight: 'bg-gradient-to-r from-primary/40 via-primary/20 to-transparent'
        };
    }
  };
  
  const styles = getThemeStyles();

  return (
    <div className="relative -my-px z-50">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center">
          <div className={`flex-1 h-px ${styles.lineLeft}`}></div>
          <div className={`px-4 sm:px-8 py-3 mx-4 ${styles.badge} ${styles.badgeHover} rounded-full border-2 shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
            <span className={`text-sm font-bold ${styles.text} uppercase tracking-wide whitespace-nowrap`}>
              {text}
            </span>
          </div>
          <div className={`flex-1 h-px ${styles.lineRight}`}></div>
        </div>
      </div>
      {/* Спейсер для сохранения вертикального пространства */}
      <div className="h-16"></div>
    </div>
  );
}