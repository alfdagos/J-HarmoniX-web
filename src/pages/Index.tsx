import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, Globe, Menu, X } from "lucide-react";
import TerminalDemo from "@/components/TerminalDemo";
import FeaturesSection from "@/components/FeaturesSection";
import QuickStartSection from "@/components/QuickStartSection";
import ParametersSection from "@/components/ParametersSection";
import ExamplesSection from "@/components/ExamplesSection";
import Footer from "@/components/Footer";
import { useLocale } from "@/i18n/useLocale";

const GITHUB_URL = "https://github.com/alfdagos/J-Harmonix";

const Index = () => {
  const { locale, setLocale, t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t("nav_features"), id: "features" },
    { label: t("nav_quickstart"), id: "quickstart" },
    { label: t("nav_parameters"), id: "parametri" },
    { label: t("nav_examples"), id: "esempi" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="flex items-center justify-between px-6 py-3 max-w-5xl mx-auto">
          <a href="#" className="font-display font-bold text-lg text-foreground shrink-0">
            J-Harmon<span className="text-gradient-gold">iX</span>
          </a>
           <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "it" ? "en" : "it")}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border/50 hover:border-border"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              {locale === "it" ? "EN" : "IT"}
            </button>
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
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="flex flex-col gap-1 px-6 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setLocale(locale === "it" ? "en" : "it");
                    setMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-fit"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {locale === "it" ? "English" : "Italiano"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
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
              {t("hero_subtitle")}
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6 leading-tight">
              J-Harmon<span className="text-gradient-gold">iX</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("hero_desc")}
              <br className="hidden md:block" />
              {t("hero_desc2")}
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity mb-12"
            >
              <Github className="w-4 h-4" />
              {t("hero_cta")}
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
      <QuickStartSection />
      <ParametersSection />
      <ExamplesSection />
      <Footer />
    </div>
  );
};

export default Index;
