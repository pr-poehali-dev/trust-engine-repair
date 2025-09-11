import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Экономия до 50%',
      description: 'От стоимости нового двигателя при сохранении всех характеристик.',
      image: '/img/a3d90cac-8002-4f4c-a058-66c35f6064ba.jpg',
      icon: 'TrendingDown'
    },
    {
      title: 'Повышение ликвидности',
      description: 'После установки нашего двигателя моторный отсек выглядит как новый, что значительно увеличивает рыночную стоимость катера.',
      image: '/img/daf8631c-cc6d-4dfa-8caa-bc9f2907aa98.jpg',
      icon: 'TrendingUp'
    },
    {
      title: 'Долговечность и надежность',
      description: 'Использование современных материалов и компонентов гарантирует длительный срок службы.',
      image: '/img/a3e4847e-9389-4b5e-a50d-71a32386ddea.jpg',
      icon: 'Shield'
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* 4. BenefitsSection - светло-серый волнообразный фон */}
      <div className="absolute inset-0">
        {/* Основной градиент */}
        <div className="absolute inset-0 bg-gradient-to-bl from-brand-gray-100/60 via-brand-gray-50/70 to-white"></div>
        
        {/* Волнообразный элемент */}
        <div className="absolute inset-0">
          <div className="absolute -bottom-32 -right-48 w-[700px] h-[550px] bg-gradient-to-tl from-brand-gray-100/80 via-brand-gray-50/40 to-transparent rounded-full blur-3xl opacity-80 transform rotate-20"></div>
        </div>
        
        {/* Дополнительный акцент */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-40 w-[600px] h-[450px] bg-gradient-to-br from-brand-blue-light/35 to-transparent rounded-full blur-2xl opacity-70 transform -rotate-12"></div>
        </div>
      </div>
      
      <div className="relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Выгодное предложение" />
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-gray-900 mb-6">
            Почему это{' '}
            <span className="text-primary">выгодно</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white border border-brand-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="px-4 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                    <Icon name={benefit.icon} size={20} className="text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-primary font-medium pt-4 border-t border-brand-gray-100">
                  <Icon name="CheckCircle" size={16} />
                  <span>Гарантированный результат</span>
                </div>
              </div>
            </div>
          ))}
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
      
      </div>
    </section>
  );
}