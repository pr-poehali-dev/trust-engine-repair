import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ContactModal from '@/components/ContactModal';

export default function FloatingActionButton() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsContactModalOpen(true)}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
            Быстрая связь
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
        <a
          href="tel:+79995550012"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Icon name="Phone" size={20} />
        </a>
        
        <a
          href="mailto:info@trust-engine.ru"
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Icon name="Mail" size={20} />
        </a>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Быстрая связь"
        subtitle="Оставьте заявку и мы перезвоним в течение 15 минут"
      />
    </>
  );
}