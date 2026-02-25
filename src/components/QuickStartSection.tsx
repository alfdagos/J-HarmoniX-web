import { motion } from "framer-motion";
import { Terminal, Download, Play, Copy, Check } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Download,
    title: "1. Clona il repository",
    command: "git clone https://github.com/alfdagos/J-Harmonix.git\ncd J-Harmonix",
  },
  {
    icon: Terminal,
    title: "2. Compila il progetto",
    command: "mvn clean install -DskipTests",
  },
  {
    icon: Play,
    title: "3. Avvia la CLI",
    command: "java -jar j-harmonix-cli/target/j-harmonix-cli-0.1.0-SNAPSHOT.jar",
  },
];

const firstCommand = "generate --tonic C --scale MAJOR --form AABA --style JAZZ_STANDARD";

const CopyButton = ({ text }: { text: string }) => {
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
      aria-label="Copia comando"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-terminal-green" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

const QuickStartSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Inizia Subito</p>
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
                <CopyButton text={step.command} />
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
          <h3 className="font-display font-semibold text-foreground mb-2">🎹 La tua prima progressione</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Una volta avviata la shell (<code className="text-primary font-mono">shell:&gt;</code>), genera la tua prima progressione jazz:
          </p>
          <div className="relative">
            <pre className="bg-terminal-bg rounded-lg p-4 pr-12 font-mono text-sm text-terminal-green overflow-x-auto">
              {firstCommand}
            </pre>
            <CopyButton text={firstCommand} />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Usa <code className="text-primary font-mono">scales</code> e <code className="text-primary font-mono">styles</code> per esplorare tutte le opzioni disponibili.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStartSection;
