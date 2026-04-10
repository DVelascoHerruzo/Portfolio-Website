export type Language = 'en' | 'es' | 'pl';

export interface Translations {
  nav: {
    skills: string;
    shaders: string;
    llm: string;
    lore: string;
    contact: string;
    resume: string;
  };
  hero: {
    pretitle: string;
    subtitle: string;
    tagline1: string;
    tagline2: string;
    viewShaders: string;
    downloadCv: string;
  };
  skills: {
    heading: string;
    rendering: string;
    shading: string;
    apis: string;
    languages: string;
    ai: string;
    web: string;
  };
  shaderWork: {
    heading: string;
    featured: string;
    featuredTitle: string;
    featuredDescription: string;
    featuredLongDescription: string;
    demosInclude: string;
    launchPlayground: string;
    reshadeSection: string;
    reshadeSubtitle: string;
    source: string;
    demo: string;
    demos: { topic: string; detail: string }[];
    reshadeCards: { title: string; description: string }[];
  };
  llm: {
    heading: string;
    subtitle: string;
    mlLabel: string;
    mlTitle: string;
    mlDescription: string;
    mlLongDescription: string;
    mlFeatures: { topic: string; detail: string }[];
    frontendLabel: string;
    frontendTitle: string;
    frontendDescription: string;
    frontendLongDescription: string;
    frontendFeatures: { topic: string; detail: string }[];
    featuresTitle: string;
    source: string;
    demo: string;
  };
  lore: {
    heading: string;
    subtitle: string;
    quote1: string;
    quote2: string;
    tabletopLabel: string;
    tabletopHeading: string;
    tabletopHighlights: string[];
    tabletopFooterPre: string;
    tabletopFooterHighlight: string;
    tabletopFooterPost: string;
    cyberpunkLabel: string;
    cyberpunkHeading: string;
    cyberpunkHighlights: string[];
    cyberpunkFooterPre: string;
    cyberpunkFooterHighlight: string;
    cyberpunkFooterPost: string;
    editionsLabel: string;
    notesCaption1: string;
    notesCaption2: string;
  };
  contact: {
    heading: string;
    subtitle1: string;
    subtitle2: string;
    footerBuilt: string;
    footerTargeting: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
const en: Translations = {
  nav: {
    skills:  '// SKILLS',
    shaders: '// SHADERS',
    llm:     '// BEYOND',
    lore:    '// LORE',
    contact: '// CONTACT',
    resume:  'RESUME↗',
  },
  hero: {
    pretitle:    'TARGETING: CD PROJEKT RED — SUMMER INTERNSHIP 2026',
    subtitle:    'CS & AI STUDENT — BACKEND & GRAPHICS',
    tagline1:    '3rd year Computer Science & AI at IE University.',
    tagline2:    'Backend systems, AI pipelines, and real-time rendering — building things end-to-end.',
    viewShaders: 'VIEW MY WORK',
    downloadCv:  'DOWNLOAD CV',
  },
  skills: {
    heading:   '// SKILL_MATRIX',
    rendering: 'RENDERING',
    shading:   'SHADING LANGUAGES',
    apis:      'APIs & ENGINES',
    languages: 'LANGUAGES & TOOLS',
    ai:        'AI / MACHINE LEARNING',
    web:       'WEB DEVELOPMENT',
  },
  shaderWork: {
    heading:          '// SHADER_WORK',
    featured:         'FEATURED PROJECT',
    featuredTitle:    'Shader Playground',
    featuredDescription: 'A real-time forward renderer built in C++ and HLSL on DirectX 11 — GPU-tessellated procedural terrain, screen-space heightmap ray tracing for water reflections/refractions, Beer-Lambert water absorption, 3-cascade PCF shadow maps, and a full post-process pipeline including SSGI, god rays, and ACES tonemap.',
    featuredLongDescription: 'Written from scratch: Win32/DX11 device setup, typed constant-buffer wrappers, hot HLSL shader reload (F5), and an ImGui docking UI with live sliders for every parameter. Terrain generates async on CPU with domain-warped FBM + hydraulic erosion, then tessellates on the GPU via hull/domain shaders with screen-space LOD. Water combines Gerstner wave displacement, GGX specular, Fresnel, Beer-Lambert depth absorption, and a dedicated reflection/refraction pre-render pass.',
    demosInclude:     'DEMOS INCLUDE',
    launchPlayground: 'LAUNCH PLAYGROUND',
    reshadeSection:   'RESHADE PROJECTS',
    reshadeSubtitle:  'post-processing presets & studies',
    source:           'SOURCE',
    demo:             'DEMO',
    reshadeCards: [
      { title: 'ASCII Art Effect',  description: 'Converts the screen to ASCII art using Difference-of-Gaussians edge detection and a character-map texture lookup. Features depth-based edge weighting, adjustable zoom, offset, and blur kernel for expressive control.' },
      { title: 'Palette Swap',     description: 'Replaces all screen colors with the closest match from a user-defined palette of up to 8 custom colors — ideal for retro aesthetics, forced color grading, and stylised visual effects.' },
      { title: 'Pixel Sorting',    description: 'Sorts pixels within luminance-masked spans by hue, saturation, or luminance — producing the classic glitch-art pixel-sorting effect. Fully controllable with threshold masking, span length limits, and animated offsets.' },
    ],
    demos: [
      { topic: 'Tessellated Terrain',      detail: 'GPU hull/domain shaders, domain-warped FBM heightmap + hydraulic erosion, PBR biome blending' },
      { topic: 'Water Rendering',          detail: 'Gerstner wave displacement, Beer-Lambert depth absorption, GGX specular, Fresnel, shore foam' },
      { topic: 'Screen-Space Ray Tracing', detail: 'Heightmap ray march for water reflections/refractions + chromatic aberration refraction' },
      { topic: 'Post-Process Pipeline',    detail: 'SSGI, god rays (radial blur), 4-level Kawase bloom, FXAA, ACES filmic tonemap' },
      { topic: 'Cascaded Shadow Maps',     detail: '3-cascade PCF CSM, 2048×2048 per cascade, slope-scaled depth bias' },
    ],
  },
  llm: {
    heading:              '// BEYOND_SHADERS',
    subtitle:             'ML & Web Development — real projects, shipped',
    mlLabel:              'FEATURED // ML',
    mlTitle:              'GitQuery — GitHub Recommender System',
    mlDescription:        'Fully designed and built AI recommender system — semantic search over GitHub repositories using a custom Qdrant vector database and Sentence-Transformer embeddings, with an agent we trained to reason and respond in a specific, defined way. Production-grade MLOps pipeline built with Seraphim Systems at IE University.',
    mlLongDescription:    'The entire Qdrant vector database and embedding pipeline was designed, built, and modelled from scratch by the team. A conversational agent was trained end-to-end to behave in a specific, controlled manner — exposed via a custom MCP (Model Context Protocol) server. Containerised with Docker Compose, resumable chunked checkpointing, and a CI/CD monitoring & retraining loop.',
    mlFeatures: [
      { topic: 'Custom Vector DB',    detail: 'Entire Qdrant vector database and retrieval pipeline designed, built, and modelled from scratch by the team' },
      { topic: 'Trained Agent',       detail: 'LLM agent custom-trained to reason and respond in a specific, defined manner' },
      { topic: 'MLOps Pipeline',      detail: 'Containerised training, resumable chunked checkpointing, evaluation loop & CI/CD' },
      { topic: 'MCP Server',          detail: 'Model Context Protocol server connecting the trained agent to the recommender system via FastAPI' },
    ],
    frontendLabel:        'FEATURED // FRONTEND',
    frontendTitle:        'Karsus Initiative — D&D Combat Tracker',
    frontendDescription:  'Full-stack D&D initiative tracker deployed live on Azure Static Web Apps — React 18 + TypeScript frontend backed by Azure Functions, Cosmos DB, and Blob Storage.',
    frontendLongDescription: 'Azure SWA + Functions v4 API (Node.js / TypeScript), JWT RS256 auth, Azure Cosmos DB for encounter and creature data, Azure Blob Storage for images. Infrastructure provisioned end-to-end via Bicep IaC and Azure Developer CLI (azd).',
    frontendFeatures: [
      { topic: 'Azure SWA + Functions',    detail: 'Deployed on Azure Static Web Apps with integrated Azure Functions v4 Node.js API' },
      { topic: 'Cosmos DB + Blob Storage', detail: 'NoSQL encounter & creature data in Cosmos DB; images served from Azure Blob Storage' },
      { topic: 'JWT Auth & Security',      detail: 'RS256 token auth, Content Security Policy, Google OAuth, security-hardened headers' },
      { topic: 'Bicep IaC',               detail: 'All Azure infrastructure provisioned via Bicep templates + Azure Developer CLI (azd)' },
    ],
    featuresTitle: 'KEY FEATURES',
    source:        'SOURCE',
    demo:          'LIVE SITE',
  },
  lore: {
    heading:  '// JACK_IN — WHY.CDPR',
    subtitle: "Beyond the technical — the worlds, systems, and stories that trained how I think about design.",
    quote1:   "I've spent years inside worlds other people built.",
    quote2:   "Now I want to help build them.",
    tabletopLabel:   'TABLETOP ARCHITECT',
    tabletopHeading: '7 Years at the Table',
    tabletopHighlights: [
      '7 years playing D&D — several as Dungeon Master',
      'Deep homebrew design: custom mechanics, world-building systems, faction logic',
      'Adapted CD Projekt RED videogame systems (economy, cyberware, reputation) into tabletop campaigns',
      'Strong understanding of game balance, player agency, and narrative-mechanical feedback loops',
      'Built a full-stack online platform for Theater of the Mind D&D — real-time session tools, player dashboards, and DM tooling — in React + TypeScript',
      'Ran a Witcher TTRPG oneshot — drawn to the lore, interested in the setting; adapted combat mechanics and monster encounters from the Witcher TTRPG sourcebook into a full one-session adventure for the group',
    ],
    tabletopFooterPre:       'Years of DMing translate directly to',
    tabletopFooterHighlight: 'systems design thinking',
    tabletopFooterPost:      '— and building the D&D platform proved it: shipping a real product end-to-end, not just theory.',
    cyberpunkLabel:   'DEEP LORE',
    cyberpunkHeading: 'Worlds Worth Knowing',
    cyberpunkHighlights: [
      'All Cyberpunk TTRPG editions: Cyberpunk 2020, V3, RED, and the original Corebook',
      'Deep lore: Corporations, Edgerunners, NET architecture, the Blackhand timeline',
      'The Cosmere (Brandon Sanderson) — read the full shared universe; took his free university creative writing course — Promises/Progress/Payoff, the MICE quotient, and why constraints make magic (and game) systems more compelling than raw power; playing the Cosmere TTRPG',
      "Studied how different creators translate worlds across media — from Pondsmith's tabletop to CDPR's adaptation",
      'Run campaigns mixing source material: custom CP2077 conversions and Cosmere encounters at the table',
    ],
    cyberpunkFooterPre:       'Understanding what makes worlds work — the promises they make, the constraints they impose —',
    cyberpunkFooterHighlight: 'is the closest thing to a systems design masterclass',
    cyberpunkFooterPost:      '. That perspective carries into every pipeline and mechanic I build.',
    editionsLabel: 'TTRPGs PLAYED:',
    notesCaption1: 'Notes on long running 3 year campaign',
    notesCaption2: 'Notes for a The Witcher Oneshot',
  },
  contact: {
    heading:         '// OPEN_CHANNEL',
    subtitle1:       'Interested in my work, or have a question about my application?',
    subtitle2:       'Reach out through any channel below.',
    footerBuilt:     'Built with React + Vite + TailwindCSS v4 ·',
    footerTargeting: 'Targeting CD Projekt RED — Summer Internship · Backend & Graphics',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SPANISH
// ─────────────────────────────────────────────────────────────────────────────
const es: Translations = {
  nav: {
    skills:  '// HABILIDADES',
    shaders: '// SHADERS',
    llm:     '// MÁS_ALLÁ',
    lore:    '// LORE',
    contact: '// CONTACTO',
    resume:  'CV↗',
  },
  hero: {
    pretitle:    'OBJETIVO: CD PROJEKT RED — PRÁCTICAS DE VERANO 2026',
    subtitle:    'ESTUDIANTE CS & IA — BACKEND & GRÁFICOS',
    tagline1:    '3er año de Informática e Inteligencia Artificial en IE University.',
    tagline2:    'Sistemas backend, pipelines de IA y renderizado en tiempo real — construyendo proyectos de principio a fin.',
    viewShaders: 'VER MI TRABAJO',
    downloadCv:  'DESCARGAR CV',
  },
  skills: {
    heading:   '// MATRIZ_DE_HABILIDADES',
    rendering: 'RENDERIZADO',
    shading:   'LENGUAJES DE SHADER',
    apis:      'APIs & MOTORES',
    languages: 'LENGUAJES & HERRAMIENTAS',
    ai:        'IA / MACHINE LEARNING',
    web:       'DESARROLLO WEB',
  },
  shaderWork: {
    heading:          '// TRABAJO_DE_SHADERS',
    featured:         'PROYECTO DESTACADO',
    featuredTitle:    'Shader Playground',
    featuredDescription: 'Un renderizador forward en tiempo real construido en C++ y HLSL sobre DirectX 11 — terreno procedural tesalado con GPU, ray tracing de heightmap en espacio de pantalla para reflexiones/refracciones de agua, absorción Beer-Lambert, mapas de sombras PCF de 3 cascadas y un pipeline completo de post-proceso con SSGI, rayos de luz y tonemap ACES.',
    featuredLongDescription: 'Escrito desde cero: configuración Win32/DX11, wrappers tipados para constant buffers, recarga en caliente de shaders HLSL (F5) y una UI de docking ImGui con sliders en vivo para cada parámetro. El terreno se genera asíncronamente en CPU con FBM domain-warped + erosión hidráulica, y luego se tesaló en la GPU mediante hull/domain shaders con LOD en espacio de pantalla. El agua combina desplazamiento de olas Gerstner, especular GGX, Fresnel, absorción de profundidad Beer-Lambert y un pase dedicado de pre-render para reflexión/refracción.',
    demosInclude:     'DEMOS INCLUIDAS',
    launchPlayground: 'ABRIR PLAYGROUND',
    reshadeSection:   'PROYECTOS RESHADE',
    reshadeSubtitle:  'presets de post-procesado y estudios',
    source:           'CÓDIGO',
    demo:             'DEMO',
    reshadeCards: [
      { title: 'Efecto Arte ASCII',  description: 'Convierte la pantalla en arte ASCII mediante detección de bordes Difference-of-Gaussians y un mapa de caracteres. Incluye ponderación de bordes por profundidad, zoom ajustable, desplazamiento y núcleo de difuminado para un control expresivo.' },
      { title: 'Intercambio de Paleta', description: 'Reemplaza todos los colores de la pantalla por la coincidencia más cercana de una paleta personalizada de hasta 8 colores — ideal para estéticas retro, gradación de color forzada y efectos visuales estilizados.' },
      { title: 'Ordenación de Píxeles', description: 'Ordena píxeles dentro de tramos enmascarados por luminancia, ordenando por tono, saturación o luminosidad — generando el efecto de arte glitch clásico de ordenación de píxeles. Totalmente configurable con umbrales, límites de tramo y desplazamientos animados.' },
    ],
    demos: [
      { topic: 'Terreno Teselado',         detail: 'Shaders hull/domain en GPU, FBM con dominio deformado + erosión hidráulica, mezcla de biomas PBR' },
      { topic: 'Renderizado de Agua',      detail: 'Desplazamiento de olas Gerstner, absorción Beer-Lambert, GGX especular, Fresnel, espuma de orilla' },
      { topic: 'Ray Tracing en Pantalla',  detail: 'Ray march sobre heightmap para reflexiones/refracciones en agua + aberración cromática' },
      { topic: 'Pipeline Post-Proceso',    detail: 'SSGI, rayos de luz (radial blur), bloom Kawase 4 niveles, FXAA, tonemap ACES fílmico' },
      { topic: 'Mapas de Sombras CSM',     detail: 'CSM de 3 cascadas con PCF, 2048×2048 por cascada, bias de profundidad por pendiente' },
    ],
  },
  llm: {
    heading:              '// MÁS_ALLÁ_DE_LOS_SHADERS',
    subtitle:             'ML & Desarrollo Web — proyectos reales, entregados',
    mlLabel:              'DESTACADO // ML',
    mlTitle:              'GitQuery — Sistema de Recomendación de Repositorios',
    mlDescription:        'Sistema de recomendación IA totalmente diseñado y construido desde cero — búsqueda semántica sobre repositorios de GitHub con una base de datos vectorial Qdrant propia y embeddings Sentence-Transformer, con un agente que entrenamos para razonar y responder de forma específica y definida. Pipeline MLOps de nivel productivo desarrollado con Seraphim Systems en IE University.',
    mlLongDescription:    'Toda la base de datos vectorial Qdrant y el pipeline de embeddings fue diseñado, construido y modelado por el equipo desde cero. Un agente conversacional fue entrenado de forma completa para comportarse de manera específica y controlada — expuesto mediante un servidor MCP (Model Context Protocol) propio. Contenerizado con Docker Compose, checkpointing fragmentado reanudable y bucle de monitoreo y reentrenamiento con CI/CD.',
    mlFeatures: [
      { topic: 'Base Vectorial Propia',    detail: 'Base de datos Qdrant y pipeline de recuperación diseñados, construidos y modelados desde cero por el equipo' },
      { topic: 'Agente Entrenado',         detail: 'Agente LLM entrenado para razonar y responder de una manera específica y definida' },
      { topic: 'Pipeline MLOps',           detail: 'Entrenamiento contenerizado, checkpointing fragmentado reanudable, bucle de evaluación y CI/CD' },
      { topic: 'Servidor MCP',             detail: 'Servidor Model Context Protocol que conecta el agente entrenado con el sistema de recomendación vía FastAPI' },
    ],
    frontendLabel:        'DESTACADO // FRONTEND',
    frontendTitle:        'Karsus Initiative — Tracker de Combate D&D',
    frontendDescription:  'Rastreador de iniciativa D&D full-stack desplegado en Azure Static Web Apps — frontend React 18 + TypeScript respaldado por Azure Functions, Cosmos DB y Blob Storage.',
    frontendLongDescription: 'Azure SWA + API de Functions v4 (Node.js / TypeScript), autenticación JWT RS256, Azure Cosmos DB para datos de encuentros y criaturas, Azure Blob Storage para imágenes. Infraestructura aprovisionada de principio a fin con Bicep IaC y Azure Developer CLI (azd).',
    frontendFeatures: [
      { topic: 'Azure SWA + Functions',     detail: 'Desplegado en Azure Static Web Apps con API integrada de Azure Functions v4 Node.js' },
      { topic: 'Cosmos DB + Blob Storage',  detail: 'Datos NoSQL de encuentros y criaturas en Cosmos DB; imágenes en Azure Blob Storage' },
      { topic: 'Auth JWT & Seguridad',      detail: 'Tokens RS256, Content Security Policy, Google OAuth, cabeceras de seguridad reforzadas' },
      { topic: 'Bicep IaC',                 detail: 'Infraestructura Azure aprovisionada con plantillas Bicep + Azure Developer CLI (azd)' },
    ],
    featuresTitle: 'CARACTERÍSTICAS CLAVE',
    source:        'CÓDIGO',
    demo:          'DEMO EN VIVO',
  },
  lore: {
    heading:  '// CONECTAR — POR_QUÉ.CDPR',
    subtitle: 'Más allá de lo técnico — los mundos, sistemas e historias que entrenaron cómo pienso sobre el diseño.',
    quote1:   'He pasado años dentro de mundos que otros construyeron.',
    quote2:   'Ahora quiero ayudar a construirlos.',
    tabletopLabel:   'ARQUITECTO DE MESA',
    tabletopHeading: '7 Años en la Mesa',
    tabletopHighlights: [
      '7 años jugando a D&D — varios como Dungeon Master',
      'Diseño homebrew profundo: mecánicas personalizadas, sistemas de world-building, lógica de facciones',
      'Adapté los sistemas de los videojuegos de CD Projekt RED (economía, ciberware, reputación) a campañas de rol',
      'Sólida comprensión del equilibrio de juego, la agencia del jugador y los bucles narrativo-mecánicos',
      'Desarrollé una plataforma web completa para D&D Teatro de la Mente — herramientas en tiempo real, paneles de jugadores y utilidades para el DM — en React + TypeScript',
      'Dirigí un one-shot del TTRPG de The Witcher — atraído por el lore e interesado en el universo; adapté mecánicas de combate y encuentros con monstruos del manual en una aventura completa de una sesión para el grupo',
    ],
    tabletopFooterPre:       'Años de DM se traducen directamente en',
    tabletopFooterHighlight: 'pensamiento de diseño de sistemas',
    tabletopFooterPost:      '— y construir la plataforma D&D lo demostró: lanzar un producto real de principio a fin, no solo teoría.',
    cyberpunkLabel:   'LORE PROFUNDO',
    cyberpunkHeading: 'Mundos que Valen la Pena',
    cyberpunkHighlights: [
      'Todas las ediciones del TTRPG Cyberpunk: Cyberpunk 2020, V3, RED y el Corebook original',
      'Lore profundo: Corporaciones, Edgerunners, arquitectura NET, la línea temporal de Blackhand',
      'El Cosmere (Brandon Sanderson) — leída la saga completa; completé su curso universitario gratuito de escritura creativa — Promesas/Progreso/Recompensa, el cociente MICE y por qué las restricciones hacen los sistemas de magia (y de juego) más interesantes que el poder bruto; jugando al TTRPG del Cosmere',
      'Estudiado cómo distintos creadores trasladan mundos a nuevos medios — de la mesa de Pondsmith a la adaptación de CDPR',
      'Dirigí campañas mezclando material fuente: conversiones de CP2077 y encuentros del Cosmere',
    ],
    cyberpunkFooterPre:       'Entender qué hace funcionar a los mundos — las promesas que hacen y las restricciones que imponen —',
    cyberpunkFooterHighlight: 'es el equivalente más cercano a una clase magistral de diseño de sistemas',
    cyberpunkFooterPost:      '. Esa perspectiva la llevo a cada pipeline y mecánica que construyo.',
    editionsLabel: 'TTRPGs JUGADOS:',
    notesCaption1: 'Notas de una campaña de 3 años',
    notesCaption2: 'Notas para un one-shot de The Witcher',
  },
  contact: {
    heading:         '// CANAL_ABIERTO',
    subtitle1:       '¿Interesado en mi trabajo o tienes alguna pregunta sobre mi candidatura?',
    subtitle2:       'Contáctame a través de cualquier canal.',
    footerBuilt:     'Hecho con React + Vite + TailwindCSS v4 ·',
    footerTargeting: 'Aplicando a CD Projekt RED — Prácticas de Verano · Backend & Gráficos',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// POLISH  (⚠ Not a native speaker — translations may contain errors)
// ─────────────────────────────────────────────────────────────────────────────
const pl: Translations = {
  nav: {
    skills:  '// UMIEJĘTNOŚCI',
    shaders: '// SHADERY',
    llm:     '// WIĘCEJ',
    lore:    '// LORE',
    contact: '// KONTAKT',
    resume:  'CV↗',
  },
  hero: {
    pretitle:    'CEL: CD PROJEKT RED — STAŻ LETNI 2026',
    subtitle:    'STUDENT CS & AI — BACKEND & GRAFIKA',
    tagline1:    '3. rok informatyki i sztucznej inteligencji na IE University.',
    tagline2:    'Systemy backendowe, potoki AI i renderowanie w czasie rzeczywistym — budowanie projektów od A do Z.',
    viewShaders: 'ZOBACZ MOJE PRACE',
    downloadCv:  'POBIERZ CV',
  },
  skills: {
    heading:   '// MACIERZ_UMIEJĘTNOŚCI',
    rendering: 'RENDEROWANIE',
    shading:   'JĘZYKI SHADERÓW',
    apis:      'API & SILNIKI',
    languages: 'JĘZYKI & NARZĘDZIA',
    ai:        'AI / UCZENIE MASZYNOWE',
    web:       'TWORZENIE STRON',
  },
  shaderWork: {
    heading:          '// PRACA_Z_SHADERAMI',
    featured:         'WYRÓŻNIONY PROJEKT',
    featuredTitle:    'Shader Playground',
    featuredDescription: 'Renderowanie forward w czasie rzeczywistym napisane w C++ i HLSL na DirectX 11 — proceduralny teren teselowany przez GPU, ray tracing heightmapy w przestrzeni ekranu dla odbić/refrakcji wody, absorpcja Beer-Lamberta, mapy cieni PCF 3 kaskad i pełny potok post-processingu z SSGI, bożymi promieniami i tonemappingiem ACES.',
    featuredLongDescription: 'Napisane od podstaw: konfiguracja Win32/DX11, typowane wrappery constant bufferów, hot-reload shaderów HLSL (F5) i UI dockingowe ImGui z żywymi suwakami dla każdego parametru. Teren generuje się asynchronicznie na CPU z FBM warped domain + erozją hydrauliczną, następnie jest teselowany na GPU przez shadery hull/domain z LOD w przestrzeni ekranu. Woda łączy przemieszczenie fal Gerstnera, GGX specular, Fresnel, absorpcję głębokości Beer-Lamberta i dedykowany pre-render dla odbicia/refrakcji.',
    demosInclude:     'DEMO ZAWIERAJĄ',
    launchPlayground: 'URUCHOM PLAYGROUND',
    reshadeSection:   'PROJEKTY RESHADE',
    reshadeSubtitle:  'presety post-processingu i studia',
    source:           'KOD',
    demo:             'DEMO',
    reshadeCards: [
      { title: 'Efekt Sztuki ASCII',    description: 'Przekształca ekran w sztukę ASCII za pomocą detekcji krawędzi Difference-of-Gaussians i tablicy tekstur znaków. Oferuje ważenie krawędzi głębokością, regulowany zoom, przesunięcie i jądro rozmycia dla ekspresyjnej kontroli.' },
      { title: 'Zamiana Palety',        description: 'Zastępuje wszystkie kolory ekranu najbliższym odpowiednikiem z palety do 8 kolorów zdefiniowanych przez użytkownika — idealne do estetyki retro, wymuszonej korekcji kolorów i stylizowanych efektów wizualnych.' },
      { title: 'Sortowanie Pikseli',    description: 'Sortuje piksele wewnątrz rozpiętości maskowanych luminancją według barwy, nasycenia lub jasności — tworząc klasyczny efekt glitch-art. Pełna kontrola przez progi maskowania, limity rozpiętości i animowane przesunięcia.' },
    ],
    demos: [
      { topic: 'Teselowany Teren',         detail: 'Shadery hull/domain na GPU, FBM z warped domain + erozja hydrauliczna, mieszanie biomów PBR' },
      { topic: 'Renderowanie Wody',        detail: 'Przemieszczenie fal Gerstnera, absorpcja Beer-Lamberta, GGX specular, Fresnel, piana brzegowa' },
      { topic: 'Ray Tracing na Ekranie',   detail: 'Ray march po heightmapie dla odbić/refrakcji wody + aberracja chromatyczna' },
      { topic: 'Potok Post-Processingu',   detail: 'SSGI, boże promienie (radial blur), bloom Kawase 4 poziomy, FXAA, tonemap ACES filmowy' },
      { topic: 'Kaskadowe Mapy Cieni',     detail: 'CSM 3 kaskad z PCF, 2048×2048 na kaskadę, bias głębokości oparty na nachyleniu' },
    ],
  },
  llm: {
    heading:              '// POZA_SHADERAMI',
    subtitle:             'ML & Tworzenie Stron — prawdziwe projekty, dostarczone',
    mlLabel:              'WYRÓŻNIONY // ML',
    mlTitle:              'GitQuery — System Rekomendacji Repozytoriów',
    mlDescription:        'W pełni zaprojektowany i zbudowany od podstaw system rekomendacji AI — semantyczne wyszukiwanie repozytoriów GitHub z własną bazą wektorową Qdrant i embeddingami Sentence-Transformer, z agentem, którego wytrenowaliśmy do działania w określony, zdefiniowany sposób. Potok MLOps klasy produkcyjnej zbudowany z Seraphim Systems na IE University.',
    mlLongDescription:    'Cała baza wektorowa Qdrant i pipeline embeddingów została zaprojektowana, zbudowana i zamodelowana od zera przez zespół. Agent konwersacyjny został w pełni wytrenowany do zachowania się w specyficzny, kontrolowany sposób — udostępniany przez własny serwer MCP (Model Context Protocol). Skonteneryzowany z Docker Compose, wznawialne fragmentowane checkpointowanie i pętla monitorowania z CI/CD.',
    mlFeatures: [
      { topic: 'Własna Baza Wektorowa',   detail: 'Cała baza Qdrant i pipeline wyszukiwania zaprojektowane, zbudowane i zamodelowane od podstaw przez zespół' },
      { topic: 'Wytrenowany Agent',       detail: 'Agent LLM wytrenowany do rozumowania i odpowiadania w specyficzny, zdefiniowany sposób' },
      { topic: 'Potok MLOps',             detail: 'Skonteneryzowany trening, fragmentowe checkpointowanie, pętla ewaluacji i CI/CD' },
      { topic: 'Serwer MCP',              detail: 'Serwer Model Context Protocol łączący wytrenowanego agenta z systemem rekomendacji przez FastAPI' },
    ],
    frontendLabel:        'WYRÓŻNIONY // FRONTEND',
    frontendTitle:        'Karsus Initiative — Tracker Inicjatywy D&D',
    frontendDescription:  'Full-stack tracker inicjatywy D&D wdrożony na Azure Static Web Apps — frontend React 18 + TypeScript oparty na Azure Functions, Cosmos DB i Blob Storage.',
    frontendLongDescription: 'Azure SWA + API Functions v4 (Node.js / TypeScript), uwierzytelnianie JWT RS256, Azure Cosmos DB na dane spotkań i stworzeń, Azure Blob Storage na obrazy. Infrastruktura ujęta w Bicep IaC i wdrożona przez Azure Developer CLI (azd).',
    frontendFeatures: [
      { topic: 'Azure SWA + Functions',    detail: 'Wdrożone na Azure Static Web Apps ze zintegrowanym API Azure Functions v4 Node.js' },
      { topic: 'Cosmos DB + Blob Storage', detail: 'Dane NoSQL spotkań i stworzeń w Cosmos DB; obrazy w Azure Blob Storage' },
      { topic: 'Auth JWT & Bezpieczeństwo',detail: 'Tokeny RS256, Content Security Policy, Google OAuth, hardened nagłówki bezpieczeństwa' },
      { topic: 'Bicep IaC',               detail: 'Infrastruktura Azure w szablonach Bicep + Azure Developer CLI (azd)' },
    ],
    featuresTitle: 'KLUCZOWE FUNKCJE',
    source:        'KOD',
    demo:          'DEMO NA ŻYWO',
  },
  lore: {
    heading:  '// POŁĄCZ_SIĘ — DLACZEGO.CDPR',
    subtitle: 'Poza techniką — światy, systemy i opowieści, które ukształtowały mój sposób myślenia o projektowaniu.',
    quote1:   'Spędziłem lata wewnątrz światów, które budowali inni.',
    quote2:   'Teraz chcę pomóc je tworzyć.',
    tabletopLabel:   'ARCHITEKT STOŁOWY',
    tabletopHeading: '7 Lat przy Stole',
    tabletopHighlights: [
      '7 lat grania w D&D — kilka jako Mistrz Gry',
      'Głęboki design homebrew: własne mechaniki, systemy budowania świata, logika frakcji',
      'Zaadaptowałem systemy gier wideo CD Projekt RED (ekonomia, cyberware, reputacja) do kampanii RPG',
      'Dobre zrozumienie balansu gry, sprawczości gracza i pętli narracyjno-mechanicznych',
      'Zbudowałem pełnostackową platformę online dla D&D Theater of the Mind — narzędzia sesji, pulpity gracza i narzędzia Mistrza Gry — w React + TypeScript',
      'Poprowadziłem oneshot TTRPG Wiedźmin — przyciągnięty przez lore i zainteresowany settingiem; zaadaptowałem mechaniki walki i starcia z potworami z podręcznika Wiedźmin do pełnej przygody na jedną sesję dla grupy',
    ],
    tabletopFooterPre:       'Lata prowadzenia gier przekładają się bezpośrednio w',
    tabletopFooterHighlight: 'myślenie projektowe systemów',
    tabletopFooterPost:      '— a budowa platformy D&D to udowodniła: dostarczenie prawdziwego produktu od A do Z.',
    cyberpunkLabel:   'GŁĘBOKIE LORE',
    cyberpunkHeading: 'Światy Warte Poznania',
    cyberpunkHighlights: [
      'Wszystkie edycje TTRPG Cyberpunk: Cyberpunk 2020, V3, RED i oryginalny Corebook',
      'Głęboka wiedza: Korporacje, Edgerunnerzy, architektura NET, oś czasu Blackhanda',
      'Kosmere (Brandon Sanderson) — przeczytana cała saga; ukończyłem jego bezpłatny akademicki kurs creative writing — Obietnice/Postęp/Nagroda, wykres MICE i dlaczego ograniczenia sprawiają, że systemy magii (i gier) są bardziej przekonujące niż czysta moc; granie w TTRPG Kosmere',
      'Studiowanie, jak różni twórcy przenoszą światy na nowe media — od stolika Pondsmitha do adaptacji CDPR',
      'Prowadziłem kampanie mieszające materiał źródłowy: konwersje CP2077 i encountery z Kosmere',
    ],
    cyberpunkFooterPre:       'Rozumienie tego, co sprawia, że światy działają — obietnice, jakie składają, i ograniczenia, jakie narzucają —',
    cyberpunkFooterHighlight: 'to najbliższy odpowiednik kursu mistrzowskiego z projektowania systemów',
    cyberpunkFooterPost:      '. Tę perspektywę wnoszę do każdego potoku i mechaniki, nad którą pracuję.',
    editionsLabel: 'TTRPG:',
    notesCaption1: 'Notatki z 3-letniej kampanii',
    notesCaption2: 'Notatki do one-shotu Wiedźmin',
  },
  contact: {
    heading:         '// OTWARTY_KANAŁ',
    subtitle1:       'Zainteresowany moją pracą lub masz pytanie dotyczące mojej aplikacji?',
    subtitle2:       'Skontaktuj się przez dowolny kanał poniżej.',
    footerBuilt:     'Zbudowane z React + Vite + TailwindCSS v4 ·',
    footerTargeting: 'Aplikacja do CD Projekt RED — Staż Letni · Backend & Grafika',
  },
};

export const translations: Record<Language, Translations> = { en, es, pl };
