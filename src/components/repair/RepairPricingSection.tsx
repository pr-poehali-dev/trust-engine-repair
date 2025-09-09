import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function RepairPricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Стоимость ремонта
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачное ценообразование в зависимости от сложности работ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Плановый ремонт</CardTitle>
              <CardDescription className="text-center text-lg">
                Текущий ремонт и замена расходников
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">от 25 000 ₽</div>
                <p className="text-gray-600">Средний срок: 3-5 дней</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Диагностика и выявление проблем</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Замена масла и фильтров</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Настройка и регулировки</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Тестовый запуск</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Гарантия 6 месяцев</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Записаться на ремонт
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Сложный ремонт</CardTitle>
              <CardDescription className="text-center text-lg">
                Ремонт серьезных неисправностей
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">от 85 000 ₽</div>
                <p className="text-gray-600">Средний срок: 7-14 дней</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Углубленная диагностика</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Ремонт ГБЦ и блока цилиндров</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Замена сложных узлов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Стендовые испытания</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Расширенная гарантия</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Заказать ремонт
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Icon name="Info" size={24} className="text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Дополнительная информация</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Точная стоимость определяется после диагностики</li>
                <li>• Возможна оплата в рассрочку для дорогостоящих работ</li>
                <li>• Скидки постоянным клиентам до 15%</li>
                <li>• Бесплатная консультация по телефону</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}