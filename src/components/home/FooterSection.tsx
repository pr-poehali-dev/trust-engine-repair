import Icon from '@/components/ui/icon';

export default function FooterSection() {
  return (
    <footer className="relative bg-white text-gray-900 py-12 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto" />
              <span className="text-xs text-gray-600 font-medium">
                Новая жизнь вашего двигателя
              </span>
            </div>
            <p className="text-gray-600">
              Профессиональный ремонт стационарных двигателей с гарантией качества
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Услуги</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Ремонт Volvo Penta</li>
              <li>Ремонт Mercruiser</li>
              <li>Ремонт Indmar</li>
              <li>Ремонт Yamaha</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Информация</h3>
            <ul className="space-y-2 text-gray-600">
              <li>О компании</li>
              <li>Гарантии</li>
              <li>Сертификаты</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg text-gray-900">Контакты</h3>
            <div className="space-y-3 text-gray-700 text-base">
              <p className="flex items-center gap-2">
                <Icon name="PhoneCall" size={20} className="text-primary" />
                <a href="tel:+79995550012" className="hover:text-gray-900 transition-colors">
                  +7 (999) 555-00-12
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="AtSign" size={20} className="text-primary" />
                <a href="mailto:info@red-mar.ru" className="hover:text-gray-900 transition-colors">
                  info@red-mar.ru
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Navigation" size={20} className="text-primary" />
                <span>М.О. г.Домодедово Объездное шоссе вл.1 стр.6</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Redmar.pro. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}