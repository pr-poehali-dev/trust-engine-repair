import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function RestoreBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Гарантии качества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы берем полную ответственность за результат работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">12 месяцев гарантии</h3>
              <p className="text-gray-600">
                Полная гарантия на все выполненные работы и установленные детали
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Полная отчетность</h3>
              <p className="text-gray-600">
                Фото и видео отчеты на каждом этапе работы с подробным описанием
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Оригинальные детали</h3>
              <p className="text-gray-600">
                Используем только оригинальные или сертифицированные аналоги запчастей
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}