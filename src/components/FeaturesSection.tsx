import { motion } from "framer-motion";
import { Music, Sliders, Shuffle, Layers, Terminal, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";

const FeaturesSection = () => {
  const { t } = useLocale();

  const features = [
    { icon: Music, title: t("feat_scales"), description: t("feat_scales_desc") },
    { icon: Sliders, title: t("feat_styles"), description: t("feat_styles_desc") },
    { icon: Layers, title: t("feat_complexity"), description: t("feat_complexity_desc") },
    { icon: Shuffle, title: t("feat_modulations"), description: t("feat_modulations_desc") },
    { icon: Terminal, title: t("feat_cli"), description: t("feat_cli_desc") },
    { icon: Sparkles, title: t("feat_infinite"), description: t("feat_infinite_desc") },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            {t("features_title_pre")}<span className="text-gradient-gold">{t("features_title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t("features_subtitle")}
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-gradient-card rounded-xl p-6 border border-gold-subtle hover:glow-gold transition-shadow duration-500"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 font-display">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
