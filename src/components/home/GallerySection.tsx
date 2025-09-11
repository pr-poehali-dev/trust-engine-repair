import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function GallerySection() {
  const projects = [
    { 
      title: 'Volvo Penta D6-350', 
      type: 'Капитальный ремонт', 
      status: 'Завершено',
      image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
      duration: '14 дней',
      features: ['Новая поршневая', 'Обновленная электроника', 'Модернизация системы охлаждения'],
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      link: '/projects/volvo-d6-350'
    },
    { 
      title: 'Mercruiser 5.7L', 
      type: 'Замена поршневой', 
      status: 'Завершено',
      image: '/img/7f7497d1-f1ad-4824-b35d-61928133340f.jpg',
      duration: '10 дней',
      features: ['Форсированные поршни', 'Балансировка коленвала', 'Новые форсунки'],
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      link: '/projects/mercruiser-5-7l'
    },
    { 
      title: 'Yamaha 6.2L', 
      type: 'Модернизация системы', 
      status: 'Завершено',
      image: '/img/7362f21a-774e-4981-abe9-d46ef65ceb65.jpg',
      duration: '18 дней',
      features: ['Турбонаддув', 'Интеркулер', 'Программная настройка'],
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      link: '#'
    },
    { 
      title: 'Indmar Raptor 6.0L', 
      type: 'Восстановление блока', 
      status: 'Завершено',
      image: '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
      duration: '21 день',
      features: ['Расточка блока', 'Новая ГБЦ', 'Система впрыска'],
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      link: '/projects/volvo-d6-350'
    },
    { 
      title: 'Volvo Penta D4-180', 
      type: 'Ремонт турбины', 
      status: 'Завершено',
      image: '/img/7f7497d1-f1ad-4824-b35d-61928133340f.jpg',
      duration: '7 дней',
      features: ['Новый картридж', 'Обновленные магистрали', 'Калибровка системы'],
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      link: '/portfolio'
    },
    { 
      title: 'Mercruiser 6.2L', 
      type: 'Полное восстановление', 
      status: 'Завершено',
      image: '/img/7362f21a-774e-4981-abe9-d46ef65ceb65.jpg',
      duration: '25 дней',
      features: ['Капремонт блока', 'Новая трансмиссия', 'Полная электроника'],
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      link: '/projects/mercruiser-5-7l'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-16 right-16 w-28 h-28 bg-primary/8 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-16 left-16 w-36 h-36 bg-blue-500/8 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary/6 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Разделитель */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/60"></div>
            <div className="px-8 py-3 bg-white rounded-full border border-primary/20 shadow-sm">
              <span className="text-base font-bold text-primary uppercase tracking-wide">Наши работы</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-primary/60 via-primary/30 to-transparent"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-gray-900 mb-6">
            Примеры <span className="text-primary">выполненных проектов</span>
          </h2>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">
            Профессиональное восстановление стационарных двигателей с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/10 text-marine-dark border-primary/20 shadow-lg">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`${project.bgColor} px-3 py-1 rounded-full shadow-lg`}>
                    <span className={`text-sm font-medium ${project.accent}`}>{project.duration}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className={`text-xl font-bold ${project.accent} group-hover:text-primary transition-colors duration-300`}>
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-marine-steel font-medium">
                  {project.type}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-marine-steel">
                      <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                >
                  <Link to={project.link || '#'}>
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть детали
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
            <Link to="/projects">
              <Icon name="Grid3X3" size={20} className="mr-2" />
              Посмотреть все проекты
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}