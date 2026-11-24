import React from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/services';
import { UI_COPY } from '../data/siteData';
import {
  WHATSAPP_DISPLAY_NUMBER,
  buildWhatsAppUrl,
  getGeneralWhatsAppMessage,
} from '../utils/whatsapp';
import { ConsoleBracesSvg } from './ConsoleEmblem';
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from './Icons';

export function Footer() {
  const { lang, navigate } = useApp();
  const t = UI_COPY[lang];
  const whatsappUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  const mainNav = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.industries, path: '/industries' },
    { label: t.nav.process, path: '/process' },
  ];

  const companyLinks = [
    { label: t.nav.technology, path: '/technology' },
    { label: t.nav.faq, path: '/faq' },
    { label: t.nav.quote, path: '/quote' },
    { label: t.nav.contact, path: '/contact' },
    { label: t.footer.privacy, path: '/privacy' },
    { label: t.footer.terms, path: '/terms' },
  ];

  const socialBadges = [
    { name: 'Facebook', Icon: FacebookIcon },
    { name: 'Instagram', Icon: InstagramIcon },
    { name: 'LinkedIn', Icon: LinkedInIcon },
    { name: 'X', Icon: XIcon },
    { name: 'YouTube', Icon: YouTubeIcon },
    { name: 'TikTok', Icon: TikTokIcon },
    { name: 'GitHub', Icon: GitHubIcon },
  ];

  return (
    <footer className="w-full bg-black border-t border-white/15 text-[#C7C7C7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="inline-flex items-center gap-3 text-white"
            >
              <ConsoleBracesSvg className="w-8 h-8 text-white" glow />
              <div>
                <div className="font-display text-xl font-bold text-white leading-none">
                  Console
                </div>
                <div className="text-xs text-[#888888] mt-1">
                  {t.hero.tagline}
                </div>
              </div>
            </a>

            <p className="text-sm text-[#888888] leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {socialBadges.map(({ name, Icon }) => (
                  <span
                    key={name}
                    title={name}
                    aria-label={name}
                    className="w-9 h-9 border border-white/15 bg-[#0A0A0A] text-[#C7C7C7] inline-flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="w-9 h-9 border border-white/30 bg-[#111111] text-white hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-[#666666] mt-2.5">
                {t.footer.socialNote}
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                    }}
                    className="text-[#888888] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`/services${cat.id === 'all' ? '' : `?cat=${cat.id}`}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(cat.id === 'all' ? '/services' : `/services?cat=${cat.id}`);
                    }}
                    className="text-[#888888] hover:text-white transition-colors"
                  >
                    {lang === 'ar' ? cat.labelAr : cat.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Direct Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.companyTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                    }}
                    className="text-[#888888] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white">
                {t.footer.connectTitle}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white text-black text-xs font-semibold hover:bg-[#E5E5E5] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="tabular-nums">{WHATSAPP_DISPLAY_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#888888]">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                navigate('/privacy');
              }}
              className="hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                navigate('/terms');
              }}
              className="hover:text-white transition-colors"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
