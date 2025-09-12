export default function FooterSection() {
  return (
    <footer className="relative bg-white text-gray-900 py-12 px-4">
      {/* Декоративные геометрические элементы из GallerySection */}

      <div className="absolute z-0 bottom-12 right-12 w-46 h-46 bg-secondary/18 rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-1/5 right-1/5 w-32 h-32 rounded-xl blur-md" style={{ backgroundColor: 'hsl(220.85deg 100% 56.41% / 14%)' }}></div>
      <div className="absolute z-0 bottom-1/4 left-1/4 w-36 h-36 bg-secondary/22 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-3/5 left-8 w-28 h-28 bg-primary/18 rounded-lg blur-sm"></div>
      <div className="absolute z-0 top-1/2 right-1/6 w-24 h-24 bg-secondary/24 rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-2/3 left-2/3 w-20 h-20 bg-primary/21 rounded-2xl blur-md"></div>
      <div className="absolute z-0 top-10 right-1/3 w-44 h-44 bg-secondary/15 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-1/6 left-1/2 w-16 h-16 bg-primary/26 rounded-lg blur-md"></div>
      <div className="absolute z-0 top-1/3 right-6 w-38 h-38 bg-secondary/19 rounded-2xl blur-lg"></div>
      {/* Дополнительные элементы */}
      <div className="absolute z-0 top-1/8 left-5/6 w-22 h-22 bg-[#039fcb0d] rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-1/8 right-5/6 w-26 h-26 bg-primary/27 rounded-2xl blur-sm"></div>
      <div className="absolute z-0 top-7/8 left-1/8 w-34 h-34 bg-[#039fcb0d] rounded-lg blur-lg"></div>
      {/* Крупные элементы */}
      <div className="absolute z-0 top-2 left-24 w-32 h-32 bg-primary/16 rounded-3xl blur-2xl"></div>
      <div className="absolute z-0 top-0 right-32 w-28 h-28 bg-[#039fcb0d] rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-10 left-1/4 w-24 h-24 bg-primary/20 rounded-xl blur-lg"></div>
      <div className="absolute z-0 top-6 right-1/3 w-20 h-20 bg-[#039fcb0d] rounded-lg blur-md"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto" />
              <span className="text-xs text-gray-600 italic font-medium">
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
                <span>📞</span>
                <a href="tel:+79995550012" className="hover:text-gray-900 transition-colors">
                  +7 (999) 555-00-12
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@trust-engine.ru" className="hover:text-gray-900 transition-colors">
                  info@trust-engine.ru
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>г. Москва, ул. Морская, д. 15</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 MarineService. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}