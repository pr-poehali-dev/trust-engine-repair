import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onContactClick: () => void;
}

export default function MobileMenu({ isOpen, onToggle, onContactClick }: MobileMenuProps) {
  const [headerHeight, setHeaderHeight] = useState(65);

  // Динамическое вычисление высоты шапки
  useEffect(() => {
    const updateHeaderHeight = () => {
      const nav = document.querySelector('nav[class*="sticky"]');
      if (nav) {
        const height = nav.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Блокировка скролла при открытом меню
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

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Background overlay - только под шапкой */}
      <div 
        className="fixed bg-black/50 z-[9998] md:hidden transition-opacity duration-300"
        onClick={onToggle}
        aria-hidden="true"
        style={{ 
          top: `${headerHeight}px`, 
          left: 0, 
          right: 0, 
          bottom: 0 
        }}
      />
      
      {/* Menu panel */}
      <div 
        className="fixed bg-white z-[99999] md:hidden shadow-xl animate-in slide-in-from-top-2 duration-300"
        style={{ 
          top: `${headerHeight}px`, 
          left: 0, 
          right: 0, 
          bottom: 0 
        }}
      >
        {/* Navigation content */}
        <div className="h-full overflow-y-auto">
          <nav className="px-6 py-6">
            {/* Menu items */}
            <div className="space-y-1 max-w-sm mx-auto">
              
              {/* Services with submenu */}
              <div className="space-y-1">
                <Link 
                  to="/services" 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Settings" size={20} className="text-gray-600" />
                    <span className="font-medium text-gray-800">Услуги</span>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-gray-400" />
                </Link>
                
                {/* Submenu */}
                <div className="ml-6 space-y-1">
                  <Link 
                    to="/services/restore"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <Icon name="RefreshCw" size={16} className="text-primary" />
                    <span className="text-gray-600">Восстановление под ключ</span>
                  </Link>
                  <Link 
                    to="/services/repair" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <Icon name="Wrench" size={16} className="text-primary" />
                    <span className="text-gray-600">Ремонт двигателей</span>
                  </Link>
                  <Link 
                    to="/services/longblocks" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <Icon name="Package" size={16} className="text-primary" />
                    <span className="text-gray-600">Лонг-блоки</span>
                  </Link>
                </div>
              </div>

              {/* Why Us */}
              <Link 
                to="/#why-us" 
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={handleLinkClick}
              >
                <Icon name="Award" size={20} className="text-gray-600" />
                <span className="font-medium text-gray-800">Почему мы</span>
              </Link>

              {/* Our Works */}
              <Link 
                to="/projects" 
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={handleLinkClick}
              >
                <Icon name="Image" size={20} className="text-gray-600" />
                <span className="font-medium text-gray-800">Наши работы</span>
              </Link>

              {/* Guarantees */}
              <Link 
                to="/#guarantees" 
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={handleLinkClick}
              >
                <Icon name="Shield" size={20} className="text-gray-600" />
                <span className="font-medium text-gray-800">Гарантии</span>
              </Link>

              {/* Contacts */}
              <Link 
                to="/contact" 
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={handleLinkClick}
              >
                <Icon name="MapPin" size={20} className="text-gray-600" />
                <span className="font-medium text-gray-800">Контакты</span>
              </Link>
            </div>
            
            {/* CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-200 max-w-sm mx-auto">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 text-base rounded-xl shadow-lg"
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
              <a 
                href="tel:+79995550012"
                className="block text-center text-primary font-semibold mt-2 text-lg hover:text-primary/80 transition-colors"
                onClick={handleLinkClick}
              >
                +7 (999) 555-00-12
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>,
    document.body
  );
}