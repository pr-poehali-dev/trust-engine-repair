import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ImageGallery from '@/components/ImageGallery';

const projectImages = [
  '/img/7f7497d1-f1ad-4824-b35d-61928133340f.jpg',
  '/img/6ccfe514-93aa-4651-8a8e-01c41faebceb.jpg',
  '/img/c5cc0155-a2cd-402d-8127-cdf0d98da013.jpg',
  '/img/265424a9-abd7-4a7c-a05b-5707bb54352d.jpg',
  '/img/296a2fc5-c78b-4f2f-a785-0cd8e650a619.jpg',
  '/img/c79d6585-a600-4aea-9d31-53374ad1cad5.jpg',
  '/img/43a72e8a-017f-4e19-b4a0-fb8377eb2457.jpg',
  '/img/04333da0-be06-4c2d-ac1d-74f71868a541.jpg',
  '/img/a78e3607-d6ee-449a-895b-7ab9dc9b726e.jpg',
  '/img/b05150a3-d117-43c9-aa59-ec3a63c68f5d.jpg'
];

export default function ProjectMercruiser57() {
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
          <Badge className="bg-green-50 text-green-600 border-green-200 text-lg px-6 py-2">
            🔧 Замена поршневой
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-redmar-dark">
            Форсированная <span className="text-redmar-blue">Mercruiser</span> <span className="text-redmar-red">5.7L</span>
          </h1>
          <p className="text-xl text-marine-steel max-w-3xl mx-auto">
            Замена поршневой группы на форсированные компоненты с балансировкой 
            коленчатого вала и настройкой системы впрыска
          </p>
        </div>

        {/* Основная информация */}
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Срок ремонта',
              value: '10 дней',
              icon: 'Clock',
              description: 'Включая настройку',
              color: 'text-green-600',
              bg: 'bg-green-50'
            },
            {
              title: 'Бюджет проекта',
              value: '₽ 320 000',
              icon: 'DollarSign',
              description: 'С форсированными деталями',
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            },
            {
              title: 'Тип ремонта',
              value: 'Форсирование',
              icon: 'Zap',
              description: 'Увеличение мощности',
              color: 'text-orange-600',
              bg: 'bg-orange-50'
            },
            {
              title: 'Статус',
              value: 'Завершено',
              icon: 'CheckCircle',
              description: 'Мощность +35 л.с.',
              color: 'text-emerald-600',
              bg: 'bg-emerald-50'
            }
          ].map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={item.icon} size={24} className={item.color} />
                </div>
                <h3 className="font-semibold text-redmar-dark mb-1">{item.title}</h3>
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
            title="Процесс форсирования двигателя"
          />
        </Card>

        {/* Проблемы */}
        <Card className="p-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold text-redmar-dark flex items-center gap-3">
              <Icon name="AlertTriangle" size={24} className="text-redmar-red" />
              Исходные проблемы
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 space-y-4">
            {[
              'Потеря мощности - двигатель выдавал только 220 л.с. вместо 300 л.с.',
              'Повышенный расход масла из-за износа поршневых колец',
              'Неравномерная работа на холостом ходу',
              'Снижение компрессии в 3-м и 6-м цилиндрах',
              'Желание владельца увеличить мощность до 335 л.с.',
              'Устаревшие форсунки не обеспечивали оптимальное смесообразование'
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                <Icon name="AlertTriangle" size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-marine-dark">{problem}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Процесс восстановления */}
        <Card className="p-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold text-redmar-dark flex items-center gap-3">
              <Icon name="Settings" size={24} className="text-redmar-red" />
              Этапы форсирования
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="space-y-6">
              {[
                {
                  stage: 'Диагностика и планирование',
                  duration: '1 день',
                  description: 'Замеры компрессии, анализ состояния, расчет параметров форсирования',
                  tasks: [
                    'Компрессионные замеры',
                    'Расчет степени сжатия',
                    'Подбор форсированных поршней',
                    'Планирование настройки ЭБУ'
                  ]
                },
                {
                  stage: 'Разборка и дефектовка',
                  duration: '2 дня',
                  description: 'Снятие ГБЦ, извлечение поршневой группы, оценка состояния блока',
                  tasks: [
                    'Демонтаж головки блока',
                    'Извлечение поршней',
                    'Измерение цилиндров',
                    'Проверка коленчатого вала'
                  ]
                },
                {
                  stage: 'Балансировка коленвала',
                  duration: '2 дня',
                  description: 'Динамическая балансировка коленчатого вала для новых поршней',
                  tasks: [
                    'Снятие коленчатого вала',
                    'Взвешивание новых поршней',
                    'Балансировка на стенде',
                    'Контрольные замеры'
                  ]
                },
                {
                  stage: 'Установка компонентов',
                  duration: '3 дня',
                  description: 'Монтаж форсированных поршней, новых форсунок и модернизированной ГБЦ',
                  tasks: [
                    'Установка поршневой группы',
                    'Монтаж коленчатого вала',
                    'Установка ГБЦ',
                    'Подключение новых форсунок'
                  ]
                },
                {
                  stage: 'Настройка и тестирование',
                  duration: '2 дня',
                  description: 'Программирование ЭБУ, стендовые испытания, финальная настройка',
                  tasks: [
                    'Программирование ЭБУ',
                    'Первый запуск',
                    'Настройка на мощность',
                    'Контрольные заезды'
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
                        <h4 className="text-lg font-semibold text-redmar-dark">{stage.stage}</h4>
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
        <Card className="p-8 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold text-redmar-dark flex items-center gap-3">
              <Icon name="Trophy" size={24} className="text-redmar-blue" />
              Достигнутые результаты
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-redmar-dark">Прирост характеристик:</h4>
                {[
                  'Мощность увеличена до 335 л.с. (+35 л.с.)',
                  'Крутящий момент вырос на 28%',
                  'Улучшилась приемистость двигателя',
                  'Стабильная работа на всех оборотах'
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="TrendingUp" size={16} className="text-emerald-600" />
                    <span className="text-marine-dark">{result}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-redmar-dark">Надежность:</h4>
                {[
                  'Ресурс форсированного двигателя 5000+ моточасов',
                  '18 месяцев гарантии на модификации',
                  'Сохранена заводская надежность',
                  'Оптимальный тепловой режим'
                ].map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="Shield" size={16} className="text-emerald-600" />
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
            <h3 className="text-2xl font-bold text-redmar-dark mb-4">
              Хотите форсировать свой <span className="text-redmar-red">двигатель</span>?
            </h3>
            <p className="text-marine-steel mb-6 max-w-2xl mx-auto">
              Получите расчет прироста мощности и стоимости форсирования для вашего двигателя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Zap" size={20} className="mr-2" />
                Рассчитать форсирование
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация эксперта
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}