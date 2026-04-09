export type ProjectCategory = 'shader' | 'reshade' | 'llm' | 'ml' | 'frontend';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl?: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  featuredFeatures?: { topic: string; detail: string }[];
}

export const projects: Project[] = [
  // ── Shader Playground ──────────────────────────────────────────────
  {
    id: 'shader-playground',
    title: 'Shader Playground',
    description:
      'A collection of real-time shader experiments exploring terrain generation, ray-marched SDFs, volumetric clouds, and physics simulations — all running in the browser.',
    longDescription:
      'Built iteratively on Shadertoy, this playground covers procedural terrain via multi-octave FBM noise, sphere-traced signed-distance fields for rigid-body approximations, volumetric cloud rendering using ray-marching through density fields, and a basic path tracer demonstrating global illumination concepts.',
    tags: ['GLSL', 'Ray Marching', 'Terrain Gen', 'SDF', 'Volumetric', 'Path Tracing', ],
    videoUrl: '/images/Recording%202026-04-09%20130920.mp4',
    category: 'shader',
    featured: true,
  },

  // ── ReShade Projects ───────────────────────────────────────────────
  {
    id: 'reshade-cyberpunk',
    title: 'ReShade — Cyberpunk 2077 Cinematic',
    description:
      'Custom ReShade preset for Cyberpunk 2077 focused on preserving Night City\'s neon identity while correcting bloom, adding filmic tonemapping, and tightening chromatic aberration.',
    tags: ['ReShade', 'HLSL', 'Tonemapping', 'Bloom', 'Post-Processing', 'Cyberpunk 2077'],
    imageUrl: '/images/ASCII.png', // TODO: add screenshot
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/ASCII.fx', // TODO: replace with repo URL
    category: 'reshade',
  },
  {
    id: 'reshade-witcher',
    title: 'ReShade — The Witcher 3 Painterly',
    description:
      'A painterly ReShade preset for The Witcher 3 that darkens shadows, enhances ambient occlusion, and adds subtle color grading to push the game closer to high-fantasy oil-painting aesthetics.',
    tags: ['ReShade', 'HLSL', 'Color Grading', 'AO', 'Post-Processing', 'The Witcher 3'],
    imageUrl: '/images/PaletteSwap.png',
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/PaletteSwap.fx', // TODO: replace with repo URL
    category: 'reshade',
  },
  {
    id: 'reshade-depth',
    title: 'ReShade — Depth-of-Field Suite',
    description:
      'Custom ReShade depth-of-field implementation with adjustable bokeh shape, aperture, and focus distance — built to study how CoC calculations map to real camera optics.',
    tags: ['ReShade', 'HLSL', 'Depth of Field', 'Bokeh', 'CoC', 'Post-Processing'],
    imageUrl: '/images/PixelSorting.png',
    githubUrl: 'https://github.com/', // TODO: replace with repo URL
    category: 'reshade',
  },

  // ── ML / AI Projects ──────────────────────────────────────────────
  {
    id: 'chatbot-nlp',
    title: 'AI Chatbot — NLP & ML Pipeline',
    description:
      'Conversational chatbot built as coursework at IE University — custom NLP pipeline, intent classification neural network, and a seq2seq dialogue model. GPU-accelerated training via CUDA.',
    longDescription:
      'Built from scratch in Python: tokenization, stemming, and TF-IDF vectorisation feed a small classification network for intent detection. Extended with a seq2seq response model trained on curated datasets. CUDA kernels used to accelerate training iterations significantly over CPU-only runs.',
    tags: ['Python', 'NLP', 'CUDA', 'Neural Networks', 'PyTorch', 'scikit-learn', 'seq2seq'],
    imageUrl: '/images/Git_Query.png',
    githubUrl: 'https://github.com/L96Expanded', // TODO: replace with specific repo URL
    category: 'ml',
    featuredFeatures: [
      { topic: 'NLP Pipeline',     detail: 'Tokenization, stemming, TF-IDF vectorisation, intent classification' },
      { topic: 'Neural Network',   detail: 'Custom seq2seq dialogue model trained from scratch' },
      { topic: 'CUDA Acceleration',detail: 'GPU-accelerated training — significant speedup over CPU baseline' },
      { topic: 'Data Engineering', detail: 'Custom dataset curation, preprocessing & evaluation loop' },
    ],
  },

  // ── Frontend Projects ──────────────────────────────────────────────
  {
    id: 'dnd-platform',
    title: 'Theater of the Mind — D&D Platform',
    description:
      'Full-stack web platform for online Theater of the Mind D&D sessions — real-time player dashboards, DM tooling, session management, and custom campaign data. Built and shipped end-to-end.',
    longDescription:
      'React + TypeScript frontend with a REST API backend. Real-time session tools powered by WebSockets, player character dashboards, DM encounter management, and a homebrew content creator. Custom component library, responsive layout, deployed as a live product.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'WebSockets', 'Vite', 'Full-Stack'],
    imageUrl: '/images/D&D_WEBAPP.png',
    githubUrl: 'https://github.com/L96Expanded', // TODO: replace with specific repo URL
    demoUrl: '',  // TODO: add live site URL
    category: 'frontend',
    featuredFeatures: [
      { topic: 'Full-Stack Build', detail: 'React + TypeScript frontend, REST API backend, deployed live' },
      { topic: 'Real-Time Tools',  detail: 'WebSocket-powered sessions, live player dashboards' },
      { topic: 'DM Tooling',       detail: 'Encounter management, homebrew creator, faction tracker' },
      { topic: 'Design System',    detail: 'Custom component library, responsive, dark theme' },
    ],
  },
];

export const reshadeProjects  = projects.filter(p => p.category === 'reshade');
export const shaderProjects   = projects.filter(p => p.category === 'shader');
export const llmProjects      = projects.filter(p => p.category === 'llm');
export const mlProject        = projects.find(p => p.category === 'ml');
export const frontendProject  = projects.find(p => p.category === 'frontend');
export const featuredProject  = projects.find(p => p.featured);
