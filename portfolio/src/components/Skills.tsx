import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import type { Translations } from '../i18n';

type SkillGroupKey = keyof Pick<Translations['skills'], 'rendering' | 'shading' | 'apis' | 'languages' | 'web' | 'ai'>;

const SKILL_GROUPS: { tKey: SkillGroupKey; color: 'cp-cyan' | 'cp-yellow' | 'cp-red'; skills: readonly string[] }[] = [
  {
    tKey: 'web' as const,
    color: 'cp-cyan' as const,
    skills: [
      'React',
      'HTML5',
      'CSS3 / Tailwind',
      'TypeScript',
      'Vite',
      'REST APIs',
    ],
  },
  {
    tKey: 'languages' as const,
    color: 'cp-yellow' as const,
    skills: [
      'C++',
      'Python',
      'TypeScript',
      'JavaScript',
      'RenderDoc',
      'Git',
      'Linux / WSL',
    ],
  },
  {
    tKey: 'ai' as const,
    color: 'cp-red' as const,
    skills: [
      'Machine Learning',
      'Neural Networks',
      'NLP',
      'PyTorch',
      'NumPy / pandas',
      'scikit-learn',
      'Data Analysis',
    ],
  },
  {
    tKey: 'rendering' as const,
    color: 'cp-cyan' as const,
    skills: [
      'PBR / GGX BRDF',
      'Shadow Mapping',
      'Ray Marching',
      'Post-Processing',
      'Screen-Space Effects',
      'Volumetric Fog',
      'Procedural Generation',
    ],
  },
  {
    tKey: 'shading' as const,
    color: 'cp-yellow' as const,
    skills: [
      'GLSL',
      'HLSL',
      'CUDA',
      'Shadertoy',
      'ReShade (HLSL)',
      'Compute Shaders',
    ],
  },
  {
    tKey: 'apis' as const,
    color: 'cp-cyan' as const,
    skills: [
      'OpenGL',
      'DirectX (DX11/DX12)',
      'Vulkan (familiarity)',
      'WebGL',
      'Unreal Engine 5',
    ],
  },
] as const;

const colorMap = {
  'cp-cyan':   { border: 'border-cp-cyan/40',   text: 'text-cp-cyan',   bg: 'bg-cp-cyan/5'   },
  'cp-yellow': { border: 'border-cp-yellow/40', text: 'text-cp-yellow', bg: 'bg-cp-yellow/5' },
  'cp-red':    { border: 'border-cp-red/40',    text: 'text-cp-red',    bg: 'bg-cp-red/5'    },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const childVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="section-label mb-2">01 /</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {t.skills.heading}
        </h2>
        <div className="mt-3 w-16 h-0.5 bg-cp-cyan" />
      </motion.div>

      {/* Skill groups */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_GROUPS.map(group => {
          const c = colorMap[group.color];
          const label = t.skills[group.tKey];
          return (
            <motion.div
              key={group.tKey}
              variants={childVariants}
              className={`bg-cp-surface border ${c.border} p-5 clip-corner card-glow`}
            >
              <p className={`section-label ${c.text} mb-4`}>{label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs border ${c.border} ${c.text} ${c.bg} font-mono tracking-wide`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
