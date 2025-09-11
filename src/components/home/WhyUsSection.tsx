import Icon from '@/components/ui/icon';

interface WhyUsSectionProps {
  id?: string;
}

export default function WhyUsSection({ id }: WhyUsSectionProps = {}) {
  const mainAdvantages = [
    {
      icon: 'Award',
      title: 'Профессиональная экспертиза',
      description: 'Сертифицированные специалисты Volvo Penta и Mercruiser с 15-летним опытом',
      features: ['Заводская сертификация', 'Постоянное обучение', 'Оригинальные компоненты']
    },
    {
      icon: 'Settings',
      title: 'Современное оборудование',
      description: 'Компьютерная диагностика, стендовые испытания и специализированный инструмент',
      features: ['Компьютерная диагностика', 'Стендовые испытания', 'Оригинальные запчасти']
    },
    {
      icon: 'Shield',
      title: 'Многоступенчатый контроль',
      description: 'Контроль качества на каждом этапе: от входной диагностики до финальных испытаний',
      features: ['Пошаговая документация', 'Стандарты производителя', '24-месячная гарантия']
    },
    {
      icon: 'Clock',
      title: 'Оптимальные сроки',
      description: 'Собственные мощности, склад запчастей и отлаженная логистика обеспечивают минимальные сроки',
      features: ['Экспресс-диагностика 24 часа', 'Склад запчастей 500+ позиций', 'Прозрачные сроки']
    }
  ];

  return (
    <section id={id || "why-us"} className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          {/* Разделитель */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/60"></div>
            <div className="px-8 py-3 bg-white rounded-full border border-primary/20 shadow-sm">
              <span className="text-base font-bold text-primary uppercase tracking-wide">Наши преимущества</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/60"></div>
          </div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-gray-900 mb-6">
            Почему выбирают{' '}
            <span className="text-primary">именно нас</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Профессиональный подход, современные технологии и многолетний опыт — основа нашей репутации
          </p>
        </div>

        
        {/* Преимущества в 2 ряда */}
        <div className="grid sm:grid-cols-2 gap-6">
          {mainAdvantages.map((advantage, index) => (
            <div key={index} className="group bg-white border border-brand-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={advantage.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-brand-gray-600 text-sm mb-3 leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="space-y-1">
                    {advantage.features.map((feature, i) => (
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
      </div>
    </section>
  );
}