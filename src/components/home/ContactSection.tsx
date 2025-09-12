import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactSection() {
  const handleContactClick = (contact: any) => {
    switch (contact.icon) {
      case 'Phone':
        window.open(`tel:${contact.value}`, '_self');
        break;
      case 'Mail':
        window.open(`mailto:${contact.value}?subject=Запрос на восстановление двигателя`, '_self');
        break;
      case 'MapPin':
        window.open(`https://yandex.ru/maps/?text=${encodeURIComponent(contact.value)}`, '_blank');
        break;
      case 'Clock':
        alert(`📞 Записаться на визит:\n+7 (999) 555-00-12\n\n⏰ ${contact.value}\n\n${contact.description}`);
        break;
      default:
        alert(`📞 Свяжитесь с нами: +7 (999) 555-00-12`);
    }
  };

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 555-00-12',
      description: 'Звоните с 9:00 до 18:00',
      accent: 'text-primary',
      bgColor: 'bg-primary/10',
      action: 'Позвонить сейчас'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@marineservice.ru',
      description: 'Отвечаем в течение часа',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      action: 'Написать письмо'
    },
    {
      icon: 'MapPin',
      title: 'Адрес мастерской',
      value: 'г. Москва, ул. Морская, д. 15',
      description: 'Приезжайте на экскурсию',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      action: 'Построить маршрут'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      description: 'Воскресенье - выходной',
      accent: 'text-marine-dark',
      bgColor: 'bg-primary/10',
      action: 'Записаться на визит'
    }
  ];

  return (
    <section id="contacts" className="relative overflow-hidden py-20 lg:py-28">
      {/* Декоративные геометрические элементы - задний фон */}
      <div className="absolute z-0 top-5 right-10 w-50 h-50 bg-primary/12 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-8 left-8 w-42 h-42 bg-secondary/20 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-1/4 left-1/5 w-36 h-36 bg-primary/18 rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-1/3 right-1/4 w-32 h-32 bg-secondary/25 rounded-lg blur-sm"></div>
      <div className="absolute z-0 top-3/5 right-6 w-38 h-38 bg-primary/22 rounded-2xl blur-lg"></div>
      <div className="absolute z-0 top-1/2 left-1/6 w-28 h-28 bg-secondary/19 rounded-xl blur-md"></div>
      <div className="absolute z-0 bottom-2/3 right-2/3 w-24 h-24 bg-primary/24 rounded-lg blur-md"></div>
      <div className="absolute z-0 top-8 left-1/2 w-46 h-46 bg-secondary/15 rounded-3xl blur-xl"></div>
      <div className="absolute z-0 bottom-1/5 left-2/3 w-20 h-20 bg-primary/21 rounded-2xl blur-md"></div>
      <div className="absolute z-0 top-1/3 left-4 w-44 h-44 bg-secondary/18 rounded-3xl blur-xl"></div>
      {/* Дополнительные элементы (+30%) */}
      <div className="absolute z-0 top-1/8 right-3/4 w-28 h-28 bg-[#039fcb0d] rounded-2xl blur-md"></div>
      <div className="absolute z-0 bottom-1/8 left-5/6 w-24 h-24 bg-primary/29 rounded-xl blur-sm"></div>
      <div className="absolute z-0 top-6/7 right-1/8 w-32 h-32 bg-[#039fcb0d] rounded-lg blur-lg"></div>
      {/* Крупные элементы в области заголовка */}
      <div className="absolute z-0 top-0 left-32 w-28 h-28 bg-primary/20 rounded-3xl blur-2xl"></div>
      <div className="absolute z-0 top-2 right-40 w-24 h-24 bg-[#039fcb0d] rounded-2xl blur-xl"></div>
      <div className="absolute z-0 top-6 left-1/4 w-20 h-20 bg-primary/24 rounded-xl blur-lg"></div>
      <div className="absolute z-0 top-4 right-1/3 w-16 h-16 bg-[#039fcb0d] rounded-lg blur-md"></div>
      
      <div className="relative z-10 px-4">

      
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="Связаться с нами" />
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-gray-900 mb-6">
            Готовы начать <span className="text-primary font-bold">восстановление</span>?
          </h2>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом, и получите персональную консультацию эксперта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {/* Упрощенное отображение контактов для мобильных */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.slice(0, 2).map((contact, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-primary/30 h-full">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4 flex flex-col h-full">
                      <div className={`${contact.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={contact.icon} size={24} className={contact.accent} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base text-brand-gray-900 mb-2">
                          {contact.title}
                        </h3>
                        <p className="text-brand-gray-700 font-medium text-base mb-2">{contact.value}</p>
                        <p className="text-sm text-brand-gray-500 mb-4">{contact.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm mt-auto"
                        onClick={() => handleContactClick(contact)}
                      >
                        <Icon name="ArrowRight" size={14} className="mr-1" />
                        {contact.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Дополнительная информация для мобильных */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border md:hidden">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-brand-gray-900">Также доступны:</h4>
                <div className="flex justify-center gap-4 text-sm text-brand-gray-600">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    <span>Адрес мастерской</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>Режим работы</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-marine-blue/10 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Icon name="MessageSquare" size={20} className="text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-marine-dark">Оставить заявку</CardTitle>
                  <CardDescription className="text-marine-steel">
                    Заполните форму, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <Input placeholder="Ваше имя" className="border-2 focus:border-primary transition-colors duration-300" />
              <Input placeholder="Телефон" type="tel" className="border-2 focus:border-primary transition-colors duration-300" />
              <Input placeholder="Email" type="email" className="border-2 focus:border-primary transition-colors duration-300" />
              <Textarea 
                placeholder="Опишите проблему с двигателем..." 
                rows={4} 
                className="border-2 focus:border-primary transition-colors duration-300 resize-none"
              />
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-medium"
                onClick={() => {
                  alert('📧 Ваша заявка принята!\n\n📞 Мы свяжемся с вами в течение часа:\n+7 (999) 555-00-12\n\n📧 Или напишите прямо сейчас: info@marineservice.ru');
                }}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>
              <div className="bg-marine-light/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <p className="text-sm font-medium text-marine-dark">Гарантируем конфиденциальность</p>
                </div>
                <p className="text-sm text-marine-steel">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      </div>
    </section>
  );
}