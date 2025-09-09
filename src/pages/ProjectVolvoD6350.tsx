import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ImageGallery from '@/components/ImageGallery';

const projectImages = [
  '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg',
  '/img/296a2fc5-c78b-4f2f-a785-0cd8e650a619.jpg',
  '/img/c79d6585-a600-4aea-9d31-53374ad1cad5.jpg',
  '/img/c5cc0155-a2cd-402d-8127-cdf0d98da013.jpg',
  '/img/265424a9-abd7-4a7c-a05b-5707bb54352d.jpg',
  '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
  '/img/04333da0-be06-4c2d-ac1d-74f71868a541.jpg',
  '/img/a78e3607-d6ee-449a-895b-7ab9dc9b726e.jpg',
  '/img/7f7497d1-f1ad-4824-b35d-61928133340f.jpg',
  '/img/7362f21a-774e-4981-abe9-d46ef65ceb65.jpg'
];

export default function ProjectVolvoD6350() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-marine-light/5 to-primary/5">
      {/* Навигация */}
      <nav className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-marine-dark hover:text-primary"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться к проектам
            </Button>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="RED MAR" className="h-5 w-auto sm:h-6 sm:w-auto" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Заголовок проекта */}
        <div className="text-center space-y-6">
          <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-lg px-6 py-2">
            🔧 Капитальный ремонт
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-marine-dark">
            Восстановление <span className="text-primary">Volvo Penta D6-350</span>
          </h1>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">
            Полное восстановление морского двигателя с заменой всех изношенных компонентов 
            и модернизацией системы охлаждения
          </p>
        </div>

        {/* Основная информация */}
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Срок ремонта',
              value: '14 дней',
              icon: 'Clock',
              description: 'Включая тестирование',
              color: 'text-green-600',
              bg: 'bg-green-50'
            },
            {
              title: 'Бюджет проекта',
              value: '₽ 485 000',
              icon: 'DollarSign',
              description: 'Все работы включены',
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            },
            {
              title: 'Тип ремонта',
              value: 'Капитальный',
              icon: 'Wrench',
              description: 'Полное восстановление',
              color: 'text-orange-600',
              bg: 'bg-orange-50'
            },
            {
              title: 'Статус',
              value: 'Завершено',
              icon: 'CheckCircle',
              description: 'Успешно сдан клиенту',
              color: 'text-emerald-600',
              bg: 'bg-emerald-50'
            }
          ].map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={item.icon} size={24} className={item.color} />
                </div>
                <h3 className="font-semibold text-marine-dark mb-1">{item.title}</h3>
                <p className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</p>
                <p className="text-sm text-marine-steel">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Галерея изображений */}
        <Card className="p-6">
          <ImageGallery 
            images={projectImages} 
            title="Процесс восстановления двигателя"
          />
        </Card>

        {/* Проблемы */}
        <Card className="p-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold text-marine-dark flex items-center gap-3">
              <Icon name="AlertTriangle" size={24} className="text-red-500" />
              Выявленные проблемы
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 space-y-4">
            {[
              'Критический износ поршневой группы - зазоры превышали норму в 2,5 раза',
              'Коррозия в системе охлаждения привела к повреждению блока цилиндров',
              'Износ распределительного вала и его подшипников',
              'Нарушение герметичности головки блока цилиндров',
              'Неисправность системы впрыска топлива - засорение форсунок',
              'Повышенная вибрация из-за разбалансировки коленчатого вала'
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-marine-dark">{problem}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Процесс восстановления */}
        <Card className="p-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold text-marine-dark flex items-center gap-3">
              <Icon name="Cog" size={24} className="text-primary" />
              Процесс восстановления
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="space-y-6">
              {[
                {
                  stage: 'Диагностика и разборка',
                  duration: '2 дня',
                  description: 'Полная диагностика, фотофиксация состояния, аккуратная разборка с маркировкой деталей',
                  tasks: [
                    'Компрессионные замеры',
                    'Эндоскопия цилиндров',
                    'Проверка системы охлаждения',
                    'Демонтаж навесного оборудования'
                  ]
                },
                {
                  stage: 'Дефектовка и закупка',
                  duration: '3 дня',
                  description: 'Детальный анализ состояния компонентов, составление сметы, заказ оригинальных запчастей',
                  tasks: [
                    'Измерение зазоров и износа',
                    'Магнитная дефектоскопия блока',
                    'Заказ поршневой группы Volvo Penta',
                    'Заказ прокладок и уплотнений'
                  ]
                },
                {
                  stage: 'Механическая обработка',
                  duration: '4 дня',
                  description: 'Профессиональная обработка блока, расточка цилиндров, шлифовка коленвала',
                  tasks: [
                    'Расточка блока цилиндров',
                    'Шлифовка коленчатого вала',
                    'Фрезеровка плоскости блока',
                    'Опрессовка системы охлаждения'
                  ]
                },
                {
                  stage: 'Сборка двигателя',
                  duration: '3 дня',
                  description: 'Сборка с новыми компонентами, соблюдение всех моментов затяжки, установка обновленных систем',
                  tasks: [
                    'Установка поршневой группы',
                    'Монтаж головки блока',
                    'Установка нового ГРМ',
                    'Подключение систем впрыска'
                  ]
                },
                {
                  stage: 'Тестирование',
                  duration: '2 дня',
                  description: 'Стендовые испытания, проверка всех параметров, приработка двигателя',
                  tasks: [
                    'Запуск на стенде',
                    'Проверка давления масла',
                    'Тест системы охлаждения',
                    'Финальная диагностика'
                  ]
                }
              ].map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-marine-dark">{stage.stage}</h4>
                        <Badge variant="outline" className="text-xs">
                          {stage.duration}
                        </Badge>
                      </div>
                      <p className="text-marine-steel mb-3">{stage.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {stage.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center gap-2 text-sm">
                            <Icon name="CheckCircle" size={14} className="text-green-500" />
                            <span className="text-marine-steel">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="w-0.5 h-6 bg-primary/30 ml-4 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Результаты */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold text-marine-dark flex items-center gap-3">
              <Icon name="Trophy" size={24} className="text-green-600" />
              Результаты проекта
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-marine-dark">Технические показатели:</h4>
                {[
                  'Мощность восстановлена до 350 л.с. (было 280 л.с.)',
                  'Расход топлива снижен на 15%',
                  'Уровень вибраций в норме',
                  'Компрессия во всех цилиндрах 12-12.5 атм'
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                    <span className="text-marine-dark">{result}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-marine-dark">Гарантии:</h4>
                {[
                  '2 года гарантии на двигатель',
                  '6 месяцев на расходные материалы',
                  'Бесплатное первое ТО',
                  'Техническая поддержка 24/7'
                ].map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="Shield" size={16} className="text-green-600" />
                    <span className="text-marine-dark">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/5 to-marine-blue/5">
          <CardContent>
            <h3 className="text-2xl font-bold text-marine-dark mb-4">
              Нужен ремонт морского двигателя?
            </h3>
            <p className="text-marine-steel mb-6 max-w-2xl mx-auto">
              Получите бесплатную консультацию и предварительную оценку стоимости ремонта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать диагностику
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}