import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { UI_COPY } from '../data/siteData';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { ConsoleBracesSvg } from './ConsoleEmblem';
import { WhatsAppIcon } from './Icons';

export function Navbar() {
  const { lang, toggleLang, currentPath, navigate } = useApp();
  const t = UI_COPY[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const primaryLinks = [
    { label: t.home, path: '/' },
    { label: t.about, path: '/about' },
    { label: t.services, path: '/services' },
    { label: t.industries, path: '/industries' },
    { label: t.contact, path: '/contact' },
  ];

  const mobileExtraLinks = [
    { label: t.process, path: '/process' },
    { label: t.technology, path: '/technology' },
    { label: t.faq, path: '/faq' },
    { label: t.quote, path: '/quote' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const whatsappUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-white/15'
          : 'bg-black border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Zone */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="inline-flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 group focus-visible:outline-white"
        >
          <ConsoleBracesSvg className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-105" glow />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Console
          </span>
        </a>

        {/* Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {primaryLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
                className={`relative py-5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  active ? 'text-white' : 'text-[#888888] hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-white"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            className="h-9 px-3 border border-white/20 bg-black text-xs font-medium text-[#C7C7C7] hover:text-white hover:border-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-3.5 border border-white/20 bg-black text-xs font-medium text-white hover:border-white hover:bg-[#111111] transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            <span>{t.whatsapp}</span>
          </a>

          <button
            type="button"
            onClick={() => handleNavClick('/quote')}
            className="h-9 px-4 bg-white text-black text-xs font-semibold tracking-wide hover:bg-[#E5E5E5] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.startProject}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            className="h-10 px-3 border border-white/20 bg-black text-xs font-medium text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.close : t.menu}
            className="h-10 w-10 border border-white/20 bg-black text-white inline-flex items-center justify-center cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/15 bg-black px-4 py-6 max-h-[82vh] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-white/10">
            {[...primaryLinks, ...mobileExtraLinks].map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`py-3.5 text-base font-medium flex items-center justify-between ${
                    active ? 'text-white' : 'text-[#C7C7C7]'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-2 h-2 bg-white" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('/quote')}
              className="h-11 px-4 bg-white text-black text-sm font-semibold text-center cursor-pointer"
            >
              {t.startProject}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-4 border border-white/25 bg-[#0A0A0A] text-white text-sm font-medium inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
