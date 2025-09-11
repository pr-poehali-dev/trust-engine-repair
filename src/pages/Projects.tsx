import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 'volvo-d6-350',
    title: 'Volvo Penta D6-350',
    subtitle: 'Капитальный ремонт',
    description: 'Полное восстановление стационарного двигателя с заменой всех изношенных компонентов и модернизацией системы охлаждения',
    image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
    duration: '14 дней',
    budget: '₽ 485 000',
    type: 'Капитальный',
    status: 'Завершен',
    category: 'Volvo Penta',
    features: ['Замена поршневой группы', 'Модернизация охлаждения', 'Компьютерная диагностика'],
    link: '/projects/volvo-d6-350'
  },
  {
    id: 'mercruiser-5-7l',
    title: 'Mercruiser 5.7L',
    subtitle: 'Восстановление под ключ',
    description: 'Комплексное восстановление двигателя с заменой коленвала, поршней и полной переборкой головки блока цилиндров',
    image: '/img/296a2fc5-c78b-4f2f-a785-0cd8e650a619.jpg',
    duration: '18 дней',
    budget: '₽ 420 000',
    type: 'Полное восстановление',
    status: 'Завершен',
    category: 'Mercruiser',
    features: ['Замена коленвала', 'Переборка ГБЦ', 'Стендовые испытания'],
    link: '/projects/mercruiser-5-7l'
  },
  {
    id: 'yamaha-f150',
    title: 'Yamaha F150',
    subtitle: 'Ремонт системы питания',
    description: 'Восстановление системы впрыска топлива с заменой форсунок и модернизацией топливного насоса высокого давления',
    image: '/img/c79d6585-a600-4aea-9d31-53374ad1cad5.jpg',
    duration: '10 дней',
    budget: '₽ 280 000',
    type: 'Система питания',
    status: 'В процессе',
    category: 'Yamaha',
    features: ['Замена форсунок', 'Ремонт ТНВД', 'Калибровка системы'],
    link: '#'
  },
  {
    id: 'indmar-monsoon',
    title: 'Indmar Monsoon 6.2L',
    subtitle: 'Профилактический ремонт',
    description: 'Профилактическое обслуживание с заменой расходных материалов и диагностикой всех систем двигателя',
    image: '/img/c5cc0155-a2cd-402d-8127-cdf0d98da013.jpg',
    duration: '7 дней',
    budget: '₽ 150 000',
    type: 'Профилактика',
    status: 'Завершен',
    category: 'Indmar',
    features: ['Замена фильтров', 'Диагностика систем', 'Профилактика'],
    link: '#'
  },
  {
    id: 'volvo-d4-225',
    title: 'Volvo Penta D4-225',
    subtitle: 'Ремонт турбины',
    description: 'Восстановление турбокомпрессора с балансировкой ротора и заменой уплотнительных элементов',
    image: '/img/265424a9-abd7-4a7c-a05b-5707bb54352d.jpg',
    duration: '12 дней',
    budget: '₽ 320 000',
    type: 'Турбокомпрессор',
    status: 'Планируется',
    category: 'Volvo Penta',
    features: ['Балансировка ротора', 'Замена уплотнений', 'Стендовые испытания'],
    link: '#'
  },
  {
    id: 'mercury-verado',
    title: 'Mercury Verado 300',
    subtitle: 'Капитальный ремонт',
    description: 'Полная переборка двигателя с заменой блока цилиндров и модернизацией системы управления',
    image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
    duration: '21 день',
    budget: '₽ 650 000',
    type: 'Капитальный',
    status: 'В процессе',
    category: 'Mercury',
    features: ['Замена блока', 'Модернизация ECU', 'Полные испытания'],
    link: '#'
  }
];

const statusColors = {
  'Завершен': 'bg-green-100 text-green-800 border-green-200',
  'В процессе': 'bg-blue-100 text-blue-800 border-blue-200',
  'Планируется': 'bg-yellow-100 text-yellow-800 border-yellow-200'
};

export default function Projects() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />

      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Разделитель */}
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center w-full max-w-4xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 via-primary/40 to-primary"></div>
              <div className="mx-8 px-8 py-3 bg-white rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                <span className="text-sm font-bold text-primary uppercase tracking-wide whitespace-nowrap">Портфолио работ</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-primary/40 via-primary/20 to-transparent"></div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Наши <span className="text-primary">работы</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Примеры успешно выполненных проектов по восстановлению и ремонту стационарных двигателей. 
            Каждый проект — это история возвращения мощности и надежности.
          </p>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-gray-600 font-medium">Проектов выполнено</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600 font-medium">Лет опыта</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Довольных клиентов</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-gray-600 font-medium">Брендов двигателей</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge className={`${statusColors[project.status]} font-medium px-3 py-1`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-black/50 text-white border-none backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium mt-1">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Clock" size={14} className="text-primary" />
                        <span className="text-xs font-medium text-gray-500">Срок</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{project.duration}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="DollarSign" size={14} className="text-primary" />
                        <span className="text-xs font-medium text-gray-500">Бюджет</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{project.budget}</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {project.link !== '#' ? (
                    <Link to={project.link}>
                      <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                        Подробнее о проекте
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      disabled 
                      variant="outline" 
                      className="w-full cursor-not-allowed opacity-50"
                    >
                      <Icon name="Clock" size={16} className="mr-2" />
                      Скоро будет доступно
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Хотите стать следующим успешным проектом?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Доверьте восстановление вашего двигателя профессионалам с 12-летним опытом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </div>
  );
}