import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";

const GITHUB_URL = "https://github.com/alfdagos/J-Harmonix";
const GITHUB_USER_URL = "https://github.com/alfdagos";

const Footer = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Piè di pagina J-HarmoniX"
      className="py-16 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            {t("footer_title_pre")}
            <span className="text-gradient-gold">{t("footer_title_highlight")}</span>
            {t("footer_title_end")}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {t("footer_desc")}
          </p>

          {/* Badge open source + licenza */}
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-mono">
              ✦ {t("footer_open_source")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs bg-secondary text-muted-foreground border border-border px-3 py-1 rounded-full font-mono">
              {t("footer_license")}
            </span>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visualizza J-HarmoniX su GitHub – repository open source"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            {t("footer_cta")}
          </a>

          <p className="mt-10 text-muted-foreground text-sm">
            {t("footer_built_with")}
          </p>

          <nav
            aria-label="Link utili"
            className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground flex-wrap"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Repository
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`${GITHUB_URL}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Releases
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Issues
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={GITHUB_USER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              @alfdagos
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </nav>

          <p className="mt-8 text-muted-foreground/60 text-xs">
            <span className="text-gradient-gold font-display font-bold">J-HarmoniX</span>{" "}
            {t("footer_tagline")}
          </p>
          <p className="mt-2 text-muted-foreground/40 text-xs">
            © {currentYear}{" "}
            <a
              href={GITHUB_USER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground/70 transition-colors"
            >
              alfdagos
            </a>
            . Open source MIT License.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
