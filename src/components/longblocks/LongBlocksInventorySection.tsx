import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import PhotoGallery from '@/components/ui/photo-gallery';
import ContactForm from '@/components/ContactForm';

interface LongBlock {
  id: string;
  name: string;
  model: string;
  year: string;
  photos: Array<{ id: string; url: string; alt: string }>;
  specs: string[];
}

export default function LongBlocksInventorySection() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [selectedLongBlock, setSelectedLongBlock] = useState<string>('');

  const longBlocks: LongBlock[] = [
    {
      id: '1',
      name: 'Volvo Penta D6-350',
      model: 'D6-350',
      year: '2018',
      photos: [
        { id: '1', url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG', alt: 'Volvo Penta D6-350 вид 1' },
        { id: '2', url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG', alt: 'Volvo Penta D6-350 вид 2' },
        { id: '3', url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', alt: 'Volvo Penta D6-350 вид 3' }
      ],
      specs: [
        'Мощность: 350 л.с.',
        'Объем: 5.5 л',
        'Цилиндры: 6 рядных',
        'Турбонаддув'
      ]
    },
    {
      id: '2',
      name: 'Mercruiser 5.7L V8',
      model: '5.7L MPI',
      year: '2016',
      photos: [
        { id: '1', url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG', alt: 'Mercruiser 5.7L вид 1' },
        { id: '2', url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG', alt: 'Mercruiser 5.7L вид 2' },
        { id: '3', url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', alt: 'Mercruiser 5.7L вид 3' }
      ],
      specs: [
        'Мощность: 300 л.с.',
        'Объем: 5.7 л',
        'Цилиндры: V8',
        'Система MPI'
      ]
    },
    {
      id: '3',
      name: 'Yamaha F150',
      model: 'F150XA',
      year: '2019',
      photos: [
        { id: '1', url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG', alt: 'Yamaha F150 вид 1' },
        { id: '2', url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG', alt: 'Yamaha F150 вид 2' },
        { id: '3', url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', alt: 'Yamaha F150 вид 3' }
      ],
      specs: [
        'Мощность: 150 л.с.',
        'Объем: 2.7 л',
        'Цилиндры: 4 рядных',
        'Впрыск топлива'
      ]
    },
    {
      id: '4',
      name: 'Indmar Monsoon 6.2L',
      model: 'Monsoon 6.2',
      year: '2017',
      photos: [
        { id: '1', url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG', alt: 'Indmar Monsoon вид 1' },
        { id: '2', url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG', alt: 'Indmar Monsoon вид 2' },
        { id: '3', url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', alt: 'Indmar Monsoon вид 3' }
      ],
      specs: [
        'Мощность: 380 л.с.',
        'Объем: 6.2 л',
        'Цилиндры: V8',
        'Прямой впрыск'
      ]
    },
    {
      id: '5',
      name: 'Volvo Penta D4-225',
      model: 'D4-225',
      year: '2020',
      photos: [
        { id: '1', url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG', alt: 'Volvo Penta D4-225 вид 1' },
        { id: '2', url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG', alt: 'Volvo Penta D4-225 вид 2' },
        { id: '3', url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', alt: 'Volvo Penta D4-225 вид 3' }
      ],
      specs: [
        'Мощность: 225 л.с.',
        'Объем: 3.7 л',
        'Цилиндры: 4 рядных',
        'Турбодизель'
      ]
    },
    {
      id: '6',
      name: 'Kodiak Marine 5.3L',
      model: 'Marine 5.3',
      year: '2015',
      photos: [
        { id: '1', url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG', alt: 'Kodiak Marine вид 1' },
        { id: '2', url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG', alt: 'Kodiak Marine вид 2' },
        { id: '3', url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', alt: 'Kodiak Marine вид 3' }
      ],
      specs: [
        'Мощность: 260 л.с.',
        'Объем: 5.3 л',
        'Цилиндры: V8',
        'Карбюраторный'
      ]
    }
  ];

  const handleOrderClick = (longBlockName: string) => {
    setSelectedLongBlock(longBlockName);
    setContactFormOpen(true);
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
              Готовые восстановленные двигатели для различных моделей катеров и яхт
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {longBlocks.map((block) => (
              <Card 
                key={block.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-2xl overflow-hidden">
                    <PhotoGallery photos={block.photos} />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white border-none shadow-lg">
                    В наличии
                  </Badge>
                </div>

                <CardContent className="p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {block.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Calendar" size={14} />
                      <span>Модель: {block.model}</span>
                      <span className="text-gray-400">•</span>
                      <span>Год: {block.year}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {block.specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleOrderClick(block.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => {
          setContactFormOpen(false);
          setSelectedLongBlock('');
        }}
      />
    </>
  );
}
