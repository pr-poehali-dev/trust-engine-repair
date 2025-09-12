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
    <section className="relative py-20 lg:py-28">
      {/* 4. BenefitsSection - светло-серый волнообразный фон */}
      {/* Декоративные геометрические элементы - задний фон */}
      <div className="absolute z-0 top-12 right-8 w-44 h-44 bg-primary/18 rounded-3xl blur-xl hidden md:block"></div>
      <div className="absolute z-0 bottom-8 left-12 w-36 h-36 bg-[#039fcb0d] rounded-2xl blur-lg hidden md:block"></div>
      <div className="absolute z-0 top-1/4 left-1/5 w-32 h-32 bg-primary/22 rounded-xl blur-md hidden md:block"></div>
      <div className="absolute z-0 bottom-1/3 right-1/4 w-28 h-28 bg-[#039fcb0d] rounded-lg blur-sm hidden md:block"></div>
      <div className="absolute z-0 top-2/3 left-6 w-40 h-40 bg-primary/15 rounded-3xl blur-xl hidden md:block"></div>
      <div className="absolute z-0 top-1/2 right-1/6 w-24 h-24 bg-[#039fcb0d] rounded-2xl blur-lg hidden md:block"></div>
      <div className="absolute z-0 bottom-2/3 left-1/2 w-20 h-20 bg-primary/19 rounded-lg blur-md hidden md:block"></div>
      <div className="absolute z-0 top-5 left-2/3 w-48 h-48 bg-[#039fcb0d] rounded-3xl blur-xl hidden md:block"></div>
      <div className="absolute z-0 bottom-1/4 right-2/3 w-16 h-16 bg-primary/26 rounded-xl blur-md hidden md:block"></div>
      {/* Дополнительные элементы (+30%) */}
      <div className="absolute z-0 top-1/6 right-2/5 w-26 h-26 bg-[#039fcb0d] rounded-2xl blur-md hidden lg:block"></div>
      <div className="absolute z-0 bottom-1/5 left-3/4 w-22 h-22 bg-primary/21 rounded-lg blur-sm hidden lg:block"></div>
      <div className="absolute z-0 top-3/4 right-1/8 w-30 h-30 bg-[#039fcb0d] rounded-xl blur-md hidden lg:block"></div>
      {/* Крупные элементы в области заголовка - увеличено */}
      <div className="absolute z-0 top-4 left-16 w-36 h-36 bg-primary/12 rounded-3xl blur-2xl hidden lg:block"></div>
      <div className="absolute z-0 top-2 right-24 w-32 h-32 bg-[#039fcb0d] rounded-2xl blur-xl hidden lg:block"></div>
      <div className="absolute z-0 top-14 left-1/5 w-28 h-28 bg-primary/15 rounded-xl blur-lg hidden lg:block"></div>
      <div className="absolute z-0 top-10 right-2/5 w-24 h-24 bg-[#039fcb0d] rounded-lg blur-md hidden lg:block"></div>
      <div className="absolute z-0 top-6 left-1/3 w-20 h-20 bg-primary/18 rounded-2xl blur-lg hidden lg:block"></div>
      <div className="absolute z-0 top-12 right-1/4 w-18 h-18 bg-[#039fcb0d] rounded-xl blur-md hidden lg:block"></div>
      <div className="absolute z-0 top-2 left-2/3 w-26 h-26 bg-primary/14 rounded-lg blur-sm hidden lg:block"></div>
      
      <div className="relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Выгодное предложение" />
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
            Почему это{' '}
            <span className="text-primary font-bold">выгодно</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Восстановление двигателя — это не только экономия, но и инвестиция в будущее вашего катера
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group border border-brand-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                    <Icon name={benefit.icon} size={24} className="text-primary" />
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