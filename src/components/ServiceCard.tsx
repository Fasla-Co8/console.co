import React from 'react';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getCategoryLabel, type ServiceItem } from '../data/services';
import { UI_COPY } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './Icons';

export function ServiceCard({ service }: { service: ServiceItem }) {
  const { lang, navigate } = useApp();
  const t = UI_COPY[lang].common;
  const title = lang === 'ar' ? service.titleAr : service.titleEn;
  const desc = lang === 'ar' ? service.shortDescAr : service.shortDescEn;
  const category = getCategoryLabel(service.category, lang);
  const waMsg = lang === 'ar' ? service.whatsappMsgAr : service.whatsappMsgEn;
  const waUrl = buildWhatsAppUrl(waMsg);
  const Arrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;

  return (
    <article className="group bg-[#0A0A0A] border border-white/12 hover:border-white/40 transition-colors duration-200 p-6 sm:p-7 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
          <span className="font-mono-tech text-xs text-white/80 tracking-widest">
            {service.number}
          </span>
          <span className="text-xs text-[#888888] truncate">{category}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-white leading-snug">
          <a
            href={`/services/${service.slug}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/services/${service.slug}`);
            }}
            className="hover:underline underline-offset-4 decoration-white/50"
          >
            {title}
          </a>
        </h3>

        <p className="text-sm text-[#C7C7C7] leading-relaxed">{desc}</p>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <a
          href={`/services/${service.slug}`}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/services/${service.slug}`);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#C7C7C7] transition-colors whitespace-nowrap"
        >
          <span>{t.viewDetails}</span>
          <Arrow className="w-3.5 h-3.5" />
        </a>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 border border-white/25 bg-[#111111] text-xs font-medium text-white hover:bg-white hover:text-black transition-colors whitespace-nowrap"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>{t.inquireWhatsapp}</span>
        </a>
      </div>
    </article>
  );
}
