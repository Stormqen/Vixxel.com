import React, { useState } from 'react';
import { Book, Cpu, Code, Zap, ChevronRight, Terminal, Box, Globe, Shield, MousePointer2, Heart, Activity } from 'lucide-react';

const Docs = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    {
      id: 'intro',
      title: 'Введение v0.0.1',
      icon: <Book className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest">
              Core v0.0.1 (Vulkan Edition)
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight">Vixxel Engine Core</h2>
          <p className="text-gray-400 leading-relaxed">
            Vixxel — это высокопроизводительный игровой движок, вдохновленный классической песочницей Roblox, но перенесенный на современный стек технологий с упором на графику и физику.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
              <Zap className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="font-bold mb-2">Vulkan API</h3>
              <p className="text-sm text-gray-500">Полный переход с OpenGL на Vulkan для максимальной производительности и мягких теней.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
              <MousePointer2 className="w-6 h-6 text-purple-500 mb-4" />
              <h3 className="font-bold mb-2">Smart Control</h3>
              <p className="text-sm text-gray-500">Умное управление камерой (RMB Rotation), Shift Lock и исправленные анимации персонажа.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'graphics',
      title: 'Графика и Мир',
      icon: <Zap className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight">Графический движок</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-blue-400 mb-2">Soft Shadows & Lighting</h4>
              <p className="text-sm text-gray-400">Реализована продвинутая система мягких теней без прямого солнца для создания естественного освещения.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-blue-400 mb-2">Roblox Style Baseplate</h4>
              <p className="text-sm text-gray-400">Классическая шахматная сетка мира, обеспечивающая знакомый визуальный стиль и удобство ориентирования.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-blue-400 mb-2">Custom UI & Cursor</h4>
              <p className="text-sm text-gray-400">Полностью кастомная система интерфейса и игрового курсора, заменяющая системные элементы Windows.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'character',
      title: 'Персонаж и Физика',
      icon: <Activity className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight">Система персонажа</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-purple-400">Ragdoll Reset (R)</h4>
              <p className="text-sm text-gray-400">При ресете персонаж моментально "разваливается" на части с применением физики рэгдолла, возрождаясь через 4 секунды.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-purple-400">Smart Camera</h4>
              <p className="text-sm text-gray-400">Заморозка курсора при зажатии ПКМ, свободный обзор и режим Shift Lock.</p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" /> Система здоровья (HP)
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Динамический 3D HP Bar над головой</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Умная видимость (появляется при уроне, исчезает через 5-7 сек)</li>
              <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-blue-500" /> Цветовая индикация (Зеленый → Желтый → Красный)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'controls',
      title: 'Управление',
      icon: <Terminal className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight">Горячие клавиши</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'WASD', desc: 'Передвижение' },
              { key: 'Space', desc: 'Прыжок' },
              { key: 'L-Shift', desc: 'Shift Lock' },
              { key: 'R', desc: 'Ресет (Ragdoll)' },
              { key: 'RMB (Hold)', desc: 'Вращение камеры' },
              { key: 'Wheel', desc: 'Зум (1st/3rd person)' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded text-xs">{item.key}</span>
                <span className="text-sm text-gray-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'tech',
      title: 'Тех. Стек',
      icon: <Cpu className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight">Технологии v0.0.1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="vixxel-glass p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
                <Code className="w-4 h-4" /> Core Development
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex justify-between"><span>Язык:</span> <span className="text-white font-mono">C++</span></li>
                <li className="flex justify-between"><span>Рендеринг:</span> <span className="text-white font-mono">Vulkan</span></li>
                <li className="flex justify-between"><span>UI:</span> <span className="text-white font-mono">RmlUi</span></li>
                <li className="flex justify-between"><span>Скриптинг:</span> <span className="text-white font-mono">Lua</span></li>
              </ul>
            </div>
            <div className="vixxel-glass p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-purple-400">
                <Shield className="w-4 h-4" /> Engine Status
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Текущая версия фокусируется на точном воссоздании механик управления и физики классических песочниц. 
                Внедрена интеграция Raylib для работы с Vulkan.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-1">
              <div className="px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Документация v0.0.1
              </div>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === section.id 
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                    : 'text-gray-400 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {section.icon}
                  <span className="text-sm font-bold">{section.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-grow max-w-4xl">
            <div className="vixxel-glass p-8 md:p-12 rounded-[40px] border border-white/5">
              {sections.find(s => s.id === activeSection)?.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Docs;
