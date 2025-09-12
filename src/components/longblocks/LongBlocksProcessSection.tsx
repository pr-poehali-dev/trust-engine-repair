import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';

export default function LongBlocksProcessSection() {
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
            Процесс изготовления лонг-блоков
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный цикл восстановления от разборки до готового к установке двигателя
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
                          <CardTitle className="text-2xl font-bold text-gray-900">Входная диагностика</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Комплексная оценка состояния двигателя-донора
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
                            <h4 className="font-bold text-gray-900">Внешний осмотр</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Проверка блока цилиндров
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Оценка коленвала и поршневой
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Состояние головки блока
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name="Clipboard" size={16} className="text-primary" />
                            </div>
                            <h4 className="font-bold text-gray-900">Планирование</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Выбор донорных двигателей
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Составление плана работ
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              Подбор комплектующих
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
                            Подробная оценка состояния двигателя с планом восстановительных работ
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
                          <Icon name="Package" size={24} className="text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Полная разборка двигателя</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Демонтаж всех узлов с детальной маркировкой
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 text-sm font-medium rounded-full">
                        2-3 дня
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Icon name="Wrench" size={16} className="text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Демонтаж узлов</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Снятие навесного оборудования
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Разборка головки блока
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Извлечение поршневой группы
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Icon name="Tag" size={16} className="text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Маркировка деталей</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Нумерация всех компонентов
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Фотофиксация процесса
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              Создание схемы сборки
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
                          <Icon name="FileText" size={14} className="text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-800 mb-1">Детализированная разборка</h5>
                          <p className="text-sm text-blue-700">
                            Все детали разобраны, промаркированы и готовы для дефектовки
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
                          <Icon name="Settings" size={24} className="text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Восстановление деталей</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Механическая обработка и восстановление геометрии
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800 border-red-200 px-3 py-1 text-sm font-medium rounded-full">
                        5-7 дней
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-red-50/50 to-red-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <Icon name="Cog" size={16} className="text-red-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Обработка блока</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Расточка цилиндров
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Шлифовка привалочных плоскостей
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Опрессовка блока
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-red-50/50 to-red-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <Icon name="Wrench" size={16} className="text-red-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Восстановление коленвала</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Шлифовка шеек коленвала
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Полировка поверхностей
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              Балансировка
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
                          <Icon name="CheckCircle" size={14} className="text-orange-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-orange-800 mb-1">Детали восстановлены</h5>
                          <p className="text-sm text-orange-700">
                            Все основные детали приведены к заводским параметрам и готовы для сборки
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
                <div className="px-6 py-2 bg-white rounded-full border border-green-200 shadow-lg backdrop-blur-sm">
                  <span className="text-sm font-bold text-green-600 uppercase tracking-wide whitespace-nowrap">
                    4 этап
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <Card className="bg-gradient-to-br from-green-50/50 to-white backdrop-blur-sm border border-green-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Icon name="Layers" size={24} className="text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">Сборка лонг-блока</CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            Финальная сборка с новыми комплектующими
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium rounded-full">
                        3-4 дня
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-green-50/50 to-green-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <Icon name="Wrench" size={16} className="text-green-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Установка новых деталей</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              Новые поршни и кольца
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              Вкладыши коленвала
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              Прокладки и уплотнения
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-green-50/50 to-green-100/30 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <Icon name="CheckCircle" size={16} className="text-green-600" />
                            </div>
                            <h4 className="font-bold text-gray-900">Контроль качества</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              Проверка зазоров
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              Момент затяжки
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              Финальная проверка
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                        <PhotoGallery photos={processPhotos} />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-100 to-green-200/50 border border-green-300 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Award" size={18} className="text-green-700" />
                        </div>
                        <div>
                          <h5 className="font-bold text-green-800 mb-2">Готовый лонг-блок</h5>
                          <p className="text-sm text-green-700 mb-3">
                            Полностью собранный и протестированный двигатель готов к установке
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-green-200 text-green-800 text-xs">✓ Гарантия качества</Badge>
                            <Badge className="bg-green-200 text-green-800 text-xs">✓ Заводские параметры</Badge>
                            <Badge className="bg-green-200 text-green-800 text-xs">✓ Готов к установке</Badge>
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