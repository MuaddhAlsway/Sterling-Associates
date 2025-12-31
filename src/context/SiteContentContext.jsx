import React, { createContext, useContext, useEffect, useState } from "react";
import { useContext as useReactContext } from "react";
import en from "../translations/en.json";
import ar from "../translations/ar.json";
import { LanguageContext } from "./LanguageContext";

const SiteContentContext = createContext();
export const useSiteContent = () => useContext(SiteContentContext);

export function SiteContentProvider({ children }) {
  const { language } = useReactContext(LanguageContext);

  const initial = () => {
    try {
      const raw = localStorage.getItem("site_content");
      if (raw) {
        const parsed = JSON.parse(raw);
        // Migration: if stored content is legacy (no en/ar keys), treat it as en
        if (parsed && (parsed.en || parsed.ar)) return parsed;
        return {
          en: parsed,
          ar: {
            nav: ar.nav,
            header: ar.header || { title: "Sterling & Associates" },
            hero: ar.hero,
            footer: ar.footer,
          },
        };
      }
    } catch (e) {}

    return {
      en: {
        nav: en.nav,
        header: en.header || { title: "Sterling & Associates" },
        hero: en.hero,
        footer: en.footer,
        contact: en.contact,
      },
      ar: {
        nav: ar.nav,
        header: ar.header || {
          title: en.header?.title || "Sterling & Associates",
        },
        hero: ar.hero,
        footer: ar.footer,
        contact: ar.contact,
      },
    };
  };

  const [content, setContent] = useState(initial);

  // Option to use static (original) content per-language
  const [useStaticMap, setUseStaticMap] = useState(() => {
    try {
      const raw = localStorage.getItem("site_content_use_static");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("site_content", JSON.stringify(content));
    } catch (e) {}
  }, [content]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "site_content_use_static",
        JSON.stringify(useStaticMap)
      );
    } catch (e) {}
  }, [useStaticMap]);

  // update content for current language
  const updateContent = (path, value) => {
    setContent((s) => {
      const copy = JSON.parse(JSON.stringify(s));
      const keys = path.split(".");
      let cur = copy[language];
      while (keys.length > 1) {
        cur = cur[keys.shift()];
      }
      cur[keys[0]] = value;
      return copy;
    });
  };

  const resetSection = (section) => {
    setContent((s) => ({
      ...s,
      [language]: {
        ...s[language],
        [section]: language === "ar" ? ar[section] : en[section],
      },
    }));
  };

  const resetAll = () => {
    setContent((s) => ({
      ...s,
      [language]:
        language === "ar"
          ? {
              nav: ar.nav,
              header: ar.header || {
                title: en.header?.title || "Sterling & Associates",
              },
              hero: ar.hero,
              footer: ar.footer,
              contact: ar.contact,
            }
          : {
              nav: en.nav,
              header: en.header || { title: "Sterling & Associates" },
              hero: en.hero,
              footer: en.footer,
              contact: en.contact,
            },
    }));
  };

  // useStatic getter/setter operate for current language
  const useStatic = !!useStaticMap[language];
  const setUseStatic = (val) =>
    setUseStaticMap((s) => ({ ...s, [language]: !!val }));

  const exposedContent = useStatic
    ? language === "ar"
      ? {
          nav: ar.nav,
          header: ar.header || {
            title: en.header?.title || "Sterling & Associates",
          },
          hero: ar.hero,
          footer: ar.footer,
          contact: ar.contact,
        }
      : {
          nav: en.nav,
          header: en.header || { title: "Sterling & Associates" },
          hero: en.hero,
          footer: en.footer,
          contact: en.contact,
        }
    : content[language];

  return (
    <SiteContentContext.Provider
      value={{
        content: exposedContent,
        updateContent,
        useStatic,
        setUseStatic,
        resetSection,
        resetAll,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export default SiteContentContext;
