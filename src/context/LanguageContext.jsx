import { createContext, useState, useEffect } from 'react'
import en from '../translations/en.json'
import ar from '../translations/ar.json'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Load from localStorage or default to 'en'
    return localStorage.getItem('language') || 'en'
  })

  const translations = language === 'en' ? en : ar

  // Update localStorage and document direction when language changes
  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}
