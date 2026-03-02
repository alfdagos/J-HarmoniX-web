import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations, TranslationKey } from "./translations";

function detectLocale(): Locale {
  const lang = navigator.language || "en";
  return lang.startsWith("it") ? "it" : "en";
}

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(detectLocale);

  /**
   * SEO: aggiorna <html lang="..."> dinamicamente al cambio lingua.
   * Questo migliora l'accessibilità e i segnali semantici per i crawler.
   */
  useEffect(() => {
    document.documentElement.lang = locale;
    // Aggiorna il meta og:locale dinamicamente
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", locale === "it" ? "it_IT" : "en_US");
    }
  }, [locale]);

  const t = (key: TranslationKey) => translations[key][locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
};

