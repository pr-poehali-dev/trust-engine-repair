import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

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
    <section id={id || "why-us"} className="relative overflow-hidden py-20 lg:py-28">
      {/* Декоративные геометрические элементы */}
      <div className="absolute top-20 left-16 w-28 h-28 bg-primary/10 rounded-3xl blur-xl"></div>
      <div className="absolute bottom-16 right-24 w-36 h-36 bg-secondary/8 rounded-2xl blur-2xl"></div>
      <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-primary/12 rounded-xl blur-lg"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-secondary/10 rounded-2xl blur-xl"></div>
        </div>
        
        {/* Мелкие акценты */}
        <div className="absolute inset-0">
          <div className="absolute top-2/3 left-1/3 w-[400px] h-[300px] bg-gradient-to-r from-primary/15 to-transparent rounded-full blur-xl opacity-70 transform rotate-60"></div>
        </div>
      </div>
      
      <div className="relative z-10 px-4">

      
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Наши преимущества" />
        {/* Заголовок */}
        <div className="text-center mb-16">
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
      </div>
      
      </div>
    </section>
  );
}