import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

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
    <section id={id || "guarantees"} className="relative overflow-hidden pt-20 lg:pt-28">
      {/* Декоративные геометрические элементы - задний фон */}
      <div className="absolute z-0 top-8 right-12 w-52 h-52 bg-primary/18 rounded-3xl blur-lg"></div>
      <div className="absolute z-0 bottom-6 left-8 w-44 h-44 bg-blue-400/22 rounded-2xl blur-md"></div>
      <div className="absolute z-0 top-1/5 left-1/6 w-38 h-38 bg-primary/25 rounded-xl blur-sm"></div>
      <div className="absolute z-0 bottom-1/4 right-1/5 w-34 h-34 bg-cyan-300/20 rounded-lg blur-md"></div>
      <div className="absolute z-0 top-2/3 right-8 w-42 h-42 bg-primary/16 rounded-3xl blur-lg"></div>
      <div className="absolute z-0 top-1/3 left-1/3 w-30 h-30 bg-teal-400/18 rounded-2xl blur-md"></div>
      <div className="absolute z-0 bottom-2/3 right-2/3 w-26 h-26 bg-primary/22 rounded-lg blur-sm"></div>
      <div className="absolute z-0 top-4 left-1/2 w-48 h-48 bg-blue-300/15 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-1/6 left-2/3 w-22 h-22 bg-primary/20 rounded-2xl blur-md"></div>
      <div className="absolute z-0 top-1/4 right-1/3 w-36 h-36 bg-indigo-400/16 rounded-xl blur-lg"></div>
      <div className="absolute z-0 bottom-1/3 left-1/4 w-28 h-28 bg-primary/19 rounded-lg blur-md"></div>
      <div className="absolute z-0 top-1/2 right-1/6 w-32 h-32 bg-sky-300/17 rounded-2xl blur-md"></div>
      <div className="absolute z-0 bottom-3/4 left-3/4 w-18 h-18 bg-primary/24 rounded-xl blur-sm"></div>
      {/* Крупные элементы в области заголовка - увеличено */}
      <div className="absolute z-0 top-0 left-20 w-32 h-32 bg-primary/15 rounded-3xl blur-2xl"></div>
      <div className="absolute z-0 top-4 right-28 w-28 h-28 bg-[#039fcb0d] rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-12 left-1/5 w-24 h-24 bg-primary/18 rounded-xl blur-lg"></div>
      <div className="absolute z-0 top-6 right-2/5 w-20 h-20 bg-[#039fcb0d] rounded-lg blur-md"></div>
      <div className="absolute z-0 top-2 left-1/3 w-16 h-16 bg-primary/20 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-10 right-1/4 w-18 h-18 bg-[#039fcb0d] rounded-xl blur-md"></div>
      <div className="absolute z-0 top-8 left-2/3 w-22 h-22 bg-primary/16 rounded-lg blur-sm"></div>
      
      <div className="relative z-10 px-4">

      
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Наши гарантии" />
        {/* Заголовок для мобильных */}
        <div className="lg:hidden space-y-6 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-brand-gray-900 leading-tight px-2">
            Максимальные{' '}
            <span className="text-primary font-bold">гарантии</span>{' '}
            на все виды работ
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            {/* Заголовок для десктопа */}
            <div className="hidden lg:block space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-gray-900 leading-tight">
                Максимальные{' '}
                <span className="text-primary font-bold">гарантии</span>{' '}
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
                onClick={() => {
                  alert('📄 Договор гарантии предоставляется при заключении сделки.\n\n📞 Для получения образца договора:\n+7 (999) 555-00-12\n\n📧 info@marineservice.ru');
                }}
              >
                <Icon name="FileText" size={20} className="mr-3" />
                Договор гарантии
              </Button>
            </div>
            
            {/* Stats - гарантийные показатели */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-brand-gray-200">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">2 года</div>
                <div className="text-sm lg:text-base text-brand-gray-600">Гарантия на ремонт</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">100%</div>
                <div className="text-sm lg:text-base text-brand-gray-600">Качество работ</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm lg:text-base text-brand-gray-600">Поддержка клиентов</div>
              </div>
            </div>
          </div>
          
          {/* Гарантийные карточки - справа */}
          <div className="relative order-1 lg:order-2">
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="group bg-white/60 backdrop-blur-sm border border-brand-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                          <div key={i} className="flex items-center gap-2 text-sm text-brand-gray-500">
                            <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
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
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/25 rounded-2xl blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/25 rounded-2xl blur-xl"></div>
            

          </div>
        </div>
      </div>
      
      </div>
    </section>
  );
}