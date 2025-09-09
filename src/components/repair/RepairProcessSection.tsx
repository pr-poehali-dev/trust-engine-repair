import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function RepairProcessSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Процесс ремонта двигателя
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Поэтапный ремонт с детальной диагностикой и профессиональным выполнением работ
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
                      <CardTitle className="text-xl">Диагностика и выявление неисправностей</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">1-2 дня</Badge>
                    </div>
                    <CardDescription>
                      Полная диагностика для точного определения причин неисправности
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Визуальный осмотр</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Проверка внешних повреждений</li>
                          <li>• Оценка состояния узлов</li>
                          <li>• Анализ утечек и коррозии</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Техническая диагностика</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Компьютерное сканирование</li>
                          <li>• Проверка компрессии</li>
                          <li>• Тестирование систем</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Подробная диагностическая карта с описанием всех найденных неисправностей и план ремонта
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
                      <Icon name="FileText" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Составление сметы и согласование</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">1 день</Badge>
                    </div>
                    <CardDescription>
                      Детальный расчет стоимости с учетом всех необходимых работ
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Калькуляция работ</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Расчет трудозатрат</li>
                          <li>• Стоимость запчастей</li>
                          <li>• Дополнительные услуги</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Согласование с клиентом</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Подробное обсуждение</li>
                          <li>• Альтернативные варианты</li>
                          <li>• Утверждение плана работ</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Согласованная смета и план ремонтных работ с временными рамками
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
                      <Icon name="Package" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Заказ и доставка запчастей</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">2-5 дней</Badge>
                    </div>
                    <CardDescription>
                      Быстрый заказ оригинальных комплектующих от проверенных поставщиков
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Подбор запчастей</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Оригинальные комплектующие</li>
                          <li>• Сертифицированные аналоги</li>
                          <li>• Проверка совместимости</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Логистика</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Работа с поставщиками</li>
                          <li>• Оперативная доставка</li>
                          <li>• Контроль качества</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Все необходимые запчасти получены и проверены, готовы к установке
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
                      <Icon name="Wrench" size={24} className="text-primary" />
                      <CardTitle className="text-xl">Выполнение ремонтных работ</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">3-10 дней</Badge>
                    </div>
                    <CardDescription>
                      Профессиональный ремонт с использованием современного оборудования
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Ремонтные операции</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Замена изношенных деталей</li>
                          <li>• Настройка и регулировка</li>
                          <li>• Устранение неисправностей</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Контроль качества</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Промежуточные проверки</li>
                          <li>• Соблюдение технологий</li>
                          <li>• Фотоотчеты процесса</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Все неисправности устранены, двигатель готов к тестированию
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
                      <CardTitle className="text-xl">Тестирование и сдача</CardTitle>
                      <Badge variant="outline" className="text-green-500 border-green-500">1 день</Badge>
                    </div>
                    <CardDescription>
                      Финальная проверка и сдача отремонтированного двигателя
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Проверка работы</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Пуск и прогрев двигателя</li>
                          <li>• Проверка всех систем</li>
                          <li>• Тестирование под нагрузкой</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Документооборот</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Акт выполненных работ</li>
                          <li>• Гарантийные документы</li>
                          <li>• Рекомендации по эксплуатации</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Результат:</strong> Двигатель работает исправно, клиент получает все документы и гарантию
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