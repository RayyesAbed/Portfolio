import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";
import { useEffect } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("savedLanguage", event.target.value);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("savedLanguage");

    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n.language]);

  return (
    <select
      name="language"
      id="language-selector"
      value={i18n.language}
      onChange={handleChangeLanguage}
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

export default LanguageSelector;
