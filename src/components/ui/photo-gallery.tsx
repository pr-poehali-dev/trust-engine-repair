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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={24} />
          </button>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-20 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </>
          )}

          <div 
            className="relative max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhoto].url}
              alt={photos[selectedPhoto].alt}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg filter brightness-110 contrast-105 saturate-105"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedPhoto + 1} из {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}