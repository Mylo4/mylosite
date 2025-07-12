import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const WikiLayout = (): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Navigation items for the sidebar
  const navItems = [
    { id: "info", title: "📋 Информация", path: "/wiki/info" },
    { id: "rules", title: "📜 Правила", path: "/wiki/rules" },
    { id: "features", title: "🎮 Особенности", path: "/wiki/features" },
    { id: "crafts", title: "🔨 Крафты", path: "/wiki/crafts" },
    { id: "guides", title: "📚 Гайды", path: "/wiki/guides" },
    { id: "mods", title: "⚙️ Моды", path: "/wiki/mods" },
  ];

  return (
    <div className="bg-[#070914] min-h-screen text-white">
      {/* Header with navigation */}
      <nav className="flex justify-between items-center py-4 px-8 border-b border-[#2a2c3c] sticky top-0 z-50 bg-[#0c0e1a]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/soap-%282%29-3.png" 
              alt="Логотип Мыло" 
              className="h-8 w-auto mr-3"
            />
            <span className="text-[#1ad76f] font-semibold text-lg">Мыло Вики</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/wiki" className="text-[#1ad76f] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Вики
          </Link>
          <Link to="/map" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Карта
          </Link>
          <Link to="/#shop" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Магазин
          </Link>
        </div>
        <div>
          <Link to="/" className="bg-[#1ad76f] hover:bg-[#18c265] text-white px-6 py-2 rounded-full text-sm font-semibold font-['Poppins',Helvetica] transition-colors">
            Купить проходку
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-[#161724] rounded-xl p-6 border border-[#2a2c3c] sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-[#1ad76f]">Навигация</h2>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className={`text-left block w-full py-2 px-4 rounded-lg transition-colors ${
                        currentPath === item.path
                          ? "bg-[#1ad76f]/10 text-[#1ad76f]"
                          : "text-[#a7add2] hover:bg-[#2a2c3c]/30 hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content area - renders the nested route */}
          <div className="w-full md:w-3/4">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-[#2a2c3c] mt-16 relative">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://c.animaapp.com/PyecxKQm/img/image_1.png" 
            alt="Background pattern" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            <p className="text-[#686e93]">© 2025 Мыло. Все права защищены.</p>
            <div className="flex gap-4">
              <Link to="/offer-agreement" className="text-[#a7add2] hover:text-white text-sm transition-colors">
                Договор оферты
              </Link>
              <Link to="/privacy-policy" className="text-[#a7add2] hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
