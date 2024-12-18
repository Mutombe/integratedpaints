// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const LanguageContext = createContext();

const translations = {
  en: {
    navigation: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Transform Your Space with Professional Excellence',
        subtitle: 'Quality Painting & Construction Services',
        cta: 'Get Free Quote',
      },
      // ... more translations
    },
    // ... more sections
  },
  sn: {
    navigation: {
      home: 'Kumba',
      services: 'Mabasa',
      projects: 'Zvakazopera',
      about: 'Nezvedu',
      contact: 'Tikwanise Kutaura',
    },
    home: {
      hero: {
        title: 'Shandura Nzvimbo Yako Nevatsingi Vakanaka',
        subtitle: 'Basa Rakanaka Rokupenda Nokuvaka',
        cta: 'Wana Mutengo Mahara',
      },
      // ... more translations
    },
  },
  nd: {
    navigation: {
      home: 'Ikhaya',
      services: 'Inkonzo',
      projects: 'Imisebenzi',
      about: 'Ngathi',
      contact: 'Thinta',
    },
    home: {
      hero: {
        title: 'Guqula Indawo Yakho Ngobungcweti',
        subtitle: 'Ukupenda Lokwakha Okuleqophelo',
        cta: 'Thola Intengo Mahala',
      },
      // ... more translations
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources: Object.keys(translations).reduce((acc, lang) => {
      acc[lang] = { translation: translations[lang] };
      return acc;
    }, {}),
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}