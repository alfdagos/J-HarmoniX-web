import { motion } from "framer-motion";
import { Music, Sliders, Shuffle, Layers, Terminal, Sparkles } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "15 Scale Supportate",
    description: "Da maggiore a diminuita, passando per modi, pentatoniche e blues.",
  },
  {
    icon: Sliders,
    title: "4 Stili Armonici",
    description: "Simple, Pop, Jazz Standard e Jazz Modern con sostituzioni avanzate.",
  },
  {
    icon: Layers,
    title: "4 Livelli di Complessità",
    description: "Da triadi semplici a estensioni complete con none, undicesime e tredicesime.",
  },
  {
    icon: Shuffle,
    title: "Modulazioni Controllate",
    description: "Da nessuna modulazione a cambi di tonalità frequenti e cromatici.",
  },
  {
    icon: Terminal,
    title: "CLI Interattiva",
    description: "Shell intuitiva con autocompletamento, cronologia e help inline.",
  },
  {
    icon: Sparkles,
    title: "Combinazioni Infinite",
    description: "Sperimenta liberamente con parametri per progressioni sempre uniche.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section id="features" className="py-24 px-6 scroll-mt-16">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-foreground mb-4">
          Tutto ciò che serve per l'<span className="text-gradient-gold">armonia jazz</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Un generatore potente e flessibile, progettato per musicisti e compositori.
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="bg-gradient-card rounded-xl p-6 border border-gold-subtle hover:glow-gold transition-shadow duration-500"
          >
            <f.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2 font-display">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
