import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { featuredProject, reshadeProjects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

const childVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="px-2 py-0.5 text-xs border border-cp-cyan/30 text-cp-cyan/80 bg-cp-cyan/5 font-mono">
      {tag}
    </span>
  );
}

function ReShadeCard({ project, description }: { project: typeof reshadeProjects[number]; description?: string }) {
  const { t } = useLanguage();
  return (
    <motion.div
      variants={childVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-cp-surface border border-cp-border clip-corner card-glow flex flex-col overflow-hidden"
    >
      {/* Image slot */}
      <div className="relative h-36 bg-cp-panel flex items-center justify-center overflow-hidden">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <p className="text-cp-muted text-xs font-mono text-center px-4">
            [ ADD SCREENSHOT ]<br />
            <span className="text-cp-border">project.imageUrl in projects.ts</span>
          </p>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cp-surface/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h4
          className="text-cp-yellow font-semibold text-sm tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {project.title}
        </h4>
        <p className="text-cp-muted text-xs leading-relaxed flex-1">{description ?? project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-cp-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cp-muted hover:text-cp-cyan transition-colors"
            >
              <Code2 size={13} /> {t.shaderWork.source}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cp-muted hover:text-cp-yellow transition-colors ml-auto"
            >
              <ExternalLink size={13} /> {t.shaderWork.demo}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ShaderWork() {
  const { t } = useLanguage();
  return (
    <section id="shaders" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="section-label mb-2">02 /</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.shaderWork.heading}
        </h2>
        <div className="mt-3 w-16 h-0.5 bg-cp-yellow" />
      </motion.div>

      {/* ── Featured: Shader Playground ── */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-cp-surface border border-cp-yellow/30 clip-corner p-6 sm:p-8 card-glow relative overflow-hidden"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cp-yellow/40 pointer-events-none" />

          {/* Video preview */}
          {featuredProject.videoUrl && (
            <div className="mb-8 rounded overflow-hidden border border-cp-yellow/20">
              <video
                src={featuredProject.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-72 object-cover"
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: info */}
            <div className="flex-1">
              <span className="section-label text-cp-yellow mb-3 block">{t.shaderWork.featured}</span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-cp-yellow neon-yellow mb-3"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {t.shaderWork.featuredTitle}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.shaderWork.featuredDescription}</p>
              {t.shaderWork.featuredLongDescription && (
                <p className="text-cp-muted text-xs leading-relaxed mb-5">{t.shaderWork.featuredLongDescription}</p>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {featuredProject.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-xs border border-cp-yellow/40 text-cp-yellow/80 bg-cp-yellow/5 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
              {featuredProject.demoUrl && (
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-cp-yellow text-cp-black font-bold text-sm tracking-widest clip-corner hover:brightness-110 transition-all"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  <ExternalLink size={14} /> {t.shaderWork.demo}
                </a>
              )}
              {featuredProject.githubUrl ? (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-cp-yellow/40 text-cp-yellow/80 text-sm tracking-widest clip-corner hover:border-cp-yellow hover:text-cp-yellow transition-all font-mono"
                >
                  <Code2 size={14} /> {t.shaderWork.source}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-cp-border font-mono mt-1">
                  <Code2 size={13} /> [ ADD GITHUB URL — set githubUrl in projects.ts ]
                </span>
              )}
              </div>
            </div>

            {/* Right: feature list */}
            <div className="lg:w-72 bg-cp-panel border border-cp-border p-5">
              <p className="section-label mb-4">{t.shaderWork.demosInclude}</p>
              {t.shaderWork.demos.map(({ topic, detail }) => (
                <div key={topic} className="mb-3 border-l-2 border-cp-cyan/40 pl-3">
                  <p className="text-cp-cyan text-xs font-mono">{topic}</p>
                  <p className="text-cp-muted text-xs">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ── ReShade Projects Grid ── */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-white tracking-wider mb-6"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.shaderWork.reshadeSection}
          <span className="ml-3 text-cp-muted text-sm font-mono">{t.shaderWork.reshadeSubtitle}</span>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reshadeProjects.map((p, i) => (
            <ReShadeCard key={p.id} project={p} description={t.shaderWork.reshadeCards[i]?.description} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
