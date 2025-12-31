// src/hooks/useTranslation.js
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }

  const { translations, language, setLanguage } = context;

  // Return a stable shape expected by consumers: { t, language, setLanguage }
  return { t: translations, language, setLanguage };
}
