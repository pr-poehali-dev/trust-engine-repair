import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";
import Icon from '@/components/ui/icon';

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

interface FormData {
  // Step 1: Contact Info
  name: string;
  phone: string;
  email: string;
  
  // Step 2: Service Details
  service: string;
  engineBrand: string;
  engineModel: string;
  issue: string;
  
  // Step 3: Additional Info
  urgency: string;
  budget: string;
  additionalInfo: string;
  
  // Step 4: Preferences
  contactMethod: string;
  contactTime: string;
  newsletter: boolean;
}

const STEPS = [
  {
    id: 1,
    title: 'Контактные данные',
    description: 'Основная информация о вас'
  },
  {
    id: 2,
    title: 'Детали услуги',
    description: 'Информация о двигателе'
  },
  {
    id: 3,
    title: 'Дополнительно',
    description: 'Сроки и бюджет'
  },
  {
    id: 4,
    title: 'Предпочтения',
    description: 'Как с вами связаться'
  }
];

export default function MultiStepForm({ isOpen, onClose, title = "Подробная заявка", subtitle = "Заполните форму для получения точного расчета" }: MultiStepFormProps) {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    // Step 1
    name: '',
    phone: '',
    email: '',
    // Step 2
    service: '',
    engineBrand: '',
    engineModel: '',
    issue: '',
    // Step 3
    urgency: 'normal',
    budget: '',
    additionalInfo: '',
    // Step 4
    contactMethod: 'phone',
    contactTime: 'anytime',
    newsletter: false
  });

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
        if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
        else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
          newErrors.phone = 'Неверный формат телефона';
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Неверный формат email';
        }
        break;
      case 2:
        if (!formData.service) newErrors.service = 'Выберите услугу';
        if (!formData.engineBrand) newErrors.engineBrand = 'Укажите марку двигателя';
        break;
      case 3:
        // Все поля опциональны на этом шаге
        break;
      case 4:
        // Все поля опциональны на этом шаге
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
        duration: 5000,
      });
      
      // Сброс формы
      setCurrentStep(1);
      setFormData({
        name: '', phone: '', email: '', service: '', engineBrand: '', 
        engineModel: '', issue: '', urgency: 'normal', budget: '', 
        additionalInfo: '', contactMethod: 'phone', contactTime: 'anytime', 
        newsletter: false
      });
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
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const progress = (currentStep / STEPS.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      <Card className="relative w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border-0 animate-in fade-in-0 zoom-in-95 duration-300">
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
            <Icon name="FileText" size={24} className="text-primary" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 text-base mb-4">
            {subtitle}
          </CardDescription>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Шаг {currentStep} из {STEPS.length}</span>
              <span className="text-primary font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">{STEPS[currentStep - 1].title}</h3>
              <p className="text-sm text-gray-500">{STEPS[currentStep - 1].description}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="px-6 pb-6">
          <div className="min-h-[300px]">
            {/* Step 1: Contact Info */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in slide-in-from-right-2 duration-300">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-12 rounded-xl ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
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
                    className={`w-full h-12 rounded-xl ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
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
                    className={`w-full h-12 rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Service Details */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in slide-in-from-right-2 duration-300">
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full h-12 rounded-xl px-3 bg-white ${errors.service ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Выберите услугу *</option>
                    <option value="restore">Восстановление двигателя</option>
                    <option value="repair">Ремонт двигателя</option>
                    <option value="longblocks">Лонг-блоки</option>
                    <option value="diagnosis">Диагностика</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 ml-2">{errors.service}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select
                      name="engineBrand"
                      value={formData.engineBrand}
                      onChange={handleChange}
                      className={`w-full h-12 rounded-xl px-3 bg-white ${errors.engineBrand ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <option value="">Марка двигателя *</option>
                      <option value="volvo">Volvo Penta</option>
                      <option value="mercruiser">Mercruiser</option>
                      <option value="indmar">Indmar</option>
                      <option value="yamaha">Yamaha</option>
                      <option value="other">Другая</option>
                    </select>
                    {errors.engineBrand && <p className="text-red-500 text-xs mt-1 ml-2">{errors.engineBrand}</p>}
                  </div>
                  
                  <Input
                    name="engineModel"
                    placeholder="Модель двигателя"
                    value={formData.engineModel}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl border-gray-200"
                  />
                </div>
                
                <Textarea
                  name="issue"
                  placeholder="Опишите проблему или требуемые работы..."
                  value={formData.issue}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-xl border-gray-200"
                />
              </div>
            )}

            {/* Step 3: Additional Info */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in slide-in-from-right-2 duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Срочность работ</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl border-gray-200 px-3 bg-white"
                  >
                    <option value="normal">Обычная срочность</option>
                    <option value="urgent">Срочно (до недели)</option>
                    <option value="very-urgent">Очень срочно (1-2 дня)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ориентировочный бюджет</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl border-gray-200 px-3 bg-white"
                  >
                    <option value="">Выберите диапазон</option>
                    <option value="up-50k">До 50 000 руб</option>
                    <option value="50k-100k">50 000 - 100 000 руб</option>
                    <option value="100k-200k">100 000 - 200 000 руб</option>
                    <option value="200k-plus">Свыше 200 000 руб</option>
                  </select>
                </div>
                
                <Textarea
                  name="additionalInfo"
                  placeholder="Дополнительная информация, пожелания..."
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-xl border-gray-200"
                />
              </div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in slide-in-from-right-2 duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Предпочитаемый способ связи</label>
                  <div className="space-y-3">
                    {[
                      { value: 'phone', label: 'Телефонный звонок', icon: 'Phone' },
                      { value: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle' },
                      { value: 'email', label: 'Email', icon: 'Mail' }
                    ].map((method) => (
                      <label key={method.value} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.value}
                          checked={formData.contactMethod === method.value}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary"
                        />
                        <Icon name={method.icon} size={20} className="text-gray-600" />
                        <span className="font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Удобное время для звонка</label>
                  <select
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl border-gray-200 px-3 bg-white"
                  >
                    <option value="anytime">Любое время</option>
                    <option value="morning">Утром (9:00-12:00)</option>
                    <option value="afternoon">Днем (12:00-17:00)</option>
                    <option value="evening">Вечером (17:00-20:00)</option>
                  </select>
                </div>
                
                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary rounded"
                  />
                  <span className="text-sm">Получать новости и специальные предложения</span>
                </label>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 disabled:opacity-50"
            >
              <Icon name="ChevronLeft" size={16} />
              Назад
            </Button>
            
            <div className="text-sm text-gray-500">
              {currentStep} / {STEPS.length}
            </div>
            
            {currentStep < STEPS.length ? (
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                Далее
                <Icon name="ChevronRight" size={16} />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={16} className="animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={16} />
                    Отправить заявку
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}