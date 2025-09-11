import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onContactClick: () => void;
}

export default function MobileMenu({ isOpen, onToggle, onContactClick }: MobileMenuProps) {
  // Блокировка скролла основного контента, но не шапки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onToggle();
  };

  return (
    <>
      {/* Mobile menu overlay */}
      {isOpen && createPortal(
        <>
          {/* Background overlay - начинается под шапкой */}
          <div 
            className="fixed bg-black/80 z-[9998] md:hidden transition-opacity duration-300" 
            onClick={onToggle} 
            aria-hidden="true"
            style={{ position: 'fixed', top: 'calc(4rem + 1px)', left: 0, right: 0, bottom: 0 }}
          />
          
          {/* Menu panel - начинается под шапкой без щели */}
          <div 
            className="fixed bg-white z-[99999] md:hidden animate-in fade-in duration-300 overflow-y-auto shadow-xl"
            style={{ position: 'fixed', top: 'calc(4rem + 1px)', left: 0, right: 0, bottom: 0 }}
          >
            
            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-start px-6 pt-4 pb-8 overflow-y-auto">
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
        </>,
        document.body
      )}
    </>
  );
}