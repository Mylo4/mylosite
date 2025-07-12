import React from "react";

export const WikiRules = (): JSX.Element => {
  return (
    <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
      <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
        <span className="mr-3">📜</span>
        <span>Правила</span>
      </h2>
      
      <div className="prose prose-invert max-w-none">
        <div className="warning mb-8 bg-[rgba(255,193,7,0.2)] border border-[#ffc107] rounded-lg p-4 text-[#ffc107]">
          <strong>⚠️ Важно:</strong> Незнание правил не освобождает от ответственности. Все игроки обязаны соблюдать правила сервера.
        </div>
        
        {/* Гриферство */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/8549854854.png" 
              alt="Правила против гриферства" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">💥 Гриферство</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.1</strong> Запрещено ломать, ставить, воровать, взрывать на чужой территории.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.2</strong> Запрещено блокировать проходы и копать под ногами игроков.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.3</strong> Запрещены ловушки для убийства или кражи.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.4</strong> PvP только по согласию с возвратом вещей.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.5</strong> Поселения могут создавать приватные зоны. Вход без разрешения является отягчающим обстоятельством.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.6</strong> Если крипер взорвался по твоей вине - чини сам или плати за ущерб.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.7</strong> Запрещено ломать чужие порталы.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">Г.8</strong> Блокировка твинка = блокировка основного аккаунта.</p>
            </li>
          </ul>
        </div>
        
        {/* Общение */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/53d68a864fd66a6d.png" 
              alt="Общие правила поведения" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">🤬 Общение</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.1</strong> Во время стримов запрещены слова, банные на Twitch.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.2</strong> Нельзя обходить правила общения.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.3</strong> Запрещена чрезмерная токсичность.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.4</strong> Нет спаму, флуду, рекламе.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.5</strong> Запрещены ссылки в чат (кроме YouTube).</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.6</strong> Уважай суд и судей - иначе получишь дополнительное наказание.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.7</strong> Запрещена поддержка войны и военная символика.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.8</strong> Нет межнациональной розни.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.9</strong> Политика запрещена.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.10</strong> Не покрывай читеров.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">О.11</strong> Дружба с читерами может стоить тебе аккаунта.</p>
            </li>
          </ul>
        </div>
        
        {/* Механики сервера */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/5f3ff7bfb28c8199.png" 
              alt="Механики и технические ограничения" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">📕 Механики сервера</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">М.1</strong> Нельзя строить лагающие механизмы.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">М.2</strong> Дюп запрещен (кроме ТНТ).</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">М.3</strong> Не лутай Энд в пик онлайна.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">М.4</strong> Debug Stick только для декора, не для дюпа.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">М.5</strong> Абуз Debug Stick = потеря доступа или бан.</p>
            </li>
          </ul>
        </div>
        
        {/* Читы и нарушения */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/3fef2d60fab9f28f.png" 
              alt="Правила против читов" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">🤯 Читы и нарушения</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">З.1</strong> Любые читы запрещены.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">З.2</strong> Нельзя хранить читы для MC 1.19+/1.20+.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">З.3</strong> Сид мира - табу. Узнал = бан.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">З.4</strong> На миникарте нет режимов пещер и мобов.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">З.5</strong> Второй аккаунт = 100 рублей. Обход = бан.</p>
            </li>
          </ul>
        </div>
        
        {/* Постройки */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/488de07d06edfd9b.png" 
              alt="Правила построек" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">🏗️ Постройки</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">П.1</strong> Нельзя копировать чужие уникальные постройки без разрешения.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">П.2</strong> Коробки без декора запрещены.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">П.3</strong> Фермы не должны портить вид поселения.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">П.4</strong> Можешь строить фермы за границами поселений на свободной земле.</p>
            </li>
          </ul>
        </div>
        
        {/* Нормы поведения */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/25edfc7d6c062257.png" 
              alt="Правила администрации" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">🥇 Нормы поведения</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">НП.1</strong> Мат в адрес игроков - в меру.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">НП.2</strong> Не трогай родных других игроков.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">НП.3</strong> Драки на мероприятиях только если это часть события.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">НП.4</strong> Саундпад в голосовом чате - умеренно.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">НП.5</strong> Нет оскорбительным постройкам и табличкам.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">НП.6</strong> Мут в Discord = мут в игре тоже.</p>
            </li>
          </ul>
        </div>
        
        {/* Администрация */}
        <div className="rules-section mb-12">
          <div className="rules-header mb-6 pb-4 border-b border-[rgba(26,215,111,0.3)] flex justify-center">
            <img 
              src="https://c.animaapp.com/PyecxKQm/img/25edfc7d6c062257.png" 
              alt="Правила администрации" 
              className="max-h-[200px] object-contain rounded-lg"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-[#1ad76f]">🥇 Администрация</h3>
          
          <ul className="space-y-3 list-none">
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">А.1</strong> Админы не злоупотребляют правами.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">А.2</strong> Наказание только с доказательствами.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">А.3</strong> Снятие наказаний только с доказательствами.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">А.4</strong> Админка не для личных нужд.</p>
            </li>
            <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border-l-3 border-[#1ad76f]">
              <p className="text-[#a7add2]"><strong className="text-white">А.5</strong> Уважай администрацию.</p>
            </li>
          </ul>
        </div>
        
        {/* Наказания */}
        <div className="punishment-section bg-[rgba(0,0,0,0.2)] border border-[rgba(26,215,111,0.3)] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1ad76f] text-center">⚖️ Наказания</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
              <p className="text-[#a7add2]"><strong className="text-[#ff6250]">💥 Гриферство:</strong> Штраф → Временный бан</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
              <p className="text-[#a7add2]"><strong className="text-[#ff6250]">🤬 Общение:</strong> Мут/Варн → Временный бан → Перм. варн</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
              <p className="text-[#a7add2]"><strong className="text-[#ff6250]">📕 Механики:</strong> Варн → Временный бан</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
              <p className="text-[#a7add2]"><strong className="text-[#ff6250]">🤯 Читы:</strong> Перм. варн (З.2 = неделя) → Перм. бан</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
              <p className="text-[#a7add2]"><strong className="text-[#ff6250]">🏗️ Постройки:</strong> Снос + штраф</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
              <p className="text-[#a7add2]"><strong className="text-[#ff6250]">🥥 Discord:</strong> Мут в Discord или бан на сервере</p>
            </div>
          </div>
        </div>
        
        <div className="rules-footer mt-8 p-4 bg-[rgba(26,215,111,0.1)] rounded-lg text-center text-[#1ad76f] text-xl font-bold">
          <p>Играй честно, уважай других! 🎮</p>
        </div>
      </div>
    </div>
  );
};
