import { useState, useEffect } from 'react';
import { translations, type Translation } from '@/lib/translations';

export type Language = 'en' | 'uk';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'uk' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t: Translation = translations[language];

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return {
    language,
    setLanguage: switchLanguage,
    t,
  };
}
