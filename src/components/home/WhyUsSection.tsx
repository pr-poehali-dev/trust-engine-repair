import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export default function WhyUsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const advantages = [
    {
      icon: 'Award',
      title: 'Профессиональное восстановление',
      description: 'Не просто ремонт, а полная реконструкция с использованием современных компонентов и технологий.',
      stats: '500+',
      unit: 'двигателей в год',
      gradient: 'from-amber-500 to-orange-500',
      benefits: ['Сертифицированные запчасти', 'Современное оборудование', 'Стендовые испытания']
    },
    {
      icon: 'Clock',
      title: 'Быстрые сроки выполнения',
      description: 'Оперативное восстановление благодаря отлаженным процессам и большому складу компонентов.',
      stats: '7-14',
      unit: 'дней на ремонт',
      gradient: 'from-blue-500 to-cyan-500',
      benefits: ['Экспресс-диагностика', 'Собственный склад', 'Параллельные процессы']
    },
    {
      icon: 'Users',
      title: 'Экспертная команда',
      description: 'Квалифицированные мастера с глубоким знанием морских двигателей и постоянным обучением.',
      stats: '15+',
      unit: 'лет опыта',
      gradient: 'from-green-500 to-emerald-500',
      benefits: ['Сертифицированные специалисты', 'Регулярное обучение', 'Индивидуальный подход']
    },
    {
      icon: 'Shield',
      title: 'Расширенная гарантия',
      description: 'Комплексная гарантия с тщательным тестированием и техподдержкой на весь период службы.',
      stats: '2',
      unit: 'года гарантии',
      gradient: 'from-purple-500 to-violet-500',
      benefits: ['Полное тестирование', 'Техподдержка 24/7', 'Бесплатное ТО в период гарантии']
    }
  ];

  const testimonials = [
    {
      name: 'Михаил Петров',
      role: 'Владелец яхты Princess 45',
      text: 'Двигатель работает как новый уже 2 года. Профессионализм команды на высшем уровне!',
      rating: 5
    },
    {
      name: 'Алексей Семенов',
      role: 'Капитан катера Azimut',
      text: 'Качество работ превзошло ожидания. Рекомендую всем владельцам морской техники.',
      rating: 5
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Владелец Bayliner 285',
      text: 'Быстро, качественно, с полной гарантией. Теперь обслуживаюсь только здесь.',
      rating: 5
    }
  ];

  const companyStats = [
    { icon: 'Wrench', value: '500+', label: 'Восстановленных двигателей' },
    { icon: 'Users', value: '15+', label: 'Лет опыта в отрасли' },
    { icon: 'Star', value: '4.9', label: 'Средний рейтинг клиентов' },
    { icon: 'Award', value: '100%', label: 'Выполненных проектов' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-us" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 text-lg px-8 py-3 rounded-full font-semibold">
            <Icon name="Award" size={18} className="mr-2" />
            Почему мы лучшие
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Выбирают именно{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              нас
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Более 15 лет опыта, сотни восстановленных двигателей и репутация надежного партнера в мире морской техники
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {companyStats.map((stat, index) => (
            <Card key={index} className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat.icon} size={24} className="text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Advantages */}
          <div className="space-y-8">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Наши ключевые преимущества</h3>
              <p className="text-slate-600 text-lg">Каждое преимущество подкреплено многолетним опытом и сотнями довольных клиентов</p>
            </div>
            
            {advantages.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon name={item.icon} size={32} className="text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{item.stats}</div>
                          <div className="text-sm text-slate-500 font-medium">{item.unit}</div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        {item.description}
                      </p>
                      
                      {/* Benefits */}
                      <div className="space-y-2">
                        {item.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-slate-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            ))}
          </div>
          
          {/* Testimonials & Image */}
          <div className="space-y-8">
            {/* Workshop Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img 
                src="/img/69551f2d-ae28-47dc-8b0c-008881fafee8.jpg" 
                alt="Современная мастерская для ремонта морских двигателей"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Workshop Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <Card className="bg-white/95 backdrop-blur-md border-0 p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Современная мастерская</h4>
                      <p className="text-slate-600">Профессиональное оборудование и условия</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Quote" size={24} className="text-blue-200" />
                  <h4 className="text-xl font-bold">Отзывы клиентов</h4>
                </div>
                
                <div className="min-h-[120px] relative">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className="text-lg leading-relaxed mb-4 text-blue-50">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-blue-200 text-sm">{testimonial.role}</div>
                        </div>
                        
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Testimonial indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white text-center p-8">
              <h4 className="text-2xl font-bold mb-4">Готовы доверить нам ваш двигатель?</h4>
              <p className="text-slate-300 mb-6 text-lg">
                Получите бесплатную консультацию и персональное предложение
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}