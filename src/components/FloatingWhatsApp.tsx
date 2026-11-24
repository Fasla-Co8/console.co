import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_COPY } from '../data/siteData';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { WhatsAppIcon } from './Icons';

export function FloatingWhatsApp() {
  const { lang } = useApp();
  const url = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));
  const label = UI_COPY[lang].common.officialWhatsapp;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={`${label} (01201847164)`}
      className={`fixed bottom-5 z-40 h-12 px-4 bg-black/95 border border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-200 inline-flex items-center gap-2.5 shadow-[0_0_24px_rgba(255,255,255,0.12)] ${
        lang === 'ar' ? 'left-5' : 'right-5'
      }`}
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
        {UI_COPY[lang].nav.whatsapp}
      </span>
    </a>
  );
}
