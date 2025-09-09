import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Очищаем при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onToggle();
    // Небольшая задержка для плавного закрытия меню
    setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 300);
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden p-2 hover:bg-jivo-gray-100 relative z-50"
        onClick={onToggle}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} className="text-jivo-gray-700" />
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
            onClick={onToggle} 
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-jivo-gray-200">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto" />
                <span className="text-sm text-jivo-gray-600 font-medium">RED MAR</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onToggle}
                className="hover:bg-jivo-gray-100 p-2"
                aria-label="Закрыть меню"
              >
                <Icon name="X" size={20} className="text-jivo-gray-700" />
              </Button>
            </div>
            
            {/* Navigation */}
            <nav className="p-6 flex-1 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <a 
                  href="#services" 
                  className="text-jivo-gray-700 hover:text-primary hover:bg-jivo-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Settings" size={20} className="text-jivo-gray-400" />
                    Услуги
                  </div>
                </a>
                <a 
                  href="#why-us" 
                  className="text-jivo-gray-700 hover:text-primary hover:bg-jivo-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={20} className="text-jivo-gray-400" />
                    Почему мы
                  </div>
                </a>
                <a 
                  href="#gallery" 
                  className="text-jivo-gray-700 hover:text-primary hover:bg-jivo-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Image" size={20} className="text-jivo-gray-400" />
                    Наши работы
                  </div>
                </a>
                <a 
                  href="#guarantees" 
                  className="text-jivo-gray-700 hover:text-primary hover:bg-jivo-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} className="text-jivo-gray-400" />
                    Гарантии
                  </div>
                </a>
                <a 
                  href="#contacts" 
                  className="text-jivo-gray-700 hover:text-primary hover:bg-jivo-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-jivo-gray-400" />
                    Контакты
                  </div>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-jivo-gray-200">
                <Button 
                  className="w-full bg-primary hover:bg-jivo-green-dark text-white font-semibold py-3 rounded-xl shadow-lg"
                  onClick={handleLinkClick}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с нами
                </Button>
                <p className="text-center text-sm text-jivo-gray-500 mt-3">
                  Получите бесплатную консультацию
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}