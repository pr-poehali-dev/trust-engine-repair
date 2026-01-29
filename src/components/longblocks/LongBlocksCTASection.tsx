import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LongBlocksCTASectionProps {
  onContactClick?: () => void;
}

export default function LongBlocksCTASection({ onContactClick }: LongBlocksCTASectionProps) {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
          <Icon name="Lightbulb" size={36} />
          Нужен лонг-блок для вашего двигателя?
        </h2>
        <p className="text-xl mb-8 opacity-90 flex items-center justify-center gap-2">
          <Icon name="Phone" size={24} />
          Получите консультацию специалиста и точный расчет стоимости
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold" onClick={onContactClick}>
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold" onClick={onContactClick}>
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
}