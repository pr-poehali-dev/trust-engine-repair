import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CTASectionProps {
  onContactClick: () => void;
}

export default function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative p-8 lg:p-12">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Icon name="Rocket" size={32} className="text-white" />
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Готовы начать восстановление?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Получите бесплатную консультацию и узнайте точную стоимость восстановления вашего двигателя
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  onClick={onContactClick}
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 rounded-xl text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white font-semibold px-8 py-6 rounded-xl text-base"
                  onClick={() => window.location.href = 'tel:+79995550012'}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 555-00-12
                </Button>
              </div>

              {/* Преимущества */}
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-2">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">Бесплатная диагностика</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-2">
                    <Icon name="Shield" size={20} className="text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">Гарантия 24 месяца</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-2">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">Сроки от 10 дней</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
