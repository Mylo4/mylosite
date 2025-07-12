import React, { useState } from "react";

export const WikiGuides = (): JSX.Element => {
  // State to track which guides are expanded
  const [expandedGuides, setExpandedGuides] = useState<{[key: string]: boolean}>({
    "chat": false,
    "mods": false
  });

  // Toggle function for expanding/collapsing guides
  const toggleGuide = (guideId: string) => {
    setExpandedGuides(prev => ({
      ...prev,
      [guideId]: !prev[guideId]
    }));
  };

  return (
    <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
      <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
        <span className="mr-3">📚</span>
        <span>Гайды</span>
      </h2>
      
      <div className="prose prose-invert max-w-none">
        <ul className="space-y-4 list-none p-0">
          {/* Chat Guide */}
          <li className="bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(26,215,111,0.3)] overflow-hidden">
            <button 
              onClick={() => toggleGuide("chat")}
              className="w-full p-4 text-left flex items-center justify-between text-[#1ad76f] text-xl font-medium hover:bg-[rgba(26,215,111,0.1)] transition-colors"
            >
              <div className="flex items-center">
                <i className="mr-2">📘</i>
                <span>Как писать в чат Minecraft?</span>
              </div>
              <span className="text-2xl">{expandedGuides["chat"] ? "−" : "+"}</span>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${expandedGuides["chat"] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="p-6 pt-0">
                <h4 className="text-white text-lg mb-2 mt-4 flex items-center">
                  <span className="mr-2">💬</span>
                  <span>Основы общения:</span>
                </h4>
                
                <div className="mb-4 text-[#a7add2]">
                  <p className="mb-2">Если вы вводите просто текст без префиксов то вы пишите в <strong className="text-white">Локальный чат</strong>. Видно игрокам в радиусе 200 блоков.</p>
                  <p className="mb-2"><strong className="text-white">!</strong> — Глобальный чат. Сообщение увидят все игроки на сервере.</p>
                </div>

                <h4 className="text-white text-lg mb-2 flex items-center">
                  <span className="mr-2">🧩</span>
                  <span>Полезные команды для чата:</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[rgba(0,0,0,0.2)] p-3 rounded-lg">
                    <code className="text-[#1ad76f] font-mono">^ender</code>
                    <p className="text-[#a7add2] text-sm mt-1">Показать содержимое своего эндер-сундука в чате</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.2)] p-3 rounded-lg">
                    <code className="text-[#1ad76f] font-mono">^inv</code>
                    <p className="text-[#a7add2] text-sm mt-1">Показать инвентарь</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.2)] p-3 rounded-lg">
                    <code className="text-[#1ad76f] font-mono">^item</code>
                    <p className="text-[#a7add2] text-sm mt-1">Показать предмет в руке</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.2)] p-3 rounded-lg">
                    <code className="text-[#1ad76f] font-mono">^ping</code>
                    <p className="text-[#a7add2] text-sm mt-1">Отобразить свой пинг</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.2)] p-3 rounded-lg">
                    <code className="text-[#1ad76f] font-mono">^pos</code>
                    <p className="text-[#a7add2] text-sm mt-1">Отправить свои координаты</p>
                  </div>
                </div>
                
                <div className="bg-[rgba(33,150,243,0.2)] border border-[#2196F3] rounded-lg p-4 text-[#2196F3] mb-4">
                  <p className="flex items-center">
                    <strong className="mr-2">📢</strong>
                    <span>Чтобы использовать команды ^ в глобальном чате, просто добавь ! перед сообщением.</span>
                  </p>
                  <p className="mt-2">Пример: <code className="bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded">!^item</code></p>
                </div>
                
                <h4 className="text-white text-lg mb-2 flex items-center">
                  <span className="mr-2">🎭</span>
                  <span>Ролевая команда:</span>
                </h4>
                
                <div className="bg-[rgba(0,0,0,0.2)] p-4 rounded-lg mb-4">
                  <code className="text-[#1ad76f] font-mono">/me</code>
                  <p className="text-[#a7add2] mt-1">Отправить сообщение от третьего лица.</p>
                  <p className="text-[#a7add2] mt-2">Пример: <code className="bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded">/me улыбается тепло.</code></p>
                  <p className="text-[#a7add2] mt-1">(В чате отобразится: <span className="text-[#ff9dd1]">Игрок улыбается тепло.</span>)</p>
                </div>
              </div>
            </div>
          </li>

          {/* Mods Installation Guide */}
          <li className="bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(26,215,111,0.3)] overflow-hidden">
            <button 
              onClick={() => toggleGuide("mods")}
              className="w-full p-4 text-left flex items-center justify-between text-[#1ad76f] text-xl font-medium hover:bg-[rgba(26,215,111,0.1)] transition-colors"
            >
              <div className="flex items-center">
                <i className="mr-2">⚙️</i>
                <span>Установка модов</span>
              </div>
              <span className="text-2xl">{expandedGuides["mods"] ? "−" : "+"}</span>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${expandedGuides["mods"] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="p-6 pt-0">
                <div className="mb-6 mt-4">
                  <img 
                    src="https://c.animaapp.com/PyecxKQm/img/458745875487547854_2.png" 
                    alt="oMylo Modpack" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                </div>

                <div className="bg-[rgba(26,215,111,0.1)] border border-[#1ad76f] rounded-lg p-4 mb-6">
                  <h4 className="text-white text-lg mb-2 flex items-center">
                    <span className="mr-2">🚀</span>
                    <span>Скачать через Modrinth</span>
                  </h4>
                  <ol className="list-decimal pl-6 mb-2 text-[#a7add2]">
                    <li className="mb-2">Переходим на <a href="https://modrinth.com/modpack/omylo/versions" target="_blank" rel="noopener noreferrer" className="text-[#1ad76f] hover:underline">страницу со сборкой</a> и скачиваем последнюю доступную версию.</li>
                    <li className="mb-2">Если у вас есть Modrinth лаунчер, тогда скорее всего он у вас основной для формата <strong className="text-white">.mrpack</strong>, просто нажимаем два раза на файл, и сборка установится в лаунчере.</li>
                    <li className="mb-2">Если у вас другой лаунчер который поддерживает <strong className="text-white">.mrpack</strong>, вы должны зайти в него и импортировать сборку в него. Например на лаунчере Prism достаточно просто перетащить файл <strong className="text-white">.mrpack</strong> в интерфейс и он предложит установить его.</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-white text-lg mb-2 flex items-center">
                    <span className="mr-2">🔧</span>
                    <span>Установка Fabric</span>
                  </h4>
                  <p className="text-[#a7add2] mb-4">
                    Вы можете установить Fabric скачав его на <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noopener noreferrer" className="text-[#1ad76f] hover:underline">официальном сайте</a>.
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-[#a7add2]">
                    <li className="mb-2">Откройте файл (Fabric-installer)</li>
                    <li className="mb-2">Выберите нужную версию игры (та, на которой сборка)</li>
                    <li className="mb-2">Нажмите кнопку <strong className="text-white">Установить</strong></li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-white text-lg mb-2 flex items-center">
                    <span className="mr-2">📦</span>
                    <span>Ручная установка модов</span>
                  </h4>
                  <ol className="list-decimal pl-6 mb-4 text-[#a7add2]">
                    <li className="mb-2">Нажмите комбинацию клавиш <strong className="text-white">WIN + R</strong> и напишите <strong className="text-white">%appdata%</strong>, у вас откроется папка.</li>
                    <li className="mb-2">Найдите в этой папке другую папку с названием <strong className="text-white">.minecraft</strong> и откройте её.</li>
                    <li className="mb-2">Скачайте архив на Google Drive. Для того чтобы сразу скачать весь архив со всеми файлами Вы можете нажать на кнопку <strong className="text-white">скачать все</strong> в правом верхнем углу.</li>
                    <li className="mb-2">Перетащите все файлы из архива который вы скачали в эту папку. Так у вас сразу будут все эмоции, моды и ресурспаки.</li>
                    <li className="mb-2">Зайдите в лаунчер и запустите игру на версии fabric которую Вы скачали.</li>
                  </ol>
                  <div className="bg-[rgba(255,193,7,0.2)] border border-[#ffc107] rounded-lg p-4 text-[#ffc107]">
                    <strong>⚠️ Примечание:</strong> Если у вас нет папки mods, вы можете зайти в майнкрафт и выйти из него чтобы она появилась или создать ее сами, просто создав папку с таким же названием - mods
                  </div>
                </div>

                <div className="bg-[rgba(33,150,243,0.2)] border border-[#2196F3] rounded-lg p-4 text-[#2196F3]">
                  <p className="flex items-center">
                    <strong className="mr-2">💡</strong>
                    <span>Появились вопросы или проблемы? - пишите нам в Discord!</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        
        <div className="mt-8 bg-[rgba(26,215,111,0.1)] rounded-lg p-4 text-center">
          <p className="text-[#1ad76f] font-medium">Нажмите на заголовок гайда, чтобы развернуть или свернуть его содержимое</p>
        </div>
      </div>
    </div>
  );
};
