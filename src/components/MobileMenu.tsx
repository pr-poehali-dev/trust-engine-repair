import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onContactClick: () => void;
}

export default function MobileMenu({ isOpen, onToggle, onContactClick }: MobileMenuProps) {
  // Блокируем скролл при открытом меню без смещения контента
  useEffect(() => {
    if (isOpen) {
      // Вычисляем ширину скроллбара
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Применяем стили для предотвращения смещения
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // Также применяем к элементам с position: fixed
      const fixedElements = document.querySelectorAll('[class*="sticky"], [class*="fixed"]');
      fixedElements.forEach((el) => {
        (el as HTMLElement).style.paddingRight = `${scrollbarWidth}px`;
      });
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      
      // Убираем padding с fixed элементов
      const fixedElements = document.querySelectorAll('[class*="sticky"], [class*="fixed"]');
      fixedElements.forEach((el) => {
        (el as HTMLElement).style.paddingRight = '';
      });
    }

    // Очищаем при размонтировании
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const fixedElements = document.querySelectorAll('[class*="sticky"], [class*="fixed"]');
      fixedElements.forEach((el) => {
        (el as HTMLElement).style.paddingRight = '';
      });
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
        className="md:hidden p-2 hover:bg-jivo-gray-100"
        onClick={onToggle}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} className="text-jivo-gray-700" />
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/80 z-[9998] md:hidden transition-opacity duration-300" 
            onClick={onToggle} 
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl z-[9999] md:hidden transform transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto" />
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onToggle}
                className="hover:bg-gray-100 p-3"
                aria-label="Закрыть меню"
              >
                <Icon name="X" size={24} className="text-gray-700" />
              </Button>
            </div>
            
            {/* Navigation */}
            <nav className="p-6 flex-1 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <a 
                  href="#services" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Settings" size={20} className="text-gray-600" />
                    <span>Услуги</span>
                  </div>
                </a>
                <a 
                  href="#why-us" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={20} className="text-gray-600" />
                    <span>Почему мы</span>
                  </div>
                </a>
                <a 
                  href="#gallery" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Image" size={20} className="text-gray-600" />
                    <span>Наши работы</span>
                  </div>
                </a>
                <a 
                  href="#guarantees" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} className="text-gray-600" />
                    <span>Гарантии</span>
                  </div>
                </a>
                <a 
                  href="#contacts" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-gray-600" />
                    <span>Контакты</span>
                  </div>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button 
                  className="w-full bg-primary hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl shadow-lg"
                  onClick={() => {
                    onContactClick();
                    handleLinkClick();
                  }}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с нами
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Получите бесплатную консультацию
                </p>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}