import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SectionTitle from "@/components/ui/SectionTitle";

interface ServicesSectionProps {
  id?: string;
}

export default function ServicesSection({ id }: ServicesSectionProps = {}) {
  const services = [
    {
      title: "Двигатель под ключ",
      description:
        "Полное восстановление с гарантией качества и современными технологиями. Используем только оригинальные компоненты.",
      icon: "RefreshCw",
      image:
        "https://cdn.poehali.dev/files/cba3e511-dca5-4b4f-b908-45e0d5d44ba6.jpg",
      accent: "text-marine-dark",
      bgColor: "bg-primary/10",
      features: [
        "Капитальный ремонт",
        "Современные технологии",
        "Гарантия качества",
      ],
      price: "от 150 000 ₽",
      duration: "10-12 день",
      link: "/services/restore",
    },
    {
      title: "Лонг-блоки",
      description:
        "Готовые к установке блоки двигателей для самостоятельной сборки .",
      icon: "Package",
      image:
        "https://cdn.poehali.dev/files/0e8eeb10-5321-4943-9297-f3f545cea2d4.JPG",
      accent: "text-marine-dark",
      bgColor: "bg-primary/10",
      features: [
        "Готовые блоки",
        "Комплектация на выбор",
        "Заводское качество ",
      ],
      price: "от 300 000 ₽",
      duration: "1-3 дня",
      link: "/services/longblocks",
    },
    {
      title: "Ремонт вашего двигателя",
      description:
        "Качественный ремонт любой сложности с использованием современных материалов и оригинальных запчастей.",
      icon: "Wrench",
      image:
        "https://cdn.poehali.dev/files/7b8ab9c2-3b62-42b5-9cdc-aff54a685b4a.JPG",
      accent: "text-marine-dark",
      bgColor: "bg-primary/10",
      features: ["Быстрые сроки", "Гарантия качества", "Профессионализм"],
      price: "от 80 000 ₽",
      duration: "4-12 дней",
      link: "/services/repair",
    },
  ];

  return (
    <section
      id={id || "services"}
      className="relative pt-20 lg:pt-28"
    >
      {/* Декоративные геометрические элементы - задний фон (скрыты на мобильных) */}
      <div className="hidden md:block absolute z-0 top-5 left-5 w-36 h-36 bg-primary/25 rounded-2xl blur-lg"></div>
      <div className="hidden md:block absolute z-0 bottom-10 right-10 w-42 h-42 bg-[#039fcb0d] rounded-3xl blur-xl"></div>
      <div className="hidden md:block absolute z-0 top-1/3 right-1/5 w-28 h-28 bg-primary/18 rounded-xl blur-md"></div>
      <div className="hidden md:block absolute z-0 bottom-1/4 left-1/4 w-32 h-32 bg-[#039fcb0d] rounded-lg blur-sm"></div>
      <div className="hidden md:block absolute z-0 top-2/3 left-8 w-40 h-40 bg-primary/15 rounded-3xl blur-xl"></div>
      <div className="hidden md:block absolute z-0 top-1/4 right-1/3 w-24 h-24 bg-[#039fcb0d] rounded-2xl blur-lg"></div>
      <div className="hidden md:block absolute z-0 bottom-2/3 left-2/3 w-20 h-20 bg-primary/20 rounded-lg blur-md"></div>
      <div className="hidden md:block absolute z-0 top-10 left-1/2 w-48 h-48 bg-[#039fcb0d] rounded-3xl blur-xl"></div>
      {/* Дополнительные элементы (+30%) */}
      <div className="hidden lg:block absolute z-0 top-1/6 left-3/4 w-26 h-26 bg-[#039fcb0d] rounded-xl blur-md"></div>
      <div className="hidden lg:block absolute z-0 bottom-1/5 right-2/5 w-22 h-22 bg-primary/23 rounded-2xl blur-sm"></div>
      <div className="hidden lg:block absolute z-0 top-4/5 left-1/8 w-30 h-30 bg-[#039fcb0d] rounded-lg blur-md"></div>
      {/* Крупные элементы в области заголовка */}
      <div className="hidden lg:block absolute z-0 top-8 left-12 w-38 h-38 bg-primary/10 rounded-3xl blur-2xl"></div>
      <div className="hidden lg:block absolute z-0 top-4 right-20 w-34 h-34 bg-[#039fcb0d] rounded-2xl blur-xl"></div>
      <div className="hidden lg:block absolute z-0 top-16 left-1/4 w-30 h-30 bg-primary/14 rounded-xl blur-lg"></div>
      <div className="hidden lg:block absolute z-0 top-12 right-1/3 w-26 h-26 bg-[#039fcb0d] rounded-lg blur-md"></div>

      <div className="relative z-10 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle text="Наши услуги" />

          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6 leading-tight">
              Что мы <span className="text-primary font-bold">предлагаем</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Комплексные решения для восстановления и обслуживания стационарных
              двигателей с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
                onClick={() => {
                  window.location.href = service.link;
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <Icon
                        name={service.icon}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-brand-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow space-y-6">
                  <p className="text-brand-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex-grow">
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-base text-brand-gray-500"
                        >
                          <Icon
                            name="CheckCircle"
                            size={16}
                            className="text-primary"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-col gap-2 p-3 bg-gray-50 rounded-lg border">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Стоимость
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Срок
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = service.link;
                      }}
                    >
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              <Icon name="Grid3X3" size={20} className="mr-2" />
              Посмотреть все услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}