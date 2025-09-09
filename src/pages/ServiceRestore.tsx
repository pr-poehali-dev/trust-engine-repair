import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ServiceRestore() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
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

      {/* Process Roadmap */}
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

      {/* Guarantees */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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

      {/* Pricing */}
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

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Готовы восстановить ваш двигатель?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (xxx) xxx-xx-xx
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}