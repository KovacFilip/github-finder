import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import cs from "./i18n/cs";
import en from "./i18n/en";

i18n.use(initReactI18next).init({
    resources: { cs, en },
    lng: "cs",
    fallbackLng: "en",
});

export default i18n;
