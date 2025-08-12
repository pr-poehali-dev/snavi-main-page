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
    <header className="backdrop-blur-md bg-white/95 border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Satellite" className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                      <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-primary/10">
                        <Icon name={item.icon as any} className="w-4 h-4 mr-2" />
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="backdrop-blur-md bg-white/95 border border-gray-200/50 shadow-xl">
                        <div className="grid w-96 gap-3 p-6">
                          {item.submenu.map((subitem) => (
                            <NavigationMenuLink key={subitem.title} asChild>
                              <a
                                href={subitem.href}
                                className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {subitem.title}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
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
                        className="text-gray-700 hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-primary/10 flex items-center"
                      >
                        <Icon name={item.icon as any} className="w-4 h-4 mr-2" />
                        {item.title}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
            <Icon name="Phone" className="w-4 h-4 mr-2" />
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Satellite" className="w-4 h-4 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СНАВИ
            </span>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Icon name="Menu" className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 backdrop-blur-md bg-white/95">
              <div className="space-y-6 pt-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Satellite" className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    СНАВИ
                  </span>
                </div>

                {/* Mobile Menu Items */}
                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.title}>
                      <a
                        href={item.href}
                        className="flex items-center py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon name={item.icon as any} className="w-5 h-5 mr-3" />
                        {item.title}
                      </a>
                      {item.submenu && (
                        <div className="ml-8 space-y-2 mt-2">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.title}
                              href={subitem.href}
                              className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
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
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
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