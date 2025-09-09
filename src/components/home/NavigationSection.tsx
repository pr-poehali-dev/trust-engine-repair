import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import MobileMenu from '@/components/MobileMenu';

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
  return (
    <nav className="bg-white shadow-sm border-b border-jivo-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto sm:h-8 sm:w-auto" />
            <span className="hidden sm:block text-brand-gray-600 font-medium text-xs">
              Новая жизнь вашего двигателя
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#services" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px] flex items-center gap-1">
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
                  <a href="#services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Icon name="Package" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">Лонг-блоки</div>
                      <div className="text-sm text-gray-500">Готовые решения</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a href="#why-us" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
              Почему мы
            </a>
            <Link to="/projects" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
              Наши работы
            </Link>
            <a href="#guarantees" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
              Гарантии
            </a>
            <a href="#contacts" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
              Контакты
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              className="hidden sm:flex bg-primary hover:bg-brand-blue-dark text-white font-medium px-6 py-2.5 rounded-xl"
              onClick={onContactClick}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
            
            <MobileMenu 
              isOpen={mobileMenuOpen} 
              onToggle={onMobileMenuToggle}
              onContactClick={onContactClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}