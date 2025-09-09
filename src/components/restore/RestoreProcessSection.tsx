import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function RestoreProcessSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Процесс восстановления двигателя
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Пошаговый процесс капитального ремонта с полной отчетностью на каждом этапе
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
                      <CardTitle className="text-xl">Первичная диагностика</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">2-3 дня</Badge>
                    </div>
                    <CardDescription>
                      Комплексная оценка состояния двигателя
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Внешний осмотр</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Проверка корпуса и креплений</li>
                          <li>• Оценка коррозии и повреждений</li>
                          <li>• Состояние электрических соединений</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Компьютерная диагностика</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Сканирование ошибок ECU</li>
                          <li>• Проверка датчиков</li>
                          <li>• Анализ рабочих параметров</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Подробный отчет с фотографиями и рекомендациями по ремонту
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
                      <CardTitle className="text-xl">Разборка и дефектовка</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">3-5 дней</Badge>
                    </div>
                    <CardDescription>
                      Полная разборка двигателя с оценкой каждой детали
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Поэтапная разборка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Снятие навесного оборудования</li>
                          <li>• Разборка блока цилиндров</li>
                          <li>• Демонтаж ГРМ и коленвала</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Дефектовка деталей</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Измерение геометрии деталей</li>
                          <li>• Магнитная дефектоскопия</li>
                          <li>• Сортировка на восстановление/замену</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Детальный список деталей с рекомендациями и сметой восстановления
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
                      <Icon name="Settings" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Восстановление деталей</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">7-14 дней</Badge>
                    </div>
                    <CardDescription>
                      Профессиональное восстановление всех узлов и агрегатов
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Механическая обработка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Расточка и хонинговка цилиндров</li>
                          <li>• Шлифовка коленвала</li>
                          <li>• Опрессовка блока</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Замена компонентов</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Поршневая группа</li>
                          <li>• Вкладыши и кольца</li>
                          <li>• Прокладки и уплотнения</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Все детали приведены к заводским параметрам с использованием оригинальных запчастей
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
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  04
                </div>
              </div>
              <div className="flex-grow">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Cog" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Сборка двигателя</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">2-3 дня</Badge>
                    </div>
                    <CardDescription>
                      Точная сборка с соблюдением всех технологических требований
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Поэтапная сборка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Сборка блока цилиндров</li>
                          <li>• Установка коленвала и ГРМ</li>
                          <li>• Монтаж навесного оборудования</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Контроль качества</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Моментные характеристики</li>
                          <li>• Зазоры и регулировки</li>
                          <li>• Герметичность соединений</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Полностью собранный двигатель, готовый к тестированию
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

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  05
                </div>
              </div>
              <div className="flex-grow">
                <Card className="border-2 border-green-500 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="PlayCircle" size={24} className="text-green-500" />
                      <CardTitle className="text-xl">Тестирование и настройка</CardTitle>
                      <Badge variant="outline" className="text-green-500 border-green-500">1-2 дня</Badge>
                    </div>
                    <CardDescription>
                      Финальное тестирование и настройка всех систем
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Стендовые испытания</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Запуск и прогрев</li>
                          <li>• Тестирование на холостом ходу</li>
                          <li>• Проверка под нагрузкой</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Финальная настройка</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Регулировка оборотов</li>
                          <li>• Настройка системы питания</li>
                          <li>• Калибровка датчиков</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Двигатель готов к эксплуатации с полным пакетом документов и гарантией
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