import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    {
      title: "Карта",
      icon: "https://c.animaapp.com/PyecxKQm/img/vector.svg",
      className: "relative w-[138px] h-[92px]",
    },
    {
      title: "Вики",
      icon: "https://c.animaapp.com/PyecxKQm/img/vector-1.svg",
      className: "relative w-[100px] h-[92px]",
    },
    {
      title: "Дискорд",
      icon: "https://c.animaapp.com/PyecxKQm/img/vector-2.svg",
      className: "relative w-[133px] h-[92px]",
      offset: true,
    },
  ];

  return (
    <header className="relative w-full h-[873px] bg-[#070914] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://c.animaapp.com/PyecxKQm/img/header_1.png" 
          alt="Minecraft cave scene" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative w-full h-full max-w-[1697px] mx-auto">
        <div className="flex h-full">
          {/* Hero content */}
          <div className="w-[65%] pt-[169px] pl-[170px] z-10 relative">
            <div className="max-w-[582px]">
              <h1 className="font-['Montserrat',Helvetica] font-bold text-[57.2px] leading-[55.7px]">
                <span className="text-[#1ad76f]">Мыло </span>
                <span className="text-white">приватный сервер.</span>
              </h1>

              <p className="mt-6 font-['IBM_Plex_Sans',Helvetica] font-extralight text-[19.8px] text-[#c2c7e5] max-w-[582px]">
                Приватный сервер, где выживание — искусство, а каждый сезон —
                полёт фантазии.
              </p>
            </div>

            {/* Login form */}
            <div className="mt-[50px] flex">
              <div className="relative flex items-center h-[54px] w-[320px] bg-[#1d1f2e] rounded-[33px_0px_0px_33px] border border-solid border-[#2a2c3c]">
                <div className="absolute left-[22px]">
                  <img
                    className="w-4 h-4"
                    alt="Username icon"
                    src="https://c.animaapp.com/PyecxKQm/img/username-svg.svg"
                  />
                </div>
                <Input
                  className="border-0 bg-transparent h-full pl-[50px] text-[#a6acd1] text-[11px] font-['Poppins',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Введите ваш никнейм..."
                />
              </div>
              <Button className="h-[54px] w-[105px] rounded-[0px_33px_33px_0px] bg-[#1ad76f] border-2 border-solid text-[11px] font-semibold font-['Poppins',Helvetica]">
                Войти
              </Button>
            </div>

            {/* Price note */}
            <p className="mt-[5px] font-['IBM_Plex_Sans',Helvetica] font-medium text-[13px] text-[#686e93]">
              Актуальная стоимость проходки 199 рублей.
            </p>

            {/* Navigation icons */}
            <div className="mt-[40px] flex flex-wrap max-w-[280px]">
              {navLinks.map((link, index) => (
                <div
                  key={link.title}
                  className={`${index === 2 ? "mt-[25px] ml-[60px]" : index === 1 ? "ml-[13px]" : ""}`}
                >
                  <div className={`${link.className} group cursor-pointer transition-all duration-300 hover:z-10`}>
                    <img
                      className={`absolute ${index === 0 ? "w-[117px]" : index === 1 ? "w-[79px]" : "w-[113px]"} h-[92px] top-0 left-0 transition-all duration-300 group-hover:scale-110 group-hover:brightness-[5] group-hover:invert group-hover:contrast-[100%]`}
                      alt={`${link.title} icon`}
                      src={link.icon}
                    />
                    <div
                      className={`h-[21px] ${
                        index === 0 
                          ? "top-9 left-[105px] group-hover:left-[110px]" 
                          : index === 1 
                          ? "top-[33px] left-[70px] group-hover:left-[75px]" 
                          : "top-[35px] left-[89px] group-hover:left-[94px]"
                      } rotate-[90.00deg] font-['IBM_Plex_Sans',Helvetica] font-normal text-[#242734] text-base absolute transition-all duration-300 group-hover:text-white`}
                    >
                      {link.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Removed right side image as it's now part of the background */}
        </div>
      </div>
    </header>
  );
};
