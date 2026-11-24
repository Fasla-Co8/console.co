import React from 'react';
import { useApp } from '../context/AppContext';
import { TECH_STACK } from '../data/siteData';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { ConsoleBracesSvg } from '../components/ConsoleEmblem';
import { WhatsAppIcon } from '../components/Icons';

export function TechnologyPage() {
  const { lang, navigate } = useApp();
  const waUrl = buildWhatsAppUrl(getGeneralWhatsAppMessage(lang));

  return (
    <div className="bg-black text-white">
      <section className="py-16 lg:py-20 border-b border-white/15 bg-[#050505] architectural-grid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs text-[#C7C7C7] uppercase tracking-wider">
            <ConsoleBracesSvg className="w-4 h-4 text-white" glow />
            <span>{lang === 'ar' ? 'المكدس التقني' : 'Technology Stack'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            {lang === 'ar'
              ? 'تقنيات حديثة مختارة بدقة لكل بيئة عمل'
              : 'Modern Technologies Selected Objectively for Each System'}
          </h1>
          <p className="text-base text-[#C7C7C7] max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'نختار الأدوات ولغات البرمجة وقواعد البيانات والمنصات السحابية بناءً على متطلبات الأداء والأمان والصيانة—مع إجراء تقييم جدوى تقني قبل اعتماد أي مسار متخصص مثل التعلم الآلي.'
              : 'Console selects languages, frameworks, databases, and cloud tools based on performance, security, and maintainability—and validates feasibility upfront for specialized R&D workloads.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((group, idx) => (
              <div
                key={group.id}
                className="border border-white/12 bg-[#0A0A0A] p-7 space-y-5"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono-tech text-xs text-[#888888]">
                    0{idx + 1}
                  </span>
                  <h2 className="font-display text-lg font-bold text-white">
                    {lang === 'ar' ? group.titleAr : group.titleEn}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-3 py-1.5 border-b border-white/5 last:border-b-0"
                    >
                      <span className="font-mono-tech text-sm font-semibold text-white shrink-0">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#888888] text-end">
                        {lang === 'ar' ? item.noteAr : item.noteEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border border-white/20 bg-[#050505] p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <p className="text-sm text-[#C7C7C7] max-w-2xl leading-relaxed">
              {lang === 'ar'
                ? 'ملاحظة هندسية: يعتمد اختيار التقنية النهائية على دراسة متطلبات المشروع. بعض المسارات المتخصصة مثل تدريب نماذج التعلم الآلي تخضع أولاً لتقييم الجدوى وتوفر البيانات.'
                : 'Engineering Note: Final stack selection depends on discovery and project requirements. Specialized capabilities such as custom machine learning training are scoped following an upfront data feasibility assessment.'}
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => navigate('/services/it-consulting')}
                className="h-11 px-5 border border-white/30 bg-black text-white text-xs font-semibold hover:border-white cursor-pointer"
              >
                {lang === 'ar' ? 'استشارات اختيار التقنية' : 'IT Consulting'}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 bg-white text-black text-xs font-bold inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{lang === 'ar' ? 'ناقش مكدسك التقني' : 'Discuss Your Stack'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
