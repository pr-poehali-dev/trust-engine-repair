import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';

export default function RepairProcessSection() {
  const processPhotos = [
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
            Процесс ремонта двигателя
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Поэтапный ремонт с детальной диагностикой и профессиональным выполнением работ
          </p>
        </div>

        <div className="relative">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="px-6 py-2 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                  <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">
                    1 этап
                  </span>
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
                          <CardTitle className="text-2xl font-bold text-gray-900">Диагностика и выявление неисправностей</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Полная диагностика для точного определения причин неисправности
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-sm font-medium rounded-full">
                        1-2 дня
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
                            <h4 className="font-bold text-gray-900">Визуальный осмотр</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Проверка внешних повреждений
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Оценка состояния узлов
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Анализ утечек и коррозии
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name="Cpu" size={16} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-gray-900">Техническая диагностика</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Компьютерное сканирование
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Проверка компрессии
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Тестирование систем
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                        <PhotoGallery photos={processPhotos} />
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
                            Подробная диагностическая карта с описанием всех найденных неисправностей и план ремонта
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
              <div className="flex-shrink-0">
                <div className="px-6 py-2 bg-white rounded-full border border-orange-200 shadow-lg backdrop-blur-sm">
                  <span className="text-sm font-bold text-orange-600 uppercase tracking-wide whitespace-nowrap">
                    2 этап
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                          <Icon name="FileText" size={24} className="text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Составление сметы и согласование</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Детальный расчет стоимости с учетом всех необходимых работ
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 text-sm font-medium rounded-full">
                        1 день
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Icon name="Calculator" size={16} className="text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Калькуляция работ</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Расчет трудозатрат
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Стоимость запчастей
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Дополнительные материалы
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Icon name="HandshakeIcon" size={16} className="text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Согласование</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Обсуждение с клиентом
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Выбор запчастей
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Утверждение сроков
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                        <PhotoGallery photos={processPhotos} />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="FileCheck" size={14} className="text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-800 mb-1">Готовая смета</h5>
                          <p className="text-sm text-blue-700">
                            Подробная смета с описанием всех работ, стоимостью запчастей и сроками выполнения
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
              <div className="flex-shrink-0">
                <div className="px-6 py-2 bg-white rounded-full border border-red-200 shadow-lg backdrop-blur-sm">
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wide whitespace-nowrap">
                    3 этап
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                          <Icon name="Wrench" size={24} className="text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Выполнение ремонтных работ</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Профессиональное выполнение всех запланированных работ
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800 border-red-200 px-3 py-1 text-sm font-medium rounded-full">
                        5-10 дней
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-red-50/50 to-red-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <Icon name="Settings" size={16} className="text-red-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Основные работы</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Замена неисправных деталей
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Ремонт узлов и агрегатов
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Настройка систем
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-red-50/50 to-red-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <Icon name="CheckCircle" size={16} className="text-red-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Контроль качества</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Проверка каждого этапа
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Тестирование узлов
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Документирование
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                        <PhotoGallery photos={processPhotos} />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Tool" size={14} className="text-orange-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-orange-800 mb-1">Завершенные работы</h5>
                          <p className="text-sm text-orange-700">
                            Все запланированные работы выполнены согласно техническому заданию и стандартам качества
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
              <div className="flex-shrink-0">
                <div className="px-6 py-2 bg-white rounded-full border border-blue-200 shadow-lg backdrop-blur-sm">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide whitespace-nowrap">
                    4 этап
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <Icon name="PlayCircle" size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Тестирование и настройка</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Проверка работоспособности и финальная настройка
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-sm font-medium rounded-full">
                        1-2 дня
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icon name="Activity" size={16} className="text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Функциональные тесты</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              Запуск и прогрев
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              Проверка всех систем
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              Тест под нагрузкой
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icon name="Settings" size={16} className="text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Финальная настройка</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              Регулировка оборотов
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              Настройка системы питания
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              Калибровка датчиков
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                        <PhotoGallery photos={processPhotos} />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Award" size={14} className="text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-green-800 mb-1">Готов к эксплуатации</h5>
                          <p className="text-sm text-green-700">
                            Двигатель полностью отремонтирован, протестирован и готов к эксплуатации с гарантией
                          </p>
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