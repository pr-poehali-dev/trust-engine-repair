import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function LongBlocksHeroSection() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/services'}
            className="text-gray-700 hover:text-primary"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к услугам
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-6 inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-marine-blue/5 backdrop-blur-sm border border-primary/20 px-6 py-3 rounded-full shadow-lg relative">
            {/* Декоративные элементы */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-l from-primary/60 to-transparent"></div>
            
            <span className="text-sm font-bold text-primary">Продажа лонг-блоков</span>
            
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Лонг-блоки для стационарных двигателей{' '}
            <span className="text-primary">Mercruiser \ Volvo Penta \ Indmar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Готовые к установке лонг-блоки стационарных двигателей. 
            Полностью восстановленные с гарантией качества и долговечности работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}