import React from "react";

export const WikiInfo = (): JSX.Element => {
  return (
    <div className="bg-[#161724] rounded-xl p-8 border border-[#2a2c3c]">
      <h2 className="text-3xl font-bold mb-6 text-[#1ad76f] flex items-center">
        <span className="mr-3">📋</span>
        <span>Информация</span>
      </h2>
      
      <div className="prose prose-invert max-w-none">
        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">О сервере "Мыло"</h3>
          <p className="text-[#a7add2] mb-4">
            "Мыло" - это приватный Minecraft-сервер, где выживание превращается в настоящее искусство, 
            а каждый сезон представляет собой уникальный эксперимент с новыми механиками и концепциями.
          </p>
          <p className="text-[#a7add2] mb-4">
            Наш сервер отличается от других высоким качеством технической реализации, 
            дружелюбным сообществом и постоянными инновациями в игровом процессе.
          </p>
        </div>

        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">Технические характеристики</h3>
          <ul className="list-disc pl-6 mb-4 text-[#a7add2]">
            <li className="mb-2">Версия игры: <span className="text-[#1ad76f] font-semibold">1.21.5</span></li>
            <li className="mb-2">Ядро сервера: <span className="text-[#1ad76f] font-semibold">Folia</span> (многопоточная архитектура)</li>
            <li className="mb-2">Стабильные 20 TPS даже при 100+ игроках</li>
            <li className="mb-2">Собственный хостинг с высокой производительностью</li>
            <li className="mb-2">Регулярные бэкапы мира</li>
          </ul>
        </div>

        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)] mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">Как начать игру</h3>
          <ol className="list-decimal pl-6 mb-4 text-[#a7add2]">
            <li className="mb-2">Приобретите проходку на сервер (199 рублей)</li>
            <li className="mb-2">Установите клиент Minecraft версии 1.21.5</li>
            <li className="mb-2">Рекомендуем установить нашу сборку модов для лучшего опыта</li>
            <li className="mb-2">Войдите на сервер, используя IP: <span className="bg-[rgba(26,215,111,0.1)] px-2 py-1 rounded text-[#1ad76f] font-mono">play.mylo.top</span></li>
            <li className="mb-2">Ознакомьтесь с правилами сервера</li>
            <li className="mb-2">Присоединяйтесь к нашему Discord-сообществу</li>
          </ol>
        </div>

        <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(26,215,111,0.3)]">
          <h3 className="text-2xl font-semibold mb-4 text-white">Контакты и поддержка</h3>
          <p className="text-[#a7add2] mb-4">
            Если у вас возникли вопросы или проблемы, вы можете связаться с нами:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#a7add2]">
            <li className="mb-2">Discord: <a href="https://discord.gg/Z8GJGH59TU" className="text-[#1ad76f] hover:underline">discord.gg/mylo</a></li>
            <li className="mb-2">Email: <a href="mailto:support@mylo.top" className="text-[#1ad76f] hover:underline">support@mylo.top</a></li>
            <li className="mb-2">Техническая поддержка доступна 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
