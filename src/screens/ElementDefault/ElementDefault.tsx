import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";

export const ElementDefault = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className="flex flex-col w-full bg-[#070914] dark"
      data-model-id="2129:233"
    >
      <nav className={`flex justify-between items-center py-4 px-8 border-b border-[#2a2c3c] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0c0e1a]/80 backdrop-blur-sm" : "bg-[#0c0e1a]"
      }`}>
        <div className="flex items-center">
          <img 
            src="https://c.animaapp.com/PyecxKQm/img/soap-%282%29-3.png" 
            alt="Логотип Мыло" 
            className="h-8 w-auto mr-6"
          />
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/wiki/info" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
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
          <button className="bg-[#1ad76f] hover:bg-[#18c265] text-white px-6 py-2 rounded-full text-sm font-semibold font-['Poppins',Helvetica] transition-colors">
            Купить проходку
          </button>
        </div>
      </nav>
      <HeaderSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
};
