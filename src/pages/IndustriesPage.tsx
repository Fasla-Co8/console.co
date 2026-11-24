import React from 'react';
import { useApp } from '../context/AppContext';
import { INDUSTRIES } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';

export function IndustriesPage() {
  const { lang, navigate } = useApp();

  return (
    <div className="bg-black text-white">
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>
              {lang === 'ar' ? 'القطاعات التي نخدمها (14 قطاعاً)' : 'Industries We Serve (14 Sectors)'}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'حلول تكنولوجية مصممة لطبيعة كل قطاع'
              : 'Sector-Tailored Software & Infrastructure Solutions'}
          </h1>
          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'تقدم Console هندسة برمجيات وبنية سحابية وأتمتة تتلاءم مع اللوائح وتدفقات العمل الخاصة بكل مجال عمل.'
              : 'Console adapts software architecture, integrations, security controls, and digital workflows to the concrete operational demands of each industry.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const name = lang === 'ar' ? ind.nameAr : ind.nameEn;
            const desc = lang === 'ar' ? ind.descAr : ind.descEn;
            const sols = lang === 'ar' ? ind.solutionsAr : ind.solutionsEn;
            const waMsg =
              lang === 'ar'
                ? `مرحباً فريق Console، نحن نعمل في قطاع ${name} ونرغب في مناقشة الحلول البرمجية والتقنية المناسبة لنشاطنا.`
                : `Hello Console Team, we operate in the ${name} sector and would like to discuss tailored software and technology solutions.`;

            return (
              <article
                key={ind.id}
                className="border border-white/12 bg-[#0A0A0A] p-7 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono-tech text-xs text-[#888888]">{ind.number}</span>
                    <span className="font-mono-tech text-xs text-white/60">{'{}'}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-white">{name}</h2>
                  <p className="text-sm text-[#C7C7C7] leading-relaxed">{desc}</p>
                  <ul className="pt-2 space-y-2">
                    {sols.map((s) => (
                      <li key={s} className="text-xs text-[#888888] flex items-start gap-2">
                        <span className="text-white">—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <a
                    href={buildWhatsAppUrl(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:underline underline-offset-4"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'استفسر عبر واتساب' : 'Discuss on WhatsApp'}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => navigate('/quote')}
                    className="text-xs text-[#888888] hover:text-white cursor-pointer"
                  >
                    {lang === 'ar' ? 'اطلب عرضاً' : 'Request Quote'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
