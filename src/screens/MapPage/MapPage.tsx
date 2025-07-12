import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DynMap } from "../../components/DynMap";

export const MapPage = (): JSX.Element => {
  const [selectedWorld, setSelectedWorld] = useState('world');
  const [selectedMapType, setSelectedMapType] = useState('flat');

  const handlePlayerClick = (playerData: any) => {
    console.log('Игрок нажат:', playerData);
    // You can implement a custom notification or modal here
  };

  const handleMarkerClick = (markerData: any) => {
    console.log('Маркер нажат:', markerData);
    // You can implement a custom notification or modal here
  };

  return (
    <div className="flex flex-col h-screen bg-[#070914]">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 border-b border-[#2a2c3c] bg-[#0c0e1a] z-50">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/soap-%282%29-3.png" 
              alt="Логотип Мыло" 
              className="h-8 w-auto mr-3"
            />
            <span className="text-[#1ad76f] font-semibold text-lg">Мыло</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Главная
          </Link>
          <Link to="/wiki" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Вики
          </Link>
          <Link to="/map" className="text-[#1ad76f] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Карта
          </Link>
        </div>
        <div>
          <Link to="/" className="bg-[#1ad76f] hover:bg-[#18c265] text-white px-6 py-2 rounded-full text-sm font-semibold font-['Poppins',Helvetica] transition-colors">
            Купить проходку
          </Link>
        </div>
      </nav>

      {/* Map controls */}
      <div className="bg-[#161724] border-b border-[#2a2c3c] p-4 z-10">
        <div className="container mx-auto flex flex-wrap gap-4 items-center">
          <div className="flex items-center">
            <label className="text-[#a7add2] mr-2 text-sm">Мир:</label>
            <select 
              value={selectedWorld} 
              onChange={(e) => setSelectedWorld(e.target.value)}
              className="bg-[#0c0e1a] text-white border border-[#2a2c3c] rounded-md px-3 py-1 text-sm focus:outline-none focus:border-[#1ad76f]"
            >
              <option value="world">Обычный мир</option>
              <option value="world_nether">Нижний мир</option>
              <option value="world_the_end">Край</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <label className="text-[#a7add2] mr-2 text-sm">Тип карты:</label>
            <select 
              value={selectedMapType} 
              onChange={(e) => setSelectedMapType(e.target.value)}
              className="bg-[#0c0e1a] text-white border border-[#2a2c3c] rounded-md px-3 py-1 text-sm focus:outline-none focus:border-[#1ad76f]"
            >
              <option value="flat">Плоская</option>
              <option value="surface">Поверхность</option>
              <option value="cave">Пещеры</option>
            </select>
          </div>

          <div className="ml-auto flex items-center text-[#a7add2] text-xs">
            <span className="mr-4">🖱️ Левая кнопка - перетаскивание</span>
            <span className="mr-4">🔍 Колесо мыши - масштабирование</span>
            <span>👆 Клик по игроку - информация</span>
          </div>
        </div>
      </div>

      {/* Map container */}
      <div className="flex-1 relative">
        <DynMap 
          serverUrl="http://146.59.47.21:25572"
          world={selectedWorld}
          mapType={selectedMapType}
          zoom={2}
          centerX={0}
          centerZ={0}
          showPlayers={true}
          showMarkers={true}
          onPlayerClick={handlePlayerClick}
          onMarkerClick={handleMarkerClick}
        />
      </div>
    </div>
  );
};
