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
    <section className="relative py-16 lg:py-20">
      <div className="relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Выгодное предложение" />
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
            Почему это{' '}
            <span className="text-primary font-bold">выгодно</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
          </p>
        </div>

        {/* Преимущества компактно */}
        <div className="grid sm:grid-cols-2 gap-6 mb-0">
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
      </div>
      </div>
    </section>
  );
}