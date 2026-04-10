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
      'A real-time forward renderer built in C++ and HLSL on DirectX 11 — GPU-tessellated procedural terrain, screen-space heightmap ray tracing for water reflections/refractions, Beer-Lambert water absorption, 3-cascade PCF shadow maps, and a full post-process pipeline including SSGI, god rays, and ACES tonemap.',
    longDescription:
      'Written from scratch: Win32/DX11 device setup, typed constant-buffer wrappers, hot HLSL shader reload (F5), and an ImGui docking UI with live sliders for every parameter. Terrain generates async on CPU with domain-warped FBM + hydraulic erosion, then tessellates on the GPU via hull/domain shaders with screen-space LOD. Water combines Gerstner wave displacement, GGX specular, Fresnel, Beer-Lambert depth absorption, and a dedicated reflection/refraction pre-render pass.',
    tags: ['C++', 'HLSL', 'DirectX 11', 'GPU Tessellation', 'PBR', 'Screen-Space RT', 'SSGI', 'CMake'],
    videoUrl: 'images/Recording%202026-04-09%20130920.mp4',
    githubUrl: 'https://github.com/DVelascoHerruzo/Shader_Playground',
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
