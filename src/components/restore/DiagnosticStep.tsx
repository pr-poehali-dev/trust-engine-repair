import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';
import ProcessStepBadge from './ProcessStepBadge';

interface DiagnosticStepProps {
  photos: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
}

export default function DiagnosticStep({ photos }: DiagnosticStepProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8">
      <ProcessStepBadge step={1} color="primary" />
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
                <PhotoGallery photos={photos} />
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
  );
}