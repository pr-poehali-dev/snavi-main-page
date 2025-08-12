import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Главная",
      href: "#home",
      icon: "Home"
    },
    {
      title: "Услуги",
      href: "#services",
      icon: "Settings",
      submenu: [
        { title: "Бортовые контроллеры", href: "#controllers", description: "GPS/GLONASS системы мониторинга" },
        { title: "Оснащение ТС", href: "#equipment", description: "Комплексное техническое оснащение" },
        { title: "Установка и настройка", href: "#installation", description: "Профессиональный монтаж оборудования" },
        { title: "Техподдержка", href: "#support", description: "Круглосуточная поддержка 24/7" }
      ]
    },
    {
      title: "Решения",
      href: "#solutions",
      icon: "Lightbulb",
      submenu: [
        { title: "Для малого бизнеса", href: "#small-business", description: "Решения для небольших автопарков" },
        { title: "Для крупных компаний", href: "#enterprise", description: "Корпоративные системы мониторинга" },
        { title: "Логистические компании", href: "#logistics", description: "Специализированные решения для логистики" },
        { title: "Государственные структуры", href: "#government", description: "Решения для госучреждений" }
      ]
    },
    {
      title: "О компании",
      href: "#about",
      icon: "Info",
      submenu: [
        { title: "История компании", href: "#history", description: "Наш путь с 2006 года" },
        { title: "Команда", href: "#team", description: "Профессионалы своего дела" },
        { title: "Сертификаты", href: "#certificates", description: "Лицензии и сертификации" },
        { title: "Партнеры", href: "#partners", description: "Наши деловые партнеры" }
      ]
    },
    {
      title: "Контакты",
      href: "#contact",
      icon: "Phone"
    }
  ];

  return (
    <header className="glass-nav sticky top-0 z-50 depth-glow">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center depth-2 hover:scale-110 transition-all duration-300">
              <Icon name="Satellite" className="w-7 h-7 text-primary drop-shadow-lg" />
            </div>
            <span className="text-3xl font-bold gradient-gold drop-shadow-lg">
              СНАВИ
            </span>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="glass text-white hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-2xl hover:scale-105 depth-1">
                        <Icon name={item.icon as any} className="w-5 h-5 mr-2 drop-shadow-md" />
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="glass-card border border-white/30 shadow-2xl rounded-2xl">
                        <div className="grid w-96 gap-2 p-6">
                          {item.submenu.map((subitem) => (
                            <NavigationMenuLink key={subitem.title} asChild>
                              <a
                                href={subitem.href}
                                className="block p-4 rounded-xl glass hover:glass-card transition-all duration-300 group hover:scale-[1.02] depth-1"
                              >
                                <div className="font-medium text-white group-hover:text-primary transition-colors drop-shadow-md">
                                  {subitem.title}
                                </div>
                                <div className="text-sm text-gray-300 mt-1 drop-shadow-sm">
                                  {subitem.description}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="glass text-white hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-2xl hover:scale-105 flex items-center depth-1"
                      >
                        <Icon name={item.icon as any} className="w-5 h-5 mr-2 drop-shadow-md" />
                        {item.title}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button className="glass-card bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black font-bold px-8 py-4 rounded-2xl hover:scale-110 transition-all duration-300 depth-glow">
            <Icon name="Phone" className="w-5 h-5 mr-2 drop-shadow-md" />
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center depth-2">
              <Icon name="Satellite" className="w-5 h-5 text-primary drop-shadow-lg" />
            </div>
            <span className="text-xl font-bold gradient-gold drop-shadow-lg">
              СНАВИ
            </span>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="glass border-white/30 text-white hover:text-primary">
                <Icon name="Menu" className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass-dark border-l border-white/20">
              <div className="space-y-6 pt-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 pb-4 border-b border-white/20">
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center depth-2">
                    <Icon name="Satellite" className="w-6 h-6 text-primary drop-shadow-lg" />
                  </div>
                  <span className="text-2xl font-bold gradient-gold drop-shadow-lg">
                    СНАВИ
                  </span>
                </div>

                {/* Mobile Menu Items */}
                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.title}>
                      <a
                        href={item.href}
                        className="flex items-center py-3 text-white hover:text-primary transition-all duration-300 font-medium glass rounded-xl px-4 hover:scale-[1.02] depth-1"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon name={item.icon as any} className="w-5 h-5 mr-3 drop-shadow-md" />
                        {item.title}
                      </a>
                      {item.submenu && (
                        <div className="ml-8 space-y-2 mt-2">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.title}
                              href={subitem.href}
                              className="block py-2 text-sm text-gray-300 hover:text-primary transition-colors px-4 rounded-lg hover:bg-white/10"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-white/20">
                  <Button className="w-full glass-card bg-gradient-to-r from-primary to-secondary text-black font-bold py-4 rounded-xl depth-2">
                    <Icon name="Phone" className="w-4 h-4 mr-2 drop-shadow-md" />
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;