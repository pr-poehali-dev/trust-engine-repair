import { useState } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import RestoreHeroSection from '@/components/restore/RestoreHeroSection';
import RestoreProcessSection from '@/components/restore/RestoreProcessSection';
import RestoreBenefitsSection from '@/components/restore/RestoreBenefitsSection';
import RestorePricingSection from '@/components/restore/RestorePricingSection';
import RestoreCTASection from '@/components/restore/RestoreCTASection';

export default function ServiceRestore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />
      
      <RestoreHeroSection />
      <RestoreProcessSection />
      <RestoreBenefitsSection />
      <RestorePricingSection />
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