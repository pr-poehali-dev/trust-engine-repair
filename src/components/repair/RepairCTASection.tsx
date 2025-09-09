import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function RepairCTASection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Нужен качественный ремонт двигателя?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Свяжитесь с нами для бесплатной диагностики и консультации
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
            <Icon name="Phone" size={20} className="mr-2" />
            +7 (xxx) xxx-xx-xx
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}