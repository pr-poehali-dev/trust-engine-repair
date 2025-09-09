import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function RestoreHeroSection() {
  return (
    <>
      {/* Навигация */}
      <nav className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/'}
              className="text-gray-700 hover:text-primary"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              На главную
            </Button>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="RED MAR" className="h-5 w-auto sm:h-6 sm:w-auto" />
              <span className="hidden sm:block text-gray-600 font-medium text-xs">
                Новая жизнь вашего двигателя
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🔧 Капитальный ремонт
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Восстановление двигателя{' '}
            <span className="text-primary">под ключ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полное восстановление морского двигателя с гарантией качества. 
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