import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (xxx) xxx-xx-xx',
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
    <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
            📞 Связаться с нами
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-redmar-dark mb-6">
            Готовы начать <span className="text-redmar-red">восстановление</span>?
          </h2>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом, и получите персональную консультацию эксперта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${contact.bgColor} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={contact.icon} size={24} className={contact.accent} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg text-redmar-dark mb-1 group-hover:text-redmar-red transition-colors duration-300`}>
                          {contact.title}
                        </h3>
                        <p className="text-marine-dark font-medium mb-1">{contact.value}</p>
                        <p className="text-sm text-marine-steel mb-3">{contact.description}</p>
                        <Button variant="outline" size="sm" className={`${contact.accent} border-current hover:bg-current hover:text-white transition-all duration-300`}>
                          <Icon name="ArrowRight" size={14} className="mr-1" />
                          {contact.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
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
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-medium">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>
              <div className="bg-marine-light/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <p className="text-sm font-medium text-marine-dark">Гарантируем конфиденциальность</p>
                </div>
                <p className="text-xs text-marine-steel">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}