import { motion } from 'framer-motion';
import { Brain, Zap, Database, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ICONS = [Brain, Database, Code2, Zap];
const ACCENTS = [false, false, false, true];

const childVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function LLMSection() {
  const { t } = useLanguage();
  return (
    <section id="llm" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="section-label mb-2">03 /</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.llm.heading}
        </h2>
        <p className="text-cp-muted text-sm mt-2 max-w-lg">
          {t.llm.subtitle}
        </p>
        <div className="mt-3 w-16 h-0.5 bg-cp-red" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {t.llm.items.map(({ title, body }, i) => {
          const Icon = ICONS[i];
          const accent = ACCENTS[i];
          return (
            <motion.div
              key={title}
              variants={childVariants}
              className={`bg-cp-surface p-6 clip-corner card-glow border ${
                accent
                  ? 'border-cp-yellow/40 bg-cp-yellow/5'
                  : 'border-cp-border'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-0.5 p-2 border ${accent ? 'border-cp-yellow/40 text-cp-yellow' : 'border-cp-cyan/30 text-cp-cyan'}`}>
                  <Icon size={16} />
                </div>
                <div>
                  <h4
                    className={`font-semibold text-sm tracking-wider mb-2 ${accent ? 'text-cp-yellow' : 'text-white'}`}
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="text-cp-muted text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
