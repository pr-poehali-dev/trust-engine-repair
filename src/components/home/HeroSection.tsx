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
    <section className="relative bg-gradient-to-br from-[#f5f7ff] to-white overflow-hidden min-h-[600px] lg:min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-gray-900 leading-tight">
              Стационарные{" "}
              <span className="text-primary font-medium">двигатели</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light">для яхт и катеров</span>
            </h1>

            <div className="space-y-3">
              <p className="text-base lg:text-lg text-brand-gray-700 leading-relaxed">
                Специализируемся на ремонте и восстановлении<br />
                стационарных двигателей таких марок
              </p>
              <p className="text-base lg:text-lg text-brand-gray-900 font-semibold">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm lg:text-base text-brand-gray-600">
              <span>Более 14 лет опыта</span>
              <span>•</span>
              <span>Более 500 выполненных проектов</span>
              <span>•</span>
              <span>Контроль качества</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-lg text-base shadow-md"
                onClick={onContactClick}
              >
                Получить консультацию
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-medium px-8 py-6 rounded-lg text-base"
              >
                <Link to="/projects">
                  СМОТРЕТЬ РАБОТЫ
                </Link>
              </Button>
            </div>
          </div>

          {/* Правая колонка с изображением */}
          <div className="relative">
            {/* Placeholder для изображения */}
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-brand-gray-100 rounded-2xl flex items-center justify-center">
                <p className="text-brand-gray-400 text-center px-4">
                  Здесь будет изображение двигателя и лодки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}