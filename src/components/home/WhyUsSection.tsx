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
      {/* 3. WhyUsSection - деликатный primary градиент с волнами */}
      <div className="absolute inset-0">
        {/* Основной градиент */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-brand-blue-light/15 to-brand-gray-50/40"></div>
        
        {/* Волнообразные элементы */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[750px] h-[600px] bg-gradient-to-br from-primary/6 to-transparent rounded-full blur-3xl opacity-70 transform rotate-45"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute -bottom-48 -right-32 w-[800px] h-[650px] bg-gradient-to-tl from-primary/4 via-brand-blue-light/10 to-transparent rounded-full blur-3xl opacity-60 transform -rotate-30"></div>
        </div>
        
        {/* Мелкие акценты */}
        <div className="absolute inset-0">
          <div className="absolute top-2/3 left-1/3 w-[400px] h-[300px] bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-xl opacity-50 transform rotate-60"></div>
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