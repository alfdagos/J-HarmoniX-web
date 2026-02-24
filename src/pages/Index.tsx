import { motion } from "framer-motion";
import TerminalDemo from "@/components/TerminalDemo";
import FeaturesSection from "@/components/FeaturesSection";
import ParametersSection from "@/components/ParametersSection";
import ExamplesSection from "@/components/ExamplesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Genera progressioni armoniche jazz dalla riga di comando.
              <br className="hidden md:block" />
              15 scale, 4 stili, complessità regolabile e modulazioni avanzate.
            </p>
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
