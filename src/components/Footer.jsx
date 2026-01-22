import { VixxelLogo } from './VisualElements'
import { Github, Twitter, MessageSquare } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <VixxelLogo className="w-6 h-6 text-blue-500" />
              <span className="font-black tracking-tighter text-white">VIXXEL CORP</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-bold">
              Building the infrastructure for the next generation of virtual environments.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Технологии</h3>
            <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <li><a href="#/tech" className="hover:text-blue-500 transition-colors">Vulkan Engine</a></li>
              <li><a href="#/tech" className="hover:text-blue-500 transition-colors">ECS Architecture</a></li>
              <li><a href="#/docs" className="hover:text-blue-500 transition-colors">Core API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Разработка</h3>
            <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <li><a href="#/studio" className="hover:text-blue-500 transition-colors">Vixxel Studio</a></li>
              <li><a href="#/docs" className="hover:text-blue-500 transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Dev Portal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Сообщество</h3>
            <div className="flex gap-4">
              <Twitter className="w-4 h-4 text-gray-500 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <MessageSquare className="w-4 h-4 text-gray-500 hover:text-indigo-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
            © 2026 Vixxel Corporation. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
