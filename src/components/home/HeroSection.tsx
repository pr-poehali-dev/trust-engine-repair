import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onContactClick: () => void;
  sliderImages: string[];
}

export default function HeroSection({
  onContactClick,
  sliderImages,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F5F7FF] to-white min-h-[500px] lg:min-h-[600px]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="relative">
          {/* Текстовый контент */}
          <div className="relative z-10 max-w-[600px] space-y-5 lg:space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.15]">
              <span className="text-[#1a1a1a] font-normal">Стационарные </span>
              <span className="text-primary font-medium">двигатели</span>
              <br />
              <span className="text-[#1a1a1a] text-[32px] sm:text-[40px] lg:text-[48px] font-light">для яхт и катеров</span>
            </h1>

            <div className="space-y-2">
              <p className="text-[15px] lg:text-[16px] text-[#4a4a4a] leading-relaxed">
                Специализируемся на ремонте и восстановлении<br />
                стационарных двигателей таких марок
              </p>
              <p className="text-[15px] lg:text-[16px] text-[#1a1a1a] font-semibold">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            <div className="flex items-center gap-x-2 text-[13px] text-[#666] pt-2">
              <span>Более 14 лет опыта</span>
              <span className="text-[#ccc]">·</span>
              <span>Более 500 выполненных проектов</span>
              <span className="text-[#ccc]">·</span>
              <span>Контроль качества</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-5 rounded-lg text-[15px] shadow-md"
                onClick={onContactClick}
              >
                Получить консультацию
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-medium px-8 py-5 rounded-lg text-[15px] uppercase tracking-wide"
              >
                <Link to="/projects">
                  Смотреть работы
                </Link>
              </Button>
            </div>
          </div>

          {/* Изображение справа */}
          <div className="absolute top-0 right-0 w-[65%] h-full hidden lg:block pointer-events-none">
            <img 
              src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/e14469ab-4343-4a02-b9bb-198d20c52893.png"
              alt="Стационарный двигатель Mercury для яхт и катеров"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto max-w-none"
            />
          </div>

          {/* Изображение для мобилки */}
          <div className="lg:hidden mt-8">
            <img 
              src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/e14469ab-4343-4a02-b9bb-198d20c52893.png"
              alt="Стационарный двигатель Mercury для яхт и катеров"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}