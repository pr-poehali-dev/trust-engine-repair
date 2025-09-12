import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ProcessStepBadge from './ProcessStepBadge';

export default function RestorationStep() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
      <ProcessStepBadge step={3} color="red" />
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
  );
}