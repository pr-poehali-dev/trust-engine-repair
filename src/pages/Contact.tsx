import { useState, useEffect } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactModal from '@/components/ContactModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Обработка якорных ссылок
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (999) 555-00-12',
      description: 'Звоните с 9:00 до 18:00 (пн-сб)',
      action: 'tel:+79995550012'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@trust-engine.ru',
      description: 'Ответим в течение 24 часов',
      action: 'mailto:info@trust-engine.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Морская, д. 15',
      description: 'Работаем по предварительной записи',
      action: null
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Сб: 9:00 - 18:00',
      description: 'Вс: по договоренности',
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />
      
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Разделитель */}
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center w-full max-w-4xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
              <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">Наши контакты</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с <span className="text-primary">нами</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Готовы ответить на все ваши вопросы по ремонту и восстановлению стационарных двигателей
          </p>
          <Button 
            size="lg"
            onClick={() => setContactFormOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl shadow-lg"
          >
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Написать нам
          </Button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={method.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {method.action ? (
                    <a 
                      href={method.action}
                      className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <div className="font-semibold text-lg text-gray-900">
                      {method.content}
                    </div>
                  )}
                  <p className="text-gray-600 text-sm mt-2">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как нас найти
            </h2>
            <p className="text-gray-600">
              Наш сервисный центр расположен в удобном месте с парковкой
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">Интерактивная карта</h3>
              <p>г. Москва, ул. Морская, д. 15</p>
              <p className="text-sm mt-2">Здесь будет встроена карта с локацией</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Как долго длится ремонт двигателя?",
                answer: "Сроки ремонта зависят от сложности работ и наличия запчастей. Обычно от 2 до 6 недель. Мы всегда сообщаем точные сроки после диагностики."
              },
              {
                question: "Предоставляете ли вы гарантию?",
                answer: "Да, мы даем гарантию на все виды работ от 6 месяцев до 2 лет в зависимости от типа ремонта."
              },
              {
                question: "Работаете ли вы с выездом?",
                answer: "Да, мы можем выехать для диагностики и несложных ремонтных работ. Стоимость выезда рассчитывается индивидуально."
              },
              {
                question: "Какие марки двигателей вы ремонтируете?",
                answer: "Специализируемся на Volvo Penta, Mercruiser, Indmar, Yamaha. Также работаем с другими марками стационарных двигателей."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />

      {/* Contact Form Modal */}
      <ContactModal 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}