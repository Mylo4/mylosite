import React from "react";

export const WikiFeatures = (): JSX.Element => {
  return (
    <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
      <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
        <span className="mr-3">🎮</span>
        <span>Особенности</span>
      </h2>
      
      <div className="prose prose-invert max-w-none">
        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="feature-card bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-[rgba(26,215,111,0.1)] hover:shadow-lg">
            <h3 className="text-[#1ad76f] text-xl mb-4 flex items-center">
              <i className="mr-2">🔮</i>
              Палочка отладки
            </h3>
            <p className="text-[#a7add2]">
              Позволяет настраивать и изменять свойства блоков. Узнайте рецепт крафта в разделе "Крафты".
            </p>
            <p className="text-[#a7add2] mt-2 italic">
              └ Запрещено использование для дюпа и багоюза.
            </p>
          </div>
          
          <div className="feature-card bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-[rgba(26,215,111,0.1)] hover:shadow-lg">
            <h3 className="text-[#1ad76f] text-xl mb-4 flex items-center">
              <i className="mr-2">🧪</i>
              Зелье против фантомов
            </h3>
            <p className="text-[#a7add2]">
              Специальное зелье, которое отключает появление фантомов на 30 игровых ночей.
            </p>
            <div className="bg-[rgba(33,150,243,0.2)] border border-[#2196F3] rounded-lg p-2 text-[#2196F3] mt-2 text-sm">
              <strong>💡 Статус:</strong> В разработке - скоро будет доступно!
            </div>
          </div>
          
          <div className="feature-card bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-[rgba(26,215,111,0.1)] hover:shadow-lg">
            <h3 className="text-[#1ad76f] text-xl mb-4 flex items-center">
              <i className="mr-2">🛡️</i>
              Кастомизация арморстендов
            </h3>
            <p className="text-[#a7add2]">
              Возможность полностью настраивать положение и внешний вид арморстендов для создания уникальных декораций.
            </p>
            <p className="text-[#a7add2] mt-2 italic">
              └ Возьмите в руку кремень и нажмите ПКМ по арморстенду.
            </p>
          </div>
          
          <div className="feature-card bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-[rgba(26,215,111,0.1)] hover:shadow-lg">
            <h3 className="text-[#1ad76f] text-xl mb-4 flex items-center">
              <i className="mr-2">🧙‍♂️</i>
              Странствующие торговцы
            </h3>
            <p className="text-[#a7add2]">
              Странствующие торговцы предлагают декоративные головы и предметы для починки (не больше 1 шт.), которые нельзя получить обычным способом.
            </p>
          </div>
        </div>
        
        <div className="feature-highlight bg-[rgba(0,0,0,0.2)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] mb-8">
          <h3 className="text-[#1ad76f] text-2xl mb-4">🍺 Плагин Brewery</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <p className="text-[#a7add2] mb-4">
                На сервере установлен плагин Brewery, который добавляет новые виды напитков с различными эффектами. Вы можете создавать собственные рецепты и экспериментировать с ингредиентами.
              </p>
              <p className="text-[#a7add2] mb-4">
                Каждый напиток имеет уникальные свойства и может давать как положительные, так и отрицательные эффекты в зависимости от качества приготовления.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <img 
                src="https://c.animaapp.com/PyecxKQm/img/brewery_1.png" 
                alt="Brewery" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="feature-list">
          <h3 className="text-[#1ad76f] text-2xl mb-4">Другие особенности сервера</h3>
          <ul className="list-disc pl-6 space-y-4 text-[#a7add2]">
            <li>
              <strong className="text-white">Эффект замедления отключает полёт на элитрах</strong> — будьте осторожны при использовании элитр под эффектом замедления
            </li>
            <li>
              <strong className="text-white">Высокопроизводительный сервер</strong> — стабильные 20 TPS даже при большом количестве игроков благодаря ядру Folia
            </li>
            <li>
              <strong className="text-white">Уникальные идеи каждый сезон</strong> — каждый сезон представляет собой новый эксперимент с уникальными механиками
            </li>
            <li>
              <strong className="text-white">Пространственный карман</strong> — личное измерение 10x10 блоков для каждого игрока (в разработке)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
