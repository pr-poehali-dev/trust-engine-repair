import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  const services = [
    { 
      title: 'Восстановление двигателей под ключ', 
      description: 'Полное восстановление с гарантией качества и современными технологиями. Используем только оригинальные компоненты.',
      icon: 'RefreshCw',
      image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      features: ['Капитальный ремонт', 'Современные технологии', 'Гарантия качества'],
      link: '/services/restore'
    },
    { 
      title: 'Продажа лонг-блоков', 
      description: 'Готовые к установке блоки двигателей с полной комплектацией и тестированием на стенде.',
      icon: 'Package',
      image: '/img/04333da0-be06-4c2d-ac1d-74f71868a541.jpg',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      features: ['Готовые блоки', 'Полная комплектация', 'Тестирование'],
      link: '/services/longblocks'
    },
    { 
      title: 'Ремонт вашего двигателя', 
      description: 'Качественный ремонт любой сложности с использованием современного оборудования и оригинальных запчастей.',
      icon: 'Wrench',
      image: '/img/a78e3607-d6ee-449a-895b-7ab9dc9b726e.jpg',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      features: ['Быстрые сроки', 'Гарантия качества', 'Профессионализм'],
      link: '/services/repair'
    }
  ];

  return (
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
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white rounded-2xl overflow-hidden h-full flex flex-col">
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
                  onClick={() => {
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
      </div>
    </section>
  );
}