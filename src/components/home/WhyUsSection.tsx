import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function WhyUsSection() {
  const companyMetrics = [
    { value: '500+', label: 'Двигателей восстановлено', sublabel: 'за все время работы' },
    { value: '15+', label: 'Лет экспертного опыта', sublabel: 'на рынке морской техники' },
    { value: '98%', label: 'Довольных клиентов', sublabel: 'рекомендуют нас' },
    { value: '24 мес.', label: 'Расширенная гарантия', sublabel: 'на все работы' }
  ];

  const advantages = [
    {
      category: 'Экспертиза',
      icon: 'Award',
      title: 'Сертифицированные специалисты',
      description: 'Наши мастера имеют официальные сертификаты Volvo Penta и Mercruiser. Регулярно проходят обучение на заводах производителей.',
      keyPoints: ['Заводская сертификация', 'Постоянное повышение квалификации', 'Доступ к технической документации'],
      accent: 'border-l-blue-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      category: 'Технологии',
      icon: 'Settings',
      title: 'Современное оборудование',
      description: 'Диагностические комплексы последнего поколения, специализированный инструмент и оригинальные компоненты от производителей.',
      keyPoints: ['Компьютерная диагностика', 'Стендовые испытания', 'Оригинальные запасные части'],
      accent: 'border-l-emerald-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      category: 'Качество',
      icon: 'Shield',
      title: 'Контроль качества на всех этапах',
      description: 'Многоступенчатая система контроля: входная диагностика, промежуточные проверки, финальные испытания и гарантийное обслуживание.',
      keyPoints: ['Пошаговая документация', 'Стандарты производителя', '24-месячная гарантия'],
      accent: 'border-l-amber-500',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      category: 'Сервис',
      icon: 'Clock',
      title: 'Оптимизированные процессы',
      description: 'Собственная логистика, склад запчастей и отлаженные бизнес-процессы обеспечивают минимальные сроки без компромиссов в качестве.',
      keyPoints: ['Экспресс-диагностика 24 часа', 'Склад запчастей 500+ позиций', 'Прозрачные сроки выполнения'],
      accent: 'border-l-violet-500',
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet-600'
    }
  ];

  const certifications = [
    { name: 'Volvo Penta', logo: '🔧', status: 'Авторизованный сервис' },
    { name: 'Mercruiser', logo: '⚙️', status: 'Сертифицированный партнер' },
    { name: 'ISO 9001', logo: '🏆', status: 'Система менеджмента качества' }
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-slate-300 text-slate-700 px-4 py-2">
            Наши преимущества
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Почему выбирают именно нас
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Профессиональный подход, современные технологии и многолетний опыт — 
            основа нашей репутации в сфере восстановления морских двигателей
          </p>
        </div>

        {/* Company Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companyMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-50 rounded-xl p-6 mb-4">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{metric.value}</div>
                <div className="text-sm font-semibold text-slate-700">{metric.label}</div>
                <div className="text-xs text-slate-500 mt-1">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Advantages */}
        <div className="space-y-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className={`border-0 border-l-4 ${advantage.accent} bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300`}>
              <div className="p-8">
                <div className="flex items-start gap-8">
                  
                  {/* Icon & Category */}
                  <div className="flex-shrink-0">
                    <div className={`${advantage.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon name={advantage.icon} size={28} className={advantage.iconColor} />
                    </div>
                    <div className="text-xs font-medium text-slate-500 text-center">
                      {advantage.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {advantage.description}
                    </p>
                    
                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {advantage.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-600 font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Trust Indicators */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Сертификации и партнерства
            </h3>
            <p className="text-slate-600">
              Официальные подтверждения нашей компетентности и надежности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{cert.logo}</div>
                <div className="font-semibold text-slate-900 mb-1">{cert.name}</div>
                <div className="text-sm text-slate-600">{cert.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="/img/69551f2d-ae28-47dc-8b0c-008881fafee8.jpg" 
              alt="Профессиональная мастерская по восстановлению морских двигателей"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Workshop Info */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Современная производственная база
                    </div>
                    <div className="text-sm text-slate-600">
                      Собственные мощности • Складской комплекс • Испытательные стенды
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Доверьте восстановление двигателя профессионалам
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Получите детальную диагностику, прозрачную смету и гарантированный результат
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200 flex items-center justify-center gap-2">
                <Icon name="Phone" size={18} />
                Консультация специалиста
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2">
                <Icon name="Calculator" size={18} />
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}