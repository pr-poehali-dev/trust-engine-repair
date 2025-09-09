import RepairHeroSection from '@/components/repair/RepairHeroSection';
import RepairProcessSection from '@/components/repair/RepairProcessSection';
import RepairBenefitsSection from '@/components/repair/RepairBenefitsSection';
import RepairPricingSection from '@/components/repair/RepairPricingSection';
import RepairCTASection from '@/components/repair/RepairCTASection';

export default function ServiceRepair() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <RepairHeroSection />
      <RepairProcessSection />
      <RepairBenefitsSection />
      <RepairPricingSection />
      <RepairCTASection />
    </div>
  );
}