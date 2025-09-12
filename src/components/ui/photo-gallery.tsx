import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface PhotoGalleryProps {
  photos: Array<{
    id: string;
    url: string;
    alt: string;
    thumbnail?: string;
  }>;
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [mainPhoto, setMainPhoto] = useState(0);

  const openModal = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  if (photos.length === 0) return null;

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Icon name="Camera" size={16} className="text-primary" />
          <span className="text-sm font-medium text-gray-700">Фотографии диагностики</span>
        </div>
        
        <div className="space-y-2">
          {/* Главное фото */}
          <div
            className="relative aspect-[3/2] rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
            onClick={() => openModal(mainPhoto)}
          >
            <img
              src={photos[mainPhoto].url}
              alt={photos[mainPhoto].alt}
              className="w-full h-full object-cover object-center transition-transform group-hover:scale-105 filter brightness-110 contrast-105 saturate-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Icon 
                name="ZoomIn" 
                size={24} 
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" 
              />
            </div>
          </div>

          {/* Миниатюры */}
          {photos.length > 1 && (
            <div className="flex gap-2">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`relative aspect-square w-16 rounded-md overflow-hidden cursor-pointer group ${
                    mainPhoto === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setMainPhoto(index)}
                >
                  <img
                    src={photo.thumbnail || photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transition-transform group-hover:scale-105 filter brightness-110 contrast-105 saturate-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90"
          onClick={closeModal}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-[60] w-12 h-12 bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/30 shadow-lg"
          >
            <Icon name="X" size={24} />
          </button>

          {/* Стрелки навигации */}
          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/30 shadow-lg"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/30 shadow-lg"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </>
          )}

          {/* Контейнер изображения */}
          <div className="flex items-center justify-center h-full w-full p-4">
            <div 
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhoto].url}
                alt={photos[selectedPhoto].alt}
                className="max-w-[calc(100vw-6rem)] max-h-[calc(100vh-10rem)] md:max-w-4xl md:max-h-[80vh] object-contain rounded-lg filter brightness-110 contrast-105 saturate-105"
              />
              
              {/* Индикатор страниц */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                {selectedPhoto + 1} из {photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}