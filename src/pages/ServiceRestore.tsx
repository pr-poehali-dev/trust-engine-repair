import { useState, useEffect } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import RestoreHeroSection from '@/components/restore/RestoreHeroSection';
import RestoreProcessSection from '@/components/restore/RestoreProcessSection';
import RestoreBenefitsSection from '@/components/restore/RestoreBenefitsSection';

import RestoreCTASection from '@/components/restore/RestoreCTASection';

export default function ServiceRestore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Обработка якорных ссылок
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
    <div className="min-h-screen bg-white">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />
      
      <RestoreHeroSection />
      <RestoreProcessSection />
      <RestoreBenefitsSection />
      <RestoreCTASection onContactClick={() => setContactFormOpen(true)} />

      <FooterSection />

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}