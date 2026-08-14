"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PortfolioLanguage = "en" | "de";

type PortfolioLanguageContextValue = {
  language: PortfolioLanguage;
  setLanguage: (language: PortfolioLanguage) => void;
};

const PortfolioLanguageContext =
  createContext<PortfolioLanguageContextValue | null>(null);

export function PortfolioLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<PortfolioLanguage>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "de" || saved === "en") setLanguageState(saved);
  }, []);

  const setLanguage = (nextLanguage: PortfolioLanguage) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <PortfolioLanguageContext.Provider value={value}>
      {children}
    </PortfolioLanguageContext.Provider>
  );
}

export function usePortfolioLanguage() {
  const context = useContext(PortfolioLanguageContext);
  if (!context) {
    throw new Error("usePortfolioLanguage must be used inside PortfolioLanguageProvider");
  }
  return context;
}
