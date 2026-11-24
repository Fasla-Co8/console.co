import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Language } from '../utils/whatsapp';

interface AppContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  currentPath: string;
  currentSearch: string;
  navigate: (path: string) => void;
}

const STORAGE_KEY = 'console_lang';

const AppContext = createContext<AppContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ar' || saved === 'en') {
      return saved;
    }
  } catch {
    // ignore storage access issues
  }
  return 'en';
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '') return '/';
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );
  const [currentSearch, setCurrentSearch] = useState<string>(() => window.location.search);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage write issues
    }
  }, [lang]);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      setCurrentSearch(window.location.search);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const navigate = useCallback((targetPath: string) => {
    const [withoutHash, hashPart] = targetPath.split('#');
    const [rawPath, rawQuery] = (withoutHash || '/').split('?');
    const normalized = normalizePath(rawPath || '/');
    const search = rawQuery ? `?${rawQuery}` : '';
    const fullTarget = `${normalized}${search}${hashPart ? `#${hashPart}` : ''}`;

    if (
      normalizePath(window.location.pathname) !== normalized ||
      window.location.search !== search ||
      hashPart
    ) {
      window.history.pushState({}, '', fullTarget);
      setCurrentPath(normalized);
      setCurrentSearch(search);
    }

    if (hashPart) {
      window.requestAnimationFrame(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ lang, setLang, toggleLang, currentPath, currentSearch, navigate }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
}
