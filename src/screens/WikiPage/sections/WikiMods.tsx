import React, { useState } from "react";

export const WikiMods = (): JSX.Element => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
      <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
        <span className="mr-3">⚙️</span>
        <span>Моды</span>
      </h2>
      
      <div className="prose prose-invert max-w-none">
        <div className="success bg-[rgba(26,215,111,0.2)] border border-[#1ad76f] rounded-lg p-4 text-[#1ad76f] mb-8">
          <strong>🎉 Готовая сборка:</strong> У нас есть специально подготовленная сборка модов для версии 1.21.5, 
          которая включает все необходимые моды и дополнения для комфортной игры на сервере.
        </div>

        <div className="modpack-banner mb-8 text-center">
          <img 
            src="https://c.animaapp.com/PyecxKQm/img/458745875487547854.png" 
            alt="oMylo Modpack" 
            className="max-w-full rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)]">
            <h3 className="text-[#1ad76f] text-xl mb-4 flex items-center">
              <i className="mr-2">⬇️</i>
              Способы установки
            </h3>
            <p className="text-[#a7add2] mb-2"><strong className="text-white">Вариант 1:</strong> Скачать через Modrinth (рекомендуется)</p>
            <p className="text-[#a7add2] mb-2"><strong className="text-white">Вариант 2:</strong> Ручная установка через Google Drive</p>
            <p className="text-[#a7add2] mb-2"><strong className="text-white">Fabric Loader версия:</strong> <span className="bg-[rgba(26,215,111,0.1)] px-2 py-1 rounded">0.16</span></p>
            <p className="text-[#a7add2] mb-2"><strong className="text-white">Версия игры:</strong> <span className="bg-[rgba(26,215,111,0.1)] px-2 py-1 rounded">1.21.5</span></p>
          </div>
          
          <div className="feature-card bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)]">
            <h3 className="text-[#1ad76f] text-xl mb-4 flex items-center">
              <i className="mr-2">⭐</i>
              Что включено
            </h3>
            <ul className="list-disc pl-6 text-[#a7add2]">
              <li className="mb-2"><strong className="text-white">Fabric API</strong> - основа для работы модов</li>
              <li className="mb-2"><strong className="text-white">Plasmo Voice</strong> - голосовая связь</li>
              <li className="mb-2"><strong className="text-white">Fast3D</strong> - поддержка 3D моделей</li>
              <li className="mb-2"><strong className="text-white">Emotecraft</strong> - анимации и эмоции</li>
              <li className="mb-2"><strong className="text-white">Optimization моды</strong> - для лучшей производительности</li>
              <li className="mb-2"><strong className="text-white">Готовые ресурспаки</strong> - для полного погружения</li>
            </ul>
          </div>
        </div>

        <div className="guide-collapsible mb-8">
          <button 
            className="btn bg-gradient-to-r from-[#1ad76f] to-[#18c265] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:translate-y-[-2px] w-full md:w-auto"
            onClick={() => setIsGuideOpen(!isGuideOpen)}
          >
            <i className="mr-2">{isGuideOpen ? "📖" : "📚"}</i> 
            {isGuideOpen ? "Скрыть гайд по установке" : "Показать гайд по установке"}
          </button>
          
          <div className={`guide-content mt-4 bg-[rgba(0,0,0,0.3)] rounded-lg overflow-hidden transition-all duration-300 ${isGuideOpen ? "max-h-[2000px] p-6" : "max-h-0"}`}>
            <h3 className="text-[#4CAF50] text-2xl mb-6 flex items-center">
              <i className="mr-2">🚀</i> Полный гайд по установке сборки
            </h3>

            <div className="info bg-[rgba(33,150,243,0.2)] border border-[#2196F3] rounded-lg p-4 text-[#2196F3] mb-6">
              <strong>📋 Выберите способ установки:</strong> Мы предлагаем два удобных способа установки сборки модов.
            </div>

            {/* Modrinth способ */}
            <div className="guide-step bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border-l-4 border-[#1ad76f] mb-6">
              <h4 className="text-[#1ad76f] text-xl mb-4 flex items-center">
                <i className="mr-2">⭐</i> Способ 1: Через Modrinth (Рекомендуется)
              </h4>
              <div className="text-[#a7add2] mb-4">
                Самый простой и быстрый способ установки с автоматическим управлением модами.
              </div>
              
              <div>
                <p className="text-white mb-2"><strong>Шаг 1:</strong> Переходим на страницу сборки на <a href="https://modrinth.com/modpack/omylo/versions" target="_blank" className="text-[#4CAF50] hover:underline">Modrinth</a> и скачиваем последнюю версию</p>
                
                <p className="text-white mb-2"><strong>Шаг 2:</strong> Если у вас Modrinth лаунчер:</p>
                <ul className="list-disc pl-6 mb-4 text-[#a7add2]">
                  <li className="mb-2">Просто дважды кликните на скачанный файл <code className="bg-[rgba(0,0,0,0.4)] px-2 py-1 rounded text-[#1ad76f]">.mrpack</code></li>
                  <li className="mb-2">Сборка автоматически установится в лаунчере</li>
                </ul>
                
                <p className="text-white mb-2"><strong>Шаг 3:</strong> Если у вас другой лаунчер (Prism, MultiMC и т.д.):</p>
                <ul className="list-disc pl-6 mb-4 text-[#a7add2]">
                  <li className="mb-2">Откройте лаунчер</li>
                  <li className="mb-2">Перетащите файл <code className="bg-[rgba(0,0,0,0.4)] px-2 py-1 rounded text-[#1ad76f]">.mrpack</code> в интерфейс лаунчера</li>
                  <li className="mb-2">Следуйте инструкциям для импорта</li>
                </ul>
              </div>
            </div>

            {/* Ручная установка */}
            <div className="guide-step bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border-l-4 border-[#1ad76f]">
              <h4 className="text-[#1ad76f] text-xl mb-4 flex items-center">
                <i className="mr-2">🔧</i> Способ 2: Ручная установка
              </h4>
              <div className="text-[#a7add2] mb-4">
                Для тех, кто предпочитает полный контроль над установкой модов.
              </div>

              <div>
                <h5 className="text-[#4CAF50] text-lg mb-4">🔧 Установка Fabric</h5>
                <ol className="list-decimal pl-6 mb-4 text-[#a7add2]">
                  <li className="mb-2">Скачайте Fabric Installer с <a href="https://fabricmc.net/use/installer/" target="_blank" className="text-[#4CAF50] hover:underline">официального сайта</a></li>
                  <li className="mb-2">Откройте файл Fabric-installer</li>
                  <li className="mb-2">Выберите версию игры <code className="bg-[rgba(0,0,0,0.4)] px-2 py-1 rounded text-[#1ad76f]">1.21.5</code></li>
                  <li className="mb-2">Выберите версию Fabric Loader <code className="bg-[rgba(0,0,0,0.4)] px-2 py-1 rounded text-[#1ad76f]">0.16</code></li>
                  <li className="mb-2">Нажмите кнопку <strong>"Установить"</strong></li>
                </ol>
                
                <h5 className="text-[#4CAF50] text-lg mb-4">📦 Установка модов</h5>
                <ol className="list-decimal pl-6 mb-4 text-[#a7add2]">
                  <li className="mb-2">Скачайте архив с модами с нашего <a href="https://drive.google.com/file/d/1234567890/view" target="_blank" className="text-[#4CAF50] hover:underline">Google Drive</a></li>
                  <li className="mb-2">Распакуйте архив</li>
                  <li className="mb-2">Скопируйте все файлы из папки "mods" в папку "mods" вашего Minecraft</li>
                  <li className="mb-2">Скопируйте все файлы из папки "resourcepacks" в папку "resourcepacks" вашего Minecraft</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="warning bg-[rgba(255,193,7,0.2)] border border-[#ffc107] rounded-lg p-4 text-[#ffc107]">
          <strong>⚠️ Важно:</strong> Использование читов, X-Ray и других запрещенных модов 
          приведет к блокировке. Наша сборка содержит только разрешенные моды.
        </div>
        
        <div className="mod-list mt-8">
          <h3 className="text-[#1ad76f] text-2xl mb-4">Список рекомендуемых модов</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(26,215,111,0.3)]">
              <h4 className="text-white mb-2">🔊 Plasmo Voice</h4>
              <p className="text-[#a7add2] text-sm">Голосовой чат с пространственным звуком</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(26,215,111,0.3)]">
              <h4 className="text-white mb-2">🗺️ JourneyMap</h4>
              <p className="text-[#a7add2] text-sm">Детальная карта мира с отметками</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(26,215,111,0.3)]">
              <h4 className="text-white mb-2">🏃 Sodium</h4>
              <p className="text-[#a7add2] text-sm">Оптимизация производительности</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(26,215,111,0.3)]">
              <h4 className="text-white mb-2">💡 Iris</h4>
              <p className="text-[#a7add2] text-sm">Поддержка шейдеров</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(26,215,111,0.3)]">
              <h4 className="text-white mb-2">🎭 Emotecraft</h4>
              <p className="text-[#a7add2] text-sm">Эмоции и анимации персонажа</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(26,215,111,0.3)]">
              <h4 className="text-white mb-2">🧊 Fast3D</h4>
              <p className="text-[#a7add2] text-sm">Поддержка 3D моделей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
