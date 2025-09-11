import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function RestoreHeroSection() {
  return (
    <>
      {/* Кнопка назад к услугам */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
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
          {/* Разделитель */}
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center w-full max-w-4xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
              <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">Восстановление двигателя под ключ</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Восстановление двигателя{' '}
            <span className="text-primary">под ключ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полное восстановление стационарного двигателя с гарантией качества. 
            От диагностики до финального тестирования — весь процесс под контролем профессионалов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}