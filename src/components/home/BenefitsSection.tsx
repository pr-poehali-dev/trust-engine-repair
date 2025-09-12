import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Экономия до 50%',
      description: 'От стоимости нового двигателя при сохранении всех характеристик.',
      image: '/img/a3d90cac-8002-4f4c-a058-66c35f6064ba.jpg',
      icon: 'TrendingDown',
      color: 'green',
      features: ['Оригинальные запчасти', 'Современная диагностика', 'Точная калькуляция стоимости']
    },
    {
      title: 'Повышение ликвидности',
      description: 'После установки нашего двигателя моторный отсек выглядит как новый, что значительно увеличивает рыночную стоимость катера.',
      image: '/img/daf8631c-cc6d-4dfa-8caa-bc9f2907aa98.jpg',
      icon: 'TrendingUp',
      color: 'blue',
      features: ['Визуальное обновление', 'Техническая документация', 'Увеличение стоимости на 30%']
    },
    {
      title: 'Долговечность и надежность',
      description: 'Использование современных материалов и компонентов гарантирует длительный срок службы.',
      image: '/img/a3e4847e-9389-4b5e-a50d-71a32386ddea.jpg',
      icon: 'Shield',
      color: 'purple',
      features: ['Качественные материалы', 'Расширенная гарантия', 'Профессиональное тестирование']
    },
    {
      title: 'Быстрые сроки',
      description: 'Восстановление двигателя занимает в 2-3 раза меньше времени, чем поиск и доставка нового.',
      image: '/img/a3d90cac-8002-4f4c-a058-66c35f6064ba.jpg',
      icon: 'Clock',
      color: 'orange',
      features: ['Экспресс-диагностика', 'Складские запчасти', 'Приоритетное обслуживание']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        iconBg: 'bg-green-50 group-hover:bg-green-100',
        iconColor: 'text-green-600',
        titleHover: 'group-hover:text-green-600',
        checkColor: 'text-green-600'
      },
      blue: {
        iconBg: 'bg-blue-50 group-hover:bg-blue-100',
        iconColor: 'text-blue-600',
        titleHover: 'group-hover:text-blue-600',
        checkColor: 'text-blue-600'
      },
      purple: {
        iconBg: 'bg-purple-50 group-hover:bg-purple-100',
        iconColor: 'text-purple-600',
        titleHover: 'group-hover:text-purple-600',
        checkColor: 'text-purple-600'
      },
      orange: {
        iconBg: 'bg-orange-50 group-hover:bg-orange-100',
        iconColor: 'text-orange-600',
        titleHover: 'group-hover:text-orange-600',
        checkColor: 'text-orange-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="relative py-20 lg:py-28">
      {/* Декоративные геометрические элементы - задний фон */}
      <div className="absolute z-0 top-12 left-8 w-44 h-44 bg-primary/18 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-8 left-12 w-36 h-36 bg-[#039fcb0d] rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-1/4 left-1/5 w-32 h-32 bg-primary/22 rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-1/3 left-1/4 w-28 h-28 bg-[#039fcb0d] rounded-lg blur-sm"></div>
      <div className="absolute z-0 top-2/3 left-6 w-40 h-40 bg-primary/15 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 top-1/2 left-1/6 w-24 h-24 bg-[#039fcb0d] rounded-2xl blur-lg"></div>
      <div className="absolute z-0 bottom-2/3 left-1/2 w-20 h-20 bg-primary/19 rounded-lg blur-md"></div>
      <div className="absolute z-0 top-5 left-2/3 w-48 h-48 bg-[#039fcb0d] rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-1/4 left-2/3 w-16 h-16 bg-primary/26 rounded-xl blur-md"></div>
      {/* Дополнительные элементы (+30%) */}
      <div className="absolute z-0 top-1/6 left-2/5 w-26 h-26 bg-[#039fcb0d] rounded-2xl blur-md"></div>
      <div className="absolute z-0 bottom-1/5 left-3/4 w-22 h-22 bg-primary/21 rounded-lg blur-sm"></div>
      <div className="absolute z-0 top-3/4 left-1/8 w-30 h-30 bg-[#039fcb0d] rounded-xl blur-md"></div>
      {/* Крупные элементы в области заголовка - увеличено */}
      <div className="absolute z-0 top-4 left-16 w-36 h-36 bg-primary/12 rounded-3xl blur-2xl"></div>
      <div className="absolute z-0 top-2 left-24 w-32 h-32 bg-[#039fcb0d] rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-14 left-1/5 w-28 h-28 bg-primary/15 rounded-xl blur-lg"></div>
      <div className="absolute z-0 top-10 left-2/5 w-24 h-24 bg-[#039fcb0d] rounded-lg blur-md"></div>
      <div className="absolute z-0 top-6 left-1/3 w-20 h-20 bg-primary/18 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-12 left-1/4 w-18 h-18 bg-[#039fcb0d] rounded-xl blur-md"></div>
      <div className="absolute z-0 top-2 left-2/3 w-26 h-26 bg-primary/14 rounded-lg blur-sm"></div>
      
      <div className="relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Выгодное предложение" />
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
            Почему это{' '}
            <span className="text-primary font-bold">выгодно</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
          </p>
        </div>

        {/* Преимущества компактно */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <div key={index} className="group border border-brand-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${colors.iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300`}>
                    <Icon name={benefit.icon} size={18} className={colors.iconColor} />
                  </div>
                  <h3 className={`text-lg font-bold text-brand-gray-900 ${colors.titleHover} transition-colors duration-300 leading-tight`}>
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-brand-gray-600 text-sm mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="space-y-1">
                  {benefit.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-gray-500">
                      <Icon name="CheckCircle" size={12} className={`${colors.checkColor} flex-shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
            onClick={() => {
              alert('📞 Для расчета экономии свяжитесь с нами:\n\n+7 (999) 555-00-12\n\nМы рассчитаем точную экономию для вашего двигателя!');
            }}
          >
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать экономию
          </Button>
        </div>
      </div>
      
      </div>
    </section>
  );
}
}