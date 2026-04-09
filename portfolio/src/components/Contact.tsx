import { motion } from 'framer-motion';
import { Mail, Code2, Link, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LINKS = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'davidvelascoherruzo@example.com', // TODO: replace
    href: 'mailto:davidvelascoherruzo@example.com',
    accent: 'cp-cyan' as const,
  },
  {
    icon: Code2,
    label: 'GITHUB',
    value: 'github.com/L96Expanded', // TODO: replace
    href: 'https://github.com/L96Expanded',
    accent: 'cp-cyan' as const,
  },
  {
    icon: Link,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/david-velasco-herruzo', // TODO: replace
    href: 'https://www.linkedin.com/in/david-velasco-herruzo-273334264/',
    accent: 'cp-cyan' as const,
  },
  {
    icon: Globe,
    label: 'D&D PLATFORM',
    value: 'karsusinitiative.com',
    href: 'https://karsusinitiative.com/',
    accent: 'cp-yellow' as const,
  },
];

const accentMap = {
  'cp-yellow': { border: 'border-cp-yellow/40', text: 'text-cp-yellow', bg: 'hover:bg-cp-yellow/10' },
  'cp-cyan':   { border: 'border-cp-cyan/40',   text: 'text-cp-cyan',   bg: 'hover:bg-cp-cyan/10'   },
  'cp-muted':  { border: 'border-cp-border',    text: 'text-cp-muted',  bg: 'hover:bg-cp-border/30' },
};

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <p className="section-label mb-2">05 /</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.contact.heading}
        </h2>
        <p className="text-cp-muted text-sm mt-3 max-w-md mx-auto">
          {t.contact.subtitle1}
          <br />{t.contact.subtitle2}
        </p>
        <div className="mt-4 w-16 h-0.5 bg-cp-yellow mx-auto" />
      </motion.div>

      {/* Link cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {LINKS.map(({ icon: Icon, label, value, href, accent }) => {
          const c = accentMap[accent];
          return (
            <motion.a
              key={label}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`bg-cp-surface border ${c.border} ${c.bg} clip-corner p-5 flex flex-col gap-3 transition-all duration-200 card-glow group`}
            >
              <div className={`${c.text} p-2 border ${c.border} w-fit`}>
                <Icon size={16} />
              </div>
              <div>
                <p className={`section-label ${c.text} mb-1`}>{label}</p>
                <p className="text-gray-300 text-xs font-mono break-all group-hover:text-white transition-colors">
                  {value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 pt-8 border-t border-cp-border text-center"
      >
        <p
          className="text-cp-yellow neon-yellow text-sm tracking-widest mb-2"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          DVH.CMP
        </p>
        <p className="text-cp-muted text-xs font-mono">
          {t.contact.footerBuilt} {new Date().getFullYear()}
        </p>
        <p className="text-cp-border text-xs font-mono mt-1">
          {t.contact.footerTargeting}
        </p>
      </motion.footer>
    </section>
  );
}
