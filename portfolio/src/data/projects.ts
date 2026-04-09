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
    title: 'ASCII Art Effect',
    description:
      'Converts the screen to ASCII art using Difference-of-Gaussians edge detection and a character-map texture lookup. Features depth-based edge weighting, adjustable zoom, offset, and blur kernel for expressive control.',
    tags: ['ReShade', 'HLSL', 'ASCII', 'Edge Detection', 'DoG', 'Post-Processing'],
    imageUrl: 'images/ASCII.png',
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/ASCII.fx',
    category: 'reshade',
  },
  {
    id: 'reshade-witcher',
    title: 'Palette Swap',
    description:
      'Replaces all screen colors with the closest match from a user-defined palette of up to 8 custom colors — ideal for retro aesthetics, forced color grading, and stylised visual effects.',
    tags: ['ReShade', 'HLSL', 'Color Quantization', 'Palette', 'Retro', 'Post-Processing'],
    imageUrl: 'images/PaletteSwap.png',
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/PaletteSwap.fx',
    category: 'reshade',
  },
  {
    id: 'reshade-depth',
    title: 'Pixel Sorting',
    description:
      'Sorts pixels within luminance-masked spans by hue, saturation, or luminance — producing the classic glitch-art pixel-sorting effect. Fully controllable with threshold masking, span length limits, and animated offsets.',
    tags: ['ReShade', 'HLSL', 'Pixel Sorting', 'Glitch Art', 'Compute Shaders', 'Post-Processing'],
    imageUrl: 'images/PixelSorting.png',
    githubUrl: 'https://github.com/L96Expanded/ReShade-Shader-Projects/blob/main/Barope%20Shaders/PixelSort.fx',
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
