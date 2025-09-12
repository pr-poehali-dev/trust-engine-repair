import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';
import ProcessStepBadge from './ProcessStepBadge';

interface TestingStepProps {
  photos: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
}

export default function TestingStep({ photos }: TestingStepProps) {
  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col lg:flex-row items-start gap-4 md:gap-8 mt-12">
      <ProcessStepBadge step={5} color="green" />
      <div className="flex-grow w-full max-w-full">
        <Card className="w-full max-w-full bg-gradient-to-br from-green-50/50 to-white backdrop-blur-sm border border-green-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Icon name="PlayCircle" size={24} className="text-green-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 break-words">Тестирование и настройка</CardTitle>
                  <CardDescription className="text-sm md:text-base text-gray-600 mt-1 break-words">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-6">
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
              <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                <PhotoGallery photos={photos} />
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
  );
}