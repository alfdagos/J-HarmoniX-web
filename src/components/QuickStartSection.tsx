import { motion } from "framer-motion";
import { Terminal, Download, Play, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/i18n/useLocale";

const firstCommand = "generate --tonic C --scale MAJOR --form AABA --style JAZZ_STANDARD";

const CopyButton = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-terminal-green" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

const QuickStartSection = () => {
  const { t } = useLocale();

  const steps = [
    {
      icon: Download,
      title: t("qs_step1"),
      command: "git clone https://github.com/alfdagos/J-Harmonix.git\ncd J-Harmonix",
    },
    {
      icon: Terminal,
      title: t("qs_step2"),
      command: "mvn clean install -DskipTests",
    },
    {
      icon: Play,
      title: t("qs_step3"),
      command: "java -jar j-harmonix-cli/target/j-harmonix-cli-0.1.0-SNAPSHOT.jar",
    },
  ];

  return (
    <section id="quickstart" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">{t("qs_label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Quick Start
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-xl border border-gold-subtle bg-secondary/40 p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <step.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">{step.title}</h3>
              </div>
              <div className="relative">
                <pre className="bg-terminal-bg rounded-lg p-4 pr-12 font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  {step.command}
                </pre>
                <CopyButton text={step.command} label={t("qs_copy_label")} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-2">{t("qs_first_title")}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t("qs_first_desc")}
            {" "}(<code className="text-primary font-mono">shell:&gt;</code>)
          </p>
          <div className="relative">
            <pre className="bg-terminal-bg rounded-lg p-4 pr-12 font-mono text-sm text-terminal-green overflow-x-auto">
              {firstCommand}
            </pre>
            <CopyButton text={firstCommand} label={t("qs_copy_label")} />
          </div>
          <p className="text-xs text-muted-foreground mt-3" dangerouslySetInnerHTML={{ __html: t("qs_first_hint") }} />
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStartSection;
