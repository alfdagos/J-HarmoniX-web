import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";

const KeyTakeaways = () => {
  const { t } = useLocale();

  const points = [
    t("kt_1"),
    t("kt_2"),
    t("kt_3"),
    t("kt_4"),
    t("kt_5"),
  ];

  return (
    <aside
      aria-label={t("kt_title")}
      className="max-w-3xl mx-auto px-6 py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-card border border-gold-subtle rounded-xl p-6"
      >
        <h2 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="text-gradient-gold">✦</span>
          {t("kt_title")}
        </h2>
        <ul className="space-y-2.5" role="list">
          {points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
            >
              <CheckCircle2
                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
};

export default KeyTakeaways;
