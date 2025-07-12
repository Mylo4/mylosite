import React from "react";

export const WikiCrafts = (): JSX.Element => {
  return (
    <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
      <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
        <span className="mr-3">🔨</span>
        <span>Крафты</span>
      </h2>
      
      <div className="prose prose-invert max-w-none">
        {/* Блок света */}
        <div className="craft-recipe bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(26,215,111,0.3)] mb-8">
          <h4 className="text-[#1ad76f] text-xl mb-2">💡 Блок света</h4>
          <p className="text-[#a7add2] mb-4">Невидимый источник света для освещения построек</p>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="grid grid-cols-3 gap-2 mb-4 md:mb-0 md:mr-6">
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/lantern.png" alt="Фонарь" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/torch_1.png" alt="Факел" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_glowstone_be.webp" alt="Светокамень" className="w-6 h-6" />
              </div>
            </div>
            <div className="text-[#1ad76f] text-2xl mx-4">→</div>
            <div className="bg-[rgba(26,215,111,0.2)] border-2 border-[#1ad76f] rounded-lg p-4 text-center">
              <img src="https://c.animaapp.com/PyecxKQm/img/light_15.png" alt="Невидимый свет" className="w-8 h-8 mx-auto mb-2" />
              <span className="text-white font-bold">Невидимый свет</span>
            </div>
          </div>
        </div>

        {/* Невидимая рамка */}
        <div className="craft-recipe bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(26,215,111,0.3)] mb-8">
          <h4 className="text-[#1ad76f] text-xl mb-2">🖼️ Невидимая рамка</h4>
          <p className="text-[#a7add2] mb-4">Рамка для предметов, которая становится невидимой</p>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="grid grid-cols-3 gap-2 mb-4 md:mb-0 md:mr-6">
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/item_frame.png" alt="Рамка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/glasspane.png" alt="Стеклянная панель" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
            </div>
            <div className="text-[#1ad76f] text-2xl mx-4">→</div>
            <div className="bg-[rgba(26,215,111,0.2)] border-2 border-[#1ad76f] rounded-lg p-4 text-center">
              <img src="https://c.animaapp.com/PyecxKQm/img/glass_item_frame.png" alt="Невидимая рамка" className="w-8 h-8 mx-auto mb-2" />
              <span className="text-white font-bold">Невидимая рамка</span>
            </div>
          </div>
        </div>

        {/* Мешочек */}
        <div className="craft-recipe bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(26,215,111,0.3)] mb-8">
          <h4 className="text-[#1ad76f] text-xl mb-2">🎒 Мешочек</h4>
          <p className="text-[#a7add2] mb-4">Портативное хранилище для предметов</p>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="grid grid-cols-3 gap-2 mb-4 md:mb-0 md:mr-6">
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/string.png" alt="Нитка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/string.png" alt="Нитка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                {/* Empty cell */}
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/rabbit_hide.png" alt="Кроличья шкурка" className="w-6 h-6" />
              </div>
            </div>
            <div className="text-[#1ad76f] text-2xl mx-4">→</div>
            <div className="bg-[rgba(26,215,111,0.2)] border-2 border-[#1ad76f] rounded-lg p-4 text-center">
              <img src="https://c.animaapp.com/PyecxKQm/img/Invicon_Bundle.webp" alt="Мешочек" className="w-8 h-8 mx-auto mb-2" />
              <span className="text-[#4CAF50] font-bold">Мешочек</span>
            </div>
          </div>
        </div>

        {/* Стекло из бетона */}
        <div className="craft-recipe bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(26,215,111,0.3)] mb-8">
          <h4 className="text-[#1ad76f] text-xl mb-2">🔥 Стекло из бетона</h4>
          <p className="text-[#a7add2] mb-4">Переплавка цветного бетона в цветное стекло</p>
          <div className="bg-[rgba(0,0,0,0.2)] p-6 rounded-lg mb-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="mb-4 font-bold text-[#1ad76f]">Исходный материал:</div>
                <div className="grid grid-cols-4 gap-2">
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_white_concrete_powder.webp" alt="Белый бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_light_gray_concrete_powder.webp" alt="Светло-серый бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_gray_concrete_powder.webp" alt="Серый бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_black_concrete_powder.webp" alt="Черный бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_brown_concrete_powder.webp" alt="Коричневый бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_red_concrete_powder.webp" alt="Красный бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_orange_concrete_powder.webp" alt="Оранжевый бетон" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_yellow_concrete_powder.webp" alt="Желтый бетон" className="w-8 h-8" />
                </div>
              </div>
              <div className="text-[#1ad76f] text-3xl">🔥</div>
              <div className="text-center">
                <div className="mb-4 font-bold text-[#1ad76f]">Результат:</div>
                <div className="grid grid-cols-4 gap-2">
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_white_stained_glass.webp" alt="Белое стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_light_gray_stained_glass.webp" alt="Светло-серое стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_gray_stained_glass.webp" alt="Серое стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_black_stained_glass.webp" alt="Черное стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_brown_stained_glass.webp" alt="Коричневое стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_red_stained_glass.webp" alt="Красное стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_orange_stained_glass.webp" alt="Оранжевое стекло" className="w-8 h-8" />
                  <img src="https://c.animaapp.com/PyecxKQm/img/invicon_yellow_stained_glass.webp" alt="Желтое стекло" className="w-8 h-8" />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(33,150,243,0.2)] border border-[#2196F3] rounded-lg p-4 text-[#2196F3] mt-4">
              <strong>💡 Совет:</strong> Помещайте любой цветной бетон в печь, чтобы получить соответствующее цветное стекло!
            </div>
          </div>
        </div>

        {/* Палочка отладки */}
        <div className="craft-recipe bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(26,215,111,0.3)] mb-8">
          <h4 className="text-[#1ad76f] text-xl mb-2">🔮 Палочка отладки</h4>
          <p className="text-[#a7add2] mb-4">Зачарованная палочка для отладки и настройки блоков</p>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="grid grid-cols-3 gap-2 mb-4 md:mb-0 md:mr-6">
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_stick.webp" alt="Палка" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_slimeball.webp" alt="Слизь" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_diamond.webp" alt="Алмаз" className="w-6 h-6" />
              </div>
            </div>
            <div className="text-[#1ad76f] text-2xl mx-4">→</div>
            <div className="bg-[rgba(26,215,111,0.2)] border-2 border-[#1ad76f] rounded-lg p-4 text-center">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_debug_stick.gif" alt="Палочка отладки" className="w-8 h-8 mx-auto mb-2" />
              <span className="text-[#9966ff] font-bold">Палочка отладки</span>
            </div>
          </div>
        </div>

        {/* Пространственный карман */}
        <div className="craft-recipe bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(26,215,111,0.3)] mb-8">
          <h4 className="text-[#1ad76f] text-xl mb-2">🌌 Пространственный карман</h4>
          <p className="text-[#a7add2] mb-4">Личное измерение 10x10 блоков для каждого игрока</p>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="grid grid-cols-3 gap-2 mb-4 md:mb-0 md:mr-6">
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_chorus_fruit.webp" alt="Плод хоруса" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_netherite_ingot.webp" alt="Незеритовый слиток" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_end_crystal.gif" alt="Эндер кристалл" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_netherite_ingot.webp" alt="Незеритовый слиток" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_ender_chest.webp" alt="Эндер сундук" className="w-6 h-6" />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(26,215,111,0.4)] rounded p-2 flex items-center justify-center">
                <img src="https://c.animaapp.com/PyecxKQm/img/invicon_shulker_shell.webp" alt="Панцирь шалкера" className="w-6 h-6" />
              </div>
            </div>
            <div className="text-[#1ad76f] text-2xl mx-4">→</div>
            <div className="bg-[rgba(26,215,111,0.2)] border-2 border-[#1ad76f] rounded-lg p-4 text-center">
              <img src="https://c.animaapp.com/PyecxKQm/img/invicon_music_disc_5.webp" alt="Пространственный карман" className="w-8 h-8 mx-auto mb-2" />
              <span className="text-[#5599ff] font-bold">Пространственный карман</span>
            </div>
          </div>
          <div className="bg-[rgba(33,150,243,0.2)] border border-[#2196F3] rounded-lg p-4 text-[#2196F3]">
            <strong>🏗️ Статус:</strong> В разработке - скоро будет доступно!
          </div>
        </div>

        <div className="warning bg-[rgba(255,193,7,0.2)] border border-[#ffc107] rounded-lg p-4 text-[#ffc107] mb-6">
          <strong>⚠️ Важно:</strong> Рецепты могут изменяться в зависимости от сезона. 
          Следите за обновлениями в Discord!
        </div>

        <div className="success bg-[rgba(26,215,111,0.2)] border border-[#1ad76f] rounded-lg p-4 text-[#1ad76f]">
          <strong>💡 Полезно знать:</strong> Все кастомные предметы имеют особые свойства и функции. 
          Экспериментируйте с ними для создания уникальных построек!
        </div>
      </div>
    </div>
  );
};
