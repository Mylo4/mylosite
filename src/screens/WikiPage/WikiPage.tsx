import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define wiki sections data
const wikiSections = [
  {
    id: "info",
    title: "📋 Информация",
    icon: "fas fa-info-circle",
  },
  {
    id: "rules",
    title: "📜 Правила",
    icon: "fas fa-gavel",
    content: `
      <div class="warning" style="margin-bottom: 2rem;">
        <strong>⚠️ Важно:</strong> Незнание правил не освобождает от ответственности. Все игроки обязаны соблюдать правила сервера.
      </div>
      
      <div class="rules-section">
        <div class="rules-header">
          <img src="https://c.animaapp.com/PyecxKQm/img/8549854854.png" alt="Правила против гриферства" class="rules-header-image full-width-image">
        </div>
        
        <div class="rule-category">
          <h3>Г.1 Защита чужой собственности</h3>
          <p>Запрещено ломать, ставить, воровать, взрывать что-либо на территории чужого поселения или дома.</p>
          <p class="rule-note">⠀└ Суд вправе не рассматривать незначительные дела.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.2 Свобода передвижения</h3>
          <p>Запрещается препятствовать передвижению игроков через застройку выходов, входов или копание блоков под ногами.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.3 Запрет на ловушки</h3>
          <p>Запрещается создавать ловушки с целью убийства, кражи ресурсов или причинения вреда игрокам.</p>
          <p class="rule-note">⠀└ Вы можете создать ловушку для шутки, но не будете застрахованы от возможных последствий.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.4 PvP только по согласию</h3>
          <p>Запрещено несогласованное убийство игроков.</p>
          <p class="rule-note">└ PVP разрешен только по предварительному согласию и всегда с возвратом ресурсов.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.5 Запретные зоны поселений</h3>
          <p>Поселения вправе определять на своей земле "запретную" зону.</p>
          <p class="rule-note">└ Вход для сторонних игроков запрещен. Штраф от 10 до 32 АР и более.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.6 Ответственность за криперов</h3>
          <p>Если по вине игрока был взорван крипер, игрок должен починить всё разрушенное.</p>
          <p class="rule-note">└ При невозможности починки - возмещение ущерба поселению.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.7 Защита порталов</h3>
          <p>Запрещено ломать порталы на территории чужого поселения и на крыше ада.</p>
        </div>
        
        <div class="rule-category">
          <h3>Г.8 Мультиаккаунты</h3>
          <p>В случае блокировки второго аккаунта, блокировка применяется и к основному.</p>
        </div>
      </div>
      
      <div class="rules-section">
        <div class="rules-header">
          <img src="https://c.animaapp.com/PyecxKQm/img/53d68a864fd66a6d.png" alt="Общие правила поведения" class="rules-header-image full-width-image">
        </div>
        
        <div class="rule-category">
          <h3>О.1 Стримы и Twitch</h3>
          <p>Запрещено употреблять запрещенные на Twitch слова во время трансляций игроков сервера.</p>
          <p class="rule-note">└ Игрок должен предварительно уведомить о стриме в чате.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.2 Обход правил</h3>
          <p>Запрещено искать обход первому правилу.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.3 Токсичное поведение</h3>
          <p>Запрещено чрезмерно токсичное поведение.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.4 Спам и реклама</h3>
          <p>Запрещен спам, флуд, реклама сторонних проектов.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.5 Ссылки в чате</h3>
          <p>Запрещено отправлять ссылки в глобальный чат (исключение - YouTube).</p>
        </div>
        
        <div class="rule-category">
          <h3>О.6 Уважение к суду</h3>
          <p>За проявление неуважения к суду/судье последует наказание.</p>
          <p class="rule-note">└ От отмены права голоса до ужесточения наказания.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.7 Символика войны</h3>
          <p>Запрещается выражать поддержку войне или использовать её символику.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.8 Межнациональная рознь</h3>
          <p>Запрещено разжигать межнациональную рознь.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.9 Политические дебаты</h3>
          <p>Запрещено развязывать политические дебаты.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.10 Покрывательство читеров</h3>
          <p>Запрещено покрывать читеров и иксрейщиков.</p>
        </div>
        
        <div class="rule-category">
          <h3>О.11 Связи с читерами</h3>
          <p>Связи с друзьями-читерами могут повлечь наказание.</p>
        </div>
      </div>
      
      <div class="rules-section">
        <div class="rules-header">
          <img src="https://c.animaapp.com/PyecxKQm/img/5f3ff7bfb28c8199.png" alt="Механики и технические ограничения" class="rules-header-image full-width-image">
        </div>
        
        <div class="rule-category">
          <h3>М.1 Защита от лагов</h3>
          <p>Нельзя строить сооружения и механизмы, намеренно вызывающие лаги у игроков или сервера.</p>
        </div>
        
        <div class="rule-category">
          <h3>М.2 Дюп предметов</h3>
          <p>Запрещен весь дюп, кроме ТНТ.</p>
        </div>
        
        <div class="rule-category">
          <h3>М.3 Энд в пиковое время</h3>
          <p>Нежелательно идти лутать энд в пик онлайна.</p>
        </div>
        
        <div class="rule-category">
          <h3>М.4-М.5 Debug Stick</h3>
          <ul class="rules-list">
            <li>Запрещено дюпать предметы с помощью палочки отладки</li>
            <li>Запрещено использовать debug-stick для личной выгоды и абуз возможностей</li>
          </ul>
          <p class="rule-note">P.S. При нарушении - лишение доступа к палочке или бан.</p>
        </div>
      </div>
      
      <div class="rules-section">
        <div class="rules-header">
          <img src="https://c.animaapp.com/PyecxKQm/img/3fef2d60fab9f28f.png" alt="Правила против читов" class="rules-header-image full-width-image">
        </div>
        
        <div class="rule-category">
          <h3>З.1 Полный запрет читов</h3>
          <p>Запрещено использование читов в любом их проявлении.</p>
        </div>
        
        <div class="rule-category">
          <h3>З.2 Хранение читов</h3>
          <p>Запрещено хранить на ПК читы на версию 1.19+ и 1.20+.</p>
        </div>
        
        <div class="rule-category">
          <h3>З.3 Сид мира</h3>
          <p>Запрещено узнавать, распространять, видеть или трогать сид мира.</p>
        </div>
        
        <div class="rule-category">
          <h3>З.4 Ограничения миникарты</h3>
          <p>Запрещено использование режимов пещер и мобов на миникарте ❕</p>
        </div>
        
        <div class="rule-category">
          <h3>З.5 Второй аккаунт</h3>
          <p>Стоимость второго аккаунта составляет 100 рублей. Попытки обхода оплаты или создания дополнительного аккаунта без уведомления администрации запрещены.</p>
        </div>
      </div>
      
      <div class="rules-section">
        <div class="rules-header">
          <img src="https://c.animaapp.com/PyecxKQm/img/488de07d06edfd9b.png" alt="Правила построек" class="rules-header-image full-width-image">
        </div>
        
        <div class="rule-category">
          <h3>П.1 Защита авторских прав</h3>
          <p>Запрещено преднамеренно копировать без разрешения владельца глобальные постройки и уникальные фермы/механизмы игроков, не находящиеся в открытом доступе.</p>
          <p class="rule-note">Исключения: маленькие декоративные постройки, элементы декора, маленькие фермы и фермы из интернета.</p>
        </div>
        
        <div class="rule-category">
          <h3>П.2 Эстетические требования</h3>
          <p>Строить некрасивые коробки запрещено!</p>
        </div>
        
        <div class="rule-category">
          <h3>П.3 Размещение ферм</h3>
          <p>Нельзя строить фермы в открытом месте, которые портят вид территории поселения.</p>
          <p class="rule-note">⚖️ Размещайте фермы далеко в океане или под землей вашего поселения.</p>
        </div>
        
        <div class="rule-category">
          <h3>П.4 Фермы за пределами поселения</h3>
          <p>Вы имеете право строить фермы за территорией поселения (на незанятой территории) и отстаивать их приватность.</p>
        </div>
      </div>
      
      <div class="rules-section">
        <div class="rules-header">
          <img src="https://c.animaapp.com/PyecxKQm/img/25edfc7d6c062257.png" alt="Правила администрации" class="rules-header-image full-width-image">
        </div>
        
        <div class="rule-category">
          <h3>А.1 Злоупотребление полномочиями</h3>
          <p>Запрещено злоупотребление административными правами.</p>
        </div>
        
        <div class="rule-category">
          <h3>А.2 Доказательная база</h3>
          <p>Запрещено наказание без наличия доказательств.</p>
        </div>
        
        <div class="rule-category">
          <h3>А.3 Снятие наказаний</h3>
          <p>Запрещено снятие наказания без веских доказательств.</p>
        </div>
        
        <div class="rule-category">
          <h3>А.4 Личное использование</h3>
          <p>Запрещено использование административных команд в личных целях.</p>
        </div>
        
        <div class="rule-category">
          <h3>А.5 Уважение к администрации</h3>
          <p>Запрещено оскорбление членов администрации.</p>
        </div>
      </div>
      
      <div class="rules-section punishment-section">
        <h2>📋 Система наказаний</h2>
        
        <div class="punishment-category">
          <h3>💥 Гриферство (Г.)</h3>
          <div class="punishment-levels">
            <div class="punishment light-level">🟢 <strong>Легкие:</strong> Штраф, исправление, возврат ресурсов</div>
            <div class="punishment medium-level">🟠 <strong>Серьезные:</strong> Временный бан, большой штраф</div>
          </div>
        </div>
        
        <div class="punishment-category">
          <h3>🤬 Общение (О.)</h3>
          <div class="punishment-levels">
            <div class="punishment light-level">🟢 <strong>Легкие:</strong> Временный мут, варн</div>
            <div class="punishment medium-level">🟠 <strong>Серьезные:</strong> Временный бан, длительный мут, перманентный варн</div>
          </div>
        </div>
        
        <div class="punishment-category">
          <h3>📕 Механики (М.)</h3>
          <div class="punishment-levels">
            <div class="punishment light-level">🟢 <strong>Легкие:</strong> Варн</div>
            <div class="punishment medium-level">🟠 <strong>Серьезные:</strong> Временный бан</div>
          </div>
        </div>
        
        <div class="punishment-category">
          <h3>🤯 Читы (З.)</h3>
          <div class="punishment-levels">
            <div class="punishment medium-level">🟠 <strong>Серьезные:</strong> Перманентный варн (за З.2 недельный бан)</div>
            <div class="punishment severe-level">🔴 <strong>Критичные:</strong> Перманентный бан или редкие исключения</div>
          </div>
        </div>
        
        <div class="punishment-category">
          <h3>🏗️ Постройки (П.)</h3>
          <div class="punishment-levels">
            <div class="punishment mixed-level">🟢🟠 <strong>Различные:</strong> Снос постройки и/или штраф</div>
          </div>
        </div>
        
        <div class="punishment-category">
          <h3>🥥 Discord правила</h3>
          <div class="punishment-levels">
            <div class="punishment special-level">🔵 <strong>Особые:</strong> За нарушение в Discord - наказание в Discord или, в редких случаях, бан на проекте</div>
          </div>
        </div>
      </div>
      
      <div class="rules-footer">
        <p>Добро пожаловать на сервер "Мыло" - играйте честно и с удовольствием! 🎮</p>
      </div>
    `,
  },
  {
    id: "features",
    title: "🎮 Особенности",
    icon: "fas fa-star",
    content: `
      <div class="feature-grid">
        <div class="feature-card">
          <h3><i class="fas fa-cube"></i>Пространственный карман</h3>
          <p>Личное измерение размером 10x10 блоков для каждого игрока. 
          Идеально для хранения ценных вещей и создания личных лабораторий.</p>
          <div class="info">
            <strong>Статус:</strong> В разработке
          </div>
        </div>
        <div class="feature-card">
          <h3><i class="fas fa-user-tie"></i>Странствующие торговцы</h3>
          <p>Продают декоративные головы и другие полезные предметы. 
          Отличная альтернатива обычной торговле с жителями.</p>
        </div>
        <div class="feature-card">
          <h3><i class="fas fa-palette"></i>Творческие возможности</h3>
          <p>Арморстенды, невидимые рамки, блоки света. Создавайте 3D модели, 
          кастомные арморстенды и уникальные постройки.</p>
        </div>
        <div class="feature-card">
          <h3><i class="fas fa-headset"></i>Поддержка 24/7</h3>
          <p>Качественная техническая поддержка в любое время. 
          Быстрые ответы на вопросы и решение проблем.</p>
        </div>
      </div>
    `,
  },
  {
    id: "crafts",
    title: "🔨 Крафты",
    icon: "fas fa-hammer",
    content: `
      <!-- Блок света -->
      <div class="craft-recipe">
        <h4>💡 Блок света</h4>
        <p>Невидимый источник света для освещения построек</p>
        <div style="display: flex; align-items: center; margin: 1rem 0;">
          <div class="recipe-ingredients">
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/lantern.png" alt="Фонарь" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" style="width: 24px; height: 24px;" />
            </div>
          </div>
          <div class="recipe-arrow">→</div>
          <div class="recipe-result">
            <img src="https://c.animaapp.com/PyecxKQm/img/light_15.png" alt="Невидимый свет" style="width: 32px; height: 32px;" />
            <br><span style="color: #fff; font-weight: bold;">Невидимый свет</span>
          </div>
        </div>
      </div>

      <!-- Невидимая рамка -->
      <div class="craft-recipe">
        <h4>🖼️ Невидимая рамка</h4>
        <p>Рамка для предметов, которая становится невидимой</p>
        <div style="display: flex; align-items: center; margin: 1rem 0;">
          <div class="recipe-ingredients">
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/item_frame.png" alt="Рамка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/glasspane.png" alt="Стеклянная панель" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/empty.png" alt="Пусто" style="width: 24px; height: 24px;" />
            </div>
          </div>
          <div class="recipe-arrow">→</div>
          <div class="recipe-result">
            <img src="https://c.animaapp.com/PyecxKQm/img/glass_item_frame.png" alt="Невидимая рамка" style="width: 32px; height: 32px;" />
            <br><span style="color: #fff; font-weight: bold;">Невидимая рамка</span>
          </div>
        </div>
      </div>

      <!-- Мешочек -->
      <div class="craft-recipe">
        <h4>🎒 Мешочек</h4>
        <p>Портативное хранилище для предметов</p>
        <div style="display: flex; align-items: center; margin: 1rem 0;">
          <div class="recipe-ingredients">
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/string.png" alt="Нитка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/string.png" alt="Нитка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient"></div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" style="width: 24px; height: 24px;" />
            </div>
          </div>
          <div class="recipe-arrow">→</div>
          <div class="recipe-result">
            <img src="https://c.animaapp.com/PyecxKQm/img/Invicon_Bundle.webp" alt="Мешочек" style="width: 32px; height: 32px;" />
            <br><span style="color: #4CAF50; font-weight: bold;">Мешочек</span>
          </div>
        </div>
      </div>

      <!-- Палочка отладки -->
      <div class="craft-recipe">
        <h4>🔮 Палочка отладки</h4>
        <p>Зачарованная палочка для отладки и настройки блоков</p>
        <div style="display: flex; align-items: center; margin: 1rem 0;">
          <div class="recipe-ingredients">
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_stick.webp" alt="Палка" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" style="width: 24px; height: 24px;" />
            </div>
          </div>
          <div class="recipe-arrow">→</div>
          <div class="recipe-result">
            <img src="https://c.animaapp.com/PyecxKQm/img/invicon_debug_stick.gif" alt="Палочка отладки" style="width: 32px; height: 32px;" />
            <br><span style="color: #9966ff; font-weight: bold;">Палочка отладки</span>
          </div>
        </div>
      </div>

      <!-- Пространственный карман -->
      <div class="craft-recipe">
        <h4>🌌 Пространственный карман</h4>
        <p>Личное измерение 10x10 блоков для каждого игрока</p>
        <div style="display: flex; align-items: center; margin: 1rem 0;">
          <div class="recipe-ingredients">
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_chorus_fruit.webp" alt="Плод хоруса" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_netherite_ingot.webp" alt="Незеритовый слиток" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_end_crystal.gif" alt="Эндер кристалл" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_netherite_ingot.webp" alt="Незеритовый слиток" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" style="width: 24px; height: 24px;" />
            </div>
            <div class="ingredient">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_shulker_shell.webp" alt="Панцирь шалкера" style="width: 24px; height: 24px;" />
            </div>
          </div>
          <div class="recipe-arrow">→</div>
          <div class="recipe-result">
            <img src="https://c.animaapp.com/PyecxKQm/img/invicon_music_disc_5.webp" alt="Пространственный карман" style="width: 32px; height: 32px;" />
            <br><span style="color: #5599ff; font-weight: bold;">Пространственный карман</span>
          </div>
        </div>
        <div class="info">
          <strong>🏗️ Статус:</strong> В разработке - скоро будет доступно!
        </div>
      </div>

      <div class="warning">
        <strong>⚠️ Важно:</strong> Рецепты могут изменяться в зависимости от сезона. 
        Следите за обновлениями в Discord!
      </div>
    `,
  },
  {
    id: "guides",
    title: "📚 Гайды",
    icon: "fas fa-book",
    content: `
      <div class="feature-grid">
        <div class="feature-card">
          <h3><i class="fas fa-cube"></i>Как поставить 3D модель</h3>
          
          <h4>1️⃣ Создание модели</h4>
          <ol class="steps">
            <li>Переходим на сайт <strong>blockbench.net</strong></li>
            <li>Создаем или загружаем модель</li>
            <li>Нажимаем кнопку экспорта (Export to Minecraft) и копируем команду</li>
            <li>Вставляем команду в текстовый документ</li>
          </ol>

          <h4>2️⃣ Установка в мир</h4>
          <ol class="steps">
            <li>Крафтим <span class="highlight">Разводной ключ</span> и <span class="highlight">Чертеж</span></li>
            <li>Отправляем текстовый документ себе в Discord и копируем ссылку</li>
            <li>Берем чертеж в левую руку, разводной ключ в правую</li>
            <li>Прописываем команду: <div class="code-block"><code>/fast3d <ссылка на файл из Discord></code></div></li>
            <li>Нажимаем Shift + ПКМ ключом</li>
            <li>Собираем нужные ресурсы из чата и повторяем</li>
          </ol>

          <h4>❌ Удаление модели</h4>
          <p>Берем гаечный ключ, нажимаем F, выбираем "Удаление", 
          наводимся на блок и кликаем ПКМ.</p>
        </div>

        <div class="feature-card">
          <h3><i class="fas fa-tshirt"></i>Установка скинов</h3>
          <ol class="steps">
            <li>Скачиваем скин с любого сайта (например, minecraft-heads.com)</li>
            <li>Заходим в лаунчер</li>
            <li>Переходим в настройки аккаунта</li>
            <li>Загружаем файл скина</li>
            <li>Сохраняем изменения</li>
          </ol>
          <div class="info">
            <strong>💡 Совет:</strong> Убедитесь, что скин не содержит 
            оскорбительного или сексуального контента
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "mods",
    title: "⚙️ Моды",
    icon: "fas fa-puzzle-piece",
    content: `
      <div class="success">
        <strong>🎉 Готовая сборка:</strong> У нас есть специально подготовленная сборка модов для версии 1.21.5, 
        которая включает все необходимые моды и дополнения для комфортной игры на сервере.
      </div>

      <div class="modpack-banner" style="margin: 2rem 0; text-align: center;">
        <img src="https://c.animaapp.com/PyecxKQm/img/458745875487547854.png" alt="oMylo Modpack" style="max-width: 100%; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />
      </div>

      <div class="feature-grid">
        <div class="feature-card">
          <h3><i class="fas fa-download"></i>Способы установки</h3>
          <p><strong>Вариант 1:</strong> Скачать через Modrinth (рекомендуется)</p>
          <p><strong>Вариант 2:</strong> Ручная установка через Google Drive</p>
          <p><strong>Fabric Loader версия:</strong> <span class="highlight">0.16</span></p>
          <p><strong>Версия игры:</strong> <span class="highlight">1.21.5</span></p>
        </div>
        
        <div class="feature-card">
          <h3><i class="fas fa-star"></i>Что включено</h3>
          <ul>
            <li><strong>Fabric API</strong> - основа для работы модов</li>
            <li><strong>Plasmo Voice</strong> - голосовая связь</li>
            <li><strong>Fast3D</strong> - поддержка 3D моделей</li>
            <li><strong>Emotecraft</strong> - анимации и эмоции</li>
            <li><strong>Optimization моды</strong> - для лучшей производительности</li>
            <li><strong>Готовые ресурспаки</strong> - для полного погружения</li>
          </ul>
        </div>
      </div>

      <div class="guide-collapsible">
        <button class="btn" id="toggleGuideBtn">
          <i class="fas fa-book-open"></i> Показать гайд по установке
        </button>
        
        <div class="guide-content" id="installGuide">
          <h3 style="color: #4CAF50; margin-bottom: 2rem;">
            <i class="fas fa-rocket"></i> Полный гайд по установке сборки
          </h3>

          <div class="info">
            <strong>📋 Выберите способ установки:</strong> Мы предлагаем два удобных способа установки сборки модов.
          </div>

          <!-- Modrinth способ -->
          <div class="guide-step">
            <h4><i class="fas fa-star"></i> Способ 1: Через Modrinth (Рекомендуется)</h4>
            <div class="step-description">
              Самый простой и быстрый способ установки с автоматическим управлением модами.
            </div>
            
            <div class="step-actions">
              <p><strong>Шаг 1:</strong> Переходим на страницу сборки на <a href="https://modrinth.com/modpack/omylo/versions" target="_blank" style="color: #4CAF50;">Modrinth</a> и скачиваем последнюю версию</p>
              
              <p><strong>Шаг 2:</strong> Если у вас Modrinth лаунчер:</p>
              <ul>
                <li>Просто дважды кликните на скачанный файл <code>.mrpack</code></li>
                <li>Сборка автоматически установится в лаунчере</li>
              </ul>
              
              <p><strong>Шаг 3:</strong> Если у вас другой лаунчер (Prism, MultiMC и т.д.):</p>
              <ul>
                <li>Откройте лаунчер</li>
                <li>Перетащите файл <code>.mrpack</code> в интерфейс лаунчера</li>
                <li>Следуйте инструкциям для импорта</li>
              </ul>
            </div>
          </div>

          <!-- Ручная установка -->
          <div class="guide-step">
            <h4><i class="fas fa-tools"></i> Способ 2: Ручная установка</h4>
            <div class="step-description">
              Для тех, кто предпочитает полный контроль над установкой модов.
            </div>

            <div class="step-actions">
              <h5 style="color: #4CAF50; margin: 1rem 0;">🔧 Установка Fabric</h5>
              <p><strong>Шаг 1:</strong> Скачайте Fabric Installer с <a href="https://fabricmc.net/use/installer/" target="_blank" style="color: #4CAF50;">официального сайта</a></p>
              <p><strong>Шаг 2:</strong> Откройте файл Fabric-installer</p>
              <p><strong>Шаг 3:</strong> Выберите версию игры <code>1.21.5</code></p>
              <p><strong>Шаг 4:</strong> Выберите версию Fabric Loader <code>0.16</code></p>
              <p><strong>Шаг 5:</strong> Нажмите кнопку <strong>"Установить"</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div class="warning">
        <strong>⚠️ Важно:</strong> Использование читов, X-Ray и других запрещенных модов 
        приведет к блокировке. Наша сборка содержит только разрешенные моды.
      </div>
    `,
  },
];

export const WikiPage = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState(wikiSections[0].id);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    // Add event listener for the guide toggle button
    const toggleBtn = document.getElementById('toggleGuideBtn');
    const guideContent = document.getElementById('installGuide');
    
    if (toggleBtn && guideContent) {
      toggleBtn.addEventListener('click', () => {
        setIsGuideOpen(!isGuideOpen);
      });
    }
    
    // Redirect to info page on initial load
    if (window.location.pathname === "/wiki") {
      window.location.href = "/wiki/info";
    }
  }, [isGuideOpen]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Navigate to the corresponding section page
    window.location.href = `/wiki/${sectionId}`;
  };

  const activeContent = wikiSections.find(section => section.id === activeSection)?.content;
  const activeIcon = wikiSections.find(section => section.id === activeSection)?.icon || "";
  const activeTitle = wikiSections.find(section => section.id === activeSection)?.title || "";

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
          <Link to="/#map" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
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

      {/* Main content starts directly */}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-[#161724] rounded-xl p-6 border border-[#2a2c3c] sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-[#1ad76f]">Навигация</h2>
              <ul className="space-y-4">
                {wikiSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`text-left w-full py-2 px-4 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "bg-[#1ad76f]/10 text-[#1ad76f]"
                          : "text-[#a7add2] hover:bg-[#2a2c3c]/30"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4">
            <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
              <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
                <i className={activeIcon}></i>
                <span className="ml-3">{activeTitle}</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: activeContent || "" }} />
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
              <h3 className="text-xl font-semibold mb-4 text-[#1ad76f]">Нужна помощь?</h3>
              <p className="text-[#a7add2] mb-4">
                Если у вас остались вопросы, вы можете обратиться к администрации сервера или задать вопрос в нашем Discord-сообществе.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://discord.gg/Z8GJGH59TU" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <img 
                    src="https://c.animaapp.com/PyecxKQm/img/discord-svg.svg" 
                    alt="Discord" 
                    className="w-5 h-5"
                  />
                  Присоединиться к Discord
                </a>
              </div>
            </div>
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

      <style jsx>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(26, 215, 111, 0.3);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(26, 215, 111, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(26, 215, 111, 0.2);
        }

        .feature-card h3 {
          color: #1ad76f;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        .craft-recipe {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1rem 0;
          border: 1px solid rgba(26, 215, 111, 0.3);
        }

        .craft-recipe h4 {
          color: #1ad76f;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .recipe-ingredients {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin: 1rem 0;
          max-width: 200px;
        }

        .ingredient {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(26, 215, 111, 0.4);
          border-radius: 4px;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .recipe-arrow {
          font-size: 2rem;
          color: #1ad76f;
          margin: 0 1rem;
        }

        .recipe-result {
          background: rgba(26, 215, 111, 0.2);
          border: 2px solid #1ad76f;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          font-weight: bold;
        }

        .steps {
          list-style: none;
          counter-reset: step-counter;
        }

        .steps li {
          counter-increment: step-counter;
          margin: 1rem 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border-left: 4px solid #1ad76f;
          position: relative;
        }

        .highlight {
          background: linear-gradient(120deg, rgba(26, 215, 111, 0.3) 0%, rgba(26, 215, 111, 0.1) 100%);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: bold;
        }

        .warning {
          background: rgba(255, 193, 7, 0.2);
          border: 1px solid #ffc107;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          color: #ffc107;
        }

        .info {
          background: rgba(33, 150, 243, 0.2);
          border: 1px solid #2196F3;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          color: #2196F3;
        }

        .success {
          background: rgba(26, 215, 111, 0.2);
          border: 1px solid #1ad76f;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          color: #1ad76f;
        }

        .code-block {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(26, 215, 111, 0.3);
          border-radius: 8px;
          padding: 1rem;
          font-family: 'Courier New', monospace;
          margin: 1rem 0;
          overflow-x: auto;
        }

        .code-block code {
          color: #1ad76f;
          font-weight: bold;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(45deg, #1ad76f, #18c265);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          margin: 1rem 0;
        }

        .btn:hover {
          background: linear-gradient(45deg, #18c265, #1ad76f);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 215, 111, 0.4);
        }

        .guide-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          margin-top: 1rem;
        }

        .guide-content.active {
          max-height: 2000px;
          padding: 2rem;
        }

        .guide-step {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1rem 0;
          border-left: 4px solid #1ad76f;
        }

        .guide-step h4 {
          color: #1ad76f;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Rules styles */
        .rules-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .rule-category {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(26, 215, 111, 0.3);
        }

        .rule-category h3 {
          color: #1ad76f;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .rules-list {
          list-style-type: decimal;
          padding-left: 1.5rem;
          color: #a7add2;
        }

        .rules-list li {
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .punishment-list {
          list-style-type: none;
          padding-left: 0.5rem;
        }

        .punishment-list li {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .punishment {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .warning-level {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
          border: 1px solid #ffc107;
        }

        .mute-level {
          background: rgba(33, 150, 243, 0.2);
          color: #2196F3;
          border: 1px solid #2196F3;
        }

        .temp-ban-level {
          background: rgba(255, 87, 34, 0.2);
          color: #ff5722;
          border: 1px solid #ff5722;
        }

        .perm-ban-level {
          background: rgba(244, 67, 54, 0.2);
          color: #f44336;
          border: 1px solid #f44336;
        }

        /* New Rules Styles */
        .rules-main-title {
          font-size: 2.2rem;
          color: #1ad76f;
          text-align: center;
          margin: 2rem 0;
          font-weight: 800;
          text-shadow: 0 2px 10px rgba(26, 215, 111, 0.3);
        }

        .rules-section {
          margin-bottom: 3rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(26, 215, 111, 0.2);
        }

        .rules-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(26, 215, 111, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }

        .rules-header-image {
          width: 100%;
          border-radius: 8px;
          object-fit: cover;
        }

        .full-width-image {
          height: auto;
          max-height: 200px;
          object-fit: contain;
        }

        .rule-category {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid #1ad76f;
        }

        .rule-category h3 {
          color: #1ad76f;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .rule-category h4 {
          color: #a7add2;
          font-size: 1.1rem;
          margin: 1rem 0 0.5rem 0;
        }

        .rule-category p {
          color: #a7add2;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .rule-note {
          color: #686e93;
          font-style: italic;
          margin-top: 0.25rem;
          padding-left: 1rem;
        }

        .rules-list {
          list-style-type: disc;
          padding-left: 1.5rem;
          color: #a7add2;
          margin: 0.5rem 0;
        }

        .rules-list li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .punishment-section {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(26, 215, 111, 0.3);
        }

        .punishment-section h2 {
          color: #1ad76f;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .punishment-category {
          margin-bottom: 1.5rem;
        }

        .punishment-category h3 {
          color: #a7add2;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid rgba(26, 215, 111, 0.2);
          padding-bottom: 0.5rem;
        }

        .punishment-levels {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .punishment {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          flex: 1;
          min-width: 250px;
        }

        .light-level {
          background: rgba(76, 175, 80, 0.1);
          color: #4CAF50;
          border: 1px solid rgba(76, 175, 80, 0.3);
        }

        .medium-level {
          background: rgba(255, 152, 0, 0.1);
          color: #FF9800;
          border: 1px solid rgba(255, 152, 0, 0.3);
        }

        .severe-level {
          background: rgba(244, 67, 54, 0.1);
          color: #F44336;
          border: 1px solid rgba(244, 67, 54, 0.3);
        }

        .special-level {
          background: rgba(33, 150, 243, 0.1);
          color: #2196F3;
          border: 1px solid rgba(33, 150, 243, 0.3);
        }

        .mixed-level {
          background: linear-gradient(90deg, rgba(76, 175, 80, 0.1), rgba(255, 152, 0, 0.1));
          color: #a7add2;
          border: 1px solid rgba(26, 215, 111, 0.3);
        }

        .rules-footer {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem;
          background: rgba(26, 215, 111, 0.1);
          border-radius: 8px;
          color: #1ad76f;
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('toggleGuideBtn');
            const guideContent = document.getElementById('installGuide');
            
            if (toggleBtn && guideContent) {
              toggleBtn.addEventListener('click', function() {
                if (guideContent.classList.contains('active')) {
                  guideContent.classList.remove('active');
                  toggleBtn.innerHTML = '<i class="fas fa-book-open"></i> Показать гайд по установке';
                } else {
                  guideContent.classList.add('active');
                  toggleBtn.innerHTML = '<i class="fas fa-book"></i> Скрыть гайд по установке';
                }
              });
            }
          });
        `
      }} />
    </div>
  );
};
