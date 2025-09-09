import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from "@/components/ui/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function ContactModal({ isOpen, onClose, title = "Свяжитесь с нами", subtitle = "Получите бесплатную консультацию по ремонту морских двигателей" }: ContactModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: '',
    urgency: 'normal'
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
    else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Неверный формат телефона';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
        duration: 5000,
      });
      
      // Очищаем форму
      setFormData({ name: '', phone: '', email: '', message: '', service: '', urgency: 'normal' });
      setErrors({});
      onClose();
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Form */}
      <Card className="relative w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border-0 animate-in fade-in-0 zoom-in-95 duration-300">
        <CardHeader className="text-center pb-4 relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 hover:bg-gray-100 p-2 w-8 h-8"
          >
            <Icon name="X" size={16} className="text-gray-600" />
          </Button>
          
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="MessageSquare" size={24} className="text-primary" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-gray-900">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 text-base">
            {subtitle}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email (необязательно)"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary bg-white px-3 text-gray-900"
                >
                  <option value="">Выберите услугу</option>
                  <option value="restore">Восстановление двигателя</option>
                  <option value="repair">Ремонт двигателя</option>
                  <option value="longblocks">Лонг-блоки</option>
                  <option value="diagnosis">Диагностика</option>
                  <option value="consultation">Консультация</option>
                </select>
              </div>

              <div>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary bg-white px-3 text-gray-900"
                >
                  <option value="normal">Обычная срочность</option>
                  <option value="urgent">Срочно (до недели)</option>
                  <option value="very-urgent">Очень срочно (1-2 дня)</option>
                </select>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Опишите вашу проблему или вопрос..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-4 pt-2">
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.name || !formData.phone}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 h-12 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <button type="button" className="underline hover:no-underline">
                    обработкой персональных данных
                  </button>
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}