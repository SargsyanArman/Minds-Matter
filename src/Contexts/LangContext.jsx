import { createContext, useState } from "react";
import en_resources from "../translations/en_translations.json";
import ru_resources from "../translations/ru_translations.json";
import am_resources from "../translations/am_translations.json";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({ resources: {...en_resources, ...ru_resources, ...am_resources}, fallbackLng: "en" });

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [langMenu, setLangMenu] = useState(null);

  const { t, i18n } = useTranslation();

  const handleLangMenuClick = (event) => {
    setLangMenu(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangMenu(null);
  };

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <LangContext.Provider
      value={{
        langMenu,
        t,
        i18n,
        handleLangMenuClick,
        handleLangMenuClose,
        changeLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
