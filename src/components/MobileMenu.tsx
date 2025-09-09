import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden p-2"
        onClick={onToggle}
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} />
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onToggle} />
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="RED MAR" className="h-6 w-auto" />
              </div>
              <Button variant="ghost" size="sm" onClick={onToggle}>
                <Icon name="X" size={24} />
              </Button>
            </div>
            
            <nav className="p-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#services" 
                  className="text-jivo-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-jivo-gray-50"
                  onClick={onToggle}
                >
                  Услуги
                </a>
                <a 
                  href="#why-us" 
                  className="text-jivo-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-jivo-gray-50"
                  onClick={onToggle}
                >
                  Почему мы
                </a>
                <a 
                  href="#gallery" 
                  className="text-jivo-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-jivo-gray-50"
                  onClick={onToggle}
                >
                  Наши работы
                </a>
                <a 
                  href="#guarantees" 
                  className="text-jivo-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-jivo-gray-50"
                  onClick={onToggle}
                >
                  Гарантии
                </a>
                <a 
                  href="#contacts" 
                  className="text-jivo-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-jivo-gray-50"
                  onClick={onToggle}
                >
                  Контакты
                </a>
                
                <div className="pt-4 border-t">
                  <Button className="w-full bg-primary hover:bg-jivo-green-dark text-white">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}