import { motion } from "framer-motion";

const parameters = [
  {
    name: "--tonic",
    description: "Nota di partenza",
    values: "C, C#, Db, D, ... B",
    default: "C",
  },
  {
    name: "--scale",
    description: "Tipo di scala",
    values: "MAJOR, DORIAN, LYDIAN, BLUES...",
    default: "MAJOR",
  },
  {
    name: "--style",
    description: "Stile armonico",
    values: "SIMPLE, POP, JAZZ_STANDARD, JAZZ_MODERN",
    default: "JAZZ_STANDARD",
  },
  {
    name: "--complexity",
    description: "Complessità degli accordi",
    values: "TRIADS, SEVENTH_CHORDS, NINTHS, FULL_EXTENSIONS",
    default: "SEVENTH_CHORDS",
  },
  {
    name: "--modulation",
    description: "Frequenza di modulazione",
    values: "NONE, LOW, MEDIUM, HIGH",
    default: "MEDIUM",
  },
  {
    name: "--form",
    description: "Struttura della canzone",
    values: "AABA, verse-chorus, free-form...",
    default: "AABA",
  },
];

const ParametersSection = () => (
  <section className="py-24 px-6 bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-foreground mb-4">
          Parametri <span className="text-gradient-gold">configurabili</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Ogni aspetto della progressione è sotto il tuo controllo.
        </p>
      </motion.div>
      <div className="grid gap-4">
        {parameters.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-gradient-card rounded-xl p-5 border border-gold-subtle flex flex-col md:flex-row md:items-center gap-4"
          >
            <code className="text-primary font-mono font-semibold text-sm min-w-[140px]">{p.name}</code>
            <div className="flex-1">
              <p className="text-foreground font-medium text-sm">{p.description}</p>
              <p className="text-muted-foreground text-xs mt-1">{p.values}</p>
            </div>
            <span className="text-xs font-mono bg-secondary px-3 py-1 rounded-md text-muted-foreground whitespace-nowrap">
              default: {p.default}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ParametersSection;
