import { useState, useEffect } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import GallerySection from '@/components/home/GallerySection';
import GuaranteesSection from '@/components/home/GuaranteesSection';
import ContactSection from '@/components/home/ContactSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import MultiStepForm from '@/components/MultiStepForm';
import FloatingActionButton from '@/components/FloatingActionButton';
import PullToRefresh from '@/components/PullToRefresh';
import OfflineBanner from '@/components/OfflineBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { useAnalytics } from '@/utils/analytics';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [multiStepFormOpen, setMultiStepFormOpen] = useState(false);
  const analytics = useAnalytics();

  // Трекинг времени на странице
  useEffect(() => {
    analytics.trackPageView('home');
    const timeTracker = analytics.trackTimeOnPage();
    
    return timeTracker;
  }, [analytics]);

  // Обработка якорных ссылок
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Дополнительная задержка для полной загрузки компонентов
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 80; // Высота навигации
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

    // Обработка при загрузке страницы
    handleHashChange();

    // Обработка при изменении hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Обработка обновления страницы
  const handleRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    analytics.trackEvent({
      event: 'pull_to_refresh',
      category: 'Interaction',
      action: 'refresh',
      label: 'home_page'
    });
    window.location.reload();
  };
  
  const sliderImages = [
    'https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3a80a092-b801-4783-beaa-cda72bd137cb.png',
    'https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3e0d87d7-c86b-4eaa-937c-57339fe93cbc.png'
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh} enabled={!mobileMenuOpen}>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Фон с водой под градиентами - первый слой */}
        <div 
          className="absolute top-0 left-0 w-full z-0"
          style={{
            height: '800px',
            backgroundImage: 'url(https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/a35bc3e4-95d1-40d0-b3fa-fde12ffbf204.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Градиенты над фоном - второй слой */}
        <div 
          className="absolute top-0 left-0 w-full z-[1]"
          style={{
            height: '800px',
            background: 'radial-gradient(ellipse 800px 600px at 20% 30%, #EEF2FF 0%, #F5F7FF 40%, transparent 70%)'
          }}
        />
        
        <div className="relative z-10">
          <NavigationSection
            mobileMenuOpen={mobileMenuOpen}
            onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            onContactClick={() => setContactFormOpen(true)}
          />
          
          <HeroSection
            onContactClick={() => setContactFormOpen(true)}
            sliderImages={sliderImages}
          />
        </div>
        
        <ServicesSection id="services" />
        
        <BenefitsSection />
        
        <WhyUsSection id="why-us" />
        
        <GallerySection />
        
        <GuaranteesSection id="guarantees" onContactClick={() => setContactFormOpen(true)} />
        
        <ContactSection />
        
        <FooterSection />

        {/* Contact Form Modal */}
        <ContactForm 
          isOpen={contactFormOpen}
          onClose={() => setContactFormOpen(false)}
        />

        {/* Multi-Step Form */}
        <MultiStepForm
          isOpen={multiStepFormOpen}
          onClose={() => setMultiStepFormOpen(false)}
        />

        {/* Floating Action Button - только на мобильных */}
        <div className="md:hidden">
          <FloatingActionButton />
        </div>

        {/* Offline Banner */}
        <OfflineBanner />
      </div>
    </PullToRefresh>
  );
}