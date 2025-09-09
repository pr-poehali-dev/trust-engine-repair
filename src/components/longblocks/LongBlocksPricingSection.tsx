import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function LongBlocksPricingSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Стоимость лонг-блоков
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовые к установке двигатели с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Стандартный лонг-блок</CardTitle>
              <CardDescription className="text-center text-lg">
                Основные компоненты с восстановлением
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">от 120 000 ₽</div>
                <p className="text-gray-600">Срок изготовления: 10-14 дней</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Восстановленный блок цилиндров</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Шлифованный коленвал</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Новая поршневая группа</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Головка блока в сборе</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Гарантия 12 месяцев</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Заказать лонг-блок
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Премиум лонг-блок</CardTitle>
              <CardDescription className="text-center text-lg">
                Полная комплектация с улучшениями
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">от 200 000 ₽</div>
                <p className="text-gray-600">Срок изготовления: 14-18 дней</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Новый или восстановленный блок</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Новый коленчатый вал</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Усиленная поршневая группа</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Модернизированная ГБЦ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                  <span>Расширенная гарантия 18 месяцев</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Заказать премиум
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Дополнительные услуги
            </h3>
            <p className="text-gray-600">
              Расширьте комплектацию вашего лонг-блока
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Truck" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Доставка</h4>
              <p className="text-sm text-gray-600">По России от 5000₽</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Wrench" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Установка</h4>
              <p className="text-sm text-gray-600">От 25000₽</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="RotateCcw" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Обратный выкуп</h4>
              <p className="text-sm text-gray-600">Старого двигателя</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}