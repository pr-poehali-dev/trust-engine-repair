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
    'https://cdn.poehali.dev/files/e09db305-2603-4837-80e4-8ec8d050de04.jpg',
    'https://cdn.poehali.dev/files/e02cbe74-095b-4485-9ee8-94dbd7c242b3.jpg',
    'https://cdn.poehali.dev/files/71b32441-5803-447b-b8c6-33091e7661a3.jpg',
    'https://cdn.poehali.dev/files/4799a2a8-4b79-456f-a2de-eb3ef233bb85.jpg',
    'https://cdn.poehali.dev/files/e9f180f3-2bee-40cc-81bd-6e5c3e1fc5fe.jpg',
    'https://cdn.poehali.dev/files/6c3e20ca-54d7-4993-b37d-4f2bcf09645d.jpg'
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh} enabled={!mobileMenuOpen}>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Фон с водой под градиентами - первый слой */}
        <div 
          className="absolute top-0 left-0 w-full z-0"
          style={{
            height: '800px',
            maxWidth: '1600px',
            margin: '0 auto',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundImage: 'url(https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/a35bc3e4-95d1-40d0-b3fa-fde12ffbf204.png)',
            backgroundSize: 'contain',
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