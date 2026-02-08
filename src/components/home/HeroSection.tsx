import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ComparisonSlider from "@/components/ui/comparison-slider";

interface HeroSectionProps {
  onContactClick: () => void;
  sliderImages: string[];
}

export default function HeroSection({
  onContactClick,
  sliderImages,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Десктоп: текст слева, изображение справа наложением */}
        <div className="hidden lg:block relative min-h-[550px]">
          {/* Текстовый контент */}
          <div className="relative z-10 max-w-none space-y-6 pt-8">
            <h1 className="text-[52px] leading-[1.2] max-w-[800px]">
              <span className="text-[#1a1a1a] font-normal">Стационарные </span>
              <span className="text-primary font-bold" style={{ 
                textShadow: '-2.5px -2.5px 0 #fff, 2.5px -2.5px 0 #fff, -2.5px 2.5px 0 #fff, 2.5px 2.5px 0 #fff, -3.5px 0 0 #fff, 3.5px 0 0 #fff, 0 -3.5px 0 #fff, 0 3.5px 0 #fff'
              }}>двигатели</span>
              <br />
              <span className="text-[#1a1a1a] text-[48px] font-light">для яхт и катеров</span>
            </h1>

            <div className="space-y-2">
              <p className="text-[16px] text-[#4a4a4a] leading-relaxed">
                Специализируемся на ремонте и восстановлении<br />
                стационарных двигателей таких марок
              </p>
              <p className="text-[16px] text-[#1a1a1a] font-semibold">
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

            <div className="flex gap-3 pt-3">
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

          {/* Comparison slider справа */}
          <div className="absolute top-0 right-0 w-[55%] h-full">
            <ComparisonSlider
              beforeImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/c928ad66-a8b3-4b57-bbc8-9892186941bd.png"
              afterImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/4396e610-144e-491c-bd59-9d55245d68da.png"
            />
          </div>
        </div>

        {/* Мобилка: grid с comparison slider сверху */}
        <div className="lg:hidden grid gap-8">
          <ComparisonSlider
            beforeImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/c928ad66-a8b3-4b57-bbc8-9892186941bd.png"
            afterImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/4396e610-144e-491c-bd59-9d55245d68da.png"
          />

          <div className="space-y-5 text-center">
            <h1 className="text-[32px] leading-[1.25]">
              <span className="text-[#1a1a1a] font-normal">Стационарные </span>
              <span className="text-primary font-bold">двигатели</span>
              <br />
              <span className="text-[#1a1a1a] text-[28px] font-light">для яхт и катеров</span>
            </h1>

            <div className="space-y-2">
              <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
                Специализируемся на ремонте и восстановлении<br />
                стационарных двигателей таких марок
              </p>
              <p className="text-[15px] text-[#1a1a1a] font-semibold">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 max-w-xs mx-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-5 rounded-lg text-[14px] shadow-md w-full"
                onClick={onContactClick}
              >
                Получить консультацию
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-medium px-6 py-5 rounded-lg text-[14px] uppercase tracking-wide w-full"
              >
                <Link to="/projects">
                  Смотреть работы
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
        </div>
      </div>
    </section>
  );
}