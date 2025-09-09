import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-marine-light to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Icon name="Anchor" size={32} className="text-primary" />
              <span className="text-xl font-bold text-slate-900">REDMAR
</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-marine-steel hover:text-primary transition-colors">Услуги</a>
              <a href="#why-us" className="text-marine-steel hover:text-primary transition-colors">Почему мы</a>
              <a href="#gallery" className="text-marine-steel hover:text-primary transition-colors">Наши работы</a>
              <a href="#guarantees" className="text-marine-steel hover:text-primary transition-colors">Гарантии</a>
              <a href="#contacts" className="text-marine-steel hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-marine-blue/10 text-marine-blue border-marine-blue/20">
                  Профессиональный ремонт морских двигателей
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-marine-dark leading-tight">
                  Надёжный сервис для вашего
                  <span className="text-primary block">двигателя</span>
                </h1>
                <p className="text-xl text-marine-steel mt-6 leading-relaxed">
                  Специализируемся на ремонте и восстановлении стационарных двигателей 
                  Volvo Penta, Mercruiser, Indmar, Yamaha. Более 15 лет опыта.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Wrench" size={20} className="mr-2" />
                  Заказать диагностику
                </Button>
                <Button variant="outline" size="lg" className="border-marine-steel text-marine-steel hover:bg-marine-light">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/901b53aa-5588-4611-802b-1887c933be25.jpg" 
                alt="Профессиональный ремонт морских двигателей"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-marine-dark mb-4">Наши услуги</h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию морских двигателей ведущих производителей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { brand: 'Volvo Penta', icon: 'Cog', color: 'bg-blue-50 text-blue-600' },
              { brand: 'Mercruiser', icon: 'Settings', color: 'bg-green-50 text-green-600' },
              { brand: 'Indmar', icon: 'Wrench', color: 'bg-orange-50 text-orange-600' },
              { brand: 'Yamaha', icon: 'Hammer', color: 'bg-purple-50 text-purple-600' }
            ].map((service) => (
              <Card key={service.brand} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={service.icon} size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.brand}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-marine-steel mb-4">Полный ремонт и обслуживание</p>
                  <ul className="text-sm text-marine-steel space-y-1">
                    <li>• Диагностика двигателя</li>
                    <li>• Капитальный ремонт</li>
                    <li>• Замена запчастей</li>
                    <li>• Настройка системы</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 bg-marine-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-marine-dark mb-8">Почему выбирают нас</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: 'Award',
                    title: '15+ лет опыта',
                    description: 'Успешно восстановили более 500 морских двигателей'
                  },
                  {
                    icon: 'Shield',
                    title: 'Официальные запчасти',
                    description: 'Работаем только с оригинальными комплектующими'
                  },
                  {
                    icon: 'Clock',
                    title: 'Быстрые сроки',
                    description: 'Стандартный ремонт выполняем за 3-5 рабочих дней'
                  },
                  {
                    icon: 'Users',
                    title: 'Сертифицированные мастера',
                    description: 'Команда профессионалов с международными сертификатами'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-marine-dark mb-2">{item.title}</h3>
                      <p className="text-marine-steel">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/69551f2d-ae28-47dc-8b0c-008881fafee8.jpg" 
                alt="Современное оборудование для ремонта двигателей"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-marine-dark mb-4">Наши работы</h2>
            <p className="text-xl text-marine-steel max-w-2xl mx-auto">
              Примеры успешно выполненных проектов по восстановлению морских двигателей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Volvo Penta D6-350', type: 'Капитальный ремонт', status: 'Завершено' },
              { title: 'Mercruiser 5.7L', type: 'Замена поршневой', status: 'Завершено' },
              { title: 'Yamaha 6.2L', type: 'Модернизация системы', status: 'Завершено' },
              { title: 'Indmar Raptor 6.0L', type: 'Восстановление блока', status: 'Завершено' },
              { title: 'Volvo Penta D4-180', type: 'Ремонт турбины', status: 'Завершено' },
              { title: 'Mercruiser 6.2L', type: 'Полное восстановление', status: 'Завершено' }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-50 text-green-600">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-marine-light h-32 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Camera" size={32} className="text-marine-steel" />
                  </div>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20 px-4 bg-marine-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Гарантии качества</h2>
          <p className="text-xl text-marine-light/80 mb-12 max-w-3xl mx-auto">
            Мы настолько уверены в качестве наших услуг, что предоставляем расширенные гарантии
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: '2 года гарантии',
                description: 'На все виды капитального ремонта двигателей'
              },
              {
                icon: 'RefreshCw',
                title: 'Бесплатное ТО',
                description: 'Первое техническое обслуживание за наш счёт'
              },
              {
                icon: 'Headphones',
                title: '24/7 поддержка',
                description: 'Круглосуточная техническая поддержка'
              }
            ].map((guarantee) => (
              <div key={guarantee.title} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={guarantee.icon} size={32} className="text-marine-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{guarantee.title}</h3>
                <p className="text-marine-light/70">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-marine-dark mb-8">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-marine-dark">Телефон</p>
                    <p className="text-marine-steel">+7 (xxx) xxx-xx-xx</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-marine-dark">Email</p>
                    <p className="text-marine-steel">info@marineservice.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-marine-dark">Адрес</p>
                    <p className="text-marine-steel">г. Москва, ул. Морская, д. 15</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-marine-dark">Режим работы</p>
                    <p className="text-marine-steel">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Опишите проблему с двигателем..." rows={4} />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-marine-steel text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-marine-dark text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Anchor" size={24} className="text-marine-accent" />
                <span className="text-lg font-bold">MarineService</span>
              </div>
              <p className="text-marine-light/70">
                Профессиональный ремонт морских двигателей с гарантией качества
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-marine-light/70">
                <li>Ремонт Volvo Penta</li>
                <li>Ремонт Mercruiser</li>
                <li>Ремонт Indmar</li>
                <li>Ремонт Yamaha</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-marine-light/70">
                <li>О компании</li>
                <li>Гарантии</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-marine-light/70">
                <p>+7 (xxx) xxx-xx-xx</p>
                <p>info@marineservice.ru</p>
                <p>г. Москва, ул. Морская, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-marine-steel/20 mt-8 pt-8 text-center">
            <p className="text-marine-light/50">
              © 2024 MarineService. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}