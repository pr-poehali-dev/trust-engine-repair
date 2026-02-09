import Icon from '@/components/ui/icon';

export default function TrustSection() {
  const stats = [
    {
      value: '150+',
      label: 'Восстановленных двигателей',
      icon: 'CheckCircle'
    },
    {
      value: '15 лет',
      label: 'Опыта работы',
      icon: 'Award'
    },
    {
      value: '98%',
      label: 'Клиентов рекомендуют нас',
      icon: 'ThumbsUp'
    },
    {
      value: '24 мес',
      label: 'Гарантия на работы',
      icon: 'Shield'
    }
  ];

  const brands = [
    { name: 'Volvo Penta', logo: 'https://cdn.poehali.dev/projects/7df45e6f-2c3a-4cc9-ad5c-89b6175d83ff/bucket/f4d2158a-b881-49ad-a8f8-ae1db91a2689.png' },
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-brand-gray-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Отзывы */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">
              Что говорят наши клиенты
            </h3>
            <p className="text-brand-gray-600">
              Реальные отзывы владельцев катеров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Сергей К.',
                boat: 'Chaparral 290 Signature',
                text: 'Volvo Penta D6-350 работает как новый! Отличная работа, сроки соблюдены. Рекомендую!',
                rating: 5
              },
              {
                name: 'Александр П.',
                boat: 'Sea Ray 280',
                text: 'Восстановили Mercruiser 5.7L. Качество на высоте, двигатель работает идеально. Спасибо команде!',
                rating: 5
              },
              {
                name: 'Михаил В.',
                boat: 'Bayliner 285',
                text: 'Профессиональный подход, честные цены. Двигатель получил вторую жизнь за разумные деньги.',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-gray-700 mb-3 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <div className="font-semibold text-brand-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-brand-gray-500">{review.boat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Сертификация */}
        <div className="mt-12 text-center">
          <p className="text-sm text-brand-gray-500 mb-4">Официальные партнёры</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {brands.map((brand, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={brand.logo} alt={brand.name} className="h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
