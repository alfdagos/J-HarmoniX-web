import { motion } from "framer-motion";
import { useLocale } from "@/i18n/useLocale";

const ExamplesSection = () => {
  const { t } = useLocale();

  const examples = [
    { titleKey: "ex_traditional" as const, era: "1920s–1940s", command: "generate --tonic Bb --scale MAJOR --form AABA --style JAZZ_STANDARD --complexity SEVENTH_CHORDS --modulation LOW" },
    { titleKey: "ex_bebop" as const, era: "1940s–1950s", command: "generate --tonic F --scale MAJOR --form AABA --style JAZZ_STANDARD --complexity SEVENTH_CHORDS --modulation MEDIUM" },
    { titleKey: "ex_modal" as const, era: "Miles Davis Style", command: "generate --tonic D --scale DORIAN --form ABCD --style JAZZ_MODERN --complexity NINTHS --modulation NONE" },
    { titleKey: "ex_fusion" as const, era: "Herbie Hancock Style", command: "generate --tonic C --scale MELODIC_MINOR --form verse-solo-chorus --style JAZZ_MODERN --complexity FULL_EXTENSIONS --modulation HIGH" },
    { titleKey: "ex_bossa" as const, era: "Brazilian Jazz", command: "generate --tonic F --scale MAJOR --form verse-chorus-verse-chorus --style JAZZ_STANDARD --complexity SEVENTH_CHORDS --modulation MEDIUM" },
    { titleKey: "ex_avantgarde" as const, era: "Experimental", command: "generate --tonic C --scale WHOLE_TONE --form free-form --style JAZZ_MODERN --complexity FULL_EXTENSIONS --modulation HIGH" },
  ];

  return (
    <section id="esempi" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            {t("examples_title_pre")}<span className="text-gradient-gold">{t("examples_title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t("examples_subtitle")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gradient-card rounded-xl border border-gold-subtle overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <h3 className="text-lg font-display font-bold text-foreground">{t(ex.titleKey)}</h3>
                <span className="text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-full">
                  {ex.era}
                </span>
              </div>
              <div className="px-5 pb-5">
                <pre className="bg-terminal-bg rounded-lg p-3 text-xs font-mono text-terminal-green overflow-x-auto">
                  <span className="text-primary">$</span> {ex.command}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
