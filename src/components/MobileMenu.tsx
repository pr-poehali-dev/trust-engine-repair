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
          <div className="fixed inset-0 bg-white z-[9999] md:hidden transform transition-transform duration-300 ease-out">
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
            <nav className="flex-1 flex flex-col justify-center px-6 py-12">
              <div className="flex flex-col space-y-4 max-w-sm mx-auto w-full">
                <div>
                  <a 
                    href="#services" 
                    className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-5 px-6 rounded-2xl font-semibold text-lg block"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-4">
                      <Icon name="Settings" size={24} className="text-gray-600" />
                      <span>Услуги</span>
                      <Icon name="ChevronRight" size={20} className="text-gray-400 ml-auto" />
                    </div>
                  </a>
                  
                  {/* Submenu */}
                  <div className="ml-8 mt-2 space-y-2">
                    <a 
                      href="/services/restore"
                      className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-4 rounded-xl text-base block"
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="RefreshCw" size={18} className="text-gray-500" />
                        <span>Восстановление под ключ</span>
                      </div>
                    </a>
                    <a 
                      href="/services/repair" 
                      className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-4 rounded-xl text-base block"
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="Wrench" size={18} className="text-gray-500" />
                        <span>Ремонт двигателей</span>
                      </div>
                    </a>
                    <a 
                      href="/services/longblocks" 
                      className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-4 rounded-xl text-base block"
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="Package" size={18} className="text-gray-500" />
                        <span>Лонг-блоки</span>
                      </div>
                    </a>
                  </div>
                </div>
                <a 
                  href="#why-us" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-5 px-6 rounded-2xl font-semibold text-lg block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-4">
                    <Icon name="Award" size={24} className="text-gray-600" />
                    <span>Почему мы</span>
                  </div>
                </a>
                <a 
                  href="/projects" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-5 px-6 rounded-2xl font-semibold text-lg block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-4">
                    <Icon name="Image" size={24} className="text-gray-600" />
                    <span>Наши работы</span>
                  </div>
                </a>
                <a 
                  href="#guarantees" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-5 px-6 rounded-2xl font-semibold text-lg block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-4">
                    <Icon name="Shield" size={24} className="text-gray-600" />
                    <span>Гарантии</span>
                  </div>
                </a>
                <a 
                  href="/contact" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-5 px-6 rounded-2xl font-semibold text-lg block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-gray-600" />
                    <span>Контакты</span>
                  </div>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Button 
                  className="w-full bg-primary hover:bg-brand-blue-dark text-white font-bold py-4 text-lg rounded-2xl shadow-lg"
                  onClick={() => {
                    onContactClick();
                    handleLinkClick();
                  }}
                >
                  <Icon name="Phone" size={20} className="mr-3" />
                  Связаться с нами
                </Button>
                <p className="text-center text-gray-500 mt-4 font-medium">
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