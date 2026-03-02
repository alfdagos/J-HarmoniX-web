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
  footer_open_source: {
    it: "Open Source",
    en: "Open Source",
  },
  footer_license: {
    it: "Licenza MIT",
    en: "MIT License",
  },
  footer_built_with: {
    it: "Scritto in Java · CLI Tool · Gratis per sempre",
    en: "Written in Java · CLI Tool · Free forever",
  },

  // Key Takeaways (AI Search Optimization)
  kt_title: {
    it: "In sintesi",
    en: "Key Takeaways",
  },
  kt_1: {
    it: "J-HarmoniX genera progressioni armoniche jazz dalla riga di comando.",
    en: "J-HarmoniX generates jazz harmonic progressions from the command line.",
  },
  kt_2: {
    it: "Supporta 15 scale musicali inclusi modi, pentatoniche, blues e scala intera.",
    en: "Supports 15 musical scales including modes, pentatonics, blues and whole tone.",
  },
  kt_3: {
    it: "4 stili armonici: Simple, Pop, Jazz Standard e Jazz Modern con sostituzioni tritono.",
    en: "4 harmonic styles: Simple, Pop, Jazz Standard and Jazz Modern with tritone substitutions.",
  },
  kt_4: {
    it: "Complessità configurabile da triadi semplici a estensioni complete (9ª, 11ª, 13ª).",
    en: "Configurable complexity from simple triads to full extensions (9th, 11th, 13th).",
  },
  kt_5: {
    it: "100% gratuito, open source, scritto in Java, compatibile con Windows/macOS/Linux.",
    en: "100% free, open source, written in Java, compatible with Windows/macOS/Linux.",
  },

  // FAQ Section
  faq_label: { it: "Domande frequenti", en: "Frequently Asked Questions" },
  faq_title_pre: { it: "Tutto quello che vuoi ", en: "Everything you want to " },
  faq_title_highlight: { it: "sapere", en: "know" },
  faq_q1: {
    it: "Cos'è J-HarmoniX?",
    en: "What is J-HarmoniX?",
  },
  faq_a1: {
    it: "J-HarmoniX è un generatore di progressioni armoniche jazz da riga di comando (CLI), scritto in Java. Permette di creare progressioni jazz personalizzate con 15 scale, 4 stili armonici e modulazioni controllate. È completamente gratuito e open source.",
    en: "J-HarmoniX is a command-line interface (CLI) tool that generates jazz harmonic progressions, written in Java. It allows creating custom jazz progressions with 15 scales, 4 harmonic styles and controlled modulations. It is completely free and open source.",
  },
  faq_q2: {
    it: "Come si installa J-HarmoniX?",
    en: "How do I install J-HarmoniX?",
  },
  faq_a2: {
    it: "Clona il repository con Git, compila con Maven (mvn clean install -DskipTests) e avvia il JAR generato. Richiede Java JDK 11+ e Apache Maven installati sul sistema.",
    en: "Clone the repository with Git, build with Maven (mvn clean install -DskipTests) and run the generated JAR. Requires Java JDK 11+ and Apache Maven installed on your system.",
  },
  faq_q3: {
    it: "Quali scale musicali supporta?",
    en: "What musical scales are supported?",
  },
  faq_a3: {
    it: "Sono supportate 15 scale: maggiore, dorian, frigio, lidio, misolidio, eoliano, locrio, minore melodica, minore armonica, pentatonica maggiore, pentatonica minore, blues, intera (whole tone), diminuita e alterata.",
    en: "15 scales are supported: major, dorian, phrygian, lydian, mixolydian, aeolian, locrian, melodic minor, harmonic minor, major pentatonic, minor pentatonic, blues, whole tone, diminished and altered.",
  },
  faq_q4: {
    it: "Funziona su tutti i sistemi operativi?",
    en: "Does it work on all operating systems?",
  },
  faq_a4: {
    it: "Sì. Essendo un'applicazione Java, J-HarmoniX funziona su Windows, macOS e Linux. Qualsiasi sistema operativo con Java JDK 11 o superiore è compatibile.",
    en: "Yes. Being a Java application, J-HarmoniX works on Windows, macOS and Linux. Any operating system with Java JDK 11 or higher is compatible.",
  },
  faq_q5: {
    it: "Cos'è una progressione armonica jazz?",
    en: "What is a jazz harmonic progression?",
  },
  faq_a5: {
    it: "Una progressione armonica jazz è una sequenza di accordi che segue le convenzioni dell'armonia jazz: accordi di settima, nona, undicesima e tredicesima, sostituzioni tritono e modulazioni di tonalità. J-HarmoniX automatizza queste regole teoriche per generare progressioni pronte all'uso.",
    en: "A jazz harmonic progression is a sequence of chords following jazz harmony conventions: seventh, ninth, eleventh and thirteenth chords, tritone substitutions and key modulations. J-HarmoniX automates these theoretical rules to generate ready-to-use progressions.",
  },
  faq_q6: {
    it: "J-HarmoniX è gratuito? Ha un piano a pagamento?",
    en: "Is J-HarmoniX free? Is there a paid plan?",
  },
  faq_a6: {
    it: "J-HarmoniX è completamente gratuito, open source con licenza MIT. Non esistono piani a pagamento, abbonamenti o funzioni premium. Tutto il codice è disponibile su GitHub.",
    en: "J-HarmoniX is completely free, open source under the MIT license. There are no paid plans, subscriptions or premium features. All code is available on GitHub.",
  },
} as const;

export type TranslationKey = keyof typeof translations;
