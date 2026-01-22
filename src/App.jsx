import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import Docs from './pages/Docs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tech" element={<ComingSoon title="Технологии" />} />
          <Route path="/ecosystem" element={<ComingSoon title="Экосистема" />} />
          <Route path="/studio" element={<ComingSoon title="Vixxel Studio" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
