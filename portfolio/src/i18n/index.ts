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
    subtitle:    'CS & AI STUDENT — GRAPHICS & RENDERING',
    tagline1:    '3rd year Computer Science & AI at IE University.',
    tagline2:    'Obsessed with real-time rendering — shader writer, ReShade author, aspiring graphics engineer.',
    viewShaders: 'VIEW SHADER WORK',
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
      { topic: 'Terrain Generation', detail: 'Multi-octave FBM noise, heightmap-to-mesh' },
      { topic: 'Ray Marching',       detail: 'SDF primitives, soft shadows, AO' },
      { topic: 'Volumetric Clouds',  detail: 'Density ray-march, Beer-Lambert lighting' },
      { topic: 'Path Tracing',       detail: 'Global illumination, Monte Carlo sampling' },
      { topic: 'Physics Sims',       detail: 'Particle systems, fluid approximations' },
    ],
  },
  llm: {
    heading:              '// BEYOND_SHADERS',
    subtitle:             'ML & Web Development — real projects, shipped',
    mlLabel:              'FEATURED // ML',
    mlTitle:              'GitQuery — GitHub Recommender System',
    mlDescription:        'Modular AI system that recommends GitHub repositories using hybrid retrieval and semantic embeddings — team coursework at IE University / Seraphim Systems with a production-grade MLOps pipeline.',
    mlLongDescription:    'Python backend with Sentence-Transformer embeddings stored in Qdrant vector DB. A custom MCP (Model Context Protocol) server exposes recommender tools to LLM agents via FastAPI. Training is containerised with Docker Compose, fully resumable through chunked checkpointing, and includes a CI/CD monitoring & retraining loop.',
    mlFeatures: [
      { topic: 'Semantic Retrieval',  detail: 'Sentence-Transformer embeddings + Qdrant vector search for accurate repo matching' },
      { topic: 'MCP Server',          detail: 'Model Context Protocol server exposing tools to LLM agents via FastAPI (port 8090)' },
      { topic: 'MLOps Pipeline',      detail: 'Containerised training, resumable chunked checkpointing, evaluation loop & CI/CD' },
      { topic: 'Full Microservices',  detail: 'Recommender API, MCP server, CLI client — all orchestrated with Docker Compose' },
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
    demo:          'LIVE DEMO',
  },
  lore: {
    heading:  '// JACK_IN — WHY.CDPR',
    subtitle: "The case for why this isn't just a job application — it's a homecoming.",
    quote1:   "I don't just want to render Night City.",
    quote2:   "I've been building cities like it for years.",
    tabletopLabel:   'TABLETOP ARCHITECT',
    tabletopHeading: '7 Years at the Table',
    tabletopHighlights: [
      '7 years playing D&D — several as Dungeon Master',
      'Deep homebrew design: custom mechanics, world-building systems, faction logic',
      'Adapted CD Projekt RED videogame systems (economy, cyberware, reputation) into tabletop campaigns',
      'Strong understanding of game balance, player agency, and narrative-mechanical feedback loops',
      'Built a full-stack online platform for Theater of the Mind D&D — real-time session tools, player dashboards, and DM tooling — in React + TypeScript',
    ],
    tabletopFooterPre:       'Years of DMing translate directly to',
    tabletopFooterHighlight: 'systems design thinking',
    tabletopFooterPost:      '— and building the D&D platform proved it: shipping a real product end-to-end, not just theory.',
    cyberpunkLabel:   'CYBERPUNK DEVOTEE',
    cyberpunkHeading: 'All Editions. All Lore.',
    cyberpunkHighlights: [
      'All Cyberpunk TTRPG editions: Cyberpunk 2020, V3, RED, and the original Corebook',
      'Deep lore knowledge: Corporations, Edgerunners, NET architecture, the Blackhand timeline',
      "Pondsmith's design philosophy — how the setting translates across media",
      'Ran Cyberpunk RED campaigns with custom conversions of CP2077 locations and factions',
      'Studied how CDPR adapted the source material for Cyberpunk 2077 and Edgerunners',
    ],
    cyberpunkFooterPre:       "This isn't just fan passion — it's deep familiarity with",
    cyberpunkFooterHighlight: 'the world CDPR builds for',
    cyberpunkFooterPost:      '. I understand what Night City should feel like, and I want to help render it.',
    editionsLabel: 'CYBERPUNK EDITIONS PLAYED:',
  },
  contact: {
    heading:         '// OPEN_CHANNEL',
    subtitle1:       'Interested in my work, or have a question about my application?',
    subtitle2:       'Reach out through any channel below.',
    footerBuilt:     'Built with React + Vite + TailwindCSS v4 ·',
    footerTargeting: 'Targeting CD Projekt RED — Summer Internship · Graphics & Rendering',
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
    subtitle:    'ESTUDIANTE CS & IA — GRÁFICOS & RENDERIZADO',
    tagline1:    '3er año de Informática e Inteligencia Artificial en IE University.',
    tagline2:    'Apasionado del renderizado en tiempo real — programmador de shaders, autor de ReShade, aspirante a ingeniero gráfico.',
    viewShaders: 'VER TRABAJO DE SHADERS',
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
      { topic: 'Generación de Terreno', detail: 'FBM multi-octava, heightmap a malla' },
      { topic: 'Ray Marching',          detail: 'Primitivas SDF, sombras suaves, AO' },
      { topic: 'Nubes Volumétricas',    detail: 'Ray-march de densidad, iluminación Beer-Lambert' },
      { topic: 'Path Tracing',          detail: 'Iluminación global, muestreo Monte Carlo' },
      { topic: 'Simulaciones Físicas',  detail: 'Sistemas de partículas, aproximaciones de fluidos' },
    ],
  },
  llm: {
    heading:              '// MÁS_ALLÁ_DE_LOS_SHADERS',
    subtitle:             'ML & Desarrollo Web — proyectos reales, entregados',
    mlLabel:              'DESTACADO // ML',
    mlTitle:              'GitQuery — Sistema de Recomendación de Repositorios',
    mlDescription:        'Sistema de IA modular que recomienda repositorios de GitHub mediante recuperación híbrida y embeddings semánticos — proyecto de coursework en equipo en IE University / Seraphim Systems con un pipeline MLOps de nivel productivo.',
    mlLongDescription:    'Backend en Python con embeddings de Sentence-Transformer almacenados en Qdrant. Un servidor MCP (Model Context Protocol) expone herramientas del recomendador a agentes LLM vía FastAPI. El entrenamiento está contenerizado con Docker Compose, es totalmente reanudable mediante checkpointing fragmentado, e incluye un bucle de monitoreo y reentrenamiento con CI/CD.',
    mlFeatures: [
      { topic: 'Recuperación Semántica',   detail: 'Embeddings de Sentence-Transformer + búsqueda vectorial en Qdrant para coincidencias precisas' },
      { topic: 'Servidor MCP',             detail: 'Servidor Model Context Protocol que expone herramientas a agentes LLM vía FastAPI (puerto 8090)' },
      { topic: 'Pipeline MLOps',           detail: 'Entrenamiento contenerizado, checkpointing fragmentado reanudable, bucle de evaluación y CI/CD' },
      { topic: 'Microservicios Completos', detail: 'API de recomendación, servidor MCP, cliente CLI — orquestados con Docker Compose' },
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
    subtitle: 'La razón por la que esto no es solo una solicitud de empleo — es volver a casa.',
    quote1:   'No solo quiero renderizar Night City.',
    quote2:   'Llevo años construyendo ciudades como esta.',
    tabletopLabel:   'ARQUITECTO DE MESA',
    tabletopHeading: '7 Años en la Mesa',
    tabletopHighlights: [
      '7 años jugando a D&D — varios como Dungeon Master',
      'Diseño homebrew profundo: mecánicas personalizadas, sistemas de world-building, lógica de facciones',
      'Adapté los sistemas de los videojuegos de CD Projekt RED (economía, ciberware, reputación) a campañas de rol',
      'Sólida comprensión del equilibrio de juego, la agencia del jugador y los bucles narrativo-mecánicos',
      'Desarrollé una plataforma web completa para D&D Teatro de la Mente — herramientas en tiempo real, paneles de jugadores y utilidades para el DM — en React + TypeScript',
    ],
    tabletopFooterPre:       'Años de DM se traducen directamente en',
    tabletopFooterHighlight: 'pensamiento de diseño de sistemas',
    tabletopFooterPost:      '— y construir la plataforma D&D lo demostró: lanzar un producto real de principio a fin, no solo teoría.',
    cyberpunkLabel:   'DEVOTO CYBERPUNK',
    cyberpunkHeading: 'Todas las Ediciones. Todo el Lore.',
    cyberpunkHighlights: [
      'Todas las ediciones del TTRPG Cyberpunk: Cyberpunk 2020, V3, RED y el Corebook original',
      'Conocimiento profundo del lore: Corporaciones, Edgerunners, arquitectura NET, la línea temporal de Blackhand',
      'Filosofía de diseño de Pondsmith — cómo el universo se traslada a distintos medios',
      'Dirigí campañas de Cyberpunk RED con conversiones personalizadas de localizaciones y facciones de CP2077',
      'Estudié cómo CDPR adaptó el material original para Cyberpunk 2077 y Edgerunners',
    ],
    cyberpunkFooterPre:       'Esto no es solo pasión de fan — es un conocimiento profundo de',
    cyberpunkFooterHighlight: 'el mundo que CDPR construye',
    cyberpunkFooterPost:      '. Entiendo cómo debe sentirse Night City, y quiero ayudar a renderizarla.',
    editionsLabel: 'EDICIONES DE CYBERPUNK JUGADAS:',
  },
  contact: {
    heading:         '// CANAL_ABIERTO',
    subtitle1:       '¿Interesado en mi trabajo o tienes alguna pregunta sobre mi candidatura?',
    subtitle2:       'Contáctame a través de cualquier canal.',
    footerBuilt:     'Hecho con React + Vite + TailwindCSS v4 ·',
    footerTargeting: 'Aplicando a CD Projekt RED — Prácticas de Verano · Gráficos & Renderizado',
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
    subtitle:    'STUDENT CS & AI — GRAFIKA & RENDEROWANIE',
    tagline1:    '3. rok informatyki i sztucznej inteligencji na IE University.',
    tagline2:    'Zafascynowany renderowaniem w czasie rzeczywistym — autor shaderów, twórca ReShade, przyszły inżynier grafiki.',
    viewShaders: 'ZOBACZ PRACE Z SHADERAMI',
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
      { topic: 'Generowanie Terenu',   detail: 'FBM wielooktawowy, mapa wysokości do siatki' },
      { topic: 'Ray Marching',         detail: 'Prymitywy SDF, miękkie cienie, AO' },
      { topic: 'Chmury Wolumetryczne', detail: 'Ray-march gęstości, oświetlenie Beer-Lamberta' },
      { topic: 'Path Tracing',         detail: 'Globalne oświetlenie, próbkowanie Monte Carlo' },
      { topic: 'Symulacje Fizyczne',   detail: 'Systemy cząstek, przybliżenia płynów' },
    ],
  },
  llm: {
    heading:              '// POZA_SHADERAMI',
    subtitle:             'ML & Tworzenie Stron — prawdziwe projekty, dostarczone',
    mlLabel:              'WYRÓŻNIONY // ML',
    mlTitle:              'GitQuery — System Rekomendacji Repozytoriów',
    mlDescription:        'Modularny system AI rekomendujący repozytoria GitHub za pomocą hybrydowego wyszukiwania i embeddingów semantycznych — projekt coursework w zespole na IE University / Seraphim Systems z potokiem MLOps klasy produkcyjnej.',
    mlLongDescription:    'Backend w Pythonie z embeddingami Sentence-Transformer przechowywanymi w Qdrant. Własny serwer MCP (Model Context Protocol) udostępnia narzędzia rekomendatora agentom LLM przez FastAPI. Trening jest skonteneryzowany w Docker Compose, w pełni wznawiany przez fragmentowane checkpointowanie i zawiera pętlę monitorowania i re-treningu z CI/CD.',
    mlFeatures: [
      { topic: 'Wyszukiwanie Semantyczne', detail: 'Embeddingi Sentence-Transformer + wyszukiwanie wektorowe w Qdrant dla trafnych dopasowań' },
      { topic: 'Serwer MCP',              detail: 'Serwer Model Context Protocol udostępniający narzędzia agentom LLM przez FastAPI (port 8090)' },
      { topic: 'Potok MLOps',             detail: 'Skonteneryzowany trening, checkpointowanie fragmentowe, pętla ewaluacji i CI/CD' },
      { topic: 'Pełne Mikroserwisy',      detail: 'API rekomendatora, serwer MCP, klient CLI — orkiestrowane przez Docker Compose' },
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
    subtitle: 'Powód, dla którego to nie jest zwykła aplikacja — to powrót do domu.',
    quote1:   'Nie chcę tylko renderować Night City.',
    quote2:   'Buduję takie miasta od lat.',
    tabletopLabel:   'ARCHITEKT STOŁOWY',
    tabletopHeading: '7 Lat przy Stole',
    tabletopHighlights: [
      '7 lat grania w D&D — kilka jako Mistrz Gry',
      'Głęboki design homebrew: własne mechaniki, systemy budowania świata, logika frakcji',
      'Zaadaptowałem systemy gier wideo CD Projekt RED (ekonomia, cyberware, reputacja) do kampanii RPG',
      'Dobre zrozumienie balansu gry, sprawczości gracza i pętli narracyjno-mechanicznych',
      'Zbudowałem pełnostackową platformę online dla D&D Theater of the Mind — narzędzia sesji, pulpity gracza i narzędzia Mistrza Gry — w React + TypeScript',
    ],
    tabletopFooterPre:       'Lata prowadzenia gier przekładają się bezpośrednio w',
    tabletopFooterHighlight: 'myślenie projektowe systemów',
    tabletopFooterPost:      '— a budowa platformy D&D to udowodniła: dostarczenie prawdziwego produktu od A do Z.',
    cyberpunkLabel:   'MIŁOŚNIK CYBERPUNKA',
    cyberpunkHeading: 'Wszystkie Edycje. Cały Lore.',
    cyberpunkHighlights: [
      'Wszystkie edycje TTRPG Cyberpunk: Cyberpunk 2020, V3, RED i oryginalny Corebook',
      'Głęboka wiedza o lore: Korporacje, Edgerunnerzy, architektura NET, oś czasu Blackhanda',
      'Filozofia projektowania Pondsmitha — jak setting przekłada się na różne media',
      'Prowadziłem kampanie Cyberpunk RED z własnymi konwersjami lokacji i frakcji z CP2077',
      'Studiowałem, jak CDPR zaadaptował materiał źródłowy do Cyberpunk 2077 i Edgerunnerów',
    ],
    cyberpunkFooterPre:       'To nie tylko fandom — to głęboka znajomość',
    cyberpunkFooterHighlight: 'świata, który buduje CDPR',
    cyberpunkFooterPost:      '. Rozumiem, jak powinno wyglądać Night City, i chcę pomóc to renderować.',
    editionsLabel: 'EDYCJE CYBERPUNKA:',
  },
  contact: {
    heading:         '// OTWARTY_KANAŁ',
    subtitle1:       'Zainteresowany moją pracą lub masz pytanie dotyczące mojej aplikacji?',
    subtitle2:       'Skontaktuj się przez dowolny kanał poniżej.',
    footerBuilt:     'Zbudowane z React + Vite + TailwindCSS v4 ·',
    footerTargeting: 'Aplikacja do CD Projekt RED — Staż Letni · Grafika & Renderowanie',
  },
};

export const translations: Record<Language, Translations> = { en, es, pl };
