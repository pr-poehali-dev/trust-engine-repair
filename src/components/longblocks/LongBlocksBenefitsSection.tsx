import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function LongBlocksBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Преимущества лонг-блоков
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовое решение для быстрого восстановления мощности двигателя
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Экономия времени</h3>
              <p className="text-gray-600">
                Готовый к установке двигатель сокращает время ремонта в 2-3 раза
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Гарантия качества</h3>
              <p className="text-gray-600">
                12 месяцев гарантии на лонг-блок с полной заменой при дефектах
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Wrench" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Заводские параметры</h3>
              <p className="text-gray-600">
                Все детали восстановлены до заводских спецификаций и допусков
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Что входит в лонг-блок?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Блок цилиндров с восстановленными цилиндрами</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Коленчатый вал (шлифованный/новый)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Поршневая группа (поршни, кольца, пальцы)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Шатуны с новыми вкладышами</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Головка блока цилиндров</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Все прокладки и уплотнения</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary/5 rounded-xl p-6">
                <Icon name="Package" size={64} className="text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Готов к установке
                </h4>
                <p className="text-gray-600 text-sm">
                  Полностью собранный и протестированный двигатель
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}