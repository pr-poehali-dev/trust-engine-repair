import { useState } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import RepairHeroSection from '@/components/repair/RepairHeroSection';
import RepairProcessSection from '@/components/repair/RepairProcessSection';
import RepairBenefitsSection from '@/components/repair/RepairBenefitsSection';

import RepairCTASection from '@/components/repair/RepairCTASection';

export default function ServiceRepair() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />
      
      <RepairHeroSection />
      <RepairProcessSection />
      <RepairBenefitsSection />
      <RepairCTASection onContactClick={() => setContactFormOpen(true)} />

      <FooterSection />

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}