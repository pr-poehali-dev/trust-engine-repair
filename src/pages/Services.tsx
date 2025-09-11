import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 'restore',
    title: 'Восстановление двигателя под ключ',
    subtitle: 'Полное восстановление',
    description: 'Комплексное восстановление стационарного двигателя с заменой всех изношенных компонентов и модернизацией систем',
    image: 'https://cdn.poehali.dev/files/2c607a11-d289-413b-8355-4d9fbafa96ad.png',
    price: 'от ₽ 350 000',
    duration: '2-4 недели',
    features: ['Полная разборка и дефектовка', 'Замена изношенных деталей', 'Стендовые испытания', '2 года гарантии'],
    link: '/services/restore',
    category: 'Восстановление',
    popular: true
  },
  {
    id: 'repair',
    title: 'Ремонт стационарных двигателей',
    subtitle: 'Профессиональный ремонт',
    description: 'Диагностика и ремонт конкретных неисправностей стационарных двигателей любой сложности',
    image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
    price: 'от ₽ 25 000',
    duration: '3-10 дней',
    features: ['Компьютерная диагностика', 'Ремонт систем впрыска', 'Замена расходников', 'Гарантия на работы'],
    link: '/services/repair',
    category: 'Ремонт'
  },
  {
    id: 'longblocks',
    title: 'Лонг-блоки для стационарных двигателей',
    subtitle: 'Готовые к установке',
    description: 'Готовые к установке лонг-блоки стационарных двигателей. Полностью восстановленные с гарантией качества',
    image: '/img/296a2fc5-c78b-4f2f-a785-0cd8e650a619.jpg',
    price: 'от ₽ 280 000',
    duration: 'В наличии',
    features: ['Готовые к установке', 'Полная комплектация', 'Стендовые испытания', '18 месяцев гарантии'],
    link: '/services/longblocks',
    category: 'Продажа'
  },
  {
    id: 'diagnostics',
    title: 'Компьютерная диагностика',
    subtitle: 'Точная диагностика',
    description: 'Полная компьютерная диагностика стационарных двигателей с выявлением всех неисправностей',
    image: '/img/c79d6585-a600-4aea-9d31-53374ad1cad5.jpg',
    price: '₽ 8 000',
    duration: '1-2 часа',
    features: ['Сканирование ошибок', 'Проверка датчиков', 'Детальный отчет', 'Рекомендации по ремонту'],
    link: '#',
    category: 'Диагностика'
  },
  {
    id: 'tuning',
    title: 'Форсирование двигателей',
    subtitle: 'Увеличение мощности',
    description: 'Профессиональное форсирование стационарных двигателей с увеличением мощности и крутящего момента',
    image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
    price: 'от ₽ 180 000',
    duration: '1-2 недели',
    features: ['Замена поршневой группы', 'Настройка ЭБУ', 'Балансировка', 'Прирост мощности до 20%'],
    link: '#',
    category: 'Тюнинг'
  },
  {
    id: 'maintenance',
    title: 'Техническое обслуживание',
    subtitle: 'Регулярное ТО',
    description: 'Плановое техническое обслуживание стационарных двигателей для поддержания оптимальной работы',
    image: '/img/c5cc0155-a2cd-402d-8127-cdf0d98da013.jpg',
    price: 'от ₽ 15 000',
    duration: '2-4 часа',
    features: ['Замена масла и фильтров', 'Проверка систем', 'Регулировки', 'Профилактика'],
    link: '#',
    category: 'Обслуживание'
  }
];

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Обработка якорных ссылок
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />

      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            ⚙️ Наши услуги
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Полный спектр <span className="text-primary">услуг</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            От диагностики до полного восстановления стационарных двигателей. 
            Профессиональный подход и многолетний опыт работы.
          </p>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-gray-600 font-medium">Лет опыта</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Двигателей восстановлено</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-gray-600 font-medium">Видов услуг</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                {service.popular && (
                  <div className="absolute top-6 left-6 z-10">
                    <Badge className="bg-primary text-white border-none font-medium px-3 py-1">
                      ⭐ Популярная
                    </Badge>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge variant="secondary" className="bg-black/50 text-white border-none backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Service Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="DollarSign" size={14} className="text-primary" />
                        <span className="text-xs font-medium text-gray-500">Цена</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{service.price}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Clock" size={14} className="text-primary" />
                        <span className="text-xs font-medium text-gray-500">Срок</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{service.duration}</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {service.link !== '#' ? (
                    <Link to={service.link}>
                      <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                        Подробнее об услуге
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      onClick={() => setContactFormOpen(true)}
                      className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать услугу
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Не нашли подходящую услугу?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для индивидуальной консультации. 
            Мы найдем решение для любой задачи по ремонту стационарных двигателей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}