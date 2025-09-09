import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function RepairBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Преимущества нашего сервиса
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Почему клиенты доверяют нам ремонт своих двигателей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Быстрые сроки</h3>
              <p className="text-gray-600">
                Большинство ремонтов выполняем в течение 3-7 дней. Срочный ремонт — за 1-2 дня
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Гарантия качества</h3>
              <p className="text-gray-600">
                6 месяцев гарантии на все виды ремонтных работ и установленные запчасти
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Профессионализм</h3>
              <p className="text-gray-600">
                Сертифицированные мастера с опытом работы более 10 лет
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}