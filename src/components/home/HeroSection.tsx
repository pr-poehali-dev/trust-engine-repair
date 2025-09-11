import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import BannerSlider from '@/components/BannerSlider';

interface HeroSectionProps {
  onContactClick: () => void;
  sliderImages: string[];
}

export default function HeroSection({ onContactClick, sliderImages }: HeroSectionProps) {
  return (
    <section className="pt-12 pb-0 px-4 lg:pt-12 lg:pb-0 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        {/* Заголовок для мобильных устройств */}
        <div className="lg:hidden space-y-6 mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-gray-900 leading-tight px-2">
            Профессиональное{' '}
            <span className="text-primary">восстановление</span>{' '}
            двигателей для катеров и яхт
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            {/* Заголовок для десктопа */}
            <div className="hidden lg:block space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray-900 leading-tight">
                Профессиональное{' '}
                <span className="text-primary">восстановление</span>{' '}
                двигателей для катеров и яхт
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-brand-gray-600 leading-relaxed font-medium text-center lg:text-left">
                Специализируемся на ремонте и восстановлении стационарных двигателей 
                <span className="text-brand-gray-800 font-semibold"> Volvo Penta, Mercruiser, Indmar, Yamaha</span>
              </p>
              <p className="text-base lg:text-lg text-brand-gray-500 text-center lg:text-left">
                Более 12 лет опыта • Гарантия качества • Оригинальные запчасти
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                onClick={onContactClick}
              >
                <Icon name="Wrench" size={20} className="mr-3" />
                Заказать диагностику
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-4 rounded-xl text-base"
              >
                <Link to="/projects">
                  <Icon name="Play" size={20} className="mr-3" />
                  Смотреть работы
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-brand-gray-200">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">500+</div>
                <div className="text-xs lg:text-sm text-brand-gray-600">Двигателей отремонтировано</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">12</div>
                <div className="text-xs lg:text-sm text-brand-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">100%</div>
                <div className="text-xs lg:text-sm text-brand-gray-600">Гарантия качества</div>
              </div>
            </div>
          </div>
          
          {/* Слайдер изображений */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-3xl shadow-2xl w-full h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-brand-gray-100 to-white">
                <BannerSlider images={sliderImages} />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl blur-xl"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}