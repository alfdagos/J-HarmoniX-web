import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";
import TerminalDemo from "@/components/TerminalDemo";
import FeaturesSection from "@/components/FeaturesSection";
import ParametersSection from "@/components/ParametersSection";
import ExamplesSection from "@/components/ExamplesSection";
import Footer from "@/components/Footer";

const GITHUB_URL = "https://github.com/alfdagos/J-Harmonix";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="font-display font-bold text-lg text-foreground">
          J-Harmon<span className="text-gradient-gold">iX</span>
        </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
          <Star className="w-3.5 h-3.5 text-primary" />
        </a>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">
              Jazz Harmony Generator
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6 leading-tight">
              J-Harmon<span className="text-gradient-gold">iX</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Genera progressioni armoniche jazz dalla riga di comando.
              <br className="hidden md:block" />
              15 scale, 4 stili, complessità regolabile e modulazioni avanzate.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity mb-12"
            >
              <Github className="w-4 h-4" />
              Scarica da GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TerminalDemo />
          </motion.div>
        </div>
      </section>

      <FeaturesSection />
      <ParametersSection />
      <ExamplesSection />
      <Footer />
    </div>
  );
};

export default Index;
