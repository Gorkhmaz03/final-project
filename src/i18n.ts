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

let currentLanguage: keyof LanguageData =
  (localStorage.getItem("language") as keyof LanguageData) || "en";

export const setLanguage = (language: keyof LanguageData) => {
  currentLanguage = language;
  localStorage.setItem("language", language);
  window.location.reload();
};

export const translate = (key: string): string => {
  return translations[currentLanguage][key] || key;
};
