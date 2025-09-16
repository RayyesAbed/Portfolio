const detectComputerLanguage = () => {
  let computerLanguage = navigator.language.split("-")[0];

  if (computerLanguage !== "en" && computerLanguage !== "de") {
    return "en"; // make the default language english
  }

  return computerLanguage;
};

export default detectComputerLanguage;
