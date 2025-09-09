import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Экономия до 50%',
      description: 'От стоимости нового двигателя при сохранении всех характеристик.',
      image: '/img/a3d90cac-8002-4f4c-a058-66c35f6064ba.jpg',
      icon: 'TrendingDown',
      accent: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Повышение ликвидности',
      description: 'После установки нашего двигателя моторный отсек выглядит как новый, что значительно увеличивает рыночную стоимость катера.',
      image: '/img/daf8631c-cc6d-4dfa-8caa-bc9f2907aa98.jpg',
      icon: 'TrendingUp',
      accent: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Долговечность и надежность',
      description: 'Использование современных материалов и компонентов гарантирует длительный срок службы.',
      image: '/img/a3e4847e-9389-4b5e-a50d-71a32386ddea.jpg',
      icon: 'Shield',
      accent: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
            💰 Выгодное предложение
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-redmar-dark mb-6">
            Почему это <span className="text-[#1d4cd7]">выгодно</span>
          </h2>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">
            Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className={`${benefit.bgColor} p-3 rounded-full shadow-lg`}>
                    <Icon name={benefit.icon} size={24} className={benefit.accent} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className={`text-xl font-bold ${benefit.accent} mb-2 group-hover:text-primary transition-colors duration-300`}>
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-marine-steel leading-relaxed group-hover:text-marine-dark transition-colors duration-300">
                  {benefit.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-marine-light/50">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Icon name="CheckCircle" size={16} />
                    <span>Гарантированный результат</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать экономию
          </Button>
        </div>
      </div>
    </section>
  );
}