import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import BannerSlider from '@/components/BannerSlider';
import MobileMenu from '@/components/MobileMenu';
import ContactForm from '@/components/ContactForm';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  const sliderImages = [
    'https://cdn.poehali.dev/files/fa538d5f-21ab-4b35-a595-5b9dca841f5c.jpg',
    'https://cdn.poehali.dev/files/dd89e4b1-5705-418a-84b7-4841c120d189.jpg',
    'https://cdn.poehali.dev/files/e9db4344-bf21-4dd5-9a26-9c299533c229.jpg',
    'https://cdn.poehali.dev/files/ee3eb90a-2c16-4144-9fb0-64f097e14e11.jpg',
    'https://cdn.poehali.dev/files/5c4e00a1-0034-4bde-a7f1-dee200d28490.jpg',
    'https://cdn.poehali.dev/files/f3a88b95-0f65-463a-b23b-9c1465301093.jpg',
    'https://cdn.poehali.dev/files/b163f792-26c9-4578-a9ba-b9328e56ff08.jpg',
    'https://cdn.poehali.dev/files/759bb574-0830-464d-a4ed-733474a377fe.jpg'
  ];

  return (
    <div className="min-h-screen bg-[#f2f6fa]">
      {/* Navigation */}
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
              <a href="#services" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
                Услуги
              </a>
              <a href="#why-us" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
                Почему мы
              </a>
              <a href="#gallery" className="text-brand-gray-700 hover:text-primary font-medium transition-colors text-[15px]">
                Наши работы
              </a>
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
                onClick={() => setContactFormOpen(true)}
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
              
              <MobileMenu 
                isOpen={mobileMenuOpen} 
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                onContactClick={() => setContactFormOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-28 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2 rounded-full">
                  ⚓ Профессиональный ремонт морских двигателей
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray-900 leading-tight">
                  Профессиональное{' '}
                  <span className="text-primary">восстановление</span>{' '}
                  двигателей для катеров и яхт
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl text-brand-gray-600 leading-relaxed font-medium">
                    Специализируемся на ремонте и восстановлении стационарных двигателей 
                    <span className="text-brand-gray-800 font-semibold"> Volvo Penta, Mercruiser, Indmar, Yamaha</span>
                  </p>
                  <p className="text-lg text-brand-gray-500">
                    Более 12 лет опыта • Гарантия качества • Оригинальные запчасти
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                  onClick={() => setContactFormOpen(true)}
                >
                  <Icon name="Wrench" size={20} className="mr-3" />
                  Заказать диагностику
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-brand-gray-300 text-brand-gray-700 hover:bg-brand-gray-50 font-semibold px-8 py-4 rounded-xl text-base transition-all"
                >
                  <Icon name="Play" size={20} className="mr-3" />
                  Смотреть работы
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-brand-gray-600">Двигателей отремонтировано</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-brand-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-brand-gray-600">Гарантия качества</div>
                </div>
              </div>
            </div>
            
            {/* Слайдер изображений */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-3xl shadow-2xl w-full h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-brand-gray-100 to-white">
                  <BannerSlider images={sliderImages} />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl blur-xl"></div>
                
                {/* Quality badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-brand-gray-800">Качество гарантировано</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2 rounded-full">
              🔧 Наши услуги
            </Badge>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-gray-900 mb-6 leading-tight">
              Что мы <span className="text-primary">предлагаем</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Комплексные решения для восстановления и обслуживания морских двигателей с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Восстановление двигателей под ключ', 
                description: 'Полное восстановление с гарантией качества и современными технологиями. Используем только оригинальные компоненты.',
                icon: 'RefreshCw',
                image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                features: ['Капитальный ремонт', 'Современные технологии', 'Гарантия качества']
              },
              { 
                title: 'Продажа лонг-блоков', 
                description: 'Готовые к установке блоки двигателей с полной комплектацией и тестированием на стенде.',
                icon: 'Package',
                image: '/img/04333da0-be06-4c2d-ac1d-74f71868a541.jpg',
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                features: ['Готовые блоки', 'Полная комплектация', 'Тестирование']
              },
              { 
                title: 'Профессиональная диагностика', 
                description: 'Комплексная диагностика с детальным отчетом о состоянии и рекомендациями по ремонту.',
                icon: 'Search',
                image: '/img/a78e3607-d6ee-449a-895b-7ab9dc9b726e.jpg',
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                features: ['Детальный отчет', 'Профессиональное оборудование', 'Рекомендации']
              },
              { 
                title: 'Комплектующие для ремонта', 
                description: 'Оригинальные запчасти и расходные материалы от официальных поставщиков с доставкой.',
                icon: 'Settings',
                image: '/img/04333da0-be06-4c2d-ac1d-74f71868a541.jpg',
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                features: ['Оригинальные запчасти', 'Быстрая доставка', 'Гарантия качества']
              },
              { 
                title: 'Гарантийное обслуживание', 
                description: 'Сервисная поддержка и обслуживание восстановленных двигателей с долгосрочной гарантией.',
                icon: 'Shield',
                image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                features: ['Долгосрочная гарантия', 'Сервисная поддержка', 'Техническое обслуживание']
              }
            ].slice(0, 3).map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <Icon name={service.icon} size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-brand-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-brand-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-brand-gray-500">
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
              <Icon name="Grid3X3" size={20} className="mr-2" />
              Посмотреть все услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-marine-light/30 via-white to-marine-blue/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-marine-blue/3 via-transparent to-primary/3 opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-marine-blue/10 text-marine-blue border-marine-blue/20 text-lg px-6 py-2">
              ⭐ Наши преимущества
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-marine-dark mb-6">
              Почему выбирают <span className="text-primary">именно нас</span>
            </h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">Более 12 лет опыта, сотни восстановленных двигателей и довольных клиентов</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: 'Award',
                  title: 'Профессиональное восстановление',
                  description: 'Не просто ремонт, а полная реконструкция с использованием современных компонентов.',
                  accent: 'text-primary',
                  bgColor: 'bg-primary/10',
                  stats: '500+ двигателей в год'
                },
                {
                  icon: 'Package',
                  title: 'Широкий ассортимент',
                  description: 'Готовые решения «под ключ» и лонг-блоки для самостоятельной сборки.',
                  accent: 'text-primary',
                  bgColor: 'bg-primary/10',
                  stats: '50+ моделей в наличии'
                },
                {
                  icon: 'Users',
                  title: 'Экспертная команда',
                  description: 'Квалифицированные мастера с глубоким знанием Volvo Penta и Mercruiser.',
                  accent: 'text-primary',
                  bgColor: 'bg-primary/10',
                  stats: '15+ лет опыта'
                },
                {
                  icon: 'Shield',
                  title: 'Гарантийные обязательства',
                  description: 'Тщательное тестирование и официальная гарантия на каждый двигатель.',
                  accent: 'text-primary',
                  bgColor: 'bg-primary/10',
                  stats: '2 года гарантии'
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${item.bgColor} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={item.icon} size={28} className={item.accent} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold text-marine-dark group-hover:text-primary transition-colors duration-300`}>
                          {item.title}
                        </h3>
                        <Badge variant="outline" className="text-xs font-medium">
                          {item.stats}
                        </Badge>
                      </div>
                      <p className="text-marine-steel leading-relaxed group-hover:text-marine-dark transition-colors duration-300">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-sm text-primary font-medium">
                        <Icon name="CheckCircle" size={16} />
                        <span>Проверено временем</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/img/69551f2d-ae28-47dc-8b0c-008881fafee8.jpg" 
                  alt="Современное оборудование для ремонта двигателей"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold text-marine-dark">Современная мастерская</p>
                        <p className="text-sm text-marine-steel">Профессиональное оборудование</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-marine-blue/20 rounded-full blur-2xl"></div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-redmar-dark mb-6">
              Почему это <span className="text-[#1d4cd7]">выгодно</span>
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
      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-white via-marine-light/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-marine-blue/2 via-transparent to-primary/2 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-marine-dark border-primary/20 text-lg px-6 py-2">
              🏆 Наши работы
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-redmar-dark mb-6">
              Примеры <span className="text-redmar-red">выполненных проектов</span>
            </h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">
              Профессиональное восстановление стационарных двигателей с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Volvo Penta D6-350', 
                type: 'Капитальный ремонт', 
                status: 'Завершено',
                image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
                duration: '14 дней',
                features: ['Новая поршневая', 'Обновленная электроника', 'Модернизация системы охлаждения'],
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                link: '/projects/volvo-d6-350'
              },
              { 
                title: 'Mercruiser 5.7L', 
                type: 'Замена поршневой', 
                status: 'Завершено',
                image: '/img/7f7497d1-f1ad-4824-b35d-61928133340f.jpg',
                duration: '10 дней',
                features: ['Форсированные поршни', 'Балансировка коленвала', 'Новые форсунки'],
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                link: '/projects/mercruiser-5-7l'
              },
              { 
                title: 'Yamaha 6.2L', 
                type: 'Модернизация системы', 
                status: 'Завершено',
                image: '/img/7362f21a-774e-4981-abe9-d46ef65ceb65.jpg',
                duration: '18 дней',
                features: ['Турбонаддув', 'Интеркулер', 'Программная настройка'],
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                link: '#'
              },
              { 
                title: 'Indmar Raptor 6.0L', 
                type: 'Восстановление блока', 
                status: 'Завершено',
                image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
                duration: '21 день',
                features: ['Расточка блока', 'Новая ГБЦ', 'Система впрыска'],
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                link: '#'
              },
              { 
                title: 'Volvo Penta D4-180', 
                type: 'Ремонт турбины', 
                status: 'Завершено',
                image: '/img/7f7497d1-f1ad-4824-b35d-61928133340f.jpg',
                duration: '7 дней',
                features: ['Новый картридж', 'Обновленные магистрали', 'Калибровка системы'],
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                link: '#'
              },
              { 
                title: 'Mercruiser 6.2L', 
                type: 'Полное восстановление', 
                status: 'Завершено',
                image: '/img/7362f21a-774e-4981-abe9-d46ef65ceb65.jpg',
                duration: '25 дней',
                features: ['Капремонт блока', 'Новая трансмиссия', 'Полная электроника'],
                accent: 'text-marine-dark',
                bgColor: 'bg-primary/10',
                link: '#'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/10 text-marine-dark border-primary/20 shadow-lg">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`${project.bgColor} px-3 py-1 rounded-full shadow-lg`}>
                      <span className={`text-sm font-medium ${project.accent}`}>{project.duration}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className={`text-xl font-bold ${project.accent} group-hover:text-primary transition-colors duration-300`}>
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-marine-steel font-medium">
                    {project.type}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-marine-steel">
                        <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Link to={project.link || '#'}>
                      <Icon name="Eye" size={16} className="mr-2" />
                      Посмотреть детали
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
              <Icon name="Grid3X3" size={20} className="mr-2" />
              Посмотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20 px-4 bg-gradient-to-br from-marine-dark via-marine-dark/95 to-primary/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-marine-blue/10 via-transparent to-primary/10 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-lg px-6 py-2">
            🛡️ Наши гарантии
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Гарантии <span className="text-redmar-blue">качества</span>
          </h2>
          <p className="text-xl text-marine-light/90 mb-12 max-w-3xl mx-auto">
            Мы настолько уверены в качестве наших услуг, что предоставляем расширенные гарантии
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: '2 года гарантии',
                description: 'На все виды капитального ремонта двигателей',
                accent: 'text-green-400',
                bgColor: 'bg-green-400/20',
                features: ['Капитальный ремонт', 'Замена агрегатов', 'Электронные системы']
              },
              {
                icon: 'RefreshCw',
                title: 'Бесплатное ТО',
                description: 'Первое техническое обслуживание за наш счёт',
                accent: 'text-blue-400',
                bgColor: 'bg-blue-400/20',
                features: ['Замена масла', 'Диагностика систем', 'Профилактическое обслуживание']
              },
              {
                icon: 'Headphones',
                title: '24/7 поддержка',
                description: 'Круглосуточная техническая поддержка',
                accent: 'text-orange-400',
                bgColor: 'bg-orange-400/20',
                features: ['Консультации экспертов', 'Удаленная диагностика', 'Экстренная помощь']
              }
            ].map((guarantee, index) => (
              <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-marine-accent/20">
                <CardContent className="p-8 text-center">
                  <div className={`${guarantee.bgColor} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={guarantee.icon} size={36} className={guarantee.accent} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-redmar-blue transition-colors duration-300">
                    {guarantee.title}
                  </h3>
                  <p className="text-marine-light/80 mb-6 leading-relaxed">
                    {guarantee.description}
                  </p>
                  
                  <div className="space-y-2">
                    {guarantee.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-marine-light/70 justify-center">
                        <Icon name="CheckCircle" size={14} className={guarantee.accent} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-marine-accent hover:bg-marine-accent/90 text-white shadow-2xl hover:shadow-xl transition-all duration-300 px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Узнать подробности гарантии
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
              📞 Связаться с нами
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-redmar-dark mb-6">
              Готовы начать <span className="text-redmar-red">восстановление</span>?
            </h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом, и получите персональную консультацию эксперта
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: 'Phone',
                    title: 'Телефон',
                    value: '+7 (xxx) xxx-xx-xx',
                    description: 'Звоните с 9:00 до 18:00',
                    accent: 'text-primary',
                    bgColor: 'bg-primary/10',
                    action: 'Позвонить сейчас'
                  },
                  {
                    icon: 'Mail',
                    title: 'Email',
                    value: 'info@marineservice.ru',
                    description: 'Отвечаем в течение часа',
                    accent: 'text-marine-dark',
                    bgColor: 'bg-primary/10',
                    action: 'Написать письмо'
                  },
                  {
                    icon: 'MapPin',
                    title: 'Адрес мастерской',
                    value: 'г. Москва, ул. Морская, д. 15',
                    description: 'Приезжайте на экскурсию',
                    accent: 'text-marine-dark',
                    bgColor: 'bg-primary/10',
                    action: 'Построить маршрут'
                  },
                  {
                    icon: 'Clock',
                    title: 'Режим работы',
                    value: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
                    description: 'Воскресенье - выходной',
                    accent: 'text-marine-dark',
                    bgColor: 'bg-primary/10',
                    action: 'Записаться на визит'
                  }
                ].map((contact, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`${contact.bgColor} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon name={contact.icon} size={24} className={contact.accent} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold text-lg text-redmar-dark mb-1 group-hover:text-redmar-red transition-colors duration-300`}>
                            {contact.title}
                          </h3>
                          <p className="text-marine-dark font-medium mb-1">{contact.value}</p>
                          <p className="text-sm text-marine-steel mb-3">{contact.description}</p>
                          <Button variant="outline" size="sm" className={`${contact.accent} border-current hover:bg-current hover:text-white transition-all duration-300`}>
                            <Icon name="ArrowRight" size={14} className="mr-1" />
                            {contact.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="shadow-2xl border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-marine-blue/10 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Icon name="MessageSquare" size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-marine-dark">Оставить заявку</CardTitle>
                    <CardDescription className="text-marine-steel">
                      Заполните форму, и мы свяжемся с вами в течение часа
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <Input placeholder="Ваше имя" className="border-2 focus:border-primary transition-colors duration-300" />
                <Input placeholder="Телефон" type="tel" className="border-2 focus:border-primary transition-colors duration-300" />
                <Input placeholder="Email" type="email" className="border-2 focus:border-primary transition-colors duration-300" />
                <Textarea 
                  placeholder="Опишите проблему с двигателем..." 
                  rows={4} 
                  className="border-2 focus:border-primary transition-colors duration-300 resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-medium">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
                <div className="bg-marine-light/50 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <p className="text-sm font-medium text-marine-dark">Гарантируем конфиденциальность</p>
                  </div>
                  <p className="text-xs text-marine-steel">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}