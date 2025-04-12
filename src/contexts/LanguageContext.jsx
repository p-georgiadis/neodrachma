import React, { createContext, useState, useEffect, useContext } from 'react';

// Create language context
export const LanguageContext = createContext();

// Create language provider component
export const LanguageProvider = ({ children }) => {
  // Check localStorage for saved language preference, default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('neodrachma-language');
    return savedLanguage || 'en';
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('neodrachma-language', language);
    // Apply data attributes to the html element for global CSS targeting
    document.documentElement.setAttribute('data-language', language);
    // Also set the standard HTML lang attribute for proper language specification
    document.documentElement.setAttribute('lang', language === 'en' ? 'en' : 'el');
  }, [language]);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'gr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);
