import { useState, useEffect } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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
  },
  {
    id: 9,
    image: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG',
    title: 'Разборка блока',
    description: 'MerCruiser 5.7L'
  },
  {
    id: 10,
    image: 'https://cdn.poehali.dev/files/e02cbe74-095b-4485-9ee8-94dbd7c242b3.jpg',
    title: 'Замена поршневой группы',
    description: 'Indmar'
  },
  {
    id: 11,
    image: 'https://cdn.poehali.dev/files/71b32441-5803-447b-b8c6-33091e7661a3.jpg',
    title: 'Восстановление коленвала',
    description: 'Yamaha'
  },
  {
    id: 12,
    image: 'https://cdn.poehali.dev/files/4799a2a8-4b79-456f-a2de-eb3ef233bb85.jpg',
    title: 'Сборка двигателя',
    description: 'Kodiak Marine'
  }
];

export default function Projects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
        
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center w-full max-w-4xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
              <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">Портфолио работ</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Наши <span className="text-primary">работы</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Примеры успешно выполненных проектов по восстановлению и ремонту стационарных двигателей. 
            Каждый проект — это история возвращения мощности и надежности.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Двигателей отремонтировано</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600 font-medium">Лет опыта</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Довольных клиентов</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-gray-600 font-medium">Брендов двигателей</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Хотите стать следующим успешным проектом?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Доверьте восстановление вашего двигателя профессионалам с 12-летним опытом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />

      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}
