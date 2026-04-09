import { motion } from 'framer-motion';
import { Swords, Radio } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LoreSection() {
  const { t } = useLanguage();
  return (
    <section id="lore" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="section-label mb-2">04 /</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.lore.heading}
        </h2>
        <p className="text-cp-muted text-sm mt-2 max-w-xl">
          {t.lore.subtitle}
        </p>
        <div className="mt-3 w-16 h-0.5 bg-cp-cyan" />
      </motion.div>

      {/* Hero quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 border-l-4 border-cp-yellow pl-6 py-2"
      >
        <p
          className="text-xl sm:text-2xl text-cp-yellow neon-yellow font-semibold leading-snug"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          "{t.lore.quote1}
          <br />{t.lore.quote2}"
        </p>
      </motion.blockquote>

      {/* Two cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* D&D Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-cp-surface border border-cp-border clip-corner card-glow p-6 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cp-cyan/20 pointer-events-none" />

          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 border border-cp-cyan/40 text-cp-cyan">
              <Swords size={18} />
            </div>
            <div>
              <p className="section-label">{t.lore.tabletopLabel}</p>
              <h3
                className="text-xl font-bold text-white tracking-wider"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {t.lore.tabletopHeading}
              </h3>
            </div>
          </div>

          <ul className="space-y-2.5">
            {t.lore.tabletopHighlights.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-cp-muted leading-relaxed">
                <span className="text-cp-cyan mt-0.5 font-mono shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-cp-border">
            <p className="text-xs text-cp-muted italic">
              {t.lore.tabletopFooterPre}{' '}
              <span className="text-cp-cyan">{t.lore.tabletopFooterHighlight}</span>
              {' '}{t.lore.tabletopFooterPost}
            </p>
          </div>
        </motion.div>

        {/* Cyberpunk Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-cp-surface border border-cp-yellow/30 clip-corner card-glow p-6 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cp-yellow/20 pointer-events-none" />

          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 border border-cp-yellow/40 text-cp-yellow">
              <Radio size={18} />
            </div>
            <div>
              <p className="section-label text-cp-yellow" style={{ color: '#fcee09' }}>{t.lore.cyberpunkLabel}</p>
              <h3
                className="text-xl font-bold text-white tracking-wider"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {t.lore.cyberpunkHeading}
              </h3>
            </div>
          </div>

          <ul className="space-y-2.5">
            {t.lore.cyberpunkHighlights.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-cp-muted leading-relaxed">
                <span className="text-cp-yellow mt-0.5 font-mono shrink-0" style={{ color: '#fcee09' }}>▸</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-cp-yellow/20">
            <p className="text-xs text-cp-muted italic">
              {t.lore.cyberpunkFooterPre}{' '}
              <span className="text-cp-yellow neon-yellow">{t.lore.cyberpunkFooterHighlight}</span>
              {t.lore.cyberpunkFooterPost}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Edition badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-2 items-center"
      >
        <span className="section-label mr-2">{t.lore.editionsLabel}</span>
        {['Cyberpunk 2020', 'Cyberpunk V3.0', 'Cyberpunk RED', 'CP2077 (videogame)', 'Edgerunners (lore)'].map(ed => (
          <span key={ed} className="px-2.5 py-1 text-xs border border-cp-yellow/40 text-cp-yellow bg-cp-yellow/5 font-mono">
            {ed}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
