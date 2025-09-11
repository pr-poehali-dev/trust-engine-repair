import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

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
      price: 'от 150 000 ₽',
      duration: '14-21 день',
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
      price: 'от 180 000 ₽',
      duration: '3-5 дней',
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
      price: 'от 80 000 ₽',
      duration: '7-14 дней',
      link: '/services/repair'
    }
  ];

  return (
    <section id={id || "services"} className="relative overflow-hidden py-20 lg:py-28">
      {/* Декоративные геометрические элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/12 rounded-2xl blur-xl"></div>
      <div className="absolute bottom-20 right-16 w-28 h-28 bg-secondary/10 rounded-3xl blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/8 rounded-xl blur-lg"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-secondary/12 rounded-lg blur-md"></div>
          <div className="absolute top-1/4 -right-48 w-[700px] h-[500px] bg-gradient-to-l from-brand-gray-100/70 to-transparent rounded-full blur-3xl opacity-80 transform rotate-12"></div>
        </div>
        
        {/* Дополнительный волнообразный элемент */}
        <div className="absolute inset-0">
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[400px] bg-gradient-to-tr from-brand-blue-light/50 to-transparent rounded-full blur-2xl opacity-70 transform -rotate-15"></div>
        </div>
      </div>
      
      <div className="relative z-10 px-4">

      
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Наши услуги" />
        
        <div className="text-center mb-20">
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
                
                <div className="space-y-4 flex-grow">
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-base text-brand-gray-500">
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2 p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Стоимость</span>
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Срок</span>
                      <span className="text-sm font-semibold text-gray-700">{service.duration}</span>
                    </div>
                  </div>
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
      
      </div>
    </section>
  );
}