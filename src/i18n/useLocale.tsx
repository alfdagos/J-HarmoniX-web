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
