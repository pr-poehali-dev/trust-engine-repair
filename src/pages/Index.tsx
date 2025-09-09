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
    '/img/c65a7395-9ada-46a3-91ad-d430abfa1e8e.jpg',
    '/img/01d60de6-1d1f-42bf-af90-d433d2d1bed3.jpg',
    '/img/07bae983-4b7e-4c23-b096-c8cb1a7b38bd.jpg',
    '/img/6dfaa8a1-1b1b-48a8-914c-60cb8fb83c49.jpg',
    '/img/b5a19461-13e4-4104-91f7-e244311173c1.jpg',
    '/img/59c8beda-27f0-4fc2-92d4-b9a70a339d30.jpg'
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
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
        
        <ServicesSection />
        
        <WhyUsSection />
        
        <BenefitsSection />
        
        <GallerySection />
        
        <GuaranteesSection />
        
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