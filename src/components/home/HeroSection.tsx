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
    <section className="relative px-4 py-20 lg:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2 rounded-full">
                ⚓ Профессиональный ремонт морских двигателей
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray-900 leading-tight">
                Профессиональное{' '}
                <span className="text-primary">восстановление</span>{' '}
                двигателей для катеров и яхт
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-brand-gray-600 leading-relaxed font-medium">
                  Специализируемся на ремонте и восстановлении стационарных двигателей 
                  <span className="text-brand-gray-800 font-semibold"> Volvo Penta, Mercruiser, Indmar, Yamaha</span>
                </p>
                <p className="text-lg text-brand-gray-500">
                  Более 12 лет опыта • Гарантия качества • Оригинальные запчасти
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="border-2 border-brand-gray-300 text-brand-gray-700 hover:bg-brand-gray-50 font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Link to="/projects">
                  <Icon name="Play" size={20} className="mr-3" />
                  Смотреть работы
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-brand-gray-600">Двигателей отремонтировано</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-brand-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-brand-gray-600">Гарантия качества</div>
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
              
              {/* Quality badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-brand-gray-800">Качество гарантировано</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}