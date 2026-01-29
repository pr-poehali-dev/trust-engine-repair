import { Button } from '@/components/ui/button';
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Левая часть - иконка */}
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/0ccd2fa3-13d2-4d07-af3a-0c1f7f1a4681.png" 
                alt="Лонг-блоки" 
                style={{ width: '15rem', imageRendering: 'crisp-edges' }}
                className="h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Правая часть - текст */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Лонг-блоки для стационарных двигателей<br />
                <span className="text-primary">Mercruiser \ Volvo Penta \ Indmar</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Готовые к установке лонг-блоки стационарных двигателей. 
                Полностью восстановленные с гарантией качества и долговечности работы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}