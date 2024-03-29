import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from "./assets/Translation/English/translation.json";
import translationSpanish from "./assets/Translation/Spanish/translation.json";

const resources = {
    en: {
        translation: translationEnglish
    },
    es: {
        translation: translationSpanish
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
    });

export default i18next;