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
import SectionSeparator from '@/components/ui/SectionSeparator';
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
    'https://cdn.poehali.dev/files/fa538d5f-21ab-4b35-a595-5b9dca841f5c.jpg',
    'https://cdn.poehali.dev/files/dd89e4b1-5705-418a-84b7-4841c120d189.jpg',
    'https://cdn.poehali.dev/files/e9db4344-bf21-4dd5-9a26-9c299533c229.jpg',
    'https://cdn.poehali.dev/files/ee3eb90a-2c16-4144-9fb0-64f097e14e11.jpg',
    'https://cdn.poehali.dev/files/5c4e00a1-0034-4bde-a7f1-dee200d28490.jpg',
    'https://cdn.poehali.dev/files/f3a88b95-0f65-463a-b23b-9c1465301093.jpg',
    'https://cdn.poehali.dev/files/b163f792-26c9-4578-a9ba-b9328e56ff08.jpg',
    'https://cdn.poehali.dev/files/759bb574-0830-464d-a4ed-733474a377fe.jpg'
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh} enabled={!mobileMenuOpen}>
      <div className="min-h-screen bg-[#f2f6fa]">
        <NavigationSection
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          onContactClick={() => setContactFormOpen(true)}
        />
        
        <HeroSection
          onContactClick={() => setContactFormOpen(true)}
          sliderImages={sliderImages}
        />
        
        <ServicesSection id="services" />
        <SectionSeparator text="Наши преимущества" theme="light" />
        
        <WhyUsSection id="why-us" />
        <SectionSeparator text="Выгодное предложение" theme="light-to-gray" />
        
        <BenefitsSection />
        <SectionSeparator text="Наши работы" theme="gray-to-blue" />
        
        <GallerySection />
        <SectionSeparator text="Наши гарантии" theme="blue-to-light" />
        
        <GuaranteesSection id="guarantees" onContactClick={() => setContactFormOpen(true)} />
        <SectionSeparator text="Связаться с нами" theme="light" />
        
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