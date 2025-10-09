import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

export default function GallerySection() {
  const portfolioItems = [
    {
      id: 1,
      image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
      title: 'Капитальный ремонт',
      description: 'Volvo Penta D6-350'
    },
    {
      id: 2,
      image: '/img/296a2fc5-c78b-4f2f-a785-0cd8e650a619.jpg',
      title: 'Замена лонг-блока',
      description: 'Mercruiser 5.7L'
    },
    {
      id: 3,
      image: '/img/c79d6585-a600-4aea-9d31-53374ad1cad5.jpg',
      title: 'Ремонт системы питания',
      description: 'Yamaha F150'
    },
    {
      id: 4,
      image: '/img/c5cc0155-a2cd-402d-8127-cdf0d98da013.jpg',
      title: 'Профилактика',
      description: 'Indmar Monsoon 6.2L'
    },
    {
      id: 5,
      image: '/img/265424a9-abd7-4a7c-a05b-5707bb54352d.jpg',
      title: 'Ремонт турбины',
      description: 'Volvo Penta D4-225'
    },
    {
      id: 6,
      image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
      title: 'Восстановление под ключ',
      description: 'Mercury Verado 300'
    },
    {
      id: 7,
      image: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG',
      title: 'Диагностика двигателя',
      description: 'Mercury MerCruiser'
    },
    {
      id: 8,
      image: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG',
      title: 'Ремонт коллектора',
      description: 'Volvo Penta'
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
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-base mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-200 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        
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