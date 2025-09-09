import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function WhyUsSection() {
  const advantages = [
    {
      icon: 'Award',
      title: 'Профессиональное восстановление',
      description: 'Не просто ремонт, а полная реконструкция с использованием современных компонентов.',
      accent: 'text-primary',
      bgColor: 'bg-primary/10',
      stats: '500+ двигателей в год'
    },
    {
      icon: 'Package',
      title: 'Широкий ассортимент',
      description: 'Готовые решения «под ключ» и лонг-блоки для самостоятельной сборки.',
      accent: 'text-primary',
      bgColor: 'bg-primary/10',
      stats: '50+ моделей в наличии'
    },
    {
      icon: 'Users',
      title: 'Экспертная команда',
      description: 'Квалифицированные мастера с глубоким знанием Volvo Penta и Mercruiser.',
      accent: 'text-primary',
      bgColor: 'bg-primary/10',
      stats: '15+ лет опыта'
    },
    {
      icon: 'Shield',
      title: 'Гарантийные обязательства',
      description: 'Тщательное тестирование и официальная гарантия на каждый двигатель.',
      accent: 'text-primary',
      bgColor: 'bg-primary/10',
      stats: '2 года гарантии'
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-marine-light/30 via-white to-marine-blue/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-marine-blue/3 via-transparent to-primary/3 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-marine-blue/10 text-marine-blue border-marine-blue/20 text-lg px-6 py-2">
            ⭐ Наши преимущества
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-marine-dark mb-6">
            Почему выбирают <span className="text-primary">именно нас</span>
          </h2>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">Более 12 лет опыта, сотни восстановленных двигателей и довольных клиентов</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {advantages.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className={`${item.bgColor} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon} size={28} className={item.accent} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold text-marine-dark group-hover:text-primary transition-colors duration-300`}>
                        {item.title}
                      </h3>
                      <Badge variant="outline" className="text-xs font-medium">
                        {item.stats}
                      </Badge>
                    </div>
                    <p className="text-marine-steel leading-relaxed group-hover:text-marine-dark transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-primary font-medium">
                      <Icon name="CheckCircle" size={16} />
                      <span>Проверено временем</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/img/69551f2d-ae28-47dc-8b0c-008881fafee8.jpg" 
                alt="Современное оборудование для ремонта двигателей"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <p className="font-semibold text-marine-dark">Современная мастерская</p>
                      <p className="text-sm text-marine-steel">Профессиональное оборудование</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-marine-blue/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}