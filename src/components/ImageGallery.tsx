import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="space-y-6">
        {title && (
          <h3 className="text-2xl font-bold text-marine-dark flex items-center gap-2">
            <Icon name="Camera" size={24} className="text-primary" />
            {title}
          </h3>
        )}
        
        {/* Главное изображение */}
        <Card className="overflow-hidden shadow-xl">
          <div className="relative group">
            <img 
              src={images[selectedImage]} 
              alt={`Изображение ${selectedImage + 1}`}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Навигационные кнопки */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={prevImage}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={nextImage}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
            
            {/* Кнопка полноэкранного режима */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white border-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={openFullscreen}
            >
              <Icon name="Expand" size={20} />
            </Button>
            
            {/* Индикатор изображения */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </Card>
        
        {/* Миниатюры */}
        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                selectedImage === index 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-transparent hover:border-marine-blue/50 hover:scale-102'
              }`}
            >
              <img 
                src={image} 
                alt={`Миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedImage === index && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <Icon name="Eye" size={16} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Модальное окно полноэкранного просмотра */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img 
              src={images[selectedImage]} 
              alt={`Полноэкранное изображение ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Закрыть */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={closeFullscreen}
            >
              <Icon name="X" size={20} />
            </Button>
            
            {/* Навигация в полноэкранном режиме */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevImage}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextImage}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
            
            {/* Индикатор в полноэкранном режиме */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full font-medium">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}