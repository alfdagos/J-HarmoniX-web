import { motion } from "framer-motion";
import { useLocale } from "@/i18n/useLocale";

const ParametersSection = () => {
  const { t } = useLocale();

  const parameters = [
    { name: "--tonic", description: t("param_tonic"), values: "C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, Ab, A, Bb, B", default: "C" },
    { name: "--scale", description: t("param_scale"), values: "MAJOR, DORIAN, PHRYGIAN, LYDIAN, MIXOLYDIAN, AEOLIAN, LOCRIAN, MELODIC_MINOR, HARMONIC_MINOR, PENTATONIC_MAJOR, PENTATONIC_MINOR, BLUES, WHOLE_TONE, DIMINISHED", default: "MAJOR" },
    { name: "--style", description: t("param_style"), values: "SIMPLE, POP, JAZZ_STANDARD, JAZZ_MODERN", default: "JAZZ_STANDARD" },
    { name: "--complexity", description: t("param_complexity"), values: "TRIADS, SEVENTH_CHORDS, NINTHS, FULL_EXTENSIONS", default: "SEVENTH_CHORDS" },
    { name: "--modulation", description: t("param_modulation"), values: "NONE, LOW, MEDIUM, HIGH", default: "MEDIUM" },
    { name: "--form", description: t("param_form"), values: "AABA, ABAB, ABCD, verse-chorus, verse-solo-chorus, free-form", default: "AABA" },
  ];

  return (
    <section id="parametri" aria-labelledby="params-heading" className="py-24 px-6 bg-secondary/30 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="params-heading" className="text-4xl font-display font-bold text-foreground mb-4">
            {t("params_title_pre")}<span className="text-gradient-gold">{t("params_title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t("params_subtitle")}
          </p>
        </motion.div>

        {/* Tabella semantica – ottimizzata per Featured Snippet Google */}
        <div className="overflow-x-auto rounded-xl border border-gold-subtle">
          <table className="w-full text-sm" aria-label="Parametri CLI di J-HarmoniX">
            <thead>
              <tr className="bg-secondary/60 border-b border-gold-subtle text-left">
                <th scope="col" className="px-5 py-3 font-semibold text-foreground font-mono text-xs uppercase tracking-wider">
                  Parametro
                </th>
                <th scope="col" className="px-5 py-3 font-semibold text-foreground font-mono text-xs uppercase tracking-wider hidden md:table-cell">
                  Descrizione
                </th>
                <th scope="col" className="px-5 py-3 font-semibold text-foreground font-mono text-xs uppercase tracking-wider hidden lg:table-cell">
                  Valori
                </th>
                <th scope="col" className="px-5 py-3 font-semibold text-foreground font-mono text-xs uppercase tracking-wider">
                  Default
                </th>
              </tr>
            </thead>
            <tbody>
              {parameters.map((p, i) => (
                <motion.tr
                  key={p.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border-b border-border/40 last:border-0 bg-gradient-card hover:bg-secondary/40 transition-colors"
                >
                  <td className="px-5 py-4">
                    <code className="text-primary font-mono font-semibold text-sm">{p.name}</code>
                    <p className="text-muted-foreground text-xs mt-1 md:hidden">{p.description}</p>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <p className="text-foreground font-medium text-sm">{p.description}</p>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <p className="text-muted-foreground text-xs font-mono leading-relaxed">{p.values}</p>
                  </td>
                  <td className="px-5 py-4">
                    <code className="text-xs font-mono bg-secondary px-2.5 py-1 rounded-md text-muted-foreground whitespace-nowrap">
                      {p.default}
                    </code>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ParametersSection;
