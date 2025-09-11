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
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Arrow */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary/20">
            <path 
              d="M10 40 L80 10 L80 25 L100 25 L100 55 L80 55 L80 70 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Right Arrow */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-180 hidden lg:block">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary/20">
            <path 
              d="M10 40 L80 10 L80 25 L100 25 L100 55 L80 55 L80 70 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Top Left Circle */}
        <div className="absolute left-12 top-20 hidden xl:block">
          <div className="w-24 h-24 border-3 border-primary/20 rounded-full border-dashed"></div>
        </div>

        {/* Top Right Dots */}
        <div className="absolute right-16 top-32 hidden xl:block">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary/20 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Bottom Left Triangle */}
        <div className="absolute left-20 bottom-20 hidden xl:block">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary/15">
            <polygon points="20,5 35,30 5,30" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Right Plus */}
        <div className="absolute right-24 bottom-24 hidden xl:block">
          <svg width="30" height="30" viewBox="0 0 30 30" className="text-primary/20">
            <path d="M15 5 L15 25 M5 15 L25 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Curved Arrow pointing to header */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <svg width="100" height="60" viewBox="0 0 100 60" className="text-primary/25">
            <path 
              d="M20 50 Q50 10 80 50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            <polygon points="75,45 85,50 75,55" fill="currentColor" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <img src="/logo.svg" alt="RED MAR" className="h-4 w-auto" />
            <span className="text-sm font-semibold text-gray-700">Наши услуги</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-gray-900 mb-6 leading-tight">
            Что мы <span className="text-primary">предлагаем</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
            Комплексные решения для восстановления и обслуживания морских двигателей с гарантией качества
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
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
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
            className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
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