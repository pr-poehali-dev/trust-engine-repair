import { useState } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import LongBlocksHeroSection from '@/components/longblocks/LongBlocksHeroSection';
import LongBlocksInventorySection from '@/components/longblocks/LongBlocksInventorySection';
import LongBlocksProcessSection from '@/components/longblocks/LongBlocksProcessSection';
import LongBlocksBenefitsSection from '@/components/longblocks/LongBlocksBenefitsSection';
import LongBlocksCTASection from '@/components/longblocks/LongBlocksCTASection';

export default function LongBlocks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ 
      background: 'radial-gradient(ellipse 800px 600px at 20% 30%, #EEF2FF 0%, #F5F7FF 40%, transparent 70%)'
    }}>
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />
      
      <LongBlocksHeroSection />
      <LongBlocksInventorySection />
      <LongBlocksProcessSection />
      <LongBlocksBenefitsSection />
      <LongBlocksCTASection onContactClick={() => setContactFormOpen(true)} />

      <FooterSection />

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}