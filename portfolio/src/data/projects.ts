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
    videoUrl: 'images/Recording%202026-04-09%20130920.mp4',
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
    imageUrl: 'images/ASCII.png',
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/ASCII.fx', // TODO: replace with repo URL
    category: 'reshade',
  },
  {
    id: 'reshade-witcher',
    title: 'ReShade — The Witcher 3 Painterly',
    description:
      'A painterly ReShade preset for The Witcher 3 that darkens shadows, enhances ambient occlusion, and adds subtle color grading to push the game closer to high-fantasy oil-painting aesthetics.',
    tags: ['ReShade', 'HLSL', 'Color Grading', 'AO', 'Post-Processing', 'The Witcher 3'],
    imageUrl: 'images/PaletteSwap.png',
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/PaletteSwap.fx', // TODO: replace with repo URL
    category: 'reshade',
  },
  {
    id: 'reshade-depth',
    title: 'ReShade — Depth-of-Field Suite',
    description:
      'Custom ReShade depth-of-field implementation with adjustable bokeh shape, aperture, and focus distance — built to study how CoC calculations map to real camera optics.',
    tags: ['ReShade', 'HLSL', 'Depth of Field', 'Bokeh', 'CoC', 'Post-Processing'],
    imageUrl: 'images/PixelSorting.png',
    githubUrl: 'https://github.com/', // TODO: replace with repo URL
    category: 'reshade',
  },

  // ── ML / AI Projects ──────────────────────────────────────────────
  {
    id: 'chatbot-nlp',
    title: 'GitQuery — GitHub Recommender System',
    description: 'Modular AI system recommending GitHub repositories via hybrid retrieval and Sentence-Transformer embeddings, with a full MLOps pipeline.',
    tags: ['Python', 'Sentence-Transformers', 'Qdrant', 'MCP', 'FastAPI', 'Docker', 'MLOps', 'NLP'],
    imageUrl: 'images/Git_Query.png',
    githubUrl: 'https://github.com/Seraphim-Systems/git-query',
    category: 'ml',
  },

  // ── Frontend Projects ──────────────────────────────────────────────
  {
    id: 'dnd-platform',
    title: 'Karsus Initiative — D&D Combat Tracker',
    description: 'Full-stack D&D initiative tracker on Azure Static Web Apps with Azure Functions API, Cosmos DB, and Bicep IaC.',
    tags: ['React 18', 'TypeScript', 'Azure SWA', 'Azure Functions', 'Cosmos DB', 'Bicep', 'JWT'],
    imageUrl: 'images/D&D_WEBAPP.png',
    githubUrl: 'https://github.com/DVelascoHerruzo/KarsusInitiative',
    demoUrl: 'https://karsusinitiative.com',
    category: 'frontend',
  },
];

export const reshadeProjects  = projects.filter(p => p.category === 'reshade');
export const shaderProjects   = projects.filter(p => p.category === 'shader');
export const llmProjects      = projects.filter(p => p.category === 'llm');
export const mlProject        = projects.find(p => p.category === 'ml');
export const frontendProject  = projects.find(p => p.category === 'frontend');
export const featuredProject  = projects.find(p => p.featured);
