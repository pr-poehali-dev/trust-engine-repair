import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const portfolioItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/files/476dfd07-6064-45c8-9a7e-c7654798d00d.JPG'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/files/4e76a87a-2dd8-4ec3-aabb-c72d04b22f52.JPG'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/files/1e4a4aab-3184-4cb1-96ab-04bb7f8a4dfc.JPG'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/files/2b04c66a-4d12-4f06-a278-509da7e0bf85.JPG'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/files/e49dc95e-a349-4997-b476-e28bd437430d.JPG'
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/files/7b1930e7-6ded-4915-a1e7-c685b527e523.JPG'
    },
    {
      id: 7,
      image: 'https://cdn.poehali.dev/files/36d10ba2-4a2b-4a4d-a616-1bcf4b2111c8.JPG'
    },
    {
      id: 8,
      image: 'https://cdn.poehali.dev/files/f4d657ea-f00d-4c7d-bf67-879782befe16.JPG'
    }
  ];

  return (
    <section id="gallery" className="relative py-16 lg:py-20">
      <div className="absolute z-0 top-8 left-10 w-40 h-40 bg-primary/20 rounded-3xl blur-lg"></div>
      <div className="absolute z-0 bottom-12 right-12 w-46 h-46 bg-secondary/18 rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-1/5 right-1/5 w-32 h-32 bg-primary/25 rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-1/4 left-1/4 w-36 h-36 bg-secondary/22 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-3/5 left-8 w-28 h-28 bg-primary/18 rounded-lg blur-sm"></div>
      <div className="absolute z-0 top-1/2 right-1/6 w-24 h-24 bg-secondary/24 rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-2/3 left-2/3 w-20 h-20 bg-primary/21 rounded-2xl blur-md"></div>
      <div className="absolute z-0 top-10 right-1/3 w-44 h-44 bg-secondary/15 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-1/6 left-1/2 w-16 h-16 bg-primary/26 rounded-lg blur-md"></div>
      <div className="absolute z-0 top-1/3 right-6 w-38 h-38 bg-secondary/19 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-1/8 left-5/6 w-22 h-22 bg-[#039fcb0d] rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-1/8 right-5/6 w-26 h-26 bg-primary/27 rounded-2xl blur-sm"></div>
      <div className="absolute z-0 top-7/8 left-1/8 w-34 h-34 bg-[#039fcb0d] rounded-lg blur-lg"></div>
      <div className="absolute z-0 top-2 left-24 w-32 h-32 bg-primary/16 rounded-3xl blur-2xl"></div>
      <div className="absolute z-0 top-0 right-32 w-28 h-28 bg-[#039fcb0d] rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-10 left-1/4 w-24 h-24 bg-primary/20 rounded-xl blur-lg"></div>
      <div className="absolute z-0 top-6 right-1/3 w-20 h-20 bg-[#039fcb0d] rounded-lg blur-md"></div>
      
      <div className="relative z-10 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle text="Наши работы" />
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
              Примеры <span className="text-primary font-bold">выполненных проектов</span>
            </h2>
            <p className="text-xl text-marine-steel max-w-3xl mx-auto">
              Профессиональное восстановление стационарных двигателей с гарантией качества
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => {
                  setSelectedImage(item.image);
                  setCurrentIndex(index);
                }}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={`Проект ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent" onClick={() => setSelectedImage(null)}>
              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
                    setCurrentIndex(newIndex);
                    setSelectedImage(portfolioItems[newIndex].image);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <Icon name="ChevronLeft" size={24} className="text-white" />
                </button>
                
                <img 
                  src={selectedImage || ''} 
                  alt="Увеличенное изображение"
                  className="max-w-full max-h-[95vh] object-contain rounded-lg cursor-default"
                  onClick={(e) => e.stopPropagation()}
                />
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;
                    setCurrentIndex(newIndex);
                    setSelectedImage(portfolioItems[newIndex].image);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <Icon name="ChevronRight" size={24} className="text-white" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  {currentIndex + 1} / {portfolioItems.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
              <Link to="/projects">
                <Icon name="Grid3X3" size={20} className="mr-2" />
                Посмотреть все проекты
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}