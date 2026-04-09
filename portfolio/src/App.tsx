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

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-none border-t border-cp-border" />
        </div>

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
