import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';
import ProcessStepBadge from './ProcessStepBadge';

interface DisassemblyStepProps {
  photos: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
}

export default function DisassemblyStep({ photos }: DisassemblyStepProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 mt-12 w-full max-w-full overflow-hidden">
      <ProcessStepBadge step={2} color="orange" />
      <div className="flex-grow w-full max-w-full">
        <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-full">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Wrench" size={24} className="text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 break-words">Разборка и дефектовка</CardTitle>
                  <CardDescription className="text-gray-600 mt-1 text-sm md:text-base break-words">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-6">
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
              <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6">
                <PhotoGallery photos={photos} />
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
  );
}