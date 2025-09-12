import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';
import ProcessStepBadge from './ProcessStepBadge';

interface AssemblyStepProps {
  photos: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
}

export default function AssemblyStep({ photos }: AssemblyStepProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
      <ProcessStepBadge step={4} color="blue" />
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
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
              <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                <PhotoGallery photos={photos} />
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
  );
}