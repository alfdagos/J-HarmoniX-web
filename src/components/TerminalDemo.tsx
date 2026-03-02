import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  { prompt: "J-HarmoniX:> ", command: "generate --tonic Eb --scale MAJOR --form AABA --style JAZZ_MODERN", delay: 60 },
];

const output = `
  ┌─────────────────────────────────────────┐
  │  Key: Eb Major  │  Style: Jazz Modern   │
  │  Form: AABA     │  Complexity: 7ths     │
  ├─────────────────────────────────────────┤
  │  A: EbMaj7  │ Cm9    │ Fm9   │ Bb13    │
  │  A: EbMaj7  │ AbMaj7 │ Dm7b5 │ G7alt   │
  │  B: AmMaj7  │ D7#11  │ GbMaj7│ B7alt   │
  │  A: EbMaj7  │ Cm9    │ Fm9   │ Bb13    │
  └─────────────────────────────────────────┘`;

const TerminalDemo = () => {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cmd = commands[0];
    let i = 0;
    const interval = setInterval(() => {
      if (i <= cmd.command.length) {
        setDisplayedCommand(cmd.command.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 400);
      }
    }, cmd.delay);

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden terminal-shadow border border-gold-subtle">
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-primary/80" />
        <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">j-harmonix-cli</span>
      </div>
      <div className="bg-terminal-bg p-5 font-mono text-sm leading-relaxed min-h-[280px]">
        <div className="flex">
          <span className="text-primary mr-2 whitespace-nowrap">J-HarmoniX:&gt;</span>
          <span className="text-terminal-green">{displayedCommand}</span>
          {!showOutput && (
            <span className={`text-primary ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>▌</span>
          )}
        </div>
        {showOutput && (
          <motion.pre
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-foreground/80 mt-3 text-xs whitespace-pre"
          >
            {output}
          </motion.pre>
        )}
      </div>
    </div>
  );
};

export default TerminalDemo;
