import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Footer = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Pronto a <span className="text-gradient-gold">sperimentare</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          J-HarmoniX è open source. Scarica, esplora e crea progressioni armoniche uniche.
        </p>
        <a
          href="https://github.com/alfdagos/J-Harmonix"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          <Github className="w-5 h-5" />
          Vedi su GitHub
        </a>
        <p className="mt-12 text-muted-foreground text-sm">
          <span className="text-gradient-gold font-display font-bold">J-HarmoniX</span> — Bringing jazz harmony to your fingertips 🎵
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
