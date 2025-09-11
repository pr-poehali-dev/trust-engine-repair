import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ServicesSectionProps {
  id?: string;
}

export default function ServicesSection({ id }: ServicesSectionProps = {}) {
  const services = [
    { 
      title: 'Восстановление двигателей под ключ', 
      description: 'Полное восстановление с гарантией качества и современными технологиями. Используем только оригинальные компоненты.',
      icon: 'RefreshCw',
      image: 'https://cdn.poehali.dev/files/cba3e511-dca5-4b4f-b908-45e0d5d44ba6.jpg',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      features: ['Капитальный ремонт', 'Современные технологии', 'Гарантия качества'],
      link: '/services/restore'
    },
    { 
      title: 'Продажа лонг-блоков', 
      description: 'Готовые к установке блоки двигателей с полной комплектацией и тестированием на стенде.',
      icon: 'Package',
      image: 'https://cdn.poehali.dev/files/0e8eeb10-5321-4943-9297-f3f545cea2d4.JPG',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      features: ['Готовые блоки', 'Полная комплектация', 'Тестирование'],
      link: '/services/longblocks'
    },
    { 
      title: 'Ремонт вашего двигателя', 
      description: 'Качественный ремонт любой сложности с использованием современного оборудования и оригинальных запчастей.',
      icon: 'Wrench',
      image: 'https://cdn.poehali.dev/files/7b8ab9c2-3b62-42b5-9cdc-aff54a685b4a.JPG',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      features: ['Быстрые сроки', 'Гарантия качества', 'Профессионализм'],
      link: '/services/repair'
    }
  ];

  return (
    <section id={id || "services"} className="py-24 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      

      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Мобильная версия */}
        <div className="lg:hidden text-center mb-20">
          {/* Разделитель */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/60"></div>
            <div className="px-6 py-2 bg-white rounded-full border border-primary/20 shadow-sm">
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Наши услуги</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/60"></div>
          </div>
          <h2 className="text-4xl font-bold text-brand-gray-900 mb-6 leading-tight">
            Что мы <span className="text-primary">предлагаем</span>
          </h2>
          <p className="text-xl text-brand-gray-600 leading-relaxed">
            Комплексные решения для восстановления и обслуживания стационарных двигателей с гарантией качества
          </p>
        </div>

        {/* Десктопная версия */}
        <div className="hidden lg:block text-center mb-20">
          {/* Разделитель */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/60"></div>
            <div className="px-8 py-3 bg-white rounded-full border border-primary/20 shadow-sm">
              <span className="text-base font-bold text-primary uppercase tracking-wide">Наши услуги</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/60"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-gray-900 mb-6 leading-tight">
            Что мы <span className="text-primary">предлагаем</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
            Комплексные решения для восстановления и обслуживания стационарных двигателей с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
              onClick={() => {
                window.location.href = service.link;
              }}
            >
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
              
              <CardContent className="flex flex-col flex-grow space-y-6">
                <p className="text-brand-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-brand-gray-500">
                      <Icon name="CheckCircle" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = service.link;
                  }}
                >
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            onClick={() => {
              window.location.href = '/services';
            }}
          >
            <Icon name="Grid3X3" size={20} className="mr-2" />
            Посмотреть все услуги
          </Button>
        </div>
      </div>
    </section>
  );
}