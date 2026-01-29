import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function LongBlocksProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Поиск донора',
      description: 'Подбираем двигатель-донор с исправным блоком цилиндров и коленвалом. Проверяем отсутствие трещин и критических дефектов.',
      icon: 'Search',
      color: 'blue'
    },
    {
      number: 2,
      title: 'Разборка и дефектовка',
      description: 'Полная разборка двигателя, оценка состояния всех деталей. Определяем что восстанавливается, что меняется на новое.',
      icon: 'Package',
      color: 'orange'
    },
    {
      number: 3,
      title: 'Восстановление',
      description: 'Расточка цилиндров, шлифовка коленвала, обработка головки блока. Приводим детали к заводским параметрам.',
      icon: 'Settings',
      color: 'purple'
    },
    {
      number: 4,
      title: 'Сборка и тестирование',
      description: 'Собираем лонг-блок с новыми поршнями, кольцами, вкладышами. Проверяем зазоры, моменты затяжки, герметичность.',
      icon: 'CheckCircle',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        iconBg: 'bg-blue-100'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        iconBg: 'bg-orange-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        iconBg: 'bg-purple-100'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        iconBg: 'bg-green-100'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <Icon name="Wrench" size={36} className="text-primary" />
            Процесс изготовления лонг-блока
          </h2>
          <p className="text-lg text-gray-600">
            От поиска донора до готового двигателя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <Card 
                key={step.number}
                className={`${colors.bg} ${colors.border} border-2 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative`}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200">
                  <span className={`text-lg font-bold ${colors.text}`}>{step.number}</span>
                </div>
                
                <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 mt-2`}>
                  <Icon name={step.icon as any} size={28} className={colors.text} />
                </div>
                
                <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={24} className="text-gray-400" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold">
            <Icon name="Clock" size={20} />
            <span>Срок изготовления: 14-21 день</span>
          </div>
        </div>
      </div>
    </section>
  );
}