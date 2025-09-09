import RestoreHeroSection from '@/components/restore/RestoreHeroSection';
import RestoreProcessSection from '@/components/restore/RestoreProcessSection';
import RestoreBenefitsSection from '@/components/restore/RestoreBenefitsSection';
import RestorePricingSection from '@/components/restore/RestorePricingSection';
import RestoreCTASection from '@/components/restore/RestoreCTASection';

export default function ServiceRestore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <RestoreHeroSection />
      <RestoreProcessSection />
      <RestoreBenefitsSection />
      <RestorePricingSection />
      <RestoreCTASection />
    </div>
  );
}