import { useState } from 'react';
import NavigationSection from '@/components/home/NavigationSection';
import FooterSection from '@/components/home/FooterSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      id: 'volvo-d6-350',
      title: 'Восстановление Volvo Penta D6-350',
      description: 'Полное восстановление стационарного двигателя с заменой всех изношенных компонентов и модернизацией системы охлаждения',
      image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
      duration: '14 дней',
      budget: '₽ 485 000',
      type: 'Капитальный ремонт',
      tags: ['Volvo Penta', 'D6-350', 'Капитальный ремонт'],
      status: 'Завершен',
      year: '2024'
    },
    {
      id: 'mercruiser-5-7l',
      title: 'Восстановление MerCruiser 5.7L',
      description: 'Капитальный ремонт двигателя MerCruiser с заменой поршневой группы и восстановлением блока цилиндров',
      image: '/img/296a2fc5-c78b-4f2f-a785-0cd8e650a619.jpg',
      duration: '21 день',
      budget: '₽ 420 000',
      type: 'Капитальный ремонт',
      tags: ['MerCruiser', '5.7L', 'Поршневая группа'],
      status: 'Завершен',
      year: '2024'
    },
    {
      id: 'yamaha-250hp',
      title: 'Ремонт Yamaha 250HP',
      description: 'Восстановление подвесного мотора с заменой системы охлаждения и ремонтом топливной системы',
      image: '/img/c79d6585-a600-4aea-9d31-53374ad1cad5.jpg',
      duration: '10 дней',
      budget: '₽ 180 000',
      type: 'Средний ремонт',
      tags: ['Yamaha', '250HP', 'Подвесной мотор'],
      status: 'Завершен',
      year: '2024'
    },
    {
      id: 'volvo-d4-260',
      title: 'Диагностика Volvo Penta D4-260',
      description: 'Комплексная диагностика и устранение неисправностей системы впрыска топлива',
      image: '/img/c5cc0155-a2cd-402d-8127-cdf0d98da013.jpg',
      duration: '3 дня',
      budget: '₽ 45 000',
      type: 'Диагностика',
      tags: ['Volvo Penta', 'D4-260', 'Диагностика'],
      status: 'Завершен',
      year: '2024'
    },
    {
      id: 'indmar-raptor-570',
      title: 'Восстановление Indmar Raptor 570',
      description: 'Полное восстановление спортивного двигателя для вейкбординга с увеличением мощности',
      image: '/img/265424a9-abd7-4a7c-a05b-5707bb54352d.jpg',
      duration: '18 дней',
      budget: '₽ 520 000',
      type: 'Капитальный ремонт',
      tags: ['Indmar', 'Raptor 570', 'Спортивный'],
      status: 'В работе',
      year: '2024'
    },
    {
      id: 'mercury-verado-350',
      title: 'Ремонт Mercury Verado 350',
      description: 'Восстановление подвесного мотора с заменой турбокомпрессора и системы наддува',
      image: '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
      duration: '16 дней',
      budget: '₽ 380 000',
      type: 'Капитальный ремонт',
      tags: ['Mercury', 'Verado 350', 'Турбонаддув'],
      status: 'В работе',
      year: '2024'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Завершен':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'В работе':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Капитальный ремонт':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Средний ремонт':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Диагностика':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <NavigationSection
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onContactClick={() => setContactFormOpen(true)}
      />

      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🏆 Портфолио работ
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Наши <span className="text-primary">работы</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Примеры успешно выполненных проектов по восстановлению стационарных двигателей. 
            Каждый проект — это история возвращения к жизни.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="outline" className="text-gray-600 border-gray-300">
              Всего проектов: {projects.length}
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-300">
              Завершено: {projects.filter(p => p.status === 'Завершен').length}
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-300">
              В работе: {projects.filter(p => p.status === 'В работе').length}
            </Badge>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <Badge className={`text-xs px-2 py-1 ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`text-xs px-2 py-1 ${getTypeColor(project.type)}`}>
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="DollarSign" size={16} className="text-primary" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Wrench" size={16} className="text-primary" />
                      <span>{project.type}</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs text-gray-600 border-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  {(['volvo-d6-350', 'mercruiser-5-7l'].includes(project.id)) ? (
                    <Link to={`/projects/${project.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Смотреть проект
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      className="w-full bg-gray-500 hover:bg-gray-600 shadow-lg transition-all duration-300"
                      disabled
                    >
                      <Icon name="Clock" size={16} className="mr-2" />
                      {project.status === 'В работе' ? 'Проект в работе' : 'Скоро доступен'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Хотите, чтобы ваш проект попал в наше портфолио?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Доверьте восстановление вашего двигателя профессионалам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold" onClick={() => setContactFormOpen(true)}>
              <Icon name="Phone" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/services/restore'}
            >
              <Icon name="RefreshCw" size={20} className="mr-2" />
              Восстановление под ключ
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