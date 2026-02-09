import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Диагностика',
      description: 'Компьютерная диагностика и детальный осмотр двигателя',
      duration: '24 часа',
      icon: 'Search',
      features: ['Компьютерная диагностика', 'Дефектовка', 'Смета работ']
    },
    {
      number: '02',
      title: 'Разборка',
      description: 'Аккуратная разборка с фотофиксацией каждого этапа',
      duration: '1-2 дня',
      icon: 'Package',
      features: ['Фотофиксация', 'Маркировка деталей', 'Промежуточный отчет']
    },
    {
      number: '03',
      title: 'Восстановление',
      description: 'Замена изношенных деталей, шлифовка, балансировка',
      duration: '5-7 дней',
      icon: 'Wrench',
      features: ['Оригинальные запчасти', 'Прецизионная обработка', 'Контроль качества']
    },
    {
      number: '04',
      title: 'Сборка',
      description: 'Сборка двигателя с применением новых расходников',
      duration: '2-3 дня',
      icon: 'Package',
      features: ['Новые прокладки', 'Момент затяжки', 'Проверка зазоров']
    },
    {
      number: '05',
      title: 'Испытания',
      description: 'Стендовые испытания и настройка всех систем',
      duration: '1 день',
      icon: 'Activity',
      features: ['Стендовые тесты', 'Настройка систем', 'Проверка параметров']
    },
    {
      number: '06',
      title: 'Выдача',
      description: 'Передача двигателя с полным пакетом документов',
      duration: '1 день',
      icon: 'CheckCircle',
      features: ['Документация', 'Гарантия 24 месяца', 'Рекомендации по эксплуатации']
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle text="Процесс работы" />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
            Как мы <span className="text-primary font-bold">работаем</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Прозрачный процесс от диагностики до выдачи с гарантией качества
          </p>
        </div>

        {/* Десктоп: timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 inline-block">
                    <div className="flex items-center gap-3 mb-3">
                      {index % 2 === 0 && (
                        <>
                          <div>
                            <h3 className="text-xl font-bold text-brand-gray-900">{step.title}</h3>
                            <p className="text-sm text-primary font-semibold">{step.duration}</p>
                          </div>
                          <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon name={step.icon} size={20} className="text-primary" />
                          </div>
                        </>
                      )}
                      {index % 2 !== 0 && (
                        <>
                          <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon name={step.icon} size={20} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-brand-gray-900">{step.title}</h3>
                            <p className="text-sm text-primary font-semibold">{step.duration}</p>
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-brand-gray-600 text-sm mb-3">{step.description}</p>
                    <div className="space-y-1">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-brand-gray-500">
                          <Icon name="CheckCircle" size={12} className="text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Мобильная версия */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-primary font-semibold mb-2">{step.duration}</p>
                  <p className="text-sm text-brand-gray-600 mb-3">{step.description}</p>
                  <div className="space-y-1">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-gray-500">
                        <Icon name="CheckCircle" size={11} className="text-primary" />
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
