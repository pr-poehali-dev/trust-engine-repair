import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface GuaranteesSectionProps {
  onContactClick: () => void;
  id?: string;
}

export default function GuaranteesSection({ onContactClick, id }: GuaranteesSectionProps) {
  const guarantees = [
    {
      icon: 'Shield',
      title: '2 года',
      subtitle: 'Полная гарантия',
      description: 'На все виды капитального ремонта двигателей и агрегатов',
      features: ['Капитальный ремонт', 'Замена агрегатов', 'Электронные системы']
    },
    {
      icon: 'RefreshCw',
      title: 'Бесплатное',
      subtitle: 'Первое ТО',
      description: 'Техническое обслуживание после ремонта за наш счёт',
      features: ['Замена масла', 'Диагностика систем', 'Профилактика']
    },
    {
      icon: 'Headphones',
      title: '24/7',
      subtitle: 'Поддержка',
      description: 'Круглосуточная техническая поддержка экспертов',
      features: ['Консультации', 'Удаленная диагностика', 'Экстренная помощь']
    }
  ];

  return (
    <section id={id || "guarantees"} className="py-20 px-4 lg:py-28 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок для мобильных */}
        <div className="lg:hidden space-y-6 mb-12 text-center">
          {/* Разделитель */}
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center w-full max-w-4xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
              <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">Наши гарантии</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900 leading-tight px-2">
            Максимальные{' '}
            <span className="text-primary">гарантии</span>{' '}
            на все виды работ
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            {/* Заголовок для десктопа */}
            <div className="hidden lg:block space-y-6">
              {/* Разделитель */}
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center w-full max-w-4xl">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
                  <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                    <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">Наши гарантии</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray-900 leading-tight">
                Максимальные{' '}
                <span className="text-primary">гарантии</span>{' '}
                на все виды работ
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-brand-gray-600 leading-relaxed font-medium text-center lg:text-left">
                Мы настолько уверены в качестве наших услуг, что предоставляем{' '}
                <span className="text-brand-gray-800 font-semibold">расширенные гарантии и сервис</span>
              </p>
              <p className="text-base lg:text-lg text-brand-gray-500 text-center lg:text-left">
                2 года гарантии • Бесплатное ТО • Круглосуточная поддержка
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                onClick={onContactClick}
              >
                <Icon name="Phone" size={20} className="mr-3" />
                Узнать о гарантиях
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-gray-300 text-brand-gray-700 hover:bg-brand-gray-50 font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Icon name="FileText" size={20} className="mr-3" />
                Договор гарантии
              </Button>
            </div>
            
            {/* Stats - гарантийные показатели */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-brand-gray-200">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">2 года</div>
                <div className="text-xs lg:text-sm text-brand-gray-600">Гарантия на ремонт</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">100%</div>
                <div className="text-xs lg:text-sm text-brand-gray-600">Качество работ</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs lg:text-sm text-brand-gray-600">Поддержка клиентов</div>
              </div>
            </div>
          </div>
          
          {/* Гарантийные карточки - справа */}
          <div className="relative order-1 lg:order-2">
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="group bg-white border border-brand-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon name={guarantee.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="text-xl font-bold text-brand-gray-900">
                          {guarantee.title}
                        </h3>
                        <span className="text-sm font-medium text-primary">
                          {guarantee.subtitle}
                        </span>
                      </div>
                      <p className="text-brand-gray-600 text-sm mb-3 leading-relaxed">
                        {guarantee.description}
                      </p>
                      <div className="space-y-1">
                        {guarantee.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-brand-gray-500">
                            <Icon name="CheckCircle" size={12} className="text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Floating elements - в стиле баннера */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl blur-xl"></div>
            
            {/* Quality badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-brand-gray-800">Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}