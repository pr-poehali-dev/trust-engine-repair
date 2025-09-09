import LongBlocksHeroSection from '@/components/longblocks/LongBlocksHeroSection';
import LongBlocksProcessSection from '@/components/longblocks/LongBlocksProcessSection';
import LongBlocksBenefitsSection from '@/components/longblocks/LongBlocksBenefitsSection';
import LongBlocksPricingSection from '@/components/longblocks/LongBlocksPricingSection';
import LongBlocksCTASection from '@/components/longblocks/LongBlocksCTASection';

export default function LongBlocks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <LongBlocksHeroSection />
      <LongBlocksProcessSection />
      <LongBlocksBenefitsSection />
      <LongBlocksPricingSection />
      <LongBlocksCTASection />
    </div>
  );
}