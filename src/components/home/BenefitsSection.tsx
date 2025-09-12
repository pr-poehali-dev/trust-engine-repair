import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Экономия до 50%',
      description: 'От стоимости нового двигателя при сохранении всех характеристик.',
      icon: 'TrendingDown',
      color: 'green',
      badge: 'до 50%',
      features: [
        'Оригинальные запчастей по цене аналогов',
        'Современная диагностика без переплат',
        'Точная калькуляция без скрытых доплат'
      ],
      result: {
        title: 'Экономия гарантирована',
        description: 'Восстановленный двигатель работает как новый при экономии до 300,000 рублей'
      }
    },
    {
      title: 'Повышение ликвидности',
      description: 'После установки нашего двигателя моторный отсек выглядит как новый, что значительно увеличивает рыночную стоимость катера.',
      icon: 'TrendingUp',
      color: 'blue',
      badge: '+30% к цене',
      features: [
        'Визуальное обновление моторного отсека',
        'Полный пакет технической документации',
        'Подтвержденная история обслуживания'
      ],
      result: {
        title: 'Увеличение стоимости',
        description: 'Катер с восстановленным двигателем продается на 30% дороже аналогов'
      }
    },
    {
      title: 'Долговечность и надежность',
      description: 'Использование современных материалов и компонентов гарантирует длительный срок службы.',
      icon: 'Shield',
      color: 'purple',
      badge: '2 года гарантии',
      features: [
        'Качественные материалы превосходящие OEM',
        'Расширенная гарантия на все узлы',
        'Профессиональное тестирование на стенде'
      ],
      result: {
        title: 'Надежность как у нового',
        description: 'Восстановленный двигатель служит не менее 10 лет при правильной эксплуатации'
      }
    },
    {
      title: 'Быстрые сроки',
      description: 'Восстановление двигателя занимает в 2-3 раза меньше времени, чем поиск и доставка нового.',
      icon: 'Clock',
      color: 'orange',
      badge: '10-12 дней',
      features: [
        'Экспресс-диагностика за 1 день',
        'Складские запчасти в наличии',
        'Приоритетное обслуживание постоянных клиентов'
      ],
      result: {
        title: 'Быстрый результат',
        description: 'Готовый двигатель через 10-12 дней вместо месяцев ожидания нового'
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        badge: 'bg-green-100 text-green-800 border-green-200',
        icon: 'bg-green-50 text-green-600',
        gradient: 'from-green-50/50 to-green-100/30',
        result: 'from-green-50 to-green-100/50 border-green-200 text-green-800',
        resultIcon: 'bg-green-100 text-green-600',
        dot: 'bg-green-500'
      },
      blue: {
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        icon: 'bg-blue-50 text-blue-600',
        gradient: 'from-blue-50/50 to-blue-100/30',
        result: 'from-blue-50 to-blue-100/50 border-blue-200 text-blue-800',
        resultIcon: 'bg-blue-100 text-blue-600',
        dot: 'bg-blue-500'
      },
      purple: {
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        icon: 'bg-purple-50 text-purple-600',
        gradient: 'from-purple-50/50 to-purple-100/30',
        result: 'from-purple-50 to-purple-100/50 border-purple-200 text-purple-800',
        resultIcon: 'bg-purple-100 text-purple-600',
        dot: 'bg-purple-500'
      },
      orange: {
        badge: 'bg-orange-100 text-orange-800 border-orange-200',
        icon: 'bg-orange-50 text-orange-600',
        gradient: 'from-orange-50/50 to-orange-100/30',
        result: 'from-orange-50 to-orange-100/50 border-orange-200 text-orange-800',
        resultIcon: 'bg-orange-100 text-orange-600',
        dot: 'bg-orange-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionTitle text="Выгодное предложение" />
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
            Почему это{' '}
            <span className="text-primary font-bold">выгодно</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className={`px-6 py-2 bg-white rounded-full border ${colors.badge.includes('border') ? colors.badge.split('border-')[1] : 'border-primary/20'} shadow-lg backdrop-blur-sm`}>
                    <span className={`text-sm font-bold uppercase tracking-wide whitespace-nowrap ${colors.badge.split(' ')[1]} ${colors.badge.split(' ')[2]}`}>
                      {benefit.badge}
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center`}>
                            <Icon name={benefit.icon} size={24} />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-gray-900">{benefit.title}</CardTitle>
                            <CardDescription className="text-gray-600 mt-1">
                              {benefit.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {benefit.features.map((feature, i) => (
                            <div key={i} className={`bg-gradient-to-br ${colors.gradient} rounded-2xl p-6`}>
                              <div className="flex items-center gap-3 mb-4">
                                <div className={`w-8 h-8 ${colors.icon} rounded-lg flex items-center justify-center`}>
                                  <Icon name="CheckCircle" size={16} />
                                </div>
                                <h4 className="font-bold text-gray-900">Преимущество {i + 1}</h4>
                              </div>
                              <ul className="text-sm text-gray-700 space-y-2">
                                <li className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                                  {feature}
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 flex items-center">
                          <div className="text-center w-full">
                            <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                              <Icon name={benefit.icon} size={32} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.result.title}</h4>
                            <p className="text-sm text-gray-600">{benefit.result.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`bg-gradient-to-r ${colors.result} rounded-2xl p-6`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-6 h-6 ${colors.resultIcon} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Icon name="Award" size={14} />
                          </div>
                          <div>
                            <h5 className="font-bold mb-1">{benefit.result.title}</h5>
                            <p className="text-sm">
                              {benefit.result.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
    </section>
  );
}