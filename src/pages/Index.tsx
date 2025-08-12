import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/80 border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Satellite" className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СНАВИ
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              ООО СНАВИ
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Передовые решения спутникового мониторинга транспорта с 2006 года
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Специализируемся на оснащении транспортных средств современными бортовыми контроллерами 
              для эффективного контроля и управления автопарком
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-8 py-3">
                <Icon name="Info" className="w-5 h-5 mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                О компании
              </h2>
              <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/30">
                <p className="text-lg text-gray-700 mb-4">
                  <strong className="text-primary">ООО СНАВИ</strong> — надежный партнер в сфере спутникового мониторинга 
                  транспорта с <strong>2006 года</strong>.
                </p>
                <p className="text-gray-600 mb-6">
                  За годы работы мы накопили богатый опыт и зарекомендовали себя как профессиональная 
                  команда, способная решать самые сложные задачи в области контроля и управления 
                  транспортными средствами.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2">18+</div>
                    <div className="text-sm text-gray-600">лет опыта</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-xl">
                    <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                    <div className="text-sm text-gray-600">проектов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-white/30">
              <Icon name="MapPin" className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Наша миссия</h3>
              <p className="text-gray-700">
                Предоставлять инновационные и надежные решения для спутникового мониторинга, 
                помогая нашим клиентам оптимизировать работу транспорта и повышать эффективность бизнеса.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексное оснащение транспортных средств современными системами мониторинга
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-sm bg-white/80 border border-white/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Satellite" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Бортовые контроллеры</h3>
              <p className="text-gray-600 mb-4">
                Установка и настройка современных бортовых контроллеров спутникового мониторинга 
                с поддержкой GPS/GLONASS.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Точное позиционирование
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Контроль топлива
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Мониторинг водителя
                </li>
              </ul>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border border-white/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Truck" className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Оснащение ТС</h3>
              <p className="text-gray-600 mb-4">
                Полное техническое оснащение транспортных средств системами мониторинга 
                под ключ с гарантией качества.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Профессиональный монтаж
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Настройка системы
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Обучение персонала
                </li>
              </ul>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border border-white/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="HeadphonesIcon" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Техподдержка</h3>
              <p className="text-gray-600 mb-4">
                Круглосуточная техническая поддержка и сервисное обслуживание 
                установленного оборудования.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  24/7 поддержка
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Удаленная диагностика
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                  Гарантийное обслуживание
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект и предложить оптимальное решение
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-gray-600">+7 (XXX) XXX-XX-XX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@snavi.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Адрес</div>
                    <div className="text-gray-600">г. Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Почему выбирают нас?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Award" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Опыт с 2006 года</div>
                    <div className="text-gray-600">Многолетний опыт в сфере спутникового мониторинга</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Надежность</div>
                    <div className="text-gray-600">Качественное оборудование и профессиональный монтаж</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Users" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Индивидуальный подход</div>
                    <div className="text-gray-600">Решения, адаптированные под ваши потребности</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Satellite" className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-primary">СНАВИ</span>
            </div>
            <p className="text-gray-300 mb-4">
              Спутниковый мониторинг транспорта — ваш надежный партнер с 2006 года
            </p>
            <div className="border-t border-gray-600 pt-4">
              <p className="text-gray-400 text-sm">
                © 2024 ООО СНАВИ. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;