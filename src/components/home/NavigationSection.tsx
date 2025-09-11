import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import MobileMenu from '@/components/MobileMenu';
import SearchModal from '@/components/SearchModal';

interface NavigationSectionProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  onContactClick: () => void;
}

export default function NavigationSection({ 
  mobileMenuOpen, 
  onMobileMenuToggle, 
  onContactClick 
}: NavigationSectionProps) {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Обработка горячих клавиш
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      setSearchOpen(true);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-jivo-gray-200 sticky top-0 z-[99998]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Логотип с адаптивным слоганом - сдвинут правее, увеличен на 15% */}
          <div className="flex items-center min-w-0 ml-3 sm:ml-4">
            {location.pathname === '/' ? (
              <div className="flex items-center gap-2 lg:gap-4">
                <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto sm:h-8 lg:h-9 flex-shrink-0" />
                <span className="hidden xl:block text-brand-gray-600 font-medium text-xs whitespace-nowrap">
                  Новая жизнь вашего двигателя
                </span>
              </div>
            ) : (
              <Link to="/" className="flex items-center gap-2 lg:gap-4 hover:opacity-80 transition-opacity">
                <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto sm:h-8 lg:h-9 flex-shrink-0" />
                <span className="hidden xl:block text-brand-gray-600 font-medium text-xs whitespace-nowrap">
                  Новая жизнь вашего двигателя
                </span>
              </Link>
            )}
          </div>
          
          {/* Главное меню с адаптивными отступами */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
            <div className="relative group">
              <a href="#services" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-sm lg:text-[15px] flex items-center gap-1 whitespace-nowrap">
                Услуги
                <Icon name="ChevronDown" size={14} className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link 
                    to="/services/restore" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Icon name="RefreshCw" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">Восстановление под ключ</div>
                      <div className="text-sm text-gray-500">Полный цикл ремонта</div>
                    </div>
                  </Link>
                  <a href="#services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Icon name="Search" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">Диагностика</div>
                      <div className="text-sm text-gray-500">Комплексная проверка</div>
                    </div>
                  </a>
                  <Link 
                    to="/services/longblocks" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Icon name="Package" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">Лонг-блоки</div>
                      <div className="text-sm text-gray-500">Готовые решения</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <a href="#why-us" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-sm lg:text-[15px] whitespace-nowrap">
              Почему мы
            </a>
            <Link 
              to="/projects" 
              className={`font-medium transition-colors text-sm lg:text-[15px] whitespace-nowrap ${
                isActive('/projects') ? 'text-primary border-b-2 border-primary pb-1' : 'text-brand-gray-700 hover:text-primary'
              }`}
            >
              Работы
            </Link>
            <a href="#guarantees" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-sm lg:text-[15px] whitespace-nowrap">
              Гарантии
            </a>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors text-sm lg:text-[15px] whitespace-nowrap ${
                isActive('/contact') ? 'text-primary border-b-2 border-primary pb-1' : 'text-brand-gray-700 hover:text-primary'
              }`}
            >
              Контакты
            </Link>
          </div>
          
          {/* Правая группа элементов с компактным размещением */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            {/* Search Button - компактный на средних экранах */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-1 lg:gap-2 text-gray-600 hover:text-primary hover:bg-gray-50 px-2 lg:px-3 py-2"
              onClick={() => setSearchOpen(true)}
              onKeyDown={handleKeyDown}
            >
              <Icon name="Search" size={16} />
              <span className="hidden lg:block text-sm whitespace-nowrap">Поиск</span>
            </Button>

            {/* Контактная кнопка - адаптивный текст */}
            <Button 
              className="hidden sm:flex bg-primary hover:bg-brand-blue-dark text-white font-medium px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl text-sm lg:text-base"
              onClick={onContactClick}
            >
              <Icon name="Phone" size={16} className="mr-1 lg:mr-2" />
              <span className="hidden md:inline lg:hidden">Звонок</span>
              <span className="hidden lg:inline">Связаться</span>
              <span className="md:hidden">Звонок</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 hover:bg-jivo-gray-100"
              onClick={onMobileMenuToggle}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-jivo-gray-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onToggle={onMobileMenuToggle}
        onContactClick={onContactClick}
      />
    </nav>
  );
}