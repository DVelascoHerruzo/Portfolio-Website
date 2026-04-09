import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Parallax transforms
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const contentOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const gridY     = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  const scrollToShaders = () => {
    document.getElementById('shaders')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines dot-grid"
    >
      {/* Night City ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cp-black via-cp-black to-[#04080c] pointer-events-none" />

      {/* Neon perspective grid — parallaxes faster */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-x-0 bottom-0 h-72 pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              'linear-gradient(to top, #00f0ff0a, transparent), repeating-linear-gradient(90deg, #00f0ff07 0px, #00f0ff07 1px, transparent 1px, transparent 50px)',
            maskImage: 'linear-gradient(to top, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
          }}
        />
      </motion.div>

      {/* Content — fades + drifts up on scroll */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Pre-title tag */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          {t.hero.pretitle}
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glitch text-5xl sm:text-6xl md:text-7xl font-black tracking-widest text-cp-yellow neon-yellow mb-4 leading-none uppercase"
          data-text="David Velasco"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          David Velasco
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-cp-cyan neon-cyan font-semibold tracking-widest mb-6"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.hero.subtitle}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-cp-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10"
        >
          {t.hero.tagline1}
          <br />
          {t.hero.tagline2}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToShaders}
            className="px-8 py-3 bg-cp-yellow text-cp-black font-bold tracking-widest text-sm clip-corner hover:brightness-110 transition-all duration-200 active:scale-95"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {t.hero.viewShaders}
          </button>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-cp-cyan text-cp-cyan font-bold tracking-widest text-sm clip-corner hover:bg-cp-cyan hover:text-cp-black transition-all duration-200"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {t.hero.downloadCv}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cp-muted flex flex-col items-center gap-1 z-10"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ChevronDown size={20} />
        </motion.div>
        <span className="text-xs tracking-widest section-label">SCROLL</span>
      </motion.div>
    </section>
  );
}
