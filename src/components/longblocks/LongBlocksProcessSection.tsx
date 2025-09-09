import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function LongBlocksProcessSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Процесс изготовления лонг-блоков
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный цикл восстановления от разборки до готового к установке двигателя
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  01
                </div>
              </div>
              <div className="flex-grow">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Search" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Входная диагностика</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">1-2 дня</Badge>
                    </div>
                    <CardDescription>
                      Комплексная оценка состояния двигателя-донора
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Внешний осмотр</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Проверка блока цилиндров</li>
                          <li>• Оценка коленвала и поршневой</li>
                          <li>• Состояние головки блока</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Техническая оценка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Измерение геометрии</li>
                          <li>• Дефектоскопия деталей</li>
                          <li>• Планирование восстановления</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Техническое заключение и план восстановительных работ
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gray-300"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  02
                </div>
              </div>
              <div className="flex-grow">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Wrench" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Разборка и восстановление</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">7-10 дней</Badge>
                    </div>
                    <CardDescription>
                      Полная разборка с восстановлением всех компонентов
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Механическая обработка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Расточка цилиндров</li>
                          <li>• Шлифовка коленвала</li>
                          <li>• Фрезеровка плоскостей</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Замена деталей</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Поршневая группа</li>
                          <li>• Вкладыши коленвала</li>
                          <li>• Прокладки и уплотнения</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Восстановленные детали соответствуют заводским параметрам
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gray-300"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  03
                </div>
              </div>
              <div className="flex-grow">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Cog" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Сборка лонг-блока</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">3-5 дней</Badge>
                    </div>
                    <CardDescription>
                      Профессиональная сборка с контролем качества
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Точная сборка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Установка коленвала</li>
                          <li>• Монтаж поршневой группы</li>
                          <li>• Установка головки блока</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Контроль параметров</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Моментные характеристики</li>
                          <li>• Зазоры и регулировки</li>
                          <li>• Герметичность</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Собранный лонг-блок готов для тестирования
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gray-300"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  04
                </div>
              </div>
              <div className="flex-grow">
                <Card className="border-2 border-green-500 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="PlayCircle" size={24} className="text-green-500" />
                      <CardTitle className="text-xl">Тестирование и упаковка</CardTitle>
                      <Badge variant="outline" className="text-green-500 border-green-500">1 день</Badge>
                    </div>
                    <CardDescription>
                      Финальные испытания и подготовка к отгрузке
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Контрольные тесты</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Проверка компрессии</li>
                          <li>• Тест на герметичность</li>
                          <li>• Контроль геометрии</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Подготовка к отгрузке</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Консервация поверхностей</li>
                          <li>• Профессиональная упаковка</li>
                          <li>• Документирование</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Готовый к установке лонг-блок с гарантией качества
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}