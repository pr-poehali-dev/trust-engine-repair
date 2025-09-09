export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="RED MAR" className="h-7 w-auto" />
              <span className="text-xs text-white/70 italic font-medium">
                Новая жизнь вашего двигателя
              </span>
            </div>
            <p className="text-white/70">
              Профессиональный ремонт морских двигателей с гарантией качества
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/70">
              <li>Ремонт Volvo Penta</li>
              <li>Ремонт Mercruiser</li>
              <li>Ремонт Indmar</li>
              <li>Ремонт Yamaha</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-white/70">
              <li>О компании</li>
              <li>Гарантии</li>
              <li>Сертификаты</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-white/70">
              <p>+7 (xxx) xxx-xx-xx</p>
              <p>info@marineservice.ru</p>
              <p>г. Москва, ул. Морская, д. 15</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white/50">
            © 2024 MarineService. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}