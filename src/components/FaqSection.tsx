import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/i18n/useLocale";

const FaqSection = () => {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
    { q: t("faq_q6"), a: t("faq_a6") },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            {t("faq_label")}
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            {t("faq_title_pre")}
            <span className="text-gradient-gold">{t("faq_title_highlight")}</span>
          </h2>
        </motion.div>

        {/* FAQ list – visibile ai crawler come dl/dt/dd */}
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-gradient-card rounded-xl border border-gold-subtle overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-foreground font-semibold font-display hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden m-0"
                  >
                    <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FaqSection;
