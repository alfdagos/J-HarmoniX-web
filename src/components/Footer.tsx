import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            {t("footer_title_pre")}<span className="text-gradient-gold">{t("footer_title_highlight")}</span>{t("footer_title_end")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t("footer_desc")}
          </p>
          <a
            href="https://github.com/alfdagos/J-Harmonix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            {t("footer_cta")}
          </a>
          <p className="mt-12 text-muted-foreground text-sm">
            <span className="text-gradient-gold font-display font-bold">J-HarmoniX</span> {t("footer_tagline")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
