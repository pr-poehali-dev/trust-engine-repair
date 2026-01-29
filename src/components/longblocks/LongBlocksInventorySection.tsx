import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LongBlock {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  volume: string;
  configuration: string;
  power: string;
  features: string[];
  price: string;
  advantage: string;
  altTag: string;
}

export default function LongBlocksInventorySection() {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

  const longBlocks: LongBlock[] = [
    {
      id: '1',
      title: 'Volvo Penta 4.3GL Carburetor',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, карбюраторный',
      volume: '4.3 л (262 куб. дюйма)',
      configuration: 'V6',
      power: '~ 190 л.с.',
      features: ['Совместимость: Приводы Volvo Penta SX, DP'],
      price: 'от 350 000 ₽',
      advantage: 'Контроль качества на каждом этапе',
      altTag: 'Восстановленный лонг-блок двигателя Volvo Penta 4.3GL Carburetor для заказа'
    },
    {
      id: '2',
      title: 'Volvo Penta 4.3 GXi/EFI',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, с электронным впрыском (EFI)',
      volume: '4.3 л',
      configuration: 'V6',
      power: '~ 220-230 л.с.',
      features: ['Система EFI', 'Улучшенная экономичность'],
      price: 'от 370 000 ₽',
      advantage: 'Сборка сертифицированными специалистами',
      altTag: 'Восстановленный лонг-блок двигателя Volvo Penta 4.3 GXi/EFI для заказа'
    },
    {
      id: '3',
      title: 'Mercruiser 4.3L Alpha/Bravo Carburetor',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, карбюраторный',
      volume: '4.3 л (262 куб. дюйма)',
      configuration: 'V6',
      power: '~ 190-200 л.с.',
      features: ['Привод: Совместим с Sterndrive Alpha, Bravo'],
      price: 'от 350 000 ₽',
      advantage: 'Использование оригинальных компонентов',
      altTag: 'Восстановленный лонг-блок двигателя Mercruiser 4.3L Alpha/Bravo Carburetor для заказа'
    },
    {
      id: '4',
      title: 'Mercruiser 4.3L MPI',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, с многоточечным впрыском (MPI)',
      volume: '4.3 л',
      configuration: 'V6',
      power: '~ 220-240 л.с.',
      features: ['Система Mercury MPI'],
      price: 'от 380 000 ₽',
      advantage: 'Стендовые испытания после сборки',
      altTag: 'Восстановленный лонг-блок двигателя Mercruiser 4.3L MPI для заказа'
    },
    {
      id: '5',
      title: 'Volvo Penta 5.7GL',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, карбюраторный',
      volume: '5.7 л (350 куб. дюйма)',
      configuration: 'V8',
      power: '~ 260 л.с.',
      features: ['Классический карбюраторный V8'],
      price: 'от 500 000 ₽',
      advantage: 'Контроль качества на каждом этапе',
      altTag: 'Восстановленный лонг-блок двигателя Volvo Penta 5.7GL для заказа'
    },
    {
      id: '6',
      title: 'Volvo Penta 5.7Gi',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, с электронным впрыском (EFI)',
      volume: '5.7 л (350 куб. дюйма)',
      configuration: 'V8',
      power: '~ 300 л.с.',
      features: ['Система EFI', 'Увеличенная мощность'],
      price: 'от 540 000 ₽',
      advantage: 'Сборка сертифицированными специалистами',
      altTag: 'Восстановленный лонг-блок двигателя Volvo Penta 5.7Gi для заказа'
    },
    {
      id: '7',
      title: 'Mercruiser 5.7L',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, карбюраторный',
      volume: '5.7 л (350 куб. дюйма)',
      configuration: 'V8',
      power: '~ 250 л.с.',
      features: ['Классический American V8'],
      price: 'от 500 000 ₽',
      advantage: 'Использование оригинальных компонентов',
      altTag: 'Восстановленный лонг-блок двигателя Mercruiser 5.7L для заказа'
    },
    {
      id: '8',
      title: 'Mercruiser 5.7L MPI',
      subtitle: 'Восстановленный лонг-блок | Гарантия качества сборки',
      type: 'Бензиновый, с многоточечным впрыском (MPI)',
      volume: '5.7 л (350 куб. дюйма)',
      configuration: 'V8',
      power: '~ 300 л.с.',
      features: ['Система Mercury MPI', 'Современная топливная система'],
      price: 'от 530 000 ₽',
      advantage: 'Стендовые испытания после сборки',
      altTag: 'Восстановленный лонг-блок двигателя Mercruiser 5.7L MPI для заказа'
    }
  ];

  const handleOrderClick = () => {
    setPhoneModalOpen(true);
  };

  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-white via-primary/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Лонг-блоки в наличии
            </h2>
            <p className="text-lg text-gray-600">
              Готовые восстановленные двигатели с гарантией качества сборки
            </p>
          </div>

          {/* Группа 4.3 л */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon name="Engine" size={24} className="text-primary" fallback="Cog" />
              Двигатели 4.3 л
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {longBlocks.slice(0, 4).map((block) => (
                <Card 
                  key={block.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <Badge className="mb-3 bg-green-500 text-white border-none shadow-sm">
                        В наличии
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {block.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="ShieldCheck" size={16} className="text-primary flex-shrink-0" />
                        <p className="text-sm font-semibold text-primary">
                          {block.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Icon name="Fuel" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Тип: {block.type}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Gauge" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Объём: {block.volume}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Settings" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Конфигурация: {block.configuration}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Zap" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Мощность: {block.power}</span>
                      </div>
                      {block.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="CheckCircle" size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="bg-blue-50 rounded-lg p-3 mb-3">
                        <p className="text-xs text-blue-700 font-medium mb-1">
                          Ключевое преимущество:
                        </p>
                        <p className="text-sm text-blue-900 font-semibold">
                          {block.advantage}
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-3">
                        {block.price}
                      </div>
                      <Button 
                        onClick={handleOrderClick}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
                      >
                        <Icon name="Phone" size={16} className="mr-2" />
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Группа 5.7 л */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon name="Engine" size={24} className="text-primary" fallback="Cog" />
              Двигатели 5.7 л
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {longBlocks.slice(4, 8).map((block) => (
                <Card 
                  key={block.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <Badge className="mb-3 bg-green-500 text-white border-none shadow-sm">
                        В наличии
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {block.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="ShieldCheck" size={16} className="text-primary flex-shrink-0" />
                        <p className="text-sm font-semibold text-primary">
                          {block.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Icon name="Fuel" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Тип: {block.type}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Gauge" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Объём: {block.volume}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Settings" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Конфигурация: {block.configuration}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Zap" size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Мощность: {block.power}</span>
                      </div>
                      {block.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="CheckCircle" size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="bg-blue-50 rounded-lg p-3 mb-3">
                        <p className="text-xs text-blue-700 font-medium mb-1">
                          Ключевое преимущество:
                        </p>
                        <p className="text-sm text-blue-900 font-semibold">
                          {block.advantage}
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-3">
                        {block.price}
                      </div>
                      <Button 
                        onClick={handleOrderClick}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
                      >
                        <Icon name="Phone" size={16} className="mr-2" />
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-start gap-3 justify-center">
              <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-blue-800 font-semibold mb-1">
                  Не нашли нужную модель?
                </p>
                <p className="text-sm text-blue-700">
                  Мы изготовим лонг-блок под заказ для любой модели двигателя. Срок изготовления — 14-21 день.
                  Конечная стоимость зависит от конкретной конфигурации и состояния блока заказчика.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Modal */}
      <Dialog open={phoneModalOpen} onOpenChange={setPhoneModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Позвоните для заказа
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Наши специалисты помогут подобрать лонг-блок и уточнят детали заказа
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="text-4xl font-bold text-primary">
              +7 (999) 555-00-12
            </div>
            <a 
              href="tel:+79995550012"
              className="w-full"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </a>
            <p className="text-sm text-gray-600 text-center">
              Звоните ежедневно с 9:00 до 20:00
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
