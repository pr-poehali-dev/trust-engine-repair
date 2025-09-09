import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function RestorePricingSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Стоимость услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Точная стоимость определяется после диагностики
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Стандартное восстановление</CardTitle>
              <CardDescription className="text-center text-lg">
                Для двигателей в удовлетворительном состоянии
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">от 180 000 ₽</div>
                <p className="text-gray-600">Средний срок: 14-21 день</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Полная диагностика</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Восстановление основных узлов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Замена расходных материалов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Стендовые испытания</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Гарантия 12 месяцев</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Заказать восстановление
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Капитальное восстановление</CardTitle>
              <CardDescription className="text-center text-lg">
                Для двигателей с серьезными повреждениями
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">от 350 000 ₽</div>
                <p className="text-gray-600">Средний срок: 21-30 дней</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Глубокая диагностика</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Полное восстановление всех систем</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Механическая обработка деталей</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Модернизация компонентов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Расширенная гарантия</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Заказать капремонт
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}