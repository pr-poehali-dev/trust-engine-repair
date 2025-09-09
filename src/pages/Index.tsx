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
            <div className="flex items-center gap-3">
              <svg width="120" height="28" viewBox="0 0 124.771 30.07" className="h-10 md:h-8 w-auto">
                <rect x="62.611" y="2.068" fill="#1967D2" width="53.578" height="25.933"/>
                <rect x="8.586" y="2.068" fill="#E21D3D" width="52.48" height="25.933"/>
                <g>
                  <path fill="#FFFFFF" d="M67.16,6.875h4.069l3.386,7.868l3.411-7.868h4.067v16.093H78l0.024-4.638l0.25-3.249l-0.137-0.022
                    l-2.114,5.522h-2.795l-2.159-5.524l-0.115,0.023l0.274,3.25v4.638H67.16V6.875z"/>
                  <path fill="#FFFFFF" d="M98.302,22.969h-4.363l-1.044-3.229h-4.297l-1.004,3.229h-4.36l5.614-16.094h3.705L98.302,22.969z
                     M91.914,16.125L90.8,11.423h-0.111l-1.181,4.702H91.914z"/>
                  <path fill="#FFFFFF" d="M104.212,17.854h-0.729v5.114h-4.111V6.875h6.432c3.317,0,5.886,1.525,5.979,5.298
                    c0,2.979-1.208,4.658-3.16,5.276l4.386,5.52h-5.068L104.212,17.854z M105.873,14.353c2.567,0,2.567-3.682,0-3.682h-2.389v3.682
                    H105.873z"/>
                </g>
                <g>
                  <path fill="#FFFFFF" d="M20.663,17.824h-0.719v5.062h-4.071V6.957h6.366c3.285,0,5.826,1.507,5.916,5.244
                    c0,2.945-1.191,4.612-3.126,5.218l4.342,5.468h-5.018L20.663,17.824z M22.306,14.359c2.542,0,2.542-3.646,0-3.646h-2.362v3.646
                    H22.306z"/>
                  <path fill="#FFFFFF" d="M34.481,13.212h6.457v3.486h-6.457v2.387h7.02v3.801H30.41V6.957h11.091v3.781h-7.02V13.212z"/>
                  <path fill="#FFFFFF" d="M49.604,6.957c3.195,0,6.186,1.621,6.186,5.333v5.355c0,3.667-2.992,5.264-6.186,5.241h-5.962V6.957H49.604
                    z M49.739,19.107c1.372,0,2.001-0.697,2.001-1.731v-4.973c0-1.034-0.651-1.689-2.001-1.689h-2.047v8.392L49.739,19.107
                    L49.739,19.107z"/>
                </g>
              </svg>
              <span className="hidden md:block text-xs text-marine-steel italic font-medium">
                Новая жизнь вашего двигателя
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
      <section className="relative px-2.5 py-[75px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Мобильная картинка - показываем сверху на мобильных */}
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://cdn.poehali.dev/files/171bd53a-6976-43ff-a29e-15f48b06b64a.jpg" 
                alt="Профессиональный ремонт морских двигателей"
                className="rounded-2xl shadow-2xl w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-cover"
              />
              {/* Декоративные элементы для мобильной версии */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl lg:hidden"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-marine-blue/20 rounded-full blur-xl lg:hidden"></div>
            </div>
            
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <Badge className="mb-3 lg:mb-4 bg-marine-blue/10 text-marine-blue border-marine-blue/20 text-xs sm:text-sm">
                  Профессиональный ремонт морских двигателей
                </Badge>
                <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-marine-dark leading-tight text-2xl">
                  Профессиональное восстановление стационарных двигателей{' '}
                  <span className="text-[#1967D2] block sm:inline">Volvo Penta</span> и{' '}
                  <span className="text-[#1967D2] block sm:inline">Mercruiser</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-marine-steel mt-4 lg:mt-6 leading-relaxed">
                  Специализируемся на ремонте и восстановлении стационарных двигателей 
                  Volvo Penta, Mercruiser, Indmar, Yamaha. Более 15 лет опыта.
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
                  <Icon name="Wrench" size={18} className="mr-2" />
                  Заказать диагностику
                </Button>
                <Button variant="outline" size="lg" className="border-marine-steel text-marine-steel hover:bg-marine-light w-full sm:w-auto text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
                  <Icon name="Play" size={18} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-marine-dark mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">
              Комплексные решения для восстановления и обслуживания морских двигателей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { 
                title: 'Восстановление двигателей под ключ', 
                description: 'Полное восстановление с гарантией качества и современными технологиями',
                icon: 'RefreshCw'
              },
              { 
                title: 'Продажа лонг-блоков', 
                description: 'Готовые к установке блоки двигателей с полной комплектацией',
                icon: 'Package'
              },
              { 
                title: 'Профессиональная диагностика', 
                description: 'Комплексная диагностика с детальным отчетом о состоянии',
                icon: 'Search'
              },
              { 
                title: 'Комплектующие для ремонта', 
                description: 'Оригинальные запчасти и расходные материалы',
                icon: 'Settings'
              },
              { 
                title: 'Гарантийное обслуживание', 
                description: 'Сервисная поддержка и обслуживание восстановленных двигателей',
                icon: 'Shield'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 flex flex-col h-full">
                <div className="aspect-video bg-marine-light rounded-t-lg flex items-center justify-center mb-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <Icon name={service.icon} size={32} className="text-marine-blue" />
                  </div>
                </div>
                <CardHeader className="pt-0 flex-shrink-0">
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow">
                  <p className="text-marine-steel text-sm leading-relaxed flex-grow">{service.description}</p>
                  <Button variant="outline" className="w-full mt-4 text-marine-blue border-marine-blue hover:bg-marine-blue hover:text-white">
                    Подробнее
                  </Button>
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
                    icon: 'Cog',
                    title: 'Профессиональное восстановление',
                    description: 'Не просто ремонт, а полная реконструкция с использованием современных компонентов. Восстановленные двигатели часто превосходят заводские аналоги.'
                  },
                  {
                    icon: 'Package',
                    title: 'Широкий ассортимент',
                    description: 'Предлагаем готовые решения «под ключ» и лонг-блоки для самостоятельной сборки. Подберем двигатель под любые задачи.'
                  },
                  {
                    icon: 'Users',
                    title: 'Экспертный подход',
                    description: 'Команда квалифицированных мастеров с глубоким знанием конструкции Volvo Penta и Mercruiser.'
                  },
                  {
                    icon: 'Shield',
                    title: 'Гарантийные обязательства',
                    description: 'Каждый восстановленный двигатель проходит тщательное тестирование и сопровождается официальной гарантией.'
                  },
                  {
                    icon: 'Wrench',
                    title: 'Комплексное обслуживание',
                    description: 'Выполняем работы любой сложности, от замены отдельных узлов до полной сборки мотора.'
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

      {/* Why It's Profitable Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
              💰 Выгодное предложение
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-marine-dark mb-6">
              Почему это <span className="text-primary">выгодно</span>
            </h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">
              Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Экономия до 50%',
                description: 'От стоимости нового двигателя при сохранении всех характеристик.',
                image: '/img/a3d90cac-8002-4f4c-a058-66c35f6064ba.jpg',
                icon: 'TrendingDown',
                accent: 'text-green-600',
                bgColor: 'bg-green-50'
              },
              {
                title: 'Повышение ликвидности',
                description: 'После установки нашего двигателя моторный отсек выглядит как новый, что значительно увеличивает рыночную стоимость катера.',
                image: '/img/daf8631c-cc6d-4dfa-8caa-bc9f2907aa98.jpg',
                icon: 'TrendingUp',
                accent: 'text-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                title: 'Долговечность и надежность',
                description: 'Использование современных материалов и компонентов гарантирует длительный срок службы.',
                image: '/img/a3e4847e-9389-4b5e-a50d-71a32386ddea.jpg',
                icon: 'Shield',
                accent: 'text-orange-600',
                bgColor: 'bg-orange-50'
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`${benefit.bgColor} p-3 rounded-full shadow-lg`}>
                      <Icon name={benefit.icon} size={24} className={benefit.accent} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className={`text-xl font-bold ${benefit.accent} mb-2 group-hover:text-primary transition-colors duration-300`}>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-marine-steel leading-relaxed group-hover:text-marine-dark transition-colors duration-300">
                    {benefit.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-marine-light/50">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <Icon name="CheckCircle" size={16} />
                      <span>Гарантированный результат</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать экономию
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-marine-dark mb-4">Наши работы</h2>
            <p className="text-xl text-marine-steel max-w-2xl mx-auto text-center">Примеры выполненных Нами проектов по восстановлению стационарных двигателей</p>
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