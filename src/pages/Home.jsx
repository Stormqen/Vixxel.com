import { motion } from 'framer-motion'
import { Rocket, Code, Layout, Cpu, Zap, Globe, Github } from 'lucide-react'
import { GridPattern, FloatingBlob, VixxelLogo } from '../components/VisualElements'

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-[#050505] min-h-screen">
      {/* Background Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingBlob className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] text-blue-500/10 blur-3xl" />
        <FloatingBlob className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] text-purple-500/10 blur-3xl" />
        <GridPattern className="opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs font-black uppercase tracking-widest">Core Development: 0.8.4 Alpha</span>
            </div>
            
            <h1 className="text-6xl lg:text-9xl font-black mb-8 leading-tight tracking-tighter">
              VIXXEL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 italic uppercase">Vulkan Architecture</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12 max-w-4xl mx-auto">
              <div className="vixxel-glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Next-Gen Rendering
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Использование Vulkan API позволяет нам достичь беспрецедентной производительности, 
                  перенося вычисления освещения и теней напрямую на GPU.
                </p>
              </div>
              <div className="vixxel-glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Zero-Lag Logic
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Собственный байт-код и JIT-компиляция гарантируют, что ваши скрипты 
                  будут выполняться со скоростью нативного C++ кода.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn-primary flex items-center gap-3 px-10 py-4 text-lg shadow-lg shadow-blue-600/20">
                Стать разработчиком <Rocket className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-3">
                Whitepaper Engine <Layout className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Технологический стек</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Zap className="w-8 h-8 text-blue-500" />, 
              title: "Vulkan Engine", 
              desc: "Низкоуровневый доступ к GPU для максимального FPS и эффективного использования ресурсов." 
            },
            { 
              icon: <Code className="w-8 h-8 text-purple-500" />, 
              title: "Custom Scripting", 
              desc: "Сверхбыстрый компилируемый язык для логики, оптимизированный под параллельные вычисления." 
            },
            { 
              icon: <Globe className="w-8 h-8 text-blue-400" />, 
              title: "Networking", 
              desc: "Архитектура с предсказанием на стороне клиента и частотой обновления 128 Гц." 
            }
          ].map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="vixxel-glass p-10 rounded-[32px] border border-white/5 relative group hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="vixxel-glass p-12 rounded-[48px] border border-white/5 relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Экосистема <br /><span className="text-blue-500">Vixxel Studio</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Мы разрабатываем не просто игру, а полноценную среду разработки. Vixxel Studio — это мощный IDE, 
                интегрированный прямо в платформу, позволяющий создавать миры любой сложности в реальном времени.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Node-based Scripting", desc: "Визуальное программирование для новичков и мощный API для профессионалов.", icon: <Code className="w-5 h-5" /> },
                  { title: "Real-time Collaboration", desc: "Стройте миры вместе с друзьями. Все изменения синхронизируются мгновенно.", icon: <Globe className="w-5 h-5" /> },
                  { title: "Asset Pipeline", desc: "Автоматическая оптимизация мешей и текстур под любое устройство.", icon: <Layout className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[32px] bg-black/40 border border-white/10 p-4 relative overflow-hidden group shadow-2xl">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-4 text-[10px] text-gray-600 font-mono uppercase tracking-widest">vixxel_studio_v0.8.alpha</div>
                </div>
                <div className="grid grid-cols-4 gap-4 h-full">
                  <div className="col-span-1 border-r border-white/5 space-y-2">
                    <div className="h-2 w-12 bg-white/5 rounded"></div>
                    <div className="h-2 w-16 bg-white/5 rounded"></div>
                    <div className="h-2 w-10 bg-blue-500/20 rounded"></div>
                  </div>
                  <div className="col-span-3 relative">
                    <GridPattern className="opacity-20" />
                    <VixxelLogo className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/10" />
                    <pre className="text-[10px] text-blue-400/60 font-mono mt-8">
{`class World {
  constructor() {
    this.engine = new Core.Engine();
  }
  
  onReady() {
    // Spawn initial entities
    this.player = Scene.spawn('Player');
    Log.info('World initialized');
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Architecture Details */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Compute Shaders", 
              value: "Physics", 
              desc: "Вся физика твердых тел и частиц перенесена на Compute Shaders для параллельных вычислений на GPU." 
            },
            { 
              title: "Entity Component", 
              value: "ECS", 
              desc: "Архитектура ECS позволяет обрабатывать десятки тысяч активных сущностей без потери производительности." 
            },
            { 
              title: "Network Tick", 
              value: "128Hz", 
              desc: "Сверхвысокая частота обновления сервера для киберспортивной точности взаимодействия." 
            },
            { 
              title: "Memory Sync", 
              value: "Zero-Copy", 
              desc: "Технология передачи данных между CPU и GPU без лишнего копирования в оперативной памяти." 
            }
          ].map((stat, i) => (
            <div key={i} className="vixxel-glass p-8 rounded-[32px] border border-white/5 text-center">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">{stat.title}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Technical Roadmap */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">ТЕХНИЧЕСКАЯ ДОРОЖНАЯ КАРТА</h2>
          <p className="text-gray-500">Прозрачный процесс разработки нашего собственного движка</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { q: "Q1 2026", title: "Vulkan Base", tasks: ["Memory Management", "Swapchain Setup", "Shader Compiler"], status: "done" },
            { q: "Q2 2026", title: "Physics & ECS", tasks: ["Collision System", "Entity Component Sys", "Audio Engine"], status: "active" },
            { q: "Q3 2026", title: "Visual Studio", tasks: ["UI Framework", "World Editor Alpha", "Asset Pipeline"], status: "pending" },
            { q: "Q4 2026", title: "Network & Beta", tasks: ["Server-side Physics", "Social Features", "Public Beta"], status: "pending" }
          ].map((phase, i) => (
            <div key={i} className={`p-8 rounded-[32px] border ${phase.status === 'done' ? 'border-green-500/20 bg-green-500/5' : phase.status === 'active' ? 'border-blue-500/20 bg-blue-500/5' : 'border-white/5 bg-white/5'} transition-all`}>
              <span className={`text-xs font-black uppercase tracking-widest mb-4 block ${phase.status === 'done' ? 'text-green-500' : phase.status === 'active' ? 'text-blue-500' : 'text-gray-600'}`}>
                {phase.q}
              </span>
              <h4 className="text-xl font-bold mb-6">{phase.title}</h4>
              <ul className="space-y-3">
                {phase.tasks.map((task, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 rounded-full ${phase.status === 'done' ? 'bg-green-500' : phase.status === 'active' ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
            <div className="px-6 py-2 rounded-full bg-[#050505] text-xs font-black uppercase tracking-widest">
              Наше Видение
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-8 uppercase tracking-tighter italic">"Свобода творчества, <br />ограниченная только физикой"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
            <p className="text-gray-400 leading-relaxed">
              Мы верим, что будущее метавселенных — это не закрытые корпоративные экосистемы, а открытые платформы с мощным технологическим ядром. 
              Vixxel предоставляет инструменты, которые раньше были доступны только AAA-студиям.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Наш движок полностью автономен. Мы не зависим от сторонних решений, что позволяет нам оптимизировать 
              каждый байт данных и каждый цикл процессора для достижения максимального погружения.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 py-12 border-y border-white/5">
            {[
              { label: "Latency Vision", val: "0ms" },
              { label: "Custom Core", val: "100%" },
              { label: "Rendering API", val: "Vulkan" },
              { label: "Asset Format", val: "VX-Mesh" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-blue-500 mb-2">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="vixxel-glass inline-flex items-center gap-4 px-6 py-3 rounded-2xl border border-white/5 mb-12">
            <VixxelLogo className="w-8 h-8 text-blue-500 opacity-50" />
            <div className="h-4 w-px bg-white/10"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Infrastructure for the next web</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 uppercase tracking-tighter">ПРИСОЕДИНЯЙТЕСЬ <br />К РАЗРАБОТКЕ</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Мы строим фундамент для высокопроизводительных виртуальных миров. 
            Станьте частью сообщества инженеров и создателей, определяющих будущее графики и сетевых технологий.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-primary">Запросить доступ к SDK</button>
            <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Github className="w-4 h-4" /> Документация Ядра
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
