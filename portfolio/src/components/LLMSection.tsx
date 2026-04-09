import { motion } from 'framer-motion';
import { Code2, ExternalLink, Brain, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mlProject, frontendProject } from '../data/projects';
import type { Project } from '../data/projects';

const childVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TagBadge({ tag, accent }: { tag: string; accent?: boolean }) {
  return (
    <span
      className={`px-2 py-0.5 text-xs border font-mono ${
        accent
          ? 'border-cp-red/40 text-cp-red/80 bg-cp-red/5'
          : 'border-cp-cyan/30 text-cp-cyan/80 bg-cp-cyan/5'
      }`}
    >
      {tag}
    </span>
  );
}

function DevProjectCard({
  project,
  label,
  accent,
  icon: Icon,
  featuresTitle,
  sourceLabel,
  demoLabel,
}: {
  project: Project;
  label: string;
  accent: 'cyan' | 'red';
  icon: typeof Brain;
  featuresTitle: string;
  sourceLabel: string;
  demoLabel: string;
}) {
  const borderColor   = accent === 'red' ? 'border-cp-red/30'    : 'border-cp-cyan/30';
  const accentText    = accent === 'red' ? 'text-cp-red'         : 'text-cp-cyan';
  const accentNeon    = accent === 'red' ? 'neon-red'            : 'neon-cyan';
  const accentBar     = accent === 'red' ? 'bg-cp-red'           : 'bg-cp-cyan';
  const accentBg      = accent === 'red' ? 'bg-cp-red/5'         : 'bg-cp-cyan/5';
  const tagAccent     = accent === 'red';

  return (
    <motion.div
      variants={childVariants}
      className={`bg-cp-surface border ${borderColor} clip-corner card-glow relative overflow-hidden flex flex-col`}
    >
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 ${borderColor} pointer-events-none`} />

      {/* Screenshot slot */}
      <div className="relative h-40 bg-cp-panel flex items-center justify-center overflow-hidden">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <Icon size={24} className={`${accentText} mx-auto mb-2 opacity-40`} />
            <p className="text-cp-muted text-xs font-mono text-center px-4">
              [ ADD SCREENSHOT ]<br />
              <span className="text-cp-border">set imageUrl in projects.ts</span>
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cp-surface/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <span className={`section-label ${accentText} mb-2 block`}>{label}</span>
          <h3
            className={`text-xl sm:text-2xl font-bold ${accentText} ${accentNeon} mb-2`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          {project.longDescription && (
            <p className="text-cp-muted text-xs leading-relaxed mt-2">{project.longDescription}</p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <TagBadge key={tag} tag={tag} accent={tagAccent} />
          ))}
        </div>

        {/* Features panel */}
        {project.featuredFeatures && project.featuredFeatures.length > 0 && (
          <div className={`${accentBg} border ${borderColor} p-4`}>
            <p className="section-label mb-3">{featuresTitle}</p>
            <div className="space-y-2.5">
              {project.featuredFeatures.map(({ topic, detail }) => (
                <div key={topic} className={`border-l-2 ${accentBar} pl-3`} style={{ borderColor: undefined }}>
                  <p className={`${accentText} text-xs font-mono`}>{topic}</p>
                  <p className="text-cp-muted text-xs">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className={`flex items-center gap-4 pt-3 border-t border-cp-border mt-auto`}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cp-muted hover:text-cp-cyan transition-colors"
            >
              <Code2 size={13} /> {sourceLabel}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-cp-border font-mono">
              <Code2 size={13} /> [ ADD GITHUB URL ]
            </span>
          )}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs text-cp-muted hover:${accentText} transition-colors ml-auto`}
            >
              <ExternalLink size={13} /> {demoLabel}
            </a>
          ) : project.category === 'frontend' ? (
            <span className="flex items-center gap-1.5 text-xs text-cp-border font-mono ml-auto">
              <Globe size={13} /> [ ADD LIVE URL ]
            </span>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

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
        <p className="text-cp-muted text-sm mt-2 max-w-lg">{t.llm.subtitle}</p>
        <div className="mt-3 w-16 h-0.5 bg-cp-red" />
      </motion.div>

      {/* Two featured project cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {mlProject && (
          <DevProjectCard
            project={mlProject}
            label={t.llm.mlLabel}
            accent="red"
            icon={Brain}
            featuresTitle={t.llm.featuresTitle}
            sourceLabel={t.llm.source}
            demoLabel={t.llm.demo}
          />
        )}
        {frontendProject && (
          <DevProjectCard
            project={frontendProject}
            label={t.llm.frontendLabel}
            accent="cyan"
            icon={Globe}
            featuresTitle={t.llm.featuresTitle}
            sourceLabel={t.llm.source}
            demoLabel={t.llm.demo}
          />
        )}
      </motion.div>
    </section>
  );
}

