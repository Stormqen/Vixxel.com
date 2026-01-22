import { motion } from 'framer-motion'
import { Terminal, Cpu } from 'lucide-react'
import { FloatingBlob } from '../components/VisualElements'

const ComingSoon = ({ title }) => (
  <div className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
    <FloatingBlob className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] text-blue-500/5 blur-3xl" />
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
          <Terminal className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Section under development</span>
        </div>
        
        <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter text-white">{title}</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Этот модуль интегрируется в ядро Vixxel. Мы работаем над обеспечением полной совместимости 
          с Vulkan API и нашей системой ECS. Доступ будет открыт в рамках закрытого бета-тестирования.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Status", val: "Alpha" },
            { label: "Build", val: "0.8.4-dev" },
            { label: "Target", val: "Q4 2026" }
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">{s.label}</div>
              <div className="text-xl font-black text-white">{s.val}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
)

export default ComingSoon
