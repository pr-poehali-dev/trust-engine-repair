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
    <section className="relative overflow-visible bg-gradient-to-br from-[#EEF2FF] via-[#F5F7FF] to-white">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#1a1a1a] leading-[1.2]">
              Стационарные{" "}
              <span className="text-primary font-medium">двигатели</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-[44px] font-light">для яхт и катеров</span>
            </h1>

            <div className="space-y-2">
              <p className="text-base lg:text-[17px] text-[#4a4a4a] leading-relaxed">
                Специализируемся на ремонте и восстановлении<br />
                стационарных двигателей таких марок
              </p>
              <p className="text-base lg:text-[17px] text-[#1a1a1a] font-semibold">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-7 py-5 rounded-lg text-[15px] shadow-md"
                onClick={onContactClick}
              >
                Получить консультацию
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-medium px-7 py-5 rounded-lg text-[15px]"
              >
                <Link to="/projects">
                  СМОТРЕТЬ РАБОТЫ
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#666] pt-1">
              <span>Более 14 лет опыта</span>
              <span className="text-[#ccc]">·</span>
              <span>Более 500 выполненных проектов</span>
              <span className="text-[#ccc]">·</span>
              <span>Контроль качества</span>
            </div>
          </div>

          {/* Правая колонка с изображением */}
          <div className="relative order-1 lg:order-2 w-full lg:w-[120%] lg:-mr-[20%]">
            <img 
              src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/e14469ab-4343-4a02-b9bb-198d20c52893.png"
              alt="Стационарный двигатель Mercury для яхт и катеров"
              className="w-full h-auto max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}