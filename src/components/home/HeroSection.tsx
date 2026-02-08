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
    <section className="relative overflow-hidden pb-12 lg:pb-0">
      {/* Фон с водой - первый слой, фиксированный размер 1600px */}
      <div 
        className="absolute inset-0 z-0 flex justify-center items-end overflow-hidden"
      >
        <div 
          className="w-full"
          style={{
            maxWidth: '1600px',
            height: '100%',
            backgroundImage: 'url(https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/a35bc3e4-95d1-40d0-b3fa-fde12ffbf204.png)',
            backgroundSize: '100% auto',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
      
      {/* Градиенты над фоном воды - второй слой */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(220, 235, 255, 0.8) 0%, rgba(240, 248, 255, 0.5) 50%, transparent 80%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Десктоп: текст слева, изображение справа наложением */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
          {/* Текстовый контент */}
          <div className="relative z-10 space-y-6 pt-8">
            <h1 className="text-[56px] leading-[1.15] font-montserrat">
              <span className="text-[#0f1419] font-normal">Новый рассвет</span>
              <br />
              <span className="text-[#0f1419] font-normal">вашего </span>
              <span className="text-[#1d4cd7] font-bold">двигателя</span>
            </h1>

            <div className="space-y-3">
              <p className="text-[17px] text-[#475569] leading-relaxed font-normal">
                Специализируемся на ремонте<br />
                и восстановлении стационарных двигателей<br />
                таких марок
              </p>
              <p className="text-[17px] text-[#0f1419] font-semibold">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            {/* Логотип MER */}
            <div className="pt-2 pb-4">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-gray-200/50 shadow-sm">
                <img 
                  src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/f4d2158a-b881-49ad-a8f8-ae1db91a2689.png"
                  alt="MER"
                  className="h-[32px] w-auto"
                />
                <div className="text-[12px] text-[#475569] leading-tight">
                  <div className="font-medium">работаем по методологии</div>
                  <div className="text-[#94a3b8]">marine engine renew</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                size="lg"
                className="bg-[#1d4cd7] hover:bg-[#1540bd] text-white font-semibold px-8 py-6 rounded-xl text-[15px] shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                onClick={onContactClick}
              >
                Получить консультацию
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-200 bg-white/50 backdrop-blur-sm text-[#1d4cd7] hover:bg-white hover:border-[#1d4cd7] font-semibold px-8 py-6 rounded-xl text-[15px] uppercase tracking-wide transition-all"
              >
                <Link to="/projects">
                  Смотреть работы
                </Link>
              </Button>
            </div>
          </div>

          {/* Comparison slider справа */}
          <div className="relative z-10">
            <ComparisonSlider
              beforeImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3a80a092-b801-4783-beaa-cda72bd137cb.png"
              afterImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3e0d87d7-c86b-4eaa-937c-57339fe93cbc.png"
            />
          </div>
        </div>

        {/* Мобилка: grid с comparison slider сверху */}
        <div className="lg:hidden grid gap-8">
          <div className="relative">
            <ComparisonSlider
              beforeImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3a80a092-b801-4783-beaa-cda72bd137cb.png"
              afterImage="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/3e0d87d7-c86b-4eaa-937c-57339fe93cbc.png"
            />
          </div>

          <div className="space-y-5 text-center">
            <h1 className="text-[36px] leading-[1.2] font-montserrat">
              <span className="text-[#0f1419] font-normal">Новый рассвет</span>
              <br />
              <span className="text-[#0f1419] font-normal">вашего </span>
              <span className="text-[#1d4cd7] font-bold">двигателя</span>
            </h1>

            <div className="space-y-3">
              <p className="text-[15px] text-[#475569] leading-relaxed font-normal">
                Специализируемся на ремонте<br />
                и восстановлении стационарных двигателей<br />
                таких марок
              </p>
              <p className="text-[15px] text-[#0f1419] font-semibold">
                Volvo Penta, Mercruiser, Indmar, Yamaha, Kodiak
              </p>
            </div>

            {/* Логотип MER мобильная версия */}
            <div className="flex justify-center pt-2 pb-2">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-gray-200/50 shadow-sm">
                <img 
                  src="https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/f4d2158a-b881-49ad-a8f8-ae1db91a2689.png"
                  alt="MER"
                  className="h-[28px] w-auto"
                />
                <div className="text-[11px] text-[#475569] leading-tight text-left">
                  <div className="font-medium">работаем по методологии</div>
                  <div className="text-[#94a3b8]">marine engine renew</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 max-w-xs mx-auto">
              <Button
                size="lg"
                className="bg-[#1d4cd7] hover:bg-[#1540bd] text-white font-semibold px-6 py-5 rounded-xl text-[14px] shadow-lg shadow-blue-500/20 w-full"
                onClick={onContactClick}
              >
                Получить консультацию
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-200 bg-white/50 backdrop-blur-sm text-[#1d4cd7] hover:bg-white hover:border-[#1d4cd7] font-semibold px-6 py-5 rounded-xl text-[14px] uppercase tracking-wide w-full"
              >
                <Link to="/projects">
                  Смотреть работы
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}