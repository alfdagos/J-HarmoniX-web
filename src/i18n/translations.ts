export type Locale = "it" | "en";

export const translations = {
  // Navbar
  nav_features: { it: "Features", en: "Features" },
  nav_quickstart: { it: "Quick Start", en: "Quick Start" },
  nav_parameters: { it: "Parametri", en: "Parameters" },
  nav_examples: { it: "Esempi", en: "Examples" },

  // Hero
  hero_subtitle: { it: "Jazz Harmony Generator", en: "Jazz Harmony Generator" },
  hero_desc: {
    it: "Genera progressioni armoniche jazz dalla riga di comando.",
    en: "Generate jazz harmonic progressions from the command line.",
  },
  hero_desc2: {
    it: "15 scale, 4 stili, complessità regolabile e modulazioni avanzate.",
    en: "15 scales, 4 styles, adjustable complexity and advanced modulations.",
  },
  hero_cta: { it: "Scarica da GitHub", en: "Download from GitHub" },

  // Features
  features_title_pre: {
    it: "Tutto ciò che serve per l'",
    en: "Everything you need for ",
  },
  features_title_highlight: {
    it: "armonia jazz",
    en: "jazz harmony",
  },
  features_subtitle: {
    it: "Un generatore potente e flessibile, progettato per musicisti e compositori.",
    en: "A powerful and flexible generator, designed for musicians and composers.",
  },
  feat_scales: { it: "15 Scale Supportate", en: "15 Supported Scales" },
  feat_scales_desc: {
    it: "Da maggiore a diminuita, passando per modi, pentatoniche e blues.",
    en: "From major to diminished, including modes, pentatonics and blues.",
  },
  feat_styles: { it: "4 Stili Armonici", en: "4 Harmonic Styles" },
  feat_styles_desc: {
    it: "Simple, Pop, Jazz Standard e Jazz Modern con sostituzioni avanzate.",
    en: "Simple, Pop, Jazz Standard and Jazz Modern with advanced substitutions.",
  },
  feat_complexity: { it: "4 Livelli di Complessità", en: "4 Complexity Levels" },
  feat_complexity_desc: {
    it: "Da triadi semplici a estensioni complete con none, undicesime e tredicesime.",
    en: "From simple triads to full extensions with ninths, elevenths and thirteenths.",
  },
  feat_modulations: { it: "Modulazioni Controllate", en: "Controlled Modulations" },
  feat_modulations_desc: {
    it: "Da nessuna modulazione a cambi di tonalità frequenti e cromatici.",
    en: "From no modulation to frequent and chromatic key changes.",
  },
  feat_cli: { it: "CLI Interattiva", en: "Interactive CLI" },
  feat_cli_desc: {
    it: "Shell intuitiva con autocompletamento, cronologia e help inline.",
    en: "Intuitive shell with autocompletion, history and inline help.",
  },
  feat_infinite: { it: "Combinazioni Infinite", en: "Infinite Combinations" },
  feat_infinite_desc: {
    it: "Sperimenta liberamente con parametri per progressioni sempre uniche.",
    en: "Freely experiment with parameters for always unique progressions.",
  },

  // Quick Start
  qs_label: { it: "Inizia Subito", en: "Get Started" },
  qs_step1: { it: "1. Clona il repository", en: "1. Clone the repository" },
  qs_step2: { it: "2. Compila il progetto", en: "2. Build the project" },
  qs_step3: { it: "3. Avvia la CLI", en: "3. Launch the CLI" },
  qs_first_title: { it: "🎹 La tua prima progressione", en: "🎹 Your first progression" },
  qs_first_desc: {
    it: "Una volta avviata la shell, genera la tua prima progressione jazz:",
    en: "Once the shell is running, generate your first jazz progression:",
  },
  qs_first_hint: {
    it: "Usa <code>scales</code> e <code>styles</code> per esplorare tutte le opzioni disponibili.",
    en: "Use <code>scales</code> and <code>styles</code> to explore all available options.",
  },
  qs_copy_label: { it: "Copia comando", en: "Copy command" },

  // Parameters
  params_title_pre: { it: "Parametri ", en: "Configurable " },
  params_title_highlight: { it: "configurabili", en: "Parameters" },
  params_subtitle: {
    it: "Ogni aspetto della progressione è sotto il tuo controllo.",
    en: "Every aspect of the progression is under your control.",
  },
  param_tonic: { it: "Nota di partenza", en: "Starting note" },
  param_scale: { it: "Tipo di scala", en: "Scale type" },
  param_style: { it: "Stile armonico", en: "Harmonic style" },
  param_complexity: { it: "Complessità degli accordi", en: "Chord complexity" },
  param_modulation: { it: "Frequenza di modulazione", en: "Modulation frequency" },
  param_form: { it: "Struttura della canzone", en: "Song structure" },

  // Examples
  examples_title_pre: { it: "Esplora i ", en: "Explore the " },
  examples_title_highlight: { it: "generi", en: "genres" },
  examples_subtitle: {
    it: "Combinazioni suggerite per ogni epoca e stile del jazz.",
    en: "Suggested combinations for every era and style of jazz.",
  },
  ex_traditional: { it: "Jazz Tradizionale", en: "Traditional Jazz" },
  ex_bebop: { it: "Bebop", en: "Bebop" },
  ex_modal: { it: "Modal Jazz", en: "Modal Jazz" },
  ex_fusion: { it: "Fusion", en: "Fusion" },
  ex_bossa: { it: "Bossa Nova", en: "Bossa Nova" },
  ex_avantgarde: { it: "Avant-Garde", en: "Avant-Garde" },

  // Footer
  footer_title_pre: { it: "Pronto a ", en: "Ready to " },
  footer_title_highlight: { it: "sperimentare", en: "experiment" },
  footer_title_end: { it: "?", en: "?" },
  footer_desc: {
    it: "J-HarmoniX è open source. Scarica, esplora e crea progressioni armoniche uniche.",
    en: "J-HarmoniX is open source. Download, explore and create unique harmonic progressions.",
  },
  footer_cta: { it: "Vedi su GitHub", en: "View on GitHub" },
  footer_tagline: {
    it: "— Bringing jazz harmony to your fingertips 🎵",
    en: "— Bringing jazz harmony to your fingertips 🎵",
  },
} as const;

export type TranslationKey = keyof typeof translations;
