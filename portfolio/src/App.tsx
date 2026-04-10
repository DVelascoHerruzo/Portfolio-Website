import { motion } from 'framer-motion'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Skills        from './components/Skills'
import ShaderWork    from './components/ShaderWork'
import LLMSection    from './components/LLMSection'
import LoreSection   from './components/LoreSection'
import Contact       from './components/Contact'
import MatrixRain    from './components/MatrixRain'
import ScrollProgress from './components/ScrollProgress'
import SceneHUD      from './components/SceneHUD'
import AmbientGlow   from './components/AmbientGlow'
import { useScrollScene } from './hooks/useScrollScene'
import { LanguageProvider } from './contexts/LanguageContext'

function PortfolioContent() {
  const activeScene = useScrollScene()

  return (
    <main
      className="relative text-white"
      style={{ fontFamily: "'Share Tech Mono', monospace", backgroundColor: '#050a0e' }}
    >
      {/* ── Fixed layer: canvas rain, ambient glow ── */}
      <MatrixRain />
      <AmbientGlow scene={activeScene} />

      {/* ── Fixed UI chrome ── */}
      <ScrollProgress />
      <SceneHUD active={activeScene} />
      <Navbar />

      {/* ── Scrollable content — sits above fixed layers ── */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Hero />

        {/* Hero → Skills: animated scan-reveal divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative max-w-6xl mx-auto px-6 py-4 overflow-hidden"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left', height: '1px' }}
            className="bg-gradient-to-r from-cp-yellow/80 via-cp-yellow/30 to-transparent"
          />
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.75 }}
            className="section-label text-cp-yellow/40 text-[10px] mt-2"
          >
            {'>'} SCANNING CANDIDATE PROFILE... OK
          </motion.p>
        </motion.div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-none border-t border-cp-border" />
        </div>

        <ShaderWork />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-none border-t border-cp-border" />
        </div>

        <LLMSection />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-none border-t border-cp-border" />
        </div>

        <LoreSection />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-none border-t border-cp-border" />
        </div>

        <Contact />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}
