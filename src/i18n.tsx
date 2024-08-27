import { createContext, useContext, useState, ReactNode } from "react";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export interface Translations {
  [key: string]: string;
}

export interface LanguageData {
  en: Translations;
  ru: Translations;
}

const translations: LanguageData = {
  en: en as Translations,
  ru: ru as Translations,
};

interface LanguageContextProps {
  currentLanguage: keyof LanguageData;
  setLanguage: (language: keyof LanguageData) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: "en",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<keyof LanguageData>(
    (localStorage.getItem("language") as keyof LanguageData) || "en"
  );

  const setLanguage = (language: keyof LanguageData) => {
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export const translate = (key: string): string => {
  const { currentLanguage } = useLanguage();
  return translations[currentLanguage][key] || key || "Missing translation";
};
