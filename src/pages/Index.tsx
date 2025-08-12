import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto text-center">
            <div className="glass-card rounded-3xl p-16 border border-white/30 depth-glow hover:scale-[1.02] transition-all duration-700">
              {/* Floating orbs */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/50 rounded-full blur-sm animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/50 rounded-full blur-sm animate-bounce delay-500"></div>
              
              <h1 className="text-7xl font-bold mb-8 gradient-gold drop-shadow-2xl">
                ООО СНАВИ
              </h1>
              <p className="text-3xl text-white/90 mb-10 max-w-4xl mx-auto drop-shadow-lg font-light">
                Передовые решения спутникового мониторинга транспорта с 2006 года
              </p>
              <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto drop-shadow-md">
                Специализируемся на оснащении транспортных средств современными бортовыми контроллерами 
                для эффективного контроля и управления автопарком
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="glass-card bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black font-bold px-10 py-5 rounded-2xl hover:scale-110 transition-all duration-300 depth-glow text-lg">
                  <Icon name="Phone" className="w-6 h-6 mr-3 drop-shadow-md" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="glass border-2 border-primary/50 text-white hover:text-primary hover:bg-primary/10 px-10 py-5 rounded-2xl hover:scale-110 transition-all duration-300 depth-2 text-lg">
                  <Icon name="Info" className="w-6 h-6 mr-3 drop-shadow-md" />
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl font-bold gradient-gold drop-shadow-lg">
                  О компании
                </h2>
                <div className="glass-card rounded-3xl p-10 border border-white/30 depth-3 hover:scale-[1.02] transition-all duration-500">
                  <p className="text-xl text-white/90 mb-6 drop-shadow-md">
                    <strong className="gradient-primary">ООО СНАВИ</strong> — надежный партнер в сфере спутникового мониторинга 
                    транспорта с <strong className="text-primary">2006 года</strong>.
                  </p>
                  <p className="text-white/70 mb-8 text-lg drop-shadow-sm">
                    За годы работы мы накопили богатый опыт и зарекомендовали себя как профессиональная 
                    команда, способная решать самые сложные задачи в области контроля и управления 
                    транспортными средствами.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 glass rounded-2xl depth-2 hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold gradient-gold mb-3 drop-shadow-lg">18+</div>
                      <div className="text-white/70 drop-shadow-sm">лет опыта</div>
                    </div>
                    <div className="text-center p-6 glass rounded-2xl depth-2 hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold gradient-gold mb-3 drop-shadow-lg">1000+</div>
                      <div className="text-white/70 drop-shadow-sm">проектов</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-3xl p-10 border border-white/30 depth-glow hover:scale-[1.02] transition-all duration-500">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 glass-card rounded-3xl flex items-center justify-center depth-2">
                    <Icon name="MapPin" className="w-12 h-12 text-primary drop-shadow-lg" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-center drop-shadow-lg">Наша миссия</h3>
                <p className="text-white/80 text-lg text-center drop-shadow-md leading-relaxed">
                  Предоставлять инновационные и надежные решения для спутникового мониторинга, 
                  помогая нашим клиентам оптимизировать работу транспорта и повышать эффективность бизнеса.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 gradient-gold drop-shadow-lg">Наши услуги</h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto drop-shadow-md">
                Комплексное оснащение транспортных средств современными системами мониторинга
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <Card className="glass-card border border-white/30 p-10 depth-3 hover:scale-[1.05] transition-all duration-500 group">
                <div className="bg-gradient-to-br from-primary/30 to-secondary/30 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 depth-2">
                  <Icon name="Satellite" className="w-10 h-10 text-primary drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Бортовые контроллеры</h3>
                <p className="text-white/70 mb-6 text-lg drop-shadow-sm">
                  Установка и настройка современных бортовых контроллеров спутникового мониторинга 
                  с поддержкой GPS/GLONASS.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Точное позиционирование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Контроль топлива
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Мониторинг водителя
                  </li>
                </ul>
              </Card>

              <Card className="glass-card border border-white/30 p-10 depth-3 hover:scale-[1.05] transition-all duration-500 group">
                <div className="bg-gradient-to-br from-secondary/30 to-primary/30 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 depth-2">
                  <Icon name="Truck" className="w-10 h-10 text-secondary drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Оснащение ТС</h3>
                <p className="text-white/70 mb-6 text-lg drop-shadow-sm">
                  Полное техническое оснащение транспортных средств системами мониторинга 
                  под ключ с гарантией качества.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Профессиональный монтаж
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Настройка системы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Обучение персонала
                  </li>
                </ul>
              </Card>

              <Card className="glass-card border border-white/30 p-10 depth-3 hover:scale-[1.05] transition-all duration-500 group">
                <div className="bg-gradient-to-br from-primary/30 to-secondary/30 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 depth-2">
                  <Icon name="HeadphonesIcon" className="w-10 h-10 text-primary drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Техподдержка</h3>
                <p className="text-white/70 mb-6 text-lg drop-shadow-sm">
                  Круглосуточная техническая поддержка и сервисное обслуживание 
                  установленного оборудования.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    24/7 поддержка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Удаленная диагностика
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 text-primary mr-3 drop-shadow-md" />
                    Гарантийное обслуживание
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 gradient-gold drop-shadow-lg">Свяжитесь с нами</h2>
              <p className="text-2xl text-white/80 drop-shadow-md">
                Готовы обсудить ваш проект и предложить оптимальное решение
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="glass-card rounded-3xl p-10 border border-white/30 depth-3 hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-lg">Контактная информация</h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center depth-2">
                      <Icon name="Phone" className="w-8 h-8 text-primary drop-shadow-lg" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xl drop-shadow-md">Телефон</div>
                      <div className="text-white/70 text-lg">+7 (XXX) XXX-XX-XX</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center depth-2">
                      <Icon name="Mail" className="w-8 h-8 text-primary drop-shadow-lg" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xl drop-shadow-md">Email</div>
                      <div className="text-white/70 text-lg">info@snavi.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center depth-2">
                      <Icon name="MapPin" className="w-8 h-8 text-primary drop-shadow-lg" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xl drop-shadow-md">Адрес</div>
                      <div className="text-white/70 text-lg">г. Москва, ул. Примерная, д. 1</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-10 border border-white/30 depth-glow hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-lg">Почему выбирают нас?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Award" className="w-8 h-8 text-primary mt-2 drop-shadow-lg" />
                    <div>
                      <div className="font-semibold text-white text-xl drop-shadow-md">Опыт с 2006 года</div>
                      <div className="text-white/70 text-lg">Многолетний опыт в сфере спутникового мониторинга</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Shield" className="w-8 h-8 text-primary mt-2 drop-shadow-lg" />
                    <div>
                      <div className="font-semibold text-white text-xl drop-shadow-md">Надежность</div>
                      <div className="text-white/70 text-lg">Качественное оборудование и профессиональный монтаж</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Users" className="w-8 h-8 text-primary mt-2 drop-shadow-lg" />
                    <div>
                      <div className="font-semibold text-white text-xl drop-shadow-md">Индивидуальный подход</div>
                      <div className="text-white/70 text-lg">Решения, адаптированные под ваши потребности</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-dark py-16 px-4 border-t border-white/20">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center depth-2">
                  <Icon name="Satellite" className="w-10 h-10 text-primary drop-shadow-lg" />
                </div>
                <span className="text-4xl font-bold gradient-gold drop-shadow-lg">СНАВИ</span>
              </div>
              <p className="text-white/70 mb-8 text-xl drop-shadow-md">
                Спутниковый мониторинг транспорта — ваш надежный партнер с 2006 года
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/50 drop-shadow-sm">
                  © 2024 ООО СНАВИ. Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;