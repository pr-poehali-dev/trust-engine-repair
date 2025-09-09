import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: 'Shield',
      title: '2 года гарантии',
      description: 'На все виды капитального ремонта двигателей',
      accent: 'text-green-400',
      bgColor: 'bg-green-400/20',
      features: ['Капитальный ремонт', 'Замена агрегатов', 'Электронные системы']
    },
    {
      icon: 'RefreshCw',
      title: 'Бесплатное ТО',
      description: 'Первое техническое обслуживание за наш счёт',
      accent: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      features: ['Замена масла', 'Диагностика систем', 'Профилактическое обслуживание']
    },
    {
      icon: 'Headphones',
      title: '24/7 поддержка',
      description: 'Круглосуточная техническая поддержка',
      accent: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
      features: ['Консультации экспертов', 'Удаленная диагностика', 'Экстренная помощь']
    }
  ];

  return (
    <section id="guarantees" className="py-20 px-4 bg-gradient-to-br from-marine-dark via-marine-dark/95 to-primary/10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-marine-blue/10 via-transparent to-primary/10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <Badge className="mb-4 bg-white/10 text-white border-white/20 text-lg px-6 py-2">
          🛡️ Наши гарантии
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Гарантии <span className="text-redmar-blue">качества</span>
        </h2>
        <p className="text-xl text-marine-light/90 mb-12 max-w-3xl mx-auto">
          Мы настолько уверены в качестве наших услуг, что предоставляем расширенные гарантии
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-marine-accent/20">
              <CardContent className="p-8 text-center">
                <div className={`${guarantee.bgColor} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={guarantee.icon} size={36} className={guarantee.accent} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-redmar-blue transition-colors duration-300">
                  {guarantee.title}
                </h3>
                <p className="text-marine-light/80 mb-6 leading-relaxed">
                  {guarantee.description}
                </p>
                
                <div className="space-y-2">
                  {guarantee.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-marine-light/70 justify-center">
                      <Icon name="CheckCircle" size={14} className={guarantee.accent} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-marine-accent hover:bg-marine-accent/90 text-white shadow-2xl hover:shadow-xl transition-all duration-300 px-8 py-4">
            <Icon name="Phone" size={20} className="mr-2" />
            Узнать подробности гарантии
          </Button>
        </div>
      </div>
    </section>
  );
}