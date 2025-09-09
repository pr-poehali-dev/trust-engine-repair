import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onContactClick: () => void;
}

export default function MobileMenu({ isOpen, onToggle, onContactClick }: MobileMenuProps) {
  // Простая блокировка скролла без смещения
  useEffect(() => {
    if (isOpen) {
      // Просто блокируем скролл
      document.body.style.overflow = 'hidden';
    } else {
      // Восстанавливаем скролл
      document.body.style.overflow = '';
    }

    // Очищаем при размонтировании
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onToggle();
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
          {/* Background overlay - только под меню */}
          <div 
            className="fixed inset-0 bg-black/80 z-[9998] md:hidden transition-opacity duration-300" 
            onClick={onToggle} 
            aria-hidden="true"
          />
          
          {/* Menu panel - цельная панель с навигацией */}
          <div className="fixed inset-0 bg-white z-[99999] md:hidden animate-in fade-in duration-300">
            {/* Навигационная полоса с логотипом и кнопкой закрытия */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 ml-3">
                <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto" />
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onToggle}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Закрыть меню"
              >
                <Icon name="X" size={24} className="text-gray-700" />
              </Button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-start px-6 pt-8 pb-8 overflow-y-auto">
              <div className="flex flex-col space-y-3 max-w-sm mx-auto w-full">
                <div>
                  <a 
                    href="#services" 
                    className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-5 rounded-xl font-medium text-base block"
                    onClick={handleLinkClick}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="Settings" size={20} className="text-gray-600" />
                      <span>Услуги</span>
                      <Icon name="ChevronRight" size={16} className="text-gray-400 ml-auto" />
                    </div>
                  </a>
                  
                  {/* Submenu */}
                  <div className="ml-6 mt-1 space-y-1">
                    <a 
                      href="/services/restore"
                      className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-2 px-3 rounded-lg text-sm block"
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-2">
                        <Icon name="RefreshCw" size={16} className="text-gray-500" />
                        <span>Восстановление под ключ</span>
                      </div>
                    </a>
                    <a 
                      href="/services/repair" 
                      className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-2 px-3 rounded-lg text-sm block"
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-2">
                        <Icon name="Wrench" size={16} className="text-gray-500" />
                        <span>Ремонт двигателей</span>
                      </div>
                    </a>
                    <a 
                      href="/services/longblocks" 
                      className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-2 px-3 rounded-lg text-sm block"
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-2">
                        <Icon name="Package" size={16} className="text-gray-500" />
                        <span>Лонг-блоки</span>
                      </div>
                    </a>
                  </div>
                </div>
                <a 
                  href="#why-us" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-5 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={20} className="text-gray-600" />
                    <span>Почему мы</span>
                  </div>
                </a>
                <a 
                  href="/projects" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-5 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Image" size={20} className="text-gray-600" />
                    <span>Наши работы</span>
                  </div>
                </a>
                <a 
                  href="#guarantees" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-5 rounded-xl font-medium text-base block"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} className="text-gray-600" />
                    <span>Гарантии</span>
                  </div>
                </a>
                <a 
                  href="/contact" 
                  className="text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 py-4 px-5 rounded-xl font-medium text-base block"
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
                  className="w-full bg-primary hover:bg-brand-blue-dark text-white font-medium py-3 text-base rounded-xl shadow-md"
                  onClick={() => {
                    onContactClick();
                    handleLinkClick();
                  }}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с нами
                </Button>
                <p className="text-center text-gray-500 mt-3 text-sm">
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