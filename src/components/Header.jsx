import { Link } from 'react-router-dom'
import { Search, Bell, Terminal, User, Cpu } from 'lucide-react'
import { VixxelLogo } from './VisualElements'

const Header = () => {
  return (
    <header className="vixxel-glass sticky top-0 z-50 w-full border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 group">
            <VixxelLogo className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-black tracking-tighter text-white">VIXXEL</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/tech" className="text-[10px] font-black text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em]">Технологии</Link>
            <Link to="/ecosystem" className="text-[10px] font-black text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em]">Экосистема</Link>
            <Link to="/studio" className="text-[10px] font-black text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em]">Studio</Link>
          </nav>
        </div>

        <div className="flex-grow max-w-md mx-8 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Поиск по документации и проектам..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500/50 transition-colors font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">v0.8.4 Alpha</span>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-[#050505]"></span>
          </button>
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
            <User className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
