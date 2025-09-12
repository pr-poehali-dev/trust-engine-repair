import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';

export default function RestoreProcessSection() {
  const diagnosticPhotos = [
    {
      id: '1',
      url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG',
      alt: 'Двигатель до диагностики - общий вид'
    },
    {
      id: '2', 
      url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG',
      alt: 'Повреждения коллектора - коррозия и износ'
    },
    {
      id: '3',
      url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', 
      alt: 'Блок двигателя Mercury MerCruiser - детальный осмотр'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
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
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  01
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon name="Search" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Первичная диагностика</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Комплексная оценка состояния двигателя
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-sm font-medium rounded-full">
                        2-3 дня
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name="Eye" size={16} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-gray-900">Внешний осмотр</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Проверка корпуса и креплений
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Оценка коррозии и повреждений
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Состояние электрических соединений
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name="Cpu" size={16} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-gray-900">Компьютерная диагностика</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Сканирование ошибок ECU
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Проверка датчиков
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Анализ рабочих параметров
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                        <PhotoGallery photos={diagnosticPhotos} />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="CheckCircle" size={14} className="text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-green-800 mb-1">Результат диагностики</h5>
                          <p className="text-sm text-green-700">
                            Подробный отчет с фотографиями, выявленными дефектами и рекомендациями по ремонту
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  02
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon name="Wrench" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Разборка и дефектовка</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Полная разборка двигателя с оценкой каждой детали
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 text-sm font-medium rounded-full">
                        3-5 дней
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Package" size={16} className="text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-900">Поэтапная разборка</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Снятие навесного оборудования
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Разборка блока цилиндров
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Демонтаж ГРМ и коленвала
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Shield" size={16} className="text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-900">Дефектовка деталей</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Измерение геометрии деталей
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Магнитная дефектоскопия
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Сортировка на восстановление/замену
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="FileText" size={14} className="text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-800 mb-1">Результат дефектовки</h5>
                          <p className="text-sm text-blue-700">
                            Детальный список деталей с рекомендациями и точной сметой восстановления
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  03
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon name="Settings" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Восстановление деталей</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Профессиональное восстановление всех узлов и агрегатов
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800 border-red-200 px-3 py-1 text-sm font-medium rounded-full">
                        7-14 дней
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Wrench" size={16} className="text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-900">Механическая обработка</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Расточка и хонинговка цилиндров
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Шлифовка коленвала
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Опрессовка блока
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Package" size={16} className="text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-900">Замена компонентов</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Поршневая группа
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Вкладыши и кольца
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Прокладки и уплотнения
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 border border-purple-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Settings" size={14} className="text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-purple-800 mb-1">Результат восстановления</h5>
                          <p className="text-sm text-purple-700">
                            Все детали приведены к заводским параметрам с использованием оригинальных запчастей
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  04
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon name="Cog" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Сборка двигателя</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Точная сборка с соблюдением всех технологических требований
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium rounded-full">
                        2-3 дня
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Layers" size={16} className="text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-900">Поэтапная сборка</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Сборка блока цилиндров
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Установка коленвала и ГРМ
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Монтаж навесного оборудования
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="CheckCircle" size={16} className="text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-900">Контроль качества</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Моментные характеристики
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Зазоры и регулировки
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Герметичность соединений
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Wrench" size={14} className="text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-green-800 mb-1">Результат сборки</h5>
                          <p className="text-sm text-green-700">
                            Полностью собранный двигатель, готовый к стендовому тестированию
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"></div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  05
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-gradient-to-br from-green-50/50 to-white backdrop-blur-sm border border-green-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Icon name="PlayCircle" size={24} className="text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Тестирование и настройка</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Финальное тестирование и настройка всех систем
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium rounded-full">
                        1-2 дня
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50/50 to-green-100/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Icon name="Activity" size={16} className="text-green-600" />
                          </div>
                          <h4 className="font-bold text-gray-900">Стендовые испытания</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            Запуск и прогрев
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            Тестирование на холостом ходу
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            Проверка под нагрузкой
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-green-50/50 to-green-100/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Icon name="Settings" size={16} className="text-green-600" />
                          </div>
                          <h4 className="font-bold text-gray-900">Финальная настройка</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            Регулировка оборотов
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            Настройка системы питания
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            Калибровка датчиков
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-green-200/50 border border-green-300 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Award" size={18} className="text-green-700" />
                        </div>
                        <div>
                          <h5 className="font-bold text-green-800 mb-2">Готово к эксплуатации</h5>
                          <p className="text-sm text-green-700 mb-3">
                            Двигатель полностью восстановлен и готов к эксплуатации
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-green-200 text-green-800 text-xs">✓ Полный пакет документов</Badge>
                            <Badge className="bg-green-200 text-green-800 text-xs">✓ Гарантия 12 месяцев</Badge>
                            <Badge className="bg-green-200 text-green-800 text-xs">✓ Техническая поддержка</Badge>
                          </div>
                        </div>
                      </div>
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