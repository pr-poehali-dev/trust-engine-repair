import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка формы
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    onClose();
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Form */}
      <Card className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-gray-100 p-2"
            >
              <Icon name="X" size={20} className="text-gray-600" />
            </Button>
          </div>
          
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Phone" size={24} className="text-primary" />
          </div>
          
          <CardTitle className="text-xl font-bold text-gray-900">
            Свяжитесь с нами
          </CardTitle>
          <CardDescription className="text-gray-600">
            Получите бесплатную консультацию по ремонту морских двигателей
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Ваше имя *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Телефон *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email (необязательно)"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Опишите вашу проблему или вопрос..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none"
              />
            </div>
            
            <div className="flex flex-col gap-3 pt-2">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-brand-blue-dark text-white font-semibold py-3 rounded-xl"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}